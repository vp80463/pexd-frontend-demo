<script setup>
import { IconDelete, IconMoreFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_889MXhPage from '/src/views/commons/parts_select_multi.vue';
import { customer_column, customer_query_method } from '@/settings/valuelistSetting.js';
import { LocationType, YES_NO_FLAG } from '@/constants/pj-constants.js';
import { formatPrice, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
const asideParams = ref();
const router = useRouter();
const uc = useUser().userInfo;
const invoiceBtnFlag = ref(true);
const rowValue = ref();
const confirmFlag = ref(true);
const returnFlag = ref(false);
const printFlag = ref(true);
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
defineOptions({
  name: 'spm0203_01',
});
const form = ref();
const viy2Flex_TGyhd = ref();
const queryForm = ref();
const viy2Panel_2OQ8f = ref();
const viy2Button_5heznY = ref();
const resetBtn = ref();
const viy2Button_4yEnxa = ref();
const viy2Row_8ZlKIC = ref();
const viy2ValueList_2BBTFi = ref();
const viy2Select_8ZlKIR = ref();
const viy2InputBox_Ol655 = ref();
const viy2InputBox_2FIYWG = ref();
const viy2DateTimePicker_1rTvxfG = ref();
const viy2InputBox_1rTvxdW = ref();
const viy2Flex_OlNcU = ref();
const viy2Panel_Oma6Z = ref();
const viy2Row_8ZWe2p = ref();
const viy2Button_AsKSg = ref();
const viy2Button_8d4cpK = ref();
const viy2Button_87WBKs = ref();
const viy2Button_89VsAk = ref();
const grid = ref();
const viy2Row_8Zmr8t = ref();
const viy2Button_8Zmr8A = ref();
const viy2Button_1rTCnmI = ref();
const viy2Button_1rTCnoo = ref();
const viy2Aside_889MX4 = ref();
const viy2Subpage_889MXh = ref();
const formData = reactive({
});
const queryFormData = reactive({
  customer: '', reason: '', memo: '', returnInvoiceNo: '', invoiceDate: '', point: 'YSP 傘下',
});
const rules = reactive({
  viy2ValueList_2BBTFiRules: [
    {
      required: true,
      message: t('validation.error.required'),
      trigger: 'blur',
    },
  ],
  viy2Select_8ZlKIRRules: [
    {
      required: true,
      message: t('errors.required', [t('label.reason')]),
    },
  ],
  viy2InputBox_1rTvxdWRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const gridRules = {
  location: [
    {
      validator(rule) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if ((rule.row.location == null || rule.row.location == '') && rule.row.checked) {
              reject(new Error(t('errors.required', [t('label.location')])));
            } else {
              resolve();
            }
          }, 100);
        });
      },
    },
  ],
  returnPrice: [
    { required: true, message: t('errors.required', [t('label.returnPrice')]) },
  ],
  returnQty: [
    { required: true, message: t('errors.required', [t('label.returnQuantity')]) },
  ],
};
const showPartsMultiWin = ref(false);
const viy2ValueList_2BBTFiPopoverQueryMethod = customer_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
  beforeEditMethod: (obj) => {
    return !(returnFlag.value);
  },
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_5gQslButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRow,
      title: 'Delete',
    },
  ];
};
const gridDsApi = useApi({
  url: '/parts/spm0202/searchInvoiceInfo.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    queryFormData.customer = data.customer;
    queryFormData.customerCd = data.customerCd;
    queryFormData.customerNm = data.customerNm;
    queryFormData.customerId = data.customerId;
    queryFormData.fromOrganizationId = data.fromOrganizationId;
    queryFormData.toOrganizationId = data.toOrganizationId;
    queryFormData.invoiceDate = data.invoiceDate;
    queryFormData.returnByInvoice = data.returnByInvoice;
    queryFormData.invoiceNo = data.invoiceNo;
    queryFormData.invoiceId = data.invoiceId;
    queryFormData.returnByInvoiceInvisible = data.returnByInvoiceInvisible;
  },
  initialData: [
    { id: '1', name: 'NameA', type: '1', description: 'DescriptionA' },
    { id: '2', name: 'NameB', type: '1', description: 'DescriptionB' },
    { id: '3', name: 'NameC', type: '2', description: 'DescriptionC' },
    { id: '4', name: 'NameD', type: '2', description: 'DescriptionD' },
    { id: '5', name: 'NameE', type: '2', description: 'DescriptionE' },
  ],
  manual: true,
});
const gridDs = gridDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0202/confirmSalesReturn.json',
  method: 'post',
  data: () => {
    queryFormData.content = grid.value.getCheckboxRecords();
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    printFlag.value = false;
    confirmFlag.value = true;
    queryFormData.returnInvoiceNo = data.returnInvoiceNo;
    queryFormData.returnInvoiceId = data.returnInvoiceId;
    returnFlag.value = true;
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const SalesReturnReasonDsApi = useApi({
  url: '/common/helper/getSalesReturnReasonList.json',
  method: 'post',
  data: {
    arg0: 'S001PART',
  },
}, {
  initialData: {
    data: [],
  },
});
const SalesReturnReasonDs = SalesReturnReasonDsApi.data;
const locationDsApi = useApi({
  url: '/common/valuelist/locationValueList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    if (data.length > 0) {
      rowValue.value.location = data[0].locationNo;
      rowValue.value.locationId = data[0].locationId;
    } else {
      rowValue.value.locationId = '';
    }
  },
  manual: true,
});
const locationDs = locationDsApi.data;
const viy2Button_5heznYClick = () => {
  const query = { returnInvoiceNo: queryFormData.returnInvoiceNo };
  useMultiTags().openTag({
    name: 'spm0202_02', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0202_02' }).meta.title = t('顧客返品履歴');
  // router导航到页面并传递参数
  router.push({ name: 'spm0202_02', data: query });
};
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    invoiceBtnFlag.value = true;
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_4yEnxaClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      if (grid.value.getTableData().fullData.length > 0) {
        grid.value.validate((valid) => {
          if (!valid) {
            confirmDsApi.runAsync();
          }
        });
      }
    }
  });
};
const viy2ValueList_2BBTFiSelect = (params) => {
  queryFormData.customerId = params.id;
};
const viy2ValueList_2BBTFiClear = () => {
  queryFormData.customerId = '';
};
const viy2ValueList_2BBTFiLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.customerId = '';
  }
};
const viy2ValueList_2BBTFiPopoverColumns = computed(() => {
  return customer_column;
});
const viy2Button_8d4cpKClick = () => {
  window.open('https://www.baidu.com', '_blank');
};
const viy2Button_87WBKsClick = () => {
  showPartsMultiWin.value = true;
};
const viy2Button_89VsAkClick = () => {
  const row = {
    partsNo: null,
    partsNm: null,
    partsId: null,
    supersedingPartsNo: null,
    allocatedProductId: null,
    onHandQty: null,
    orderQty: null,
    ymvnStockQty: null,
    stdPrice: null,
    sellingPrice: null,
    taxRate: null,
    orderAmt: null,
    discountAmtVAT: null,
    discount: null,
    specialPriceVAT: null,
    locationCd: null,
    allocatedQty: null,
    pickingQty: null,
    shippedQty: null,
    cancelledQty: null,
    boQty: null,
    largeGroupNm: null,
    batteryID: null,
    boCancel: null,
    orderItemId: null,
    sellingPriceExVAT: null,
    salesLotQty: null,
    batteryFlag: null,
  };
  grid.value.insertAt(row, -1).then((newRow) => {
    grid.value.setCurrentRow(newRow.row);
  });
};
const gridCellClick = (obj) => {
  rowValue.value = obj.row;
};
const gridCheckboxChange = (obj) => {
  if (grid.value.getCheckboxRecords().length > 0 && returnFlag.value == false) {
    confirmFlag.value = false;
  } else {
    confirmFlag.value = true;
  }
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
const gridLocationChange = (obj, event) => {
  if (event.length > 0) {
    const pointid = queryFormData.pointId;
    const locationCd = obj.row.location;
    const flag = YES_NO_FLAG.NO;
    const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL, LocationType.SERVICE, LocationType.FROZEN];
    locationDsApi.runAsync({
      arg0: flag,
      pointId: pointid,
      locationCd,
      locationTypeList,
    });
  } else {
    obj.row.locationId = '';
  }
};
const gridLocationEvents = reactive({
  change: gridLocationChange,
});
const gridLocationEditRender = computed(() => {
  return {
    enabled: true,
    events: gridLocationEvents,
  };
});
const viy2Button_1rTCnooClick = (obj, params) => {
  showLocationWin.value = true;
  const point = queryFormData.point;
  const pointid = queryFormData.pointId;
  const flag = YES_NO_FLAG.NO;
  const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL, LocationType.SERVICE, LocationType.FROZEN];
  asideParams.value = { flag, point, pointId: pointid, locationTypeList };
};
const gridReturnPriceBlur = function (obj, value) {
  calculation(obj, value);
};
const gridReturnPriceEvents = reactive({
  blur: gridReturnPriceBlur,
});
const gridReturnPriceFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPrice(row.cellValue);
  }
  return row.cellValue;
};
const gridReturnPriceEditRender = computed(() => {
  return {
    enabled: true,
    events: gridReturnPriceEvents,
    attrs: {
      precision: 0,
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridReturnQtyBlur = function (obj, value) {
  calculation(obj, value);
};
const gridReturnQtyEvents = reactive({
  blur: gridReturnQtyBlur,
});
const gridReturnQtyFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridReturnQtyEditRender = computed(() => {
  return {
    enabled: true,
    events: gridReturnQtyEvents,
    attrs: {
      precision: 0,
      textAlign: 'right',
    },
  };
});
const gridReturnAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  queryFormData.invoiceDate = lastDay;
// queryFormData.point = uc.defaultPointCd+' '+uc.defaultPointNm;
// queryFormData.pointId = uc.defaultPointId;
});
const resetCondition = () => {
// 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
  // 清空表单元素
  queryFormData.content = [];
  queryFormData.invoiceDate = lastDay;
  // queryFormData.point = uc.defaultPointCd+' '+uc.defaultPointNm;
  // queryFormData.pointId = uc.defaultPointId;
  queryFormData.returnByInvoice = 'Y';
  invoiceBtnFlag.value = true;
  confirmFlag.value = true;
  returnFlag.value = false;
  printFlag.value = true;
  document.getElementById('invoiceNumber').focus();
};
const resetTblResults = () => {
  grid.value.remove();
};
// location侧边栏选择后
const callbkSelectLocation = (param) => {
  rowValue.value.location = param.locationNo;
  rowValue.value.locationId = param.locationId;
  showLocationWin.value = false;
};
// partsSalesReturnInvoiceForFinance
const partsSalesReturnInvoiceForFinance = () => {
  useApi(
    {
      url: '/common/report/printPartsSalesReturnInvoiceForFinance.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          returnInvoiceId: queryFormData.returnInvoiceId,
        };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartsSalesReturnInvoiceForFinance.pdf');
        // toFile(data,'PartsSalesReturnInvoiceForFinance.pdf')
      },
    },
  );
};
// location侧边栏选择关闭后
const closeLocationAside = () => {
  showLocationWin.value = false;
};
const calculation = (obj, value) => {
  let qty = null;
  let price = null;
  if (!isNoValue(obj.row.returnQty)) {
    qty = formatQty(obj.row.returnQty);
  }
  if (!isNoValue(obj.row.returnPrice)) {
    price = formatPrice(obj.row.returnPrice).replace(/,/g, '');
  }
  if (price == null) {
    obj.row.returnPrice = 0;
    obj.row.returnAmount = 0;
  }
  if (qty == null) {
    obj.row.returnQty = 0;
    obj.row.returnAmount = 0;
  }
  if (price != null && qty != null) {
    obj.row.returnAmount = Number(price) * Number(qty);
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_TGyhd"
      ref="viy2Flex_TGyhd"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="130px"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_2OQ8f" ref="viy2Panel_2OQ8f" title="返品情報">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heznY" ref="viy2Button_5heznY" icon-position="left" @click="viy2Button_5heznYClick">
                返品履歴
              </VueButton>
              <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
                クリア
              </VueButton>
              <VueButton id="viy2Button_4yEnxa" ref="viy2Button_4yEnxa" icon-position="left" type="info" :disabled="confirmFlag" @click="viy2Button_4yEnxaClick">
                保存
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_8ZlKIC"
            ref="viy2Row_8ZlKIC"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="返品元"
                prop="customer"
                :rules="rules.viy2ValueList_2BBTFiRules"
              >
                <VueValueList
                  id="viy2ValueList_2BBTFi"
                  ref="viy2ValueList_2BBTFi"
                  :popover-component="valulistWin"
                  v-model="queryFormData.customer"
                  :use-common-popover="true"
                  :toggle-popover-on-click="true"
                  select-field="desc"
                  :use-popover="true"
                  :popover-width="500"
                  :use-popup="false"
                  width="250px"
                  :popover-columns="viy2ValueList_2BBTFiPopoverColumns"
                  :popover-query-method="viy2ValueList_2BBTFiPopoverQueryMethod"
                  @select="viy2ValueList_2BBTFiSelect"
                  @clear="viy2ValueList_2BBTFiClear"
                  @leave="viy2ValueList_2BBTFiLeave"
                />
              </VueFormItem>
              <VueFormItem
                label="返品理由"
                prop="reason"
                :rules="rules.viy2Select_8ZlKIRRules"
              >
                <VueSelect
                  id="viy2Select_8ZlKIR"
                  ref="viy2Select_8ZlKIR"
                  v-model="queryFormData.reason"
                  :style="{ width: '200px' }"
                  :disabled="returnFlag"
                  :clearable="true"
                  :filterable="true"
                  :options="SalesReturnReasonDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="コメント"
                prop="memo"
              >
                <VueInput
                  id="viy2InputBox_Ol655"
                  ref="viy2InputBox_Ol655"
                  v-model="queryFormData.memo"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                label="返品インボイス番号"
                label-width="150px"
                prop="returnInvoiceNo"
              >
                <VueInput
                  id="viy2InputBox_2FIYWG"
                  ref="viy2InputBox_2FIYWG"
                  v-model="queryFormData.returnInvoiceNo"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                label="返品日"
                prop="invoiceDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1rTvxfG"
                  ref="viy2DateTimePicker_1rTvxfG"
                  v-model="queryFormData.invoiceDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  format="YYYY/MM/DD"
                  value-format="YYYYMMDD"
                />
              </VueFormItem>
              <VueFormItem
                v-show="false"
                label="出荷倉庫"
                prop="point"
                :rules="rules.viy2InputBox_1rTvxdWRules"
              >
                <VueInput
                  id="viy2InputBox_1rTvxdW"
                  ref="viy2InputBox_1rTvxdW"
                  v-model="queryFormData.point"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_OlNcU"
        ref="viy2Flex_OlNcU"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_Oma6Z" ref="viy2Panel_Oma6Z" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueRow
                id="viy2Row_8ZWe2p"
                ref="viy2Row_8ZWe2p"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_AsKSg" ref="viy2Button_AsKSg" icon-position="left">
                    ファイル取込
                  </VueButton>
                  <VueButton id="viy2Button_8d4cpK" ref="viy2Button_8d4cpK" icon-position="left" @click="viy2Button_8d4cpKClick">
                    YPEC
                  </VueButton>
                  <VueButton id="viy2Button_87WBKs" ref="viy2Button_87WBKs" icon-position="left" @click="viy2Button_87WBKsClick">
                    部品選択
                  </VueButton>
                  <VueButton id="viy2Button_89VsAk" ref="viy2Button_89VsAk" icon-position="left" @click="viy2Button_89VsAkClick">
                    行追加
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="98%" :show-footer="true" :data="gridDs.content" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-click="gridCellClick" @checkbox-change="gridCheckboxChange">
            <VueRow
              id="viy2Row_8Zmr8t"
              ref="viy2Row_8Zmr8t"
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
              :edit-render="gridPartsCdEditRender"
              field="partsCd"
              :sortable="true"
              title="部品番号"
              width="150px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_8Zmr8A" ref="viy2Button_8Zmr8A" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              show-overflow="tooltip"
              :sortable="true"
              title="部品名称"
              width="250px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_1rTCnmI" ref="viy2Button_1rTCnmI" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridLocationEditRender"
              field="location"
              header-class-name="text"
              :sortable="true"
              title="ロケーション"
              width="150px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_1rTCnoo" ref="viy2Button_1rTCnoo" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" @click="viy2Button_1rTCnooClick" />
              </template>
            </VueInputColumn>
            <VueNumberColumn
              :formatter="gridReturnPriceFormatter"
              :edit-render="gridReturnPriceEditRender"
              field="returnPrice"
              align="right"
              show-overflow="tooltip"
              aggregate-label="合計"
              :precision="0"
              :sortable="true"
              title="返品価格"
              width="150px"
            />
            <VueNumberColumn
              :formatter="gridReturnQtyFormatter"
              :edit-render="gridReturnQtyEditRender"
              field="returnQty"
              align="right"
              show-overflow="tooltip"
              aggregate="sum"
              :precision="0"
              :sortable="true"
              title="返品数"
              width="150px"
            />
            <VueNumberColumn
              :edit-render="gridReturnAmountEditRender"
              field="returnAmount"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="返品金額"
              width="150px"
            />
            <VueNumberColumn
              :edit-render="gridCostEditRender"
              field="cost"
              align="right"
              :sortable="true"
              title="原価"
              width="100px"
            />
            <VueButtonColumn
              align="center"
              fixed="right"
              width="40px"
              :buttons="gridViy2TableButtonColumn_5gQslButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="viy2Aside_889MX4"
      ref="viy2Aside_889MX4"
      v-model="showPartsMultiWin"
      :modal="true"
      direction="btt"
      size="90%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="true"
    >
      <viy2Subpage_889MXhPage
        id="viy2Subpage_889MXh"
        ref="viy2Subpage_889MXh"
        :init-data="asideParams"
        @select="callbkSelectMultiParts"
        @close="closeMultiPartsAside"
      />
    </VueAside>
  </VueForm>
</template>

<style type="text/css" scoped>
:deep(.text .vue-table-cell--title::before) {
content: "*";
color: rgb(245, 116, 112); /* 设置第一个字符的颜色为红色 */
}
</style>
