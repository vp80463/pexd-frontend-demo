<script setup>
import { IconArrowLeftBold, IconEdit, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { nextTick } from 'vue';
import { useParams, useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import detailPagePage from '/src/views/parts/receipt/spq0301_02.vue';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { formatCodeInput, formatCost, formatPartNo, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const routeParam = useParams();
const useFlg = ref(true);
const inputFlg = ref(false);
const enabled = ref(true);
const queryFormFlg = ref(false);
// SPQ0401_01跳转spq0301_01画面控制flg
const redirectFlg = ref(false);
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
// detail部数据
const detailData = ref([]);
const storingLineId = ref('');
const receiptSlipId = ref('');
const receiptSlipIds = ref([]);
defineOptions({
  name: 'spq0301_01',
});
const form = ref();
const viy2Flex_Bumfn = ref();
const viy2Panel_29k2l = ref();
const Retrieve = ref();
const reset = ref();
const queryForm = ref();
const viy2Row_7x75sL = ref();
const point = ref();
const viy2InputBox_1lCReey = ref();
const parts = ref();
const viy2Row_F2rFT = ref();
const viy2InputBox_1lCRecT = ref();
const dateFrom = ref();
const dateTo = ref();
const viy2Button_5hElpb = ref();
const viy2Button_5hElpc = ref();
const viy2Flex_7x75t2 = ref();
const viy2Panel_QG1sm = ref();
const print = ref();
const headerGrid = ref();
const viy2Row_soVPC = ref();
const viy2Row_y68TM = ref();
const detailAside = ref();
const detailPage = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', receiptNo: '', parts: '', purchaseOrderNo: '', dateFrom: '', dateTo: '',
});
const rules = reactive({
  pointRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  dateFromRules: [
    {
      required: true,
      message: t('errors.required', [t('label.receiptDate')]),
    },
  ],
  dateToRules: [
    {
      required: true,
      message: t('errors.required', [t('label.receiptDate')]),
    },
  ],
});
const showDetailAside = ref(false);
const partsPopoverQueryMethod = parts_query_method;
const partsPopupColumns = ref(parts_pop_column);
const partsPopupQueryMethod = parts_pop_query_method;
const headerGridEditConfig = reactive({
  trigger: 'click',
});
const headerGridMouseConfig = reactive({
  extension: true,
});
const headerGridViy2TableButtonColumn_13T8YBButtons = (scope) => {
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
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const transactionTypedDsApi = useApi({
  url: '/common/helper/getInventoryTransactionTypeList.json',
  method: 'post',
  data: {
    arg0: 'S027PURCHASESTOCKIN/S027TRANSFERIN/S027RETURNIN',
  },
}, {
  manual: true,
});
const transactionTypedDs = transactionTypedDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const partsInputDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
}, {
  manual: true,
});
const partsInputDs = partsInputDsApi.data;
const headerGridDsApi = useApi({
  method: 'post',
  localData: [
    {
      receiptNo: 'RS2410140001',
      parts: 'ZF22100',
      partsName: 'ZF22100partsNm',
      orderNo: 'P2410000015',
      receiptDate: '20241015',
      ymvnInvoiceNo: 'IV202410002',
      receiptQty: '5',
      receiptPrice: '100',
      total: '500',
      consigneecd: '2568',
      name_kanji: '2568namekanji',
      kana_name: '2568kananame',
      post_cd: '6598postcd',
      adrs: '2568adrs',
      tel: '2568tel',
      fax: '2568fax',
    },
  ],
}, {
  manual: true,
});
const headerGridDs = headerGridDsApi.data;
const supplierDsApi = useApi({
  url: '/common/helper/supplierList.json',
  method: 'post',
  data: {},
}, {
  manual: true,
});
const supplierDs = supplierDsApi.data;
const RetrieveClick = () => {
  doHeaderRetrieve();
};
const resetClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2InputBox_1lCReeyChange = (value) => {
  receiptNoChg(value);
};
const partsSelect = (params) => {
  queryFormData.partsId = params.id;
};
const partsClear = () => {
  queryFormData.partsId = '';
};
const partsLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.partsId = '';
    if (obj.currentValue) {
      onLeavePartsCode(obj.currentValue);
    }
  }
};
const partsPopoverColumns = computed(() => {
  return parts_column;
});
const partsPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), options: largeGroupDs.value, clearable: true, props: { checkStrictly: true }, style: { width: '150px' } },
  ];
});
const viy2InputBox_1lCRecTChange = (value) => {
  purchaseOrderNoChg(value);
};
const viy2Button_5hElpbClick = () => {
  if (!queryFormData.dateFrom) {
    queryFormData.dateFrom = firstDay;
  }
  if (!queryFormData.dateTo) {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
};
const viy2Button_5hElpcClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const printClick = () => {
  onPrintBtn();
};
const headerGridCellClick = (obj) => {
  const row = obj.row;
  storingLineId.value = row.storingLineId;
  receiptSlipId.value = row.receiptSlipId;
  doDetailRetrieve(row);
};
const headerGridReceiptNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridPartsFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const headerGridPartsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridPartsNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridReceiptDateEditRender = computed(() => {
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
const headerGridYmvnInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridReceiptQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const headerGridReceiptQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridReceiptPriceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridTotalFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);
};
const headerGridTotalEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridConsigneecdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridName_kanjiEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridKana_nameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridPost_cdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridAdrsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridTelEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const headerGridFaxEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  doInit();
});
// 监听router参数有变化时，
watch(() => routeParam, (newVal, oldVal) => {
  doInit();
}, { deep: true },
);
const showRowDetail = (row) => {
  showDetailAside.value = true;
};
const doInit = () => {
  const params = routeParam;
  if (params !== undefined && Object.entries(params).length !== 0) {
    // 禁用条件部
    queryForm.value.resetFields();
    for (const key in queryFormData) {
      queryFormData[key] = '';
    }
    queryFormFlg.value = true;
    // 禁用reset和retrieve
    redirectFlg.value = true;
    // 传值
    const purchaseOrderNo = params.purchaseOrderNo;
    queryFormData.purchaseOrderNo = purchaseOrderNo;
    rules.pointRules[0].required = false;
    rules.dateFromRules[0].required = false;
    rules.dateToRules[0].required = false;
    // 检索
    initRetrieve(purchaseOrderNo);
  } else {
    queryFormData.pointId = 568;
  }
};
watch (
  () => queryFormData, (newVal, oldVal) => {
    resetTblResults();
    queryForm.value.validate();
  }, { deep: true },
);
// 清空表单元素
const resetCondition = () => {
  queryForm.value.resetFields();
  for (const key in queryFormData) {
    queryFormData[key] = '';
  }
  resetTblResults();
  queryFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  inputFlg.value = false;
  rules.dateFromRules[0].required = true;
  rules.dateToRules[0].required = true;
};
const resetTblResults = () => {
  headerGridDs.value.splice(0);
  detailData.value.splice(0);
  useFlg.value = true;
};
// receiptNo改变
const receiptNoChg = (value) => {
  if (value.length !== 0) {
    queryFormData.dateFrom = '';
    queryFormData.dateTo = '';
    queryFormData.purchaseOrderNo = '';
    inputFlg.value = true;
    rules.dateFromRules[0].required = false;
    rules.dateToRules[0].required = false;
  } else {
    inputFlg.value = false;
    queryFormData.dateFrom = firstDay;
    queryFormData.dateTo = lastDay;
    rules.dateFromRules[0].required = true;
    rules.dateToRules[0].required = true;
  }
};
// purchaseOrderNo改变
const purchaseOrderNoChg = (value) => {
  if (value.length !== 0) {
    queryFormData.dateFrom = '';
    queryFormData.dateTo = '';
    queryFormData.receiptNo = '';
    inputFlg.value = true;
    rules.dateFromRules[0].required = false;
    rules.dateToRules[0].required = false;
  } else {
    inputFlg.value = false;
    queryFormData.dateFrom = firstDay;
    queryFormData.dateTo = lastDay;
    rules.dateFromRules[0].required = true;
    rules.dateToRules[0].required = true;
  }
};
// SPQ0401_01跳转spq0301_01检索
const initRetrieve = (purchaseOrderNo) => {
  useApi(
    {
      url: '/parts/spq0301/getDetailsByPurchaseOrderNo.json',
      method: 'post',
      data: () => {
        return {
          purchaseOrderNo,
        };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        if (data.length > 0) {
          headerGridDs.value = data;
          useFlg.value = false;
          doDetailRetrieve(data[0]);
          nextTick(() => {
            headerGrid.value.setCurrentRow(data[0]);
          });
        }
      },
    },
  );
};
const doHeaderRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      headerGridDsApi.runAsync();
    }
  });
};
const doDetailRetrieve = (row) => {
  const completedDate = row.completedDate;
  if (completedDate) {
    detailData.value.splice(0);
    return;
  }
  useApi(
    {
      url: '/parts/spq0301/getPartsReceiveDetail.json',
      method: 'post',
      data: () => {
        return {
          pointId: queryFormData.pointId,
          storingLineId: row.storingLineId,
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
  let receiptSlipIds = [];
  receiptSlipIds = [receiptSlipId];
  useApi(
    {
      url: '/common/report/printPartsStoringListForWarehouse.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          receiptSlipIds,
        };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartsStoringList(ForWarehouse).pdf');
      },
    },
  );
};
// 配件输入后Leave
const onLeavePartsCode = async (code) => {
  const res = await partsInputDsApi.runAsync({
    partsCd: code,
    pageSize: 1,
    currentPage: 1,
  });
  if (res && res.total > 0) {
    const data = res.list[0];
    queryFormData.parts = data.desc;
    queryFormData.partsId = data.id;
  }
};
const closeSpq030102 = () => {
  showDetailAside.value = false;
  headerGridDsApi.runAsync();
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_Bumfn"
      ref="viy2Flex_Bumfn"
      direction="column"
      class="full-height"
    >
      <VuePanel id="viy2Panel_29k2l" ref="viy2Panel_29k2l" title="検索条件">
        <template #header>
          <div style="width: auto">
            <VueButton id="Retrieve" ref="Retrieve" icon-position="left" type="info" :disabled="redirectFlg" @click="RetrieveClick">
              検索
            </VueButton>
            <VueButton id="reset" ref="reset" icon-position="left" :disabled="redirectFlg" @click="resetClick">
              クリア
            </VueButton>
          </div>
        </template>
        <VueForm
          id="queryForm"
          ref="queryForm"
          :disabled="queryFormFlg"
          :model="queryFormData"
        >
          <VueRow
            id="viy2Row_7x75sL"
            ref="viy2Row_7x75sL"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                v-show="false"
                label="倉庫"
                prop="pointId"
                :rules="rules.pointRules"
              >
                <VueSelect
                  id="point"
                  ref="point"
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
                label="受付番号"
                prop="receiptNo"
              >
                <VueInput
                  id="viy2InputBox_1lCReey"
                  ref="viy2InputBox_1lCReey"
                  v-model="queryFormData.receiptNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :clearable="true"
                  :style="{ width: '150px' }"
                  @change="viy2InputBox_1lCReeyChange"
                />
              </VueFormItem>
              <VueFormItem
                label="部品番号"
                prop="parts"
              >
                <VueValueList
                  aside-size="60%"
                  id="parts"
                  :use-common-popover="true"
                  ref="parts"
                  :toggle-popover-on-click="queryFormData.parts.length > 3"
                  v-model="queryFormData.parts"
                  select-field="desc"
                  :use-common-popup="true"
                  :popover-min-query-length="3"
                  :close-on-click-modal="true"
                  :use-popover="true"
                  :popover-width="500"
                  width="250px"
                  :popover-columns="partsPopoverColumns"
                  :popover-query-method="partsPopoverQueryMethod"
                  :popup-columns="partsPopupColumns"
                  :popup-conditions="partsPopupConditions"
                  :popup-query-method="partsPopupQueryMethod"
                  @select="partsSelect"
                  @clear="partsClear"
                  @leave="partsLeave"
                >
                  <template #asideHeader>
                    <VueRow
                      id="viy2Row_F2rFT"
                      ref="viy2Row_F2rFT"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_F2x7l" ref="viy2Text_F2x7l" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                          {{ t('title.partNoRef') }}
                        </VueText>
                      </VueCol>
                    </VueRow>
                  </template>
                </VueValueList>
              </VueFormItem>
              <VueFormItem
                label="発注番号"
                prop="purchaseOrderNo"
              >
                <VueInput
                  id="viy2InputBox_1lCRecT"
                  ref="viy2InputBox_1lCRecT"
                  v-model="queryFormData.purchaseOrderNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :style="{ width: '150px' }"
                  @change="viy2InputBox_1lCRecTChange"
                />
              </VueFormItem>
              <VueFormItem
                label="受付日"
                prop="dateFrom"
                :rules="rules.dateFromRules"
              >
                <VueDatePicker
                  id="dateFrom"
                  ref="dateFrom"
                  v-model="queryFormData.dateFrom"
                  type="date"
                  :disabled="inputFlg"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0"
                prop="dateTo"
                :rules="rules.dateToRules"
              >
                <VueDatePicker
                  id="dateTo"
                  ref="dateTo"
                  v-model="queryFormData.dateTo"
                  type="date"
                  :disabled="inputFlg"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <VueButton id="viy2Button_5hElpb" ref="viy2Button_5hElpb" icon-position="left" :disabled="inputFlg" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_5hElpbClick" />
              <VueButton id="viy2Button_5hElpc" ref="viy2Button_5hElpc" icon-position="left" :disabled="inputFlg" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_5hElpcClick" />
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VueFlex
        id="viy2Flex_7x75t2"
        ref="viy2Flex_7x75t2"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_QG1sm" ref="viy2Panel_QG1sm" title="明細情報" height="100%" :collapse="false">
          <template #header>
            <div style="width: auto">
              <VueButton id="print" ref="print" icon-position="left" :disabled="useFlg" @click="printClick">
                印刷
              </VueButton>
            </div>
          </template>
          <VueTable id="headerGrid" ref="headerGrid" header-align="center" :show-footer="true" height="auto" :data="headerGridDs" :edit-config="headerGridEditConfig" :mouse-config="headerGridMouseConfig" @cell-click="headerGridCellClick">
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
              :edit-render="headerGridReceiptNoEditRender"
              field="receiptNo"
              show-overflow="tooltip"
              :sortable="true"
              title="受付番号"
              width="150px"
            />
            <VueInputColumn
              :formatter="headerGridPartsFormatter"
              :edit-render="headerGridPartsEditRender"
              field="parts"
              show-overflow="tooltip"
              :sortable="true"
              title="部品番号"
              width="130px"
            />
            <VueInputColumn
              :edit-render="headerGridPartsNameEditRender"
              field="partsName"
              show-overflow="tooltip"
              :sortable="true"
              title="部品名"
              width="200px"
            />
            <VueInputColumn
              :edit-render="headerGridOrderNoEditRender"
              field="orderNo"
              show-overflow="tooltip"
              :sortable="true"
              title="発注番号"
              width="140px"
            />
            <VueDateTimeColumn
              :edit-render="headerGridReceiptDateEditRender"
              field="receiptDate"
              align="center"
              :sortable="true"
              title="受付日"
              width="120px"
            />
            <VueInputColumn
              :edit-render="headerGridYmvnInvoiceNoEditRender"
              field="ymvnInvoiceNo"
              show-overflow="tooltip"
              :sortable="true"
              :resizable="true"
              title="納品書番号"
              width="160px"
            />
            <VueNumberColumn
              :formatter="headerGridReceiptQtyFormatter"
              :edit-render="headerGridReceiptQtyEditRender"
              field="receiptQty"
              footer-align="right"
              :sortable="true"
              title="受付数"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="headerGridReceiptPriceEditRender"
              field="receiptPrice"
              footer-align="center"
              :sortable="true"
              title="受付単価"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="headerGridTotalFormatter"
              :edit-render="headerGridTotalEditRender"
              field="total"
              footer-align="right"
              :sortable="true"
              title="金額"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="headerGridConsigneecdEditRender"
              field="consigneecd"
              show-overflow="tooltip"
              :sortable="true"
              title="荷受人コード"
              width="140px"
            />
            <VueInputColumn
              :edit-render="headerGridName_kanjiEditRender"
              field="name_kanji"
              show-overflow="tooltip"
              :sortable="true"
              title="荷受人名称"
              width="140px"
            />
            <VueInputColumn
              :edit-render="headerGridKana_nameEditRender"
              field="kana_name"
              show-overflow="tooltip"
              :sortable="true"
              title="荷受人カナ"
              width="140px"
            />
            <VueInputColumn
              :edit-render="headerGridPost_cdEditRender"
              field="post_cd"
              show-overflow="tooltip"
              :sortable="true"
              title="荷受人郵便番号"
              width="140px"
            />
            <VueInputColumn
              :edit-render="headerGridAdrsEditRender"
              field="adrs"
              show-overflow="tooltip"
              :sortable="true"
              title="荷受人住所"
              width="140px"
            />
            <VueInputColumn
              :edit-render="headerGridTelEditRender"
              field="tel"
              show-overflow="tooltip"
              :sortable="true"
              title="荷受人電話番号"
              width="140px"
            />
            <VueInputColumn
              :edit-render="headerGridFaxEditRender"
              field="fax"
              show-overflow="tooltip"
              :sortable="true"
              title="荷受人FAX"
              width="180px"
            />
            <VueButtonColumn
              align="center"
              :visible="true"
              fixed="right"
              width="80px"
              :buttons="headerGridViy2TableButtonColumn_13T8YBButtons"
            />
          </VueTable>
        </VuePanel>
        <VueRow
          id="viy2Row_y68TM"
          ref="viy2Row_y68TM"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          />
        </VueRow>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="detailAside"
      ref="detailAside"
      v-model="showDetailAside"
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
        @select="callBackSpq030102"
        @close="closeSpq030102"
      />
    </VueAside>
  </VueForm>
</template>
