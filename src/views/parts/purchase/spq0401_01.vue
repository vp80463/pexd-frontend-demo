<script setup>
import { IconArrowLeftBold, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useRouter } from 'vue-router';
import { useUser } from 'viy-menu';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { formatPartNo } from '@/pj-commonutils.js';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const initializedFlag = ref(true);
const disableButton = ref(true);
const uc = useUser().userInfo;
const purchaseOrderNo = ref();
const purchaseOrderId = ref();
const unfinishFlag = ref(true);
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const nowPartsCode = ref();
const total = ref();
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
defineOptions({
  name: 'spq0401_01',
});
const form = ref();
const viy2Panel_1vtXi = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2Select_oHWwK = ref();
const viy2InputBox_1SUzHx = ref();
const viy2InputBox_BXdcE = ref();
const viy2InputBox_5hhMPi = ref();
const viy2DateTimePicker_1SUzHK = ref();
const viy2DateTimePicker_1SUzI6 = ref();
const viy2Button_1SUzI7 = ref();
const viy2Button_iR7L7s = ref();
const viy2Select_iR7Le1 = ref();
const viy2Select_1T4wPU = ref();
const unfinishOnlySign = ref();
const viy2Flex_KU5eU = ref();
const viy2Flex_KU8n2 = ref();
const viy2Panel_QIpUY = ref();
const viy2Row_QISAU = ref();
const infoBtn = ref();
const viy2Button_5heznY = ref();
const cancel = ref();
const viy2Row_9ccwVG = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', newPart: '', orderNo: '', salesOrderNo: '', dateFrom: '', dateTo: '', orderStatus: ['発注中'], orderType: [], datafieldviy2Radio_bIeKr: 'する',
});
const rules = reactive({
  viy2Select_oHWwKRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const viy2Select_iR7Le1Opts = reactive([
  {
    codeData1:
'発注中',
    codeDbid:
'発注中',
  },
  {
    codeData1:
'入荷中',
    codeDbid:
'入荷中',
  },
  {
    codeData1:
'完了',
    codeDbid:
'完了',
  },
  {
    codeData1:
'キャンセル',
    codeDbid:
'キャンセル',
  },
]);
const viy2Select_1T4wPUOpts = reactive([
  {
    codeData1:
'EO',
    codeDbid:
'EO',
  },
  {
    codeData1:
'RO',
    codeDbid:
'RO',
  },
]);
const unfinishOnlySignOpts = reactive([
  { value: 'する', label: 'する' },
  { value: 'しない', label: 'しない' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
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
}, {
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const gridDsApi = useApi({
  url: '/parts/spq0401/searchPurchaseOrderList.json',
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
    total.value = data.totalElements;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const pageDataSet_qNMZ2_DFxlHApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const pageDataSet_qNMZ2_DFxlH = pageDataSet_qNMZ2_DFxlHApi.data;
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S042'],
}, {
  initialData: {
    S042: [],
  },
  manual: true,
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const viy2Button_5FbWKcClick = () => {
  doRetrieve();
};
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_1SUzI7Click = () => {
  if (queryFormData.dateFrom == null) {
    queryFormData.dateFrom = firstDay;
  }
  if (queryFormData.dateTo == null) {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
};
const viy2Button_iR7L7sClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const infoBtnClick = () => {
  viewDetail();
};
const viy2Button_5heznYClick = () => {
  onExport();
};
const cancelClick = () => {
  viewDetail();
};
const gridCellClick = (obj) => {
  const row = obj.row;
  purchaseOrderNo.value = row.orderNo;
  purchaseOrderId.value = row.purchaseOrderId;
  if (row.receiptQty == 0 && row.registerQty == 0) {
    disableButton.value = true;
  } else {
    disableButton.value = false;
  }
};
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSalesOrderNoEditRender = computed(() => {
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
const gridOrderStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridBoQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridReceiptQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridRegisterQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridCancelQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const paginationCurrentChange = (currentPage) => {
  if (total.value === 0) {
    return;
  }
  doRetrieve();
};
onMounted(() => {
  paginationPageSize.value = PAGE_SIZE;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.orderStatus = ['S042SPWAITINGISSUE', 'S042SPONPURCHASE', 'S042SPONRECEIVING'];
  queryFormData.pointId = 568;
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
  initializedFlag.value = true;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.orderStatus = ['S042SPWAITINGISSUE', 'S042SPONPURCHASE', 'S042SPONRECEIVING'];
  unfinishFlag.value = true;
  paginationPageSize.value = PAGE_SIZE;
};
const resetTblResults = () => {
  grid.value.remove();
  total.value = 0;
  paginationCurrentPage.value = 1;
};
const onExport = () => {
  useApi(
    {
      url: '/parts/spq0401/exportPurchaseOrderExcel.json',
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
        VueUtil.saveAs(data, 'SPQ0401_01.xlsx');
      },
    },
  );
};
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viewDetail = () => {
  const query = { purchaseOrderNo: purchaseOrderNo.value };
  useMultiTags().openTag({
    name: 'spq0301_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spq0301_01' }).meta.title = t('menu.SPQ0301_01');
  // router导航到页面并传递参数
  router.push({ name: 'spq0301_01', data: query });
};
// 配件输入后Leave
const onLeavePartsCode = async (code) => {
  nowPartsCode.value = code;
  await getPartsData();
};
const getPartsData = async () => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData != null) {
    queryFormData.newPart = partsData.desc;
    queryFormData.partId = partsData.id;
  } else {
    queryFormData.partId = '';
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VuePanel id="viy2Panel_1vtXi" ref="viy2Panel_1vtXi" title="検索条件">
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
      <VueForm
        id="queryForm"
        ref="queryForm"
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
              v-show="false"
              label="倉庫"
              prop="pointId"
              :rules="rules.viy2Select_oHWwKRules"
            >
              <VueSelect
                id="viy2Select_oHWwK"
                ref="viy2Select_oHWwK"
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
              label="部品番号"
              prop="newPart"
            >
              <VueInput
                id="viy2InputBox_1SUzHx"
                ref="viy2InputBox_1SUzHx"
                v-model="queryFormData.newPart"
                :formatter="(value) => value.toUpperCase()"
                :parser="(value) => value.toUpperCase()"
                :clearable="true"
                :style="{ width: '180px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="発注番号"
              prop="orderNo"
            >
              <VueInput
                id="viy2InputBox_BXdcE"
                ref="viy2InputBox_BXdcE"
                v-model="queryFormData.orderNo"
                :formatter="(value) => value.toUpperCase()"
                :parser="(value) => value.toUpperCase()"
                :clearable="true"
                :style="{ width: '180px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="仕入先受注番号"
              label-width="120px"
              prop="salesOrderNo"
            >
              <VueInput
                id="viy2InputBox_5hhMPi"
                ref="viy2InputBox_5hhMPi"
                v-model="queryFormData.salesOrderNo"
                :formatter="(value) => value.toUpperCase()"
                :parser="(value) => value.toUpperCase()"
                :style="{ width: '180px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="発注日"
              prop="dateFrom"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1SUzHK"
                ref="viy2DateTimePicker_1SUzHK"
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
            >
              <VueDatePicker
                id="viy2DateTimePicker_1SUzI6"
                ref="viy2DateTimePicker_1SUzI6"
                v-model="queryFormData.dateTo"
                type="date"
                :style="{ width: '130px' }"
              />
            </VueFormItem>
            <VueButton id="viy2Button_1SUzI7" ref="viy2Button_1SUzI7" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1SUzI7Click" />
            <VueButton id="viy2Button_iR7L7s" ref="viy2Button_iR7L7s" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_iR7L7sClick" />
            <VueFormItem
              label="発注状況"
              prop="orderStatus"
            >
              <VueSelect
                id="viy2Select_iR7Le1"
                ref="viy2Select_iR7Le1"
                v-model="queryFormData.orderStatus"
                :style="{ width: '150px' }"
                :collapse-tags="true"
                :clearable="true"
                :multiple="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="viy2Select_iR7Le1Opts"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
            <VueFormItem
              label="発注種類"
              prop="orderType"
            >
              <VueSelect
                id="viy2Select_1T4wPU"
                ref="viy2Select_1T4wPU"
                v-model="queryFormData.orderType"
                :style="{ width: '150px' }"
                :collapse-tags="true"
                :clearable="true"
                :multiple="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="viy2Select_1T4wPUOpts"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
            <VueFormItem
              label="発注残のみ"
              prop="datafieldviy2Radio_bIeKr"
            >
              <VueRadioGroup
                id="unfinishOnlySign"
                ref="unfinishOnlySign"
                v-model="queryFormData.datafieldviy2Radio_bIeKr"
                radio-style="button"
                direction="horizontal"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in unfinishOnlySignOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VueFlex
      id="viy2Flex_KU5eU"
      ref="viy2Flex_KU5eU"
      direction="column"
      class="full-height"
    >
      <VueFlex
        id="viy2Flex_KU8n2"
        ref="viy2Flex_KU8n2"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_QIpUY" ref="viy2Panel_QIpUY" height="100%" title="明細情報">
          <template #header>
            <div style="width: auto">
              <VueRow
                id="viy2Row_QISAU"
                ref="viy2Row_QISAU"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton v-if="false" id="infoBtn" ref="infoBtn" icon-position="left" :disabled="disableButton" @click="infoBtnClick">
                    {{ t('button.receiptInfo') }}
                  </VueButton>
                </VueCol>
              </VueRow>
              <VueButton id="viy2Button_5heznY" ref="viy2Button_5heznY" icon-position="left" @click="viy2Button_5heznYClick">
                ファイル出力
              </VueButton>
              <VueButton id="cancel" ref="cancel" icon-position="left" type="danger" @click="cancelClick">
                発注キャンセル
              </VueButton>
              <VueRow
                id="viy2Row_9ccwVG"
                ref="viy2Row_9ccwVG"
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
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-click="gridCellClick">
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
            <VueSelectionColumn
              align="center"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueInputColumn
              :formatter="gridPartsNoFormatter"
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              show-overflow="tooltip"
              :sortable="true"
              title="部品番号"
              width="120px"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              show-overflow="tooltip"
              :sortable="true"
              title="部品名"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              show-overflow="tooltip"
              :sortable="true"
              title="発注番号"
              width="140px"
            />
            <VueInputColumn
              :edit-render="gridSalesOrderNoEditRender"
              field="salesOrderNo"
              show-overflow="tooltip"
              :sortable="true"
              title="仕入先受注番号"
              width="150px"
            />
            <VueDateTimeColumn
              :edit-render="gridOrderDateEditRender"
              field="orderDate"
              align="center"
              :sortable="true"
              title="発注日"
              width="140px"
            />
            <VueInputColumn
              :edit-render="gridOrderStatusEditRender"
              field="orderStatus"
              show-overflow="tooltip"
              :sortable="true"
              title="発注状況"
              width="140px"
            />
            <VueInputColumn
              :edit-render="gridOrderTypeEditRender"
              field="orderType"
              show-overflow="tooltip"
              :sortable="true"
              title="発注種類"
              width="140px"
            />
            <VueNumberColumn
              :edit-render="gridOrderQtyEditRender"
              field="orderQty"
              align="right"
              :sortable="true"
              title="発注数"
              width="110px"
            />
            <VueNumberColumn
              :edit-render="gridBoQtyEditRender"
              field="boQty"
              align="right"
              :sortable="true"
              title="発注残数"
              width="110px"
            />
            <VueNumberColumn
              :edit-render="gridReceiptQtyEditRender"
              field="receiptQty"
              align="right"
              :sortable="true"
              title="入荷中数"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridRegisterQtyEditRender"
              field="registerQty"
              align="right"
              :sortable="true"
              title="入荷数"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridCancelQtyEditRender"
              field="cancelQty"
              align="right"
              :sortable="true"
              title="キャンセル数"
              width="110px"
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
