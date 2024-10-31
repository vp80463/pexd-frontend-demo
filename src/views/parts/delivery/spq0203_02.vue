<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
import { formatPrice } from '@/pj-commonutils.js';
const props = defineProps({
  initData: Object,
});
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
defineOptions({
  name: 'spq0203_02',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_1M67GZ = ref();
const viy2Flex_13qVCS = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_95TIyi = ref();
const viy2InputBox_56ddTC = ref();
const viy2DateTimePicker_95TIyw = ref();
const viy2InputBox_95TIyK = ref();
const viy2InputBox_95TIyt = ref();
const viy2InputBox_48oW7U = ref();
const viy2InputBox_48rSGw = ref();
const viy2InputBox_48t01E = ref();
const viy2InputBox_95TIyx = ref();
const viy2InputBox_48wueO = ref();
const viy2InputBox_48wdeW = ref();
const viy2InputBox_48vKDy = ref();
const viy2InputBox_48tGmi = ref();
const viy2Flex_13qYsD = ref();
const viy2Panel_wZlWr = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Row_13rcNm = ref();
const pagination = ref();
const formData = reactive({
});
const orderFormData = reactive({
  duNo: '', invoiceDate: '', customer: '', invoiceNo: '', customer: '', customerAddress: '', customerTel: '', point: '', customerFrom: '', customerFromAddress: '', customerFromTel: '', customerFromTel: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  url: '/parts/spq0203/getInvoiceItemList.json',
  method: 'post',
  data: () => {
    orderFormData.pageSize = paginationPageSize.value;
    orderFormData.currentPage = paginationCurrentPage.value;
    return { ...orderFormData };
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const viy2Button_1M67GZClick = () => {
  doClose();
};
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSalesQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridShippedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridStandPriceFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPrice(row.cellValue);
  }
  return row.cellValue;
};
const gridStandPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSellingPriceFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPrice(row.cellValue);
  }
  return row.cellValue;
};
const gridSellingPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSellingPermissonFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatPrice(row.cellValue);
  }
  return row.cellValue;
};
const gridSellingPermissonEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridShipmentAmountNoTaxEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridShipmentAmountTaxEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSalesDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
    },
  };
});
const gridSiwakecdEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      clearable: true,
      selectField: 'code',
      usePopover: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
      popupPagable: true,
      closeOnClickModal: true,
    },
  };
});
const gridCommentEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      clearable: true,
      selectField: 'code',
      usePopover: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
      popupPagable: true,
      closeOnClickModal: true,
    },
  };
});
const gridCustomerInfoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      clearable: true,
      selectField: 'code',
      usePopover: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
      popupPagable: true,
      closeOnClickModal: true,
    },
  };
});
const paginationCurrentChange = () => {
  if (gridDs.value.totalElements === 0) {
    return;
  }
  gridDsApi.runAsync();
};
onMounted(() => {
});
watch(() => props.initData, (newVal) => {
  if (newVal) {
    paginationPageSize.value = PAGE_SIZE;
    orderFormData.invoiceId = newVal.invoiceId;
    orderFormData.invoiceNo = newVal.invoiceNo;
    orderFormData.invoiceDate = newVal.invoiceDate;
    orderFormData.point = newVal.point;
    orderFormData.customer = newVal.customer;
    orderFormData.invoiceAmount = newVal.invoiceAmount;
    gridDsApi.runAsync();
  }
}, {
  immediate: true,
  deep: true,
});
const doClose = () => {
  emit('close');
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_zgSti"
      ref="viy2Row_zgSti"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 16 }"
      >
        <VueText id="viy2Text_1M67GY" ref="viy2Text_1M67GY" class="aside-title-text">
          出荷履歴明細（販売店別）
        </VueText>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 8 }"
      >
        <VueButton id="viy2Button_1M67GZ" ref="viy2Button_1M67GZ" icon-position="left" @click="viy2Button_1M67GZClick">
          閉じる
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_13qVCS"
      ref="viy2Flex_13qVCS"
      direction="column"
      class="full-height-b3t"
    >
      <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="基本情報">
        <VueForm
          id="orderForm"
          ref="orderForm"
          label-width="130px"
          :model="orderFormData"
        >
          <VueRow
            id="viy2Row_95TIyi"
            ref="viy2Row_95TIyi"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="出荷番号"
                prop="duNo"
              >
                <VueInput
                  id="viy2InputBox_56ddTC"
                  ref="viy2InputBox_56ddTC"
                  v-model="orderFormData.duNo"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="出荷日"
                prop="invoiceDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_95TIyw"
                  ref="viy2DateTimePicker_95TIyw"
                  v-model="orderFormData.invoiceDate"
                  type="date"
                  :disabled="false"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="受注先"
                prop="customer"
              >
                <VueInput
                  id="viy2InputBox_95TIyK"
                  ref="viy2InputBox_95TIyK"
                  v-model="orderFormData.customer"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="納品書番号"
                prop="invoiceNo"
              >
                <VueInput
                  id="viy2InputBox_95TIyt"
                  ref="viy2InputBox_95TIyt"
                  v-model="orderFormData.invoiceNo"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="出荷先"
                prop="customer"
              >
                <VueInput
                  id="viy2InputBox_48oW7U"
                  ref="viy2InputBox_48oW7U"
                  v-model="orderFormData.customer"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="出荷先住所"
                prop="customerAddress"
              >
                <VueInput
                  id="viy2InputBox_48rSGw"
                  ref="viy2InputBox_48rSGw"
                  v-model="orderFormData.customerAddress"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="出荷先電話番号"
                prop="customerTel"
              >
                <VueInput
                  id="viy2InputBox_48t01E"
                  ref="viy2InputBox_48t01E"
                  v-model="orderFormData.customerTel"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                v-show="false"
                label="出庫倉庫"
                prop="point"
              >
                <VueInput
                  id="viy2InputBox_95TIyx"
                  ref="viy2InputBox_95TIyx"
                  v-model="orderFormData.point"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="出荷元"
                prop="customerFrom"
              >
                <VueInput
                  id="viy2InputBox_48wueO"
                  ref="viy2InputBox_48wueO"
                  v-model="orderFormData.customerFrom"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="出荷元住所"
                prop="customerFromAddress"
              >
                <VueInput
                  id="viy2InputBox_48wdeW"
                  ref="viy2InputBox_48wdeW"
                  v-model="orderFormData.customerFromAddress"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="出荷元電話番号"
                prop="customerFromTel"
              >
                <VueInput
                  id="viy2InputBox_48vKDy"
                  ref="viy2InputBox_48vKDy"
                  v-model="orderFormData.customerFromTel"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="出荷元FAX"
                prop="customerFromTel"
              >
                <VueInput
                  id="viy2InputBox_48tGmi"
                  ref="viy2InputBox_48tGmi"
                  v-model="orderFormData.customerFromTel"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VueFlex
        id="viy2Flex_13qYsD"
        ref="viy2Flex_13qYsD"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" height="auto" :show-footer="true" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueRow
              id="viy2Row_AsHNi"
              ref="viy2Row_AsHNi"
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
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              :sortable="true"
              aggregate-label="合計"
              title="受注番号"
              width="120px"
            />
            <VueInputColumn
              :edit-render="gridOrderPartsNoEditRender"
              field="orderPartsNo"
              :sortable="true"
              title="受注部品番号"
              width="140px"
            />
            <VueInputColumn
              :edit-render="gridOrderPartsNmEditRender"
              field="orderPartsNm"
              :sortable="true"
              title="受注部品名称"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridAllocatedPartsNoEditRender"
              field="allocatedPartsNo"
              :sortable="true"
              title="引当部品番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridAllocatedPartsNmEditRender"
              field="allocatedPartsNm"
              :sortable="true"
              title="引当部品名称"
              width="150px"
            />
            <VueNumberColumn
              :edit-render="gridSalesQtyEditRender"
              field="salesQty"
              align="right"
              :sortable="true"
              title="受注数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridShippedQtyEditRender"
              field="shippedQty"
              align="right"
              :sortable="true"
              title="出荷数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridStandPriceFormatter"
              :edit-render="gridStandPriceEditRender"
              field="standPrice"
              align="right"
              :sortable="true"
              title="希望小売価格"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridSellingPriceFormatter"
              :edit-render="gridSellingPriceEditRender"
              field="sellingPrice"
              align="right"
              :sortable="true"
              title="仕切価格"
              width="110px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridSellingPermissonFormatter"
              :edit-render="gridSellingPermissonEditRender"
              field="sellingPermisson"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="手数料"
              width="110px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridShipmentAmountNoTaxEditRender"
              field="shipmentAmountNoTax"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="金額(税抜)"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridShipmentAmountTaxEditRender"
              field="shipmentAmountTax"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="金額(税込)"
              width="140px"
              header-align="center"
            />
            <VueDateTimeColumn
              :edit-render="gridSalesDateEditRender"
              field="salesDate"
              align="center"
              :sortable="true"
              title="受注日"
              width="130px"
            />
            <VueValueListColumn
              :edit-render="gridSiwakecdEditRender"
              field="siwakecd"
              :clearable="true"
              show-overflow="tooltip"
              :sortable="true"
              title="仕訳コード"
              width="145px"
            />
            <VueValueListColumn
              :edit-render="gridCommentEditRender"
              field="comment"
              :clearable="true"
              show-overflow="tooltip"
              :sortable="true"
              title="コメント"
              width="395px"
            />
            <VueValueListColumn
              :edit-render="gridCustomerInfoEditRender"
              field="customerInfo"
              :clearable="true"
              show-overflow="tooltip"
              :sortable="true"
              title="お客様情報"
              width="305px"
            />
          </VueTable>
        </VuePanel>
        <VueRow
          id="viy2Row_13rcNm"
          ref="viy2Row_13rcNm"
        >
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            class="paging-area-margin"
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
              :total="gridDs.totalElements || 0"
              @current-change="paginationCurrentChange"
            />
          </VueCol>
        </VueRow>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
