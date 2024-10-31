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
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
const router = useRouter();
const placeholderNm = ref('');
const assignShow = ref(false);
const validataFlag = ref(true);
const gridGroupShow = ref(false);
const gridStoreShow = ref(true);
const dateType = ref('date');
const targetDayShow = ref(true);
const targetMonthShow = ref(false);
const targetYearShow = ref(false);
const largeShow = ref(true);
const middleShow = ref(false);
const smallShow = ref(false);
defineOptions({
  name: 'spq0517_01_3S',
});
const form = ref();
const viy2Flex_SgqAi = ref();
const queryForm = ref();
const viy2Panel_1qB4L = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_28hKZ = ref();
const viy2Radio_HQ4ST = ref();
const viy2DateTimePicker_1GTRddE = ref();
const viy2DateTimePicker_74AEeK = ref();
const viy2Radio_7cxUk1 = ref();
const viy2Select_7cxUkd = ref();
const viy2Radio_3KmPQS = ref();
const viy2Cascader_73Cugw = ref();
const viy2Flex_Sgypv = ref();
const viy2Panel_1r1DW = ref();
const viy2Button_5heur2 = ref();
const grid2 = ref();
const viy2Row_2Y3yKg = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateType: 'month', dateFrom: '', dateTo: '', searchType: 'consumer', datafieldviy2Select_m5rXO: [], productType: 'large', productDiff: [],
});
const rules = reactive({
  viy2Radio_7cxUk1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_7cxUkdRules: [
    {
      required: true,
      message: '入力してください。',
    },
  ],
});
const viy2Radio_HQ4STOpts = reactive([
  { value: 'day', label: '日' },
  { value: 'month', label: '月' },
  { value: 'year', label: '年' },
]);
const viy2Radio_7cxUk1Opts = reactive([
  { value: 'consumer', label: '販売店' },
  { value: 'groups', label: 'グルーブ' },
]);
const viy2Select_7cxUkdOpts = reactive([
  {
    label:
'member1',
    value:
'1',
  },
  {
    label:
'member2',
    value:
'2',
  },
  {
    label:
'member3',
    value:
'3',
  },
  {
    label:
'member4',
    value:
'4',
  },
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
const grid2EditConfig = reactive({
  trigger: 'click',
});
const grid2MouseConfig = reactive({
  extension: true,
});
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
const findSpartsMIListApi = useApi({
  url: '/parts/spq0502/findPartsMIList.json',
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
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const exportDsApi = useApi({
  url: '/parts/spq0502/doDownload.json',
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
      a.download = 'SPQ0502_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    findSpartsMIListApi.runAsync();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
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
const viy2Radio_7cxUk1Change = (value) => {
  if (value == 'consumer') {
    // 隐藏 表示タイプ、
    gridGroupShow.value = false;
    gridStoreShow.value = true;
  } else {
    gridGroupShow.value = true;
    gridStoreShow.value = false;
  }
}
;
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
const viy2Cascader_73CugwChange = (value) => {
  queryFormData.productType = '';
};
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const grid2GroupCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2GroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2SalesStoreCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2SalesStoreNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2LargeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2MiddleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2SmallEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2PcTypeNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2OrderLineFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2OrderLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2AllocateLineFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2AllocateLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2AllocateAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2AllocateAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2BoLineFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2BoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2BoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2BoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2CancelLineFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2CancelLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2AllocateRateFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2AllocateRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2ShipmentLineFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2ShipmentLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2ReturnLineFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2ReturnLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2OutWarehouseAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2OutWarehouseAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2OutWarehouseCostFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2OutWarehouseCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid2OutWarehouseProfitFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2OutWarehouseProfitEditRender = computed(() => {
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
  queryFormData.customerCd = '';
  queryFormData.targetMonth = currentMonth;
// queryFormData.dateFrom = firstDay;
// queryFormData.dateTo = lastDay;
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
      id="viy2Flex_SgqAi"
      ref="viy2Flex_SgqAi"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_1qB4L" ref="viy2Panel_1qB4L" :title="t('label.searchCondition')">
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
            id="viy2Row_28hKZ"
            ref="viy2Row_28hKZ"
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
                :label="t('label.searchType')"
                label-width="100px"
                prop="searchType"
                :rules="rules.viy2Radio_7cxUk1Rules"
                size="default"
              >
                <VueRadioGroup
                  id="viy2Radio_7cxUk1"
                  ref="viy2Radio_7cxUk1"
                  v-model="queryFormData.searchType"
                  radio-style="button"
                  direction="horizontal"
                  :split="false"
                  split-size="default"
                  @change="viy2Radio_7cxUk1Change"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_7cxUk1Opts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                label-width="10px"
                prop="datafieldviy2Select_m5rXO"
                :rules="rules.viy2Select_7cxUkdRules"
              >
                <VueSelect
                  id="viy2Select_7cxUkd"
                  ref="viy2Select_7cxUkd"
                  v-model="queryFormData.datafieldviy2Select_m5rXO"
                  :style="{ width: '200px' }"
                  :collapse-tags="true"
                  :multiple="true"
                  :filterable="true"
                  :placeholder="placeholderNm"
                  :collapse-tags-tooltip="true"
                  :options="viy2Select_7cxUkdOpts"
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
                  @change="viy2Cascader_73CugwChange"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_Sgypv"
        ref="viy2Flex_Sgypv"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_1r1DW" ref="viy2Panel_1r1DW" :title="t('label.detailInfo')" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
                {{ t('button.export') }}
              </VueButton>
            </div>
          </template>
          <VueTable id="grid2" ref="grid2" header-align="center" :show-footer="true" height="auto" :data="findSpartsMIList" :edit-config="grid2EditConfig" :mouse-config="grid2MouseConfig">
            <VueRow
              id="viy2Row_2Y3yKg"
              ref="viy2Row_2Y3yKg"
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
              :title="t('label.seqNo')"
            />
            <VueInputColumn
              :edit-render="grid2GroupCodeEditRender"
              field="groupCode"
              show-overflow="tooltip"
              :visible="gridGroupShow"
              title="グルーブ"
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2GroupNmEditRender"
              field="groupNm"
              show-overflow="tooltip"
              :visible="gridGroupShow"
              title="グルーブ名"
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2SalesStoreCodeEditRender"
              field="salesStoreCode"
              show-overflow="tooltip"
              :sortable="true"
              :visible="gridStoreShow"
              :title="t('label.salesStore')"
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2SalesStoreNmEditRender"
              field="salesStoreNm"
              show-overflow="tooltip"
              :sortable="true"
              :visible="gridStoreShow"
              :title="t('label.salesStoreNm')"
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2LargeEditRender"
              field="large"
              show-overflow="tooltip"
              :sortable="true"
              footer-align="right"
              :visible="largeShow"
              title="大"
              width="50px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2MiddleEditRender"
              field="middle"
              show-overflow="tooltip"
              :sortable="true"
              footer-align="right"
              :visible="middleShow"
              title="中"
              width="50px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2SmallEditRender"
              field="small"
              show-overflow="tooltip"
              :sortable="true"
              footer-align="right"
              :visible="smallShow"
              title="小"
              width="50px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2PcTypeNmEditRender"
              field="pcTypeNm"
              show-overflow="tooltip"
              :sortable="true"
              :aggregate-label="t('label.total')"
              footer-align="right"
              title="区分名称"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2OrderLineFormatter"
              :edit-render="grid2OrderLineEditRender"
              field="orderLine"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              :title="t('label.salesOrderLines')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2AllocateLineFormatter"
              :edit-render="grid2AllocateLineEditRender"
              field="allocateLine"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="引当行数"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2AllocateAmtFormatter"
              :edit-render="grid2AllocateAmtEditRender"
              field="allocateAmt"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="引当金額"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2BoLineFormatter"
              :edit-render="grid2BoLineEditRender"
              field="boLine"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="BO行数"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2BoAmtFormatter"
              :edit-render="grid2BoAmtEditRender"
              field="boAmt"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="BO金額"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2CancelLineFormatter"
              :edit-render="grid2CancelLineEditRender"
              field="cancelLine"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              :title="t('label.cancelLines')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2AllocateRateFormatter"
              :edit-render="grid2AllocateRateEditRender"
              field="allocateRate"
              align="right"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="引当率(%)"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2ShipmentLineFormatter"
              :edit-render="grid2ShipmentLineEditRender"
              field="shipmentLine"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="出荷行数"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2ReturnLineFormatter"
              :edit-render="grid2ReturnLineEditRender"
              field="returnLine"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="返品行数"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2OutWarehouseAmtFormatter"
              :edit-render="grid2OutWarehouseAmtEditRender"
              field="outWarehouseAmt"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="出荷金額"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2OutWarehouseCostFormatter"
              :edit-render="grid2OutWarehouseCostEditRender"
              field="outWarehouseCost"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="出荷原価"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2OutWarehouseProfitFormatter"
              :edit-render="grid2OutWarehouseProfitEditRender"
              field="outWarehouseProfit"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="出荷粗利"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
