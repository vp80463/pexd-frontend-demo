<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
// 获取当前月份的第一天
const firstDay = `${dayjs().format('YYYYMMDD')}0000`;
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDDHHMM');
const confirmFlag = ref(true);
const disableFlag = ref(true);
defineOptions({
  name: 'spq0204_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5x1pwE = ref();
const viy2Button_5heur2 = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_GY8MW = ref();
const viy2Flex_TCoxy = ref();
const queryForm = ref();
const viy2Row_8YcbHi = ref();
const viy2Select_ogIg3 = ref();
const viy2DateTimePicker_8YcbHz = ref();
const viy2DateTimePicker_8YcbHA = ref();
const invoiceNumber = ref();
const viy2Flex_TBr5s = ref();
const viy2Panel_8YckXu = ref();
const viy2Row_8YckXw = ref();
const grid = ref();
const viy2Panel_1rHZnHX = ref();
const viy2Table_1rHZnHZ = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', dateFrom: '', dateTo: '', invoiceNo: '',
});
const rules = reactive({
  viy2Select_ogIg3Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2DateTimePicker_8YcbHzRules: [
    {
      required: true,
      message: t('errors.required', [t('label.fromDate')]),
    },
  ],
  viy2DateTimePicker_8YcbHARules: [
    {
      required: true,
      message: t('errors.required', [t('label.toDate')]),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2Table_1rHZnHZEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_1rHZnHZMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/parts/spq0201/searchInvoiceInfo.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data.detailContent.length > 0) {
      disableFlag.value = false;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const editGridDsApi = useApi({
  url: '/parts/spq0201/confirmInvoiceInfo.json',
  method: 'post',
  data: () => {
    queryFormData.content = grid.value.getRecordset();
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const editGridDs = editGridDsApi.data;
const orderStsDsApi = useApi({
  method: 'post',
  localData: [
    { label: '10. Waiting for Receipt Order', value: '10' },
    { label: '20. Wait for assigning', value: '20' },
    { label: '30. Wait for job start', value: '30' },
    { label: '50. Wait for job continue', value: '50' },
    { label: '60. Wait for settle', value: '60' },
    { label: '70. Wait for cashier', value: '70' },
    { label: 'ZZ. Completed', value: 'ZZ' },
  ],
});
const orderStsDs = orderStsDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
}
;
const viy2Button_5heur2Click = () => {
  useApi(
    {
      url: '/parts/spq0201/exportPurchaseOrderExcel.json',
      method: 'post',
      responseType: 'blob',
      data: queryFormData,
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'data.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  );
};
const viy2Button_5FbWKcClick = () => {
  doRetrieve();
};
const viy2Button_GY8MWClick = () => {
  editGridDsApi.runAsync();
};
const gridEditClosed = (obj) => {
  if (grid.value.getRecordset().updateRecords.length > 0) {
    confirmFlag.value = false;
  } else {
    confirmFlag.value = true;
  }
};
const gridOrderDateEditRender = computed(() => {
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
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInvoiceDateEditRender = computed(() => {
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
const gridInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridVatNoEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridSerialNoEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridCustomerEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridPhoneNoEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridAddressEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridTaxCodeEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridShipmentLinesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSalesOrderEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridServiceOrderEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridServiceChargeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCashierEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_1rHZnHZSignEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_1rHZnHZOrderDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const viy2Table_1rHZnHZOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_1rHZnHZInvoiceDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const viy2Table_1rHZnHZInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_1rHZnHZPartsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_1rHZnHZQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_1rHZnHZRetailPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_1rHZnHZAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.pointId = uc.defaultPointId;
});
// 条件改变，清空明细
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
// 清空条件部
const resetCondition = () => {
// 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  // 清空表单元素
  queryForm.value.resetFields();
  resetTblResults();
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.pointId = uc.defaultPointId;
  document.getElementById('invoiceNumber').focus();
};
const resetTblResults = () => {
  if (gridDs.value.detailContent != null && gridDs.value.summaryContent != null) {
    disableFlag.value = true;
    gridDs.value.detailContent.splice(0);
    gridDs.value.summaryContent.splice(0);
  }
};
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_zgSti"
      ref="viy2Row_zgSti"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="viy2Button_5x1pwE" ref="viy2Button_5x1pwE" icon-position="left" :disabled="disableFlag">
          {{ t('button.print') }}
        </VueButton>
        <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="disableFlag" @click="viy2Button_5heur2Click">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" @click="viy2Button_5FbWKcClick">
          {{ t('button.retrieve') }}
        </VueButton>
        <VueButton id="viy2Button_GY8MW" ref="viy2Button_GY8MW" icon-position="left" type="info" :disabled="confirmFlag" @click="viy2Button_GY8MWClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_TCoxy"
      ref="viy2Flex_TCoxy"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_8YcbHi"
          ref="viy2Row_8YcbHi"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.point')"
              prop="pointId"
              :rules="rules.viy2Select_ogIg3Rules"
            >
              <VueSelect
                id="viy2Select_ogIg3"
                ref="viy2Select_ogIg3"
                v-model="queryFormData.pointId"
                :style="{ width: '250px' }"
                :filterable="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.fromDate')"
              label-width="130px"
              prop="dateFrom"
              :rules="rules.viy2DateTimePicker_8YcbHzRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_8YcbHz"
                ref="viy2DateTimePicker_8YcbHz"
                v-model="queryFormData.dateFrom"
                type="datetime"
                :style="{ width: '150px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymdt"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymdt"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.toDate')"
              label-width="130px"
              prop="dateTo"
              :rules="rules.viy2DateTimePicker_8YcbHARules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_8YcbHA"
                ref="viy2DateTimePicker_8YcbHA"
                v-model="queryFormData.dateTo"
                type="datetime"
                :style="{ width: '150px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymdt"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymdt"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.invoiceNumber')"
              prop="invoiceNo"
            >
              <VueInput
                id="invoiceNumber"
                ref="invoiceNumber"
                v-model="queryFormData.invoiceNo"
                autofocus
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_TBr5s"
        ref="viy2Flex_TBr5s"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_8YckXu" ref="viy2Panel_8YckXu" :title="t('label.summary')" height="50%">
          <template #header>
            <div style="width: 300px">
              <VueRow
                id="viy2Row_8YckXw"
                ref="viy2Row_8YckXw"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                />
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="gridDs.summaryContent" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @edit-closed="gridEditClosed">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
            />
            <VueDateTimeColumn
              :edit-render="gridOrderDateEditRender"
              field="orderDate"
              align="center"
              :sortable="true"
              :title="t('label.orderDate')"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.orderNo')"
              width="130px"
            />
            <VueDateTimeColumn
              :edit-render="gridInvoiceDateEditRender"
              field="invoiceDate"
              align="center"
              :sortable="true"
              :title="t('label.invoiceDate')"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridInvoiceNoEditRender"
              field="invoiceNo"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.invoiceNumber')"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridVatNoEditRender"
              field="vatNo"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.vatNo')"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridSerialNoEditRender"
              field="serialNo"
              show-overflow="tooltip"
              :title="t('label.serialNumber')"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridCustomerEditRender"
              field="customer"
              show-overflow="tooltip"
              :title="t('label.customerName')"
              width="160px"
            />
            <VueInputColumn
              :edit-render="gridPhoneNoEditRender"
              field="phoneNo"
              show-overflow="tooltip"
              :title="t('label.phoneNo')"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridAddressEditRender"
              field="address"
              show-overflow="tooltip"
              aggregate-label="Total："
              :title="t('label.address')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridTaxCodeEditRender"
              field="taxCode"
              show-overflow="tooltip"
              :title="t('label.taxCode')"
              width="130px"
            />
            <VueNumberColumn
              :edit-render="gridShipmentLinesEditRender"
              field="shipmentLines"
              footer-align="right"
              align="right"
              aggregate="sum"
              :title="t('label.shipmentLine')"
              width="140px"
            />
            <VueNumberColumn
              :edit-render="gridSalesOrderEditRender"
              field="salesOrder"
              footer-align="right"
              align="right"
              aggregate="sum"
              :title="t('label.salesOrder')"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridServiceOrderEditRender"
              field="serviceOrder"
              footer-align="right"
              align="right"
              aggregate="sum"
              :title="t('label.serviceOrder')"
              width="130px"
            />
            <VueNumberColumn
              :edit-render="gridServiceChargeEditRender"
              field="serviceCharge"
              footer-align="right"
              align="right"
              aggregate="sum"
              :title="t('label.serviceCharge')"
              width="140px"
            />
            <VueNumberColumn
              :edit-render="gridAmountEditRender"
              field="amount"
              footer-align="right"
              align="right"
              aggregate="sum"
              :title="t('label.amount')"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridCashierEditRender"
              field="cashier"
              show-overflow="tooltip"
              :title="t('label.cashier')"
              min-width="145px"
            />
          </VueTable>
        </VuePanel>
        <VuePanel id="viy2Panel_1rHZnHX" ref="viy2Panel_1rHZnHX" :title="t('label.detail')" height="50%">
          <VueTable id="viy2Table_1rHZnHZ" ref="viy2Table_1rHZnHZ" :show-footer="true" height="auto" :data="gridDs.detailContent" :edit-config="viy2Table_1rHZnHZEditConfig" :mouse-config="viy2Table_1rHZnHZMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="viy2Table_1rHZnHZSignEditRender"
              field="sign"
              :sortable="true"
              :title="t('label.sign')"
              width="110px"
            />
            <VueDateTimeColumn
              :edit-render="viy2Table_1rHZnHZOrderDateEditRender"
              field="orderDate"
              :sortable="true"
              width="130px"
              :title="t('label.orderDate')"
            />
            <VueInputColumn
              :edit-render="viy2Table_1rHZnHZOrderNoEditRender"
              field="orderNo"
              :sortable="true"
              :title="t('label.orderNo')"
              width="150px"
            />
            <VueDateTimeColumn
              :edit-render="viy2Table_1rHZnHZInvoiceDateEditRender"
              field="invoiceDate"
              :sortable="true"
              width="130px"
              :title="t('label.invoiceDate')"
            />
            <VueInputColumn
              :edit-render="viy2Table_1rHZnHZInvoiceNoEditRender"
              field="invoiceNo"
              :sortable="true"
              :title="t('label.invoiceNumber')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="viy2Table_1rHZnHZPartsEditRender"
              field="parts"
              :sortable="true"
              aggregate-label="Total："
              show-overflow="tooltip"
              :title="t('label.partsNoAndServiceJob')"
              width="230px"
            />
            <VueNumberColumn
              :edit-render="viy2Table_1rHZnHZQtyEditRender"
              field="qty"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.quantity')"
              width="110px"
            />
            <VueNumberColumn
              :edit-render="viy2Table_1rHZnHZRetailPriceEditRender"
              field="retailPrice"
              align="right"
              :sortable="true"
              :title="t('label.retailPrice')"
              width="110px"
            />
            <VueNumberColumn
              :edit-render="viy2Table_1rHZnHZAmountEditRender"
              field="amount"
              align="right"
              aggregate="sum"
              :title="t('label.amount')"
              width="110px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
