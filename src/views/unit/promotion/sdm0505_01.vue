<script setup>
import { IconCloseBold, VueMessage, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import {
  model_column, model_pop_condition, model_pop_query_method, model_query_method,
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { genFileId } = VueUtil;
const today = new Date();
// 上传图片接收的文件类型
const acceptFileType = ['.jpg', '.png', '.jpeg', '.pdf'];
const uploadPanelModel = ref(true);
defineOptions({
  name: 'sdm0505_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const reset = ref();
const viy2Button_3w6kKc = ref();
const viy2Button_9ozQ7g = ref();
const viy2Button_9ozILM = ref();
const viy2Button_9ozFmY = ref();
const viy2Button_9ozDO2 = ref();
const viy2Button_9ozzea = ref();
const printReceipt = ref();
const resultForm = ref();
const headerPanel = ref();
const viy2Row_RdXMs = ref();
const viy2InputBox_Re31B = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_99De6 = ref();
const viy2Button_5dDWXF = ref();
const viy2CheckBox_fD49i = ref();
const viy2DateTimePicker_RedOe = ref();
const viy2DateTimePicker_Rergv = ref();
const viy2InputBox_8AHO1Q = ref();
const viy2InputBox_8AP5w6 = ref();
const viy2CheckBox_Rh6KZ = ref();
const viy2Panel_RhOM1 = ref();
const viy2Row_RdXM2 = ref();
const viy2InputBox_8ATGf8 = ref();
const viy2InputBox_8AUK5q = ref();
const viy2ValueList_12gOt12 = ref();
const viy2CheckBox_8ATGgf = ref();
const viy2InputBox_4tI9zk = ref();
const viy2CheckBox_4sTyeY = ref();
const viy2InputBox_4sPZlk = ref();
const viy2CheckBox_4tIBrS = ref();
const viy2InputBox_4t0vZG = ref();
const viy2CheckBox_4t1hN4 = ref();
const viy2InputBox_4t1uIm = ref();
const uploadPanel2 = ref();
const viy2Form_77kvRV = ref();
const viy2Row_77kvRW = ref();
const viy2Upload_77kvRX = ref();
const viy2ImageUpload_77lorN = ref();
const viy2ImageUpload_4uk4FI = ref();
const viy2ImageUpload_4ukDSC = ref();
const viy2ImageUpload_19brWvg = ref();
const viy2Row_19bg8Kh = ref();
const viy2ImageUpload_77lorQ = ref();
const viy2ImageUpload_19brWvc = ref();
const viy2ImageUpload_19brWwW = ref();
const viy2Row_7MDXeQ = ref();
const viy2InputBox_7MDXfb = ref();
const viy2InputBox_7MDXfy = ref();
const viy2InputBox_7MDXfL = ref();
const formData = reactive({
});
const resultFormData = reactive({
  promotion: '', pointvl: '', winner: [], dateFrom: '', datafieldviy2DateTimePicker_Rergv: '', orderNo: '', giftName: '700.000', document: ['Invoice', 'Gift Receipt', 'ID Card', 'Registration Card', 'Lucky Draw Voucher', 'Others'], customer: '', frameNo: '', model: '', status: ['Invoice Upload Status'], promotion: '3', one: false, GiftNmOne: '700000', two: false, GiftNmTwo: '700000', three: false, GiftNmThree: '700000',
});
const viy2Form_77kvRVData = reactive({
  invoiceNo: '00000544', invoiceLink: 'https://www.yammer.com/yamaha-motor.co.jp/', verCode: 'PVS1CWN759W',
});
const rules = reactive({
  viy2InputBox_Re31BRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2CheckBox_Rh6KZRules: [
    {
      type: 'array',
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_8ATGf8Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_8AUK5qRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2ValueList_12gOt12Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2CheckBox_8ATGgfRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2CheckBox_4sTyeYRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2CheckBox_4tIBrSRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2CheckBox_4t1hN4Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_7MDXfbRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_7MDXfyRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_7MDXfLRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2CheckBox_fD49iOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2CheckBox_Rh6KZOpts = [
  {
    label:
'Invoice',
    value:
'Invoice',
  },
  {
    label:
'Gift Receipt',
    value:
'Gift Receipt',
  },
  {
    label:
'ID Card',
    value:
'ID Card',
  },
  {
    label:
'Registration Card',
    value:
'Registration Card',
  },
  {
    label:
'Lucky Draw Voucher',
    value:
'Lucky Draw Voucher',
  },
  {
    label:
'Others',
    value:
'Others',
  },
];
const viy2ValueList_12gOt12PopoverQueryMethod = model_query_method;
const viy2ValueList_12gOt12PopupColumns = ref(model_column);
const viy2ValueList_12gOt12PopupQueryMethod = model_pop_query_method;
const viy2CheckBox_8ATGgfOpts = [
  {
    label:
'Invoice Upload Status',
    value:
'Invoice Upload Status',
  },
  {
    label:
'Gift Receipt Upload Status',
    value:
'Gift Receipt Upload Status',
  },
  {
    label:
'ID Card Upload Status',
    value:
'ID Card Upload Status',
  },
  {
    label:
'Registration Card Upload Status',
    value:
'Registration Card Upload Status',
  },
  {
    label:
'Others Upload Status',
    value:
'Others Upload Status',
  },
  {
    label:
'Lucky Draw Voucher Upload Status',
    value:
'Lucky Draw Voucher Upload Status',
  },
];
const viy2CheckBox_4sTyeYOpts = [
  {
    label:
'Invoice Upload Status',
    value:
'Invoice Upload Status',
  },
  {
    label:
'Gift Receipt Upload Status',
    value:
'Gift Receipt Upload Status',
  },
  {
    label:
'ID Card Upload Status',
    value:
'ID Card Upload Status',
  },
  {
    label:
'Registration Card Upload Status',
    value:
'Registration Card Upload Status',
  },
  {
    label:
'Others Upload Status',
    value:
'Others Upload Status',
  },
  {
    label:
'Lucky Draw Voucher Upload Status',
    value:
'Lucky Draw Voucher Upload Status',
  },
];
const viy2CheckBox_4tIBrSOpts = [
  {
    label:
'Invoice Upload Status',
    value:
'Invoice Upload Status',
  },
  {
    label:
'Gift Receipt Upload Status',
    value:
'Gift Receipt Upload Status',
  },
  {
    label:
'ID Card Upload Status',
    value:
'ID Card Upload Status',
  },
  {
    label:
'Registration Card Upload Status',
    value:
'Registration Card Upload Status',
  },
  {
    label:
'Others Upload Status',
    value:
'Others Upload Status',
  },
  {
    label:
'Lucky Draw Voucher Upload Status',
    value:
'Lucky Draw Voucher Upload Status',
  },
];
const viy2CheckBox_4t1hN4Opts = [
  {
    label:
'Invoice Upload Status',
    value:
'Invoice Upload Status',
  },
  {
    label:
'Gift Receipt Upload Status',
    value:
'Gift Receipt Upload Status',
  },
  {
    label:
'ID Card Upload Status',
    value:
'ID Card Upload Status',
  },
  {
    label:
'Registration Card Upload Status',
    value:
'Registration Card Upload Status',
  },
  {
    label:
'Others Upload Status',
    value:
'Others Upload Status',
  },
  {
    label:
'Lucky Draw Voucher Upload Status',
    value:
'Lucky Draw Voucher Upload Status',
  },
];
const viy2ValueList_12gOt1Select = (params) => {
  resultFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2ValueList_12gOt12Select = (params) => {
  resultFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt12PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_12gOt12PopupConditions = computed(() => {
  return model_pop_condition;
});
const viy2Upload_77kvRXOnPreview = (file) => {
  VueMessage.success({ message: 'Download file success' });
};
const viy2Upload_77kvRXSubmitUpload = () => {
  viy2Upload_77kvRX.value.submit();
};
// const handleExceed = (files) => {
// giftReceiptImg.value.clearFiles();
// const file = files[0];
// file.uid = genFileId();
// giftReceiptImg.value.handleStart(file);
// };
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
        :md="{ span: 8 }"
      >
        <VueButton id="reset" ref="reset" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 16 }"
      >
        <VueButton id="viy2Button_3w6kKc" ref="viy2Button_3w6kKc" icon-position="left" :disabled="true">
          SD Withdraw
        </VueButton>
        <VueButton id="viy2Button_9ozQ7g" ref="viy2Button_9ozQ7g" icon-position="left">
          SD Approve
        </VueButton>
        <VueButton id="viy2Button_9ozILM" ref="viy2Button_9ozILM" icon-position="left">
          SD Reject
        </VueButton>
        <VueButton id="viy2Button_9ozFmY" ref="viy2Button_9ozFmY" icon-position="left">
          ACCT Approve
        </VueButton>
        <VueButton id="viy2Button_9ozDO2" ref="viy2Button_9ozDO2" icon-position="left">
          ACCT Reject
        </VueButton>
        <VueButton id="viy2Button_9ozzea" ref="viy2Button_9ozzea" icon-position="left">
          Gift Receipt
        </VueButton>
        <VueButton id="printReceipt" ref="printReceipt" icon-position="left" type="info">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="resultForm"
      ref="resultForm"
      label-width="130px"
      class="margin-top-div"
      :model="resultFormData"
    >
      <VuePanel id="headerPanel" ref="headerPanel" title="Header">
        <VueRow
          id="viy2Row_RdXMs"
          ref="viy2Row_RdXMs"
        >
          <VueCol
            item-key="item"
            :md="{ span: 9 }"
          >
            <VueFormItem
              label="Promotion Name"
              prop="promotion"
              :rules="rules.viy2InputBox_Re31BRules"
            >
              <VueInput
                id="viy2InputBox_Re31B"
                ref="viy2InputBox_Re31B"
                v-model="resultFormData.promotion"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Point"
              prop="pointvl"
            >
              <VueValueList
                id="viy2ValueList_12gOt1"
                ref="viy2ValueList_12gOt1"
                v-model="resultFormData.pointvl"
                :style="{ width: '250px' }"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                :popover-width="500"
                :use-popup="true"
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
                      <VueText id="viy2Text_5dDWXE" ref="viy2Text_5dDWXE" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_5dDWXF" ref="viy2Button_5dDWXF" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 7 }"
          >
            <VueFormItem
              label="Winner"
              prop="winner"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_fD49i"
                ref="viy2CheckBox_fD49i"
                v-model="resultFormData.winner"
              >
                <VueCheckbox
                  v-for="option in viy2CheckBox_fD49iOpts"
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
            :inline="true"
            :md="{ span: 9 }"
          >
            <VueFormItem
              label="Period"
              prop="dateFrom"
            >
              <VueDatePicker
                id="viy2DateTimePicker_RedOe"
                ref="viy2DateTimePicker_RedOe"
                v-model="resultFormData.dateFrom"
                :style="{ width: '150px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <!-- BEGIN CUSTOM DIV CODE -->
            <span>-</span>
            <!-- END CUSTOM DIV CODE -->
            <VueFormItem
              label-width="1px"
              prop="datafieldviy2DateTimePicker_Rergv"
            >
              <VueDatePicker
                id="viy2DateTimePicker_Rergv"
                ref="viy2DateTimePicker_Rergv"
                v-model="resultFormData.datafieldviy2DateTimePicker_Rergv"
                :style="{ width: '150px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Order No."
              prop="orderNo"
            >
              <VueInput
                id="viy2InputBox_8AHO1Q"
                ref="viy2InputBox_8AHO1Q"
                v-model="resultFormData.orderNo"
                :disabled="true"
                :readonly="true"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              label="Gift Name"
              prop="giftName"
            >
              <VueInput
                id="viy2InputBox_8AP5w6"
                ref="viy2InputBox_8AP5w6"
                v-model="resultFormData.giftName"
                :disabled="true"
                :readonly="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="Required Document"
              label-width="150px"
              prop="document"
              :rules="rules.viy2CheckBox_Rh6KZRules"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_Rh6KZ"
                ref="viy2CheckBox_Rh6KZ"
                v-model="resultFormData.document"
              >
                <VueCheckbox
                  v-for="option in viy2CheckBox_Rh6KZOpts"
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
      </VuePanel>
      <VuePanel id="viy2Panel_RhOM1" ref="viy2Panel_RhOM1" :title="t('title.motocycleInfo')">
        <VueRow
          id="viy2Row_RdXM2"
          ref="viy2Row_RdXM2"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 9 }"
          >
            <VueFormItem
              label="Customer"
              prop="customer"
              :rules="rules.viy2InputBox_8ATGf8Rules"
            >
              <VueInput
                id="viy2InputBox_8ATGf8"
                ref="viy2InputBox_8ATGf8"
                v-model="resultFormData.customer"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Frame No"
              prop="frameNo"
              :rules="rules.viy2InputBox_8AUK5qRules"
            >
              <VueInput
                id="viy2InputBox_8AUK5q"
                ref="viy2InputBox_8AUK5q"
                v-model="resultFormData.frameNo"
                :disabled="true"
                :readonly="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 7 }"
          >
            <VueFormItem
              label="Model"
              prop="model"
              :rules="rules.viy2ValueList_12gOt12Rules"
            >
              <VueValueList
                id="viy2ValueList_12gOt12"
                ref="viy2ValueList_12gOt12"
                v-model="resultFormData.model"
                :style="{ width: '250px' }"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                :popover-width="500"
                :use-popup="true"
                :popover-columns="viy2ValueList_12gOt12PopoverColumns"
                :popover-query-method="viy2ValueList_12gOt12PopoverQueryMethod"
                :popup-columns="viy2ValueList_12gOt12PopupColumns"
                :popup-conditions="viy2ValueList_12gOt12PopupConditions"
                :popup-query-method="viy2ValueList_12gOt12PopupQueryMethod"
                @select="viy2ValueList_12gOt12Select"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="Upload Status"
              prop="status"
              :rules="rules.viy2CheckBox_8ATGgfRules"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_8ATGgf"
                ref="viy2CheckBox_8ATGgf"
                v-model="resultFormData.status"
              >
                <VueCheckbox
                  v-for="option in viy2CheckBox_8ATGgfOpts"
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
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="Gift Max"
              prop="promotion"
            >
              <VueInput
                id="viy2InputBox_4tI9zk"
                ref="viy2InputBox_4tI9zk"
                v-model="resultFormData.promotion"
                :readonly="true"
                :style="{ width: '140px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="40px"
              prop="one"
              :rules="rules.viy2CheckBox_4sTyeYRules"
            >
              <VueCheckbox
                id="viy2CheckBox_4sTyeY"
                ref="viy2CheckBox_4sTyeY"
                v-model="resultFormData.one"
              />
            </VueFormItem>
            <VueFormItem
              label="Gift Name1"
              label-width="85px"
              prop="GiftNmOne"
            >
              <VueInput
                id="viy2InputBox_4sPZlk"
                ref="viy2InputBox_4sPZlk"
                v-model="resultFormData.GiftNmOne"
                :style="{ width: '135px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="40px"
              prop="two"
              :rules="rules.viy2CheckBox_4tIBrSRules"
            >
              <VueCheckbox
                id="viy2CheckBox_4tIBrS"
                ref="viy2CheckBox_4tIBrS"
                v-model="resultFormData.two"
              />
            </VueFormItem>
            <VueFormItem
              label="Gift Name2"
              label-width="85px"
              prop="GiftNmTwo"
            >
              <VueInput
                id="viy2InputBox_4t0vZG"
                ref="viy2InputBox_4t0vZG"
                v-model="resultFormData.GiftNmTwo"
                :style="{ width: '135px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="40px"
              prop="three"
              :rules="rules.viy2CheckBox_4t1hN4Rules"
            >
              <VueCheckbox
                id="viy2CheckBox_4t1hN4"
                ref="viy2CheckBox_4t1hN4"
                v-model="resultFormData.three"
              />
            </VueFormItem>
            <VueFormItem
              label="Gift Name3"
              label-width="85px"
              prop="GiftNmThree"
            >
              <VueInput
                id="viy2InputBox_4t1uIm"
                ref="viy2InputBox_4t1uIm"
                v-model="resultFormData.GiftNmThree"
                :style="{ width: '135px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
      <VuePanel id="uploadPanel2" ref="uploadPanel2" title="Picture">
        <VueForm
          id="viy2Form_77kvRV"
          ref="viy2Form_77kvRV"
          label-width="120px"
          :model="viy2Form_77kvRVData"
        >
          <VueRow
            id="viy2Row_77kvRW"
            ref="viy2Row_77kvRW"
            :gutter="1"
          >
            <VueCol
              item-key="item"
              :md="{ span: 4 }"
            >
              <VueUpload id="viy2Upload_77kvRX" ref="viy2Upload_77kvRX" accept=".xml" :auto-upload="false" :commit-btn="false" :limit="1" :on-preview="viy2Upload_77kvRXOnPreview">
                <template #trigger>
                  <VueButton>
                    Upload Invoice
                  </VueButton>
                </template>
              </VueUpload>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 3 }"
            >
              <VueText id="viy2Text_77lorM" ref="viy2Text_77lorM" :style="{ textAlign: 'center', display: 'inline-block', fontWeight: 'bold' }">
                Gift Receipt1
              </VueText>
              <VueUpload
                id="viy2ImageUpload_77lorN"
                ref="viy2ImageUpload_77lorN"
                :auto-remove-fail="true"
                :accept="acceptFileType"
                :limit="3"
                :auto-upload="false"
                :multiple="true"
                list-type="picture-card"
              >
                <VueIcon><IconPlus /></VueIcon>
              </VueUpload>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 3 }"
            >
              <VueText id="viy2Text_4ug6Ni" ref="viy2Text_4ug6Ni" :style="{ textAlign: 'center', display: 'inline-block', fontWeight: 'bold' }">
                Gift Receipt2
              </VueText>
              <VueUpload
                id="viy2ImageUpload_4uk4FI"
                ref="viy2ImageUpload_4uk4FI"
                :auto-remove-fail="true"
                :accept="acceptFileType"
                :limit="3"
                :auto-upload="false"
                :multiple="true"
                list-type="picture-card"
              >
                <VueIcon><IconPlus /></VueIcon>
              </VueUpload>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 4 }"
            >
              <VueText id="viy2Text_4ugfiI" ref="viy2Text_4ugfiI" :style="{ textAlign: 'center', display: 'inline-block', fontWeight: 'bold' }">
                Gift Receipt3
              </VueText>
              <VueUpload
                id="viy2ImageUpload_4ukDSC"
                ref="viy2ImageUpload_4ukDSC"
                :auto-remove-fail="true"
                :accept="acceptFileType"
                :limit="3"
                :auto-upload="false"
                :multiple="true"
                list-type="picture-card"
              >
                <VueIcon><IconPlus /></VueIcon>
              </VueUpload>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 9 }"
            >
              <VueText id="viy2Text_19brWvf" ref="viy2Text_19brWvf" :style="{ textAlign: 'center', display: 'inline-block', fontWeight: 'bold' }">
                Others(max:3)
              </VueText>
              <VueUpload
                id="viy2ImageUpload_19brWvg"
                ref="viy2ImageUpload_19brWvg"
                :accept="acceptFileType"
                :limit="3"
                :auto-upload="false"
                :multiple="true"
                list-type="picture-card"
              >
                <VueIcon><IconPlus /></VueIcon>
              </VueUpload>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_19bg8Kh"
            ref="viy2Row_19bg8Kh"
            :gutter="15"
            class="margin-top-row"
          >
            <VueCol
              item-key="item"
              :md="{ span: 4 }"
            >
              <VueText id="viy2Text_77lorP" ref="viy2Text_77lorP" :style="{ textAlign: 'center', display: 'inline-block', fontWeight: 'bold' }">
                ID Card
              </VueText>
              <VueUpload
                id="viy2ImageUpload_77lorQ"
                ref="viy2ImageUpload_77lorQ"
                :accept="acceptFileType"
                :limit="1"
                :auto-upload="false"
                :multiple="false"
                list-type="picture-card"
              >
                <VueIcon><IconPlus /></VueIcon>
              </VueUpload>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :md="{ span: 4 }"
            >
              <VueText id="viy2Text_77los3" ref="viy2Text_77los3" :style="{ textAlign: 'center', display: 'inline-block', fontWeight: 'bold' }">
                Registration Card
              </VueText>
              <VueUpload
                id="viy2ImageUpload_19brWvc"
                ref="viy2ImageUpload_19brWvc"
                :accept="acceptFileType"
                :limit="1"
                :auto-upload="false"
                :multiple="false"
                list-type="picture-card"
              >
                <VueIcon><IconPlus /></VueIcon>
              </VueUpload>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :md="{ span: 4 }"
            >
              <VueText id="viy2Text_19brWwV" ref="viy2Text_19brWwV" :style="{ textAlign: 'center', display: 'inline-block', fontWeight: 'bold' }">
                Lucky Draw Voucher
              </VueText>
              <VueUpload
                id="viy2ImageUpload_19brWwW"
                ref="viy2ImageUpload_19brWwW"
                :accept="acceptFileType"
                :limit="1"
                :auto-upload="false"
                :multiple="false"
                list-type="picture-card"
              >
                <VueIcon><IconPlus /></VueIcon>
              </VueUpload>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_7MDXeQ"
            ref="viy2Row_7MDXeQ"
            :gutter="15"
            class="margin-top-row"
          >
            <VueCol
              item-key="item"
              :md="{ span: 7 }"
            >
              <VueFormItem
                label="Invoice No."
                prop="invoiceNo"
                :rules="rules.viy2InputBox_7MDXfbRules"
              >
                <VueInput
                  id="viy2InputBox_7MDXfb"
                  ref="viy2InputBox_7MDXfb"
                  v-model="viy2Form_77kvRVData.invoiceNo"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :md="{ span: 10 }"
            >
              <VueFormItem
                label="E-Invoice Link"
                prop="invoiceLink"
                :rules="rules.viy2InputBox_7MDXfyRules"
              >
                <VueInput
                  id="viy2InputBox_7MDXfy"
                  ref="viy2InputBox_7MDXfy"
                  v-model="viy2Form_77kvRVData.invoiceLink"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :md="{ span: 7 }"
            >
              <VueFormItem
                label="Verification Code"
                label-width="130px"
                prop="verCode"
                :rules="rules.viy2InputBox_7MDXfLRules"
              >
                <VueInput
                  id="viy2InputBox_7MDXfL"
                  ref="viy2InputBox_7MDXfL"
                  v-model="viy2Form_77kvRVData.verCode"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
    </VueForm>
  </VueForm>
</template>

<style type="text/css" scoped>
.margin-top-row {
margin-top: 10px;
}
</style>
