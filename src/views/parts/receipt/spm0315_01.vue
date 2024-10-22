<script setup>
import { IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { find } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import viy2Subpage_hF2ocPage from '/src/views/commons/select_location.vue';
import { LocationType, YES_NO_FLAG } from '@/constants/pj-constants.js';
import { formatCodeInput, formatPartNo, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const confirmFlg = ref(true);
// 侧边栏参数
const asideParams = ref();
const gridHeight = ref();
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
defineOptions({
  name: 'spm0315_01',
});
const form = ref();
const viy2Flex_KFlYi = ref();
const viy2Panel_28D9T = ref();
const viy2Button_7yhE5U = ref();
const reset = ref();
const viy2Button_7yh3oU = ref();
const queryForm = ref();
const viy2Row_3mqzSt = ref();
const viy2Select_1rPSyEH = ref();
const receiptNo = ref();
const viy2Flex_KFwYM = ref();
const viy2Panel_28O6b = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Button_hHs2g = ref();
const locationAside = ref();
const viy2Subpage_hF2oc = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', receiptNo: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  receiptNoRules: [
    {
      required: true,
      message: t('errors.required', [t('label.receiptNumber')]),
    },
  ],
});
const gridRules = {
  location: [
    {
      required: true,
      message: t('errors.required', [t('label.location')]),
    },
  ],
};
const showLocationWin = ref(false);
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/parts/spm0315/getPartsStockRegisterList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (data && data.length > 0) {
      confirmFlg.value = false;
    } else {
      confirmFlg.value = true;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0315/confirmPartsStockRegister.json',
  method: 'post',
  data: () => {
    return {
      gridDataList: grid.value.getTableData().fullData,
      pointId: queryFormData.pointId,
    };
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDs.value.splice(0);
    gridDsApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
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
const viy2Button_7yhE5UClick = () => {
  doRetrieve();
};
const resetClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_7yh3oUClick = () => {
  doConfirm();
};
const gridReceiptNoFormatter = (row, columnConfig, cellValue) => {
  if (row.cellValue) {
    return formatPartNo(row.cellValue);
  }
};
const gridReceiptNoEditRender = computed(() => {
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
const gridReceiptedQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridReceiptedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridLocationChange = function (obj, event) {
  const row = obj.row;
  getLocationValue(row);
};
const gridLocationEvents = reactive({
  change: gridLocationChange,
});
const gridLocationEditRender = computed(() => {
  return {
    enabled: true,
    events: gridLocationEvents,
  };
});
const viy2Button_hHs2gClick = () => {
  iconSearchClick();
};
const gridLocationTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMainLocationSignEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRegisterQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridRegisterQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      min: 0,
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.pointId = 568;
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
  const err = await grid.value.validate(true);
  if (err) {

  } else {
    confirmDsApi.runAsync();
  }
};
const onDelRow = (row) => {
  grid.value.remove(row);
  const data = grid.value.getTableData().fullData;
  if (Array.isArray(data) && data.length === 0) {
    confirmFlg.value = true;
  } else {
    confirmFlg.value = false;
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
  row.location = param.locationNo;
  row.locationId = param.locationId;
  row.binTypeId = param.binTypeId;
  row.locationType = param.locationTypeCode;
  row.locationTypeId = param.locationTypeCd;
  // 当Main Location Sign <> 'Y', 且location.location_type = S006NORMAL时可编辑;
  if (row.mainLocationSign !== YES_NO_FLAG.YES && row.locationTypeId === LocationType.NORMAL) {
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
  if (!row.location) {
    row.locationId = '';
    row.binTypeId = '';
    row.locationType = '';
    row.locationTypeId = '';
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
        locationCd: row.location,
        locationTypeList: [LocationType.TENTATIVE, LocationType.NORMAL,
          LocationType.SERVICE, LocationType.FROZEN],
      };
    },
    timeout: 30000,
  },
  {
    onSuccess: (data, params) => {
      if (data.length > 0) {
        row.locationId = data[0].locationId;
        row.binTypeId = data[0].binTypeId;
        row.locationType = data[0].locationTypeCode;
        row.locationTypeId = data[0].locationTypeCd;
        // 当Main Location Sign <> 'Y', 且location.location_type = S006NORMAL时可编辑;
        if (row.mainLocationSign !== YES_NO_FLAG.YES && row.locationTypeId === LocationType.NORMAL) {
          row.setAsMainLocationFlg = false;
        } else {
          row.setAsMainLocationFlg = true;
        }
      }
    },
  },
);
const getPointLabel = (pointId) => {
  const item = find(pointDs.value, { id: pointId });
  return item ? item.desc : null;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_KFlYi"
      ref="viy2Flex_KFlYi"
      direction="column"
      class="full-height"
    >
      <VuePanel id="viy2Panel_28D9T" ref="viy2Panel_28D9T" title="検索条件">
        <template #header>
          <div style="width: auto">
            <VueButton id="viy2Button_7yhE5U" ref="viy2Button_7yhE5U" icon-position="left" @click="viy2Button_7yhE5UClick">
              検索
            </VueButton>
            <VueButton id="reset" ref="reset" icon-position="left" @click="resetClick">
              クリア
            </VueButton>
            <VueButton id="viy2Button_7yh3oU" ref="viy2Button_7yh3oU" icon-position="left" type="info" :disabled="confirmFlg" @click="viy2Button_7yh3oUClick">
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
            id="viy2Row_3mqzSt"
            ref="viy2Row_3mqzSt"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                v-show="false"
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
                  :options="pointDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="受付番号"
                prop="receiptNo"
                :rules="rules.receiptNoRules"
              >
                <VueInput
                  id="receiptNo"
                  ref="receiptNo"
                  v-model="queryFormData.receiptNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VueFlex
        id="viy2Flex_KFwYM"
        ref="viy2Flex_KFwYM"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_28O6b" ref="viy2Panel_28O6b" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
              :formatter="gridReceiptNoFormatter"
              :edit-render="gridReceiptNoEditRender"
              field="receiptNo"
              title="受付番号"
              width="130px"
            />
            <VueInputColumn
              :formatter="gridPartsNoFormatter"
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              title="部品番号"
              width="130px"
            />
            <VueNumberColumn
              :formatter="gridReceiptedQtyFormatter"
              :edit-render="gridReceiptedQtyEditRender"
              field="receiptedQty"
              align="right"
              title="受付数"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridLocationEditRender"
              field="location"
              :resizable="true"
              show-overflow="tooltip"
              title="ロケーション"
              width="200px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_hHs2g" ref="viy2Button_hHs2g" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_hHs2gClick" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridLocationTypeEditRender"
              field="locationType"
              title="ロケーションタイプ"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridMainLocationSignEditRender"
              field="mainLocationSign"
              title="メインロケーション"
              width="160px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridRegisterQtyFormatter"
              :edit-render="gridRegisterQtyEditRender"
              field="registerQty"
              align="right"
              show-overflow="tooltip"
              :min="0"
              title="棚入数"
              width="140px"
              header-align="center"
            />
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
    >
      <viy2Subpage_hF2ocPage
        id="viy2Subpage_hF2oc"
        ref="viy2Subpage_hF2oc"
        :init-data="asideParams"
        @select="callbkSelectLocation"
        @close="closeLocationAside"
      />
    </VueAside>
  </VueForm>
</template>
