<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { formatCost, formatPartNo, formatQty } from '@/pj-commonutils.js';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const disExportFlag = ref(true);
const router = useRouter();
const uc = useUser().userInfo;
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const total = ref();
const productCategory = [];
const nowPartsCode = ref();
defineOptions({
  name: 'cmq0508_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_2Himl4 = ref();
const viy2Button_2IkqVS = ref();
const viy2Flex_KOnXV = ref();
const queryForm = ref();
const viy2Row_3mqzSt = ref();
const viy2Select_1rPSyEH = ref();
const viy2ValueList_hNGbc5 = ref();
const viy2Row_9mUhiX = ref();
const viy2Cascader_87KXO = ref();
const viy2Select_2HLF4a = ref();
const viy2Flex_KOr4t = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2CheckBox_akOny = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', parts: '', productCategory: [], demandSource: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const viy2ValueList_hNGbc5PopoverQueryMethod = parts_query_method;
const viy2ValueList_hNGbc5PopupColumns = ref(parts_pop_column);
const viy2ValueList_hNGbc5PopupQueryMethod = parts_pop_query_method;
const viy2Cascader_87KXOProps = reactive({
  checkStrictly: true,
  expandTrigger: 'click',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_akOnyOpts = [
  {
    label:
'Option 1',
    value:
'Option 1',
  },
];
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
});
const brandDs = brandDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
});
const largeGroupDs = largeGroupDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const gridDsApi = useApi({
  url: '/master/cmq0508/findPartsSummaryList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    disExportFlag.value = gridDs.value.content.length == 0;
    total.value = data.totalElements;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const demandSourceDsApi = useApi({
  url: '/common/helper/getDemandSourceList.json',
  method: 'post',
});
const demandSourceDs = demandSourceDsApi.data;
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
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_2Himl4Click = () => {
  exportBtn();
};
const viy2Button_2IkqVSClick = () => {
  validateAndRunGridDs();
};
const viy2ValueList_hNGbc5Select = (params) => {
  queryFormData.partsId = params.id;
  queryFormData.productCategory = [];
};
const viy2ValueList_hNGbc5Clear = (params) => {
  queryFormData.partsId = '';
};
const viy2ValueList_hNGbc5Leave = (obj) => {
  queryFormData.productCategory = [];
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
const gridPartsCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandSourceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLargeGroupAbbrEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleGroupAbbrEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCostUsageEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridJoneEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJtwoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTrendIndexFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);// 无其他方法，仅用cost保留两位小数
};
const gridTrendIndexEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSeasonIndexFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);// 无其他方法，仅用cost保留两位小数
};
const gridSeasonIndexEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridDemandForecastFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);// 无其他方法，仅用cost保留两位小数
};
const gridDemandForecastEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRopFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);// 无其他方法，仅用cost保留两位小数
};
const gridRopEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridRoqFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);// 无其他方法，仅用cost保留两位小数
};
const gridRoqEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridViy2TableTemplateColumn_akgTrEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridBoQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridBoQtyEditRender = computed(() => {
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
const gridTotalStockFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridTotalStockEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridFutureStockFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridFutureStockEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN0EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN3EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN4EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN5EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN6EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN7EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN8EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN9EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN10EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN11EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN12EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN13EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN14EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN15EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN16EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN17EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN18EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN19EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN20EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN21EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN22EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN23EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN24EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const paginationCurrentChange = () => {
  if (total.value === 0) {
    return;
  }
  validateAndRunGridDs();
};
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
  paginationPageSize.value = PAGE_SIZE;
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  queryFormData.pointId = uc.defaultPointId;
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
  total.value = 0;
  // 清空queryFormData中的其他值
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.content = [];
  total.value = 0;
  disExportFlag.value = true;
};
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const exportBtn = () => {
  useApi(
    {
      url: '/master/cmq0508/exprotPartsSummaryList.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return queryFormData;
      },
      timeout: 500000,
    },
    {
      onSuccess: (data, params) => {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Parts Summary Information.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  );
};
const roqSumFormat = (row) => {
  let s = 0;
  if (row.length !== 0) {
    for (const item of row) {
      s = s + item.roq;
    }
  }
  return Number(s).toFixed(2);
};
const ropSumFormat = (row) => {
  let s = 0;
  if (row.length !== 0) {
    for (const item of row) {
      s = s + item.rop;
    }
  }
  return Number(s).toFixed(2);
};
const dFSumFormat = (row) => {
  let s = 0;
  if (row.length !== 0) {
    for (const item of row) {
      s = s + item.demandForecast;
    }
  }
  return Number(s).toFixed(2);
};
const sISumFormat = (row) => {
  let s = 0;
  if (row.length !== 0) {
    for (const item of row) {
      s = s + item.seasonIndex;
    }
  }
  return Number(s).toFixed(2);
};
const tISumFormat = (row) => {
  let s = 0;
  if (row.length !== 0) {
    for (const item of row) {
      s = s + item.trendIndex;
    }
  }
  return Number(s).toFixed(2);
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
const validateAndRunGridDs = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
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
        <VueButton id="viy2Button_2Himl4" ref="viy2Button_2Himl4" icon-position="left" :disabled="disExportFlag" @click="viy2Button_2Himl4Click">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_2IkqVS" ref="viy2Button_2IkqVS" icon-position="left" type="info" @click="viy2Button_2IkqVSClick">
          {{ t('button.receive') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_KOnXV"
      ref="viy2Flex_KOnXV"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
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
                    id="viy2Row_9mUhiX"
                    ref="viy2Row_9mUhiX"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_9mUhg8" ref="viy2Text_9mUhg8" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
              :label="t('label.productCategory')"
              prop="productCategory"
            >
              <VueCascader
                id="viy2Cascader_87KXO"
                ref="viy2Cascader_87KXO"
                v-model="queryFormData.productCategory"
                :clearable="true"
                :disabled="queryFormData.parts !== ''"
                :options="largeGroupDs"
                :props="viy2Cascader_87KXOProps"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.demandSource')"
              prop="demandSource"
            >
              <VueSelect
                id="viy2Select_2HLF4a"
                ref="viy2Select_2HLF4a"
                v-model="queryFormData.demandSource"
                :style="{ width: '200px' }"
                :clearable="true"
                :options="demandSourceDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeData1',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_KOr4t"
        ref="viy2Flex_KOr4t"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" height="100%" :show-footer="true" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :formatter="gridPartsCdFormatter"
            :edit-render="gridPartsCdEditRender"
            field="partsCd"
            fixed="left"
            :sortable="true"
            width="130px"
            :title="t('label.partsNo')"
          />
          <VueInputColumn
            :edit-render="gridDemandSourceEditRender"
            field="demandSource"
            :sortable="true"
            width="140px"
            :title="t('label.demandSource')"
          />
          <VueInputColumn
            :edit-render="gridLargeGroupAbbrEditRender"
            field="largeGroupAbbr"
            :sortable="true"
            show-overflow="tooltip"
            width="140px"
            :title="t('label.largeCategory')"
          />
          <VueInputColumn
            :edit-render="gridMiddleGroupAbbrEditRender"
            field="middleGroupAbbr"
            :sortable="true"
            show-overflow="tooltip"
            width="180px"
            :title="t('label.middleCategory')"
          />
          <VueInputColumn
            :edit-render="gridCostUsageEditRender"
            field="costUsage"
            :aggregate-label="t('label.total')"
            footer-align="right"
            :sortable="true"
            width="140px"
            :title="t('label.costUsage')"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridJoneEditRender"
            field="jone"
            aggregate="sum"
            align="right"
            :sortable="true"
            :title="t('label.j1')"
            width="80px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridJtwoEditRender"
            field="jtwo"
            aggregate="sum"
            align="right"
            :sortable="true"
            :title="t('label.j2')"
            width="80px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridTrendIndexFormatter"
            :edit-render="gridTrendIndexEditRender"
            field="trendIndex"
            :aggregate="tISumFormat"
            align="right"
            :sortable="true"
            :title="t('label.trendIndex')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridSeasonIndexFormatter"
            :edit-render="gridSeasonIndexEditRender"
            field="seasonIndex"
            :aggregate="sISumFormat"
            align="right"
            :sortable="true"
            :title="t('label.seasonIndex')"
            width="125px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridDemandForecastFormatter"
            :edit-render="gridDemandForecastEditRender"
            field="demandForecast"
            :aggregate="dFSumFormat"
            :sortable="true"
            :title="t('label.demandForecast')"
            width="150px"
          />
          <VueNumberColumn
            :formatter="gridRopFormatter"
            :edit-render="gridRopEditRender"
            field="rop"
            :aggregate="ropSumFormat"
            align="right"
            :sortable="true"
            :title="t('label.rop')"
            width="80px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridRoqFormatter"
            :edit-render="gridRoqEditRender"
            field="roq"
            :aggregate="roqSumFormat"
            align="right"
            :sortable="true"
            :title="t('label.roq')"
            width="80px"
            header-align="center"
          />
          <VueTemplateColumn
            :edit-render="gridViy2TableTemplateColumn_akgTrEditRender"
            align="center"
            :sortable="true"
            :title="t('label.manualSign')"
            width="120px"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_akOny"
                ref="viy2CheckBox_akOny"
                v-model="scope.row.manualSign"
                :disabled="true"
                true-label="Y"
                false-label="N"
              />
            </template>
          </VueTemplateColumn>
          <VueNumberColumn
            :formatter="gridBoQtyFormatter"
            :edit-render="gridBoQtyEditRender"
            field="boQty"
            aggregate="sum"
            align="right"
            :sortable="true"
            :title="t('label.boQuantity')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridOnHandQtyFormatter"
            :edit-render="gridOnHandQtyEditRender"
            field="onHandQty"
            aggregate="sum"
            align="right"
            :sortable="true"
            :title="t('label.onHandQuantity')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridTotalStockFormatter"
            :edit-render="gridTotalStockEditRender"
            field="totalStock"
            aggregate="sum"
            align="right"
            :sortable="true"
            :title="t('label.totalStock')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridFutureStockFormatter"
            :edit-render="gridFutureStockEditRender"
            field="futureStock"
            aggregate="sum"
            align="right"
            :sortable="true"
            :title="t('label.futureStock')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN0EditRender"
            field="n0"
            align="right"
            :sortable="true"
            :title="t('label.n-0')"
            width="115px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN1EditRender"
            field="n1"
            align="right"
            :sortable="true"
            :title="t('label.n-1')"
            width="115px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN2EditRender"
            field="n2"
            align="right"
            :sortable="true"
            :title="t('label.n-2')"
            width="110px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN3EditRender"
            field="n3"
            align="right"
            :sortable="true"
            :title="t('label.n-3')"
            width="110px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN4EditRender"
            field="n4"
            align="right"
            :sortable="true"
            :title="t('label.n-4')"
            width="110px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN5EditRender"
            field="n5"
            align="right"
            :sortable="true"
            :title="t('label.n-5')"
            width="110px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN6EditRender"
            field="n6"
            align="right"
            :sortable="true"
            :title="t('label.n-6')"
            width="110px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN7EditRender"
            field="n7"
            align="right"
            :sortable="true"
            :title="t('label.n-7')"
            width="110px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN8EditRender"
            field="n8"
            align="right"
            :sortable="true"
            :title="t('label.n-8')"
            width="110px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN9EditRender"
            field="n9"
            align="right"
            :sortable="true"
            :title="t('label.n-9')"
            width="110px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN10EditRender"
            field="n10"
            align="right"
            :sortable="true"
            :title="t('label.n-10')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN11EditRender"
            field="n11"
            align="right"
            :sortable="true"
            :title="t('label.n-11')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN12EditRender"
            field="n12"
            align="right"
            :sortable="true"
            :title="t('label.n-12')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN13EditRender"
            field="n13"
            align="right"
            :sortable="true"
            :title="t('label.n13')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN14EditRender"
            field="n14"
            align="right"
            :sortable="true"
            :title="t('label.n14')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN15EditRender"
            field="n15"
            align="right"
            :sortable="true"
            :title="t('label.n15')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN16EditRender"
            field="n16"
            align="right"
            :sortable="true"
            :title="t('label.n16')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN17EditRender"
            field="n17"
            align="right"
            :sortable="true"
            :title="t('label.n17')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN18EditRender"
            field="n18"
            align="right"
            :sortable="true"
            :title="t('label.n18')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN19EditRender"
            field="n19"
            align="right"
            :sortable="true"
            :title="t('label.n19')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN20EditRender"
            field="n20"
            align="right"
            :sortable="true"
            :title="t('label.n20')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN21EditRender"
            field="n21"
            align="right"
            :sortable="true"
            :title="t('label.n21')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN22EditRender"
            field="n22"
            align="right"
            :sortable="true"
            :title="t('label.n22')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN23EditRender"
            field="n23"
            align="right"
            :sortable="true"
            :title="t('label.n23')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridN24EditRender"
            field="n24"
            align="right"
            :sortable="true"
            :title="t('label.n24')"
            width="120px"
            header-align="center"
          />
        </VueTable>
      </VueFlex>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        class="except-height-css"
      >
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 17 }"
        />
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 7 }"
        >
          <VuePagination
            id="pagination"
            ref="pagination"
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :background="true"
            :small="true"
            :total="total || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
