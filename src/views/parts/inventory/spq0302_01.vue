<script setup>
import { IconArrowLeftBold, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { formatAmount, formatPartNo, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const initializedFlag = ref(true);
const exportDisabledFlag = ref(true);
const confirmFlag = ref(true);
const uc = useUser().userInfo;
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
const lastDay = dayjs().format('YYYYMMDD');
const nowPartsCode = ref();
defineOptions({
  name: 'spq0302_01',
});
const form = ref();
const viy2Flex_30NgZ = ref();
const queryForm = ref();
const viy2Panel_2YQWX = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_lOY8w = ref();
const viy2Select_1rPSyEH = ref();
const viy2ValueList_12KKOs = ref();
const viy2DateTimePicker_1MmOIm = ref();
const viy2DateTimePicker_1MmOIy = ref();
const viy2Button_1MmOIz = ref();
const viy2Button_hNGbam = ref();
const viy2Select_1PZzk4 = ref();
const viy2ValueList_hNGbc5 = ref();
const viy2Row_hNGbc7 = ref();
const viy2Flex_KbAhp = ref();
const viy2Panel_2ZbpF = ref();
const viy2Button_5heur2 = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', partsNo: '', dateFrom: '', dateTo: '', stockAdjustmentReason: '', parts: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2DateTimePicker_1MmOImRules: [
    {
      required: true,
      message: t('errors.required', [t('label.adjustmentDate')]),
    },
  ],
  viy2DateTimePicker_1MmOIyRules: [
    {
      required: true,
      message: t('errors.required', [t('label.adjustmentDate')]),
    },
  ],
});
const viy2Select_1PZzk4Opts = reactive([
  {
    codeData1:
'発見(増)',
    codeDbid:
'発見(増)',
  },
  {
    codeData1:
'紛失(減)',
    codeDbid:
'紛失(減)',
  },
  {
    codeData1:
'破損(減)',
    codeDbid:
'破損(減)',
  },
  {
    codeData1:
'削除',
    codeDbid:
'削除',
  },
  {
    codeData1:
'棚卸発見(増)',
    codeDbid:
'棚卸発見(増)',
  },
  {
    codeData1:
'棚卸損失(減)',
    codeDbid:
'棚卸損失(減)',
  },
]);
const viy2ValueList_hNGbc5PopoverQueryMethod = parts_query_method;
const viy2ValueList_hNGbc5PopupColumns = ref(parts_pop_column);
const viy2ValueList_hNGbc5PopupQueryMethod = parts_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const stockAdjustmentReasonApi = useApi({
  url: '/common/helper/getStockAdjustmentReasonList.json',
  method: 'post',
}, {
  manual: true,
});
const stockAdjustmentReason = stockAdjustmentReasonApi.data;
const partsAutoFillDsApi = useApi({
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
const partsAutoFillDs = partsAutoFillDsApi.data;
const partsAdjustmentHistoryListApi = useApi({
  url: '/parts/spq0302/findPartsAdjustmentHistoryList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    exportDisabledFlag.value = partsAdjustmentHistoryList.value.length == 0;
  },
  manual: true,
});
const partsAdjustmentHistoryList = partsAdjustmentHistoryListApi.data;
const exportPartsAdjustmentHistoryApi = useApi({
  url: '/parts/spq0302/exportPartsAdjustmentHistory.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Parts Adjustment History Inquiry.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const exportPartsAdjustmentHistory = exportPartsAdjustmentHistoryApi.data;
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
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      partsNo: '10V-15641-00',
      partsNm: 'スターターギア',
      adjustmentDate: '20240809',
      location: '10-654-01',
      inQty: '1',
      inCost: '10000',
      inAmount: '20000',
      outQty: '1',
      outCost: '11000',
      outAmount: '11000',
      adjustmentReason: '新発見(増)',
    },
    {
      partsNo: '110-09817-72',
      partsNm: 'パッキン',
      adjustmentDate: '20240809',
      location: '10-654-01',
      inQty: '1',
      inCost: '10000',
      inAmount: '20000',
      outQty: '1',
      outCost: '11000',
      outAmount: '11000',
      adjustmentReason: '失う(減)',
    },
    {
      partsNo: '11H-12114-00',
      partsNm: 'フロントサイドリフレクターアセンブリ',
      adjustmentDate: '20240809',
      location: '10-654-01',
      inQty: '1',
      inCost: '10000',
      inAmount: '20000',
      outQty: '1',
      outCost: '11000',
      outAmount: '11000',
      adjustmentReason: '廃却(減)',
    },
    {
      partsNo: '11H-81844-00',
      partsNm: 'シフトレバーアセンブリ',
      adjustmentDate: '20240809',
      location: '10-654-01',
      inQty: '1',
      inCost: '10000',
      inAmount: '20000',
      outQty: '1',
      outCost: '11000',
      outAmount: '11000',
      adjustmentReason: '棚卸発見(増)',
    },
  ],
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      exportDisabledFlag.value = false;
    }
  },
});
const gridDs = gridDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const viy2Button_5FbWKcClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      if (queryFormData.dateTo !== null && queryFormData.dateTo !== undefined) {
        // partsAdjustmentHistoryListApi.runAsync();
        gridDsApi.runAsync();// 基本设计测试用
      }
    }
  });
};
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_1MmOIzClick = () => {
  if (!queryFormData.dateFrom) {
    queryFormData.dateFrom = firstDay;
  }
  if (!queryFormData.dateTo) {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
};
const viy2Button_hNGbamClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_hNGbc5Select = (params) => {
  queryFormData.partsId = params.id;
};
const viy2ValueList_hNGbc5Clear = (params) => {
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
const viy2Button_5heur2Click = () => {
  exportPartsAdjustmentHistoryApi.runAsync();
};
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAdjustmentDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
    },
  };
});
const gridLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridInCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridInAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOutQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOutQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOutCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOutAmountFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridOutAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAdjustmentReasonEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
  queryForm.value.validate();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.pointId = uc.defaultPointId;
  resetTblResults();
};
const resetTblResults = () => {
// partsAdjustmentHistoryList.value.splice(0);
  gridDs.value.splice(0);
  exportDisabledFlag.value = true;
};
const inQtySumFormat = (row) => {
  let s = 0;
  if (row.length !== 0) {
    for (const item of row) {
      s = s + item.inQty;
    }
  }
  return Number(s).toFixed(0);
};
const outQtySumFormat = (row) => {
  let s = 0;
  if (row.length !== 0) {
    for (const item of row) {
      s = s + item.outQty;
    }
  }
  return Number(s).toFixed(0);
};
const inAmountSumFormat = (row) => {
  let s = 0;
  if (row.length !== 0) {
    for (const item of row) {
      s = s + item.inAmount;
    }
  }
  return Number(s).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
const outAmountSumFormat = (row) => {
  let s = 0;
  if (row.length !== 0) {
    for (const item of row) {
      s = s + item.outAmount;
    }
  }
  return Number(s).toFixed(0);
};
// 配件输入后Leave
const onLeavePartsCode = async (code) => {
  nowPartsCode.value = code;
  const data = await partsAutoFillDsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData != null) {
    queryFormData.parts = partsData.desc;
    queryFormData.partsId = partsData.id;
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_30NgZ"
      ref="viy2Flex_30NgZ"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_2YQWX" ref="viy2Panel_2YQWX" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
                検索
              </VueButton>
              <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_lOY8w"
            ref="viy2Row_lOY8w"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                v-if="false"
                :label="t('label.point')"
                prop="pointId"
                :rules="rules.viy2Select_1rPSyEHRules"
              >
                <VueSelect
                  id="viy2Select_1rPSyEH"
                  ref="viy2Select_1rPSyEH"
                  v-model="queryFormData.pointId"
                  :style="{ width: '250px' }"
                  :collapse-tags="true"
                  :clearable="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :options="pointDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="部品"
                prop="partsNo"
              >
                <VueValueList
                  id="viy2ValueList_12KKOs"
                  ref="viy2ValueList_12KKOs"
                  v-model="queryFormData.partsNo"
                  :use-popover="false"
                  :use-popup="false"
                  width="180px"
                />
              </VueFormItem>
              <VueFormItem
                label="調整日付"
                label-width="130px"
                prop="dateFrom"
                :rules="rules.viy2DateTimePicker_1MmOImRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1MmOIm"
                  ref="viy2DateTimePicker_1MmOIm"
                  v-model="queryFormData.dateFrom"
                  type="date"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0"
                prop="dateTo"
                :rules="rules.viy2DateTimePicker_1MmOIyRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1MmOIy"
                  ref="viy2DateTimePicker_1MmOIy"
                  v-model="queryFormData.dateTo"
                  type="date"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <VueButton id="viy2Button_1MmOIz" ref="viy2Button_1MmOIz" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1MmOIzClick" />
              <VueButton id="viy2Button_hNGbam" ref="viy2Button_hNGbam" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hNGbamClick" />
              <VueFormItem
                label="調整理由"
                prop="stockAdjustmentReason"
              >
                <VueSelect
                  id="viy2Select_1PZzk4"
                  ref="viy2Select_1PZzk4"
                  v-model="queryFormData.stockAdjustmentReason"
                  :style="{ width: '200px' }"
                  :clearable="true"
                  :options="viy2Select_1PZzk4Opts"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                :label="t('label.parts')"
                prop="parts"
              >
                <VueValueList
                  :use-common-popover="true"
                  :use-common-popup="true"
                  id="viy2ValueList_hNGbc5"
                  aside-size="60%"
                  ref="viy2ValueList_hNGbc5"
                  :toggle-popover-on-click="queryFormData.parts.length > 3"
                  v-model="queryFormData.parts"
                  select-field="desc"
                  :popover-min-query-length="3"
                  :close-on-click-modal="true"
                  :use-popup="true"
                  :clearable="true"
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
                      id="viy2Row_hNGbc7"
                      ref="viy2Row_hNGbc7"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_hNGbc8" ref="viy2Text_hNGbc8" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_KbAhp"
        ref="viy2Flex_KbAhp"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2ZbpF" ref="viy2Panel_2ZbpF" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportDisabledFlag" @click="viy2Button_5heur2Click">
                ファイル出力
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :show-footer="true" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
              fixed="left"
              min-width="50px"
              header-align="center"
              width="50px"
              title="No."
            />
            <VueInputColumn
              :formatter="gridPartsNoFormatter"
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              show-overflow="tooltip"
              fixed="left"
              :sortable="true"
              title="部品番号"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              show-overflow="tooltip"
              :sortable="true"
              title="部品名称"
              width="250px"
              header-align="center"
              min-width="250px"
            />
            <VueDateTimeColumn
              :edit-render="gridAdjustmentDateEditRender"
              field="adjustmentDate"
              align="center"
              :sortable="true"
              title="調整日付"
              width="145px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridLocationEditRender"
              field="location"
              :sortable="true"
              aggregate-label="合計"
              footer-align="right"
              title="ロケーション"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridInQtyEditRender"
              field="inQty"
              align="right"
              aggregate="sum"
              :sortable="false"
              title="入庫数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridInCostEditRender"
              field="inCost"
              align="right"
              aggregate="sum"
              :sortable="false"
              title="入庫原価"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridInAmountEditRender"
              field="inAmount"
              align="right"
              aggregate="sum"
              :sortable="false"
              title="入庫金額"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOutQtyFormatter"
              :edit-render="gridOutQtyEditRender"
              field="outQty"
              align="right"
              aggregate="sum"
              :sortable="false"
              title="出庫数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridOutCostEditRender"
              field="outCost"
              align="right"
              aggregate="sum"
              :sortable="false"
              title="出庫原価"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOutAmountFormatter"
              :edit-render="gridOutAmountEditRender"
              field="outAmount"
              align="right"
              aggregate="sum"
              :sortable="false"
              title="出庫金額"
              width="100px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridAdjustmentReasonEditRender"
              field="adjustmentReason"
              show-overflow="tooltip"
              :sortable="true"
              title="調整理由"
              header-align="center"
              min-width="160px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
