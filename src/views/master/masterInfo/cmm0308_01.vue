<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const exportFlag = ref(true);
defineOptions({
  name: 'cmm0308_01',
});
const form = ref();
const viy2Flex_pVofi = ref();
const queryForm = ref();
const viy2Panel_G2WPT = ref();
const viy2Button_4CGTzC = ref();
const resetBtn = ref();
const viy2Row_rFsZl = ref();
const copy8_viy2Row_rFsZl_col1 = ref();
const viy2InputBox_4y5p9E = ref();
const viy2InputBox_aK1dSU = ref();
const viy2InputBox_aKdSBE = ref();
const viy2InputBox_aKdS6Q = ref();
const viy2InputBox_9geMAm = ref();
const viy2InputBox_aKfw80 = ref();
const viy2InputBox_aKfvDc = ref();
const viy2InputNumber_ZLhoe = ref();
const viy2InputNumber_ZLaLM = ref();
const viy2Flex_pVGDy = ref();
const viy2Panel_G2WaG = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  productCd: '', productNm: '', productNm: '', productNm: '', QmakerCd: '', QmakerCd: '', QmakerCd: '', priceFrom: undefined, datafieldviy2InputNumber_ZLaLM: undefined,
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const mstCodeDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S006'],
}, {
  initialData: {
    S006: [],
  },
  manual: true,
});
const mstCodeDs = mstCodeDsApi.data;
const downloadDsApi = useApi({
  url: '/parts/spq0308/doDownload.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SPQ0308_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    gridDsApi.runAsync();
  },
  manual: true,
});
const downloadDs = downloadDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData:
[
  {
    productCd: 'YSP-001',
    productNm: 'ブルーバッグ',
    stdPrice: '1000000',
    agencyRate: '78',
    shopRate: '80',
    supplierCd: '1001',
    makerAbbr: 'ymh',
    QmakerCd: '54565',
    autoFlag: 'Y',
    brand1: 'YAMAHA',
    brand2: 'YAMAHA',
    openFlag: 'Y',
  },
  {
    productCd: 'YSP-002',
    productNm: 'ブルーバッグ',
    stdPrice: '1000000',
    agencyRate: '78',
    shopRate: '80',
    supplierCd: '1001',
    makerAbbr: 'ymh',
    QmakerCd: '54565',
    autoFlag: 'Y',
    brand1: 'YAMAHA',
    brand2: 'YAMAHA',
    openFlag: 'Y',
  },
  {
    productCd: 'YSP-003',
    productNm: 'ブルーバッグ',
    stdPrice: '1000000',
    agencyRate: '78',
    shopRate: '80',
    supplierCd: '1001',
    makerAbbr: 'ymh',
    QmakerCd: '54565',
    autoFlag: 'Y',
    brand1: 'YAMAHA',
    brand2: 'YAMAHA',
    openFlag: 'Y',
  },
  {
    productCd: 'YSP-004',
    productNm: 'ブルーバッグ',
    stdPrice: '1000000',
    agencyRate: '78',
    shopRate: '80',
    supplierCd: '1001',
    makerAbbr: 'ymh',
    QmakerCd: '54565',
    autoFlag: 'Y',
    brand1: 'YAMAHA',
    brand2: 'YAMAHA',
    openFlag: 'Y',
  },
  {
    productCd: 'YSP-005',
    productNm: 'ブルーバッグ',
    stdPrice: '1000000',
    agencyRate: '78',
    shopRate: '80',
    supplierCd: '1001',
    makerAbbr: 'ymh',
    QmakerCd: '54565',
    autoFlag: 'Y',
    brand1: 'YAMAHA',
    brand2: 'YAMAHA',
    openFlag: 'Y',
  },
],
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const gridDs2Api = useApi({
  url: '/parts/spq0308/doRetrieve.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      exportFlag.value = false;
    }
  },
  manual: true,
});
const gridDs2 = gridDs2Api.data;
const binTypeDsApi = useApi({
  url: '/common/helper/getBinTypeList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const binTypeDs = binTypeDsApi.data;
const viy2Button_4CGTzCClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
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
const gridProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProductNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSupplierCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMakerAbbrEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridQmakerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBrand1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBrand2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridStdPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAgencyRateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridShopRateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAutoFlagEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOpenFlagEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  queryFormData.wholesaleRate = '05';
});
watch (
  () => queryFormData, (newVal, oldVal) => {
    resetTblResults();
  }, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  queryFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.pointId = uc.defaultPointId;
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
  exportFlag.value = true;
};
const getTotalRate = () => {
  const tableDataList = grid.value.getTableData().fullData;
  if (tableDataList.length > 0) {
    let totalInUseQty = 0;
    let totalTotalQty = 0;
    for (const key in tableDataList) {
      const item = tableDataList[key];
      totalInUseQty += item.inUseQty;
      totalTotalQty += item.totalQty;
    }
    return VueUtil.formatNumber(Number(totalInUseQty / totalTotalQty) * 100, { digits: 2 });
  }
  return VueUtil.formatNumber(Number(0), { digits: 2 });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_pVofi"
      ref="viy2Flex_pVofi"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_G2WPT" ref="viy2Panel_G2WPT" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_4CGTzC" ref="viy2Button_4CGTzC" icon-position="left" type="info" @click="viy2Button_4CGTzCClick">
                検索
              </VueButton>
              <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_rFsZl"
            ref="viy2Row_rFsZl"
          >
            <VueCol
              id="copy8_viy2Row_rFsZl_col1"
              ref="copy8_viy2Row_rFsZl_col1"
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="部品番号"
                prop="productCd"
              >
                <VueInput
                  id="viy2InputBox_4y5p9E"
                  ref="viy2InputBox_4y5p9E"
                  v-model="queryFormData.productCd"
                  :clearable="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="部品名称"
                prop="productNm"
              >
                <VueInput
                  id="viy2InputBox_aK1dSU"
                  ref="viy2InputBox_aK1dSU"
                  v-model="queryFormData.productNm"
                  :clearable="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="メーカーコード"
                prop="productNm"
              >
                <VueInput
                  id="viy2InputBox_aKdSBE"
                  ref="viy2InputBox_aKdSBE"
                  v-model="queryFormData.productNm"
                  :clearable="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="メーカー略号"
                prop="productNm"
              >
                <VueInput
                  id="viy2InputBox_aKdS6Q"
                  ref="viy2InputBox_aKdS6Q"
                  v-model="queryFormData.productNm"
                  :clearable="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="相手先品番"
                prop="QmakerCd"
              >
                <VueInput
                  id="viy2InputBox_9geMAm"
                  ref="viy2InputBox_9geMAm"
                  v-model="queryFormData.QmakerCd"
                  :clearable="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="ブランド1"
                prop="QmakerCd"
              >
                <VueInput
                  id="viy2InputBox_aKfw80"
                  ref="viy2InputBox_aKfw80"
                  v-model="queryFormData.QmakerCd"
                  :clearable="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="ブランド2"
                prop="QmakerCd"
              >
                <VueInput
                  id="viy2InputBox_aKfvDc"
                  ref="viy2InputBox_aKfvDc"
                  v-model="queryFormData.QmakerCd"
                  :clearable="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="標準小売単価"
                prop="priceFrom"
              >
                <VueInputNumber
                  id="viy2InputNumber_ZLhoe"
                  ref="viy2InputNumber_ZLhoe"
                  v-model="queryFormData.priceFrom"
                  :clearable="true"
                  :min="0"
                  :style="{ width: '100px' }"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                prop="datafieldviy2InputNumber_ZLaLM"
              >
                <VueInputNumber
                  id="viy2InputNumber_ZLaLM"
                  ref="viy2InputNumber_ZLaLM"
                  v-model="queryFormData.datafieldviy2InputNumber_ZLaLM"
                  :clearable="true"
                  :min="0"
                  :style="{ width: '100px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_pVGDy"
        ref="viy2Flex_pVGDy"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_G2WaG" ref="viy2Panel_G2WaG" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" header-align="center" show-overflow :show-footer="true" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            />
            <VueInputColumn
              :edit-render="gridProductCdEditRender"
              field="productCd"
              show-overflow="tooltip"
              :sortable="true"
              fixed="left"
              title="部品番号"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridProductNmEditRender"
              field="productNm"
              show-overflow="tooltip"
              :sortable="true"
              fixed="left"
              title="部品名称"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridSupplierCdEditRender"
              field="supplierCd"
              show-overflow="tooltip"
              :sortable="true"
              title="メーカーコード"
              width="140px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridMakerAbbrEditRender"
              field="makerAbbr"
              show-overflow="tooltip"
              :sortable="true"
              title="メーカー略称"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridQmakerCdEditRender"
              field="QmakerCd"
              show-overflow="tooltip"
              :sortable="true"
              title="相手先品番"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridBrand1EditRender"
              field="brand1"
              show-overflow="tooltip"
              :sortable="true"
              title="ブランド1"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridBrand2EditRender"
              field="brand2"
              show-overflow="tooltip"
              :sortable="true"
              title="ブランド2"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridStdPriceEditRender"
              field="stdPrice"
              :sortable="true"
              title="標準小売単価"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridAgencyRateEditRender"
              field="agencyRate"
              :sortable="true"
              title="特約店掛率"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridShopRateEditRender"
              field="shopRate"
              :sortable="true"
              title="販売店掛率"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridAutoFlagEditRender"
              field="autoFlag"
              show-overflow="tooltip"
              :sortable="true"
              title="自動発注サイン"
              width="140px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridOpenFlagEditRender"
              field="openFlag"
              show-overflow="tooltip"
              :sortable="true"
              title="OPENサイン"
              width="130px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
