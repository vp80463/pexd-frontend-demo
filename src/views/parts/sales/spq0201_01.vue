<script setup>
import { IconArrowLeftBold, IconEdit, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { customer_column, customer_pop_condition, customer_pop_query_method, customer_query_method } from '@/settings/valuelistSetting.js';
import { datePickerShortcuts, formatAmount, formatUpper } from '@/pj-commonutils.js';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const orderDateValidator = (rule, value, callback) => {
  if (queryFormData.dateFrom > queryFormData.dateTo) {
    callback(new Error(t('error.dateEqAfter', [t('label.periodTo'), t('label.periodFrom')])));
  }
  callback();
};
const router = useRouter();
const total = ref();
const exportDisabledFlag = ref(true);
const uc = useUser().userInfo;
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
const lastDay = dayjs().format('YYYYMMDD');
const orderSourceType = [];
defineOptions({
  name: 'spq0201_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5heur2 = ref();
const viy2Button_4GGP3o = ref();
const viy2Flex_dqArc = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_hBG7co = ref();
const viy2DateTimePicker_hBG7e2 = ref();
const viy2Button_hBG7e3 = ref();
const viy2Button_hBG7e4 = ref();
const viy2ValueList_1LaI7g = ref();
const viy2Row_1LaI7s = ref();
const viy2Select_1rPSyEH = ref();
const viy2InputBox_hBG7e5 = ref();
const viy2Select_1PZzk4 = ref();
const viy2Flex_dr4gT = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', customer: '', pointId: '', orderNo: '', orderStatus: '',
});
const rules = reactive({
  viy2DateTimePicker_hBG7coRules: [
    {
      required: true,
      message: t('errors.required', [t('label.orderDate')]),
    },
    {
      validator: orderDateValidator,
    },
  ],
  viy2DateTimePicker_hBG7e2Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.orderDate')]),
    },
    {
      validator: orderDateValidator,
    },
  ],
});
const viy2ValueList_1LaI7gPopoverQueryMethod = customer_query_method;
const viy2ValueList_1LaI7gPopupColumns = ref(customer_column);
const viy2ValueList_1LaI7gPopupQueryMethod = customer_pop_query_method;
const viy2InputBox_hBG7e5formatter = value => (formatUpper(value));
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_ug955Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onEditWin,
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  url: '/parts/spq0201/findSalesOrderCustomerList.json',
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
    exportDisabledFlag.value = gridDs.value.content.length == 0;
    total.value = data.totalElements;
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
const orderSourceTypeDsApi = useApi({
  url: '/common/helper/getOrderSourceType.json',
  method: 'post',
}, {
  manual: true,
});
const orderSourceTypeDs = orderSourceTypeDsApi.data;
const orderStatusDsApi = useApi({
  url: '/common/helper/getOrderStatus.json',
  method: 'post',
  data: {
    arg0: 'S015',
    arg1: 'S001PART',
  },
});
const orderStatusDs = orderStatusDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5heur2Click = () => {
  exportBtn();
};
const viy2Button_4GGP3oClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      if (queryFormData.dateTo !== null && queryFormData.dateTo !== undefined) {
        gridDsApi.runAsync();
      }
    }
  });
};
const viy2Button_hBG7e3Click = () => {
  queryFormData.dateTo = dayjs(queryFormData.dateFrom, 'YYYYMMDD').subtract(1, 'month').endOf('month').format('YYYYMMDD');
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom, 'YYYYMMDD').subtract(1, 'month').startOf('month').format('YYYYMMDD');
};
const viy2Button_hBG7e4Click = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_1LaI7gSelect = (params) => {
  queryFormData.customerId = params.id;
};
const viy2ValueList_1LaI7gClear = (params) => {
  queryFormData.customerId = '';
};
const viy2ValueList_1LaI7gLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.customerId = '';
  }
};
const viy2ValueList_1LaI7gPopoverColumns = computed(() => {
  return customer_column;
});
const viy2ValueList_1LaI7gPopupConditions = computed(() => {
  return customer_pop_condition;
});
const gridCellDblclick = (obj) => {
  const row = obj.row;
  onEditWin(row);
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
const gridPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSourceTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
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
const gridAllocatedLinesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOrderLinesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOrderAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridOrderAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const paginationCurrentChange = () => {
  if (total.value === 0) {
    return;
  }
  gridDsApi.runAsync();
};
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  paginationPageSize.value = PAGE_SIZE;
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
  queryForm.value.validate();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.pointId = uc.defaultPointId;
  paginationCurrentPage.value = 1;
  paginationPageSize.value = 15;
  total.value = 0;
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.content = [];
  total.value = 0;
  exportDisabledFlag.value = true;
};
const exportBtn = () => {
  useApi(
    {
      url: '/parts/spq0201/exportSalesOrderCustomerList.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return queryFormData;
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Sales Order Inquiry(By Customer).xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  );
};
const onEditWin = (selectedRow) => {
  let data = {};
  // source type code只有这两种情况
  if (selectedRow.sourceTypeCode === 'S001PART') {
    data = {
      siteId: uc.siteId,
      salesOrderId: selectedRow.salesOrderId,
    };
    useMultiTags().openTag({
      name: 'spm0201_03', // 路由名称
    });
    // Update the meta title of the tag if it exists.
    useMultiTags().getTag({ name: 'spm0201_03' }).meta.title = t('title.fastSalesEntry_03', data);
    // Use Vue Router to navigate to the specified route and pass the data parameters
    router.push({ name: 'spm0201_03', data });
  } else if (selectedRow.sourceTypeCode === 'S001SERVICE') {
    data = {
      siteId: uc.siteId,
      serviceOrderId: selectedRow.relatedSvOrderId,
    };
    useMultiTags().openTag({
      name: 'svm0102_01',
    });
    useMultiTags().getTag({ name: 'svm0102_01' }).meta.title = t('menu.SVM0102_01', data);
    router.push({ name: 'svm0102_01', data });
  }
};
const orderAmtSumFormat = (row) => {
  let s = 0;
  if (row.length !== 0) {
    for (const item of row) {
      s = s + item.orderAmt;
    }
  }
  return Number(s).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
        <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportDisabledFlag" @click="viy2Button_5heur2Click">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_4GGP3o" ref="viy2Button_4GGP3o" icon-position="left" type="info" @click="viy2Button_4GGP3oClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_dqArc"
      ref="viy2Flex_dqArc"
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
              :label="t('label.orderDate')"
              prop="dateFrom"
              :rules="rules.viy2DateTimePicker_hBG7coRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_hBG7co"
                ref="viy2DateTimePicker_hBG7co"
                v-model="queryFormData.dateFrom"
                :shortcuts="datePickerShortcuts"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <!-- BEGIN CUSTOM DIV CODE -->
            <span>-</span>
            <!-- END CUSTOM DIV CODE -->
            <VueFormItem
              label-width="0"
              prop="dateTo"
              :rules="rules.viy2DateTimePicker_hBG7e2Rules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_hBG7e2"
                ref="viy2DateTimePicker_hBG7e2"
                v-model="queryFormData.dateTo"
                :shortcuts="datePickerShortcuts"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueButton id="viy2Button_hBG7e3" ref="viy2Button_hBG7e3" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hBG7e3Click" />
            <VueButton id="viy2Button_hBG7e4" ref="viy2Button_hBG7e4" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hBG7e4Click" />
            <VueFormItem
              :label="t('label.customer')"
              prop="customer"
            >
              <VueValueList
                :use-common-popover="true"
                id="viy2ValueList_1LaI7g"
                :use-common-popup="true"
                ref="viy2ValueList_1LaI7g"
                aside-size="60%"
                v-model="queryFormData.customer"
                :toggle-popover-on-click="true"
                select-field="desc"
                :close-on-click-modal="true"
                :use-popup="true"
                :clearable="true"
                :popover-width="500"
                width="250px"
                :popover-columns="viy2ValueList_1LaI7gPopoverColumns"
                :popover-query-method="viy2ValueList_1LaI7gPopoverQueryMethod"
                :popup-columns="viy2ValueList_1LaI7gPopupColumns"
                :popup-conditions="viy2ValueList_1LaI7gPopupConditions"
                :popup-query-method="viy2ValueList_1LaI7gPopupQueryMethod"
                @select="viy2ValueList_1LaI7gSelect"
                @clear="viy2ValueList_1LaI7gClear"
                @leave="viy2ValueList_1LaI7gLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_1LaI7s"
                    ref="viy2Row_1LaI7s"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_1LaI7t" ref="viy2Text_1LaI7t" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        {{ t('title.customerRef') }}
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    />
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
            <VueFormItem
              :label="t('label.point')"
              prop="pointId"
            >
              <VueSelect
                id="viy2Select_1rPSyEH"
                ref="viy2Select_1rPSyEH"
                v-model="queryFormData.pointId"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.orderNo')"
              prop="orderNo"
            >
              <VueInput
                id="viy2InputBox_hBG7e5"
                ref="viy2InputBox_hBG7e5"
                v-model="queryFormData.orderNo"
                :clearable="true"
                :style="{ width: '150px' }" :formatter="viy2InputBox_hBG7e5formatter"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.orderStatus')"
              prop="orderStatus"
            >
              <VueSelect
                id="viy2Select_1PZzk4"
                ref="viy2Select_1PZzk4"
                v-model="queryFormData.orderStatus"
                :style="{ width: '200px' }"
                :clearable="true"
                :options="orderStatusDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_dr4gT"
        ref="viy2Flex_dr4gT"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="98%" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
            :edit-render="gridCustomerCdEditRender"
            field="customerCd"
            :sortable="true"
            show-overflow="tooltip"
            :title="t('label.customerCode')"
            width="133px"
          />
          <VueInputColumn
            :edit-render="gridCustomerNmEditRender"
            field="customerNm"
            :sortable="true"
            show-overflow="tooltip"
            :title="t('label.customerName')"
            min-width="150px"
          />
          <VueInputColumn
            :edit-render="gridPointCdEditRender"
            field="pointCd"
            :sortable="true"
            :title="t('label.point')"
            width="100px"
          />
          <VueInputColumn
            :edit-render="gridSourceTypeEditRender"
            field="sourceType"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.orderSourceType')"
            width="155px"
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
            width="120px"
          />
          <VueNumberColumn
            :edit-render="gridAllocatedLinesEditRender"
            field="allocatedLines"
            footer-align="right"
            align="right"
            :sortable="true"
            :title="t('label.allocatedLines')"
            width="140px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridOrderLinesEditRender"
            field="orderLines"
            footer-align="right"
            align="right"
            :aggregate-label="t('label.total')"
            :sortable="true"
            :title="t('label.orderLines')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridOrderAmtFormatter"
            :edit-render="gridOrderAmtEditRender"
            field="orderAmt"
            footer-align="right"
            align="right"
            :aggregate="orderAmtSumFormat"
            :sortable="true"
            :title="t('label.orderAmount')"
            width="170px"
            header-align="center"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="40px"
            :buttons="gridViy2TableButtonColumn_ug955Buttons"
          />
        </VueTable>
      </VueFlex>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        class="except-height-css"
      >
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
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
            :total="total || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
