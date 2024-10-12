<script setup>
import { IconArrowRightBold, IconDArrowLeft, IconDArrowRight, IconDelete, IconSearch, IconUserFilled, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';
import { useParams } from 'viy-menu';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT , CONST_SYSTEM_DATE_VALUE_FORMAT , CONST_SYSTEM_TIME_VALUE_FORMAT } from "@/constants";
import viy2Subpage_k0p7NPage from '/commons/select_motor_consumer';
import viy2Subpage_2svxNPage from '/commons/consumer_info';
import viy2Subpage_k0p7N2Page from '/commons/select_symptom';
import viy2Subpage_9glGGiPage from '/src/views/commons/parts_select_multi.vue';
import {
  clearFormData, formatCodeInput
  , formatPartNo
  , formatUpper, success_msg, warn_msg,
} from '@/pj-commonutils.js';
import { ServiceCategory, ServiceOrderStatus, YES_NO_FLAG } from '@/constants/pj-constants.js';
import {
  faultDescription_column, faultDescription_query_method, parts_column,
  parts_pop_column, parts_pop_query_method,
  parts_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
let brandOps = [];
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
  situation: [],
});
// 隐私政策文件上传类型
const policyFileName = ref();
const disUploadPrivacy = ref(false);
// 明细当前选择的类型，作为Demand Valuelist参数
const nowDemagePartsCode = ref();
// 画面元素可用性参数
const itemsCtl = {
  disSituationRowBtn: ref(false),
};
// SETTLE状态校验
const requireValid = ref(false);
const requireDoFlag = ref(false);
// subpage参数
const consumerAsideParams = ref({}); // 消费者详情
const consumerListAsideParams = ref({}); // 选择消费者
// 默认收起situationPanel
const isCollapse = ref(false);
const basicPanelMdl = ref(true);
const motorPanelMdl = ref(true);
const servicePanelMdl = ref(true);
const situationPanelMdl = ref(true);
const batteryPanelMdl = ref(true);
defineOptions({
  name: 'svm0109_01',
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
const plateNo = ref();
const viy2Button_gCcqU = ref();
const viy2DateTimePicker_5U2eFY = ref();
const viy2InputBox_6TOA0I = ref();
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
const viy2Select_AQW3g = ref();
const viy2Select_3eV47I = ref();
const viy2InputBox_5X31yu = ref();
const viy2DateTimePicker_4EmGY8 = ref();
const viy2DateTimePicker_5XaYDs = ref();
const situationInfo = ref();
const viy2Row_wt7cp = ref();
const viy2Button_AQhoR = ref();
const situationGrid = ref();
const viy2Row_PzO64 = ref();
const viy2Button_okLGq = ref();
const viy2CheckBox_8GYdYc = ref();
const viy2CheckBox_5GIDof = ref();
const viy2Row_4BZkRB = ref();
const viy2Row_53iVl = ref();
const viy2Textarea_11uEXP = ref();
const newBatteryInfo = ref();
const viy2Row_6TVUNl = ref();
const batteryForm = ref();
const viy2Row_6TVUNx = ref();
const viy2ValueList_6TVUNI = ref();
const viy2Row_6TVUNK = ref();
const viy2InputBox_6TVUO7 = ref();
const viy2InputBox_171la5u = ref();
const viy2InputBox_171la8L = ref();
const viy2InputNumber_171laaq = ref();
const viy2InputNumber_171laar = ref();
const viy2InputNumber_171lac4 = ref();
const viy2InputNumber_171ladH = ref();
const viy2InputNumber_171ladI = ref();
const consumerListAside = ref();
const viy2Subpage_k0p7N = ref();
const consumerInfoAside = ref();
const viy2Subpage_2svxN = ref();
const symptomAside = ref();
const viy2Subpage_k0p7N2 = ref();
const partsMultiAside = ref();
const viy2Subpage_9glGGi = ref();
const formData = reactive({
});
const orderFormData = reactive({
  mechanicComment: '',
});
const basicFormData = reactive({
  pointId: '', orderNo: '', orderDate: '', orderStatus: '',
});
const motorFormData = reactive({
  plateNo: '', soldDate: '', model: '', model: '', lastName: '', middleName: '', firstName: '', mobilephone: '', email: '', policyResultFlag: '',
});
const serviceFormData = reactive({
  serviceCategoryId: '', welcomeStaffId: '', editor: '', operationStart: '', operationFinish: '',
});
const batteryFormData = reactive({
  partsCd: '', plateNo: '', model: '', model: '', retailPrice: undefined, onHandQty: undefined, allocatedQty: undefined, boQty: undefined, ymvnStock: undefined,
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  plateNoRules: [
    {
      required: true,
      message: t('errors.required', [t('label.numberPlate')]),
    },
  ],
  viy2DateTimePicker_5U2eFYRules: [
    {
      required: true,
      message: t('errors.required', [t('label.soldDate')]),
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
  viy2Select_AQW3gRules: [
    {
      required: true,
      message: t('errors.required', [t('label.category')]),
    },
  ],
  viy2Select_3eV47IRules: [
    {
      required: true,
      message: t('errors.required', [t('label.welcomeStaff')]),
      enabled: requireDoFlag,
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
  viy2InputBox_6TVUO7Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.numberPlate')]),
    },
  ],
});
const situationGridRules = {
  symptom: [
    { required: true, message: t('errors.required', [t('label.symptom')]) },
  ],
  condition: [
    { required: true, message: t('errors.required', [t('label.condition')]) },
  ],
  faultStartDate: [
    { required: true, message: t('errors.required', [t('label.faultStartDate')]) },
  ],
  damagePartCd: [
    { required: true, message: t('errors.required', [t('label.parts')]) },
  ],
};
const showConsumerListWin = ref(false);
const showConsumerInfoWin = ref(false);
const showSymptomWin = ref(false);
const showPartsMultiWin = ref(false);
const viy2InputBox_3b5mPMformatter = value => formatPartNo(value);
const situationGridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  beforeEditMethod: (obj) => {
    // ['symptom','condition','warrantyClaim','damagePartCd'] => SPECIAL_CLAIM
    const property = obj.column.property;
    let editFlag = true;
    if (property.indexOf('GroupColumn') > 0
|| ['warrantyClaim', 'damagePartCd'].includes(property)) { // ['symptom','condition']
      editFlag = isColumnEditStatus();
      if (serviceFormData.serviceCategoryId == ServiceCategory.SPECIALCLAIM) {
        editFlag = false;
      }
    } else {
      // 故障日、事前申请号、备注等
      editFlag = isEditStatus();
    }
    return editFlag;
  },
  showStatus: 'true',
});
const situationGridMouseConfig = reactive({
  selected: true,
  extension: true,
});
const situationGridConditionPopoverQueryMethod = faultDescription_query_method;
const viy2CheckBox_8GYdYcOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2CheckBox_5GIDofOpts = [
  {
    label:
'',
    value:
'',
  },
];
const situationGridViy2GridButtonColumn_15ziPCButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delMotorInfoRow,
      title: 'Delete',
      disabled: !isColumnEditStatus(),
    },
  ];
};
const viy2ValueList_6TVUNIPopoverQueryMethod = parts_query_method;
const viy2ValueList_6TVUNIPopupColumns = ref(parts_pop_column);
const viy2ValueList_6TVUNIPopupQueryMethod = parts_pop_query_method;
const viy2ValueList_6TVUNIformatter = value => formatPartNo(value); ;
const viy2ValueList_6TVUNIparser = value => formatPartNo(value); ;
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
}, {
  onSuccess: (data, params) => {
    brandOps = data;
  },
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
const partsAutoFillDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const partsAutoFillDs = partsAutoFillDsApi.data;
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
const modelJobDsApi = useApi({
  url: '/common/valuelist/serviceJobByModelList.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const modelJobDs = modelJobDsApi.data;
const partsDemageFill2DsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  data: () => {
    return {
      partsCd: nowDemagePartsCode.value,
      pageSize: 1,
      currentPage: 1,
    };
  },
  lockScreen: false,
}, {
  manual: true,
});
const partsDemageFill2Ds = partsDemageFill2DsApi.data;
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
const svCategoryDsApi = useApi({
  url: '/common/helper/getSvCategoryList.json',
  method: 'post',
  data: () => {
    return {
      arg0: ServiceCategory.CLAIM_BATTERY,
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
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
  lockScreen: false,
});
const largeGroupDs = largeGroupDsApi.data;
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
const viy2Select_AQW3gChange = (value) => {
  const newOption = mstCodeData.value.S012.filter(r => r.codeDbid == value);
  const settleTypeId = newOption.length > 0 ? newOption[0].codeData2 : '';
  serviceFormData.settleTypeId = settleTypeId;
  onChgServiceCtg(value);
};
const viy2Select_3eV47IChange = (value, data) => {
  serviceFormData.welcomeStaffCd = data.code;
  serviceFormData.welcomeStaffNm = data.name;
};
const viy2Button_AQhoRClick = () => {
  const $table = situationGrid.value;
  if ($table) {
    const record = {};
    $table.insertAt(record, -1).then((newRow) => {
      $table.setCurrentRow(newRow.row);
    });
  }
};
const Viy2TableGroupColumn_PzM76EditRender = computed(() => {
  return {
    enabled: true,
    autofocus: '.vue-input__inner',
    defaultValue: {
    },
  };
});
const situationGridSymptomChange = function (obj, value) {
  buildJobSymptomData();
};
const viy2Button_okLGqClick = () => {
  showSymptomWin.value = true;
};
const situationGridConditionSelect = (obj, params) => {
  obj.row.conditionId = params.id;
  obj.row.conditionCd = params.code;
  obj.row.conditionNm = params.name;
};
const situationGridConditionClear = (obj) => {
  obj.row.conditionId = '';
  obj.row.conditionCd = '';
  obj.row.conditionNm = '';
};
const situationGridConditionLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    obj.row.conditionId = '';
    obj.row.conditionCd = '';
    obj.row.conditionNm = '';
  }
};
const situationGridWarrantyClaimEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'center',
    },
  };
});
const situationGridFaultStartDateEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const situationGridDamagePartCdSelect = (obj, params) => {
  const row = obj.row;
  row.damagePartId = params.id;
  row.damagePartNm = params.name;
  row.damagePartCdFmt = params.codeFmt;
};
const situationGridDamagePartCdClear = (obj) => {
  clearPartsDemage(obj.row);
};
const situationGridDamagePartCdLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    clearPartsDemage(obj.row);
    if (params.currentValue) {
      onLeaveDemageParts(obj.row, params.currentValue);
    }
  }
};
const situationGridDamagePartCdEvents = reactive({
  select: situationGridDamagePartCdSelect,
  clear: situationGridDamagePartCdClear,
  leave: situationGridDamagePartCdLeave,
});
const situationGridDamagePartCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const situationGridDamagePartCdEditRender = computed(() => {
  return {
    enabled: true,
    events: situationGridDamagePartCdEvents,
    attrs: {
      selectField: 'code',
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      popoverColumns: parts_column,
      popoverQueryMethod: parts_query_method,
      togglePopoverOnClick: false,
      usePopup: true,
      popupType: 'aside',
      asideSize: '70%',
      useCommonPopup: true,
      popupColumns: parts_pop_column,
      popupConditions: [
        { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' }, formatter: formatPartInput },
        { compType: 'VueCheckbox', field: 'batteryFlag', label: t('label.batteryFlag'), trueLabel: 'Y', falseLabel: 'N', defaultValue: 'Y' },
        { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandOps, defaultValue: 1, clearable: false, style: { width: '150px' } },
        { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
      ],
      popupQueryMethod: parts_pop_query_method,
      closeOnClickModal: true,
    },
  };
});
const situationGridDamagePartNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const situationGridAuthorizationNoFormatter = (obj) => {
  return formatUpper(obj.cellValue);
};
const situationGridAuthorizationNoEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      maxlength: '10',
    },
  };
});
const situationGridRepairDescriptionEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const situationGridSymptomCommentEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const situationGridConditionCommentEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const situationGridProcessCommentEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const situationGridDealerCommentEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const viy2ValueList_6TVUNISelect = (params) => {
  newBatteryForm.partsId = params.id;
};
const viy2ValueList_6TVUNIClear = (params) => {
  newBatteryForm.partsId = '';
};
const viy2ValueList_6TVUNILeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    newBatteryForm.partsId = '';
  }
};
const viy2ValueList_6TVUNIPopoverColumns = computed(() => {
  return parts_column;
});
const viy2ValueList_6TVUNIPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), checkStrictly: true, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
  ];
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
const formatPartInput = value => formatPartNo(value);
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
  // 清空表单校验
  clearValidate();
};
// 请求FormData
const apiFormData = () => {
  const form = {
    basicInfo: basicFormData,
    motorInfo: motorFormData,
    serviceInfo: serviceFormData,
    situationList: situationGrid.value ? situationGrid.value.getRecordset() : null,
    batteryInfo: batteryFormData,
  };
  form.serviceInfo.mechanicComment = orderFormData.mechanicComment;
  return form;
};
/** 按钮事件 */
/** 表格事件 */
const delMotorInfoRow = (row) => {
  situationGrid.value.remove(row);
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
const onChgServiceCtg = (value) => {
  serviceFormData.jobCode = '';
  if (value == ServiceCategory.FREECOUPON) {
    itemsCtl.disSituationRowBtn.value = false;
  } else if (value == ServiceCategory.SPECIALCLAIM) {
    itemsCtl.disSituationRowBtn.value = true;
    serviceFormData.demandType = 'SP';
    // 清空situate和job明细
    situationGrid.value.remove();
  } else {
    itemsCtl.disSituationRowBtn.value = false;
  }
  if (itemsCtl.enableDemandBtn.value && !motorFormData.soldDate) {
    warn_msg(t('M.E.00117', [t('label.soldDate')]));
  }
  if ([ServiceCategory.SPECIALCLAIM, ServiceCategory.CLAIM].includes(value)) {
    situationPanelMdl.value = true;
  } else {
    situationPanelMdl.value = false;
  }
};
const onChgServiceDemand = () => {
  situationGrid.value.remove();
  jobGrid.value.remove();
};
// 服务项目明细中故障现象下拉框数据源取得
const buildJobSymptomData = () => {
  jobSymptomData.value.splice(0);
  const jobSymptomMap = new Map();
  const recordList = situationGrid.value.getTableData().tableData;
  const warrantyClaimRows = recordList.filter(obj => obj.warrantyClaim == 'Y');
  warrantyClaimRows.forEach((row) => {
    jobSymptomMap.set(row.symptomId, row.symptom);
  });
  jobSymptomMap.keys().forEach((symptom) => {
    jobSymptomData.value.push({ label: jobSymptomMap.get(symptom), value: symptom });
  });
};
/** 请求处理结果 */
// 画面初始请求: Success
const initOrderFormData = (data) => {
  const { basicInfo, motorInfo, serviceInfo, situationList, jobList, partList, batteryList, summaryList, historyList } = data;
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
    gridData.value.battery = batteryList;
    gridData.value.summary = summaryList;
    gridData.value.history = historyList;
    itemsCtl.disExportHistBtn.value = gridData.value.history.length <= 0;
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
  }
  requireDoFlag.value = (basicFormData.doFlag === doFlag_Y);
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
  motorFormData.dbPolicyResult = motorInfo.policyResultFlag;
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
  [basicPanelMdl, motorPanelMdl, servicePanelMdl, situationPanelMdl, jobPanelMdl, partsPanelMdl, batteryPanelMdl, histPanelMdl].forEach(panel => panel.value = value);
};
// 清空画面所有记录
const clearFieldsData = () => {
  serviceForm.value.resetFields();
  clearFormData(basicFormData);
  clearFormData(motorFormData);
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
  itemsCtl.disSituationRowBtn.value = false;
};
/** 侧边栏回调 */
// 损坏配件
const clearPartsDemage = (row) => {
  row.damagePartId = '';
  row.damagePartNm = '';
  row.damagePartCdFmt = '';
};
const onLeaveDemageParts = (row, code) => {
  nowDemagePartsCode.value = code;
  getDemagePartsData(row);
};
const getDemagePartsData = async (row) => {
  const data = await partsDemageFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData) {
    row.damagePartId = partsData.id;
    row.damagePartNm = partsData.name;
    row.damagePartCdFmt = partsData.codeFmt;
  }
};
/** Aside */
// symptomAside event
const cbSelectSymptom = (param) => {
  if (situationGrid.value && situationGrid.value.getCurrentRecord()) {
    const row = situationGrid.value.getCurrentRecord();
    row.symptomId = param.id;
    row.symptomCd = param.code;
    row.symptomNm = param.name;
    row.symptom = `${param.code} ${param.name}`;
  }
  showSymptomWin.value = false;
};
const clsSymptomAside = () => {
  showSymptomWin.value = false;
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
              situationGrid.value.fullValidate((validSituation) => {
                if (!validSituation) {
                  batteryForm.value.validate((validBattery) => {
                    if (validBattery) {
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
                  :disabled="!!basicFormData.serviceOrderId"
                  :style="{ width: '200px' }" :formatter="viy2InputBox_3b5mPMformatter"
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
                :label="t('label.batteryId')"
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
                :label="t('label.soldDate')"
                prop="soldDate"
                :rules="rules.viy2DateTimePicker_5U2eFYRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_5U2eFY"
                  ref="viy2DateTimePicker_5U2eFY"
                  v-model="motorFormData.soldDate"
                  type="date"
                  :disabled="!!motorFormData.stuDate"
                  :style="{ width: '160px' }"
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
                :label="t('label.parts')"
                prop="model"
              >
                <VueInput
                  id="viy2InputBox_6TOA0I"
                  ref="viy2InputBox_6TOA0I"
                  v-model="motorFormData.model"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.warrantyTerm')"
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
          label-width="160px"
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
                :label="t('label.category')"
                prop="serviceCategoryId"
                :rules="rules.viy2Select_AQW3gRules"
              >
                <VueSelect
                  id="viy2Select_AQW3g"
                  ref="viy2Select_AQW3g"
                  v-model="serviceFormData.serviceCategoryId"
                  :style="{ width: '200px' }"
                  :disabled="true"
                  :options="svCategoryDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                  @change="viy2Select_AQW3gChange"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                v-if="basicFormData.doFlag == doFlag_Y"
                :label="t('label.welcomeStaff')"
                prop="welcomeStaffId"
                :rules="rules.viy2Select_3eV47IRules"
              >
                <VueSelect
                  id="viy2Select_3eV47I"
                  ref="viy2Select_3eV47I"
                  v-model="serviceFormData.welcomeStaffId"
                  :style="{ width: '200px' }"
                  :enabled="requireDoFlag"
                  :collapse-tags="true"
                  :clearable="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :options="employeeDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                  @change="viy2Select_3eV47IChange"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                v-if="basicFormData.doFlag == doFlag_Y"
                :label="t('label.takingOrderStaff')"
                prop="editor"
              >
                <VueInput
                  id="viy2InputBox_5X31yu"
                  ref="viy2InputBox_5X31yu"
                  v-model="serviceFormData.editor"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
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
                :label="t('label.operationStartDate')"
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
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.operationFinishDate')"
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
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="situationInfo" ref="situationInfo" v-model="situationPanelMdl" :title="t('label.batterySituation')">
        <template #header>
          <div style="width: 300px">
            <VueRow
              v-show="situationPanelMdl"
              id="viy2Row_wt7cp"
              ref="viy2Row_wt7cp"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueButton v-if="!isDoneStatus()" id="viy2Button_AQhoR" ref="viy2Button_AQhoR" icon-position="left" :disabled="!isColumnEditStatus() || itemsCtl.disSituationRowBtn.value || !motorFormData.modelId || serviceFormData.serviceCategoryId == ServiceCategory.SPECIALCLAIM" class="icon-button-width" @click="viy2Button_AQhoRClick">
                  +
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="situationGrid" ref="situationGrid" header-align="center" :keyboard-config="{ isTab: true, isArrow: true, isEnter: true }" :border="true" height="250px" :data="gridData.situation" :edit-rules="situationGridRules" :edit-config="situationGridEditConfig" :mouse-config="situationGridMouseConfig">
          <VueIndexColumn
            align="center"
            fixed="left"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueTabularColumn
            field="viy2TableGroupColumn_PzM76"
            :edit-render="Viy2TableGroupColumn_PzM76EditRender"
            fixed="left"
            width="180px"
            :children="[
              {
                field: 'symptom',
              },
              {
                field: 'condition',
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_PzO64"
                ref="viy2Row_PzO64"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="symptom"
                    :title="t('label.symptom')"
                    :is-required="true"
                    :editable="true"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="condition"
                    :title="t('label.condition')"
                    :is-required="true"
                    :editable="true"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_PzO64"
                ref="viy2Row_PzO64"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="symptom"
                    :display-options="{
                      compType: 'input',
                    }"
                    show-overflow="tooltip"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="condition"
                    :display-options="{
                      compType: 'valuelist',
                    }"
                    show-overflow="tooltip"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #edit="scope">
              <VueRow
                id="viy2Row_PzO64"
                ref="viy2Row_PzO64"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnEdit field="symptom" :scope="scope">
                    <VueInput
                      v-model="scope.row.symptom"
                      :size="scope.$table.props.size"
                      v-on="VueUtil.getEditorEvents(undefined, scope, 'symptom')"
                      @change="situationGridSymptomChange(scope, $event)"
                    >
                      <template #append>
                        <VueButton id="viy2Button_okLGq" ref="viy2Button_okLGq" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_okLGqClick" />
                      </template>
                    </VueInput>
                  </VueColumnEdit>
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnEdit field="condition" :scope="scope">
                    <VueValueList
                      v-model="scope.row.condition"
                      :size="scope.$table.props.size"
                      select-field="desc"
                      popover-width="500"
                      :use-common-popover="true"
                      :popover-columns="faultDescription_column"
                      :popover-query-method="situationGridConditionPopoverQueryMethod"
                      :use-popup="false"
                      v-on="VueUtil.getEditorEvents(undefined, scope, 'condition')"
                      @select="situationGridConditionSelect(scope, $event)"
                      @clear="situationGridConditionClear(scope, $event)"
                      @leave="situationGridConditionLeave(scope, $event)"
                    />
                  </VueColumnEdit>
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueTemplateColumn
            :edit-render="situationGridWarrantyClaimEditRender"
            align="center"
            field="warrantyClaim"
            fixed="left"
            width="96px"
            :title="t('label.warrantyClaim')"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_8GYdYc"
                ref="viy2CheckBox_8GYdYc"
                v-model="scope.row.warrantyClaim"
                true-label="Y"
                false-label="N"
              />
            </template>
            <template #edit="scope">
              <VueCheckbox
                id="viy2CheckBox_5GIDof"
                ref="viy2CheckBox_5GIDof"
                v-model="scope.row.warrantyClaim"
                true-label="Y"
                false-label="N"
                @change="buildJobSymptomData()"
              />
            </template>
          </VueTemplateColumn>
          <VueDateTimeColumn
            :edit-render="situationGridFaultStartDateEditRender"
            field="faultStartDate"
            align="center"
            fixed="left"
            :title="t('label.faultStartDate')"
            width="120px"
          />
          <VueValueListColumn
            :formatter="situationGridDamagePartCdFormatter"
            :edit-render="situationGridDamagePartCdEditRender"
            field="damagePartCd"
            fixed="left"
            :toggle-popover-on-click="false"
            :title="t('label.mainDamageParts')"
            width="160px"
          >
            <template #asideHeader="scope">
              <VueRow
                id="viy2Row_4BZkRB"
                ref="viy2Row_4BZkRB"
                class="aside-title-row"
              >
                <VueCol
                  item-key="item"
                  class="aside-title-text"
                  :md="{ span: 10 }"
                >
                  <VueText id="viy2Text_4BZkRM" ref="viy2Text_4BZkRM" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                    {{ t('title.partItemRef') }}
                  </VueText>
                </VueCol>
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  class="aside-title-button"
                  :md="{ span: 14 }"
                />
              </VueRow>
            </template>
          </VueValueListColumn>
          <VueInputColumn
            :edit-render="situationGridDamagePartNmEditRender"
            field="damagePartNm"
            show-overflow="tooltip"
            width="200px"
            :title=" t('label.partsName')"
          />
          <VueInputColumn
            :formatter="situationGridAuthorizationNoFormatter"
            :edit-render="situationGridAuthorizationNoEditRender"
            field="authorizationNo"
            show-overflow="tooltip"
            :title="t('label.authorizationNo')"
            width="140px"
          />
          <VueTextareaColumn
            :edit-render="situationGridRepairDescriptionEditRender"
            field="repairDescription"
            :title="t('label.repairDescription')"
            width="180px"
          />
          <VueTextareaColumn
            :edit-render="situationGridSymptomCommentEditRender"
            field="symptomComment"
            :title="t('label.symptomComment')"
            width="185px"
          />
          <VueTextareaColumn
            :edit-render="situationGridConditionCommentEditRender"
            field="conditionComment"
            :title="t('label.conditionComment')"
            width="185px"
          />
          <VueTextareaColumn
            :edit-render="situationGridProcessCommentEditRender"
            field="processComment"
            :title="t('label.processComment')"
            width="170px"
          />
          <VueTextareaColumn
            :edit-render="situationGridDealerCommentEditRender"
            field="dealerComment"
            :title="t('label.dealerComment')"
            min-width="165px"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="60px"
            :buttons="situationGridViy2GridButtonColumn_15ziPCButtons"
          />
        </VueTable>
        <VueRow
          id="viy2Row_53iVl"
          ref="viy2Row_53iVl"
          class="row-margin-top"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.mechanicComment')"
              label-width="135px"
              prop="mechanicComment"
            >
              <VueInput
                id="viy2Textarea_11uEXP"
                ref="viy2Textarea_11uEXP"
                v-model="orderFormData.mechanicComment"
                type="textarea"
                :rows="3"
                :disabled="isDoneStatus()"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
      <VuePanel id="newBatteryInfo" ref="newBatteryInfo" v-model="batteryPanelMdl" :title="t('label.changeBatteryInfo')">
        <template #header>
          <div style="width: 500px">
            <VueRow
              v-show="servicePanelMdl"
              id="viy2Row_6TVUNl"
              ref="viy2Row_6TVUNl"
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
          id="batteryForm"
          ref="batteryForm"
          :disabled="isDoneStatus()"
          label-width="135px"
          :model="batteryFormData"
        >
          <VueRow
            id="viy2Row_6TVUNx"
            ref="viy2Row_6TVUNx"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.parts')"
                prop="partsCd"
              >
                <VueValueList
                  :use-common-popover="true"
                  id="viy2ValueList_6TVUNI"
                  :use-common-popup="true"
                  ref="viy2ValueList_6TVUNI"
                  aside-size="60%"
                  v-model="batteryFormData.partsCd"
                  :toggle-popover-on-click="true"
                  select-field="code"
                  :close-on-click-modal="true"
                  :use-popup="true"
                  :clearable="true"
                  :popover-width="500"
                  width="200px"
                  :popover-columns="viy2ValueList_6TVUNIPopoverColumns"
                  :popover-query-method="viy2ValueList_6TVUNIPopoverQueryMethod"
                  :popup-columns="viy2ValueList_6TVUNIPopupColumns"
                  :popup-conditions="viy2ValueList_6TVUNIPopupConditions"
                  :popup-query-method="viy2ValueList_6TVUNIPopupQueryMethod"
                  :formatter="viy2ValueList_6TVUNIformatter"
                  :parser="viy2ValueList_6TVUNIparser"
                  @select="viy2ValueList_6TVUNISelect"
                  @clear="viy2ValueList_6TVUNIClear"
                  @leave="viy2ValueList_6TVUNILeave"
                >
                  <template #asideHeader>
                    <VueRow
                      id="viy2Row_6TVUNK"
                      ref="viy2Row_6TVUNK"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_6TVUNV" ref="viy2Text_6TVUNV" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                          {{ t('title.partItemRef') }}
                        </VueText>
                      </VueCol>
                      <VueCol
                        item-key="item"
                        align="right"
                        :inline="true"
                        class="aside-title-button"
                        :md="{ span: 17 }"
                      />
                    </VueRow>
                  </template>
                </VueValueList>
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.batteryId')"
                prop="plateNo"
                :rules="rules.viy2InputBox_6TVUO7Rules"
              >
                <VueInput
                  id="viy2InputBox_6TVUO7"
                  ref="viy2InputBox_6TVUO7"
                  v-model="batteryFormData.plateNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :disabled="!!motorFormData.modelId"
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
                :label="t('label.warrantyTerm')"
                prop="model"
              >
                <VueInput
                  id="viy2InputBox_171la5u"
                  ref="viy2InputBox_171la5u"
                  v-model="batteryFormData.model"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.location')"
                prop="model"
              >
                <VueInput
                  id="viy2InputBox_171la8L"
                  ref="viy2InputBox_171la8L"
                  v-model="batteryFormData.model"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.retailPrice')"
                prop="retailPrice"
              >
                <VueInputNumber
                  id="viy2InputNumber_171laaq"
                  ref="viy2InputNumber_171laaq"
                  v-model="batteryFormData.retailPrice"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.onHandQuantity')"
                prop="onHandQty"
              >
                <VueInputNumber
                  id="viy2InputNumber_171laar"
                  ref="viy2InputNumber_171laar"
                  v-model="batteryFormData.onHandQty"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.allocatedQuantity')"
                prop="allocatedQty"
              >
                <VueInputNumber
                  id="viy2InputNumber_171lac4"
                  ref="viy2InputNumber_171lac4"
                  v-model="batteryFormData.allocatedQty"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.boQuantity')"
                prop="boQty"
              >
                <VueInputNumber
                  id="viy2InputNumber_171ladH"
                  ref="viy2InputNumber_171ladH"
                  v-model="batteryFormData.boQty"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.ymvnStock')"
                prop="ymvnStock"
              >
                <VueInputNumber
                  id="viy2InputNumber_171ladI"
                  ref="viy2InputNumber_171ladI"
                  v-model="batteryFormData.ymvnStock"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
    </VueForm>
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
:deep(.bg-color-red) {
background-color: red;
}
:deep(.bg-color-blue) {
background-color: blue;
}
:deep(.bg-color-yellow) {
background-color: yellow;
}
:deep(.bg-color-none) {
background-color: white;
}
:deep(.margin-left-10) {
margin-left: 10px;
}
:deep(.coupon-color1) {
font-size: 20px;
--vue-input-text-color: #5494BD;
width: 205px;
}
:deep(.coupon-text) {
font-size: 20px;
--vue-input-text-color: #606266;
width: 200px;
}
:deep(.greenOk) {
background-color: green !important;
color: white;
}
:deep(.grayCross) {
background-color: gray !important;
color: white;
}
:deep(.upload-container) {
display: flex;
align-items: flex-start;
margin-left: 10px;
}
</style>
