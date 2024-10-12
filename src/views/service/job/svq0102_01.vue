<script setup>
import { IconArrowDownBold, IconArrowLeftBold, IconCloseBold, IconDocument, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { merge } from 'lodash-es';
import { useRouter } from 'vue-router';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { PAGE_SIZE, ServiceCategory, ServiceOrderStatus, YamahaBrand } from '@/constants/pj-constants.js';
import { clearFormData, datePickerShortcuts, formatAmount, formatCodeInput } from '@/pj-commonutils.js';
import {
  consumer_pop_column, consumer_query_method,
  model_column, model_query_method,
  serviceJob_column, serviceJob_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const router = useRouter();
const requireValid = ref(true);
const checkedClaim = ref(true);
const disExportBtn = ref(true);
// 当前日
const currentDate = dayjs().format('YYYYMMDD');
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const lastDay = dayjs().endOf('month').format('YYYYMMDD');
// 上个月第一天
const lastMonth = dayjs().subtract(1, 'month').startOf('month').format('YYYYMMDD');
// +5个月
const add5Month = dayjs().add(4, 'month').endOf('month').format('YYYYMMDD');
defineOptions({
  name: 'svq0102_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_9AIw0 = ref();
const viy2Button_5heur2 = ref();
const viy2Button_5heznY = ref();
const viy2Button_7C7edE = ref();
const viy2Button_7Lhg02 = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_eB9Ug = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2Select_1rPSyEH = ref();
const viy2Select_GdTIb = ref();
const viy2DateTimePicker_1Ce29i = ref();
const viy2DateTimePicker_1Ce29k = ref();
const viy2Button_1Ce29v = ref();
const viy2Button_gaglvI = ref();
const viy2InputBox_gaglvT = ref();
const viy2Select_3uqGGc = ref();
const viy2Radio_IkV1U = ref();
const viy2Select_gaglvK = ref();
const viy2CheckBox_Olwsn = ref();
const viy2InputBox_87Ldh0 = ref();
const filterBtn = ref();
const viy2Flex_eBhlO = ref();
const detailGrid = ref();
const viy2Row_soVPC = ref();
const viy2Row_AvFqP = ref();
const viy2Row_5TbXqG = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const filterpopover = ref();
const filterForm = ref();
const viy2Row_HNs8v = ref();
const viy2ValueList_3gqqlA = ref();
const viy2Row_3gqqlC = ref();
const viy2Button_3gqqlY = ref();
const viy2Select_3eV47I = ref();
const viy2Select_41MwVu = ref();
const viy2InputBox_3urIp2 = ref();
const viy2InputBox_5hhMPi = ref();
const viy2ValueList_12gOt12 = ref();
const viy2Row_99De6s = ref();
const viy2Button_5dubL5 = ref();
const viy2ValueList_4Te72W = ref();
const viy2Row_4Te72Y = ref();
const viy2Button_4Te730 = ref();
const viy2Button_5RUNhy = ref();
const serviceHistAside = ref();
const titlerow = ref();
const viy2Button_5RUNhy2 = ref();
const viy2Button_7Lhg021 = ref();
const viy2Button_57DqZZ = ref();
const serviceHistForm = ref();
const viy2Row_vLPns = ref();
const viy2Select_1rPSyEH2 = ref();
const viy2Select_GdTIb2 = ref();
const viy2DateTimePicker_1Ce29i1 = ref();
const viy2DateTimePicker_1Ce29k1 = ref();
const viy2Button_1Ce29v1 = ref();
const viy2Button_gaglvI1 = ref();
const viy2Select_3uqGGc1 = ref();
const viy2ValueList_12gOt121 = ref();
const viy2Row_57RNLf = ref();
const viy2Button_57RNLr = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', dateType: '1', dateFrom: '', dateTo: '', orderNo: '', serviceCategoryId: '', brand: '0', orderStatusList: [], batteryClaimFlag: false, batteryNo: '',
});
const filterFormData = reactive({
  consumer: '', mechanicId: '', receptionPicId: '', plateNo: '', frameNo: '', model: '', serviceJob: '',
});
const serviceHistFormData = reactive({
  pointId: '', dateType: '1', dateFrom: '', dateTo: '', serviceCategoryId: '', model: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2DateTimePicker_1Ce29iRules: [
    {
      required: true,
      message: t('errors.required', [t('label.periodFrom')]),
      enabled: requireValid,
    },
  ],
  viy2DateTimePicker_1Ce29kRules: [
    {
      required: true,
      message: t('errors.required', [t('label.periodTo')]),
      enabled: requireValid,
    },
  ],
  viy2Select_1rPSyEH2Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2DateTimePicker_1Ce29i1Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.periodFrom')]),
    },
  ],
  viy2DateTimePicker_1Ce29k1Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.periodTo')]),
    },
  ],
});
const viy2ValueList_3gqqlAPopoverQueryMethod = consumer_query_method;
const viy2ValueList_12gOt12PopoverQueryMethod = model_query_method;
const viy2ValueList_4Te72WPopoverQueryMethod = serviceJob_query_method;
const showServiceHist = ref(false);
const viy2Select_GdTIb2Opts = reactive([
  {
    label:
'label.orderDate',
    value:
'1',
  },
  {
    label:
'label.settleDate',
    value:
'2',
  },
]);
const viy2ValueList_12gOt121PopoverQueryMethod = model_query_method;
const viy2Select_GdTIbOpts = reactive([
  {
    label:
'label.orderDate',
    value:
'1',
  },
  {
    label:
'label.settleDate',
    value:
'2',
  },
]);
const viy2Radio_IkV1UOpts = reactive([
  { value: '0', label: 'YAMAHA' },
  { value: '1', label: 'Others' },
]);
const viy2CheckBox_OlwsnOpts = [
  {
    label:
'Option 1',
    value:
'Option 1',
  },
  {
    label:
'Option 2',
    value:
'Option 2',
  },
  {
    label:
'Option 3',
    value:
'Option 3',
  },
];
const detailGridEditConfig = reactive({
  trigger: 'click',
});
const detailGridMouseConfig = reactive({
  extension: true,
});
const detailGridViy2TableButtonColumn_ySNcgButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocument,
      click: linkOrderDetail,
      title: 'Detail',
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const exportDsApi = useApi({
  url: '/service/svq0102/exportServiceOrderList.json',
  method: 'post',
  data: () => {
    merge(queryFormData, filterFormData);
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SVQ0102_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const gridDsApi = useApi({
  url: '/service/svq0102/searchServiceOrderList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    merge(condition, filterFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
}, {
  onSuccess: (data, params) => {
    disExportBtn.value = data.content.length > 0;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const employeeDsApi = useApi({
  url: '/common/helper/employeeList.json',
  method: 'post',
  data: {},
});
const employeeDs = employeeDsApi.data;
const serviceCtgDsApi = useApi({
  url: '/common/helper/getSvCategoryList.json',
  method: 'post',
  data: {},
});
const serviceCtgDs = serviceCtgDsApi.data;
const exportHistDsApi = useApi({
  url: '/service/svq0102/exportServiceOrderList.json',
  method: 'post',
  data: () => {
    return serviceHistFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SVQ0102_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const exportHistDs = exportHistDsApi.data;
const orderStsDsApi = useApi({
  url: '/common/helper/getServiceStatusList.json',
  method: 'post',
});
const orderStsDs = orderStsDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_9AIw0Click = () => {
  exportDsApi.runAsync();
};
const viy2Button_7C7edEClick = () => {
  serviceHistFormData.point = queryFormData.point;
  serviceHistFormData.pointId = queryFormData.pointId;
  serviceHistFormData.dateFrom = lastMonth;
  serviceHistFormData.dateTo = add5Month;
  showServiceHist.value = true;
};
const viy2Button_7Lhg02Click = () => {
  linkNewOrder();
};
const viy2Button_5FbWKcClick = () => {
  doRetrieve();
};
const viy2Select_1rPSyEHChange = (value, data) => {
  onChgPointAndPeriod();
}
;
const viy2Select_GdTIbLabelFormatter = (item) => {
  return t(item.label);
};
const viy2DateTimePicker_1Ce29iChange = (value) => {
  onChgPointAndPeriod();
};
const viy2DateTimePicker_1Ce29kChange = (value) => {
  onChgPointAndPeriod();
};
const viy2Button_1Ce29vClick = () => {
  if (!queryFormData.dateFrom) {
    queryFormData.dateFrom = firstDay;
  }
  if (!queryFormData.dateTo) {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
};
const viy2Button_gaglvIClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2InputBox_gaglvTChange = (value) => {
  onChgOrderNo(value);
};
const viy2Radio_IkV1UChange = (value) => {
  onChgPointAndPeriod();
};
const viy2Select_gaglvKChange = (value) => {
  onChgPointAndPeriod();
};
const viy2CheckBox_OlwsnChange = (checkedList) => {
  onChgBatteryClaim(checkedList);
};
const viy2InputBox_87Ldh0Change = () => {
  onChgPlate();
};
const detailGridCellDblclick = (obj) => {
  linkOrderDetail(obj.row);
};
const detailGridOrderDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const detailGridSettleDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const detailGridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridOrderStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridConsumerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridPlateNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridColorEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridServiceCategoryEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridServiceDemandEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridMileageEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
    },
  };
});
const detailGridReceptionNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridMechanicNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridServiceAmountFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const detailGridServiceAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      stepStrictly: true,
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const detailGridPartsAmountFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const detailGridPartsAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const detailGridBrandEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const paginationCurrentChange = () => {
  if (gridDs.value.length === 0) {
    return;
  }
  doRetrieve();
};
const viy2ValueList_3gqqlASelect = (params) => {
  filterFormData.consumerId = params.consumerId;
};
const viy2ValueList_3gqqlAClear = () => {
  filterFormData.consumerId = '';
};
const viy2ValueList_3gqqlALeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    filterFormData.consumerId = '';
  }
};
const viy2ValueList_3gqqlAPopoverColumns = computed(() => {
  return consumer_pop_column;
});
const viy2InputBox_3urIp2Change = (value) => {
  onChgPlate(value);
};
const viy2ValueList_12gOt12Select = (params) => {
  filterFormData.modelId = params.id;
  onChgPointAndPeriod();
};
const viy2ValueList_12gOt12Clear = (obj) => {
  filterFormData.modelId = '';
};
const viy2ValueList_12gOt12Leave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    filterFormData.modelId = '';
  }
};
const viy2ValueList_12gOt12PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_4Te72WSelect = (params) => {
  filterFormData.serviceJobId = params.id;
  onChgPointAndPeriod();
};
const viy2ValueList_4Te72WClear = (obj) => {
  filterFormData.serviceJobId = '';
};
const viy2ValueList_4Te72WLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    filterFormData.serviceJobId = '';
  }
};
const viy2ValueList_4Te72WPopoverColumns = computed(() => {
  return serviceJob_column;
});
const viy2Button_5RUNhyClick = () => {
  filterForm.value.resetFields();
  clearFormData(filterFormData);
};
const viy2Button_5RUNhy2Click = () => {
  serviceHistForm.value.resetFields();
  serviceHistForm.pointId = '';
  serviceHistForm.modelId = '';
};
const viy2Button_7Lhg021Click = () => {
  onExportHist();
};
const viy2Button_57DqZZClick = () => {
  showServiceHist.value = false;
};
const viy2Select_1rPSyEH2Change = (value, data) => {
  onChgPointAndPeriod();
}
;
const viy2Select_GdTIb2LabelFormatter = (item) => {
  return t(item.label);
};
const viy2Button_1Ce29v1Click = () => {
  if (!serviceHistFormData.dateFrom) {
    serviceHistFormData.dateFrom = lastMonth;
  }
  if (!serviceHistFormData.dateTo) {
    serviceHistFormData.dateTo = add5Month;
  }
  serviceHistFormData.dateFrom = dayjs(serviceHistFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  serviceHistFormData.dateTo = dayjs(serviceHistFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
};
const viy2Button_gaglvI1Click = () => {
  serviceHistFormData.dateFrom = lastMonth;
  serviceHistFormData.dateTo = add5Month;
};
const viy2ValueList_12gOt121Select = (params) => {
  serviceHistFormData.modelId = params.id;
};
const viy2ValueList_12gOt121Clear = (obj) => {
  serviceHistFormData.modelId = '';
};
const viy2ValueList_12gOt121Leave = (params) => {
  if (params.currentValue != params.lastSelectedValue) {
    serviceHistFormData.modelId = '';
  }
};
const viy2ValueList_12gOt121PopoverColumns = computed(() => {
  return model_column;
});
onMounted(() => {
  initCondition();
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
// 查询
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
// 导出历史订单
const onExportHist = () => {
  exportDsApi.runAsync();
};
// 新增订单
const linkNewOrder = () => {
// 定义参数对象
  const param = {
    orderNo: null,
    serviceOrderId: null,
    brandId: YamahaBrand[0],
    serviceCategoryId: ServiceCategory.REPAIR,
  };
  routerTo(param);
};
// 订单详情
const linkOrderDetail = (row) => {
  nextTick(() => {
    const param = {
      orderNo: row.orderNo,
      serviceOrderId: row.serviceOrderId,
      brandId: row.brandId,
      serviceCategoryId: row.serviceCategoryId,
    }; // 路由参数得是字符串
    routerTo(param);
  });
};
// 跳转到SVM0102_01
const routerTo = (param) => {
  const serviceCtgId = param.serviceCategoryId;
  const brandId = param.brandId;
  // Service Order
  let path = 'svm0102_01';
  let title = t('menu.SVM0102_01');
  // Claim For Battery
  if (serviceCtgId == ServiceCategory.CLAIM_BATTERY) {
    path = 'svm0109_01';
    title = t('menu.SVM0109_01');
  }
  // Service Order For Other Brand
  else if (!YamahaBrand.includes(brandId)) {
    path = 'svm0120_01';
    title = t('menu.SVM0120_01');
  }
  useMultiTags().openTag({
    name: path, // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: path }).meta.title = title;
  // router导航到页面并传递参数
  router.push({ name: path, data: param });
};
const viewDetail = (row) => {
// 跳转到详情页的必要参数
  const data = {
    point: queryFormData.point,
    pointId: queryFormData.pointId,
    partsNo: formatPartNo(row.partsNo),
    partsNm: row.partsNm,
    partsId: row.partsId,
  };
  useMultiTags().openTag({
    name: 'routerFormTo', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'routerFormTo' }).meta.title = t('title.partsStockInformationInquiryDetail_02');
  // router导航到页面并传递参数
  router.push({ name: 'routerFormTo', data });
};
// 输入仓库后，
const onChgPointAndPeriod = () => {
  queryFormData.plateNo = '';
  queryFormData.orderNo = '';
};
// 输入订单号后，
const onChgOrderNo = (value) => {
  if (value) {
    queryFormData.plateNo = '';
    clearOther();
  } else {
    requireValid.value = true;
  }
};
// 输入车架号后，
const onChgPlate = (value) => {
  if (value) {
    queryFormData.orderNo = '';
    clearOther();
  } else {
    requireValid.value = true;
  }
};
// BatteryClaim变更后，
const onChgBatteryClaim = (value) => {
  if (value == 'Y') {
    queryFormData.serviceCategoryId = '';
    queryFormData.serviceJob = '';
    queryFormData.serviceJobId = '';
    queryFormData.plateNo = '';
  }
  checkedClaim.value = value == 'Y';
};
// 清空字段
const clearOther = () => {
  queryFormData.dateFrom = '';
  queryFormData.dateTo = '';
  queryFormData.model = '';
  queryFormData.modelId = '';
  queryFormData.orderStatusList = [];
  queryFormData.serviceCategoryId = '';
  queryFormData.consumer = '';
  queryFormData.consumerId = '';
  queryFormData.mechanic = '';
  queryFormData.mechanicId = '';
  queryFormData.receptionPic = '';
  queryFormData.receptionPicId = '';
  requireValid.value = false;
};
// 重置
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  queryFormData.pointId = '';
  // 清空更多筛选条件
  clearFormData(filterFormData);
  // 清空明细部
  resetTblResults();
  // 重新初始化条件部
  initCondition();
};
const resetTblResults = () => {
  gridDs.value.content = [];
  gridDs.value.totalElements = 0;
};
// 初始化查询条件
const initCondition = () => {
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.orderStatusList = [ServiceOrderStatus.WAITFORSETTLE];
  queryFormData.brand = '0';
  queryFormData.batteryClaimFlag = 'N';
  // 重置分页
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
  gridDs.value.totalElements = 0;
};
// consumer侧边栏选择后
const callbkSelectConsumer = (param) => {
  filterFormData.consumer = param.name;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
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
        :md="{ span: 14 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="viy2Button_9AIw0" ref="viy2Button_9AIw0" icon-position="left" :disabled="disExportBtn" @click="viy2Button_9AIw0Click">
          {{ t('button.export') }}
        </VueButton>
        <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="checkedClaim.value">
          {{ t('button.detailSP') }}
        </VueButton>
        <VueButton id="viy2Button_5heznY" ref="viy2Button_5heznY" icon-position="left" :disabled="checkedClaim.value">
          {{ t('button.detailSV') }}
        </VueButton>
        <VueButton id="viy2Button_7C7edE" ref="viy2Button_7C7edE" icon-position="left" @click="viy2Button_7C7edEClick">
          {{ t('button.sixMonthAgo') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 10 }"
      >
        <VueButton id="viy2Button_7Lhg02" ref="viy2Button_7Lhg02" icon-position="left" @click="viy2Button_7Lhg02Click">
          {{ t('button.newServiceOrder') }}
        </VueButton>
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_eB9Ug"
      ref="viy2Flex_eB9Ug"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div0"
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
              :label="t('label.point')"
              prop="pointId"
              :rules="rules.viy2Select_1rPSyEHRules"
            >
              <VueSelect
                id="viy2Select_1rPSyEH"
                ref="viy2Select_1rPSyEH"
                v-model="queryFormData.pointId"
                :style="{ width: '200px' }"
                :collapse-tags="true"
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
            <VueFormItem
              label-width="8px"
              prop="dateType"
            >
              <VueSelect
                id="viy2Select_GdTIb"
                ref="viy2Select_GdTIb"
                v-model="queryFormData.dateType"
                :style="{ width: '130px' }"
                :options="viy2Select_GdTIbOpts"
                :label-formatter="viy2Select_GdTIbLabelFormatter"
              />
            </VueFormItem>
            <VueFormItem
              prop="dateFrom"
              :rules="rules.viy2DateTimePicker_1Ce29iRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1Ce29i"
                ref="viy2DateTimePicker_1Ce29i"
                v-model="queryFormData.dateFrom"
                :shortcuts="datePickerShortcuts"
                :enabled="requireValid"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                @change="viy2DateTimePicker_1Ce29iChange"
              />
            </VueFormItem>
            <!-- BEGIN CUSTOM DIV CODE -->
            <span>-</span>
            <!-- END CUSTOM DIV CODE -->
            <VueFormItem
              label-width="0"
              prop="dateTo"
              :rules="rules.viy2DateTimePicker_1Ce29kRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1Ce29k"
                ref="viy2DateTimePicker_1Ce29k"
                v-model="queryFormData.dateTo"
                :shortcuts="datePickerShortcuts"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                @change="viy2DateTimePicker_1Ce29kChange"
              />
            </VueFormItem>
            <VueButton id="viy2Button_1Ce29v" ref="viy2Button_1Ce29v" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1Ce29vClick" />
            <VueButton id="viy2Button_gaglvI" ref="viy2Button_gaglvI" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_gaglvIClick" />
            <VueFormItem
              :label="t('label.orderNo')"
              prop="orderNo"
            >
              <VueInput
                id="viy2InputBox_gaglvT"
                ref="viy2InputBox_gaglvT"
                v-model="queryFormData.orderNo"
                :style="{ width: '140px' }"
                @change="viy2InputBox_gaglvTChange"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.serviceCategory')"
              prop="serviceCategoryId"
            >
              <VueSelect
                id="viy2Select_3uqGGc"
                ref="viy2Select_3uqGGc"
                v-model="queryFormData.serviceCategoryId"
                :style="{ width: '150px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :disabled="queryFormData.batteryClaimFlag == 'Y'"
                :options="serviceCtgDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.brand')"
              prop="brand"
            >
              <VueRadioGroup
                id="viy2Radio_IkV1U"
                ref="viy2Radio_IkV1U"
                v-model="queryFormData.brand"
                radio-style="button"
                direction="horizontal"
                split-size="default"
                @change="viy2Radio_IkV1UChange"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_IkV1UOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
            <VueFormItem
              :label="t('label.orderStatus')"
              prop="orderStatusList"
            >
              <VueSelect
                id="viy2Select_gaglvK"
                ref="viy2Select_gaglvK"
                v-model="queryFormData.orderStatusList"
                :style="{ width: '220px' }"
                :collapse-tags="true"
                :clearable="true"
                :multiple="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="orderStsDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
                @change="viy2Select_gaglvKChange"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.exceptOnlyBatteryClaim')"
              prop="batteryClaimFlag"
            >
              <VueCheckbox
                id="viy2CheckBox_Olwsn"
                ref="viy2CheckBox_Olwsn"
                v-model="queryFormData.batteryClaimFlag"
                true-label="Y"
                false-label="N"
                @change="viy2CheckBox_OlwsnChange"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.batteryId')"
              prop="batteryNo"
            >
              <VueInput
                id="viy2InputBox_87Ldh0"
                ref="viy2InputBox_87Ldh0"
                v-model="queryFormData.batteryNo"
                :disabled="queryFormData.batteryClaimFlag == 'N'"
                :style="{ width: '140px' }"
                @change="viy2InputBox_87Ldh0Change"
              />
            </VueFormItem>
            <VueButton id="filterBtn" ref="filterBtn" icon-position="left" class="icon-button-small" :icon="IconArrowDownBold">
              {{ t('button.more') }}
            </VueButton>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_eBhlO"
        ref="viy2Flex_eBhlO"
        direction="column"
        grow="1"
      >
        <VueTable id="detailGrid" ref="detailGrid" height="100%" :data="gridDs.content" :edit-config="detailGridEditConfig" :mouse-config="detailGridMouseConfig" @cell-dblclick="detailGridCellDblclick">
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
            fixed="left"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueDateTimeColumn
            :edit-render="detailGridOrderDateEditRender"
            field="orderDate"
            align="center"
            fixed="left"
            :sortable="true"
            :title="t('label.orderDate')"
            width="120px"
            header-align="center"
          />
          <VueDateTimeColumn
            :edit-render="detailGridSettleDateEditRender"
            field="settleDate"
            align="center"
            fixed="left"
            :sortable="true"
            :title="t('label.settleDate')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridOrderNoEditRender"
            field="orderNo"
            show-overflow="tooltip"
            :sortable="true"
            fixed="left"
            :title="t('label.orderNo')"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridOrderStatusEditRender"
            field="orderStatus"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.orderStatus')"
            width="180px"
            header-align="center"
          />
          <VueTemplateColumn
            :edit-render="detailGridConsumerCdEditRender"
            show-overflow="tooltip"
            field="consumerCd"
            :sortable="true"
            :title="t('label.consumer')"
            width="230px"
          >
            <template #default="scope">
              <VueRow
                id="viy2Row_AvFqP"
                ref="viy2Row_AvFqP"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 8 }"
                >
                  <VueText id="viy2Text_AvIQY" ref="viy2Text_AvIQY" :style="{ width: '100%', display: 'inline-block' }" v-html="scope.row.consumerCd" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 16 }"
                >
                  <VueText id="viy2Text_5T7TVE" ref="viy2Text_5T7TVE" :style="{ width: '100%', display: 'inline-block' }" v-html="scope.row.consumerNm" />
                </VueCol>
              </VueRow>
            </template>
          </VueTemplateColumn>
          <VueInputColumn
            :edit-render="detailGridPlateNoEditRender"
            field="plateNo"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.numberPlate')"
            width="130px"
            header-align="center"
          />
          <VueTemplateColumn
            :edit-render="detailGridModelCdEditRender"
            show-overflow="tooltip"
            :sortable="true"
            field="modelCd"
            :title="t('label.model')"
            width="250px"
          >
            <template #default="scope">
              <VueRow
                id="viy2Row_5TbXqG"
                ref="viy2Row_5TbXqG"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 10 }"
                >
                  <VueText id="viy2Text_5TbXqK" ref="viy2Text_5TbXqK" :style="{ width: '100%', display: 'inline-block' }" v-html="scope.row.modelCd" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 14 }"
                >
                  <VueText id="viy2Text_5TbXqV" ref="viy2Text_5TbXqV" :style="{ width: '100%', display: 'inline-block' }" v-html="scope.row.modelNm" />
                </VueCol>
              </VueRow>
            </template>
          </VueTemplateColumn>
          <VueInputColumn
            :edit-render="detailGridColorEditRender"
            field="color"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.color')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridServiceCategoryEditRender"
            field="serviceCategory"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.serviceCategory')"
            width="145px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridServiceDemandEditRender"
            field="serviceDemand"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.serviceDemand')"
            width="150px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="detailGridMileageEditRender"
            field="mileage"
            :sortable="true"
            :title="t('label.mileage')"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridReceptionNameEditRender"
            field="receptionName"
            aggregate="sum"
            :sortable="true"
            :title="t('label.receptionPic')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridMechanicNameEditRender"
            field="mechanicName"
            aggregate="sum"
            :sortable="true"
            :title="t('label.mechanic')"
            width="130px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="detailGridServiceAmountFormatter"
            :edit-render="detailGridServiceAmountEditRender"
            field="serviceAmount"
            align="right"
            aggregate="sum"
            :step-strictly="true"
            :sortable="true"
            :title="t('label.serviceAmount')"
            width="140px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="detailGridPartsAmountFormatter"
            :edit-render="detailGridPartsAmountEditRender"
            field="partsAmount"
            align="right"
            aggregate="sum"
            :sortable="true"
            :title="t('label.partsAmount')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridBrandEditRender"
            field="brand"
            :sortable="true"
            :title="t('label.brand')"
            width="100px"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="60px"
            :buttons="detailGridViy2TableButtonColumn_ySNcgButtons"
          />
        </VueTable>
      </VueFlex>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        align="middle"
        class="except-height-css paging-area-margin"
      >
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 17 }"
        />
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 7 }"
        >
          <VuePagination
            id="pagination"
            ref="pagination"
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :pager-count="7"
            :background="true"
            :small="true"
            :total="gridDs.totalElements || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
    <VuePopover
      id="filterpopover"
      ref="filterpopover"
      trigger="click"
      title="Filter Condition"
      width="700px"
      popper-class="screen-popover"
      :virtual-ref="filterBtn"
    >
      <VueForm
        id="filterForm"
        ref="filterForm"
        label-width="120px"
        label-suffix=":"
        :model="filterFormData"
      >
        <VueRow
          id="viy2Row_HNs8v"
          ref="viy2Row_HNs8v"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.consumer')"
              prop="consumer"
            >
              <VueValueList
                id="viy2ValueList_3gqqlA"
                ref="viy2ValueList_3gqqlA"
                v-model="filterFormData.consumer"
                :use-common-popover="true"
                :popover-teleported="false"
                select-field="consumerName"
                :use-popup="false"
                :popover-width="500"
                :use-popover="true"
                :popover-columns="viy2ValueList_3gqqlAPopoverColumns"
                :popover-query-method="viy2ValueList_3gqqlAPopoverQueryMethod"
                @select="viy2ValueList_3gqqlASelect"
                @clear="viy2ValueList_3gqqlAClear"
                @leave="viy2ValueList_3gqqlALeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_3gqqlC"
                    ref="viy2Row_3gqqlC"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_3gqqlN" ref="viy2Text_3gqqlN" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        {{ t('button.selectConsumer') }}
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_3gqqlY" ref="viy2Button_3gqqlY" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
              :label="t('label.mechanic')"
              prop="mechanicId"
            >
              <VueSelect
                id="viy2Select_3eV47I"
                ref="viy2Select_3eV47I"
                v-model="filterFormData.mechanicId"
                :teleported="false"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="employeeDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.receptionPic')"
              prop="receptionPicId"
            >
              <VueSelect
                id="viy2Select_41MwVu"
                ref="viy2Select_41MwVu"
                v-model="filterFormData.receptionPicId"
                :teleported="false"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="employeeDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.numberPlate')"
              prop="plateNo"
            >
              <VueInput
                id="viy2InputBox_3urIp2"
                ref="viy2InputBox_3urIp2"
                v-model="filterFormData.plateNo"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                :disabled="queryFormData.batteryClaimFlag == 'Y'"
                @change="viy2InputBox_3urIp2Change"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.frameNumber')"
              prop="frameNo"
            >
              <VueInput
                id="viy2InputBox_5hhMPi"
                ref="viy2InputBox_5hhMPi"
                v-model="filterFormData.frameNo"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.model')"
              prop="model"
            >
              <VueValueList
                id="viy2ValueList_12gOt12"
                ref="viy2ValueList_12gOt12"
                v-model="filterFormData.model"
                :use-common-popover="true"
                :popover-teleported="false"
                select-field="desc"
                :popover-width="500"
                :popover-columns="viy2ValueList_12gOt12PopoverColumns"
                :popover-query-method="viy2ValueList_12gOt12PopoverQueryMethod"
                @select="viy2ValueList_12gOt12Select"
                @clear="viy2ValueList_12gOt12Clear"
                @leave="viy2ValueList_12gOt12Leave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_99De6s"
                    ref="viy2Row_99De6s"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_5dubL4" ref="viy2Text_5dubL4" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        {{ t('button.selectUnit') }}
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_5dubL5" ref="viy2Button_5dubL5" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
              :label="t('label.serviceJob')"
              prop="serviceJob"
            >
              <VueValueList
                id="viy2ValueList_4Te72W"
                ref="viy2ValueList_4Te72W"
                v-model="filterFormData.serviceJob"
                :use-common-popover="true"
                :popover-teleported="false"
                select-field="desc"
                :popover-width="500"
                :disabled="queryFormData.batteryClaimFlag == 'Y'"
                :popover-columns="viy2ValueList_4Te72WPopoverColumns"
                :popover-query-method="viy2ValueList_4Te72WPopoverQueryMethod"
                @select="viy2ValueList_4Te72WSelect"
                @clear="viy2ValueList_4Te72WClear"
                @leave="viy2ValueList_4Te72WLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_4Te72Y"
                    ref="viy2Row_4Te72Y"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_4Te72Z" ref="viy2Text_4Te72Z" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        {{ t('button.selectUnit') }}
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_4Te730" ref="viy2Button_4Te730" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueButton id="viy2Button_5RUNhy" ref="viy2Button_5RUNhy" icon-position="left" type="warning" @click="viy2Button_5RUNhyClick">
              {{ t('button.reset') }}
            </VueButton>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePopover>
    <VueAside
      id="serviceHistAside"
      ref="serviceHistAside"
      v-model="showServiceHist"
      direction="rtl"
      size="50%"
      :with-header="false"
      :show-close="false"
    >
      <VueRow
        id="titlerow"
        ref="titlerow"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          class="aside-title-text"
          :md="{ span: 7 }"
        >
          <VueText id="viy2Text_57DqZY" ref="viy2Text_57DqZY">
            {{ t('title.serviceHistoryExport_04') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          class="aside-title-button"
          :md="{ span: 17 }"
        >
          <VueButton id="viy2Button_5RUNhy2" ref="viy2Button_5RUNhy2" icon-position="left" type="warning" @click="viy2Button_5RUNhy2Click">
            {{ t('button.reset') }}
          </VueButton>
          <VueButton id="viy2Button_7Lhg021" ref="viy2Button_7Lhg021" icon-position="left" type="info" @click="viy2Button_7Lhg021Click">
            {{ t('button.export') }}
          </VueButton>
          <VueButton id="viy2Button_57DqZZ" ref="viy2Button_57DqZZ" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_57DqZZClick" />
        </VueCol>
      </VueRow>
      <VueForm
        id="serviceHistForm"
        ref="serviceHistForm"
        label-width="120px"
        :model="serviceHistFormData"
      >
        <VueRow
          id="viy2Row_vLPns"
          ref="viy2Row_vLPns"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.point')"
              prop="pointId"
              :rules="rules.viy2Select_1rPSyEH2Rules"
            >
              <VueSelect
                id="viy2Select_1rPSyEH2"
                ref="viy2Select_1rPSyEH2"
                v-model="serviceHistFormData.pointId"
                :style="{ width: '230px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_1rPSyEH2Change"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label-width="0px"
              prop="dateType"
            >
              <VueSelect
                id="viy2Select_GdTIb2"
                ref="viy2Select_GdTIb2"
                v-model="serviceHistFormData.dateType"
                :style="{ width: '120px' }"
                :options="viy2Select_GdTIb2Opts"
                :label-formatter="viy2Select_GdTIb2LabelFormatter"
              />
            </VueFormItem>
            <VueFormItem
              label-width="0px"
              prop="dateFrom"
              :rules="rules.viy2DateTimePicker_1Ce29i1Rules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1Ce29i1"
                ref="viy2DateTimePicker_1Ce29i1"
                v-model="serviceHistFormData.dateFrom"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <!-- BEGIN CUSTOM DIV CODE -->
            <span>-</span>
            <!-- END CUSTOM DIV CODE -->
            <VueFormItem
              label-width="0"
              prop="dateTo"
              :rules="rules.viy2DateTimePicker_1Ce29k1Rules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1Ce29k1"
                ref="viy2DateTimePicker_1Ce29k1"
                v-model="serviceHistFormData.dateTo"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueButton id="viy2Button_1Ce29v1" ref="viy2Button_1Ce29v1" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1Ce29v1Click" />
            <VueButton id="viy2Button_gaglvI1" ref="viy2Button_gaglvI1" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_gaglvI1Click" />
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.serviceCategory')"
              prop="serviceCategoryId"
            >
              <VueSelect
                id="viy2Select_3uqGGc1"
                ref="viy2Select_3uqGGc1"
                v-model="serviceHistFormData.serviceCategoryId"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="orderStsDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.model')"
              prop="model"
            >
              <VueValueList
                id="viy2ValueList_12gOt121"
                ref="viy2ValueList_12gOt121"
                v-model="serviceHistFormData.model"
                :use-common-popover="true"
                :popover-teleported="false"
                select-field="desc"
                :popover-width="500"
                width="250px"
                :popover-columns="viy2ValueList_12gOt121PopoverColumns"
                :popover-query-method="viy2ValueList_12gOt121PopoverQueryMethod"
                @select="viy2ValueList_12gOt121Select"
                @clear="viy2ValueList_12gOt121Clear"
                @leave="viy2ValueList_12gOt121Leave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_57RNLf"
                    ref="viy2Row_57RNLf"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_57RNLq" ref="viy2Text_57RNLq" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        {{ t('button.selectUnit') }}
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_57RNLr" ref="viy2Button_57RNLr" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VueAside>
  </VueForm>
</template>
