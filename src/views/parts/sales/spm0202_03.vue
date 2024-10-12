<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import { formatPartNo, formatQty } from '@/pj-commonutils.js';
const props = defineProps({
  params: Object,
});
const emit = defineEmits(['close']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'spm0202_03',
});
const form = ref();
const viy2Row_zgSti = ref();
const close = ref();
const viy2Flex_k8qZi = ref();
const queryForm = ref();
const viy2Panel_MsIgT = ref();
const viy2Row_MtyaW = ref();
const viy2InputBox_4egpF2 = ref();
const viy2DateTimePicker_GiE8F7 = ref();
const viy2InputBox_GiE8GK = ref();
const viy2Row_7OR0Tc = ref();
const viy2InputBox_4egpFf = ref();
const viy2InputBox_GiE8F4 = ref();
const viy2InputBox_18EBZY = ref();
const viy2Flex_KcTfE = ref();
const viy2Panel_MXmeg = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  returnInvoiceNo: '', returnDate: '', reason: '', invoiceNo: '', customer: '', returnAmt: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/parts/spq0206/getPickingInstructionDetailList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    if (data && data.length > 0) {
      const res = data[0];
      res.point = `${res.pointId} ${res.pointNm}`;
      res.customer = `${res.customerCd} ${res.customerNm}`;
      merge(queryFormData, res);
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const closeClick = () => {
  doClose();
};
const gridProductCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProductNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReturnQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridReturnQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnPriceFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridReturnPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnAmountFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridReturnAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCostFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
watch(() => props.params, (params) => {
  if (params) {
    gridDsApi.runAsync({
      deliveryOrderId: params.deliveryOrderId,
      pickingListId: params.pickingListId,
    });
  }
}, {
  immediate: true,
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
        class="aside-title-row"
        :md="{ span: 16 }"
      >
        <VueText id="viy2Text_RrUe8" ref="viy2Text_RrUe8" class="aside-title-text">
          顧客返品明細
        </VueText>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        class="aside-title-row"
        :md="{ span: 8 }"
      >
        <VueButton id="close" ref="close" icon-position="left" @click="closeClick">
          閉じる
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_k8qZi"
      ref="viy2Flex_k8qZi"
      direction="column"
      class="full-height-b3t"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_MsIgT" ref="viy2Panel_MsIgT" title="基本情報" :collapse="true">
          <VueRow
            id="viy2Row_MtyaW"
            ref="viy2Row_MtyaW"
          >
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="返品番号"
                prop="returnInvoiceNo"
              >
                <VueInput
                  id="viy2InputBox_4egpF2"
                  ref="viy2InputBox_4egpF2"
                  v-model="queryFormData.returnInvoiceNo"
                  :clearable="true"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '300px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="返品日"
                prop="returnDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_GiE8F7"
                  ref="viy2DateTimePicker_GiE8F7"
                  v-model="queryFormData.returnDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="返品理由"
                prop="reason"
              >
                <VueInput
                  id="viy2InputBox_GiE8GK"
                  ref="viy2InputBox_GiE8GK"
                  v-model="queryFormData.reason"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '300px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_7OR0Tc"
            ref="viy2Row_7OR0Tc"
          >
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="出荷番号"
                prop="invoiceNo"
              >
                <VueInput
                  id="viy2InputBox_4egpFf"
                  ref="viy2InputBox_4egpFf"
                  v-model="queryFormData.invoiceNo"
                  :clearable="true"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '300px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="受注先"
                prop="customer"
              >
                <VueInput
                  id="viy2InputBox_GiE8F4"
                  ref="viy2InputBox_GiE8F4"
                  v-model="queryFormData.customer"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '300px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="返品金額"
                prop="returnAmt"
              >
                <VueInput
                  id="viy2InputBox_18EBZY"
                  ref="viy2InputBox_18EBZY"
                  v-model="queryFormData.returnAmt"
                  :clearable="true"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '300px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_KcTfE"
        ref="viy2Flex_KcTfE"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="明細情報" :collapse="true" height="100%">
          <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            <VueInputColumn
              :formatter="gridProductCdFormatter"
              :edit-render="gridProductCdEditRender"
              field="productCd"
              :sortable="true"
              title="部品番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridProductNmEditRender"
              field="productNm"
              aggregate-label="合計"
              footer-align="center"
              :sortable="true"
              width="200px"
              title="部品名称"
            />
            <VueNumberColumn
              :formatter="gridReturnQtyFormatter"
              :edit-render="gridReturnQtyEditRender"
              field="returnQty"
              align="right"
              aggregate="sum"
              :sortable="true"
              width="120px"
              title="返品数"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridReturnPriceFormatter"
              :edit-render="gridReturnPriceEditRender"
              field="returnPrice"
              align="right"
              :sortable="true"
              width="120px"
              title="返品価格"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridReturnAmountFormatter"
              :edit-render="gridReturnAmountEditRender"
              field="returnAmount"
              align="right"
              aggregate="sum"
              :sortable="true"
              width="120px"
              title="返品金額"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridCostFormatter"
              :edit-render="gridCostEditRender"
              field="cost"
              align="right"
              :sortable="true"
              width="120px"
              title="原価"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
