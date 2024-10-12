<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { formatPartNo, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const siteId = ref();
const nowPartsCode = ref();
defineOptions({
  name: 'cmq0501_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const viy2Button_dZW0Q = ref();
const resetBtn = ref();
const viy2Panel_E6XQ4 = ref();
const viy2Row_xChMPR = ref();
const queryForm = ref();
const viy2ValueList_hNGbc5 = ref();
const viy2Row_azCfRZ = ref();
const viy2Panel_2rs6nZ = ref();
const viy2Row_y04IG = ref();
const viy2InputBox_5k94Sg = ref();
const viy2DateTimePicker_5k94S8 = ref();
const viy2InputBox_5uSpPA = ref();
const viy2InputBox_6BXBos = ref();
const viy2Row_y07lo = ref();
const viy2InputBox_5uL5Zm = ref();
const viy2InputBox_5uL5bG = ref();
const viy2InputBox_5uL4NE = ref();
const viy2InputBox_5uL43m = ref();
const viy2Row_y08tg = ref();
const viy2InputBox_5uL33q = ref();
const viy2InputBox_5uL1D2 = ref();
const viy2InputBox_5uL0oA = ref();
const viy2InputNumber_5vE9ZA = ref();
const viy2Row_y09bz = ref();
const viy2InputNumber_8dxUim = ref();
const viy2InputNumber_5vCkGY = ref();
const viy2InputNumber_8dyC6a = ref();
const viy2InputNumber_8dzGTA = ref();
const viy2Row_y6EkQ = ref();
const viy2Radio_y86KM = ref();
const viy2Radio_5vlSTu = ref();
const viy2Radio_5vlRYo = ref();
const viy2Radio_5vlQpW = ref();
const viy2Row_y6Hz6 = ref();
const viy2InputBox_5uQ4gq = ref();
const viy2InputBox_5uQ6Ek = ref();
const viy2InputBox_5uQ7KS = ref();
const viy2Panel_oqx1Vg = ref();
const viy2Row_6tnLXf = ref();
const viy2InputNumber_6tnLXg = ref();
const viy2DateTimePicker_6txCwS = ref();
const viy2InputBox_6tyFxm = ref();
const viy2InputBox_6tyCNc = ref();
const viy2Row_12GPGBE = ref();
const viy2InputNumber_12GPGBF = ref();
const viy2InputBox_6tyGvw = ref();
const viy2Radio_12GPGBG = ref();
const viy2Panel_wZlWr = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Row_y03H5 = ref();
const formData = reactive({
  partsNm: '', registrationDate: '', partsNm: '', partsNm: '', partsNm: '', partsNm: '', lastPart: '', partsNm: '', partsNm: '', partsNm: '', partsNm: '', length: 0, width: 0, height: 0, weight: 0, volume: 0, falg１: '是', falg2: '是', falg3: '是', falg4: '是', partsNm: '', partsNm: '', partsNm: '', stdRetailPrice: 0, stdPriceUpdateDate: '', makerCd: '', makerProductCd: '', minSaleSize: 0, supplyManageType: '', salesStatusType: '普通',
});
const queryFormData = reactive({
  parts: '',
});
const rules = reactive({
  viy2ValueList_hNGbc5Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.parts')]),
    },
  ],
  viy2InputNumber_6tnLXgRules: [
    {
      validator: validator.numberValue,
      minValue: 0,
      message: t('error.invalid.compareNum', [t('label.STDRetailPrice')], '0'),
    },
  ],
  viy2InputNumber_12GPGBFRules: [
    {
      validator: validator.numberValue,
      minValue: 0,
      message: t('error.invalid.compareNum', [t('label.STDRetailPrice')], '0'),
    },
  ],
});
const viy2ValueList_hNGbc5PopoverQueryMethod = parts_query_method;
const viy2ValueList_hNGbc5PopupColumns = ref(parts_pop_column);
const viy2ValueList_hNGbc5PopupQueryMethod = parts_pop_query_method;
const viy2Radio_y86KMOpts = reactive([
  { value: '是', label: '是' },
  { value: '否', label: '否' },
]);
const viy2Radio_5vlSTuOpts = reactive([
  { value: '是', label: '是' },
  { value: '否', label: '否' },
]);
const viy2Radio_5vlRYoOpts = reactive([
  { value: '是', label: '是' },
  { value: '否', label: '否' },
]);
const viy2Radio_5vlQpWOpts = reactive([
  { value: '是', label: '是' },
  { value: '否', label: '否' },
]);
const viy2Radio_12GPGBGOpts = reactive([
  { value: '普通', label: '普通' },
  { value: '在庫限り', label: '在庫限り' },
  { value: '非売', label: '非売' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const informationReportApi = useApi({
  url: '/master/cmq0501/findInformationReportList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    const information = data.information;
    informationReport.value.basicInfo = data.basicInfoList;
    informationReport.value.purchaseControl = data.purchaseControlList;
    informationReport.value.stockInfo = data.stockInfoList;
    informationReport.value.demandDetail = data.demandDetailList;
    siteId.value = information.siteId;
    basicInfoFormData.partsNm = information.partsNm;
    basicInfoFormData.registrationDate = information.registrationDate;
    basicInfoFormData.length = information.length;
    basicInfoFormData.volume = information.length * information.width * information.height / 1000;
    basicInfoFormData.localNm = information.localNm;
    basicInfoFormData.middleGroup = information.middleGroup;
    basicInfoFormData.width = information.width;
    basicInfoFormData.weight = information.weight;
    basicInfoFormData.salesNm = information.salesNm;
    basicInfoFormData.supersedingParts = information.supersedingParts;
    basicInfoFormData.supersedingPartsNm = formatPartNo(information.supersedingPartsNm);
    basicInfoFormData.height = information.height;
    salesControlFormData.salesLot = information.salesLot;
    salesControlFormData.minSalesQty = information.minSalesQty;
    salesControlFormData.unavailable = information.unavailable;
    purchaseControlFormData.brand = `${information.brandCd} ${information.brandNm}`;
    purchaseControlFormData.purchaseLot = information.purchaseLot;
    purchaseControlFormData.minPurchaseQty = information.minPurchaseQty;
  },
  manual: true,
});
const informationReport = informationReportApi.data;
const partsAutoFill2DsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  data: () => {
    return {
      partsCd: nowPartsCode.value,
      pageSize: 1,
      currentPage: 1,
    };
  },
}, {
  manual: true,
});
const partsAutoFill2Ds = partsAutoFill2DsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const unavailableDsApi = useApi({
  url: '/common/helper/getUnavailable.json',
  method: 'post',
}, {
  manual: true,
});
const unavailableDs = unavailableDsApi.data;
const viy2Button_dZW0QClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      informationReportApi.runAsync();
    }
  });
};
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2ValueList_hNGbc5Select = (params) => {
  queryFormData.partsId = params.id;
};
const viy2ValueList_hNGbc5Clear = () => {
  queryFormData.partsId = '';
};
const viy2ValueList_hNGbc5Leave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.partsId = '';
    if (obj.currentValue) {
      onLeavePartsCode(obj.currentValue);
    }
  }
};
const viy2ValueList_hNGbc5PopoverColumns = computed(() => {
  return parts_column;
});
const viy2ValueList_hNGbc5PopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
  ];
});
const viy2InputNumber_6tnLXgChange = (event) => {
  if (!salesControlForm.stdRetailPrice) {
    salesControlForm.stdRetailPrice = 0;
  }
};
const viy2InputNumber_12GPGBFChange = (event) => {
  if (!salesControlForm.stdRetailPrice) {
    salesControlForm.stdRetailPrice = 0;
  }
};
const gridOnHandQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnHandQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridStockQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridBackOrderEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnPurchaseQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnPurchaseQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnReceivingQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnReceivingQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnFrozenQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnFrozenQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAllocatedQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnPickingQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnPickingQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  basicInfoFormData.partsNm = '';
  basicInfoFormData.registrationDate = '';
  basicInfoFormData.length = 0;
  basicInfoFormData.height = 0;
  basicInfoFormData.localNm = '';
  basicInfoFormData.middleGroup = '';
  basicInfoFormData.width = 0;
  basicInfoFormData.weight = 0;
  basicInfoFormData.volume = 0;
  basicInfoFormData.salesNm = '';
  basicInfoFormData.supersedingParts = '';
  basicInfoFormData.supersedingPartsNm = '';
  basicInfoForm.value.resetFields();
  salesControlFormData.salesLot = 0;
  salesControlFormData.minSalesQty = 0;
  salesControlFormData.unavailable = '';
  salesControlForm.value.resetFields();
  purchaseControlForm.value.resetFields();
  purchaseControlFormData.brand = '';
  purchaseControlFormData.purchaseLot = 0;
  purchaseControlFormData.minPurchaseQty = 0;
};
const resetTblResults = () => {
  informationReport.value.basicInfo = [];
  informationReport.value.purchaseControl = [];
  informationReport.value.stockInfo = [];
  informationReport.value.demandDetail = [];
  informationReport.value.information = [];
  basicInfoForm.value.resetFields();
  salesControlForm.value.resetFields();
  purchaseControlForm.value.resetFields();
};
const formatBlur = (value) => {
  return formatPartNo(value);
};
// 配件输入后Leave
const onLeavePartsCode = async (code) => {
  nowPartsCode.value = code;
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData != null) {
    queryFormData.parts = partsData.desc;
    queryFormData.partsId = partsData.id;
  }
};
formData.stdPriceUpdateDate = new Date();
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
        <VueButton id="viy2Button_dZW0Q" ref="viy2Button_dZW0Q" :loading="false" icon-position="left" type="info" @click="viy2Button_dZW0QClick">
          検索
        </VueButton>
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
          クリア
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_E6XQ4" ref="viy2Panel_E6XQ4" title="ヘッド" title-align="left" :collapse="true" class="margin-top-div except-height-css">
      <VueRow
        id="viy2Row_xChMPR"
        ref="viy2Row_xChMPR"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueForm
            id="queryForm"
            ref="queryForm"
            label-width="150px"
            :model="queryFormData"
          >
            <VueFormItem
              label="部品"
              prop="parts"
              :rules="rules.viy2ValueList_hNGbc5Rules"
            >
              <VueValueList
                :use-common-popover="true"
                id="viy2ValueList_hNGbc5"
                :use-common-popup="true"
                ref="viy2ValueList_hNGbc5"
                aside-size="60%"
                v-model="queryFormData.parts"
                :toggle-popover-on-click="queryFormData.parts.length > 3"
                select-field="desc"
                :close-on-click-modal="true"
                :popover-min-query-length="3"
                :use-popup="true"
                :popover-width="500"
                width="250px"
                :popover-columns="viy2ValueList_hNGbc5PopoverColumns"
                :popover-query-method="viy2ValueList_hNGbc5PopoverQueryMethod"
                :popup-columns="viy2ValueList_hNGbc5PopupColumns"
                :popup-conditions="viy2ValueList_hNGbc5PopupConditions"
                :popup-query-method="viy2ValueList_hNGbc5PopupQueryMethod"
                @select="viy2ValueList_hNGbc5Select"
                @clear="viy2ValueList_hNGbc5Clear"
                @leave="viy2ValueList_hNGbc5Leave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_azCfRZ"
                    ref="viy2Row_azCfRZ"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_azCfS0" ref="viy2Text_azCfS0" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        {{ t('title.partItemRef') }}
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    />
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueForm>
        </VueCol>
      </VueRow>
    </VuePanel>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="基本情報">
      <VueRow
        id="viy2Row_y04IG"
        ref="viy2Row_y04IG"
      >
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="部品名称"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5k94Sg"
              ref="viy2InputBox_5k94Sg"
              v-model="formData.partsNm"
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
            label="登録日"
            prop="registrationDate"
          >
            <VueDatePicker
              id="viy2DateTimePicker_5k94S8"
              ref="viy2DateTimePicker_5k94S8"
              v-model="formData.registrationDate"
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
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="ＱＩ品番区分"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5uSpPA"
              ref="viy2InputBox_5uSpPA"
              v-model="formData.partsNm"
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
            label="特掛仕切コード"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_6BXBos"
              ref="viy2InputBox_6BXBos"
              v-model="formData.partsNm"
              :readonly="true"
              class="no-border"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_y07lo"
        ref="viy2Row_y07lo"
      >
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="正代替部品番号"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5uL5Zm"
              ref="viy2InputBox_5uL5Zm"
              v-model="formData.partsNm"
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
            label="正代替部品名称"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5uL5bG"
              ref="viy2InputBox_5uL5bG"
              v-model="formData.partsNm"
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
            label="最終商品コード"
            prop="lastPart"
          >
            <VueInput
              id="viy2InputBox_5uL4NE"
              ref="viy2InputBox_5uL4NE"
              v-model="formData.lastPart"
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
            label="ＰＣ→販売店仕切率"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5uL43m"
              ref="viy2InputBox_5uL43m"
              v-model="formData.partsNm"
              :readonly="true"
              class="no-border"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_y08tg"
        ref="viy2Row_y08tg"
      >
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="大分類"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5uL33q"
              ref="viy2InputBox_5uL33q"
              v-model="formData.partsNm"
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
            label="中分類"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5uL1D2"
              ref="viy2InputBox_5uL1D2"
              v-model="formData.partsNm"
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
            label="小分類"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5uL0oA"
              ref="viy2InputBox_5uL0oA"
              v-model="formData.partsNm"
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
            label="長さ(mm)"
            prop="length"
          >
            <VueInputNumber
              id="viy2InputNumber_5vE9ZA"
              ref="viy2InputNumber_5vE9ZA"
              v-model="formData.length"
              :disabled="true"
              text-align="right"
              class="no-border"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_y09bz"
        ref="viy2Row_y09bz"
      >
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="幅(mm)"
            prop="width"
          >
            <VueInputNumber
              id="viy2InputNumber_8dxUim"
              ref="viy2InputNumber_8dxUim"
              v-model="formData.width"
              :disabled="true"
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
            label="高さ(mm)"
            prop="height"
          >
            <VueInputNumber
              id="viy2InputNumber_5vCkGY"
              ref="viy2InputNumber_5vCkGY"
              v-model="formData.height"
              :disabled="true"
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
            label="重量"
            prop="weight"
          >
            <VueInputNumber
              id="viy2InputNumber_8dyC6a"
              ref="viy2InputNumber_8dyC6a"
              v-model="formData.weight"
              :formatter="formatNumber"
              :disabled="true"
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
            label="容積(cm³)"
            prop="volume"
          >
            <VueInputNumber
              id="viy2InputNumber_8dzGTA"
              ref="viy2InputNumber_8dzGTA"
              v-model="formData.volume"
              :disabled="true"
              text-align="right"
              class="no-border"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_y6EkQ"
        ref="viy2Row_y6EkQ"
      >
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="チェーニング落ちサイン"
            prop="falg１"
          >
            <VueRadioGroup
              id="viy2Radio_y86KM"
              ref="viy2Radio_y86KM"
              v-model="formData.falg１"
              radio-style="button"
              direction="horizontal"
              :disabled="true"
              split-size="default"
            >
              <VueRadioButton
                v-for="option in viy2Radio_y86KMOpts"
                :key="option.value"
                :label="option.value"
              >
                {{ option.label }}
              </VueRadioButton>
            </VueRadioGroup>
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="価格統一サイン"
            prop="falg2"
          >
            <VueRadioGroup
              id="viy2Radio_5vlSTu"
              ref="viy2Radio_5vlSTu"
              v-model="formData.falg2"
              radio-style="button"
              direction="horizontal"
              :disabled="true"
              split-size="default"
            >
              <VueRadioButton
                v-for="option in viy2Radio_5vlSTuOpts"
                :key="option.value"
                :label="option.value"
              >
                {{ option.label }}
              </VueRadioButton>
            </VueRadioGroup>
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="価格改定サイン"
            prop="falg3"
          >
            <VueRadioGroup
              id="viy2Radio_5vlRYo"
              ref="viy2Radio_5vlRYo"
              v-model="formData.falg3"
              radio-style="button"
              direction="horizontal"
              :disabled="true"
              split-size="default"
            >
              <VueRadioButton
                v-for="option in viy2Radio_5vlRYoOpts"
                :key="option.value"
                :label="option.value"
              >
                {{ option.label }}
              </VueRadioButton>
            </VueRadioGroup>
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="オープン価格サイン"
            prop="falg4"
          >
            <VueRadioGroup
              id="viy2Radio_5vlQpW"
              ref="viy2Radio_5vlQpW"
              v-model="formData.falg4"
              radio-style="button"
              direction="horizontal"
              :disabled="true"
              split-size="default"
            >
              <VueRadioButton
                v-for="option in viy2Radio_5vlQpWOpts"
                :key="option.value"
                :label="option.value"
              >
                {{ option.label }}
              </VueRadioButton>
            </VueRadioGroup>
          </VueFormItem>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_y6Hz6"
        ref="viy2Row_y6Hz6"
      >
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="受注警告区分"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5uQ4gq"
              ref="viy2InputBox_5uQ4gq"
              v-model="formData.partsNm"
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
            label="劇毒物区分"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5uQ6Ek"
              ref="viy2InputBox_5uQ6Ek"
              v-model="formData.partsNm"
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
            label="中５コード"
            prop="partsNm"
          >
            <VueInput
              id="viy2InputBox_5uQ7KS"
              ref="viy2InputBox_5uQ7KS"
              v-model="formData.partsNm"
              :readonly="true"
              class="no-border"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        />
      </VueRow>
    </VuePanel>
    <VuePanel id="viy2Panel_oqx1Vg" ref="viy2Panel_oqx1Vg" :collapse="true" title="受注" class="except-height-css">
      <VueRow
        id="viy2Row_6tnLXf"
        ref="viy2Row_6tnLXf"
      >
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="標準小売単価"
            label-width="140px"
            prop="stdRetailPrice"
            :rules="rules.viy2InputNumber_6tnLXgRules"
          >
            <VueInputNumber
              id="viy2InputNumber_6tnLXg"
              ref="viy2InputNumber_6tnLXg"
              v-model="formData.stdRetailPrice"
              :controls="false"
              text-align="right"
              :disabled="true"
              :min="0"
              :precision="0"
              :use-separator="true"
              class="no-border"
              :style="{ width: '208px' }"
              @change="viy2InputNumber_6tnLXgChange"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="単価適用開始日"
            prop="stdPriceUpdateDate"
          >
            <VueDatePicker
              id="viy2DateTimePicker_6txCwS"
              ref="viy2DateTimePicker_6txCwS"
              v-model="formData.stdPriceUpdateDate"
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
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="メーカーコード"
            prop="makerCd"
          >
            <VueInput
              id="viy2InputBox_6tyFxm"
              ref="viy2InputBox_6tyFxm"
              v-model="formData.makerCd"
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
            label="メーカー部品コード"
            prop="makerProductCd"
          >
            <VueInput
              id="viy2InputBox_6tyCNc"
              ref="viy2InputBox_6tyCNc"
              v-model="formData.makerProductCd"
              :readonly="true"
              class="no-border"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_12GPGBE"
        ref="viy2Row_12GPGBE"
      >
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="最小販売単位 "
            label-width="140px"
            prop="minSaleSize"
            :rules="rules.viy2InputNumber_12GPGBFRules"
          >
            <VueInputNumber
              id="viy2InputNumber_12GPGBF"
              ref="viy2InputNumber_12GPGBF"
              v-model="formData.minSaleSize"
              :controls="false"
              text-align="right"
              :disabled="true"
              :min="0"
              :precision="0"
              :use-separator="true"
              class="no-border"
              :style="{ width: '208px' }"
              @change="viy2InputNumber_12GPGBFChange"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="供給管理区分"
            prop="supplyManageType"
          >
            <VueInput
              id="viy2InputBox_6tyGvw"
              ref="viy2InputBox_6tyGvw"
              v-model="formData.supplyManageType"
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
            label="非売区分"
            prop="salesStatusType"
          >
            <VueRadioGroup
              id="viy2Radio_12GPGBG"
              ref="viy2Radio_12GPGBG"
              v-model="formData.salesStatusType"
              radio-style="button"
              :disabled="true"
              direction="horizontal"
              split-size="default"
            >
              <VueRadioButton
                v-for="option in viy2Radio_12GPGBGOpts"
                :key="option.value"
                :label="option.value"
              >
                {{ option.label }}
              </VueRadioButton>
            </VueRadioGroup>
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        />
      </VueRow>
    </VuePanel>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" title="在庫情報" :collapse="true">
      <VueTable id="grid" ref="grid" header-align="center" :data="informationReport.stockInfo" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
        <VueRow
          id="viy2Row_AsHNi"
          ref="viy2Row_AsHNi"
          class="toolbar-row-width except-height-css"
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
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnHandQtyFormatter"
          :edit-render="gridOnHandQtyEditRender"
          field="onHandQty"
          align="right"
          :sortable="true"
          title="有効在庫数量"
          width="100px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridStockQtyEditRender"
          field="stockQty"
          align="right"
          :sortable="true"
          title="在庫数量"
          width="90px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridBackOrderEditRender"
          field="backOrder"
          align="right"
          :sortable="true"
          title="欠品数量"
          width="90px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnPurchaseQtyFormatter"
          :edit-render="gridOnPurchaseQtyEditRender"
          field="onPurchaseQty"
          align="right"
          show-overflow="tooltip"
          :sortable="true"
          title="発注中数量"
          width="98px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnReceivingQtyFormatter"
          :edit-render="gridOnReceivingQtyEditRender"
          field="onReceivingQty"
          align="right"
          :sortable="true"
          title="入荷中数量"
          width="108px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnFrozenQtyFormatter"
          :edit-render="gridOnFrozenQtyEditRender"
          field="onFrozenQty"
          align="right"
          :sortable="true"
          title="凍結数量"
          width="100px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridAllocatedQtyFormatter"
          :edit-render="gridAllocatedQtyEditRender"
          field="allocatedQty"
          align="right"
          :sortable="true"
          title="引当数量"
          width="120px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnPickingQtyFormatter"
          :edit-render="gridOnPickingQtyEditRender"
          field="onPickingQty"
          align="right"
          :sortable="true"
          title="出荷中数量"
          width="100px"
          header-align="center"
        />
      </VueTable>
    </VuePanel>
    <VueRow
      id="viy2Row_y03H5"
      ref="viy2Row_y03H5"
    >
      <VueCol
        item-key="item"
        :md="{ span: 6 }"
      />
      <VueCol
        item-key="item"
        :md="{ span: 6 }"
      />
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
</template>
