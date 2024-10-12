<script setup>
import { IconUserFilled, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdm0306_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const viy2Button_ae0w6q = ref();
const viy2Button_adYx3S = ref();
const viy2Button_adYDdY = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_RfsMNE = ref();
const viy2InputBox_7voGcS = ref();
const viy2DateTimePicker_11pHfP = ref();
const viy2Select_12oMUN = ref();
const viy2InputBox_2z2b48 = ref();
const viy2InputBox_2z37cE = ref();
const viy2Panel_oqx1Vg = ref();
const consumerForm = ref();
const viy2Row_xChMPR = ref();
const viy2InputBox_7vtFt6 = ref();
const viy2InputBox_5kCAfO = ref();
const viy2InputBox_Sg7Ek = ref();
const viy2InputBox_7vzLcs = ref();
const viy2InputBox_7vCnBk = ref();
const viy2InputBox_aexI6I = ref();
const viy2Panel_aeC42Q = ref();
const viy2Form_aeC43w = ref();
const viy2Row_aeC43R = ref();
const viy2InputBox_aeC44w = ref();
const viy2InputBox_aeC45R = ref();
const viy2InputBox_2z9a1Q = ref();
const viy2InputBox_1Em8FDe = ref();
const viy2InputBox_1Em8FoF = ref();
const viy2InputBox_1Em8FQb = ref();
const viy2Select_11xwhT = ref();
const viy2InputBox_12uxXm = ref();
const viy2CheckBox_11vTKp = ref();
const viy2Upload_8I16Bv = ref();
const viy2DateTimePicker_11ALMG = ref();
const viy2InputBox_11B1oR = ref();
const viy2DateTimePicker_ag0EIU = ref();
const viy2Select_ag34d8 = ref();
const viy2Select_ag57Tq = ref();
const viy2InputBox_11BV1b = ref();
const viy2InputBox_ag9nrA = ref();
const viy2Panel_agoygI = ref();
const viy2Form_agoyh4 = ref();
const viy2Row_ZG34C = ref();
const viy2InputBox_9bdm1G = ref();
const viy2InputBox_9bdm1G1 = ref();
const viy2InputBox_9bdm1W = ref();
const viy2Button_9bdm1Z = ref();
const viy2InputBox_1tO9yiy = ref();
const viy2Radio_1tO9ykd = ref();
const viy2DateTimePicker_1tO9ylR = ref();
const viy2InputBox_1tO9ylS = ref();
const viy2DateTimePicker_1tO9ynx = ref();
const viy2Select_1tO9yny = ref();
const viy2Select_1tO9ypg = ref();
const viy2Panel_agMkd4 = ref();
const viy2Form_agMkdg = ref();
const viy2Row_agMkdr = ref();
const viy2InputBox_agMkdC = ref();
const viy2Select_11GQEk = ref();
const viy2InputBox_agMkdZ = ref();
const viy2InputBox_1EHNgi6 = ref();
const viy2InputBox_12qUOd = ref();
const partsAside = ref();
const viy2Subpage_fInzM = ref();
const partsMultiAside = ref();
const viy2Subpage_OzNTu = ref();
const consumerAside = ref();
const viy2Subpage_BTeF1 = ref();
const formData = reactive({
});
const orderFormData = reactive({
  pointNm: 'YT350 Yamaha Town Nha Trang_DO 10', orderNo: '', salesDate: '20240401', datafieldviy2Select_12oMUN: '', gift: '', pic: '',
});
const consumerFormData = reactive({
  frameNo: '', engineNo: '', model: '', colorName: '', BatteryIDOne: '', BatteryIDTwo: '',
});
const viy2Form_aeC43wData = reactive({
  customerLastName: '', midName: '', midName: '', mobile: '', cusTaxCd: '', sns: '', gender: '', datafieldviy2InputBox_12uxXm: '', privacyPolicyResult: [], BirthYear: '', datafieldviy2InputBox_11B1oR: '', birthDate: '', province: '', district: '', address: '', email: '',
});
const viy2Form_agoyh4Data = reactive({
  fn1: '', mn1: '', ln1: '', mobile2: '', gender2: 'Nữ', birthYear2: '', age2: '', birthDay2: '', province2: 'Tỉnh An Giang', district2: 'Thành phố Bà Rịa',
});
const viy2Form_agMkdgData = reactive({
  sellingPrice: '0', datafieldviy2Select_11GQEk: '', taxAmt: '', taxAmt: '0', purchaseType: '',
});
const rules = reactive({
  viy2InputBox_RfsMNERules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_11pHfPRules: [
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
  viy2InputBox_aeC44wRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1Em8FDeRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_11xwhTRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2CheckBox_11vTKpRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_11ALMGRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_ag34d8Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_ag57TqRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_ag9nrARules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showPartsWin = ref(false);
const showPartsMultiWin = ref(false);
const showConsumerWin = ref(false);
const viy2Select_12oMUNOpts = reactive([
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
const viy2Select_11xwhTOpts = reactive([
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
const viy2CheckBox_11vTKpOpts = [
  {
    label:
'Consent',
    value:
'Consent',
  },
  {
    label:
'Partially Agree ',
    value:
'Partially Agree ',
  },
];
const viy2Select_ag34d8Opts = reactive([
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
const viy2Select_ag57TqOpts = reactive([
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
const viy2Radio_1tO9ykdOpts = reactive([
  { value: 'Nữ', label: 'Nữ' },
  { value: 'Nam', label: 'Nam' },
]);
const viy2Select_1tO9ynyOpts = reactive([
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
const viy2Select_1tO9ypgOpts = reactive([
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
const viy2Upload_8I16BvOnPreview = (file) => {
  VueMessage.success({ message: 'Download file success' });
};
const viy2Upload_8I16BvSubmitUpload = () => {
  viy2Upload_8I16Bv.value.submit();
};
const viy2Button_9bdm1ZClick = () => {
  orderFormData.fn = '';
  orderFormData.mn = '';
  orderFormData.ln = '';
  orderFormData.mobile = '';
};
const viy2DateTimePicker_1tO9ylRChange = (value) => {
  const age = today.getFullYear() - value.getFullYear();
  orderFormData.age2 = age;
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
      />
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_ae0w6q" ref="viy2Button_ae0w6q" icon-position="left" type="info">
          Save
        </VueButton>
        <VueButton id="viy2Button_adYx3S" ref="viy2Button_adYx3S" icon-position="left" :disabled="true">
          Print Receipt
        </VueButton>
        <VueButton id="viy2Button_adYDdY" ref="viy2Button_adYDdY" icon-position="left" :disabled="true">
          Delivery
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="Header" class="margin-top-div except-height-css">
      <VueForm
        id="orderForm"
        ref="orderForm"
        label-width="125px"
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
              prop="pointNm"
              :rules="rules.viy2InputBox_RfsMNERules"
            >
              <VueInput
                id="viy2InputBox_RfsMNE"
                ref="viy2InputBox_RfsMNE"
                v-model="orderFormData.pointNm"
                :clearable="false"
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
                id="viy2InputBox_7voGcS"
                ref="viy2InputBox_7voGcS"
                v-model="orderFormData.orderNo"
                :clearable="false"
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
              label="Sales Date"
              prop="salesDate"
              :rules="rules.viy2DateTimePicker_11pHfPRules"
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
              label="Order Status"
              prop="datafieldviy2Select_12oMUN"
            >
              <VueSelect
                id="viy2Select_12oMUN"
                ref="viy2Select_12oMUN"
                v-model="orderFormData.datafieldviy2Select_12oMUN"
                :style="{ width: '200px' }"
                :disabled="true"
                :options="viy2Select_12oMUNOpts"
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
                id="viy2InputBox_2z2b48"
                ref="viy2InputBox_2z2b48"
                v-model="orderFormData.gift"
                :clearable="false"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Sales P.I.C"
              prop="pic"
            >
              <VueInput
                id="viy2InputBox_2z37cE"
                ref="viy2InputBox_2z37cE"
                v-model="orderFormData.pic"
                :clearable="false"
                :disabled="true"
                :readonly="true"
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
        label-width="125px"
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
                id="viy2InputBox_Sg7Ek"
                ref="viy2InputBox_Sg7Ek"
                v-model="consumerFormData.model"
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
                id="viy2InputBox_7vzLcs"
                ref="viy2InputBox_7vzLcs"
                v-model="consumerFormData.colorName"
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
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_aeC42Q" ref="viy2Panel_aeC42Q" :collapse="true" title="Owner Info" class="except-height-css">
      <VueForm
        id="viy2Form_aeC43w"
        ref="viy2Form_aeC43w"
        label-width="125px"
        :model="viy2Form_aeC43wData"
      >
        <VueRow
          id="viy2Row_aeC43R"
          ref="viy2Row_aeC43R"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Customer Name"
              prop="customerLastName"
              :rules="rules.viy2InputBox_aeC44wRules"
            >
              <VueInput
                id="viy2InputBox_aeC44w"
                ref="viy2InputBox_aeC44w"
                v-model="viy2Form_aeC43wData.customerLastName"
                :disabled="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="midName"
            >
              <VueInput
                id="viy2InputBox_aeC45R"
                ref="viy2InputBox_aeC45R"
                v-model="viy2Form_aeC43wData.midName"
                :disabled="true"
                :style="{ width: '140px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="midName"
            >
              <VueInput
                id="viy2InputBox_2z9a1Q"
                ref="viy2InputBox_2z9a1Q"
                v-model="viy2Form_aeC43wData.midName"
                :disabled="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Mobile"
              prop="mobile"
              :rules="rules.viy2InputBox_1Em8FDeRules"
            >
              <VueInput
                id="viy2InputBox_1Em8FDe"
                ref="viy2InputBox_1Em8FDe"
                v-model="viy2Form_aeC43wData.mobile"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Cus Tax Code "
              prop="cusTaxCd "
            >
              <VueInput
                id="viy2InputBox_1Em8FoF"
                ref="viy2InputBox_1Em8FoF"
                v-model="viy2Form_aeC43wData.cusTaxCd "
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
                id="viy2InputBox_1Em8FQb"
                ref="viy2InputBox_1Em8FQb"
                v-model="viy2Form_aeC43wData.sns"
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
              :rules="rules.viy2Select_11xwhTRules"
            >
              <VueSelect
                id="viy2Select_11xwhT"
                ref="viy2Select_11xwhT"
                v-model="viy2Form_aeC43wData.gender"
                :options="viy2Select_11xwhTOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Employee"
              prop="datafieldviy2InputBox_12uxXm"
            >
              <VueInput
                id="viy2InputBox_12uxXm"
                ref="viy2InputBox_12uxXm"
                v-model="viy2Form_aeC43wData.datafieldviy2InputBox_12uxXm"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Privacy Policy Result"
              label-width="145px"
              prop="privacyPolicyResult"
              :rules="rules.viy2CheckBox_11vTKpRules"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_11vTKp"
                ref="viy2CheckBox_11vTKp"
                v-model="viy2Form_aeC43wData.privacyPolicyResult"
              >
                <VueCheckbox
                  v-for="option in viy2CheckBox_11vTKpOpts"
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
            :md="{ span: 16 }"
          >
            <VueUpload id="viy2Upload_8I16Bv" ref="viy2Upload_8I16Bv" :accept="acceptFileType" :auto-upload="false" :commit-btn="false" :limit="1" :on-preview="viy2Upload_8I16BvOnPreview">
              <template #trigger>
                <VueButton>
                  Upload Privacy
                </VueButton>
              </template>
            </VueUpload>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Year Of Birth"
              prop="BirthYear"
              :rules="rules.viy2DateTimePicker_11ALMGRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_11ALMG"
                ref="viy2DateTimePicker_11ALMG"
                v-model="viy2Form_aeC43wData.BirthYear"
                type="year"
                :style="{ width: '100px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="Age"
              label-width="35px"
              prop="datafieldviy2InputBox_11B1oR"
            >
              <VueInput
                id="viy2InputBox_11B1oR"
                ref="viy2InputBox_11B1oR"
                v-model="viy2Form_aeC43wData.datafieldviy2InputBox_11B1oR"
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
              prop="birthDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_ag0EIU"
                ref="viy2DateTimePicker_ag0EIU"
                v-model="viy2Form_aeC43wData.birthDate"
                :style="{ width: '130px' }"
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
              prop="province"
              :rules="rules.viy2Select_ag34d8Rules"
            >
              <VueSelect
                id="viy2Select_ag34d8"
                ref="viy2Select_ag34d8"
                v-model="viy2Form_aeC43wData.province"
                :options="viy2Select_ag34d8Opts"
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
              :rules="rules.viy2Select_ag57TqRules"
            >
              <VueSelect
                id="viy2Select_ag57Tq"
                ref="viy2Select_ag57Tq"
                v-model="viy2Form_aeC43wData.district"
                :options="viy2Select_ag57TqOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Address"
              prop="address"
            >
              <VueInput
                id="viy2InputBox_11BV1b"
                ref="viy2InputBox_11BV1b"
                v-model="viy2Form_aeC43wData.address"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Email"
              prop="email"
              :rules="rules.viy2InputBox_ag9nrARules"
            >
              <VueInput
                id="viy2InputBox_ag9nrA"
                ref="viy2InputBox_ag9nrA"
                v-model="viy2Form_aeC43wData.email"
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
    <VuePanel id="viy2Panel_agoygI" ref="viy2Panel_agoygI" :collapse="true" title="User Info" class="except-height-css">
      <VueForm
        id="viy2Form_agoyh4"
        ref="viy2Form_agoyh4"
        label-width="125px"
        :model="viy2Form_agoyh4Data"
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
                id="viy2InputBox_9bdm1G"
                ref="viy2InputBox_9bdm1G"
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
                id="viy2InputBox_9bdm1G1"
                ref="viy2InputBox_9bdm1G1"
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
                id="viy2InputBox_9bdm1W"
                ref="viy2InputBox_9bdm1W"
                v-model="viy2Form_agoyh4Data.ln1"
                :clearable="true"
                :style="{ width: '180px' }"
              >
                <template #append>
                  <VueButton id="viy2Button_9bdm1Z" ref="viy2Button_9bdm1Z" icon-position="left" type="primary" class="icon-button-width" :icon="IconUserFilled" @click="viy2Button_9bdm1ZClick">
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
                id="viy2InputBox_1tO9yiy"
                ref="viy2InputBox_1tO9yiy"
                v-model="viy2Form_agoyh4Data.mobile2"
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
                id="viy2Radio_1tO9ykd"
                ref="viy2Radio_1tO9ykd"
                v-model="viy2Form_agoyh4Data.gender2"
              >
                <VueRadio
                  v-for="option in viy2Radio_1tO9ykdOpts"
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
                id="viy2DateTimePicker_1tO9ylR"
                ref="viy2DateTimePicker_1tO9ylR"
                v-model="viy2Form_agoyh4Data.birthYear2"
                type="year"
                :style="{ width: '100px' }"
                @change="viy2DateTimePicker_1tO9ylRChange"
              />
            </VueFormItem>
            <VueFormItem
              label="Age"
              label-width="35px"
              prop="age2"
            >
              <VueInput
                id="viy2InputBox_1tO9ylS"
                ref="viy2InputBox_1tO9ylS"
                v-model="viy2Form_agoyh4Data.age2"
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
                id="viy2DateTimePicker_1tO9ynx"
                ref="viy2DateTimePicker_1tO9ynx"
                v-model="viy2Form_agoyh4Data.birthDay2"
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
                id="viy2Select_1tO9yny"
                ref="viy2Select_1tO9yny"
                v-model="viy2Form_agoyh4Data.province2"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_1tO9ynyOpts"
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
                id="viy2Select_1tO9ypg"
                ref="viy2Select_1tO9ypg"
                v-model="viy2Form_agoyh4Data.district2"
                :clearable="true"
                :filterable="true"
                :options="viy2Select_1tO9ypgOpts"
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
        label-width="125px"
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
              label="Payment Method"
              prop="datafieldviy2Select_11GQEk"
            >
              <VueSelect
                id="viy2Select_11GQEk"
                ref="viy2Select_11GQEk"
                v-model="viy2Form_agMkdgData.datafieldviy2Select_11GQEk"
                :options="viy2Select_11GQEkOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Tax Rate"
              prop="taxAmt"
            >
              <VueInput
                id="viy2InputBox_agMkdZ"
                ref="viy2InputBox_agMkdZ"
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
              label="Purchase Type"
              prop="purchaseType"
            >
              <VueInput
                id="viy2InputBox_12qUOd"
                ref="viy2InputBox_12qUOd"
                v-model="viy2Form_agMkdgData.purchaseType"
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
