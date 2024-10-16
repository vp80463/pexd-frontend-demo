<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { isEmpty, isEqual } from 'lodash-es';
import Exceljs from 'exceljs';
import { useApi } from '@/composables/useApi';
const { importInfo } = defineProps({
  importInfo: Object,
});
const emit = defineEmits(['transferringData']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const stepActive = ref(1);
const tableData = ref({});
const titleJsonList = ref([]);
const templateJson = ref([]);
const fileLoadApiUrl = ref();
const fileSaveApiUrl = ref();
const fileRedownloadApiUrll = ref();
const startRow = ref(2);
const startSheet = ref(1);
const remarks = ref();
const rowsNum = ref(0);
const backgroundSaveFlag = ref();
const fileRows = ref(0);
const checkFromData = ref();
const programId = ref();
if (importInfo.programid) {
  programId.value = importInfo.programid;
}
const templateName = ref();
if (importInfo.templatename) {
  templateName.value = importInfo.templatename;
}
const downFileNameFromPage = ref();
if (importInfo.downloadfilename) {
  downFileNameFromPage.value = importInfo.downloadfilename;
}
const saveWarningMsg = ref();
if (importInfo.savewarningmsg) {
  saveWarningMsg.value = importInfo.savewarningmsg;
}
const otherProperty = ref();
if (importInfo.otherproperty) {
  otherProperty.value = importInfo.otherproperty;
}
const importFileType = ref();
if (importInfo.importfiletype) {
  importFileType.value = importInfo.importfiletype;
}
onMounted(() => {
  importFileInitialSrcApi.runAsync();
});
defineOptions({
  name: 'fileImport',
});
const form = ref();
const viy2Form_3lWNK = ref();
const formData = reactive({
});
const viy2Form_3lWNKData = reactive({
});
const downloadFileSrcApi = useApi({
  url: '/common/fileImport/templateDownload.json',
  method: 'post',
  data: () => {
    const param = { programId: programId.value, templateName: templateName.value };
    return param;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (downFileNameFromPage.value !== null && downFileNameFromPage.value !== '' && downFileNameFromPage.value !== undefined) {
      VueUtil.saveAs(data, downFileNameFromPage.value);
    } else {
      VueUtil.saveAs(data, templateName.value);
    }
  },
  manual: true,
});
const downloadFileSrc = downloadFileSrcApi.data;
const importFileInitialSrcApi = useApi({
  url: '/common/fileImport/importFileInitial.json',
  method: 'post',
  data: () => {
    return {
      programId: programId.value,
      templateName: templateName.value,
      importFileType: importFileType.value,
    };
  },
  responseType: 'json',
}, {
  onSuccess: (data, params) => {
    templateName.value = data.templateName;
    fileLoadApiUrl.value = data.fileLoadApiUrl;
    fileSaveApiUrl.value = data.fileSaveApiUrl;
    fileRedownloadApiUrll.value = data.fileRedownloadApiUrl;
    startRow.value = data.startRow;
    startSheet.value = data.startSheet;
    templateJson.value = data.templateJson;
    titleJsonList.value = data.titleJsonList;
    remarks.value = data.remarks;
    backgroundSaveFlag.value = data.backgroundSaveFlag;
    fileRows.value = data.fileRows;
    importFileType.value = data.importFileType;
  },
  manual: true,
});
const importFileInitialSrc = importFileInitialSrcApi.data;
const templateDownloadClick = () => {
  downloadFileSrcApi.runAsync();
};
// 检查文件格式是否正确
const checkFileFormat = (fileFormat, expectedFormat) => {
  if (!isEqual(fileFormat, expectedFormat)) {
    VueNotification({
      title: 'Error',
      message: t('M.E.10400'),
      type: 'error',
      position: 'center-center',
    });
    return false;
  }
  return true;
};
// 验证 Excel 和 TXT 文件所需的参数
const validateParams = () => {
  if (startRow.value === null || startRow.value === '' || startRow.value === undefined) {
    VueNotification({
      title: 'Error',
      message: t('M.E.10404'),
      type: 'error',
      position: 'center-center',
    });
    return false;
  }
  if (importFileType.value === 'xlsx') {
    if (startSheet.value === null || startSheet.value === '' || startSheet.value === undefined) {
      VueNotification({
        title: 'Error',
        message: t('M.E.10404'),
        type: 'error',
        position: 'center-center',
      });
      return false;
    }
  }
  return true;
};
// 处理数字排序
const sortKeysByTemplate = (template) => {
  const keys = Object.keys(template);
  return keys.sort((a, b) => template[a] - template[b]);
};
// 将行数据转换为导入列表
const mapRowsToImportList = (rows, sortedKeys) => {
  return rows.filter(row => row.length > 0).map((row) => {
    const rowData = {};
    if (isEqual(importFileType.value, 'txt')) {
      row.forEach((value, index) => {
        rowData[sortedKeys[index]] = value;
      });
    } else {
      row.forEach((value, index) => {
        rowData[sortedKeys[index - 1]] = value;
      });
    }
    return rowData;
  });
};
// 处理文件加载完成后的操作
const handleFileLoaded = async (file, format) => {
  if (!validateParams()) {
    return;
  }
  let importList;
  if (format === 'xlsx') {
    debugger;
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.load(file.raw);
    const firstWorksheet = workbook.getWorksheet(startSheet.value);
    // 获取原始数据
    const sheetData = firstWorksheet.getSheetValues();
    // 处理富文本
    for (let rowIndex = 1; rowIndex < sheetData.length; rowIndex++) {
      const row = sheetData[rowIndex];
      if (!row) {
        continue;
      }
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const cell = row[colIndex];
        if (cell && cell.richText) {
          // 将富文本合并为字符串
          let richText = '';
          for (const part of cell.richText) {
            richText += part.text;
          }
          row[colIndex] = richText;
        }
        // 修改超链接
        if (cell && cell.text) {
          row[colIndex] = cell.text;
        }
      }
    }
    if (sheetData.length > (fileRows.value + 1)) {
      VueNotification({
        title: 'Error',
        message: t('M.E.10405'),
        type: 'error',
        position: 'center-center',
      });
      return;
    }
    const sortedKeys = sortKeysByTemplate(templateJson.value);
    const rows = sheetData.slice(startRow.value);
    importList = mapRowsToImportList(rows, sortedKeys);
  } else if (format === 'txt') {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target.result;
      const lines = content.split(/\r?\n/).filter(line => line.trim() !== '');
      const list = lines.map(line => line.split(','));
      const sortedKeys = sortKeysByTemplate(templateJson.value);
      const rows = list.slice(startRow.value);
      importList = mapRowsToImportList(rows, sortedKeys);
    };
    reader.readAsText(file.raw);
  }
  if (importList && importList.length > 0) {
    await processImportList(importList);
  } else {
    VueNotification({
      title: 'Error',
      message: t('M.E.10401'),
      type: 'error',
      position: 'center-center',
    });
  }
};
const processImportList = async (importList) => {
  const fileCheckApi = useApi({
    url: fileLoadApiUrl.value,
    method: 'post',
    data: () => ({
      importList,
      otherProperty: otherProperty.value,
    }),
  }, {
    onSuccess: (data, params) => {
      checkFromData.value = data;
      const result = data.importList;
      if (result.length > 0) {
        stepActive.value = 2;
        tableData.value = result;
        result.forEach((row) => {
          ['error', 'warning'].forEach((type) => {
            if (row[type]) {
              row[type] = row[type].map((message, idx) => {
                const params = row[`${type}Param`] ? row[`${type}Param`][idx] : null;
                return t(message, params);
              });
            }
          });
        });
        VueNotification({
          title: 'Success',
          message: t('M.S.00000'),
          type: 'success',
          position: 'top-center',
        });
      }
    },
    onError: (e, params) => {
      VueNotification({
        title: 'Error',
        message: t('M.E.10406'),
        type: 'error',
        position: 'center-center',
      });
    },
  });
};
const importBtnChange = async (file) => {
  if (file.status === 'ready') {
    const fileFormat = file.name.split('.').pop();
    if (isEqual(importFileType.value, 'xlsx')) {
      if (!checkFileFormat(fileFormat, 'xlsx')) {
        return;
      }
      await handleFileLoaded(file, 'xlsx');
    } else if (isEqual(importFileType.value, 'txt')) {
      if (!checkFileFormat(fileFormat, 'txt')) {
        return;
      }
      await handleFileLoaded(file, 'txt');
    }
  }
};
const onCancel = () => {
  stepActive.value = 1;
  tableData.value = [];
};
const onSave = () => {
  const importList = tableData.value;
  let errorFlag = false;
  let warningFlag = false;
  const warningMsgSet = new Set();
  for (let i = 0; i < importList.length; i++) {
    if (importList[i].warning) {
      if (importList[i].warning.length > 0) {
        warningFlag = true;
        importList[i].warning.forEach((item) => {
          warningMsgSet.add(item);
        });
      }
    }
    if (importList[i].error) {
      if (importList[i].error.length > 0) {
        errorFlag = true;
      }
    }
  }
  if (errorFlag) {
    VueNotification({
      title: 'Error',
      message: t('M.E.10407'),
      type: 'error',
      position: 'center-center',
    });
  } else {
    if (warningFlag) {
      let warningMsg = '';
      if (!isEmpty(saveWarningMsg.value)) {
        warningMsg = saveWarningMsg.value;
      } else {
        warningMsg = Array.from(warningMsgSet).join(',');
      }
      VueMessageBox.confirm(warningMsg, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          const fileImportApi = useApi({
            url: fileSaveApiUrl.value,
            method: 'post',
            data: () => {
              const data = {
                importList,
                otherProperty: otherProperty.value,
              };
              return data;
            },
          }, {
            onSuccess: (data, params) => {
              stepActive.value = 3;
              rowsNum.value = importList.length;
            },
          });
        });
    } else {
      const fileImportApi = useApi({
        url: fileSaveApiUrl.value,
        method: 'post',
        data: () => {
          const data = {
            importList,
            otherProperty: otherProperty.value,
          };
          return data;
        },
      }, {
        onSuccess: (data, params) => {
          stepActive.value = 3;
          rowsNum.value = importList.length;
        },
      });
    }
  }
};
const onClose = () => {
  const closeButton = document.querySelector('.vue-icon.vue-dialog__close');
  if (closeButton) {
    closeButton.click();
  }
  stepActive.value = 1;
};
const onRedownLoad = () => {
  const redownLoadApi = useApi(
    {
      url: fileRedownloadApiUrll.value,
      method: 'post',
      responseType: 'blob',
      data: () => {
        const param = {
          importList: tableData.value,
          otherProperty: otherProperty.value,
        };
        return param;
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        if (downFileNameFromPage.value !== null && downFileNameFromPage.value !== '' && downFileNameFromPage.value !== undefined) {
          VueUtil.saveAs(data, `Verify_${downFileNameFromPage.value}`);
        } else {
          VueUtil.saveAs(data, `Verify_${templateName.value}`);
        }
      },
    },
  );
};
const onSaveToPage = () => {
  const importList = tableData.value;
  let errorFlag = false;
  let warningFlag = false;
  const warningMsgSet = new Set();
  for (let i = 0; i < importList.length; i++) {
    if (importList[i].warning) {
      if (importList[i].warning.length > 0) {
        warningFlag = true;
        importList[i].warning.forEach((item) => {
          warningMsgSet.add(item);
        });
      }
    }
    if (importList[i].error) {
      if (importList[i].error.length > 0) {
        errorFlag = true;
      }
    }
  }
  if (errorFlag) {
    VueNotification({
      title: 'Error',
      message: t('M.E.10407'),
      type: 'error',
      position: 'center-center',
    });
  } else {
    if (warningFlag) {
      let warningMsg = '';
      if (!isEmpty(saveWarningMsg.value)) {
        warningMsg = saveWarningMsg.value;
      } else {
        warningMsg = Array.from(warningMsgSet).join(',');
      }
      VueMessageBox.confirm(warningMsg, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          stepActive.value = 1;
          emit('transferringData', checkFromData.value);
        });
    } else {
      stepActive.value = 1;
      emit('transferringData', checkFromData.value);
    }
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueForm
      id="viy2Form_3lWNK"
      ref="viy2Form_3lWNK"
      :model="viy2Form_3lWNKData"
    >
      <!-- BEGIN CUSTOM DIV CODE -->
      <VueRow v-if="backgroundSaveFlag === 'Y'">
        <VueCol :span="24">
          <VueSteps :align-center="true" :active="stepActive" finish-status="success">
            <VueStep :title="t('label.import')" />
            <VueStep :title="t('label.preview')" />
            <VueStep :title="t('label.confirm')" />
          </VueSteps>
        </VueCol>
      </VueRow>
      <VueRow v-if="backgroundSaveFlag === 'N'">
        <VueCol :span="24">
          <VueSteps :align-center="true" :active="stepActive" finish-status="success">
            <VueStep :title="t('label.import')" />
            <VueStep :title="t('label.previewAndConfirm')" />
          </VueSteps>
        </VueCol>
      </VueRow>
      <VueRow style="height:250px;">
        <VueCol v-if="stepActive === 1" :span="24" style="height:100%; text-align:center;">
          <VueUpload style="width:100%; height: 100%;" drag :on-change="importBtnChange" multiple :auto-upload="false" :show-file-list="false">
            <VueIcon class="vue-icon--upload" style="height: 108px;" size="120">
              <IconUploadFilled />
            </VueIcon>
            <div class="vue-upload__text" style="margin-bottom: 18px;">
              <span style="font-size: larger;"> {{ t('label.dropFileHere') }} <em>{{ t('label.clickToUpload') }}</em></span>
            </div>
          </VueUpload>
        </VueCol>
        <VueCol v-if="stepActive === 2" :span="24" style="height:100%;text-align:center;">
          <VueTable id="importTable" ref="importTable" :data="tableData" border show-overflow height="250" :scroll-y="{ enabled: true, gt: 0 }">
            <VueColumn v-for="(item, item_index) in titleJsonList" :key="item_index" width="160" :field="item.key" :title="item.value" show-header-overflow show-overflow sortable />
          </VueTable>
        </VueCol>
        <VueCol v-if="stepActive === 3" :span="24" style="height:100%; text-align:center;">
          <div style="width:100%; height:100%;">
            <VueIcon size="80" color="rgb(103 194 58)" style="margin-top: 30px">
              <IconCircleCheck />
            </VueIcon>
            <div style="font-size:16px !important;margin-top:8px;line-height:1.5;">
              {{ t('label.successfullyImported') }} {{ rowsNum }} {{ t('label.piceOfData') }}
            </div>
          </div>
        </VueCol>
      </VueRow>
      <VueRow>
        <VueCol :span="24" style="margin-top:8px;">
          <i class="a1tms-icon-warning" style="font-size:14px !important;font-weight: bold;">{{ t('label.importFollowing') }}</i>
          <div style="font-size:12px !important;margin-left:14px;margin-top:2px;line-height:1.5;" v-html="remarks" />
        </VueCol>
      </VueRow>
      <VueRow>
        <VueCol :span="24" style="margin-top:8px;height:30px;">
          <div v-if="importFileType === 'xlsx'" style="float:left;" class="templateDownload">
            <label style="cursor:pointer;" @click="templateDownloadClick">{{ t('button.templateDownload') }}</label>
          </div>
          <div v-if="stepActive === 2" style="float:right;">
            <vue-button class="cancelBtn" @click="onCancel">
              {{ t('button.previous') }}
            </vue-button>
            <vue-button class="redownLoadBtn" @click="onRedownLoad">
              {{ t('button.verifyFileDownload') }}
            </vue-button>
            <vue-button v-if="backgroundSaveFlag === 'Y'" class="saveBtn" @click="onSave">
              {{ t('button.save') }}
            </vue-button>
            <vue-button v-if="backgroundSaveFlag === 'N'" class="saveBtn" @click="onSaveToPage">
              {{ t('button.saveDataToPage') }}
            </vue-button>
          </div>
          <div v-if="stepActive === 3" style="float:right;">
            <vue-button class="saveBtn" @click="onCancel">
              {{ t('button.continueImport') }}
            </vue-button>
            <vue-button class="cancelBtn" @click="onClose">
              {{ t('button.close') }}
            </vue-button>
          </div>
        </VueCol>
      </VueRow>
      <!-- END CUSTOM DIV CODE -->
    </VueForm>
  </VueForm>
</template>

<style type="text/css" scoped>
.vue-step__head.is-finish {
border-color:#0AC171;
color:#0AC171;
}
.vue-step__title.is-finish {
color:#0AC171;
}
.vue-upload {
height:100%;
width:100%;
}
.vue-upload-dragger {
height:100%;
width:100%;
}
.importPage{
height:100%;
padding:0 8px;
width:100%;
}
.templateDownload {
border-bottom:1px solid #FF7300;
color:#FF7300;
}
.templateDownload:hover {
border-bottom:1px solid #FEA95E;
color:#FEA95E;
}
.cancelBtn {
background-color:#FF7300;
color:#FFFFFF;
}
.cancelBtn:hover {
background-color:#FEA95E;
color:#FFFFFF;
}
.saveBtn {
background-color:#0AC171;
color:#FFFFFF;
}
.saveBtn:hover {
background-color:#0CDA80;
color:#FFFFFF;
}
.vue-dialog__body {
padding: 18px 20px;
}
.vue-upload-list{
visibility: hidden;
}
.redownLoadBtn {
background-color:#31a6ea;
color:#FFFFFF;
}
.redownLoadBtn:hover {
background-color:#0da2f9;
color:#FFFFFF;
}
</style>
