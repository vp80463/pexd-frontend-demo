<script setup>
import { IconMoreFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
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
  name: 'spm0202_01',
});
const form = ref();
const viy2Flex_TGyhd = ref();
const queryForm = ref();
const viy2Panel_NKS0w = ref();
const viy2Button_NKS0z = ref();
const retrieveBtn = ref();
const resetBtn = ref();
const viy2Button_NKS0A = ref();
const viy2Row_NKS0B = ref();
const viy2InputBox_NKS0M = ref();
const viy2InputBox_81yI7a = ref();
const viy2Panel_2KN3Z = ref();
const viy2Row_8ZlKIC = ref();
const viy2Select_8ZlKIR = ref();
const viy2ValueList_NS4lK = ref();
const viy2InputBox_1rTvxe2 = ref();
const viy2DateTimePicker_1rTvxfG = ref();
const viy2Flex_TGAGL = ref();
const viy2Panel_2LCLT = ref();
const grid = ref();
const viy2Row_8Zmr8t = ref();
const viy2Button_8Zmr8A = ref();
const viy2Button_1rTCnmI = ref();
const viy2Button_1rTCnoo = ref();
const formData = reactive({
});
const queryFormData = reactive({
  invoiceNo: '', point: '', reason: '', comment: '', returnInvoiceNo: '', invoiceDate: '',
});
const rules = reactive({
  viy2InputBox_81yI7aRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2Select_8ZlKIRRules: [
    {
      required: true,
      message: t('errors.required', [t('label.reason')]),
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
const viy2ValueList_NS4lKPopoverQueryMethod = customer_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
  beforeEditMethod: (obj) => {
    return !(returnFlag.value);
  },
});
const gridCheckboxConfig = reactive({
  checkField: 'checked',
});
const gridMouseConfig = reactive({
  extension: true,
});
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
const viy2Button_NKS0zClick = () => {
  const query = { returnInvoiceNo: queryFormData.returnInvoiceNo };
  useMultiTags().openTag({
    name: 'spm0202_02', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0202_02' }).meta.title = t('title.salesReturnHistoryInquiry_02');
  // router导航到页面并传递参数
  router.push({ name: 'spm0202_02', data: query });
};
const retrieveBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    invoiceBtnFlag.value = true;
    resetCondition();
  }).catch(() => {
  });
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
const viy2Button_NKS0AClick = () => {
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
const viy2InputBox_NKS0MChange = (event) => {
  resetTblResults();
  if (event.length > 0) {
    invoiceBtnFlag.value = false;
  } else {
    invoiceBtnFlag.value = true;
  }
};
const viy2ValueList_NS4lKSelect = (params) => {
  queryFormData.customerId = params.id;
};
const viy2ValueList_NS4lKClear = () => {
  queryFormData.customerId = '';
};
const viy2ValueList_NS4lKLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.customerId = '';
  }
};
const viy2ValueList_NS4lKPopoverColumns = computed(() => {
  return customer_column;
});
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
const gridQtyEditRender = computed(() => {
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
        <VuePanel id="viy2Panel_NKS0w" ref="viy2Panel_NKS0w" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_NKS0z" ref="viy2Button_NKS0z" icon-position="left" @click="viy2Button_NKS0zClick">
                返品履歴
              </VueButton>
              <VueButton id="retrieveBtn" ref="retrieveBtn" icon-position="left" type="info" @click="retrieveBtnClick">
                検索
              </VueButton>
              <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
                クリア
              </VueButton>
              <VueButton id="viy2Button_NKS0A" ref="viy2Button_NKS0A" icon-position="left" type="info" :disabled="confirmFlag" @click="viy2Button_NKS0AClick">
                保存
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_NKS0B"
            ref="viy2Row_NKS0B"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="出荷番号"
                prop="invoiceNo"
              >
                <VueInput
                  id="viy2InputBox_NKS0M"
                  ref="viy2InputBox_NKS0M"
                  v-model="queryFormData.invoiceNo"
                  :formatter="(value) => value.toUpperCase()"
                  :parser="(value) => value.toUpperCase()"
                  autofocus
                  :clearable="true"
                  :disabled="returnFlag"
                  :style="{ width: '200px' }"
                  @change="viy2InputBox_NKS0MChange"
                />
              </VueFormItem>
              <VueFormItem
                v-show="false"
                label="出荷倉庫"
                prop="point"
                :rules="rules.viy2InputBox_81yI7aRules"
              >
                <VueInput
                  id="viy2InputBox_81yI7a"
                  ref="viy2InputBox_81yI7a"
                  v-model="queryFormData.point"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
        <VuePanel id="viy2Panel_2KN3Z" ref="viy2Panel_2KN3Z" title="返品情報">
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
                prop="comment"
              >
                <VueValueList
                  id="viy2ValueList_NS4lK"
                  ref="viy2ValueList_NS4lK"
                  :popover-component="valulistWin"
                  v-model="queryFormData.comment"
                  :use-common-popover="true"
                  :toggle-popover-on-click="true"
                  select-field="desc"
                  :use-popover="true"
                  :popover-width="500"
                  :use-popup="false"
                  width="250px"
                  :popover-columns="viy2ValueList_NS4lKPopoverColumns"
                  :popover-query-method="viy2ValueList_NS4lKPopoverQueryMethod"
                  @select="viy2ValueList_NS4lKSelect"
                  @clear="viy2ValueList_NS4lKClear"
                  @leave="viy2ValueList_NS4lKLeave"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                label="返品インボイス番号"
                label-width="150px"
                prop="returnInvoiceNo"
              >
                <VueInput
                  id="viy2InputBox_1rTvxe2"
                  ref="viy2InputBox_1rTvxe2"
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
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_TGAGL"
        ref="viy2Flex_TGAGL"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2LCLT" ref="viy2Panel_2LCLT" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" height="auto" :show-footer="true" :data="gridDs.content" :edit-rules="gridRules" :edit-config="gridEditConfig" :checkbox-config="gridCheckboxConfig" :mouse-config="gridMouseConfig" @cell-click="gridCellClick" @checkbox-change="gridCheckboxChange">
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
            <VueSelectionColumn
              align="center"
              check-field="checked"
              width="50px"
              header-align="center"
              type="checkbox"
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
            <VueNumberColumn
              :edit-render="gridQtyEditRender"
              field="qty"
              align="right"
              :sortable="true"
              title="出荷数"
              width="100px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>

<style type="text/css" scoped>
:deep(.text .vue-table-cell--title::before) {
content: "*";
color: rgb(245, 116, 112); /* 设置第一个字符的颜色为红色 */
}
</style>
