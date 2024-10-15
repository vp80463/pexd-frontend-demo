<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
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
  name: 'cmm0205_02',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_83Yd = ref();
const panels = ref();
const header = ref();
const conditionForm = ref();
const viy2Row_118QTw = ref();
const viy2InputBox_3b5mPM = ref();
const viy2InputBox_1q0Ylk = ref();
const orderDate = ref();
const viy2DateTimePicker_1q3pDY = ref();
const viy2InputBox_T9d5k = ref();
const viy2CheckBox_6fbQP = ref();
const viy2CheckBox_1qycmW = ref();
const viy2CheckBox_1qyaB6 = ref();
const addressPanel = ref();
const serviceForm = ref();
const viy2Row_AQDYG = ref();
const viy2Select_dGnPHx = ref();
const viy2Select_1nwEGa = ref();
const viy2InputBox_1qP206 = ref();
const viy2InputBox_AVguE = ref();
const viy2InputBox_1qP3Zk = ref();
const contactInfoPanel = ref();
const viy2Row_wt7cp = ref();
const viy2Row_vDSvh = ref();
const viy2InputBox_56rsBQ = ref();
const viy2InputBox_56rDhi = ref();
const viy2InputBox_56rVzk = ref();
const deliveryPointPanel = ref();
const viy2Row_gMlZh = ref();
const viy2Button_5XAP4A = ref();
const jobGrid = ref();
const viy2Row_5K2O4v = ref();
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
  porstCode: '1', porstCode: '1', porstCode: '1',
});
const conditionFormData = reactive({
  pointCode: 'YT350', pointName: 'Yamaha Town Nha Trang_DO 10', effectiveDate: '20171111', expiredDate: '29991231', pointIdentificationMark: 'A', datafieldviy2CheckBox_6fbQP: false, datafieldviy2CheckBox_6fbQP: false, datafieldviy2CheckBox_6fbQP: false,
});
const serviceFormData = reactive({
  province: 'Chuyển khoản', city: 'Tín dụng', porstCode: '1', addressOne: 'Số 1, Phố Trần Quý Cáp, Nha Trang, Khánh Hòa', addressTwo: '1',
});
const viy2Form_k49sfData = reactive({
  freeCouponResult: [],
});
const consumerFormData = reactive({
  fn: '', mn: '', ln: '', phone: '', custCd: '', sns: '', gender: 'Nữ', province: '', city: '', birthYear: '', age: '', address: '', birthDay: '', email: '',
});
const rules = reactive({
  viy2InputBox_3b5mPMRules: [
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
  viy2InputBox_T9d5kRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2CheckBox_6fbQPRules: [
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
  viy2InputBox_adEGw82Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const jobGridRules = {
  pointName: [{ required: true, message: 'name required' }],
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
const viy2CheckBox_6fbQPOpts = [
  {
    label:
'Option 3',
    value:
'Option 3',
  },
];
const viy2CheckBox_1qycmWOpts = [
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
const viy2CheckBox_1qyaB6Opts = [
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
const viy2Select_dGnPHxOpts = reactive([
  {
    label:
'Chuyển khoản',
    value:
'Chuyển khoản',
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
const jobGridEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const jobGridViy2TableButtonColumn_AY9Y4Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delJobRow,
    },
  ];
};
const contactDsApi = useApi({
  method: 'post',
  localData: [
    {
      contactType: 'Postal Code',
      contactComment: '1',
    },
    {
      contactType: 'Telephone',
      contactComment: '2344555',
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
const viy2Button_5XAP4AClick = () => {
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
const jobGridPointCodeEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const jobGridPointNameEditRender = computed(() => {
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
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left" type="primary">
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
                label="Point Code"
                prop="pointCode"
                :rules="rules.viy2InputBox_3b5mPMRules"
              >
                <VueInput
                  id="viy2InputBox_3b5mPM"
                  ref="viy2InputBox_3b5mPM"
                  v-model="conditionFormData.pointCode"
                  :clearable="true"
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
                label="Point Name"
                prop="pointName"
                :rules="rules.viy2InputBox_1q0YlkRules"
              >
                <VueInput
                  id="viy2InputBox_1q0Ylk"
                  ref="viy2InputBox_1q0Ylk"
                  v-model="conditionFormData.pointName"
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
                label="Point Identification Mark"
                label-width="170px"
                prop="pointIdentificationMark"
                :rules="rules.viy2InputBox_T9d5kRules"
              >
                <VueInput
                  id="viy2InputBox_T9d5k"
                  ref="viy2InputBox_T9d5k"
                  v-model="conditionFormData.pointIdentificationMark"
                  :disabled="true"
                  :readonly="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="Point Type"
                prop="datafieldviy2CheckBox_6fbQP"
                :rules="rules.viy2CheckBox_6fbQPRules"
              >
                <VueCheckbox
                  id="viy2CheckBox_6fbQP"
                  ref="viy2CheckBox_6fbQP"
                  v-model="conditionFormData.datafieldviy2CheckBox_6fbQP"
                  true-label="Y"
                  false-label="N"
                >
                  Shop
                </VueCheckbox>
              </VueFormItem>
              <VueFormItem
                label-width="2px"
                prop="datafieldviy2CheckBox_6fbQP"
              >
                <VueCheckbox
                  id="viy2CheckBox_1qycmW"
                  ref="viy2CheckBox_1qycmW"
                  v-model="conditionFormData.datafieldviy2CheckBox_6fbQP"
                  :disabled="true"
                  true-label="Y"
                  false-label="N"
                >
                  Warehouse
                </VueCheckbox>
              </VueFormItem>
              <VueFormItem
                label-width="2px"
                prop="datafieldviy2CheckBox_6fbQP"
              >
                <VueCheckbox
                  id="viy2CheckBox_1qyaB6"
                  ref="viy2CheckBox_1qyaB6"
                  v-model="conditionFormData.datafieldviy2CheckBox_6fbQP"
                  :disabled="true"
                  true-label="Y"
                  false-label="N"
                >
                  WSPointSign
                </VueCheckbox>
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="addressPanel" ref="addressPanel" v-model="servicePanelModel" title="Address" :collapse="true">
        <VueForm
          id="serviceForm"
          ref="serviceForm"
          label-width="107px"
          :model="serviceFormData"
        >
          <VueRow
            id="viy2Row_AQDYG"
            ref="viy2Row_AQDYG"
          >
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
                  v-model="serviceFormData.province"
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
                  v-model="serviceFormData.city"
                  :clearable="true"
                  :filterable="true"
                  :options="viy2Select_1nwEGaOpts"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Post Code"
                prop="porstCode"
              >
                <VueInput
                  id="viy2InputBox_1qP206"
                  ref="viy2InputBox_1qP206"
                  v-model="serviceFormData.porstCode"
                  :clearable="true"
                  :style="{ width: '160px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            />
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
                  v-model="serviceFormData.addressOne"
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
                  v-model="serviceFormData.addressTwo"
                  :clearable="true"
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
              />
            </VueRow>
          </div>
        </template>
        <VueRow
          id="viy2Row_vDSvh"
          ref="viy2Row_vDSvh"
        >
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Post Code"
              prop="porstCode"
            >
              <VueInput
                id="viy2InputBox_56rsBQ"
                ref="viy2InputBox_56rsBQ"
                v-model="panelsData.porstCode"
                :clearable="true"
                :style="{ width: '160px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Telephone"
              prop="porstCode"
            >
              <VueInput
                id="viy2InputBox_56rDhi"
                ref="viy2InputBox_56rDhi"
                v-model="panelsData.porstCode"
                :clearable="true"
                :style="{ width: '160px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Fax"
              prop="porstCode"
            >
              <VueInput
                id="viy2InputBox_56rVzk"
                ref="viy2InputBox_56rVzk"
                v-model="panelsData.porstCode"
                :clearable="true"
                :style="{ width: '160px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
      <VuePanel id="deliveryPointPanel" ref="deliveryPointPanel" v-model="jobPanelModel" title="Delivery Point" :collapse="true">
        <template #header>
          <div style="width: 500px">
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
              >
                <VueButton id="viy2Button_5XAP4A" ref="viy2Button_5XAP4A" icon-position="left" class="icon-button-width" @click="viy2Button_5XAP4AClick">
                  +
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="jobGrid" ref="jobGrid" header-align="center" height="250px" :data="deliveryPointDs" :edit-rules="jobGridRules" :edit-config="jobGridEditConfig">
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
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
          />
          <VueInputColumn
            :edit-render="jobGridPointCodeEditRender"
            field="pointCode"
            show-overflow="tooltip"
            title="Point Code"
            width="200px"
          />
          <VueInputColumn
            :edit-render="jobGridPointNameEditRender"
            field="pointName"
            title="Point Name"
            width="350px"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="80px"
            :buttons="jobGridViy2TableButtonColumn_AY9Y4Buttons"
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
