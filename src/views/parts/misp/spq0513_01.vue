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
const markDateShow = ref(false);
defineOptions({
  name: 'spq0513_01',
});
const form = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const Search_Panel = ref();
const viy2Button_6Eq86q = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_lOY8w = ref();
const viy2Row_asiqi = ref();
const viy2Radio_gBGYE = ref();
const markDate = ref();
const viy2Panel_426xZ = ref();
const viy2Button_5heur2 = ref();
const viy2Table_3QuTH = ref();
const formData = reactive({
});
const queryFormData = reactive({
  datafieldviy2Radio_gBGYE: '1', markDate: [],
});
const viy2Radio_gBGYEOpts = reactive([
  { value: '1', label: '未出力全件' },
  { value: '2', label: '売上日' },
]);
const viy2Table_3QuTHEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_3QuTHMouseConfig = reactive({
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
const viy2Table_3QuTHSiteIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHRecodeTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHAccountReceivCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHCustomerIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHSiteCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHSaleDateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHSaleKindEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHDataTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHSiteNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHProductNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHOrderQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHDeliveryQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHStandardPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHSellingPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHLastPurCostEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHAmtEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHDirectCommissionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHMakerCommissionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHCustomorInfoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHSaleKindNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHDetailSubjectsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3QuTHSpareEditRender = computed(() => {
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
                id="viy2Row_asiqi"
                ref="viy2Row_asiqi"
              >
                <VueCol
                  item-key="item"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueFormItem
                    :label="t('label.outputRange')"
                    label-width="100px"
                    prop="datafieldviy2Radio_gBGYE"
                  >
                    <VueRadioGroup
                      id="viy2Radio_gBGYE"
                      ref="viy2Radio_gBGYE"
                      v-model="queryFormData.datafieldviy2Radio_gBGYE"
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
                      :style="{ width: '200px' }"
                    />
                  </VueFormItem>
                </VueCol>
              </VueRow>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VuePanel id="viy2Panel_426xZ" ref="viy2Panel_426xZ" :title="t('label.detailInfo')">
        <template #header>
          <div style="width: auto">
            <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
              {{ t('button.export') }}
            </VueButton>
          </div>
        </template>
        <VueTable id="viy2Table_3QuTH" ref="viy2Table_3QuTH" :edit-config="viy2Table_3QuTHEditConfig" :mouse-config="viy2Table_3QuTHMouseConfig">
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
            title="No"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHSiteIdEditRender"
            field="siteId"
            width="200px"
            title="拠点コード"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHRecodeTypeEditRender"
            field="recodeType"
            width="200px"
            title="レコード区分"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHAccountReceivCdEditRender"
            field="accountReceivCd"
            width="200px"
            title="売掛金計上先コード"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHCustomerIdEditRender"
            field="customerId"
            width="200px"
            title="請求先コード"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHSiteCdEditRender"
            field="siteCd"
            width="200px"
            title="売上先コード"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHSaleDateEditRender"
            field="saleDate"
            width="200px"
            title="売上年月日"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHInvoiceNoEditRender"
            field="invoiceNo"
            width="200px"
            title="伝票番号"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHSaleKindEditRender"
            field="saleKind"
            width="200px"
            title="売上種別"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHDataTypeEditRender"
            field="dataType"
            width="200px"
            title="データ区分"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHSiteNmEditRender"
            field="siteNm"
            width="200px"
            title="売上先名称"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHProductCdEditRender"
            field="productCd"
            width="200px"
            title="出荷部品番号"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHProductNmEditRender"
            field="productNm"
            width="200px"
            title="出荷部品名称"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHOrderQtyEditRender"
            field="orderQty"
            width="200px"
            title="受注数"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHDeliveryQtyEditRender"
            field="deliveryQty"
            width="200px"
            title="出荷数"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHStandardPriceEditRender"
            field="standardPrice"
            width="200px"
            title="標準小売単価"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHSellingPriceEditRender"
            field="sellingPrice"
            width="200px"
            title="仕切単価"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHLastPurCostEditRender"
            field="lastPurCost"
            width="200px"
            title="最終仕入単価"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHAmtEditRender"
            field="amt"
            width="200px"
            title="売上金額"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHDirectCommissionEditRender"
            field="directCommission"
            width="200px"
            title="直送手数料"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHMakerCommissionEditRender"
            field="makerCommission"
            width="200px"
            title="メーカー手数料"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHCustomorInfoEditRender"
            field="customorInfo"
            width="200px"
            title="お客様情報"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHSaleKindNmEditRender"
            field="saleKindNm"
            width="200px"
            title="売上種別名称"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHDetailSubjectsCdEditRender"
            field="detailSubjectsCd"
            width="200px"
            title="科目摘要コード"
          />
          <VueInputColumn
            :edit-render="viy2Table_3QuTHSpareEditRender"
            field="spare"
            width="200px"
            title="予備"
          />
        </VueTable>
      </VuePanel>
    </VueFlex>
  </VueForm>
</template>
