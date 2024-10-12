<script setup>
import { IconArrowLeftBold, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
import { formatPartNo, formatPrice, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const exportDisabledFlag = ref(true);
const uc = useUser().userInfo;
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const orderDateValidator = (rule, value, callback) => {
  if (queryFormData.dateFrom > queryFormData.dateTo) {
    callback(new Error(t('error.dateEqAfter', [t('label.orderDateTo'), t('label.orderDateFrom')])));
  }
  callback();
};
const total = ref();
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
const lastDay = dayjs().format('YYYYMMDD');
const nowPartsCode = ref();
defineOptions({
  name: 'spq0202_01',
});
const form = ref();
const viy2Flex_peoON = ref();
const queryForm = ref();
const viy2Panel_2U2iU = ref();
const viy2Button_4GGP3o = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_hFmWWx = ref();
const viy2DateTimePicker_hFmWWz = ref();
const viy2Button_hFmWWA = ref();
const viy2Button_hFmWWB = ref();
const viy2CheckBox_68qGMM = ref();
const viy2Select_1rPSyEH = ref();
const viy2CodeInput_D18Su = ref();
const viy2InputBox_D1hgX = ref();
const viy2Radio_GLFtE = ref();
const viy2Flex_peAv1 = ref();
const viy2Panel_2U2iU1 = ref();
const viy2Button_5heur2 = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', orderType: ['通常'], status: ['1', '2', '3'], partsCd: '', partsNm: '', datafieldviy2Radio_GLFtE: '通常',
});
const rules = reactive({
  viy2DateTimePicker_hFmWWxRules: [
    {
      required: true,
      message: t('errors.required', [t('label.orderDate')]),
    },
    {
      validator: orderDateValidator,
    },
  ],
  viy2DateTimePicker_hFmWWzRules: [
    {
      required: true,
      message: t('errors.required', [t('label.orderDate')]),
    },
    {
      validator: orderDateValidator,
    },
  ],
});
const viy2CheckBox_68qGMMOpts = [
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
const viy2Select_1rPSyEHOpts = reactive([
  {
    codeData1:
'引当待ち',
    codeDbid:
'1',
  },
  {
    codeData1:
'ピーキング待ち',
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
'出荷完了',
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
const viy2Radio_GLFtEOpts = reactive([
  { value: '通常', label: '通常' },
  { value: 'まとめ出荷警告', label: 'まとめ出荷警告' },
  { value: '価格警告', label: '価格警告' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  url: '/parts/spq0202/findSalesOrderPartsList.json',
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
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
});
const largeGroupDs = largeGroupDsApi.data;
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
const viy2Button_4GGP3oClick = () => {
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
const viy2Button_hFmWWAClick = () => {
  queryFormData.dateTo = dayjs(queryFormData.dateFrom, 'YYYYMMDD').subtract(1, 'month').endOf('month').format('YYYYMMDD');
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom, 'YYYYMMDD').subtract(1, 'month').startOf('month').format('YYYYMMDD');
};
const viy2Button_hFmWWBClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2Button_5heur2Click = () => {
  exportBtn();
};
const gridOrderDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridOrderTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
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
const gridOrderPartsCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridOrderPartsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedPartsCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridAllocatedPartsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRetailPriceFormatter = (row, columnConfig, cellValue) => {
  return formatPrice(row.cellValue);
};
const gridRetailPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSellingPriceFormatter = (row, columnConfig, cellValue) => {
  return formatPrice(row.cellValue);
};
const gridSellingPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPurchasePriceFormatter = (row, columnConfig, cellValue) => {
  return formatPrice(row.cellValue);
};
const gridPurchasePriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
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
const gridAllocatedQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridBoQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridBoQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPickingQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridPickingQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridShippedQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridShippedQtyEditRender = computed(() => {
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
const gridEmployeeEditRender = computed(() => {
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
  queryFormData.allocationOnly = 'N';
  queryFormData.inProcessOnly = 'N';
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
  queryFormData.allocationOnly = 'N';
  queryFormData.inProcessOnly = 'N';
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
  total.value = 0;
  resetTblResults();
};
const resetTblResults = () => {
  total.value = 0;
  paginationCurrentPage.value = 1;
  gridDs.value.content = [];
  exportDisabledFlag.value = true;
};
const exportBtn = () => {
  useApi(
    {
      url: '/parts/spq0202/findSalesOrderPartsExportList.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return queryFormData;
      },
      timeout: 500000,
    },
    {
      onSuccess: (data, params) => {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Sales Order Inquiry(By Parts).xlsx');
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
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData != null) {
    queryFormData.parts = partsData.desc;
    queryFormData.partsId = partsData.id;
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_peoON"
      ref="viy2Flex_peoON"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_2U2iU" ref="viy2Panel_2U2iU" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_4GGP3o" ref="viy2Button_4GGP3o" icon-position="left" type="info" @click="viy2Button_4GGP3oClick">
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
                label="受注日"
                prop="dateFrom"
                :rules="rules.viy2DateTimePicker_hFmWWxRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_hFmWWx"
                  ref="viy2DateTimePicker_hFmWWx"
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
                :rules="rules.viy2DateTimePicker_hFmWWzRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_hFmWWz"
                  ref="viy2DateTimePicker_hFmWWz"
                  v-model="queryFormData.dateTo"
                  type="date"
                  :style="{ width: '130px' }"
                  format="YYYY/MM/DD"
                  value-format="YYYYMMDD"
                />
              </VueFormItem>
              <VueButton id="viy2Button_hFmWWA" ref="viy2Button_hFmWWA" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hFmWWAClick" />
              <VueButton id="viy2Button_hFmWWB" ref="viy2Button_hFmWWB" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hFmWWBClick" />
              <VueFormItem
                label="受注種類"
                prop="orderType"
              >
                <VueCheckboxGroup
                  id="viy2CheckBox_68qGMM"
                  ref="viy2CheckBox_68qGMM"
                  v-model="queryFormData.orderType"
                  split-size="default"
                >
                  <VueCheckboxButton
                    v-for="option in viy2CheckBox_68qGMMOpts"
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
                label="受注状態"
                prop="status"
              >
                <VueSelect
                  id="viy2Select_1rPSyEH"
                  ref="viy2Select_1rPSyEH"
                  v-model="queryFormData.status"
                  :style="{ width: '220px' }"
                  :collapse-tags="true"
                  :clearable="true"
                  :multiple="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :disabled="unfinishedFlag"
                  :options="viy2Select_1rPSyEHOpts"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="部品番号"
                prop="partsCd"
              >
                <VueCodeInput
                  id="viy2CodeInput_D18Su"
                  ref="viy2CodeInput_D18Su"
                  v-model="queryFormData.partsCd"
                  :style="{ width: '150px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="部品名称"
                prop="partsNm"
              >
                <VueInput
                  id="viy2InputBox_D1hgX"
                  ref="viy2InputBox_D1hgX"
                  v-model="queryFormData.partsNm"
                />
              </VueFormItem>
              <VueFormItem
                label="検索種類"
                prop="datafieldviy2Radio_GLFtE"
              >
                <VueRadioGroup
                  id="viy2Radio_GLFtE"
                  ref="viy2Radio_GLFtE"
                  v-model="queryFormData.datafieldviy2Radio_GLFtE"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_GLFtEOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_peAv1"
        ref="viy2Flex_peAv1"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2U2iU1" ref="viy2Panel_2U2iU1" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportDisabledFlag" @click="viy2Button_5heur2Click">
                ファイル出力
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="98%" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
              fixed="left"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No."
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
              :edit-render="gridOrderTypeEditRender"
              field="orderType"
              show-overflow="tooltip"
              :sortable="true"
              title="受注種類"
              width="120px"
            />
            <VueInputColumn
              :edit-render="gridCustomerCdEditRender"
              field="customerCd"
              show-overflow="tooltip"
              :sortable="true"
              footer-align="right"
              title="受注先"
              width="135px"
            />
            <VueInputColumn
              :edit-render="gridCustomerNmEditRender"
              field="customerNm"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先名称"
              width="135px"
            />
            <VueInputColumn
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              show-overflow="tooltip"
              :sortable="true"
              title="受注番号"
              width="120px"
            />
            <VueInputColumn
              :edit-render="gridOrderStatusEditRender"
              field="orderStatus"
              show-overflow="tooltip"
              :sortable="true"
              title="受注状態"
              width="120px"
            />
            <VueInputColumn
              :formatter="gridOrderPartsCdFormatter"
              :edit-render="gridOrderPartsCdEditRender"
              field="orderPartsCd"
              :sortable="true"
              title="部品番号"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridOrderPartsNmEditRender"
              field="orderPartsNm"
              :sortable="true"
              title="部品名称"
              min-width="250px"
            />
            <VueInputColumn
              :formatter="gridAllocatedPartsCdFormatter"
              :edit-render="gridAllocatedPartsCdEditRender"
              field="allocatedPartsCd"
              :sortable="true"
              title="引当部品番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridAllocatedPartsNmEditRender"
              field="allocatedPartsNm"
              :sortable="true"
              title="引当部品名称"
              min-width="250px"
            />
            <VueNumberColumn
              :formatter="gridRetailPriceFormatter"
              :edit-render="gridRetailPriceEditRender"
              field="retailPrice"
              footer-align="right"
              align="right"
              :sortable="true"
              title="希望小売価格"
              width="160px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridSellingPriceFormatter"
              :edit-render="gridSellingPriceEditRender"
              field="sellingPrice"
              footer-align="right"
              align="right"
              aggregate-label="合計:"
              :sortable="true"
              title="仕切単価"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridPurchasePriceFormatter"
              :edit-render="gridPurchasePriceEditRender"
              field="purchasePrice"
              footer-align="right"
              align="right"
              aggregate-label="合計:"
              :sortable="true"
              title="仕入原価"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOrderQtyFormatter"
              :edit-render="gridOrderQtyEditRender"
              field="orderQty"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="受注数"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridAllocatedQtyFormatter"
              :edit-render="gridAllocatedQtyEditRender"
              field="allocatedQty"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="引当数"
              width="185px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridBoQtyFormatter"
              :edit-render="gridBoQtyEditRender"
              field="boQty"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="BO数"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridPickingQtyFormatter"
              :edit-render="gridPickingQtyEditRender"
              field="pickingQty"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="ピッキング数"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridShippedQtyFormatter"
              :edit-render="gridShippedQtyEditRender"
              field="shippedQty"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="出庫数"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridCancelQtyFormatter"
              :edit-render="gridCancelQtyEditRender"
              field="cancelQty"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="キャンセル数"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridEmployeeEditRender"
              field="employee"
              title="担当者"
              width="120px"
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
