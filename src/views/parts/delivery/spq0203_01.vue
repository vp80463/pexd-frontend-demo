<script setup>
import { IconArrowLeftBold, IconEdit, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import detailPagePage from '/src/views/parts/delivery/spq0203_02.vue';
import {
  customer_column, customer_query_method,

} from '@/settings/valuelistSetting.js';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
import { datePickerShortcuts, formatAmount } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const invoiceDateValidator = (rule, value, callback) => {
  if (queryFormData.dateFrom > queryFormData.dateTo) {
    callback(new Error(t('error.dateEqAfter', [t('label.invoiceDateTo'), t('label.invoiceDateFrom')])));
  }
  callback();
};
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
// 该程序取当天为第一天
const firstDay = dayjs().format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
const asideParams = ref();
let point;
let pointId;
let pointCd;
let pointNm;
const exportDisable = ref(true);
defineOptions({
  name: 'spq0203_01',
});
const form = ref();
const viy2Flex_AEGV6 = ref();
const queryForm = ref();
const viy2Panel_2Yg0N = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_hHcWwM = ref();
const viy2DateTimePicker_hHcWwO = ref();
const viy2Button_hHcWwP = ref();
const viy2Button_hHcWwQ = ref();
const viy2ValueList_4PhPy0 = ref();
const viy2InputBox_1GTRdfl = ref();
const viy2Select_oYzPK = ref();
const viy2Flex_AEGgC = ref();
const viy2Panel_2Yg0N1 = ref();
const viy2Button_5heur2 = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_AQU3S = ref();
const pagination = ref();
const detailAside = ref();
const detailPage = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', customer: '', orderNo: '', point: '',
});
const rules = reactive({
  viy2DateTimePicker_hHcWwMRules: [
    {
      required: true,
      message: t('errors.required', [t('label.invoiceDate')]),
    },
    {
      validator: invoiceDateValidator,
    },
  ],
  viy2DateTimePicker_hHcWwORules: [
    {
      required: true,
      message: t('errors.required', [t('label.invoiceDate')]),
    },
    {
      validator: invoiceDateValidator,
    },
  ],
  viy2Select_oYzPKRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const showDetailAside = ref(false);
const viy2ValueList_4PhPy0PopoverQueryMethod = customer_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_g34UEButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: showRowDetail,
      title: 'Detail',
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  method: 'post',
  localData: [
    { customerCd: '1', customerNm: 'テスト販売店', duNo: 'DO20240001', invoiceDate: '20241001', invoiceType: '返品', invoiceNo: 'INV20240101', orderNo: 'S020240001', invoiceAmount: 1000, invoiceAmountWithVAT: 990 },
  ]
  ,
}, {
  onSuccess: (data) => {
    const tableDataList = data;
    if (tableDataList.length > 0) {
      exportDisable.value = false;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const viy2Button_5FbWKcClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      gridDsApi.runAsync();
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
const viy2Button_hHcWwPClick = () => {
  if (!isNoValue(queryFormData.dateFrom)) {
    queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  }
  if (!isNoValue(queryFormData.dateTo)) {
    queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  }
};
const viy2Button_hHcWwQClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_4PhPy0Select = (params) => {
  queryFormData.customerId = params.id;
};
const viy2ValueList_4PhPy0Clear = () => {
  queryFormData.customerId = '';
};
const viy2ValueList_4PhPy0Leave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.customerId = '';
  }
};
const viy2ValueList_4PhPy0PopoverColumns = computed(() => {
  return customer_column;
});
const viy2Select_oYzPKChange = (value, data) => {
  queryFormData.pointId = data.id;
  queryFormData.pointCd = data.code;
  queryFormData.pointNm = data.name;
};
const viy2Button_5heur2Click = () => {
  useApi(
    {
      url: '/parts/spq0203/export.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return { ...queryFormData };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'SPQ0203_01.xlsx');
      },
    },
  );
};
const gridCustomerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCustomerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDuNoEditRender = computed(() => {
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
    },
  };
});
const gridInvoiceTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInvoiceAmountFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatAmount(row.cellValue);
  }
  return row.cellValue;
};
const gridInvoiceAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridInvoiceAmountWithVATFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatAmount(row.cellValue);
  }
  return row.cellValue;
};
const gridInvoiceAmountWithVATEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridPointEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const paginationCurrentChange = () => {
  if (gridDs.value.totalElements === 0) {
    return;
  }
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
onMounted(() => {
  point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  pointId = uc.defaultPointId;
  pointCd = uc.defaultPointCd;
  pointNm = uc.defaultPointNm;
  queryFormData.point = point;
  queryFormData.pointId = pointId;
  queryFormData.pointCd = pointCd;
  queryFormData.pointNm = pointNm;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  paginationPageSize.value = PAGE_SIZE;
});
watch(() => ({ ...queryFormData }), (newVal, oldVal) => {
  resetTblResults();
  queryForm.value.validate();
}, { deep: true });
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.point = point;
  queryFormData.pointId = pointId;
  queryFormData.pointCd = pointCd;
  queryFormData.pointNm = pointNm;
  // 重置分页
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
  gridDs.value.totalElements = 0;
  resetTblResults();
};
const resetTblResults = () => {
  exportDisable.value = true;
  grid.value.remove();
  gridDs.value.totalElements = 0;
  gridDs.value.content = [];
};
const showRowDetail = (row) => {
  showDetailAside.value = true;
  asideParams.value = {
    invoiceId: row.invoiceId,
    invoiceNo: row.invoiceNo,
    invoiceDate: row.invoiceDate,
    point: row.point,
    customer: `${row.customerCd} ${row.customerNm}`,
    invoiceAmount: row.invoiceAmount,
  };
};
const closeSpq020302 = () => {
  showDetailAside.value = false;
  gridDsApi.runAsync();
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_AEGV6"
      ref="viy2Flex_AEGV6"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_2Yg0N" ref="viy2Panel_2Yg0N" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
                検索
              </VueButton>
              <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
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
                label="出荷日"
                prop="dateFrom"
                :rules="rules.viy2DateTimePicker_hHcWwMRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_hHcWwM"
                  ref="viy2DateTimePicker_hHcWwM"
                  v-model="queryFormData.dateFrom"
                  :shortcuts="datePickerShortcuts"
                  type="date"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0"
                prop="dateTo"
                :rules="rules.viy2DateTimePicker_hHcWwORules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_hHcWwO"
                  ref="viy2DateTimePicker_hHcWwO"
                  v-model="queryFormData.dateTo"
                  :shortcuts="datePickerShortcuts"
                  type="date"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <VueButton id="viy2Button_hHcWwP" ref="viy2Button_hHcWwP" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hHcWwPClick" />
              <VueButton id="viy2Button_hHcWwQ" ref="viy2Button_hHcWwQ" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hHcWwQClick" />
              <VueFormItem
                label="受注先"
                prop="customer"
              >
                <VueValueList
                  id="viy2ValueList_4PhPy0"
                  ref="viy2ValueList_4PhPy0"
                  :popover-component="valulistWin"
                  v-model="queryFormData.customer"
                  :use-common-popover="true"
                  :toggle-popover-on-click="true"
                  select-field="desc"
                  :use-popover="true"
                  :popover-width="500"
                  :use-popup="false"
                  width="250px"
                  :popover-columns="viy2ValueList_4PhPy0PopoverColumns"
                  :popover-query-method="viy2ValueList_4PhPy0PopoverQueryMethod"
                  @select="viy2ValueList_4PhPy0Select"
                  @clear="viy2ValueList_4PhPy0Clear"
                  @leave="viy2ValueList_4PhPy0Leave"
                />
              </VueFormItem>
              <VueFormItem
                label="受注番号"
                prop="orderNo"
              >
                <VueInput
                  id="viy2InputBox_1GTRdfl"
                  ref="viy2InputBox_1GTRdfl"
                  v-model="queryFormData.orderNo"
                  :formatter="(value) => value.toUpperCase()"
                  :parser="(value) => value.toUpperCase()"
                  :clearable="true"
                  :style="{ width: '150px' }"
                />
              </VueFormItem>
              <VueFormItem
                v-show="false"
                label="出荷倉庫"
                prop="point"
                :rules="rules.viy2Select_oYzPKRules"
              >
                <VueSelect
                  id="viy2Select_oYzPK"
                  ref="viy2Select_oYzPK"
                  v-model="queryFormData.point"
                  :style="{ width: '250px' }"
                  :collapse-tags="true"
                  :filterable="true"
                  :clearable="true"
                  :collapse-tags-tooltip="true"
                  :options="pointDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                  @change="viy2Select_oYzPKChange"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_AEGgC"
        ref="viy2Flex_AEGgC"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2Yg0N1" ref="viy2Panel_2Yg0N1" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportDisable" @click="viy2Button_5heur2Click">
                ファイル出力
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="98%" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
              title="No."
            />
            <VueInputColumn
              :edit-render="gridCustomerCdEditRender"
              field="customerCd"
              :sortable="true"
              title="受注先"
              width="120px"
            />
            <VueInputColumn
              :edit-render="gridCustomerNmEditRender"
              field="customerNm"
              :sortable="true"
              title="受注先名称"
              width="200px"
            />
            <VueInputColumn
              :edit-render="gridDuNoEditRender"
              field="duNo"
              show-overflow="tooltip"
              :sortable="true"
              title="出荷番号"
              width="140px"
            />
            <VueDateTimeColumn
              :edit-render="gridInvoiceDateEditRender"
              field="invoiceDate"
              align="center"
              :sortable="true"
              title="出荷日"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridInvoiceTypeEditRender"
              field="invoiceType"
              show-overflow="tooltip"
              :sortable="true"
              aggregate-label="合計"
              title="出荷種類"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridInvoiceNoEditRender"
              field="invoiceNo"
              show-overflow="tooltip"
              :sortable="true"
              title="納品書番号"
              width="140px"
            />
            <VueInputColumn
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              show-overflow="tooltip"
              :sortable="true"
              title="受注番号"
              width="140px"
            />
            <VueNumberColumn
              :formatter="gridInvoiceAmountFormatter"
              :edit-render="gridInvoiceAmountEditRender"
              field="invoiceAmount"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="販売価格"
              width="160px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridInvoiceAmountWithVATFormatter"
              :edit-render="gridInvoiceAmountWithVATEditRender"
              field="invoiceAmountWithVAT"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="販売価格（税込）"
              width="200px"
              header-align="center"
            />
            <VueInputColumn
              v-if="false"
              :edit-render="gridPointEditRender"
              field="point"
              show-overflow="tooltip"
              :sortable="true"
              title="出荷倉庫"
              width="200px"
            />
            <VueButtonColumn
              width="40px"
              :buttons="gridViy2TableButtonColumn_g34UEButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
      <VueRow
        id="viy2Row_AQU3S"
        ref="viy2Row_AQU3S"
      >
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          class="paging-area-margin"
          :md="{ span: 17 }"
        />
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 7 }"
        >
          <VuePagination
            id="pagination"
            ref="pagination"
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :background="true"
            :small="true"
            :total="gridDs.totalElements || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
    <VueAside
      id="detailAside"
      ref="detailAside"
      v-model="showDetailAside"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
      direction="btt"
      size="90%"
      :with-header="false"
      :show-close="false"
    >
      <detailPagePage
        id="detailPage"
        ref="detailPage"
        :init-data="asideParams"
        @select="callBackSpq020302"
        @close="closeSpq020302"
      />
    </VueAside>
  </VueForm>
</template>
