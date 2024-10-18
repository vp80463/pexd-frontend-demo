<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import {
  parts_column, parts_pop_column,
} from '@/settings/valuelistSetting.js';
import { formatPartNo } from '@/pj-commonutils.js';
const props = defineProps({
  initData: Object,
});
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const detailPanelModel = ref(true);
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const nowPartsCode = ref();
let caseNo;
let point;
let pointId;
let supplier;
defineOptions({
  name: 'spq0301_02',
});
const form = ref();
const viy2Flex_fADC6 = ref();
const viy2Row_eu9lo = ref();
const viy2Button_eudFG = ref();
const viy2Panel_1H8PQ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_5k94Sg = ref();
const viy2InputBox_3HPkks = ref();
const viy2InputBox_3HUzN0 = ref();
const viy2InputBox_3HVbfU = ref();
const viy2InputBox_3I7RtS = ref();
const viy2InputBox_3I9LLU = ref();
const viy2InputBox_RfsMNE = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const grid = ref();
const viy2Row_7yiZLF = ref();
const formData = reactive({
});
const orderFormData = reactive({
  receiptNo: 'RS2410140001', partsNo: 'ZF22100', purchaseOrderNo: 'P2410000015', receiptDate: '2024-10-15', receiptQty: '5', receiptPrice: '100', point: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
});
const gridMouseConfig = reactive({
  extension: true,
});
const partsAutoFill2DsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  data: () => {
    return {
      partsCd: nowPartsCode.value,
      autoFillFlag: YES_NO_FLAG.YES,
      facilityId: orderFormData.pointId,
      pageSize: 1,
      currentPage: 1,
    };
  },
  lockScreen: false,
}, {
  manual: true,
});
const partsAutoFill2Ds = partsAutoFill2DsApi.data;
const partsAutoFillDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const partsAutoFillDs = partsAutoFillDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0301/confirmReceiptManifestItem.json',
  method: 'post',
}, {
  onSuccess: () => {
    gridDsApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const productCtgDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  manual: true,
});
const productCtgDs = productCtgDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      registerLocation: '100-102',
      locationType: '通常',
      registerQty: '5',
      registerDate: '2024-10-15',
    },
  ],
}, {
  onSuccess: (data) => {
    // orderFormData.point = data.point;
    // orderFormData.pointId = data.pointId;
    // orderFormData.supplier = data.supplier;
    // orderFormData.invoiceNo = data.invoiceNo;
    // orderFormData.firstCaseNo = data.firstCaseNo;
    // orderFormData.updateCount = data.updateCount;
  },
});
const gridDs = gridDsApi.data;
const purchaseOrderItemDsApi = useApi({
  url: '/parts/spm0301/getPurchaseOrderData.json',
  method: 'post',
}, {
  manual: true,
});
const purchaseOrderItemDs = purchaseOrderItemDsApi.data;
const checkDsApi = useApi({
  url: '/parts/spm0301/check.json',
  method: 'post',
}, {
  onSuccess: () => {
    const tableDataList = grid.value.getRecordset();
    confirmDsApi.runAsync({
      tableDataList,
    });
  },
  manual: true,
});
const checkDs = checkDsApi.data;
const deleteDsApi = useApi({
  url: '/parts/spm0301/deleteReceiptManifestItem.json',
  method: 'post',
}, {
  manual: true,
});
const deleteDs = deleteDsApi.data;
const viy2Button_eudFGClick = () => {
  emit('close');
};
const gridRegisterLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLocationTypeFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPartNo(row.cellValue);
  }
  return row.cellValue;
};
const gridLocationTypeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      clearable: true,
      selectField: 'code',
      usePopover: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      popoverColumns: parts_column,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
      popupColumns: parts_pop_column,
      closeOnClickModal: true,
    },
  };
});
const gridRegisterQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridRegisterDateFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPartNo(row.cellValue);
  }
  return row.cellValue;
};
const gridRegisterDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      clearable: true,
      selectField: 'code',
      usePopover: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      popoverColumns: parts_column,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
      popupColumns: parts_pop_column,
      popupConditions: [
        { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
        { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
        { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
        { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: productCtgDs.value, clearable: true, style: { width: '150px' } },
      ],
      closeOnClickModal: true,
      textAlign: 'center',
    },
  };
});
onMounted(() => {
});
watch(() => props.initData, (newVal) => {
  if (newVal) {
    caseNo = newVal.caseNo;
    point = newVal.point;
    pointId = newVal.pointId;
    supplier = newVal.supplier;
    gridDsApi.runAsync();
  }
}, {
  immediate: true,
  deep: true,
});
const onDelRow = (row) => {
  VueMessageBox.confirm(t('M.C.00103', [row.orderNo]), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    const allTableDataList = grid.value.getTableData().fullData;
    deleteDsApi.runAsync({
      receiptManifestItemId: row.receiptManifestItemId,
      updateCount: row.updateCount,
      orderNo: row.orderNo,
    }).then((data) => {
      VueMessage.success(t('ymc-commons.P.00005'));
      if (allTableDataList.length > 1) {
        gridDsApi.runAsync();
      } else {
        emit('close');
      }
    });
  }).catch(() => {
  });
};
const setValueOnPartGrid = (row, params) => {
  row.receiptPartsId = params.id;
  row.receiptPartsNo = params.code;
  row.receiptPartsNm = params.name;
};
const clearPartsOnPartsGrid = (row) => {
  row.receiptPartsId = null;
  row.receiptPartsNo = null;
  row.receiptPartsNm = null;
};
// 配件输入后Leave
const onLeavePartsCode = async (row, code) => {
  nowPartsCode.value = code;
  await getPartsData(row);
};
const getPartsData = async (row) => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  setValueOnPartGrid(row, partsData);
};
const setValueOnPartGrid2 = (row, params) => {
  row.orderPartsId = params.id;
  row.orderPartsNo = params.code;
  row.orderPartsNm = params.name;
};
const clearPartsOnPartsGrid2 = (row) => {
  row.orderPartsId = null;
  row.orderPartsNo = null;
  row.orderPartsNm = null;
};
// 配件输入后Leave
const onLeavePartsCode2 = async (row, code) => {
  nowPartsCode.value = code;
  await getPartsData2(row);
};
const getPartsData2 = async (row) => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  setValueOnPartGrid2(row, partsData);
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_fADC6"
      ref="viy2Flex_fADC6"
      direction="column"
      class="full-height"
    >
      <VueRow
        id="viy2Row_eu9lo"
        ref="viy2Row_eu9lo"
      >
        <VueCol
          item-key="item"
          align="left"
          :inline="true"
          :md="{ span: 12 }"
        >
          <VueText id="viy2Text_euges" ref="viy2Text_euges" class="aside-title-text" :style="{ width: '100%', display: 'inline-block' }">
            棚入明細
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 12 }"
        >
          <VueButton id="viy2Button_eudFG" ref="viy2Button_eudFG" icon-position="left" @click="viy2Button_eudFGClick">
            閉じる
          </VueButton>
        </VueCol>
      </VueRow>
      <VuePanel id="viy2Panel_1H8PQ" ref="viy2Panel_1H8PQ" title="受付情報">
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
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="受付番号"
                prop="receiptNo"
              >
                <VueInput
                  id="viy2InputBox_5k94Sg"
                  ref="viy2InputBox_5k94Sg"
                  v-model="orderFormData.receiptNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :disabled="true"
                  :readonly="true"
                />
              </VueFormItem>
              <VueFormItem
                label="部品番号"
                prop="partsNo"
              >
                <VueInput
                  id="viy2InputBox_3HPkks"
                  ref="viy2InputBox_3HPkks"
                  v-model="orderFormData.partsNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :disabled="true"
                  :readonly="true"
                />
              </VueFormItem>
              <VueFormItem
                label="発注番号"
                prop="purchaseOrderNo"
              >
                <VueInput
                  id="viy2InputBox_3HUzN0"
                  ref="viy2InputBox_3HUzN0"
                  v-model="orderFormData.purchaseOrderNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :disabled="true"
                  :readonly="true"
                />
              </VueFormItem>
              <VueFormItem
                label="受付日"
                prop="receiptDate"
              >
                <VueInput
                  id="viy2InputBox_3HVbfU"
                  ref="viy2InputBox_3HVbfU"
                  v-model="orderFormData.receiptDate"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :disabled="true"
                  :readonly="true"
                  text-align="center"
                />
              </VueFormItem>
              <VueFormItem
                label="受付数"
                prop="receiptQty"
              >
                <VueInput
                  id="viy2InputBox_3I7RtS"
                  ref="viy2InputBox_3I7RtS"
                  v-model="orderFormData.receiptQty"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :disabled="true"
                  :readonly="true"
                  text-align="right"
                />
              </VueFormItem>
              <VueFormItem
                label="受付単価"
                prop="receiptPrice"
              >
                <VueInput
                  id="viy2InputBox_3I9LLU"
                  ref="viy2InputBox_3I9LLU"
                  v-model="orderFormData.receiptPrice"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :disabled="true"
                  :readonly="true"
                />
              </VueFormItem>
              <VueFormItem
                v-show="false"
                label="倉庫"
                prop="point"
              >
                <VueInput
                  id="viy2InputBox_RfsMNE"
                  ref="viy2InputBox_RfsMNE"
                  v-model="orderFormData.point"
                  :clearable="false"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" title="棚入情報" height="100%">
        <template #header>
          <div style="width: 400px">
            <VueRow
              v-show="detailPanelModel"
              id="viy2Row_wZvy4"
              ref="viy2Row_wZvy4"
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
        <VueTable id="grid" ref="grid" height="auto" :show-footer="true" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_7yiZLF"
            ref="viy2Row_7yiZLF"
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
            title="No."
          />
          <VueInputColumn
            :edit-render="gridRegisterLocationEditRender"
            field="registerLocation"
            show-overflow="tooltip"
            title="ロケーション"
            width="150px"
          />
          <VueValueListColumn
            :formatter="gridLocationTypeFormatter"
            :edit-render="gridLocationTypeEditRender"
            field="locationType"
            :clearable="true"
            title="ロケーションタイプ"
            width="155px"
          />
          <VueInputColumn
            :edit-render="gridRegisterQtyEditRender"
            field="registerQty"
            show-overflow="tooltip"
            align="right"
            title="棚入数"
            width="100px"
          />
          <VueValueListColumn
            :formatter="gridRegisterDateFormatter"
            :edit-render="gridRegisterDateEditRender"
            field="registerDate"
            :clearable="true"
            align="center"
            title="棚入日"
            width="165px"
          />
        </VueTable>
      </VuePanel>
    </VueFlex>
  </VueForm>
</template>
