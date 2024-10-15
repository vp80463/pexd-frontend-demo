<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import viy2Subpage_WCgmWPage from '';
import { formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const detailPanelModel = ref(true);
const confirmDisabled = ref(true);
const nowPartsCode = ref();
const queryFormData = ref();
const importInfo = ref({
  programid: 'SPM040601',
  templatename: 'SPM040601_template.xlsx',
  downloadfilename: 'SPM040601ImportExample.xlsx',
  savewarningmsg: 'Do you want to import this file?',
});
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const currentDay = dayjs().format('YYYYMMDD');
let point;
let pointId;
let pointCd;
let pointNm;
let supplier;
let supplierId;
let supplierCd;
let supplierNm;
defineOptions({
  name: 'spm0407_01',
});
const form = ref();
const viy2Row_CYw02 = ref();
const Button = ref();
const viy2Flex_sWIMg = ref();
const viy2Flex_sWQtZ = ref();
const detailPanel = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Dialog_WC1Ro = ref();
const viy2Subpage_WCgmW = ref();
const formData = reactive({
});
const importWindowShowFlag = ref(false);
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
});
const gridMouseConfig = reactive({
  extension: true,
});
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
});
const brandDs = brandDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0406/confirmPurchaseOrder.json',
  method: 'post',
  data: () => {
    const gridDataList = grid.value.getTableData().fullData;
    queryFormData.gridDataList = gridDataList;
    return Object.assign({}, queryFormData);
  },
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
    grid.value.remove();
    confirmDisabled.value = true;
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const partsAutoFillDsApi = useApi({
  url: '/common/valuelist/yamahaPartsList.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const partsAutoFillDs = partsAutoFillDsApi.data;
const gridDsApi = useApi({
  method: 'post',
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const supplierDsApi = useApi({
  url: '/common/helper/supplierList.json',
  method: 'post',
  data: {},
}, {
  onSuccess: (data) => {
    supplier = data[0].desc;
    supplierId = data[0].id;
    supplierCd = data[0].code;
    supplierNm = data[0].name;
    queryFormData.supplier = supplier;
    queryFormData.supplierId = supplierId;
    queryFormData.supplierCd = supplierCd;
    queryFormData.supplierNm = supplierNm;
  },
});
const supplierDs = supplierDsApi.data;
const orderCategoryTypeDsApi = useApi({
  url: '/common/helper/getOrderCategoryTypeList.json',
  method: 'post',
  data: {
    arg0: 'S043',
  },
}, {
  initialData: {
    data: [],
  },
});
const orderCategoryTypeDs = orderCategoryTypeDsApi.data;
const partsAutoFill2DsApi = useApi({
  url: '/common/valuelist/yamahaPartsList.json',
  method: 'post',
  data: () => {
    return {
      partsCd: nowPartsCode.value,
      autoFillFlag: YES_NO_FLAG.YES,
      facilityId: queryFormData.pointId,
      pageSize: 1,
      currentPage: 1,
    };
  },
  lockScreen: false,
}, {
  manual: true,
});
const partsAutoFill2Ds = partsAutoFill2DsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const productCtgDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
});
const productCtgDs = productCtgDsApi.data;
const gridPurchaseNoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      clearable: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
    },
  };
});
const gridPurchasedateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      clearable: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
    },
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPurchaseqtyFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridPurchaseqtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPurchaseboqtyFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridPurchaseboqtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCancelqtyFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridCancelqtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridResultEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  pointId = uc.defaultPointId;
  pointCd = uc.defaultPointCd;
  pointNm = uc.defaultPointNm;
  queryFormData.point = point;
  queryFormData.pointId = pointId;
  queryFormData.pointCd = pointCd;
  queryFormData.pointNm = pointNm;
  queryFormData.deliveryPlanDate = currentDay;
});
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  queryFormData.deliveryPlanDate = currentDay;
  queryFormData.point = point;
  queryFormData.pointId = pointId;
  queryFormData.pointCd = pointCd;
  queryFormData.pointNm = pointNm;
  queryFormData.supplier = supplier;
  queryFormData.supplierId = supplierId;
  queryFormData.supplierCd = supplierCd;
  queryFormData.supplierNm = supplierNm;
  resetTblResults();
};
const resetTblResults = () => {
  grid.value.remove();
  confirmDisabled.value = true;
};
const onDelRow = (row) => {
  grid.value.remove(row);
  if (grid.value.getTableData().fullData.length === 0) {
    confirmDisabled.value = true;
  }
};
const handle = (formData) => {
  gridDs.value = formData.importList;
  importWindowShowFlag.value = false;
  confirmDisabled.value = false;
};
const setValueOnPartGrid = (row, params) => {
  row.partsId = params.id;
  row.partsNo = params.code;
  row.partsNm = params.name;
  row.minPurchaseQty = params.minPurQty;
  row.purchaseLot = params.purLotSize;
  row.price = params.price;
  row.stdRetailPrice = params.stdRetailPrice;
};
const clearPartsOnPartsGrid = (row) => {
  row.cancelFlag = 'N';
  row.partsId = null;
  row.partsNo = null;
  row.partsNm = null;
  row.minPurchaseQty = null;
  row.purchaseLot = null;
  row.price = null;
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
    <VueRow
      id="viy2Row_CYw02"
      ref="viy2Row_CYw02"
    >
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 24 }"
      >
        <VueButton id="Button" ref="Button" icon-position="left" type="info">
          保存
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_sWIMg"
      ref="viy2Flex_sWIMg"
      direction="column"
      class="full-height"
    >
      <VueFlex
        id="viy2Flex_sWQtZ"
        ref="viy2Flex_sWQtZ"
        direction="column"
        grow="1"
      >
        <VuePanel id="detailPanel" ref="detailPanel" v-model="detailPanelModel" title="明細情報" :collapse="false" height="100%">
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :show-footer="true" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            <VueSelectionColumn
              align="center"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueValueListColumn
              :edit-render="gridPurchaseNoEditRender"
              field="purchaseNo"
              :clearable="true"
              title="発注NO"
              width="150px"
            />
            <VueDateTimeColumn
              :edit-render="gridPurchasedateEditRender"
              field="purchasedate"
              title="発注日"
              width="120px"
            />
            <VueValueListColumn
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              :clearable="true"
              title="発注部品番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              title="発注部品名"
              width="200px"
            />
            <VueNumberColumn
              :formatter="gridPurchaseqtyFormatter"
              :edit-render="gridPurchaseqtyEditRender"
              field="purchaseqty"
              align="right"
              title="発注数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridPurchaseboqtyFormatter"
              :edit-render="gridPurchaseboqtyEditRender"
              field="purchaseboqty"
              align="right"
              title="発注残"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridCancelqtyFormatter"
              :edit-render="gridCancelqtyEditRender"
              field="cancelqty"
              align="right"
              title="キャンセル数"
              width="120px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridResultEditRender"
              field="result"
              title="キャンセル結果"
              width="200px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
    <VueDialog
      id="viy2Dialog_WC1Ro"
      ref="viy2Dialog_WC1Ro"
      v-model="importWindowShowFlag"
      :title="t('label.fileImport')"
    >
      <template #default>
        <viy2Subpage_WCgmWPage
          id="viy2Subpage_WCgmW"
          ref="viy2Subpage_WCgmW"
          :import-info="importInfo"
          @transferring-data="handle"
        />
      </template>
    </VueDialog>
  </VueForm>
</template>
