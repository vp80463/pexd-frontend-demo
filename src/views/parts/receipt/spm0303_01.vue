<script setup>
import { IconDelete, IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { find } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import viy2Subpage_xkZfcPage from '/src/views/commons/select_location.vue';
import { LocationType, YES_NO_FLAG } from '@/constants/pj-constants.js';
import { formatCodeInput, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const detailPanelModel = ref(true);
// 侧边栏参数
const asideParams = ref();
// 按钮控制
const btnFlg = ref(true);
defineOptions({
  name: 'spm0303_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const reset = ref();
const confirm = ref();
const headerPanel = ref();
const queryForm = ref();
const viy2Row_OdnMi = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_QFuGM = ref();
const detailPanel = ref();
const viy2Row_wZvy4 = ref();
const addRow = ref();
const detailForm = ref();
const viy2Row_OcP6U = ref();
const viy2InputBox_5gtquD = ref();
const viy2Row_86517Y = ref();
const receiptQty = ref();
const registerQty = ref();
const onFrozenQty = ref();
const partsNo = ref();
const viy2Flex_QFyEv = ref();
const grid = ref();
const viy2Row_7oev5h = ref();
const iconButton = ref();
const locationAside = ref();
const viy2Subpage_xkZfc = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '',
});
const detailFormData = reactive({
  lineNo: '', receiptQty: '0', registerQty: '0', onFrozenQty: '0', partsNo: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2InputBox_5gtquDRules: [
    {
      required: true,
      message: t('errors.required', [t('label.lineNumber')]),
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
  qty: [
    {
      required: true,
      message: t('errors.required', [t('label.quantity')]),
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
const gridViy2TableButtonColumn_1LV4PButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRow,
      title: 'Delete',
      disabled: !btnFlg,
      hidden: scope.row.delFlg,
    },
  ];
};
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const gridDsApi = useApi({
  url: '/parts/spm0303/getStoringLineItemList.json',
  method: 'post',
  data: () => {
    return {
      storingLineId: detailFormData.storingLineId,
    };
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const lineNoDsApi = useApi({
  url: '/parts/spm0303/getStoringLineList.json',
  method: 'post',
  data: () => {
    return {
      point: queryFormData.point,
      pointId: queryFormData.pointId,
      lineNo: detailFormData.lineNo,
    };
  },
}, {
  onSuccess: (data, params) => {
    // detailFormData
    if (data) {
      detailFormData.storingLineId = data.storingLineId;
      detailFormData.partsNo = data.productCd;
      detailFormData.partsId = data.productId;
      detailFormData.receiptQty = data.instuctionQty;
      detailFormData.registerQty = data.storedQty;
      detailFormData.onFrozenQty = data.frozenQty;
      detailFormData.completedDate = data.completedDate;
      detailFormData.completedTime = data.completedTime;
      // 当completedDate无数值时查询
      if (!detailFormData.completedDate) {
        gridDsApi.runAsync();
      }
      // 当Storing Line ID存在, 且completed_date为null时可用
      if (detailFormData.storingLineId && !detailFormData.completedDate) {
        btnFlg.value = false;
      } else {
        btnFlg.value = true;
      }
    } else {
      detailFormData.storingLineId = '';
      detailFormData.partsNo = '';
      detailFormData.partsId = '';
      detailFormData.receiptQty = '';
      detailFormData.registerQty = '';
      detailFormData.onFrozenQty = '';
      detailFormData.completedDate = '';
      detailFormData.completedTime = '';
      gridDs.value.splice(0);
      btnFlg.value = true;
    }
  },
  manual: true,
});
const lineNoDs = lineNoDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0303/confirmPartsStockRegister.json',
  method: 'post',
  data: () => {
    const insertRow = grid.value.getRecordset().insertRecords;
    const updateRow = gridDs.value;
    if (insertRow.length === 0 && updateRow.length === 0) {
      return;
    }
    sumQty();
    return {
      // header
      pointId: queryFormData.pointId,
      // detailForm
      storingLineId: detailFormData.storingLineId,
      // locationTypeId: detailFormData.locationTypeId,
      receiptQty: detailFormData.receiptQty,
      registerQty: detailFormData.registerQty,
      onFrozenQty: detailFormData.onFrozenQty,
      partsNo: detailFormData.partsNo,
      partsId: detailFormData.partsId,
      // detailGrid
      insertData: insertRow,
      updateData: updateRow,
    };
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    // 清空detail
    resetDetail();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const resetClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetHeader();
    resetDetail();
  }).catch(() => {
  });
};
const confirmClick = () => {
  doConfirm();
};
const addRowClick = () => {
  onAddRow();
};
const viy2InputBox_5gtquDOnSuffixIconClick = (event) => {
  resetDetail();
};
const viy2InputBox_5gtquDChange = (value) => {
  for (const key in detailFormData) {
    if (detailFormData[key] !== detailFormData.lineNo) {
      detailFormData[key] = '';
    }
  }
  resetTblResults();
};
const gridLocationChange = function (obj, value) {
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
const iconButtonClick = () => {
  iconSearchClick();
};
const gridLocationTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridQtyChange = function (obj, value) {
  sumQty();
};
const gridQtyEvents = reactive({
  change: gridQtyChange,
});
const gridQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridQtyEditRender = computed(() => {
  return {
    enabled: true,
    events: gridQtyEvents,
    attrs: {
      min: 0,
      precision: 0,
    },
  };
});
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
});
watch (
  () => queryFormData, (newVal, oldVal) => {
    resetDetail();
  }, { deep: true },
);
const sumQty = () => {
  const data = grid.value.getTableData().fullData;
  let registerQty = 0;
  let onFrozenQty = 0;
  data.forEach(
    (row) => {
      if (row.locationTypeCd === LocationType.TENTATIVE
|| row.locationTypeCd === LocationType.NORMAL) {
        registerQty += row.qty;
      }
      if (row.locationTypeCd === LocationType.FROZEN) {
        onFrozenQty += row.qty;
      }
    },
  );
  detailFormData.registerQty = registerQty;
  detailFormData.onFrozenQty = onFrozenQty;
};
const doConfirm = async () => {
  const table = grid.value;
  const err = await table.validate(true);
  if (err) {

  } else {
    confirmDsApi.runAsync();
  }
};
// 清空明细表单
const resetDetail = () => {
  detailForm.value.resetFields();
  for (const key in detailFormData) {
    detailFormData[key] = '';
  }
  resetTblResults();
};
const resetHeader = () => {
  queryForm.value.resetFields();
  for (const key in queryFormData) {
    queryFormData[key] = '';
  }
  queryFormData.pointId = uc.defaultPointId;
};
const resetTblResults = () => {
  gridDs.value.splice(0);
  btnFlg.value = true;
};
const onAddRow = () => {
  const $table = grid.value;
  if ($table) {
    const record = {};
    $table.insertAt(record, -1).then((newRow) => {
      $table.setCurrentRow(newRow.row);
    });
  }
};
const onDelRow = (row) => {
  grid.value.remove(row);
  sumQty();
};
// 按下回车触发检索
const lineNoHandleEnter = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      detailForm.value.validate((valid) => {
        if (valid) {
          lineNoDsApi.runAsync();
        }
      });
    }
  });
};
const iconSearchClick = () => {
  showLocationWin.value = true;
  const point = getPointLabel(queryFormData.pointId); ;
  const pointId = queryFormData.pointId;
  const flag = YES_NO_FLAG.NO;
  const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL,
    LocationType.SERVICE, LocationType.FROZEN];
  asideParams.value = {
    flag,
    point,
    pointId,
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
  row.locationTypeCd = param.locationTypeCd;
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
    row.locationTypeCd = '';
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
        row.locationTypeCd = data[0].locationTypeCd;
        sumQty();
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
        <VueButton id="reset" ref="reset" icon-position="left" type="warning" @click="resetClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="confirm" ref="confirm" icon-position="left" type="info" :disabled="btnFlg" @click="confirmClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="headerPanel" ref="headerPanel" :collapse="false" :title="t('label.header')" class="margin-top-div0 except-height-css">
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_OdnMi"
          ref="viy2Row_OdnMi"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 6 }"
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
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VueFlex
      id="viy2Flex_QFuGM"
      ref="viy2Flex_QFuGM"
      direction="column"
      class="full-height-table"
    >
      <VuePanel id="detailPanel" ref="detailPanel" v-model="detailPanelModel" :title="t('label.detail')" :collapse="false">
        <template #header>
          <div style="width: 400px">
            <VueRow
              v-show="detailPanelModel"
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
                <VueButton id="addRow" ref="addRow" icon-position="left" :disabled="btnFlg" class="icon-button-width" @click="addRowClick">
                  +
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueForm
          id="detailForm"
          ref="detailForm"
          class="except-height-css"
          :model="detailFormData"
        >
          <VueRow
            id="viy2Row_OcP6U"
            ref="viy2Row_OcP6U"
          >
            <VueCol
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                :label="t('label.lineNumber')"
                prop="lineNo"
                :rules="rules.viy2InputBox_5gtquDRules"
              >
                <VueInput
                  id="viy2InputBox_5gtquD"
                  ref="viy2InputBox_5gtquD"
                  v-model="detailFormData.lineNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :clearable="true"
                  :on-suffix-icon-click="viy2InputBox_5gtquDOnSuffixIconClick"
                  :style="{ width: '200px' }"
                  @keyup.enter="lineNoHandleEnter"
                  @change="viy2InputBox_5gtquDChange"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_86517Y"
            ref="viy2Row_86517Y"
          >
            <VueCol
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                :label="t('label.receiptQuantity')"
                prop="receiptQty"
              >
                <VueInput
                  id="receiptQty"
                  ref="receiptQty"
                  v-model="detailFormData.receiptQty"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.registerQty')"
                prop="registerQty"
              >
                <VueInput
                  id="registerQty"
                  ref="registerQty"
                  v-model="detailFormData.registerQty"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.onFrozenQty')"
                label-width="130px"
                prop="onFrozenQty"
              >
                <VueInput
                  id="onFrozenQty"
                  ref="onFrozenQty"
                  v-model="detailFormData.onFrozenQty"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.partsNo')"
                prop="partsNo"
              >
                <VueInput
                  id="partsNo"
                  ref="partsNo"
                  v-model="detailFormData.partsNo"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VueFlex
        id="viy2Flex_QFyEv"
        ref="viy2Flex_QFyEv"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" :stripe="true" header-align="center" :highlight-current-row="true" height="100%" :border="true" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_7oev5h"
            ref="viy2Row_7oev5h"
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
            :edit-render="gridLocationEditRender"
            field="location"
            :resizable="true"
            :title="t('label.location')"
            width="200px"
          >
            <template #append="scope">
              <VueButton id="iconButton" ref="iconButton" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="iconButtonClick" />
            </template>
          </VueInputColumn>
          <VueInputColumn
            :edit-render="gridLocationTypeEditRender"
            field="locationType"
            :resizable="true"
            show-overflow="tooltip"
            :title="t('label.locationType')"
            width="150px"
          />
          <VueNumberColumn
            :formatter="gridQtyFormatter"
            :edit-render="gridQtyEditRender"
            field="qty"
            :resizable="true"
            :min="0"
            :precision="0"
            :title="t('label.quantity')"
            width="130px"
            header-align="center"
          />
          <VueButtonColumn
            align="center"
            width="80px"
            :buttons="gridViy2TableButtonColumn_1LV4PButtons"
          />
        </VueTable>
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
      <viy2Subpage_xkZfcPage
        id="viy2Subpage_xkZfc"
        ref="viy2Subpage_xkZfc"
        :init-data="asideParams"
        @select="callbkSelectLocation"
        @close="closeLocationAside"
      />
    </VueAside>
  </VueForm>
</template>

<style type="text/css" scoped>
:deep(.full-height-table) {
height: calc(var(--main-content-full-height) - var(--main-content-margin-top) - var(--main-content-margin-bottom) - 150px)
}
</style>
