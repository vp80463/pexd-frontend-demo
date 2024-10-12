<script setup>
import { IconDocumentCopy, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const consumerPanelModel = ref(true);
const serviceHistPanelModel = ref(true);
defineOptions({
  name: 'svm0104_02',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const confirmBtn = ref();
const basicPanel = ref();
const baseForm = ref();
const viy2Row_a91tdU = ref();
const viy2InputBox_1DwBmTc = ref();
const viy2InputBox_8TWV7M = ref();
const quanlityStatus = ref();
const viy2InputBox_1DwBmTf = ref();
const viy2InputBox_8TYops = ref();
const stockStatus = ref();
const viy2InputBox_8uQs3Y = ref();
const viy2InputBox_8U3FWS = ref();
const salesStatus = ref();
const stuDate = ref();
const viy2InputBox_8U5LAC = ref();
const viy2InputBox_7UgOWG = ref();
const viy2InputBox_7Ukt46 = ref();
const consumerPanel = ref();
const viy2Row_wSiFH = ref();
const viy2Button_aaDugm = ref();
const viy2Button_aaNIac = ref();
const viy2Button_aaNG8e = ref();
const viy2Button_aaOwVC = ref();
const consumerGrid = ref();
const transHistPanel = ref();
const HistGrid = ref();
const viy2Row_5iUqiG = ref();
const serviceHistPanel = ref();
const viy2Row_wTkuS = ref();
const viy2Button_soXR9 = ref();
const serviceGrid = ref();
const serviceGridToolbar = ref();
const viy2Row_5iXqxv = ref();
const copy0_viy2Row_soVPC_col1 = ref();
const changeTypeAside = ref();
const titler2ow = ref();
const viy2Button_biDAR = ref();
const viy2Button_aZISX = ref();
const viy2Form_k49sf = ref();
const viy2Row_b3dIu = ref();
const basicPanel1 = ref();
const viy2Form_bp9qr = ref();
const viy2Row_bp9qs = ref();
const viy2InputBox_bp9qQ = ref();
const viy2InputBox_bp9qD = ref();
const viy2Radio_1aAXx = ref();
const viy2Panel_byg6g = ref();
const viy2Form_byg6C = ref();
const viy2Row_byg6D = ref();
const viy2InputBox_84ODIg = ref();
const viy2InputBox_84ODIt = ref();
const viy2InputBox_84ODIQ = ref();
const viy2Select_ALUg3S = ref();
const viy2Select_caVSc = ref();
const viy2Select_caTVI = ref();
const viy2InputBox_cbA7c = ref();
const viy2InputBox_cbGsI = ref();
const viy2Select_caYPU = ref();
const viy2InputBox_1RwBtY = ref();
const viy2InputBox_eKQ50 = ref();
const formData = reactive({
});
const baseFormData = reactive({
  frameNo: 'RLCUG1010LY272040', pointCd: 'YT350 Yamaha Town Nha Trang_DO 10', quanlityStatus: 'Normal', engineNo: 'G3D4E1043070', modelCd: '2NDC00010B EXCITER-2NDC RC', stockStatus: 'Shipped', plateNo: '1112222', color: '010B Trắng-Đỏ-Đen', salesStatus: 'Đã bán', stuDate: '', ctg: 'MP', battery1: '', battery2: '',
});
const viy2Form_k49sfData = reactive({
});
const viy2Form_bp9qrData = reactive({
  currentOwner: 'Dung Hung Ho', consumerName: 'Dung Hung Ho', relationType: 'Owner',
});
const viy2Form_byg6CData = reactive({
  fn: 'Ho', mn: 'Hung', ln: 'Dung', customerType: '', province: 'Tỉnh An Giang', city: 'Huyện Thoại Sơn', mobilePhone: '0901866628', telephone: '', gender: 'Nam', address: '', address1: '',
});
const rules = reactive({
  viy2InputBox_1DwBmTcRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1DwBmTfRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_8uQs3YRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_bp9qDRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Radio_1aAXxRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_84ODIgRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_ALUg3SRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_caVScRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_caTVIRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_cbA7cRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1RwBtYRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showChangeTypeWin = ref(false);
const viy2Radio_1aAXxOpts = reactive([
  { value: 'Owner', label: 'Owner' },
  { value: 'User', label: 'User' },
]);
const viy2Select_ALUg3SOpts = reactive([
  {
    label:
'KHÁCH HÀNG KHÔNG LẤY HĐ',
    value:
'KHÁCH HÀNG KHÔNG LẤY HĐ',
  },
  {
    label:
'',
    value:
'',
  },
  {
    label:
'',
    value:
'',
  },
]);
const viy2Select_caVScOpts = reactive([
  {
    label:
'Tỉnh An Giang',
    value:
'Tỉnh An Giang',
  },
  {
    label:
'District 2',
    value:
'District 2',
  },
  {
    label:
'District 3',
    value:
'District 3',
  },
]);
const viy2Select_caTVIOpts = reactive([
  {
    label:
'Huyện Thoại Sơn',
    value:
'Huyện Thoại Sơn',
  },
  {
    label:
'District 2',
    value:
'District 2',
  },
  {
    label:
'District 3',
    value:
'District 3',
  },
]);
const viy2Select_caYPUOpts = reactive([
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
const consumerGridEditConfig = reactive({
  trigger: 'click',
});
const consumerGridViy2TableButtonColumn_QHr8wButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocumentCopy,
    },
  ];
};
const HistGridEditConfig = reactive({
  trigger: 'click',
});
const serviceGridEditConfig = reactive({
  trigger: 'click',
});
const serviceGridViy2GridButtonColumn_10NhFoButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocumentCopy,
    },
  ];
};
const consumerDsApi = useApi({
  method: 'post',
  localData: [
    {
      position: 'P',
      relationType: 'Chủ sở hữu',
      consumerCd: '',
      consumerNm: 'Test Nha Trang',
      gender: 'Nữ',
      tel: '',
      mobile: '1520025200',
      address: '1 Tran Quy Cap',
    },
  ],
});
const consumerDs = consumerDsApi.data;
const serviceDsApi = useApi({
  method: 'post',
  localData: [
    { orderDate: '20240102', orderNo: 'SO2402A000001', serviceCtg: 'Bảo trì miễn phí', title: 'a', demand: 'Phiếu số 1' },
    { orderDate: '20240102', orderNo: 'SO2402A000001', serviceCtg: 'Bảo trì miễn phí', title: 'a', demand: 'Phiếu số 1' },
    { orderDate: '20240102', orderNo: 'SO2402A000001', serviceCtg: 'Bảo trì miễn phí', title: 'a', demand: 'Phiếu số 1' },
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
const serviceDs = serviceDsApi.data;
const historyDsApi = useApi({
  method: 'post',
  localData: [
    {
      point: 'YT350 Yamaha Town Nha Trang_DO 10',
      transType: 'Purchase Receipt',
      transDate: '20210428',
      transNo: '1M043026',
      fromloc: '666N',
      toloc: 'YT350',
      pic: 'ADMINSD',
    },
  ],
});
const historyDs = historyDsApi.data;
const viy2Button_aaNG8eClick = () => {
  showChangeTypeWin.value = true;
};
const consumerGridPositionEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const consumerGridRelationTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const consumerGridConsumerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const consumerGridGenderEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const consumerGridTelEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const consumerGridMobileEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const consumerGridAddressEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const HistGridPointEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const HistGridTransTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const HistGridTransDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const HistGridTransNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const HistGridFromlocEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const HistGridTolocEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const HistGridPicEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const serviceGridOrderDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const serviceGridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const serviceGridServiceCtgEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const serviceGridTitleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const serviceGridDemandEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_aZISXClick = () => {
  showChangeTypeWin.value = false;
};
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
});
const onDelRow = (row) => {
  queryFormData.gridHeight = gridHeight.value;
};
baseFormData.stuDate = new Date();
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
        <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="info">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="basicPanel" ref="basicPanel" :collapse="true" title="Basic Info" class="margin-top-div0 except-height-css">
      <VueForm
        id="baseForm"
        ref="baseForm"
        label-width="130px"
        label-suffix=":"
        :model="baseFormData"
      >
        <VueRow
          id="viy2Row_a91tdU"
          ref="viy2Row_a91tdU"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Frame No."
              prop="frameNo"
              :rules="rules.viy2InputBox_1DwBmTcRules"
            >
              <VueInput
                id="viy2InputBox_1DwBmTc"
                ref="viy2InputBox_1DwBmTc"
                v-model="baseFormData.frameNo"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Point"
              prop="pointCd"
            >
              <VueInput
                id="viy2InputBox_8TWV7M"
                ref="viy2InputBox_8TWV7M"
                v-model="baseFormData.pointCd"
                :readonly="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Quanlity Status"
              prop="quanlityStatus"
            >
              <VueInput
                id="quanlityStatus"
                ref="quanlityStatus"
                v-model="baseFormData.quanlityStatus"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Engine No."
              prop="engineNo"
              :rules="rules.viy2InputBox_1DwBmTfRules"
            >
              <VueInput
                id="viy2InputBox_1DwBmTf"
                ref="viy2InputBox_1DwBmTf"
                v-model="baseFormData.engineNo"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Model"
              prop="modelCd"
            >
              <VueInput
                id="viy2InputBox_8TYops"
                ref="viy2InputBox_8TYops"
                v-model="baseFormData.modelCd"
                :readonly="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Stock Status"
              prop="stockStatus"
            >
              <VueInput
                id="stockStatus"
                ref="stockStatus"
                v-model="baseFormData.stockStatus"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="No. Plate"
              prop="plateNo"
              :rules="rules.viy2InputBox_8uQs3YRules"
            >
              <VueInput
                id="viy2InputBox_8uQs3Y"
                ref="viy2InputBox_8uQs3Y"
                v-model="baseFormData.plateNo"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Color"
              prop="color"
            >
              <VueInput
                id="viy2InputBox_8U3FWS"
                ref="viy2InputBox_8U3FWS"
                v-model="baseFormData.color"
                :readonly="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Sales Status"
              prop="salesStatus"
            >
              <VueInput
                id="salesStatus"
                ref="salesStatus"
                v-model="baseFormData.salesStatus"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="STU Date"
              prop="stuDate"
            >
              <VueDatePicker
                id="stuDate"
                ref="stuDate"
                v-model="baseFormData.stuDate"
                type="date"
                :readonly="true"
                class="no-border"
                :style="{ width: '130px' }"
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
              label="Motorcycle Category"
              label-width="145px"
              prop="ctg"
            >
              <VueInput
                id="viy2InputBox_8U5LAC"
                ref="viy2InputBox_8U5LAC"
                v-model="baseFormData.ctg"
                :readonly="true"
                class="no-border"
                :style="{ width: '130px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Battery 1"
              prop="battery1"
            >
              <VueInput
                id="viy2InputBox_7UgOWG"
                ref="viy2InputBox_7UgOWG"
                v-model="baseFormData.battery1"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Battery 2"
              prop="battery2"
            >
              <VueInput
                id="viy2InputBox_7Ukt46"
                ref="viy2InputBox_7Ukt46"
                v-model="baseFormData.battery2"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="consumerPanel" ref="consumerPanel" v-model="consumerPanelModel" title="Consumer Info." :collapse="true">
      <template #header>
        <div style="width: 500px">
          <VueRow
            v-show="consumerPanelModel"
            id="viy2Row_wSiFH"
            ref="viy2Row_wSiFH"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_aaDugm" ref="viy2Button_aaDugm" icon-position="left">
                New Consumer
              </VueButton>
              <VueButton id="viy2Button_aaNIac" ref="viy2Button_aaNIac" icon-position="left">
                Add Consumer
              </VueButton>
              <VueButton id="viy2Button_aaNG8e" ref="viy2Button_aaNG8e" icon-position="left" @click="viy2Button_aaNG8eClick">
                Change Type
              </VueButton>
              <VueButton id="viy2Button_aaOwVC" ref="viy2Button_aaOwVC" icon-position="left">
                Download
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="consumerGrid" ref="consumerGrid" :stripe="true" header-align="center" :border="true" :highlight-current-row="true" :data="consumerDs" :edit-config="consumerGridEditConfig">
        <VueIndexColumn
          align="center"
          width="50px"
          min-width="50px"
        />
        <VueInputColumn
          :edit-render="consumerGridPositionEditRender"
          field="position"
          aggregate="sum"
          show-overflow="tooltip"
          align="center"
          title="P"
          width="50px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="consumerGridRelationTypeEditRender"
          field="relationType"
          aggregate="sum"
          title="Relation Type"
          width="130px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="consumerGridConsumerNmEditRender"
          field="consumerNm"
          aggregate="sum"
          title="Consumer"
          width="230px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="consumerGridGenderEditRender"
          field="gender"
          aggregate="sum"
          title="Gender"
          width="100px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="consumerGridTelEditRender"
          field="tel"
          aggregate="sum"
          title="Telephone"
          width="120px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="consumerGridMobileEditRender"
          field="mobile"
          aggregate="sum"
          title="Mobile Phone"
          width="120px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="consumerGridAddressEditRender"
          field="address"
          aggregate="sum"
          title="Address"
          width="200px"
          header-align="center"
        />
        <VueButtonColumn
          align="center"
          fixed="right"
          width="40px"
          header-align="center"
          :buttons="consumerGridViy2TableButtonColumn_QHr8wButtons"
        />
      </VueTable>
    </VuePanel>
    <VuePanel id="transHistPanel" ref="transHistPanel" title="Transaction History" :collapse="true">
      <VueTable id="HistGrid" ref="HistGrid" header-align="center" :data="historyDs" :edit-config="HistGridEditConfig">
        <VueRow
          id="viy2Row_5iUqiG"
          ref="viy2Row_5iUqiG"
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
          :edit-render="HistGridPointEditRender"
          field="point"
          aggregate="sum"
          show-overflow="tooltip"
          title="Point"
          width="230px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="HistGridTransTypeEditRender"
          field="transType"
          aggregate="sum"
          title="Transaction Type"
          width="160px"
          header-align="center"
        />
        <VueDateTimeColumn
          :edit-render="HistGridTransDateEditRender"
          field="transDate"
          align="center"
          title="Transaction Date"
          width="130px"
        />
        <VueInputColumn
          :edit-render="HistGridTransNoEditRender"
          field="transNo"
          aggregate="sum"
          title="Transaction No"
          width="200px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="HistGridFromlocEditRender"
          field="fromloc"
          aggregate="sum"
          title="From"
          width="130px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="HistGridTolocEditRender"
          field="toloc"
          aggregate="sum"
          title="To"
          width="130px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="HistGridPicEditRender"
          field="pic"
          aggregate="sum"
          title="P.I.C"
          width="150px"
          header-align="center"
        />
      </VueTable>
    </VuePanel>
    <VuePanel id="serviceHistPanel" ref="serviceHistPanel" v-model="serviceHistPanelModel" title="Service History" :collapse="true">
      <template #header>
        <div style="width: 300px">
          <VueRow
            v-show="serviceHistPanelModel"
            id="viy2Row_wTkuS"
            ref="viy2Row_wTkuS"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_soXR9" ref="viy2Button_soXR9" icon-position="left">
                New Service Order
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueToolbar id="serviceGridToolbar" ref="serviceGridToolbar" :connect-table="serviceGrid">
        <template #buttons>
          <VueRow
            id="viy2Row_5iXqxv"
            ref="viy2Row_5iXqxv"
            class="toolbar-row-width"
          >
            <VueCol
              id="copy0_viy2Row_soVPC_col1"
              ref="copy0_viy2Row_soVPC_col1"
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            />
          </VueRow>
        </template>
      </VueToolbar>
      <VueTable id="serviceGrid" ref="serviceGrid" header-align="center" height="300px" :data="serviceDs" :edit-config="serviceGridEditConfig">
        <VueRow
          id="viy2Row_5iXqxv"
          ref="viy2Row_5iXqxv"
          class="toolbar-row-width"
        >
          <VueCol
            id="copy0_viy2Row_soVPC_col1"
            ref="copy0_viy2Row_soVPC_col1"
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
        <VueDateTimeColumn
          :edit-render="serviceGridOrderDateEditRender"
          field="orderDate"
          align="center"
          title="Order Date"
          width="120px"
        />
        <VueInputColumn
          :edit-render="serviceGridOrderNoEditRender"
          field="orderNo"
          aggregate="sum"
          :sortable="true"
          title="Order No."
          width="200px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="serviceGridServiceCtgEditRender"
          field="serviceCtg"
          aggregate="sum"
          show-overflow="tooltip"
          :sortable="true"
          title="Service Category"
          width="220px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="serviceGridTitleEditRender"
          field="title"
          aggregate="sum"
          :sortable="true"
          title="Service Title"
          width="250"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="serviceGridDemandEditRender"
          field="demand"
          aggregate="sum"
          show-overflow="tooltip"
          :sortable="true"
          title="Service Demand"
          width="200px"
          header-align="center"
        />
        <VueButtonColumn
          fixed="right"
          align="center"
          width="40px"
          header-align="center"
          :buttons="serviceGridViy2GridButtonColumn_10NhFoButtons"
        />
      </VueTable>
      <!-- BEGIN CUSTOM DIV CODE -->
      <VueBacktop :right="50" :bottom="30" target=".app-main .vue-scrollbar__wrap" />
      <!-- END CUSTOM DIV CODE -->
    </VuePanel>
    <VueAside
      id="changeTypeAside"
      ref="changeTypeAside"
      v-model="showChangeTypeWin"
      :modal="true"
      size="40%"
      :with-header="false"
      :show-close="false"
    />
  </VueForm>
</template>
