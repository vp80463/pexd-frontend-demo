<script setup>
import { IconMoreFilled, IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useParams, useUser } from 'viy-menu';
import { find, merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import viy2Subpage_nm3U6Page from '/src/views/commons/select_location.vue';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { formatPartNo, formatQty } from '@/pj-commonutils.js';
import { LocationType, PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const exportFlg = ref(true);
const routeParam = useParams();
// 侧边栏参数
const asideParams = ref();
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const uc = useUser().userInfo;
const partsFlg = ref(false);
defineOptions({
  name: 'spq0303_02',
});
const form = ref();
const viy2Flex_Kxk1Y = ref();
const queryForm = ref();
const viy2Panel_hfIi7 = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_lOY8w = ref();
const viy2Select_1rPSyEH = ref();
const parts = ref();
const viy2Row_1MwUsG = ref();
const viy2ValueList_N7tbE = ref();
const viy2Cascader_r874R = ref();
const location = ref();
const viy2Button_CblvN = ref();
const locationType = ref();
const viy2CheckBox_hPg6Iu = ref();
const viy2Flex_Kxqgc = ref();
const viy2Panel_hfWTZ = ref();
const viy2Button_5heznY = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_2wveVC = ref();
const viy2Button_2wvHSi = ref();
const viy2CheckBox_5Ezc7N = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const locationAside = ref();
const viy2Subpage_nm3U6 = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', parts: '', partsTest: '', productCategory: [], location: '', locationTypeId: '', mainLocationSign: 'N',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const showLocationWin = ref(false);
const partsPopoverQueryMethod = parts_query_method;
const partsPopupColumns = ref(parts_pop_column);
const partsPopupQueryMethod = parts_pop_query_method;
const viy2Cascader_r874RProps = reactive({
  checkStrictly: true,
  expandTrigger: 'click',
});
const locationTypeOpts = reactive([
  {
    codeData1:
'普通',
    codeDbid:
'普通',
  },
  {
    codeData1:
'欠品',
    codeDbid:
'欠品',
  },
  {
    codeData1:
'凍結',
    codeDbid:
'凍結',
  },
]);
const viy2CheckBox_hPg6IuOpts = [
  {
    label:
'',
    value:
'',
  },
];
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_5Ezc7NOpts = [
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
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      partsNo: '4D-1F83-71',
      partsNm: 'スターターギア1',
      supersedingParts: '110-09817-72',
      location: '101-76-01-05',
      locationType: '普通',
      stockQty: '15',
      largeGroup: 'Ｍ／Ｃ部品',
      middleGroup: 'カート',
    },
    {
      partsNo: '4D-1F83-72',
      partsNm: 'スターターギア2',
      supersedingParts: '110-09817-72',
      location: '101-76-01-04',
      locationType: '普通',
      stockQty: '56',
      largeGroup: '特機',
      middleGroup: '発電機',
    },
    {
      partsNo: '4D-1F83-73',
      partsNm: 'スターターギア3',
      supersedingParts: '110-09817-72',
      location: '101-76-01-06',
      locationType: '普通',
      stockQty: '23',
      largeGroup: '船外機',
      middleGroup: '船外機 ',
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
const partsInputDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
}, {
  manual: true,
});
const partsInputDs = partsInputDsApi.data;
const productCategoryDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  manual: true,
});
const productCategoryDs = productCategoryDsApi.data;
const locationTypeDsApi = useApi({
  url: '/common/helper/getLocationClassificationList.json',
  method: 'post',
  data: {
    arg0: '',
    arg1: '',
  },
}, {
  manual: true,
});
const locationTypeDs = locationTypeDsApi.data;
const locationDsApi = useApi({
  url: '/common/valuelist/locationValueList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    if (data.length > 0) {
      queryFormData.location = data[0].locationNo;
      queryFormData.locationId = data[0].locationId;
    }
  },
  manual: true,
});
const locationDs = locationDsApi.data;
const gridDs2Api = useApi({
  url: '/parts/spq0303/getPartsStockDetailList.json',
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
    if (data.content.length > 0) {
      exportFlg.value = false;
    } else {
      exportFlg.value = true;
    }
  },
  manual: true,
});
const gridDs2 = gridDs2Api.data;
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
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const viy2Button_5FbWKcClick = () => {
  doRetrieve();
};
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const partsSelect = (params) => {
  queryFormData.partsId = params.id;
  if (queryFormData.partsId) {
    queryFormData.productCategory = [];
    partsFlg.value = true;
  } else {
    partsFlg.value = false;
  }
};
const partsClear = () => {
  queryFormData.partsId = '';
  queryFormData.productCategory = [];
  partsFlg.value = false;
};
const partsLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.partsId = '';
    if (obj.currentValue) {
      onLeavePartsCode(obj.currentValue);
      queryFormData.productCategory = [];
      partsFlg.value = true;
    } else {
      partsFlg.value = false;
    }
  }
};
const partsPopoverColumns = computed(() => {
  return parts_column;
});
const partsPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), options: largeGroupDs.value, clearable: true, props: { checkStrictly: true }, style: { width: '150px' } },
  ];
});
const locationChange = (value) => {
  if (value && value.length > 0) {
    const pointid = queryFormData.pointId;
    const flag = '';
    const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL,
      LocationType.SERVICE, LocationType.FROZEN];
    locationDsApi.runAsync({
      arg0: flag,
      pointId: pointid,
      locationCd: value,
      locationTypeList,
    });
  }
};
const locationOnSuffixIconClick = (event) => {
  queryFormData.locationId = '';
};
const viy2Button_CblvNClick = (params) => {
  iconSearchClick();
};
const viy2Button_5heznYClick = () => {
  onExport();
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
const gridLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLocationTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCopy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
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
const gridWzEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBinTypeEditRender = computed(() => {
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
const paginationCurrentChange = (currentPage) => {
  if (gridDs.value.totalElements === 0) {
    return;
  }
  doRetrieve();
};
onMounted(() => {
  init();
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
watch(() => routeParam, (newVal, oldVal) => {
  init();
}, { deep: true },
);
const init = () => {
  paginationPageSize.value = PAGE_SIZE;
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    queryFormData.pointId = params.pointId;
    queryFormData.parts = `${params.partsNo} ${params.partsNm}`;
    queryFormData.partsId = params.partsId;
    queryFormData.productCategory = [];
    partsFlg.value = true;
    doRetrieve();
  } else {
    queryFormData.pointId = uc.defaultPointId;
  }
};
const resetCondition = () => {
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = '';
  }
  queryFormData.productCategory = [];
  queryFormData.mainLocationSign = 'N';
  resetTblResults();
  queryFormData.pointId = uc.defaultPointId;
  partsFlg.value = false;
  // 重置分页
  gridDs.value.totalElements = 0;
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
};
const resetTblResults = () => {
  gridDs.value.content = [];
  exportFlg.value = true;
  // 重置分页
  gridDs.value.totalElements = 0;
};
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const onExport = () => {
  useApi(
    {
      url: '/parts/spq0303/exportPartsStockDetailExcel.json',
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
        VueUtil.saveAs(data, 'SPQ0303_02.xlsx');
      },
    },
  );
};
// location侧边栏选择后
const callbkSelectLocation = (param) => {
  queryFormData.location = param.locationNo;
  queryFormData.locationId = param.locationId;
  showLocationWin.value = false;
};
const closeLocationAside = () => {
  showLocationWin.value = false;
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
const iconSearchClick = () => {
  showLocationWin.value = true;
  const point = getPointLabel(queryFormData.pointId);
  const pointid = queryFormData.pointId;
  const flag = '';
  const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL,
    LocationType.SERVICE, LocationType.FROZEN];
  asideParams.value = {
    flag,
    point,
    pointId: pointid,
    locationTypeList,
  };
};
const getPointLabel = (pointId) => {
  const item = find(pointDs.value, { id: pointId });
  return item ? item.desc : null;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_Kxk1Y"
      ref="viy2Flex_Kxk1Y"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_hfIi7" ref="viy2Panel_hfIi7" title="検索条件">
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
                v-if="false"
                :label="t('label.parts')"
                prop="parts"
              >
                <VueValueList
                  :use-common-popover="true"
                  :use-common-popup="true"
                  id="parts"
                  aside-size="60%"
                  ref="parts"
                  :toggle-popover-on-click="queryFormData.parts.length > 3"
                  v-model="queryFormData.parts"
                  select-field="desc"
                  :popover-min-query-length="3"
                  :close-on-click-modal="true"
                  :use-popup="true"
                  :clearable="true"
                  :popover-width="500"
                  width="250px"
                  :popover-columns="partsPopoverColumns"
                  :popover-query-method="partsPopoverQueryMethod"
                  :popup-columns="partsPopupColumns"
                  :popup-conditions="partsPopupConditions"
                  :popup-query-method="partsPopupQueryMethod"
                  @select="partsSelect"
                  @clear="partsClear"
                  @leave="partsLeave"
                >
                  <template #asideHeader>
                    <VueRow
                      id="viy2Row_1MwUsG"
                      ref="viy2Row_1MwUsG"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_1MwUsR" ref="viy2Text_1MwUsR" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                <VueValueList
                  id="viy2ValueList_N7tbE"
                  ref="viy2ValueList_N7tbE"
                  v-model="queryFormData.partsTest"
                  :use-popover="true"
                  :use-popup="true"
                  width="200px"
                />
              </VueFormItem>
              <VueFormItem
                label="商品区分"
                prop="productCategory"
              >
                <VueCascader
                  id="viy2Cascader_r874R"
                  ref="viy2Cascader_r874R"
                  v-model="queryFormData.productCategory"
                  :clearable="true"
                  :disabled="partsFlg"
                  :style="{ width: '250px' }"
                  :options="productCategoryDs"
                  :props="viy2Cascader_r874RProps"
                />
              </VueFormItem>
              <VueFormItem
                label="ロケーション"
                prop="location"
              >
                <VueInput
                  id="location"
                  ref="location"
                  v-model="queryFormData.location"
                  type="text"
                  class="no-border"
                  :on-suffix-icon-click="locationOnSuffixIconClick"
                  :style="{ width: '250px' }"
                  @change="locationChange"
                >
                  <template #append>
                    <VueButton id="viy2Button_CblvN" ref="viy2Button_CblvN" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_CblvNClick" />
                  </template>
                </VueInput>
              </VueFormItem>
              <VueFormItem
                label="ロケーションタイプ"
                prop="locationTypeId"
              >
                <VueSelect
                  id="locationType"
                  ref="locationType"
                  v-model="queryFormData.locationTypeId"
                  :style="{ width: '250px' }"
                  :collapse-tags="true"
                  :clearable="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :options="locationTypeOpts"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="メインロケーションサイン"
                prop="mainLocationSign"
              >
                <VueCheckbox
                  id="viy2CheckBox_hPg6Iu"
                  ref="viy2CheckBox_hPg6Iu"
                  v-model="queryFormData.mainLocationSign"
                  true-label="Y"
                  false-label="N"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_Kxqgc"
        ref="viy2Flex_Kxqgc"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_hfWTZ" ref="viy2Panel_hfWTZ" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heznY" ref="viy2Button_5heznY" icon-position="left" :disabled="exportFlg" @click="viy2Button_5heznYClick">
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
              width="50px"
              min-width="50px"
              header-align="center"
            />
            <VueInputColumn
              :formatter="gridPartsNoFormatter"
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              show-overflow="tooltip"
              :sortable="true"
              title="部品番号"
              width="150px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_2wveVC" ref="viy2Button_2wveVC" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              show-overflow="tooltip"
              :sortable="true"
              title="部品名称"
              min-width="200px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_2wvHSi" ref="viy2Button_2wvHSi" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridLargeGroupEditRender"
              field="largeGroup"
              show-overflow="tooltip"
              :sortable="true"
              title="商品大区分"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridMiddleGroupEditRender"
              field="middleGroup"
              show-overflow="tooltip"
              :sortable="true"
              title="商品中区分"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridSmallGroupEditRender"
              field="smallGroup"
              show-overflow="tooltip"
              :sortable="true"
              title="商品小区分"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridLocationEditRender"
              field="location"
              show-overflow="tooltip"
              :sortable="true"
              title="ロケーション"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridLocationTypeEditRender"
              field="locationType"
              show-overflow="tooltip"
              :sortable="true"
              title="ロケーションタイプ"
              width="180px"
            />
            <VueTemplateColumn
              :edit-render="gridCopy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
              align="center"
              aggregate-label="合計"
              :sortable="true"
              title="メインロケーションサイン"
              width="180px"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_5Ezc7N"
                  ref="viy2CheckBox_5Ezc7N"
                  v-model="scope.row.mainLocationSign"
                  :disabled="true"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
            <VueInputColumn
              :formatter="gridSupersedingPartsFormatter"
              :edit-render="gridSupersedingPartsEditRender"
              field="supersedingParts"
              show-overflow="tooltip"
              :sortable="true"
              title="代替部品（旧品）"
              width="180px"
            />
            <VueInputColumn
              v-if="false"
              :edit-render="gridWzEditRender"
              field="wz"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.wz')"
              width="150px"
            />
            <VueInputColumn
              v-if="false"
              :edit-render="gridBinTypeEditRender"
              field="binType"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.binType')"
              width="120px"
            />
            <VueNumberColumn
              :formatter="gridStockQtyFormatter"
              :edit-render="gridStockQtyEditRender"
              field="stockQty"
              aggregate="sum"
              :sortable="true"
              title="在庫数量"
              width="100px"
              header-align="center"
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
          class="paging-area-margin"
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
    <VueAside
      id="locationAside"
      ref="locationAside"
      v-model="showLocationWin"
      :modal="true"
      direction="rtl"
      size="60%"
      :with-header="false"
      :close-on-click-modal="true"
      :close-on-press-escape="true"
    >
      <viy2Subpage_nm3U6Page
        id="viy2Subpage_nm3U6"
        ref="viy2Subpage_nm3U6"
        :init-data="asideParams"
        @select="callbkSelectLocation"
        @close="closeLocationAside"
      />
    </VueAside>
  </VueForm>
</template>
