<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { parts_column, parts_pop_column } from '@/settings/valuelistSetting.js';
import { formatPartNo, formatQty } from '@/pj-commonutils.js';
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
  name: 'spm0406_01',
});
const form = ref();
const viy2Flex_sWIMg = ref();
const viy2Panel_1uwbS = ref();
const viy2Button_qRgYt = ref();
const viy2Button_5GLRO0 = ref();
const queryForm = ref();
const viy2Row_sX5ur = ref();
const viy2Select_qMAgw = ref();
const viy2InputBox_qMP3P = ref();
const viy2Flex_sWQtZ = ref();
const detailPanel = ref();
const viy2Row_wZvy4 = ref();
const viy2Button_qOu7b = ref();
const viy2Button_4zr7Cc = ref();
const viy2Button_4zr4Xw = ref();
const viy2Button_qOnsr = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const formData = reactive({
});
const queryFormData = reactive({
  type: '', memo: '',
});
const rules = reactive({
  viy2Select_qMAgwRules: [
    {
      required: true,
      message: t('errors.required', [t('label.orderType')]),
    },
  ],
});
const gridRules = {
  partsNo: [{
    required: true,
    message: t('errors.required', [t('label.partsNo')]),
  },
  {
    validator(rule) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (isNoValue(rule.row.partsId)) {
            reject(new Error(t('M.E.00303', [t('label.partsNo'), rule.cellValue, t('label.productInformation')])));
          }
          if (isNoValue(rule.row.partsNo)) {
            resolve();
          }
          const tableDataList = grid.value.getTableData().fullData;
          let duplicated = false;
          for (const key in tableDataList) {
            const item = tableDataList[key];
            if (isNoValue(item.partsNo)) {
              continue;
            }
            if (item.partsNo === rule.row.partsNo) {
              if (duplicated) {
                reject(new Error(t('M.E.00301', [t('label.partsNo')])));
              }
              duplicated = true;
            }
          }
          resolve();
        }, 100);
      });
    },
  },
  ],
  orderQty: [
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
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
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
    },
  ];
};
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
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
  manual: true,
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
  manual: true,
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
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const productCtgDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  manual: true,
});
const productCtgDs = productCtgDsApi.data;
const viy2Button_qRgYtClick = () => {
  VueMessageBox.confirm(t('M.W.00001'), 'Warning', {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
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
const viy2Button_qOu7bClick = () => {
  importWindowShowFlag.value = true;
};
const viy2Button_4zr7CcClick = () => {
  importWindowShowFlag.value = true;
};
const viy2Button_4zr4XwClick = () => {
  importWindowShowFlag.value = true;
};
const viy2Button_qOnsrClick = () => {
  confirmDisabled.value = false;
  const $table = grid.value;
  if ($table) {
    const record = {
      cancelFlag: 'N',
      partsId: null,
      partsNm: null,
      partsNo: null,
      minPurchaseQty: null,
      purchaseLot: null,
      price: null,
      stdRetailPrice: null,
    };
    $table.insertAt(record, -1).then((newRow) => {
      $table.setCurrentRow(newRow.row);
    });
  }
};
const gridPartsNoSelect = (obj, params) => {
  const row = obj.row;
  setValueOnPartGrid(row, params);
};
const gridPartsNoClear = (obj) => {
  const row = obj.row;
  clearPartsOnPartsGrid(row);
};
const gridPartsNoLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    const row = obj.row;
    clearPartsOnPartsGrid(row);
    if (params.currentValue) {
      onLeavePartsCode(row, params.currentValue);
    }
  }
};
const gridPartsNoEvents = reactive({
  select: gridPartsNoSelect,
  clear: gridPartsNoClear,
  leave: gridPartsNoLeave,
});
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPartNo(row.cellValue);
  }
  return row.cellValue;
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: true,
    events: gridPartsNoEvents,
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
            facilityId: queryFormData.pointId,
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
          facilityId: queryFormData.pointId,
          pageSize: pageParams.pageSize,
          currentPage: pageParams.currentPage,
        });
      },
    },
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderQtyFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridOrderQtyEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      min: 1,
      precision: 0,
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
      <VuePanel id="viy2Panel_1uwbS" ref="viy2Panel_1uwbS" title="発注情報">
        <template #header>
          <div style="width: auto">
            <VueButton id="viy2Button_qRgYt" ref="viy2Button_qRgYt" icon-position="left" @click="viy2Button_qRgYtClick">
              クリア
            </VueButton>
            <VueButton id="viy2Button_5GLRO0" ref="viy2Button_5GLRO0" icon-position="left" type="info" :disabled="confirmDisabled" @click="viy2Button_5GLRO0Click">
              保存
            </VueButton>
          </div>
        </template>
        <VueForm
          id="queryForm"
          ref="queryForm"
          :model="queryFormData"
        >
          <VueRow
            id="viy2Row_sX5ur"
            ref="viy2Row_sX5ur"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="発注タイプ"
                prop="type"
                :rules="rules.viy2Select_qMAgwRules"
              >
                <VueSelect
                  id="viy2Select_qMAgw"
                  ref="viy2Select_qMAgw"
                  v-model="queryFormData.type"
                  :style="{ width: '150px' }"
                  :collapse-tags="true"
                  :filterable="true"
                  :clearable="true"
                  :collapse-tags-tooltip="true"
                  :options="orderCategoryTypeDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
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
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VueFlex
        id="viy2Flex_sWQtZ"
        ref="viy2Flex_sWQtZ"
        direction="column"
        grow="1"
      >
        <VuePanel id="detailPanel" ref="detailPanel" v-model="detailPanelModel" title="明細情報" :collapse="false" height="100%">
          <template #header>
            <div style="width: 400px">
              <VueRow
                id="viy2Row_wZvy4"
                ref="viy2Row_wZvy4"
              >
                <VueCol
                  v-show="detailPanelModel"
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_qOu7b" ref="viy2Button_qOu7b" icon-position="left" @click="viy2Button_qOu7bClick">
                    ファイル取込
                  </VueButton>
                  <VueButton id="viy2Button_4zr7Cc" ref="viy2Button_4zr7Cc" icon-position="left" @click="viy2Button_4zr7CcClick">
                    YPEC
                  </VueButton>
                  <VueButton id="viy2Button_4zr4Xw" ref="viy2Button_4zr4Xw" icon-position="left" @click="viy2Button_4zr4XwClick">
                    部品選択
                  </VueButton>
                  <VueButton id="viy2Button_qOnsr" ref="viy2Button_qOnsr" icon-position="left" @click="viy2Button_qOnsrClick">
                    行追加
                  </VueButton>
                </VueCol>
              </VueRow>
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
            <VueValueListColumn
              :formatter="gridPartsNoFormatter"
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
              :formatter="gridOrderQtyFormatter"
              :edit-render="gridOrderQtyEditRender"
              field="orderQty"
              align="right"
              aggregate="sum"
              :min="1"
              :precision="0"
              title="発注数"
              width="140px"
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
              :formatter="gridOnpurchaseqtyFormatter"
              :edit-render="gridOnpurchaseqtyEditRender"
              field="onpurchaseqty"
              align="right"
              title="発注残数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnreceivingFormatter"
              :edit-render="gridOnreceivingEditRender"
              field="onreceiving"
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
            <VueButtonColumn
              align="center"
              fixed="right"
              width="60px"
              :buttons="gridViy2TableButtonColumn_lLxpTButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
