<script setup>
import { IconEdit, IconMoreFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { formatCost, formatPartNo, formatQty } from '@/pj-commonutils.js';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const exportFlg = ref(true);
const router = useRouter();
const uc = useUser().userInfo;
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const partsFlg = ref(false);
defineOptions({
  name: 'spq0303_01',
});
const form = ref();
const viy2Flex_KcOSV = ref();
const queryForm = ref();
const viy2Panel_gTr6E = ref();
const Retrieve = ref();
const Reset = ref();
const viy2Row_lOY8w = ref();
const viy2Select_1rPSyEH = ref();
const Parts = ref();
const viy2Row_1Ms8Aa = ref();
const viy2Select_Tf6ne = ref();
const viy2Cascader_qHUEk = ref();
const viy2Cascader_3OfGH = ref();
const viy2Flex_KcTfE = ref();
const viy2Panel_gTNDt = ref();
const viy2Button_ggxbK = ref();
const Export = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_2waqBC = ref();
const viy2Button_2wbnYU = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', parts: '', partsTest: [], productCategory: [], Groupcd: [],
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const PartsPopoverQueryMethod = parts_query_method;
const PartsPopupColumns = ref(parts_pop_column);
const PartsPopupQueryMethod = parts_pop_query_method;
const viy2Select_Tf6neOpts = reactive([
  {
    label:
'90-79V-402 電子ディスク001',
    value:
'90-79V-402 電子ディスク001',
  },
  {
    label:
'4D-1F7-100 電子ディスク002',
    value:
'4D-1F7-100 電子ディスク002',
  },
  {
    label:
'24-M18-600 電子ディスク003',
    value:
'24-M18-600 電子ディスク003',
  },
  {
    label:
'LC-RTT-040 電子ディスク004',
    value:
'LC-RTT-040 電子ディスク004',
  },
  {
    label:
'e',
    value:
'e',
  },
  {
    label:
'f',
    value:
'f',
  },
]);
const viy2Cascader_qHUEkProps = reactive({
  checkStrictly: true,
  expandTrigger: 'click',
});
const viy2Cascader_3OfGHProps = reactive({
  checkStrictly: true,
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_b2T5nButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: viewDetail,
      title: 'Detail',
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const partsInputDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  lockScreen: false,
}, {
  manual: true,
});
const partsInputDs = partsInputDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      partsNo: 'AD-102-WIXXS',
      partsNm: 'スターターギア',
      supersedingParts: '110-09817-72',
      onHandQty: '1',
      allocatedQty: '2',
      boQty: '2',
      onReceivingQty: '0',
      onPickingQty: '3',
      eoQty: '1',
      roQty: '2',
      onFrozenQty: '2',
      averageCost: '10000',
      largeGroup: '',
      middleGroup: '',
    },
    {
      partsNo: 'AD-102-WIXXS',
      partsNm: 'スターターギア',
      supersedingParts: '110-09817-72',
      onHandQty: '1',
      allocatedQty: '2',
      boQty: '2',
      onReceivingQty: '0',
      onPickingQty: '3',
      eoQty: '1',
      roQty: '2',
      onFrozenQty: '2',
      averageCost: '10000',
      largeGroup: '',
      middleGroup: '',
    },
    {
      partsNo: 'AD-102-WIXXS',
      partsNm: 'スターターギア',
      supersedingParts: '110-09817-72',
      onHandQty: '1',
      allocatedQty: '2',
      boQty: '2',
      onReceivingQty: '0',
      onPickingQty: '3',
      eoQty: '1',
      roQty: '2',
      onFrozenQty: '2',
      averageCost: '10000',
      largeGroup: '',
      middleGroup: '',
    },
  ],
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      exportFlg.value = false;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const gridDs2Api = useApi({
  url: '/parts/spq0303/getPartsStockList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
}, {
  onSuccess: (data, params) => {
    if (data.content.length > 0) {
      exportFlg.value = false;
    } else {
      exportFlg.value = true;
    }
  },
  manual: true,
});
const gridDs2 = gridDs2Api.data;
const groupDsApi = useApi({
  method: 'post',
  localData: [
    {
      value: '0',
      label: 'Ｍ／Ｃ部品',
      children: [
        {
          value: '0',
          label: 'オートバイ',
          children: [
            {
              value: 'A4',
              label: 'モトクロス',
            },
            {
              value: 'A5',
              label: 'トライアル',
            },
          ],
        },
        {
          value: '4',
          label: 'スノーモービル、除雪機',
          children: [
            {
              value: 'G7',
              label: '小型除雪機',
            },
            {
              value: 'G8',
              label: 'トロ除雪機',
            },
          ],
        },
      ],
    },
    {
      value: '2',
      label: '特機',
      children: [
        {
          value: '9',
          label: 'ボート純正オプション',
          children: [
            {
              value: 'G1',
              label: '２．発電機',
            },
            {
              value: 'G2',
              label: '４．発電機',
            },
            {
              value: 'G3',
              label: 'Ｄ．発電機',
            },
          ],
        },
      ],
    },
    {
      value: '7',
      label: '船外機',
      children: [
        {
          value: 'C',
          label: 'ヘルメット',
          children: [
            {
              value: 'B5',
              label: 'モトクロス',
            },
            {
              value: 'A6',
              label: 'エンデューロ',
            },
          ],
        },
        {
          value: '6',
          label: 'ＧＨＰ',
          children: [
            {
              value: 'F8',
              label: 'スプロケットドライブ',
            },
            {
              value: 'L0',
              label: 'ＭＵマリンジェット',
            },
            {
              value: 'F5',
              label: 'チェーン．Ｊチェーン',
            },
          ],
        },
      ],
    },
  ]
  ,
});
const groupDs = groupDsApi.data;
const productCategoryDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  manual: true,
});
const productCategoryDs = productCategoryDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const RetrieveClick = () => {
  doRetrieve();
};
const ResetClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const PartsSelect = (params) => {
  queryFormData.partsId = params.id;
  if (queryFormData.partsId) {
    queryFormData.productCategory = [];
    partsFlg.value = true;
  } else {
    partsFlg.value = false;
  }
};
const PartsClear = () => {
  queryFormData.partsId = '';
  queryFormData.productCategory = [];
  partsFlg.value = false;
};
const PartsLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.partsId = '';
    queryFormData.productCategory = [];
    if (obj.currentValue) {
      onLeavePartsCode(obj.currentValue);
      queryFormData.productCategory = [];
      partsFlg.value = true;
    } else {
      partsFlg.value = false;
    }
  }
};
const PartsPopoverColumns = computed(() => {
  return parts_column;
});
const PartsPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), options: largeGroupDs.value, clearable: true, props: { checkStrictly: true }, style: { width: '150px' } },
  ];
});
const viy2Button_ggxbKClick = () => {
  const row = {};
  grid.value.insertAt(row, -1).then((newRow) => {
    grid.value.setCurrentRow(newRow.row);
  });
};
const ExportClick = () => {
  onExport();
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  viewDetail(row);
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
const gridProductnewCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSupersedingPartsFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridSupersedingPartsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOnHandQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnHandQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridStockQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridStockQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBoQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridBoQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOnReceivingQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnReceivingQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOnPickingQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnPickingQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridHoQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridHoQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridEoQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridEoQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridRoQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridRoQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridWoQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridWoQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnTransferQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnTransferQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnServiceQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnServiceQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnFrozenQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnFrozenQtyEditRender = computed(() => {
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
const gridLargeGroupEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleGroupEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSmallGroupEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const paginationCurrentChange = () => {
  if (gridDs.value.totalElements === 0) {
    return;
  }
  doRetrieve();
};
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
  paginationPageSize.value = PAGE_SIZE;
});
watch (
  () => queryFormData, (newVal, oldVal) => {
    resetTblResults();
  }, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  for (const key in queryFormData) {
    queryFormData[key] = '';
  }
  queryFormData.productCategory = [];
  resetTblResults();
  queryFormData.pointId = uc.defaultPointId;
  partsFlg.value = false;
  // 重置分页
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
  gridDs.value.totalElements = 0;
};
const resetTblResults = () => {
  gridDs.value.content = [];
  exportFlg.value = true;
  gridDs.value.totalElements = 0;
};
const viewDetail = (row) => {
  const data = {
    pointId: queryFormData.pointId,
    partsNo: formatPartNo(row.partsNo),
    partsNm: row.partsNm,
    partsId: row.partsId,
  };
  useMultiTags().openTag({
    name: 'spq0303_02', // 路由名称
  });
  // Update the meta title of the tag if it exists.
  useMultiTags().getTag({ name: 'spq0303_02' }).meta.title = t('部品棚在庫一覧', data);
  // Use Vue Router to navigate to the specified route and pass the data parameters
  router.push({ name: 'spq0303_02', data });
};
const doRetrieve = () => {
  gridDsApi.runAsync();
// queryForm.value.validate((valid) => {
// if (valid) {
// gridDsApi.runAsync();
// }
// })
};
const onExport = () => {
  useApi(
    {
      url: '/parts/spq0303/exportPartsStockExcel.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        const condition = {};
        merge(condition, queryFormData);
        condition.pageSize = paginationPageSize.value;
        condition.currentPage = paginationCurrentPage.value;
        return condition;
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'SPQ0303_01.xlsx');
      },
    },
  );
};
// 配件输入后Leave
const onLeavePartsCode = async (code) => {
  const res = await partsInputDsApi.runAsync({
    partsCd: code,
    pageSize: 1,
    currentPage: 1,
  });
  if (res && res.total > 0) {
    const data = res.list[0];
    queryFormData.parts = data.desc;
    queryFormData.partsId = data.id;
    queryFormData.productCategory = [];
    partsFlg.value = true;
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_KcOSV"
      ref="viy2Flex_KcOSV"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_gTr6E" ref="viy2Panel_gTr6E" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="Retrieve" ref="Retrieve" icon-position="left" type="info" @click="RetrieveClick">
                検索
              </VueButton>
              <VueButton id="Reset" ref="Reset" icon-position="left" @click="ResetClick">
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
                v-if="false"
                :label="t('label.parts')"
                prop="parts"
              >
                <VueValueList
                  :use-common-popover="true"
                  :use-common-popup="true"
                  id="Parts"
                  aside-size="60%"
                  ref="Parts"
                  :toggle-popover-on-click="queryFormData.parts.length > 3"
                  v-model="queryFormData.parts"
                  select-field="desc"
                  :popover-min-query-length="3"
                  :close-on-click-modal="true"
                  :use-popup="true"
                  :clearable="true"
                  :popover-width="500"
                  width="250px"
                  :popover-columns="PartsPopoverColumns"
                  :popover-query-method="PartsPopoverQueryMethod"
                  :popup-columns="PartsPopupColumns"
                  :popup-conditions="PartsPopupConditions"
                  :popup-query-method="PartsPopupQueryMethod"
                  @select="PartsSelect"
                  @clear="PartsClear"
                  @leave="PartsLeave"
                >
                  <template #asideHeader>
                    <VueRow
                      id="viy2Row_1Ms8Aa"
                      ref="viy2Row_1Ms8Aa"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_1Ms8Ab" ref="viy2Text_1Ms8Ab" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                          {{ t('title.partNoRef') }}
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
                prop="partsTest"
              >
                <VueSelect
                  id="viy2Select_Tf6ne"
                  ref="viy2Select_Tf6ne"
                  v-model="queryFormData.partsTest"
                  :style="{ width: '300px' }"
                  :filterable="true"
                  :multiple="true"
                  :options="viy2Select_Tf6neOpts"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                label="商品区分"
                prop="productCategory"
              >
                <VueCascader
                  id="viy2Cascader_qHUEk"
                  ref="viy2Cascader_qHUEk"
                  v-model="queryFormData.productCategory"
                  :clearable="true"
                  :disabled="partsFlg"
                  :style="{ width: '250px' }"
                  :options="productCategoryDs"
                  :props="viy2Cascader_qHUEkProps"
                />
              </VueFormItem>
              <VueFormItem
                label="商品区分"
                prop="Groupcd"
              >
                <VueCascader
                  id="viy2Cascader_3OfGH"
                  ref="viy2Cascader_3OfGH"
                  v-model="queryFormData.Groupcd"
                  :options="groupDs"
                  :props="viy2Cascader_3OfGHProps"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_KcTfE"
        ref="viy2Flex_KcTfE"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_gTNDt" ref="viy2Panel_gTNDt" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_ggxbK" ref="viy2Button_ggxbK" icon-position="left" @click="viy2Button_ggxbKClick">
                行追加
              </VueButton>
              <VueButton id="Export" ref="Export" icon-position="left" :disabled="exportFlg" @click="ExportClick">
                ファイル出力
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
              fixed="left"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No."
            />
            <VueInputColumn
              :formatter="gridPartsNoFormatter"
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              fixed="left"
              :sortable="true"
              title="部品番号"
              width="150px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_2waqBC" ref="viy2Button_2waqBC" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              show-overflow="tooltip"
              fixed="left"
              :sortable="true"
              title="部品名称"
              min-width="200px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_2wbnYU" ref="viy2Button_2wbnYU" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridProductnewCdEditRender"
              field="productnewCd"
              show-overflow="tooltip"
              :sortable="true"
              title="正代替部品"
              width="130px"
            />
            <VueInputColumn
              v-if="false"
              :formatter="gridSupersedingPartsFormatter"
              :edit-render="gridSupersedingPartsEditRender"
              field="supersedingParts"
              show-overflow="tooltip"
              :sortable="true"
              aggregate-label="合計"
              footer-align="center"
              title="代替部品(旧品)"
              width="175px"
            />
            <VueNumberColumn
              v-if="false"
              :formatter="gridOnHandQtyFormatter"
              :edit-render="gridOnHandQtyEditRender"
              field="onHandQty"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="有効在庫数"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridStockQtyFormatter"
              :edit-render="gridStockQtyEditRender"
              field="stockQty"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="在庫数"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridAllocatedQtyFormatter"
              :edit-render="gridAllocatedQtyEditRender"
              field="allocatedQty"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="引当数"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridBoQtyFormatter"
              :edit-render="gridBoQtyEditRender"
              field="boQty"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="受注残数"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnReceivingQtyFormatter"
              :edit-render="gridOnReceivingQtyEditRender"
              field="onReceivingQty"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="受付中数"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnPickingQtyFormatter"
              :edit-render="gridOnPickingQtyEditRender"
              field="onPickingQty"
              align="right"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="ピック中数"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              v-if="false"
              :formatter="gridHoQtyFormatter"
              :edit-render="gridHoQtyEditRender"
              field="hoQty"
              align="right"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.onPurchaseQuantityHo')"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridEoQtyFormatter"
              :edit-render="gridEoQtyEditRender"
              field="eoQty"
              align="right"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="緊急発注中数"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridRoQtyFormatter"
              :edit-render="gridRoQtyEditRender"
              field="roQty"
              align="right"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="通常発注中数"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              v-if="false"
              :formatter="gridWoQtyFormatter"
              :edit-render="gridWoQtyEditRender"
              field="woQty"
              align="right"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.onPurchaseQuantityWo')"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              v-if="false"
              :formatter="gridOnTransferQtyFormatter"
              :edit-render="gridOnTransferQtyEditRender"
              field="onTransferQty"
              align="right"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.onTransferInQuantity')"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              v-if="false"
              :formatter="gridOnServiceQtyFormatter"
              :edit-render="gridOnServiceQtyEditRender"
              field="onServiceQty"
              align="right"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.onServiceQty')"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnFrozenQtyFormatter"
              :edit-render="gridOnFrozenQtyEditRender"
              field="onFrozenQty"
              align="right"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="凍結数"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridAverageCostFormatter"
              :edit-render="gridAverageCostEditRender"
              field="averageCost"
              align="right"
              show-overflow="tooltip"
              :sortable="true"
              title="平均原価"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridLargeGroupEditRender"
              field="largeGroup"
              show-overflow="tooltip"
              :sortable="true"
              title="商品大区分"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridMiddleGroupEditRender"
              field="middleGroup"
              show-overflow="tooltip"
              :sortable="true"
              title="商品中区分"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridSmallGroupEditRender"
              field="smallGroup"
              show-overflow="tooltip"
              :sortable="true"
              title="商品小区分"
              width="130px"
            />
            <VueButtonColumn
              align="center"
              fixed="right"
              width="60px"
              :buttons="gridViy2TableButtonColumn_b2T5nButtons"
            />
          </VueTable>
        </VuePanel>
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
            :total="gridDs.totalElements || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
