<script setup>
import { IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { find } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { AdjustmentType, LocationType, YES_NO_FLAG } from '@/constants/pj-constants.js';
import { warn_msg } from '@/pj-commonutils.js';
import {
  parts_column, parts_pop_column, parts_pop_query_method, parts_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const asideParams = ref();
const uc = useUser().userInfo;
const vShowHidden = ref(true);
const confirmFlag = ref(false);
const fromOrToFlag = ref(true);
const forzenTypeFlag = ref(false);
const partsCostReadOnlyFlag = ref(false);
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const nowPartsCode = ref();
defineOptions({
  name: 'spm0307_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const confirmBtn = ref();
const resetBtn = ref();
const conditionForm = ref();
const viy2Row_3mqzSt = ref();
const viy2Select_oStty = ref();
const viy2ValueList_90dtey = ref();
const viy2Row_9EyxON = ref();
const viy2Select_5zamox = ref();
const viy2Select_5ze3Ky = ref();
const checkForMinus = ref();
const viy2InputBox_m4EiX = ref();
const viy2Button_m4NdU = ref();
const viy2InputNumber_manYy = ref();
const viy2InputBox_5DsVs8 = ref();
const viy2InputNumber_5Cb6aO = ref();
const viy2InputNumber_3A58xa = ref();
const viy2InputNumber_5EiGcw = ref();
const viy2InputBox_3AhznA = ref();
const viy2Button_3Ahzor = ref();
const formData = reactive({
});
const conditionFormData = reactive({
  pointId: '', newPart: '', reason: '', adjustmentType: '', checkForMinus: false, fromLocation: '', currentStockQty: 0, adjustmentQuantity: '+', adjustmentQty: 0, averageCost: 0, partsCost: 0, toLocation: '',
});
const rules = reactive({
  viy2ValueList_90dteyRules: [
    {
      required: true,
      message: t('errors.required', [t('label.parts')]),
    },
  ],
  viy2Select_5zamoxRules: [
    {
      required: true,
      message: t('errors.required', [t('label.adjustmentReason')]),
    },
  ],
  viy2Select_5ze3KyRules: [
    {
      required: true,
      message: t('errors.required', [t('label.adjustmentType')]),
    },
  ],
  viy2InputBox_m4EiXRules: [
    {
      required: true,
      message: t('errors.required', [t('label.location')]),
    },
  ],
  viy2InputBox_5DsVs8Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputNumber_5Cb6aORules: [
    {
      required: true,
      message: t('errors.required', [t('label.adjustmentQuantity')]),
    },
  ],
  viy2InputNumber_5EiGcwRules: [
    {
      required: true,
      message: t('errors.required', [t('label.partsCost')]),
    },
  ],
  viy2InputBox_3AhznARules: [
    {
      required: true,
      message: t('errors.required', [t('label.location')]),
      enabled: forzenTypeFlag,
    },
  ],
});
const viy2ValueList_90dteyPopoverQueryMethod = parts_query_method;
const viy2ValueList_90dteyPopupColumns = ref(parts_pop_column);
const viy2ValueList_90dteyPopupQueryMethod = parts_pop_query_method;
const viy2Select_5zamoxOpts = reactive([
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
const viy2Select_5ze3KyOpts = reactive([
  {
    codeData1:
'一般調整',
    codeDbid:
'一般調整',
  },
  {
    codeData1:
'凍結に調整',
    codeDbid:
'凍結に調整',
  },
]);
const checkForMinusOpts = [
  {
    label:
'',
    value:
'',
  },
];
const locationDsApi = useApi({
  url: '/common/valuelist/locationValueList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    if (data.length > 0) {
      if (fromOrToFlag.value == true) {
        conditionFormData.fromLocation = data[0].locationNo;
        conditionFormData.fromLocationId = data[0].locationId;
        conditionFormData.fromBinTypeId = data[0].binType;
      } else {
        conditionFormData.toLocation = data[0].locationNo;
        conditionFormData.toLocationId = data[0].locationId;
        conditionFormData.toBinTypeId = data[0].binType;
      }
    } else if (fromOrToFlag.value == true) {
      conditionFormData.fromLocationId = '';
      conditionFormData.fromBinTypeId = '';
    } else {
      conditionFormData.toLocationId = '';
      conditionFormData.toBinTypeId = '';
    }
    LocationQtyDsApi.runAsync();
  },
  manual: true,
});
const locationDs = locationDsApi.data;
const locationInfoDsApi = useApi({
  url: '/parts/spm0307/getLocationInfo.json',
  method: 'post',
  data: () => {
    return conditionFormData;
  },
}, {
  onSuccess: (data, params) => {
    conditionFormData.currentStockQty = data.currentStockQty;
    conditionFormData.fromLocation = data.fromLocation;
    conditionFormData.fromLocationId = data.fromLocationId;
    conditionFormData.fromBinTypeId = data.fromBinTypeId;
  },
  manual: true,
});
const locationInfoDs = locationInfoDsApi.data;
const LocationQtyDsApi = useApi({
  url: '/parts/spm0307/getLocationQty.json',
  method: 'post',
  data: () => {
    return conditionFormData;
  },
}, {
  onSuccess: (data, params) => {
    conditionFormData.currentStockQty = data.currentStockQty;
    conditionFormData.averageCost = data.averageCost;
  },
  manual: true,
});
const LocationQtyDs = LocationQtyDsApi.data;
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
const confirmDsApi = useApi({
  url: '/parts/spm0307/partsStockAdjustmentConfirm.json',
  method: 'post',
  data: () => {
    return conditionFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    LocationQtyDsApi.runAsync();
    confirmFlag.value = true;
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
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
const AdjustmentTypeDsApi = useApi({
  url: '/common/helper/getAdjustmentTypeList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const AdjustmentTypeDs = AdjustmentTypeDsApi.data;
const stockAdjustmentReasonApi = useApi({
  url: '/common/helper/getStockAdjustmentReasonList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const stockAdjustmentReason = stockAdjustmentReasonApi.data;
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
  conditionForm.value.validate((valid) => {
    if (valid) {
      confirmDsApi.runAsync();
    }
  });
};
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    confirmFlag.value = false;
    resetCondition();
  }).catch(() => {
  });
};
const viy2ValueList_90dteySelect = (params) => {
  changeProduct();
  conditionFormData.partsId = params.id;
  conditionFormData.partsCd = params.code;
  conditionFormData.partsNm = params.name;
  conditionFormData.mainLocationId = params.mainLocationId;
  conditionFormData.averageCost = params.price;
  if (params.price > 0) {
    conditionFormData.partsCost = params.price;
    partsCostReadOnlyFlag.value = true;
  }
  locationInfoDsApi.runAsync();
};
const viy2ValueList_90dteyClear = () => {
  changeProduct();
  locationInfoDsApi.runAsync();
}
;
const viy2ValueList_90dteyLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    if (obj.currentValue) {
      onLeavePartsCode(obj.currentValue);
    } else {
      changeProduct();
      locationInfoDsApi.runAsync();
    }
  }
};
const viy2ValueList_90dteyPopoverColumns = computed(() => {
  return parts_column;
});
const viy2ValueList_90dteyPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), checkStrictly: true, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
  ];
});
const viy2Select_5ze3KyChange = (value, data) => {
  if (value == AdjustmentType.NORMALADJUSTMENT) {
    conditionFormData.checkForMinus = YES_NO_FLAG.NO;
    conditionFormData.adjustmentQuantity = '+';
    vShowHidden.value = true;
    forzenTypeFlag.value = false;
  }
  if (value == AdjustmentType.ADJUSTMENTTOFROZEN) {
    conditionFormData.checkForMinus = YES_NO_FLAG.YES;
    conditionFormData.adjustmentQuantity = '-';
    vShowHidden.value = false;
    forzenTypeFlag.value = true;
  }
};
const checkForMinusChange = (checkedList) => {
  if (conditionFormData.checkForMinus === YES_NO_FLAG.YES) {
    conditionFormData.adjustmentQuantity = '-';
    vShowHidden.value = false;
    forzenTypeFlag.value = true;// 基本设计测试用加的，开发要删掉
  } else if (conditionFormData.checkForMinus === YES_NO_FLAG.NO) {
    conditionFormData.adjustmentQuantity = '+';
    vShowHidden.value = true;
  }
};
const viy2InputBox_m4EiXOnSuffixIconClick = (event) => {
  conditionFormData.fromLocationId = '';
};
const viy2InputBox_m4EiXBlur = (event) => {
  if (!isNoValue(conditionFormData.fromLocation) && conditionFormData.checkForMinus === YES_NO_FLAG.YES) {
    if (isNoValue(conditionFormData.partsId)) {
      warn_msg(t('M.E.00117', [t('label.parts')]));
      return;
    }
    const pointid = conditionFormData.pointId;
    const locationCd = conditionFormData.fromLocation;
    const partsId = conditionFormData.partsId;
    const flag = conditionFormData.checkForMinus;
    const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL];
    locationDsApi.runAsync({
      arg0: flag,
      pointId: pointid,
      locationCd,
      locationTypeList,
      partsId,
    });
  } else {
    conditionFormData.fromLocationId = '';
    LocationQtyDsApi.runAsync();
  }
};
const viy2Button_m4NdUClick = (params) => {
  if (!isNoValue(conditionFormData.fromLocation) && conditionFormData.checkForMinus === YES_NO_FLAG.YES) {
    warn_msg(t('M.E.00117', [t('label.parts')]));
    return;
  }
  showLocationWin.value = true;
  fromOrToFlag.value = true;
  const point = getPointLabel(conditionFormData.pointId);
  const pointid = conditionFormData.pointId;
  const partsId = conditionFormData.partsId;
  const flag = conditionFormData.checkForMinus;
  const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL];
  asideParams.value = { flag, point, pointId: pointid, locationTypeList, partsId };
};
const viy2InputBox_3AhznAOnSuffixIconClick = (event) => {
  conditionFormData.toLocationId = '';
};
const viy2InputBox_3AhznABlur = (event) => {
  if (!isNoValue(conditionFormData.toLocation)) {
    const pointid = conditionFormData.pointId;
    const locationCd = conditionFormData.toLocation;
    const flag = YES_NO_FLAG.NO;
    const locationTypeList = [LocationType.FROZEN];
    locationDsApi.runAsync({
      arg0: flag,
      pointId: pointid,
      locationCd,
      locationTypeList,
    });
  } else {
    conditionFormData.toLocationId = '';
  }
};
const viy2Button_3AhzorClick = (params) => {
  showLocationWin.value = true;
  fromOrToFlag.value = false;
  const point = getPointLabel(conditionFormData.pointId);
  const pointid = conditionFormData.pointId;
  const flag = YES_NO_FLAG.NO;
  const locationTypeList = [LocationType.FROZEN];
  asideParams.value = { flag, point, pointId: pointid, locationTypeList };
};
onMounted(() => {
  conditionFormData.pointvl = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  conditionFormData.pointId = uc.defaultPointId;
});
const resetCondition = () => {
// 清空queryFormData中的其他值
  for (const key in conditionFormData) {
    conditionFormData[key] = ''; // 或者设置为初始值
  }
  conditionForm.value.resetFields();
  conditionFormData.pointvl = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  conditionFormData.pointId = uc.defaultPointId;
};
const getPointLabel = (pointId) => {
  const item = find(pointDs.value, { id: pointId });
  return item ? item.desc : null;
};
const changeProduct = () => {
  const numKeys = ['currentStockQty', 'adjustmentQty', 'averageCost', 'partsCost'];
  const skipKeys = ['pointvl', 'pointId', 'pointNm', 'pointCd', 'adjustmentQuantity', 'newPart'];
  for (const key in conditionFormData) {
    if (skipKeys.includes(key)) {
      continue;
    } else if (numKeys.includes(key)) {
      conditionFormData[key] = 0;
    } else {
      conditionFormData[key] = ''; // 或者设置为初始值
    }
  }
  partsCostReadOnlyFlag.value = false;
};
// location侧边栏选择后
const callbkSelectLocation = (param) => {
  if (fromOrToFlag.value == true) {
    conditionFormData.fromLocation = param.locationNo;
    conditionFormData.fromLocationId = param.locationId;
    conditionFormData.fromBinTypeId = param.binTypeId;
    LocationQtyDsApi.runAsync();
  } else {
    conditionFormData.toLocation = param.locationNo;
    conditionFormData.toLocationId = param.locationId;
    conditionFormData.toBinTypeId = param.binTypeId;
  }
  showLocationWin.value = false;
};
// location侧边栏选择关闭后
const closeLocationAside = () => {
  showLocationWin.value = false;
};
// 配件输入后Leave
const onLeavePartsCode = async (code) => {
  nowPartsCode.value = code;
  await getPartsData();
};
const getPartsData = async () => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData != null) {
    conditionFormData.newPart = partsData.desc;
    conditionFormData.partsId = partsData.id;
    conditionFormData.partsNm = partsData.name;
    conditionFormData.partsCd = partsData.code;
    conditionFormData.averageCost = partsData.price;
    if (partsData.price > 0) {
      conditionFormData.partsCost = partsData.price;
      partsCostReadOnlyFlag.value = true;
    }
    conditionFormData.mainLocationId = partsData.mainLocationId;
  } else {
    changeProduct();
  }
  locationInfoDsApi.runAsync();
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
      />
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="info" :disabled="confirmFlag" @click="confirmBtnClick">
          保存
        </VueButton>
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
          クリア
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="conditionForm"
      ref="conditionForm"
      label-width="145px"
      class="margin-top-div0 except-height-css"
      :model="conditionFormData"
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
            v-if="false"
            :label="t('label.point')"
            prop="pointId"
          >
            <VueSelect
              id="viy2Select_oStty"
              ref="viy2Select_oStty"
              v-model="conditionFormData.pointId"
              :style="{ width: '250px' }"
              :filterable="true"
              :options="pointDs"
              :props="{
                label: 'desc',
                value: 'id',
              }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="部品"
            prop="newPart"
            :rules="rules.viy2ValueList_90dteyRules"
          >
            <VueValueList
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              id="viy2ValueList_90dtey"
              :toggle-popover-on-click="conditionFormData.newPart.length > 3"
              ref="viy2ValueList_90dtey"
              select-field="desc"
              v-model="conditionFormData.newPart"
              :popover-min-query-length="3"
              :close-on-click-modal="true"
              :use-popup="true"
              :clearable="true"
              :disabled="confirmFlag"
              :popover-width="500"
              width="250px"
              :popover-columns="viy2ValueList_90dteyPopoverColumns"
              :popover-query-method="viy2ValueList_90dteyPopoverQueryMethod"
              :popup-columns="viy2ValueList_90dteyPopupColumns"
              :popup-conditions="viy2ValueList_90dteyPopupConditions"
              :popup-query-method="viy2ValueList_90dteyPopupQueryMethod"
              @select="viy2ValueList_90dteySelect"
              @clear="viy2ValueList_90dteyClear"
              @leave="viy2ValueList_90dteyLeave"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_9EyxON"
                  ref="viy2Row_9EyxON"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_9EyxOY" ref="viy2Text_9EyxOY" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="調整理由"
            prop="reason"
            :rules="rules.viy2Select_5zamoxRules"
          >
            <VueSelect
              id="viy2Select_5zamox"
              ref="viy2Select_5zamox"
              v-model="conditionFormData.reason"
              :style="{ width: '200px' }"
              :disabled="confirmFlag"
              :filterable="true"
              :clearable="true"
              :options="viy2Select_5zamoxOpts"
              :props="{
                label: 'codeData1',
                value: 'codeDbid',
              }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="調整タイプ"
            prop="adjustmentType"
            :rules="rules.viy2Select_5ze3KyRules"
          >
            <VueSelect
              id="viy2Select_5ze3Ky"
              ref="viy2Select_5ze3Ky"
              v-model="conditionFormData.adjustmentType"
              :style="{ width: '200px' }"
              :disabled="confirmFlag"
              :filterable="true"
              :clearable="true"
              :options="viy2Select_5ze3KyOpts"
              :props="{
                label: 'codeData1',
                value: 'codeDbid',
              }"
              @change="viy2Select_5ze3KyChange"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="マイナスを選択"
            prop="checkForMinus"
          >
            <VueCheckbox
              id="checkForMinus"
              ref="checkForMinus"
              v-model="conditionFormData.checkForMinus"
              :disabled="forzenTypeFlag || confirmFlag"
              true-label="Y"
              false-label="N"
              @change="checkForMinusChange"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="ロケーション"
            prop="fromLocation"
            :rules="rules.viy2InputBox_m4EiXRules"
          >
            <VueInput
              id="viy2InputBox_m4EiX"
              ref="viy2InputBox_m4EiX"
              v-model="conditionFormData.fromLocation"
              :disabled="confirmFlag"
              :on-suffix-icon-click="viy2InputBox_m4EiXOnSuffixIconClick"
              :style="{ width: '200px' }"
              @blur="viy2InputBox_m4EiXBlur"
            >
              <template #append>
                <VueButton id="viy2Button_m4NdU" ref="viy2Button_m4NdU" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_m4NdUClick" />
              </template>
            </VueInput>
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="在庫中"
            prop="currentStockQty"
          >
            <VueInputNumber
              id="viy2InputNumber_manYy"
              ref="viy2InputNumber_manYy"
              v-model="conditionFormData.currentStockQty"
              :use-separator="true"
              text-align="right"
              :controls="false"
              :disabled="true"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="調整数量"
            prop="adjustmentQuantity"
            :rules="rules.viy2InputBox_5DsVs8Rules"
          >
            <VueInput
              id="viy2InputBox_5DsVs8"
              ref="viy2InputBox_5DsVs8"
              v-model="conditionFormData.adjustmentQuantity"
              :clearable="false"
              :readonly="true"
              class="no-border"
              :style="{ width: '35px' }"
            />
          </VueFormItem>
          <VueFormItem
            label-width="2px"
            prop="adjustmentQty"
            :rules="rules.viy2InputNumber_5Cb6aORules"
          >
            <VueInputNumber
              id="viy2InputNumber_5Cb6aO"
              ref="viy2InputNumber_5Cb6aO"
              v-model="conditionFormData.adjustmentQty"
              :use-separator="true"
              :controls="false"
              text-align="right"
              :disabled="confirmFlag"
              :precision="0"
              :style="{ width: '130px' }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="平均原価"
            prop="averageCost"
          >
            <VueInputNumber
              id="viy2InputNumber_3A58xa"
              ref="viy2InputNumber_3A58xa"
              v-model="conditionFormData.averageCost"
              :use-separator="true"
              text-align="right"
              :controls="false"
              :disabled="true"
              :precision="2"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            v-show="vShowHidden"
            label="部品原価"
            prop="partsCost"
            :rules="rules.viy2InputNumber_5EiGcwRules"
          >
            <VueInputNumber
              id="viy2InputNumber_5EiGcw"
              ref="viy2InputNumber_5EiGcw"
              v-model="conditionFormData.partsCost"
              :readonly="partsCostReadOnlyFlag"
              :use-separator="true"
              :controls="false"
              text-align="right"
              :precision="2"
              :disabled="confirmFlag"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            v-show="forzenTypeFlag"
            label="移動先ロケーション"
            label-width="160px"
            prop="toLocation"
            :rules="rules.viy2InputBox_3AhznARules"
          >
            <VueInput
              id="viy2InputBox_3AhznA"
              ref="viy2InputBox_3AhznA"
              v-model="conditionFormData.toLocation"
              :disabled="confirmFlag"
              :on-suffix-icon-click="viy2InputBox_3AhznAOnSuffixIconClick"
              :style="{ width: '200px' }"
              @blur="viy2InputBox_3AhznABlur"
            >
              <template #append>
                <VueButton id="viy2Button_3Ahzor" ref="viy2Button_3Ahzor" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_3AhzorClick" />
              </template>
            </VueInput>
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
  </VueForm>
</template>
