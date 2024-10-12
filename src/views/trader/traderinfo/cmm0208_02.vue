<script setup>
import { IconCloseBold, IconDelete, IconDocument, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import {
  employee_column, employee_pop_condition, employee_pop_query_method, employee_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const today = new Date();
// 默认收起MotorcycleSituationPanel
const collapse = ref(false);
const conditionPanelModel = ref(true);
const motorInfoPanelModel = ref(true);
const servicePanelModel = ref(true);
const situationPanelModel = ref(true);
const jobPanelModel = ref(true);
const partsPanelModel = ref(true);
const totalAccPanelModel = ref(true);
const historyPanelModel = ref(true);
const checkedCoupon = ref([1, 4, 6]);
const depositAmt = ref(0);
defineOptions({
  name: 'cmm0208_02',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_83Yd = ref();
const panels = ref();
const header = ref();
const conditionForm = ref();
const viy2Row_118QTw = ref();
const viy2InputBox_6xA6e = ref();
const viy2InputBox_1q0Ylk = ref();
const viy2InputBox_6AgaY = ref();
const orderDate = ref();
const viy2DateTimePicker_1q3pDY = ref();
const viy2Select_dGnPHx = ref();
const viy2Select_1nwEGa = ref();
const viy2InputBox_AVguE = ref();
const viy2InputBox_1qP3Zk = ref();
const viy2InputBox_T9d5k = ref();
const viy2InputBox_6IXd0 = ref();
const viy2InputBox_6IVWM = ref();
const viy2InputBox_6IUEW = ref();
const contactInfoPanel = ref();
const viy2Row_wt7cp = ref();
const viy2Button_AQhoR = ref();
const motorInfoGrid = ref();
const viy2Row_5IuUV9 = ref();
const viy2Select_8WX0B = ref();
const viy2Panel_7faAg = ref();
const viy2Form_7faB6 = ref();
const viy2Row_G8gz = ref();
const viy2CheckBox_K8Ci = ref();
const viy2CheckBox_7t1Qi = ref();
const viy2Form_7faB61 = ref();
const viy2Panel_9oe8c = ref();
const viy2Row_7FRkN = ref();
const copy4_copy0_viy2Row_gMlZh_col1 = ref();
const viy2Button_9y0A2 = ref();
const viy2Form_9oe9G = ref();
const viy2Row_9oeav = ref();
const viy2Select_7GwGE = ref();
const viy2Select_7S7FU = ref();
const viy2ValueList_sc5ys = ref();
const viy2Row_85YaR = ref();
const viy2Button_85YcZ = ref();
const deliveryPointPanel = ref();
const viy2Row_7FRkN2 = ref();
const viy2Button_88W3d = ref();
const viy2Table_7FRmh = ref();
const viy2Row_7FRn7 = ref();
const viy2Panel_88W14 = ref();
const viy2Row_88W24 = ref();
const viy2Button_8Ve3o = ref();
const viy2Table_88W3I = ref();
const viy2Row_88W4y = ref();
const viy2Panel_89VF0 = ref();
const viy2Row_89VG0 = ref();
const viy2Button_89VGZ = ref();
const viy2Table_89VHu = ref();
const viy2Row_89VIu = ref();
const viy2Panel_9yH2M = ref();
const viy2Row_9yH4K = ref();
const copy0_copy4_copy0_viy2Row_gMlZh_col1 = ref();
const viy2Button_9yH6y = ref();
const viy2Form_9yH7n = ref();
const viy2Row_9yH8w = ref();
const viy2CheckBox_9zOes = ref();
const viy2Panel_88T58 = ref();
const viy2Row_88T68 = ref();
const viy2Button_88T6X = ref();
const viy2Table_88T7s = ref();
const viy2Row_88T8i = ref();
const serviceHistoryAside = ref();
const titlerow = ref();
const viy2Button_3du2Mf = ref();
const histGrid = ref();
const consumerAside = ref();
const viy2Subpage_k0p7N = ref();
const freeCouponAside = ref();
const titler2ow = ref();
const viy2Button_3eDUVb = ref();
const viy2Form_k49sf = ref();
const viy2Row_k4bvq = ref();
const viy2CheckBox_k4lwU = ref();
const consumerInfoAside = ref();
const consumerInfoTitle = ref();
const viy2Button_vXfff = ref();
const viy2Button_57GgfN = ref();
const consumerForm = ref();
const viy2Row_vMpgg = ref();
const viy2InputBox_WVoNnV2 = ref();
const viy2InputBox_3aq4zE2 = ref();
const viy2InputBox_WVoNnY2 = ref();
const viy2Button_57TD0S = ref();
const viy2InputBox_adEGw82 = ref();
const viy2InputBox_WVoNpD = ref();
const viy2InputBox_WVoNzD = ref();
const viy2Radio_5U9ruS = ref();
const viy2Select_adGDak = ref();
const viy2Select_adGB6g = ref();
const viy2DateTimePicker_11nf91 = ref();
const viy2InputBox_adI6HF = ref();
const viy2InputBox_WVoNuD = ref();
const viy2DateTimePicker_3bmk0m = ref();
const viy2InputBox_WVoNsY = ref();
const formData = reactive({
});
const panelsData = reactive({
  datafieldviy2Select_8WX0B: '',
});
const conditionFormData = reactive({
  traderCd: 'CONSUMER', traderNm: 'KHÁCH HÀNG KHÔNG LẤY HĐ', abbr: 'KH KHÔNG LÁY HĐ', effectiveDate: '20130101', expiredDate: '29991231', province: 'Tỉnh Khánh Hòa', city: 'Thành phố Nha Trang', addressOne: '', addressTwo: '', postCd: '', taxCd: '', acNo: '', bank: '',
});
const viy2Form_7faB6Data = reactive({
  role: ['Dealer(Customer)'], supplierSign: [],
});
const viy2Form_7faB61Data = reactive({
});
const viy2Form_9oe9GData = reactive({
  customerType: 'Consumer', useSystem: '', salesPIC: '',
});
const viy2Form_9yH7nData = reactive({
  posSign: false,
});
const viy2Form_k49sfData = reactive({
  freeCouponResult: [],
});
const consumerFormData = reactive({
  fn: '', mn: '', ln: '', phone: '', custCd: '', sns: '', gender: 'Nữ', province: '', city: '', birthYear: '', age: '', address: '', birthDay: '', email: '',
});
const rules = reactive({
  viy2InputBox_6xA6eRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1q0YlkRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_6AgaYRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  orderDateRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1q3pDYRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_dGnPHxRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1nwEGaRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_7GwGERules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_adEGw82Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const motorInfoGridRules = {
  contactType: [
    { required: true, message: 'name required' },
  ],
  contact: [
    { required: true, message: 'name required' },
  ],
};
const viy2Table_7FRmhRules = {
  consigneeCode: [
    { required: true, message: 'name required' },
  ],
  consigneeName: [{ required: true, message: 'name required' }],
  clientShopCode: [{ required: true, message: 'name required' }],
  province: [{ required: true, message: 'name required' }],
  city: [{ required: true, message: 'name required' }],
  address1: [{ required: true, message: 'name required' }],
  address2: [{ required: true, message: 'name required' }],
  deliveryPoint: [{ required: true, message: 'name required' }],
};
const viy2Table_88W3IRules = {
  pointCode: [
    { required: true, message: 'name required' },
  ],
};
const viy2Table_88T7sRules = {
  supplyShop: [{ required: true, message: 'name required' }],
  supplyName: [{ required: true, message: 'name required' }],
  clientShopCode: [{ required: true, message: 'name required' }],
  province: [{ required: true, message: 'name required' }],
  city: [{ required: true, message: 'name required' }],
  address1: [{ required: true, message: 'name required' }],
  address2: [{ required: true, message: 'name required' }],
  postCode: [{ required: true, message: 'name required' }],
};
const showServiceHist = ref(false);
const histGridEditConfig = reactive({
  trigger: 'click',
});
const showConsumerWin = ref(false);
const showFreeCouponWin = ref(false);
const showConsumerInfoWin = ref(false);
const viy2Radio_5U9ruSOpts = reactive([
  { value: 'Nữ', label: 'Nữ' },
  { value: 'Nam', label: 'Nam' },
]);
const viy2Select_adGDakOpts = reactive([
  {
    label:
'Tỉnh An Giang',
    value:
'Tỉnh An Giang',
  },
  {
    label:
'Tỉnh Bà Rịa - Vũng Tàu',
    value:
'Tỉnh Bà Rịa - Vũng Tàu',
  },
  {
    label:
'Tỉnh Bắc Giang',
    value:
'Tỉnh Bắc Giang',
  },
]);
const viy2Select_adGB6gOpts = reactive([
  {
    label:
'Huyện Cam Lâm',
    value:
'Huyện Cam Lâm',
  },
  {
    label:
'Thành phố Cam Ranh',
    value:
'Thành phố Cam Ranh',
  },
  {
    label:
'Huyện Diên Khánh',
    value:
'Huyện Diên Khánh',
  },
  {
    label:
'Huyện Khánh Sơn',
    value:
'Huyện Khánh Sơn',
  },
]);
const viy2Select_dGnPHxOpts = reactive([
  {
    label:
'Chuyển khoản',
    value:
'Chuyển khoản',
  },
  {
    label:
'Tỉnh Khánh Hòa',
    value:
'Tỉnh Khánh Hòa',
  },
  {
    label:
'Province 2',
    value:
'Province 2',
  },
  {
    label:
'Province 3',
    value:
'Province 3',
  },
]);
const viy2Select_1nwEGaOpts = reactive([
  {
    label:
'Tín dụng',
    value:
'Tín dụng',
  },
  {
    label:
'Thành phố Nha Trang',
    value:
'Thành phố Nha Trang',
  },
  {
    label:
'City 2',
    value:
'City 2',
  },
  {
    label:
'City 3',
    value:
'City 3',
  },
]);
const motorInfoGridEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const motorInfoGridOperation1Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delMotorInfoRow,
    },
  ];
};
const viy2CheckBox_K8CiOpts = [
  {
    label:
'Dealer(Customer)',
    value:
'Dealer(Customer)',
  },
];
const viy2CheckBox_7t1QiOpts = [
  {
    label:
'Supplier',
    value:
'Supplier',
  },
];
const viy2Select_7GwGEOpts = reactive([
  {
    label:
'Consumer',
    value:
'Consumer',
  },
  {
    label:
'Dealer',
    value:
'Dealer',
  },
  {
    label:
'Expense Customer',
    value:
'Expense Customer',
  },
  {
    label:
'Insternal Sales',
    value:
'Insternal Sales',
  },
]);
const viy2Select_7S7FUOpts = reactive([
  {
    label:
'DMS',
    value:
'DMS',
  },
  {
    label:
'Dpack',
    value:
'Dpack',
  },
  {
    label:
'Others',
    value:
'Others',
  },
]);
const viy2ValueList_sc5ysPopoverQueryMethod = employee_query_method;
const viy2ValueList_sc5ysPopupColumns = ref(employee_column);
const viy2ValueList_sc5ysPopupQueryMethod = employee_pop_query_method;
const viy2Table_7FRmhEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const viy2Table_7FRmhViy2TableButtonColumn_AY9Y4Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delJobRow,
    },
    {
      label: '',
      type: 'text',
      icon: IconDocument,
    },
  ];
};
const viy2Table_88W3IEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const viy2Table_88W3IViy2TableButtonColumn_AY9Y4Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delJobRow,
    },
  ];
};
const viy2Table_89VHuEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const viy2Table_89VHuViy2TableButtonColumn_AY9Y4Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delJobRow,
    },
  ];
};
const viy2CheckBox_9zOesOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2Table_88T7sEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const viy2Table_88T7sViy2TableButtonColumn_AY9Y4Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delJobRow,
    },
    {
      label: '',
      type: 'text',
      icon: IconDocument,
    },
  ];
};
const fdsfApi = useApi({
  method: 'post',
  localData: [
    {
      forwarderCode: '1YT350',
      forwarderName: 'Yamaha Town Nha Trang_DO 10',
    },
  ],
});
const fdsf = fdsfApi.data;
const forwarderDsApi = useApi({
  method: 'post',
  localData: [
    {
      forwarderCode: '1YT350',
      forwarderName: 'Yamaha Town Nha Trang_DO 10',
    },
  ],
});
const forwarderDs = forwarderDsApi.data;
const consigneeDsApi = useApi({
  method: 'post',
  localData: [
    {
      forwarderCode: '1YT350',
      forwarderName: 'Yamaha Town Nha Trang_DO 10',
    },
  ],
});
const consigneeDs = consigneeDsApi.data;
const contactDsApi = useApi({
  method: 'post',
  localData: [
    {
      contactType: 'Postal Code',
      contact: '1',
    },
    {
      contactType: 'Telephone',
      contact: '2344555',
    },
  ],
});
const contactDs = contactDsApi.data;
const deliveryPointDsApi = useApi({
  method: 'post',
  localData: [
    {
      pointCode: '1YT350',
      pointName: 'Yamaha Town Nha Trang_DO 10',
    },
  ],
});
const deliveryPointDs = deliveryPointDsApi.data;
const viy2Button_AQhoRClick = () => {
  const row = {
    contactType: '',
    contactComment: '',
  };
  motorInfoGrid.value.insertAt(row, -1).then((newRow) => {
    motorInfoGrid.value.setCurrentRow(newRow.row);
  });
};
const motorInfoGridContactTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const motorInfoGridContactEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_9y0A2Click = () => {
  const row = {
    category: '',
    demand: '',
    symptom: '',
    serviceJob: '',
    manhour: 0,
    stdprice: 0,
    disAmt: 0,
    dis: 0,
    spec: 0,
    selling: 0,
    package: '',
  };
  jobGrid.value.insertAt(row, -1).then((newRow) => {
    jobGrid.value.setCurrentRow(newRow.row);
  });
};
const viy2ValueList_sc5ysSelect = (params) => {
  filterFormData.mechanic = `${params.code} ${params.name}`;
};
const viy2ValueList_sc5ysPopoverColumns = computed(() => {
  return employee_column;
});
const viy2ValueList_sc5ysPopupConditions = computed(() => {
  return employee_pop_condition;
});
const viy2Button_88W3dClick = () => {
  const row = {
    category: '',
    demand: '',
    symptom: '',
    serviceJob: '',
    manhour: 0,
    stdprice: 0,
    disAmt: 0,
    dis: 0,
    spec: 0,
    selling: 0,
    package: '',
  };
  jobGrid.value.insertAt(row, -1).then((newRow) => {
    jobGrid.value.setCurrentRow(newRow.row);
  });
};
const viy2Table_7FRmhConsigneeCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_7FRmhConsigneeNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_7FRmhClientShopCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_7FRmhProvinceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_7FRmhCityEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_7FRmhAddress1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_7FRmhAddress2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_7FRmhDeliveryPointEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_8Ve3oClick = () => {
  const row = {
    category: '',
    demand: '',
    symptom: '',
    serviceJob: '',
    manhour: 0,
    stdprice: 0,
    disAmt: 0,
    dis: 0,
    spec: 0,
    selling: 0,
    package: '',
  };
  jobGrid.value.insertAt(row, -1).then((newRow) => {
    jobGrid.value.setCurrentRow(newRow.row);
  });
};
const viy2Table_88W3IPointCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_88W3IPointNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_89VGZClick = () => {
  const row = {
    category: '',
    demand: '',
    symptom: '',
    serviceJob: '',
    manhour: 0,
    stdprice: 0,
    disAmt: 0,
    dis: 0,
    spec: 0,
    selling: 0,
    package: '',
  };
  jobGrid.value.insertAt(row, -1).then((newRow) => {
    jobGrid.value.setCurrentRow(newRow.row);
  });
};
const viy2Table_89VHuForwarderCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_89VHuForwarderNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_9yH6yClick = () => {
  const row = {
    category: '',
    demand: '',
    symptom: '',
    serviceJob: '',
    manhour: 0,
    stdprice: 0,
    disAmt: 0,
    dis: 0,
    spec: 0,
    selling: 0,
    package: '',
  };
  jobGrid.value.insertAt(row, -1).then((newRow) => {
    jobGrid.value.setCurrentRow(newRow.row);
  });
};
const viy2Button_88T6XClick = () => {
  const row = {
    category: '',
    demand: '',
    symptom: '',
    serviceJob: '',
    manhour: 0,
    stdprice: 0,
    disAmt: 0,
    dis: 0,
    spec: 0,
    selling: 0,
    package: '',
  };
  jobGrid.value.insertAt(row, -1).then((newRow) => {
    jobGrid.value.setCurrentRow(newRow.row);
  });
};
const viy2Table_88T7sSupplyShopEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_88T7sSupplyNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_88T7sClientShopCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_88T7sProvinceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_88T7sCityEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_88T7sAddress1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_88T7sAddress2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_88T7sPostCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_3du2MfClick = () => {
  showServiceHist.value = false;
};
const histGridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const histGridCtgEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const histGridTitleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_3eDUVbClick = () => {
  showFreeCouponWin.value = false;
};
const viy2Button_vXfffClick = () => {
  baseFormData.fn = consumerFormData.fn;
  baseFormData.mn = consumerFormData.mn;
  baseFormData.ln = consumerFormData.ln;
  baseFormData.phone = consumerFormData.phone;
  showConsumerInfoWin.value = false;
};
const viy2Button_57GgfNClick = () => {
  showConsumerInfoWin.value = false;
};
const viy2Button_57TD0SClick = () => {
  consumerFormData.fn = '';
  consumerFormData.mn = '';
  consumerFormData.ln = '';
};
const viy2DateTimePicker_11nf91Change = (value) => {
  const age = today.getFullYear() - value.getFullYear();
  consumerFormData.age = age;
};
const viy2DateTimePicker_3bmk0mChange = (value) => {
  const age = today.getFullYear() - value.getFullYear();
  baseFormData.age = age;
};
const delMotorInfoRow = (row) => {
  motorInfoGrid.value.remove(row);
};
const delJobRow = (row) => {
  jobGrid.value.remove(row);
};
const delPartsRow = (row) => {
  partsGrid.value.remove(row);
};
const onFrameNoInput = (value) => {
  if (value) {
    baseFormData.frameNo = 'RLCUG1010LY272040';
    baseFormData.modelCd = 'BGY500010A Sirius-BGY2';
    baseFormData.modelNm = 'Sirius-BGY2';
    baseFormData.fn = 'Test';
    baseFormData.ln = 'Nha Trang';
    baseFormData.modelType = '1';
  } else {
    const formElement = baseForm.value;
    if (formElement && formElement.resetFields) {
      formElement.resetFields();
    }
  }
};
// consumer侧边栏选择后
const callbkSelectConsumer = (param) => {
  baseFormData.fn = param.name;
  baseFormData.phone = param.mobile;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
};
// 收起-展开所有Panel
const toggleAllPanel = () => {
  const value = collapse.value;
  conditionPanelModel.value = value;
  motorInfoPanelModel.value = value;
  servicePanelModel.value = value;
  situationPanelModel.value = value;
  jobPanelModel.value = value;
  partsPanelModel.value = value;
  historyPanelModel.value = value;
};
viy2Form_k49sfData.freeCouponResult = checkedCoupon;
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_GgDWR"
      ref="viy2Row_GgDWR"
      :gutter="15"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left" type="info" :disabled="true">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="panels"
      ref="panels"
      label-suffix=":"
      class="margin-top-div"
      :model="panelsData"
    >
      <VuePanel id="header" ref="header" v-model="conditionPanelModel" title="Header" :collapse="true">
        <VueForm
          id="conditionForm"
          ref="conditionForm"
          label-width="107px"
          :model="conditionFormData"
        >
          <VueRow
            id="viy2Row_118QTw"
            ref="viy2Row_118QTw"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Trader Code"
                prop="traderCd"
                :rules="rules.viy2InputBox_6xA6eRules"
              >
                <VueInput
                  id="viy2InputBox_6xA6e"
                  ref="viy2InputBox_6xA6e"
                  v-model="conditionFormData.traderCd"
                  :clearable="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Trader Name"
                prop="traderNm"
                :rules="rules.viy2InputBox_1q0YlkRules"
              >
                <VueInput
                  id="viy2InputBox_1q0Ylk"
                  ref="viy2InputBox_1q0Ylk"
                  v-model="conditionFormData.traderNm"
                  :clearable="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Abbr"
                prop="abbr"
                :rules="rules.viy2InputBox_6AgaYRules"
              >
                <VueInput
                  id="viy2InputBox_6AgaY"
                  ref="viy2InputBox_6AgaY"
                  v-model="conditionFormData.abbr"
                  :clearable="true"
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
                label="Effective Date"
                prop="effectiveDate"
                :rules="rules.orderDateRules"
              >
                <VueDatePicker
                  id="orderDate"
                  ref="orderDate"
                  v-model="conditionFormData.effectiveDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Expired Date"
                prop="expiredDate"
                :rules="rules.viy2DateTimePicker_1q3pDYRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1q3pDY"
                  ref="viy2DateTimePicker_1q3pDY"
                  v-model="conditionFormData.expiredDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Province"
                prop="province"
                :rules="rules.viy2Select_dGnPHxRules"
              >
                <VueSelect
                  id="viy2Select_dGnPHx"
                  ref="viy2Select_dGnPHx"
                  v-model="conditionFormData.province"
                  :clearable="true"
                  :filterable="true"
                  :options="viy2Select_dGnPHxOpts"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="City"
                prop="city"
                :rules="rules.viy2Select_1nwEGaRules"
              >
                <VueSelect
                  id="viy2Select_1nwEGa"
                  ref="viy2Select_1nwEGa"
                  v-model="conditionFormData.city"
                  :clearable="true"
                  :filterable="true"
                  :options="viy2Select_1nwEGaOpts"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="Address1"
                prop="addressOne"
              >
                <VueInput
                  id="viy2InputBox_AVguE"
                  ref="viy2InputBox_AVguE"
                  v-model="conditionFormData.addressOne"
                  :clearable="true"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="Address2"
                prop="addressTwo"
              >
                <VueInput
                  id="viy2InputBox_1qP3Zk"
                  ref="viy2InputBox_1qP3Zk"
                  v-model="conditionFormData.addressTwo"
                  :clearable="true"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Post Code"
                prop="postCd"
              >
                <VueInput
                  id="viy2InputBox_T9d5k"
                  ref="viy2InputBox_T9d5k"
                  v-model="conditionFormData.postCd"
                  :readonly="true"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Tax Code"
                prop="taxCd"
              >
                <VueInput
                  id="viy2InputBox_6IXd0"
                  ref="viy2InputBox_6IXd0"
                  v-model="conditionFormData.taxCd"
                  :readonly="true"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="A/C NO."
                prop="acNo"
              >
                <VueInput
                  id="viy2InputBox_6IVWM"
                  ref="viy2InputBox_6IVWM"
                  v-model="conditionFormData.acNo"
                  :readonly="true"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Bank"
                prop="bank"
              >
                <VueInput
                  id="viy2InputBox_6IUEW"
                  ref="viy2InputBox_6IUEW"
                  v-model="conditionFormData.bank"
                  :readonly="true"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="contactInfoPanel" ref="contactInfoPanel" v-model="situationPanelModel" title="Contact" :collapse="true">
        <template #header>
          <div style="width: 300px">
            <VueRow
              v-show="situationPanelModel"
              id="viy2Row_wt7cp"
              ref="viy2Row_wt7cp"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueButton id="viy2Button_AQhoR" ref="viy2Button_AQhoR" icon-position="left" class="icon-button-width" @click="viy2Button_AQhoRClick">
                  +
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="motorInfoGrid" ref="motorInfoGrid" header-align="center" height="200px" :data="contactDs" :edit-rules="motorInfoGridRules" :edit-config="motorInfoGridEditConfig">
          <VueRow
            id="viy2Row_5IuUV9"
            ref="viy2Row_5IuUV9"
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
          />
          <VueInputColumn
            :edit-render="motorInfoGridContactTypeEditRender"
            field="contactType"
            width="200px"
            title="Contact Type"
          >
            <template #append="scope">
              <VueFormItem
                prop="datafieldviy2Select_8WX0B"
              >
                <VueSelect
                  id="viy2Select_8WX0B"
                  ref="viy2Select_8WX0B"
                  v-model="panelsData.datafieldviy2Select_8WX0B"
                  :options="viy2Select_8WX0BOpts"
                />
              </VueFormItem>
            </template>
          </VueInputColumn>
          <VueInputColumn
            :edit-render="motorInfoGridContactEditRender"
            field="contact"
            title="Contact"
            width="200px"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="40px"
            :buttons="motorInfoGridOperation1Buttons"
          />
        </VueTable>
      </VuePanel>
      <VuePanel id="viy2Panel_7faAg" ref="viy2Panel_7faAg" v-model="conditionPanelModel" title="Dealer" :collapse="true">
        <VueForm
          id="viy2Form_7faB6"
          ref="viy2Form_7faB6"
          label-width="107px"
          :model="viy2Form_7faB6Data"
        >
          <VueRow
            id="viy2Row_G8gz"
            ref="viy2Row_G8gz"
          >
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            />
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Role"
                prop="role"
              >
                <VueCheckboxGroup
                  id="viy2CheckBox_K8Ci"
                  ref="viy2CheckBox_K8Ci"
                  v-model="viy2Form_7faB6Data.role"
                  :disabled="true"
                >
                  <VueCheckbox
                    v-for="option in viy2CheckBox_K8CiOpts"
                    :key="option.value"
                    :label="option.value"
                    :name="option.name"
                    :disabled="option.disabled"
                  >
                    {{ option.label }}
                  </VueCheckbox>
                </VueCheckboxGroup>
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                prop="supplierSign"
              >
                <VueCheckboxGroup
                  id="viy2CheckBox_7t1Qi"
                  ref="viy2CheckBox_7t1Qi"
                  v-model="viy2Form_7faB6Data.supplierSign"
                >
                  <VueCheckbox
                    v-for="option in viy2CheckBox_7t1QiOpts"
                    :key="option.value"
                    :label="option.value"
                    :name="option.name"
                    :disabled="option.disabled"
                  >
                    {{ option.label }}
                  </VueCheckbox>
                </VueCheckboxGroup>
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
        <VueForm
          id="viy2Form_7faB61"
          ref="viy2Form_7faB61"
          label-width="107px"
          :model="viy2Form_7faB61Data"
        >
          <VuePanel id="viy2Panel_9oe8c" ref="viy2Panel_9oe8c" v-model="conditionPanelModel" title="Header" :collapse="true">
            <template #header>
              <div style="width: 400px">
                <VueRow
                  v-show="jobPanelModel"
                  id="viy2Row_7FRkN"
                  ref="viy2Row_7FRkN"
                >
                  <VueCol
                    id="copy4_copy0_viy2Row_gMlZh_col1"
                    ref="copy4_copy0_viy2Row_gMlZh_col1"
                    item-key="item"
                    align="right"
                    :inline="true"
                    :md="{ span: 24 }"
                  >
                    <VueButton id="viy2Button_9y0A2" ref="viy2Button_9y0A2" icon-position="left" @click="viy2Button_9y0A2Click">
                      Select
                    </VueButton>
                  </VueCol>
                </VueRow>
              </div>
            </template>
            <VueForm
              id="viy2Form_9oe9G"
              ref="viy2Form_9oe9G"
              label-width="107px"
              :model="viy2Form_9oe9GData"
            >
              <VueRow
                id="viy2Row_9oeav"
                ref="viy2Row_9oeav"
                :gutter="15"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 6 }"
                >
                  <VueFormItem
                    label="Customer Type"
                    label-width="115px"
                    prop="customerType"
                    :rules="rules.viy2Select_7GwGERules"
                  >
                    <VueSelect
                      id="viy2Select_7GwGE"
                      ref="viy2Select_7GwGE"
                      v-model="viy2Form_9oe9GData.customerType"
                      :clearable="true"
                      :filterable="true"
                      :options="viy2Select_7GwGEOpts"
                    />
                  </VueFormItem>
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 6 }"
                >
                  <VueFormItem
                    label="Use System"
                    prop="useSystem"
                  >
                    <VueSelect
                      id="viy2Select_7S7FU"
                      ref="viy2Select_7S7FU"
                      v-model="viy2Form_9oe9GData.useSystem"
                      :clearable="true"
                      :filterable="true"
                      :options="viy2Select_7S7FUOpts"
                    />
                  </VueFormItem>
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 6 }"
                >
                  <VueFormItem
                    label="Sales P.I.C"
                    prop="salesPIC"
                  >
                    <VueValueList
                      id="viy2ValueList_sc5ys"
                      ref="viy2ValueList_sc5ys"
                      v-model="viy2Form_9oe9GData.salesPIC"
                      :style="{ width: '250px' }"
                      :use-common-popover="true"
                      :use-common-popup="true"
                      aside-size="60%"
                      :toggle-popover-on-click="true"
                      :popover-width="500"
                      :use-popup="true"
                      :popover-columns="viy2ValueList_sc5ysPopoverColumns"
                      :popover-query-method="viy2ValueList_sc5ysPopoverQueryMethod"
                      :popup-columns="viy2ValueList_sc5ysPopupColumns"
                      :popup-conditions="viy2ValueList_sc5ysPopupConditions"
                      :popup-query-method="viy2ValueList_sc5ysPopupQueryMethod"
                      @select="viy2ValueList_sc5ysSelect"
                    >
                      <template #asideHeader>
                        <VueRow
                          id="viy2Row_85YaR"
                          ref="viy2Row_85YaR"
                          class="aside-title-row"
                        >
                          <VueCol
                            item-key="item"
                            class="aside-title-text"
                            :md="{ span: 7 }"
                          >
                            <VueText id="viy2Text_85Yc0" ref="viy2Text_85Yc0" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                              Select Employee
                            </VueText>
                          </VueCol>
                          <VueCol
                            item-key="item"
                            align="right"
                            :inline="true"
                            class="aside-title-button"
                            :md="{ span: 17 }"
                          >
                            <VueButton id="viy2Button_85YcZ" ref="viy2Button_85YcZ" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                          </VueCol>
                        </VueRow>
                      </template>
                    </VueValueList>
                  </VueFormItem>
                </VueCol>
              </VueRow>
            </VueForm>
          </VuePanel>
        </VueForm>
        <VuePanel id="deliveryPointPanel" ref="deliveryPointPanel" v-model="jobPanelModel" title="Consignee" :collapse="true">
          <template #header>
            <div style="width: 500px">
              <VueRow
                v-show="jobPanelModel"
                id="viy2Row_7FRkN2"
                ref="viy2Row_7FRkN2"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_88W3d" ref="viy2Button_88W3d" icon-position="left" :disabled="true" class="icon-button-width" @click="viy2Button_88W3dClick">
                    U
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="viy2Table_7FRmh" ref="viy2Table_7FRmh" header-align="center" height="250px" :data="consigneeDs" :edit-rules="viy2Table_7FRmhRules" :edit-config="viy2Table_7FRmhEditConfig">
            <VueRow
              id="viy2Row_7FRn7"
              ref="viy2Row_7FRn7"
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
            />
            <VueInputColumn
              :edit-render="viy2Table_7FRmhConsigneeCodeEditRender"
              field="consigneeCode"
              show-overflow="tooltip"
              title="Consignee"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_7FRmhConsigneeNameEditRender"
              field="consigneeName"
              title="Consignee Name"
              width="200px"
            />
            <VueInputColumn
              :edit-render="viy2Table_7FRmhClientShopCodeEditRender"
              field="clientShopCode"
              title="Client Shop Code"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_7FRmhProvinceEditRender"
              field="province"
              title="Province"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_7FRmhCityEditRender"
              field="city"
              title="City"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_7FRmhAddress1EditRender"
              field="address1"
              title="Address1"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_7FRmhAddress2EditRender"
              field="address2"
              title="Address2"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_7FRmhDeliveryPointEditRender"
              field="deliveryPoint"
              title="Delivery Point"
              width="150px"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="80px"
              :buttons="viy2Table_7FRmhViy2TableButtonColumn_AY9Y4Buttons"
            />
          </VueTable>
        </VuePanel>
        <VuePanel id="viy2Panel_88W14" ref="viy2Panel_88W14" v-model="jobPanelModel" title="Delivery Point" :collapse="true">
          <template #header>
            <div style="width: 500px">
              <VueRow
                v-show="jobPanelModel"
                id="viy2Row_88W24"
                ref="viy2Row_88W24"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_8Ve3o" ref="viy2Button_8Ve3o" icon-position="left" class="icon-button-width" @click="viy2Button_8Ve3oClick">
                    +
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="viy2Table_88W3I" ref="viy2Table_88W3I" header-align="center" height="250px" :data="deliveryPointDs" :edit-rules="viy2Table_88W3IRules" :edit-config="viy2Table_88W3IEditConfig">
            <VueRow
              id="viy2Row_88W4y"
              ref="viy2Row_88W4y"
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
            />
            <VueInputColumn
              :edit-render="viy2Table_88W3IPointCodeEditRender"
              field="pointCode"
              show-overflow="tooltip"
              title="Point"
              width="200px"
            />
            <VueInputColumn
              :edit-render="viy2Table_88W3IPointNameEditRender"
              field="pointName"
              title="Point Name"
              width="350px"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="40px"
              :buttons="viy2Table_88W3IViy2TableButtonColumn_AY9Y4Buttons"
            />
          </VueTable>
        </VuePanel>
        <VuePanel id="viy2Panel_89VF0" ref="viy2Panel_89VF0" v-model="jobPanelModel" title="Forwarder" :collapse="true">
          <template #header>
            <div style="width: 500px">
              <VueRow
                v-show="jobPanelModel"
                id="viy2Row_89VG0"
                ref="viy2Row_89VG0"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_89VGZ" ref="viy2Button_89VGZ" icon-position="left" class="icon-button-width" @click="viy2Button_89VGZClick">
                    +
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="viy2Table_89VHu" ref="viy2Table_89VHu" header-align="center" height="250px" :data="forwarderDs" :edit-config="viy2Table_89VHuEditConfig">
            <VueRow
              id="viy2Row_89VIu"
              ref="viy2Row_89VIu"
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
            />
            <VueInputColumn
              :edit-render="viy2Table_89VHuForwarderCodeEditRender"
              field="forwarderCode"
              show-overflow="tooltip"
              title="Forwarder"
              width="200px"
            />
            <VueInputColumn
              :edit-render="viy2Table_89VHuForwarderNameEditRender"
              field="forwarderName"
              title="Forwarder Name"
              width="350px"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="40px"
              :buttons="viy2Table_89VHuViy2TableButtonColumn_AY9Y4Buttons"
            />
          </VueTable>
        </VuePanel>
        <VuePanel id="viy2Panel_9yH2M" ref="viy2Panel_9yH2M" v-model="conditionPanelModel" title="Header" :collapse="true">
          <template #header>
            <div style="width: 400px">
              <VueRow
                v-show="jobPanelModel"
                id="viy2Row_9yH4K"
                ref="viy2Row_9yH4K"
              >
                <VueCol
                  id="copy0_copy4_copy0_viy2Row_gMlZh_col1"
                  ref="copy0_copy4_copy0_viy2Row_gMlZh_col1"
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_9yH6y" ref="viy2Button_9yH6y" icon-position="left" class="icon-button-width" @click="viy2Button_9yH6yClick">
                    U
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueForm
            id="viy2Form_9yH7n"
            ref="viy2Form_9yH7n"
            label-width="107px"
            :model="viy2Form_9yH7nData"
          >
            <VueRow
              id="viy2Row_9yH8w"
              ref="viy2Row_9yH8w"
              :gutter="15"
            >
              <VueCol
                item-key="item"
                :md="{ span: 6 }"
              >
                <VueFormItem
                  label="POS Sign"
                  prop="posSign"
                >
                  <VueCheckbox
                    id="viy2CheckBox_9zOes"
                    ref="viy2CheckBox_9zOes"
                    v-model="viy2Form_9yH7nData.posSign"
                    true-label="Y"
                    false-label="N"
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
              />
            </VueRow>
          </VueForm>
        </VuePanel>
        <VuePanel id="viy2Panel_88T58" ref="viy2Panel_88T58" v-model="jobPanelModel" title="Supply Shop" :collapse="true">
          <template #header>
            <div style="width: 500px">
              <VueRow
                v-show="jobPanelModel"
                id="viy2Row_88T68"
                ref="viy2Row_88T68"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_88T6X" ref="viy2Button_88T6X" icon-position="left" @click="viy2Button_88T6XClick">
                    Select
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="viy2Table_88T7s" ref="viy2Table_88T7s" header-align="center" height="250px" :edit-rules="viy2Table_88T7sRules" :edit-config="viy2Table_88T7sEditConfig">
            <VueRow
              id="viy2Row_88T8i"
              ref="viy2Row_88T8i"
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
            />
            <VueInputColumn
              :edit-render="viy2Table_88T7sSupplyShopEditRender"
              field="supplyShop"
              title="Supply Shop"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_88T7sSupplyNameEditRender"
              field="supplyName"
              title="Supply Name"
              width="200px"
            />
            <VueInputColumn
              :edit-render="viy2Table_88T7sClientShopCodeEditRender"
              field="clientShopCode"
              title="Client Shop Code"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_88T7sProvinceEditRender"
              field="province"
              title="Province"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_88T7sCityEditRender"
              field="city"
              title="City"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_88T7sAddress1EditRender"
              field="address1"
              title="Address1"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_88T7sAddress2EditRender"
              field="address2"
              title="Address2"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_88T7sPostCodeEditRender"
              field="postCode"
              title="Post Code"
              width="150px"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="80px"
              :buttons="viy2Table_88T7sViy2TableButtonColumn_AY9Y4Buttons"
            />
          </VueTable>
        </VuePanel>
      </VuePanel>
    </VueForm>
    <VueAside
      id="serviceHistoryAside"
      ref="serviceHistoryAside"
      v-model="showServiceHist"
      :modal="true"
      size="50%"
      :show-close="false"
      :with-header="false"
    />
    <VueAside
      id="consumerAside"
      ref="consumerAside"
      v-model="showConsumerWin"
      :modal="true"
      :with-header="false"
      :show-close="false"
      size="60%"
      direction="rtl"
    />
    <VueAside
      id="freeCouponAside"
      ref="freeCouponAside"
      v-model="showFreeCouponWin"
      :modal="true"
      size="40%"
      :with-header="false"
      :show-close="false"
    />
    <VueAside
      id="consumerInfoAside"
      ref="consumerInfoAside"
      v-model="showConsumerInfoWin"
      :modal="true"
      :with-header="false"
      size="60%"
    />
  </VueForm>
</template>

<style type="text/css" scoped>
.rotate-icon {
transform: rotate(90deg);
font-size: large;
align-self: center;
}
.row-margin-top {
margin-top: 10px;
}
</style>
