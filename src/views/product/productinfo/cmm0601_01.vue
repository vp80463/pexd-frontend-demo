<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const exportDisabledFlag = ref(true);
defineOptions({
  name: 'cmm0601_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const exportBtn = ref();
const retrieveBtn = ref();
const viy2Flex_VmMRH = ref();
const queryForm = ref();
const viy2Row_9fGmQ4 = ref();
const viy2InputBox_9fGmQf = ref();
const viy2InputBox_9fGmQi = ref();
const viy2Flex_VmRwF = ref();
const grid = ref();
const viy2Row_9fHaWd = ref();
const formData = reactive({
});
const queryFormData = reactive({
  serviceJob: '', serviceJobName: '',
});
const gridRules = {
  serviceJob: [{ required: true, message: 'name required' }],
  serviceJobName: [{ required: true, message: 'name required' }],
};
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const exportDsApi = useApi({
  url: '/master/cmm0601/exportServiceJobInformation.json',
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
      const fileName = `CMM0601_01_${timestamp}.xlsx`;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const retrieveDsApi = useApi({
  url: '/master/cmm0601/findServiceJobInquiryList.json',
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
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const exportBtnClick = () => {
  exportDsApi.runAsync();
};
const retrieveBtnClick = () => {
  retrieveDsApi.runAsync();
};
const gridServiceJobEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridServiceJobNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEnglishNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSalesNameEditRender = computed(() => {
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning" @click="resetBtnClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="exportBtn" ref="exportBtn" icon-position="left" :disabled="exportDisabledFlag" @click="exportBtnClick">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="retrieveBtn" ref="retrieveBtn" icon-position="left" type="info" @click="retrieveBtnClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_VmMRH"
      ref="viy2Flex_VmMRH"
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
          id="viy2Row_9fGmQ4"
          ref="viy2Row_9fGmQ4"
        >
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.serviceJob')"
              label-width="130px"
              prop="serviceJob"
            >
              <VueInput
                id="viy2InputBox_9fGmQf"
                ref="viy2InputBox_9fGmQf"
                v-model="queryFormData.serviceJob"
                :clearable="true"
                :maxlength="40"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.serviceJobName')"
              label-width="130px"
              prop="serviceJobName"
            >
              <VueInput
                id="viy2InputBox_9fGmQi"
                ref="viy2InputBox_9fGmQi"
                v-model="queryFormData.serviceJobName"
                :clearable="true"
                :maxlength="200"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          />
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_VmRwF"
        ref="viy2Flex_VmRwF"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" :data="retrieveDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_9fHaWd"
            ref="viy2Row_9fHaWd"
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
            fixed="left"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridServiceJobEditRender"
            field="serviceJob"
            :title="t('label.serviceJob')"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridServiceJobNameEditRender"
            field="serviceJobName"
            show-overflow="tooltip"
            :title="t('label.serviceJobName')"
            width="305px"
          />
          <VueInputColumn
            :edit-render="gridEnglishNameEditRender"
            field="englishName"
            show-overflow="tooltip"
            :title="t('label.englishName')"
            width="305px"
          />
          <VueInputColumn
            :edit-render="gridSalesNameEditRender"
            field="salesName"
            show-overflow="tooltip"
            :title="t('label.salesName')"
            width="305px"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
