<script setup>
import { IconArrowLeftBold, IconDocument, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { customer_column, customer_query_method } from '@/settings/valuelistSetting.js';
import { formatUpper } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const lastDay = dayjs().format('YYYYMMDD');
const asideParams = ref();
const router = useRouter();
const route = useRoute();
const uc = useUser().userInfo;
const printFlag = ref(true);
const detailData = ref([]);
const returnInvoiceId = ref('');
defineOptions({
  name: 'spm0202_02',
});
const form = ref();
const viy2Flex_xPcS4 = ref();
const queryForm = ref();
const viy2Panel_2NshZ = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_5heur2 = ref();
const viy2Row_lOY8w = ref();
const viy2InputBox_4fi8Pc = ref();
const viy2DateTimePicker_1MmOIm = ref();
const viy2DateTimePicker_1MmOIy = ref();
const viy2Button_hFmWWA = ref();
const viy2Button_hQ5D0I = ref();
const viy2Select_8ZlKIR = ref();
const viy2InputBox_4fmn4K = ref();
const viy2ValueList_7PNQm = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_xPuVG = ref();
const viy2Panel_2NshZ1 = ref();
const viy2Button_5x1pwE = ref();
const headerGrid = ref();
const formData = reactive({
});
const queryFormData = reactive({
  returnInvoiceNo: '', dateFrom: '', dateTo: '', reason: '', invoiceNo: '', customer: '', pointId: '',
});
const rules = reactive({
  viy2DateTimePicker_1MmOImRules: [
    {
      required: true,
      message: t('errors.required', [t('label.returnDate')]),
    },
  ],
  viy2DateTimePicker_1MmOIyRules: [
    {
      required: true,
      message: t('errors.required', [t('label.returnDate')]),
    },
  ],
});
const viy2InputBox_4fi8Pcformatter = value => (formatUpper(value));
const viy2InputBox_4fmn4Kformatter = value => (formatUpper(value));
const viy2ValueList_7PNQmPopoverQueryMethod = customer_query_method;
const headerGridEditConfig = reactive({
  trigger: 'click',
});
const headerGridMouseConfig = reactive({
  extension: true,
});
const headerGridViy2TableButtonColumn_hONMkButtons = (scope) => {
  return [
    {
      label: '',
      icon: IconDocument,
    },
  ];
};
const headerGridDsApi = useApi({
  url: '/parts/spm020202/getSalesReturnHistoryHeaderList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      printFlag.value = false;
      doDetailRetrieve(data[0]);
      returnInvoiceId.value = data[0].returnInvoiceId;
      nextTick(() => {
        headerGrid.value.setCurrentRow(data[0]);
      });
    }
  },
  manual: true,
});
const headerGridDs = headerGridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const SalesReturnReasonDsApi = useApi({
  url: '/common/helper/getSalesReturnReasonList.json',
  method: 'post',
  data: {
    arg0: 'S001PART',
  },
}, {
  initialData: {
    data: [],
  },
});
const SalesReturnReasonDs = SalesReturnReasonDsApi.data;
const viy2Button_5FbWKcClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      headerGridDsApi.runAsync();
    }
  });
};
const viy2Button_5heur2Click = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_hFmWWAClick = () => {
  if (!queryFormData.dateFrom) {
    queryFormData.dateFrom = firstDay;
  }
  if (!queryFormData.dateTo) {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
};
const viy2Button_hQ5D0IClick = () => {
  queryFormData.dateFrom = lastDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_7PNQmSelect = (params) => {
  queryFormData.customerId = params.id;
};
const viy2ValueList_7PNQmClear = () => {
  queryFormData.customerId = '';
};
const viy2ValueList_7PNQmLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.customerId = '';
  }
};
const viy2ValueList_7PNQmPopoverColumns = computed(() => {
  return customer_column;
});
const viy2Button_5x1pwEClick = () => {
  onPrintBtn();
};
const headerGridCellClick = (obj) => {
  const row = obj.row;
  returnInvoiceId.value = row.returnInvoiceId;
  doDetailRetrieve(row);
};
const headerGridReturnInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridReturnDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const headerGridReasonEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridCustomerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridCustomerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridReturnAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
// queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateFrom = lastDay;
  queryFormData.dateTo = lastDay;
  doInit();
});
const doInit = () => {
  const params = route.query;
  if (typeof (params) !== 'undefined' && Object.entries(params).length !== 0) {
    queryFormData.returnInvoiceNo = params.returnInvoiceNo;
    headerGridDsApi.runAsync();
  }
};
watch(() => ({ ...queryFormData }), (newVal, oldVal) => {
  resetTblResults();
}, { deep: true });
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  queryFormData.dateFrom = lastDay;
  queryFormData.dateTo = lastDay;
  // queryFormData.pointId = uc.defaultPointId;
  resetTblResults();
};
const resetTblResults = () => {
  headerGridDs.value.splice(0);
  detailData.value = [];
  printFlag.value = true;
};
const doDetailRetrieve = (row) => {
  detailData.value = [];
  if (row.returnInvoiceId == null) {
    return;
  }
  useApi(
    {
      url: '/parts/spm020202/getSalesReturnHistoryDetail.json',
      method: 'post',
      data: () => {
        return {
          returnInvoiceId: row.returnInvoiceId,
        };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        if (data.length > 0) {
          detailData.value = data;
          nextTick(() => {
            detailGrid.value.setCurrentRow(data[0]);
          });
        } else {
          detailData.value.splice(0);
        }
      },
    },
  );
};
const onPrintBtn = () => {
  useApi(
    {
      url: '/common/report/printPartsSalesReturnInvoiceForFinance.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          returnInvoiceId,
        };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'printPartsSalesReturnInvoice(ForFinance).pdf');
      },
    },
  );
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_xPcS4"
      ref="viy2Flex_xPcS4"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_2NshZ" ref="viy2Panel_2NshZ" title="検索条件" height="auto">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
                検索
              </VueButton>
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" @click="viy2Button_5heur2Click">
                クリア
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
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="返品番号"
                prop="returnInvoiceNo"
              >
                <VueInput
                  id="viy2InputBox_4fi8Pc"
                  ref="viy2InputBox_4fi8Pc"
                  v-model="queryFormData.returnInvoiceNo"
                  :formatter="viy2InputBox_4fi8Pcformatter"
                />
              </VueFormItem>
              <VueFormItem
                label="返品日"
                prop="dateFrom"
                :rules="rules.viy2DateTimePicker_1MmOImRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1MmOIm"
                  ref="viy2DateTimePicker_1MmOIm"
                  v-model="queryFormData.dateFrom"
                  type="date"
                  :style="{ width: '130px' }"
                  format="YYYY/MM/DD"
                  value-format="YYYYMMDD"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0"
                prop="dateTo"
                :rules="rules.viy2DateTimePicker_1MmOIyRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1MmOIy"
                  ref="viy2DateTimePicker_1MmOIy"
                  v-model="queryFormData.dateTo"
                  type="date"
                  :style="{ width: '130px' }"
                  format="YYYY/MM/DD"
                  value-format="YYYYMMDD"
                />
              </VueFormItem>
              <VueButton id="viy2Button_hFmWWA" ref="viy2Button_hFmWWA" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hFmWWAClick" />
              <VueButton id="viy2Button_hQ5D0I" ref="viy2Button_hQ5D0I" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hQ5D0IClick" />
              <VueFormItem
                label="返品理由"
                prop="reason"
              >
                <VueSelect
                  id="viy2Select_8ZlKIR"
                  ref="viy2Select_8ZlKIR"
                  v-model="queryFormData.reason"
                  :style="{ width: '200px' }"
                  :disabled="returnFlag"
                  :clearable="true"
                  :filterable="true"
                  :options="SalesReturnReasonDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="出荷番号"
                prop="invoiceNo"
              >
                <VueInput
                  id="viy2InputBox_4fmn4K"
                  ref="viy2InputBox_4fmn4K"
                  v-model="queryFormData.invoiceNo"
                  :formatter="viy2InputBox_4fmn4Kformatter"
                />
              </VueFormItem>
              <VueFormItem
                v-show="false"
                label="受注先"
                prop="customer"
              >
                <VueValueList
                  id="viy2ValueList_7PNQm"
                  ref="viy2ValueList_7PNQm"
                  :popover-component="valulistWin"
                  v-model="queryFormData.customer"
                  :use-common-popover="true"
                  :toggle-popover-on-click="true"
                  select-field="desc"
                  :use-popover="true"
                  :popover-width="500"
                  :use-popup="false"
                  width="250px"
                  :popover-columns="viy2ValueList_7PNQmPopoverColumns"
                  :popover-query-method="viy2ValueList_7PNQmPopoverQueryMethod"
                  @select="viy2ValueList_7PNQmSelect"
                  @clear="viy2ValueList_7PNQmClear"
                  @leave="viy2ValueList_7PNQmLeave"
                />
              </VueFormItem>
              <VueFormItem
                v-show="false"
                label="出荷倉庫"
                prop="pointId"
              >
                <VueSelect
                  id="viy2Select_1rPSyEH"
                  ref="viy2Select_1rPSyEH"
                  v-model="queryFormData.pointId"
                  :style="{ width: '250px' }"
                  :collapse-tags="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :disabled="true"
                  :options="pointDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_xPuVG"
        ref="viy2Flex_xPuVG"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2NshZ1" ref="viy2Panel_2NshZ1" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5x1pwE" ref="viy2Button_5x1pwE" icon-position="left" :disabled="printFlag" @click="viy2Button_5x1pwEClick">
                印刷
              </VueButton>
            </div>
          </template>
          <VueTable id="headerGrid" ref="headerGrid" header-align="center" height="99%" :data="headerGridDs" :edit-config="headerGridEditConfig" :mouse-config="headerGridMouseConfig" @cell-click="headerGridCellClick">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No."
            />
            <VueInputColumn
              :edit-render="headerGridReturnInvoiceNoEditRender"
              field="returnInvoiceNo"
              show-overflow="tooltip"
              :sortable="true"
              title="返品番号"
              width="175px"
            />
            <VueDateTimeColumn
              :edit-render="headerGridReturnDateEditRender"
              field="returnDate"
              align="center"
              :sortable="true"
              title="返品日"
              width="120px"
            />
            <VueInputColumn
              :edit-render="headerGridReasonEditRender"
              field="reason"
              show-overflow="tooltip"
              :sortable="true"
              title="返品理由"
              width="140px"
            />
            <VueInputColumn
              :edit-render="headerGridInvoiceNoEditRender"
              field="invoiceNo"
              show-overflow="tooltip"
              :sortable="true"
              title="出荷番号"
              width="140px"
            />
            <VueInputColumn
              :edit-render="headerGridCustomerCdEditRender"
              field="customerCd"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先"
              width="135px"
            />
            <VueInputColumn
              :edit-render="headerGridCustomerNmEditRender"
              field="customerNm"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先名称"
              width="450px"
              min-width="250px"
            />
            <VueNumberColumn
              :edit-render="headerGridReturnAmtEditRender"
              field="returnAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="返品金額"
              width="145px"
              header-align="center"
            />
            <VueButtonColumn
              align="center"
              fixed="right"
              width="60px"
              :buttons="headerGridViy2TableButtonColumn_hONMkButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
