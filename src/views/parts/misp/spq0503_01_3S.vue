<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { formatAmount, formatCost } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const exportFlag = ref(true);
const currentMonth = dayjs().format('YYYYMM');
const validataFlag = ref(true);
const dateType = ref('date');
const targetDayShow = ref(true);
const targetMonthShow = ref(false);
const targetYearShow = ref(false);
const largeShow = ref(true);
const middleShow = ref(false);
const smallShow = ref(false);
defineOptions({
  name: 'spq0503_01_3S',
});
const form = ref();
const viy2Flex_SnI2z = ref();
const queryForm = ref();
const viy2Panel_1u52V = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_1ugDd = ref();
const viy2Radio_HQ4ST = ref();
const viy2DateTimePicker_1GTRddE = ref();
const viy2DateTimePicker_74AEeK = ref();
const viy2Select_a7sm3E = ref();
const viy2Radio_3KmPQS = ref();
const viy2Cascader_73Cugw = ref();
const viy2Flex_SnIn = ref();
const viy2Panel_1tSoI = ref();
const viy2Button_5heur2 = ref();
const viy2Table_8LUYu = ref();
const viy2Row_8LUYv4 = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateType: 'month', dateFrom: '', dateTo: '', salesStore: '', productType: 'large', productDiff: [],
});
const rules = reactive({
  viy2Select_a7sm3ERules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
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
const viy2Table_8LUYuEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_8LUYuMouseConfig = reactive({
  extension: true,
});
const exportDsApi = useApi({
  url: '/parts/spq0503/doDownload.json',
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
      a.download = 'SPQ0503_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    findSpartsMIListApi.runAsync();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const findSpartsMIListApi = useApi({
  url: '/parts/spq0503/findPartsMIList.json',
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
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const largeGroupDs = largeGroupDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      findSpartsMIListApi.runAsync();
    }
  });
};
const viy2Button_2gh3EyClick = () => {
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
const viy2Select_a7sm3EChange = (value, data) => {
  queryFormData.pointCd = data.code;
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
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const viy2Table_8LUYuPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_8LUYuPointNmEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const viy2Table_8LUYuLargeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const viy2Table_8LUYuMiddleEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const viy2Table_8LUYuSmallEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const viy2Table_8LUYuGroupTypeNmEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const viy2Table_8LUYuShipmentAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8LUYuShipmentAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuShipmentCostFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);
};
const viy2Table_8LUYuShipmentCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuReturnAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8LUYuReturnAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuReturnCostFormatter = (row, columnConfig, cellValue) => {
  return Number(row.cellValue).toFixed(2); ;
};
const viy2Table_8LUYuReturnCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuProfitEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuProfitRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8LUYuProfitRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuBoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8LUYuBoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuSoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuBoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuAllocateRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8LUYuAllocateRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuProfitPlanPlanRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8LUYuProfitPlanPlanRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuDisposalFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8LUYuDisposalEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuDisposal1Formatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8LUYuDisposal1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuDisposal2Formatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8LUYuDisposal2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8LUYuDisposal3Formatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8LUYuDisposal3EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
// 初始化targetMonth 和 point
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.targetMonth = currentMonth;
});
// 条件改变，清空明细
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
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
// Rate 格式转换
const percentFormat = (cellValue) => {
  return `${(cellValue * 100).toFixed(0)}%`;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_SnI2z"
      ref="viy2Flex_SnI2z"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_1u52V" ref="viy2Panel_1u52V" :title="t('label.searchCondition')">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
                {{ t('button.retrieve') }}
              </VueButton>
              <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
                {{ t('button.reset') }}
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_1ugDd"
            ref="viy2Row_1ugDd"
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
                label="受注先"
                label-width="100px"
                prop="salesStore"
                :rules="rules.viy2Select_a7sm3ERules"
              >
                <VueSelect
                  id="viy2Select_a7sm3E"
                  ref="viy2Select_a7sm3E"
                  v-model="queryFormData.salesStore"
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
                  @change="viy2Select_a7sm3EChange"
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
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_SnIn"
        ref="viy2Flex_SnIn"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_1tSoI" ref="viy2Panel_1tSoI" :title="t('label.detailInfo')" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
                {{ t('button.export') }}
              </VueButton>
            </div>
          </template>
          <VueTable id="viy2Table_8LUYu" ref="viy2Table_8LUYu" header-align="center" :show-footer="true" height="auto" :data="findSpartsMIList" :edit-config="viy2Table_8LUYuEditConfig" :mouse-config="viy2Table_8LUYuMouseConfig">
            <VueRow
              id="viy2Row_8LUYv4"
              ref="viy2Row_8LUYv4"
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
              title="No"
            />
            <VueInputColumn
              :edit-render="viy2Table_8LUYuPointCdEditRender"
              field="pointCd"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="viy2Table_8LUYuPointNmEditRender"
              field="pointNm"
              align="left"
              footer-align="right"
              :sortable="true"
              width="130px"
              title="受注先名称"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="viy2Table_8LUYuLargeEditRender"
              field="large"
              align="left"
              footer-align="right"
              :visible="largeShow"
              :sortable="true"
              width="50px"
              title="大"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="viy2Table_8LUYuMiddleEditRender"
              field="middle"
              align="left"
              footer-align="right"
              :visible="middleShow"
              :sortable="true"
              width="50px"
              title="中"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="viy2Table_8LUYuSmallEditRender"
              field="small"
              align="left"
              footer-align="right"
              :visible="smallShow"
              :sortable="true"
              width="50px"
              title="小"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="viy2Table_8LUYuGroupTypeNmEditRender"
              field="groupTypeNm"
              align="left"
              footer-align="right"
              :aggregate-label="t('label.total')"
              :sortable="true"
              width="130px"
              title="区分名称"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuShipmentAmtFormatter"
              :edit-render="viy2Table_8LUYuShipmentAmtEditRender"
              field="shipmentAmt"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              :title="t('label.salesAmount')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuShipmentCostFormatter"
              :edit-render="viy2Table_8LUYuShipmentCostEditRender"
              field="shipmentCost"
              align="right"
              aggregate="sum"
              :sortable="true"
              width="130px"
              :title="t('label.salesCost')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuReturnAmtFormatter"
              :edit-render="viy2Table_8LUYuReturnAmtEditRender"
              field="returnAmt"
              align="right"
              aggregate="sum"
              :sortable="true"
              width="150px"
              :title="t('label.returnAmount')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuReturnCostFormatter"
              :edit-render="viy2Table_8LUYuReturnCostEditRender"
              field="returnCost"
              align="right"
              aggregate="sum"
              footer-align="right"
              :precision="2"
              :sortable="true"
              width="130px"
              :title="t('label.returnCost')"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="viy2Table_8LUYuProfitEditRender"
              field="profit"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              :title="t('label.profit')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuProfitRateFormatter"
              :edit-render="viy2Table_8LUYuProfitRateEditRender"
              field="profitRate"
              align="right"
              footer-align="right"
              :sortable="true"
              width="130px"
              :title="t('label.profitRate')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuBoAmtFormatter"
              :edit-render="viy2Table_8LUYuBoAmtEditRender"
              field="boAmt"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              :title="t('label.boAmount')"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="viy2Table_8LUYuSoLineEditRender"
              field="soLine"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              :title="t('label.salesLines')"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="viy2Table_8LUYuBoLineEditRender"
              field="boLine"
              align="right"
              aggregate="sum"
              :sortable="true"
              width="130px"
              :title="t('label.backOrderLines')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuAllocateRateFormatter"
              :edit-render="viy2Table_8LUYuAllocateRateEditRender"
              field="allocateRate"
              align="right"
              :sortable="true"
              width="140px"
              :title="t('label.allocateRate')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuProfitPlanPlanRateFormatter"
              :edit-render="viy2Table_8LUYuProfitPlanPlanRateEditRender"
              field="profitPlanPlanRate"
              align="right"
              :sortable="true"
              width="140px"
              title="荒利計画達成率"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuDisposalFormatter"
              :edit-render="viy2Table_8LUYuDisposalEditRender"
              field="disposal"
              align="right"
              :sortable="true"
              width="140px"
              title="廃却"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuDisposal1Formatter"
              :edit-render="viy2Table_8LUYuDisposal1EditRender"
              field="disposal1"
              align="right"
              :sortable="true"
              width="140px"
              title="荒利計画差"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuDisposal2Formatter"
              :edit-render="viy2Table_8LUYuDisposal2EditRender"
              field="disposal2"
              align="right"
              :sortable="true"
              width="140px"
              title="荒利達成率"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8LUYuDisposal3Formatter"
              :edit-render="viy2Table_8LUYuDisposal3EditRender"
              field="disposal3"
              align="right"
              :sortable="true"
              width="140px"
              title="荒利伸長率"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
