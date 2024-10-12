<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
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
  name: 'svm0201_02',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_1aDgxU = ref();
const viy2Button_83Yd = ref();
const panels = ref();
const header = ref();
const conditionForm = ref();
const viy2Row_118QTw = ref();
const viy2InputBox_1aQUhy = ref();
const viy2InputBox_1aQSxE = ref();
const viy2InputBox_T9d5k = ref();
const orderDate = ref();
const viy2InputBox_1aUav8 = ref();
const viy2InputBox_1aU6nY = ref();
const viy2InputBox_1aVfdA = ref();
const viy2DateTimePicker_1c97XM = ref();
const viy2InputBox_1aRbRR = ref();
const viy2InputBox_1aU87S = ref();
const viy2InputBox_bKzUIw = ref();
const viy2InputBox_1aXI6W = ref();
const viy2InputBox_1aXGgu = ref();
const viy2InputBox_1aXEsE = ref();
const viy2InputBox_1aXCG0 = ref();
const viy2DateTimePicker_1aRbRG = ref();
const viy2InputBox_1aYXES = ref();
const viy2InputBox_1b3Yxm = ref();
const viy2DateTimePicker_1b5laM = ref();
const viy2DateTimePicker_1b5iFW = ref();
const viy2InputBox_1b63Tc = ref();
const viy2InputBox_1b5YMK = ref();
const viy2InputBox_1b618y = ref();
const viy2InputBox_1b63sA = ref();
const viy2Textarea_11uEXP = ref();
const viy2Textarea_1b7DNc = ref();
const viy2Textarea_1b7yOE = ref();
const viy2Textarea_1b7BiG = ref();
const viy2InputBox_1b8dDC = ref();
const viy2InputBox_1b8b3M = ref();
const viy2Form_7v0uV = ref();
const viy2Row_7uGFk = ref();
const motorInfoPanel = ref();
const viy2Row_wt7cp = ref();
const motorInfoGrid = ref();
const viy2Row_5IuUV9 = ref();
const jobPanel = ref();
const viy2Row_gMlZh = ref();
const jobGrid = ref();
const viy2Row_5K2O4v = ref();
const partsPanel = ref();
const viy2Row_gMw4S = ref();
const partsGrid = ref();
const viy2Row_UG4z = ref();
const ttlPanel = ref();
const viy2Grid_YOkb = ref();
const viy2Row_YOkx = ref();
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
});
const conditionFormData = reactive({
  point: 'YT350 Yamaha Town Nha Trang_DO 10', dealerCode: 'YT350 Yamaha Town Nha Trang_DO 10', requestNo: '2403A0001', requestDate: '', category: 'Bảo hành', campaignNo: '', factoryReceiptNo: '', factoryReceiptDate: '', serviceOrderNo: 'SO2402A000045', status: 'Issued', consumer: 'Test 20 322', model: 'BGY500010C Sirius-BGY2', noPlate: 'EV0001', frameNo: 'RLCSY141000000124', engineNo: 'E32VE-000124', soldDate: '', mileage: '44', policyType: '', repairDate: '', problemDate: '', reception: '', mechanic: '', symptom: '', condition: '', problemComment: '', reasonComment: '', repairComment: '', shopComment: '', authorizationNo: '', mainDamageParts: '',
});
const viy2Form_7v0uVData = reactive({
});
const viy2Form_k49sfData = reactive({
  freeCouponResult: [],
});
const consumerFormData = reactive({
  fn: '', mn: '', ln: '', phone: '', custCd: '', sns: '', gender: 'Nữ', province: '', city: '', birthYear: '', age: '', address: '', birthDay: '', email: '',
});
const rules = reactive({
  viy2InputBox_adEGw82Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const jobGridRules = {
  qty: [{ required: true, message: 'name required' }],
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
const motorInfoGridEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const jobGridEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const partsGridEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const viy2Grid_YOkbEditConfig = reactive({
  trigger: 'click',
});
const partsDsApi = useApi({
  method: 'post',
  localData: [
    { parts: 'YT350 Yamaha Town Nha Trang_DO 10', qty: 3 },
  ],
});
const partsDs = partsDsApi.data;
const batteryDsApi = useApi({
  method: 'post',
  localData: [
    {
      battaryID: 'SO2402A000045', batteryQty: '3',
    },
  ],
});
const batteryDs = batteryDsApi.data;
const jobDsApi = useApi({
  method: 'post',
  localData: [
    { job: 'repairman' },
  ],
});
const jobDs = jobDsApi.data;
const processDsApi = useApi({
  method: 'post',
  localData: [{
    date: new Date(),
    status: 'Issued',
    pic: 'Admin',
    comment: '',
  }],
});
const processDs = processDsApi.data;
const motorInfoGridJobEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const jobGridPartsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const jobGridQtyEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const partsGridBattaryIDEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridBatteryQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const viy2Grid_YOkbDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const viy2Grid_YOkbStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Grid_YOkbPicEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Grid_YOkbCommontEditRender = computed(() => {
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
conditionFormData.requestDate = new Date();
conditionFormData.factoryReceiptDate = new Date();
conditionFormData.soldDate = new Date();
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
        <VueButton id="viy2Button_1aDgxU" ref="viy2Button_1aDgxU" icon-position="left">
          Print Claim Tag
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left" type="info">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="panels"
      ref="panels"
      class="margin-top-div"
      :model="panelsData"
    >
      <VuePanel id="header" ref="header" v-model="conditionPanelModel" title="Header" :collapse="true">
        <VueForm
          id="conditionForm"
          ref="conditionForm"
          label-width="150px"
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
                label="Point"
                prop="point"
              >
                <VueInput
                  id="viy2InputBox_1aQUhy"
                  ref="viy2InputBox_1aQUhy"
                  v-model="conditionFormData.point"
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
                label="Dealer Code"
                prop="dealerCode"
              >
                <VueInput
                  id="viy2InputBox_1aQSxE"
                  ref="viy2InputBox_1aQSxE"
                  v-model="conditionFormData.dealerCode"
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
                label="Request No."
                prop="requestNo"
              >
                <VueInput
                  id="viy2InputBox_T9d5k"
                  ref="viy2InputBox_T9d5k"
                  v-model="conditionFormData.requestNo"
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
                label="Request Date"
                prop="requestDate"
              >
                <VueDatePicker
                  id="orderDate"
                  ref="orderDate"
                  v-model="conditionFormData.requestDate"
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
                label="Category"
                prop="category"
              >
                <VueInput
                  id="viy2InputBox_1aUav8"
                  ref="viy2InputBox_1aUav8"
                  v-model="conditionFormData.category"
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
                label="Campaign No."
                prop="campaignNo"
              >
                <VueInput
                  id="viy2InputBox_1aU6nY"
                  ref="viy2InputBox_1aU6nY"
                  v-model="conditionFormData.campaignNo"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="Factory Receipt No."
                label-width="140px"
                prop="factoryReceiptNo"
              >
                <VueInput
                  id="viy2InputBox_1aVfdA"
                  ref="viy2InputBox_1aVfdA"
                  v-model="conditionFormData.factoryReceiptNo"
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
                label="Factory Receipt Date"
                prop="factoryReceiptDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1c97XM"
                  ref="viy2DateTimePicker_1c97XM"
                  v-model="conditionFormData.factoryReceiptDate"
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
                label="Service Order No."
                prop="serviceOrderNo"
              >
                <VueInput
                  id="viy2InputBox_1aRbRR"
                  ref="viy2InputBox_1aRbRR"
                  v-model="conditionFormData.serviceOrderNo"
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
                label="Status"
                prop="status"
              >
                <VueInput
                  id="viy2InputBox_1aU87S"
                  ref="viy2InputBox_1aU87S"
                  v-model="conditionFormData.status"
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
                label="Consumer"
                prop="consumer"
              >
                <VueInput
                  id="viy2InputBox_bKzUIw"
                  ref="viy2InputBox_bKzUIw"
                  v-model="conditionFormData.consumer"
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
                label="Model"
                prop="model"
              >
                <VueInput
                  id="viy2InputBox_1aXI6W"
                  ref="viy2InputBox_1aXI6W"
                  v-model="conditionFormData.model"
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
                label="No. Plate"
                prop="noPlate"
              >
                <VueInput
                  id="viy2InputBox_1aXGgu"
                  ref="viy2InputBox_1aXGgu"
                  v-model="conditionFormData.noPlate"
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
                label="Frame No."
                prop="frameNo"
              >
                <VueInput
                  id="viy2InputBox_1aXEsE"
                  ref="viy2InputBox_1aXEsE"
                  v-model="conditionFormData.frameNo"
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
                label="Engine No."
                prop="engineNo"
              >
                <VueInput
                  id="viy2InputBox_1aXCG0"
                  ref="viy2InputBox_1aXCG0"
                  v-model="conditionFormData.engineNo"
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
                label="Sold Date"
                prop="soldDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1aRbRG"
                  ref="viy2DateTimePicker_1aRbRG"
                  v-model="conditionFormData.soldDate"
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
                label="Mileage"
                prop="mileage"
              >
                <VueInput
                  id="viy2InputBox_1aYXES"
                  ref="viy2InputBox_1aYXES"
                  v-model="conditionFormData.mileage"
                  text-align="right"
                  :style="{ width: '100px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Policy Type"
                prop="policyType"
              >
                <VueInput
                  id="viy2InputBox_1b3Yxm"
                  ref="viy2InputBox_1b3Yxm"
                  v-model="conditionFormData.policyType"
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
                label="Repair Date"
                prop="repairDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1b5laM"
                  ref="viy2DateTimePicker_1b5laM"
                  v-model="conditionFormData.repairDate"
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
                label="Problem Date"
                prop="problemDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1b5iFW"
                  ref="viy2DateTimePicker_1b5iFW"
                  v-model="conditionFormData.problemDate"
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
                label="Reception"
                prop="reception"
              >
                <VueInput
                  id="viy2InputBox_1b63Tc"
                  ref="viy2InputBox_1b63Tc"
                  v-model="conditionFormData.reception"
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
                label="Mechanic"
                prop="mechanic"
              >
                <VueInput
                  id="viy2InputBox_1b5YMK"
                  ref="viy2InputBox_1b5YMK"
                  v-model="conditionFormData.mechanic"
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
                label="Symptom"
                prop="symptom"
              >
                <VueInput
                  id="viy2InputBox_1b618y"
                  ref="viy2InputBox_1b618y"
                  v-model="conditionFormData.symptom"
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
                label="Condition"
                prop="condition"
              >
                <VueInput
                  id="viy2InputBox_1b63sA"
                  ref="viy2InputBox_1b63sA"
                  v-model="conditionFormData.condition"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 18 }"
            />
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="Problem Comment"
                prop="problemComment"
              >
                <VueInput
                  id="viy2Textarea_11uEXP"
                  ref="viy2Textarea_11uEXP"
                  v-model="conditionFormData.problemComment"
                  type="textarea"
                  :rows="2"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="Reason Comment"
                prop="reasonComment"
              >
                <VueInput
                  id="viy2Textarea_1b7DNc"
                  ref="viy2Textarea_1b7DNc"
                  v-model="conditionFormData.reasonComment"
                  type="textarea"
                  :rows="2"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="Repair Comment"
                prop="repairComment"
              >
                <VueInput
                  id="viy2Textarea_1b7yOE"
                  ref="viy2Textarea_1b7yOE"
                  v-model="conditionFormData.repairComment"
                  type="textarea"
                  :rows="2"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="Shop Comment"
                prop="shopComment"
              >
                <VueInput
                  id="viy2Textarea_1b7BiG"
                  ref="viy2Textarea_1b7BiG"
                  v-model="conditionFormData.shopComment"
                  type="textarea"
                  :rows="2"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="Authorization No."
                prop="authorizationNo"
              >
                <VueInput
                  id="viy2InputBox_1b8dDC"
                  ref="viy2InputBox_1b8dDC"
                  v-model="conditionFormData.authorizationNo"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="Main Damage Parts"
                label-width="140px"
                prop="mainDamageParts"
              >
                <VueInput
                  id="viy2InputBox_1b8b3M"
                  ref="viy2InputBox_1b8b3M"
                  v-model="conditionFormData.mainDamageParts"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VueForm
        id="viy2Form_7v0uV"
        ref="viy2Form_7v0uV"
        label-width="150px"
        :model="viy2Form_7v0uVData"
      >
        <VueRow
          id="viy2Row_7uGFk"
          ref="viy2Row_7uGFk"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VuePanel id="motorInfoPanel" ref="motorInfoPanel" v-model="situationPanelModel" title="Repair Job Detail Selection" :collapse="true">
              <template #header>
                <div style="width: 200px">
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
                    />
                  </VueRow>
                </div>
              </template>
              <VueTable id="motorInfoGrid" ref="motorInfoGrid" header-align="center" height="150px" :data="jobDs" :edit-config="motorInfoGridEditConfig">
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
                <VueSelectionColumn
                  align="center"
                  width="60px"
                  type="checkbox"
                />
                <VueInputColumn
                  :edit-render="motorInfoGridJobEditRender"
                  field="job"
                  title="Job "
                  header-align="center"
                  width="250px"
                />
              </VueTable>
            </VuePanel>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VuePanel id="jobPanel" ref="jobPanel" v-model="jobPanelModel" title="Repair Parts Detail Selection " :collapse="true">
              <template #header>
                <div style="width: 200px">
                  <VueRow
                    v-show="jobPanelModel"
                    id="viy2Row_gMlZh"
                    ref="viy2Row_gMlZh"
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
              <VueTable id="jobGrid" ref="jobGrid" header-align="center" height="150px" :data="partsDs" :edit-rules="jobGridRules" :edit-config="jobGridEditConfig">
                <VueRow
                  id="viy2Row_5K2O4v"
                  ref="viy2Row_5K2O4v"
                >
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    :md="{ span: 24 }"
                  />
                </VueRow>
                <VueSelectionColumn
                  align="center"
                  width="60px"
                  type="checkbox"
                />
                <VueInputColumn
                  :edit-render="jobGridPartsEditRender"
                  field="parts"
                  title="Parts"
                  header-align="center"
                  width="250px"
                />
                <VueNumberColumn
                  :edit-render="jobGridQtyEditRender"
                  field="qty"
                  aggregate="sum"
                  align="right"
                  title="Qty"
                  width="100px"
                  header-align="center"
                />
              </VueTable>
            </VuePanel>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VuePanel id="partsPanel" ref="partsPanel" v-model="partsPanelModel" title="Repair Battery Detail Selection " :collapse="true">
              <template #header>
                <div style="width: 200px">
                  <VueRow
                    v-show="partsPanelModel"
                    id="viy2Row_gMw4S"
                    ref="viy2Row_gMw4S"
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
              <VueTable id="partsGrid" ref="partsGrid" height="150px" :data="batteryDs" :edit-config="partsGridEditConfig">
                <VueRow
                  id="viy2Row_UG4z"
                  ref="viy2Row_UG4z"
                >
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    :md="{ span: 24 }"
                  />
                </VueRow>
                <VueSelectionColumn
                  align="center"
                  width="60px"
                  type="checkbox"
                />
                <VueInputColumn
                  :edit-render="partsGridBattaryIDEditRender"
                  field="battaryID"
                  title="Battary ID"
                  header-align="center"
                  width="250px"
                />
                <VueNumberColumn
                  :edit-render="partsGridBatteryQtyEditRender"
                  field="batteryQty"
                  aggregate="sum"
                  align="right"
                  title="Qty"
                  width="100px"
                  header-align="center"
                />
              </VueTable>
            </VuePanel>
          </VueCol>
        </VueRow>
      </VueForm>
      <VuePanel id="ttlPanel" ref="ttlPanel" v-model="totalAccPanelModel" title="Process History" :collapse="true">
        <VueTable id="viy2Grid_YOkb" ref="viy2Grid_YOkb" :data="processDs" :edit-config="viy2Grid_YOkbEditConfig">
          <VueRow
            id="viy2Row_YOkx"
            ref="viy2Row_YOkx"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            />
          </VueRow>
          <VueDateTimeColumn
            :edit-render="viy2Grid_YOkbDateEditRender"
            field="date"
            align="center"
            title="Date"
            width="100px"
          />
          <VueInputColumn
            :edit-render="viy2Grid_YOkbStatusEditRender"
            field="status"
            title="Status"
            header-align="center"
            width="150px"
          />
          <VueInputColumn
            :edit-render="viy2Grid_YOkbPicEditRender"
            field="pic"
            title="P.I.C"
            header-align="center"
            width="200px"
          />
          <VueInputColumn
            :edit-render="viy2Grid_YOkbCommontEditRender"
            field="commont"
            title="Commont"
            header-align="center"
            width="200px"
          />
        </VueTable>
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
