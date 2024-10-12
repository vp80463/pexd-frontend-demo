<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_WCgmWPage from '/src/views/fileLoad/fileImport.vue';
import { formatPrice, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const detailPanelModel = ref(true);
const confirmDisabled = ref(true);
const nowPartsCode = ref();
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
  name: 'spm0413_01Copy',
});
const form = ref();
const viy2Flex_sWIMg = ref();
const viy2Panel_1px4p = ref();
const viy2Button_4y4SGu = ref();
const viy2Button_qRgYt = ref();
const viy2Button_4y4Sfk = ref();
const viy2Row_sX5ur = ref();
const queryForm = ref();
const viy2InputBox_qMP3P = ref();
const viy2Flex_sWQtZ = ref();
const detailPanel = ref();
const viy2Button_5GLRO0 = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Dialog_WC1Ro = ref();
const viy2Subpage_WCgmW = ref();
const formData = reactive({
});
const queryFormData = reactive({
  memo: '',
});
const gridRules = {
  orderQtyro: [
    { required: true, message: t('errors.required', [t('label.orderQuantity')]) },
    {
      validator(rule) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (rule.row.orderQty <= 0) {
              reject(new Error(t('M.E.00200', [t('label.orderQuantity'), '0'])));
            } else {
              resolve();
            }
          }, 100);
        });
      },
    },
  ],
  orderQtyeo: [
    { required: true, message: t('errors.required', [t('label.orderQuantity')]) },
    {
      validator(rule) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (rule.row.orderQty <= 0) {
              reject(new Error(t('M.E.00200', [t('label.orderQuantity'), '0'])));
            } else {
              resolve();
            }
          }, 100);
        });
      },
    },
  ],
};
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
const viy2Button_4y4SGuClick = () => {
  const tableDataList = grid.value.getTableData().fullData;
  queryForm.value.validate((valid, fields) => {
    if (valid) {
      if (tableDataList.length > 0) {
        grid.value.fullValidate(tableDataList).then((valid) => {
          if (!valid) {
            confirmDsApi.runAsync();
          }
        });
      }
    }
  });
}
;
const viy2Button_qRgYtClick = () => {
  VueMessageBox.confirm(t('M.W.00001'), 'Warning', {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_4y4SfkClick = () => {
  const tableDataList = grid.value.getTableData().fullData;
  queryForm.value.validate((valid, fields) => {
    if (valid) {
      if (tableDataList.length > 0) {
        grid.value.fullValidate(tableDataList).then((valid) => {
          if (!valid) {
            confirmDsApi.runAsync();
          }
        });
      }
    }
  });
}
;
const viy2Button_5GLRO0Click = () => {
  const tableDataList = grid.value.getTableData().fullData;
  queryForm.value.validate((valid, fields) => {
    if (valid) {
      if (tableDataList.length > 0) {
        grid.value.fullValidate(tableDataList).then((valid) => {
          if (!valid) {
            confirmDsApi.runAsync();
          }
        });
      }
    }
  });
}
;
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
const gridRecomandpurchaseqtyroFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridRecomandpurchaseqtyroEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridRecomandpurchaseqtyeoFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridRecomandpurchaseqtyeoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOrderQtyroFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridOrderQtyroEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      min: 1,
      precision: 0,
      textAlign: 'right',
    },
  };
});
const gridOrderQtyeoFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridOrderQtyeoEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      min: 1,
      precision: 0,
      textAlign: 'right',
    },
  };
});
const gridPriceFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPrice(row.cellValue);
  }
  return row.cellValue;
};
const gridPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnhandqtyFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridOnhandqtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnreceivingFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridOnreceivingEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnpurchaseqtyFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridOnpurchaseqtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAllocateqtyFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridAllocateqtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnboqtyFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridOnboqtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnpicingqtyFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridOnpicingqtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
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
    <VueFlex
      id="viy2Flex_sWIMg"
      ref="viy2Flex_sWIMg"
      direction="column"
      class="full-height"
    >
      <VuePanel id="viy2Panel_1px4p" ref="viy2Panel_1px4p" title="発注情報">
        <template #header>
          <div style="width: auto">
            <VueButton id="viy2Button_4y4SGu" ref="viy2Button_4y4SGu" icon-position="left" @click="viy2Button_4y4SGuClick">
              検索
            </VueButton>
            <VueButton id="viy2Button_qRgYt" ref="viy2Button_qRgYt" icon-position="left" @click="viy2Button_qRgYtClick">
              クリア
            </VueButton>
            <VueButton id="viy2Button_4y4Sfk" ref="viy2Button_4y4Sfk" icon-position="left" type="info" :disabled="confirmDisabled" @click="viy2Button_4y4SfkClick">
              保存
            </VueButton>
          </div>
        </template>
        <VueRow
          id="viy2Row_sX5ur"
          ref="viy2Row_sX5ur"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueForm
              id="queryForm"
              ref="queryForm"
              :model="queryFormData"
            >
              <VueFormItem
                label="コメント"
                prop="memo"
              >
                <VueInput
                  id="viy2InputBox_qMP3P"
                  ref="viy2InputBox_qMP3P"
                  v-model="queryFormData.memo"
                  :clearable="true"
                  :style="{ width: '250px' }"
                />
              </VueFormItem>
            </VueForm>
          </VueCol>
        </VueRow>
      </VuePanel>
      <VueFlex
        id="viy2Flex_sWQtZ"
        ref="viy2Flex_sWQtZ"
        direction="column"
        grow="1"
      >
        <VuePanel id="detailPanel" ref="detailPanel" v-model="detailPanelModel" title="明細情報" :collapse="false" height="100%" collapse-icon-position="left">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5GLRO0" ref="viy2Button_5GLRO0" icon-position="left" @click="viy2Button_5GLRO0Click">
                発注検討再計算
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :show-footer="true" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
              title="No."
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
              :clearable="true"
              title="部品番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              title="部品名称"
              width="200px"
            />
            <VueNumberColumn
              :formatter="gridRecomandpurchaseqtyroFormatter"
              :edit-render="gridRecomandpurchaseqtyroEditRender"
              field="recomandpurchaseqtyro"
              align="right"
              title="発注検討数(通常)"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridRecomandpurchaseqtyeoFormatter"
              :edit-render="gridRecomandpurchaseqtyeoEditRender"
              field="recomandpurchaseqtyeo"
              align="right"
              title="発注検討数(緊急)"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOrderQtyroFormatter"
              :edit-render="gridOrderQtyroEditRender"
              field="orderQtyro"
              align="right"
              aggregate="sum"
              :min="1"
              :precision="0"
              title="通常発注数量"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOrderQtyeoFormatter"
              :edit-render="gridOrderQtyeoEditRender"
              field="orderQtyeo"
              align="right"
              aggregate="sum"
              :min="1"
              :precision="0"
              title="緊急発注数量"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridPriceFormatter"
              :edit-render="gridPriceEditRender"
              field="price"
              align="right"
              title="標準小売価格"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnhandqtyFormatter"
              :edit-render="gridOnhandqtyEditRender"
              field="onhandqty"
              align="right"
              title="在庫数"
              width="170px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnreceivingFormatter"
              :edit-render="gridOnreceivingEditRender"
              field="onreceiving"
              align="right"
              title="発注残数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnpurchaseqtyFormatter"
              :edit-render="gridOnpurchaseqtyEditRender"
              field="onpurchaseqty"
              align="right"
              title="入荷中数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridAllocateqtyFormatter"
              :edit-render="gridAllocateqtyEditRender"
              field="allocateqty"
              align="right"
              title="引当数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnboqtyFormatter"
              :edit-render="gridOnboqtyEditRender"
              field="onboqty"
              align="right"
              title="BO数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnpicingqtyFormatter"
              :edit-render="gridOnpicingqtyEditRender"
              field="onpicingqty"
              align="right"
              title="ピック中数"
              width="100px"
              header-align="center"
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
