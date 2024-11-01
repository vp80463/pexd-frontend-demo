<script setup>
import { IconMoreFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { formatPartNo, formatQty } from '@/pj-commonutils.js';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const printFlg = ref(true);
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const pointIdForWorkZone = ref(uc.defaultPointId);
defineOptions({
  name: 'spq0307_01',
});
const form = ref();
const viy2Flex_KLyEP = ref();
const queryForm = ref();
const viy2Panel_IGwgz = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_6IAt6a = ref();
const viy2Select_1rPSyEH = ref();
const parts = ref();
const viy2Row_2H4mGt = ref();
const wz = ref();
const inputSign = ref();
const showDifferentOnly = ref();
const viy2Flex_KLBCX = ref();
const viy2Panel_IGxcT = ref();
const viy2Button_in3lB = ref();
const viy2Button_5heur2 = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_2H8XGU = ref();
const viy2Button_2H9oyI = ref();
const viy2CheckBox_6ocBM5 = ref();
const viy2Row_M0Opx = ref();
const copy0_copy1_copy0_viy2Row_M0Opx_col1 = ref();
const copy0_copy1_copy0_viy2Row_M0Opx_col2 = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '56455 倉庫', parts: '', wzId: '', inputSign: 'N', showDifferentOnly: 'N',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const viy2Select_1rPSyEHOpts = reactive([
  {
    desc:
'56455 倉庫',
    id:
'56455 倉庫',
  },
  {
    desc:
'Option2',
    id:
'Option2',
  },
  {
    desc:
'Option3',
    id:
'Option3',
  },
]);
const partsPopoverQueryMethod = parts_query_method;
const partsPopupColumns = ref(parts_pop_column);
const partsPopupQueryMethod = parts_pop_query_method;
const inputSignOpts = [
  {
    label:
'',
    value:
'',
  },
];
const showDifferentOnlyOpts = [
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
const viy2CheckBox_6ocBM5Opts = [
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
      wz: 'DES001',
      location: '637-454-4504',
      partsNo: 'FJS-001-DHFU',
      partsNm: '電子ディスク001',
      systemQty: '10',
      actualQty: '11',
    },
    {
      wz: 'DES001',
      location: '637-123-4504',
      partsNo: 'FJS-002-DHFU',
      partsNm: '電子ディスク002',
      systemQty: '12',
      actualQty: '12',
    },
    {
      wz: 'DES001',
      location: '637-456-4504',
      partsNo: 'FJS-003-DHFU',
      partsNm: '電子ディスク003',
      systemQty: '8',
      actualQty: '9',
    },
    {
      wz: 'DES001',
      location: '637-152-3321',
      partsNo: 'FJS-004-DHFU',
      partsNm: '電子ディスク004',
      systemQty: '50',
      actualQty: '49',
    },
  ]
  ,
}, {
  onSuccess: (data, params) => {
    printFlg.value = false;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const partsInputDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
}, {
  manual: true,
});
const partsInputDs = partsInputDsApi.data;
const gridDs2Api = useApi({
  url: '/parts/spq0307/getPartsStocktakingProgressList.json',
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
      printFlg.value = false;
    } else {
      printFlg.value = true;
    }
  },
  manual: true,
});
const gridDs2 = gridDs2Api.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
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
const workZoneDsApi = useApi({
  url: '/common/helper/getWorkZoneList.json',
  method: 'post',
  data: {
    arg0: pointIdForWorkZone,
  },
}, {
  manual: true,
});
const workZoneDs = workZoneDsApi.data;
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
const viy2Select_1rPSyEHChange = (value) => {
  pointIdForWorkZone.value = value;
  queryFormData.wzId = '';
// workZoneDsApi.runAsync();
};
const partsSelect = (params) => {
  queryFormData.partsId = params.id;
};
const partsClear = () => {
  queryFormData.partsId = '';
};
const partsLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.partsId = '';
    if (obj.currentValue) {
      onLeavePartsCode(obj.currentValue);
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
const viy2Button_5heur2Click = () => {
  onPrintBtn();
};
const gridWzEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  if (row.cellValue) {
    return formatPartNo(row.cellValue);
  }
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
const gridLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSystemQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridSystemQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridActualQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridActualQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCopy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const paginationCurrentChange = (currentPage) => {
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
  resetTblResults();
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.inputSign = 'N';
  queryFormData.showDifferentOnly = 'N';
};
const resetTblResults = () => {
  gridDs.value.content = [];
  printFlg.value = true;
  // 重置分页
  gridDs.value.totalElements = 0;
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
};
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const onPrintBtn = () => {
  useApi(
    {
      url: '/parts/spq0307/printPartsStocktakingProgressList.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return queryFormData;
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartsStocktakingProgressList.pdf');
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
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_KLyEP"
      ref="viy2Flex_KLyEP"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_IGwgz" ref="viy2Panel_IGwgz" title="条件情報">
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
            id="viy2Row_6IAt6a"
            ref="viy2Row_6IAt6a"
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
                label="倉庫"
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
                  :options="viy2Select_1rPSyEHOpts"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                  @change="viy2Select_1rPSyEHChange"
                />
              </VueFormItem>
              <VueFormItem
                label="部品"
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
                      id="viy2Row_2H4mGt"
                      ref="viy2Row_2H4mGt"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_2H4mGu" ref="viy2Text_2H4mGu" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                v-if="false"
                label="エリア"
                prop="wzId"
              >
                <VueSelect
                  id="wz"
                  ref="wz"
                  v-model="queryFormData.wzId"
                  :style="{ width: '200px' }"
                  :collapse-tags="true"
                  :filterable="true"
                  :clearable="true"
                  :collapse-tags-tooltip="true"
                  :options="workZoneDs"
                  :props="{
                    label: 'description',
                    value: 'workzoneId',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="未入力のみ"
                prop="inputSign"
              >
                <VueCheckbox
                  id="inputSign"
                  ref="inputSign"
                  v-model="queryFormData.inputSign"
                  true-label="Y"
                  false-label="N"
                />
              </VueFormItem>
              <VueFormItem
                label="差異部分のみ"
                prop="showDifferentOnly"
              >
                <VueCheckbox
                  id="showDifferentOnly"
                  ref="showDifferentOnly"
                  v-model="queryFormData.showDifferentOnly"
                  true-label="Y"
                  false-label="N"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_KLBCX"
        ref="viy2Flex_KLBCX"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_IGxcT" ref="viy2Panel_IGxcT" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_in3lB" ref="viy2Button_in3lB" icon-position="left">
                ファイル出力
              </VueButton>
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="printFlg" @click="viy2Button_5heur2Click">
                印刷
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
              width="50px"
              title="No."
            />
            <VueInputColumn
              v-if="false"
              :edit-render="gridWzEditRender"
              field="wz"
              show-overflow="tooltip"
              :sortable="true"
              title="エリア"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :formatter="gridPartsNoFormatter"
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              :sortable="true"
              title="部品番号"
              width="150px"
              header-align="center"
            >
              <template #append="scope">
                <VueButton id="viy2Button_2H8XGU" ref="viy2Button_2H8XGU" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              footer-align="center"
              :sortable="true"
              title="部品名称"
              width="150px"
              header-align="center"
            >
              <template #append="scope">
                <VueButton id="viy2Button_2H9oyI" ref="viy2Button_2H9oyI" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridLocationEditRender"
              field="location"
              show-overflow="tooltip"
              :sortable="true"
              aggregate-label="合計"
              title="ロケーション"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridSystemQtyFormatter"
              :edit-render="gridSystemQtyEditRender"
              field="systemQty"
              aggregate="sum"
              :sortable="true"
              title="システム数量"
              header-align="center"
              width="160px"
            />
            <VueNumberColumn
              :formatter="gridActualQtyFormatter"
              :edit-render="gridActualQtyEditRender"
              field="actualQty"
              aggregate="sum"
              :sortable="true"
              title="実績数量"
              width="130px"
              header-align="center"
            />
            <VueTemplateColumn
              :edit-render="gridCopy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
              align="center"
              :sortable="true"
              title="入力サイン"
              width="160px"
              header-align="center"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_6ocBM5"
                  ref="viy2CheckBox_6ocBM5"
                  v-model="scope.row.inputSign"
                  :disabled="true"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
          </VueTable>
        </VuePanel>
      </VueFlex>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        class="except-height-css"
      >
        <VueCol
          id="copy0_copy1_copy0_viy2Row_M0Opx_col1"
          ref="copy0_copy1_copy0_viy2Row_M0Opx_col1"
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 17 }"
        />
        <VueCol
          id="copy0_copy1_copy0_viy2Row_M0Opx_col2"
          ref="copy0_copy1_copy0_viy2Row_M0Opx_col2"
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
