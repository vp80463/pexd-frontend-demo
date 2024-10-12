<script setup>
import { IconCloseBold, IconUserFilled, VueMessageBox, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import { point_column, point_pop_condition, point_pop_query_method, point_query_method } from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const today = new Date();
// 上传图片接收的文件类型
const acceptFileType = ['.jpg', '.png', '.jpeg', '.pdf'];
const ownerInfoPanelModel = ref(true);
defineOptions({
  name: 'sdm0302_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const resetBtn = ref();
const printReceipt = ref();
const deliveryBtn = ref();
const orderForm = ref();
const headerPanel = ref();
const headerForm = ref();
const viy2Row_9c2DFU = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_99De6 = ref();
const viy2Button_5db5Pn = ref();
const viy2InputBox_aQ4M6p = ref();
const viy2DateTimePicker_15cSpc = ref();
const viy2InputBox_15cSpd = ref();
const viy2InputBox_aQ4M4K = ref();
const motorInfoPanel = ref();
const viy2Row_2rpgS = ref();
const viy2Form_aheR9M = ref();
const viy2Row_9c06FS = ref();
const frameNo = ref();
const engineNo = ref();
const viy2InputBox_QcboD = ref();
const colorName = ref();
const viy2InputBox_5FEtF6 = ref();
const viy2InputBox_8q2Tfm = ref();
const ownerInfoPanel = ref();
const viy2Row_2xv9o = ref();
const viy2Button_5N1tCV = ref();
const viy2Form_aeC43w = ref();
const viy2Row_9bXVQ2 = ref();
const viy2InputBox_9bXVQn = ref();
const viy2InputBox_9bXVQA = ref();
const viy2InputBox_9bXVQX = ref();
const viy2Button_1tVFkzM = ref();
const viy2InputBox_1tVFkBp = ref();
const viy2InputBox_1tVFkEG = ref();
const viy2InputBox_1tVFkGz = ref();
const viy2Radio_1tVFkMQ = ref();
const viy2DateTimePicker_1tVFkRI = ref();
const viy2InputBox_1tVFkTl = ref();
const viy2DateTimePicker_1tVFkWC = ref();
const viy2Radio_1tVFkYf = ref();
const viy2Upload_1tVFl1v = ref();
const viy2Select_1tVFl38 = ref();
const viy2Select_1tVFl9H = ref();
const viy2Row_1tVFlhS = ref();
const viy2InputBox_1tVFlgv = ref();
const viy2InputBox_1tVFlmM = ref();
const userInfoPanel = ref();
const userForm = ref();
const viy2Row_9c60rs = ref();
const viy2InputBox_9c60rN = ref();
const viy2InputBox_9c60sk = ref();
const viy2InputBox_9c60tv = ref();
const viy2Button_1tWY4OS = ref();
const viy2InputBox_1tWY4S7 = ref();
const viy2Radio_1tWY4X0 = ref();
const viy2DateTimePicker_1tWY51S = ref();
const viy2InputBox_1tWY53v = ref();
const viy2DateTimePicker_1tWY5a0 = ref();
const viy2Select_1tWY5df = ref();
const viy2Select_1tWY5rS = ref();
const consumerAside = ref();
const viy2Subpage_zYrI4 = ref();
const formData = reactive({
});
const orderFormData = reactive({
});
const headerFormData = reactive({
  pointvl: '', orderNo: 'SO2403A000005', salesDate: '', salesPic: 'ADMIN', gift: '',
});
const viy2Form_aheR9MData = reactive({
  frameNo: '', engineNo: '', modelCd: '', colorNm: '', battery1: '', battery2: '',
});
const viy2Form_aeC43wData = reactive({
  fn: '', mn: '', ln: '', mobile: '', cusTaxCode: '', sns: '', gender: 'Nữ', birthYear: '', age: '', birthDay: '', privacy: 'Consent', province: '', district: '', address: '', email: '',
});
const userFormData = reactive({
  fn1: '', mn1: '', ln1: '', mobile2: '', gender2: 'Nữ', birthYear2: '', age2: '', birthDay2: '', province2: 'Tỉnh An Giang', district2: 'Thành phố Bà Rịa',
});
const rules = reactive({
  viy2ValueList_12gOt1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_15cSpcRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  frameNoRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_9bXVQnRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1tVFkBpRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Radio_1tVFkMQRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1tVFkRIRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1tVFkWCRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Radio_1tVFkYfRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1tVFl38Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1tVFl9HRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1tVFlmMRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showConsumerWin = ref(false);
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2Radio_1tVFkMQOpts = reactive([
  { value: 'Nữ', label: 'Nữ' },
  { value: 'Nam', label: 'Nam' },
]);
const viy2Radio_1tVFkYfOpts = reactive([
  { value: 'Consent', label: 'Consent' },
  { value: 'Partially Agree', label: 'Partially Agree' },
]);
const viy2Select_1tVFl38Opts = reactive([
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
const viy2Select_1tVFl9HOpts = reactive([
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
const viy2Radio_1tWY4X0Opts = reactive([
  { value: 'Nữ', label: 'Nữ' },
  { value: 'Nam', label: 'Nam' },
]);
const viy2Select_1tWY5dfOpts = reactive([
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
const viy2Select_1tWY5rSOpts = reactive([
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
const nodeDataApi = useApi({
  method: 'post',
  localData: [
    {
      code: 'header',
      name: 'header',
      percentage: 0,
    },
    {
      code: 'motorInfo',
      name: 'motorInfo',
      percentage: 0,
    },
    {
      code: 'ownerInfo',
      name: 'ownerInfo',
      percentage: 0,
    },
    {
      code: 'userInfo',
      name: 'userInfo',
      percentage: 0,
    },
    {
      code: 'paymentInfo',
      name: 'paymentInfo',
      percentage: 0,
    },
  ],
});
const nodeData = nodeDataApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm('Are you sure to reset this page?')
    .then(() => {
      const filterFormElement = orderForm.value;
      if (filterFormElement && filterFormElement.resetFields) {
        filterFormElement.resetFields();
      }
    }).catch(() => {
    });
};
const viy2ValueList_12gOt1Select = (params) => {
  orderFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const frameNoChange = (value) => {
  onFrameNoInput(value);
};
const viy2Button_5N1tCVClick = () => {
  showConsumerWin.value = true;
};
const viy2Button_1tVFkzMClick = () => {
  orderFormData.fn = '';
  orderFormData.mn = '';
  orderFormData.ln = '';
  orderFormData.mobile = '';
};
const viy2DateTimePicker_1tVFkRIChange = (value) => {
  const age = today.getFullYear() - value.getFullYear();
  orderFormData.age = age;
};
const viy2Upload_1tVFl1vOnPreview = (file) => {
  VueMessage.success({ message: 'Download file success' });
};
const viy2Upload_1tVFl1vSubmitUpload = () => {
  viy2Upload_1tVFl1v.value.submit();
};
const viy2Button_1tWY4OSClick = () => {
  orderFormData.fn = '';
  orderFormData.mn = '';
  orderFormData.ln = '';
  orderFormData.mobile = '';
};
const viy2DateTimePicker_1tWY51SChange = (value) => {
  const age = today.getFullYear() - value.getFullYear();
  orderFormData.age2 = age;
};
// consumer侧边栏选择后
const callbakConsumerInfo = (param) => {
  orderFormData.fn = param.fn;
  orderFormData.mn = param.mn;
  orderFormData.ln = param.ln;
  orderFormData.mobile = param.mobile;
  showConsumerInfoWin.value = false;
};
const clsConsumerInfoAside = () => {
  showConsumerInfoWin.value = false;
};
// consumer侧边栏选择后
const callbkSelectConsumer = (param) => {
  const names = param.name.split(' ');
  orderFormData.fn = names[0];
  orderFormData.mn = names[1];
  orderFormData.ln = names[2];
  orderFormData.mobile = param.mobile;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
};
const onFrameNoInput = (value) => {
  if (value) {
    const result = {
      engineNo: 'E32VE-322700',
      modelCd: 'BGY500010A',
      modelNm: 'Sirius-BGY2',
      colorName: 'Đỏ Đen',
      sellingPrice: 19148148,
      taxRate: 10,
      taxAmt: 1740741,
    };
    orderFormData.engineNo = 'E32VE-322700';
    orderFormData.modelCd = 'BGY500010A';
    orderFormData.modelNm = 'Sirius-BGY2';
    orderFormData.colorNm = 'Đỏ Đen';
    orderFormData.sellingPrice = 19148148;
    orderFormData.taxRate = 10;
    orderFormData.taxAmt = 1740741;
    orderFormData.paymentMethod = '7';
  } else {
    const formElement = orderForm.value;
    if (formElement && formElement.resetFields) {
      formElement.resetFields();
    }
  }
};
headerFormData.salesDate = new Date();
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning" @click="resetBtnClick">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="printReceipt" ref="printReceipt" icon-position="left" class="fixed-button">
          Print Receipt
        </VueButton>
        <VueButton id="deliveryBtn" ref="deliveryBtn" icon-position="left" class="fixed-button">
          Delivery
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="orderForm"
      ref="orderForm"
      label-width="100px"
      label-suffix=":"
      label-position="right"
      class="margin-top-div"
      :model="orderFormData"
    >
      <VuePanel id="headerPanel" ref="headerPanel" title="Header" :collapse="true">
        <VueForm
          id="headerForm"
          ref="headerForm"
          label-width="120px"
          :model="headerFormData"
        >
          <VueRow
            id="viy2Row_9c2DFU"
            ref="viy2Row_9c2DFU"
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
                  :style="{ width: '250px' }"
                  :use-common-popover="true"
                  :use-common-popup="true"
                  aside-size="60%"
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
                      id="viy2Row_99De6"
                      ref="viy2Row_99De6"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_5db5Pm" ref="viy2Text_5db5Pm" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                        <VueButton id="viy2Button_5db5Pn" ref="viy2Button_5db5Pn" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
                label="Order No."
                prop="orderNo"
              >
                <VueInput
                  id="viy2InputBox_aQ4M6p"
                  ref="viy2InputBox_aQ4M6p"
                  v-model="headerFormData.orderNo"
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
                label="Sales Date"
                prop="salesDate"
                :rules="rules.viy2DateTimePicker_15cSpcRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_15cSpc"
                  ref="viy2DateTimePicker_15cSpc"
                  v-model="headerFormData.salesDate"
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
                label="Sales P.I.C"
                prop="salesPic"
              >
                <VueInput
                  id="viy2InputBox_15cSpd"
                  ref="viy2InputBox_15cSpd"
                  v-model="headerFormData.salesPic"
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
                label="Gift"
                prop="gift"
              >
                <VueInput
                  id="viy2InputBox_aQ4M4K"
                  ref="viy2InputBox_aQ4M4K"
                  v-model="headerFormData.gift"
                  type="text"
                  :clearable="true"
                  :style="{ width: '350px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="motorInfoPanel" ref="motorInfoPanel" title="Motocycle Info." :collapse="true" collapse-icon-position="left">
        <template #header>
          <div style="width: 300px">
            <VueRow
              id="viy2Row_2rpgS"
              ref="viy2Row_2rpgS"
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
          id="viy2Form_aheR9M"
          ref="viy2Form_aheR9M"
          label-width="120px"
          :model="viy2Form_aheR9MData"
        >
          <VueRow
            id="viy2Row_9c06FS"
            ref="viy2Row_9c06FS"
          >
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Frame No."
                prop="frameNo"
                :rules="rules.frameNoRules"
              >
                <VueInput
                  id="frameNo"
                  ref="frameNo"
                  v-model="viy2Form_aheR9MData.frameNo"
                  :clearable="true"
                  @change="frameNoChange"
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
                  id="engineNo"
                  ref="engineNo"
                  v-model="viy2Form_aheR9MData.engineNo"
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
                label="Model"
                prop="modelCd"
              >
                <VueInput
                  id="viy2InputBox_QcboD"
                  ref="viy2InputBox_QcboD"
                  v-model="viy2Form_aheR9MData.modelCd"
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
                label="Color Name"
                prop="colorNm"
              >
                <VueInput
                  id="colorName"
                  ref="colorName"
                  v-model="viy2Form_aheR9MData.colorNm"
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
                label="Battery1"
                prop="battery1"
              >
                <VueInput
                  id="viy2InputBox_5FEtF6"
                  ref="viy2InputBox_5FEtF6"
                  v-model="viy2Form_aheR9MData.battery1"
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
                label="Battery2"
                prop="battery2"
              >
                <VueInput
                  id="viy2InputBox_8q2Tfm"
                  ref="viy2InputBox_8q2Tfm"
                  v-model="viy2Form_aheR9MData.battery2"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="ownerInfoPanel" ref="ownerInfoPanel" v-model="ownerInfoPanelModel" title="Owner Info." :collapse="true" collapse-icon-position="left">
        <template #header>
          <div style="width: 300px">
            <VueRow
              v-show="ownerInfoPanelModel"
              id="viy2Row_2xv9o"
              ref="viy2Row_2xv9o"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueButton id="viy2Button_5N1tCV" ref="viy2Button_5N1tCV" icon-position="left" @click="viy2Button_5N1tCVClick">
                  Select Consumer
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueForm
          id="viy2Form_aeC43w"
          ref="viy2Form_aeC43w"
          label-width="130px"
          :model="viy2Form_aeC43wData"
        >
          <VueRow
            id="viy2Row_9bXVQ2"
            ref="viy2Row_9bXVQ2"
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
                :rules="rules.viy2InputBox_9bXVQnRules"
              >
                <VueInput
                  id="viy2InputBox_9bXVQn"
                  ref="viy2InputBox_9bXVQn"
                  v-model="viy2Form_aeC43wData.fn"
                  :clearable="true"
                  :style="{ width: '150px' }"
                />
              </VueFormItem>
              <VueFormItem
                label-width="2px"
                prop="mn"
              >
                <VueInput
                  id="viy2InputBox_9bXVQA"
                  ref="viy2InputBox_9bXVQA"
                  v-model="viy2Form_aeC43wData.mn"
                  :clearable="true"
                  :style="{ width: '150px' }"
                />
              </VueFormItem>
              <VueFormItem
                label-width="2px"
                prop="ln"
              >
                <VueInput
                  id="viy2InputBox_9bXVQX"
                  ref="viy2InputBox_9bXVQX"
                  v-model="viy2Form_aeC43wData.ln"
                  :clearable="true"
                  :style="{ width: '180px' }"
                >
                  <template #append>
                    <VueButton id="viy2Button_1tVFkzM" ref="viy2Button_1tVFkzM" icon-position="left" type="primary" class="icon-button-width" :icon="IconUserFilled" @click="viy2Button_1tVFkzMClick">
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
                prop="mobile"
                :rules="rules.viy2InputBox_1tVFkBpRules"
              >
                <VueInput
                  id="viy2InputBox_1tVFkBp"
                  ref="viy2InputBox_1tVFkBp"
                  v-model="viy2Form_aeC43wData.mobile"
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
                prop="cusTaxCode"
              >
                <VueInput
                  id="viy2InputBox_1tVFkEG"
                  ref="viy2InputBox_1tVFkEG"
                  v-model="viy2Form_aeC43wData.cusTaxCode"
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
                  id="viy2InputBox_1tVFkGz"
                  ref="viy2InputBox_1tVFkGz"
                  v-model="viy2Form_aeC43wData.sns"
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
                :rules="rules.viy2Radio_1tVFkMQRules"
              >
                <VueRadioGroup
                  id="viy2Radio_1tVFkMQ"
                  ref="viy2Radio_1tVFkMQ"
                  v-model="viy2Form_aeC43wData.gender"
                >
                  <VueRadio
                    v-for="option in viy2Radio_1tVFkMQOpts"
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
                prop="birthYear"
                :rules="rules.viy2DateTimePicker_1tVFkRIRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1tVFkRI"
                  ref="viy2DateTimePicker_1tVFkRI"
                  v-model="viy2Form_aeC43wData.birthYear"
                  type="year"
                  :style="{ width: '100px' }"
                  @change="viy2DateTimePicker_1tVFkRIChange"
                />
              </VueFormItem>
              <VueFormItem
                label="Age"
                label-width="35px"
                prop="age"
              >
                <VueInput
                  id="viy2InputBox_1tVFkTl"
                  ref="viy2InputBox_1tVFkTl"
                  v-model="viy2Form_aeC43wData.age"
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
                prop="birthDay"
                :rules="rules.viy2DateTimePicker_1tVFkWCRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1tVFkWC"
                  ref="viy2DateTimePicker_1tVFkWC"
                  v-model="viy2Form_aeC43wData.birthDay"
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
                :rules="rules.viy2Radio_1tVFkYfRules"
              >
                <VueRadioGroup
                  id="viy2Radio_1tVFkYf"
                  ref="viy2Radio_1tVFkYf"
                  v-model="viy2Form_aeC43wData.privacy"
                >
                  <VueRadio
                    v-for="option in viy2Radio_1tVFkYfOpts"
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
              <VueUpload id="viy2Upload_1tVFl1v" ref="viy2Upload_1tVFl1v" :accept="acceptFileType" :auto-upload="false" :commit-btn="false" :limit="1" :on-preview="viy2Upload_1tVFl1vOnPreview">
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
                :rules="rules.viy2Select_1tVFl38Rules"
              >
                <VueSelect
                  id="viy2Select_1tVFl38"
                  ref="viy2Select_1tVFl38"
                  v-model="viy2Form_aeC43wData.province"
                  :clearable="true"
                  :filterable="true"
                  :options="viy2Select_1tVFl38Opts"
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
                :rules="rules.viy2Select_1tVFl9HRules"
              >
                <VueSelect
                  id="viy2Select_1tVFl9H"
                  ref="viy2Select_1tVFl9H"
                  v-model="viy2Form_aeC43wData.district"
                  :clearable="true"
                  :filterable="true"
                  :options="viy2Select_1tVFl9HOpts"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_1tVFlhS"
            ref="viy2Row_1tVFlhS"
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
                  id="viy2InputBox_1tVFlgv"
                  ref="viy2InputBox_1tVFlgv"
                  v-model="viy2Form_aeC43wData.address"
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
                :rules="rules.viy2InputBox_1tVFlmMRules"
              >
                <VueInput
                  id="viy2InputBox_1tVFlmM"
                  ref="viy2InputBox_1tVFlmM"
                  v-model="viy2Form_aeC43wData.email"
                  :clearable="true"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="userInfoPanel" ref="userInfoPanel" title="User Info." :collapse="true">
        <VueForm
          id="userForm"
          ref="userForm"
          label-width="120px"
          :model="userFormData"
        >
          <VueRow
            id="viy2Row_9c60rs"
            ref="viy2Row_9c60rs"
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
                  id="viy2InputBox_9c60rN"
                  ref="viy2InputBox_9c60rN"
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
                  id="viy2InputBox_9c60sk"
                  ref="viy2InputBox_9c60sk"
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
                  id="viy2InputBox_9c60tv"
                  ref="viy2InputBox_9c60tv"
                  v-model="userFormData.ln1"
                  :clearable="true"
                  :style="{ width: '180px' }"
                >
                  <template #append>
                    <VueButton id="viy2Button_1tWY4OS" ref="viy2Button_1tWY4OS" icon-position="left" type="primary" class="icon-button-width" :icon="IconUserFilled" @click="viy2Button_1tWY4OSClick">
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
                  id="viy2InputBox_1tWY4S7"
                  ref="viy2InputBox_1tWY4S7"
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
                  id="viy2Radio_1tWY4X0"
                  ref="viy2Radio_1tWY4X0"
                  v-model="userFormData.gender2"
                >
                  <VueRadio
                    v-for="option in viy2Radio_1tWY4X0Opts"
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
                  id="viy2DateTimePicker_1tWY51S"
                  ref="viy2DateTimePicker_1tWY51S"
                  v-model="userFormData.birthYear2"
                  type="year"
                  :style="{ width: '100px' }"
                  @change="viy2DateTimePicker_1tWY51SChange"
                />
              </VueFormItem>
              <VueFormItem
                label="Age"
                label-width="35px"
                prop="age2"
              >
                <VueInput
                  id="viy2InputBox_1tWY53v"
                  ref="viy2InputBox_1tWY53v"
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
                  id="viy2DateTimePicker_1tWY5a0"
                  ref="viy2DateTimePicker_1tWY5a0"
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
                  id="viy2Select_1tWY5df"
                  ref="viy2Select_1tWY5df"
                  v-model="userFormData.province2"
                  :clearable="true"
                  :filterable="true"
                  :options="viy2Select_1tWY5dfOpts"
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
                  id="viy2Select_1tWY5rS"
                  ref="viy2Select_1tWY5rS"
                  v-model="userFormData.district2"
                  :clearable="true"
                  :filterable="true"
                  :options="viy2Select_1tWY5rSOpts"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
    </VueForm>
    <VueAside
      id="consumerAside"
      ref="consumerAside"
      v-model="showConsumerWin"
      :modal="true"
      direction="rtl"
      size="60%"
      :with-header="false"
      :show-close="false"
    />
  </VueForm>
</template>
