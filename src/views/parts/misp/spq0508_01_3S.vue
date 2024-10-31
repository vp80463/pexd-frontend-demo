<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
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
const dateType = ref('date');
const targetDayShow = ref(true);
const targetMonthShow = ref(false);
const targetYearShow = ref(false);
const largeShow = ref(true);
const middleShow = ref(false);
const smallShow = ref(false);
defineOptions({
  name: 'spq0508_01_3S',
});
const form = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const viy2Panel_1GFuq = ref();
const viy2Button_6Eq86q = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_28hKZ = ref();
const viy2Radio_HQ4ST = ref();
const viy2DateTimePicker_1GTRddE = ref();
const viy2DateTimePicker_74AEeK = ref();
const viy2Radio_3KmPQS = ref();
const viy2Cascader_73Cugw = ref();
const viy2Flex_THsL1 = ref();
const viy2Panel_7m7hlM = ref();
const viy2Button_7m7hlO = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateType: 'month', dateFrom: '', dateTo: '', productType: 'large', productDiff: [],
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
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const largeGroupDsApi = useApi({
  url: '/common/helper/getSingleLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const largeGroupDs = largeGroupDsApi.data;
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
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const findStockAccountListApi = useApi({
  url: '/parts/spq0508/findStockAccountList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      exportFlag.value = false;
    }
  },
  manual: true,
});
const findStockAccountList = findStockAccountListApi.data;
const exportDsApi = useApi({
  url: '/parts/spq0508/doDownload01.json',
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
      a.download = 'SPQ0508_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    findStockAccountListApi.runAsync();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const viy2Button_6Eq86qClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      findStockAccountListApi.runAsync();
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
const viy2Button_7m7hlOClick = () => {
  onExport();
};
const gridCellDblclick = (row) => {
  skipToDetail(row);
};
const gridLargeFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridLargeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridMiddleFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridMiddleEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSmallFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSmallEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridLargeGroupCd5Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridLargeGroupCd5EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridInitMonthPriceFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridInitMonthPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReceiveFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridReceiveEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSalesCostFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSalesCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnCostFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridReturnCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAdjustmentPlusAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAdjustmentPlusAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAdjustmentMinusAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAdjustmentMinusAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCostMarginFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridCostMarginEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTheoryStorePriceFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridTheoryStorePriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridStockMonthFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridStockMonthEditRender = computed(() => {
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
  // queryFormData.dateFrom = firstDay;
  // queryFormData.dateTo = lastDay;
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
  findStockAccountList.value.splice(0);
  exportFlag.value = true;
};
const skipToDetail = (row) => {
  const query = {
    targetMonth: queryFormData.targetMonth,
    pointCd: queryFormData.pointCd,
    pointNm: queryFormData.point,
    largeGroupCd: queryFormData.largeGroupCd,
    largeGroupNm: queryFormData.largeGroupNm,
  };
  useMultiTags().openTag({
    name: 'spq0508_02', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spq0508_02' }).meta.title = t('menu.SPQ0508_02');
  // router导航到页面并传递参数
  router.push({ name: 'spq0508_02', data: query });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_SMXA1"
      ref="viy2Flex_SMXA1"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_1GFuq" ref="viy2Panel_1GFuq" :title="t('label.searchCondition')">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_6Eq86q" ref="viy2Button_6Eq86q" icon-position="left" type="info" @click="viy2Button_6Eq86qClick">
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
        id="viy2Flex_THsL1"
        ref="viy2Flex_THsL1"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_7m7hlM" ref="viy2Panel_7m7hlM" title="明細情報" collapse-icon-position="left" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_7m7hlO" ref="viy2Button_7m7hlO" :disabled="exportFlag" @click="viy2Button_7m7hlOClick">
                ファイル出力
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="findStockAccountList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
              :title="t('label.seqNo')"
            />
            <VueNumberColumn
              :formatter="gridLargeFormatter"
              :edit-render="gridLargeEditRender"
              field="large"
              align="right"
              footer-align="right"
              :visible="largeShow"
              :sortable="true"
              width="50px"
              title="大"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridMiddleFormatter"
              :edit-render="gridMiddleEditRender"
              field="middle"
              align="right"
              footer-align="right"
              :visible="middleShow"
              :sortable="true"
              width="50px"
              title="中"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridSmallFormatter"
              :edit-render="gridSmallEditRender"
              field="small"
              align="right"
              footer-align="right"
              :visible="smallShow"
              :sortable="true"
              width="50px"
              title="小"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridLargeGroupCd5Formatter"
              :edit-render="gridLargeGroupCd5EditRender"
              field="largeGroupCd5"
              align="right"
              footer-align="right"
              :aggregate-label="t('label.total')"
              :sortable="true"
              width="200px"
              title="区分名称"
              header-align="center"
            />
            <VueNumberColumn
              v-if="true"
              :formatter="gridInitMonthPriceFormatter"
              :edit-render="gridInitMonthPriceEditRender"
              field="initMonthPrice"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              title="在庫金額"
              header-align="center"
            />
            <VueNumberColumn
              v-if="true"
              :formatter="gridReceiveFormatter"
              :edit-render="gridReceiveEditRender"
              field="receive"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              :title="t('label.receiptAmount')"
              header-align="center"
            />
            <VueNumberColumn
              v-if="true"
              :formatter="gridSalesCostFormatter"
              :edit-render="gridSalesCostEditRender"
              field="salesCost"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              :title="t('label.salesCost')"
              header-align="center"
            />
            <VueNumberColumn
              v-if="true"
              :formatter="gridReturnCostFormatter"
              :edit-render="gridReturnCostEditRender"
              field="returnCost"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              title="返品原価"
              header-align="center"
            />
            <VueNumberColumn
              v-if="true"
              :formatter="gridAdjustmentPlusAmtFormatter"
              :edit-render="gridAdjustmentPlusAmtEditRender"
              field="adjustmentPlusAmt"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              :title="t('label.adjustmentPositive')"
              header-align="center"
            />
            <VueNumberColumn
              v-if="true"
              :formatter="gridAdjustmentMinusAmtFormatter"
              :edit-render="gridAdjustmentMinusAmtEditRender"
              field="adjustmentMinusAmt"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              :title="t('label.adjustmentNegative')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridCostMarginFormatter"
              :edit-render="gridCostMarginEditRender"
              field="costMargin"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              title="原価差額"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridTheoryStorePriceFormatter"
              :edit-render="gridTheoryStorePriceEditRender"
              field="theoryStorePrice"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              title="理論在庫金額"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridStockMonthFormatter"
              :edit-render="gridStockMonthEditRender"
              field="stockMonth"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="230px"
              :title="t('label.logicStockAmount')"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
