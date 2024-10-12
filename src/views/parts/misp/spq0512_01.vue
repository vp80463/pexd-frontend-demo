<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const total = ref();
const uc = useUser().userInfo;
const router = useRouter();
const unfinishedFlag = ref(false);
const validataFlag = ref(true);
const exportFlag = ref(true);
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridFlag = ref(true);
const formatFlag = ref(true);
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
defineOptions({
  name: 'spq0512_01',
});
const form = ref();
const viy2Flex_HG4DT = ref();
const queryFormData = ref();
const Search_Panel = ref();
const viy2Button_50kiOC = ref();
const viy2Button_6My7VA = ref();
const viy2Row_hLmD = ref();
const viy2Row_uVYww = ref();
const viy2Row_4HoKa = ref();
const viy2Radio_ANhIC = ref();
const viy2DateTimePicker_RRgLG = ref();
const viy2Row_4ZrBT2 = ref();
const viy2Radio_4ZrBT6 = ref();
const viy2Radio_4ZrBT8 = ref();
const viy2Panel_50igpm = ref();
const viy2Button_50q5go = ref();
const viy2Button_50lG5o = ref();
const viy2Button_50v94C = ref();
const viy2Button_50lEfc = ref();
const grid1 = ref();
const grid2 = ref();
const formData = reactive({
});
const queryFormDataData = reactive({
  Type: '1', datafieldviy2DateTimePicker_RRgLG: '', NewLineCode: 'CR + LF', SignConversion: 'する',
});
const viy2Radio_ANhICOpts = reactive([
  { value: '1', label: '鑑データ' },
  { value: '2', label: '請求書データ' },
]);
const viy2Radio_4ZrBT6Opts = reactive([
  { value: 'CR + LF', label: 'CR + LF' },
  { value: 'LF', label: 'LF' },
]);
const viy2Radio_4ZrBT8Opts = reactive([
  { value: 'する', label: 'する' },
  { value: 'しない', label: 'しない' },
]);
const grid1EditConfig = reactive({
  trigger: 'click',
});
const grid1MouseConfig = reactive({
  extension: true,
});
const grid2EditConfig = reactive({
  trigger: 'click',
});
const grid2MouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/parts/spm020101/searchSalesOrderList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data.content.length > 0) {
      exportFlag.value = false;
    } else {
      exportFlag.value = true;
    }
    total.value = data.totalElements;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const orderStatusDsApi = useApi({
  url: '/common/helper/getOrderStatus.json',
  method: 'post',
  data: {
    arg0: 'S015',
    arg1: 'S001PART',
  },
}, {
  initialData: {
    data: [],
  },
});
const orderStatusDs = orderStatusDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const viy2Button_50kiOCClick = () => {
  doSearch();
};
const viy2Button_6My7VAClick = () => {
  doExport();
};
const viy2Radio_ANhICChange = (value) => {
  debugger;
  if (value == '1') {
    formatFlag.value = true;
    gridFlag.value = true;
  } else {
    formatFlag.value = false;
    gridFlag.value = false;
  }
};
(value) => {
  debugger;
  const displayTypeDS = displayTypeDSApi.data;
  if (value == 'companyWide') {
    // 隐藏 表示タイプ、
    defaultShow();
    displayTypeShow.value = false;
    object1Show.value = false;
    displayTypeDS.value = displayInitTypeDS.value;
  } else if (value == '1') {
    defaultShow();
    displayTypeDS.value = displayInitTypeDS.value;
  } else if (value == '2') {
    defaultShow();
    displayTypeShow.value = false;
    object1Show.value = false;
    displayTypeDS.value = displayInitTypeDS.value;
  }
};
const viy2Button_50q5goClick = () => {
  doExport();
};
const viy2Button_50lG5oClick = () => {
  doExport();
};
const viy2Button_50v94CClick = () => {
  doExport();
};
const viy2Button_50lEfcClick = () => {
  doExport();
};
const grid1IdentificationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1DealerCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1HeaderIndicatorEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1SalesClosingDateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1BaseCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1BillingToStoreCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1EntryAndExitCategoryEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1InvoiceSmountEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2BillingToEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2AmountOfPartsSoldEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2FareEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2DirectFeesEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2ManufacturerFeesEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2TotalPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  paginationPageSize.value = PAGE_SIZE;
  queryFormData.dateStart = lastDay;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateEnd = lastDay;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.status = ['1', '2', '3'];
