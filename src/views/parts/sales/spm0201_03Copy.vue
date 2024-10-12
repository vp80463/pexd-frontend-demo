<script setup>
import { IconDelete, IconUserFilled, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { get } from 'lodash-es';
import viy2Subpage_OzNTuPage from '/src/views/commons/parts_select_multi.vue';
import viy2Subpage_BTeF1Page from '/src/views/commons/select_consumer.vue';
import viy2Subpage_twcYTPage from '/src/views/fileLoad/fileImport.vue';
import { ref } from 'vue';
import { useParams, useUser } from 'viy-menu';
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import { useApi } from '@/composables/useApi';
import { parts_column, parts_pop_column } from '@/settings/valuelistSetting.js';
import { datePickerShortcuts, formatAmount, formatCodeInput, formatPartNo, formatPrice, warn_msg } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const uc = useUser().userInfo;
const uploadPrivacyDisabled = ref(true);
const consumerPanelModel = ref(true);
const detailPanelModel = ref(true);
const orderStatus = ref('');
const roleStatus = ref('');
const spPurchaseFlag = ref('');
const multiAddressFlag = ref('');
const doFlag = ref('');
const orderForEmployeeFlag = ref('N');
const importInfo = ref({
  programid: 'SPM020103',
  templatename: 'SPM020103_template.xlsx',
  downloadfilename: 'SPM020103ImportExample.xlsx',
  savewarningmsg: 'Do you want to import this file?',
  importfiletype: 'txt',
});
// 使用useRoute来获取路由信息
const route = useRoute();
// 自定义validate
const validateDeliveryPlanDate = (rule, value, callback) => {
  if (orderStatus.value !== 'S015SPCREATED') {
    callback();
  }
  if (orderFormData.deliveryPlanDate < dayjs().format('YYYYMMDD')) {
    callback(new Error(t('error.dateEqAfter', [t('label.deliveryPlanDate'), new Date()])));
  }
  callback();
};
const validateDeliveryAddress = (rule, value, callback) => {
  if (multiAddressFlag.value === 'Y' && isNoValue(orderFormData.deliveryAddress)) {
    callback(new Error(t('errors.required', [t('label.deliveryAddress')])));
  }
  callback();
};
const validatePaymentMethod = (rule, value, callback) => {
  if (multiAddressFlag.value === 'Y' && consumerFormData.paymentMethod === 'S031NA2') {
    callback(new Error(t('M.E.10326', [t('label.paymentMethod')])));
  }
  callback();
};
const validateAddress = (rule, value, callback) => {
  if (isNoValue(consumerFormData.lastNm) && isNoValue(consumerFormData.middleNm) && isNoValue(consumerFormData.firstNm)) {
    callback();
  }
  if (multiAddressFlag.value === 'Y' && isNoValue(consumerFormData.address)) {
    callback(new Error(t('M.E.10326', [t('label.address')])));
  }
  callback();
};
const validateEmail = (rule, value, callback) => {
  if (!isNoValue(consumerFormData.firstNm)) {
    if (doFlag.value === 'Y') {
      if (isNoValue(consumerFormData.email)) {
        callback(new Error(t('M.E.10157', [t('label.email')])));
      } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(consumerFormData.email)) {
          callback(new Error(t('M.E.10311', [t('label.email')])));
        }
      }
    }
  }
  callback();
};
const validateMobilePhone = (rule, value, callback) => {
  if (!isNoValue(consumerFormData.mobilePhone)) {
    if (consumerFormData.mobilePhone.length > 10) {
      callback(new Error(t('M.E.10330', [t('label.mobile')])));
    } else if (consumerFormData.mobilePhone.length < 10) {
      callback(new Error(t('M.E.10331', [t('label.mobile')])));
    }
  }
  callback();
};
const validateConsumer = (rule, value, callback) => {
  const hasFn = !isNoValue(consumerFormData.firstNm);
  const hasLn = !isNoValue(consumerFormData.lastNm);
  const hasMobile = !isNoValue(consumerFormData.mobilePhone);
  if (hasFn && (!hasLn || !hasMobile)) {
    if (!hasLn) {
      callback(new Error(t('errors.required', [t('label.lastName')])));
    }
    callback(new Error(t('errors.required', [t('label.mobile')])));
  } else if (hasLn && (!hasFn || !hasMobile)) {
    if (!hasFn) {
      callback(new Error(t('errors.required', [t('label.firstName')])));
    }
    callback(new Error(t('errors.required', [t('label.mobile')])));
  } else if (hasMobile && (!hasFn || !hasLn)) {
    if (!hasFn) {
      callback(new Error(t('errors.required', [t('label.firstName')])));
    }
    callback(new Error(t('errors.required', [t('label.lastName')])));
  }
  callback();
};
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const policyFileName = ref();
const privacyPolicyResultFromDB = ref();
const consumerType = ref();
const consumerTypeId = ref();
const point = ref();
const pointId = ref();
const asideParams = ref();
const nowPartsCode = ref();
const routeParam = useParams();
defineOptions({
  name: 'spm0201_03Copy',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const Print = ref();
const viy2Button_9df73u = ref();
const viy2Button_9df5uo = ref();
const viy2Button_9dgvgy = ref();
const viy2Button_9dgNnI = ref();
const viy2Button_9dgOOK = ref();
const saveOrderBtn = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_4ZvmYa = ref();
const viy2InputBox_4ZFbsM = ref();
const viy2DateTimePicker_5k94S8 = ref();
const viy2InputBox_4Zo9uM = ref();
const viy2InputBox_5k94Sg = ref();
const viy2Select_oWu7z = ref();
const viy2Select_RfsMPg = ref();
const viy2NumberInput_x1ABM = ref();
const viy2InputBox_RfsMSE = ref();
const viy2CheckBox_RfsMSD = ref();
const viy2CheckBox_5k94Sw = ref();
const viy2Select_3sx3fk = ref();
const viy2Panel_3sGLVS = ref();
const viy2Row_9HKlfR = ref();
const viy2Button_9HKlfS = ref();
const consumerForm = ref();
const viy2Row_9HKlfU = ref();
const viy2InputBox_9HKlg5 = ref();
const viy2InputBox_9HKlg8 = ref();
const viy2InputBox_1z3tqAb = ref();
const viy2Button_1z3tqBQ = ref();
const viy2InputBox_1z3tqBR = ref();
const viy2InputBox_1z3tqBU = ref();
const viy2Radio_1z3tqH1 = ref();
const viy2Upload_1z3tqIF = ref();
const viy2Button_Sa4Wc = ref();
const viy2InputBox_1z3tqDC = ref();
const viy2Select_1z3tqFh = ref();
const viy2Row_1z3tqH0 = ref();
const viy2InputBox_1z3tqDz = ref();
const viy2Panel_oqx1Vg = ref();
const viy2Row_2xv9o = ref();
const internalForm = ref();
const viy2Row_xChMPR = ref();
const viy2CheckBox_3sm5I2 = ref();
const viy2InputBox_3snLNg = ref();
const viy2Select_3soBTK = ref();
const viy2InputBox_3suse6 = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const viy2Button_8d4cpK = ref();
const viy2Button_AsKSg = ref();
const viy2Button_5SFpP6 = ref();
const viy2Button_89VsAk = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Row_99De62 = ref();
const viy2CheckBox_8T8R2z = ref();
const viy2CheckBox_5hzfuO = ref();
const partsMultiAside = ref();
const viy2Subpage_OzNTu = ref();
const consumerAside = ref();
const viy2Subpage_BTeF1 = ref();
const viy2Dialog_tvwZt = ref();
const viy2Subpage_twcYT = ref();
const formData = reactive({
});
const orderFormData = reactive({
  consumerTypeId: '', consumerType: '', deliveryPlanDate: '', salesOrderId: '', orderNo: '', point: '', discountPercentage: '', depositAmt: 0, memo: '', eoACCSign: 'N', shipSign: 'Y', deliveryAddress: '',
});
const consumerFormData = reactive({
  lastNm: '', middleNm: '', firstNm: '', mobilePhone: '', custaxCd: '', privacyResult: '', email: '', paymentMethod: '', address: '',
});
const internalFormData = reactive({
  createEmployeeSign: 'N', employeeCd: '', relationship: '', ticketNo: '',
});
const rules = reactive({
  viy2InputBox_4ZvmYaRules: [
    {
      required: true,
      message: t('errors.required', [t('label.consumerType')]),
    },
  ],
  viy2InputBox_4ZFbsMRules: [
    {
      required: true,
      message: t('errors.required', [t('label.consumerType')]),
    },
  ],
  viy2DateTimePicker_5k94S8Rules: [
    {
      validator: validateDeliveryPlanDate,
    },
  ],
  viy2Select_oWu7zRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2Select_3sx3fkRules: [
    {
      validator: validateDeliveryAddress,
    },
  ],
  viy2InputBox_9HKlg5Rules: [
    {
      validator: validateConsumer,
    },
  ],
  viy2InputBox_1z3tqAbRules: [
    {
      validator: validateConsumer,
    },
  ],
  viy2InputBox_1z3tqBRRules: [
    {
      validator: validateMobilePhone,
    },
    {
      validator: validateConsumer,
    },
  ],
  viy2InputBox_1z3tqDCRules: [
    {
      validator: validateEmail,
    },
  ],
  viy2Select_1z3tqFhRules: [
    {
      validator: validatePaymentMethod,
    },
  ],
  viy2InputBox_1z3tqDzRules: [
    {
      validator: validateAddress,
    },
  ],
});
const gridRules = {
  partsNo: [{
    required: true,
    message: t('errors.required', [t('label.partsNo')]),
  },
    // {
    // validator(rule) {
    // return new Promise((resolve, reject) => {
    // setTimeout(() => {
    // if (isNoValue(rule.row['partsId'])) {
    // reject(new Error(t('M.E.00303', [t('label.partsNo'), rule.cellValue, t('label.productInformation')])));
    // }
    // if (isNoValue(rule.row['partsNo'])) {
    // resolve();
    // }
    // var tableDataList = grid.value.getTableData().fullData;
    // var duplicated = false;
    // for (let key in tableDataList) {
    // var item = tableDataList[key];
    // if ('Y' === item.batteryFlag || isNoValue(item.partsNo)) {
    // continue;
    // }
    // if (item.partsNo === rule.row['partsNo']) {
    // if (duplicated) {
    // reject(new Error(t('M.E.00301', [t('label.partsNo')])));
    // }
    // duplicated = true;
    // }
    // }
    // resolve();
    // }, 100);
    // });
    // },
    // },
  ],
  orderQty: [
    { required: true, message: t('errors.required', [t('label.quantity')]) },
    {
      validator(rule) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (rule.row.orderQty <= 0) {
              reject(new Error(t('M.E.00200', [t('label.orderQuantity'), '0'])));
            } else {
              resolve();
            }
          }, 100);
        });
      },
    },
  ],
  sellingPrice: [
    {
      validator(rule) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (rule.row.sellingPrice <= 0) {
              reject(new Error(t('M.E.00200', [t('label.sellingPrice'), '0'])));
            } else {
              resolve();
            }
          }, 100);
        });
      },
    },
  ],
  discount: [{
    validator(rule) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (spPurchaseFlag.value === 'Y') {
            if (isNoValue(rule.row.discount)) {
              reject(new Error(t('M.E.10157', [t('label.disRate')])));
            } else {
              if (rule.row.discount > 23) {
                reject(new Error(t('M.E.00202', ['23'])));
              }
              resolve();
            }
          } else {
            resolve();
          }
        }, 100);
      });
    },
  }],
  batteryID: [{
    validator(rule) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // 如果不是电池 不做电池相关校验
          if (rule.row.batteryFlag === 'N') {
            resolve();
          }
          // 如果是shipment batteryID为空且pickingQty > 0则报错
          if (orderStatus.value === 'S015SPONPICKING' && isNoValue(rule.row.batteryID) && rule.row.pickingQty > 0) {
            reject(new Error(t('M.E.10157', [t('label.batteryId')])));
          }
          // 如果是saveOrder batteryID为空时不做校验
          if (isNoValue(rule.row.batteryID)) {
            resolve();
          }
          // batteryID不为空时校验重复性
          const tableDataList = grid.value.getTableData().fullData;
          let duplicated = false;
          for (const key in tableDataList) {
            const item = tableDataList[key];
            if (item.batteryFlag === 'N' || isNoValue(item.batteryID)) {
              continue;
            }
            if (item.batteryID == rule.row.batteryID) {
              if (duplicated) {
                reject(new Error(t('M.E.00304', [t('label.batteryId'), item.batteryID])));
              }
              duplicated = true;
            }
          }
          resolve();
        }, 100);
      });
    },
  }],
};
const showPartsMultiWin = ref(false);
const showConsumerWin = ref(false);
const importWindowShowFlag = ref(false);
const viy2CheckBox_RfsMSDOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2CheckBox_5k94SwOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2CheckBox_3sm5I2Opts = [
  {
    label:
'',
    value:
'',
  },
];
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  beforeEditMethod: (obj) => {
    const row = obj.row;
    // sellingPrice无法输入但有校验 需要在此禁止输入
    if (obj.column.property === 'sellingPrice') {
      return false;
    }
    // 如果为saveOrder后的值则都不可编辑
    if (!isNoValue(row.orderItemId)) {
      if (obj.column.property === 'partsNo'
|| obj.column.property === 'orderQty'
|| obj.column.property === 'discountAmtVAT'
|| obj.column.property === 'discount'
|| obj.column.property === 'specialPriceVAT'
|| obj.column.property === 'batteryID') {
        return false;
      }
    } else if (obj.column.property == 'discountAmtVAT'
|| obj.column.property == 'discount'
|| obj.column.property == 'specialPriceVAT') {
      // createOrderForEmployee勾选时有关特价的输入框不可编辑
      return orderForEmployeeFlag.value === 'N';
    }
    return true;
  },
});
const gridExportMethod = (obj) => {
  const row = obj.row;
  // 如果为saveOrder后的值则都不可编辑
  console.log(row);
  if (row.orderItemId !== null) {
    if (obj.column.property === 'partsNo'
|| obj.column.property === 'orderQty'
|| obj.column.property === 'discountAmtVAT'
|| obj.column.property === 'discount'
|| obj.column.property === 'specialPriceVAT'
|| obj.column.property === 'batteryID') {
      return false;
    }
  } else {
    // createOrderForEmployee勾选时
    if (obj.column.property == 'discountAmtVAT'
|| obj.column.property == 'discount'
|| obj.column.property == 'specialPriceVAT') {
      return orderForEmployeeFlag.value === 'N';
    }
  }
};
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_8T8R2zOpts = [
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
const viy2CheckBox_5hzfuOOpts = [
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
const gridViy2TableButtonColumn_S6mhnButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRow,
      title: 'Delete',
      disabled: orderStatus.value !== 'S015SPCREATED' && orderStatus.value !== 'S015SPWAITINGALLOCATE' && orderStatus.value !== 'S015SPWAITINGPICKING',
    },
  ];
};
const gridDsApi = useApi({
  url: '/parts/spm0201/spm020103InitSearch.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    spPurchaseFlag.value = data.spPurchaseFlag;
    multiAddressFlag.value = data.multiAddressFlag;
    doFlag.value = data.doFlag;
    if (!isNoValue(data.salesOrderId)) {
      // 填orderForm信息
      orderStatus.value = data.orderStatus;
      orderFormData.deliveryPlanDate = data.deliveryPlanDate;
      orderFormData.salesOrderId = data.salesOrderId;
      orderFormData.orderNo = data.orderNo;
      orderFormData.point = data.point;
      orderFormData.pointId = data.pointId;
      orderFormData.discountPercentage = data.discountPercentage;
      orderFormData.depositAmt = data.depositAmt;
      orderFormData.memo = data.memo;
      orderFormData.shipSign = data.shipSign;
      orderFormData.eoACCSign = data.eoACCSign;
      orderFormData.deliveryAddress = data.deliveryAddress;
      orderFormData.deliveryAddressId = data.deliveryAddressId;
      orderFormData.deliveryOrderId = data.deliveryOrderId;
      orderFormData.invoiceIdList = data.invoiceIdList;
      orderFormData.updateCount = data.updateCount;
      // 填internalForm信息
      internalFormData.createEmployeeSign = data.createEmployeeSign;
      if (data.createEmployeeSign === 'Y') {
        orderForEmployeeFlag.value = 'Y';
      } else {
        orderForEmployeeFlag.value = 'N';
      }
      internalFormData.employeeCd = data.employeeCd;
      internalFormData.relationship = data.relationship;
      internalFormData.ticketNo = data.ticketNo;
      // 填consumerForm信息
      consumerFormData.lastNm = data.lastNm;
      consumerFormData.middleNm = data.middleNm;
      consumerFormData.firstNm = data.firstNm;
      consumerFormData.mobilePhone = data.mobilePhone;
      consumerFormData.sns = data.sns;
      consumerFormData.gender = data.gender;
      consumerFormData.birthYear = data.birthYear;
      consumerFormData.birthDay = data.birthDay;
      consumerFormData.consumerId = data.consumerId;
      consumerFormData.email = data.email;
      consumerFormData.paymentMethod = data.paymentMethod;
      consumerFormData.privacyResult = data.privacyResult;
      consumerFormData.custaxCd = data.custaxCd;
      consumerFormData.address = data.address;
      privacyPolicyResultFromDB.value = data.privacyResult;
      policyFileName.value = data.privacyResult;
    } else {
      orderStatus.value = 'S015SPCREATED';
    }
    if (data.orderStatus === 'S015SPWAITINGALLOCATE'
|| data.orderStatus === 'S015SPWAITINGPICKING') {
      const tableDataList = data.allTableDataList;
      const boFlag = tableDataList.some(item => item.boQty > 0);
      if (boFlag) {
        const query = { orderId: orderFormData.salesOrderId };
        useMultiTags().openTag({
          name: 'spm0213_02', // 路由名称
        });
        // 详情页标签名
        useMultiTags().getTag({ name: 'spm0213_02' }).meta.title = t('title.backOrderDetail_02');
        // router导航到页面并传递参数
        router.push({ name: 'spm0213_02', data: query });
      }
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const privacyPolicyResultDsApi = useApi({
  url: '/common/codevalue/getPrivacyPolicyResult.json',
  method: 'post',
  data: () => {
    return { ...consumerFormData };
  },
  lockScreen: false,
}, {
  onSuccess: (data) => {
    const agreementResult = data.agreementResult;
    if (!isNoValue(agreementResult)) {
      consumerFormData.privacyResult = agreementResult;
      privacyPolicyResultFromDB.value = agreementResult;
      policyFileName.value = agreementResult;
    } else {
      consumerFormData.privacyResult = null;
      privacyPolicyResultFromDB.value = null;
      policyFileName.value = null;
    }
  },
  manual: true,
});
const privacyPolicyResultDs = privacyPolicyResultDsApi.data;
const partsAutoFillDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const partsAutoFillDs = partsAutoFillDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const ymvnStockDsApi = useApi({
  url: '/public/test/ifsSyncTestController.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const ymvnStockDs = ymvnStockDsApi.data;
const cancelDsApi = useApi({
  url: '/parts/spm0201/cancel.json',
  method: 'post',
  data: () => {
    const tableDataList = grid.value.getRecordset();
    const allTableDataList = grid.value.getTableData().fullData;
    orderFormData.tableDataList = tableDataList;
    orderFormData.allTableDataList = allTableDataList;
    return { ...orderFormData, ...internalFormData, ...consumerFormData };
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync({
      salesOrderId: data.salesOrderId,
    });
  },
  manual: true,
});
const cancelDs = cancelDsApi.data;
const shipmentDsApi = useApi({
  url: '/parts/spm0201/shipment.json',
  method: 'post',
  data: () => {
    const tableDataList = grid.value.getRecordset();
    const allTableDataList = grid.value.getTableData().fullData;
    const batteryIdSet = getBatteryIdSet();
    orderFormData.tableDataList = tableDataList;
    orderFormData.allTableDataList = allTableDataList;
    orderFormData.batteryIdList = batteryIdSet;
    return { ...orderFormData, ...internalFormData, ...consumerFormData };
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync({
      salesOrderId: data.salesOrderId,
    });
  },
  manual: true,
});
const shipmentDs = shipmentDsApi.data;
const consumerUploadPrivacyDsApi = useApi({
  url: '/common/consumer/consumerUploadPrivacy.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const consumerUploadPrivacyDs = consumerUploadPrivacyDsApi.data;
const saveOrderDsApi = useApi({
  url: '/parts/spm0201/saveOrder.json',
  method: 'post',
  data: () => {
    const tableDataList = grid.value.getRecordset();
    const allTableDataList = grid.value.getTableData().fullData;
    const batteryIdSet = getBatteryIdSet();
    for (const key in allTableDataList) {
      const item = allTableDataList[key];
      if (item.boCancelSign != item.beforeBoCancelSign) {
        tableDataList.updateRecords.push(item);
      }
    }
    orderFormData.tableDataList = tableDataList;
    orderFormData.allTableDataList = allTableDataList;
    orderFormData.batteryIdList = batteryIdSet;
    return { ...orderFormData, ...internalFormData, ...consumerFormData };
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync({
      salesOrderId: data.salesOrderId,
    });
  },
  manual: true,
});
const saveOrderDs = saveOrderDsApi.data;
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S044', 'S062', 'S066'],
  lockScreen: false,
}, {
  initialData: {
    S044: [],
    S062: [],
    S066: [],
  },
  manual: true,
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const paymentMethodTypeDsApi = useApi({
  url: '/common/helper/getPaymentMethodTypeList.json',
  method: 'post',
  lockScreen: false,
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const paymentMethodTypeDs = paymentMethodTypeDsApi.data;
const consumerTypeDsApi = useApi({
  url: '/common/helper/getTraderRoleList.json',
  method: 'post',
  lockScreen: false,
}, {
  onSuccess: (data) => {
    for (const key in data) {
      if (data[key].codeData2 === 'CUSTOMER') {
        consumerType.value = data[key].codeData1;
        consumerTypeId.value = data[key].codeDbid;
        orderFormData.consumerType = consumerType.value;
        orderFormData.consumerTypeId = consumerTypeId.value;
      }
    }
  },
  manual: true,
});
const consumerTypeDs = consumerTypeDsApi.data;
const pickingDsApi = useApi({
  url: '/parts/spm0201/picking.json',
  method: 'post',
  data: () => {
    const tableDataList = grid.value.getRecordset();
    const allTableDataList = grid.value.getTableData().fullData;
    for (const key in allTableDataList) {
      const item = allTableDataList[key];
      if (item.boCancelSign != item.beforeBoCancelSign) {
        tableDataList.updateRecords.push(item);
      }
    }
    orderFormData.tableDataList = tableDataList;
    orderFormData.allTableDataList = allTableDataList;
    return { ...orderFormData, ...internalFormData, ...consumerFormData };
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync({
      salesOrderId: data.salesOrderId,
    });
  },
  manual: true,
});
const pickingDs = pickingDsApi.data;
const productCtgDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const productCtgDs = productCtgDsApi.data;
const pointAddressDsApi = useApi({
  url: '/common/helper/getPointAddressList.json',
  method: 'post',
  lockScreen: false,
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const pointAddressDs = pointAddressDsApi.data;
const partsAutoFill2DsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  data: () => {
    return {
      partsCd: nowPartsCode.value,
      autoFillFlag: YES_NO_FLAG.YES,
      facilityId: orderFormData.pointId,
      pageSize: 1,
      currentPage: 1,
    };
  },
  lockScreen: false,
}, {
  manual: true,
});
const partsAutoFill2Ds = partsAutoFill2DsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    if (orderStatus.value === 'S015SPCREATED') {
      resetCondition();
    } else {
      resetCondition();
      gridDsApi.runAsync({
        salesOrderId: null,
      });
    }
  }).catch(() => {
  });
};
const PrintClick = () => {
  if (doFlag.value === 'Y') {
    useApi({
      url: '/parts/spm0201/printFastSalesOrderReportForDO.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          salesOrderId: orderFormData.salesOrderId,
        };
      },
      timeout: 30000,
    }, {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'FastSalesOrderReportForDO.pdf');
      },
    });
  } else {
    useApi({
      url: '/parts/spm0201/printFastSalesOrderReport.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          salesOrderId: orderFormData.salesOrderId,
        };
      },
      timeout: 30000,
    }, {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'FastSalesOrderReport.pdf');
      },
    });
  }
};
const viy2Button_9df73uClick = () => {
  useApi(
    {
      url: '/common/report/printPartsPickingListByOrderReport.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          deliveryOrderId: orderFormData.deliveryOrderId,
        };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartsPickingListReport.pdf');
      },
    },
  );
};
const viy2Button_9df5uoClick = () => {
  useApi(
    {
      url: '/parts/spm0201/printPartsSalesInvoiceReportForDO.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          invoiceIdList: orderFormData.invoiceIdList,
        };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'partsSalesInvoiceForDO.pdf');
        // toFile(data,'PartsSalesReturnInvoiceForFinance.pdf')
      },
    },
  );
};
const viy2Button_9dgvgyClick = () => {
  const tableDataList = grid.value.getTableData().fullData;
  if (!checkDetailNum()) {
    return;
  }
  // 冻结parsNo列会导致提示信息显示不全 有关parsNo的校验放在这
  if (!checkPartsNo()) {
    return;
  }
  orderForm.value.validate((valid) => {
    if (valid) {
      consumerForm.value.validate((valid) => {
        if (valid) {
          if (tableDataList.length > 0) {
            grid.value.fullValidate(tableDataList).then((valid) => {
              if (!valid) {
                shipmentDsApi.runAsync();
              }
            });
          }
        }
      });
    }
  });
};
const viy2Button_9dgNnIClick = () => {
  const tableDataList = grid.value.getTableData().fullData;
  const boFlag = tableDataList.some(item => item.boQty > 0);
  if (boFlag) {
    const query = { orderId: orderFormData.salesOrderId };
    useMultiTags().openTag({
      name: 'spm0213_02', // 路由名称
    });
    // 详情页标签名
    useMultiTags().getTag({ name: 'spm0213_02' }).meta.title = t('title.backOrderDetail_02');
    // router导航到页面并传递参数
    router.push({ name: 'spm0213_02', data: query });
    return;
  }
  pickingDsApi.runAsync();
};
const viy2Button_9dgOOKClick = () => {
  cancelDsApi.runAsync();
};
const saveOrderBtnClick = () => {
  if (!checkUpload()) {
    return;
  }
  // 冻结parsNo列会导致提示信息显示不全 有关parsNo的校验放在这
  if (!checkPartsNo()) {
    return;
  }
  const tableDataList = grid.value.getTableData().fullData;
  const boFlag = tableDataList.some(item => item.boQty > 0);
  orderFormData.boFlag = boFlag ? 'Y' : 'N';
  orderForm.value.validate((valid) => {
    if (valid) {
      consumerForm.value.validate((valid) => {
        if (valid) {
          if (tableDataList.length > 0) {
            grid.value.fullValidate(tableDataList).then((valid) => {
              if (!valid) {
                saveOrderDsApi.runAsync();
              }
            });
          } else {
            saveOrderDsApi.runAsync();
          }
        }
      });
    }
  });
};
const viy2Select_oWu7zChange = (value, data) => {
  orderFormData.pointId = data.id;
  orderFormData.pointCd = data.code;
  orderFormData.pointNm = data.name;
};
const viy2Select_RfsMPgChange = (obj) => {
  reCalculateData(obj);
};
const viy2Select_3sx3fkChange = (value, data) => {
  orderFormData.deliveryAddressId = data.codeDbid;
};
const viy2Button_9HKlfSClick = () => {
  asideParams.value = {
    facilityId: uc.defaultPointId,
  };
  showConsumerWin.value = true;
};
const viy2InputBox_9HKlg5Change = () => {
  privacyPolicyResultDsApi.runAsync();
};
const viy2InputBox_9HKlg8Change = () => {
  privacyPolicyResultDsApi.runAsync();
};
const viy2InputBox_1z3tqAbChange = () => {
  privacyPolicyResultDsApi.runAsync();
};
const viy2Button_1z3tqBQClick = () => {
  consumerForm.value.resetFields();
  consumerFormData.consumerId = null;
  policyFileName.value = null;
  privacyPolicyResultFromDB.value = null;
};
const viy2InputBox_1z3tqBRChange = () => {
  privacyPolicyResultDsApi.runAsync();
};
const viy2Upload_1z3tqIFOnSuccess = (response, file) => {
  policyFileName.value = file.name;
  consumerUploadPrivacyDsApi.runAsync({
    privacyResult: consumerFormData.privacyResult,
    consumerId: consumerFormData.consumerId,
    lastNm: consumerFormData.lastNm,
    middleNm: consumerFormData.middleNm,
    firstNm: consumerFormData.firstNm,
    mobilePhone: consumerFormData.mobilePhone,
  });
};
const viy2Button_Sa4WcClick = () => {
  consumerFormData.privacyResult = null;
  policyFileName.value = null;
  privacyPolicyResultFromDB.value = null;
};
const viy2CheckBox_3sm5I2Change = (obj) => {
  if (obj === 'Y') {
    const allTableDataList = grid.value.getTableData().fullData;
    // 如果table没有值则直接设置flag显示其他三个输入框 否则需要确认是否要改变table内数据
    if (allTableDataList.length === 0) {
      orderForEmployeeFlag.value = 'Y';
    } else {
      VueMessageBox.confirm(t('ymc-commons.P.00011'), t('title.warn'), {
        type: 'warning',
      }).then(() => {
        orderForEmployeeFlag.value = 'Y';
        orderFormData.discountPercentage = null;
        reCalculateData(null);
      }).catch(() => {
        internalFormData.createEmployeeSign = 'N';
      });
    }
  } else {
    const allTableDataList = grid.value.getTableData().fullData;
    // 如果table没有值则直接设置flag显示其他三个输入框 否则需要确认是否要改变table内数据
    if (allTableDataList.length === 0) {
      orderForEmployeeFlag.value = 'N';
      internalFormData.employeeCd = null;
      internalFormData.relationship = null;
      internalFormData.ticketNo = null;
    } else {
      VueMessageBox.confirm(t('ymc-commons.P.00012'), t('title.warn'), {
        type: 'warning',
      }).then(() => {
        grid.value.remove();
        internalFormData.employeeCd = null;
        internalFormData.relationship = null;
        internalFormData.ticketNo = null;
        orderForEmployeeFlag.value = 'N';
      }).catch(() => {
        internalFormData.createEmployeeSign = 'Y';
      });
    }
  }
};
const viy2Button_8d4cpKClick = () => {
  window.open('https://www.baidu.com', '_blank');
};
const viy2Button_AsKSgClick = () => {
  importWindowShowFlag.value = true;
};
const viy2Button_5SFpP6Click = () => {
  asideParams.value = {
    facilityId: uc.defaultPointId,
  };
  showPartsMultiWin.value = true;
};
const viy2Button_89VsAkClick = () => {
  const row = {
    partsNo: null,
    partsNm: null,
    partsId: null,
    supersedingPartsNo: null,
    allocatedProductId: null,
    onHandQty: null,
    orderQty: null,
    ymvnStockQty: null,
    stdPrice: null,
    sellingPrice: null,
    taxRate: null,
    orderAmt: null,
    discountAmtVAT: null,
    discount: null,
    specialPriceVAT: null,
    locationCd: null,
    allocatedQty: null,
    pickingQty: null,
    shippedQty: null,
    cancelledQty: null,
    boQty: null,
    largeGroupNm: null,
    batteryID: null,
    boCancel: null,
    orderItemId: null,
    sellingPriceExVAT: null,
    salesLotQty: null,
    batteryFlag: null,
  };
  grid.value.insertAt(row, -1).then((newRow) => {
    grid.value.setCurrentRow(newRow.row);
  });
};
const gridPartsNoSelect = (obj, params) => {
  const row = obj.row;
  // 选择part可以直接设置的参数
  setValueOnPartGrid(row, params);
  calculateSellingPrice(row);
};
const gridPartsNoClear = (obj) => {
  const row = obj.row;
  clearPartsOnPartsGrid(row);
};
const gridPartsNoLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    const row = obj.row;
    clearPartsOnPartsGrid(row);
    if (params.currentValue) {
      onLeavePartsCode(row, params.currentValue);
    }
  }
};
const gridPartsNoEvents = reactive({
  select: gridPartsNoSelect,
  clear: gridPartsNoClear,
  leave: gridPartsNoLeave,
});
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPartNo(row.cellValue);
  }
  return row.cellValue;
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: true,
    events: gridPartsNoEvents,
    attrs: {
      clearable: true,
      selectField: 'code',
      usePopover: true,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      popoverColumns: parts_column,
      popoverQueryMethod: ({ value, pageParams }) => {
        if (value) {
          return partsAutoFillDsApi.runAsync({
            content: value,
            autoFillFlag: YES_NO_FLAG.YES,
            facilityId: orderFormData.pointId,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage,
          });
        } else {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({ total: 0, list: [] });
            }, 500);
          });
        }
      },
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
      popupColumns: parts_pop_column,
      popupConditions: [
        { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
        { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
        { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
        { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: productCtgDs.value, clearable: true, style: { width: '150px' } },
      ],
      popupQueryMethod: ({ code, batteryFlag, brandId, prodCtg, pageParams }) => {
        return partsAutoFillDsApi.runAsync({
          code,
          batteryFlag,
          brandId,
          prodCtg,
          autoFillFlag: YES_NO_FLAG.YES,
          facilityId: orderFormData.pointId,
          pageSize: pageParams.pageSize,
          currentPage: pageParams.currentPage,
        });
      },
      popupPagable: true,
      closeOnClickModal: true,
    },
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSupersedingPartsCdFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPartNo(row.cellValue);
  }
  return row.cellValue;
};
const gridSupersedingPartsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOnHandQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOrderQtyBlur = (obj) => {
  const row = obj.row;
  if (!isNoValue(row.salesLotQty)) {
    if (!isNoValue(row.orderQty)) {
      const orderQty = row.orderQty;
      const salesLotQty = row.salesLotQty;
      row.orderQty = Math.ceil(orderQty / salesLotQty) * salesLotQty;
    }
    calculateSellingPrice(row);
  }
};
const gridOrderQtyEvents = reactive({
  blur: gridOrderQtyBlur,
});
const gridOrderQtyEditRender = computed(() => {
  return {
    enabled: true,
    events: gridOrderQtyEvents,
    attrs: {
      min: 1,
      step: 1,
      stepStrictly: true,
      textAlign: 'right',
    },
  };
});
const gridYmvnStockQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridStdPriceFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPrice(row.cellValue);
  }
  return row.cellValue;
};
const gridStdPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSellingPriceFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPrice(row.cellValue);
  }
  return row.cellValue;
};
const gridSellingPriceEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOrderAmtFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatAmount(row.cellValue);
  }
  return row.cellValue;
};
const gridOrderAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridDiscountAmtVATBlur = (obj) => {
  const row = obj.row;
  // 如果有输入值
  if (!isNoValue(row.discountAmtVAT)) {
    row.specialPriceVAT = null;
  }
  calculateSellingPrice(row);
};
const gridDiscountAmtVATEvents = reactive({
  blur: gridDiscountAmtVATBlur,
});
const gridDiscountAmtVATEditRender = computed(() => {
  return {
    enabled: true,
    events: gridDiscountAmtVATEvents,
    attrs: {
      min: 1,
      step: 1,
      stepStrictly: true,
      textAlign: 'right',
    },
  };
});
const gridDiscountBlur = (obj) => {
  const row = obj.row;
  // 如果有输入值
  if (!isNoValue(row.discount)) {
    row.specialPriceVAT = null;
  }
  calculateSellingPrice(row);
};
const gridDiscountEvents = reactive({
  blur: gridDiscountBlur,
});
const gridDiscountEditRender = computed(() => {
  return {
    enabled: true,
    events: gridDiscountEvents,
    attrs: {
      min: 0,
      max: 23,
      step: 1,
      stepStrictly: true,
      textAlign: 'right',
    },
  };
});
const gridSpecialPriceVATBlur = (obj) => {
  const row = obj.row;
  // 如果有输入值
  if (!isNoValue(row.specialPriceVAT)) {
    row.discountAmtVAT = null;
    row.discount = null;
  }
  calculateSellingPrice(row);
};
const gridSpecialPriceVATEvents = reactive({
  blur: gridSpecialPriceVATBlur,
});
const gridSpecialPriceVATEditRender = computed(() => {
  return {
    enabled: true,
    events: gridSpecialPriceVATEvents,
    attrs: {
      min: 1,
      step: 1,
      stepStrictly: true,
      textAlign: 'right',
    },
  };
});
const gridLocationCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPickingQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridShippedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCancelledQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridBoQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridLargeGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBatteryIDEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridCopy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
onMounted(() => {
  point.value = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  pointId.value = uc.defaultPointId;
  orderFormData.point = point.value;
  orderFormData.pointId = pointId.value;
  initData();
});
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const initData = () => {
// const params = routeParam;
// if (params.salesOrderId) {
// gridDsApi.runAsync({
// salesOrderId: params.salesOrderId
// });
// } else {
// gridDsApi.runAsync({
// salesOrderId: null
// });
// }
};
watch(() => ({ ...consumerFormData }), (newVal, oldVal) => {
  const fullNm = consumerFormData.lastNm + consumerFormData.middleNm + consumerFormData.firstNm;
  const mobilePhone = consumerFormData.mobilePhone;
  if (isNoValue(fullNm) || isNoValue(mobilePhone)) {
    uploadPrivacyDisabled.value = true;
  } else if (consumerFormData.mobilePhone.length === 10) {
    uploadPrivacyDisabled.value = false;
  }
  consumerForm.value.validate();
}, { deep: true });
watch(() => ({ ...internalFormData.employeeCd }), (newVal, oldVal) => {
  reCalculateData(null);
}, { deep: true });
const resetCondition = () => {
// 清空表单元素
  orderForm.value.resetFields();
  if (doFlag.value === 'Y') {
    internalFormData.employeeCd = null;
    internalFormData.relationship = null;
    internalFormData.ticketNo = null;
    internalFormData.createEmployeeSign = 'N';
    orderForEmployeeFlag.value = 'N';
  }
  consumerForm.value.resetFields();
  orderFormData.consumerTypeId = consumerTypeId.value;
  orderFormData.consumerType = consumerType.value;
  orderFormData.point = point.value;
  orderFormData.pointId = pointId.value;
  consumerFormData.consumerId = null;
  policyFileName.value = null;
  privacyPolicyResultFromDB.value = null;
  resetTblResults();
  gridDsApi.runAsync({
    salesOrderId: null,
  });
};
const resetTblResults = () => {
  grid.value.remove();
};
const onDelRow = (row) => {
  grid.value.remove(row);
};
const closeAside = () => {
  showPartsWin.value = false;
};
// 部品多选回调
const multiPartsParams = () => {
};
const callbkSelectMultiParts = (param) => {
// 移除新删除行
  param.removeRecords.forEach((delOne) => {
    grid.value.getTableData().visibleData.forEach((row) => {
      if (delOne.partsNo == row.partsNo) {
        grid.value.remove(row);
      }
    });
  });
  // 追加新追加行
  const tableData = grid.value.getTableData().visibleData;
  param.insertRecords.forEach((newOne) => {
    const existOne = tableData.find(chosen => chosen.partsNo === newOne.partsNo);
    if (!existOne) {
      newOne.orderQty = newOne.qty;
      newOne.locationId = newOne.mainLocationId;
      newOne.locationCd = newOne.mainLocationCd;
      if (!isNoValue(orderFormData.discountPercentage)) {
        newOne.discount = orderFormData.discountPercentage;
      }
      calculateSellingPrice(newOne);
      grid.value.insertAt(newOne, -1).then((newRow) => {
        grid.value.setCurrentRow(newRow.row);
      });
    }
  });
  showPartsMultiWin.value = false;
};
const closeMultiPartsAside = () => {
  showPartsMultiWin.value = false;
};
// consumer侧边栏选择后
const callbkSelectConsumer = (params) => {
  consumerFormData.lastNm = params.lastNm;
  consumerFormData.middleNm = params.middleNm;
  consumerFormData.firstNm = params.firstNm;
  consumerFormData.consumerId = params.consumerId;
  consumerFormData.mobilePhone = params.mobilePhone;
  consumerFormData.sns = params.sns;
  consumerFormData.gender = params.gender;
  consumerFormData.province = params.province;
  consumerFormData.district = params.district;
  consumerFormData.address = params.address;
  consumerFormData.email = params.email;
  consumerFormData.birthDate = params.birthDate;
  consumerFormData.birthYear = params.birthYear;
  consumerFormData.age = params.age;
  consumerFormData.privacyResult = params.agreementResult;
  privacyPolicyResultFromDB.value = params.agreementResult;
  policyFileName.value = params.agreementResult;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
};
const calculateSellingPrice = (row) => {
  let stdPrice = row.stdPrice;
  let taxRate = row.taxRate;
  const discount = row.discount;
  const discountAmtVAT = row.discountAmtVAT;
  const specialPriceVAT = row.specialPriceVAT;
  let sellingPrice = 0;
  // 内部购买则先*0.75
  if (internalFormData.createEmployeeSign === 'Y' && !isNoValue(internalFormData.employeeCd)) {
    stdPrice = stdPrice * 0.75;
  }
  // 如果税率没值则默认为10
  if (isNoValue(taxRate)) {
    taxRate = 10;
  }
  if (!isNoValue(discountAmtVAT) && !isNoValue(discount)) {
    sellingPrice = stdPrice * (100 - discount) * (100 + taxRate) / 10000 - discountAmtVAT;
  } else if (!isNoValue(discountAmtVAT) && isNoValue(discount)) {
    sellingPrice = stdPrice * (100 + taxRate) / 100 - discountAmtVAT;
  } else if (isNoValue(discountAmtVAT) && !isNoValue(discount)) {
    sellingPrice = stdPrice * (100 - discount) * (100 + taxRate) / 10000;
  } else if (!isNoValue(specialPriceVAT)) {
    sellingPrice = specialPriceVAT;
  } else {
    sellingPrice = stdPrice * (100 + taxRate) / 100;
  }
  const sellingPriceNotVat = sellingPrice * 100 / (100 + taxRate);
  const roundedSellingPriceNotVat = sellingPriceNotVat.toFixed(0);
  const orderQty = row.orderQty;
  const roundedSellingPrice = sellingPrice.toFixed(0);
  const orderAmt = orderQty * roundedSellingPrice;
  const actualAmtNotVat = orderQty * roundedSellingPriceNotVat;
  row.taxRate = taxRate;
  row.sellingPrice = sellingPrice;
  row.orderAmt = orderAmt;
  row.sellingPriceNotVat = sellingPriceNotVat;
  row.actualAmtNotVat = actualAmtNotVat;
};
const reCalculateData = (discount) => {
  const allTableDataList = grid.value.getTableData().fullData;
  for (const key in allTableDataList) {
    const row = allTableDataList[key];
    row.discountAmtVAT = null;
    row.discount = discount;
    row.specialPriceVAT = null;
    calculateSellingPrice(row);
  }
};
const handle = (formData) => {
// 追加新追加行
  const tableData = grid.value.getTableData().visibleData;
  formData.importList.forEach((newOne) => {
    const existOne = tableData.find(chosen => chosen.partsNo === newOne.partsNo);
    if (!existOne) {
      if (!isNoValue(orderFormData.discountPercentage)) {
        newOne.discount = orderFormData.discountPercentage;
      }
      calculateSellingPrice(newOne);
      grid.value.insertAt(newOne, -1).then((newRow) => {
        grid.value.setCurrentRow(newRow.row);
      });
    }
  });
  importWindowShowFlag.value = false;
};
const getBatteryIdSet = () => {
  const tableDataList = grid.value.getTableData().fullData;
  const batteryIdSet = new Set();
  for (const key in tableDataList) {
    const item = tableDataList[key];
    if (!isNoValue(item.batteryID)) {
      batteryIdSet.add(item.batteryID);
    }
  }
  return [...batteryIdSet];
};
const checkDetailNum = () => {
  const tableDataList = grid.value.getTableData().fullData;
  if (tableDataList.length === 0) {
    warn_msg(t('M.E.00127', [t('label.detail')]));
    return false;
  }
  return true;
};
const checkUpload = () => {
  if (!isNoValue(consumerFormData.privacyResult) && isNoValue(policyFileName.value)) {
    warn_msg(t('M.E.10313'));
    return false;
  }
  return true;
};
const toFile = (data, fileNm) => {
  const url = URL.createObjectURL(data);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = fileNm;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
const checkPartsNo = () => {
  const tableDataList = grid.value.getTableData().fullData;
  const partsNoSet = new Set();
  for (const key in tableDataList) {
    const item = tableDataList[key];
    if (isNoValue(item.partsId)) {
      warn_msg(t('M.E.00303', [t('label.partsNo'), item.partsNo, t('label.productInformation')]));
      return false;
    }
    if (item.batteryFlag === 'Y' || isNoValue(item.partsNo)) {
      continue;
    }
    if (item.batteryFlag === 'N') {
      if (partsNoSet.has(item.partsNo)) {
        warn_msg(t('M.E.00301', [t('label.partsNo')]));
        return false; ;
      } else {
        partsNoSet.add(item.partsNo);
      }
    }
  }
  return true;
};
const setValueOnPartGrid = (row, params) => {
  row.partsId = params.id;
  row.partsNo = params.code;
  row.partsNm = params.name;
  row.supersedingPartsId = params.supersedingPartsId;
  row.supersedingPartsCd = params.supersedingPartsCd;
  row.supersedingPartsNm = params.supersedingPartsNm;
  row.largeGroupNm = params.largeGroup;
  row.onHandQty = params.onHandQty;
  row.salesLotQty = params.salLotSize;
  row.batteryFlag = params.batteryFlag;
  row.stdPrice = params.stdRetailPrice;
  row.taxRate = params.taxRate;
  row.locationId = params.mainLocationId;
  row.locationCd = params.mainLocationCd;
  if (!isNoValue(orderFormData.discountPercentage)) {
    row.discount = orderFormData.discountPercentage;
  }
};
const clearPartsOnPartsGrid = (row) => {
  row.partsNo = null;
  row.partsNm = null;
  row.partsId = null;
  row.supersedingPartsNo = null;
  row.allocatedProductId = null;
  row.onHandQty = null;
  row.orderQty = null;
  row.ymvnStockQty = null;
  row.stdPrice = null;
  row.sellingPrice = null;
  row.taxRate = null;
  row.orderAmt = null;
  row.discountAmtVAT = null;
  row.discount = null;
  row.specialPriceVAT = null;
  row.locationCd = null;
  row.allocatedQty = null;
  row.pickingQty = null;
  row.shippedQty = null;
  row.cancelledQty = null;
  row.boQty = null;
  row.largeGroupNm = null;
  row.batteryID = null;
  row.boCancel = null;
  row.orderItemId = null;
  row.sellingPriceExVAT = null;
  row.salesLotQty = null;
  row.batteryFlag = null;
};
// 配件输入后Leave
const onLeavePartsCode = async (row, code) => {
  nowPartsCode.value = code;
  await getPartsData(row);
};
const getPartsData = async (row) => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  setValueOnPartGrid(row, partsData);
  calculateSellingPrice(row);
};
orderFormData.deliveryPlanDate = dayjs().format('YYYYMMDD');
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_10QMyC"
      ref="viy2Row_10QMyC"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning" class="fixed-button" @click="resetBtnClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton v-if="'S015SPWAITINGALLOCATE' === orderStatus || 'S015SPWAITINGPICKING' === orderStatus || 'S015SPONPICKING' === orderStatus || 'S015SPSHIPMENTED' === orderStatus" id="Print" ref="Print" icon-position="left" class="fixed-button" @click="PrintClick">
          {{ t('button.print') }}
        </VueButton>
        <VueButton v-if="'S015SPONPICKING' === orderStatus || 'S015SPSHIPMENTED' === orderStatus" id="viy2Button_9df73u" ref="viy2Button_9df73u" icon-position="left" class="fixed-button" @click="viy2Button_9df73uClick">
          {{ t('button.printPickingList') }}
        </VueButton>
        <VueButton v-if="'S015SPSHIPMENTED' === orderStatus" id="viy2Button_9df5uo" ref="viy2Button_9df5uo" icon-position="left" class="fixed-button" @click="viy2Button_9df5uoClick">
          {{ t('button.printInvoice') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton v-if="'S015SPONPICKING' === orderStatus" id="viy2Button_9dgvgy" ref="viy2Button_9dgvgy" icon-position="left" class="fixed-button" @click="viy2Button_9dgvgyClick">
          {{ t('button.shipment') }}
        </VueButton>
        <VueButton v-if="'S015SPWAITINGPICKING' === orderStatus" id="viy2Button_9dgNnI" ref="viy2Button_9dgNnI" icon-position="left" class="fixed-button" @click="viy2Button_9dgNnIClick">
          {{ t('button.picking') }}
        </VueButton>
        <VueButton v-if="'S015SPWAITINGALLOCATE' === orderStatus || 'S015SPWAITINGPICKING' === orderStatus" id="viy2Button_9dgOOK" ref="viy2Button_9dgOOK" icon-position="left" class="fixed-button" @click="viy2Button_9dgOOKClick">
          {{ t('button.cancel') }}
        </VueButton>
        <VueButton v-if="'S015SPCREATED' === orderStatus || 'S015SPWAITINGALLOCATE' === orderStatus || 'S015SPWAITINGPICKING' === orderStatus" id="saveOrderBtn" ref="saveOrderBtn" icon-position="left" type="primary" class="fixed-button" @click="saveOrderBtnClick">
          {{ t('button.saveOrder') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" :title="t('label.tableOrderInfo')" class="margin-top-div except-height-css">
      <VueForm
        id="orderForm"
        ref="orderForm"
        label-width="140px"
        :model="orderFormData"
      >
        <VueRow
          id="viy2Row_3mqzSt"
          ref="viy2Row_3mqzSt"
        >
          <VueCol
            item-key="item"
            :md="{ span: 10 }"
          >
            <VueFormItem
              v-show="false"
              label="Consumer Type Id"
              prop="consumerTypeId"
              :rules="rules.viy2InputBox_4ZvmYaRules"
            >
              <VueInput
                id="viy2InputBox_4ZvmYa"
                ref="viy2InputBox_4ZvmYa"
                v-model="orderFormData.consumerTypeId"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.consumerType')"
              prop="consumerType"
              :rules="rules.viy2InputBox_4ZFbsMRules"
            >
              <VueInput
                id="viy2InputBox_4ZFbsM"
                ref="viy2InputBox_4ZFbsM"
                v-model="orderFormData.consumerType"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              :label="t('label.deliveryPlanDate')"
              label-width="170px"
              prop="deliveryPlanDate"
              :rules="rules.viy2DateTimePicker_5k94S8Rules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_5k94S8"
                ref="viy2DateTimePicker_5k94S8"
                v-model="orderFormData.deliveryPlanDate"
                :shortcuts="datePickerShortcuts"
                type="date"
                :disabled="orderStatus !== 'S015SPCREATED'"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              v-show="false"
              :label="t('label.orderId')"
              prop="salesOrderId"
            >
              <VueInput
                id="viy2InputBox_4Zo9uM"
                ref="viy2InputBox_4Zo9uM"
                v-model="orderFormData.salesOrderId"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.orderNo')"
              label-width="200px"
              prop="orderNo"
            >
              <VueInput
                id="viy2InputBox_5k94Sg"
                ref="viy2InputBox_5k94Sg"
                v-model="orderFormData.orderNo"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 10 }"
          >
            <VueFormItem
              :label="t('label.point')"
              prop="point"
              :rules="rules.viy2Select_oWu7zRules"
            >
              <VueSelect
                id="viy2Select_oWu7z"
                ref="viy2Select_oWu7z"
                v-model="orderFormData.point"
                :style="{ width: '300px' }"
                :collapse-tags="true"
                :filterable="true"
                :clearable="true"
                :collapse-tags-tooltip="true"
                :disabled="orderStatus !== 'S015SPCREATED'"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_oWu7zChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              :label="t('label.discountPercentage')"
              label-width="170px"
              prop="discountPercentage"
            >
              <VueSelect
                id="viy2Select_RfsMPg"
                ref="viy2Select_RfsMPg"
                v-model="orderFormData.discountPercentage"
                :style="{ width: '130px' }"
                :disabled="'N' === spPurchaseFlag || orderStatus !== 'S015SPCREATED' || orderForEmployeeFlag === 'Y'"
                :filterable="true"
                :clearable="true"
                :options="get(mstCodeInfoDs, 'S044')"
                :props="{
                  label: 'codeData1',
                  value: 'codeData1',
                }"
                @change="viy2Select_RfsMPgChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              :label="t('label.depositAmount')"
              label-width="200px"
              prop="depositAmt"
            >
              <VueInputNumber
                id="viy2NumberInput_x1ABM"
                ref="viy2NumberInput_x1ABM"
                v-model="orderFormData.depositAmt"
                :formatter="formatAmount"
                :use-separator="true"
                :controls="false"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :precision="0"
                :style="{ width: '130px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 10 }"
          >
            <VueFormItem
              :label="t('label.memo')"
              prop="memo"
            >
              <VueInput
                id="viy2InputBox_RfsMSE"
                ref="viy2InputBox_RfsMSE"
                v-model="orderFormData.memo"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
                :maxlength="255"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              :label="t('label.createEOforACC')"
              label-width="170px"
              prop="eoACCSign"
            >
              <VueCheckbox
                id="viy2CheckBox_RfsMSD"
                ref="viy2CheckBox_RfsMSD"
                v-model="orderFormData.eoACCSign"
                :disabled="orderStatus !== 'S015SPCREATED'"
                true-label="Y"
                false-label="N"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              :label="t('label.shipCompleteSign')"
              label-width="200px"
              prop="shipSign"
            >
              <VueCheckbox
                id="viy2CheckBox_5k94Sw"
                ref="viy2CheckBox_5k94Sw"
                v-model="orderFormData.shipSign"
                disabled="true"
                true-label="Y"
                false-label="N"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 10 }"
          >
            <VueFormItem
              v-if="'Y' === multiAddressFlag"
              :label="t('label.deliveryAddress')"
              prop="deliveryAddress"
              :rules="rules.viy2Select_3sx3fkRules"
            >
              <VueSelect
                id="viy2Select_3sx3fk"
                ref="viy2Select_3sx3fk"
                v-model="orderFormData.deliveryAddress"
                :style="{ width: '500px' }"
                :disabled="orderStatus !== 'S015SPCREATED'"
                :filterable="true"
                :clearable="true"
                :options="pointAddressDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeData1',
                }"
                @change="viy2Select_3sx3fkChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          />
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_3sGLVS" ref="viy2Panel_3sGLVS" v-model="consumerPanelModel" :collapse="true" :title="t('label.tableConsumerInfo')" class="except-height-css">
      <template #header>
        <div style="width: 300px">
          <VueRow
            v-show="consumerPanelModel"
            id="viy2Row_9HKlfR"
            ref="viy2Row_9HKlfR"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_9HKlfS" ref="viy2Button_9HKlfS" icon-position="left" :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'" @click="viy2Button_9HKlfSClick">
                {{ t('button.selectConsumer') }}
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueForm
        id="consumerForm"
        ref="consumerForm"
        label-width="140px"
        :model="consumerFormData"
      >
        <VueRow
          id="viy2Row_9HKlfU"
          ref="viy2Row_9HKlfU"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 10 }"
          >
            <VueFormItem
              :label="t('label.consumer')"
              prop="lastNm"
              :rules="rules.viy2InputBox_9HKlg5Rules"
            >
              <VueInput
                id="viy2InputBox_9HKlg5"
                ref="viy2InputBox_9HKlg5"
                v-model="consumerFormData.lastNm"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
                :style="{ width: '110px' }"
                @change="viy2InputBox_9HKlg5Change"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="middleNm"
            >
              <VueInput
                id="viy2InputBox_9HKlg8"
                ref="viy2InputBox_9HKlg8"
                v-model="consumerFormData.middleNm"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
                :style="{ width: '110px' }"
                @change="viy2InputBox_9HKlg8Change"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="firstNm"
              :rules="rules.viy2InputBox_1z3tqAbRules"
            >
              <VueInput
                id="viy2InputBox_1z3tqAb"
                ref="viy2InputBox_1z3tqAb"
                v-model="consumerFormData.firstNm"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
                :style="{ width: '150px' }"
                @change="viy2InputBox_1z3tqAbChange"
              >
                <template #append>
                  <VueButton id="viy2Button_1z3tqBQ" ref="viy2Button_1z3tqBQ" icon-position="left" type="primary" :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'" class="icon-button-width" :icon="IconUserFilled" @click="viy2Button_1z3tqBQClick">
                    {{ t('button.new') }}
                  </VueButton>
                </template>
              </VueInput>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              :label="t('label.mobilephone')"
              prop="mobilePhone"
              :rules="rules.viy2InputBox_1z3tqBRRules"
            >
              <VueInput
                id="viy2InputBox_1z3tqBR"
                ref="viy2InputBox_1z3tqBR"
                v-model="consumerFormData.mobilePhone"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
                :maxlength="10"
                @change="viy2InputBox_1z3tqBRChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              v-show="'Y' === doFlag"
              :label="t('label.custaxCode')"
              label-width="160px"
              prop="custaxCd"
            >
              <VueInput
                id="viy2InputBox_1z3tqBU"
                ref="viy2InputBox_1z3tqBU"
                v-model="consumerFormData.custaxCd"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 10 }"
          >
            <VueFormItem
              :label="t('label.privacyPolicyResult')"
              prop="privacyResult"
            >
              <VueRadioGroup
                id="viy2Radio_1z3tqH1"
                ref="viy2Radio_1z3tqH1"
                v-model="consumerFormData.privacyResult"
                radio-style="button"
                direction="horizontal"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING' || !isNoValue(privacyPolicyResultFromDB)"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in mstCodeInfoDs.S062"
                  :key="option.codeDbid"
                  :label="option.codeDbid"
                  :name="option.name"
                  :disabled="option.disabled"
                >
                  {{ option.codeData1 }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
            <VueUpload v-show="!isNoValue(consumerFormData.privacyResult) && isNoValue(privacyPolicyResultFromDB)" id="viy2Upload_1z3tqIF" ref="viy2Upload_1z3tqIF" :limit="1" action="http://localhost:8080/a1stream/api/public/test/escortFileUploadTest.json" :disabled="uploadPrivacyDisabled || (orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING')" :on-success="viy2Upload_1z3tqIFOnSuccess">
              <template #trigger>
                <VueButton>
                  {{ t('title.chooseUploadFile') }}
                </VueButton>
              </template>
            </VueUpload>
            <VueButton v-show="!isNoValue(privacyPolicyResultFromDB)" id="viy2Button_Sa4Wc" ref="viy2Button_Sa4Wc" icon-position="left" :disabled="'S015SPCANCELLED' === orderStatus || 'S015SPSHIPMENTED' === orderStatus" @click="viy2Button_Sa4WcClick">
              {{ t('button.reset') }}
            </VueButton>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              v-show="'Y' === doFlag"
              :label="t('label.email')"
              prop="email"
              :rules="rules.viy2InputBox_1z3tqDCRules"
            >
              <VueInput
                id="viy2InputBox_1z3tqDC"
                ref="viy2InputBox_1z3tqDC"
                v-model="consumerFormData.email"
                autocomplete="off"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              v-if="'Y' === doFlag"
              :label="t('label.paymentMethod')"
              label-width="160px"
              prop="paymentMethod"
              :rules="rules.viy2Select_1z3tqFhRules"
            >
              <VueSelect
                id="viy2Select_1z3tqFh"
                ref="viy2Select_1z3tqFh"
                v-model="consumerFormData.paymentMethod"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
                :filterable="true"
                :options="paymentMethodTypeDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <VueRow
          id="viy2Row_1z3tqH0"
          ref="viy2Row_1z3tqH0"
        >
          <VueCol
            item-key="item"
            :md="{ span: 10 }"
          >
            <VueFormItem
              v-show="'Y' === doFlag"
              :label="t('label.address')"
              prop="address"
              :rules="rules.viy2InputBox_1z3tqDzRules"
            >
              <VueInput
                id="viy2InputBox_1z3tqDz"
                ref="viy2InputBox_1z3tqDz"
                v-model="consumerFormData.address"
                autocomplete="off"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel v-if="'Y' === doFlag" id="viy2Panel_oqx1Vg" ref="viy2Panel_oqx1Vg" :collapse="true" title="Internal Sale." class="except-height-css">
      <template #header>
        <div style="width: 300px">
          <VueRow
            id="viy2Row_2xv9o"
            ref="viy2Row_2xv9o"
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
        id="internalForm"
        ref="internalForm"
        label-width="140px"
        :model="internalFormData"
      >
        <VueRow
          id="viy2Row_xChMPR"
          ref="viy2Row_xChMPR"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.createOrderForEmployee')"
              label-width="210px"
              prop="createEmployeeSign"
            >
              <VueCheckbox
                id="viy2CheckBox_3sm5I2"
                ref="viy2CheckBox_3sm5I2"
                v-model="internalFormData.createEmployeeSign"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                true-label="Y"
                false-label="N"
                @change="viy2CheckBox_3sm5I2Change"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              v-if="orderForEmployeeFlag === 'Y'"
              :label="t('label.employeeCd')"
              prop="employeeCd"
            >
              <VueInput
                id="viy2InputBox_3snLNg"
                ref="viy2InputBox_3snLNg"
                v-model="internalFormData.employeeCd"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              v-if="orderForEmployeeFlag === 'Y'"
              :label="t('label.relationship')"
              prop="relationship"
            >
              <VueSelect
                id="viy2Select_3soBTK"
                ref="viy2Select_3soBTK"
                v-model="internalFormData.relationship"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :filterable="true"
                :clearable="true"
                :options="get(mstCodeInfoDs, 'S066')"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              v-if="orderForEmployeeFlag === 'Y'"
              :label="t('label.ticketNo')"
              prop="ticketNo"
            >
              <VueInput
                id="viy2InputBox_3suse6"
                ref="viy2InputBox_3suse6"
                v-model="internalFormData.ticketNo"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                :disabled="orderStatus !== 'S015SPCREATED' && orderStatus !== 'S015SPWAITINGALLOCATE' && orderStatus !== 'S015SPWAITINGPICKING'"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" :title="t('label.detail')" :collapse="true" collapse-icon-position="left">
      <template #header>
        <div style="width: 200px">
          <VueRow
            v-show="detailPanelModel"
            id="viy2Row_wZvy4"
            ref="viy2Row_wZvy4"
          >
            <VueCol
              v-if="detailPanelModel"
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_8d4cpK" ref="viy2Button_8d4cpK" icon-position="left" :disabled="'S015SPCANCELLED' === orderStatus || 'S015SPSHIPMENTED' === orderStatus" @click="viy2Button_8d4cpKClick">
                {{ t('button.ypecWeb') }}
              </VueButton>
              <VueButton v-if="'S015SPCREATED' === orderStatus || 'S015SPWAITINGALLOCATE' === orderStatus || 'S015SPWAITINGPICKING' === orderStatus" id="viy2Button_AsKSg" ref="viy2Button_AsKSg" icon-position="left" @click="viy2Button_AsKSgClick">
                {{ t('button.import') }}
              </VueButton>
              <VueButton v-if="'S015SPCREATED' === orderStatus || 'S015SPWAITINGALLOCATE' === orderStatus || 'S015SPWAITINGPICKING' === orderStatus" id="viy2Button_5SFpP6" ref="viy2Button_5SFpP6" icon-position="left" @click="viy2Button_5SFpP6Click">
                {{ t('button.addParts') }}
              </VueButton>
              <VueButton v-if="'S015SPCREATED' === orderStatus || 'S015SPWAITINGALLOCATE' === orderStatus || 'S015SPWAITINGPICKING' === orderStatus" id="viy2Button_89VsAk" ref="viy2Button_89VsAk" icon-position="left" class="icon-button-width" @click="viy2Button_89VsAkClick">
                +
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="grid" ref="grid" :stripe="true" header-align="center" :highlight-current-row="true" height="350px" :border="true" :show-footer="true" :data="gridDs.allTableDataList" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
        <VueRow
          id="viy2Row_AsHNi"
          ref="viy2Row_AsHNi"
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
        <VueValueListColumn
          :formatter="gridPartsNoFormatter"
          :edit-render="gridPartsNoEditRender"
          field="partsNo"
          :clearable="true"
          fixed="left"
          show-overflow="tooltip"
          :sortable="true"
          :title="t('label.partsNo')"
          width="150px"
        >
          <template #asideHeader="scope">
            <VueRow
              id="viy2Row_99De62"
              ref="viy2Row_99De62"
              class="aside-title-row"
            >
              <VueCol
                item-key="item"
                class="aside-title-text"
                :md="{ span: 10 }"
              >
                <VueText id="viy2Text_5Wg0tq" ref="viy2Text_5Wg0tq" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
          :edit-render="gridPartsNmEditRender"
          field="partsNm"
          show-overflow="title"
          :sortable="true"
          :title="t('label.partsName')"
          width="150px"
          header-align="center"
        />
        <VueInputColumn
          :formatter="gridSupersedingPartsCdFormatter"
          :edit-render="gridSupersedingPartsCdEditRender"
          field="supersedingPartsCd"
          :sortable="true"
          :title="t('label.supersedingParts')"
          width="150px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridOnHandQtyEditRender"
          field="onHandQty"
          align="right"
          :aggregate-label="t('label.total')"
          footer-align="center"
          :sortable="true"
          :title="t('label.onHandQuantity')"
          width="120px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridOrderQtyEditRender"
          field="orderQty"
          align="right"
          :resizable="true"
          :step="1"
          :step-strictly="true"
          :min="1"
          aggregate="sum"
          :sortable="true"
          :title="t('label.quantity')"
          width="130px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridYmvnStockQtyEditRender"
          field="ymvnStockQty"
          align="right"
          :sortable="true"
          :title="t('label.ymvnStock')"
          width="140px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridStdPriceFormatter"
          :edit-render="gridStdPriceEditRender"
          field="stdPrice"
          align="right"
          :sortable="true"
          :title="t('label.standardRetailPrice')"
          width="160px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridSellingPriceFormatter"
          :edit-render="gridSellingPriceEditRender"
          field="sellingPrice"
          align="right"
          show-overflow="tooltip"
          :sortable="true"
          :title="t('label.sellingPrice')"
          width="180px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOrderAmtFormatter"
          :edit-render="gridOrderAmtEditRender"
          field="orderAmt"
          align="right"
          aggregate="sum"
          :sortable="true"
          :title="t('label.amount')"
          width="110px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridDiscountAmtVATEditRender"
          field="discountAmtVAT"
          align="right"
          :visible="'Y' === doFlag"
          :min="1"
          :step-strictly="true"
          :step="1"
          :disabled="true"
          :sortable="true"
          :title="t('label.discountAmountWithVat')"
          width="160px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridDiscountEditRender"
          field="discount"
          align="right"
          :min="0"
          :step-strictly="true"
          :step="1"
          :max="23"
          :sortable="true"
          :title="t('label.disRate')"
          width="110px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridSpecialPriceVATEditRender"
          field="specialPriceVAT"
          align="right"
          :min="1"
          :step="1"
          :step-strictly="true"
          :sortable="true"
          :title="t('label.specialPriceIncVAT')"
          width="170px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="gridLocationCdEditRender"
          field="locationCd"
          :sortable="true"
          :title="t('label.location')"
          width="150px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridAllocatedQtyEditRender"
          field="allocatedQty"
          :visible="'S015SPCREATED' !== orderStatus"
          align="right"
          aggregate="sum"
          footer-align="right"
          :sortable="true"
          :title="t('label.allocatedQuantity')"
          width="130px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridPickingQtyEditRender"
          field="pickingQty"
          :visible="'S015SPCREATED' !== orderStatus"
          align="right"
          footer-align="right"
          aggregate="sum"
          :sortable="true"
          :title="t('label.pickingQuantity')"
          width="120px"
          header-align="center"
        />
        <VueNumberColumn
          v-show="'S015SPCREATED' !== orderStatus"
          :edit-render="gridShippedQtyEditRender"
          field="shippedQty"
          :visible="'S015SPCREATED' !== orderStatus"
          align="right"
          :sortable="true"
          :title="t('label.shippedQty')"
          width="120px"
          header-align="center"
        />
        <VueNumberColumn
          v-show="'S015SPCREATED' !== orderStatus"
          :edit-render="gridCancelledQtyEditRender"
          field="cancelledQty"
          :visible="'S015SPCREATED' !== orderStatus"
          align="right"
          :sortable="true"
          :title="t('label.cancelledQuantity')"
          width="130px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridBoQtyEditRender"
          field="boQty"
          :visible="'S015SPCREATED' !== orderStatus"
          align="right"
          :sortable="true"
          :title="t('label.boQuantity')"
          width="120px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="gridLargeGroupNmEditRender"
          field="largeGroupNm"
          :sortable="true"
          :title="t('label.largeGroupName')"
          width="170px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="gridBatteryIDEditRender"
          field="batteryID"
          :sortable="true"
          :title="t('label.batteryId')"
          width="160px"
          header-align="center"
        />
        <VueTemplateColumn
          :edit-render="gridCopy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          :sortable="true"
          :title="t('label.boCancelSign')"
          width="140px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_8T8R2z"
              ref="viy2CheckBox_8T8R2z"
              v-model="scope.row.boCancelSign"
              :disabled="!isNoValue(scope.row.orderItemId)"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          :visible="false"
          :sortable="true"
          :title="t('label.boCancelSign')"
          width="140px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_5hzfuO"
              ref="viy2CheckBox_5hzfuO"
              v-model="scope.row.beforeBoCancelSign"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueButtonColumn
          align="center"
          fixed="right"
          :visible="'S015SPCREATED' === orderStatus || 'S015SPWAITINGALLOCATE' === orderStatus
            || 'S015SPWAITINGPICKING' === orderStatus"
          width="40px"
          :buttons="gridViy2TableButtonColumn_S6mhnButtons"
        />
      </VueTable>
    </VuePanel>
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
      <viy2Subpage_OzNTuPage
        id="viy2Subpage_OzNTu"
        ref="viy2Subpage_OzNTu"
        :init-data="asideParams"
        @select="callbkSelectMultiParts"
        @close="closeMultiPartsAside"
      />
    </VueAside>
    <VueAside
      id="consumerAside"
      ref="consumerAside"
      v-model="showConsumerWin"
      :modal="true"
      direction="rtl"
      size="60%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <viy2Subpage_BTeF1Page
        id="viy2Subpage_BTeF1"
        ref="viy2Subpage_BTeF1"
        :init-data="asideParams"
        @select="callbkSelectConsumer"
        @close="closeConsumerAside"
      />
    </VueAside>
    <VueDialog
      id="viy2Dialog_tvwZt"
      ref="viy2Dialog_tvwZt"
      v-model="importWindowShowFlag"
      title="File Import"
    >
      <template #default>
        <viy2Subpage_twcYTPage
          id="viy2Subpage_twcYT"
          ref="viy2Subpage_twcYT"
          :import-info="importInfo"
          @transferring-data="handle"
        />
      </template>
    </VueDialog>
  </VueForm>
</template>

<style type="text/css" scoped>
:deep(.vue-input-group__append, .vue-input-group__prepend) {
padding: 0 15px;
}
</style>
