<script setup>
import { IconArrowRightBold, IconCloseBold, IconDArrowLeft, IconDArrowRight, IconDelete, IconSearch, IconUserFilled, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { get, merge } from 'lodash-es';
import { watch } from 'vue';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from "@/constants";
import { CONST_SYSTEM_DATE_VALUE_FORMAT } from "@/constants";
import { CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import viy2Subpage_k0p7NPage from '/commons/select_motor_consumer';
import viy2Subpage_2svxNPage from '/commons/consumer_info';
import viy2Subpage_k0p7N2Page from '/commons/select_symptom';
import viy2Subpage_9glGGiPage from '/src/views/commons/parts_select_multi.vue';
import { useParams } from 'viy-menu';
import {
  alert_msg
  , clearFormData, formatAmount, formatCodeInput
  , formatDiscount, formatNumberDecimal, formatPartNo
  , formatPrice, formatQty, formatUpper, success_msg, warn_msg,
} from '@/pj-commonutils.js';
import { ServiceCategory, ServiceOrderStatus, SettleType, WarrantyPolicyType, YES_NO_FLAG } from '@/constants/pj-constants.js';
import {
  demand_column, demand_pop_condition, emptyData,
  faultDescription_column, faultDescription_query_method, parts_column,
  parts_pop_column, parts_pop_query_method,
  parts_query_method, serviceJob_model_column, serviceSp_column, serviceSp_pop_condition,
  serviceSp_pop_query_method,
} from '@/settings/valuelistSetting.js';
import {
  calPriceAndAmtOnJobGrid, calSellingPrice, setPartDetailCategory
  , sumAmount, sumArRowTotal, sumBySettleType,
} from '@/service-order.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const batteryType = reactive([
  { label: 'battery1', value: 'battery1' },
  { label: 'battery2', value: 'battery2' },
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
  name: 'svm0102_01',
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
const viewHistoryBtn = ref();
const con = ref();
const motorForm = ref();
const viy2Row_52VUwT = ref();
const plateNo = ref();
const viy2Button_gCcqU = ref();
const viy2InputBox_5TZFi2 = ref();
const downloadUnitBtn = ref();
const viy2DateTimePicker_5U2eFY = ref();
const model = ref();
const viy2Radio_4lv5UA = ref();
const viy2Select_4REDEW = ref();
const viy2Select_4k9XQY = ref();
const viy2InputBox_WVoNnV = ref();
const viy2InputBox_3aq4zE = ref();
const viy2InputBox_WVoNnY = ref();
const viy2Button_gDUZ9 = ref();
const viy2InputBox_adEGw8 = ref();
const viy2InputBox_8x7vGQ = ref();
const viy2Radio_5WHgzs3 = ref();
const viy2Button_Sa4Wc = ref();
const upload = ref();
const viy2CheckBox_52VUx4 = ref();
const viy2InputBox_4Wokfm = ref();
const viy2Select_aimh5W = ref();
const viy2InputBox_NpVhwe = ref();
const serviceInfo = ref();
const viy2Row_tmVHy = ref();
const viy2Button_ARtwE = ref();
const serviceForm = ref();
const viy2Row_AQDYG = ref();
const viy2InputNumber_uLkZo = ref();
const viy2Select_AQW3g = ref();
const viy2ValueList_50vz3g = ref();
const viy2Row_99De62 = ref();
const viy2InputBox_AVguE = ref();
const viy2Select_3eV47I = ref();
const viy2InputBox_5X31yu = ref();
const viy2Select_41dOfw = ref();
const viy2InputBox_8xtAIG = ref();
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
const jobInfo = ref();
const viy2Row_27Pzh4 = ref();
const viy2Button_27Pzh5 = ref();
const viy2Button_27Pzh6 = ref();
const jobGrid = ref();
const viy2Row_PB35w = ref();
const partsInfo = ref();
const viy2Row_gMw4S = ref();
const viy2Button_5XG6Pe = ref();
const viy2Button_2LwDLs = ref();
const viy2Button_5XGBRg = ref();
const partsGrid = ref();
const viy2Row_PBpwe = ref();
const viy2Row_99De625 = ref();
const viy2Row_PBAfi = ref();
const viy2Row_Le4aw = ref();
const viy2Row_PCr6k = ref();
const viy2Row_PCsoB = ref();
const viy2Row_PCsYX = ref();
const viy2Row_PCtxX = ref();
const batteryInfo = ref();
const viy2Row_gMw4S2 = ref();
const viy2Button_azLMfc = ref();
const viy2Button_azLMfn = ref();
const batteryGrid = ref();
const summaryInfo = ref();
const summaryGrid = ref();
const viy2Row_6Fcl = ref();
const viy2InputNumber_13IRNr = ref();
const viy2Select_aBkHE6 = ref();
const historyInfo = ref();
const viy2Row_BM4iq = ref();
const viy2Button_65GQDG = ref();
const historyGrid = ref();
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
  mechanicComment: '', depositAmt: 0, paymentMethodId: '',
});
const basicFormData = reactive({
  pointId: '', orderNo: '', orderDate: '', orderStatus: '',
});
const motorFormData = reactive({
  plateNo: '', frameNo: '', soldDate: '', model: '', ownerType: '', useType: '', modelTypeId: '', lastName: '', middleName: '', firstName: '', mobilephone: '', email: '', policyResultFlag: '', createForEmployeeFlag: false, employeeCd: '', relationShipId: '', ticketNo: '',
});
const serviceFormData = reactive({
  mileage: undefined, serviceCategoryId: '', serviceDemand: '', serviceTitle: '', welcomeStaffId: '', editor: '', mechanicId: '', cashier: '', operationStart: '', operationFinish: '',
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
  viy2DateTimePicker_5U2eFYRules: [
    {
      required: true,
      message: t('errors.required', [t('label.soldDate')]),
    },
  ],
  viy2Radio_4lv5UARules: [
    {
      required: true,
      message: t('errors.required', [t('label.relationType')]),
    },
  ],
  viy2Select_4REDEWRules: [
    {
      required: true,
      message: t('errors.required', [t('label.useType')]),
      enabled: requireValid,
    },
  ],
  viy2Select_4k9XQYRules: [
    {
      required: true,
      message: t('errors.required', [t('label.modelType')]),
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
  viy2Select_aimh5WRules: [
    {
      required: true,
      message: t('errors.required', [t('label.relationType')]),
      enabled: requireValid,
    },
  ],
  viy2InputNumber_uLkZoRules: [
    {
      required: true,
      message: t('errors.required', [t('label.mileage')]),
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
      type: 'integer',
      required: true,
      message: t('errors.required', [t('label.welcomeStaff')]),
      enabled: requireDoFlag,
    },
  ],
  viy2Select_41dOfwRules: [
    {
      type: 'integer',
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
const jobGridRules = {
  serviceCategoryId: [
    { required: true, message: t('errors.required', [t('label.category')]) },
  ],
  jobCd: [
    { required: true, message: t('errors.required', [t('label.serviceJob')]) },
  ],
  sellingPrice: [
    { required: true, message: t('errors.required', [t('label.sellingPrice')]) },
  ],
};
const partsGridRules = {
  serviceCategoryId: [
    { required: true, message: t('errors.required', [t('label.category')]) },
  ],
  partCd: [
    { required: true, message: t('errors.required', [t('label.parts')]) },
  ],
  sellingPrice: [
    { required: true, message: t('errors.required', [t('label.sellingPrice')]) },
  ],
  qty: [
    { required: true, message: t('errors.required', [t('label.quantity')]) },
    { pattern: /^[1-9]\d*$/, message: t('M.E.00200', [t('label.quantity'), 0]) },
  ],
};
const batteryGridRules = {
  newBatteryNo: [
    { required: true, message: t('errors.required', [t('label.newBatteryId')]) },
    { min: 17, max: 17, message: t('M.E.10322', [t('label.newBatteryId'), 17]) },
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
const viy2CheckBox_52VUx4Opts = [
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
const jobGridviy2TableSelectColumn_mZ4SAProps = reactive({
  value: 'codeDbid',
  label: 'codeData1',
});
const jobGridServiceDemandContentPopoverQueryMethod = ({ value, pageParams }) => {
  return demandDsApi.runAsync({
    content: value,
    arg0: nowJobCategory.value,
    arg1: motorFormData.modelId,
    arg2: motorFormData.soldDate,
    pageSize: pageParams.pageSize,
    currentPage: pageParams.currentPage,
  });
}; ;
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
const partsGridcopy0_viy2TableSelectColumn_mZ4SAProps = reactive({
  value: 'codeDbid',
  label: 'codeData1',
});
const partsGridServiceDemandContentPopoverQueryMethod // demand_query_method
= ({ value, pageParams }) => {
  return demandDsApi.runAsync({
    content: value,
    arg0: nowPartsCategory.value,
    arg1: motorFormData.modelId,
    arg2: motorFormData.soldDate,
    pageSize: pageParams.pageSize,
    currentPage: pageParams.currentPage,
  });
}; ;
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
const batteryGridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  beforeEditMethod: (obj) => {
    return isEditStatus();
  },
});
const batteryGridMouseConfig = reactive({
  extension: true,
});
const summaryGridEditConfig = reactive({
  trigger: 'click',
});
const summaryGridMouseConfig = reactive({
  extension: true,
});
const historyGridEditConfig = reactive({
  trigger: 'click',
});
const historyGridMouseConfig = reactive({
  extension: true,
});
const couponHistDsApi = useApi({
  url: '/service/svm0102/getFreeCouponHistory.json',
  method: 'post',
  data: () => {
    return {
      cmmSerializedProductId: motorFormData.cmmSerializedProductId,
      soldDate: motorFormData.soldDate,
    };
  },
  lockScreen: false,
}, {
  onSuccess: (data) => {
    if (data) {
      couponFormData.evFlag = data.evFlag;
      couponFormData.couponResult = data.freeCouponResult;
      couponFormData.warrantyType = data.warrantyType;
      couponFormData.warrantyType = WarrantyPolicyType.NEW;
      switch (couponFormData.warrantyType) {
        case WarrantyPolicyType.OLD:
          couponFormData.text1 = t('M.E.10274');
          couponFormData.text2 = t('M.E.10266');
          break;
        case WarrantyPolicyType.BIGBIKE:
          couponFormData.text1 = t('M.E.10309');
          couponFormData.text2 = t('M.E.10310');
          break;
        case WarrantyPolicyType.NEW:
          couponFormData.text1 = t('M.E.10264');
          couponFormData.text2 = t('M.E.10267');
          couponFormData.text3 = t('M.E.10265');
          couponFormData.text4 = data.warrantyConditionNow;
          break;
        case WarrantyPolicyType.EV:
          couponFormData.text1 = t('M.E.10324');
          couponFormData.text2 = data.warrantyConditionNow;
          break;
      }
    }
  },
  manual: true,
});
const couponHistDs = couponHistDsApi.data;
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
const specialClaimDsApi = useApi({
  url: '/service/svm0102/getSpecialClaimDetail.json',
  method: 'post',
  data: () => {
    return {
      serviceInfo: {
        specialClaimId: serviceFormData.specialClaimId,
      },
      motorInfo: {
        cmmSerializedProductId: motorFormData.cmmSerializedProductId,
        modelCd: motorFormData.modelCd,
      },
    };
  },
  lockScreen: false,
}, {
  onSuccess: (data, params) => {
    cbSpecialClaimDtlApi(data);
  },
  manual: true,
});
const specialClaimDs = specialClaimDsApi.data;
const partsAutoFill2DsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  data: () => {
    return {
      partsCd: nowPartsCode.value,
      autoFillFlag: YES_NO_FLAG.YES,
      facilityId: basicFormData.pointId,
      pageSize: 1,
      currentPage: 1,
    };
  },
  lockScreen: false,
}, {
  manual: true,
});
const partsAutoFill2Ds = partsAutoFill2DsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const userTypeDsApi = useApi({
  url: '/common/helper/getUseTypeList.json',
  method: 'post',
  lockScreen: false,
});
const userTypeDs = userTypeDsApi.data;
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
const paymentMethodDsApi = useApi({
  url: '/common/helper/getPaymentMethodTypeList.json',
  method: 'post',
  lockScreen: false,
});
const paymentMethodDs = paymentMethodDsApi.data;
const exportHistDsApi = useApi({
  url: '/service/svm0102/exportHist.json',
  method: 'post',
  data: () => {
    return {
      serviceOrderId: basicFormData.serviceOrderId,
    };
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SVM0102_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const exportHistDs = exportHistDsApi.data;
const consumerUploadPrivacyDsApi = useApi({
  url: '/common/consumer/consumerUploadPrivacy.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const consumerUploadPrivacyDs = consumerUploadPrivacyDsApi.data;
const freeCoupon2DsApi = useApi({
  url: '/service/svm0102/getFreeCouponDetail.json',
  method: 'post',
  data: () => {
    const form = {
      serviceInfo: {
        jobCd: serviceFormData.jobCode,
      },
      motorInfo: {
        modelCd: motorFormData.modelCd,
      },
    };
    return form;
  },
  lockScreen: false,
}, {
  onSuccess: (data, params) => {
    cbFreeCoupon2DtlApi(data);
  },
  manual: true,
});
const freeCoupon2Ds = freeCoupon2DsApi.data;
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
const modelTypeDsApi = useApi({
  url: '/common/helper/getModelTypeList.json',
  method: 'post',
  lockScreen: false,
});
const modelTypeDs = modelTypeDsApi.data;
const serviceHistDsApi = useApi({
  url: '/service/svm0102/getServiceHistory.json',
  method: 'post',
  data: () => {
    return {
      cmmSerializedProductId: motorFormData.cmmSerializedProductId,
      soldDate: motorFormData.soldDate,
    };
  },
}, {
  manual: true,
});
const serviceHistDs = serviceHistDsApi.data;
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
const employeeDsApi = useApi({
  url: '/common/helper/employeeList.json',
  method: 'post',
  data: {},
});
const employeeDs = employeeDsApi.data;
const periodDemandDsApi = useApi({
  url: '/common/valuelist/demandList.json',
  method: 'post',
  data: () => {
    return {
      arg0: serviceFormData.serviceCategoryId,
      arg1: motorFormData.modelId,
      arg2: motorFormData.soldDate,
    };
  },
  lockScreen: false,
}, {
  onSuccess: (data, params) => {
    if (data && data.list.length > 0) {
      const result = data.list[0];
      serviceFormData.serviceDemand = result.serviceDemand;
      serviceFormData.serviceDemandId = result.serviceDemandId;
      serviceFormData.jobCode = result.jobCode;
      freeCouponDsApi.runAsync();
    }
  },
  manual: true,
});
const periodDemandDs = periodDemandDsApi.data;
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
const demandDsApi = useApi({
  url: '/common/valuelist/demandList.json',
  method: 'post',
}, {
  manual: true,
});
const demandDs = demandDsApi.data;
const freeCouponDsApi = useApi({
  url: '/service/svm0102/getFreeCouponDetail.json',
  method: 'post',
  data: () => {
    const form = {
      serviceInfo: {
        jobCd: serviceFormData.jobCode,
      },
      motorInfo: {
        modelCd: motorFormData.modelCd,
      },
    };
    return form;
  },
  lockScreen: false,
}, {
  onSuccess: (data, params) => {
    cbFreeCouponDtlApi(data);
  },
  manual: true,
});
const freeCouponDs = freeCouponDsApi.data;
const modelTypeJobDsApi = useApi({
  url: '/common/valuelist/serviceJobByModelTypeList.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const modelTypeJobDs = modelTypeJobDsApi.data;
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
  requireValid.value = false;
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
  requireValid.value = false;
  cancelOrderDsApi.runAsync();
};
const viy2Button_3b5mQ9Click = () => {
  orderDetailDsApi.runAsync();
};
const viewHistoryBtnClick = () => {
  showServiceHist.value = true;
  serviceHistDsApi.runAsync();
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
const viy2Select_4k9XQYChange = (value, data) => {
  if (jobGrid.value.getTableData().tableData.length > 0
&& initData.value.modelType != value) {
    VueMessageBox.confirm(t('ymc-commons.P.00013'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      jobGrid.value.remove();
      initData.value.modelType = value;
    }).catch(() => {
      motorFormData.modelTypeId = initData.value.modelType;
    });
  }
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
const viy2CheckBox_52VUx4Change = (checkedList) => {
  onChgCreateOrderForEmploy(checkedList);
};
const viy2Select_aimh5WLabelFormatter = (item) => {
  return t(item.codeData1);
};
const viy2Button_ARtwEClick = () => {
  if (!motorFormData.soldDate) {
    warn_msg(t('M.E.00117', [t('label.soldDate')]));
  } else {
    showFreeCouponWin.value = true;
    couponHistDsApi.runAsync();
  }
};
const viy2Select_AQW3gChange = (value) => {
  const newOption = mstCodeData.value.S012.filter(r => r.codeDbid == value);
  const settleTypeId = newOption.length > 0 ? newOption[0].codeData2 : '';
  serviceFormData.settleTypeId = settleTypeId;
  onChgServiceCtg(value);
};
const viy2ValueList_50vz3gSelect = (params) => {
  if (serviceFormData.demandType == 'SP') {
    serviceFormData.serviceDemand = params.campaignTitle;
    serviceFormData.specialClaimId = params.specialClaimId;
    serviceFormData.campaignNo = params.campaignNo;
    serviceFormData.bulletinNo = params.bulletinNo;
  } else {
    serviceFormData.serviceDemand = params.serviceDemand;
    serviceFormData.serviceDemandId = params.serviceDemandId;
    serviceFormData.demandEndDate = params.toDate;
    serviceFormData.jobCode = params.jobCode;
  }
  onChgServiceDemand();
};
const viy2ValueList_50vz3gClear = () => {
  serviceFormData.serviceDemandId = '';
}
;
const viy2ValueList_50vz3gLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    serviceFormData.serviceDemandId = '';
  }
};
const viy2Select_3eV47IChange = (value, data) => {
  serviceFormData.welcomeStaffCd = data.code;
  serviceFormData.welcomeStaffNm = data.name;
};
const viy2Select_41dOfwChange = (value, data) => {
  serviceFormData.mechanicCd = data.code;
  serviceFormData.mechanicNm = data.name;
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
      asideSize: '60%',
      useCommonPopup: true,
      popupColumns: parts_pop_column,
      popupConditions: [
        { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' }, formatter: formatPartNo },
        { compType: 'VueCheckbox', field: 'batteryFlag', label: t('label.batteryFlag'), trueLabel: 'Y', falseLabel: 'N', defaultValue: 'N' },
        { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
        { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '150px' } },
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
const viy2Button_27Pzh5Click = () => {
  showPackageWin.value = true;
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
    // FREECOUPON时，
    if (record.jobCd) {
      freeCouponDsApi.runAsync();
    } else {
      $table.insertAt(record, -1).then((newRow) => {
        $table.setCurrentRow(newRow.row);
      });
    }
  }
};
const Viy2TableGroupColumn_PAZ2wEditRender = computed(() => {
  return {
    enabled: true,
    autofocus: '.vue-select__input',
    defaultValue: {
    },
  };
});
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
const jobGridServiceDemandContentSelect = (obj, params) => {
  obj.row.serviceDemandId = params.serviceDemandId;
  // autoSetJobCd
  if (serviceFormData.serviceCategoryId == ServiceCategory.FREECOUPON) {
    freeCoupon2DsApi.runAsync();
  }
};
const jobGridServiceDemandContentClear = (obj) => {
  obj.row.serviceDemandId = '';
};
const jobGridServiceDemandContentLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    obj.row.serviceDemandId = '';
  }
};
const jobGridSymptomIdEditRender = computed(() => {
  return {
    enabled: true,
    options: get(jobSymptomData, 'value'),
    displayMember: 'label',
    valueMember: 'value',
  };
});
const jobGridJobCdSelect = (obj, params) => {
  cbServiceJobVL(obj.row, params);
};
const jobGridJobCdClear = (obj) => {
  onClearServiceJob(obj.row);
};
const jobGridJobCdLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    onClearServiceJob(obj.row);
  }
};
const jobGridJobCdEvents = reactive({
  select: jobGridJobCdSelect,
  clear: jobGridJobCdClear,
  leave: jobGridJobCdLeave,
});
const jobGridJobCdEditRender = computed(() => {
  return {
    enabled: true,
    events: jobGridJobCdEvents,
    attrs: {
      selectField: 'code',
      popoverWidth: 500,
      useCommonPopover: true,
      popoverColumns: serviceJob_model_column,
      popoverQueryMethod: serviceJobQueryMethod(),
      usePopup: false,
    },
  };
});
const jobGridJobNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const jobGridManhourFormatter = (obj) => {
  return formatNumberDecimal(obj.cellValue);
};
const jobGridManhourEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const jobGridStandardPriceFormatter = (obj) => {
  return formatPrice(obj.cellValue);
};
const jobGridStandardPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const jobGridDiscountAmtChange = (obj, value) => {
  calPriceAndAmtOnEditJobGrid(obj.row, 'discountAmt');
};
const jobGridDiscountAmtEvents = reactive({
  change: jobGridDiscountAmtChange,
});
const jobGridDiscountAmtFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const jobGridDiscountAmtEditRender = computed(() => {
  return {
    enabled: true,
    events: jobGridDiscountAmtEvents,
    attrs: {
      precision: 0,
      textAlign: 'right',
    },
  };
});
const jobGridDiscountChange = (obj, value) => {
  calPriceAndAmtOnEditJobGrid(obj.row, 'discount');
};
const jobGridDiscountEvents = reactive({
  change: jobGridDiscountChange,
});
const jobGridDiscountFormatter = (obj) => {
  return formatDiscount(obj.cellValue);
};
const jobGridDiscountEditRender = computed(() => {
  return {
    enabled: true,
    events: jobGridDiscountEvents,
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
const jobGridServicePackageNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_5XG6PeClick = () => {
  doLoginYPEC();
};
const viy2Button_2LwDLsClick = () => {
  multiPartsAsideParams.value = {
    facilityId: basicFormData.pointId,
  };
  showPartsMultiWin.value = true;
};
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
const Viy2TableGroupColumn_PBgKzEditRender = computed(() => {
  return {
    enabled: true,
    autofocus: '.vue-select__input',
    defaultValue: {
    },
  };
});
const partsGridServiceCategoryIdChange = (obj, newValue) => {
  const row = obj.row;
  // 清空serviceDemand
  row.serviceDemandContent = '';
  row.serviceDemandId = '';
  row.symptomId = '';
  const category = serviceFormData.serviceCategoryId;
  // 当FreeCoupon和SpecialClaim时，类型选择须与服务信息中的一致
  if ([ServiceCategory.FREECOUPON, ServiceCategory.SPECIALCLAIM].includes(newValue) && newValue != category) {
    row.serviceCategoryId = '';
    warn_msg(t('M.E.10194'));
  } else {
    // settleType
    const newOption = mstCodeData.value.S012.filter(r => r.codeDbid == newValue);
    row.settleTypeId = newOption.length > 0 ? newOption[0].codeData2 : '';
    nowPartsCategory.value = newValue;
    // 应收合计
    onArGridReconstructed('PARTS');
  }
};
const partsGridServiceDemandContentSelect = (obj, params) => {
  obj.row.serviceDemandId = params.serviceDemandId;
};
const partsGridServiceDemandContentClear = (obj) => {
  obj.row.serviceDemandId = '';
};
const partsGridServiceDemandContentLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    obj.row.serviceDemandId = '';
  }
};
const partsGridSymptomIdEditRender = computed(() => {
  return {
    enabled: true,
    options: get(jobSymptomData, 'value'),
    displayMember: 'label',
    valueMember: 'value',
  };
});
const partsGridPartCdSelect = (obj, params) => {
  cbPartsGridVL(obj.row, params);
};
const partsGridPartCdClear = (obj) => {
  clearPartsOnPartsGrid(obj.row);
};
const partsGridPartCdLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    clearPartsOnPartsGrid(obj.row);
    if (params.currentValue) {
      onLeavePartsCode(obj.row, params.currentValue);
    }
  }
};
const partsGridPartCdEvents = reactive({
  select: partsGridPartCdSelect,
  clear: partsGridPartCdClear,
  leave: partsGridPartCdLeave,
});
const partsGridPartCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const partsGridPartCdEditRender = computed(() => {
  return {
    enabled: true,
    events: partsGridPartCdEvents,
    attrs: {
      selectField: 'code',
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      popoverColumns: parts_column,
      popoverQueryMethod: ({ value, pageParams }) => {
        if (value) {
          return partsAutoFillDsApi.runAsync({
            content: value,
            autoFillFlag: YES_NO_FLAG.YES,
            facilityId: basicFormData.pointId,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage,
          });
        } else {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(emptyData);
            }, 200);
          });
        }
      },
      togglePopoverOnClick: false,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
      popupColumns: parts_pop_column,
      popupConditions: [
        { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' }, formatter: formatPartNo },
        { compType: 'VueCheckbox', field: 'batteryFlag', label: t('label.batteryFlag'), trueLabel: 'Y', falseLabel: 'N', defaultValue: 'N' },
        { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
        { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '150px' } },
      ],
      popupQueryMethod: ({ code, batteryFlag, prodCtg, brandId, pageParams }) => {
        if (!code && !prodCtg && !brandId && batteryFlag != 'Y') {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(emptyData);
            }, 200);
          });
        } else {
          return partsAutoFillDsApi.runAsync({
            code,
            batteryFlag,
            brandId,
            prodCtg,
            autoFillFlag: YES_NO_FLAG.YES,
            facilityId: basicFormData.pointId,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage,
          });
        }
      },
      closeOnClickModal: true,
    },
  };
});
const partsGridPartNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridSupersedingPartsCdFmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      usePopup: false,
    },
  };
});
const Viy2TableGroupColumn_PBm3NEditRender = computed(() => {
  return {
    enabled: true,
    autofocus: '.vue-input__inner',
    defaultValue: {
    },
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
const partsGridSpecialPriceFormatter = (obj) => {
  return formatPrice(obj.cellValue);
};
const Viy2TableGroupColumn_LdYFzEditRender = computed(() => {
  return {
    enabled: true,
    autofocus: '.vue-input__inner',
    defaultValue: {
    },
  };
});
const partsGridDiscountAmtChange = (obj, value) => {
  const row = obj.row;
  if (value) {
    row.specialPrice = null;
  }
  calculateSellingPrice(row);
};
const partsGridDiscountChange = (obj, value) => {
  const row = obj.row;
  if (value) {
    row.specialPrice = null;
  }
  calculateSellingPrice(row);
};
const partsGridSellingPriceFormatter = (obj) => {
  return formatPrice(obj.cellValue);
};
const Viy2TableGroupColumn_PCdZ7EditRender = computed(() => {
  return {
    enabled: true,
    autofocus: '.vue-input__inner',
    defaultValue: {
    },
  };
});
const partsGridQtyChange = (obj, value) => {
  const row = obj.row;
  calculateSellingPrice(row);
};
const partsGridAmountFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const Viy2TableGroupColumn_PCncyEditRender = computed(() => {
  return {
    enabled: false,
    defaultValue: {
    },
  };
});
const partsGridOnHandQtyFormatter = (obj) => {
  return formatQty(obj.cellValue);
};
const partsGridBoQtyFormatter = (obj) => {
  return formatQty(obj.cellValue);
};
const Viy2TableGroupColumn_PCl5HEditRender = computed(() => {
  return {
    enabled: false,
    defaultValue: {
    },
  };
});
const partsGridShippedQtyFormatter = (obj) => {
  return formatQty(obj.cellValue);
};
const Viy2TableGroupColumn_PCiKZEditRender = computed(() => {
  return {
    enabled: false,
    defaultValue: {
    },
  };
});
const partsGridAllocatedQtyFormatter = (obj) => {
  return formatQty(obj.cellValue);
};
const partsGridBatteryTypeChange = (obj, newValue) => {
  chgBatteryRela(obj.row, newValue);
};
const partsGridBatteryTypeEvents = reactive({
  change: partsGridBatteryTypeChange,
});
const partsGridBatteryTypeEditRender = computed(() => {
  return {
    enabled: true,
    events: partsGridBatteryTypeEvents,
    options: batteryType,
  };
});
const viy2Button_azLMfcClick = () => {
  onUpdateEv();
};
const viy2Button_azLMfnClick = () => {
  onefreshEv();
};
const batteryGridPartCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const batteryGridPartCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const batteryGridCurrentBatteryNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const batteryGridWarttryStartDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const batteryGridWarrantyTermEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const batteryGridNewPartCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const batteryGridNewPartCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const batteryGridNewBatteryNoEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      maxlength: '17',
    },
  };
});
const batteryGridSellingPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const batteryGridBatteryTypeEditRender = computed(() => {
  return {
    enabled: false,
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
const summaryGridBatteryDetailFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const summaryGridBatteryDetailEditRender = computed(() => {
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
const viy2Button_65GQDGClick = () => {
  exportHistDsApi.runAsync();
};
const historyGridProcessTimeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymdt,
      format: CONST_SYSTEM_DATE_FORMAT.ymdt,
    },
  };
});
const historyGridStaffCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const historyGridStaffNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const historyGridOperationEditRender = computed(() => {
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
watch(() => motorFormData.employeeCd, () => {
  const partsRecords = partsGrid.value.getTableData().tableData;
  for (const record of partsRecords) {
    record.discountAmt = null;
    record.discount = null;
    record.specialPrice = null;
    calculateSellingPrice(record);
  }
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
// 监听router参数有变化时，
watch(() => routeParam, (newVal, oldVal) => {
  initScreen();
}, { deep: true },
);
onMounted(() => {
  initScreen();
});
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
    situationList: situationGrid.value ? situationGrid.value.getRecordset() : null,
    jobList: jobGrid.value ? jobGrid.value.getRecordset() : null,
    partList: partsGrid.value ? partsGrid.value.getRecordset() : null,
    batteryList: batteryGrid.value ? batteryGrid.value.getTableData().fullData : [],
  };
  form.serviceInfo.mechanicComment = orderFormData.mechanicComment;
  form.serviceInfo.depositAmt = orderFormData.depositAmt;
  form.serviceInfo.paymentMethodId = orderFormData.paymentMethodId;
  return form;
};
/** 按钮事件 */
// 选择套餐
const openServicePackage = () => {
};
// 跳转到YPEC
const doLoginYPEC = () => {
};
// Battery
const onUpdateEv = () => {
  batteryCheck.value = 'Y';
};
const onefreshEv = () => {
};
/** 表格事件 */
const delMotorInfoRow = (row) => {
  situationGrid.value.remove(row);
};
const delJobRow = (row) => {
  jobGrid.value.remove(row);
  onArGridReconstructed('JOB');
};
const delPartsRow = (row) => {
  partsGrid.value.remove(row);
  onArGridReconstructed('PARTS');
  // 清空关联的battery 新配件
  removeBatteryRela(row);
};
const addPartsRow = () => {
  const category = serviceFormData.serviceCategoryId;
  const symptomCode = '99';
  let record = {};
  if ([ServiceCategory.FREECOUPON, ServiceCategory.FREESERVICE].includes(category)) {
    record = {
      serviceCategoryId: ServiceCategory.REPAIR,
      settleTypeId: SettleType[ServiceCategory.REPAIR],
    };
  } else if ([ServiceCategory.SPECIALCLAIM].includes(category)) {
    record = {
      serviceCategoryId: ServiceCategory.SPECIALCLAIM,
      settleTypeId: SettleType[ServiceCategory.SPECIALCLAIM],
      serviceDemandContent: serviceFormData.serviceDemand,
      serviceDemandId: serviceFormData.serviceDemandId,
      symptomId: symptomCode,
    };
  } else {
    record = {
      serviceCategoryId: category,
      settleTypeId: SettleType[category],
      serviceDemandContent: serviceFormData.serviceDemand,
      serviceDemandId: serviceFormData.serviceDemandId,
    };
  }
  record.standardPrice = 0; record.sellingPrice = 0; record.amount = 0; record.qty = 1;
  record.onHandQty = 0; record.boQty = 0; record.shippedQty = 0; record.allocatedQty = 0;
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
    case 'BATTERY': $table = batteryGrid.value;
      gridData.value.summary.forEach((row) => {
        row.batteryDetail = 0; row.total = 0;
      });
      break;
  }
  // 按settleTypeId合计应收款
  const newSum = sumBySettleType($table, GRID, motorFormData.evFlag);
  // 应收款合计列重计算
  gridData.value.summary.forEach((row) => {
    sumArRowTotal(row, newSum, GRID);
  });
  // 电车情况下，配件-电池 应付合计
  if (motorFormData.evFlag == 'Y') {
    const batterySum = calBatteryAr();
    gridData.value.summary.forEach((row) => {
      sumArRowTotal(row, batterySum, 'BATTERY');
    });
  }
  // 列合计重计算
  sumArGridFooter();
};
// 电车情况下，配件-电池 应付合计
const calBatteryAr = () => {
  const $table = partsGrid.value;
  gridData.value.summary.forEach((row) => {
    row.batteryDetail = 0; row.total = 0;
  });
  let newSum = null;
  if ($table) {
    const tableData = $table.getTableData().fullData;
    newSum = tableData.reduce((acc, item) => {
      if (!item.settleTypeId || item.settleTypeId == undefined) {
        return;
      }
      if (item.settleTypeId !== 'SUM') {
        if (item.batteryFlag == 'Y') {
          acc[item.settleTypeId] = (acc[item.settleTypeId] || 0) + (item.sellingPrice * item.qty);
        }
        return acc;
      }
    }, {});
  }
  return newSum;
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
const onChgCreateOrderForEmploy = (checkedList) => {
  const partsRecords = partsGrid.value.getTableData().tableData;
  if (checkedList == '1') { // 勾选时
    if (partsRecords.length > 0) {
      VueMessageBox.confirm(t('ymc-commons.P.00011'), t('title.warn'), {
        type: 'warning',
      }).then(() => {
        itemsCtl.showEmployeeRow.value = true;
        itemsCtl.partsColumnByEmploy.value = true;
        for (const record of partsRecords) {
          // 清空值
          record.discount = null;
          record.discountAmt = null;
          record.specialPrice = null;
          calculateSellingPrice(record);
        }
      }).catch(() => {
        itemsCtl.showEmployeeRow.value = false;
        motorFormData.createForEmployeeFlag = '0';
      });
    } else {
      itemsCtl.showEmployeeRow.value = true;
    }
  } else if (partsRecords.length > 0) {
    VueMessageBox.confirm(t('ymc-commons.P.00012'), t('title.warn'), {
      confirmButtonText: t('label.confirm'),
      cancelButtonText: t('label.cancel'),
      type: 'warning',
    }).then(() => {
      itemsCtl.showEmployeeRow.value = false;
      motorFormData.employeeCd = '';
      motorFormData.relationShipId = '';
      motorFormData.ticketNo = '';
      partsGrid.value.remove();
    }).catch(() => {
      motorFormData.createForEmployeeFlag = '1';
    });
  } else {
    itemsCtl.showEmployeeRow.value = false;
  }
};
const onChgServiceCtg = (value) => {
  serviceFormData.jobCode = '';
  serviceFormData.serviceDemand = '';
  serviceFormData.serviceDemandId = '';
  if (value == ServiceCategory.FREECOUPON) {
    if (motorFormData.soldDate) {
      periodDemandDsApi.runAsync(); // autoFillServiceDemand
    }
    serviceFormData.demandType = 'DEMAND';
    itemsCtl.enableDemandBtn.value = true;
    itemsCtl.disSituationRowBtn.value = false;
  } else if (value == ServiceCategory.SPECIALCLAIM) {
    itemsCtl.disSituationRowBtn.value = true;
    serviceFormData.demandType = 'SP';
    itemsCtl.enableDemandBtn.value = true;
    // 清空situate和job明细
    jobGrid.value.remove();
    situationGrid.value.remove();
  } else {
    itemsCtl.enableDemandBtn.value = false;
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
  if (serviceFormData.serviceCategoryId == ServiceCategory.SPECIALCLAIM) {
    itemsCtl.enableServiceCategory.value = false;
    itemsCtl.enableChosePackageBtn.value = false;
    // Request jobdetails and MC situations details.
    specialClaimDsApi.runAsync();
  } else if (serviceFormData.serviceCategoryId == ServiceCategory.FREECOUPON) {
    // free coupon
    freeCouponDsApi.runAsync();
  }
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
    gridData.value.summary = summaryList;
  }
  basicFormData.doFlag = doFlag_Y;
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
  gridData.value.battery = batteryList;
};
// SPECIALCLAIM时，选择Service Demand后，自动填充Situation和Job表格记录
const cbSpecialClaimDtlApi = (data) => {
// MC: situationGrid
  if (data.symptomId) {
    const $table = situationGrid.value;
    if ($table) {
      const record = { };
      merge(record, data);
      record.warrantyClaim = 'Y';
      $table.insertAt(record, -1).then((newRow) => {
        $table.setCurrentRow(newRow.row);
      });
    }
    buildJobSymptomData();
  }
  // JOB: jobGrid 循环jobCodeList
  if (data.serviceJobList.length > 0) {
    data.serviceJobList.forEach((item) => {
      const $table2 = jobGrid.value;
      if ($table2) {
        const jobRecord = autoAddJobRecord(item);
        jobRecord.symptomId = data.symptomId;
        $table2.insertAt(jobRecord, -1).then((newRow) => {
          $table2.setCurrentRow(newRow.row);
        });
      }
    });
    onArGridReconstructed('JOB');
  }
};
// FreeCoupon时，
const cbFreeCouponDtlApi = (item) => {
// JOB: jobGrid 循环jobCodeList
  const $table2 = jobGrid.value;
  if ($table2) {
    const jobRecord = autoAddJobRecord(item);
    $table2.insertAt(jobRecord, -1).then((newRow) => {
      $table2.setCurrentRow(newRow.row);
    });
    onArGridReconstructed('JOB');
  }
};
// 服务项目切换Demand后，自动填充Job内容
const cbFreeCoupon2DtlApi = (item) => {
  const row = jobGrid.value.getCurrentRecord();
  const jobRecord = autoAddJobRecord(item);
  merge(row, jobRecord);
  onArGridReconstructed('JOB');
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
  const newOption = mstCodeData.value.S012.filter(r => r.codeDbid == serviceFormData.serviceCategoryId);
  const settleTypeId = newOption.length > 0 ? newOption[0].codeData2 : '';
  const record = {
    serviceCategoryId: serviceFormData.serviceCategoryId,
    serviceDemandContent: serviceFormData.serviceDemand,
    serviceDemandId: serviceFormData.serviceDemandId,
    settleTypeId,
    manhour: 0.0,
    standardPrice: 0,
    sellingPrice: 0,
  };
  if (serviceFormData.serviceCategoryId === ServiceCategory.FREECOUPON) {
    record.jobCd = serviceFormData.jobCode;
  }
  return record;
};
const clearJobRecord = (row) => {
  row.serviceDemandContent = '';
  row.serviceDemandId = '';
  row.settleTypeId = '';
  row.symptomId = '';
  row.jobCd = '';
  row.jobNm = '';
  row.jobId = '';
  row.manhour = 0.0;
  row.standardPrice = 0;
  row.sellingPrice = 0;
  row.discountAmt = null;
  row.discount = null;
  row.specialPrice = null;
  row.servicePackageNm = '';
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
/** 其他 */
const serviceJobQueryMethod = () => {
  let isBymodelType = false;
  if (jobGrid.value && jobGrid.value.getCurrentRecord()) {
    const row = jobGrid.value.getCurrentRecord();
    isBymodelType = [ServiceCategory.REPAIR].includes(row.serviceCategoryId);
  }
  if (motorFormData.modelTypeId && basicFormData.doFlag == doFlag_Y && isBymodelType) {
    return serviceJobByModelType_query_method;
  } else {
    return serviceJobByModel_query_method;
  }
};
const serviceJobByModel_query_method = ({ value, pageParams }) => {
  return modelJobDsApi.runAsync({
    content: value,
    settleTypeId: nowJobSettleTypeId.value,
    pageSize: pageParams.pageSize,
    currentPage: pageParams.currentPage,
  });
};
const serviceJobByModelType_query_method = ({ value, pageParams }) => {
  return modelTypeJobDsApi.runAsync({
    content: value,
    modelType: motorFormData.modelTypeId,
    serviceCategoryId: nowJobCategory.value,
    pageSize: pageParams.pageSize,
    currentPage: pageParams.currentPage,
  });
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
  itemsCtl.showEmployeeRow.value = false;
  itemsCtl.partsColumnByEmploy.value = false;
  itemsCtl.disJobRowBtn.value = false;
  itemsCtl.disSituationRowBtn.value = false;
  itemsCtl.enableDemandBtn.value = false;
  itemsCtl.enableChosePackageBtn.value = true;
  itemsCtl.enableServiceCategory.value = true;
  itemsCtl.disExportHistBtn.value = true;
  itemsCtl.disRefreshEvBtn.value = true;
};
/** 侧边栏回调 */
// ServiceJob Valuelist
const cbServiceJobVL = (row, params) => {
  row.jobId = params.id;
  row.jobNm = params.name;
  row.manhour = params.manHours;
  row.standardPrice = params.stdRetailPrice;
  row.sellingPrice = params.stdRetailPrice;
  row.vatRate = params.vatRate;
  if (!(motorFormData.modelTypeId
&& row.serviceCategoryId == ServiceCategory.REPAIR
&& basicFormData.doFlag == doFlag_Y)) {
    row.discount = params.discount;
    row.specialPrice = params.specialPrice;
  }
  onArGridReconstructed('JOB');
};
const onClearServiceJob = (row) => {
  row.jobId = ''; row.jobNm = ''; row.manhour = '';
  row.standardPrice = '';
  row.sellingPrice = '';
  row.discount = null;
  row.discountAmt = null;
  row.specialPrice = null;
};
// 损坏配件
const clearPartsDemage = (row) => {
  row.damagePartId = '';
  row.damagePartNm = '';
};
// 配件明细：PartsValueList
const clearPartsOnPartsGrid = (row) => {
// 清空跟电池的关联
  removeBatteryRela(row);
  row.partId = ''; row.partNm = '';
  row.supersedingPartId = ''; row.supersedingPartsCdFmt = ''; row.supersedingPartCd = ''; row.supersedingPartNm = '';
  row.standardPrice = 0; row.specialPrice = ''; row.discountAmt = ''; row.discount = '';
  row.sellingPrice = 0; row.taxRate = ''; row.amount = 0;
  row.qty = 1; row.onHandQty = 0; row.boQty = 0; row.shippedQty = 0;
  row.allocatedQty = 0; row.ymvnStockQty = '';
  row.locationCd = ''; row.locationId = '';
  row.batteryFlag = '';
  onArGridReconstructed('PARTS');
};
const setValueOnPartGrid = (row, params) => {
  if (params) {
    row.partId = params.id;
    row.partCd = params.code;
    row.partNm = params.name;
    row.supersedingPartsCdFmt = params.supersedingPartsCdFmt;
    row.supersedingPartCd = params.supersedingPartsCd;
    row.supersedingPartNm = params.supersedingPartsNm;
    row.supersedingPartId = params.supersedingPartsId;
    row.onHandQty = params.onHandQty;
    row.batteryFlag = params.batteryFlag;
    row.standardPrice = params.stdRetailPrice;
    row.taxRate = params.taxRate;
    row.partStatus = params.partStatus;
    row.locationId = params.mainLocationId;
    row.locationCd = params.mainLocationCd;
    row.qty = 1; // set Qty to 1 and search ymvnStock
    ymvnStockSetting(row); // To set ymvnStock's color event
    if (!row.serviceCategoryId) {
      setPartDetailCategory(row, serviceFormData.serviceCategoryId, serviceFormData.serviceDemand, serviceFormData.serviceDemandId);
    }
    calculateSellingPrice(row);
    addBatteryInfo(row);
  }
};
// 配件选择
const cbPartsGridVL = (row, params) => {
  if (params.partStatus == '2') {
    warn_msg(t('M.E.10151'));
  }
  // 选择part可以直接设置的参数
  setValueOnPartGrid(row, params);
};
// 配件输入后Leave
const onLeavePartsCode = (row, code) => {
  nowPartsCode.value = code;
  getPartsData(row);
};
const getPartsData = async (row) => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  setValueOnPartGrid(row, partsData);
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
  }
};
// 批量添加配件
const callbkSelectMultiParts = (param) => {
// 移除新删除行
  param.removeRecords.forEach((delOne) => {
    partsGrid.value.getTableData().visibleData.forEach((row) => {
      if (delOne.partsNo == row.partsNo) {
        partsGrid.value.remove(row);
      }
    });
  });
  // 追加新追加
  const tableData = partsGrid.value.getTableData().visibleData;
  param.insertRecords.forEach((newOne) => {
    // 选择part可以直接设置的参数
    const existOne = tableData.find(chosen => chosen.partCd === newOne.partCd);
    if (!existOne) {
      const record = addPartsRow();
      setValueOnPartGrid(record, newOne);
      partsGrid.value.insertAt(record, -1).then((newRow) => {
        partsGrid.value.setCurrentRow(newRow.row);
      });
    }
  });
  // 更新应收合计
  onArGridReconstructed('PARTS');
  showPartsMultiWin.value = false;
};
// 计算配件的SellingPrice
const calculateSellingPrice = (row) => {
  const createForEmployeeFlag = motorFormData.createForEmployeeFlag;
  const hasEmployeeCd = !!motorFormData.employeeCd;
  calSellingPrice(row, createForEmployeeFlag, hasEmployeeCd);
  // 更新应收合计
  onArGridReconstructed('PARTS');
};
// To set ymvnStock's color event
const ymvnStockSetting = (row) => {
  if (row.partId && row.qty > 0) {
    if (row.qty > row.onHandQty) {
      if (row.ymvnStockQty) {
        const totalQty = row.ymvnStockQty + row.onHandQty;
        if (row.qty > totalQty) {
          row.ymvnStock = 'N'; // bg-color: red
          row.color = 'bg-color-red';
        } else {
          row.ymvnStock = 'Y'; // bg-color: yellow
          row.color = 'bg-color-yellow';
        }
      } else {
        row.ymvnStock = ''; // bg-color: none
        row.color = 'bg-color-none';
      }
    } else if (row.qty <= row.onHandQty) {
      row.ymvnStock = ''; // bg-color: blue
      row.color = 'bg-color-blue';
    }
  } else {
    row.ymvnStock = ''; // bg-color: none
    row.color = 'bg-color-none';
  }
};
const addBatteryInfo = (partsRow) => {
  if (motorFormData.evFlag == 'Y' && partsRow.batteryFlag == 'Y') {
    const batteryData = batteryGrid.value.getTableData().fullData;
    for (const element of batteryData) {
      const newPartUid = element.newPartId;
      const batteryType = element.batteryType;
      if ((!partsRow.batteryType || partsRow.batteryType == batteryType) && !newPartUid) {
        setBatteryBind(element, partsRow);
      }
      if (!partsRow.batteryType && !newPartUid) {
        partsRow.batteryType = batteryType;
      }
    }
  }
};
// 清空跟电池的关联
const removeBatteryRela = (partsRow) => {
  if (motorFormData.evFlag == 'Y' && partsRow.batteryFlag == 'Y') {
    const batteryData = batteryGrid.value.getTableData().fullData;
    for (const element of batteryData) {
      if (partsRow.batteryType == element.batteryType) {
        resetBatteryBind(element);
      }
    }
  }
};
// PARTS明细切换batteryType时
const chgBatteryRela = (partsRow, newValue) => {
  if (motorFormData.evFlag == 'Y' && partsRow.batteryFlag == 'Y') {
    // 清空配件明细表里batteryType绑定
    const partsData = partsGrid.value.getTableData().visibleData;
    let alreadyBindParts = null;
    for (const element of partsData) {
      if (newValue == element.batteryType) {
        element.batteryType = '';
      } else if (element.batteryType && element.batteryType != newValue) {
        alreadyBindParts = element;
      }
    }
    const batteryData = batteryGrid.value.getTableData().fullData;
    // 清空batteryType关联
    for (const element of batteryData) {
      resetBatteryBind(element);
    }
    // 绑定新的关联
    for (const element of batteryData) {
      if (newValue == element.batteryType) {
        setBatteryBind(element, partsRow);
        partsRow.batteryType = newValue;
      }
      if (alreadyBindParts) {
        setBatteryBind(element, alreadyBindParts);
      }
    }
  }
};
const setBatteryBind = (element, partsRow) => {
  element.newPartId = partsRow.partId;
  element.newPartCd = partsRow.partCd;
  element.sellingPrice = partsRow.sellingPrice;
  const evClaimFlag = partsRow.serviceCategoryId == ServiceCategory.CLAIM ? '1' : '0';
  element.evClaimFlag = evClaimFlag;
  element.settleTypeId = partsRow.settleTypeId;
};
const resetBatteryBind = (element) => {
  element.newPartId = '';
  element.newPartCd = '';
  element.sellingPrice = '';
  element.evClaimFlag = '';
  element.settleTypeId = '';
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
// 选择套餐
const cbSelectPackage = (param) => {
};
const clsPackageAside = () => {
  showPackageWin.value = false;
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
const demand_pop_query_method = ({ pageParams }) => {
  return demandDsApi.runAsync({
    content: '',
    arg0: serviceFormData.serviceCategoryId,
    arg1: motorFormData.modelId,
    arg2: motorFormData.soldDate,
    pageSize: pageParams.pageSize,
    currentPage: pageParams.currentPage,
  });
};
const closeMultiPartsAside = () => {
  showPartsMultiWin.value = false;
};
/** 样式 */
// Coupon History
const couponHistCellClass = ({ row, column }) => {
  if (row.couponResult === 'Y'
&& column.field === 'couponResult') {
    return 'greenOk';
  } else if (row.couponResult === 'N'
&& column.field === 'couponResult') {
    return 'grayCross';
  }
  return null;
};
// JOB Grid 表尾合计
const sumJobGridFooter = (data, filed) => {
  let sumAmount = 0;
  data.forEach((item) => {
    sumAmount += item.sellingPrice;
  });
  return formatPrice(sumAmount);
};
const sumNum = (list, column, field) => {
  let result;
  if (column.params.isTabular) {
    result = {};
    result[field] = 0;
    column.params.children.forEach((child) => {
      if (child.field !== field) {
        result[child.field]
= 'directions xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
      }
    });
    list.forEach((item) => {
      result[field] += Number(item[field]);
    });
  } else {
    result = 0;
    list.forEach((item) => {
      result += Number(item[field]);
    });
  }
  return result;
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
                if (!serviceFormData.mechanicId) {
                  VueMessage.error(t('errors.required', [t('label.mechanic')]));
                  return false;
                }
              }
              situationGrid.value.fullValidate((validSituation) => {
                if (!validSituation) {
                  jobGrid.value.fullValidate((validJob) => {
                    if (!validJob) {
                      partsGrid.value.fullValidate((validParts) => {
                        if (!validParts) {
                          if (batteryGrid && batteryGrid.value) {
                            const batteryLength = batteryGrid.value.getTableData().fullData.length;
                            const partsData = partsGrid.value.getTableData().fullData;
                            const partsLength = partsData.filter(chosen => chosen.batteryFlag === 'Y').length;
                            if (partsLength > batteryLength) {
                              VueMessage.error(t('M.E.00203', [t('label.partsQtyInPartsDetail'), t('label.batteryQtyInBatteryDetail')]));
                              return false;
                            }
                            batteryGrid.value.fullValidate((validBattery) => {
                              if (!validBattery) {
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
                          } else if (action == '!CONFIRM') {
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
                <VueButton id="viewHistoryBtn" ref="viewHistoryBtn" icon-position="left" :disabled="!motorFormData.modelId" @click="viewHistoryBtnClick">
                  {{ t('button.viewServiceHistory') }}
                </VueButton>
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
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.relationType')"
                prop="ownerType"
                :rules="rules.viy2Radio_4lv5UARules"
              >
                <VueRadioGroup
                  id="viy2Radio_4lv5UA"
                  ref="viy2Radio_4lv5UA"
                  v-model="motorFormData.ownerType"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in mstCodeData.S022"
                    :key="option.codeDbid"
                    :label="option.codeDbid"
                    :name="option.name"
                    :disabled="option.disabled"
                  >
                    {{ option.codeData1 }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 4 }"
            />
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.useType')"
                prop="useType"
                :rules="rules.viy2Select_4REDEWRules"
              >
                <VueSelect
                  id="viy2Select_4REDEW"
                  ref="viy2Select_4REDEW"
                  v-model="motorFormData.useType"
                  :style="{ width: '160px' }"
                  :enabled="requireValid"
                  :clearable="true"
                  :options="userTypeDs"
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
                v-if="basicFormData.doFlag == doFlag_Y"
                :label="t('label.modelType')"
                prop="modelTypeId"
                :rules="rules.viy2Select_4k9XQYRules"
              >
                <VueSelect
                  id="viy2Select_4k9XQY"
                  ref="viy2Select_4k9XQY"
                  v-model="motorFormData.modelTypeId"
                  :style="{ width: '160px' }"
                  :disabled="!!motorFormData.dbModelTypeId"
                  :options="modelTypeDs"
                  :props="{
                    label: 'categoryCd',
                    value: 'productCategoryId',
                  }"
                  @change="viy2Select_4k9XQYChange"
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
              :md="{ span: 21 }"
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
                  :disabled="[ServiceOrderStatus.COMPLETED, ServiceOrderStatus.CANCELLED].includes(basicFormData.orderStatusId) || !!motorFormData.dbPolicyResult"
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
            <VueCol
              item-key="item"
              :md="{ span: 1 }"
            />
            <VueCol
              item-key="item"
              :md="{ span: 1 }"
            />
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                v-if="basicFormData.doFlag == doFlag_Y"
                :label="t('label.createOrderForEmployee')"
                label-width="210px"
                prop="createForEmployeeFlag"
              >
                <VueCheckbox
                  id="viy2CheckBox_52VUx4"
                  ref="viy2CheckBox_52VUx4"
                  v-model="motorFormData.createForEmployeeFlag"
                  true-label="1"
                  false-label="0"
                  @change="viy2CheckBox_52VUx4Change"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                v-if="itemsCtl.showEmployeeRow.value"
                :label="t('label.employeeCode')"
                label-width="150px"
                prop="employeeCd"
              >
                <VueInput
                  id="viy2InputBox_4Wokfm"
                  ref="viy2InputBox_4Wokfm"
                  v-model="motorFormData.employeeCd"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :maxlength="40"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                v-if="itemsCtl.showEmployeeRow.value"
                :label="t('label.relationship')"
                prop="relationShipId"
                :rules="rules.viy2Select_aimh5WRules"
              >
                <VueSelect
                  id="viy2Select_aimh5W"
                  ref="viy2Select_aimh5W"
                  v-model="motorFormData.relationShipId"
                  :style="{ width: '200px' }"
                  :options="get(mstCodeData, 'S066')"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                  :label-formatter="viy2Select_aimh5WLabelFormatter"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                v-if="itemsCtl.showEmployeeRow.value"
                :label="t('label.ticketNo')"
                prop="ticketNo"
              >
                <VueInput
                  id="viy2InputBox_NpVhwe"
                  ref="viy2InputBox_NpVhwe"
                  v-model="motorFormData.ticketNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :maxlength="40"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
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
              >
                <VueButton id="viy2Button_ARtwE" ref="viy2Button_ARtwE" icon-position="left" :disabled="!motorFormData.modelId" @click="viy2Button_ARtwEClick">
                  {{ t('button.freeCouponCondition') }}
                </VueButton>
              </VueCol>
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
                :label="t('label.category')"
                prop="serviceCategoryId"
                :rules="rules.viy2Select_AQW3gRules"
              >
                <VueSelect
                  id="viy2Select_AQW3g"
                  ref="viy2Select_AQW3g"
                  v-model="serviceFormData.serviceCategoryId"
                  :style="{ width: '200px' }"
                  :disabled="!isNewStatus() || !itemsCtl.enableServiceCategory.value"
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
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.serviceDemand')"
                prop="serviceDemand"
              >
                <VueValueList
                  :use-common-popup="true"
                  :popup-columns="serviceFormData.demandType == 'SP' ? serviceSp_column : demand_column"
                  :popup-conditions="serviceFormData.demandType == 'SP' ? serviceSp_pop_condition : demand_pop_condition"
                  id="viy2ValueList_50vz3g"
                  :popup-query-method="serviceFormData.demandType == 'SP' ? serviceSp_pop_query_method : demand_pop_query_method"
                  ref="viy2ValueList_50vz3g"
                  aside-size="50%"
                  v-model="serviceFormData.serviceDemand"
                  popup-type="aside"
                  :select-field="serviceFormData.demandType == 'SP' ? 'campaignTitle' : 'serviceDemand'"
                  :close-on-click-modal="true"
                  :use-popup="true"
                  :disabled="isDoneStatus() || !itemsCtl.enableDemandBtn.value || !motorFormData.soldDate"
                  :use-popover="false"
                  width="250px"
                  @select="viy2ValueList_50vz3gSelect"
                  @clear="viy2ValueList_50vz3gClear"
                  @leave="viy2ValueList_50vz3gLeave"
                >
                  <template #asideHeader>
                    <VueRow
                      id="viy2Row_99De62"
                      ref="viy2Row_99De62"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_9foXaI" ref="viy2Text_9foXaI" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                          {{ t('label.serviceDemand') }}
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
              <VueText v-if="itemsCtl.enableDemandBtn.value && !motorFormData.soldDate" id="viy2Text_brPh1" ref="viy2Text_brPh1" :style="{ width: '100%', display: 'inline-block', color: '#FF0000' }">
                {{ t('M.E.00117', [t('label.soldDate')]) }}
              </VueText>
            </VueCol>
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
              :md="{ span: 12 }"
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
                  :enabled="requireValid"
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
              :md="{ span: 6 }"
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
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="situationInfo" ref="situationInfo" v-model="situationPanelMdl" :title="t('label.unitSituation')">
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
            width="140px"
          >
            <template #asideHeader="scope">
              <VueRow
                id="viy2Row_4BZkRB"
                ref="viy2Row_4BZkRB"
                class="aside-title-row"
              >
                <VueCol
                  item-key="item"
                  :inline="true"
                  class="aside-title-text"
                  :md="{ span: 14 }"
                >
                  <VueText id="viy2Text_4BZkRM" ref="viy2Text_4BZkRM" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                    {{ t('title.partItemRef') }}
                  </VueText>
                </VueCol>
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 10 }"
                >
                  <VueText id="viy2Text_YL9Ui" ref="viy2Text_YL9Ui" :style="{ width: '100%', display: 'inline-block', fontWeight: 'bold', color: '#F56C6C', textAlign: 'right' }">
                    {{ t('label.conditonInput') }}
                  </VueText>
                </VueCol>
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
                <VueButton v-if="!isDoneStatus()" id="viy2Button_27Pzh5" ref="viy2Button_27Pzh5" icon-position="left" :disabled="!isEditStatus() || !itemsCtl.enableChosePackageBtn.value || !motorFormData.modelId || serviceFormData.serviceCategoryId == ServiceCategory.SPECIALCLAIM" @click="viy2Button_27Pzh5Click">
                  {{ t('button.selectServicePackage') }}
                </VueButton>
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
          <VueTabularColumn
            field="viy2TableGroupColumn_PAZ2w"
            :edit-render="Viy2TableGroupColumn_PAZ2wEditRender"
            fixed="left"
            width="220px"
            :children="[
              {
                field: 'serviceCategoryId',
              },
              {
                field: 'serviceDemandContent',
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_PB35w"
                ref="viy2Row_PB35w"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="serviceCategoryId"
                    :title="t('label.category')"
                    :is-required="true"
                    :editable="true"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="serviceDemandContent"
                    :title="t('label.demand')"
                    :editable="true"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_PB35w"
                ref="viy2Row_PB35w"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="serviceCategoryId"
                    :display-options="{
                      compType: 'select',
                      displayMember: 'codeData1',
                      valueMember: 'codeDbid',
                      options: svCategoryDs,
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
                    field="serviceDemandContent"
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
                id="viy2Row_PB35w"
                ref="viy2Row_PB35w"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnEdit field="serviceCategoryId" :scope="scope">
                    <VueSelect
                      v-model="scope.row.serviceCategoryId"
                      :size="scope.$table.props.size"
                      :options="svCategoryDs"
                      :props="jobGridviy2TableSelectColumn_mZ4SAProps"
                      v-on="VueUtil.getEditorEvents(undefined, scope, 'serviceCategoryId')"
                      @change="jobGridServiceCategoryIdChange(scope, $event)"
                    />
                  </VueColumnEdit>
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnEdit field="serviceDemandContent" :scope="scope">
                    <VueValueList
                      v-model="scope.row.serviceDemandContent"
                      :size="scope.$table.props.size"
                      select-field="serviceDemand"
                      popover-width="500"
                      :use-common-popover="true"
                      :popover-columns="demand_column"
                      :popover-query-method="jobGridServiceDemandContentPopoverQueryMethod"
                      @select="jobGridServiceDemandContentSelect(scope, $event)"
                      @clear="jobGridServiceDemandContentClear(scope, $event)"
                      @leave="jobGridServiceDemandContentLeave(scope, $event)"
                    />
                  </VueColumnEdit>
                </VueCol>
              </VueRow>
            </template>
            <template #footer="scope">
              <VueRow
                id="viy2Row_PB35w"
                ref="viy2Row_PB35w"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="serviceCategoryId" :scope="scope" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="serviceDemandContent" :scope="scope" />
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueSelectColumn
            :edit-render="jobGridSymptomIdEditRender"
            field="symptomId"
            fixed="left"
            :title="t('label.symptom')"
            width="120px"
          />
          <VueValueListColumn
            :edit-render="jobGridJobCdEditRender"
            field="jobCd"
            :aggregate-label="t('label.total')"
            fixed="left"
            :title="t('label.serviceJob')"
            width="140px"
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
            :formatter="jobGridStandardPriceFormatter"
            :edit-render="jobGridStandardPriceEditRender"
            field="standardPrice"
            :title="t('label.standardPrice')"
            width="80px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="jobGridDiscountAmtFormatter"
            :edit-render="jobGridDiscountAmtEditRender"
            field="discountAmt"
            align="right"
            :precision="0"
            :title="t('label.discountAmountWithVat')"
            width="150px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="jobGridDiscountFormatter"
            :edit-render="jobGridDiscountEditRender"
            field="discount"
            :title="t('label.discountRate')"
            width="120px"
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
            :aggregate="sumJobGridFooter"
            :title="t('label.sellingPrice')"
            width="120px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="jobGridServicePackageNmEditRender"
            field="servicePackageNm"
            show-overflow="tooltip"
            :title="t('label.servicePackage')"
            min-width="120px"
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
                <VueButton v-if="!isDoneStatus()" id="viy2Button_5XG6Pe" ref="viy2Button_5XG6Pe" icon-position="left" :disabled="!isEditStatus() || !motorFormData.modelId" @click="viy2Button_5XG6PeClick">
                  {{ t('button.ypecWeb') }}
                </VueButton>
                <VueButton v-if="!isDoneStatus()" id="viy2Button_2LwDLs" ref="viy2Button_2LwDLs" icon-position="left" :disabled="!isEditStatus() || !motorFormData.modelId" @click="viy2Button_2LwDLsClick">
                  {{ t('button.addParts') }}
                </VueButton>
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
          <VueTabularColumn
            field="viy2TableGroupColumn_PBgKz"
            :edit-render="Viy2TableGroupColumn_PBgKzEditRender"
            fixed="left"
            width="180px"
            :children="[
              {
                field: 'serviceCategoryId',
              },
              {
                field: 'serviceDemandContent',
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_PBpwe"
                ref="viy2Row_PBpwe"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="serviceCategoryId"
                    :title="t('label.category')"
                    :is-required="true"
                    :editable="true"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="serviceDemandContent"
                    :title="t('label.demand')"
                    :editable="true"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_PBpwe"
                ref="viy2Row_PBpwe"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="serviceCategoryId"
                    :display-options="{
                      compType: 'select',
                      displayMember: 'codeData1',
                      valueMember: 'codeDbid',
                      options: svCategoryDs,
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
                    field="serviceDemandContent"
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
                id="viy2Row_PBpwe"
                ref="viy2Row_PBpwe"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnEdit field="serviceCategoryId" :scope="scope">
                    <VueSelect
                      v-model="scope.row.serviceCategoryId"
                      :size="scope.$table.props.size"
                      :options="svCategoryDs"
                      :props="partsGridcopy0_viy2TableSelectColumn_mZ4SAProps"
                      v-on="VueUtil.getEditorEvents(undefined, scope, 'serviceCategoryId')"
                      @change="partsGridServiceCategoryIdChange(scope, $event)"
                    />
                  </VueColumnEdit>
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnEdit field="serviceDemandContent" :scope="scope">
                    <VueValueList
                      v-model="scope.row.serviceDemandContent"
                      :size="scope.$table.props.size"
                      select-field="serviceDemand"
                      popover-width="500"
                      :use-common-popover="true"
                      :popover-columns="demand_column"
                      :popover-query-method="partsGridServiceDemandContentPopoverQueryMethod"
                      @select="partsGridServiceDemandContentSelect(scope, $event)"
                      @clear="partsGridServiceDemandContentClear(scope, $event)"
                      @leave="partsGridServiceDemandContentLeave(scope, $event)"
                    />
                  </VueColumnEdit>
                </VueCol>
              </VueRow>
            </template>
            <template #footer="scope">
              <VueRow
                id="viy2Row_PBpwe"
                ref="viy2Row_PBpwe"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="serviceCategoryId" :scope="scope" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="serviceDemandContent" :scope="scope" />
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueSelectColumn
            :edit-render="partsGridSymptomIdEditRender"
            field="symptomId"
            fixed="left"
            :title="t('label.symptom')"
            width="120px"
          />
          <VueValueListColumn
            :formatter="partsGridPartCdFormatter"
            :edit-render="partsGridPartCdEditRender"
            field="partCd"
            fixed="left"
            :aggregate-label="t('label.total')"
            :toggle-popover-on-click="false"
            :title="t('label.parts')"
            width="150px"
          >
            <template #asideHeader="scope">
              <VueRow
                id="viy2Row_99De625"
                ref="viy2Row_99De625"
                class="aside-title-row"
              >
                <VueCol
                  item-key="item"
                  class="aside-title-text"
                  :md="{ span: 10 }"
                >
                  <VueText id="viy2Text_4BCUZE" ref="viy2Text_4BCUZE" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                    {{ t('title.partItemRef') }}
                  </VueText>
                </VueCol>
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  class="aside-title-button"
                  :md="{ span: 14 }"
                >
                  <VueText id="viy2Text_Z1gBD" ref="viy2Text_Z1gBD" :style="{ width: '100%', display: 'inline-block', fontWeight: 'bold', color: '#F56C6C', textAlign: 'right' }">
                    {{ t('label.conditonInput') }}
                  </VueText>
                </VueCol>
              </VueRow>
            </template>
          </VueValueListColumn>
          <VueInputColumn
            :edit-render="partsGridPartNmEditRender"
            field="partNm"
            show-overflow="tooltip"
            width="200px"
            :title=" t('label.partsName')"
          />
          <VueValueListColumn
            :edit-render="partsGridSupersedingPartsCdFmtEditRender"
            field="supersedingPartsCdFmt"
            :title="t('label.supersedingParts')"
            width="180px"
          />
          <VueTabularColumn
            field="viy2TableGroupColumn_PBm3N"
            :edit-render="Viy2TableGroupColumn_PBm3NEditRender"
            width="130px"
            :children="[
              {
                field: 'standardPrice',
              },
              {
                field: 'specialPrice',
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_PBAfi"
                ref="viy2Row_PBAfi"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="standardPrice"
                    :title="t('label.stdPrice')"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="specialPrice"
                    :title="t('label.spePrice')"
                    :editable="true"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_PBAfi"
                ref="viy2Row_PBAfi"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="standardPrice"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                        mark: {
                          spaceNumber: 0,
                        },
                      },
                    }"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="specialPrice"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                        mark: {
                          spaceNumber: 0,
                        },
                      },
                    }"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #edit="scope">
              <VueRow
                id="viy2Row_PBAfi"
                ref="viy2Row_PBAfi"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="standardPrice"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                        mark: {
                          spaceNumber: 0,
                        },
                      },
                    }"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnEdit field="specialPrice" :scope="scope">
                    <VueInputNumber
                      v-model="scope.row.specialPrice"
                      :size="scope.$table.props.size"
                      :use-separator="true"
                      :precision="0"
                      text-align="right"
                      :mark="{
                        spaceNumber: 0,
                      }"
                      @change="partsGridSpecialPriceChange(scope, $event)"
                    />
                  </VueColumnEdit>
                </VueCol>
              </VueRow>
            </template>
            <template #footer="scope">
              <VueRow
                id="viy2Row_PBAfi"
                ref="viy2Row_PBAfi"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="standardPrice" :scope="scope" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="specialPrice" :scope="scope" />
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueTabularColumn
            field="viy2TableGroupColumn_LdYFz"
            :edit-render="Viy2TableGroupColumn_LdYFzEditRender"
            width="240px"
            :children="[
              {
                field: 'discountAmt',
              },
              {
                field: 'discount',
              },
              {
                field: 'sellingPrice',
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_Le4aw"
                ref="viy2Row_Le4aw"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 14 }"
                >
                  <VueColumnHeader
                    field="discountAmt"
                    :title="t('label.disAmt')"
                    :editable="true"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 10 }"
                >
                  <VueColumnHeader
                    field="discount"
                    :title="t('label.disRate')"
                    :editable="true"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="sellingPrice"
                    :title="t('label.sellingPrice')"
                    :is-required="true"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_Le4aw"
                ref="viy2Row_Le4aw"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 14 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="discountAmt"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                        mark: {
                          spaceNumber: 0,
                        },
                      },
                    }"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 10 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="discount"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                        mark: {
                          spaceNumber: 2,
                        },
                      },
                    }"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="sellingPrice"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                        mark: {
                          spaceNumber: 0,
                        },
                      },
                    }"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #edit="scope">
              <VueRow
                id="viy2Row_Le4aw"
                ref="viy2Row_Le4aw"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 14 }"
                >
                  <VueColumnEdit field="discountAmt" :scope="scope">
                    <VueInputNumber
                      v-model="scope.row.discountAmt"
                      :size="scope.$table.props.size"
                      :use-separator="true"
                      text-align="right"
                      :mark="{
                        spaceNumber: 0,
                      }"
                      @change="partsGridDiscountAmtChange(scope, $event)"
                    />
                  </VueColumnEdit>
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 10 }"
                >
                  <VueColumnEdit field="discount" :scope="scope">
                    <VueInputNumber
                      v-model="scope.row.discount"
                      :size="scope.$table.props.size"
                      :use-separator="true"
                      text-align="right"
                      :mark="{
                        spaceNumber: 2,
                      }"
                      @change="partsGridDiscountChange(scope, $event)"
                    />
                  </VueColumnEdit>
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="sellingPrice"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                        mark: {
                          spaceNumber: 0,
                        },
                      },
                    }"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #footer="scope">
              <VueRow
                id="viy2Row_Le4aw"
                ref="viy2Row_Le4aw"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 14 }"
                >
                  <VueColumnFooter field="discountAmt" :scope="scope" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 10 }"
                >
                  <VueColumnFooter field="discount" :scope="scope" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="sellingPrice" :scope="scope" />
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueTabularColumn
            field="viy2TableGroupColumn_PCdZ7"
            :edit-render="Viy2TableGroupColumn_PCdZ7EditRender"
            width="130px"
            :children="[
              {
                field: 'qty',
                aggregate: 'sum',
              },
              {
                field: 'amount',
                aggregate: sumAmount,
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_PCr6k"
                ref="viy2Row_PCr6k"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="qty"
                    :title="t('label.quantity')"
                    :is-required="true"
                    :editable="true"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="amount"
                    :title="t('label.amount')"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_PCr6k"
                ref="viy2Row_PCr6k"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="qty"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                        mark: {
                          spaceNumber: 0,
                        },
                      },
                    }"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="amount"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                        mark: {
                          spaceNumber: 0,
                        },
                      },
                    }"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #edit="scope">
              <VueRow
                id="viy2Row_PCr6k"
                ref="viy2Row_PCr6k"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnEdit field="qty" :scope="scope">
                    <VueInputNumber
                      v-model="scope.row.qty"
                      :size="scope.$table.props.size"
                      :use-separator="true"
                      text-align="right"
                      :mark="{
                        spaceNumber: 0,
                      }"
                      v-on="VueUtil.getEditorEvents(undefined, scope, 'qty')"
                      @change="partsGridQtyChange(scope, $event)"
                    />
                  </VueColumnEdit>
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="amount"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                        mark: {
                          spaceNumber: 0,
                        },
                      },
                    }"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #footer="scope">
              <VueRow
                id="viy2Row_PCr6k"
                ref="viy2Row_PCr6k"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="qty" :scope="scope" align="right" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="amount" :scope="scope" align="right" />
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueTabularColumn
            field="viy2TableGroupColumn_PCncy"
            :edit-render="Viy2TableGroupColumn_PCncyEditRender"
            width="130px"
            :children="[
              {
                field: 'onHandQty',
                aggregate: 'sum',
              },
              {
                field: 'boQty',
                aggregate: 'sum',
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_PCsoB"
                ref="viy2Row_PCsoB"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="onHandQty"
                    :title="t('label.onHand')"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="boQty"
                    :title="t('label.bo')"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_PCsoB"
                ref="viy2Row_PCsoB"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="onHandQty"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                      },
                    }"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="boQty"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                      },
                    }"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #footer="scope">
              <VueRow
                id="viy2Row_PCsoB"
                ref="viy2Row_PCsoB"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="onHandQty" :scope="scope" align="right" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="boQty" :scope="scope" align="right" />
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueTabularColumn
            field="viy2TableGroupColumn_PCl5H"
            :edit-render="Viy2TableGroupColumn_PCl5HEditRender"
            width="130px"
            :children="[
              {
                field: 'ymvnStock',
              },
              {
                field: 'shippedQty',
                aggregate: 'sum',
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_PCsYX"
                ref="viy2Row_PCsYX"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="ymvnStock"
                    :title="t('label.ymvnStock')"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="shippedQty"
                    :title="t('label.shipped')"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_PCsYX"
                ref="viy2Row_PCsYX"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="ymvnStock"
                    :display-options="{
                      compType: 'input',
                    }"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="shippedQty"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                      },
                    }"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #footer="scope">
              <VueRow
                id="viy2Row_PCsYX"
                ref="viy2Row_PCsYX"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="ymvnStock" :scope="scope" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="shippedQty" :scope="scope" align="right" />
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueTabularColumn
            field="viy2TableGroupColumn_PCiKZ"
            :edit-render="Viy2TableGroupColumn_PCiKZEditRender"
            width="130px"
            :children="[
              {
                field: 'allocatedQty',
                aggregate: 'sum',
              },
              {
                field: 'locationCd',
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_PCtxX"
                ref="viy2Row_PCtxX"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="allocatedQty"
                    :title="t('label.allocated')"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="locationCd"
                    :title=" t('label.location')"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_PCtxX"
                ref="viy2Row_PCtxX"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="allocatedQty"
                    align="right"
                    :display-options="{
                      compType: 'number',
                      attrs: {
                        useSeparator: true,
                      },
                    }"
                  />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="locationCd"
                    :display-options="{
                      compType: 'input',
                    }"
                    show-overflow="tooltip"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #footer="scope">
              <VueRow
                id="viy2Row_PCtxX"
                ref="viy2Row_PCtxX"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="allocatedQty" :scope="scope" align="right" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnFooter field="locationCd" :scope="scope" />
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueSelectColumn
            :edit-render="partsGridBatteryTypeEditRender"
            field="batteryType"
            show-overflow="tooltip"
            :visible="motorFormData.evFlag == YES_NO_FLAG.YES"
            :title="t('label.batteryType')"
            width="120px"
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
      <VuePanel v-if="motorFormData.evFlag == YES_NO_FLAG.YES" id="batteryInfo" ref="batteryInfo" v-model="batteryPanelMdl" :title="t('button.batteryDetail')">
        <template #header>
          <div style="width: 500px">
            <VueRow
              v-show="batteryPanelMdl"
              id="viy2Row_gMw4S2"
              ref="viy2Row_gMw4S2"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueButton v-if="!isDoneStatus()" id="viy2Button_azLMfc" ref="viy2Button_azLMfc" icon-position="left" :disabled="!isEditStatus() || !motorFormData.modelId" @click="viy2Button_azLMfcClick">
                  {{ t('button.updateEv') }}
                </VueButton>
                <VueButton v-if="!isDoneStatus()" id="viy2Button_azLMfn" ref="viy2Button_azLMfn" icon-position="left" :disabled="itemsCtl.disRefreshEvBtn.value" @click="viy2Button_azLMfnClick">
                  {{ t('button.refresh') }}
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="batteryGrid" ref="batteryGrid" header-align="center" :show-footer="true" :data="gridData.battery" :edit-rules="batteryGridRules" :edit-config="batteryGridEditConfig" :mouse-config="batteryGridMouseConfig">
          <VueInputColumn
            :formatter="batteryGridPartCdFormatter"
            :edit-render="batteryGridPartCdEditRender"
            field="partCd"
            show-overflow="tooltip"
            :title="t('label.parts')"
            header-align="center"
            width="150px"
          />
          <VueInputColumn
            :edit-render="batteryGridCurrentBatteryNoEditRender"
            field="currentBatteryNo"
            :title="t('label.currentBatteryId')"
            header-align="center"
            width="150px"
          />
          <VueDateTimeColumn
            :edit-render="batteryGridWarttryStartDateEditRender"
            field="warttryStartDate"
            align="center"
            :title="t('label.warttryStartDate')"
            width="160px"
          />
          <VueInputColumn
            :edit-render="batteryGridWarrantyTermEditRender"
            field="warrantyTerm"
            :title="t('label.warrantyTerm')"
            header-align="center"
            min-width="140px"
          />
          <VueInputColumn
            :formatter="batteryGridNewPartCdFormatter"
            :edit-render="batteryGridNewPartCdEditRender"
            field="newPartCd"
            :title="t('label.newPart')"
            header-align="center"
            width="150px"
          />
          <VueInputColumn
            :edit-render="batteryGridNewBatteryNoEditRender"
            field="newBatteryNo"
            :title="t('label.newBatteryId')"
            header-align="center"
            width="180px"
          />
          <VueNumberColumn
            :edit-render="batteryGridSellingPriceEditRender"
            field="sellingPrice"
            :title="t('label.sellingPrice')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="batteryGridBatteryTypeEditRender"
            field="batteryType"
            :title="t('label.batteryType')"
            header-align="center"
            width="140px"
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
            :formatter="summaryGridBatteryDetailFormatter"
            :edit-render="summaryGridBatteryDetailEditRender"
            field="batteryDetail"
            :title="t('button.batteryDetail')"
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
      </VuePanel>
      <VuePanel id="historyInfo" ref="historyInfo" v-model="histPanelMdl" :title="t('button.orderHistoryDetail')">
        <template #header>
          <div style="width: 300px">
            <VueRow
              v-show="histPanelMdl"
              id="viy2Row_BM4iq"
              ref="viy2Row_BM4iq"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueButton id="viy2Button_65GQDG" ref="viy2Button_65GQDG" icon-position="left" :disabled="itemsCtl.disExportHistBtn.value" @click="viy2Button_65GQDGClick">
                  {{ t('button.export') }}
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="historyGrid" ref="historyGrid" :data="gridData.history" :edit-config="historyGridEditConfig" :mouse-config="historyGridMouseConfig">
          <VueDateTimeColumn
            :edit-render="historyGridProcessTimeEditRender"
            field="processTime"
            align="center"
            :title="t('label.processTime')"
            width="180px"
          />
          <VueInputColumn
            :edit-render="historyGridStaffCdEditRender"
            field="staffCd"
            :title="t('label.staffId')"
            width="200px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="historyGridStaffNmEditRender"
            field="staffNm"
            show-overflow="tooltip"
            :title="t('label.staffName')"
            width="200px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="historyGridOperationEditRender"
            field="operation"
            show-overflow="tooltip"
            :title="t('label.operation')"
            width="250px"
            header-align="center"
          />
        </VueTable>
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
