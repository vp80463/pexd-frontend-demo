<script setup>
import { IconCloseBold, IconDelete, IconEdit, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'dim0205_01_new',
});
const form = ref();
const viy2Row_zgSti = ref();
const resetBtn = ref();
const addBtn = ref();
const viy2Flex_KSOAE = ref();
const viy2Flex_KSUbq = ref();
const grid = ref();
const viy2Row_6DdQFv = ref();
const addAside = ref();
const addRow = ref();
const addConfirm = ref();
const viy2Button_9CPsyW = ref();
const addForm = ref();
const viy2Row_9CPIpY = ref();
const addBinType = ref();
const addDescription = ref();
const addLength = ref();
const addWidth = ref();
const addHeight = ref();
const addVolume = ref();
const editAside = ref();
const viy2Row_60UMSm = ref();
const editConfirm = ref();
const viy2Button_60UMSz = ref();
const editForm = ref();
const viy2Row_60UMSB = ref();
const editBinType = ref();
const editDescription = ref();
const editLength = ref();
const editWidth = ref();
const editHeight = ref();
const editVolume = ref();
const formData = reactive({
});
const addFormData = reactive({
  binTypeCd: '', description: '', length: 0, width: 0, height: 0, volume: 0,
});
const editFormData = reactive({
  binTypeCd: '', description: '', length: 0, width: 0, height: 0, volume: 0,
});
const rules = reactive({
  addBinTypeRules: [
    {
      required: true,
      message: t('errors.required', [t('label.binType')]),
    },
  ],
  addDescriptionRules: [
    {
      required: true,
      message: t('errors.required', [t('label.description')]),
    },
  ],
  editDescriptionRules: [
    {
      required: true,
      message: t('errors.required', [t('label.description')]),
    },
  ],
});
const showAddWin = ref(false);
const showEditWin = ref(false);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_GDWleButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onEditWin,
    },
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRow,
      title: 'Delete',
    },
  ];
};
const gridDsApi = useApi({
  url: '/master/cmm0211/findBinTypeList.json',
  method: 'post',
});
const gridDs = gridDsApi.data;
const updateRowDsApi = useApi({
  url: '/master/cmm0211/updateRow.json',
  method: 'post',
  data: () => {
    return editFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    showEditWin.value = false;
  },
  manual: true,
});
const updateRowDs = updateRowDsApi.data;
const addRowDsApi = useApi({
  url: '/master/cmm0211/addRow.json',
  method: 'post',
  data: () => {
    return addFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    addForm.value.resetFields();
    showAddWin.value = false;
  },
  manual: true,
});
const addRowDs = addRowDsApi.data;
const deleteRowDsApi = useApi({
  url: '/master/cmm0211/deleteRow.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const deleteRowDs = deleteRowDsApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const addBtnClick = () => {
  onAddWin();
};
const gridBinTypeCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDescriptionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLengthEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridWidthEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridHeightEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridVolumeFormatter = ({ cellValue }) => {
  return VueUtil.formatNumber(Number(cellValue), { digits: 2 });
}; ;
const gridVolumeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const addAsideClosed = (params) => {
  gridDsApi.runAsync({});
};
const addConfirmClick = () => {
  addForm.value.validate((valid) => {
    if (valid) {
      addRowDsApi.runAsync();
    }
  });
};
const viy2Button_9CPsyWClick = () => {
  if (addFormData.action !== 'VIEW') {
    VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      showAddWin.value = false;
    });
  }
};
const addLengthChange = () => {
  calculateVolume(addFormData);
};
const addWidthChange = () => {
  calculateVolume(addFormData);
};
const addHeightChange = () => {
  calculateVolume(addFormData);
};
const editAsideClosed = (params) => {
  gridDsApi.runAsync({});
};
const editConfirmClick = () => {
  editForm.value.validate((valid) => {
    if (valid) {
      updateRowDsApi.runAsync();
    }
  });
};
const viy2Button_60UMSzClick = () => {
  if (addFormData.action !== 'VIEW') {
    VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      showEditWin.value = false;
    });
  }
};
const editLengthChange = () => {
  calculateVolume(editFormData);
};
const editWidthChange = () => {
  calculateVolume(editFormData);
};
const editHeightChange = () => {
  calculateVolume(editFormData);
};
onMounted(() => {
});
// 打开编辑侧边栏
const onEditWin = (row) => {
  showEditWin.value = true;
  editFormData.binTypeId = row.binTypeId;
  editFormData.binTypeCd = row.binTypeCd;
  editFormData.description = row.description;
  editFormData.length = row.length;
  editFormData.width = row.width;
  editFormData.height = row.height;
  editFormData.volume = row.volume;
};
// 打开新增侧边栏
const onAddWin = (row) => {
  showAddWin.value = true;
  resetAddFormElementData();
};
const resetAddFormElementData = () => {
  const addFormElement = addForm.value;
  if (addFormElement && addFormElement.resetFields) {
    addFormElement.resetFields();
  }
};
// 行删除
const onDelRow = (row) => {
  VueMessageBox.confirm(t('M.C.00103', [t('label.binType')]), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    deleteRowDsApi.runAsync({
      binTypeId: row.binTypeId,
    });
  }).catch(() => {
  });
};
const formatInteger = (value) => {
  if (!value) {
    return 0;
  } else {
    return value;
  }
};
const resetCondition = () => {
  gridDsApi.runAsync();
};
const calculateVolume = (form) => {
  const volume = (form.length * form.width * form.height) / 1000;
  form.volume = isNaN(volume) ? 0 : volume;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_zgSti"
      ref="viy2Row_zgSti"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        class="except-height-css"
        :md="{ span: 12 }"
      >
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning" @click="resetBtnClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        class="except-height-css"
        :md="{ span: 12 }"
      >
        <VueButton id="addBtn" ref="addBtn" icon-position="left" class="icon-button-width" @click="addBtnClick">
          {{ t('button.new') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_KSOAE"
      ref="viy2Flex_KSOAE"
      direction="column"
      class="full-height"
    >
      <VueFlex
        id="viy2Flex_KSUbq"
        ref="viy2Flex_KSUbq"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" class="margin-top-div0" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_6DdQFv"
            ref="viy2Row_6DdQFv"
            class="toolbar-row-width except-height-css"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            />
          </VueRow>
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridBinTypeCdEditRender"
            field="binTypeCd"
            show-overflow="tooltip"
            :title="t('label.binType')"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridDescriptionEditRender"
            field="description"
            show-overflow="tooltip"
            :title="t('label.description')"
            width="150px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridLengthEditRender"
            field="length"
            :title="t('label.length_mm')"
            width="150px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridWidthEditRender"
            field="width"
            :title="t('label.width_mm')"
            width="150px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridHeightEditRender"
            field="height"
            :title="t('label.height_mm')"
            width="150px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridVolumeFormatter"
            :edit-render="gridVolumeEditRender"
            field="volume"
            :title="t('label.volume_cm3')"
            width="150px"
            header-align="center"
          />
          <VueButtonColumn
            fixed="right"
            width="80px"
            :buttons="gridViy2TableButtonColumn_GDWleButtons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="addAside"
      ref="addAside"
      v-model="showAddWin"
      :modal="true"
      direction="rtl"
      size="35%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="false"
      @closed="addAsideClosed"
    >
      <VueRow
        id="addRow"
        ref="addRow"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          class="aside-title-row"
          :md="{ span: 16 }"
        >
          <VueText id="viy2Text_9CPsyU" ref="viy2Text_9CPsyU" class="aside-title-text">
            {{ t('label.binTypeMaintenanceDetail') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          class="aside-title-row"
          :md="{ span: 8 }"
        >
          <VueButton id="addConfirm" ref="addConfirm" icon-position="left" type="primary" class="aside-title-button" @click="addConfirmClick">
            {{ t('button.confirm') }}
          </VueButton>
          <VueButton id="viy2Button_9CPsyW" ref="viy2Button_9CPsyW" icon-position="left" size="large" type="text" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_9CPsyWClick" />
        </VueCol>
      </VueRow>
      <VueForm
        id="addForm"
        ref="addForm"
        class="margin-top-aside"
        :model="addFormData"
      >
        <VueRow
          id="viy2Row_9CPIpY"
          ref="viy2Row_9CPIpY"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.binType')"
              label-width="120"
              prop="binTypeCd"
              :rules="rules.addBinTypeRules"
            >
              <VueInput
                id="addBinType"
                ref="addBinType"
                v-model="addFormData.binTypeCd"
                text-align="left"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.description')"
              label-width="120"
              prop="description"
              :rules="rules.addDescriptionRules"
            >
              <VueInput
                id="addDescription"
                ref="addDescription"
                v-model="addFormData.description"
                text-align="left"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.length_mm')"
              label-width="120"
              prop="length"
            >
              <VueInputNumber
                id="addLength"
                ref="addLength"
                v-model="addFormData.length"
                :precision="0"
                :use-separator="true"
                text-align="right"
                :min="0"
                :style="{ width: '250px' }"
                @change="addLengthChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.width_mm')"
              label-width="120"
              prop="width"
            >
              <VueInputNumber
                id="addWidth"
                ref="addWidth"
                v-model="addFormData.width"
                :precision="0"
                :use-separator="true"
                text-align="right"
                :min="0"
                :style="{ width: '250px' }"
                @change="addWidthChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.height_mm')"
              label-width="120"
              prop="height"
            >
              <VueInputNumber
                id="addHeight"
                ref="addHeight"
                v-model="addFormData.height"
                :precision="0"
                :use-separator="true"
                text-align="right"
                :min="0"
                :style="{ width: '250px' }"
                @change="addHeightChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.volume_cm3')"
              label-width="120"
              prop="volume"
            >
              <VueInputNumber
                id="addVolume"
                ref="addVolume"
                v-model="addFormData.volume"
                text-align="right"
                :disabled="true"
                :precision="2"
                :use-separator="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VueAside>
    <VueAside
      id="editAside"
      ref="editAside"
      v-model="showEditWin"
      :modal="true"
      direction="rtl"
      size="40%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="false"
      @closed="editAsideClosed"
    >
      <VueRow
        id="viy2Row_60UMSm"
        ref="viy2Row_60UMSm"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          class="aside-title-row"
          :md="{ span: 16 }"
        >
          <VueText id="viy2Text_60UMSn" ref="viy2Text_60UMSn" class="aside-title-text">
            {{ t('label.binTypeMaintenanceDetail') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          class="aside-title-row"
          :md="{ span: 8 }"
        >
          <VueButton id="editConfirm" ref="editConfirm" icon-position="left" type="primary" class="aside-title-button" @click="editConfirmClick">
            {{ t('button.confirm') }}
          </VueButton>
          <VueButton id="viy2Button_60UMSz" ref="viy2Button_60UMSz" icon-position="left" size="large" type="text" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_60UMSzClick" />
        </VueCol>
      </VueRow>
      <VueForm
        id="editForm"
        ref="editForm"
        class="margin-top-aside"
        :model="editFormData"
      >
        <VueRow
          id="viy2Row_60UMSB"
          ref="viy2Row_60UMSB"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.binType')"
              label-width="120"
              prop="binTypeCd"
            >
              <VueInput
                id="editBinType"
                ref="editBinType"
                v-model="editFormData.binTypeCd"
                :disabled="true"
                text-align="left"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.description')"
              label-width="120"
              prop="description"
              :rules="rules.editDescriptionRules"
            >
              <VueInput
                id="editDescription"
                ref="editDescription"
                v-model="editFormData.description"
                text-align="left"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.length_mm')"
              label-width="120"
              prop="length"
            >
              <VueInputNumber
                id="editLength"
                ref="editLength"
                v-model="editFormData.length"
                :precision="0"
                :use-separator="true"
                text-align="right"
                :style="{ width: '250px' }"
                @change="editLengthChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.width_mm')"
              label-width="120"
              prop="width"
            >
              <VueInputNumber
                id="editWidth"
                ref="editWidth"
                v-model="editFormData.width"
                :precision="0"
                :use-separator="true"
                text-align="right"
                :style="{ width: '250px' }"
                @change="editWidthChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.height_mm')"
              label-width="120"
              prop="height"
            >
              <VueInputNumber
                id="editHeight"
                ref="editHeight"
                v-model="editFormData.height"
                :precision="0"
                :use-separator="true"
                text-align="right"
                :style="{ width: '250px' }"
                @change="editHeightChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.volume_cm3')"
              label-width="120"
              prop="volume"
            >
              <VueInputNumber
                id="editVolume"
                ref="editVolume"
                v-model="editFormData.volume"
                text-align="right"
                :disabled="true"
                :precision="2"
                :use-separator="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VueAside>
  </VueForm>
</template>
