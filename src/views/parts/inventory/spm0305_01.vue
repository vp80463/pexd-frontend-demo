<script setup>
import { IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { find } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import viy2Subpage_ogQ12Page from '/src/views/commons/select_location.vue';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { LocationType, YES_NO_FLAG } from '@/constants/pj-constants.js';
import { formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const asideParams = ref();
const confirmFlg = ref(true);
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
defineOptions({
  name: 'spm0305_01',
});
const form = ref();
const viy2Flex_K9nGB = ref();
const queryForm = ref();
const viy2Panel_fNcoG = ref();
const confirmBtn = ref();
const retrieveBtn = ref();
const resetBtn = ref();
const viy2Row_awtHRi = ref();
const viy2Select_1rPSyEH = ref();
const parts = ref();
const viy2Row_9EMiKT = ref();
const viy2ValueList_XqrtP = ref();
const viy2Flex_K9R4b = ref();
const viy2Panel_fNwQH = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2CheckBox_8T8R2z = ref();
const iconButton = ref();
const setAsMainLocation = ref();
const locationAside = ref();
const viy2Subpage_ogQ12 = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', parts: '', partsNo: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  partsRules: [
    {
      required: true,
      message: t('errors.required', [t('label.parts')]),
    },
  ],
  viy2ValueList_XqrtPRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showLocationWin = ref(false);
const partsPopoverQueryMethod = parts_query_method;
const partsPopupColumns = ref(parts_pop_column);
const partsPopupQueryMethod = parts_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      fromLocation: '10-123-01',
      fromLocationType: '普通',
      stockQty: '10',
    },
    {
      fromLocation: '10-123-04',
      fromLocationType: '凍結',
      stockQty: '7',
    },
  ],
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      confirmFlg.value = false;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const partsInputDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
}, {
  manual: true,
});
const partsInputDs = partsInputDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0305/confirmPartsLocationStockMovement.json',
  method: 'post',
  data: () => {
    return {
      gridDataList: grid.value.getTableData().fullData,
      pointId: queryFormData.pointId,
      partsId: queryFormData.partsId,
    };
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDs.value.splice(0);
    gridDsApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
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
  url: '/parts/spm0305/getPartsLocationList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      confirmFlg.value = false;
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
const confirmBtnClick = () => {
  doConfirm();
};
const retrieveBtnClick = () => {
  doRetrieve();
};
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const partsSelect = (params) => {
  queryFormData.partsId = params.id;
};
const partsClear = () => {
  queryFormData.partsId = '';
}; ;
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
const gridFromLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFromLocationTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMainLocationSignEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
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
const gridMovementQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridMovementQtyEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      min: 0,
      precision: 0,
    },
  };
});
const gridToLocationChange = function (obj, value) {
  const row = obj.row;
  getLocationValue(row);
};
const gridToLocationEvents = reactive({
  change: gridToLocationChange,
});
const gridToLocationEditRender = computed(() => {
  return {
    enabled: true,
    events: gridToLocationEvents,
  };
});
const iconButtonClick = () => {
  iconSearchClick();
};
const gridSetAsMainLocationEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
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
};
const resetTblResults = () => {
  gridDs.value.splice(0);
  confirmFlg.value = true;
};
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const doConfirm = async () => {
  const table = grid.value;
  const err = await table.validate(true);
  if (err) {

  } else {
    confirmDsApi.runAsync();
  }
};
const iconSearchClick = () => {
  showLocationWin.value = true;
  const point = getPointLabel(queryFormData.pointId);
  const pointid = queryFormData.pointId;
  const flag = YES_NO_FLAG.NO;
  const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL,
    LocationType.SERVICE, LocationType.FROZEN];
  asideParams.value = {
    flag,
    point,
    pointId: pointid,
    locationTypeList,
  };
};
// location侧边栏选择后
const callbkSelectLocation = (param) => {
  const row = grid.value.getCurrentRecord();
  row.toLocation = param.locationNo;
  row.toLocationId = param.locationId;
  row.toBinTypeId = param.binTypeId;
  row.toLocationType = param.locationType;
  row.toLocationTypeId = param.locationTypeCd;
  if (row.mainLocationSign !== YES_NO_FLAG.YES && row.toLocationTypeId === LocationType.NORMAL) {
    row.setAsMainLocationFlg = false;
  } else {
    row.setAsMainLocationFlg = true;
  }
  showLocationWin.value = false;
};
const closeLocationAside = () => {
  showLocationWin.value = false;
};
const getLocationValue = (row) => {
  if (!row.toLocation) {
    row.toLocationId = '';
    row.toBinTypeId = '';
    row.toLocationType = '';
    row.toLocationTypeId = '';
    row.setAsMainLocation = '';
    row.setAsMainLocationFlg = true;
    return;
  }
  locationDsApi(row).runAsync();
};
const locationDsApi = row => useApi(
  {
    url: '/common/valuelist/locationValueList.json',
    method: 'post',
    data: () => {
      return {
        arg0: YES_NO_FLAG.NO,
        pointId: queryFormData.pointId,
        locationCd: row.toLocation,
        locationTypeList: [LocationType.TENTATIVE, LocationType.NORMAL,
          LocationType.SERVICE, LocationType.FROZEN],
      };
    },
    timeout: 30000,
  },
  {
    onSuccess: (data, params) => {
      if (data.length > 0) {
        row.toLocationId = data[0].locationId;
        row.toBinTypeId = data[0].binTypeId;
        row.toLocationType = data[0].locationType;
        row.toLocationTypeId = data[0].locationTypeCd;
        if (row.mainLocationSign !== YES_NO_FLAG.YES && row.toLocationTypeId === LocationType.NORMAL) {
          row.setAsMainLocationFlg = false;
        } else {
          row.setAsMainLocationFlg = true;
        }
      }
    },
  },
);
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
const getPointLabel = (pointId) => {
  const item = find(pointDs.value, { id: pointId });
  return item ? item.desc : null;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_K9nGB"
      ref="viy2Flex_K9nGB"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_fNcoG" ref="viy2Panel_fNcoG" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="info" :disabled="confirmFlg" @click="confirmBtnClick">
                保存
              </VueButton>
              <VueButton id="retrieveBtn" ref="retrieveBtn" icon-position="left" @click="retrieveBtnClick">
                検索
              </VueButton>
              <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_awtHRi"
            ref="viy2Row_awtHRi"
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
                label="部品"
                prop="parts"
                :rules="rules.partsRules"
              >
                <VueValueList
                  :use-common-popover="true"
                  :use-common-popup="true"
                  id="parts"
                  aside-size="60%"
                  ref="parts"
                  :toggle-popover-on-click="queryFormData.parts.length > 3"
                  v-model="queryFormData.parts"
                  popup-type="aside"
                  select-field="desc"
                  :popover-min-query-length="3"
                  :close-on-click-modal="true"
                  :use-popup="true"
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
                      id="viy2Row_9EMiKT"
                      ref="viy2Row_9EMiKT"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_9EMiKU" ref="viy2Text_9EMiKU" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                prop="partsNo"
                :rules="rules.viy2ValueList_XqrtPRules"
              >
                <VueValueList
                  id="viy2ValueList_XqrtP"
                  ref="viy2ValueList_XqrtP"
                  v-model="queryFormData.partsNo"
                  :use-popover="true"
                  :use-popup="true"
                  width="200px"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_K9R4b"
        ref="viy2Flex_K9R4b"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_fNwQH" ref="viy2Panel_fNwQH" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            <VueInputColumn
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              title="部品番号"
              width="180px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              title="部品名称"
              width="180px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridFromLocationEditRender"
              field="fromLocation"
              title="元ロケーション"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridFromLocationTypeEditRender"
              field="fromLocationType"
              title="ロケーションタイプ"
              width="180px"
              header-align="center"
            />
            <VueTemplateColumn
              :edit-render="gridMainLocationSignEditRender"
              align="center"
              field="mainLocationSign"
              title="メインロケーション"
              width="160px"
              header-align="center"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_8T8R2z"
                  ref="viy2CheckBox_8T8R2z"
                  v-model="scope.row.mainLocationSign"
                  :disabled="true"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
            <VueNumberColumn
              :formatter="gridStockQtyFormatter"
              :edit-render="gridStockQtyEditRender"
              field="stockQty"
              title="在庫数量"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridMovementQtyFormatter"
              :edit-render="gridMovementQtyEditRender"
              field="movementQty"
              :min="0"
              :precision="0"
              title="移動数量"
              width="160px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridToLocationEditRender"
              field="toLocation"
              title="移動先ロケーション"
              width="250px"
              header-align="center"
            >
              <template #append="scope">
                <VueButton id="iconButton" ref="iconButton" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="iconButtonClick" />
              </template>
            </VueInputColumn>
            <VueTemplateColumn
              :edit-render="gridSetAsMainLocationEditRender"
              align="center"
              field="setAsMainLocation"
              title="メインロケーション設定"
              width="200px"
              header-align="center"
            >
              <template #default="scope">
                <VueCheckbox
                  id="setAsMainLocation"
                  ref="setAsMainLocation"
                  v-model="scope.row.setAsMainLocation"
                  :disabled="scope.row.setAsMainLocationFlg"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
          </VueTable>
        </VuePanel>
      </VueFlex>
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
    >
      <viy2Subpage_ogQ12Page
        id="viy2Subpage_ogQ12"
        ref="viy2Subpage_ogQ12"
        :init-data="asideParams"
        @select="callbkSelectLocation"
        @close="closeLocationAside"
      />
    </VueAside>
  </VueForm>
</template>
