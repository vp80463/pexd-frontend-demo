<script setup>
import { IconArrowRightBold, IconCloseBold, IconDArrowLeft, IconDArrowRight, IconDelete, IconUserFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';
import { useParams } from 'viy-menu';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT , CONST_SYSTEM_DATE_VALUE_FORMAT } from "@/constants";
import viy2Subpage_k0p7NPage from '/commons/select_motor_consumer';
import viy2Subpage_2svxNPage from '/commons/consumer_info';
import viy2Subpage_k0p7N2Page from '/commons/select_symptom';
import viy2Subpage_9glGGiPage from '/src/views/commons/parts_select_multi.vue';
import {
  alert_msg
  , clearFormData, formatAmount, formatCodeInput
  , formatNumberDecimal,
  formatPrice, success_msg, warn_msg,
} from '@/pj-commonutils.js';
import { ServiceCategory, ServiceOrderStatus, YES_NO_FLAG } from '@/constants/pj-constants.js';

import {
  calPriceAndAmtOnJobGrid, calSellingPrice,
  sumAmount, sumArRowTotal, sumBySettleType,
} from '@/service-order.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const doFlag_Y = YES_NO_FLAG.YES;
// 页面跳转路由
const routeParam = useParams();
// 初始化画面参数
const initData = ref({
  modelType: '',
});
// 常量请求参数
const mstCodeApiParam = ref([
  'S007', 'S014', 'S015',
  'S005', 'S012', 'S022', 'S048', 'S066',
  'BATTERY', 'S062',
]);
const mstCodeData = ref(
  {
    S007: [],
    S014: [],
    S015: [], // mst_code
    S005: [],
    S012: [],
    S022: [],
    S048: [],
    S066: [], // pj_constants
    BATTERY: [],
    S062: [],
  },
);
// Grid集合对象
const gridData = ref({
  situation: [], job: [], parts: [], battery: [], summary: [], history: [],
});
// 服务项目明细故障现象下拉框数据
const jobSymptomMap = ref(new Map());
const jobSymptomData = ref([]);
// 隐私政策文件上传类型
const policyFileName = ref();
const disUploadPrivacy = ref(false);
// CreateOrderForEmployee勾选参数
const isCheckedForEmp = ref();
// 明细当前选择的类型，作为Demand Valuelist参数
const nowJobCategory = ref();
const nowJobSettleTypeId = ref();
const nowPartsCategory = ref();
const nowPartsCode = ref();
const nowDemagePartsCode = ref();
// 画面元素可用性参数
const itemsCtl = {
  showEmployeeRow: ref(false),
  partsColumnByEmploy: ref(false),
  disJobRowBtn: ref(false),
  disSituationRowBtn: ref(false),
  enableDemandBtn: ref(false),
  enableChosePackageBtn: ref(true),
  enableServiceCategory: ref(true),
  disExportHistBtn: ref(true),
  disRefreshEvBtn: ref(true),
};
// SETTLE状态校验
const requireValid = ref(false);
const requireDoFlag = ref(false);
// subpage参数
const consumerAsideParams = ref({}); // 消费者详情
const consumerListAsideParams = ref({}); // 选择消费者
const multiPartsAsideParams = ref(); // 批量添加配件
// 默认收起situationPanel
const isCollapse = ref(false);
const basicPanelMdl = ref(true);
const motorPanelMdl = ref(true);
const servicePanelMdl = ref(true);
const situationPanelMdl = ref(false);
const jobPanelMdl = ref(true);
const partsPanelMdl = ref(true);
const batteryPanelMdl = ref(true);
const sumPanelMdl = ref(true);
const histPanelMdl = ref(true);
defineOptions({
  name: 'svm0120_01',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Icon_xrlyK = ref();
const viy2Icon_5oqsqo = ref();
const confirmBtn = ref();
const printJobCardBtn = ref();
const printServiceOrderBtn = ref();
const settleBtn = ref();
const cancelBtn = ref();
const orderForm = ref();
const basicInfo = ref();
const basicForm = ref();
const viy2Row_118QTw = ref();
const viy2Select_1rPSyEH = ref();
const viy2InputBox_3b5mPM = ref();
const viy2Button_3b5mQ9 = ref();
const orderDate = ref();
const viy2InputBox_8x42Gg = ref();
const motorInfo = ref();
const viy2Row_l9gv0 = ref();
const con = ref();
const motorForm = ref();
const viy2Row_52VUwT = ref();
const viy2Select_4REDEW = ref();
const plateNo = ref();
const viy2Button_gCcqU = ref();
const viy2InputBox_5TZFi2 = ref();
const downloadUnitBtn = ref();
const model = ref();
const viy2InputBox_WVoNnV = ref();
const viy2InputBox_3aq4zE = ref();
const viy2InputBox_WVoNnY = ref();
const viy2Button_gDUZ9 = ref();
const viy2InputBox_adEGw8 = ref();
const viy2InputBox_8x7vGQ = ref();
const viy2Radio_5WHgzs3 = ref();
const viy2Button_Sa4Wc = ref();
const upload = ref();
const serviceInfo = ref();
const viy2Row_tmVHy = ref();
const serviceForm = ref();
const viy2Row_AQDYG = ref();
const viy2InputNumber_uLkZo = ref();
const viy2InputBox_8xtAIG = ref();
const viy2Select_41dOfw = ref();
const viy2InputBox_AVguE = ref();
const viy2DateTimePicker_4EmGY8 = ref();
const viy2DateTimePicker_5XaYDs = ref();
const viy2Textarea_11uEXP = ref();
const jobInfo = ref();
const viy2Row_27Pzh4 = ref();
const viy2Button_27Pzh6 = ref();
const jobGrid = ref();
const partsInfo = ref();
const viy2Row_gMw4S = ref();
const viy2Button_5XGBRg = ref();
const partsGrid = ref();
const summaryInfo = ref();
const summaryGrid = ref();
const viy2Row_6Fcl = ref();
const viy2InputNumber_13IRNr = ref();
const viy2Select_aBkHE6 = ref();
const serviceHistoryAside = ref();
const titlerow = ref();
const viy2Button_4QEiQz = ref();
const viy2Flex_RBFmg = ref();
const viy2Flex_RBLND = ref();
const histGrid = ref();
const freeCouponAside = ref();
const titler2ow = ref();
const viy2Button_50TfIH = ref();
const couponForm = ref();
const viy2Row_12c7Yr = ref();
const viy2InputBox_35kpBO = ref();
const viy2InputBox_35B4TQ = ref();
const viy2InputBox_35FUDo = ref();
const viy2InputBox_35zSqU = ref();
const viy2Row_14WYKg = ref();
const viy2Table_gnRc4 = ref();
const consumerListAside = ref();
const viy2Subpage_k0p7N = ref();
const consumerInfoAside = ref();
const viy2Subpage_2svxN = ref();
const symptomAside = ref();
const viy2Subpage_k0p7N2 = ref();
const choseServicePackageAside = ref();
const partsMultiAside = ref();
const viy2Subpage_9glGGi = ref();
const formData = reactive({
});
const orderFormData = reactive({
  depositAmt: 0, paymentMethodId: '',
});
const basicFormData = reactive({
  pointId: '', orderNo: '', orderDate: '', orderStatus: '',
});
const motorFormData = reactive({
  brand: '', plateNo: '', frameNo: '', model: '', lastName: '', middleName: '', firstName: '', mobilephone: '', email: '', policyResultFlag: '',
});
const serviceFormData = reactive({
  mileage: undefined, cashier: '', mechanicId: '', serviceTitle: '', operationStart: '', operationFinish: '', mechanicComment: '',
});
const couponFormData = reactive({
  text1: '', text2: '', text3: '', text4: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2Select_4REDEWRules: [
    {
      required: true,
      message: t('errors.required', [t('label.useType')]),
      enabled: requireValid,
    },
  ],
  plateNoRules: [
    {
      required: true,
      message: t('errors.required', [t('label.numberPlate')]),
    },
  ],
  viy2InputBox_5TZFi2Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.frameNumber')]),
      enabled: requireValid,
    },
  ],
  viy2InputBox_WVoNnVRules: [
    {
      required: true,
      message: t('errors.required', [t('label.consumer')]),
    },
  ],
  viy2InputBox_WVoNnYRules: [
    {
      required: true,
      message: t('errors.required', [t('label.consumer')]),
    },
  ],
  viy2InputBox_adEGw8Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.mobilephone')]),
    },
    {
      max: 10,
      message: t('M.E.10322', [t('label.mobilephone'), 10]),
    },
    {
      min: 10,
      message: t('M.E.10322', [t('label.mobilephone'), 10]),
    },
  ],
  viy2InputBox_8x7vGQRules: [
    {
      required: true,
      message: t('errors.required', [t('label.email')]),
      enabled: requireDoFlag,
    },
  ],
  viy2InputNumber_uLkZoRules: [
    {
      required: true,
      message: t('errors.required', [t('label.mileage')]),
    },
  ],
  viy2Select_41dOfwRules: [
    {
      required: true,
      message: t('errors.required', [t('label.mechanic')]),
      enabled: requireValid,
    },
  ],
  viy2DateTimePicker_4EmGY8Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.operationStartDate')]),
      enabled: requireValid,
    },
  ],
  viy2DateTimePicker_5XaYDsRules: [
    {
      required: true,
      message: t('errors.required', [t('label.operationFinishDate')]),
      enabled: requireValid,
    },
  ],
  viy2Select_aBkHE6Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.paymentMethod')]),
      enabled: requireValid,
    },
  ],
});
const jobGridRules = {
  serviceCategoryId: [
    { required: true, message: t('errors.required', [t('label.category')]) },
  ],
  sellingPrice: [
    { required: true, message: t('errors.required', [t('label.sellingPrice')]) },
  ],
};
const partsGridRules = {
  qty: [
    { required: true, message: t('errors.required', [t('label.quantity')]) },
    { pattern: /^[1-9]\d*$/, message: t('M.E.00200', [t('label.quantity'), 0]) },
  ],
  sellingPrice: [
    { required: true, message: t('errors.required', [t('label.sellingPrice')]) },
  ],
};
const showServiceHist = ref(false);
const histGridEditConfig = reactive({
  trigger: 'click',
});
const histGridMouseConfig = reactive({
  extension: true,
});
const showFreeCouponWin = ref(false);
const viy2Table_gnRc4EditConfig = reactive({
  trigger: 'click',
});
const viy2Table_gnRc4MouseConfig = reactive({
  extension: true,
});
const showConsumerListWin = ref(false);
const showConsumerInfoWin = ref(false);
const showSymptomWin = ref(false);
const showPackageWin = ref(false);
const showPartsMultiWin = ref(false);
const jobGridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  beforeEditMethod: (obj) => {
    // ['serviceCategoryId','demand'] => SPECIAL_CLAIM
    const property = obj.column.property;
    let editFlag;
    if (property.indexOf('GroupColumn') > 0) {
      editFlag = isColumnEditStatus();
    } else if (['jobCd', 'discountAmt', 'discount', 'specialPrice'].includes(property)) {
      editFlag = isColumnEditStatus();
    } else {
      editFlag = isEditStatus();
    }
    if (editFlag) {
      const serviceCtg = obj.row.serviceCategoryId;
      switch (property) {
        case 'jobCd':
          editFlag = serviceCtg != ServiceCategory.FREECOUPON;
          break;
        case 'symptomId':
          editFlag = serviceCtg == ServiceCategory.CLAIM;
          break;
      }
    }
    // 当选择DV时, JOB不可编辑
    if (serviceFormData.serviceCategoryId == ServiceCategory.SPECIALCLAIM) {
      editFlag = false;
    }
    return editFlag;
  },
  showStatus: 'true',
});
const jobGridMouseConfig = reactive({
  selected: true,
  extension: true,
});
const jobGridViy2TableButtonColumn_AY9Y4Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delJobRow,
      title: 'Delete',
      disabled: !isEditStatus() || itemsCtl.disJobRowBtn.value,
    },
  ];
};
const partsGridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  beforeEditMethod: (obj) => {
    const property = obj.column.property;
    let editFlag = isEditStatus();
    // 初始时，
    if (property.indexOf('GroupColumn') > 0) {
      const params = obj.column.params.children;
      if (params[1].field == 'specialPrice'
|| params[0].field == 'discountAmt'
|| params[1].field == 'discount') {
        editFlag = editFlag && motorFormData.createForEmployeeFlag != '1';
      } else if (params[0].field == 'qty') {
        if (obj.row.batteryFlag == 'Y' && motorFormData.evFlag == 'Y') {
          editFlag = false;
        }
      } else if (params[0].field == 'serviceCategoryId') {
        editFlag = editFlag && obj.row.serviceCategoryId != ServiceCategory.SPECIALCLAIM;
      }
    } else if (property == 'batteryType') {
      if (!editFlag) {
        editFlag = row.batteryFlag != 'Y';
      }
    }
    if (editFlag) {
      const serviceCtg = obj.row.serviceCategoryId;
      if (property == 'symptomId') {
        editFlag = serviceCtg == ServiceCategory.CLAIM;
      }
    }
    // 有orderItemId行时，
    const orderItemId = obj.row.salesOrderItemId;
    if (orderItemId) {
      if (property.indexOf('GroupColumn') > 0) {
        const paramsItem = obj.column.params.children;
        if (paramsItem[0].field == 'serviceCategoryId') {
          editFlag = false;
        }
      } else if (['symptomId', 'partCd'].includes(property)) {
        editFlag = false;
      }
    }
    return editFlag;
  },
});
const partsGridMouseConfig = reactive({
  extension: true,
});
const partsGridViy2TableButtonColumn_AYpvwButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delPartsRow,
      title: 'Delete',
      disabled: !isEditStatus(),
    },
  ];
};
const summaryGridEditConfig = reactive({
  trigger: 'click',
});
const summaryGridMouseConfig = reactive({
  extension: true,
});
const settleOrderDsApi = useApi({
  url: '/service/svm0102/settleServiceOrder.json',
  method: 'post',
  data: () => {
    return apiFormData();
  },
}, {
  onSuccess: (data, params) => {
    success_msg(t('ymc-commons.P.00005'));
    orderDetailDsApi.runAsync();
  },
  manual: true,
});
const settleOrderDs = settleOrderDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
  lockScreen: false,
});
const brandDs = brandDsApi.data;
const refreshPrivacyDsApi = useApi({
  url: '/common/codevalue/getPrivacyPolicyResult.json',
  method: 'post',
  data: () => {
    return {
      mobilePhone: motorFormData.mobilephone,
      firstNm: motorFormData.firstName,
      middleNm: motorFormData.middleName,
      lastNm: motorFormData.lastName,
    };
  },
  lockScreen: false,
}, {
  onSuccess: (data) => {
    const agreementResult = data.agreementResult;
    if (!agreementResult) {
      motorFormData.policyResultFlag = null;
      motorFormData.dbPolicyResult = null;
      policyFileName.value = null;
    } else {
      motorFormData.policyResultFlag = agreementResult;
      motorFormData.dbPolicyResult = agreementResult;
      policyFileName.value = agreementResult;
    }
  },
  manual: true,
});
const refreshPrivacyDs = refreshPrivacyDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const motorDetailDsApi = useApi({
  url: '/service/svm0102/getMotorDetailByPlateOrFrame.json',
  method: 'post',
  data: () => {
    return {
      motorInfo: {
        plateNo: motorFormData.plateNo,
        frameNo: motorFormData.frameNo,
      },
    };
  },
  lockScreen: false,
}, {
  onSuccess: (data, params) => {
    callbackMotorDtlApi(data);
  },
  manual: true,
});
const motorDetailDs = motorDetailDsApi.data;
const orderDetailDsApi = useApi({
  url: '/service/svm0102/getServiceDetailByIdOrNo.json',
  method: 'post',
  data: () => {
    return {
      basicInfo: {
        orderNo: basicFormData.orderNo,
        serviceOrderId: basicFormData.serviceOrderId,
      },
    };
  }
  ,
}, {
  onSuccess: (data, params) => {
    callbackServiceDtlApi(data);
  },
  manual: true,
});
const orderDetailDs = orderDetailDsApi.data;
const cancelOrderDsApi = useApi({
  url: '/service/svm0102/cancelServiceOrder.json',
  method: 'post',
  data: () => {
    return apiFormData();
  },
}, {
  onSuccess: (data, params) => {
    success_msg(t('ymc-commons.P.00005'));
    orderDetailDsApi.runAsync();
  },
  manual: true,
});
const cancelOrderDs = cancelOrderDsApi.data;
const saveOrderDsApi = useApi({
  url: '/service/svm0102/newOrModifyServiceOrder.json',
  method: 'post',
  data: () => {
    return apiFormData();
  },
}, {
  onSuccess: (data, params) => {
    success_msg(t('ymc-commons.P.00005'));
    basicFormData.serviceOrderId = data;
    orderDetailDsApi.runAsync();
  },
  manual: true,
});
const saveOrderDs = saveOrderDsApi.data;
const employeeDsApi = useApi({
  url: '/common/helper/employeeList.json',
  method: 'post',
  data: {},
});
const employeeDs = employeeDsApi.data;
const paymentMethodDsApi = useApi({
  url: '/common/helper/getPaymentMethodTypeList.json',
  method: 'post',
  lockScreen: false,
});
const paymentMethodDs = paymentMethodDsApi.data;
const svCategoryDsApi = useApi({
  url: '/common/helper/getSvCategoryList.json',
  method: 'post',
  data: () => {
    return {
    };
  },
}, {
  onSuccess: (data) => {
    const initCtg = data.length > 0 ? data[0].codeDbid : '';
    serviceFormData.serviceCategoryId = initCtg;
  },
});
const svCategoryDs = svCategoryDsApi.data;
const consumerUploadPrivacyDsApi = useApi({
  url: '/common/consumer/consumerUploadPrivacy.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const consumerUploadPrivacyDs = consumerUploadPrivacyDsApi.data;
const mstCodeDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: mstCodeApiParam.value,
  lockScreen: false,
}, {
  onSuccess: (data, params) => {
    mstCodeData.value = data;
  },
});
const mstCodeDs = mstCodeDsApi.data;
const viy2Button_8d8tClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    basicFormData.orderNo = '';
    basicFormData.serviceOrderId = '';
    policyFileName.value = null;
    orderDetailDsApi.runAsync();
  }).catch(() => {
  });
};
const viy2Icon_xrlyKClick = () => {
  isCollapse.value = false;
  toggleAllPanel();
};
const viy2Icon_5oqsqoClick = () => {
  isCollapse.value = true;
  toggleAllPanel();
};
const confirmBtnClick = () => {
  submitOrderForm('!CONFIRM');
};
const printJobCardBtnClick = () => {
  saveOrUpdateServiceDsApi.runAsync();
};
const printServiceOrderBtnClick = () => {
  saveOrUpdateServiceDsApi.runAsync();
};
const settleBtnClick = () => {
  requireValid.value = true;
  submitOrderForm('!SETTLE');
};
const cancelBtnClick = () => {
  cancelOrderDsApi.runAsync();
};
const viy2Button_3b5mQ9Click = () => {
  orderDetailDsApi.runAsync();
};
const conClick = () => {
  consumerListAsideParams.value = {
    frameNo: motorFormData.frameNo,
    serializedProductId: motorFormData.cmmSerializedProductId,
  };
  showConsumerListWin.value = true;
};
const viy2Button_gCcqUClick = () => {
  motorFormData.frameNo = '';
  motorDetailDsApi.runAsync();
};
const downloadUnitBtnClick = () => {
  motorFormData.plateNo = '';
  motorDetailDsApi.runAsync();
};
const viy2InputBox_WVoNnVChange = (value) => {
  onChgConsumerNm();
};
const viy2InputBox_3aq4zEChange = (value) => {
  onChgConsumerNm();
};
const viy2InputBox_WVoNnYChange = (value) => {
  onChgConsumerNm();
};
const viy2Button_gDUZ9Click = () => {
  showConsumerInfoWin.value = true;
  consumerAsideParams.value = {
    consumerId: motorFormData.consumerId,
    lastName: motorFormData.lastName,
    middleName: motorFormData.middleName,
    firstName: motorFormData.firstName,
    mobilephone: motorFormData.mobilephone,
    email: motorFormData.email,
  };
};
const viy2InputBox_adEGw8Change = (value) => {
  onChgConsumerNm();
};
const viy2Button_Sa4WcClick = () => {
  motorFormData.dbPolicyResult = null;
  motorFormData.policyResultFlag = null;
  policyFileName.value = null;
};
const uploadOnSuccess = (response, file) => {
  policyFileName.value = file.name;
  consumerUploadPrivacyDsApi.runAsync({
    privacyResult: motorFormData.policyResultFlag,
    consumerId: motorFormData.consumerId,
    lastNm: motorFormData.lastName,
    middleNm: motorFormData.middleName,
    firstNm: motorFormData.firstName,
    mobilePhone: motorFormData.mobilephone,
  });
};
const viy2Select_41dOfwChange = (value, data) => {
  serviceFormData.mechanicCd = data.code;
  serviceFormData.mechanicNm = data.name;
};
const viy2Button_27Pzh6Click = () => {
// 校验ModelType有输入：因为ModelType会影响JobValueList，modelType变更也会情况JobDetail
// doFlag==1时，弹窗提示经销商选择合适的job
  if (basicFormData.doFlag == doFlag_Y) {
    alert_msg(t('M.E.10332'));
  }
  const $table = jobGrid.value;
  if ($table) {
    const record = initJobRecord();
    nowJobCategory.value = serviceFormData.serviceCategoryId;
    $table.insertAt(record, -1).then((newRow) => {
      $table.setCurrentRow(newRow.row);
    });
  }
};
const jobGridServiceCategoryIdChange = (obj, newValue) => {
  const row = obj.row;
  // 清空Demand
  clearJobRecord(row);
  const category = serviceFormData.serviceCategoryId;
  // 当FreeCoupon和SpecialClaim时，类型选择须与服务信息中的一致
  if ([ServiceCategory.FREECOUPON, ServiceCategory.SPECIALCLAIM].includes(newValue) && newValue != category) {
    row.serviceCategoryId = '';
    warn_msg(t('M.E.10194'));
  } else {
    const newOption = mstCodeData.value.S012.filter(r => r.codeDbid == newValue);
    // SettleTypeId
    row.settleTypeId = newOption.length > 0 ? newOption[0].codeData2 : '';
    nowJobSettleTypeId.value = row.settleTypeId;
    nowJobCategory.value = newValue;
    // 应收合计
    onArGridReconstructed('JOB');
  }
};
const jobGridServiceCategoryIdEvents = reactive({
  change: jobGridServiceCategoryIdChange,
});
const jobGridServiceCategoryIdEditRender = computed(() => {
  return {
    enabled: true,
    events: jobGridServiceCategoryIdEvents,
    options: svCategoryDs.value,
    displayMember: 'codeData1',
    valueMember: 'codeDbid',
  };
});
const jobGridJobNmEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const jobGridManhourFormatter = (obj) => {
  return formatNumberDecimal(obj.cellValue);
};
const jobGridManhourEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const jobGridSpecialPriceChange = (obj, value) => {
  calPriceAndAmtOnEditJobGrid(obj.row, 'specialPrice');
};
const jobGridSpecialPriceEvents = reactive({
  change: jobGridSpecialPriceChange,
});
const jobGridSpecialPriceFormatter = (obj) => {
  return formatPrice(obj.cellValue);
};
const jobGridSpecialPriceEditRender = computed(() => {
  return {
    enabled: true,
    events: jobGridSpecialPriceEvents,
  };
});
const jobGridSellingPriceFormatter = (obj) => {
  return formatPrice(obj.cellValue);
};
const jobGridSellingPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_5XGBRgClick = () => {
  const $table = partsGrid.value;
  if ($table) {
    const record = addPartsRow();
    nowPartsCategory.value = record.serviceCategoryId;
    $table.insertAt(record, -1).then((newRow) => {
      $table.setCurrentRow(newRow.row);
    });
  }
};
const partsGridPartNmEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const partsGridSpecialPriceChange = (obj, value) => {
  const row = obj.row;
  if (value) {
    row.discountAmt = null;
    row.discount = null;
  }
  calculateSellingPrice(row);
};
const partsGridSpecialPriceEvents = reactive({
  change: partsGridSpecialPriceChange,
});
const partsGridSpecialPriceFormatter = (obj) => {
  return formatPrice(obj.cellValue);
};
const partsGridSpecialPriceEditRender = computed(() => {
  return {
    enabled: true,
    events: partsGridSpecialPriceEvents,
    attrs: {
      precision: 0,
      useSeparator: true,
      mark: {
        spaceNumber: 0,
      },
      textAlign: 'right',
    },
  };
});
const partsGridQtyChange = (obj, value) => {
  const row = obj.row;
  calculateSellingPrice(row);
};
const partsGridQtyEvents = reactive({
  change: partsGridQtyChange,
});
const partsGridQtyEditRender = computed(() => {
  return {
    enabled: true,
    events: partsGridQtyEvents,
    attrs: {
      useSeparator: true,
      mark: {
        spaceNumber: 0,
      },
      textAlign: 'right',
    },
  };
});
const partsGridSellingPriceFormatter = (obj) => {
  return formatPrice(obj.cellValue);
};
const partsGridSellingPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      mark: {
        spaceNumber: 0,
      },
      textAlign: 'right',
    },
  };
});
const partsGridAmountFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const partsGridAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      mark: {
        spaceNumber: 0,
      },
      textAlign: 'right',
    },
  };
});
const summaryGridSettleTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const summaryGridJobDetailFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const summaryGridJobDetailEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
    },
  };
});
const summaryGridPartDetailFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const summaryGridPartDetailEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const summaryGridTotalFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const summaryGridTotalEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_4QEiQzClick = () => {
  showServiceHist.value = false;
};
const histGridOrderDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const histGridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const histGridServiceCategoryEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const histGridServiceTitleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_50TfIHClick = () => {
  showFreeCouponWin.value = false;
};
const viy2Table_gnRc4CouponNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_gnRc4CouponResultEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
watch([() => motorFormData.lastName, () => motorFormData.middleName, () => motorFormData.firstName, () => motorFormData.mobilephone], (nval, oval) => {
  const fullNm = motorFormData.lastName + motorFormData.middleName + motorFormData.firstName;
  const mobilePhone = motorFormData.mobilephone;
  if (!fullNm || !mobilePhone || mobilePhone.length != 10) {
    disUploadPrivacy.value = true;
  } else {
    disUploadPrivacy.value = false;
  }
}, { deep: true });
onMounted(() => {
  initScreen();
});
// 监听router参数有变化时，
watch(() => routeParam, (newVal, oldVal) => {
  initScreen();
}, { deep: true },
);
const initScreen = () => {
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    basicFormData.serviceOrderId = params.serviceOrderId;
    basicFormData.orderNo = params.orderNo;
  }
  orderDetailDsApi.runAsync();
};
/** 初始 */
// 画面初始请求订单信息事件
const callbackServiceDtlApi = (data) => {
  clearFieldsData();
  initOrderFormData(data);
  // 应付明细行尾合计
  sumArGridFooter();
  // 清空表单校验
  clearValidate();
};
// 请求FormData
const apiFormData = () => {
  const form = {
    basicInfo: basicFormData,
    motorInfo: motorFormData,
    serviceInfo: serviceFormData,
    jobList: jobGrid.value ? jobGrid.value.getRecordset() : null,
    partList: partsGrid.value ? partsGrid.value.getRecordset() : null,
  };
  form.serviceInfo.depositAmt = orderFormData.depositAmt;
  form.serviceInfo.paymentMethodId = orderFormData.paymentMethodId;
  return form;
};
/** 按钮事件 */
const delJobRow = (row) => {
  jobGrid.value.remove(row);
  onArGridReconstructed('JOB');
};
const delPartsRow = (row) => {
  partsGrid.value.remove(row);
  onArGridReconstructed('PARTS');
};
const addPartsRow = () => {
  const record = {};
  record.specialPrice = 0; record.sellingPrice = 0; record.amount = 0; record.qty = 1;
  return record;
};
// JobGrid: ['discountAmt','discount','specialPrice']
const calPriceAndAmtOnEditJobGrid = (row, property) => {
  calPriceAndAmtOnJobGrid(row, property);
  onArGridReconstructed('JOB');
};
// 更新: 应收款合计
const onArGridReconstructed = (GRID) => {
  let $table = null;
  switch (GRID) { // 清空记录
    case 'JOB': $table = jobGrid.value;
      gridData.value.summary.forEach((row) => {
        row.jobDetail = 0; row.total = 0;
      });
      break;
    case 'PARTS': $table = partsGrid.value;
      gridData.value.summary.forEach((row) => {
        row.partDetail = 0; row.total = 0;
      });
      break;
  }
  // 按settleTypeId合计应收款
  const newSum = sumBySettleType($table, GRID, motorFormData.evFlag);
  // 应收款合计列重计算
  gridData.value.summary.forEach((row) => {
    sumArRowTotal(row, newSum, GRID);
  });
  // 列合计重计算
  sumArGridFooter();
};
// 应付明细行尾合计
const sumArGridFooter = () => {
  const rows = gridData.value.summary.length;
  gridData.value.summary.forEach((row) => {
    if (row.settleTypeId !== 'SUM') {
      Object.keys(row).forEach((key) => {
        if (!['settleType', 'settleTypeId'].includes(key)) {
          gridData.value.summary[rows - 1][key] += row[key];
        }
      });
    }
  });
};
/** Change事件 */
const onChgConsumerNm = () => {
  motorFormData.fullNm = `${motorFormData.lastName
 }__${!!motorFormData.middleName}`
    ? motorFormData.middleName
    : ' '
+ `__${motorFormData.firstName}`;
  if (motorFormData.lastName && motorFormData.mobilephone) {
    refreshPrivacyDsApi.runAsync();
  }
};
/** 请求处理结果 */
// 画面初始请求: Success
const initOrderFormData = (data) => {
  const { basicInfo, motorInfo, serviceInfo, jobList, partList, summaryList } = data;
  if (basicInfo.serviceOrderId) {
    merge(basicFormData, basicInfo);
    merge(motorFormData, motorInfo);
    merge(serviceFormData, serviceInfo);
    motorFormData.stuDate = motorFormData.soldDate;
    motorFormData.dbModelTypeId = motorFormData.modelTypeId;
    motorFormData.dbPolicyResult = motorInfo.policyResultFlag;
    situationGrid.value = situationList;
    gridData.value.job = jobList;
    gridData.value.parts = partList;
    gridData.value.summary = summaryList;
    orderFormData.depositAmt = serviceFormData.depositAmt;
    orderFormData.paymentMethodId = serviceFormData.paymentMethodId;
  } else {
    basicFormData.point = basicInfo.point;
    basicFormData.pointCd = basicInfo.pointCd;
    basicFormData.pointNm = basicInfo.pointNm;
    basicFormData.pointId = basicInfo.pointId;
    basicFormData.orderDate = basicInfo.orderDate;
    basicFormData.orderStatus = basicInfo.orderStatus;
    basicFormData.orderStatusId = basicInfo.orderStatusId;
    basicFormData.doFlag = basicInfo.doFlag;
    serviceFormData.editor = serviceInfo.editor;
    serviceFormData.startTime = serviceInfo.startTime;
    motorFormData.dbPolicyResult = null;
    gridData.value.summary = summaryList;
  }
  initData.value.modelType = motorFormData.modelTypeId;
  requireDoFlag.value = (basicFormData.doFlag === doFlag_Y);
  // 类型初始化
  if (!serviceFormData.serviceCategoryId) {
    serviceFormData.serviceCategoryId = svCategoryDs.value[0].codeDbid;
  }
};
// 清空表单校验
const clearValidate = () => {
  setTimeout(() => {
    motorForm.value.clearValidate();
    serviceForm.value.clearValidate();
  }, 200);
};
// 车牌号请求：Success
const callbackMotorDtlApi = (data) => {
  const { motorInfo, batteryList } = data;
  merge(motorFormData, motorInfo);
  motorFormData.stuDate = motorFormData.soldDate;
  motorFormData.dbModelTypeId = motorFormData.modelTypeId;
  motorFormData.dbPolicyResult = motorInfo.policyResultFlag;
};
const autoAddJobRecord = (item) => {
  const jobRecord = initJobRecord();
  if (item.code) {
    jobRecord.jobCd = item.code;
    cbServiceJobVL(jobRecord, item);
  }
  nowJobCategory.value = serviceFormData.serviceCategoryId;
  return jobRecord;
};
const initJobRecord = () => {
  const record = {
    manhour: 0.0,
    standardPrice: 0,
    sellingPrice: 0,
  };
  return record;
};
const clearJobRecord = (row) => {
  row.settleTypeId = '';
  row.jobCd = '';
  row.jobNm = '';
  row.jobId = '';
  row.manhour = 0.0;
  row.sellingPrice = 0;
  row.specialPrice = null;
};
/** 画面元素状态性控制 */
const isNewStatus = () => {
  const orderStatus = basicFormData.orderStatusId;
  return !!orderStatus && orderStatus == ServiceOrderStatus.NEW; // 00
};
const isSettleStatus = () => {
  const orderStatus = basicFormData.orderStatusId;
  return !!orderStatus && orderStatus == ServiceOrderStatus.WAITFORSETTLE; // 60
};
const isCompleteStatus = () => {
  const orderStatus = basicFormData.orderStatusId;
  return !!orderStatus && orderStatus == ServiceOrderStatus.COMPLETED; // ZZ
};
const isEditStatus = () => {
  const enableSts = [ServiceOrderStatus.NEW, ServiceOrderStatus.WAITFORSETTLE]; // 00|60
  const orderStatus = basicFormData.orderStatusId;
  return !!orderStatus && enableSts.includes(orderStatus);
};
const isDoneStatus = () => {
  const enableSts = [ServiceOrderStatus.COMPLETED, ServiceOrderStatus.CANCELLED]; // ZZ
  const orderStatus = basicFormData.orderStatusId;
  return !!orderStatus && enableSts.includes(orderStatus);
};
const isColumnEditStatus = () => {
  if (serviceFormData.serviceCategoryId == ServiceCategory.SPECIALCLAIM) {
    return true;
  }
  return isEditStatus();
};
// 收起-展开所有Panel
const toggleAllPanel = () => {
  const value = isCollapse.value;
  [basicPanelMdl, motorPanelMdl, servicePanelMdl, jobPanelMdl, partsPanelMdl].forEach(panel => panel.value = value);
};
// 清空画面所有记录
const clearFieldsData = () => {
  serviceForm.value.resetFields();
  clearFormData(basicFormData);
  clearFormData(motorFormData);
  orderFormData.depositAmt = 0;
  orderFormData.paymentMethodId = '';
  Object.keys(gridData.value).forEach((key) => {
    gridData.value[key] = [];
  });
  // 画面元素可用性参数
  clearItemCtrl();
  // 初始化校验控制
  requireValid.value = false;
  requireDoFlag.value = false;
};
const clearItemCtrl = () => {
  itemsCtl.partsColumnByEmploy.value = false;
  itemsCtl.disJobRowBtn.value = false;
  itemsCtl.disSituationRowBtn.value = false;
  itemsCtl.enableServiceCategory.value = true;
};
/** 侧边栏回调 */
const onClearServiceJob = (row) => {
  row.jobId = ''; row.jobNm = ''; row.manhour = '';
  row.sellingPrice = '';
  row.specialPrice = null;
};
// 配件明细：PartsValueList
const clearPartsOnPartsGrid = (row) => {
  row.partId = '';
  row.partNm = '';
  row.specialPrice = '';
  row.sellingPrice = 0;
  row.amount = 0;
  row.qty = 1;
  onArGridReconstructed('PARTS');
};
// 计算配件的SellingPrice
const calculateSellingPrice = (row) => {
  const createForEmployeeFlag = motorFormData.createForEmployeeFlag;
  const hasEmployeeCd = !!motorFormData.employeeCd;
  calSellingPrice(row, createForEmployeeFlag, hasEmployeeCd);
  // 更新应收合计
  onArGridReconstructed('PARTS');
};
// 选择消费者侧边栏
const cbSelectConsumer = (param) => {
  if (param) {
    motorFormData.policyResultFlag = null; // 清空原隐私政策结果
    motorFormData.lastName = param.lastNm;
    motorFormData.middleName = param.middleNm;
    motorFormData.firstName = param.firstNm;
    motorFormData.consumerId = param.consumerId;
    motorFormData.mobilephone = param.mobilePhone;
    motorFormData.email = param.email;
    motorFormData.dbPolicyResult = param.agreementResult;
    motorFormData.policyResultFlag = param.agreementResult;
    showConsumerListWin.value = false;
  }
};
const clsConsumerAside = () => {
  showConsumerListWin.value = false;
};
// consumer
const cbConsumerInfo = (data) => {
  motorFormData.lastName = data.lastNm;
  motorFormData.middleName = data.middleNm;
  motorFormData.firstName = data.firstNm;
  motorFormData.mobilephone = data.mobilephone;
  motorFormData.email = data.email;
  motorFormData.consumerId = data.consumerId;
  showConsumerInfoWin.value = false;
  refreshPrivacyDsApi.runAsync();
};
const clsConsumerInfoAside = () => {
  showConsumerInfoWin.value = false;
};
// 隐私政策上传校验
const checkUpload = () => {
  if (!motorFormData.dbPolicyResult && !!motorFormData.policyResultFlag && !policyFileName.value) {
    warn_msg(t('M.E.10313'));
    return false;
  }
  return true;
};
// 表单校验
const submitOrderForm = (action) => {
  if (!checkUpload()) {
    return;
  }
  basicForm.value.validate((validBasic) => {
    if (validBasic) {
      motorForm.value.validate((validMotor) => {
        if (validMotor) {
          serviceForm.value.validate((validService) => {
            if (validService) {
              if (action == '!SETTLE') {
                if (!serviceFormData.operationStart) {
                  VueMessage.error(t('errors.required', [t('label.operationStartDate')]));
                  return false;
                }
                if (!serviceFormData.operationFinish) {
                  VueMessage.error(t('errors.required', [t('label.operationFinishDate')]));
                  return false;
                }
                if (!serviceFormData.mechanic) {
                  VueMessage.error(t('errors.required', [t('label.mechanic')]));
                  return false;
                }
              }
              jobGrid.value.fullValidate((validJob) => {
                if (!validJob) {
                  partsGrid.value.fullValidate((validParts) => {
                    if (!validParts) {
                      orderForm.value.validate((validAR) => {
                        if (validAR) {
                          if (action == '!CONFIRM') {
                            saveOrderDsApi.runAsync();
                          } else if (action == '!SETTLE') {
                            settleOrderDsApi.runAsync();
                          }
                        } else {
                          return false;
                        }
                      });
                    } else {
                      return false;
                    }
                  });
                } else {
                  return false;
                }
              });
            } else {
              return false;
            }
          });
        } else {
          return false;
        }
      });
    } else {
      return false;
    }
  });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_GgDWR"
      ref="viy2Row_GgDWR"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" type="warning" @click="viy2Button_8d8tClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueIcon
          id="viy2Icon_xrlyK"
          ref="viy2Icon_xrlyK"
          class="rotate-icon"
          @click="viy2Icon_xrlyKClick"
        >
          <component :is="IconDArrowLeft" />
        </VueIcon>
        <VueIcon
          id="viy2Icon_5oqsqo"
          ref="viy2Icon_5oqsqo"
          class="rotate-icon"
          @click="viy2Icon_5oqsqoClick"
        >
          <component :is="IconDArrowRight" />
        </VueIcon>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton v-if="isEditStatus()" id="confirmBtn" ref="confirmBtn" icon-position="left" type="info" @click="confirmBtnClick">
          {{ t('button.confirm') }}
        </VueButton>
        <VueButton v-if="isSettleStatus()" id="printJobCardBtn" ref="printJobCardBtn" icon-position="left" type="info" @click="printJobCardBtnClick">
          {{ t('button.printJobCard') }}
        </VueButton>
        <VueButton v-if="isSettleStatus() || isCompleteStatus()" id="printServiceOrderBtn" ref="printServiceOrderBtn" icon-position="left" type="info" @click="printServiceOrderBtnClick">
          {{ t('button.printServiceOrder') }}
        </VueButton>
        <VueButton v-if="isSettleStatus()" id="settleBtn" ref="settleBtn" icon-position="left" type="info" @click="settleBtnClick">
          {{ t('button.settle') }}
        </VueButton>
        <VueButton v-if="isSettleStatus()" id="cancelBtn" ref="cancelBtn" icon-position="left" type="info" @click="cancelBtnClick">
          {{ t('button.cancel') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="orderForm"
      ref="orderForm"
      class="margin-top-div"
      :model="orderFormData"
    >
      <VuePanel id="basicInfo" ref="basicInfo" v-model="basicPanelMdl" :title="t('label.header')">
        <VueForm
          id="basicForm"
          ref="basicForm"
          :disabled="isDoneStatus()"
          label-width="133px"
          :model="basicFormData"
        >
          <VueRow
            id="viy2Row_118QTw"
            ref="viy2Row_118QTw"
          >
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.point')"
                prop="pointId"
                :rules="rules.viy2Select_1rPSyEHRules"
              >
                <VueSelect
                  id="viy2Select_1rPSyEH"
                  ref="viy2Select_1rPSyEH"
                  v-model="basicFormData.pointId"
                  :style="{ width: '300px' }"
                  :collapse-tags="true"
                  :clearable="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :disabled="!isNewStatus()"
                  :options="pointDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.orderNo')"
                prop="orderNo"
              >
                <VueInput
                  id="viy2InputBox_3b5mPM"
                  ref="viy2InputBox_3b5mPM"
                  v-model="basicFormData.orderNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :disabled="!!basicFormData.serviceOrderId"
                  :style="{ width: '200px' }"
                >
                  <template #append>
                    <VueButton v-if="!isDoneStatus()" id="viy2Button_3b5mQ9" ref="viy2Button_3b5mQ9" icon-position="left" :disabled="!basicFormData.orderNo" class="icon-button-width" :icon="IconArrowRightBold" @click="viy2Button_3b5mQ9Click" />
                  </template>
                </VueInput>
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.orderDate')"
                prop="orderDate"
              >
                <VueDatePicker
                  id="orderDate"
                  ref="orderDate"
                  v-model="basicFormData.orderDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.orderStatus')"
                prop="orderStatus"
              >
                <VueInput
                  id="viy2InputBox_8x42Gg"
                  ref="viy2InputBox_8x42Gg"
                  v-model="basicFormData.orderStatus"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="motorInfo" ref="motorInfo" v-model="motorPanelMdl" :title="t('label.consumerAndUnitInfo')">
        <template #header>
          <div style="width: 500px">
            <VueRow
              v-show="motorPanelMdl"
              id="viy2Row_l9gv0"
              ref="viy2Row_l9gv0"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueButton v-if="!isDoneStatus()" id="con" ref="con" icon-position="left" :disabled="!(motorFormData.modelId && isEditStatus())" @click="conClick">
                  {{ t('button.selectConsumer') }}
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueForm
          id="motorForm"
          ref="motorForm"
          :disabled="isDoneStatus()"
          label-width="133px"
          :model="motorFormData"
        >
          <VueRow
            id="viy2Row_52VUwT"
            ref="viy2Row_52VUwT"
          >
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.brand')"
                prop="brand"
                :rules="rules.viy2Select_4REDEWRules"
              >
                <VueSelect
                  id="viy2Select_4REDEW"
                  ref="viy2Select_4REDEW"
                  v-model="motorFormData.brand"
                  :style="{ width: '160px' }"
                  :enabled="requireValid"
                  :clearable="true"
                  :options="brandDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.numberPlate')"
                prop="plateNo"
                :rules="rules.plateNoRules"
              >
                <VueInput
                  id="plateNo"
                  ref="plateNo"
                  v-model="motorFormData.plateNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :maxlength="30"
                  :style="{ width: '200px' }"
                >
                  <template #append>
                    <VueButton v-if="!isDoneStatus()" id="viy2Button_gCcqU" ref="viy2Button_gCcqU" icon-position="left" :disabled="!!motorFormData.modelId || (!motorFormData.modelId && !motorFormData.plateNo)" class="icon-button-width" :icon="IconArrowRightBold" @click="viy2Button_gCcqUClick" />
                  </template>
                </VueInput>
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.frameNumber')"
                prop="frameNo"
                :rules="rules.viy2InputBox_5TZFi2Rules"
              >
                <VueInput
                  id="viy2InputBox_5TZFi2"
                  ref="viy2InputBox_5TZFi2"
                  v-model="motorFormData.frameNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :disabled="!!motorFormData.modelId"
                  :maxlength="30"
                  :style="{ width: '200px' }"
                >
                  <template #append>
                    <VueButton v-if="!isDoneStatus()" id="downloadUnitBtn" ref="downloadUnitBtn" icon-position="left" :disabled="!!motorFormData.modelId || (!motorFormData.modelId && !motorFormData.frameNo)" class="icon-button-width" :icon="IconArrowRightBold" @click="downloadUnitBtnClick" />
                  </template>
                </VueInput>
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.model')"
                prop="model"
              >
                <VueInput
                  id="model"
                  ref="model"
                  v-model="motorFormData.model"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.consumer')"
                prop="lastName"
                :rules="rules.viy2InputBox_WVoNnVRules"
              >
                <VueInput
                  id="viy2InputBox_WVoNnV"
                  ref="viy2InputBox_WVoNnV"
                  v-model="motorFormData.lastName"
                  :maxlength="50"
                  :style="{ width: '150px' }"
                  @change="viy2InputBox_WVoNnVChange"
                />
              </VueFormItem>
              <VueFormItem
                label-width="2px"
                prop="middleName"
              >
                <VueInput
                  id="viy2InputBox_3aq4zE"
                  ref="viy2InputBox_3aq4zE"
                  v-model="motorFormData.middleName"
                  :maxlength="50"
                  :style="{ width: '150px' }"
                  @change="viy2InputBox_3aq4zEChange"
                />
              </VueFormItem>
              <VueFormItem
                label-width="2px"
                prop="firstName"
                :rules="rules.viy2InputBox_WVoNnYRules"
              >
                <VueInput
                  id="viy2InputBox_WVoNnY"
                  ref="viy2InputBox_WVoNnY"
                  v-model="motorFormData.firstName"
                  :maxlength="50"
                  :style="{ width: '150px' }"
                  @change="viy2InputBox_WVoNnYChange"
                >
                  <template #append>
                    <VueButton v-if="!isDoneStatus()" id="viy2Button_gDUZ9" ref="viy2Button_gDUZ9" icon-position="left" type="primary" class="icon-button-width" :icon="IconUserFilled" @click="viy2Button_gDUZ9Click" />
                  </template>
                </VueInput>
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.mobilephone')"
                prop="mobilephone"
                :rules="rules.viy2InputBox_adEGw8Rules"
              >
                <VueInput
                  id="viy2InputBox_adEGw8"
                  ref="viy2InputBox_adEGw8"
                  v-model="motorFormData.mobilephone"
                  :maxlength="10"
                  :style="{ width: '160px' }"
                  @change="viy2InputBox_adEGw8Change"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                v-if="basicFormData.doFlag == doFlag_Y"
                :label="t('label.email')"
                prop="email"
                :rules="rules.viy2InputBox_8x7vGQRules"
              >
                <VueInput
                  id="viy2InputBox_8x7vGQ"
                  ref="viy2InputBox_8x7vGQ"
                  v-model="motorFormData.email"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.privacyPolicyResult')"
                label-width="150px"
                prop="policyResultFlag"
              >
                <VueRadioGroup
                  id="viy2Radio_5WHgzs3"
                  ref="viy2Radio_5WHgzs3"
                  v-model="motorFormData.policyResultFlag"
                  radio-style="button"
                  direction="horizontal"
                  :disabled="[ServiceOrderStatus.COMPLETED, ServiceOrderStatus.CANCELLED].includes(basicFormData.orderStatusId) || !!dbPolicyResult"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in mstCodeData.S062"
                    :key="option.codeDbid"
                    :label="option.codeDbid"
                    :name="option.name"
                    :disabled="option.disabled"
                  >
                    {{ option.codeData1 }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueButton v-if="!!motorFormData.dbPolicyResult" id="viy2Button_Sa4Wc" ref="viy2Button_Sa4Wc" icon-position="left" :disabled="[ServiceOrderStatus.COMPLETED, ServiceOrderStatus.CANCELLED].includes(basicFormData.orderStatusId)" class="margin-left-10" @click="viy2Button_Sa4WcClick">
                {{ t('button.reset') }}
              </VueButton>
              <VueUpload v-if="!motorFormData.dbPolicyResult && !!motorFormData.policyResultFlag" id="upload" ref="upload" :limit="1" action="http://localhost:8080/a1stream/api/public/test/escortFileUploadTest.json" :disabled="disUploadPrivacy || [ServiceOrderStatus.COMPLETED, ServiceOrderStatus.CANCELLED].includes(basicFormData.orderStatusId)" class="upload-container" :on-success="uploadOnSuccess">
                <template #trigger>
                  <VueButton>
                    {{ t('title.chooseUploadFile') }}
                  </VueButton>
                </template>
              </VueUpload>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 1 }"
            />
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="serviceInfo" ref="serviceInfo" v-model="servicePanelMdl" :title="t('label.serviceInformation')">
        <template #header>
          <div style="width: 500px">
            <VueRow
              v-show="servicePanelMdl"
              id="viy2Row_tmVHy"
              ref="viy2Row_tmVHy"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              />
            </VueRow>
          </div>
        </template>
        <VueForm
          id="serviceForm"
          ref="serviceForm"
          :disabled="isDoneStatus()"
          label-width="133px"
          :model="serviceFormData"
        >
          <VueRow
            id="viy2Row_AQDYG"
            ref="viy2Row_AQDYG"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.mileage')"
                prop="mileage"
                :rules="rules.viy2InputNumber_uLkZoRules"
              >
                <VueInputNumber
                  id="viy2InputNumber_uLkZo"
                  ref="viy2InputNumber_uLkZo"
                  v-model="serviceFormData.mileage"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.cashier')"
                prop="cashier"
              >
                <VueInput
                  id="viy2InputBox_8xtAIG"
                  ref="viy2InputBox_8xtAIG"
                  v-model="serviceFormData.cashier"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.mechanic')"
                prop="mechanicId"
                :rules="rules.viy2Select_41dOfwRules"
              >
                <VueSelect
                  id="viy2Select_41dOfw"
                  ref="viy2Select_41dOfw"
                  v-model="serviceFormData.mechanicId"
                  :style="{ width: '200px' }"
                  :collapse-tags="true"
                  :clearable="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :options="employeeDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                  @change="viy2Select_41dOfwChange"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            />
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.serviceTitle')"
                prop="serviceTitle"
              >
                <VueInput
                  id="viy2InputBox_AVguE"
                  ref="viy2InputBox_AVguE"
                  v-model="serviceFormData.serviceTitle"
                  :maxlength="255"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.operationStartDate')"
                label-width="150px"
                prop="operationStart"
                :rules="rules.viy2DateTimePicker_4EmGY8Rules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_4EmGY8"
                  ref="viy2DateTimePicker_4EmGY8"
                  v-model="serviceFormData.operationStart"
                  type="datetime"
                  :style="{ width: '170px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymdt"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymdt"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.operationFinishDate')"
                label-width="160px"
                prop="operationFinish"
                :rules="rules.viy2DateTimePicker_5XaYDsRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_5XaYDs"
                  ref="viy2DateTimePicker_5XaYDs"
                  v-model="serviceFormData.operationFinish"
                  type="datetime"
                  :style="{ width: '170px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymdt"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymdt"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.mechanicComment')"
                label-width="135px"
                prop="mechanicComment"
              >
                <VueInput
                  id="viy2Textarea_11uEXP"
                  ref="viy2Textarea_11uEXP"
                  v-model="serviceFormData.mechanicComment"
                  type="textarea"
                  :rows="3"
                  :disabled="isDoneStatus()"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="jobInfo" ref="jobInfo" v-model="jobPanelMdl" :title="t('label.serviceJobDetail')">
        <template #header>
          <div style="width: 500px">
            <VueRow
              v-show="jobPanelMdl"
              id="viy2Row_27Pzh4"
              ref="viy2Row_27Pzh4"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueButton v-if="!isDoneStatus()" id="viy2Button_27Pzh6" ref="viy2Button_27Pzh6" icon-position="left" :disabled="!isEditStatus() || itemsCtl.disJobRowBtn.value || !motorFormData.modelId || serviceFormData.serviceCategoryId == ServiceCategory.SPECIALCLAIM" class="icon-button-width" @click="viy2Button_27Pzh6Click">
                  +
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="jobGrid" ref="jobGrid" header-align="center" :keyboard-config="{ isTab: true, isArrow: true }" height="250px" :show-footer="true" :data="gridData.job" :edit-rules="jobGridRules" :edit-config="jobGridEditConfig" :mouse-config="jobGridMouseConfig">
          <VueIndexColumn
            align="center"
            fixed="left"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueSelectColumn
            :edit-render="jobGridServiceCategoryIdEditRender"
            field="serviceCategoryId"
            show-overflow="tooltip"
            :title="t('label.category')"
            width="150px"
          />
          <VueInputColumn
            :edit-render="jobGridJobNmEditRender"
            field="jobNm"
            show-overflow="tooltip"
            :title="t('label.serviceJobName')"
            width="150px"
          />
          <VueNumberColumn
            :formatter="jobGridManhourFormatter"
            :edit-render="jobGridManhourEditRender"
            field="manhour"
            :title="t('label.stdMenHour')"
            width="80px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="jobGridSpecialPriceFormatter"
            :edit-render="jobGridSpecialPriceEditRender"
            field="specialPrice"
            :title="t('label.specialPrice')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="jobGridSellingPriceFormatter"
            :edit-render="jobGridSellingPriceEditRender"
            field="sellingPrice"
            aggregate="sum"
            :title="t('label.sellingPrice')"
            width="120px"
            header-align="center"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            :visible="serviceFormData.serviceCategoryId != ServiceCategory.SPECIALCLAIM"
            width="60px"
            :buttons="jobGridViy2TableButtonColumn_AY9Y4Buttons"
          />
        </VueTable>
      </VuePanel>
      <VuePanel id="partsInfo" ref="partsInfo" v-model="partsPanelMdl" :title="t('button.partsDetail')">
        <template #header>
          <div style="width: 500px">
            <VueRow
              v-show="partsPanelMdl"
              id="viy2Row_gMw4S"
              ref="viy2Row_gMw4S"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueButton v-if="!isDoneStatus()" id="viy2Button_5XGBRg" ref="viy2Button_5XGBRg" icon-position="left" :disabled="!isEditStatus() || !motorFormData.modelId" class="icon-button-width" @click="viy2Button_5XGBRgClick">
                  +
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="partsGrid" ref="partsGrid" height="350px" :border="true" :show-footer="true" :data="gridData.parts" :edit-rules="partsGridRules" :edit-config="partsGridEditConfig" :mouse-config="partsGridMouseConfig">
          <VueIndexColumn
            align="center"
            fixed="left"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="partsGridPartNmEditRender"
            field="partNm"
            show-overflow="tooltip"
            width="200px"
            :title=" t('label.partsName')"
          />
          <VueNumberColumn
            :formatter="partsGridSpecialPriceFormatter"
            :edit-render="partsGridSpecialPriceEditRender"
            field="specialPrice"
            :precision="0"
            align="right"
            :title="t('label.spePrice')"
            width="150px"
          />
          <VueNumberColumn
            :edit-render="partsGridQtyEditRender"
            field="qty"
            align="right"
            aggregate="sum"
            footer-align="right"
            :title="t('label.quantity')"
            width="150px"
          />
          <VueNumberColumn
            :formatter="partsGridSellingPriceFormatter"
            :edit-render="partsGridSellingPriceEditRender"
            field="sellingPrice"
            align="right"
            :title="t('label.sellingPrice')"
            width="150px"
          />
          <VueNumberColumn
            :formatter="partsGridAmountFormatter"
            :edit-render="partsGridAmountEditRender"
            field="amount"
            align="right"
            :aggregate="sumAmount"
            footer-align="right"
            :title="t('label.amount')"
            width="150px"
          />
          <VueButtonColumn
            fixed="right"
            header-align="center"
            align="center"
            width="60px"
            :buttons="partsGridViy2TableButtonColumn_AYpvwButtons"
          />
        </VueTable>
      </VuePanel>
      <VuePanel id="summaryInfo" ref="summaryInfo" v-model="sumPanelMdl" :title="t('label.totalAccountReceivable')">
        <VueTable id="summaryGrid" ref="summaryGrid" header-align="center" :data="gridData.summary" :edit-config="summaryGridEditConfig" :mouse-config="summaryGridMouseConfig">
          <VueInputColumn
            :edit-render="summaryGridSettleTypeEditRender"
            field="settleType"
            :title="t('label.settleType')"
            header-align="center"
            width="200px"
          />
          <VueNumberColumn
            :formatter="summaryGridJobDetailFormatter"
            :edit-render="summaryGridJobDetailEditRender"
            field="jobDetail"
            :title="t('label.serviceJobDetail')"
            width="200px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="summaryGridPartDetailFormatter"
            :edit-render="summaryGridPartDetailEditRender"
            field="partDetail"
            :title="t('label.partsDetail')"
            width="200px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="summaryGridTotalFormatter"
            :edit-render="summaryGridTotalEditRender"
            field="total"
            :title="t('label.total')"
            width="200px"
            header-align="center"
          />
        </VueTable>
        <VueRow
          id="viy2Row_6Fcl"
          ref="viy2Row_6Fcl"
          class="row-margin-top"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.depositAmount')"
              label-width="130px"
              prop="depositAmt"
            >
              <VueInputNumber
                id="viy2InputNumber_13IRNr"
                ref="viy2InputNumber_13IRNr"
                v-model="orderFormData.depositAmt"
                :precision="0"
                :disabled="isDoneStatus()"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              v-if="basicFormData.doFlag == doFlag_Y"
              :label="t('label.paymentMethod')"
              label-width="130px"
              prop="paymentMethodId"
              :rules="rules.viy2Select_aBkHE6Rules"
            >
              <VueSelect
                id="viy2Select_aBkHE6"
                ref="viy2Select_aBkHE6"
                v-model="orderFormData.paymentMethodId"
                :style="{ width: '200px' }"
                :disabled="isDoneStatus()"
                :options="paymentMethodDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <!-- BEGIN CUSTOM DIV CODE -->
        <VueBacktop :right="50" :bottom="30" target=".app-main .vue-scrollbar__wrap" />
        <!-- END CUSTOM DIV CODE -->
      </VuePanel>
    </VueForm>
    <VueAside
      id="serviceHistoryAside"
      ref="serviceHistoryAside"
      v-model="showServiceHist"
      size="50%"
      :show-close="false"
      :with-header="false"
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
          <VueText id="viy2Text_4QEiQo" ref="viy2Text_4QEiQo">
            {{ t('button.viewServiceHistory') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          class="aside-title-button"
          :md="{ span: 17 }"
        >
          <VueButton id="viy2Button_4QEiQz" ref="viy2Button_4QEiQz" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_4QEiQzClick" />
        </VueCol>
      </VueRow>
      <VueFlex
        id="viy2Flex_RBFmg"
        ref="viy2Flex_RBFmg"
        direction="column"
        class="full-height margin-top-aside"
      >
        <VueFlex
          id="viy2Flex_RBLND"
          ref="viy2Flex_RBLND"
          direction="column"
          grow="1"
        >
          <VueTable id="histGrid" ref="histGrid" header-align="center" height="100%" :data="serviceHistDs" :edit-config="histGridEditConfig" :mouse-config="histGridMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
            />
            <VueDateTimeColumn
              :edit-render="histGridOrderDateEditRender"
              field="orderDate"
              align="center"
              :title="t('label.orderDate')"
              width="130px"
            />
            <VueInputColumn
              :edit-render="histGridOrderNoEditRender"
              field="orderNo"
              :title="t('label.orderNo')"
              width="130px"
            />
            <VueInputColumn
              :edit-render="histGridServiceCategoryEditRender"
              field="serviceCategory"
              show-overflow="tooltip"
              :title="t('label.serviceCategory')"
              width="180px"
            />
            <VueInputColumn
              :edit-render="histGridServiceTitleEditRender"
              field="serviceTitle"
              show-overflow="tooltip"
              :title="t('label.serviceTitle')"
              min-width="200px"
            />
          </VueTable>
        </VueFlex>
      </VueFlex>
    </VueAside>
    <VueAside
      id="freeCouponAside"
      ref="freeCouponAside"
      v-model="showFreeCouponWin"
      :modal="true"
      size="40%"
      :with-header="false"
      :show-close="false"
    >
      <VueRow
        id="titler2ow"
        ref="titler2ow"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          class="aside-title-text"
          :md="{ span: 20 }"
        >
          <VueText id="viy2Text_50TfH4" ref="viy2Text_50TfH4" size="large">
            {{ t('common.label.freeCouponResult') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          class="aside-title-button"
          :md="{ span: 4 }"
        >
          <VueButton id="viy2Button_50TfIH" ref="viy2Button_50TfIH" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_50TfIHClick" />
        </VueCol>
      </VueRow>
      <VueForm
        id="couponForm"
        ref="couponForm"
        :model="couponFormData"
      >
        <VueRow
          id="viy2Row_12c7Yr"
          ref="viy2Row_12c7Yr"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              prop="text1"
            >
              <VueInput
                id="viy2InputBox_35kpBO"
                ref="viy2InputBox_35kpBO"
                v-model="couponFormData.text1"
                :readonly="true"
                class="no-border coupon-color1"
              />
            </VueFormItem>
            <VueFormItem
              prop="text2"
            >
              <VueInput
                id="viy2InputBox_35B4TQ"
                ref="viy2InputBox_35B4TQ"
                v-model="couponFormData.text2"
                :readonly="true"
                class="no-border coupon-text"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              prop="text3"
            >
              <VueInput
                id="viy2InputBox_35FUDo"
                ref="viy2InputBox_35FUDo"
                v-model="couponFormData.text3"
                :readonly="true"
                class="no-border coupon-color1"
              />
            </VueFormItem>
            <VueFormItem
              prop="text4"
            >
              <VueInput
                id="viy2InputBox_35zSqU"
                ref="viy2InputBox_35zSqU"
                v-model="couponFormData.text4"
                :readonly="true"
                class="no-border coupon-text"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueRow
        id="viy2Row_14WYKg"
        ref="viy2Row_14WYKg"
      >
        <VueCol
          item-key="item"
          align="center"
          :md="{ span: 24 }"
        >
          <VueTable id="viy2Table_gnRc4" ref="viy2Table_gnRc4" :cell-class-name="couponHistCellClass" :show-header="false" :data="couponFormData.couponResult" :edit-config="viy2Table_gnRc4EditConfig" :mouse-config="viy2Table_gnRc4MouseConfig">
            <VueInputColumn
              :edit-render="viy2Table_gnRc4CouponNameEditRender"
              field="couponName"
              title="input"
              min-width="200px"
            />
            <VueInputColumn
              :edit-render="viy2Table_gnRc4CouponResultEditRender"
              field="couponResult"
              align="center"
              title="input"
              width="80px"
            />
          </VueTable>
        </VueCol>
      </VueRow>
    </VueAside>
    <VueAside
      id="consumerListAside"
      ref="consumerListAside"
      v-model="showConsumerListWin"
      :modal="true"
      :with-header="false"
      :show-close="false"
      size="50%"
      direction="rtl"
    >
      <viy2Subpage_k0p7NPage
        id="viy2Subpage_k0p7N"
        ref="viy2Subpage_k0p7N"
        :params="consumerListAsideParams"
        @select="cbSelectConsumer"
        @close="clsConsumerAside"
      />
    </VueAside>
    <VueAside
      id="consumerInfoAside"
      ref="consumerInfoAside"
      v-model="showConsumerInfoWin"
      :modal="true"
      :with-header="false"
      size="60%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <viy2Subpage_2svxNPage
        id="viy2Subpage_2svxN"
        ref="viy2Subpage_2svxN"
        :params="consumerAsideParams"
        @callback="cbConsumerInfo"
        @close="clsConsumerInfoAside"
      />
    </VueAside>
    <VueAside
      id="symptomAside"
      ref="symptomAside"
      v-model="showSymptomWin"
      :modal="true"
      :with-header="false"
      :show-close="false"
      size="50%"
    >
      <viy2Subpage_k0p7N2Page
        id="viy2Subpage_k0p7N2"
        ref="viy2Subpage_k0p7N2"
        @select="cbSelectSymptom"
        @close="clsSymptomAside"
      />
    </VueAside>
    <VueAside
      id="choseServicePackageAside"
      ref="choseServicePackageAside"
      v-model="showPackageWin"
      :modal="true"
      :with-header="false"
      :show-close="false"
      size="60%"
    />
    <VueAside
      id="partsMultiAside"
      ref="partsMultiAside"
      v-model="showPartsMultiWin"
      :modal="true"
      direction="btt"
      size="90%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <viy2Subpage_9glGGiPage
        id="viy2Subpage_9glGGi"
        ref="viy2Subpage_9glGGi"
        :init-data="multiPartsAsideParams"
        @select="callbkSelectMultiParts"
        @close="closeMultiPartsAside"
      />
    </VueAside>
  </VueForm>
</template>

<style type="text/css" scoped>
:deep(.rotate-icon) {
transform: rotate(90deg);
font-size: large;
align-self: center;
}
:deep(.row-margin-top) {
margin-top: 10px;
}
:deep(.margin-left-10) {
margin-left: 10px;
}
:deep(.upload-container) {
display: flex;
align-items: flex-start;
margin-left: 10px;
}
</style>