// queryFormData.status = ['S015SPCREATED', 'S015SPPROFORMA','S015SPWAITINGFORRELEASE','S015SPWAITINGFORAPPROVE','S015SPWAITINGALLOCATE','S015SPWAITINGPICKING','S015SPONPICKING'];
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
  // 清空表单元素
  queryForm.value.resetFields();
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateStart = lastDay;
  queryFormData.dateEnd = lastDay;
  queryFormData.status = ['1', '2', '3'];
  // queryFormData.status = ['S015SPCREATED', 'S015SPPROFORMA','S015SPWAITINGFORRELEASE','S015SPWAITINGFORAPPROVE','S015SPWAITINGALLOCATE','S015SPWAITINGPICKING','S015SPONPICKING'];
  unfinishedFlag.value = true;
  validataFlag.value = false;
  exportFlag.value = true;
  paginationPageSize.value = PAGE_SIZE;
};
const resetTblResults = () => {
  grid.value.remove();
  // 重置分页
  paginationCurrentPage.value = 1;
  total.value = 0;
};
const onExport = () => {
  useApi(
    {
      url: '/parts/spm020101/exportSalesOrderListExcel.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        const condition = {};
        merge(condition, queryFormData);
        condition.pageSize = paginationPageSize.value;
        condition.currentPage = paginationCurrentPage.value;
        return condition;
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'SPM0201_01.xlsx');
      },
    },
  );
};
const onRowDetail = (row) => {
  const query = { salesOrderId: row.salesOrderId };
  useMultiTags().openTag({
    name: 'spm0201_03', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0201_03' }).meta.title = t('title.fastSalesEntry_03');
  // router导航到页面并传递参数
  router.push({ name: 'spm0201_03', data: query });
};
const getPointLabel = (pointId) => {
  const item = find(pointDs.value, { id: pointId });
  return item ? item.desc : null;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_HG4DT"
      ref="viy2Flex_HG4DT"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryFormData"
        ref="queryFormData"
        :model="queryFormDataData"
      >
        <VuePanel id="Search_Panel" ref="Search_Panel" :title="t('label.searchCondition')" height="auto" collapse-icon-position="left">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_50kiOC" ref="viy2Button_50kiOC" icon-position="left" type="info" @click="viy2Button_50kiOCClick">
                {{ t('button.search') }}
              </VueButton>
              <VueButton id="viy2Button_6My7VA" ref="viy2Button_6My7VA" icon-position="left" @click="viy2Button_6My7VAClick">
                {{ t('button.reset') }}
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_hLmD"
            ref="viy2Row_hLmD"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueRow
                id="viy2Row_uVYww"
                ref="viy2Row_uVYww"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueRow
                    id="viy2Row_4HoKa"
                    ref="viy2Row_4HoKa"
                  >
                    <VueCol
                      item-key="item"
                      :inline="true"
                      :md="{ span: 24 }"
                    >
                      <VueFormItem
                        :label="t('label.type')"
                        label-width="100px"
                        prop="Type"
                      >
                        <VueRadioGroup
                          id="viy2Radio_ANhIC"
                          ref="viy2Radio_ANhIC"
                          v-model="queryFormDataData.Type"
                          radio-style="button"
                          direction="horizontal"
                          @change="viy2Radio_ANhICChange"
                        >
                          <VueRadioButton
                            v-for="option in viy2Radio_ANhICOpts"
                            :key="option.value"
                            :label="option.value"
                          >
                            {{ option.label }}
                          </VueRadioButton>
                        </VueRadioGroup>
                      </VueFormItem>
                      <VueFormItem
                        :label="t('label.exportDateLange')"
                        label-width="100px"
                        prop="datafieldviy2DateTimePicker_RRgLG"
                      >
                        <VueDatePicker
                          id="viy2DateTimePicker_RRgLG"
                          ref="viy2DateTimePicker_RRgLG"
                          v-model="queryFormDataData.datafieldviy2DateTimePicker_RRgLG"
                          type="month"
                          :style="{ width: '250px' }"
                          :format="CONST_SYSTEM_DATE_FORMAT.ym"
                        />
                      </VueFormItem>
                    </VueCol>
                  </VueRow>
                  <VueRow
                    id="viy2Row_4ZrBT2"
                    ref="viy2Row_4ZrBT2"
                  >
                    <VueCol
                      item-key="item"
                      :inline="true"
                      :md="{ span: 24 }"
                    >
                      <VueFormItem
                        v-show="formatFlag"
                        :label="t('label.NewLineCode')"
                        label-width="100px"
                        prop="NewLineCode"
                      >
                        <VueRadioGroup
                          id="viy2Radio_4ZrBT6"
                          ref="viy2Radio_4ZrBT6"
                          v-model="queryFormDataData.NewLineCode"
                          radio-style="button"
                          direction="horizontal"
                          split-size="default"
                        >
                          <VueRadioButton
                            v-for="option in viy2Radio_4ZrBT6Opts"
                            :key="option.value"
                            :label="option.value"
                          >
                            {{ option.label }}
                          </VueRadioButton>
                        </VueRadioGroup>
                      </VueFormItem>
                      <VueFormItem
                        v-show="formatFlag"
                        label="符号変換"
                        label-width="100px"
                        prop="SignConversion"
                      >
                        <VueRadioGroup
                          id="viy2Radio_4ZrBT8"
                          ref="viy2Radio_4ZrBT8"
                          v-model="queryFormDataData.SignConversion"
                          radio-style="button"
                          direction="horizontal"
                          split-size="default"
                        >
                          <VueRadioButton
                            v-for="option in viy2Radio_4ZrBT8Opts"
                            :key="option.value"
                            :label="option.value"
                          >
                            {{ option.label }}
                          </VueRadioButton>
                        </VueRadioGroup>
                      </VueFormItem>
                    </VueCol>
                  </VueRow>
                </VueCol>
              </VueRow>
            </VueCol>
          </VueRow>
        </VuePanel>
        <VuePanel id="viy2Panel_50igpm" ref="viy2Panel_50igpm" :title="t('label.detailInfo')" height="auto" collapse-icon-position="left">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_50q5go" ref="viy2Button_50q5go" icon-position="left" @click="viy2Button_50q5goClick">
                鑑データ出力
              </VueButton>
              <VueButton id="viy2Button_50lG5o" ref="viy2Button_50lG5o" icon-position="left" @click="viy2Button_50lG5oClick">
                請求データ出力 (一覧)
              </VueButton>
              <VueButton id="viy2Button_50v94C" ref="viy2Button_50v94C" icon-position="left" @click="viy2Button_50v94CClick">
                請求データ出力 (明細)
              </VueButton>
              <VueButton id="viy2Button_50lEfc" ref="viy2Button_50lEfc" icon-position="left" @click="viy2Button_50lEfcClick">
                請求書明細印刷
              </VueButton>
            </div>
          </template>
          <VueTable id="grid1" ref="grid1" :stripe="true" :show-footer="true" :edit-config="grid1EditConfig" :mouse-config="grid1MouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No"
            />
            <VueInputColumn
              :edit-render="grid1IdentificationEditRender"
              field="identification"
              title="識別"
              width="100px"
            />
            <VueInputColumn
              :edit-render="grid1DealerCodeEditRender"
              field="dealerCode"
              width="200px"
              title="特約店コード"
            />
            <VueInputColumn
              :edit-render="grid1HeaderIndicatorEditRender"
              field="headerIndicator"
              title="ヘッダー区分"
              width="150px"
            />
            <VueInputColumn
              :edit-render="grid1SalesClosingDateEditRender"
              field="salesClosingDate"
              width="200px"
              title="売上締日"
            />
            <VueInputColumn
              :edit-render="grid1BaseCodeEditRender"
              field="baseCode"
              width="200px"
              title="ベースコード"
            />
            <VueInputColumn
              :edit-render="grid1BillingToStoreCodeEditRender"
              field="billingToStoreCode"
              width="200px"
              title="請求先販売店コード"
            />
            <VueInputColumn
              :edit-render="grid1EntryAndExitCategoryEditRender"
              field="entryAndExitCategory"
              title="入出庫分類"
              width="150px"
            />
            <VueInputColumn
              :edit-render="grid1InvoiceSmountEditRender"
              field="invoiceSmount"
              width="200px"
              title="請求金額"
            />
          </VueTable>
          <VueTable id="grid2" ref="grid2" :stripe="true" :show-footer="true" :edit-config="grid2EditConfig" :mouse-config="grid2MouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No"
            />
            <VueInputColumn
              :edit-render="grid2BillingToEditRender"
              field="billingTo"
              width="200px"
              title="請求先"
            />
            <VueInputColumn
              :edit-render="grid2AmountOfPartsSoldEditRender"
              field="amountOfPartsSold"
              width="200px"
              title="部品売上金額"
            />
            <VueInputColumn
              :edit-render="grid2FareEditRender"
              field="Fare"
              width="200px"
              title="運賃"
            />
            <VueInputColumn
              :edit-render="grid2DirectFeesEditRender"
              field="directFees"
              width="200px"
              title="直送手数料"
            />
            <VueInputColumn
              :edit-render="grid2ManufacturerFeesEditRender"
              field="manufacturerFees"
              width="200px"
              title="メーカー手数料"
            />
            <VueInputColumn
              :edit-render="grid2TotalPriceEditRender"
              field="totalPrice"
              width="200px"
              title="合計"
            />
          </VueTable>
        </VuePanel>
      </VueForm>
    </VueFlex>
  </VueForm>
</template>
