<script setup>
import { VueCheckbox, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
defineOptions({
  name: 'cmm0712_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const viy2Button_5AQ2Ks = ref();
const viy2Button_8vp41k = ref();
const viy2Panel_yH62g = ref();
const viy2Row_yH10Y = ref();
const viy2DateTimePicker_5oX13o = ref();
const viy2DateTimePicker_8ceyCW = ref();
const viy2DateTimePicker_8cgzzS = ref();
const viy2DateTimePicker_8cipGC = ref();
const viy2InputBox_OLfsL = ref();
const viy2CheckBox_hwbhC4 = ref();
const viy2InputNumber_OQI1I = ref();
const viy2Select_2HKuQg = ref();
const viy2Select_8cSFTK = ref();
const viy2Select_8dSnsg = ref();
const viy2Select_8cSVrs = ref();
const viy2Select_8cSoog = ref();
const viy2Select_8cYYWK = ref();
const viy2Select_8cZ9Xk = ref();
const viy2Panel_8aQah4 = ref();
const viy2Panel_8aSV2E = ref();
const viy2Row_8aSV2Q = ref();
const viy2InputNumber_8dsLpS = ref();
const viy2CheckBox_8ebrnM = ref();
const viy2CheckBox_8ec30m = ref();
const viy2InputNumber_8eizFy = ref();
const viy2InputNumber_8eiH1m = ref();
const viy2InputNumber_8emS2o = ref();
const viy2InputNumber_8enIHo = ref();
const viy2InputNumber_8enBP6 = ref();
const viy2InputNumber_8enAhW = ref();
const viy2InputNumber_8enxW8 = ref();
const formData = reactive({
  dailyDate: '20200917', monthlyDate: '20200831', financeMonth: '202009', collectDate: '20200917', settlementDate: '26', priceTaxIncluded: true, taxRate: 10, priceFormat: '18,0', costFormat: '18,2', amountFormat: '18,0', discountFormat: '18,2', quantityFormat: '18,0', language: 'English', printPageSize: 'A4', checkRate: 50, whetherNeedPackingProcess: [], stocktakingDisplayExpectQty: [], upper: 2, lower: 1, orderMonth: 3, deliveryMonth: 6, invoiceMonth: 3, receiptMonth: 2, miMonth: 2,
});
const rules = reactive({
  viy2InputBox_OLfsLRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_2HKuQgRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_8cSFTKRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_8dSnsgRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_8cSVrsRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_8cSoogRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_8cYYWKRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_8cZ9XkRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputNumber_8eizFyRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputNumber_8eiH1mRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputNumber_8emS2oRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputNumber_8enIHoRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputNumber_8enBP6Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputNumber_8enAhWRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputNumber_8enxW8Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2CheckBox_hwbhC4Opts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2Select_2HKuQgOpts = reactive([
  {
    label:
'18,0',
    value:
'18,0',
  },
  {
    label:
'18,1',
    value:
'18,1',
  },
  {
    label:
'18,2',
    value:
'18,2',
  },
  {
    label:
'18,3',
    value:
'18,3',
  },
  {
    label:
'18,4',
    value:
'18,4',
  },
]);
const viy2Select_8cSFTKOpts = reactive([
  {
    label:
'18,0',
    value:
'18,0',
  },
  {
    label:
'18,1',
    value:
'18,1',
  },
  {
    label:
'18,2',
    value:
'18,2',
  },
  {
    label:
'18,3',
    value:
'18,3',
  },
  {
    label:
'18,4',
    value:
'18,4',
  },
]);
const viy2Select_8dSnsgOpts = reactive([
  {
    label:
'18,0',
    value:
'18,0',
  },
  {
    label:
'18,1',
    value:
'18,1',
  },
  {
    label:
'18,2',
    value:
'18,2',
  },
  {
    label:
'18,3',
    value:
'18,3',
  },
  {
    label:
'18,4',
    value:
'18,4',
  },
]);
const viy2Select_8cSVrsOpts = reactive([
  {
    label:
'18,0',
    value:
'18,0',
  },
  {
    label:
'18,1',
    value:
'18,1',
  },
  {
    label:
'18,2',
    value:
'18,2',
  },
  {
    label:
'18,3',
    value:
'18,3',
  },
  {
    label:
'18,4',
    value:
'18,4',
  },
]);
const viy2Select_8cSoogOpts = reactive([
  {
    label:
'18,0',
    value:
'18,0',
  },
  {
    label:
'18,1',
    value:
'18,1',
  },
  {
    label:
'18,2',
    value:
'18,2',
  },
  {
    label:
'18,3',
    value:
'18,3',
  },
  {
    label:
'18,4',
    value:
'18,4',
  },
]);
const viy2Select_8cYYWKOpts = reactive([
  {
    label:
'Bahasa Indonesia',
    value:
'Bahasa Indonesia',
  },
  {
    label:
'English',
    value:
'English',
  },
  {
    label:
'Melayu',
    value:
'Melayu',
  },
  {
    label:
'Tiếng Việt',
    value:
'Tiếng Việt',
  },
  {
    label:
'ภาษาไทย',
    value:
'ภาษาไทย',
  },
  {
    label:
'日本語',
    value:
'日本語',
  },
  {
    label:
'简体中文',
    value:
'简体中文',
  },
  {
    label:
'繁體中文',
    value:
'繁體中文',
  },
  {
    label:
'한국어',
    value:
'한국어',
  },
]);
const viy2Select_8cZ9XkOpts = reactive([
  {
    label:
'Letter A4',
    value:
'Letter A4',
  },
  {
    label:
'A4',
    value:
'A4',
  },
]);
const viy2CheckBox_8ebrnMOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2CheckBox_8ec30mOpts = [
  {
    label:
'',
    value:
'',
  },
];
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      id: '1',
      name: 'Company',
      level: 0,
      flag1: 'Y',
      flag2: 'Y',
      flag3: 'N',
      flag4: 'Y',
      children: [
        {
          id: '1-1',
          name: 'Company',
          level: 1,
          flag1: 'N',
          flag2: false,
          flag3: '1',
          flag4: '1',
          children: [
            {
              id: '1-1-1',
              name: 'CMM0204_01 Company Info. Maintenance',
              level: 2,
              flag1: 'Y',
              flag2: 'N',
              flag3: 'N',
              flag4: 'Y',
              children: [],
            },
            {
              id: '1-1-2',
              name: 'CMM0205_01 Parts Info. Maintenance',
              level: 2,
              flag1: 'N',
              flag2: 'Y',
              flag3: 'N',
              flag4: 'Y',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Follow Up Action',
      level: 0,
      flag1: 'N',
      flag2: 'N',
      flag3: 'N',
      flag4: 'Y',
      children: [
        {
          id: '2-1',
          name: 'Follow Up Action',
          level: 1,
          flag1: 'Y',
          flag2: 'Y',
          flag3: 'Y',
          flag4: 'Y',
          children: [
            {
              id: '2-1-1',
              name: 'SVM0106_01 Remind List',
              level: 2,
              flag1: 'Y',
              flag2: 'N',
              flag3: 'N',
              flag4: 'N',
              children: [],
            },
          ],
        },
      ],
    },
  ]
  ,
});
const gridDs = gridDsApi.data;
const confirmDsApi = useApi({
  method: 'post',
  localData: [
    {
      id: '1',
      name: 'Company2222',
      level: 0,
      flag1: 'Y',
      flag2: true,
      flag3: '1',
      flag4: '0',
      children: [
        {
          id: '1-1',
          name: 'Company',
          level: 1,
          flag1: 'N',
          flag2: false,
          flag3: '1',
          flag4: '1',
          children: [
            {
              id: '1-1-1',
              name: 'CMM0204_01 Company Info. Maintenance',
              level: 2,
              flag1: '0',
              flag2: '1',
              flag3: '1',
              flag4: '0',
              children: [],
            },
            {
              id: '1-1-2',
              name: 'CMM0205_01 Parts Info. Maintenance',
              level: 2,
              flag1: '1',
              flag2: '0',
              flag3: '1',
              flag4: '1',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Follow Up Action',
      level: 0,
      flag1: true,
      flag2: '1',
      flag3: '1',
      flag4: '1',
      children: [
        {
          id: '2-1',
          name: 'Follow Up Action',
          level: 1,
          flag1: false,
          flag2: '1',
          flag3: '1',
          flag4: '0',
          children: [
            {
              id: '2-1-1',
              name: 'SVM0106_01 Remind List',
              level: 2,
              flag1: '0',
              flag2: '1',
              flag3: '1',
              flag4: '1',
              children: [],
            },
          ],
        },
      ],
    },
  ]
  ,
}, {
  onSuccess: (data, params) => {
    gridDs.value = data;
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
onMounted(() => {
  proxy.autoSetGridHeight();
});
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
        <VueButton id="viy2Button_5AQ2Ks" ref="viy2Button_5AQ2Ks" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_8vp41k" ref="viy2Button_8vp41k" icon-position="left" type="info">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_yH62g" ref="viy2Panel_yH62g" title="Common Configuration" class="margin-top-div0 except-height-css">
      <VueRow
        id="viy2Row_yH10Y"
        ref="viy2Row_yH10Y"
      >
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueText id="viy2Text_OHkEx" ref="viy2Text_OHkEx" :style="{ width: '100%', display: 'inline-block' }">
            Financial Date Configuration
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Last Daily Batch Date"
            label-width="175px"
            prop="dailyDate"
          >
            <VueDatePicker
              id="viy2DateTimePicker_5oX13o"
              ref="viy2DateTimePicker_5oX13o"
              v-model="formData.dailyDate"
              type="date"
              :readonly="true"
              class="no-border"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Last Monthly Batch Date"
            label-width="180px"
            prop="monthlyDate"
          >
            <VueDatePicker
              id="viy2DateTimePicker_8ceyCW"
              ref="viy2DateTimePicker_8ceyCW"
              v-model="formData.monthlyDate"
              type="date"
              :readonly="true"
              class="no-border"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Current Finance Month"
            label-width="170px"
            prop="financeMonth"
          >
            <VueDatePicker
              id="viy2DateTimePicker_8cgzzS"
              ref="viy2DateTimePicker_8cgzzS"
              v-model="formData.financeMonth"
              type="date"
              :readonly="true"
              class="no-border"
              :format="CONST_SYSTEM_DATE_FORMAT.ym"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Last MI Collect Date"
            label-width="175px"
            prop="collectDate"
          >
            <VueDatePicker
              id="viy2DateTimePicker_8cipGC"
              ref="viy2DateTimePicker_8cipGC"
              v-model="formData.collectDate"
              type="date"
              :readonly="true"
              class="no-border"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Financial Settlement Date"
            label-width="180px"
            prop="settlementDate"
            :rules="rules.viy2InputBox_OLfsLRules"
          >
            <VueInput
              id="viy2InputBox_OLfsL"
              ref="viy2InputBox_OLfsL"
              v-model="formData.settlementDate"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Price Tax Included"
            label-width="130px"
            prop="priceTaxIncluded"
          >
            <VueCheckboxGroup
              id="viy2CheckBox_hwbhC4"
              ref="viy2CheckBox_hwbhC4"
              v-model="formData.priceTaxIncluded"
            >
              <VueCheckbox
                v-for="option in viy2CheckBox_hwbhC4Opts"
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
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Tax Rate"
            prop="taxRate"
          >
            <VueInputNumber
              id="viy2InputNumber_OQI1I"
              ref="viy2InputNumber_OQI1I"
              v-model="formData.taxRate"
              :controls="false"
              :precision="2"
              text-align="right"
              width="100px"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueText id="viy2Text_8b12bO" ref="viy2Text_8b12bO" :style="{ width: '100%', display: 'inline-block' }">
            System Data Pattern Configuration
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Price Decimal Format"
            label-width="175px"
            prop="priceFormat"
            :rules="rules.viy2Select_2HKuQgRules"
          >
            <VueSelect
              id="viy2Select_2HKuQg"
              ref="viy2Select_2HKuQg"
              v-model="formData.priceFormat"
              :style="{ width: '120px' }"
              :options="viy2Select_2HKuQgOpts"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Cost Decimal Format"
            label-width="180px"
            prop="costFormat"
            :rules="rules.viy2Select_8cSFTKRules"
          >
            <VueSelect
              id="viy2Select_8cSFTK"
              ref="viy2Select_8cSFTK"
              v-model="formData.costFormat"
              :style="{ width: '120px' }"
              :options="viy2Select_8cSFTKOpts"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Amount Decimal Format"
            label-width="170px"
            prop="amountFormat"
            :rules="rules.viy2Select_8dSnsgRules"
          >
            <VueSelect
              id="viy2Select_8dSnsg"
              ref="viy2Select_8dSnsg"
              v-model="formData.amountFormat"
              :style="{ width: '120px' }"
              :options="viy2Select_8dSnsgOpts"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Discount Decimal Format"
            label-width="175px"
            prop="discountFormat"
            :rules="rules.viy2Select_8cSVrsRules"
          >
            <VueSelect
              id="viy2Select_8cSVrs"
              ref="viy2Select_8cSVrs"
              v-model="formData.discountFormat"
              :style="{ width: '120px' }"
              :options="viy2Select_8cSVrsOpts"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="Quantity Decimal Format"
            label-width="180px"
            prop="quantityFormat"
            :rules="rules.viy2Select_8cSoogRules"
          >
            <VueSelect
              id="viy2Select_8cSoog"
              ref="viy2Select_8cSoog"
              v-model="formData.quantityFormat"
              :style="{ width: '120px' }"
              :options="viy2Select_8cSoogOpts"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        />
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueText id="viy2Text_8bdGpU" ref="viy2Text_8bdGpU" :style="{ width: '100%', display: 'inline-block' }">
            Others
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Language"
            label-width="175px"
            prop="language"
            :rules="rules.viy2Select_8cYYWKRules"
          >
            <VueSelect
              id="viy2Select_8cYYWK"
              ref="viy2Select_8cYYWK"
              v-model="formData.language"
              :style="{ width: '120px' }"
              :options="viy2Select_8cYYWKOpts"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Print Page Size"
            label-width="180px"
            prop="printPageSize"
            :rules="rules.viy2Select_8cZ9XkRules"
          >
            <VueSelect
              id="viy2Select_8cZ9Xk"
              ref="viy2Select_8cZ9Xk"
              v-model="formData.printPageSize"
              :style="{ width: '120px' }"
              :options="viy2Select_8cZ9XkOpts"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VuePanel>
    <VuePanel id="viy2Panel_8aQah4" ref="viy2Panel_8aQah4" title="Goods Business" />
    <VuePanel id="viy2Panel_8aSV2E" ref="viy2Panel_8aSV2E" title="Spare Parts">
      <VueRow
        id="viy2Row_8aSV2Q"
        ref="viy2Row_8aSV2Q"
      >
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueText id="viy2Text_8dmTfk" ref="viy2Text_8dmTfk" :style="{ width: '100%', display: 'inline-block' }">
            Business Process Choose
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Suspend Check Rate(%)"
            label-width="180px"
            prop="checkRate"
          >
            <VueInputNumber
              id="viy2InputNumber_8dsLpS"
              ref="viy2InputNumber_8dsLpS"
              v-model="formData.checkRate"
              :controls="false"
              text-align="right"
              width="100px"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Whether Need Packing Process"
            label-width="215px"
            prop="whetherNeedPackingProcess"
          >
            <VueCheckboxGroup
              id="viy2CheckBox_8ebrnM"
              ref="viy2CheckBox_8ebrnM"
              v-model="formData.whetherNeedPackingProcess"
            >
              <VueCheckbox
                v-for="option in viy2CheckBox_8ebrnMOpts"
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
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Stocktaking Display Expect Qty"
            label-width="210px"
            prop="stocktakingDisplayExpectQty"
          >
            <VueCheckboxGroup
              id="viy2CheckBox_8ec30m"
              ref="viy2CheckBox_8ec30m"
              v-model="formData.stocktakingDisplayExpectQty"
            >
              <VueCheckbox
                v-for="option in viy2CheckBox_8ec30mOpts"
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
          :md="{ span: 24 }"
        >
          <VueText id="viy2Text_8dngDk" ref="viy2Text_8dngDk" :style="{ width: '100%', display: 'inline-block' }">
            MI Configuration
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Trend Index Upper(%) "
            label-width="180px"
            prop="upper"
            :rules="rules.viy2InputNumber_8eizFyRules"
          >
            <VueInputNumber
              id="viy2InputNumber_8eizFy"
              ref="viy2InputNumber_8eizFy"
              v-model="formData.upper"
              :controls="false"
              text-align="right"
              width="100px"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Trend Index Lower(%)"
            label-width="215px"
            prop="lower"
            :rules="rules.viy2InputNumber_8eiH1mRules"
          >
            <VueInputNumber
              id="viy2InputNumber_8eiH1m"
              ref="viy2InputNumber_8eiH1m"
              v-model="formData.lower"
              :controls="false"
              text-align="right"
              width="100px"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        />
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueText id="viy2Text_8dn5eo" ref="viy2Text_8dn5eo" :style="{ width: '100%', display: 'inline-block' }">
            History Business Data Keep Month
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Order History Data Keep Month"
            label-width="220px"
            prop="orderMonth"
            :rules="rules.viy2InputNumber_8emS2oRules"
          >
            <VueInputNumber
              id="viy2InputNumber_8emS2o"
              ref="viy2InputNumber_8emS2o"
              v-model="formData.orderMonth"
              :controls="false"
              text-align="right"
              width="100px"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Delivery History Data Keep Month"
            label-width="225px"
            prop="deliveryMonth"
            :rules="rules.viy2InputNumber_8enIHoRules"
          >
            <VueInputNumber
              id="viy2InputNumber_8enIHo"
              ref="viy2InputNumber_8enIHo"
              v-model="formData.deliveryMonth"
              :controls="false"
              text-align="right"
              width="100px"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Invoice History Data Keep Month"
            label-width="220px"
            prop="invoiceMonth"
            :rules="rules.viy2InputNumber_8enBP6Rules"
          >
            <VueInputNumber
              id="viy2InputNumber_8enBP6"
              ref="viy2InputNumber_8enBP6"
              v-model="formData.invoiceMonth"
              :controls="false"
              text-align="right"
              width="100px"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="Receipt History Data Keep Month"
            label-width="220px"
            prop="receiptMonth"
            :rules="rules.viy2InputNumber_8enAhWRules"
          >
            <VueInputNumber
              id="viy2InputNumber_8enAhW"
              ref="viy2InputNumber_8enAhW"
              v-model="formData.receiptMonth"
              :controls="false"
              text-align="right"
              width="100px"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 8 }"
        >
          <VueFormItem
            label="MI History Data Keep Month"
            label-width="225px"
            prop="miMonth"
            :rules="rules.viy2InputNumber_8enxW8Rules"
          >
            <VueInputNumber
              id="viy2InputNumber_8enxW8"
              ref="viy2InputNumber_8enxW8"
              v-model="formData.miMonth"
              :controls="false"
              text-align="right"
              width="100px"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VuePanel>
  </VueForm>
</template>
