<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const currentDate = new Date();
// 获取当前月份的第一天
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDay = new Date(nextMonth - 1);
defineOptions({
  name: 'sdm0401_03',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_arbbuA = ref();
const viy2Panel_2rs6nZ = ref();
const viy2Form_aekkzV = ref();
const viy2Row_aekkzW = ref();
const viy2InputBox_apirKq = ref();
const viy2InputBox_aekkAc = ref();
const viy2DateTimePicker_5hElpd = ref();
const viy2DateTimePicker_apk4X6 = ref();
const viy2InputBox_afzxxG = ref();
const viy2Panel_aheR96 = ref();
const viy2Form_aqMGCr = ref();
const viy2Row_aqMGCs = ref();
const viy2InputBox_aqMGCG = ref();
const viy2InputBox_aqOlV6 = ref();
const viy2InputBox_aqMGCD = ref();
const viy2InputBox_aqOnam = ref();
const viy2InputBox_1GgQShe = ref();
const viy2InputBox_aqMGCT = ref();
const viy2Panel_oqx1Vg = ref();
const ownerForm = ref();
const viy2Row_agsceA = ref();
const viy2InputBox_arGTYm = ref();
const viy2InputBox_arH05e = ref();
const viy2Select_arkpF6 = ref();
const viy2InputBox_1EMoAhb = ref();
const viy2DateTimePicker_arB6EW = ref();
const viy2InputBox_arMFGE = ref();
const viy2InputBox_arN8eK = ref();
const viy2InputBox_arNmBe = ref();
const viy2InputBox_asw7tE = ref();
const viy2InputBox_arRGV0 = ref();
const viy2InputBox_arTegk = ref();
const viy2InputBox_arU2a2 = ref();
const viy2Select_UIXtW = ref();
const viy2DateTimePicker_alDNCu = ref();
const viy2InputBox_aisYfC = ref();
const viy2Select_ahVy1o = ref();
const viy2Select_ahVw96 = ref();
const viy2InputBox_asg1Ha = ref();
const viy2InputBox_askwvm = ref();
const viy2InputBox_askg2c = ref();
const viy2InputBox_askgwe = ref();
const viy2InputBox_arZt0y = ref();
const occupation = ref();
const viy2Select_asFsO2 = ref();
const viy2InputBox_asGOnO = ref();
const viy2Panel_ahePsA = ref();
const userForm = ref();
const viy2Row_ahePtB = ref();
const viy2CheckBox_5k94Sw = ref();
const viy2InputBox_asUKZQ = ref();
const viy2InputBox_asUL4f = ref();
const viy2InputBox_1GF9Czi = ref();
const viy2DateTimePicker_1GF9Div = ref();
const viy2InputBox_1GF9DF6 = ref();
const viy2InputBox_1GF9EmH = ref();
const viy2InputBox_1GF9F4i = ref();
const viy2InputBox_1GF9FNv = ref();
const viy2InputBox_1GF9Gv6 = ref();
const viy2InputBox_1GF9Heg = ref();
const viy2InputBox_1GF9HXw = ref();
const viy2Select_1GF9IDv = ref();
const viy2DateTimePicker_ats7bw = ref();
const viy2InputBox_attPuk = ref();
const viy2Select_1GF9KQL = ref();
const viy2Select_1GF9M6h = ref();
const viy2InputBox_1GF9NlN = ref();
const viy2InputBox_1GF9O50 = ref();
const viy2InputBox_1GF9OOd = ref();
const viy2InputBox_1GF9Pz2 = ref();
const viy2InputBox_atQCgU = ref();
const viy2Select_1GF9QYe = ref();
const viy2InputBox_1GF9TrE = ref();
const viy2Select_1GF9SdK = ref();
const viy2Select_atKM72 = ref();
const viy2InputBox_atx2i8 = ref();
const viy2Select_atEcOi = ref();
const viy2InputBox_atS5SU = ref();
const viy2Select_ateCTQ = ref();
const viy2InputBox_atRDaU = ref();
const formData = reactive({
});
const viy2Form_aekkzVData = reactive({
  point: 'YT350 Yamaha Town Nha Trang_DO 10', orderNo: 'SO2403A000006', deliveryDate: '20240304', salesDate: '20240304', pic: 'ADMINSD SYSTEM ADMINSD',
});
const viy2Form_aqMGCrData = reactive({
  barcode: '33TE77231304117', model: '1FCR00010D SIRIUS FI 1FC8', frameNo: 'RLCUT3526NY166017', plate: '', colorName: 'Xám-Đen', engineNo: 'E47VU-102617',
});
const ownerFormData = reactive({
  consumer: 'chen li', consumerType: 'Bike Purchase Customers', ownerType: '', idNo: '', registrationDate: '', lastName: 'chen', middleName: '', firstName: 'li', businessName: '', mobileOne: '4564565677', mobileTwo: '', mobileThree: '', gender: 'Nam', dateOfBirth: '', age: '', province: '', district: '', addressOne: 'Thôn Dù, Chấn Thịnh', addressTwo: '', emailOne: '', emailTwo: '', vipNo: '', occupation: 'N/A', paymentMethod: 'Tiền mặt', comment: '',
});
const userFormData = reactive({
  flag: [], consumer: '', consumerType: 'Bike Purchase Customers', idNo: '', registrationDate: '', lastName: '', middleName: '', firstName: '', businessName: '', mobileOne: '', mobileTwo: '', mobileThree: '', gender: '', dateOfBirth: '', age: '', province: '', district: '', addressOne: '', addressTwo: '', emailOne: '', emailTwo: '', vipNo: '', occupation: 'N/A', comment: '', paymentType: 'New', useType: 'Recreational', previoiuBikeName: '', previoiuBikeBrandName: '', numberOfBikesInFamily: '', previousBikeMTAT: '', numberOfFamilyMember: '',
});
const rules = reactive({
  viy2InputBox_apirKqRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_apk4X6Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_aqOlV6Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_arMFGERules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_arNmBeRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_asw7tERules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_arRGV0Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_UIXtWRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_alDNCuRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_ahVy1oRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_ahVw96Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_asg1HaRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_askg2cRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  occupationRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_asFsO2Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1GF9DF6Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1GF9F4iRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1GF9FNvRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1GF9Gv6Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1GF9IDvRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_ats7bwRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1GF9KQLRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1GF9M6hRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1GF9NlNRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1GF9OOdRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1GF9QYeRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1GF9SdKRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_atKM72Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_atEcOiRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_ateCTQRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Select_arkpF6Opts = reactive([
  {
    label:
'Government',
    value:
'Government',
  },
  {
    label:
'Organization',
    value:
'Organization',
  },
  {
    label:
'Business',
    value:
'Business',
  },
  {
    label:
'Individual',
    value:
'Individual',
  },
]);
const viy2Select_UIXtWOpts = reactive([
  {
    label:
'Nữ',
    value:
'Nữ',
  },
  {
    label:
'Nam',
    value:
'Nam',
  },
]);
const viy2Select_ahVy1oOpts = reactive([
  {
    label:
'Province 1',
    value:
'Province 1',
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
const viy2Select_ahVw96Opts = reactive([
  {
    label:
'District 1',
    value:
'District 1',
  },
  {
    label:
'District 2',
    value:
'District 2',
  },
]);
const occupationOpts = reactive([
  {
    label:
'N/A',
    value:
'N/A',
  },
]);
const viy2Select_asFsO2Opts = reactive([
  {
    label:
'Chuyển khoản',
    value:
'Chuyển khoản',
  },
  {
    label:
'POS/Thẻ tín dụng',
    value:
'POS/Thẻ tín dụng',
  },
  {
    label:
'Thanh toán bù trừ',
    value:
'Thanh toán bù trừ',
  },
  {
    label:
'Tiền mặt',
    value:
'Tiền mặt',
  },
  {
    label:
'Tiền mặt & POS',
    value:
'Tiền mặt & POS',
  },
  {
    label:
'Tiền mặt & chuyển khoản',
    value:
'Tiền mặt & chuyển khoản',
  },
  {
    label:
'Trả góp',
    value:
'Trả góp',
  },
]);
const viy2CheckBox_5k94SwOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2Select_1GF9IDvOpts = reactive([
  {
    label:
'Nữ',
    value:
'Nữ',
  },
  {
    label:
'Nam',
    value:
'Nam',
  },
]);
const viy2Select_1GF9KQLOpts = reactive([
  {
    label:
'Province 1',
    value:
'Province 1',
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
const viy2Select_1GF9M6hOpts = reactive([
  {
    label:
'District 1',
    value:
'District 1',
  },
  {
    label:
'District 2',
    value:
'District 2',
  },
]);
const viy2Select_1GF9QYeOpts = reactive([
  {
    label:
'N/A',
    value:
'N/A',
  },
]);
const viy2Select_1GF9SdKOpts = reactive([
  {
    label:
'Replace',
    value:
'Replace',
  },
  {
    label:
'New',
    value:
'New',
  },
  {
    label:
'Increase',
    value:
'Increase',
  },
]);
const viy2Select_atKM72Opts = reactive([
  {
    label:
'Đi làm',
    value:
'Đi làm',
  },
  {
    label:
'Recreational',
    value:
'Recreational',
  },
]);
const viy2Select_atEcOiOpts = reactive([
  {
    label:
'OTHERS',
    value:
'OTHERS',
  },
  {
    label:
'HONDA',
    value:
'HONDA',
  },
  {
    label:
'PIAGGIO',
    value:
'PIAGGIO',
  },
  {
    label:
'YAMAHA',
    value:
'YAMAHA',
  },
  {
    label:
'SUZUKI',
    value:
'SUZUKI',
  },
  {
    label:
'SYM',
    value:
'SYM',
  },
]);
const viy2Select_ateCTQOpts = reactive([
  {
    label:
'Option',
    value:
'Option',
  },
  {
    label:
'Option',
    value:
'Option',
  },
]);
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      modelCd: '1DB100010A',
      modelNm: 'Nouvo SX STD 1DB1',
      colorName: 'Đen',
      qty: 1,
      deliveryDate: new Date(),
      allocatedQty: 0,
      cancelledQty: 0,
    },
  ],
});
const gridDs = gridDsApi.data;
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm('Are you sure to reset this page?')
    .then(() => {
      const filterFormElement = orderForm.value;
      if (filterFormElement && filterFormElement.resetFields) {
        filterFormElement.resetFields();
      }
    }).catch(() => {
    });
};
const viy2Button_arbbuAClick = () => {
  debugger;
};
const viy2DateTimePicker_alDNCuChange = (value) => {
  const age = today.getFullYear() - value.getFullYear();
  ownerFormData.age = age;
};
const viy2DateTimePicker_ats7bwChange = (value) => {
  const age = today.getFullYear() - value.getFullYear();
  ownerFormData.age = age;
};
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
});
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
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" @click="viy2Button_5FbWKcClick">
          Back
        </VueButton>
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_arbbuA" ref="viy2Button_arbbuA" icon-position="left" type="info" @click="viy2Button_arbbuAClick">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="Header" class="margin-top-div except-height-css">
      <VueForm
        id="viy2Form_aekkzV"
        ref="viy2Form_aekkzV"
        label-width="130px"
        :model="viy2Form_aekkzVData"
      >
        <VueRow
          id="viy2Row_aekkzW"
          ref="viy2Row_aekkzW"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Point"
              prop="point"
              :rules="rules.viy2InputBox_apirKqRules"
            >
              <VueInput
                id="viy2InputBox_apirKq"
                ref="viy2InputBox_apirKq"
                v-model="viy2Form_aekkzVData.point"
                :clearable="true"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Order No."
              prop="orderNo"
            >
              <VueInput
                id="viy2InputBox_aekkAc"
                ref="viy2InputBox_aekkAc"
                v-model="viy2Form_aekkzVData.orderNo"
                :disabled="true"
                :readonly="true"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Delivery Date"
              prop="deliveryDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_5hElpd"
                ref="viy2DateTimePicker_5hElpd"
                v-model="viy2Form_aekkzVData.deliveryDate"
                type="date"
                :disabled="true"
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
              label="Sales Date"
              prop="salesDate"
              :rules="rules.viy2DateTimePicker_apk4X6Rules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_apk4X6"
                ref="viy2DateTimePicker_apk4X6"
                v-model="viy2Form_aekkzVData.salesDate"
                type="date"
                :disabled="true"
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
              label="P.I.C"
              prop="pic"
            >
              <VueInput
                id="viy2InputBox_afzxxG"
                ref="viy2InputBox_afzxxG"
                v-model="viy2Form_aekkzVData.pic"
                :clearable="true"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_aheR96" ref="viy2Panel_aheR96" :collapse="true" title="Motorcycle Info" class="except-height-css">
      <VueForm
        id="viy2Form_aqMGCr"
        ref="viy2Form_aqMGCr"
        label-width="130px"
        :model="viy2Form_aqMGCrData"
      >
        <VueRow
          id="viy2Row_aqMGCs"
          ref="viy2Row_aqMGCs"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Barcode"
              prop="barcode"
            >
              <VueInput
                id="viy2InputBox_aqMGCG"
                ref="viy2InputBox_aqMGCG"
                v-model="viy2Form_aqMGCrData.barcode"
                :disabled="true"
                :style="{ width: '250px' }"
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
              :rules="rules.viy2InputBox_aqOlV6Rules"
            >
              <VueInput
                id="viy2InputBox_aqOlV6"
                ref="viy2InputBox_aqOlV6"
                v-model="viy2Form_aqMGCrData.model"
                :disabled="true"
                :style="{ width: '250px' }"
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
                id="viy2InputBox_aqMGCD"
                ref="viy2InputBox_aqMGCD"
                v-model="viy2Form_aqMGCrData.frameNo"
                :clearable="true"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="No. Plate"
              prop="plate"
            >
              <VueInput
                id="viy2InputBox_aqOnam"
                ref="viy2InputBox_aqOnam"
                v-model="viy2Form_aqMGCrData.plate"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Color Name"
              prop="colorName"
            >
              <VueInput
                id="viy2InputBox_1GgQShe"
                ref="viy2InputBox_1GgQShe"
                v-model="viy2Form_aqMGCrData.colorName"
                :disabled="true"
                :style="{ width: '250px' }"
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
                id="viy2InputBox_aqMGCT"
                ref="viy2InputBox_aqMGCT"
                v-model="viy2Form_aqMGCrData.engineNo"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_oqx1Vg" ref="viy2Panel_oqx1Vg" :collapse="true" title="Owner Info" class="except-height-css">
      <VueForm
        id="ownerForm"
        ref="ownerForm"
        label-width="130px"
        :model="ownerFormData"
      >
        <VueRow
          id="viy2Row_agsceA"
          ref="viy2Row_agsceA"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Consumer"
              prop="consumer"
            >
              <VueInput
                id="viy2InputBox_arGTYm"
                ref="viy2InputBox_arGTYm"
                v-model="ownerFormData.consumer"
                :disabled="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Consumer Type"
              prop="consumerType"
            >
              <VueInput
                id="viy2InputBox_arH05e"
                ref="viy2InputBox_arH05e"
                v-model="ownerFormData.consumerType"
                :disabled="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Owner Type"
              prop="ownerType"
            >
              <VueSelect
                id="viy2Select_arkpF6"
                ref="viy2Select_arkpF6"
                v-model="ownerFormData.ownerType"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="viy2Select_arkpF6Opts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="ID No."
              prop="idNo"
            >
              <VueInput
                id="viy2InputBox_1EMoAhb"
                ref="viy2InputBox_1EMoAhb"
                v-model="ownerFormData.idNo"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Registration Date"
              prop="registrationDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_arB6EW"
                ref="viy2DateTimePicker_arB6EW"
                v-model="ownerFormData.registrationDate"
                type="date"
                :disabled="true"
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
              label="Last Name"
              prop="lastName"
              :rules="rules.viy2InputBox_arMFGERules"
            >
              <VueInput
                id="viy2InputBox_arMFGE"
                ref="viy2InputBox_arMFGE"
                v-model="ownerFormData.lastName"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Middle Name"
              prop="middleName"
            >
              <VueInput
                id="viy2InputBox_arN8eK"
                ref="viy2InputBox_arN8eK"
                v-model="ownerFormData.middleName"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="First Name"
              prop="firstName"
              :rules="rules.viy2InputBox_arNmBeRules"
            >
              <VueInput
                id="viy2InputBox_arNmBe"
                ref="viy2InputBox_arNmBe"
                v-model="ownerFormData.firstName"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Business Name"
              prop="businessName"
              :rules="rules.viy2InputBox_asw7tERules"
            >
              <VueInput
                id="viy2InputBox_asw7tE"
                ref="viy2InputBox_asw7tE"
                v-model="ownerFormData.businessName"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Mobile1"
              prop="mobileOne"
              :rules="rules.viy2InputBox_arRGV0Rules"
            >
              <VueInput
                id="viy2InputBox_arRGV0"
                ref="viy2InputBox_arRGV0"
                v-model="ownerFormData.mobileOne"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Mobile2"
              prop="mobileTwo"
            >
              <VueInput
                id="viy2InputBox_arTegk"
                ref="viy2InputBox_arTegk"
                v-model="ownerFormData.mobileTwo"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Mobile3"
              prop="mobileThree"
            >
              <VueInput
                id="viy2InputBox_arU2a2"
                ref="viy2InputBox_arU2a2"
                v-model="ownerFormData.mobileThree"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Gender"
              prop="gender"
              :rules="rules.viy2Select_UIXtWRules"
            >
              <VueSelect
                id="viy2Select_UIXtW"
                ref="viy2Select_UIXtW"
                v-model="ownerFormData.gender"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :disabled="true"
                :options="viy2Select_UIXtWOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Date Of Birth"
              prop="dateOfBirth"
              :rules="rules.viy2DateTimePicker_alDNCuRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_alDNCu"
                ref="viy2DateTimePicker_alDNCu"
                v-model="ownerFormData.dateOfBirth"
                type="date"
                :disabled="true"
                :readonly="true"
                :style="{ width: '100px' }"
                @change="viy2DateTimePicker_alDNCuChange"
              />
            </VueFormItem>
            <VueFormItem
              label="Age"
              label-width="35px"
              prop="age"
            >
              <VueInput
                id="viy2InputBox_aisYfC"
                ref="viy2InputBox_aisYfC"
                v-model="ownerFormData.age"
                :disabled="true"
                :style="{ width: '38px' }"
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
              :rules="rules.viy2Select_ahVy1oRules"
            >
              <VueSelect
                id="viy2Select_ahVy1o"
                ref="viy2Select_ahVy1o"
                v-model="ownerFormData.province"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :disabled="true"
                :options="viy2Select_ahVy1oOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="District"
              prop="district"
              :rules="rules.viy2Select_ahVw96Rules"
            >
              <VueSelect
                id="viy2Select_ahVw96"
                ref="viy2Select_ahVw96"
                v-model="ownerFormData.district"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :disabled="true"
                :options="viy2Select_ahVw96Opts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Address1"
              prop="addressOne"
              :rules="rules.viy2InputBox_asg1HaRules"
            >
              <VueInput
                id="viy2InputBox_asg1Ha"
                ref="viy2InputBox_asg1Ha"
                v-model="ownerFormData.addressOne"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Address2"
              prop="addressTwo"
            >
              <VueInput
                id="viy2InputBox_askwvm"
                ref="viy2InputBox_askwvm"
                v-model="ownerFormData.addressTwo"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Email1"
              prop="emailOne"
              :rules="rules.viy2InputBox_askg2cRules"
            >
              <VueInput
                id="viy2InputBox_askg2c"
                ref="viy2InputBox_askg2c"
                v-model="ownerFormData.emailOne"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Email2"
              prop="emailTwo"
            >
              <VueInput
                id="viy2InputBox_askgwe"
                ref="viy2InputBox_askgwe"
                v-model="ownerFormData.emailTwo"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="VIP No."
              prop="vipNo"
            >
              <VueInput
                id="viy2InputBox_arZt0y"
                ref="viy2InputBox_arZt0y"
                v-model="ownerFormData.vipNo"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Occupation"
              prop="occupation"
              :rules="rules.occupationRules"
            >
              <VueSelect
                id="occupation"
                ref="occupation"
                v-model="ownerFormData.occupation"
                :clearable="true"
                :filterable="true"
                :disabled="true"
                :options="occupationOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Payment Method"
              prop="paymentMethod"
              :rules="rules.viy2Select_asFsO2Rules"
            >
              <VueSelect
                id="viy2Select_asFsO2"
                ref="viy2Select_asFsO2"
                v-model="ownerFormData.paymentMethod"
                :clearable="true"
                :filterable="true"
                :disabled="true"
                :options="viy2Select_asFsO2Opts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Comment"
              prop="comment"
            >
              <VueInput
                id="viy2InputBox_asGOnO"
                ref="viy2InputBox_asGOnO"
                v-model="ownerFormData.comment"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_ahePsA" ref="viy2Panel_ahePsA" :collapse="true" title="User Info" class="except-height-css">
      <VueForm
        id="userForm"
        ref="userForm"
        label-width="130px"
        :model="userFormData"
      >
        <VueRow
          id="viy2Row_ahePtB"
          ref="viy2Row_ahePtB"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Same As Owner Flag"
              label-width="140px"
              prop="flag"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_5k94Sw"
                ref="viy2CheckBox_5k94Sw"
                v-model="userFormData.flag"
              >
                <VueCheckbox
                  v-for="option in viy2CheckBox_5k94SwOpts"
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
              label="Consumer"
              prop="consumer"
            >
              <VueInput
                id="viy2InputBox_asUKZQ"
                ref="viy2InputBox_asUKZQ"
                v-model="userFormData.consumer"
                :disabled="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Consumer Type"
              prop="consumerType"
            >
              <VueInput
                id="viy2InputBox_asUL4f"
                ref="viy2InputBox_asUL4f"
                v-model="userFormData.consumerType"
                :disabled="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="ID No."
              prop="idNo"
            >
              <VueInput
                id="viy2InputBox_1GF9Czi"
                ref="viy2InputBox_1GF9Czi"
                v-model="userFormData.idNo"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Registration Date"
              prop="registrationDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1GF9Div"
                ref="viy2DateTimePicker_1GF9Div"
                v-model="userFormData.registrationDate"
                type="date"
                :disabled="true"
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
              label="Last Name"
              prop="lastName"
              :rules="rules.viy2InputBox_1GF9DF6Rules"
            >
              <VueInput
                id="viy2InputBox_1GF9DF6"
                ref="viy2InputBox_1GF9DF6"
                v-model="userFormData.lastName"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Middle Name"
              prop="middleName"
            >
              <VueInput
                id="viy2InputBox_1GF9EmH"
                ref="viy2InputBox_1GF9EmH"
                v-model="userFormData.middleName"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="First Name"
              prop="firstName"
              :rules="rules.viy2InputBox_1GF9F4iRules"
            >
              <VueInput
                id="viy2InputBox_1GF9F4i"
                ref="viy2InputBox_1GF9F4i"
                v-model="userFormData.firstName"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Business Name"
              prop="businessName"
              :rules="rules.viy2InputBox_1GF9FNvRules"
            >
              <VueInput
                id="viy2InputBox_1GF9FNv"
                ref="viy2InputBox_1GF9FNv"
                v-model="userFormData.businessName"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Mobile1"
              prop="mobileOne"
              :rules="rules.viy2InputBox_1GF9Gv6Rules"
            >
              <VueInput
                id="viy2InputBox_1GF9Gv6"
                ref="viy2InputBox_1GF9Gv6"
                v-model="userFormData.mobileOne"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Mobile2"
              prop="mobileTwo"
            >
              <VueInput
                id="viy2InputBox_1GF9Heg"
                ref="viy2InputBox_1GF9Heg"
                v-model="userFormData.mobileTwo"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Mobile3"
              prop="mobileThree"
            >
              <VueInput
                id="viy2InputBox_1GF9HXw"
                ref="viy2InputBox_1GF9HXw"
                v-model="userFormData.mobileThree"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Gender"
              prop="gender"
              :rules="rules.viy2Select_1GF9IDvRules"
            >
              <VueSelect
                id="viy2Select_1GF9IDv"
                ref="viy2Select_1GF9IDv"
                v-model="userFormData.gender"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :disabled="true"
                :options="viy2Select_1GF9IDvOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Date Of Birth"
              prop="dateOfBirth"
              :rules="rules.viy2DateTimePicker_ats7bwRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_ats7bw"
                ref="viy2DateTimePicker_ats7bw"
                v-model="userFormData.dateOfBirth"
                type="date"
                :disabled="true"
                :readonly="true"
                :style="{ width: '100px' }"
                @change="viy2DateTimePicker_ats7bwChange"
              />
            </VueFormItem>
            <VueFormItem
              label="Age"
              label-width="35px"
              prop="age"
            >
              <VueInput
                id="viy2InputBox_attPuk"
                ref="viy2InputBox_attPuk"
                v-model="userFormData.age"
                :disabled="true"
                :style="{ width: '45px' }"
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
              :rules="rules.viy2Select_1GF9KQLRules"
            >
              <VueSelect
                id="viy2Select_1GF9KQL"
                ref="viy2Select_1GF9KQL"
                v-model="userFormData.province"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :disabled="true"
                :options="viy2Select_1GF9KQLOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="District"
              prop="district"
              :rules="rules.viy2Select_1GF9M6hRules"
            >
              <VueSelect
                id="viy2Select_1GF9M6h"
                ref="viy2Select_1GF9M6h"
                v-model="userFormData.district"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :disabled="true"
                class="no-border"
                :options="viy2Select_1GF9M6hOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Address1"
              prop="addressOne"
              :rules="rules.viy2InputBox_1GF9NlNRules"
            >
              <VueInput
                id="viy2InputBox_1GF9NlN"
                ref="viy2InputBox_1GF9NlN"
                v-model="userFormData.addressOne"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Address2"
              prop="addressTwo"
            >
              <VueInput
                id="viy2InputBox_1GF9O50"
                ref="viy2InputBox_1GF9O50"
                v-model="userFormData.addressTwo"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Email1"
              prop="emailOne"
              :rules="rules.viy2InputBox_1GF9OOdRules"
            >
              <VueInput
                id="viy2InputBox_1GF9OOd"
                ref="viy2InputBox_1GF9OOd"
                v-model="userFormData.emailOne"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Email2"
              prop="emailTwo"
            >
              <VueInput
                id="viy2InputBox_1GF9Pz2"
                ref="viy2InputBox_1GF9Pz2"
                v-model="userFormData.emailTwo"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="VIP No."
              prop="vipNo"
            >
              <VueInput
                id="viy2InputBox_atQCgU"
                ref="viy2InputBox_atQCgU"
                v-model="userFormData.vipNo"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Occupation"
              prop="occupation"
              :rules="rules.viy2Select_1GF9QYeRules"
            >
              <VueSelect
                id="viy2Select_1GF9QYe"
                ref="viy2Select_1GF9QYe"
                v-model="userFormData.occupation"
                :clearable="true"
                :filterable="true"
                :disabled="true"
                :options="viy2Select_1GF9QYeOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Comment"
              prop="comment"
            >
              <VueInput
                id="viy2InputBox_1GF9TrE"
                ref="viy2InputBox_1GF9TrE"
                v-model="userFormData.comment"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Payment Type"
              prop="paymentType"
              :rules="rules.viy2Select_1GF9SdKRules"
            >
              <VueSelect
                id="viy2Select_1GF9SdK"
                ref="viy2Select_1GF9SdK"
                v-model="userFormData.paymentType"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_1GF9SdKOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Use Type"
              prop="useType"
              :rules="rules.viy2Select_atKM72Rules"
            >
              <VueSelect
                id="viy2Select_atKM72"
                ref="viy2Select_atKM72"
                v-model="userFormData.useType"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_atKM72Opts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Previoiu Bike Name"
              label-width="140px"
              prop="previoiuBikeName"
            >
              <VueInput
                id="viy2InputBox_atx2i8"
                ref="viy2InputBox_atx2i8"
                v-model="userFormData.previoiuBikeName"
                :disabled="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Previoiu Bike Brand Name"
              label-width="180px"
              prop="previoiuBikeBrandName"
              :rules="rules.viy2Select_atEcOiRules"
            >
              <VueSelect
                id="viy2Select_atEcOi"
                ref="viy2Select_atEcOi"
                v-model="userFormData.previoiuBikeBrandName"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_atEcOiOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Number Of Bikes In Family"
              label-width="190px"
              prop="numberOfBikesInFamily"
            >
              <VueInput
                id="viy2InputBox_atS5SU"
                ref="viy2InputBox_atS5SU"
                v-model="userFormData.numberOfBikesInFamily"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Previous Bike MT/AT"
              label-width="180px"
              prop="previousBikeMTAT"
              :rules="rules.viy2Select_ateCTQRules"
            >
              <VueSelect
                id="viy2Select_ateCTQ"
                ref="viy2Select_ateCTQ"
                v-model="userFormData.previousBikeMTAT"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :disabled="true"
                :options="viy2Select_ateCTQOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Number Of Family Member"
              label-width="190px"
              prop="numberOfFamilyMember"
            >
              <VueInput
                id="viy2InputBox_atRDaU"
                ref="viy2InputBox_atRDaU"
                v-model="userFormData.numberOfFamilyMember"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
  </VueForm>
</template>
