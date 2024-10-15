<script setup>
import { IconCloseBold, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import { customer_column, customer_pop_condition, customer_pop_query_method, customer_query_method } from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const currentMonth = dayjs().format('YYYYMM');
const exportFlag = ref(true);
defineOptions({
  name: 'spq0505_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5heur2 = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_SqOOF = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_L6xsi = ref();
const viy2ValueList_80ngBa = ref();
const viy2Row_3ZZloX = ref();
const viy2Button_3ZZlp9 = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_SqP77 = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetMonth: '', customerNm: '', pointId: '',
});
const rules = reactive({
  viy2DateTimePicker_L6xsiRules: [
    {
      required: true,
      message: t('errors.required', [t('label.targetMonth')]),
    },
  ],
  viy2ValueList_80ngBaRules: [
    {
      required: true,
      message: t('errors.required', [t('label.customer')]),
    },
  ],
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const viy2ValueList_80ngBaPopoverQueryMethod = customer_query_method;
const viy2ValueList_80ngBaPopupColumns = ref(customer_column);
const viy2ValueList_80ngBaPopupQueryMethod = customer_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const findPartsRetailPriceMIListApi = useApi({
  url: '/parts/spq0505/findPartsRetailPriceMIList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      exportFlag.value = false;
    }
  },
  manual: true,
});
const findPartsRetailPriceMIList = findPartsRetailPriceMIListApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const exportDsApi = useApi({
  url: '/parts/spq0505/doDownload.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SPQ0505_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    findPartsRetailPriceMIListApi.runAsync();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      findPartsRetailPriceMIListApi.runAsync();
    }
  });
};
const viy2ValueList_80ngBaSelect = (params) => {
  queryFormData.customerCd = params.code;
  queryFormData.customerNm = params.name;
};
const viy2ValueList_80ngBaClear = (params) => {
  queryFormData.customerNm = '';
  queryFormData.customerCd = '';
};
const viy2ValueList_80ngBaLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.customerCd = '';
  }
};
const viy2ValueList_80ngBaPopoverColumns = computed(() => {
  return customer_column;
});
const viy2ValueList_80ngBaPopupConditions = computed(() => {
  return customer_pop_condition;
});
const viy2Select_1rPSyEHChange = (value, data) => {
  queryFormData.pointCd = data.code;
};
const gridProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProductNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridStandardPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridComplianceLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
// 初始化targetMonth 和 point
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.targetMonth = currentMonth;
  queryFormData.customerCd = '';
});
// 条件改变，清空明细
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
  resetTblResults();
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.targetMonth = currentMonth;
};
const resetTblResults = () => {
  findPartsRetailPriceMIList.value.splice(0);
  exportFlag.value = true;
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
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_SqOOF"
      ref="viy2Flex_SqOOF"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_lOY8w"
          ref="viy2Row_lOY8w"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.targetMonth')"
              label-width="110px"
              prop="targetMonth"
              :rules="rules.viy2DateTimePicker_L6xsiRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_L6xsi"
                ref="viy2DateTimePicker_L6xsi"
                v-model="queryFormData.targetMonth"
                type="month"
                :style="{ width: '110px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ym"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ym"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.customer')"
              prop="customerNm"
              :rules="rules.viy2ValueList_80ngBaRules"
            >
              <VueValueList
                id="viy2ValueList_80ngBa"
                ref="viy2ValueList_80ngBa"
                :use-common-popover="true"
                v-model="queryFormData.customerNm"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
                select-field="name"
                :popover-width="500"
                :use-popup="true"
                width="250px"
                :popover-columns="viy2ValueList_80ngBaPopoverColumns"
                :popover-query-method="viy2ValueList_80ngBaPopoverQueryMethod"
                :popup-columns="viy2ValueList_80ngBaPopupColumns"
                :popup-conditions="viy2ValueList_80ngBaPopupConditions"
                :popup-query-method="viy2ValueList_80ngBaPopupQueryMethod"
                @select="viy2ValueList_80ngBaSelect"
                @clear="viy2ValueList_80ngBaClear"
                @leave="viy2ValueList_80ngBaLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_3ZZloX"
                    ref="viy2Row_3ZZloX"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_3ZZlp8" ref="viy2Text_3ZZlp8" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Model
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_3ZZlp9" ref="viy2Button_3ZZlp9" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
            <VueFormItem
              :label="t('label.point')"
              prop="pointId"
              :rules="rules.viy2Select_1rPSyEHRules"
            >
              <VueSelect
                id="viy2Select_1rPSyEH"
                ref="viy2Select_1rPSyEH"
                v-model="queryFormData.pointId"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_1rPSyEHChange"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_SqP77"
        ref="viy2Flex_SqP77"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="findPartsRetailPriceMIList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_soVPC"
            ref="viy2Row_soVPC"
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
            :edit-render="gridProductCdEditRender"
            field="productCd"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.partsNo')"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridProductNmEditRender"
            field="productNm"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.partsName')"
            width="200px"
          />
          <VueNumberColumn
            :edit-render="gridStandardPriceEditRender"
            field="standardPrice"
            align="right"
            aggregate-label="Total "
            :sortable="true"
            width="170px"
            :title="t('label.STDRetailPrice')"
          />
          <VueNumberColumn
            :edit-render="gridSoLineEditRender"
            field="soLine"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="130px"
            :title="t('label.salesLines')"
          />
          <VueNumberColumn
            :edit-render="gridComplianceLineEditRender"
            field="complianceLine"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="160px"
            :title="t('label.complianceLines')"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
