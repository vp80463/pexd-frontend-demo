<script setup>
import { IconCloseBold, IconDocument, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import detailPagePage from '/src/views/product/productinfo/cmm0402_02.vue';
import { faultCode_column, faultCode_query_method, section_column, section_query_method } from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const exportDisabledFlag = ref(true);
const asideParams = ref();
const gridDs = ref();
const visableFlag = ref(true);
if (uc.dealerCode !== 'YT35') {
  visableFlag.value = false;
}
defineOptions({
  name: 'cmm0402_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const confirmBtn = ref();
const viy2Button_2Himl4 = ref();
const viy2Button_4G4BCI = ref();
const viy2Button_2IkqVS = ref();
const viy2Flex_d64wB = ref();
const queryForm = ref();
const viy2Row_3enRrE = ref();
const viy2ValueList_3enRrF = ref();
const viy2Row_3enRrH = ref();
const viy2Button_3enRrG = ref();
const viy2ValueList_3enRrL = ref();
const viy2Row_3enRrN = ref();
const viy2Button_wgQCuf = ref();
const viy2Flex_d64Rx = ref();
const grid = ref();
const viy2Row_3eoq0U = ref();
const detailAside = ref();
const detailPage = ref();
const formData = reactive({
});
const queryFormData = reactive({
  sectionCode: '', faultSectionCode: '',
});
const rules = reactive({
  viy2ValueList_3enRrFRules: [
    {
      required: true,
      message: t('errors.required', [t('label.sectionCode')]),
    },
  ],
});
const showDetailAside = ref(false);
const viy2ValueList_3enRrFPopoverQueryMethod = section_query_method;
const viy2ValueList_3enRrLPopoverQueryMethod = faultCode_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_gR42iButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocument,
      click: showRowDetail,
      title: 'Detail',
    },
  ];
};
const retrieveDsApi = useApi({
  url: '/master/cmm0402/findSectionInfoInquiryList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (retrieveDs.value.length !== 0) {
      exportDisabledFlag.value = false;
    } else {
      exportDisabledFlag.value = true;
    }
  },
  manual: true,
});
const retrieveDs = retrieveDsApi.data;
const exportDsApi = useApi({
  url: '/master/cmm0402/exportSectionInfo.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      const timestamp = Date.now();
      const fileName = `CMM0402_01_${timestamp}.xlsx`;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const confirmBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_2Himl4Click = () => {
  exportDsApi.runAsync();
};
const viy2Button_4G4BCIClick = () => {
  showDetailAside.value = true;
  asideParams.value = {
    sectionId: '',
    sectionCd: '',
    sectionNm: '',
  };
};
const viy2Button_2IkqVSClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      retrieveDsApi.runAsync();
    }
  });
};
const viy2ValueList_3enRrFSelect = (params) => {
  queryFormData.sectionId = params.id;
  queryFormData.sectionCd = params.code;
  queryFormData.sectionNm = params.name;
};
const viy2ValueList_3enRrFClear = (params) => {
  queryFormData.sectionId = '';
  queryFormData.sectionCd = '';
  queryFormData.sectionNm = '';
};
const viy2ValueList_3enRrFLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.sectionId = '';
  }
};
const viy2ValueList_3enRrFPopoverColumns = computed(() => {
  return section_column;
});
const viy2ValueList_3enRrLSelect = (params) => {
  queryFormData.faultSectionId = params.id;
  queryFormData.faultSectionCd = params.code;
  queryFormData.faultSectionNm = params.name;
};
const viy2ValueList_3enRrLLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.faultSectionId = '';
  }
};
const viy2ValueList_3enRrLClear = (params) => {
  queryFormData.faultSectionId = '';
  queryFormData.faultSectionCd = '';
  queryFormData.faultSectionNm = '';
};
const viy2ValueList_3enRrLPopoverColumns = computed(() => {
  return faultCode_column;
});
const gridCellDblclick = (obj) => {
  linkDetail(obj.row);
};
const gridSectionCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSectionNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFaultSectionCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFaultSectionNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSectionIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  exportDisabledFlag.value = true;
  resetTblResults();
};
const resetTblResults = () => {
  retrieveDs.value.splice(0);
  exportDisabledFlag.value = true;
};
const showRowDetail = (row) => {
  showDetailAside.value = true;
  asideParams.value = {
    sectionId: row.sectionId,
    sectionCd: row.sectionCd,
    sectionNm: row.sectionNm,
  };
};
const linkDetail = (row) => {
  showDetailAside.value = true;
  asideParams.value = {
    sectionId: row.sectionId,
    sectionCd: row.sectionCd,
    sectionNm: row.sectionNm,
  };
};
const closeCmm040202 = () => {
  showDetailAside.value = false;
  retrieveDsApi.runAsync();
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_10QMyC"
      ref="viy2Row_10QMyC"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="warning" @click="confirmBtnClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="viy2Button_2Himl4" ref="viy2Button_2Himl4" icon-position="left" :disabled="exportDisabledFlag" @click="viy2Button_2Himl4Click">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton v-show="visableFlag" id="viy2Button_4G4BCI" ref="viy2Button_4G4BCI" icon-position="left" @click="viy2Button_4G4BCIClick">
          {{ t('button.new') }}
        </VueButton>
        <VueButton id="viy2Button_2IkqVS" ref="viy2Button_2IkqVS" icon-position="left" type="info" @click="viy2Button_2IkqVSClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_d64wB"
      ref="viy2Flex_d64wB"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="130px"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_3enRrE"
          ref="viy2Row_3enRrE"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.sectionCode')"
              prop="sectionCode"
              :rules="rules.viy2ValueList_3enRrFRules"
            >
              <VueValueList
                id="viy2ValueList_3enRrF"
                ref="viy2ValueList_3enRrF"
                :use-common-popover="true"
                v-model="queryFormData.sectionCode"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
                select-field="desc"
                :clearable="true"
                :popover-width="500"
                width="250px"
                :popover-columns="viy2ValueList_3enRrFPopoverColumns"
                :popover-query-method="viy2ValueList_3enRrFPopoverQueryMethod"
                @select="viy2ValueList_3enRrFSelect"
                @clear="viy2ValueList_3enRrFClear"
                @leave="viy2ValueList_3enRrFLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_3enRrH"
                    ref="viy2Row_3enRrH"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_3enRrI" ref="viy2Text_3enRrI" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Point
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_3enRrG" ref="viy2Button_3enRrG" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.faultSectionCode')"
              label-width="150px"
              prop="faultSectionCode"
            >
              <VueValueList
                id="viy2ValueList_3enRrL"
                ref="viy2ValueList_3enRrL"
                :use-common-popover="true"
                v-model="queryFormData.faultSectionCode"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
                select-field="desc"
                :clearable="true"
                :popover-width="500"
                width="250px"
                :popover-columns="viy2ValueList_3enRrLPopoverColumns"
                :popover-query-method="viy2ValueList_3enRrLPopoverQueryMethod"
                @select="viy2ValueList_3enRrLSelect"
                @leave="viy2ValueList_3enRrLLeave"
                @clear="viy2ValueList_3enRrLClear"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_3enRrN"
                    ref="viy2Row_3enRrN"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_wgQCue" ref="viy2Text_wgQCue" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Point
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_wgQCuf" ref="viy2Button_wgQCuf" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_d64Rx"
        ref="viy2Flex_d64Rx"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" :data="retrieveDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
          <VueRow
            id="viy2Row_3eoq0U"
            ref="viy2Row_3eoq0U"
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
            :edit-render="gridSectionCdEditRender"
            field="sectionCd"
            :title="t('label.sectionCode')"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridSectionNmEditRender"
            field="sectionNm"
            :title="t('label.sectionName')"
            width="250px"
          />
          <VueInputColumn
            :edit-render="gridFaultSectionCdEditRender"
            field="faultSectionCd"
            :title="t('label.faultSectionCode')"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridFaultSectionNmEditRender"
            field="faultSectionNm"
            :title="t('label.faultSectionName')"
            width="250px"
          />
          <VueButtonColumn
            align="center"
            fixed="right"
            width="40px"
            :buttons="gridViy2TableButtonColumn_gR42iButtons"
          />
          <VueInputColumn
            :edit-render="gridSectionIdEditRender"
            field="sectionId"
            :visible="false"
            title="sectionId"
            width="150px"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="detailAside"
      ref="detailAside"
      v-model="showDetailAside"
      :close-on-press-escape="true"
      direction="rtl"
      size="60%"
      :show-close="false"
      :close-on-click-modal="false"
      :with-header="false"
    >
      <detailPagePage
        id="detailPage"
        ref="detailPage"
        :init-data="asideParams"
        @select="callBackCmm040202"
        @close="closeCmm040202"
      />
    </VueAside>
  </VueForm>
</template>
