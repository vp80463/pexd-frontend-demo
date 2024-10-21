<script setup>
import { IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { find } from 'lodash-es';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_PP4czPage from '/src/views/commons/select_location.vue';
import { LocationType, YES_NO_FLAG } from '@/constants/pj-constants.js';
import { warn_msg } from '@/pj-commonutils.js';
import {
  parts_column, parts_pop_column, parts_pop_query_method, parts_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const initializedFlag = ref(true);
const asideParams = ref();
const hiddenFlag = ref(false);
const fromOrToFlag = ref(true);
const confirmFlag = ref(false);
const uc = useUser().userInfo;
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const nowPartsCode = ref();
defineOptions({
  name: 'spm0312_01',
});
const form = ref();
const viy2Panel_yxZOa = ref();
const confirmBtn = ref();
const resetBtn = ref();
const queryForm = ref();
const viy2Row_2TS6Ai = ref();
const viy2Select_oOtAF = ref();
const viy2ValueList_11tMBx = ref();
const viy2ValueList_2TS6Az = ref();
const viy2Row_2TS6AB = ref();
const viy2InputNumber_t0G3Ul = ref();
const viy2InputBox_t0G3Um = ref();
const viy2Radio_t0G3W1 = ref();
const viy2InputBox_8YGkWW = ref();
const viy2Button_vNVUi = ref();
const viy2InputNumber_30PSWo = ref();
const viy2InputNumber_t0G3Zt = ref();
const viy2InputBox_3LnuUK = ref();
const viy2Button_vQ4P1 = ref();
const locationAside = ref();
const viy2Subpage_PP4cz = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', partsNo: '', newPart: '', frozenQty: 0, mainLocation: '', releaseType: '', fromLocation: '', fromLocationQty: 0, releaseQty: 0, toLocation: '',
});
const rules = reactive({
  viy2Select_oOtAFRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2ValueList_11tMBxRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2ValueList_2TS6AzRules: [
    {
      required: true,
      message: t('errors.required', [t('label.parts')]),
    },
  ],
  viy2Radio_t0G3W1Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.releaseType')]),
    },
  ],
  viy2InputBox_8YGkWWRules: [
    {
      required: true,
      message: t('errors.required', [t('label.fromLocation')]),
    },
  ],
  viy2InputNumber_t0G3ZtRules: [
    {
      required: true,
      message: t('errors.required', [t('label.releaseQty')]),
    },
  ],
  viy2InputBox_3LnuUKRules: [
    {
      required: true,
      message: t('errors.required', [t('label.toLocation')]),
      enabled: hiddenFlag,
    },
  ],
});
const showLocationWin = ref(false);
const viy2ValueList_2TS6AzPopoverQueryMethod = parts_query_method;
const viy2ValueList_2TS6AzPopupColumns = ref(parts_pop_column);
const viy2ValueList_2TS6AzPopupQueryMethod = parts_pop_query_method;
const viy2Radio_t0G3W1Opts = reactive([
  { value: 'ストレージ', label: 'ストレージ' },
  { value: '廃棄', label: '廃棄' },
]);
const confirmDsApi = useApi({
  url: '/parts/spm0312/partsForzenStockReleaseConfirm.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    LocationQtyDsApi.runAsync();
    confirmFlag.value = true;
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const LocationQtyDsApi = useApi({
  url: '/parts/spm0312/getLocationQty.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    queryFormData.frozenQty = data.frozenQty;
    queryFormData.fromLocationQty = data.fromLocationQty;
    queryFormData.mainLocation = data.mainLocation;
  },
  manual: true,
});
const LocationQtyDs = LocationQtyDsApi.data;
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
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const locationDsApi = useApi({
  url: '/common/valuelist/locationValueList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    if (data.length > 0) {
      if (fromOrToFlag.value == true) {
        queryFormData.fromLocation = data[0].locationNo;
        queryFormData.fromLocationId = data[0].locationId;
      } else {
        queryFormData.toLocation = data[0].locationNo;
        queryFormData.toLocationId = data[0].locationId;
        queryFormData.toBinTypeId = data[0].binType;
      }
    } else if (fromOrToFlag.value == true) {
      queryFormData.fromLocationId = '';
    } else {
      queryFormData.toLocationId = '';
      queryFormData.toBinTypeId = '';
    }
    LocationQtyDsApi.runAsync();
  },
  manual: true,
});
const locationDs = locationDsApi.data;
const confirmBtnClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      confirmDsApi.runAsync();
    }
  });
};
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2ValueList_2TS6AzSelect = (params) => {
  queryFormData.partsId = params.id;
  queryFormData.partsCd = params.code;
  queryFormData.partsNm = params.name;
  queryFormData.fromLocation = '';
  queryFormData.fromLocationId = '';
  queryFormData.fromLocationQty = 0;
  LocationQtyDsApi.runAsync();
};
const viy2ValueList_2TS6AzClear = () => {
  changeProduct();
};
const viy2ValueList_2TS6AzLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    if (obj.currentValue) {
      onLeavePartsCode(obj.currentValue);
    } else {
      queryFormData.partsId = '';
      queryFormData.partsCd = '';
      queryFormData.partsNm = '';
      queryFormData.fromLocation = '';
      queryFormData.fromLocationId = '';
      queryFormData.fromLocationQty = 0;
      LocationQtyDsApi.runAsync();
    }
  }
};
const viy2ValueList_2TS6AzPopoverColumns = computed(() => {
  return parts_column;
});
const viy2ValueList_2TS6AzPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
  ];
});
const viy2Radio_t0G3W1Change = (value) => {
// if(queryFormData.releaseType === 'Location Storage') {
// hiddenFlag.value = true;
// }
// if(queryFormData.releaseType === 'Scrapping') {
// hiddenFlag.value = false;
// }
  if (queryFormData.releaseType === 'ストレージ') {
    hiddenFlag.value = true;
  }
  if (queryFormData.releaseType === '廃棄') {
    hiddenFlag.value = false;
  }
};
const viy2InputBox_8YGkWWOnSuffixIconClick = (event) => {
  queryFormData.fromLocationId = '';
};
const viy2InputBox_8YGkWWBlur = (event) => {
  if (!isNoValue(queryFormData.fromLocation)) {
    if (isNoValue(queryFormData.partsId)) {
      warn_msg(t('M.E.00117', [t('label.parts')]));
      return;
    }
    fromOrToFlag.value = true;
    const pointid = queryFormData.pointId;
    const fromLocation = queryFormData.fromLocation;
    const flag = YES_NO_FLAG.YES;
    const partsId = queryFormData.partsId;
    const locationTypeList = [LocationType.FROZEN];
    locationDsApi.runAsync({
      arg0: flag,
      pointId: pointid,
      locationCd: fromLocation,
      locationTypeList,
      partsId,
    });
  } else {
    queryFormData.fromLocationId = '';
    queryFormData.fromLocationQty = 0;
  }
};
const viy2Button_vNVUiClick = (params) => {
  if (isNoValue(queryFormData.partsId)) {
    warn_msg(t('M.E.00117', [t('label.parts')]));
    return;
  }
  showLocationWin.value = true;
  fromOrToFlag.value = true;
  const point = getPointLabel(queryFormData.pointId);
  const pointid = queryFormData.pointId;
  const flag = YES_NO_FLAG.YES;
  const partsId = queryFormData.partsId;
  const locationTypeList = [LocationType.FROZEN];
  asideParams.value = { flag, point, pointId: pointid, locationTypeList, partsId };
};
const viy2InputBox_3LnuUKOnSuffixIconClick = (event) => {
  queryFormData.toLocationId = '';
};
const viy2InputBox_3LnuUKBlur = (event) => {
  if (!isNoValue(queryFormData.toLocation)) {
    fromOrToFlag.value = false;
    const pointid = queryFormData.pointId;
    const toLocation = queryFormData.toLocation;
    const flag = YES_NO_FLAG.NO;
    const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL];
    locationDsApi.runAsync({
      arg0: flag,
      pointId: pointid,
      locationCd: toLocation,
      locationTypeList,
    });
  }
};
const viy2Button_vQ4P1Click = (params) => {
  showLocationWin.value = true;
  fromOrToFlag.value = false;
  const point = getPointLabel(queryFormData.pointId);
  const pointid = queryFormData.pointId;
  const flag = YES_NO_FLAG.NO;
  const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL];
  asideParams.value = { flag, point, pointId: pointid, locationTypeList };
};
onMounted(() => {
  queryFormData.pointvl = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.pointId = uc.defaultPointId;
});
const getPointLabel = (pointId) => {
  const item = find(pointDs.value, { id: pointId });
  return item ? item.desc : null;
};
const resetCondition = () => {
// 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = '';
  }
  queryForm.value.resetFields();
  confirmFlag.value = false;
  hiddenFlag.value = false;
  queryFormData.pointvl = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.pointId = uc.defaultPointId;
};
const changeProduct = () => {
  const numKeys = ['frozenQty', 'fromLocationQty', 'releaseQty'];
  const skipKeys = ['pointvl', 'pointId', 'pointNm', 'pointCd'];
  for (const key in queryFormData) {
    if (skipKeys.includes(key)) {
      continue;
    } else if (numKeys.includes(key)) {
      queryFormData[key] = 0;
    } else {
      queryFormData[key] = ''; // 或者设置为初始值
    }
  }
};
// location侧边栏选择后
const callbkSelectLocation = (param) => {
  if (fromOrToFlag.value == true) {
    queryFormData.fromLocation = param.locationNo;
    queryFormData.fromLocationId = param.locationId;
    LocationQtyDsApi.runAsync();
  } else {
    queryFormData.toLocation = param.locationNo;
    queryFormData.toLocationId = param.locationId;
    queryFormData.toBinTypeId = param.binTypeId;
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
    queryFormData.newPart = partsData.desc;
    queryFormData.partsId = partsData.id;
    queryFormData.partsCd = partsData.code;
    queryFormData.partsNm = partsData.name;
    queryFormData.fromLocation = '';
    queryFormData.fromLocationId = '';
    queryFormData.fromLocationQty = 0;
  } else {
    queryFormData.partsId = '';
    queryFormData.partsCd = '';
    queryFormData.partsNm = '';
    queryFormData.fromLocation = '';
    queryFormData.fromLocationId = '';
    queryFormData.fromLocationQty = 0;
  }
  LocationQtyDsApi.runAsync();
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VuePanel id="viy2Panel_yxZOa" ref="viy2Panel_yxZOa" title="凍結在庫解消">
      <template #header>
        <div style="width: auto">
          <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="info" :disabled="confirmFlag" @click="confirmBtnClick">
            保存
          </VueButton>
          <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
            クリア
          </VueButton>
        </div>
      </template>
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="145px"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_2TS6Ai"
          ref="viy2Row_2TS6Ai"
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
              :rules="rules.viy2Select_oOtAFRules"
            >
              <VueSelect
                id="viy2Select_oOtAF"
                ref="viy2Select_oOtAF"
                v-model="queryFormData.pointId"
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
              prop="partsNo"
              :rules="rules.viy2ValueList_11tMBxRules"
            >
              <VueValueList
                id="viy2ValueList_11tMBx"
                ref="viy2ValueList_11tMBx"
                v-model="queryFormData.partsNo"
                :use-popover="true"
                :use-popup="true"
                width="200px"
              />
            </VueFormItem>
            <VueFormItem
              v-if="false"
              :label="t('label.parts')"
              label-width="150px"
              prop="newPart"
              :rules="rules.viy2ValueList_2TS6AzRules"
            >
              <VueValueList
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                id="viy2ValueList_2TS6Az"
                :toggle-popover-on-click="queryFormData.newPart.length > 3"
                ref="viy2ValueList_2TS6Az"
                select-field="desc"
                v-model="queryFormData.newPart"
                :popover-min-query-length="3"
                :close-on-click-modal="true"
                :use-popup="true"
                :clearable="true"
                :disabled="confirmFlag"
                :popover-width="500"
                width="250px"
                :popover-columns="viy2ValueList_2TS6AzPopoverColumns"
                :popover-query-method="viy2ValueList_2TS6AzPopoverQueryMethod"
                :popup-columns="viy2ValueList_2TS6AzPopupColumns"
                :popup-conditions="viy2ValueList_2TS6AzPopupConditions"
                :popup-query-method="viy2ValueList_2TS6AzPopupQueryMethod"
                @select="viy2ValueList_2TS6AzSelect"
                @clear="viy2ValueList_2TS6AzClear"
                @leave="viy2ValueList_2TS6AzLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_2TS6AB"
                    ref="viy2Row_2TS6AB"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_t0G3Ui" ref="viy2Text_t0G3Ui" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="凍結数量"
              label-width="150px"
              prop="frozenQty"
            >
              <VueInputNumber
                id="viy2InputNumber_t0G3Ul"
                ref="viy2InputNumber_t0G3Ul"
                v-model="queryFormData.frozenQty"
                text-align="right"
                :use-separator="true"
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
              label="メインロケーション"
              label-width="150px"
              prop="mainLocation"
            >
              <VueInput
                id="viy2InputBox_t0G3Um"
                ref="viy2InputBox_t0G3Um"
                v-model="queryFormData.mainLocation"
                type="text"
                :readonly="true"
                class="no-border"
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
              label="解消タイプ"
              label-width="150px"
              prop="releaseType"
              :rules="rules.viy2Radio_t0G3W1Rules"
              :show-message="true"
            >
              <VueRadioGroup
                id="viy2Radio_t0G3W1"
                ref="viy2Radio_t0G3W1"
                v-model="queryFormData.releaseType"
                radio-style="button"
                direction="horizontal"
                :disabled="confirmFlag"
                split-size="default"
                @change="viy2Radio_t0G3W1Change"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_t0G3W1Opts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="元ロケーション"
              label-width="150px"
              prop="fromLocation"
              :rules="rules.viy2InputBox_8YGkWWRules"
            >
              <VueInput
                id="viy2InputBox_8YGkWW"
                ref="viy2InputBox_8YGkWW"
                v-model="queryFormData.fromLocation"
                type="text"
                :disabled="confirmFlag"
                class="no-border"
                :on-suffix-icon-click="viy2InputBox_8YGkWWOnSuffixIconClick"
                :style="{ width: '200px' }"
                @blur="viy2InputBox_8YGkWWBlur"
              >
                <template #append>
                  <VueButton id="viy2Button_vNVUi" ref="viy2Button_vNVUi" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_vNVUiClick" />
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
              label="元ロケーション数量"
              label-width="150px"
              prop="fromLocationQty"
            >
              <VueInputNumber
                id="viy2InputNumber_30PSWo"
                ref="viy2InputNumber_30PSWo"
                v-model="queryFormData.fromLocationQty"
                text-align="right"
                :use-separator="true"
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
              label="解消数量"
              label-width="150px"
              prop="releaseQty"
              :rules="rules.viy2InputNumber_t0G3ZtRules"
            >
              <VueInputNumber
                id="viy2InputNumber_t0G3Zt"
                ref="viy2InputNumber_t0G3Zt"
                v-model="queryFormData.releaseQty"
                :use-separator="true"
                :controls="false"
                text-align="right"
                :disabled="confirmFlag"
                :precision="0"
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
              v-show="hiddenFlag"
              label="移動先ロケーション"
              label-width="160px"
              prop="toLocation"
              :rules="rules.viy2InputBox_3LnuUKRules"
            >
              <VueInput
                id="viy2InputBox_3LnuUK"
                ref="viy2InputBox_3LnuUK"
                v-model="queryFormData.toLocation"
                type="text"
                :disabled="confirmFlag"
                class="no-border"
                :on-suffix-icon-click="viy2InputBox_3LnuUKOnSuffixIconClick"
                :style="{ width: '200px' }"
                @blur="viy2InputBox_3LnuUKBlur"
              >
                <template #append>
                  <VueButton id="viy2Button_vQ4P1" ref="viy2Button_vQ4P1" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_vQ4P1Click" />
                </template>
              </VueInput>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VueAside
      id="locationAside"
      ref="locationAside"
      v-model="showLocationWin"
      :modal="true"
      direction="rtl"
      size="60%"
      :with-header="false"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
    >
      <viy2Subpage_PP4czPage
        id="viy2Subpage_PP4cz"
        ref="viy2Subpage_PP4cz"
        :init-data="asideParams"
        @select="callbkSelectLocation"
        @close="closeLocationAside"
      />
    </VueAside>
  </VueForm>
</template>
