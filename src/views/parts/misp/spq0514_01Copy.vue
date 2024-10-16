<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const currentMonth = dayjs().format('YYYYMM');
const exportFlag = ref(true);
const router = useRouter();
const grid1ListShow = ref(true);
const grid2ListShow = ref(false);
const markDateShow = ref(false);
const selectDateShow = ref(false);
const selectRangeShow = ref(true);
const targetDateShow = ref(false);
defineOptions({
  name: 'spq0514_01Copy',
});
const form = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const Search_Panel = ref();
const viy2Button_6Eq86q = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_lOY8w = ref();
const viy2Row_4hnOU = ref();
const viy2Radio_UzePB = ref();
const viy2DateTimePicker_LXukK = ref();
const viy2Radio_gBGYE = ref();
const markDate = ref();
const viy2Flex_4pPG1 = ref();
const viy2Panel_14irVK = ref();
const viy2Button_5heur2 = ref();
const viy2Table_14dwTw = ref();
const viy2Table_aGgKDk = ref();
const formData = reactive({
});
const queryFormData = reactive({
  datafieldviy2Radio_UzePB: '1', targetDate: '', outRadius: '1', markDate: [],
});
const viy2Radio_UzePBOpts = reactive([
  { value: '1', label: '売上データ' },
  { value: '2', label: '在庫データ' },
]);
const viy2Radio_gBGYEOpts = reactive([
  { value: '1', label: '未出力全件' },
  { value: '2', label: '売上日' },
]);
const viy2Table_14dwTwEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_14dwTwMouseConfig = reactive({
  extension: true,
});
const viy2Table_aGgKDkEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_aGgKDkMouseConfig = reactive({
  extension: true,
});
const largeGroupDsApi = useApi({
  url: '/common/helper/getSingleLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const largeGroupDs = largeGroupDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const findStockAccountListApi = useApi({
  url: '/parts/spq0508/findStockAccountList.json',
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
const findStockAccountList = findStockAccountListApi.data;
const exportDsApi = useApi({
  url: '/parts/spq0508/doDownload01.json',
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
      a.download = 'SPQ0508_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    findStockAccountListApi.runAsync();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const viy2Button_6Eq86qClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      findStockAccountListApi.runAsync();
    }
  });
};
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Radio_UzePBChange = (value) => {
  debugger;
  if (value == '1') {
    selectDateShow.value = false;
    selectRangeShow.value = true;
    grid1ListShow.value = true;
    grid2ListShow.value = false;
    queryFormData.outRadius = 1;
    targetDateShow.value = false;
  } else {
    selectDateShow.value = true;
    selectRangeShow.value = false;
    grid1ListShow.value = false;
    grid2ListShow.value = true;
    markDateShow.value = false;
    targetDateShow.value = true;
  }
};
const viy2Radio_gBGYEChange = (value) => {
  if (value == '1') {
    markDateShow.value = false;
    queryFormData.markDate = [];
  } else {
    // 获取当前日期
    const now = new Date();
    // 设置日期为本月第一天
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    // 设置日期为下个月的第一天，然后减去一天，得到本月最后一天
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    markDateShow.value = true;
    queryFormData.markDate = [firstDayOfMonth, lastDayOfMonth];
  }
}
;
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const viy2Table_14dwTwSiteIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwAccountReceivCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwCustomerIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwCustomerEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwCustomerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwSiteCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwSaleDateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwProductNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwDeliveryQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwStandardPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwSellingPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwAmtEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwDirectCommissionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwMakerCommissionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwOrderedProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwActualQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwFlexFromInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwFlexToInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwSaleIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwSaleKindEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwOrderDateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwSubjectsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwDetailSubjectsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwOpenPriceFlagEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwCostEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_14dwTwAmtCostEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkSiteIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkSalesDescriptionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkStandardPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkFirstOrderDateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkProdLargeIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkProdMediumIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkProdSmallIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkOrthoSubstitCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkSupplyControlIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkCostEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkReorderPointEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkReorderQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkManualOrderSignEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkOnHandQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkReceivingQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkAlocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkOnShippingQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkOnFrozenQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkTotalQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkSumAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkSumShipmentQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkSumOnPurchaseQty1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkSumOnPurchaseQty2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkSumOnPurchaseQty3EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth01QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth02QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth03QqtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth04QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth05QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth06QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth07QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth08QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth09QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth10QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth11QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkMonth12QtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkLocationCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkLocationQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_aGgKDkOpenPriceFlagEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
// 初始化targetMonth 和 point
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.targetMonth = currentMonth;
});
// 条件改变，清空明细
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
// 清空条件部
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.targetMonth = currentMonth;
};
const resetTblResults = () => {
  findStockAccountList.value.splice(0);
  exportFlag.value = true;
};
const skipToDetail = (row) => {
  const query = {
    targetMonth: queryFormData.targetMonth,
    pointCd: queryFormData.pointCd,
    pointNm: queryFormData.point,
    largeGroupCd: queryFormData.largeGroupCd,
    largeGroupNm: queryFormData.largeGroupNm,
  };
  useMultiTags().openTag({
    name: 'spq0508_02', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spq0508_02' }).meta.title = t('menu.SPQ0508_02');
  // router导航到页面并传递参数
  router.push({ name: 'spq0508_02', data: query });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_SMXA1"
      ref="viy2Flex_SMXA1"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="Search_Panel" ref="Search_Panel" :title="t('label.searchCondition')" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_6Eq86q" ref="viy2Button_6Eq86q" icon-position="left" type="info" @click="viy2Button_6Eq86qClick">
                {{ t('button.retrieve') }}
              </VueButton>
              <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
                {{ t('button.reset') }}
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
              :md="{ span: 24 }"
            >
              <VueRow
                id="viy2Row_4hnOU"
                ref="viy2Row_4hnOU"
              >
                <VueCol
                  item-key="item"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueFormItem
                    label="出力対象"
                    label-width="100px"
                    prop="datafieldviy2Radio_UzePB"
                  >
                    <VueRadioGroup
                      id="viy2Radio_UzePB"
                      ref="viy2Radio_UzePB"
                      v-model="queryFormData.datafieldviy2Radio_UzePB"
                      radio-style="button"
                      direction="horizontal"
                      split-size="default"
                      @change="viy2Radio_UzePBChange"
                    >
                      <VueRadioButton
                        v-for="option in viy2Radio_UzePBOpts"
                        :key="option.value"
                        :label="option.value"
                      >
                        {{ option.label }}
                      </VueRadioButton>
                    </VueRadioGroup>
                  </VueFormItem>
                  <VueFormItem
                    v-show="targetDateShow"
                    label-width="10px"
                    prop="targetDate"
                  >
                    <VueDatePicker
                      id="viy2DateTimePicker_LXukK"
                      ref="viy2DateTimePicker_LXukK"
                      v-model="queryFormData.targetDate"
                      type="date"
                    />
                  </VueFormItem>
                  <VueFormItem
                    v-show="selectRangeShow"
                    :label="t('label.outputRange')"
                    label-width="100px"
                    prop="outRadius"
                  >
                    <VueRadioGroup
                      id="viy2Radio_gBGYE"
                      ref="viy2Radio_gBGYE"
                      v-model="queryFormData.outRadius"
                      radio-style="button"
                      direction="horizontal"
                      split-size="default"
                      @change="viy2Radio_gBGYEChange"
                    >
                      <VueRadioButton
                        v-for="option in viy2Radio_gBGYEOpts"
                        :key="option.value"
                        :label="option.value"
                      >
                        {{ option.label }}
                      </VueRadioButton>
                    </VueRadioGroup>
                  </VueFormItem>
                  <VueFormItem
                    v-show="markDateShow"
                    prop="markDate"
                  >
                    <VueDatePicker
                      id="markDate"
                      ref="markDate"
                      v-model="queryFormData.markDate"
                      type="daterange"
                    />
                  </VueFormItem>
                </VueCol>
              </VueRow>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_4pPG1"
        ref="viy2Flex_4pPG1"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_14irVK" ref="viy2Panel_14irVK" :title="t('label.detailInfo')" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" :disabled="exportFlag" @click="viy2Button_5heur2Click">
                {{ t('button.export') }}
              </VueButton>
            </div>
          </template>
          <VueTable v-show="grid1ListShow" id="viy2Table_14dwTw" ref="viy2Table_14dwTw" height="auto" :edit-config="viy2Table_14dwTwEditConfig" :mouse-config="viy2Table_14dwTwMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwSiteIdEditRender"
              field="siteId"
              width="200px"
              title="拠点コード"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwAccountReceivCdEditRender"
              field="accountReceivCd"
              width="200px"
              title="売掛金計上先"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwCustomerIdEditRender"
              field="customerId"
              width="200px"
              title="請求販売先"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwCustomerEditRender"
              field="customer"
              width="200px"
              title="請求先略称"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwCustomerNmEditRender"
              field="customerNm"
              width="200px"
              title="請求先正式名称"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwSiteCdEditRender"
              field="siteCd"
              width="200px"
              title="売上先コード"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwSaleDateEditRender"
              field="saleDate"
              width="200px"
              title="売上年月日"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwProductCdEditRender"
              field="productCd"
              width="200px"
              title="出荷部品番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwProductNmEditRender"
              field="productNm"
              width="200px"
              title="出荷部品名称"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwDeliveryQtyEditRender"
              field="deliveryQty"
              width="200px"
              title="出荷数"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwStandardPriceEditRender"
              field="standardPrice"
              width="200px"
              title="標準小売単価"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwSellingPriceEditRender"
              field="sellingPrice"
              width="200px"
              title="仕切単価"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwAmtEditRender"
              field="amt"
              width="200px"
              title="売上金額"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwDirectCommissionEditRender"
              field="directCommission"
              width="200px"
              title="直送手数料"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwMakerCommissionEditRender"
              field="makerCommission"
              width="200px"
              title="メーカー手数料"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwOrderedProductCdEditRender"
              field="orderedProductCd"
              width="200px"
              title="受注部品番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwActualQtyEditRender"
              field="actualQty"
              width="200px"
              title="受注数"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwFlexFromInvoiceNoEditRender"
              field="flexFromInvoiceNo"
              width="200px"
              title="出荷元納品書番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwFlexToInvoiceNoEditRender"
              field="flexToInvoiceNo"
              width="200px"
              title="出荷先納品書番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwSaleIdEditRender"
              field="saleId"
              width="200px"
              title="売上区分"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwSaleKindEditRender"
              field="saleKind"
              width="200px"
              title="売上種別"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwOrderDateEditRender"
              field="orderDate"
              width="200px"
              title="受注日"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwSubjectsCdEditRender"
              field="subjectsCd"
              width="200px"
              title="科目コード"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwDetailSubjectsCdEditRender"
              field="detailSubjectsCd"
              width="200px"
              title="摘要コード"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwOpenPriceFlagEditRender"
              field="openPriceFlag"
              width="200px"
              title="オープン価格サイン"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwCostEditRender"
              field="cost"
              width="200px"
              title="売上原価（単価）"
            />
            <VueInputColumn
              :edit-render="viy2Table_14dwTwAmtCostEditRender"
              field="amtCost"
              width="200px"
              title="売上原価（合計）"
            />
          </VueTable>
          <VueTable v-show="grid2ListShow" id="viy2Table_aGgKDk" ref="viy2Table_aGgKDk" height="auto" :edit-config="viy2Table_aGgKDkEditConfig" :mouse-config="viy2Table_aGgKDkMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkSiteIdEditRender"
              field="siteId"
              width="200px"
              title="拠点コード"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkProductCdEditRender"
              field="productCd"
              width="200px"
              title="部品番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkSalesDescriptionEditRender"
              field="salesDescription"
              width="200px"
              title="部品名称"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkStandardPriceEditRender"
              field="standardPrice"
              width="200px"
              title="標準小売単価"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkFirstOrderDateEditRender"
              field="firstOrderDate"
              width="200px"
              title="拠点別商品マスタ登録日"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkProdLargeIdEditRender"
              field="prodLargeId"
              width="200px"
              title="商品大区分"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkProdMediumIdEditRender"
              field="prodMediumId"
              width="200px"
              title="商品中区分"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkProdSmallIdEditRender"
              field="prodSmallId"
              width="200px"
              title="商品小区分"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkOrthoSubstitCdEditRender"
              field="orthoSubstitCd"
              width="200px"
              title="正代替部品番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkSupplyControlIdEditRender"
              field="supplyControlId"
              width="200px"
              title="供給管理区分"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkCostEditRender"
              field="cost"
              width="200px"
              title="最終仕入単価"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkReorderPointEditRender"
              field="reorderPoint"
              width="200px"
              title="発注点"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkReorderQtyEditRender"
              field="reorderQty"
              width="200px"
              title="発注量"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkManualOrderSignEditRender"
              field="manualOrderSign"
              width="200px"
              title="マニュアル発注サイン"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkOnHandQtyEditRender"
              field="onHandQty"
              width="200px"
              title="未引当在庫"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkReceivingQtyEditRender"
              field="receivingQty"
              width="200px"
              title="入庫中在庫"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkAlocatedQtyEditRender"
              field="alocatedQty"
              width="200px"
              title="引当中在庫"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkOnShippingQtyEditRender"
              field="onShippingQty"
              width="200px"
              title="出庫中在庫"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkOnFrozenQtyEditRender"
              field="onFrozenQty"
              width="200px"
              title="フローズン在庫"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkTotalQtyEditRender"
              field="totalQty"
              width="200px"
              title="受注総数"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkSumAllocatedQtyEditRender"
              field="sumAllocatedQty"
              width="200px"
              title="引当総数"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkSumShipmentQtyEditRender"
              field="sumShipmentQty"
              width="200px"
              title="出荷総数"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkSumOnPurchaseQty1EditRender"
              field="sumOnPurchaseQty1"
              width="200px"
              title="欠品発注残数"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkSumOnPurchaseQty2EditRender"
              field="sumOnPurchaseQty2"
              width="200px"
              title="補充発注残数"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkSumOnPurchaseQty3EditRender"
              field="sumOnPurchaseQty3"
              width="200px"
              title="先行発注残数"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth01QtyEditRender"
              field="month01Qty"
              width="200px"
              title="当月－１"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth02QtyEditRender"
              field="month02Qty"
              width="200px"
              title="当月－２"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth03QqtyEditRender"
              field="month03Qqty"
              width="200px"
              title="当月－３"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth04QtyEditRender"
              field="month04Qty"
              width="200px"
              title="当月－4"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth05QtyEditRender"
              field="month05Qty"
              width="200px"
              title="当月－５"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth06QtyEditRender"
              field="month06Qty"
              width="200px"
              title="当月－６"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth07QtyEditRender"
              field="month07Qty"
              width="200px"
              title="当月－７"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth08QtyEditRender"
              field="month08Qty"
              width="200px"
              title="当月－８"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth09QtyEditRender"
              field="month09Qty"
              width="200px"
              title="当月－９"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth10QtyEditRender"
              field="month10Qty"
              width="200px"
              title="当月－１０"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth11QtyEditRender"
              field="month11Qty"
              width="200px"
              title="当月－１１"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkMonth12QtyEditRender"
              field="month12Qty"
              width="200px"
              title="当月－１２"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkLocationCdEditRender"
              field="locationCd"
              width="200px"
              title="ロケーションコード"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkLocationQtyEditRender"
              field="locationQty"
              width="200px"
              title="ロケーション在庫数"
            />
            <VueInputColumn
              :edit-render="viy2Table_aGgKDkOpenPriceFlagEditRender"
              field="openPriceFlag"
              width="200px"
              title="オープン価格サイン"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
