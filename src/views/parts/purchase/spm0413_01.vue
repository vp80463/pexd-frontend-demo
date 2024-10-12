<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { parts_column, parts_pop_column } from '@/settings/valuelistSetting.js';
import { formatPartNo } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const confirmDisabled = ref(true);
const nowPartsCode = ref();
const importInfo = ref({
  programid: 'SPM041301',
  templatename: 'SPM041301_template.xlsx',
  downloadfilename: 'SPM041301ImportExample.xlsx',
  savewarningmsg: 'Do you want to import this file?',
});
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
let point;
let pointId;
let pointCd;
let pointNm;
defineOptions({
  name: 'spm0413_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_4yEnxa = ref();
const queryForm = ref();
const viy2Flex_QL2OS = ref();
const headerPanel = ref();
const viy2Row_rnR1T = ref();
const viy2Select_oObZu = ref();
const viy2InputBox_RfsMSE = ref();
const viy2Flex_QL605 = ref();
const detailPanel = ref();
const viy2Row_zQgmS = ref();
const viy2Button_A5lhu = ref();
const viy2Button_zQhQu = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2CheckBox_5O6I7x = ref();
const formData = reactive({
});
const queryFormData = reactive({
  point: '', memo: '',
});
const rules = reactive({
  viy2Select_oObZuRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
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
const viy2CheckBox_5O6I7xOpts = [
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
];
const gridViy2TableButtonColumn_GxNS1Buttons = (scope) => {
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
const confirmDsApi = useApi({
  url: '/parts/spm0413/confirmPurchaseOrder.json',
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
const productCtgDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
});
const productCtgDs = productCtgDsApi.data;
const partsAutoFillDsApi = useApi({
  url: '/common/valuelist/yamahaPartsList.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const partsAutoFillDs = partsAutoFillDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
});
const brandDs = brandDsApi.data;
const gridDsApi = useApi({
  method: 'post',
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
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
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_4yEnxaClick = () => {
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
const viy2Select_oObZuChange = (value, data) => {
  queryFormData.pointId = data.id;
  queryFormData.pointCd = data.code;
  queryFormData.pointNm = data.name;
};
const viy2Button_A5lhuClick = () => {
  importWindowShowFlag.value = true;
};
const viy2Button_zQhQuClick = () => {
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
const gridPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridMinPurchaseQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPurchaseLotEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
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
const gridBoCancelSignEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
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
});
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  queryFormData.point = point;
  queryFormData.pointId = pointId;
  queryFormData.pointCd = pointCd;
  queryFormData.pointNm = pointNm;
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
        <VueButton id="viy2Button_4yEnxa" ref="viy2Button_4yEnxa" icon-position="left" type="info" :disabled="confirmDisabled" @click="viy2Button_4yEnxaClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      :model="queryFormData"
    >
      <VueFlex
        id="viy2Flex_QL2OS"
        ref="viy2Flex_QL2OS"
        direction="column"
        class="full-height"
      >
        <VuePanel id="headerPanel" ref="headerPanel" :collapse="false" :title="t('label.header')" class="margin-top-div0 except-height-css">
          <VueRow
            id="viy2Row_rnR1T"
            ref="viy2Row_rnR1T"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                :label="t('label.point')"
                prop="point"
                :rules="rules.viy2Select_oObZuRules"
              >
                <VueSelect
                  id="viy2Select_oObZu"
                  ref="viy2Select_oObZu"
                  v-model="queryFormData.point"
                  :style="{ width: '250px' }"
                  :collapse-tags="true"
                  :filterable="true"
                  :clearable="true"
                  :collapse-tags-tooltip="true"
                  :options="pointDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                  @change="viy2Select_oObZuChange"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.memo')"
                prop="memo"
              >
                <VueInput
                  id="viy2InputBox_RfsMSE"
                  ref="viy2InputBox_RfsMSE"
                  v-model="queryFormData.memo"
                  :style="{ width: '250px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
        <VueFlex
          id="viy2Flex_QL605"
          ref="viy2Flex_QL605"
          direction="column"
          grow="1"
        >
          <VuePanel id="detailPanel" ref="detailPanel" v-model="detailPanelModel" :title="t('label.detail')" :collapse="false" height="100%">
            <template #header>
              <div style="width: 400px">
                <VueRow
                  id="viy2Row_zQgmS"
                  ref="viy2Row_zQgmS"
                >
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    :md="{ span: 24 }"
                  >
                    <VueButton id="viy2Button_A5lhu" ref="viy2Button_A5lhu" icon-position="left" @click="viy2Button_A5lhuClick">
                      {{ t('button.import') }}
                    </VueButton>
                    <VueButton id="viy2Button_zQhQu" ref="viy2Button_zQhQu" icon-position="left" class="icon-button-width" @click="viy2Button_zQhQuClick">
                      +
                    </VueButton>
                  </VueCol>
                </VueRow>
              </div>
            </template>
            <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
              <VueValueListColumn
                :formatter="gridPartsNoFormatter"
                :edit-render="gridPartsNoEditRender"
                field="partsNo"
                show-overflow="tooltip"
                :clearable="true"
                width="250px"
                :title="t('label.partsNo')"
              />
              <VueInputColumn
                :edit-render="gridPartsNmEditRender"
                field="partsNm"
                :title="t('label.partsName')"
                width="200px"
              />
              <VueNumberColumn
                :edit-render="gridPriceEditRender"
                field="price"
                align="right"
                :title="t('label.price')"
                width="120px"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMinPurchaseQtyEditRender"
                field="minPurchaseQty"
                align="right"
                :title="t('label.minPurchaseQuantity')"
                width="170px"
                header-align="center"
              />
              <VueInputColumn
                :edit-render="gridPurchaseLotEditRender"
                field="purchaseLot"
                aggregate="sum"
                show-overflow="tooltip"
                align="right"
                :title="t('label.purchaseLot')"
                width="140px"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridOrderQtyEditRender"
                field="orderQty"
                align="right"
                :min="1"
                :precision="0"
                :title="t('label.orderQuantity')"
                width="130px"
                header-align="center"
              />
              <VueTemplateColumn
                :edit-render="gridBoCancelSignEditRender"
                align="center"
                field="boCancelSign"
                :title="t('label.boCancelSign')"
                width="140px"
              >
                <template #default="scope">
                  <VueCheckbox
                    id="viy2CheckBox_5O6I7x"
                    ref="viy2CheckBox_5O6I7x"
                    v-model="scope.row.cancelFlag"
                    true-label="Y"
                    false-label="N"
                  />
                </template>
              </VueTemplateColumn>
              <VueButtonColumn
                fixed="right"
                align="center"
                width="60px"
                :buttons="gridViy2TableButtonColumn_GxNS1Buttons"
              />
            </VueTable>
          </VuePanel>
        </VueFlex>
      </VueFlex>
    </VueForm>
  </VueForm>
</template>
