<script setup>
import { IconCloseBold, IconUserFilled, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import {
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdm0307_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_ae0w6q = ref();
const viy2Button_adYx3S = ref();
const viy2Button_adYDdY = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_84heXb = ref();
const viy2Button_84heXn = ref();
const viy2DateTimePicker_11pHfP = ref();
const viy2InputBox_5k94Sg = ref();
const viy2InputBox_7voGcS = ref();
const viy2InputBox_7vqETG = ref();
const viy2Panel_oqx1Vg = ref();
const consumerForm = ref();
const viy2Row_xChMPR = ref();
const viy2InputBox_7vtFt6 = ref();
const viy2InputBox_5kCAfO = ref();
const viy2InputBox_RkdQAb = ref();
const viy2InputBox_7vzLcs = ref();
const viy2InputBox_7vCnBk = ref();
const viy2InputBox_aexI6I = ref();
const viy2Panel_aeC42Q = ref();
const viy2Row_zQgmS = ref();
const viy2Button_8IU4ww = ref();
const viy2Form_aeC43w = ref();
const viy2Row_ZG0l7 = ref();
const viy2InputBox_9aGNzq = ref();
const viy2InputBox_9aGNzD = ref();
const viy2InputBox_9aGNA0 = ref();
const viy2Button_9aGNA3 = ref();
const viy2InputBox_1tGnZOO = ref();
const viy2InputBox_1tGnZQt = ref();
const viy2InputBox_1tGnZTK = ref();
const viy2Radio_1tGnZVp = ref();
const viy2DateTimePicker_1tGnZX3 = ref();
const viy2InputBox_1tGnZYG = ref();
const viy2DateTimePicker_1tGo00l = ref();
const viy2Radio_1tGo01Y = ref();
const viy2Upload_1tGo03C = ref();
const viy2Select_1tGo05f = ref();
const viy2Select_1tGo08z = ref();
const viy2Row_Axv92 = ref();
const viy2InputBox_9aKdey = ref();
const viy2InputBox_9aKdf5 = ref();
const viy2Panel_agoygI = ref();
const viy2Form_agoyh4 = ref();
const viy2Row_agoyh5 = ref();
const viy2InputBox_9aki34 = ref();
const viy2InputBox_9akGd8 = ref();
const viy2InputBox_9akXOA = ref();
const viy2Button_9aRRFg = ref();
const viy2InputBox_1EDXxdC = ref();
const viy2Select_1EDXxvt = ref();
const viy2DateTimePicker_1EDXxDD = ref();
const viy2InputBox_1EDXxFg = ref();
const viy2DateTimePicker_1EDXxLG = ref();
const viy2Select_1EDXxNm = ref();
const viy2Select_1EDXxX8 = ref();
const viy2Panel_agMkd4 = ref();
const viy2Form_agMkdg = ref();
const viy2Row_agMkdr = ref();
const viy2InputBox_agMkdC = ref();
const viy2InputBox_agMkdZ = ref();
const viy2InputBox_1EHNgi6 = ref();
const viy2Select_11GQEk = ref();
const partsAside = ref();
const viy2Subpage_fInzM = ref();
const partsMultiAside = ref();
const viy2Subpage_OzNTu = ref();
const consumerAside = ref();
const viy2Subpage_BTeF1 = ref();
const formData = reactive({
});
const orderFormData = reactive({
  pointvl: 'YT350 Yamaha Town Nha Trang_DO 10', salesDate: '20240401', salesPic: 'ADMIN', orderNo: '666N', gift: 'A02011',
});
const consumerFormData = reactive({
  frameNo: 'HN/24T0021011', engineNo: '', model: '', colorName: '', BatteryIDOne: '', BatteryIDTwo: '',
});
const viy2Form_aeC43wData = reactive({
  fn: '', mn: '', ln: '', mobile: '', cusTaxCode: '', sns: '', gender: 'Nữ', birthYear: '', age: '', birthDay: '', privacy: 'Consent', province: '', district: '', address: '', email: '',
});
const viy2Form_agoyh4Data = reactive({
  fn1: '', mn1: '', ln1: '', mobile: '', gender: '', BirthYear: '', datafieldviy2InputBox_11B1oR: '', birthDate: '', province: '', district: '',
});
const viy2Form_agMkdgData = reactive({
  sellingPrice: '0', taxRate: '', taxAmt: '0', paymentMethod: '',
});
const rules = reactive({
  viy2ValueList_12gOt1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_7vtFt6Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_9aGNzqRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1tGnZOORules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Radio_1tGnZVpRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1tGnZX3Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1tGo00lRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Radio_1tGo01YRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1tGo05fRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1tGo08zRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_9aKdf5Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_agMkdCRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showPartsWin = ref(false);
const showPartsMultiWin = ref(false);
const showConsumerWin = ref(false);
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2Radio_1tGnZVpOpts = reactive([
  { value: 'Nữ', label: 'Nữ' },
  { value: 'Nam', label: 'Nam' },
]);
const viy2Radio_1tGo01YOpts = reactive([
  { value: 'Consent', label: 'Consent' },
  { value: 'Partially Agree', label: 'Partially Agree' },
]);
const viy2Select_1tGo05fOpts = reactive([
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
const viy2Select_1tGo08zOpts = reactive([
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
const viy2Select_1EDXxvtOpts = reactive([
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
]);
const viy2Select_1EDXxNmOpts = reactive([
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
]);
const viy2Select_1EDXxX8Opts = reactive([
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
]);
const viy2Select_11GQEkOpts = reactive([
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
]);
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      orderNo: 'N2402A0004',
      orderFlag: 'Y',
      parts1: '102253890000',
      parts1nm: 'oc tang xich',
      parts2: '2R2F53890091',
      parts2nm: 'oc tang xich',
      lines: 1000,
      qty: 1000,
      ymvnStock: 10,
      receiptAmount: 12345,
      sellingPrice: 987654.121212,
      amount: 12345,
      disAmt: 12345,
      errorLines: 10,
      specPrice: 1000,
      importDate: '20240328',
      groupNm: 'Local Factories',
      battery1: 'adddd',
    },
    {
      orderNo: 'N2402A0004',
      orderFlag: 'N',
      parts1: '102253890000',
      parts1nm: 'oc tang xich',
      parts2: '2R2F53890091',
      parts2nm: 'oc tang xich',
      supersed: '',
      onHandQty: 1000,
      qty: 1000,
      ymvnStock: 10,
      stdPrice: 12345,
      sellingPrice: 987654.121212,
      amount: 12345,
      disAmt: 12345,
      dis: 10,
      specPrice: 1000,
      location: 'loc-0101',
      groupNm: 'Local Factories',
      battery1: 'adddd',
    },
  ],
}, {
  initialData: [
    { id: '1', name: 'NameA', type: '1', description: 'DescriptionA' },
    { id: '2', name: 'NameB', type: '1', description: 'DescriptionB' },
    { id: '3', name: 'NameC', type: '2', description: 'DescriptionC' },
    { id: '4', name: 'NameD', type: '2', description: 'DescriptionD' },
    { id: '5', name: 'NameE', type: '2', description: 'DescriptionE' },
  ],
});
const gridDs = gridDsApi.data;
const viy2ValueList_12gOt1Select = (params) => {
  orderFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2Button_8IU4wwClick = () => {
  showConsumerWin.value = true;
};
const viy2Button_9aGNA3Click = () => {
  orderFormData.fn = '';
  orderFormData.mn = '';
  orderFormData.ln = '';
  orderFormData.mobile = '';
};
const viy2DateTimePicker_1tGnZX3Change = (value) => {
  const age = today.getFullYear() - value.getFullYear();
  orderFormData.age = age;
};
const viy2Upload_1tGo03COnPreview = (file) => {
  VueMessage.success({ message: 'Download file success' });
};
const viy2Upload_1tGo03CSubmitUpload = () => {
  viy2Upload_1tGo03C.value.submit();
};
const viy2Button_9aRRFgClick = () => {
  orderFormData.fn = '';
  orderFormData.mn = '';
  orderFormData.ln = '';
  orderFormData.mobile = '';
};
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
});
const onDelRow = (row) => {
  grid.value.remove(row);
};
const callbkSelectParts = (param) => {
  grid.value.getCurrentRecord().partsNo = param.partsNo;
  grid.value.getCurrentRecord().partsNm = param.partsNm;
  showPartsWin.value = false;
};
const closeAside = () => {
  showPartsWin.value = false;
};
// 部品多选回调
const multiPartsParams = () => {
  const existData = grid.value.getTableData().visibleData;
  const initData = [];
  existData.forEach((row) => {
    const newOne = {
      partsNo: row.partsNo,
      partsNm: row.partsNm,
    };
    initData.push(newOne);
  });
  return initData;
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
const callbkSelectConsumer = (param) => {
  consumerFormData.fn = param.name;
  consumerFormData.mobile = param.mobile;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
};
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning" class="fixed-button">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_ae0w6q" ref="viy2Button_ae0w6q" icon-position="left" type="primary" class="fixed-button">
          Save
        </VueButton>
        <VueButton id="viy2Button_adYx3S" ref="viy2Button_adYx3S" icon-position="left" type="primary" :disabled="true" class="fixed-button">
          Print Receipt
        </VueButton>
        <VueButton id="viy2Button_adYDdY" ref="viy2Button_adYDdY" icon-position="left" type="primary" :disabled="true" class="fixed-button">
          Delivery
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="Header" class="margin-top-div except-height-css">
      <VueForm
        id="orderForm"
        ref="orderForm"
        label-width="130px"
        :model="orderFormData"
      >
        <VueRow
          id="viy2Row_3mqzSt"
          ref="viy2Row_3mqzSt"
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
                :style="{ width: '250px' }"
                v-model="orderFormData.pointvl"
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
                    id="viy2Row_84heXb"
                    ref="viy2Row_84heXb"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_84heXc" ref="viy2Text_84heXc" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_84heXn" ref="viy2Button_84heXn" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
              label="Sales Date"
              prop="salesDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_11pHfP"
                ref="viy2DateTimePicker_11pHfP"
                v-model="orderFormData.salesDate"
                :readonly="true"
                :disabled="true"
                :style="{ width: '200px' }"
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
              label="Sales P.I.C"
              prop="salesPic"
            >
              <VueInput
                id="viy2InputBox_5k94Sg"
                ref="viy2InputBox_5k94Sg"
                v-model="orderFormData.salesPic"
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
              label="Order No."
              prop="orderNo"
            >
              <VueInput
                id="viy2InputBox_7voGcS"
                ref="viy2InputBox_7voGcS"
                v-model="orderFormData.orderNo"
                :clearable="false"
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
              label="Gift"
              prop="gift"
            >
              <VueInput
                id="viy2InputBox_7vqETG"
                ref="viy2InputBox_7vqETG"
                v-model="orderFormData.gift"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_oqx1Vg" ref="viy2Panel_oqx1Vg" :collapse="true" title="Motorcycle Info" class="except-height-css">
      <VueForm
        id="consumerForm"
        ref="consumerForm"
        label-width="130px"
        :model="consumerFormData"
      >
        <VueRow
          id="viy2Row_xChMPR"
          ref="viy2Row_xChMPR"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Frame No."
              prop="frameNo"
              :rules="rules.viy2InputBox_7vtFt6Rules"
            >
              <VueInput
                id="viy2InputBox_7vtFt6"
                ref="viy2InputBox_7vtFt6"
                v-model="consumerFormData.frameNo"
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
                id="viy2InputBox_5kCAfO"
                ref="viy2InputBox_5kCAfO"
                v-model="consumerFormData.engineNo"
                :disabled="true"
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
                id="viy2InputBox_RkdQAb"
                ref="viy2InputBox_RkdQAb"
                v-model="consumerFormData.model"
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
              label="Color Name"
              prop="colorName"
            >
              <VueInput
                id="viy2InputBox_7vzLcs"
                ref="viy2InputBox_7vzLcs"
                v-model="consumerFormData.colorName"
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
              label="Battery ID 1"
              prop="BatteryIDOne"
            >
              <VueInput
                id="viy2InputBox_7vCnBk"
                ref="viy2InputBox_7vCnBk"
                v-model="consumerFormData.BatteryIDOne"
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
              label="Battery ID 2"
              prop="BatteryIDTwo"
            >
              <VueInput
                id="viy2InputBox_aexI6I"
                ref="viy2InputBox_aexI6I"
                v-model="consumerFormData.BatteryIDTwo"
                :disabled="true"
                :readonly="true"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_aeC42Q" ref="viy2Panel_aeC42Q" :collapse="true" title="Owner Info" class="except-height-css">
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
              <VueButton id="viy2Button_8IU4ww" ref="viy2Button_8IU4ww" icon-position="left" @click="viy2Button_8IU4wwClick">
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
              :rules="rules.viy2InputBox_9aGNzqRules"
            >
              <VueInput
                id="viy2InputBox_9aGNzq"
                ref="viy2InputBox_9aGNzq"
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
                id="viy2InputBox_9aGNzD"
                ref="viy2InputBox_9aGNzD"
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
                id="viy2InputBox_9aGNA0"
                ref="viy2InputBox_9aGNA0"
                v-model="viy2Form_aeC43wData.ln"
                :clearable="true"
                :style="{ width: '180px' }"
              >
                <template #append>
                  <VueButton id="viy2Button_9aGNA3" ref="viy2Button_9aGNA3" icon-position="left" type="primary" class="icon-button-width" :icon="IconUserFilled" @click="viy2Button_9aGNA3Click">
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
              :rules="rules.viy2InputBox_1tGnZOORules"
            >
              <VueInput
                id="viy2InputBox_1tGnZOO"
                ref="viy2InputBox_1tGnZOO"
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
                id="viy2InputBox_1tGnZQt"
                ref="viy2InputBox_1tGnZQt"
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
                id="viy2InputBox_1tGnZTK"
                ref="viy2InputBox_1tGnZTK"
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
              :rules="rules.viy2Radio_1tGnZVpRules"
            >
              <VueRadioGroup
                id="viy2Radio_1tGnZVp"
                ref="viy2Radio_1tGnZVp"
                v-model="viy2Form_aeC43wData.gender"
              >
                <VueRadio
                  v-for="option in viy2Radio_1tGnZVpOpts"
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
              :rules="rules.viy2DateTimePicker_1tGnZX3Rules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1tGnZX3"
                ref="viy2DateTimePicker_1tGnZX3"
                v-model="viy2Form_aeC43wData.birthYear"
                type="year"
                :style="{ width: '100px' }"
                @change="viy2DateTimePicker_1tGnZX3Change"
              />
            </VueFormItem>
            <VueFormItem
              label="Age"
              label-width="35px"
              prop="age"
            >
              <VueInput
                id="viy2InputBox_1tGnZYG"
                ref="viy2InputBox_1tGnZYG"
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
              :rules="rules.viy2DateTimePicker_1tGo00lRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1tGo00l"
                ref="viy2DateTimePicker_1tGo00l"
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
              :rules="rules.viy2Radio_1tGo01YRules"
            >
              <VueRadioGroup
                id="viy2Radio_1tGo01Y"
                ref="viy2Radio_1tGo01Y"
                v-model="viy2Form_aeC43wData.privacy"
              >
                <VueRadio
                  v-for="option in viy2Radio_1tGo01YOpts"
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
            <VueUpload id="viy2Upload_1tGo03C" ref="viy2Upload_1tGo03C" :accept="acceptFileType" :auto-upload="false" :commit-btn="false" :limit="1" :on-preview="viy2Upload_1tGo03COnPreview">
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
              :rules="rules.viy2Select_1tGo05fRules"
            >
              <VueSelect
                id="viy2Select_1tGo05f"
                ref="viy2Select_1tGo05f"
                v-model="viy2Form_aeC43wData.province"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_1tGo05fOpts"
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
              :rules="rules.viy2Select_1tGo08zRules"
            >
              <VueSelect
                id="viy2Select_1tGo08z"
                ref="viy2Select_1tGo08z"
                v-model="viy2Form_aeC43wData.district"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_1tGo08zOpts"
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
                id="viy2InputBox_9aKdey"
                ref="viy2InputBox_9aKdey"
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
              :rules="rules.viy2InputBox_9aKdf5Rules"
            >
              <VueInput
                id="viy2InputBox_9aKdf5"
                ref="viy2InputBox_9aKdf5"
                v-model="viy2Form_aeC43wData.email"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_agoygI" ref="viy2Panel_agoygI" :collapse="true" title="User Info" class="except-height-css">
      <VueForm
        id="viy2Form_agoyh4"
        ref="viy2Form_agoyh4"
        label-width="130px"
        :model="viy2Form_agoyh4Data"
      >
        <VueRow
          id="viy2Row_agoyh5"
          ref="viy2Row_agoyh5"
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
                id="viy2InputBox_9aki34"
                ref="viy2InputBox_9aki34"
                v-model="viy2Form_agoyh4Data.fn1"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="mn1"
            >
              <VueInput
                id="viy2InputBox_9akGd8"
                ref="viy2InputBox_9akGd8"
                v-model="viy2Form_agoyh4Data.mn1"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="ln1"
            >
              <VueInput
                id="viy2InputBox_9akXOA"
                ref="viy2InputBox_9akXOA"
                v-model="viy2Form_agoyh4Data.ln1"
                :clearable="true"
                :style="{ width: '180px' }"
              >
                <template #append>
                  <VueButton id="viy2Button_9aRRFg" ref="viy2Button_9aRRFg" icon-position="left" type="primary" class="icon-button-width" :icon="IconUserFilled" @click="viy2Button_9aRRFgClick">
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
            >
              <VueInput
                id="viy2InputBox_1EDXxdC"
                ref="viy2InputBox_1EDXxdC"
                v-model="viy2Form_agoyh4Data.mobile"
                :style="{ width: '200px' }"
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
            >
              <VueSelect
                id="viy2Select_1EDXxvt"
                ref="viy2Select_1EDXxvt"
                v-model="viy2Form_agoyh4Data.gender"
                :style="{ width: '200px' }"
                :options="viy2Select_1EDXxvtOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Year Of Birth"
              prop="BirthYear"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1EDXxDD"
                ref="viy2DateTimePicker_1EDXxDD"
                v-model="viy2Form_agoyh4Data.BirthYear"
                :style="{ width: '100px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueFormItem
              label="age"
              label-width="35px"
              prop="datafieldviy2InputBox_11B1oR"
            >
              <VueInput
                id="viy2InputBox_1EDXxFg"
                ref="viy2InputBox_1EDXxFg"
                v-model="viy2Form_agoyh4Data.datafieldviy2InputBox_11B1oR"
                :readonly="true"
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
              prop="birthDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1EDXxLG"
                ref="viy2DateTimePicker_1EDXxLG"
                v-model="viy2Form_agoyh4Data.birthDate"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Province"
              prop="province"
            >
              <VueSelect
                id="viy2Select_1EDXxNm"
                ref="viy2Select_1EDXxNm"
                v-model="viy2Form_agoyh4Data.province"
                :style="{ width: '200px' }"
                :options="viy2Select_1EDXxNmOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="District"
              prop="district"
            >
              <VueSelect
                id="viy2Select_1EDXxX8"
                ref="viy2Select_1EDXxX8"
                v-model="viy2Form_agoyh4Data.district"
                :style="{ width: '200px' }"
                :options="viy2Select_1EDXxX8Opts"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_agMkd4" ref="viy2Panel_agMkd4" :collapse="true" title="Payment Information" class="except-height-css">
      <VueForm
        id="viy2Form_agMkdg"
        ref="viy2Form_agMkdg"
        label-width="130px"
        :model="viy2Form_agMkdgData"
      >
        <VueRow
          id="viy2Row_agMkdr"
          ref="viy2Row_agMkdr"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Selling Price"
              prop="sellingPrice"
              :rules="rules.viy2InputBox_agMkdCRules"
            >
              <VueInput
                id="viy2InputBox_agMkdC"
                ref="viy2InputBox_agMkdC"
                v-model="viy2Form_agMkdgData.sellingPrice"
                :disabled="true"
                :readonly="true"
                text-align="right"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Tax Rate"
              prop="taxRate"
            >
              <VueInput
                id="viy2InputBox_agMkdZ"
                ref="viy2InputBox_agMkdZ"
                v-model="viy2Form_agMkdgData.taxRate"
                :disabled="true"
                :readonly="true"
                text-align="right"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Tax Amount"
              prop="taxAmt"
            >
              <VueInput
                id="viy2InputBox_1EHNgi6"
                ref="viy2InputBox_1EHNgi6"
                v-model="viy2Form_agMkdgData.taxAmt"
                :disabled="true"
                :readonly="true"
                text-align="right"
                :style="{ width: '200px' }"
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
                id="viy2Select_11GQEk"
                ref="viy2Select_11GQEk"
                v-model="viy2Form_agMkdgData.paymentMethod"
                :style="{ width: '200px' }"
                :options="viy2Select_11GQEkOpts"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VueAside
      id="partsAside"
      ref="partsAside"
      v-model="showPartsWin"
      :modal="true"
      direction="rtl"
      size="70%"
      :with-header="false"
      :show-close="false"
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
    />
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
