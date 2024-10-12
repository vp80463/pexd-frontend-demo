<script setup>
import { IconArrowDownBold, IconArrowLeftBold, IconCaretRight, IconCloseBold, IconDocumentCopy, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import valulistWin from '/src/views/REF/SAMPLE/modelInfo.vue';
import {
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
  supplier_column, supplier_pop_condition, supplier_pop_query_method, supplier_query_method,
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
  name: 'sdm0106_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5fFfGQ = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2ValueList_12gOt2 = ref();
const viy2Row_82bMgZ = ref();
const viy2Button_82bMhb = ref();
const viy2DateTimePicker_5hElpd = ref();
const viy2DateTimePicker_QQvs2P = ref();
const viy2Button_1T3zL = ref();
const viy2Button_iTB2k = ref();
const viy2ValueList_aiamoq = ref();
const viy2InputBox_aieX5e = ref();
const viy2ValueList_areWLa = ref();
const filterBtn = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_wz76r = ref();
const viy2Button_5fBUfu = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_5ftGqD = ref();
const viy2CheckBox_2EiRy = ref();
const filterpopover = ref();
const filterForm = ref();
const viy2Row_HNs8v = ref();
const viy2ValueList_80BlCs = ref();
const viy2Row_828PQv = ref();
const viy2Button_828PQH = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_82a5bl = ref();
const viy2Button_82a5bx = ref();
const viy2DateTimePicker_2CGOa = ref();
const viy2DateTimePicker_qeZmy = ref();
const viy2Button_2DbsR = ref();
const viy2Button_qkBv4 = ref();
const formData = reactive({
});
const queryFormData = reactive({
  receiptPoint: 'YT350 Yamaha Town Nha Trang_DO 10', dateFrom: '', dateTo: '', status: '', deliveryNoteNo: '', type: '',
});
const filterFormData = reactive({
  supplier: '', fromPoint: '', startDate: '', endDate: '',
});
const rules = reactive({
  viy2ValueList_12gOt2Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_80BlCsPopoverQueryMethod = supplier_query_method;
const viy2ValueList_80BlCsPopupColumns = ref(supplier_column);
const viy2ValueList_80BlCsPopupQueryMethod = supplier_pop_query_method;
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2ValueList_12gOt2PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt2PopupColumns = ref(point_column);
const viy2ValueList_12gOt2PopupQueryMethod = point_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const viy2CheckBox_2EiRyOpts = [
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
      'deliveryNoteNo': 'DO2312A0000010',
      'registrationDate': '20240401',
      'deliveryDate': '20240401',
      'transactionType': 'Purchase Receipt',
      'frameNo': 'RLCUT1326NY133018',
      'Consumer Name': 'Sales Admin',
      'engineNo': 'RLCN1DB10BY000003',
      'plateNo': 'MIN D CU501',
      'supplierCd': '666N',
      'supplierNm': 'Nhong',
      'fromPointCd': '',
      'fromPointNm': '',
      'receiptDate': '20240401',
      'qty': '10',
      'flag1': 'Y',
    },
  ],
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
const viy2Button_5fFfGQClick = () => {
  debugger;
};
const viy2ValueList_12gOt2Select = (params) => {
  queryFormData.receiptPoint = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt2PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt2PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2Button_1T3zLClick = () => {
  const current = queryForm.dateFrom ? queryForm.dateFrom : currentDate;
  // 获取上个月的年份和月份
  let lastMonthYear = current.getFullYear();
  let lastMonth = current.getMonth() - 1;
  if (lastMonth < 0) {
    lastMonth = 11; // 如果是1月，则上个月是12月
    lastMonthYear--; // 年份减一
  }
  queryForm.dateFrom = new Date(lastMonthYear, lastMonth, 1);
  queryForm.dateTo = new Date(lastMonthYear, lastMonth + 1, 0);
};
const viy2Button_iTB2kClick = () => {
  queryForm.dateFrom = firstDay;
  queryForm.dateTo = lastDay;
};
const viy2ValueList_aiamoqSelect = (value, type) => {
  queryFormData.point = `${value.code} ${value.name}`;
};
const viy2ValueList_areWLaSelect = (value, type) => {
  queryFormData.point = `${value.code} ${value.name}`;
};
const viy2Button_5fBUfuClick = () => {
  debugger;
};
const gridCopy1_viy2TableTemplateColumn_ocCGPEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridViy2TableTemplateColumn_2Ecs7EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridDeliveryNoteNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDeliveryDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridTransactionTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSupplierCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSupplierNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFromPointEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReceiptDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2ValueList_80BlCsSelect = (params) => {
  filterFormData.supplier = `${params.code} ${params.name}`;
};
const viy2ValueList_80BlCsPopoverColumns = computed(() => {
  return supplier_column;
});
const viy2ValueList_80BlCsPopupConditions = computed(() => {
  return supplier_pop_condition;
});
const viy2ValueList_12gOt1Select = (params) => {
  filterFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2Button_2DbsRClick = () => {
  const current = queryFormData.startDate ? queryFormData.startDate : currentDate;
  // 获取上个月的年份和月份
  let lastMonthYear = current.getFullYear();
  let lastMonth = current.getMonth() - 1;
  if (lastMonth < 0) {
    lastMonth = 11; // 如果是1月，则上个月是12月
    lastMonthYear--; // 年份减一
  }
  queryFormData.startDate = new Date(lastMonthYear, lastMonth, 1);
  queryFormData.endDate = new Date(lastMonthYear, lastMonth + 1, 0);
};
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
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
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5fFfGQ" ref="viy2Button_5fFfGQ" icon-position="left" type="info" @click="viy2Button_5fFfGQClick">
          Retrieve
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      label-width="110px"
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
            label="Receipt Point"
            prop="receiptPoint"
            :rules="rules.viy2ValueList_12gOt2Rules"
          >
            <VueValueList
              id="viy2ValueList_12gOt2"
              ref="viy2ValueList_12gOt2"
              :style="{ width: '250px' }"
              v-model="queryFormData.receiptPoint"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              :popover-columns="viy2ValueList_12gOt2PopoverColumns"
              :popover-query-method="viy2ValueList_12gOt2PopoverQueryMethod"
              :popup-columns="viy2ValueList_12gOt2PopupColumns"
              :popup-conditions="viy2ValueList_12gOt2PopupConditions"
              :popup-query-method="viy2ValueList_12gOt2PopupQueryMethod"
              @select="viy2ValueList_12gOt2Select"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_82bMgZ"
                  ref="viy2Row_82bMgZ"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_82bMha" ref="viy2Text_82bMha" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_82bMhb" ref="viy2Button_82bMhb" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Delivery Date"
            prop="dateFrom"
          >
            <VueDatePicker
              id="viy2DateTimePicker_5hElpd"
              ref="viy2DateTimePicker_5hElpd"
              v-model="queryFormData.dateFrom"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <!-- BEGIN CUSTOM DIV CODE -->
          <span>-</span>
          <!-- END CUSTOM DIV CODE -->
          <VueFormItem
            label-width="0px"
            prop="dateTo"
          >
            <VueDatePicker
              id="viy2DateTimePicker_QQvs2P"
              ref="viy2DateTimePicker_QQvs2P"
              v-model="queryFormData.dateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_1T3zL" ref="viy2Button_1T3zL" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1T3zLClick" />
          <VueButton id="viy2Button_iTB2k" ref="viy2Button_iTB2k" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_iTB2kClick" />
          <VueFormItem
            label="Receipt Status"
            prop="status"
          >
            <VueValueList
              id="viy2ValueList_aiamoq"
              ref="viy2ValueList_aiamoq"
              v-model="queryFormData.status"
              :style="{ width: '250px' }"
              :popover-component="valulistWin"
              :use-popover="true"
              :popover-width="500"
              @select="viy2ValueList_aiamoqSelect"
            />
          </VueFormItem>
          <VueFormItem
            label="Delivery Note No."
            label-width="125px"
            prop="deliveryNoteNo"
          >
            <VueInput
              id="viy2InputBox_aieX5e"
              ref="viy2InputBox_aieX5e"
              v-model="queryFormData.deliveryNoteNo"
              :clearable="true"
              class="no-border"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Transaction Type"
            label-width="115px"
            prop="type"
          >
            <VueValueList
              id="viy2ValueList_areWLa"
              ref="viy2ValueList_areWLa"
              v-model="queryFormData.type"
              :style="{ width: '250px' }"
              :popover-component="valulistWin"
              :use-popover="true"
              :popover-width="500"
              @select="viy2ValueList_areWLaSelect"
            />
          </VueFormItem>
          <VueButton id="filterBtn" ref="filterBtn" icon-position="left" class="icon-button-small" :icon="IconArrowDownBold">
            More...
          </VueButton>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            id="viy2Row_wz76r"
            ref="viy2Row_wz76r"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_5fBUfu" ref="viy2Button_5fBUfu" icon-position="left" @click="viy2Button_5fBUfuClick">
                Receipt Report
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig">
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
          width="50px"
          min-width="50px"
        />
        <VueTemplateColumn
          :edit-render="gridCopy1_viy2TableTemplateColumn_ocCGPEditRender"
          align="center"
          width="40px"
        >
          <template #default="scope">
            <VueButton id="viy2Button_5ftGqD" ref="viy2Button_5ftGqD" icon-position="left" type="text" class="icon-green-triangle" :icon="IconCaretRight" />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridViy2TableTemplateColumn_2Ecs7EditRender"
          align="center"
          width="100px"
          title="Report"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_2EiRy"
              ref="viy2CheckBox_2EiRy"
              v-model="scope.row.flag1"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueInputColumn
          :edit-render="gridDeliveryNoteNoEditRender"
          field="deliveryNoteNo"
          show-overflow="tooltip"
          title="Delivery Note No."
          min-width="130px"
        />
        <VueDateTimeColumn
          :edit-render="gridDeliveryDateEditRender"
          field="deliveryDate"
          title="Delivery Date"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridTransactionTypeEditRender"
          field="transactionType"
          show-overflow="tooltip"
          title="Transaction Type"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridSupplierCdEditRender"
          field="supplierCd"
          show-overflow="tooltip"
          title="Supplier Code"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridSupplierNmEditRender"
          field="supplierNm"
          show-overflow="tooltip"
          title="Supplier Name"
          min-width="150px"
        />
        <VueInputColumn
          :edit-render="gridFromPointEditRender"
          field="fromPoint"
          show-overflow="tooltip"
          title="From Point"
          width="100px"
        />
        <VueDateTimeColumn
          :edit-render="gridReceiptDateEditRender"
          field="receiptDate"
          title="Receipt Date"
          width="120px"
        />
        <VueNumberColumn
          :edit-render="gridQtyEditRender"
          field="qty"
          aggregate="sum"
          footer-align="right"
          align="right"
          title="Receipt Qty"
          width="130px"
        />
        <VueButtonColumn
          align="center"
          footer-align="right"
          width="40px"
          :buttons="gridViy2TableButtonColumn_odGQQButtons"
        />
      </VueTable>
    </VuePanel>
    <VuePopover
      id="filterpopover"
      ref="filterpopover"
      trigger="click"
      width="700px"
      popper-class="screen-popover"
      :virtual-ref="filterBtn"
    >
      <VueForm
        id="filterForm"
        ref="filterForm"
        label-width="130px"
        :model="filterFormData"
      >
        <VueRow
          id="viy2Row_HNs8v"
          ref="viy2Row_HNs8v"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Supplier"
              prop="supplier"
            >
              <VueValueList
                id="viy2ValueList_80BlCs"
                ref="viy2ValueList_80BlCs"
                :style="{ width: '250px' }"
                v-model="filterFormData.supplier"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
                :popover-width="500"
                :use-popup="true"
                :clearable="true"
                :popover-columns="viy2ValueList_80BlCsPopoverColumns"
                :popover-query-method="viy2ValueList_80BlCsPopoverQueryMethod"
                :popup-columns="viy2ValueList_80BlCsPopupColumns"
                :popup-conditions="viy2ValueList_80BlCsPopupConditions"
                :popup-query-method="viy2ValueList_80BlCsPopupQueryMethod"
                @select="viy2ValueList_80BlCsSelect"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_828PQv"
                    ref="viy2Row_828PQv"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_828PQG" ref="viy2Text_828PQG" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_828PQH" ref="viy2Button_828PQH" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="From Point"
              prop="fromPoint"
            >
              <VueValueList
                id="viy2ValueList_12gOt1"
                ref="viy2ValueList_12gOt1"
                :style="{ width: '250px' }"
                v-model="filterFormData.fromPoint"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
                :popover-width="500"
                :use-popup="true"
                :clearable="true"
                :popover-columns="viy2ValueList_12gOt1PopoverColumns"
                :popover-query-method="viy2ValueList_12gOt1PopoverQueryMethod"
                :popup-columns="viy2ValueList_12gOt1PopupColumns"
                :popup-conditions="viy2ValueList_12gOt1PopupConditions"
                :popup-query-method="viy2ValueList_12gOt1PopupQueryMethod"
                @select="viy2ValueList_12gOt1Select"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_82a5bl"
                    ref="viy2Row_82a5bl"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_82a5bw" ref="viy2Text_82a5bw" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_82a5bx" ref="viy2Button_82a5bx" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="Receipt Date"
              prop="startDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_2CGOa"
                ref="viy2DateTimePicker_2CGOa"
                v-model="filterFormData.startDate"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <!-- BEGIN CUSTOM DIV CODE -->
            <span>-</span>
            <!-- END CUSTOM DIV CODE -->
            <VueFormItem
              label-width="0px"
              prop="endDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_qeZmy"
                ref="viy2DateTimePicker_qeZmy"
                v-model="filterFormData.endDate"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueButton id="viy2Button_2DbsR" ref="viy2Button_2DbsR" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_2DbsRClick" />
            <VueButton id="viy2Button_qkBv4" ref="viy2Button_qkBv4" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" />
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePopover>
  </VueForm>
</template>
