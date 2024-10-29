<script setup>
import { IconArrowLeftBold, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { customer_column, customer_query_method } from '@/settings/valuelistSetting.js';
import { formatPartNo, formatQty, formatUpper } from '@/pj-commonutils.js';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const exportDisabledFlag = ref(true);
const uc = useUser().userInfo;
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const cancelDateValidator = (rule, value, callback) => {
  if (queryFormData.dateFrom > queryFormData.dateTo) {
    callback(new Error(t('error.dateEqAfter', [t('label.cancelDateTo'), t('label.cancelDateFrom')])));
  }
  callback();
};
const orderDateValidator = (rule, value, callback) => {
  if (queryFormData.orderDateFrom > queryFormData.orderDateTo) {
    callback(new Error(t('error.dateEqAfter', [t('label.orderDateTo'), t('label.orderDateFrom')])));
  }
  callback();
};
const total = ref();
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
const lastDay = dayjs().format('YYYYMMDD');
const nowPartsCode = ref();
defineOptions({
  name: 'spq0207_01',
});
const form = ref();
const viy2Flex_oK10S = ref();
const queryForm = ref();
const viy2Panel_2UFK5 = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_lOY8w = ref();
const viy2ValueList_1GTRdhc = ref();
const viy2DateTimePicker_hFmWWx = ref();
const viy2DateTimePicker_hFmWWz = ref();
const viy2Button_hFmWWA = ref();
const viy2Button_hFmWWB = ref();
const viy2Select_s6VWy = ref();
const viy2InputBox_hFmWWC = ref();
const viy2Row_iRIdb = ref();
const viy2DateTimePicker_hFmWUQ = ref();
const viy2DateTimePicker_hFmWUS = ref();
const viy2Button_hFmWUT = ref();
const viy2Button_hFmWWw = ref();
const viy2ValueList_sloqw2 = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_oKqG6 = ref();
const viy2Panel_2UFK51 = ref();
const viy2Button_1GMy1q = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  customer: '', dateFrom: '', dateTo: '', datafieldviy2Select_s6VWy: '', orderNo: '', orderDateFrom: '', orderDateTo: '', parts: '', pointId: '',
});
const rules = reactive({
  viy2DateTimePicker_hFmWWxRules: [
    {
      required: true,
      message: t('errors.required', [t('label.cancelDate')]),
    },
    {
      validator: cancelDateValidator,
    },
  ],
  viy2DateTimePicker_hFmWWzRules: [
    {
      required: true,
      message: t('errors.required', [t('label.cancelDate')]),
    },
    {
      validator: cancelDateValidator,
    },
  ],
  viy2DateTimePicker_hFmWUQRules: [
    {
      validator: orderDateValidator,
    },
  ],
  viy2DateTimePicker_hFmWUSRules: [
    {
      validator: orderDateValidator,
    },
  ],
});
const viy2ValueList_1GTRdhcPopoverQueryMethod = customer_query_method;
const viy2Select_s6VWyOpts = reactive([
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
]);
const viy2InputBox_hFmWWCformatter = value => (formatUpper(value));
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  url: '/parts/spq0207/findPartsCancelHisList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
}, {
  onSuccess: (data, params) => {
    exportDisabledFlag.value = gridDs.value.content.length == 0;
    total.value = data.totalElements;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
});
const brandDs = brandDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const partsAutoFill2DsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  data: () => {
    return {
      partsCd: nowPartsCode.value,
      pageSize: 1,
      currentPage: 1,
    };
  },
}, {
  manual: true,
});
const partsAutoFill2Ds = partsAutoFill2DsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
});
const largeGroupDs = largeGroupDsApi.data;
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
const viy2Button_hFmWWAClick = () => {
  queryFormData.dateTo = dayjs(queryFormData.dateFrom, 'YYYYMMDD').subtract(1, 'month').endOf('month').format('YYYYMMDD');
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom, 'YYYYMMDD').subtract(1, 'month').startOf('month').format('YYYYMMDD');
};
const viy2Button_hFmWWBClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2Button_hFmWUTClick = () => {
  queryFormData.orderDateTo = dayjs(queryFormData.orderDateFrom, 'YYYYMMDD').subtract(1, 'month').endOf('month').format('YYYYMMDD');
  queryFormData.orderDateFrom = dayjs(queryFormData.orderDateFrom, 'YYYYMMDD').subtract(1, 'month').startOf('month').format('YYYYMMDD');
};
const viy2Button_hFmWWwClick = () => {
  queryFormData.orderDateFrom = firstDay;
  queryFormData.orderDateTo = lastDay;
};
const viy2Button_1GMy1qClick = () => {
  exportBtn();
};
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
const gridCancelDateEditRender = computed(() => {
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
const gridCancelTypeEditRender = computed(() => {
  return {
    enabled: false,
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
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridPartsCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOrderQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCancelQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridCancelQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCancelPicEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const paginationCurrentChange = () => {
  if (total.value === 0) {
    return;
  }
  gridDsApi.runAsync();
};
onMounted(() => {
// queryFormData.pointId = uc.defaultPointId;
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
  // queryFormData.pointId = uc.defaultPointId;
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
  total.value = 0;
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.content = [];
  exportDisabledFlag.value = true;
  total.value = 0;
};
const exportBtn = () => {
  useApi(
    {
      url: '/parts/spq0207/exportPartsCancelHistory.json',
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
        link.setAttribute('download', 'Parts Cancel History Inquiry.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  );
};
// 配件输入后Leave
const onLeavePartsCode = async (code) => {
  nowPartsCode.value = code;
  await getPartsData();
};
const getPartsData = async () => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  queryFormData.parts = partsData.desc;
  queryFormData.partsId = partsData.id;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_oK10S"
      ref="viy2Flex_oK10S"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_2UFK5" ref="viy2Panel_2UFK5" title="検索条件">
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
                label="キャンセル日"
                prop="dateFrom"
                :rules="rules.viy2DateTimePicker_hFmWWxRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_hFmWWx"
                  ref="viy2DateTimePicker_hFmWWx"
                  v-model="queryFormData.dateFrom"
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
                :rules="rules.viy2DateTimePicker_hFmWWzRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_hFmWWz"
                  ref="viy2DateTimePicker_hFmWWz"
                  v-model="queryFormData.dateTo"
                  type="date"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <VueButton id="viy2Button_hFmWWA" ref="viy2Button_hFmWWA" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hFmWWAClick" />
              <VueButton id="viy2Button_hFmWWB" ref="viy2Button_hFmWWB" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hFmWWBClick" />
              <VueFormItem
                label="キャンセル種別"
                prop="datafieldviy2Select_s6VWy"
              >
                <VueSelect
                  id="viy2Select_s6VWy"
                  ref="viy2Select_s6VWy"
                  v-model="queryFormData.datafieldviy2Select_s6VWy"
                  :style="{ width: '200px' }"
                  :options="viy2Select_s6VWyOpts"
                />
              </VueFormItem>
              <VueFormItem
                label="受注番号"
                prop="orderNo"
              >
                <VueInput
                  id="viy2InputBox_hFmWWC"
                  ref="viy2InputBox_hFmWWC"
                  v-model="queryFormData.orderNo"
                  :style="{ width: '150px' }" :formatter="viy2InputBox_hFmWWCformatter"
                />
              </VueFormItem>
              <VueRow
                id="viy2Row_iRIdb"
                ref="viy2Row_iRIdb"
              >
                <VueCol
                  item-key="item"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueFormItem
                    label="受注日"
                    prop="orderDateFrom"
                    :rules="rules.viy2DateTimePicker_hFmWUQRules"
                  >
                    <VueDatePicker
                      id="viy2DateTimePicker_hFmWUQ"
                      ref="viy2DateTimePicker_hFmWUQ"
                      v-model="queryFormData.orderDateFrom"
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
                    prop="orderDateTo"
                    :rules="rules.viy2DateTimePicker_hFmWUSRules"
                  >
                    <VueDatePicker
                      id="viy2DateTimePicker_hFmWUS"
                      ref="viy2DateTimePicker_hFmWUS"
                      v-model="queryFormData.orderDateTo"
                      type="date"
                      :style="{ width: '130px' }"
                      :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                      :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                    />
                  </VueFormItem>
                  <VueButton id="viy2Button_hFmWUT" ref="viy2Button_hFmWUT" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hFmWUTClick" />
                  <VueButton id="viy2Button_hFmWWw" ref="viy2Button_hFmWWw" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hFmWWwClick" />
                </VueCol>
              </VueRow>
              <VueFormItem
                label="部品"
                prop="parts"
              >
                <VueValueList
                  id="viy2ValueList_sloqw2"
                  ref="viy2ValueList_sloqw2"
                  v-model="queryFormData.parts"
                  :use-popover="true"
                  width="300px"
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
                  :clearable="true"
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
        id="viy2Flex_oKqG6"
        ref="viy2Flex_oKqG6"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2UFK51" ref="viy2Panel_2UFK51" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_1GMy1q" ref="viy2Button_1GMy1q" icon-position="left" :disabled="exportDisabledFlag" @click="viy2Button_1GMy1qClick">
                ファイル出力
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            <VueDateTimeColumn
              :edit-render="gridCancelDateEditRender"
              field="cancelDate"
              align="center"
              :sortable="true"
              title="キャンセル日時"
              width="120px"
            />
            <VueInputColumn
              :edit-render="gridCancelTypeEditRender"
              field="cancelType"
              show-overflow="tooltip"
              :sortable="true"
              title="キャンセル種別"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              show-overflow="tooltip"
              :sortable="true"
              title="受注番号"
              width="120px"
            />
            <VueDateTimeColumn
              :edit-render="gridOrderDateEditRender"
              field="orderDate"
              align="center"
              :sortable="true"
              title="受注日"
              width="130px"
            />
            <VueInputColumn
              :formatter="gridPartsCdFormatter"
              :edit-render="gridPartsCdEditRender"
              field="partsCd"
              :sortable="true"
              title="部品番号"
              width="120px"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              :sortable="true"
              title="部品名称"
              min-width="250px"
            />
            <VueNumberColumn
              :formatter="gridOrderQtyFormatter"
              :edit-render="gridOrderQtyEditRender"
              align="right"
              field="orderQty"
              :sortable="true"
              width="135px"
              title="受注数"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridCancelQtyFormatter"
              :edit-render="gridCancelQtyEditRender"
              align="right"
              field="cancelQty"
              :sortable="true"
              width="135px"
              title="キャンセル数"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridCancelPicEditRender"
              field="cancelPic"
              show-overflow="tooltip"
              :sortable="true"
              title="キャンセル担当者"
              width="150px"
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
            :total="total || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
