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
  name: 'spq0515_01',
});
const form = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const Search_Panel = ref();
const viy2Button_6Eq86q = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_lOY8w = ref();
const viy2Row_ryEFG = ref();
const viy2Radio_UfghQ = ref();
const viy2Radio_gBGYE = ref();
const markDate = ref();
const viy2Flex_4LiGZ = ref();
const viy2Panel_45odm = ref();
const viy2Button_5heur2 = ref();
const viy2Table_45sUh = ref();
const viy2Table_Fu5t6 = ref();
const formData = reactive({
});
const queryFormData = reactive({
  datafieldviy2Radio_UfghQ: '1', datafieldviy2Radio_gBGYE: '1', markDate: [],
});
const viy2Radio_UfghQOpts = reactive([
  { value: '1', label: '仕入データ' },
  { value: '2', label: '売上データ' },
]);
const viy2Radio_gBGYEOpts = reactive([
  { value: '1', label: '未出力全件' },
  { value: '2', label: '売上日' },
]);
const viy2Table_45sUhEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_45sUhMouseConfig = reactive({
  extension: true,
});
const viy2Table_Fu5t6EditConfig = reactive({
  trigger: 'click',
});
const viy2Table_Fu5t6MouseConfig = reactive({
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
const viy2Radio_UfghQChange = (value) => {
  debugger;
  if (value == '1') {
    selectDateShow.value = false;
    selectRangeShow.value = true;
    grid1ListShow.value = true;
    grid2ListShow.value = false;
    queryFormData.outRadius = 1;
  } else {
    selectDateShow.value = true;
    selectRangeShow.value = false;
    grid1ListShow.value = false;
    grid2ListShow.value = true;
    markDateShow.value = false;
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
const viy2Table_45sUhSaleDateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_45sUhProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_45sUhProductNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_45sUhDeliveryQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_45sUhSellingPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_45sUhLastPurCostEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_45sUhCostEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_45sUhSalesTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_45sUhSalesKindEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_45sUhOrderDateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_45sUhSeqNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6SiteIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6AccountReceivCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6DemandSellingCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6DemandSellingNm1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6DemandSellingNm2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6SiteCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6SalesDateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6ProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6ProductNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6DeliveryQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6AtandardPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6SellingPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6AmtEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6FinalPurCostEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6CostEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6DirectCommisionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6MakerCommisionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6OrderdProductCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6OrderQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6FlexFromInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6FlexToInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6SalesTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6SalesKindEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6OrderDataEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6SubjectsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6DetailSubjectsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6SeqNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6CustomorInfoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6CommentEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_Fu5t6OrderCategoryEditRender = computed(() => {
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
                id="viy2Row_ryEFG"
                ref="viy2Row_ryEFG"
              >
                <VueCol
                  item-key="item"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueFormItem
                    label="出力対象"
                    label-width="100px"
                    prop="datafieldviy2Radio_UfghQ"
                  >
                    <VueRadioGroup
                      id="viy2Radio_UfghQ"
                      ref="viy2Radio_UfghQ"
                      v-model="queryFormData.datafieldviy2Radio_UfghQ"
                      radio-style="button"
                      direction="horizontal"
                      split-size="default"
                      @change="viy2Radio_UfghQChange"
                    >
                      <VueRadioButton
                        v-for="option in viy2Radio_UfghQOpts"
                        :key="option.value"
                        :label="option.value"
                      >
                        {{ option.label }}
                      </VueRadioButton>
                    </VueRadioGroup>
                  </VueFormItem>
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
                    label-width="10px"
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
        id="viy2Flex_4LiGZ"
        ref="viy2Flex_4LiGZ"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_45odm" ref="viy2Panel_45odm" :title="t('label.detailInfo')" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
                {{ t('button.export') }}
              </VueButton>
            </div>
          </template>
          <VueTable v-show="grid1ListShow" id="viy2Table_45sUh" ref="viy2Table_45sUh" height="auto" :edit-config="viy2Table_45sUhEditConfig" :mouse-config="viy2Table_45sUhMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhSaleDateEditRender"
              field="saleDate"
              width="200px"
              title="売上年月日"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhProductCdEditRender"
              field="productCd"
              width="200px"
              title="出荷部品番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhProductNmEditRender"
              field="productNm"
              width="200px"
              title="出荷部品名称"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhDeliveryQtyEditRender"
              field="deliveryQty"
              width="200px"
              title="出荷数"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhSellingPriceEditRender"
              field="sellingPrice"
              width="200px"
              title="沖縄小売価格"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhLastPurCostEditRender"
              field="lastPurCost"
              width="200px"
              title="最終仕入単価"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhCostEditRender"
              field="cost"
              width="200px"
              title="売上原価"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhSalesTypeEditRender"
              field="salesType"
              width="200px"
              title="売上区分"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhSalesKindEditRender"
              field="salesKind"
              width="200px"
              title="売上種別"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhOrderDateEditRender"
              field="orderDate"
              width="200px"
              title="受注日"
            />
            <VueInputColumn
              :edit-render="viy2Table_45sUhSeqNoEditRender"
              field="seqNo"
              width="200px"
              title="売上明細No"
            />
          </VueTable>
          <VueTable v-show="grid2ListShow" id="viy2Table_Fu5t6" ref="viy2Table_Fu5t6" height="auto" :edit-config="viy2Table_Fu5t6EditConfig" :mouse-config="viy2Table_Fu5t6MouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6SiteIdEditRender"
              field="siteId"
              width="200px"
              title="拠点コード"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6AccountReceivCdEditRender"
              field="accountReceivCd"
              width="200px"
              title="売掛金計上先"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6DemandSellingCdEditRender"
              field="demandSellingCd"
              width="200px"
              title="請求販売先"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6DemandSellingNm1EditRender"
              field="demandSellingNm1"
              width="200px"
              title="請求先略称"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6DemandSellingNm2EditRender"
              field="demandSellingNm2"
              width="200px"
              title="請求先正式名称"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6SiteCdEditRender"
              field="siteCd"
              width="200px"
              title="売上先コード"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6SalesDateEditRender"
              field="SalesDate"
              width="200px"
              title="売上年月日"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6ProductCdEditRender"
              field="productCd"
              width="200px"
              title="出荷部品番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6ProductNmEditRender"
              field="productNm"
              width="200px"
              title="出荷部品名称"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6DeliveryQtyEditRender"
              field="deliveryQty"
              width="200px"
              title="出荷数"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6AtandardPriceEditRender"
              field="atandardPrice"
              width="200px"
              title="小売単価"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6SellingPriceEditRender"
              field="sellingPrice"
              width="200px"
              title="仕切単価"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6AmtEditRender"
              field="amt"
              width="200px"
              title="売上金額"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6FinalPurCostEditRender"
              field="finalPurCost"
              width="200px"
              title="最終仕入単価"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6CostEditRender"
              field="cost"
              width="200px"
              title="売上原価"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6DirectCommisionEditRender"
              field="directCommision"
              width="200px"
              title="直送手数料"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6MakerCommisionEditRender"
              field="makerCommision"
              width="200px"
              title="メーカー手数料"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6OrderdProductCodeEditRender"
              field="orderdProductCode"
              width="200px"
              title="受注部品番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6OrderQtyEditRender"
              field="orderQty"
              width="200px"
              title="受注数"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6FlexFromInvoiceNoEditRender"
              field="flexFromInvoiceNo"
              width="200px"
              title="出荷元納品書番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6FlexToInvoiceNoEditRender"
              field="flexToInvoiceNo"
              width="200px"
              title="出荷先納品書番号"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6SalesTypeEditRender"
              field="salesType"
              width="200px"
              title="売上区分"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6SalesKindEditRender"
              field="salesKind"
              width="200px"
              title="売上種別"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6OrderDataEditRender"
              field="orderData"
              width="200px"
              title="受注日"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6SubjectsCdEditRender"
              field="subjectsCd"
              width="200px"
              title="科目コード"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6DetailSubjectsCdEditRender"
              field="detailSubjectsCd"
              width="200px"
              title="摘要コード"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6SeqNoEditRender"
              field="seqNo"
              width="200px"
              title="売上明細No"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6CustomorInfoEditRender"
              field="customorInfo"
              width="200px"
              title="お客様情報"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6CommentEditRender"
              field="comment"
              width="200px"
              title="コメント"
            />
            <VueInputColumn
              :edit-render="viy2Table_Fu5t6OrderCategoryEditRender"
              field="orderCategory"
              width="200px"
              title="受注形態"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
