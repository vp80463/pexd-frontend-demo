<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useParams, useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import viy2Subpage_51yw0qPage from '/src/views/commons/select_location.vue';
import { formatCodeInput, formatPartNo } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const asideParams = ref();
const partsCostHidden = false;
const uc = useUser().userInfo;
const siteId = uc.siteId;
const route = useParams();
const dataType = route.dataType;
const query = route;
const lastDay = dayjs().format('YYYYMMDD');
const confirmFlag = ref(false);
const confirmFinishFlag = ref(false);
const resetFlag = ref(false);
defineOptions({
  name: 'cmm0501_02',
});
const form = ref();
const queryForm = ref();
const viy2Panel_wL3n9 = ref();
const viy2Row_tsyUF = ref();
const viy2InputBox_4KzXE1 = ref();
const viy2InputBox_4KzXFK = ref();
const viy2InputNumber_LvND1P = ref();
const viy2InputNumber_LvND9W = ref();
const viy2InputBox_4O249m = ref();
const viy2Radio_4QcYRC = ref();
const viy2Radio_4QcVK4 = ref();
const viy2InputBox_4KzXEy = ref();
const viy2InputBox_LvNCN9 = ref();
const viy2InputNumber_LvND54 = ref();
const viy2InputBox_4KCkms = ref();
const viy2InputBox_4O21LW = ref();
const viy2InputBox_6C1qCm = ref();
const viy2InputBox_4QxWoK = ref();
const viy2InputBox_4Qs0Y6 = ref();
const viy2InputBox_4POCnW = ref();
const viy2InputNumber_LvND8g = ref();
const viy2InputBox_LvNCQq = ref();
const viy2InputBox_4QRmbA = ref();
const viy2InputBox_4PODn4 = ref();
const viy2InputBox_4POyyQ = ref();
const viy2Radio_u0hqr = ref();
const viy2InputBox_4QFgiQ = ref();
const viy2InputNumber_LvND0c = ref();
const viy2InputBox_LvNCVg = ref();
const viy2InputBox_4QSDHg = ref();
const viy2DateTimePicker_4KzXFf = ref();
const viy2InputBox_4POxUm = ref();
const viy2Panel_oqx1Vg = ref();
const viy2Row_uaIzS = ref();
const viy2InputNumber_4KV30i = ref();
const viy2InputNumber_8qR92I = ref();
const viy2InputBox_4MtmLO = ref();
const viy2DateTimePicker_4PG4H8 = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_u6FkG = ref();
const viy2InputBox_4RD8bi = ref();
const viy2InputBox_4RDySW = ref();
const viy2Radio_4RHgTy = ref();
const viy2InputBox_4RDaE2 = ref();
const locationAside = ref();
const viy2Subpage_51yw0q = ref();
const formData = reactive({
});
const queryFormData = reactive({
  partsCd: '', supersedingParts: '', width: 0, volumn: 0, makerCd: '', intgPriceFlag: 'しない', openPriceFlag: 'しない', partsNm: '', supersedingPartsNm: '', height: 0, largeGroupCd: '', makerProductCd: '', extraPriceCd: '', mdl5Cd: '', qi_id: '', lastPart: '', weight: 0, middleGroupCd: '', brand1: '', salesPriRate: '', warnMessage: '', chainFlag: 'する', lastPartNm: '', length: 0, samllGroupCd: '', brand2: '', registrationDate: '', dangerGood: '', minSaleSize: 0, stdRetailPrice: 0, supplyManageType: '', stdPriceUpdateDate: '', ROP: '', ROQ: '', chainFlag: 'する', CU: '',
});
const rules = reactive({
  viy2InputNumber_LvND1PRules: [
    {
      type: 'number',
      validator: validator.numberValue,
      minValue: 0,
      message: t('error.invalid.compareNum', [t('label.width_mm')], '0'),
    },
  ],
  viy2InputNumber_LvND54Rules: [
    {
      type: 'number',
      validator: validator.numberValue,
      minValue: 0,
      message: t('error.invalid.compareNum', [t('label.height_mm')], '0'),
    },
  ],
  viy2InputNumber_LvND8gRules: [
    {
      validator: validator.numberValue,
      minValue: 0,
      message: t('error.invalid.compareNum', [t('label.weight')], '0'),
    },
  ],
  viy2InputNumber_LvND0cRules: [
    {
      validator: validator.numberValue,
      minValue: 0,
      message: t('error.invalid.compareNum', [t('label.length_mm')], 0),
    },
  ],
  viy2DateTimePicker_4KzXFfRules: [
    {
      required: true,
      message: t('errors.required', [t('label.registrationDate')]),
    },
  ],
  viy2InputNumber_4KV30iRules: [
    {
      validator: validator.numberValue,
      minValue: 0,
      message: t('error.invalid.compareNum', [t('label.STDRetailPrice')], '0'),
    },
  ],
  viy2InputNumber_8qR92IRules: [
    {
      validator: validator.numberValue,
      minValue: 0,
      message: t('error.invalid.compareNum', [t('label.STDRetailPrice')], '0'),
    },
  ],
});
const showLocationWin = ref(false);
const viy2InputBox_4KzXE1formatter = (value) => {
  if (route.dataType === 'edit' || confirmFinishFlag.value === true) {
    return formatPartNo(value);
  } else {
    return formatCodeInput(value);
  }
};
const viy2Radio_4QcYRCOpts = reactive([
  { value: 'する', label: 'する' },
  { value: 'しない', label: 'しない' },
]);
const viy2Radio_4QcVK4Opts = reactive([
  { value: 'する', label: 'する' },
  { value: 'しない', label: 'しない' },
]);
const viy2Radio_u0hqrOpts = reactive([
  { value: 'する', label: 'する' },
  { value: 'しない', label: 'しない' },
]);
const viy2Radio_4RHgTyOpts = reactive([
  { value: 'する', label: 'する' },
  { value: 'しない', label: 'しない' },
]);
const unavailableDsApi = useApi({
  url: '/common/helper/getUnavailable.json',
  method: 'post',
}, {
  manual: true,
});
const unavailableDs = unavailableDsApi.data;
const confirmDsApi = useApi({
  url: '/master/cmm0501/confirmPartsInformationMaintenance.json',
  method: 'post',
  data: () => {
    queryFormData.dataType = route.dataType;
    const gridDataList = grid.value.getTableData().fullData;
    controlFormData.gridDataList = gridDataList;
    confirmFinishFlag.value = true;
    if (gridDataList.length != 0) {
      queryFormData.purchaseControlList = grid.value.getTableData().tableData;
    }
    return { ...queryFormData, ...salesControlFormData, ...controlFormData };
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    if (route.dataType === 'add') {
      confirmFlag.value = true;
      resetFlag.value = true;
    }
    basicInfoGridApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandForDifferentFlagList.json',
  method: 'post',
  data: {
    arg0: '1',
  },
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const basicInfoGridApi = useApi({
  url: '/master/cmm0501/getBasicInfoList.json',
  method: 'post',
  data: () => {
    queryFormData.dataType = route.dataType;
    if (route.dataType === 'edit') {
      queryFormData.partsId = route.partsId;
    }
    return { ...queryFormData, ...salesControlFormData, ...controlFormData };
  },
}, {
  onSuccess: (data, params) => {
    basicInfoGrid.value.purchaseControlList = data.purchaseControlList;
    if (dataType === 'edit') {
      const basicInfo = data.basicInfo;
      const salesControl = data.salesControl;
      queryFormData.salesNm = basicInfo.salesNm;
      queryFormData.localNm = basicInfo.localNm;
      queryFormData.partsNm = basicInfo.partsNm;
      queryFormData.middleGroup = parseInt(basicInfo.middleGroupId, 10);
      queryFormData.supersedingParts = basicInfo.supersedingParts;
      queryFormData.supersedingPartsId = basicInfo.supersedingPartsId;
      queryFormData.supersedingPartsNm = basicInfo.supersedingPartsNm;
      queryFormData.weight = basicInfo.weight;
      queryFormData.length = basicInfo.length;
      queryFormData.width = basicInfo.width;
      queryFormData.height = basicInfo.height;
      queryFormData.volumn = basicInfo.height * basicInfo.width * basicInfo.length / 1000;
      salesControlFormData.stdRetailPrice = salesControl.stdRetailPrice;
      salesControlFormData.update1 = salesControl.update1;
      salesControlFormData.averageCost = salesControl.averageCost;
      salesControlFormData.update2 = salesControl.update2;
      salesControlFormData.lastCost = (salesControl && salesControl.lastCost !== null) ? salesControl.lastCost : 0;
      salesControlFormData.update3 = salesControl.update3;
      salesControlFormData.salesLot = salesControl.salesLot;
      salesControlFormData.minSalesQty = salesControl.qty;
      salesControlFormData.unavailable = salesControl.unavailable;
      controlFormData.brand = salesControl.brandCd;
      controlFormData.purchaseLot = salesControl.purchaseLot;
      controlFormData.purchaseQty = salesControl.purchaseQty;
      controlFormData.stdPurchasePrice = salesControl.stdPurchasePrice;
    }
  },
  manual: true,
});
const basicInfoGrid = basicInfoGridApi.data;
const middleGroupDsApi = useApi({
  url: '/common/helper/getMiddleGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const middleGroupDs = middleGroupDsApi.data;
const viy2InputNumber_LvND1PChange = (event) => {
  if (!queryFormData.width) {
    queryFormData.width = 0;
  }
  calculateVolume();
};
const viy2InputNumber_LvND54Change = (event) => {
  if (!queryFormData.height) {
    queryFormData.height = 0;
  }
  calculateVolume();
};
const viy2InputNumber_LvND8gChange = (event) => {
  if (!queryFormData.weight) {
    queryFormData.weight = 0;
  }
};
const viy2InputNumber_LvND0cChange = (value) => {
  if (!queryFormData.length) {
    queryFormData.length = 0;
  }
  calculateVolume();
};
const viy2InputNumber_4KV30iChange = (event) => {
  if (!salesControlForm.stdRetailPrice) {
    salesControlForm.stdRetailPrice = 0;
  }
};
const viy2InputNumber_8qR92IChange = (event) => {
  if (!salesControlForm.stdRetailPrice) {
    salesControlForm.stdRetailPrice = 0;
  }
};
onMounted(() => {
  queryFormData.registrationDate = lastDay;
  queryFormData.confirmFinishFlag = confirmFinishFlag.value;
  const params = route;
  if (params && params.dataType) {
    if (params.dataType === 'edit') {
      queryFormData.registrationDate = params.registrationDate;
      controlFormData.brand = params.brandCd;
      queryFormData.partsId = params.partsId;
      queryFormData.middleGroup = parseInt(params.middleGroupId, 10);
      queryFormData.siteId = params.siteId;
      queryFormData.partsCd = params.partsNo;
      queryFormData.stdRetailPrice = params.stdRetailPrice;
      queryFormData.stdRetailPrice = params.stdRetailPrice;
      queryFormData.stdPurchasePrice = params.stdPurchasePrice;
    }
  }
  basicInfoGridApi.runAsync();
});
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  salesControlForm.value.resetFields();
  controlForm.value.resetFields();
  queryFormData.registrationDate = lastDay;
  basicInfoGridApi.runAsync();
  confirmFlag.value = false;
  const params = route;
  if (params.dataType === 'edit') {
    queryFormData.registrationDate = params.registrationDate;
    queryFormData.middleGroup = parseInt(params.middleGroupId, 10);
    controlFormData.brand = params.brandCd;
    queryFormData.partsId = params.partsId;
    queryFormData.siteId = params.siteId;
    queryFormData.partsCd = params.partsNo;
    queryFormData.stdRetailPrice = params.stdRetailPrice;
    queryFormData.stdRetailPrice = params.stdRetailPrice;
    queryFormData.stdPurchasePrice = params.stdPurchasePrice;
  }
  basicInfoGridApi.runAsync();
};
const iconSearchClick = (selectedRow) => {
  showLocationWin.value = true;
  const point = `${selectedRow.pointCd} ${selectedRow.pointNm}`;
  const pointid = selectedRow.pointId;
  const flag = 'N';
  const locationTypeList = [];
  locationTypeList[0] = 'S006TENTATIVE';
  locationTypeList[1] = 'S006NORMAL';
  asideParams.value = {
    flag,
    point,
    pointId: pointid,
    locationTypeList,
  };
};
const callbkSelectLocation = (param) => {
  const row = grid.value.getCurrentRecord();
  row.mainLocation = param.locationNo;
  row.locationId = param.locationId;
  showLocationWin.value = false;
};
const closeLocationAside = () => {
  showLocationWin.value = false;
};
const getLocationValue = (row) => {
  if (row.mainLocation === '' || row.mainLocation === null
|| row.mainLocation === undefined) {
    row.mainLocationId = '';
  }
};
const formatBlur = (value) => {
  return formatPartNo(value);
};
const calculateVolume = () => {
  if (queryFormData.length >= 0 && queryFormData.width >= 0 && queryFormData.height >= 0) {
    queryFormData.volumn = queryFormData.length * queryFormData.width * queryFormData.height / 1000;
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueForm
      id="queryForm"
      ref="queryForm"
      :model="queryFormData"
    >
      <VuePanel id="viy2Panel_wL3n9" ref="viy2Panel_wL3n9" title="基本情報" :collapse="true">
        <VueRow
          id="viy2Row_tsyUF"
          ref="viy2Row_tsyUF"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="部品番号"
              label-width="160px"
              prop="partsCd"
            >
              <VueInput
                id="viy2InputBox_4KzXE1"
                ref="viy2InputBox_4KzXE1"
                v-model="queryFormData.partsCd"
                :disabled="true"
                :formatter="viy2InputBox_4KzXE1formatter"
              />
            </VueFormItem>
            <VueFormItem
              label="正代替部品番号"
              label-width="160px"
              prop="supersedingParts"
            >
              <VueInput
                id="viy2InputBox_4KzXFK"
                ref="viy2InputBox_4KzXFK"
                v-model="queryFormData.supersedingParts"
                :formatter="formatBlur"
                :parser="formatBlur"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="幅(mm)"
              label-width="160px"
              prop="width"
              :rules="rules.viy2InputNumber_LvND1PRules"
            >
              <VueInputNumber
                id="viy2InputNumber_LvND1P"
                ref="viy2InputNumber_LvND1P"
                v-model="queryFormData.width"
                :controls="false"
                text-align="right"
                :disabled="true"
                :precision="0"
                :use-separator="true"
                :min="0"
                @change="viy2InputNumber_LvND1PChange"
              />
            </VueFormItem>
            <VueFormItem
              label="容積(cm³)"
              label-width="160px"
              prop="volumn"
            >
              <VueInputNumber
                id="viy2InputNumber_LvND9W"
                ref="viy2InputNumber_LvND9W"
                v-model="queryFormData.volumn"
                :controls="false"
                text-align="right"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="メーカーコード"
              label-width="160px"
              prop="makerCd"
            >
              <VueInput
                id="viy2InputBox_4O249m"
                ref="viy2InputBox_4O249m"
                v-model="queryFormData.makerCd"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="価格統一"
              label-width="160px"
              prop="intgPriceFlag"
            >
              <VueRadioGroup
                id="viy2Radio_4QcYRC"
                ref="viy2Radio_4QcYRC"
                v-model="queryFormData.intgPriceFlag"
                radio-style="button"
                direction="horizontal"
                :disabled="true"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_4QcYRCOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
            <VueFormItem
              label="オープン価格"
              label-width="160px"
              prop="openPriceFlag"
            >
              <VueRadioGroup
                id="viy2Radio_4QcVK4"
                ref="viy2Radio_4QcVK4"
                v-model="queryFormData.openPriceFlag"
                radio-style="button"
                direction="horizontal"
                :disabled="true"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_4QcVK4Opts"
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
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="部品名称"
              label-width="160px"
              prop="partsNm"
            >
              <VueInput
                id="viy2InputBox_4KzXEy"
                ref="viy2InputBox_4KzXEy"
                v-model="queryFormData.partsNm"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="正代替部品名称"
              label-width="160px"
              prop="supersedingPartsNm"
            >
              <VueInput
                id="viy2InputBox_LvNCN9"
                ref="viy2InputBox_LvNCN9"
                v-model="queryFormData.supersedingPartsNm"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="高さ(mm)"
              label-width="160px"
              prop="height"
              :rules="rules.viy2InputNumber_LvND54Rules"
            >
              <VueInputNumber
                id="viy2InputNumber_LvND54"
                ref="viy2InputNumber_LvND54"
                v-model="queryFormData.height"
                :controls="false"
                text-align="right"
                :disabled="true"
                :precision="0"
                :use-separator="true"
                :min="0"
                @change="viy2InputNumber_LvND54Change"
              />
            </VueFormItem>
            <VueFormItem
              label="大区分"
              label-width="160px"
              prop="largeGroupCd"
            >
              <VueInput
                id="viy2InputBox_4KCkms"
                ref="viy2InputBox_4KCkms"
                v-model="queryFormData.largeGroupCd"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="メーカー部品コード"
              label-width="160px"
              prop="makerProductCd"
            >
              <VueInput
                id="viy2InputBox_4O21LW"
                ref="viy2InputBox_4O21LW"
                v-model="queryFormData.makerProductCd"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="特掛仕切コード"
              label-width="160px"
              prop="extraPriceCd"
            >
              <VueInput
                id="viy2InputBox_6C1qCm"
                ref="viy2InputBox_6C1qCm"
                v-model="queryFormData.extraPriceCd"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="中５コード"
              label-width="160px"
              prop="mdl5Cd"
            >
              <VueInput
                id="viy2InputBox_4QxWoK"
                ref="viy2InputBox_4QxWoK"
                v-model="queryFormData.mdl5Cd"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="ＱＩ品番区分"
              label-width="160px"
              prop="qi_id"
            >
              <VueInput
                id="viy2InputBox_4Qs0Y6"
                ref="viy2InputBox_4Qs0Y6"
                v-model="queryFormData.qi_id"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="最終商品コード"
              label-width="160px"
              prop="lastPart"
            >
              <VueInput
                id="viy2InputBox_4POCnW"
                ref="viy2InputBox_4POCnW"
                v-model="queryFormData.lastPart"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="重量"
              label-width="160px"
              prop="weight"
              :rules="rules.viy2InputNumber_LvND8gRules"
            >
              <VueInputNumber
                id="viy2InputNumber_LvND8g"
                ref="viy2InputNumber_LvND8g"
                v-model="queryFormData.weight"
                :controls="false"
                text-align="right"
                :disabled="true"
                :precision="0"
                :use-separator="true"
                :min="0"
                @change="viy2InputNumber_LvND8gChange"
              />
            </VueFormItem>
            <VueFormItem
              label="中区分"
              label-width="160px"
              prop="middleGroupCd"
            >
              <VueInput
                id="viy2InputBox_LvNCQq"
                ref="viy2InputBox_LvNCQq"
                v-model="queryFormData.middleGroupCd"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="ブランド1"
              label-width="160px"
              prop="brand1"
            >
              <VueInput
                id="viy2InputBox_4QRmbA"
                ref="viy2InputBox_4QRmbA"
                v-model="queryFormData.brand1"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="販売店仕切率"
              label-width="160px"
              prop="salesPriRate"
            >
              <VueInput
                id="viy2InputBox_4PODn4"
                ref="viy2InputBox_4PODn4"
                v-model="queryFormData.salesPriRate"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="受注警告区分"
              label-width="160px"
              prop="warnMessage"
            >
              <VueInput
                id="viy2InputBox_4POyyQ"
                ref="viy2InputBox_4POyyQ"
                v-model="queryFormData.warnMessage"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="チェーニング落ち"
              label-width="160px"
              prop="chainFlag"
            >
              <VueRadioGroup
                id="viy2Radio_u0hqr"
                ref="viy2Radio_u0hqr"
                v-model="queryFormData.chainFlag"
                radio-style="button"
                direction="horizontal"
                :disabled="true"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_u0hqrOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
            <VueFormItem
              label="最終商品名称"
              label-width="160px"
              prop="lastPartNm"
            >
              <VueInput
                id="viy2InputBox_4QFgiQ"
                ref="viy2InputBox_4QFgiQ"
                v-model="queryFormData.lastPartNm"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="長さ(mm)"
              label-width="160px"
              prop="length"
              :rules="rules.viy2InputNumber_LvND0cRules"
            >
              <VueInputNumber
                id="viy2InputNumber_LvND0c"
                ref="viy2InputNumber_LvND0c"
                v-model="queryFormData.length"
                :controls="false"
                text-align="right"
                :disabled="true"
                :precision="0"
                :min="0"
                :use-separator="true"
                @change="viy2InputNumber_LvND0cChange"
              />
            </VueFormItem>
            <VueFormItem
              label="小区分"
              label-width="160px"
              prop="samllGroupCd"
            >
              <VueInput
                id="viy2InputBox_LvNCVg"
                ref="viy2InputBox_LvNCVg"
                v-model="queryFormData.samllGroupCd"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="ブランド2"
              label-width="160px"
              prop="brand2"
            >
              <VueInput
                id="viy2InputBox_4QSDHg"
                ref="viy2InputBox_4QSDHg"
                v-model="queryFormData.brand2"
                :disabled="true"
              />
            </VueFormItem>
            <VueFormItem
              label="登録日"
              label-width="160px"
              prop="registrationDate"
              :rules="rules.viy2DateTimePicker_4KzXFfRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_4KzXFf"
                ref="viy2DateTimePicker_4KzXFf"
                v-model="queryFormData.registrationDate"
                type="date"
                :disabled="true"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueFormItem
              label="劇毒物区分"
              label-width="160px"
              prop="dangerGood"
            >
              <VueInput
                id="viy2InputBox_4POxUm"
                ref="viy2InputBox_4POxUm"
                v-model="queryFormData.dangerGood"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
      <VuePanel id="viy2Panel_oqx1Vg" ref="viy2Panel_oqx1Vg" :collapse="true" title="受注" class="except-height-css">
        <VueRow
          id="viy2Row_uaIzS"
          ref="viy2Row_uaIzS"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="最小販売単位 "
              label-width="160px"
              prop="minSaleSize"
              :rules="rules.viy2InputNumber_4KV30iRules"
            >
              <VueInputNumber
                id="viy2InputNumber_4KV30i"
                ref="viy2InputNumber_4KV30i"
                v-model="queryFormData.minSaleSize"
                :controls="false"
                text-align="right"
                :disabled="true"
                :min="0"
                :precision="0"
                :use-separator="true"
                @change="viy2InputNumber_4KV30iChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="標準小売単価"
              label-width="160px"
              prop="stdRetailPrice"
              :rules="rules.viy2InputNumber_8qR92IRules"
            >
              <VueInputNumber
                id="viy2InputNumber_8qR92I"
                ref="viy2InputNumber_8qR92I"
                v-model="queryFormData.stdRetailPrice"
                :controls="false"
                text-align="right"
                :disabled="true"
                :min="0"
                :precision="0"
                :use-separator="true"
                @change="viy2InputNumber_8qR92IChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="供給管理区分"
              label-width="160px"
              prop="supplyManageType"
            >
              <VueInput
                id="viy2InputBox_4MtmLO"
                ref="viy2InputBox_4MtmLO"
                v-model="queryFormData.supplyManageType"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="単価適用開始日"
              label-width="160px"
              prop="stdPriceUpdateDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_4PG4H8"
                ref="viy2DateTimePicker_4PG4H8"
                v-model="queryFormData.stdPriceUpdateDate"
                type="date"
                :disabled="true"
                :readonly="true"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
      <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="発注" :collapse="true">
        <VueRow
          id="viy2Row_u6FkG"
          ref="viy2Row_u6FkG"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="発注点"
              label-width="160px"
              prop="ROP"
            >
              <VueInput
                id="viy2InputBox_4RD8bi"
                ref="viy2InputBox_4RD8bi"
                v-model="queryFormData.ROP"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="発注量"
              label-width="160px"
              prop="ROQ"
            >
              <VueInput
                id="viy2InputBox_4RDySW"
                ref="viy2InputBox_4RDySW"
                v-model="queryFormData.ROQ"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="点量対象"
              label-width="160px"
              prop="chainFlag"
            >
              <VueRadioGroup
                id="viy2Radio_4RHgTy"
                ref="viy2Radio_4RHgTy"
                v-model="queryFormData.chainFlag"
                radio-style="button"
                direction="horizontal"
                :disabled="true"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_4RHgTyOpts"
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
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="CU分類"
              label-width="160px"
              prop="CU"
            >
              <VueInput
                id="viy2InputBox_4RDaE2"
                ref="viy2InputBox_4RDaE2"
                v-model="queryFormData.CU"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
    </VueForm>
    <VueAside
      id="locationAside"
      ref="locationAside"
      v-model="showLocationWin"
      :modal="true"
      direction="rtl"
      size="60%"
      :with-header="false"
    >
      <viy2Subpage_51yw0qPage
        id="viy2Subpage_51yw0q"
        ref="viy2Subpage_51yw0q"
        :init-data="asideParams"
        @select="callbkSelectLocation"
        @close="closeLocationAside"
      />
    </VueAside>
  </VueForm>
</template>
