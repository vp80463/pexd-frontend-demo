<script setup>
import { IconArrowLeftBold, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { formatCost, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const disExportBtn = ref(true);
const uc = useUser().userInfo;
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const newDayjs = dayjs;
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
const lastDay = dayjs().format('YYYYMMDD');
const nowPartsCode = ref();
defineOptions({
  name: 'spq0304_01',
});
const form = ref();
const viy2Flex_KxYxI = ref();
const queryForm = ref();
const viy2Panel_rFcab = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_lOY8w = ref();
const viy2Select_1rPSyEH = ref();
const viy2DateTimePicker_hQ5CZ2 = ref();
const viy2DateTimePicker_hQ5CZ4 = ref();
const viy2Button_hQ5D0H = ref();
const viy2Button_hQ5D0I = ref();
const viy2ValueList_hNGbc5 = ref();
const viy2Row_3qmhiN = ref();
const viy2InputBox_D4M6O = ref();
const viy2Select_D7GEq = ref();
const viy2Flex_Ky1T6 = ref();
const viy2Panel_rFnCB = ref();
const viy2Button_7C7edE = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', dateFrom: '', dateTo: '', parts: '', parts: '', transactionType: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2DateTimePicker_hQ5CZ2Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.date')]),
    },
  ],
  viy2DateTimePicker_hQ5CZ4Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.date')]),
    },
  ],
  viy2ValueList_hNGbc5Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.parts')]),
    },
  ],
  viy2InputBox_D4M6ORules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_hNGbc5PopoverQueryMethod = parts_query_method;
