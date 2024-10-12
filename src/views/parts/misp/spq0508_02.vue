<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { formatAmount } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const router = useRouter();
const route = useRoute();
const exportFlag = ref(true);
defineOptions({
  name: 'spq0508_02',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5heur2 = ref();
const viy2Flex_qMgZy = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_L6xsi = ref();
const viy2InputBox_uXUaI = ref();
const viy2InputBox_4ZGTY0 = ref();
const viy2Flex_qMkr2 = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetMonth: '', pointNm: '', largeGroupNm: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const exportDsApi = useApi({
  url: '/parts/spq0508/doDownload.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SPQ0508_02.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    doInit();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const gridDsApi = useApi({
  url: '/parts/spq0508/doPageInitial.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      exportFlag.value = false;
    }
  },
});
const gridDs = gridDsApi.data;
const viy2Button_2gh3EyClick = () => {
  doBack();
};
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const gridDateEditRender = computed(() => {
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
const gridBeginningStockAmountFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridBeginningStockAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReceiptAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      mark: (row, columnConfig, cellValue) => {
        return formatAmount(row.cellValue);
      },
      textAlign: 'right',
    },
  };
});
const gridSalesCostFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSalesCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnCostFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridReturnCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridDisposalCostFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridDisposalCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAdjustmentNegativeFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAdjustmentNegativeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAdjustmentPositiveFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAdjustmentPositiveEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTransferAmountOutFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridTransferAmountOutEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTransferAmountInFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridTransferAmountInEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridBalanceOfCostFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridBalanceOfCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  doInit();
});
const doInit = () => {
  const params = route.query;
  if (Object.entries(params).length !== 0) {
    gridDsApi.runAsync({
      targetMonth: params.targetMonth,
      pointCd: params.pointCd,
      largeGroupCd: params.largeGroupCd,
    });
    // 显示在条件部
    queryFormData.targetMonth = params.targetMonth;
    queryFormData.pointNm = params.pointNm;
    queryFormData.largeGroupNm = params.largeGroupNm;
    queryFormData.pointCd = params.pointCd;
    queryFormData.largeGroupCd = params.largeGroupCd;
  }
};
const doBack = () => {
  router.back();
};
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
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
          {{ t('button.back') }}
        </VueButton>
        <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      />
    </VueRow>
    <VueFlex
      id="viy2Flex_qMgZy"
      ref="viy2Flex_qMgZy"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
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
              :label="t('label.targetMonth')"
              label-width="110px"
              prop="targetMonth"
            >
              <VueDatePicker
                id="viy2DateTimePicker_L6xsi"
                ref="viy2DateTimePicker_L6xsi"
                v-model="queryFormData.targetMonth"
                type="month"
                :readonly="true"
                class="no-border"
                :style="{ width: '110px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ym"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ym"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.point')"
              prop="pointNm"
            >
              <VueInput
                id="viy2InputBox_uXUaI"
                ref="viy2InputBox_uXUaI"
                v-model="queryFormData.pointNm"
                :readonly="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.largeCategory')"
              prop="largeGroupNm"
            >
              <VueInput
                id="viy2InputBox_4ZGTY0"
                ref="viy2InputBox_4ZGTY0"
                v-model="queryFormData.largeGroupNm"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_qMkr2"
        ref="viy2Flex_qMkr2"
        direction="column"
        grow="1"
      >
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
          <VueDateTimeColumn
            :edit-render="gridDateEditRender"
            field="date"
            :aggregate-label="t('label.total')"
            align="center"
            :sortable="true"
            width="110px"
            :title="t('label.date')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridBeginningStockAmountFormatter"
            :edit-render="gridBeginningStockAmountEditRender"
            field="beginningStockAmount"
            footer-align="right"
            aggregate="sum"
            align="right"
            :sortable="true"
            :title="t('label.beginningStockAmount')"
            width="195px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridReceiptAmountEditRender"
            field="receiptAmount"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="180px"
            :title="t('label.receiptAmount')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridSalesCostFormatter"
            :edit-render="gridSalesCostEditRender"
            field="salesCost"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="130px"
            :title="t('label.salesCost')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridReturnCostFormatter"
            :edit-render="gridReturnCostEditRender"
            field="returnCost"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="130px"
            :title="t('label.returnCost')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridDisposalCostFormatter"
            :edit-render="gridDisposalCostEditRender"
            field="disposalCost"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="130px"
            :title="t('label.disposalCost')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridAdjustmentNegativeFormatter"
            :edit-render="gridAdjustmentNegativeEditRender"
            field="adjustmentNegative"
            aggregate="sum"
            footer-align="right"
            align="right"
            :sortable="true"
            :title="t('label.adjustmentNegative')"
            width="130px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridAdjustmentPositiveFormatter"
            :edit-render="gridAdjustmentPositiveEditRender"
            field="adjustmentPositive"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="130px"
            :title="t('label.adjustmentPositive')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridTransferAmountOutFormatter"
            :edit-render="gridTransferAmountOutEditRender"
            field="transferAmountOut"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="160px"
            :title="t('label.transferAmountOut')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridTransferAmountInFormatter"
            :edit-render="gridTransferAmountInEditRender"
            field="transferAmountIn"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="170px"
            :title="t('label.transferAmountIn')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridBalanceOfCostFormatter"
            :edit-render="gridBalanceOfCostEditRender"
            field="balanceOfCost"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="140px"
            :title="t('label.balanceOfCost')"
            header-align="center"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
