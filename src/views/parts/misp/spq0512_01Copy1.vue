<script setup>
import { IconCloseBold, IconEdit, useLockScreen } from 'viy-ui';
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
const gridShow = ref(true);
const grid1Show = ref(false);
defineOptions({
  name: 'spq0512_01Copy1',
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
const viy2Flex_ztw91 = ref();
const viy2Panel_50igpm = ref();
const viy2Button_50q5go = ref();
const viy2Button_50lG5o = ref();
const viy2Button_50v94C = ref();
const viy2Button_50lEfc = ref();
const grid = ref();
const grid1 = ref();
const viy2Aside_zwSA3 = ref();
const viy2Row_v8prN = ref();
const viy2Row_5K6AKO = ref();
const copy2_viy2Row_v8xMS_col1 = ref();
const copy2_viy2Row_v8xMS_col2 = ref();
const viy2Button_5K6ALG = ref();
const viy2Form_zCww8 = ref();
const viy2FormItem_zCDdW = ref();
const viy2Panel_zDFko = ref();
const viy2Table_zDKIo = ref();
const formData = reactive({
});
const queryFormDataData = reactive({
  Type: '1', datafieldviy2DateTimePicker_RRgLG: '', NewLineCode: 'CR + LF', SignConversion: 'する',
});
const viy2Form_zCww8Data = reactive({
});
const skipDetailShow = ref(false);
const viy2Table_zDKIoEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_zDKIoMouseConfig = reactive({
  extension: true,
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
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const grid1EditConfig = reactive({
  trigger: 'click',
});
const grid1MouseConfig = reactive({
  extension: true,
});
const grid1Viy2TableButtonColumn_zws0GButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: skipDetailFc,
    },
  ];
};
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
const staticDsApi = useApi({
  method: 'post',
  localData: [
    { billingTo: 'consumer1', amountOfPartsSold: 10.2, Fare: 5, directFees: 1, manufacturerFees: 3, totalPrice: 19.2 },
    { billingTo: 'consumer2', amountOfPartsSold: 3.1, Fare: 5, directFees: 1, manufacturerFees: 3, totalPrice: 13.1 },
    { billingTo: 'consumer3', amountOfPartsSold: 6.4, Fare: 5, directFees: 1, manufacturerFees: 3, totalPrice: 12.4 },
    { billingTo: 'consumer4', amountOfPartsSold: 30, Fare: 5, directFees: 1, manufacturerFees: 3, totalPrice: 39 },
  ],
});
const staticDs = staticDsApi.data;
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
  if (value == '1') {
    formatFlag.value = true;
    gridShow.value = true;
    grid1Show.value = false;
  } else {
    formatFlag.value = false;
    gridShow.value = false;
    grid1Show.value = true;
  }
};
(value) => {
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
const gridIdentificationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDealerCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridHeaderIndicatorEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSalesClosingDateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBaseCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBillingToStoreCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEntryAndExitCategoryEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInvoiceSmountEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1BillingToEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1AmountOfPartsSoldEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid1FareEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid1DirectFeesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid1ManufacturerFeesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const grid1TotalPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Button_5K6ALGClick = () => {
  VueMessageBox.confirm(t('閉じますか？'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    skipDetailShow.value = false;
  });
};
const viy2Table_zDKIoData1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData3EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData4EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData5EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData6EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData7EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData8EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData9EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData10EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData11EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData12EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData13EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_zDKIoData14EditRender = computed(() => {
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
const skipDetailFc = () => {
  skipDetailShow.value = true;
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
      </VueForm>
      <VueFlex
        id="viy2Flex_ztw91"
        ref="viy2Flex_ztw91"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_50igpm" ref="viy2Panel_50igpm" :title="t('label.detailInfo')" height="100%" collapse-icon-position="left">
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
          <VueTable v-if="gridShow" id="grid" ref="grid" :stripe="true" :show-footer="true" height="auto" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No"
            />
            <VueInputColumn
              :edit-render="gridIdentificationEditRender"
              field="identification"
              title="識別"
              width="100px"
            />
            <VueInputColumn
              :edit-render="gridDealerCodeEditRender"
              field="dealerCode"
              width="200px"
              title="特約店コード"
            />
            <VueInputColumn
              :edit-render="gridHeaderIndicatorEditRender"
              field="headerIndicator"
              title="ヘッダー区分"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridSalesClosingDateEditRender"
              field="salesClosingDate"
              width="200px"
              title="売上締日"
            />
            <VueInputColumn
              :edit-render="gridBaseCodeEditRender"
              field="baseCode"
              width="200px"
              title="ベースコード"
            />
            <VueInputColumn
              :edit-render="gridBillingToStoreCodeEditRender"
              field="billingToStoreCode"
              width="200px"
              title="請求先販売店コード"
            />
            <VueInputColumn
              :edit-render="gridEntryAndExitCategoryEditRender"
              field="entryAndExitCategory"
              title="入出庫分類"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridInvoiceSmountEditRender"
              field="invoiceSmount"
              width="200px"
              title="請求金額"
            />
          </VueTable>
          <VueTable v-if="grid1Show" id="grid1" ref="grid1" :stripe="true" :show-footer="true" height="auto" :data="staticDs" :edit-config="grid1EditConfig" :mouse-config="grid1MouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No"
            />
            <VueInputColumn
              :edit-render="grid1BillingToEditRender"
              field="billingTo"
              width="200px"
              title="請求先"
            />
            <VueInputColumn
              :edit-render="grid1AmountOfPartsSoldEditRender"
              field="amountOfPartsSold"
              align="right"
              width="200px"
              title="部品売上金額"
            />
            <VueInputColumn
              :edit-render="grid1FareEditRender"
              field="Fare"
              align="right"
              width="200px"
              title="運賃"
            />
            <VueInputColumn
              :edit-render="grid1DirectFeesEditRender"
              field="directFees"
              align="right"
              width="200px"
              title="直送手数料"
            />
            <VueInputColumn
              :edit-render="grid1ManufacturerFeesEditRender"
              field="manufacturerFees"
              align="right"
              width="200px"
              title="メーカー手数料"
            />
            <VueInputColumn
              :edit-render="grid1TotalPriceEditRender"
              field="totalPrice"
              align="right"
              width="200px"
              title="合計"
            />
            <VueButtonColumn
              align="center"
              width="80px"
              :buttons="grid1Viy2TableButtonColumn_zws0GButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="viy2Aside_zwSA3"
      ref="viy2Aside_zwSA3"
      v-model="skipDetailShow"
      :modal="true"
      size="50%"
      :with-header="false"
      :show-close="false"
    >
      <VueRow
        id="viy2Row_v8prN"
        ref="viy2Row_v8prN"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueRow
            id="viy2Row_5K6AKO"
            ref="viy2Row_5K6AKO"
          >
            <VueCol
              id="copy2_viy2Row_v8xMS_col1"
              ref="copy2_viy2Row_v8xMS_col1"
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueText id="viy2Text_5K6AKZ" ref="viy2Text_5K6AKZ" class="aside-title-text">
                請求書情報
              </VueText>
            </VueCol>
            <VueCol
              id="copy2_viy2Row_v8xMS_col2"
              ref="copy2_viy2Row_v8xMS_col2"
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueButton id="viy2Button_5K6ALG" ref="viy2Button_5K6ALG" icon-position="right" type="text" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_5K6ALGClick" />
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueForm
        id="viy2Form_zCww8"
        ref="viy2Form_zCww8"
        :model="viy2Form_zCww8Data"
      >
        <VueFormItem
          id="viy2FormItem_zCDdW"
          ref="viy2FormItem_zCDdW"
          label="請求先"
          prop="billingTo"
        />
        <VuePanel id="viy2Panel_zDFko" ref="viy2Panel_zDFko" title="明細情報">
          <VueTable id="viy2Table_zDKIo" ref="viy2Table_zDKIo" height="auto" :edit-config="viy2Table_zDKIoEditConfig" :mouse-config="viy2Table_zDKIoMouseConfig">
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData1EditRender"
              field="data1"
              title="売上日"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData2EditRender"
              field="data2"
              title="伝票番号"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData3EditRender"
              field="data3"
              title="科目適用"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData4EditRender"
              field="data4"
              title="出荷部品No."
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData5EditRender"
              field="data5"
              title="出荷部品名称"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData6EditRender"
              field="data6"
              title="注文数"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData7EditRender"
              field="data7"
              title="売上種別"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData8EditRender"
              field="data8"
              title="売上数"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData9EditRender"
              field="data9"
              title="仕切単価"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData10EditRender"
              field="data10"
              title="小壳単価"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData11EditRender"
              field="data11"
              title="売上金額"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData12EditRender"
              field="data12"
              title="運賃"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData13EditRender"
              field="data13"
              title="直送手数料"
              width="100px"
            />
            <VueInputColumn
              :edit-render="viy2Table_zDKIoData14EditRender"
              field="data14"
              title="メーカー手数料"
              width="100px"
            />
          </VueTable>
        </VuePanel>
      </VueForm>
    </VueAside>
  </VueForm>
</template>
