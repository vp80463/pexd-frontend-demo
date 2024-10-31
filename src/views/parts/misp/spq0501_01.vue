<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { formatAmount } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const currentMonth = dayjs().format('YYYYMM');
const exportFlag = ref(true);
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
const validataFlag = ref(true);
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
const dateType = ref('date');
const targetDayShow = ref(true);
const targetMonthShow = ref(false);
const targetYearShow = ref(false);
const largeShow = ref(true);
const middleShow = ref(false);
const smallShow = ref(false);
defineOptions({
  name: 'spq0501_01',
});
const form = ref();
const viy2Flex_uF7QC = ref();
const queryForm = ref();
const viy2Panel_1bFXT = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_5liHpi = ref();
const viy2Row_1d3oa = ref();
const viy2Radio_HQ4ST = ref();
const viy2DateTimePicker_1GTRddE = ref();
const viy2DateTimePicker_74AEeK = ref();
const viy2Radio_3KmPQS = ref();
const viy2Cascader_73Cugw = ref();
const viy2Select_7zu8YI = ref();
const viy2Flex_eVSTe = ref();
const viy2Panel_x7ssG = ref();
const viy2Button_2gh3Ey = ref();
const viy2Tabs_elXw6 = ref();
const grid = ref();
const viy2Table_8XEr2t = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateType: 'month', dateFrom: '', dateTo: '', productType: 'large', productDiff: [], abcType: '',
});
const viy2Radio_HQ4STOpts = reactive([
  { value: 'day', label: '日' },
  { value: 'month', label: '月' },
  { value: 'year', label: '年' },
]);
const viy2Radio_3KmPQSOpts = reactive([
  { value: 'large', label: '大' },
  { value: 'middle', label: '中' },
  { value: 'small', label: '小' },
]);
const viy2Cascader_73CugwProps = reactive({
  checkStrictly: true,
  label: 'label',
  value: 'value',
});
const viy2Tabs_elXw6ActiveName = ref('viy2Tabs_elXw6Tab0');
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2Table_8XEr2tEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_8XEr2tMouseConfig = reactive({
  extension: true,
});
const middleGroupDsApi = useApi({
  url: '/common/helper/getMiddleGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const middleGroupDs = middleGroupDsApi.data;
const findSpartsMIListApi = useApi({
  url: '/parts/spq0501/findPartsMIList.json',
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
const findSpartsMIList = findSpartsMIListApi.data;
const pcTypeDsApi = useApi({
  method: 'post',
  localData: [
    {
      value: '0',
      label: 'Ｍ／Ｃ部品',
      children: [
        {
          value: '0',
          label: 'オートバイ',
          children: [
            {
              value: 'A4',
              label: 'モトクロス',
            },
            {
              value: 'A5',
              label: 'トライアル',
            },
          ],
        },
        {
          value: '4',
          label: 'スノーモービル、除雪機',
          children: [
            {
              value: 'G7',
              label: '小型除雪機',
            },
            {
              value: 'G8',
              label: 'トロ除雪機',
            },
          ],
        },
      ],
    },
    {
      value: '2',
      label: '特機',
      children: [
        {
          value: '9',
          label: 'ボート純正オプション',
          children: [
            {
              value: 'G1',
              label: '２．発電機',
            },
            {
              value: 'G2',
              label: '４．発電機',
            },
            {
              value: 'G3',
              label: 'Ｄ．発電機',
            },
          ],
        },
      ],
    },
  ],
});
const pcTypeDs = pcTypeDsApi.data;
const costUsageDsApi = useApi({
  url: '/common/helper/getCostUsageList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const costUsageDs = costUsageDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const exportDsApi = useApi({
  url: '/parts/spq0501/doDownload.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SPQ0501_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    findSpartsMIListApi.runAsync();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const dateTypeDsApi = useApi({
  method: 'post',
  localData: [
    { value: 'day', label: '日' },
    { value: 'month', label: '月' },
    { value: 'year', label: '年' },
  ],
});
const dateTypeDs = dateTypeDsApi.data;
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      findSpartsMIListApi.runAsync();
    }
  });
};
const viy2Button_5liHpiClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Radio_HQ4STChange = (value) => {
  if (value == 'day') {
    dateType.value = 'date';
    targetDayShow.value = true;
    targetMonthShow.value = false;
    targetYearShow.value = false;
  } else if (value == 'month') {
    dateType.value = 'month';
    targetDayShow.value = false;
    targetMonthShow.value = true;
    targetYearShow.value = false;
  } else if (value == 'year') {
    dateType.value = 'year';
    targetDayShow.value = false;
    targetMonthShow.value = false;
    targetYearShow.value = true;
  }
};
const viy2Radio_3KmPQSChange = (value) => {
  if (value == 'large') {
    largeShow.value = true;
    middleShow.value = false;
    smallShow.value = false;
  } else if (value == 'middle') {
    largeShow.value = true;
    middleShow.value = true;
    smallShow.value = false;
  } else {
    largeShow.value = true;
    middleShow.value = true;
    smallShow.value = true;
  }
}
;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const gridLargeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSmallEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProductDistinguishNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAbcTypeEditRender = computed(() => {
  return {
    enabled: false,
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
const gridAllocateLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridBoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCancelLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAllocateRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const gridAllocateRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridShipmentLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPoEoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPoEoRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const gridPoEoRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const gridPoRoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPoRoRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const gridPoRoRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const gridReceiptLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tLargeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_8XEr2tMiddleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_8XEr2tSmallEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_8XEr2tProductDistinguishNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_8XEr2tAbcTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_8XEr2tSoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tSoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tAllocatedAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tAllocatedAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tBoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tBoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tCancelAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tCancelAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tAllocateAmtRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8XEr2tAllocateAmtRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tShipmentAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tShipmentAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tReturnAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tReturnAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tPoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoEoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tPoEoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoEoAmtRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8XEr2tPoEoAmtRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoRoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tPoRoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoRoAmtRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8XEr2tPoRoAmtRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tReceiveAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tReceiveAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tSalesAndOutStoreAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tSalesAndOutStoreAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tSalesPlanRateFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tSalesPlanRateEditRender = computed(() => {
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
  queryFormData.dateStart = lastDay;
  queryFormData.dateEnd = lastDay;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
// 条件改变，清空明细
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
// Rate 格式转换
const percentFormat = (cellValue) => {
  return `${(cellValue * 100).toFixed(0)}%`;
};
// 清空条件部
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
  findSpartsMIList.value.splice(0);
  exportFlag.value = true;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_uF7QC"
      ref="viy2Flex_uF7QC"
      style="height:89vh;"
      direction="column"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_1bFXT" ref="viy2Panel_1bFXT" :title="t('label.searchCondition')">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
                {{ t('button.retrieve') }}
              </VueButton>
              <VueButton id="viy2Button_5liHpi" ref="viy2Button_5liHpi" icon-position="left" @click="viy2Button_5liHpiClick">
                {{ t('button.reset') }}
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_1d3oa"
            ref="viy2Row_1d3oa"
          >
            <VueCol
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                :label="t('label.targetDates')"
                prop="dateType"
              >
                <VueRadioGroup
                  id="viy2Radio_HQ4ST"
                  ref="viy2Radio_HQ4ST"
                  v-model="queryFormData.dateType"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                  @change="viy2Radio_HQ4STChange"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_HQ4STOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                label-width="10px"
                prop="dateFrom"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1GTRddE"
                  ref="viy2DateTimePicker_1GTRddE"
                  v-model="queryFormData.dateFrom"
                  :type="dateType"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span style="padding-left:10px;">
                -
              </span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="10px"
                prop="dateTo"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_74AEeK"
                  ref="viy2DateTimePicker_74AEeK"
                  v-model="queryFormData.dateTo"
                  :type="dateType"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.productDiff')"
                prop="productType"
              >
                <VueRadioGroup
                  id="viy2Radio_3KmPQS"
                  ref="viy2Radio_3KmPQS"
                  v-model="queryFormData.productType"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                  @change="viy2Radio_3KmPQSChange"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_3KmPQSOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                label-width="10px"
                prop="productDiff"
              >
                <VueCascader
                  id="viy2Cascader_73Cugw"
                  ref="viy2Cascader_73Cugw"
                  v-model="queryFormData.productDiff"
                  display-member="label"
                  value-member="value"
                  :filterable="true"
                  :style="{ width: '250px' }"
                  :options="pcTypeDs"
                  :props="viy2Cascader_73CugwProps"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.costUsage')"
                prop="abcType"
              >
                <VueSelect
                  id="viy2Select_7zu8YI"
                  ref="viy2Select_7zu8YI"
                  v-model="queryFormData.abcType"
                  :style="{ width: '150px' }"
                  :collapse-tags="true"
                  :collapse-tags-tooltip="true"
                  :clearable="true"
                  :options="costUsageDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeData1',
                  }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_eVSTe"
        ref="viy2Flex_eVSTe"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_x7ssG" ref="viy2Panel_x7ssG" :title="t('label.detailInfo')" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
                {{ t('button.export') }}
              </VueButton>
            </div>
          </template>
          <VueTabs
            id="viy2Tabs_elXw6"
            ref="viy2Tabs_elXw6"
            v-model="viy2Tabs_elXw6ActiveName"
            type="border-card" :style="{ height: '94%' }"
          >
            <VueTabPane
              name="viy2Tabs_elXw6Tab0"
              label="明細行"
            >
              <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="findSpartsMIList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
                <VueIndexColumn
                  align="center"
                  width="50px"
                  min-width="50px"
                  header-align="center"
                  :title="t('label.seqNo')"
                />
                <VueInputColumn
                  :edit-render="gridLargeEditRender"
                  field="large"
                  show-overflow="tooltip"
                  :sortable="true"
                  :visible="largeShow"
                  title="大"
                  width="50px"
                  header-align="center"
                />
                <VueInputColumn
                  :edit-render="gridMiddleEditRender"
                  field="middle"
                  show-overflow="tooltip"
                  :sortable="true"
                  :visible="middleShow"
                  title="中"
                  width="50px"
                  header-align="center"
                />
                <VueInputColumn
                  :edit-render="gridSmallEditRender"
                  field="small"
                  show-overflow="tooltip"
                  :sortable="true"
                  :visible="smallShow"
                  title="小"
                  width="50px"
                  header-align="center"
                />
                <VueInputColumn
                  :edit-render="gridProductDistinguishNmEditRender"
                  field="productDistinguishNm"
                  show-overflow="tooltip"
                  :sortable="true"
                  title="区分名称"
                  width="160px"
                  header-align="center"
                />
                <VueInputColumn
                  :edit-render="gridAbcTypeEditRender"
                  field="abcType"
                  show-overflow="tooltip"
                  :sortable="true"
                  :aggregate-label="t('label.total')"
                  footer-align="right"
                  :title="t('label.costUsage')"
                  width="160px"
                  header-align="center"
                />
                <VueNumberColumn
                  :edit-render="gridSoLineEditRender"
                  field="soLine"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.salesOrderLines')"
                  width="130px"
                  header-align="center"
                />
                <VueNumberColumn
                  :edit-render="gridAllocateLineEditRender"
                  field="allocateLine"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.allocatedLines')"
                  width="210px"
                  header-align="center"
                />
                <VueNumberColumn
                  :edit-render="gridBoLineEditRender"
                  field="boLine"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.backOrderLines')"
                  width="130px"
                  header-align="center"
                />
                <VueNumberColumn
                  :edit-render="gridCancelLineEditRender"
                  field="cancelLine"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.cancelLines')"
                  width="130px"
                  header-align="center"
                />
                <VueInputColumn
                  :formatter="gridAllocateRateFormatter"
                  :edit-render="gridAllocateRateEditRender"
                  field="allocateRate"
                  :sortable="true"
                  align="right"
                  :title="t('label.allocateRate')"
                  width="140px"
                  header-align="center"
                />
                <VueNumberColumn
                  :edit-render="gridShipmentLineEditRender"
                  field="shipmentLine"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.shipmentLine')"
                  width="150px"
                  header-align="center"
                />
                <VueNumberColumn
                  :edit-render="gridReturnLineEditRender"
                  field="returnLine"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.returnLines')"
                  width="140px"
                  header-align="center"
                />
                <VueNumberColumn
                  :edit-render="gridPoEoLineEditRender"
                  field="poEoLine"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.purchaseOrderEOLines')"
                  width="170px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="gridPoEoRateFormatter"
                  :edit-render="gridPoEoRateEditRender"
                  field="poEoRate"
                  align="right"
                  :precision="2"
                  :sortable="true"
                  :title="t('label.purchaseOrderEORate')"
                  width="175px"
                  header-align="center"
                />
                <VueNumberColumn
                  :edit-render="gridPoRoLineEditRender"
                  field="poRoLine"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.purchaseOrderROLines')"
                  width="190px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="gridPoRoRateFormatter"
                  :edit-render="gridPoRoRateEditRender"
                  field="poRoRate"
                  footer-align="right"
                  align="right"
                  :precision="2"
                  :sortable="true"
                  :title="t('label.purchaseOrderRORate')"
                  width="190px"
                  header-align="center"
                />
                <VueNumberColumn
                  :edit-render="gridReceiptLineEditRender"
                  field="receiptLine"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.receiptLines')"
                  width="150px"
                  header-align="center"
                />
              </VueTable>
            </VueTabPane>
            <VueTabPane
              name="viy2Tabs_elXw6Tab1"
              label="明細金額"
            >
              <VueTable id="viy2Table_8XEr2t" ref="viy2Table_8XEr2t" header-align="center" :show-footer="true" height="auto" :data="findSpartsMIList" :edit-config="viy2Table_8XEr2tEditConfig" :mouse-config="viy2Table_8XEr2tMouseConfig">
                <VueIndexColumn
                  align="center"
                  width="50px"
                  min-width="50px"
                  header-align="center"
                  :title="t('label.seqNo')"
                />
                <VueInputColumn
                  :edit-render="viy2Table_8XEr2tLargeEditRender"
                  field="large"
                  show-overflow="tooltip"
                  :sortable="true"
                  :visible="largeShow"
                  title="大"
                  width="50px"
                  header-align="center"
                />
                <VueInputColumn
                  :edit-render="viy2Table_8XEr2tMiddleEditRender"
                  field="middle"
                  show-overflow="tooltip"
                  :sortable="true"
                  :visible="middleShow"
                  title="中"
                  width="50px"
                  header-align="center"
                />
                <VueInputColumn
                  :edit-render="viy2Table_8XEr2tSmallEditRender"
                  field="small"
                  show-overflow="tooltip"
                  :sortable="true"
                  :visible="smallShow"
                  title="小"
                  width="50px"
                  header-align="center"
                />
                <VueInputColumn
                  :edit-render="viy2Table_8XEr2tProductDistinguishNmEditRender"
                  field="productDistinguishNm"
                  show-overflow="tooltip"
                  :sortable="true"
                  title="区分名称"
                  width="160px"
                  header-align="center"
                />
                <VueInputColumn
                  :edit-render="viy2Table_8XEr2tAbcTypeEditRender"
                  field="abcType"
                  show-overflow="tooltip"
                  :sortable="true"
                  :aggregate-label="t('label.total')"
                  footer-align="right"
                  :title="t('label.costUsage')"
                  width="160px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tSoAmtFormatter"
                  :edit-render="viy2Table_8XEr2tSoAmtEditRender"
                  field="soAmt"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.saleOrderAmount')"
                  width="170px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tAllocatedAmtFormatter"
                  :edit-render="viy2Table_8XEr2tAllocatedAmtEditRender"
                  field="allocatedAmt"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.allocatedAmount')"
                  width="160px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tBoAmtFormatter"
                  :edit-render="viy2Table_8XEr2tBoAmtEditRender"
                  field="boAmt"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.boAmount')"
                  width="140px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tCancelAmtFormatter"
                  :edit-render="viy2Table_8XEr2tCancelAmtEditRender"
                  field="cancelAmt"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.cancelAmount')"
                  width="140px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tAllocateAmtRateFormatter"
                  :edit-render="viy2Table_8XEr2tAllocateAmtRateEditRender"
                  field="allocateAmtRate"
                  footer-align="right"
                  align="right"
                  :precision="2"
                  :sortable="true"
                  :title="t('label.allocateRate')"
                  width="140px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tShipmentAmtFormatter"
                  :edit-render="viy2Table_8XEr2tShipmentAmtEditRender"
                  field="shipmentAmt"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.shipmentAmount')"
                  width="195px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tReturnAmtFormatter"
                  :edit-render="viy2Table_8XEr2tReturnAmtEditRender"
                  field="returnAmt"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.returnAmount')"
                  width="170px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tPoAmtFormatter"
                  :edit-render="viy2Table_8XEr2tPoAmtEditRender"
                  field="poAmt"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.purchaseAmount')"
                  width="170px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tPoEoAmtFormatter"
                  :edit-render="viy2Table_8XEr2tPoEoAmtEditRender"
                  field="poEoAmt"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.purchaseOrderEAmount')"
                  width="210px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tPoEoAmtRateFormatter"
                  :edit-render="viy2Table_8XEr2tPoEoAmtRateEditRender"
                  field="poEoAmtRate"
                  footer-align="right"
                  align="right"
                  :precision="2"
                  :sortable="true"
                  :title="t('label.purchaseOrderEORate')"
                  width="190px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tPoRoAmtFormatter"
                  :edit-render="viy2Table_8XEr2tPoRoAmtEditRender"
                  field="poRoAmt"
                  footer-align="right"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.purchaseOrderRAmount')"
                  width="220px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tPoRoAmtRateFormatter"
                  :edit-render="viy2Table_8XEr2tPoRoAmtRateEditRender"
                  field="poRoAmtRate"
                  footer-align="right"
                  align="right"
                  :precision="2"
                  :sortable="true"
                  :title="t('label.purchaseOrderRORate')"
                  width="190px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tReceiveAmtFormatter"
                  :edit-render="viy2Table_8XEr2tReceiveAmtEditRender"
                  field="receiveAmt"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  :title="t('label.receiptAmount')"
                  width="180px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tSalesAndOutStoreAmtFormatter"
                  :edit-render="viy2Table_8XEr2tSalesAndOutStoreAmtEditRender"
                  field="salesAndOutStoreAmt"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  title="売上＋出庫中金額"
                  width="180px"
                  header-align="center"
                />
                <VueNumberColumn
                  :formatter="viy2Table_8XEr2tSalesPlanRateFormatter"
                  :edit-render="viy2Table_8XEr2tSalesPlanRateEditRender"
                  field="salesPlanRate"
                  align="right"
                  aggregate="sum"
                  :sortable="true"
                  title="販売計画達成率仮"
                  width="180px"
                  header-align="center"
                />
              </VueTable>
            </VueTabPane>
          </VueTabs>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>

<style type="text/css" scoped>
::v-deep .vue-tabs__content{
height:100% !important;
padding: 0 !important;
}
::v-deep .vue-tab-pane{
height:100% !important;
}
</style>
