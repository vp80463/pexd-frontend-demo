<script setup>
import { IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
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
  name: 'cmq0501_01Copy',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_dZW0Q = ref();
const viy2Panel_Rmc59 = ref();
const viy2Row_xChMPR = ref();
const queryForm = ref();
const viy2ValueList_hNGbc5 = ref();
const viy2Row_azCfRZ = ref();
const viy2Panel_2rs6nZ = ref();
const basicInfoForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_5k94Sg = ref();
const viy2DateTimePicker_5k94S8 = ref();
const viy2InputNumber_OSOa5 = ref();
const viy2InputNumber_8dxUim = ref();
const viy2InputBox_3td3TS = ref();
const viy2InputBox_lAGFz = ref();
const viy2InputNumber_8dxdem = ref();
const viy2InputNumber_8dyC6a = ref();
const viy2InputBox_3tgLVa = ref();
const viy2InputBox_50Vo2o = ref();
const viy2InputBox_7gMwZ6 = ref();
const viy2InputNumber_8dzGTA = ref();
const grid1 = ref();
const viy2Row_3trGZq = ref();
const viy2Button_3trH1r = ref();
const viy2Button_3tvsbP = ref();
const viy2Panel_2KSFU2 = ref();
const salesControlForm = ref();
const viy2Row_2KSFUq = ref();
const viy2InputNumber_3uRv7c = ref();
const viy2InputNumber_3uSD8a = ref();
const viy2Radio_QgMeE = ref();
const viy2Panel_2GXKvM = ref();
const purchaseControlForm = ref();
const viy2Row_2GXKw0 = ref();
const viy2InputBox_3x5i5e = ref();
const viy2InputNumber_3v1lcw = ref();
const viy2InputNumber_3v31zk = ref();
const viy2Table_3vX9s4 = ref();
const viy2Row_3vX9to = ref();
const viy2Button_3vX9xb = ref();
const viy2CheckBox_4AYL2A = ref();
const viy2CheckBox_8dOCUy = ref();
const viy2Panel_wZlWr = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Button_fN3c3 = ref();
const viy2Panel_3vbAg4 = ref();
const viy2Table_3vbAhT = ref();
const viy2Row_3vbAiT = ref();
const viy2Button_z1RRtE = ref();
const formData = reactive({
});
const queryFormData = reactive({
  parts: '',
});
const basicInfoFormData = reactive({
  partsNm: '', registrationDate: '', length: 0, height: 0, localNm: '', middleGroup: '', width: 0, weight: 0, salesNm: '', supersedingParts: '', supersedingPartsNm: '', volume: 0,
});
const salesControlFormData = reactive({
  salesLot: 0, minSalesQty: 0, unavailable: '',
});
const purchaseControlFormData = reactive({
  brand: '', purchaseLot: 0, minPurchaseQty: 0,
});
const rules = reactive({
  viy2ValueList_hNGbc5Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.parts')]),
    },
  ],
});
const viy2ValueList_hNGbc5PopoverQueryMethod = parts_query_method;
const viy2ValueList_hNGbc5PopupColumns = ref(parts_pop_column);
const viy2ValueList_hNGbc5PopupQueryMethod = parts_pop_query_method;
const grid1EditConfig = reactive({
  trigger: 'click',
});
const grid1MouseConfig = reactive({
  extension: true,
});
const viy2Table_3vX9s4EditConfig = reactive({
  trigger: 'click',
});
const viy2Table_3vX9s4MouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_4AYL2AOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2CheckBox_8dOCUyOpts = [
  {
    label:
'',
    value:
'',
  },
];
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2Table_3vbAhTEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_3vbAhTMouseConfig = reactive({
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
});
const largeGroupDs = largeGroupDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
});
const brandDs = brandDsApi.data;
const unavailableDsApi = useApi({
  url: '/common/helper/getUnavailable.json',
  method: 'post',
});
const unavailableDs = unavailableDsApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_dZW0QClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      informationReportApi.runAsync();
    }
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
const grid1SupersededPartsNoFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const grid1SupersededPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_3trH1rClick = () => {
  showPartsWin.value = true;
};
const grid1SupersededPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_3tvsbPClick = () => {
  showPartsWin.value = true;
};
const viy2Table_3vX9s4PointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_3vX9xbClick = () => {
  showPartsWin.value = true;
};
const viy2Table_3vX9s4PointNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3vX9s4MainLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3vX9s4RopEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_3vX9s4RoqEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_3vX9s4Copy0_copy0_copy0_copy0_copy0_viy2TableTemplateColumn_kV47aEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const viy2Table_3vX9s4Copy0_copy0_copy0_copy0_copy0_copy0_viy2TableTemplateColumn_kV47aEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const viy2Table_3vX9s4CostUsageEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_fN3c3Click = () => {
  showPartsWin.value = true;
};
const gridPointNmEditRender = computed(() => {
  return {
    enabled: false,
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
const gridOnTransferQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnTransferQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_3vbAhTPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_z1RRtEClick = () => {
  showPartsWin.value = true;
};
const viy2Table_3vbAhTPointNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3vbAhTFirstOrderDayEditRender = computed(() => {
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
const viy2Table_3vbAhTJoneEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_3vbAhTJtwoEditRender = computed(() => {
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
basicInfoFormData.registrationDate = new Date();
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning" @click="resetBtnClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_dZW0Q" ref="viy2Button_dZW0Q" icon-position="left" type="info" @click="viy2Button_dZW0QClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_Rmc59" ref="viy2Panel_Rmc59" :collapse="true" :title="t('label.header')" class="margin-top-div except-height-css">
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
              :label="t('label.parts')"
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
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" :title="t('common.label.basicInfo')">
      <VueForm
        id="basicInfoForm"
        ref="basicInfoForm"
        label-width="150px"
        :model="basicInfoFormData"
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
              :label="t('label.partsName')"
              prop="partsNm"
            >
              <VueInput
                id="viy2InputBox_5k94Sg"
                ref="viy2InputBox_5k94Sg"
                v-model="basicInfoFormData.partsNm"
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
              :label="t('label.registrationDate')"
              prop="registrationDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_5k94S8"
                ref="viy2DateTimePicker_5k94S8"
                v-model="basicInfoFormData.registrationDate"
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
              :label="t('label.length_mm')"
              label-width="160px"
              prop="length"
            >
              <VueInputNumber
                id="viy2InputNumber_OSOa5"
                ref="viy2InputNumber_OSOa5"
                v-model="basicInfoFormData.length"
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
              :label="t('label.height_mm')"
              prop="height"
            >
              <VueInputNumber
                id="viy2InputNumber_8dxUim"
                ref="viy2InputNumber_8dxUim"
                v-model="basicInfoFormData.height"
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
              :label="t('label.localName')"
              prop="localNm"
            >
              <VueInput
                id="viy2InputBox_3td3TS"
                ref="viy2InputBox_3td3TS"
                v-model="basicInfoFormData.localNm"
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
              :label="t('label.middleCategory')"
              prop="middleGroup"
            >
              <VueInput
                id="viy2InputBox_lAGFz"
                ref="viy2InputBox_lAGFz"
                v-model="basicInfoFormData.middleGroup"
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
              :label="t('label.width_mm')"
              label-width="160px"
              prop="width"
            >
              <VueInputNumber
                id="viy2InputNumber_8dxdem"
                ref="viy2InputNumber_8dxdem"
                v-model="basicInfoFormData.width"
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
              :label="t('label.weight')"
              prop="weight"
            >
              <VueInputNumber
                id="viy2InputNumber_8dyC6a"
                ref="viy2InputNumber_8dyC6a"
                v-model="basicInfoFormData.weight"
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
              :label="t('label.salesName')"
              prop="salesNm"
            >
              <VueInput
                id="viy2InputBox_3tgLVa"
                ref="viy2InputBox_3tgLVa"
                v-model="basicInfoFormData.salesNm"
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
              :label="t('label.supersedingParts')"
              prop="supersedingParts"
            >
              <VueInput
                id="viy2InputBox_50Vo2o"
                ref="viy2InputBox_50Vo2o"
                v-model="basicInfoFormData.supersedingParts"
                :formatter="formatBlur"
                :parser="formatBlur"
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
              :label="t('label.supersedingPartsName')"
              label-width="160px"
              prop="supersedingPartsNm"
            >
              <VueInput
                id="viy2InputBox_7gMwZ6"
                ref="viy2InputBox_7gMwZ6"
                v-model="basicInfoFormData.supersedingPartsNm"
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
              :label="t('label.volume_cm3')"
              prop="volume"
            >
              <VueInputNumber
                id="viy2InputNumber_8dzGTA"
                ref="viy2InputNumber_8dzGTA"
                v-model="basicInfoFormData.volume"
                :disabled="true"
                text-align="right"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 1 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 20 }"
          >
            <VueTable id="grid1" ref="grid1" height="50" :data="informationReport.basicInfo" :edit-config="grid1EditConfig" :mouse-config="grid1MouseConfig">
              <VueRow
                id="viy2Row_3trGZq"
                ref="viy2Row_3trGZq"
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
              <VueInputColumn
                :formatter="grid1SupersededPartsNoFormatter"
                :edit-render="grid1SupersededPartsNoEditRender"
                field="supersededPartsNo"
                :sortable="true"
                :title="t('label.supersededPartsNo')"
                width="200px"
              >
                <template #append="scope">
                  <VueButton id="viy2Button_3trH1r" ref="viy2Button_3trH1r" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_3trH1rClick" />
                </template>
              </VueInputColumn>
              <VueInputColumn
                :edit-render="grid1SupersededPartsNmEditRender"
                field="supersededPartsNm"
                :sortable="true"
                :title="t('label.supersededPartsName')"
                width="300px"
              >
                <template #append="scope">
                  <VueButton id="viy2Button_3tvsbP" ref="viy2Button_3tvsbP" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_3tvsbPClick" />
                </template>
              </VueInputColumn>
            </VueTable>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_2KSFU2" ref="viy2Panel_2KSFU2" :collapse="true" :title="t('common.label.salesControl')">
      <VueForm
        id="salesControlForm"
        ref="salesControlForm"
        label-width="150px"
        :model="salesControlFormData"
      >
        <VueRow
          id="viy2Row_2KSFUq"
          ref="viy2Row_2KSFUq"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.salesLot')"
              prop="salesLot"
            >
              <VueInputNumber
                id="viy2InputNumber_3uRv7c"
                ref="viy2InputNumber_3uRv7c"
                v-model="salesControlFormData.salesLot"
                :use-separator="true"
                :controls="false"
                text-align="right"
                :disabled="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.minSalesQuantity')"
              prop="minSalesQty"
            >
              <VueInputNumber
                id="viy2InputNumber_3uSD8a"
                ref="viy2InputNumber_3uSD8a"
                v-model="salesControlFormData.minSalesQty"
                :use-separator="true"
                :controls="false"
                text-align="right"
                :disabled="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.unavailable')"
              label-width="160px"
              prop="unavailable"
            >
              <VueRadioGroup
                id="viy2Radio_QgMeE"
                ref="viy2Radio_QgMeE"
                v-model="salesControlFormData.unavailable"
                radio-style="button"
                direction="horizontal"
                :disabled="true"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in unavailableDs"
                  :key="option.codeDbid"
                  :label="option.codeDbid"
                  :name="option.name"
                  :disabled="option.disabled"
                >
                  {{ option.codeData1 }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_2GXKvM" ref="viy2Panel_2GXKvM" :collapse="true" :title="t('common.label.purchaseControl')">
      <VueForm
        id="purchaseControlForm"
        ref="purchaseControlForm"
        label-width="150px"
        :model="purchaseControlFormData"
      >
        <VueRow
          id="viy2Row_2GXKw0"
          ref="viy2Row_2GXKw0"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.brand')"
              prop="brand"
            >
              <VueInput
                id="viy2InputBox_3x5i5e"
                ref="viy2InputBox_3x5i5e"
                v-model="purchaseControlFormData.brand"
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
              v-if="siteId ? (siteId === '666N' ? true : false) : true"
              :label="t('label.purchaseLot')"
              prop="purchaseLot"
            >
              <VueInputNumber
                id="viy2InputNumber_3v1lcw"
                ref="viy2InputNumber_3v1lcw"
                v-model="purchaseControlFormData.purchaseLot"
                :use-separator="true"
                :controls="false"
                text-align="right"
                :disabled="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              v-if="siteId ? (siteId === '666N' ? true : false) : true"
              :label="t('label.minPurchaseQuantity')"
              label-width="160px"
              prop="minPurchaseQty"
            >
              <VueInputNumber
                id="viy2InputNumber_3v31zk"
                ref="viy2InputNumber_3v31zk"
                v-model="purchaseControlFormData.minPurchaseQty"
                :use-separator="true"
                :controls="false"
                text-align="right"
                :disabled="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
        </VueRow>
      </VueForm>
      <VueTable id="viy2Table_3vX9s4" ref="viy2Table_3vX9s4" header-align="center" :height="80" :data="informationReport.purchaseControl" :edit-config="viy2Table_3vX9s4EditConfig" :mouse-config="viy2Table_3vX9s4MouseConfig">
        <VueRow
          id="viy2Row_3vX9to"
          ref="viy2Row_3vX9to"
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
        <VueInputColumn
          :edit-render="viy2Table_3vX9s4PointCdEditRender"
          field="pointCd"
          :sortable="true"
          :title="t('label.pointCode')"
          width="120px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_3vX9xb" ref="viy2Button_3vX9xb" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_3vX9xbClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="viy2Table_3vX9s4PointNmEditRender"
          field="pointNm"
          show-overflow="tooltip"
          :sortable="true"
          :title="t('label.pointName')"
          width="240px"
        />
        <VueInputColumn
          :edit-render="viy2Table_3vX9s4MainLocationEditRender"
          field="mainLocation"
          :sortable="true"
          :title="t('label.mainLocation')"
          width="130px"
        />
        <VueNumberColumn
          :edit-render="viy2Table_3vX9s4RopEditRender"
          field="rop"
          align="right"
          :visible="siteId ? (siteId === '666N' ? true : false) : true"
          :sortable="true"
          :title="t('label.rop')"
          width="70px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="viy2Table_3vX9s4RoqEditRender"
          field="roq"
          align="right"
          :visible="siteId ? (siteId === '666N' ? true : false) : true"
          :sortable="true"
          :title="t('label.roq')"
          width="70px"
          header-align="center"
        />
        <VueTemplateColumn
          :edit-render="viy2Table_3vX9s4Copy0_copy0_copy0_copy0_copy0_viy2TableTemplateColumn_kV47aEditRender"
          align="center"
          :visible="siteId ? (siteId === '666N' ? true : false) : true"
          :sortable="true"
          width="190px"
          :title="t('label.manualROPROQSign')"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_4AYL2A"
              ref="viy2CheckBox_4AYL2A"
              v-model="scope.row.manualRopRoqSign"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="viy2Table_3vX9s4Copy0_copy0_copy0_copy0_copy0_copy0_viy2TableTemplateColumn_kV47aEditRender"
          align="center"
          :visible="siteId ? (siteId === '666N' ? true : false) : true"
          :sortable="true"
          width="210px"
          :title="t('label.seasonIndexManualSign')"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_8dOCUy"
              ref="viy2CheckBox_8dOCUy"
              v-model="scope.row.seasonIndexManualSign"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueInputColumn
          :edit-render="viy2Table_3vX9s4CostUsageEditRender"
          field="costUsage"
          :visible="siteId ? (siteId === '666N' ? true : false) : true"
          :sortable="true"
          :title="t('label.costUsage')"
          width="140px"
        />
      </VueTable>
    </VuePanel>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" :title="t('common.label.stockInfo')" :collapse="true">
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
        <VueInputColumn
          :edit-render="gridPointCdEditRender"
          field="pointCd"
          :sortable="true"
          :title="t('label.pointCode')"
          width="120px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_fN3c3" ref="viy2Button_fN3c3" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_fN3c3Click" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="gridPointNmEditRender"
          field="pointNm"
          show-overflow="tooltip"
          :sortable="true"
          :title="t('label.pointName')"
          width="240px"
        />
        <VueNumberColumn
          :edit-render="gridStockQtyEditRender"
          field="stockQty"
          align="right"
          :sortable="true"
          :title="t('label.stockQty')"
          width="90px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridBackOrderEditRender"
          field="backOrder"
          align="right"
          :sortable="true"
          :title="t('label.backOrder')"
          width="90px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridAllocatedQtyFormatter"
          :edit-render="gridAllocatedQtyEditRender"
          field="allocatedQty"
          align="right"
          :sortable="true"
          :title="t('label.allocatedQuantity')"
          width="120px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnPurchaseQtyFormatter"
          :edit-render="gridOnPurchaseQtyEditRender"
          field="onPurchaseQty"
          align="right"
          show-overflow="tooltip"
          :sortable="true"
          :title="t('label.onPurchaseQuantity')"
          width="98px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnHandQtyFormatter"
          :edit-render="gridOnHandQtyEditRender"
          field="onHandQty"
          align="right"
          :sortable="true"
          :title="t('label.onHandQuantity')"
          width="80px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnReceivingQtyFormatter"
          :edit-render="gridOnReceivingQtyEditRender"
          field="onReceivingQty"
          align="right"
          :sortable="true"
          :title="t('label.onReceivingQuantity')"
          width="108px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnFrozenQtyFormatter"
          :edit-render="gridOnFrozenQtyEditRender"
          field="onFrozenQty"
          align="right"
          :sortable="true"
          :title="t('label.onFrozenQty')"
          width="100px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnPickingQtyFormatter"
          :edit-render="gridOnPickingQtyEditRender"
          field="onPickingQty"
          align="right"
          :sortable="true"
          :title="t('label.onPickingQuantity')"
          width="100px"
          header-align="center"
        />
        <VueNumberColumn
          :formatter="gridOnTransferQtyFormatter"
          :edit-render="gridOnTransferQtyEditRender"
          field="onTransferQty"
          align="right"
          :sortable="true"
          :title="t('label.onTransferQuantity')"
          width="120px"
          header-align="center"
        />
      </VueTable>
    </VuePanel>
    <VuePanel id="viy2Panel_3vbAg4" ref="viy2Panel_3vbAg4" :title="t('common.label.demandDetail')" :collapse="true">
      <VueTable id="viy2Table_3vbAhT" ref="viy2Table_3vbAhT" header-align="center" :data="informationReport.demandDetail" :edit-config="viy2Table_3vbAhTEditConfig" :mouse-config="viy2Table_3vbAhTMouseConfig">
        <VueRow
          id="viy2Row_3vbAiT"
          ref="viy2Row_3vbAiT"
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
        <VueInputColumn
          :edit-render="viy2Table_3vbAhTPointCdEditRender"
          field="pointCd"
          :sortable="true"
          :title="t('label.pointCode')"
          width="120px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_z1RRtE" ref="viy2Button_z1RRtE" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_z1RRtEClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="viy2Table_3vbAhTPointNmEditRender"
          field="pointNm"
          :sortable="true"
          :title="t('label.pointName')"
          width="240px"
        />
        <VueDateTimeColumn
          :edit-render="viy2Table_3vbAhTFirstOrderDayEditRender"
          field="firstOrderDay"
          align="center"
          :sortable="true"
          :title="t('label.firstOrderDay')"
          width="185px"
        />
        <VueNumberColumn
          :edit-render="viy2Table_3vbAhTJoneEditRender"
          field="jone"
          align="right"
          :sortable="true"
          :title="t('label.j1')"
          width="100px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="viy2Table_3vbAhTJtwoEditRender"
          field="jtwo"
          align="right"
          show-overflow="tooltip"
          :sortable="true"
          :title="t('label.j2')"
          width="100px"
          header-align="center"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
