<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import {
  parts_column, parts_pop_column,
} from '@/settings/valuelistSetting.js';
const props = defineProps({
  initData: Object,
});
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const partsDsApi1 = useApi({ url: '/common/valuelist/partsList.json', method: 'post' }, { manual: true });
const detailPanelModel = ref(true);
const deleteDisabled = ref(true);
const otherButtonDisabled = ref(true);
const deleteFlag = ref(true);
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
let purchaseOrderId = null;
const nowPartsCode = ref();
defineOptions({
  name: 'spm0404_02',
});
const form = ref();
const viy2Flex_QK8gS = ref();
const viy2Row_3Gyq1K = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_5HLr5M = ref();
const viy2InputBox_5HGG5M = ref();
const viy2InputBox_5HT2sW = ref();
const viy2InputBox_5HQe34 = ref();
const viy2DateTimePicker_5k94S8 = ref();
const viy2Flex_QKd3V = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_3GAG2S = ref();
const viy2Button_3GAG33 = ref();
const viy2Button_nbqsw = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const formData = reactive({
});
const orderFormData = reactive({
  poNo: '', orderType: '', supplierOrderNo: '', orderStatus: '', orderDate: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  beforeEditMethod: (obj) => {
    const row = obj.row;
    if (!isNoValue(row.purchaseOrderItemId) && obj.column.property === 'partsNo') {
      return false;
    }
    return !otherButtonDisabled.value;
  },
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_lLxpTButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRow,
      title: 'Delete',
      disabled: !deleteFlag,
      hidden: !deleteFlag,
    },
  ];
};
const confirmDsApi = useApi({
  url: '/parts/spm0404/confirmPurchaseOrderItemList.json',
  method: 'post',
  data: () => {
    const gridDataList = grid.value.getTableData().fullData;
    orderFormData.gridDataList = gridDataList;
    orderFormData.purchaseOrderId = purchaseOrderId;
    return Object.assign({}, orderFormData);
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    emit('close');
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const issueDsApi = useApi({
  url: '/parts/spm0404/issuePurchaseOrderItemList.json',
  method: 'post',
  data: () => {
    const gridDataList = grid.value.getTableData().fullData;
    orderFormData.gridDataList = gridDataList;
    orderFormData.purchaseOrderId = purchaseOrderId;
    return Object.assign({}, orderFormData);
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    emit('close');
  },
  manual: true,
});
const issueDs = issueDsApi.data;
const deleteDsApi = useApi({
  url: '/parts/spm0404/deletePurchaseOrder.json',
  method: 'post',
  data: () => {
    return {
      purchaseOrderId,
    };
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    emit('close');
  },
  manual: true,
});
const deleteDs = deleteDsApi.data;
const partsAutoFill2DsApi = useApi({
  url: '/common/valuelist/yamahaPartsList.json',
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
const gridDsApi = useApi({
  url: '/parts/spm0404/getPurchaseOrderItemList.json',
  method: 'post',
  data: () => {
    return {
      purchaseOrderId,
    };
  },
}, {
  onSuccess: (data) => {
    orderFormData.poNo = data.poNo;
    orderFormData.orderNo = data.poNo;
    orderFormData.updateCount = data.updateCount;
    orderFormData.purchaseOrderId = data.purchaseOrderId;
    orderFormData.orderType = data.orderType;
    orderFormData.orderDate = data.orderDate;
    orderFormData.supplier = data.supplier;
    orderFormData.method = data.method;
    orderFormData.point = data.point;
    orderFormData.deliveryPlanDate = data.deliveryPlanDate;
    orderFormData.orderPic = data.orderPic;
    orderFormData.orderStatus = data.orderStatus;
    orderFormData.supplierOrderNo = data.supplierOrderNo;
    orderFormData.memo = data.memo;
    otherButtonDisabled.value = data.otherButtonDisabled;
    deleteDisabled.value = data.deleteDisabled;
    deleteFlag.value = data.deleteFlag;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const partsAutoFillDsApi = useApi({
  url: '/common/valuelist/yamahaPartsList.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const partsAutoFillDs = partsAutoFillDsApi.data;
const productCtgDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
});
const productCtgDs = productCtgDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
});
const brandDs = brandDsApi.data;
const viy2Button_3GAG33Click = () => {
  const $table = grid.value;
  if ($table) {
    const record = {
      partsId: null,
      partsNm: null,
      partsNo: null,
      minPurchaseQty: null,
      purchaseLot: null,
      price: null,
      cancelFlag: null,
    };
    $table.insertAt(record, -1).then((newRow) => {
      $table.setCurrentRow(newRow.row);
    });
  }
};
const gridSeqNoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridPartsNoEditRender = computed(() => {
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
    },
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      min: 1,
      precision: 0,
      textAlign: 'right',
    },
  };
});
const gridBoPurchaseEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
});
watch(() => props.initData, (newVal) => {
  if (newVal) {
    purchaseOrderId = newVal.purchaseOrderId;
    gridDsApi.runAsync();
  }
}, {
  immediate: true,
  deep: true,
});
const onDelRow = (row) => {
  grid.value.remove(row);
};
const setValueOnPartGrid = (row, params) => {
  row.partsId = params.id;
  row.partsNo = params.code;
  row.partsNm = params.name;
  row.minPurchaseQty = params.minPurQty;
  row.purchaseLot = params.salLotSize;
  row.price = params.price;
  row.cancelFlag = 'N';
  row.stdRetailPrice = params.stdRetailPrice;
};
const clearPartsOnPartsGrid = (row) => {
  row.partsId = null;
  row.partsNm = null;
  row.minPurchaseQty = null;
  row.purchaseLot = null;
  row.price = null;
  row.cancelFlag = 'N';
  row.stdRetailPrice = null;
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
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_QK8gS"
      ref="viy2Flex_QK8gS"
      direction="column"
      class="full-height"
    >
      <VueRow
        id="viy2Row_3Gyq1K"
        ref="viy2Row_3Gyq1K"
      >
        <VueCol
          v-show="detailPanelModel"
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 24 }"
        />
      </VueRow>
      <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" title="発注情報" class="margin-top-aside">
        <VueForm
          id="orderForm"
          ref="orderForm"
          label-width="150px"
          :model="orderFormData"
        >
          <VueRow
            id="viy2Row_3mqzSt"
            ref="viy2Row_3mqzSt"
          >
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="発注番号"
                prop="poNo"
              >
                <VueInput
                  id="viy2InputBox_5HLr5M"
                  ref="viy2InputBox_5HLr5M"
                  v-model="orderFormData.poNo"
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
                label="発注種類"
                prop="orderType"
              >
                <VueInput
                  id="viy2InputBox_5HGG5M"
                  ref="viy2InputBox_5HGG5M"
                  v-model="orderFormData.orderType"
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
                label="仕入先受注番号"
                prop="supplierOrderNo"
              >
                <VueInput
                  id="viy2InputBox_5HT2sW"
                  ref="viy2InputBox_5HT2sW"
                  v-model="orderFormData.supplierOrderNo"
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
                label="発注状況"
                prop="orderStatus"
              >
                <VueInput
                  id="viy2InputBox_5HQe34"
                  ref="viy2InputBox_5HQe34"
                  v-model="orderFormData.orderStatus"
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
                label="発注日"
                prop="orderDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_5k94S8"
                  ref="viy2DateTimePicker_5k94S8"
                  v-model="orderFormData.orderDate"
                  type="date"
                  :disabled="false"
                  :readonly="true"
                  class="no-border"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            />
          </VueRow>
        </VueForm>
      </VuePanel>
      <VueFlex
        id="viy2Flex_QKd3V"
        ref="viy2Flex_QKd3V"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" title="明細情報" height="100%">
          <template #header>
            <div style="width: 400px">
              <VueRow
                id="viy2Row_3GAG2S"
                ref="viy2Row_3GAG2S"
              >
                <VueCol
                  v-show="detailPanelModel"
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton v-show="!otherButtonDisabled" id="viy2Button_3GAG33" ref="viy2Button_3GAG33" icon-position="left" :disabled="otherButtonDisabled === 'Y'" class="icon-button-width" @click="viy2Button_3GAG33Click">
                    +
                  </VueButton>
                  <VueButton id="viy2Button_nbqsw" ref="viy2Button_nbqsw" icon-position="left" type="danger">
                    発注キャンセル
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :show-footer="true" :data="gridDs.tableDataList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            <VueNumberColumn
              :edit-render="gridSeqNoEditRender"
              field="seqNo"
              align="center"
              show-overflow="tooltip"
              title="No."
              width="90px"
              header-align="center"
            />
            <VueSelectionColumn
              align="center"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueValueListColumn
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              show-overflow="tooltip"
              :clearable="true"
              title="部品番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              show-overflow="tooltip"
              title="部品名称"
              width="240px"
              min-width="140px"
            />
            <VueNumberColumn
              :edit-render="gridOrderQtyEditRender"
              field="orderQty"
              align="right"
              aggregate="sum"
              :min="1"
              :precision="0"
              title="発注数"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridBoPurchaseEditRender"
              field="boPurchase"
              align="right"
              :aggregate-label="t('label.total')"
              title="発注残数"
              width="120px"
              header-align="center"
            />
            <VueButtonColumn
              v-if="false"
              align="center"
              fixed="right"
              :visible="false"
              width="60px"
              :buttons="gridViy2TableButtonColumn_lLxpTButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
