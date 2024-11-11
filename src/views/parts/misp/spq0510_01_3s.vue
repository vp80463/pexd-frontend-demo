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
const groupShow = ref(false);
const salesShow = ref(false);
const customSubTotal = ({ data, field }) => {
  const currentMonthPlaSum = data.reduce((accumulator, current) => {
    return accumulator + current.currentMonthPlan;
  }, 0);
  const currentMonthAPSum = data.reduce((accumulator, current) => {
    return accumulator + current.currentMonthAP;
  }, 0);
  return `${(currentMonthAPSum / currentMonthPlaSum * 100).toFixed(2)}%`;
};
const salesGroup = ref([
  {
    subtotal: { salesStore: 'group', salesStoreNm: 'group', retestTotal: 'group', planRate: customSubTotal, lastYearAP: 'sum', currentMonthPlan: 'sum', currentMonthAP: 'sum', salesPlanGap: 'sum' },
    label: { largeGroupName: '', suffix: true },
  },
  {
    subtotal: { salesStore: 'group', salesStoreNm: 'group', productType: 'group', planRate: customSubTotal, lastYearAP: 'sum', currentMonthPlan: 'sum', currentMonthAP: 'sum', salesPlanGap: 'sum' },
    label: { largeGroupName: '', suffix: true },
  },
]);
const allProduct = ref([
  {
    subtotal: { retestTotal: 'group', planRate: customSubTotal, lastYearAP: 'sum', currentMonthPlan: 'sum', currentMonthAP: 'sum', salesPlanGap: 'sum' },
    label: { largeGroupName: '', suffix: true },
  },
  {
    subtotal: { productType: 'group', planRate: customSubTotal, lastYearAP: 'sum', currentMonthPlan: 'sum', currentMonthAP: 'sum', salesPlanGap: 'sum' },
    label: { largeGroupName: '', suffix: true },
  },
]);
defineOptions({
  name: 'spq0510_01_3s',
});
const form = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const viy2Panel_281u6 = ref();
const viy2Button_6Eq86q = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_28hKZ = ref();
const viy2DateTimePicker_L6xsi = ref();
const viy2Radio_BPvTQ = ref();
const viy2Select_m5rXO = ref();
const viy2Cascader_LmE9w = ref();
const viy2Flex_SMXLZ = ref();
const grid1 = ref();
const viy2Button_5heur2 = ref();
const viy2Form_IZmIk = ref();
const grid = ref();
const viy2Row_7fBlfh = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetMonth: '', searchType: 'companyWide', datafieldviy2Select_m5rXO: [], datafieldviy2Cascader_LmE9w: [],
});
const viy2Form_IZmIkData = reactive({
});
const rules = reactive({
  viy2DateTimePicker_L6xsiRules: [
    {
      required: true,
      message: t('errors.required', [t('label.targetMonth')]),
    },
  ],
  viy2Radio_BPvTQRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_m5rXORules: [
    {
      required: true,
      message: '入力してください。',
    },
  ],
});
const viy2Radio_BPvTQOpts = reactive([
  { value: 'companyWide', label: '全社' },
  { value: 'salesman', label: 'グルーブ' },
  { value: 'consumer', label: '販売店' },
  { value: 'internalDivision', label: '内部課' },
]);
const viy2Select_m5rXOOpts = reactive([
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
const viy2Cascader_LmE9wProps = reactive({
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
const staticDsApi = useApi({
  method: 'post',
  localData: [
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--部品計--', retestTotal: '--部品計--', largeCategory: '0', largeGroupName: 'Ｍ／Ｃ部品', lastYearAP: 30000, currentMonthPlan: 3000, currentMonthAP: 430, currentMonthUpRate: '30%', salesPlanGap: 2570, planRate: '14.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--部品計--', retestTotal: '--部品計--', largeCategory: '2', largeGroupName: '特記', lastYearAP: 26000, currentMonthPlan: 2000, currentMonthAP: 620, currentMonthUpRate: '10%', salesPlanGap: 1180, planRate: '28.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--部品計--', retestTotal: '--部品計--', largeCategory: '7', largeGroupName: '船外機', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--部品計--', retestTotal: '--部品計--', largeCategory: '8', largeGroupName: 'マリン', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'C', largeGroupName: 'ヘルメット', lastYearAP: 30000, currentMonthPlan: 3000, currentMonthAP: 430, currentMonthUpRate: '30%', salesPlanGap: 2570, planRate: '14.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'D', largeGroupName: 'アパレル', lastYearAP: 26000, currentMonthPlan: 2000, currentMonthAP: 620, currentMonthUpRate: '10%', salesPlanGap: 1180, planRate: '28.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'H', largeGroupName: 'ボルトオン', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'L', largeGroupName: 'オイル', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'M', largeGroupName: '消耗品', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'Q', largeGroupName: 'M／C仕入品', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--マリン用品計--', retestTotal: '用品計', largeCategory: 'R', largeGroupName: 'マリン用品', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--マリン用品計--', retestTotal: '用品計', largeCategory: 'Y', largeGroupName: 'マリン仕入品', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36944', salesStoreNm: 'SalesA', productType: '--その他計--', retestTotal: '--その他計--', largeCategory: 'Z', largeGroupName: 'その他', lastYearAP: 10000, currentMonthPlan: 1000, currentMonthAP: 920, currentMonthUpRate: '-8%', salesPlanGap: 80, planRate: '2%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--部品計--', retestTotal: '--部品計--', largeCategory: '0', largeGroupName: 'Ｍ／Ｃ部品', lastYearAP: 30000, currentMonthPlan: 3000, currentMonthAP: 430, currentMonthUpRate: '30%', salesPlanGap: 2570, planRate: '14.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--部品計--', retestTotal: '--部品計--', largeCategory: '2', largeGroupName: '特記', lastYearAP: 26000, currentMonthPlan: 2000, currentMonthAP: 620, currentMonthUpRate: '10%', salesPlanGap: 1180, planRate: '28.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--部品計--', retestTotal: '--部品計--', largeCategory: '7', largeGroupName: '船外機', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--部品計--', retestTotal: '--部品計--', largeCategory: '8', largeGroupName: 'マリン', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'C', largeGroupName: 'ヘルメット', lastYearAP: 30000, currentMonthPlan: 3000, currentMonthAP: 430, currentMonthUpRate: '30%', salesPlanGap: 2570, planRate: '14.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'D', largeGroupName: 'アパレル', lastYearAP: 26000, currentMonthPlan: 2000, currentMonthAP: 620, currentMonthUpRate: '10%', salesPlanGap: 1180, planRate: '28.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'H', largeGroupName: 'ボルトオン', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'L', largeGroupName: 'オイル', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'M', largeGroupName: '消耗品', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--M/C用品計--', retestTotal: '用品計', largeCategory: 'Q', largeGroupName: 'M／C仕入品', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--マリン用品計--', retestTotal: '用品計', largeCategory: 'R', largeGroupName: 'マリン用品', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--マリン用品計--', retestTotal: '用品計', largeCategory: 'Y', largeGroupName: 'マリン仕入品', lastYearAP: 39000, currentMonthPlan: 4000, currentMonthAP: 1200, currentMonthUpRate: '20%', salesPlanGap: 2800, planRate: '32.3%' },
    { sumFlag: false, salesStore: '36945', salesStoreNm: 'SalesB', productType: '--その他計--', retestTotal: '--その他計--', largeCategory: 'Z', largeGroupName: 'その他', lastYearAP: 10000, currentMonthPlan: 1000, currentMonthAP: 920, currentMonthUpRate: '-8%', salesPlanGap: 80, planRate: '2%' },
  ],
});
const staticDs = staticDsApi.data;
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
const viy2Radio_BPvTQChange = (value) => {
  if (value == 'companyWide') {
    // 隐藏 表示タイプ、
    assignShow.value = false;
    groupShow.value = false;
    salesShow.value = false;
  } else if (value == 'salesman') {
    assignShow.value = true;
    groupShow.value = true;
    salesShow.value = false;
  } else if (value == 'consumer') {
    assignShow.value = true;
    groupShow.value = false;
    salesShow.value = true;
    // allProduct.value = salesGroup.value
  } else if (value == 'internalDivision') {
    assignShow.value = false;
    groupShow.value = false;
    salesShow.value = true;
  }
}
;
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const gridCellDblclick = (row) => {
  skipToDetail(row);
};
const gridGroupEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSalesStoreFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSalesStoreEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSalesStoreNmEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridLargeCategoryEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridLargeGroupNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLastYearAPEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCurrentMonthPlanFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridCurrentMonthPlanEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCurrentMonthAPFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridCurrentMonthAPEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCurrentMonthUpRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSalesPlanGapFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSalesPlanGapEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPlanRateEditRender = computed(() => {
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
// queryFormData.dateFrom = firstDay;
// queryFormData.dateTo = lastDay;
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
const cellStyle = ({ row, column }) => {
  if (row.sumFlag == undefined || row.sumFlag == null || row.sumFlag === '') {
    return {
      backgroundColor: '#fafafa',
    };
  } else {
    return {
      backgroundColor: '#ffffff',
    };
  }
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
        <VuePanel id="viy2Panel_281u6" ref="viy2Panel_281u6" :title="t('label.searchCondition')">
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
                  :style="{ width: '100px' }"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.searchType')"
                label-width="120px"
                prop="searchType"
                :rules="rules.viy2Radio_BPvTQRules"
                size="default"
              >
                <VueRadioGroup
                  id="viy2Radio_BPvTQ"
                  ref="viy2Radio_BPvTQ"
                  v-model="queryFormData.searchType"
                  radio-style="button"
                  direction="horizontal"
                  :split="false"
                  split-size="default"
                  @change="viy2Radio_BPvTQChange"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_BPvTQOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                v-if="assignShow"
                label-width="10px"
                prop="datafieldviy2Select_m5rXO"
                :rules="rules.viy2Select_m5rXORules"
              >
                <VueSelect
                  id="viy2Select_m5rXO"
                  ref="viy2Select_m5rXO"
                  v-model="queryFormData.datafieldviy2Select_m5rXO"
                  :style="{ width: '200px' }"
                  :collapse-tags="true"
                  :multiple="true"
                  :filterable="true"
                  :placeholder="placeholderNm"
                  :collapse-tags-tooltip="true"
                  :options="viy2Select_m5rXOOpts"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.productDiff')"
                label-width="100px"
                prop="datafieldviy2Cascader_LmE9w"
              >
                <VueCascader
                  id="viy2Cascader_LmE9w"
                  ref="viy2Cascader_LmE9w"
                  v-model="queryFormData.datafieldviy2Cascader_LmE9w"
                  display-member="label"
                  value-member="value"
                  :filterable="true"
                  :clearable="true"
                  :style="{ width: '250px' }"
                  :options="pcTypeDs"
                  :props="viy2Cascader_LmE9wProps"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_SMXLZ"
        ref="viy2Flex_SMXLZ"
        direction="column"
        grow="1"
      >
        <VuePanel id="grid1" ref="grid1" :title="t('label.detailInfo')" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
                {{ t('button.export') }}
              </VueButton>
            </div>
          </template>
          <VueForm
            id="viy2Form_IZmIk"
            ref="viy2Form_IZmIk"
            style="height:100%;"
            :model="viy2Form_IZmIkData"
          >
            <VueTable id="grid" ref="grid" header-align="center" :group-config="[{ subtotal: { salesStore: 'group', salesStoreNm: 'group', retestTotal: 'group', planRate: customSubTotal, lastYearAP: 'sum', currentMonthPlan: 'sum', currentMonthAP: 'sum', salesPlanGap: 'sum' }, label: { largeGroupName: '', suffix: true } }, { subtotal: { salesStore: 'group', salesStoreNm: 'group', productType: 'group', planRate: customSubTotal, lastYearAP: 'sum', currentMonthPlan: 'sum', currentMonthAP: 'sum', salesPlanGap: 'sum' }, label: { largeGroupName: '', suffix: true } }]" :cell-style="cellStyle" :show-footer="true" height="100%" :border="false" :data="staticDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
              <VueRow
                id="viy2Row_7fBlfh"
                ref="viy2Row_7fBlfh"
                class="toolbar-row-width except-height-css"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                />
              </VueRow>
              <VueNumberColumn
                :edit-render="gridGroupEditRender"
                field="group"
                align="right"
                footer-align="right"
                :visible="groupShow"
                :rowspan="true"
                :sortable="true"
                width="200px"
                title="グルーブ"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridSalesStoreFormatter"
                :edit-render="gridSalesStoreEditRender"
                field="salesStore"
                align="right"
                footer-align="right"
                :visible="salesShow"
                :sortable="true"
                width="200px"
                :title="t('label.salesStore')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridSalesStoreNmEditRender"
                field="salesStoreNm"
                align="right"
                footer-align="right"
                :visible="salesShow"
                :sortable="true"
                width="200px"
                :title="t('label.salesStoreNm')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridLargeCategoryEditRender"
                field="largeCategory"
                align="right"
                footer-align="right"
                :sortable="true"
                width="200px"
                :title="t('label.productDiff')"
                header-align="center"
              />
              <VueInputColumn
                :edit-render="gridLargeGroupNameEditRender"
                field="largeGroupName"
                show-overflow="tooltip"
                :sortable="true"
                :aggregate-label="t('label.total')"
                footer-align="right"
                :title="t('label.productDiffNm')"
                width="130px"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridLastYearAPEditRender"
                field="lastYearAP"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="去年実績"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridCurrentMonthPlanFormatter"
                :edit-render="gridCurrentMonthPlanEditRender"
                field="currentMonthPlan"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="当月計画"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridCurrentMonthAPFormatter"
                :edit-render="gridCurrentMonthAPEditRender"
                field="currentMonthAP"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="当月実績"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridCurrentMonthUpRateEditRender"
                field="currentMonthUpRate"
                align="right"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="当月売上伸長率"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridSalesPlanGapFormatter"
                :edit-render="gridSalesPlanGapEditRender"
                field="salesPlanGap"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="販売計画差"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridPlanRateEditRender"
                field="planRate"
                align="right"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="達成率(%)"
                header-align="center"
              />
            </VueTable>
          </VueForm>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
