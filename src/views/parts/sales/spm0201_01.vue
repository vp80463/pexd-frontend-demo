<script setup>
import { IconArrowLeftBold, IconCaretRight, IconCheck, IconClose, IconEdit, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
import { datePickerShortcuts } from '@/pj-commonutils.js';
import { customer_column, customer_query_method } from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const total = ref();
const uc = useUser().userInfo;
const router = useRouter();
const unfinishedFlag = ref(false);
const validataFlag = ref(true);
const exportFlag = ref(true);
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
defineOptions({
  name: 'spm0201_01',
});
const form = ref();
const viy2Flex_THbIm = ref();
const queryForm = ref();
const viy2Panel_12ZGrd = ref();
const viy2Button_3B5wPc2 = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_aunV7q = ref();
const viy2DateTimePicker_1GTRddE = ref();
const viy2DateTimePicker_1GTRdfi = ref();
const viy2Button_1GTRdfg = ref();
const viy2Button_1GTRdfk = ref();
const viy2CheckBox_13l2QB = ref();
const viy2ValueList_1GTRdhc = ref();
const viy2InputBox_1GTRdfl = ref();
const viy2Select_1GTRdfo = ref();
const viy2Select_aunV7r = ref();
const viy2Flex_THsL1 = ref();
const viy2Panel_136NeG = ref();
const viy2Button_4oCZZW = ref();
const grid = ref();
const viy2Row_8Z2zZ1 = ref();
const viy2Button_8Z2zZ5 = ref();
const viy2Button_8Z2zZ6 = ref();
const viy2Button_8Z2zZ7 = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const filterpopover = ref();
const filterForm = ref();
const viy2Row_HNs8v = ref();
const viy2ValueList_1C7zl2 = ref();
const viy2CheckBox_eNArs = ref();
const viy2DateTimePicker_o8KNG = ref();
const viy2DateTimePicker_3TtW0a = ref();
const viy2Button_6ayce = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', orderType: ['通常'], customer: '', orderNo: '', status: ['1', '2', '3'], deliveryPointId: '',
});
const filterFormData = reactive({
  consumer: '', exception: [], datafieldviy2DateTimePicker_o8KNG: '', datafieldviy2DateTimePicker_o8KNG: '',
});
const rules = reactive({
  viy2DateTimePicker_1GTRddERules: [
    {
      required: true,
      message: t('errors.required', [t('label.date')]),
      enabled: validataFlag,
    },
  ],
  viy2DateTimePicker_1GTRdfiRules: [
    {
      required: true,
      message: t('errors.required', [t('label.date')]),
      enabled: validataFlag,
    },
  ],
});
const viy2CheckBox_eNArsOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2CheckBox_13l2QBOpts = [
  {
    label:
'通常',
    value:
'通常',
  },
  {
    label:
'社内',
    value:
'社内',
  },
  {
    label:
'廃却',
    value:
'廃却',
  },
];
const viy2ValueList_1GTRdhcPopoverQueryMethod = customer_query_method;
const viy2Select_1GTRdfoOpts = reactive([
  {
    codeData1:
'引当待ち',
    codeDbid:
'1',
  },
  {
    codeData1:
'ピッキング待ち',
    codeDbid:
'2',
  },
  {
    codeData1:
'出荷待ち',
    codeDbid:
'3',
  },
  {
    codeData1:
'出荷済み',
    codeDbid:
'4',
  },
  {
    codeData1:
'取消',
    codeDbid:
'5',
  },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_odGQQButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onRowDetail,
      title: 'Detail',
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  method: 'post',
  localData: [
    { orderDate: '20241001', orderType: '通常', consumer: '1', consumerNm: 'テスト販売店', orderNo: 'SO20240001', orderStatus: '引当待ち', orderAmount: 10000, allOutStock: 'しない', outDate: '20241002', memo: 'メモ', orderInputType: '1' },
    { orderDate: '20241002', orderType: '通常', consumer: '2', consumerNm: 'テスト販売店2', orderNo: 'SO20240002', orderStatus: 'ピッキング待ち', orderAmount: 10000, allOutStock: 'しない', outDate: '20241003', memo: 'メモ', orderInputType: '2' },
  ],
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    // if(data.content.length>0){
    exportFlag.value = false;
    // }else{
    // exportFlag.value=true;
    // }
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
  manual: true,
});
const orderStatusDs = orderStatusDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const viy2Button_3B5wPc2Click = () => {
  useMultiTags().openTag({
    name: 'spm0201_03', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0201_03' }).meta.title = t('受注登録');
  // router导航到页面并传递参数
  router.push({ name: 'spm0201_03' });
};
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid) => {
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
const viy2Button_1GTRdfgClick = () => {
  if (queryFormData.dateFrom == null || queryFormData.dateFrom == '') {
    queryFormData.dateFrom = firstDay;
  }
  if (queryFormData.dateTo == null || queryFormData.dateTo == '') {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
};
const viy2Button_1GTRdfkClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_1GTRdhcSelect = (params) => {
  queryFormData.customerId = params.id;
};
const viy2ValueList_1GTRdhcClear = () => {
  queryFormData.customerId = '';
};
const viy2ValueList_1GTRdhcLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.customerId = '';
  }
};
const viy2ValueList_1GTRdhcPopoverColumns = computed(() => {
  return customer_column;
});
const viy2Button_4oCZZWClick = () => {
  onExport();
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  const query = { salesOrderId: row.salesOrderId };
  useMultiTags().openTag({
    name: 'spm0201_03', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0201_03' }).meta.title = t('title.fastSalesEntry_03');
  // router导航到页面并传递参数
  router.push({ name: 'spm0201_03', data: query });
};
const gridOrderStatusNmEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
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
const gridOrderTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridConsumerEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridConsumerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderAmountEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllOutStockEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOutDateEditRender = computed(() => {
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
const gridMemoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderInputTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const paginationCurrentChange = (currentPage) => {
  if (total.value === 0) {
    return;
  }
  gridDsApi.runAsync();
};
const viy2ValueList_1C7zl2Select = (value, type) => {
  filterForm.consumer = value.value;
};
const viy2Button_6ayceClick = () => {
  const filterFormElement = filterForm.value;
  if (filterFormElement && filterFormElement.resetFields) {
    filterFormElement.resetFields();
  }
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
  let name = 'spm0201_03';
  let title = '受注登録';
  if (row.orderInputType === '2') {
    name = 'spm0201_02';
    title = '来店客受注登録';
  }
  useMultiTags().openTag({
    name, // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name }).meta.title = t(title);
  // router导航到页面并传递参数
  router.push({ name, data: query });
};
const getPointLabel = (pointId) => {
  const item = find(pointDs.value, { id: pointId });
  return item ? item.desc : null;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_THbIm"
      ref="viy2Flex_THbIm"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_12ZGrd" ref="viy2Panel_12ZGrd" title="検索条件" height="auto" collapse-icon-position="left">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_3B5wPc2" ref="viy2Button_3B5wPc2" icon-position="left" @click="viy2Button_3B5wPc2Click">
                受注登録
              </VueButton>
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" class="fixed-button" @click="viy2Button_5FbWKcClick">
                検索
              </VueButton>
              <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_aunV7q"
            ref="viy2Row_aunV7q"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              style="height:auto;"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="受注日"
                prop="dateFrom"
                :rules="rules.viy2DateTimePicker_1GTRddERules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1GTRddE"
                  ref="viy2DateTimePicker_1GTRddE"
                  v-model="queryFormData.dateFrom"
                  :shortcuts="datePickerShortcuts"
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
                :rules="rules.viy2DateTimePicker_1GTRdfiRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1GTRdfi"
                  ref="viy2DateTimePicker_1GTRdfi"
                  v-model="queryFormData.dateTo"
                  :shortcuts="datePickerShortcuts"
                  type="date"
                  :style="{ width: '130px' }"
                  format="YYYY/MM/DD"
                  value-format="YYYYMMDD"
                />
              </VueFormItem>
              <VueButton id="viy2Button_1GTRdfg" ref="viy2Button_1GTRdfg" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1GTRdfgClick" />
              <VueButton id="viy2Button_1GTRdfk" ref="viy2Button_1GTRdfk" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_1GTRdfkClick" />
              <VueFormItem
                label="受注種類"
                prop="orderType"
                size="default"
              >
                <VueCheckboxGroup
                  id="viy2CheckBox_13l2QB"
                  ref="viy2CheckBox_13l2QB"
                  v-model="queryFormData.orderType"
                  size="default"
                  split-size="default"
                >
                  <VueCheckboxButton
                    v-for="option in viy2CheckBox_13l2QBOpts"
                    :key="option.value"
                    :label="option.value"
                    :name="option.name"
                    :disabled="option.disabled"
                  >
                    {{ option.label }}
                  </VueCheckboxButton>
                </VueCheckboxGroup>
              </VueFormItem>
              <VueFormItem
                label="受注先"
                prop="customer"
              >
                <VueValueList
                  id="viy2ValueList_1GTRdhc"
                  ref="viy2ValueList_1GTRdhc"
                  :popover-component="valulistWin"
                  v-model="queryFormData.customer"
                  :use-common-popover="true"
                  :toggle-popover-on-click="true"
                  select-field="desc"
                  :use-popover="true"
                  :popover-width="500"
                  :use-popup="false"
                  width="250px"
                  :popover-columns="viy2ValueList_1GTRdhcPopoverColumns"
                  :popover-query-method="viy2ValueList_1GTRdhcPopoverQueryMethod"
                  @select="viy2ValueList_1GTRdhcSelect"
                  @clear="viy2ValueList_1GTRdhcClear"
                  @leave="viy2ValueList_1GTRdhcLeave"
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
                label="受注状態"
                prop="status"
              >
                <VueSelect
                  id="viy2Select_1GTRdfo"
                  ref="viy2Select_1GTRdfo"
                  v-model="queryFormData.status"
                  :style="{ width: '220px' }"
                  :collapse-tags="true"
                  :clearable="true"
                  :multiple="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :options="viy2Select_1GTRdfoOpts"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                v-show="false"
                label="出荷倉庫"
                prop="deliveryPointId"
              >
                <VueSelect
                  id="viy2Select_aunV7r"
                  ref="viy2Select_aunV7r"
                  v-model="queryFormData.deliveryPointId"
                  :style="{ width: '250px' }"
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
        id="viy2Flex_THsL1"
        ref="viy2Flex_THsL1"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_136NeG" ref="viy2Panel_136NeG" title="明細情報" collapse-icon-position="left" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_4oCZZW" ref="viy2Button_4oCZZW" :disabled="exportFlag" @click="viy2Button_4oCZZWClick">
                ファイル出力
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
            <VueRow
              id="viy2Row_8Z2zZ1"
              ref="viy2Row_8Z2zZ1"
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
            <VueTemplateColumn
              v-if="false"
              :edit-render="gridOrderStatusNmEditRender"
              align="center"
              :sortable="true"
              field="orderStatusNm"
              width="55px"
            >
              <template #default="scope">
                <VueButton v-show="scope.row.orderStatus != 'S015SPCANCELLED' && scope.row.orderStatus != 'S015SPSHIPMENTED'" id="viy2Button_8Z2zZ5" ref="viy2Button_8Z2zZ5" title="Waiting Allocate" icon-position="left" type="text" class="icon-green-triangle" :icon="IconCaretRight" />
                <VueButton v-show="scope.row.orderStatus === 'S015SPSHIPMENTED'" id="viy2Button_8Z2zZ6" ref="viy2Button_8Z2zZ6" title="Shipped" icon-position="left" type="text" class="icon-green-triangle" :icon="IconCheck" />
                <VueButton v-show="scope.row.orderStatus === 'S015SPCANCELLED'" id="viy2Button_8Z2zZ7" ref="viy2Button_8Z2zZ7" title="Cancelled" icon-position="left" type="text" class="icon-green-triangle" :icon="IconClose" />
              </template>
            </VueTemplateColumn>
            <VueDateTimeColumn
              :edit-render="gridOrderDateEditRender"
              field="orderDate"
              align="center"
              :sortable="true"
              title="受注日"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridOrderTypeEditRender"
              field="orderType"
              :sortable="true"
              title="受注種類"
              width="140px"
            />
            <VueInputColumn
              :edit-render="gridConsumerEditRender"
              field="consumer"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先"
              width="110px"
            />
            <VueInputColumn
              :edit-render="gridConsumerNmEditRender"
              field="consumerNm"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先名称"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="受注番号"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridOrderStatusEditRender"
              field="orderStatus"
              :sortable="true"
              title="受注状態"
              width="140px"
            />
            <VueInputColumn
              :edit-render="gridOrderAmountEditRender"
              field="orderAmount"
              :sortable="true"
              title="受注金額"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridAllOutStockEditRender"
              field="allOutStock"
              :sortable="true"
              title="まとめ出荷"
              width="140px"
            />
            <VueDateTimeColumn
              :edit-render="gridOutDateEditRender"
              field="outDate"
              align="center"
              :sortable="true"
              title="出庫指示日"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridMemoEditRender"
              field="memo"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="コメント"
              width="150px"
            />
            <VueInputColumn
              v-if="false"
              :edit-render="gridOrderInputTypeEditRender"
              field="orderInputType"
              show-overflow="tooltip"
              :sortable="true"
              title="受注入力種類"
              width="150px"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="60px"
              :buttons="gridViy2TableButtonColumn_odGQQButtons"
            />
          </VueTable>
        </VuePanel>
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
            :style="{ 'justify-content': 'right' }"
            :total="total || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
    <VuePopover
      id="filterpopover"
      ref="filterpopover"
      trigger="click"
      title="Filter Condition"
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
              label="Customer"
              prop="consumer"
            >
              <VueValueList
                id="viy2ValueList_1C7zl2"
                ref="viy2ValueList_1C7zl2"
                v-model="filterFormData.consumer"
                :popover-component="valulistWin"
                :popover-teleported="false"
                :use-popover="true"
                :popover-width="500"
                @select="viy2ValueList_1C7zl2Select"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Unfinished Only"
              prop="exception"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_eNArs"
                ref="viy2CheckBox_eNArs"
                v-model="filterFormData.exception"
                split-size="default"
              >
                <VueCheckbox
                  v-for="option in viy2CheckBox_eNArsOpts"
                  :key="option.value"
                  :label="option.value"
                  :name="option.name"
                  :disabled="option.disabled"
                >
                  {{ option.label }}
                </VueCheckbox>
              </VueCheckboxGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 16 }"
          >
            <VueFormItem
              label="Allocate Due Date"
              prop="datafieldviy2DateTimePicker_o8KNG"
            >
              <VueDatePicker
                id="viy2DateTimePicker_o8KNG"
                ref="viy2DateTimePicker_o8KNG"
                v-model="filterFormData.datafieldviy2DateTimePicker_o8KNG"
                :style="{ width: '130px' }"
                format="DD/MM/YYYY"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2PX"
              prop="datafieldviy2DateTimePicker_o8KNG"
            >
              <VueDatePicker
                id="viy2DateTimePicker_3TtW0a"
                ref="viy2DateTimePicker_3TtW0a"
                v-model="filterFormData.datafieldviy2DateTimePicker_o8KNG"
                :style="{ width: '130px' }"
                format="DD/MM/YYYY"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueButton id="viy2Button_6ayce" ref="viy2Button_6ayce" icon-position="left" type="warning" @click="viy2Button_6ayceClick">
              Reset
            </VueButton>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePopover>
  </VueForm>
</template>
