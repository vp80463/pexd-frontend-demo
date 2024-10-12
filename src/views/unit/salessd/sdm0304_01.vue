<script setup>
import { IconCloseBold, IconUserFilled, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import {
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const currentDate = new Date();
// 获取当前月份的第一天
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDay = new Date(nextMonth - 1);
const today = new Date();
defineOptions({
  name: 'sdm0304_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_agofMK = ref();
const viy2Button_agpe5M = ref();
const viy2Button_agpcVQ = ref();
const viy2Button_5FbWKc = ref();
const viy2Panel_2rs6nZ = ref();
const headerForm = ref();
const viy2Row_aekkzW = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_83QfW5 = ref();
const viy2Button_83QfW7 = ref();
const viy2DateTimePicker_5hElpd = ref();
const viy2InputBox_afzxxG = ref();
const viy2InputBox_aekkAc = ref();
const viy2InputBox_aemVOQ = ref();
const viy2Panel_aheR96 = ref();
const viy2Form_aheR9M = ref();
const viy2Row_aheRa7 = ref();
const viy2InputBox_ah4QBy = ref();
const viy2InputBox_ah6B2i = ref();
const viy2InputBox_ah9YMk = ref();
const viy2InputBox_ah9Xny = ref();
const viy2InputBox_1EMoAu8 = ref();
const viy2InputBox_1EMoADR = ref();
const viy2Panel_oqx1Vg = ref();
const viy2Row_zQgmS = ref();
const viy2Button_8Ifs4a = ref();
const ownerForm = ref();
const viy2Row_ZG0l7 = ref();
const viy2InputBox_9b0PCA = ref();
const viy2InputBox_9b0PCN = ref();
const viy2InputBox_9b0PCQ = ref();
const viy2Button_9b0PD3 = ref();
const viy2InputBox_1tM8khc = ref();
const viy2InputBox_1tM8kiR = ref();
const viy2InputBox_1tM8kiU = ref();
const viy2Radio_1tM8kkz = ref();
const viy2DateTimePicker_1tM8kkB = ref();
const viy2InputBox_1tM8kkC = ref();
const viy2DateTimePicker_1tM8kmh = ref();
const viy2Radio_1tM8kmi = ref();
const viy2Upload_1tM8knW = ref();
const viy2Select_1tM8knX = ref();
const viy2Select_1tM8kpF = ref();
const viy2Row_Axv92 = ref();
const viy2InputBox_9b1equ = ref();
const viy2InputBox_9b1eqH = ref();
const viy2Panel_ahePsA = ref();
const userForm = ref();
const viy2Row_ZG34C = ref();
const viy2InputBox_9b5gm8 = ref();
const viy2InputBox_9b5gml = ref();
const viy2InputBox_9b5gmy = ref();
const viy2Button_9b5gmL = ref();
const viy2InputBox_1tMQDEi = ref();
const viy2Radio_1tMQDHz = ref();
const viy2DateTimePicker_1tMQDGd = ref();
const viy2InputBox_1tMQDGe = ref();
const viy2DateTimePicker_1tMQDKT = ref();
const viy2Select_1tMQDKU = ref();
const viy2Select_1tMQDOf = ref();
const viy2Panel_aheNSQ = ref();
const viy2Form_aheNTm = ref();
const viy2Row_aheNTH = ref();
const viy2Radio_alInTO = ref();
const viy2InputBox_5kCAfO = ref();
const viy2InputBox_ambX8W = ref();
const viy2InputBox_ambUC0 = ref();
const paymentMethod = ref();
const formData = reactive({
});
const headerFormData = reactive({
  pointvl: 'YT350 Yamaha Town Nha Trang_DO 10', orderDate: '', salesPIC: 'Admin', orderNo: '', gift: '',
});
const viy2Form_aheR9MData = reactive({
  frameNo: '', model: '', engineNo: '', colorName: '', batteryIDOne: '', batteryIDTwo: '',
});
const ownerFormData = reactive({
  fn: '', mn: '', ln: '', mobile: '', cusTaxCode: '', sns: '', gender: 'Nữ', birthYear: '', age: '', birthDay: '', privacy: 'Consent', province: '', district: '', address: '', email: '',
});
const userFormData = reactive({
  fn1: '', mn1: '', ln1: '', mobile2: '', gender2: 'Nữ', birthYear2: '', age2: '', birthDay2: '', province2: 'Tỉnh An Giang', district2: 'Thành phố Bà Rịa',
});
const viy2Form_aheNTmData = reactive({
  type: 'Special Price', specialPrice: '0', discountAmount: '0', amount: '0', paymentMethod: '',
});
const rules = reactive({
  viy2ValueList_12gOt1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_5hElpdRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_ah4QByRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_9b0PCARules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1tM8khcRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Radio_1tM8kkzRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1tM8kkBRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1tM8kmhRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Radio_1tM8kmiRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1tM8knXRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1tM8kpFRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_9b1eqHRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Radio_alInTORules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_5kCAfORules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2Radio_1tM8kkzOpts = reactive([
  { value: 'Nữ', label: 'Nữ' },
  { value: 'Nam', label: 'Nam' },
]);
const viy2Radio_1tM8kmiOpts = reactive([
  { value: 'Consent', label: 'Consent' },
  { value: 'Partially Agree', label: 'Partially Agree' },
]);
const viy2Select_1tM8knXOpts = reactive([
  {
    label:
'Tỉnh An Giang',
    value:
'Tỉnh An Giang',
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
]);
const viy2Select_1tM8kpFOpts = reactive([
  {
    label:
'Thành phố Bà Rịa',
    value:
'Thành phố Bà Rịa',
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
]);
const viy2Radio_1tMQDHzOpts = reactive([
  { value: 'Nữ', label: 'Nữ' },
  { value: 'Nam', label: 'Nam' },
]);
const viy2Select_1tMQDKUOpts = reactive([
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
const viy2Select_1tMQDOfOpts = reactive([
  {
    label:
'Thành phố Bà Rịa',
    value:
'Thành phố Bà Rịa',
  },
  {
    label:
'Huyện Châu Đức',
    value:
'Huyện Châu Đức',
  },
  {
    label:
'Huyện Côn Đảo',
    value:
'Huyện Côn Đảo',
  },
]);
const viy2Radio_alInTOOpts = reactive([
  { value: 'Special Price', label: 'Special Price' },
  { value: 'Discount Amount', label: 'Discount Amount' },
]);
const paymentMethodOpts = reactive([
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
const viy2Button_agofMKClick = () => {
  debugger;
};
const viy2Button_agpe5MClick = () => {
  debugger;
};
const viy2Button_agpcVQClick = () => {
  debugger;
};
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2ValueList_12gOt1Select = (params) => {
  headerFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2Button_8Ifs4aClick = () => {
  showConsumerWin.value = true;
};
const viy2Button_9b0PD3Click = () => {
  orderFormData.fn = '';
  orderFormData.mn = '';
  orderFormData.ln = '';
  orderFormData.mobile = '';
};
const viy2DateTimePicker_1tM8kkBChange = (value) => {
  const age = today.getFullYear() - value.getFullYear();
  orderFormData.age = age;
};
const viy2Upload_1tM8knWOnPreview = (file) => {
  VueMessage.success({ message: 'Download file success' });
};
const viy2Upload_1tM8knWSubmitUpload = () => {
  viy2Upload_1tM8knW.value.submit();
};
const viy2Button_9b5gmLClick = () => {
  orderFormData.fn = '';
  orderFormData.mn = '';
  orderFormData.ln = '';
  orderFormData.mobile = '';
};
const viy2DateTimePicker_1tMQDGdChange = (value) => {
  const age = today.getFullYear() - value.getFullYear();
  orderFormData.age2 = age;
};
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
});
headerFormData.orderDate = new Date();
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
        <VueButton id="viy2Button_agofMK" ref="viy2Button_agofMK" icon-position="left" :disabled="true" @click="viy2Button_agofMKClick">
          Print Receipt
        </VueButton>
        <VueButton id="viy2Button_agpe5M" ref="viy2Button_agpe5M" icon-position="left" :disabled="true" @click="viy2Button_agpe5MClick">
          Print
        </VueButton>
        <VueButton id="viy2Button_agpcVQ" ref="viy2Button_agpcVQ" icon-position="left" :disabled="true" @click="viy2Button_agpcVQClick">
          Delivery
        </VueButton>
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          Save
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="Header" class="margin-top-div except-height-css">
      <VueForm
        id="headerForm"
        ref="headerForm"
        label-width="120px"
        :model="headerFormData"
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
              prop="pointvl"
              :rules="rules.viy2ValueList_12gOt1Rules"
            >
              <VueValueList
                id="viy2ValueList_12gOt1"
                ref="viy2ValueList_12gOt1"
                v-model="headerFormData.pointvl"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
                :popover-width="500"
                :use-popup="true"
                :clearable="true"
                :popover-columns="viy2ValueList_12gOt1PopoverColumns"
                :popover-query-method="viy2ValueList_12gOt1PopoverQueryMethod"
                :popup-columns="viy2ValueList_12gOt1PopupColumns"
                :popup-conditions="viy2ValueList_12gOt1PopupConditions"
                :popup-query-method="viy2ValueList_12gOt1PopupQueryMethod"
                @select="viy2ValueList_12gOt1Select"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_83QfW5"
                    ref="viy2Row_83QfW5"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_83QfW6" ref="viy2Text_83QfW6" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Point
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_83QfW7" ref="viy2Button_83QfW7" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
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
              label="OrderDate"
              prop="orderDate"
              :rules="rules.viy2DateTimePicker_5hElpdRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_5hElpd"
                ref="viy2DateTimePicker_5hElpd"
                v-model="headerFormData.orderDate"
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
              label="Sales P.I.C"
              prop="salesPIC"
            >
              <VueInput
                id="viy2InputBox_afzxxG"
                ref="viy2InputBox_afzxxG"
                v-model="headerFormData.salesPIC"
                :clearable="true"
                :disabled="true"
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
                v-model="headerFormData.orderNo"
                :disabled="true"
                :readonly="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Gift"
              prop="gift"
            >
              <VueInput
                id="viy2InputBox_aemVOQ"
                ref="viy2InputBox_aemVOQ"
                v-model="headerFormData.gift"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_aheR96" ref="viy2Panel_aheR96" :collapse="true" title="Motorcycle Info" class="except-height-css">
      <VueForm
        id="viy2Form_aheR9M"
        ref="viy2Form_aheR9M"
        label-width="120px"
        :model="viy2Form_aheR9MData"
      >
        <VueRow
          id="viy2Row_aheRa7"
          ref="viy2Row_aheRa7"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Frame No."
              prop="frameNo"
              :rules="rules.viy2InputBox_ah4QByRules"
            >
              <VueInput
                id="viy2InputBox_ah4QBy"
                ref="viy2InputBox_ah4QBy"
                v-model="viy2Form_aheR9MData.frameNo"
                :clearable="true"
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
                id="viy2InputBox_ah6B2i"
                ref="viy2InputBox_ah6B2i"
                v-model="viy2Form_aheR9MData.model"
                :disabled="true"
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
                id="viy2InputBox_ah9YMk"
                ref="viy2InputBox_ah9YMk"
                v-model="viy2Form_aheR9MData.engineNo"
                :disabled="true"
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
                id="viy2InputBox_ah9Xny"
                ref="viy2InputBox_ah9Xny"
                v-model="viy2Form_aheR9MData.colorName"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Battery ID 1"
              prop="batteryIDOne"
            >
              <VueInput
                id="viy2InputBox_1EMoAu8"
                ref="viy2InputBox_1EMoAu8"
                v-model="viy2Form_aheR9MData.batteryIDOne"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Battery ID 2"
              prop="batteryIDTwo"
            >
              <VueInput
                id="viy2InputBox_1EMoADR"
                ref="viy2InputBox_1EMoADR"
                v-model="viy2Form_aheR9MData.batteryIDTwo"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_oqx1Vg" ref="viy2Panel_oqx1Vg" :collapse="true" title="Owner Info" class="except-height-css">
      <template #header>
        <div style="width: 400px">
          <VueRow
            id="viy2Row_zQgmS"
            ref="viy2Row_zQgmS"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_8Ifs4a" ref="viy2Button_8Ifs4a" icon-position="left" @click="viy2Button_8Ifs4aClick">
                Select Consumer
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueForm
        id="ownerForm"
        ref="ownerForm"
        label-width="120px"
        :model="ownerFormData"
      >
        <VueRow
          id="viy2Row_ZG0l7"
          ref="viy2Row_ZG0l7"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Consumer"
              prop="fn"
              :rules="rules.viy2InputBox_9b0PCARules"
            >
              <VueInput
                id="viy2InputBox_9b0PCA"
                ref="viy2InputBox_9b0PCA"
                v-model="ownerFormData.fn"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="mn"
            >
              <VueInput
                id="viy2InputBox_9b0PCN"
                ref="viy2InputBox_9b0PCN"
                v-model="ownerFormData.mn"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="ln"
            >
              <VueInput
                id="viy2InputBox_9b0PCQ"
                ref="viy2InputBox_9b0PCQ"
                v-model="ownerFormData.ln"
                :clearable="true"
                :style="{ width: '180px' }"
              >
                <template #append>
                  <VueButton id="viy2Button_9b0PD3" ref="viy2Button_9b0PD3" icon-position="left" type="primary" class="icon-button-width" :icon="IconUserFilled" @click="viy2Button_9b0PD3Click">
                    New
                  </VueButton>
                </template>
              </VueInput>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Mobile"
              label-width="105px"
              prop="mobile"
              :rules="rules.viy2InputBox_1tM8khcRules"
            >
              <VueInput
                id="viy2InputBox_1tM8khc"
                ref="viy2InputBox_1tM8khc"
                v-model="ownerFormData.mobile"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Custax Code"
              label-width="105px"
              prop="cusTaxCode"
            >
              <VueInput
                id="viy2InputBox_1tM8kiR"
                ref="viy2InputBox_1tM8kiR"
                v-model="ownerFormData.cusTaxCode"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="SNS"
              prop="sns"
            >
              <VueInput
                id="viy2InputBox_1tM8kiU"
                ref="viy2InputBox_1tM8kiU"
                v-model="ownerFormData.sns"
                :clearable="true"
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
              :rules="rules.viy2Radio_1tM8kkzRules"
            >
              <VueRadioGroup
                id="viy2Radio_1tM8kkz"
                ref="viy2Radio_1tM8kkz"
                v-model="ownerFormData.gender"
              >
                <VueRadio
                  v-for="option in viy2Radio_1tM8kkzOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadio>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Year Of Birth"
              label-width="105px"
              prop="birthYear"
              :rules="rules.viy2DateTimePicker_1tM8kkBRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1tM8kkB"
                ref="viy2DateTimePicker_1tM8kkB"
                v-model="ownerFormData.birthYear"
                type="year"
                :style="{ width: '100px' }"
                @change="viy2DateTimePicker_1tM8kkBChange"
              />
            </VueFormItem>
            <VueFormItem
              label="Age"
              label-width="35px"
              prop="age"
            >
              <VueInput
                id="viy2InputBox_1tM8kkC"
                ref="viy2InputBox_1tM8kkC"
                v-model="ownerFormData.age"
                :disabled="true"
                text-align="right"
                :readonly="true"
                class="no-border"
                :style="{ width: '38px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Date of Birth"
              label-width="105px"
              prop="birthDay"
              :rules="rules.viy2DateTimePicker_1tM8kmhRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1tM8kmh"
                ref="viy2DateTimePicker_1tM8kmh"
                v-model="ownerFormData.birthDay"
                type="date"
                :style="{ width: '100px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.md"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Privacy Policy Result"
              label-width="145px"
              prop="privacy"
              :rules="rules.viy2Radio_1tM8kmiRules"
            >
              <VueRadioGroup
                id="viy2Radio_1tM8kmi"
                ref="viy2Radio_1tM8kmi"
                v-model="ownerFormData.privacy"
              >
                <VueRadio
                  v-for="option in viy2Radio_1tM8kmiOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadio>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 16 }"
          >
            <VueUpload id="viy2Upload_1tM8knW" ref="viy2Upload_1tM8knW" :accept="acceptFileType" :auto-upload="false" :commit-btn="false" :limit="1" :on-preview="viy2Upload_1tM8knWOnPreview">
              <template #trigger>
                <VueButton>
                  Upload Privacy
                </VueButton>
              </template>
            </VueUpload>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Province"
              prop="province"
              :rules="rules.viy2Select_1tM8knXRules"
            >
              <VueSelect
                id="viy2Select_1tM8knX"
                ref="viy2Select_1tM8knX"
                v-model="ownerFormData.province"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_1tM8knXOpts"
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
              :rules="rules.viy2Select_1tM8kpFRules"
            >
              <VueSelect
                id="viy2Select_1tM8kpF"
                ref="viy2Select_1tM8kpF"
                v-model="ownerFormData.district"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_1tM8kpFOpts"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <VueRow
          id="viy2Row_Axv92"
          ref="viy2Row_Axv92"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Address"
              prop="address"
            >
              <VueInput
                id="viy2InputBox_9b1equ"
                ref="viy2InputBox_9b1equ"
                v-model="ownerFormData.address"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Email"
              prop="email"
              :rules="rules.viy2InputBox_9b1eqHRules"
            >
              <VueInput
                id="viy2InputBox_9b1eqH"
                ref="viy2InputBox_9b1eqH"
                v-model="ownerFormData.email"
                :clearable="true"
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
        label-width="120px"
        :model="userFormData"
      >
        <VueRow
          id="viy2Row_ZG34C"
          ref="viy2Row_ZG34C"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Consumer"
              prop="fn1"
            >
              <VueInput
                id="viy2InputBox_9b5gm8"
                ref="viy2InputBox_9b5gm8"
                v-model="userFormData.fn1"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="mn1"
            >
              <VueInput
                id="viy2InputBox_9b5gml"
                ref="viy2InputBox_9b5gml"
                v-model="userFormData.mn1"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="ln1"
            >
              <VueInput
                id="viy2InputBox_9b5gmy"
                ref="viy2InputBox_9b5gmy"
                v-model="userFormData.ln1"
                :clearable="true"
                :style="{ width: '180px' }"
              >
                <template #append>
                  <VueButton id="viy2Button_9b5gmL" ref="viy2Button_9b5gmL" icon-position="left" type="primary" class="icon-button-width" :icon="IconUserFilled" @click="viy2Button_9b5gmLClick">
                    New
                  </VueButton>
                </template>
              </VueInput>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Mobile"
              prop="mobile2"
            >
              <VueInput
                id="viy2InputBox_1tMQDEi"
                ref="viy2InputBox_1tMQDEi"
                v-model="userFormData.mobile2"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Gender"
              prop="gender2"
            >
              <VueRadioGroup
                id="viy2Radio_1tMQDHz"
                ref="viy2Radio_1tMQDHz"
                v-model="userFormData.gender2"
              >
                <VueRadio
                  v-for="option in viy2Radio_1tMQDHzOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadio>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Year Of Birth"
              prop="birthYear2"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1tMQDGd"
                ref="viy2DateTimePicker_1tMQDGd"
                v-model="userFormData.birthYear2"
                type="year"
                :style="{ width: '100px' }"
                @change="viy2DateTimePicker_1tMQDGdChange"
              />
            </VueFormItem>
            <VueFormItem
              label="Age"
              label-width="35px"
              prop="age2"
            >
              <VueInput
                id="viy2InputBox_1tMQDGe"
                ref="viy2InputBox_1tMQDGe"
                v-model="userFormData.age2"
                text-align="right"
                :readonly="true"
                class="no-border"
                :style="{ width: '38px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Date of Birth"
              prop="birthDay2"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1tMQDKT"
                ref="viy2DateTimePicker_1tMQDKT"
                v-model="userFormData.birthDay2"
                type="date"
                :style="{ width: '100px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.md"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Province"
              prop="province2"
            >
              <VueSelect
                id="viy2Select_1tMQDKU"
                ref="viy2Select_1tMQDKU"
                v-model="userFormData.province2"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_1tMQDKUOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="District"
              prop="district2"
            >
              <VueSelect
                id="viy2Select_1tMQDOf"
                ref="viy2Select_1tMQDOf"
                v-model="userFormData.district2"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_1tMQDOfOpts"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_aheNSQ" ref="viy2Panel_aheNSQ" :collapse="true" title="Payment Information" class="except-height-css">
      <VueForm
        id="viy2Form_aheNTm"
        ref="viy2Form_aheNTm"
        label-width="120px"
        :model="viy2Form_aheNTmData"
      >
        <VueRow
          id="viy2Row_aheNTH"
          ref="viy2Row_aheNTH"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="Type"
              prop="type"
              :rules="rules.viy2Radio_alInTORules"
            >
              <VueRadioGroup
                id="viy2Radio_alInTO"
                ref="viy2Radio_alInTO"
                v-model="viy2Form_aheNTmData.type"
              >
                <VueRadio
                  v-for="option in viy2Radio_alInTOOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadio>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Special Price"
              prop="specialPrice"
              :rules="rules.viy2InputBox_5kCAfORules"
            >
              <VueInput
                id="viy2InputBox_5kCAfO"
                ref="viy2InputBox_5kCAfO"
                v-model="viy2Form_aheNTmData.specialPrice"
                :readonly="true"
                text-align="right"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Discount Amount"
              prop="discountAmount"
            >
              <VueInput
                id="viy2InputBox_ambX8W"
                ref="viy2InputBox_ambX8W"
                v-model="viy2Form_aheNTmData.discountAmount"
                :readonly="true"
                text-align="right"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Amount"
              prop="amount"
            >
              <VueInput
                id="viy2InputBox_ambUC0"
                ref="viy2InputBox_ambUC0"
                v-model="viy2Form_aheNTmData.amount"
                :disabled="true"
                :readonly="true"
                text-align="right"
                class="no-border"
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
            >
              <VueSelect
                id="paymentMethod"
                ref="paymentMethod"
                v-model="viy2Form_aheNTmData.paymentMethod"
                :clearable="true"
                :filterable="true"
                :options="paymentMethodOpts"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
  </VueForm>
</template>
