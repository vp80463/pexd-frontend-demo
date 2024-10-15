<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
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
  name: 'spq0309_01',
});
const form = ref();
const viy2Panel_2rs6nZ = ref();
const viy2Button_a6AHru = ref();
const resetBtn = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_5k94Sg = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const printBtn = ref();
const viy2Button_10DK24 = ref();
const grid = ref();
const viy2Row_7yiZLF = ref();
const formData = reactive({
});
const orderFormData = reactive({
  invoiceNo: '',
});
const gridRules = {
  receiptPartsNo: [
    { required: true, message: 'name required' },
  ],
  totalReceiptQty: [
    { required: true, message: 'name required' },
  ],
};
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_DYaB6Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRow,
      title: 'Delete',
    },
  ];
};
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
  url: '/parts/spm0301/getReceiptManifestItemList.json',
  method: 'post',
  data: () => {
    return {
      caseNo,
      point,
      pointId,
      supplier,
    };
  },
}, {
  onSuccess: (data) => {
    orderFormData.point = data.point;
    orderFormData.pointId = data.pointId;
    orderFormData.supplier = data.supplier;
    orderFormData.invoiceNo = data.invoiceNo;
    orderFormData.firstCaseNo = data.firstCaseNo;
    orderFormData.updateCount = data.updateCount;
  },
  manual: true,
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
const viy2Button_a6AHruClick = () => {
  const allTableDataList = grid.value.getTableData().fullData;
  if (allTableDataList.length > 0) {
    grid.value.validate((valid) => {
      if (!valid) {
        checkDsApi.runAsync({
          allTableDataList,
          pointId: orderFormData.pointId,
        });
      }
    });
  }
};
const resetBtnClick = () => {
  const allTableDataList = grid.value.getTableData().fullData;
  if (allTableDataList.length > 0) {
    grid.value.validate((valid) => {
      if (!valid) {
        checkDsApi.runAsync({
          allTableDataList,
          pointId: orderFormData.pointId,
        });
      }
    });
  }
};
const printBtnClick = () => {
  const allTableDataList = grid.value.getTableData().fullData;
  if (allTableDataList.length > 0) {
    grid.value.validate((valid) => {
      if (!valid) {
        checkDsApi.runAsync({
          allTableDataList,
          pointId: orderFormData.pointId,
        });
      }
    });
  }
};
const gridReceiptPartsNoSelect = (obj, params) => {
  const row = obj.row;
  setValueOnPartGrid(row, params);
};
const gridReceiptPartsNoClear = (obj) => {
  const row = obj.row;
  clearPartsOnPartsGrid(row);
};
const gridReceiptPartsNoLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    const row = obj.row;
    clearPartsOnPartsGrid(row);
    if (params.currentValue) {
      onLeavePartsCode(row, params.currentValue);
    }
  }
};
const gridReceiptPartsNoEvents = reactive({
  select: gridReceiptPartsNoSelect,
  clear: gridReceiptPartsNoClear,
  leave: gridReceiptPartsNoLeave,
});
const gridReceiptPartsNoFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPartNo(row.cellValue);
  }
  return row.cellValue;
};
const gridReceiptPartsNoEditRender = computed(() => {
  return {
    enabled: true,
    events: gridReceiptPartsNoEvents,
    attrs: {
      clearable: true,
      selectField: 'code',
      usePopover: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      popoverColumns: parts_column,
      popoverQueryMethod: ({ value, pageParams }) => {
        if (value) {
          return partsAutoFillDsApi.runAsync({
            content: value,
            autoFillFlag: YES_NO_FLAG.YES,
            facilityId: orderFormData.pointId,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage,
          });
        } else {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({ total: 0, list: [] });
            }, 500);
          });
        }
      },
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
      popupQueryMethod: ({ code, batteryFlag, brandId, prodCtg, pageParams }) => {
        return partsAutoFillDsApi.runAsync({
          code,
          batteryFlag,
          brandId,
          prodCtg,
          autoFillFlag: YES_NO_FLAG.YES,
          facilityId: orderFormData.pointId,
          pageSize: pageParams.pageSize,
          currentPage: pageParams.currentPage,
        });
      },
      closeOnClickModal: true,
    },
  };
});
const gridOrderPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOnPurchaseQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTotalReceiptQtyEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'right',
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
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" title="検索条件" height="100%">
      <template #header>
        <div style="width: auto">
          <VueButton id="viy2Button_a6AHru" ref="viy2Button_a6AHru" icon-position="left" type="info" @click="viy2Button_a6AHruClick">
            検索
          </VueButton>
          <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
            クリア
          </VueButton>
        </div>
      </template>
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
              label="受付番号"
              prop="invoiceNo"
            >
              <VueInput
                id="viy2InputBox_5k94Sg"
                ref="viy2InputBox_5k94Sg"
                v-model="orderFormData.invoiceNo"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" title="明細情報">
      <template #header>
        <div style="width: auto">
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
            >
              <VueButton id="printBtn" ref="printBtn" icon-position="left" @click="printBtnClick">
                印刷
              </VueButton>
              <VueButton id="viy2Button_10DK24" ref="viy2Button_10DK24" icon-position="left" class="icon-button-width">
                行追加
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="grid" ref="grid" :show-footer="true" :data="gridDs.tableDataList" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
        <VueValueListColumn
          :formatter="gridReceiptPartsNoFormatter"
          :edit-render="gridReceiptPartsNoEditRender"
          field="receiptPartsNo"
          :clearable="true"
          title="部品番号"
          width="165px"
        />
        <VueInputColumn
          :edit-render="gridOrderPartsNmEditRender"
          field="orderPartsNm"
          show-overflow="tooltip"
          title="部品名称"
          min-width="160px"
        />
        <VueNumberColumn
          :edit-render="gridOnPurchaseQtyEditRender"
          field="onPurchaseQty"
          align="right"
          title="相手先部品番号"
          width="150px"
        />
        <VueNumberColumn
          :edit-render="gridTotalReceiptQtyEditRender"
          field="totalReceiptQty"
          align="right"
          title="印刷枚数"
          width="180px"
        />
        <VueButtonColumn
          fixed="right"
          align="center"
          width="60px"
          :buttons="gridViy2TableButtonColumn_DYaB6Buttons"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
