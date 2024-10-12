<script setup>
import { IconCaretRight, IconCloseBold, IconDocumentCopy, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import {
  customer_column, customer_pop_condition, customer_pop_query_method, customer_query_method,
  dealer_column, dealer_pop_condition, dealer_pop_query_method, dealer_query_method,
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const currentDate = new Date();
// 获取当前月份的第一天
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDay = new Date(nextMonth - 1);
defineOptions({
  name: 'sdm0301_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_ab3PDC = ref();
const viy2Button_3IoH3O = ref();
const viy2Button_ab3W9O = ref();
const viy2Button_5FbWKc = ref();
const queryForm = ref();
const viy2Row_6IAt6a = ref();
const viy2ValueList_2whl8W = ref();
const viy2Row_2whl8Y = ref();
const viy2Button_2whl9a = ref();
const viy2DateTimePicker_pcNpta = ref();
const viy2InputBox_pcNpuQ = ref();
const viy2InputBox_3IqGs6 = ref();
const viy2Select_pcNpuT = ref();
const viy2Select_pcNpuZ = ref();
const viy2ValueList_pcNpwH = ref();
const viy2Row_pcNpwG = ref();
const viy2Button_pcNpwL = ref();
const viy2ValueList_pcNpwN = ref();
const viy2Row_pcNpwP = ref();
const viy2Button_pcNpwR = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_tSDiP = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_adwhRn = ref();
const viy2CheckBox_6ocBM5 = ref();
const formData = reactive({
});
const queryFormData = reactive({
  deliveryPoint: 'YT350 Yamaha Town Nha Trang_DO 10', salesmonth: '', orderNo: 'SO2002A000013', frameNo: '', orderStatus: [], salesType: [], dealer: '', customer: '',
});
const rules = reactive({
  viy2ValueList_2whl8WRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_pcNptaRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_2whl8WPopoverQueryMethod = point_query_method;
const viy2ValueList_2whl8WPopupColumns = ref(point_column);
const viy2ValueList_2whl8WPopupQueryMethod = point_pop_query_method;
const viy2Select_pcNpuTOpts = reactive([
  {
    label:
'Proforma',
    value:
'Proforma',
  },
  {
    label:
'Waiting Allocate',
    value:
'Waiting Allocate',
  },
  {
    label:
'Waiting Shipping',
    value:
'Waiting Shipping',
  },
  {
    label:
'Instruction',
    value:
'Instruction',
  },
  {
    label:
'Shipping',
    value:
'Shipping',
  },
  {
    label:
'Cancelled',
    value:
'Cancelled',
  },
  {
    label:
'On Shipping',
    value:
'On Shipping',
  },
]);
const viy2Select_pcNpuZOpts = reactive([
  {
    label:
'Employee Sales Order',
    value:
'Employee Sales Order',
  },
  {
    label:
'Retail Sales Order',
    value:
'Retail Sales Order',
  },
  {
    label:
'Special Order',
    value:
'Special Order',
  },
  {
    label:
'Wholesales Order',
    value:
'Wholesales Order',
  },
]);
const viy2ValueList_pcNpwHPopoverQueryMethod = dealer_query_method;
const viy2ValueList_pcNpwHPopupColumns = ref(dealer_column);
const viy2ValueList_pcNpwHPopupQueryMethod = dealer_pop_query_method;
const viy2ValueList_pcNpwNPopoverQueryMethod = customer_query_method;
const viy2ValueList_pcNpwNPopupColumns = ref(customer_column);
const viy2ValueList_pcNpwNPopupQueryMethod = customer_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_6ocBM5Opts = [
  {
    label:
'Option 1',
    value:
'Option 1',
  },
  {
    label:
'Option 2',
    value:
'Option 2',
  },
  {
    label:
'Option 3',
    value:
'Option 3',
  },
];
const gridViy2TableButtonColumn_odGQQButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocumentCopy,
      title: 'Detail',
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      consumerName: 'Toan Sen',
      orderNo: 'SO2403A000023',
      orderDate: new Date(),
      salesType: 'Wholesales Order',
      check: 'N',
      dealerCd: '2186',
      dealerNm: 'Toan Sen',
      totalQty: 1,
    },
  ],
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
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
}, {
  manual: true,
});
const orderStsDs = orderStsDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm('Are you sure to reset this page?')
    .then(() => {
      const filterFormElement = orderForm.value;
      if (filterFormElement && filterFormElement.resetFields) {
        filterFormElement.resetFields();
      }
    }).catch(() => {
    });
};
const viy2Button_ab3PDCClick = () => {
  debugger;
};
const viy2Button_3IoH3OClick = () => {
  debugger;
};
const viy2Button_ab3W9OClick = () => {
  debugger;
};
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2ValueList_2whl8WSelect = (params) => {
  queryFormData.deliveryPoint = `${params.code} ${params.name}`;
};
const viy2ValueList_2whl8WPopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_2whl8WPopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2ValueList_pcNpwHSelect = (params) => {
  queryFormData.dealer = `${params.code} ${params.name}`;
};
const viy2ValueList_pcNpwHPopoverColumns = computed(() => {
  return dealer_column;
});
const viy2ValueList_pcNpwHPopupConditions = computed(() => {
  return dealer_pop_condition;
});
const viy2ValueList_pcNpwNSelect = (params) => {
  queryFormData.customer = `${params.code} ${params.name}`;
};
const viy2ValueList_pcNpwNPopoverColumns = computed(() => {
  return customer_column;
});
const viy2ValueList_pcNpwNPopupConditions = computed(() => {
  return customer_pop_condition;
});
const gridCopy0_viy2TableTemplateColumn_ocCGPEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridOrderNoEditRender = computed(() => {
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
      valueFormat: 'YYYYMMDD',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridSalesTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCopy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridConsumerNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDealerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDealerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTotalQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
queryFormData.salesmonth = new Date();
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
          Reset
        </VueButton>
        <VueButton id="viy2Button_ab3PDC" ref="viy2Button_ab3PDC" icon-position="left" @click="viy2Button_ab3PDCClick">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_3IoH3O" ref="viy2Button_3IoH3O" icon-position="left" @click="viy2Button_3IoH3OClick">
          New Wholesales Order
        </VueButton>
        <VueButton id="viy2Button_ab3W9O" ref="viy2Button_ab3W9O" icon-position="left" @click="viy2Button_ab3W9OClick">
          New Retail Order
        </VueButton>
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          Retrieve
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      class="margin-top-div0 except-height-css"
      :model="queryFormData"
    >
      <VueRow
        id="viy2Row_6IAt6a"
        ref="viy2Row_6IAt6a"
        :gutter="15"
      >
        <VueCol
          item-key="item"
          align="left"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Delivery Point"
            label-width="110px"
            prop="deliveryPoint"
            :rules="rules.viy2ValueList_2whl8WRules"
          >
            <VueValueList
              id="viy2ValueList_2whl8W"
              ref="viy2ValueList_2whl8W"
              :use-common-popover="true"
              v-model="queryFormData.deliveryPoint"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              width="250px"
              :popover-columns="viy2ValueList_2whl8WPopoverColumns"
              :popover-query-method="viy2ValueList_2whl8WPopoverQueryMethod"
              :popup-columns="viy2ValueList_2whl8WPopupColumns"
              :popup-conditions="viy2ValueList_2whl8WPopupConditions"
              :popup-query-method="viy2ValueList_2whl8WPopupQueryMethod"
              @select="viy2ValueList_2whl8WSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_2whl8Y"
                  ref="viy2Row_2whl8Y"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_2whl99" ref="viy2Text_2whl99" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Point
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 17 }"
                  >
                    <VueButton id="viy2Button_2whl9a" ref="viy2Button_2whl9a" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Sales Month"
            label-width="100px"
            prop="salesmonth"
            :rules="rules.viy2DateTimePicker_pcNptaRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_pcNpta"
              ref="viy2DateTimePicker_pcNpta"
              v-model="queryFormData.salesmonth"
              type="month"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ym"
            />
          </VueFormItem>
          <VueFormItem
            label="Order No."
            prop="orderNo"
          >
            <VueInput
              id="viy2InputBox_pcNpuQ"
              ref="viy2InputBox_pcNpuQ"
              v-model="queryFormData.orderNo"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Frame No."
            prop="frameNo"
          >
            <VueInput
              id="viy2InputBox_3IqGs6"
              ref="viy2InputBox_3IqGs6"
              v-model="queryFormData.frameNo"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Order Status"
            label-width="110px"
            prop="orderStatus"
          >
            <VueSelect
              id="viy2Select_pcNpuT"
              ref="viy2Select_pcNpuT"
              v-model="queryFormData.orderStatus"
              :style="{ width: '200px' }"
              :collapse-tags="true"
              :filterable="true"
              :clearable="true"
              :multiple="true"
              :collapse-tags-tooltip="true"
              :options="viy2Select_pcNpuTOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Sales Type"
            prop="salesType"
          >
            <VueSelect
              id="viy2Select_pcNpuZ"
              ref="viy2Select_pcNpuZ"
              v-model="queryFormData.salesType"
              :style="{ width: '200px' }"
              :collapse-tags="true"
              :filterable="true"
              :clearable="true"
              :multiple="true"
              :collapse-tags-tooltip="true"
              :options="viy2Select_pcNpuZOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Dealer"
            prop="dealer"
          >
            <VueValueList
              id="viy2ValueList_pcNpwH"
              ref="viy2ValueList_pcNpwH"
              v-model="queryFormData.dealer"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              width="200px"
              :popover-columns="viy2ValueList_pcNpwHPopoverColumns"
              :popover-query-method="viy2ValueList_pcNpwHPopoverQueryMethod"
              :popup-columns="viy2ValueList_pcNpwHPopupColumns"
              :popup-conditions="viy2ValueList_pcNpwHPopupConditions"
              :popup-query-method="viy2ValueList_pcNpwHPopupQueryMethod"
              @select="viy2ValueList_pcNpwHSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_pcNpwG"
                  ref="viy2Row_pcNpwG"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_pcNpwK" ref="viy2Text_pcNpwK" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Point
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 17 }"
                  >
                    <VueButton id="viy2Button_pcNpwL" ref="viy2Button_pcNpwL" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Consumer"
            prop="customer"
          >
            <VueValueList
              id="viy2ValueList_pcNpwN"
              ref="viy2ValueList_pcNpwN"
              v-model="queryFormData.customer"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              width="200px"
              :popover-columns="viy2ValueList_pcNpwNPopoverColumns"
              :popover-query-method="viy2ValueList_pcNpwNPopoverQueryMethod"
              :popup-columns="viy2ValueList_pcNpwNPopupColumns"
              :popup-conditions="viy2ValueList_pcNpwNPopupConditions"
              :popup-query-method="viy2ValueList_pcNpwNPopupQueryMethod"
              @select="viy2ValueList_pcNpwNSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_pcNpwP"
                  ref="viy2Row_pcNpwP"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_pcNpwQ" ref="viy2Text_pcNpwQ" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Model
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 17 }"
                  >
                    <VueButton id="viy2Button_pcNpwR" ref="viy2Button_pcNpwR" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            id="viy2Row_tSDiP"
            ref="viy2Row_tSDiP"
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
      <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
        <VueTemplateColumn
          :edit-render="gridCopy0_viy2TableTemplateColumn_ocCGPEditRender"
          align="center"
          width="40px"
        >
          <template #default="scope">
            <VueButton id="viy2Button_adwhRn" ref="viy2Button_adwhRn" icon-position="left" type="text" class="icon-green-triangle" :icon="IconCaretRight" />
          </template>
        </VueTemplateColumn>
        <VueInputColumn
          :edit-render="gridOrderNoEditRender"
          field="orderNo"
          show-overflow="tooltip"
          title="Order No."
          width="120px"
        />
        <VueDateTimeColumn
          :edit-render="gridOrderDateEditRender"
          field="orderDate"
          align="center"
          title="Order Date"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridSalesTypeEditRender"
          field="salesType"
          show-overflow="tooltip"
          title="Sales Type"
          width="150px"
        />
        <VueTemplateColumn
          :edit-render="gridCopy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          title="PDI Check"
          width="100px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_6ocBM5"
              ref="viy2CheckBox_6ocBM5"
              v-model="scope.row.check"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueInputColumn
          :edit-render="gridConsumerNameEditRender"
          field="consumerName"
          show-overflow="tooltip"
          title="Consumer Name"
          min-width="150px"
        />
        <VueInputColumn
          :edit-render="gridDealerCdEditRender"
          field="dealerCd"
          show-overflow="tooltip"
          title="Dealer Code"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridDealerNmEditRender"
          field="dealerNm"
          show-overflow="tooltip"
          aggregate-label="Total"
          title="Dealer Name"
          min-width="150px"
        />
        <VueNumberColumn
          :edit-render="gridTotalQtyEditRender"
          field="totalQty"
          align="right"
          aggregate="sum"
          title="Total Qty"
          width="130px"
        />
        <VueButtonColumn
          fixed="right"
          width="40px"
          :buttons="gridViy2TableButtonColumn_odGQQButtons"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
