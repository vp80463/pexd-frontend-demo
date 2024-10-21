<script setup>
import { IconEdit, useLockScreen } from 'viy-ui';
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
const billingTo = '';
defineOptions({
  name: 'spq0512_01Copy',
});
const form = ref();
const viy2Flex_HG4DT = ref();
const queryFormData = ref();
const Search_Panel = ref();
const viy2Button_50lEfc = ref();
const viy2Button_50kiOC = ref();
const viy2Button_6My7VA = ref();
const viy2Row_hLmD = ref();
const viy2Row_uVYww = ref();
const viy2Row_4HoKa = ref();
const viy2DateTimePicker_RRgLG = ref();
const viy2Flex_ztw91 = ref();
const viy2Panel_50igpm = ref();
const viy2Button_50q5go = ref();
const viy2Button_50lG5o = ref();
const viy2Button_50v94C = ref();
const grid = ref();
const viy2Aside_zwSA3 = ref();
const viy2Row_v8prN = ref();
const viy2Row_5K6AKO = ref();
const copy2_viy2Row_v8xMS_col1 = ref();
const copy2_viy2Row_v8xMS_col2 = ref();
const viy2Button_MHEph = ref();
const viy2Form_zCww8 = ref();
const viy2Panel_a0Ael = ref();
const viy2Row_a2fXN = ref();
const viy2InputBox_a1I0p = ref();
const viy2Panel_zDFko = ref();
const viy2Table_zDKIo = ref();
const viy2Dialog_g97sg = ref();
const viy2Row_g9xnA = ref();
const viy2Row_gcVwu = ref();
const viy2Radio_gbENi = ref();
const viy2Row_2C5zwI = ref();
const viy2Radio_2BTFZ8 = ref();
const viy2Row_gcavA = ref();
const viy2Button_gc7GC = ref();
const viy2Button_2BYA6i = ref();
const formData = reactive({
  newLineCode: 'CR+LF', signConversion: 'する',
});
const queryFormDataData = reactive({
  datafieldviy2DateTimePicker_RRgLG: '',
});
const viy2Form_zCww8Data = reactive({
  billingTo: 'consumer1',
});
const skipDetailShow = ref(false);
const viy2Table_zDKIoEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_zDKIoMouseConfig = reactive({
  extension: true,
});
const referenceDataOutput = ref(false);
const viy2Radio_gbENiOpts = reactive([
  { value: 'CR+LF', label: 'CR+LF' },
  { value: 'LF', label: 'LF' },
]);
const viy2Radio_2BTFZ8Opts = reactive([
  { value: 'する', label: 'する' },
  { value: 'しない', label: 'しない' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_zws0GButtons = (scope) => {
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
const viy2Button_50lEfcClick = () => {
  doExport();
};
const viy2Button_50kiOCClick = () => {
  doSearch();
};
const viy2Button_6My7VAClick = () => {
  doExport();
};
const viy2Button_50q5goClick = () => {
// doExport();
  referenceDataOutput.value = true;
};
const viy2Button_50lG5oClick = () => {
  doExport();
};
const viy2Button_50v94CClick = () => {
  doExport();
};
const gridBillingToEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAmountOfPartsSoldEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridFareEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridDirectFeesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridManufacturerFeesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTotalPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Button_MHEphClick = () => {
  VueMessageBox.confirm(t('閉じるをしますか?'), t('title.warn'), {
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
const viy2Button_2BYA6iClick = () => {
  referenceDataOutput.value = false;
};
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
              <VueButton id="viy2Button_50lEfc" ref="viy2Button_50lEfc" icon-position="left" @click="viy2Button_50lEfcClick">
                請求書印刷
              </VueButton>
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
                ファイル出力
              </VueButton>
              <VueButton id="viy2Button_50v94C" ref="viy2Button_50v94C" icon-position="left" @click="viy2Button_50v94CClick">
                明細ファイル出力
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" :stripe="true" :show-footer="true" height="auto" :data="staticDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No"
            />
            <VueInputColumn
              :edit-render="gridBillingToEditRender"
              field="billingTo"
              width="200px"
              title="請求先"
            />
            <VueInputColumn
              :edit-render="gridAmountOfPartsSoldEditRender"
              field="amountOfPartsSold"
              align="right"
              width="200px"
              title="部品売上金額"
            />
            <VueInputColumn
              :edit-render="gridFareEditRender"
              field="Fare"
              align="right"
              width="200px"
              title="運賃"
            />
            <VueInputColumn
              :edit-render="gridDirectFeesEditRender"
              field="directFees"
              align="right"
              width="200px"
              title="直送手数料"
            />
            <VueInputColumn
              :edit-render="gridManufacturerFeesEditRender"
              field="manufacturerFees"
              align="right"
              width="200px"
              title="メーカー手数料"
            />
            <VueInputColumn
              :edit-render="gridTotalPriceEditRender"
              field="totalPrice"
              align="right"
              width="200px"
              title="合計"
            />
            <VueButtonColumn
              align="center"
              width="80px"
              :buttons="gridViy2TableButtonColumn_zws0GButtons"
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
      size="90%"
      :with-header="false"
      :show-close="false"
      direction="btt"
    >
      <VueRow
        id="viy2Row_v8prN"
        ref="viy2Row_v8prN"
        style="padding-bottom:5px;"
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
              <VueButton id="viy2Button_MHEph" ref="viy2Button_MHEph" icon-position="left" @click="viy2Button_MHEphClick">
                閉じる
              </VueButton>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueForm
        id="viy2Form_zCww8"
        ref="viy2Form_zCww8"
        :model="viy2Form_zCww8Data"
      >
        <VuePanel id="viy2Panel_a0Ael" ref="viy2Panel_a0Ael" title="主信息">
          <VueRow
            id="viy2Row_a2fXN"
            ref="viy2Row_a2fXN"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="請求先"
                prop="billingTo"
              >
                <VueInput
                  id="viy2InputBox_a1I0p"
                  ref="viy2InputBox_a1I0p"
                  v-model="viy2Form_zCww8Data.billingTo"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
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
              width="120px"
            />
          </VueTable>
        </VuePanel>
      </VueForm>
    </VueAside>
    <VueDialog
      id="viy2Dialog_g97sg"
      ref="viy2Dialog_g97sg"
      v-model="referenceDataOutput"
      title="出力形式"
      width="600px"
    >
      <template #default>
        <VueRow
          id="viy2Row_g9xnA"
          ref="viy2Row_g9xnA"
        >
          <VueCol
            item-key="item"
            align="center"
            :md="{ span: 24 }"
          >
            <VueRow
              id="viy2Row_gcVwu"
              ref="viy2Row_gcVwu"
            >
              <VueCol
                item-key="item"
                align="center"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueFormItem
                  :label="t('label.NewLineCode')"
                  prop="newLineCode"
                >
                  <VueRadioGroup
                    id="viy2Radio_gbENi"
                    ref="viy2Radio_gbENi"
                    v-model="formData.newLineCode"
                    radio-style="button"
                    direction="horizontal"
                    split-size="default"
                  >
                    <VueRadioButton
                      v-for="option in viy2Radio_gbENiOpts"
                      :key="option.value"
                      :label="option.value"
                    >
                      {{ option.label }}
                    </VueRadioButton>
                  </VueRadioGroup>
                </VueFormItem>
              </VueCol>
            </VueRow>
            <VueRow
              id="viy2Row_2C5zwI"
              ref="viy2Row_2C5zwI"
            >
              <VueCol
                item-key="item"
                align="center"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueFormItem
                  label="符号変换"
                  prop="signConversion"
                >
                  <VueRadioGroup
                    id="viy2Radio_2BTFZ8"
                    ref="viy2Radio_2BTFZ8"
                    v-model="formData.signConversion"
                    radio-style="button"
                    direction="horizontal"
                    split-size="default"
                  >
                    <VueRadioButton
                      v-for="option in viy2Radio_2BTFZ8Opts"
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
      </template>
      <template #footer>
        <VueRow
          id="viy2Row_gcavA"
          ref="viy2Row_gcavA"
        >
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueButton id="viy2Button_gc7GC" ref="viy2Button_gc7GC" icon-position="left" type="info">
              出力する
            </VueButton>
            <VueButton id="viy2Button_2BYA6i" ref="viy2Button_2BYA6i" icon-position="left" @click="viy2Button_2BYA6iClick">
              閉じる
            </VueButton>
          </VueCol>
        </VueRow>
      </template>
    </VueDialog>
  </VueForm>
</template>