const viy2ValueList_hNGbc5PopupColumns = ref(parts_pop_column);
const viy2ValueList_hNGbc5PopupQueryMethod = parts_pop_query_method;
const viy2Select_D7GEqOpts = reactive([
  {
    label:
'月初在庫',
    value:
'月初在庫',
  },
  {
    label:
'バランスコスト',
    value:
'バランスコスト',
  },
  {
    label:
'受入',
    value:
'受入',
  },
  {
    label:
'出荷',
    value:
'出荷',
  },
  {
    label:
'返品',
    value:
'返品',
  },
  {
    label:
'調整入',
    value:
'調整入',
  },
  {
    label:
'調整出',
    value:
'調整出',
  },
  {
    label:
'棚卸増',
    value:
'棚卸増',
  },
  {
    label:
'棚卸減',
    value:
'棚卸減',
  },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const exportPartsInOutHistDsApi = useApi({
  url: '/parts/spq0304/exportPartsInOutHistory.json',
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
      a.download = 'Parts In Out History Inquiry.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const exportPartsInOutHistDs = exportPartsInOutHistDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      transactionDate: '20240816',
      transactionTime: '14:00:00',
      partsNo: '11H-81844-00',
      partsNm: 'シフトレバーアセンブリ',
      transactionType: '調整入',
      from: '',
      to: '',
      inQty: '2',
      outQty: '0',
      afterQty: '3',
      cost: '10000',
      averageCost: '10000',
      transactionNo: '',
    },
    {
      transactionDate: '20240817',
      transactionTime: '16:26:18',
      partsNo: '11H-81844-00',
      partsNm: 'シフトレバーアセンブリ',
      transactionType: '出荷',
      from: '雅仕汇上海',
      to: '成都雅宏汇门',
      inQty: '0',
      outQty: '10',
      afterQty: '5',
      cost: '10000',
      averageCost: '10000',
      transactionNo: 'DO2308A000006',
    },
    {
      transactionDate: '20240516',
      transactionTime: '14:30:33',
      partsNo: '11H-81844-00',
      partsNm: 'シフトレバーアセンブリ',
      transactionType: '返品',
      from: '成都雅宏汇门',
      to: '雅仕汇上海',
      inQty: '5',
      outQty: '0',
      afterQty: '10',
      cost: '10000',
      averageCost: '10000',
      transactionNo: 'RS2308A0002',
    },
  ],
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      disExportBtn.value = false;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
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
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
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
const partsInOutHistDsApi = useApi({
  url: '/parts/spq0304/findPartsInOutHistoryList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    disExportBtn.value = partsInOutHistDs.value.length == 0;
  },
  manual: true,
});
const partsInOutHistDs = partsInOutHistDsApi.data;
const viy2Button_5FbWKcClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      gridDsApi.runAsync();
      // if(queryFormData.dateTo !== null && queryFormData.dateTo !== undefined) {
      // partsInOutHistDsApi.runAsync();
      // }
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
const viy2Button_hQ5D0HClick = () => {
  if (!queryFormData.dateFrom) {
    queryFormData.dateFrom = firstDay;
  }
  if (!queryFormData.dateTo) {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  queryForm.value.validateField('dateFrom');
  queryForm.value.validateField('dateTo');
};
const viy2Button_hQ5D0IClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryForm.value.validateField('dateFrom');
  queryForm.value.validateField('dateTo');
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
const viy2Button_7C7edEClick = () => {
  exportPartsInOutHistDsApi.runAsync();
};
const gridTransactionDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
    },
  };
});
const gridTransactionTimeEditRender = computed(() => {
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
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTransactionTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFromEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridToEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridInQtyEditRender = computed(() => {
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
const gridAfterQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridAfterQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCostFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);
};
const gridCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAverageCostFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);
};
const gridAverageCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTransactionNoEditRender = computed(() => {
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
  pointDsShopApi.runAsync();
};
const resetTblResults = () => {
  partsInOutHistDs.value.splice(0);
  disExportBtn.value = true;
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
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_KxYxI"
      ref="viy2Flex_KxYxI"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_rFcab" ref="viy2Panel_rFcab" title="検索条件" :collapse="true">
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
                label="日付"
                prop="dateFrom"
                :rules="rules.viy2DateTimePicker_hQ5CZ2Rules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_hQ5CZ2"
                  ref="viy2DateTimePicker_hQ5CZ2"
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
                :rules="rules.viy2DateTimePicker_hQ5CZ4Rules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_hQ5CZ4"
                  ref="viy2DateTimePicker_hQ5CZ4"
                  v-model="queryFormData.dateTo"
                  type="date"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <VueButton id="viy2Button_hQ5D0H" ref="viy2Button_hQ5D0H" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hQ5D0HClick" />
              <VueButton id="viy2Button_hQ5D0I" ref="viy2Button_hQ5D0I" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hQ5D0IClick" />
              <VueFormItem
                v-if="false"
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
                  :popover-min-query-length="3"
                  :close-on-click-modal="true"
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
                      id="viy2Row_3qmhiN"
                      ref="viy2Row_3qmhiN"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_3qmhgs" ref="viy2Text_3qmhgs" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
              <VueFormItem
                label="部品"
                prop="parts"
                :rules="rules.viy2InputBox_D4M6ORules"
              >
                <VueInput
                  id="viy2InputBox_D4M6O"
                  ref="viy2InputBox_D4M6O"
                  v-model="queryFormData.parts"
                  :style="{ width: '180px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="在庫変動タイプ"
                prop="transactionType"
              >
                <VueSelect
                  id="viy2Select_D7GEq"
                  ref="viy2Select_D7GEq"
                  v-model="queryFormData.transactionType"
                  :style="{ width: '180px' }"
                  :options="viy2Select_D7GEqOpts"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_Ky1T6"
        ref="viy2Flex_Ky1T6"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_rFnCB" ref="viy2Panel_rFnCB" title="明細情報" height="100%" :collapse="true">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_7C7edE" ref="viy2Button_7C7edE" icon-position="left" :disabled="disExportBtn" @click="viy2Button_7C7edEClick">
                ファイル出力
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueRow
              id="viy2Row_soVPC"
              ref="viy2Row_soVPC"
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
              min-width="50px"
              header-align="center"
              width="60px"
            />
            <VueDateTimeColumn
              :edit-render="gridTransactionDateEditRender"
              field="transactionDate"
              align="center"
              :sortable="true"
              title="在庫変動日付"
              width="143px"
            />
            <VueInputColumn
              :edit-render="gridTransactionTimeEditRender"
              field="transactionTime"
              show-overflow="tooltip"
              :sortable="true"
              align="center"
              title="在庫変動時間"
              width="162px"
            />
            <VueInputColumn
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              show-overflow="tooltip"
              :sortable="true"
              title="部品番号"
              min-width="150px"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              show-overflow="tooltip"
              :sortable="true"
              title="部品名称"
              min-width="150px"
            />
            <VueInputColumn
              :edit-render="gridTransactionTypeEditRender"
              field="transactionType"
              show-overflow="tooltip"
              :sortable="true"
              title="在庫変動タイプ"
              width="145px"
            />
            <VueInputColumn
              :edit-render="gridFromEditRender"
              field="from"
              show-overflow="tooltip"
              :sortable="true"
              title="元"
              width="140px"
            />
            <VueInputColumn
              :edit-render="gridToEditRender"
              field="to"
              :sortable="true"
              aggregate-label="合計"
              footer-align="right"
              title="先"
              width="140px"
            />
            <VueNumberColumn
              :formatter="gridInQtyFormatter"
              :edit-render="gridInQtyEditRender"
              align="right"
              field="inQty"
              aggregate="sum"
              :sortable="true"
              title="入庫数量"
              header-align="center"
              min-width="95px"
            />
            <VueNumberColumn
              :formatter="gridOutQtyFormatter"
              :edit-render="gridOutQtyEditRender"
              align="right"
              field="outQty"
              aggregate="sum"
              :sortable="true"
              title="出庫数量"
              header-align="center"
              min-width="100px"
            />
            <VueNumberColumn
              :formatter="gridAfterQtyFormatter"
              :edit-render="gridAfterQtyEditRender"
              align="right"
              field="afterQty"
              :sortable="true"
              width="120px"
              title="残高数量"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridCostFormatter"
              :edit-render="gridCostEditRender"
              align="right"
              field="cost"
              :sortable="true"
              width="155px"
              title="取引原価"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridAverageCostFormatter"
              :edit-render="gridAverageCostEditRender"
              align="right"
              field="averageCost"
              :sortable="true"
              width="155px"
              title="平均原価"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridTransactionNoEditRender"
              field="transactionNo"
              show-overflow="tooltip"
              :sortable="true"
              title="受注番号"
              min-width="150px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
