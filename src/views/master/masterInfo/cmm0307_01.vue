<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_OzNTuPage from '/src/views/commons/parts_select_multi.vue';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const exportFlag = ref(true);
const asideParams = ref();
defineOptions({
  name: 'cmm0307_01',
});
const form = ref();
const viy2Flex_pVofi = ref();
const queryForm = ref();
const viy2Panel_G41Bt = ref();
const viy2Button_4CGTzC = ref();
const resetBtn = ref();
const viy2Row_rFsZl = ref();
const copy8_viy2Row_rFsZl_col1 = ref();
const viy2Select_4uc4zb = ref();
const viy2ValueList_DG4AF = ref();
const viy2InputBox_4y5p9E = ref();
const viy2Flex_pVGDy = ref();
const viy2Panel_IXTRe = ref();
const viy2Row_IZL02 = ref();
const viy2Button_IZNZa = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const partsMultiAside = ref();
const viy2Subpage_OzNTu = ref();
const formData = reactive({
});
const queryFormData = reactive({
  org: '', productCd: '', wholesaleRate: '05',
});
const rules = reactive({
  viy2Select_4uc4zbRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showPartsMultiWin = ref(false);
const viy2Select_4uc4zbOpts = reactive([
  {
    label:
'66564 ジャック',
    value:
'66564 ジャック',
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
]);
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
    productCd: 'AD-123-WIXXS',
    productNm: '電子レンジ1',
    supersedeProductCd: 'SUP-123-DUCT',
    stdPriceWithoutTax: '100000',
    stdPriceWithTax: '123560',
    openFlag: 'Y',
    originPrice: '90000',
    PartitionRate: '98',
    DivisionPrice: '100000',
    rank: 'A',
    specialDiscountCd: '05',
    selfInventoryQty: '10',
  },
  {
    productCd: 'AD-102-WIXXS',
    productNm: '電子レンジ22',
    supersedeProductCd: 'SUP-102-DUCT',
    stdPriceWithoutTax: '100000',
    stdPriceWithTax: '123560',
    openFlag: 'Y',
    originPrice: '90000',
    PartitionRate: '97',
    DivisionPrice: '100000',
    rank: 'B',
    specialDiscountCd: '05',
    selfInventoryQty: '10',
  },
  {
    productCd: 'AD-103-WIXXS',
    productNm: '電子レンジ33',
    supersedeProductCd: 'SUP-103-DUCT',
    stdPriceWithoutTax: '100000',
    stdPriceWithTax: '123560',
    openFlag: 'Y',
    originPrice: '90000',
    PartitionRate: '96',
    DivisionPrice: '100000',
    rank: 'C',
    specialDiscountCd: '05',
    selfInventoryQty: '10',
  },
  {
    productCd: 'AD-104-WIXXS',
    productNm: '電子レンジ44',
    supersedeProductCd: 'SUP-104-DUCT',
    stdPriceWithoutTax: '100000',
    stdPriceWithTax: '123560',
    openFlag: 'Y',
    originPrice: '90000',
    PartitionRate: '93',
    DivisionPrice: '100000',
    rank: 'D',
    specialDiscountCd: '05',
    selfInventoryQty: '10',
  },
]
  ,
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
const viy2Button_IZNZaClick = () => {
  asideParams.value = {
    facilityId: uc.defaultPointId,
  };
  showPartsMultiWin.value = true;
};
const gridOrgEditRender = computed(() => {
  return {
    enabled: false,
  };
});
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
const gridSupersedeProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridStdPriceWithoutTaxEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridStdPriceWithTaxEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOpenFlagEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartitionRateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDivisionPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRankEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'left',
    },
  };
});
const gridSpecialDiscountCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOriginPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSelfInventoryQtyEditRender = computed(() => {
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
const closeAside = () => {
  showPartsWin.value = false;
};
// 部品多选回调
const multiPartsParams = () => {
};
const callbkSelectMultiParts = (param) => {
// 移除新删除行
// param.removeRecords.forEach(delOne => {
// grid.value.getTableData().visibleData.forEach(row => {
// if(delOne.partsNo == row.partsNo) {
// grid.value.remove(row);
// }
// })
// })
// // 追加新追加行
// let tableData = grid.value.getTableData().visibleData;
// param.insertRecords.forEach(newOne => {
// const existOne = tableData.find(chosen => chosen.partsNo === newOne.partsNo);
// if (!existOne) {
// newOne.orderQty = newOne.qty;
// newOne.locationId = newOne.mainLocationId;
// newOne.locationCd = newOne.mainLocationCd;
// if (!isNoValue(orderFormData.discountPercentage)) {
// newOne.discount = orderFormData.discountPercentage;
// }
// // calculateSellingPrice(newOne);
// grid.value.insertAt(newOne, -1).then(function(newRow){
// grid.value.setCurrentRow(newRow.row);
// });
// }
// })
  showPartsMultiWin.value = false;
};
const closeMultiPartsAside = () => {
  showPartsMultiWin.value = false;
};
// consumer侧边栏选择后
const callbkSelectConsumer = (params) => {
// consumerFormData.lastNm = params.lastNm;
// consumerFormData.middleNm = params.middleNm;
// consumerFormData.firstNm = params.firstNm;
// consumerFormData.consumerId = params.consumerId;
// consumerFormData.mobilePhone = params.mobilePhone;
// consumerFormData.sns = params.sns;
// consumerFormData.gender = params.gender;
// consumerFormData.province = params.province;
// consumerFormData.district = params.district;
// consumerFormData.address = params.address;
// consumerFormData.email = params.email;
// consumerFormData.birthDate = params.birthDate;
// consumerFormData.birthYear = params.birthYear;
// consumerFormData.age = params.age;
// consumerFormData.privacyResult = params.agreementResult;
// privacyPolicyResultFromDB.value = params.agreementResult;
// policyFileName.value = params.agreementResult;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
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
        <VuePanel id="viy2Panel_G41Bt" ref="viy2Panel_G41Bt" title="検索条件">
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
                label="販売店"
                prop="org"
                :rules="rules.viy2Select_4uc4zbRules"
              >
                <VueSelect
                  id="viy2Select_4uc4zb"
                  ref="viy2Select_4uc4zb"
                  v-model="queryFormData.org"
                  :style="{ width: '200px' }"
                  :clearable="true"
                  :options="viy2Select_4uc4zbOpts"
                />
              </VueFormItem>
              <VueFormItem
                label="部品"
                prop="productCd"
              >
                <VueValueList
                  id="viy2ValueList_DG4AF"
                  ref="viy2ValueList_DG4AF"
                  v-model="queryFormData.productCd"
                  :use-popover="true"
                  :use-popup="true"
                  :clearable="true"
                />
              </VueFormItem>
              <VueFormItem
                label="純掛掛率ランク"
                prop="wholesaleRate"
              >
                <VueInput
                  id="viy2InputBox_4y5p9E"
                  ref="viy2InputBox_4y5p9E"
                  v-model="queryFormData.wholesaleRate"
                  :disabled="true"
                  :style="{ width: '200px' }"
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
        <VuePanel id="viy2Panel_IXTRe" ref="viy2Panel_IXTRe" height="100%" title="明細情報">
          <template #header>
            <div style="width: auto">
              <VueRow
                id="viy2Row_IZL02"
                ref="viy2Row_IZL02"
              >
                <VueCol
                  v-show="true"
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_IZNZa" ref="viy2Button_IZNZa" icon-position="left" @click="viy2Button_IZNZaClick">
                    部品選択
                  </VueButton>
                </VueCol>
              </VueRow>
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
              :edit-render="gridOrgEditRender"
              field="org"
              show-overflow="tooltip"
              :sortable="true"
              title="販売店"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridProductCdEditRender"
              field="productCd"
              show-overflow="tooltip"
              :sortable="true"
              title="部品番号"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridProductNmEditRender"
              field="productNm"
              show-overflow="tooltip"
              :sortable="true"
              title="部品名称"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridSupersedeProductCdEditRender"
              field="supersedeProductCd"
              show-overflow="tooltip"
              :sortable="true"
              title="正代替部品番号"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridStdPriceWithoutTaxEditRender"
              field="stdPriceWithoutTax"
              :sortable="true"
              header-align="center"
              title="標準小売単価(税抜)"
              width="160px"
            />
            <VueNumberColumn
              :edit-render="gridStdPriceWithTaxEditRender"
              field="stdPriceWithTax"
              :sortable="true"
              header-align="center"
              title="標準小売単価(税込)"
              width="160px"
            />
            <VueInputColumn
              :edit-render="gridOpenFlagEditRender"
              field="openFlag"
              :sortable="true"
              width="130px"
              header-align="center"
              title="オープン価格"
            />
            <VueNumberColumn
              :edit-render="gridPartitionRateEditRender"
              field="PartitionRate"
              :sortable="true"
              header-align="center"
              title="仕切率"
              width="80px"
            />
            <VueNumberColumn
              :edit-render="gridDivisionPriceEditRender"
              field="DivisionPrice"
              :sortable="true"
              header-align="center"
              title="仕切価格"
              width="100px"
            />
            <VueNumberColumn
              :edit-render="gridRankEditRender"
              field="rank"
              align="left"
              :sortable="true"
              width="130px"
              title="特掛掛率ランク"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridSpecialDiscountCdEditRender"
              field="specialDiscountCd"
              show-overflow="tooltip"
              :sortable="true"
              title="特掛コード"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridOriginPriceEditRender"
              field="originPrice"
              :sortable="true"
              header-align="center"
              title="原価"
              width="100px"
            />
            <VueNumberColumn
              :edit-render="gridSelfInventoryQtyEditRender"
              field="selfInventoryQty"
              :sortable="true"
              header-align="center"
              title="在庫数"
              width="100px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="partsMultiAside"
      ref="partsMultiAside"
      v-model="showPartsMultiWin"
      :modal="true"
      direction="btt"
      size="90%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <viy2Subpage_OzNTuPage
        id="viy2Subpage_OzNTu"
        ref="viy2Subpage_OzNTu"
        :init-data="asideParams"
        @select="callbkSelectMultiParts"
        @close="closeMultiPartsAside"
      />
    </VueAside>
  </VueForm>
</template>
