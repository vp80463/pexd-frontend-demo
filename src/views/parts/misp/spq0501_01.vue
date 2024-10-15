<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { formatAmount } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const currentMonth = dayjs().format('YYYYMM');
const exportFlag = ref(true);
defineOptions({
  name: 'spq0501_01',
});
const form = ref();
const viy2Flex_uF7QC = ref();
const queryForm = ref();
const viy2Panel_1bFXT = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_1d3oa = ref();
const viy2Select_1rPSyEH = ref();
const viy2DateTimePicker_L6xsi = ref();
const viy2Select_KWCrU = ref();
const viy2Select_7zu8YI = ref();
const viy2Flex_uFkkE = ref();
const viy2Panel_GXUTM = ref();
const viy2Button_5heur2 = ref();
const grid = ref();
const viy2Panel_GY0d8 = ref();
const viy2Table_8XEr2t = ref();
const formData = reactive({
});
const queryFormData = reactive({
  deliveryPointId: '', targetMonth: '', middleGroupCd: '', abcType: '',
});
const rules = reactive({
  viy2DateTimePicker_L6xsiRules: [
    {
      required: true,
      message: t('errors.required', [t('label.targetMonth')]),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2Table_8XEr2tEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_8XEr2tMouseConfig = reactive({
  extension: true,
});
const middleGroupDsApi = useApi({
  url: '/common/helper/getMiddleGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const middleGroupDs = middleGroupDsApi.data;
const exportDsApi = useApi({
  url: '/parts/spq0501/doDownload.json',
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
      a.download = 'SPQ0501_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    findSpartsMIListApi.runAsync();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const findSpartsMIListApi = useApi({
  url: '/parts/spq0501/findPartsMIList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      exportFlag.value = false;
    }
  },
  manual: true,
});
const findSpartsMIList = findSpartsMIListApi.data;
const costUsageDsApi = useApi({
  url: '/common/helper/getCostUsageList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const costUsageDs = costUsageDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      findSpartsMIListApi.runAsync();
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
const viy2Select_1rPSyEHChange = (value, data) => {
  queryFormData.pointCd = data.code;
};
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const gridTargetMonthEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAbcTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAllocateLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridBoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCancelLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAllocateRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const gridAllocateRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridShipmentLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPoEoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPoEoRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const gridPoEoRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const gridPoRoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPoRoRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const gridPoRoRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const gridPoHoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPoHoRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const gridPoHoRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPoWoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPoWoRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const gridPoWoRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReceiptLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tTargetMonthEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_8XEr2tMiddleGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_8XEr2tAbcTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_8XEr2tSoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tSoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tAllocatedAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tAllocatedAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tBoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tBoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tCancelAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tCancelAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tAllocateAmtRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8XEr2tAllocateAmtRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tShipmentAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tShipmentAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tReturnAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tReturnAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tPoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoEoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tPoEoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoEoAmtRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8XEr2tPoEoAmtRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoRoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tPoRoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoRoAmtRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8XEr2tPoRoAmtRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoHoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tPoHoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoHoAmtRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8XEr2tPoHoAmtRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoWoAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tPoWoAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tPoWoAmtRateFormatter = (row, columnConfig, cellValue) => {
  return percentFormat(row.cellValue);
};
const viy2Table_8XEr2tPoWoAmtRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Table_8XEr2tReceiveAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const viy2Table_8XEr2tReceiveAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
// 初始化targetMonth 和 point
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.targetMonth = currentMonth;
});
// 条件改变，清空明细
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
// Rate 格式转换
const percentFormat = (cellValue) => {
  return `${(cellValue * 100).toFixed(0)}%`;
};
// 清空条件部
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.targetMonth = currentMonth;
};
const resetTblResults = () => {
  findSpartsMIList.value.splice(0);
  exportFlag.value = true;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_uF7QC"
      ref="viy2Flex_uF7QC"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_1bFXT" ref="viy2Panel_1bFXT" :title="t('label.searchCondition')">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
                {{ t('button.retrieve') }}
              </VueButton>
              <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
                {{ t('button.reset') }}
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_1d3oa"
            ref="viy2Row_1d3oa"
          >
            <VueCol
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                v-if="false"
                label="出荷倉庫"
                prop="deliveryPointId"
              >
                <VueSelect
                  id="viy2Select_1rPSyEH"
                  ref="viy2Select_1rPSyEH"
                  v-model="queryFormData.deliveryPointId"
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
                  @change="viy2Select_1rPSyEHChange"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.targetMonth')"
                label-width="110px"
                prop="targetMonth"
                :rules="rules.viy2DateTimePicker_L6xsiRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_L6xsi"
                  ref="viy2DateTimePicker_L6xsi"
                  v-model="queryFormData.targetMonth"
                  type="month"
                  :style="{ width: '110px' }"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.middleCategory')"
                prop="middleGroupCd"
              >
                <VueSelect
                  id="viy2Select_KWCrU"
                  ref="viy2Select_KWCrU"
                  v-model="queryFormData.middleGroupCd"
                  :style="{ width: '200px' }"
                  :collapse-tags="true"
                  :collapse-tags-tooltip="true"
                  :clearable="true"
                  :options="middleGroupDs"
                  :props="{
                    label: 'categoryNm',
                    value: 'categoryCd',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.costUsage')"
                prop="abcType"
              >
                <VueSelect
                  id="viy2Select_7zu8YI"
                  ref="viy2Select_7zu8YI"
                  v-model="queryFormData.abcType"
                  :style="{ width: '150px' }"
                  :collapse-tags="true"
                  :collapse-tags-tooltip="true"
                  :clearable="true"
                  :options="costUsageDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeData1',
                  }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_uFkkE"
        ref="viy2Flex_uFkkE"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_GXUTM" ref="viy2Panel_GXUTM" :title="t('label.detailInfo')" height="50%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
                {{ t('button.export') }}
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="findSpartsMIList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              :title="t('label.seqNo')"
            />
            <VueInputColumn
              :edit-render="gridTargetMonthEditRender"
              field="targetMonth"
              show-overflow="tooltip"
              :sortable="true"
              aggregate-label="Total"
              :title="t('label.targetMonth')"
              width="160px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridMiddleGroupNmEditRender"
              field="middleGroupNm"
              show-overflow="tooltip"
              :sortable="true"
              title="中分类"
              width="160px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridAbcTypeEditRender"
              field="abcType"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.costUsage')"
              width="160px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridSoLineEditRender"
              field="soLine"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.salesOrderLines')"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridAllocateLineEditRender"
              field="allocateLine"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.allocatedLines')"
              width="210px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridBoLineEditRender"
              field="boLine"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.backOrderLines')"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridCancelLineEditRender"
              field="cancelLine"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.cancelLines')"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :formatter="gridAllocateRateFormatter"
              :edit-render="gridAllocateRateEditRender"
              field="allocateRate"
              :sortable="true"
              align="right"
              :title="t('label.allocateRate')"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridShipmentLineEditRender"
              field="shipmentLine"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.shipmentLine')"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridReturnLineEditRender"
              field="returnLine"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.returnLines')"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridPoEoLineEditRender"
              field="poEoLine"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.purchaseOrderEOLines')"
              width="170px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridPoEoRateFormatter"
              :edit-render="gridPoEoRateEditRender"
              field="poEoRate"
              align="right"
              :precision="2"
              :sortable="true"
              :title="t('label.purchaseOrderEORate')"
              width="175px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridPoRoLineEditRender"
              field="poRoLine"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.purchaseOrderROLines')"
              width="190px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridPoRoRateFormatter"
              :edit-render="gridPoRoRateEditRender"
              field="poRoRate"
              footer-align="right"
              align="right"
              :precision="2"
              :sortable="true"
              :title="t('label.purchaseOrderRORate')"
              width="190px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridPoHoLineEditRender"
              field="poHoLine"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.purchaseOrderHOLines')"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridPoHoRateFormatter"
              :edit-render="gridPoHoRateEditRender"
              field="poHoRate"
              align="right"
              :sortable="true"
              :title="t('label.purchaseOrderHORate')"
              width="160px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridPoWoLineEditRender"
              field="poWoLine"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.purchaseOrderWOLines')"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridPoWoRateFormatter"
              :edit-render="gridPoWoRateEditRender"
              field="poWoRate"
              align="right"
              :sortable="true"
              :title="t('label.purchaseOrderWORate')"
              width="160px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridReceiptLineEditRender"
              field="receiptLine"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="受領行数"
              width="150px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
        <VuePanel id="viy2Panel_GY0d8" ref="viy2Panel_GY0d8" :title="t('title.detailAmount')" height="50%">
          <VueTable id="viy2Table_8XEr2t" ref="viy2Table_8XEr2t" header-align="center" :show-footer="true" height="auto" :data="findSpartsMIList" :edit-config="viy2Table_8XEr2tEditConfig" :mouse-config="viy2Table_8XEr2tMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              :title="t('label.seqNo')"
            />
            <VueInputColumn
              :edit-render="viy2Table_8XEr2tTargetMonthEditRender"
              field="targetMonth"
              show-overflow="tooltip"
              :sortable="true"
              aggregate-label="Total"
              :title="t('label.targetMonth')"
              width="160px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="viy2Table_8XEr2tMiddleGroupNmEditRender"
              field="middleGroupNm"
              show-overflow="tooltip"
              :sortable="true"
              title="中分类"
              width="160px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="viy2Table_8XEr2tAbcTypeEditRender"
              field="abcType"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.costUsage')"
              width="160px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tSoAmtFormatter"
              :edit-render="viy2Table_8XEr2tSoAmtEditRender"
              field="soAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.saleOrderAmount')"
              width="170px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tAllocatedAmtFormatter"
              :edit-render="viy2Table_8XEr2tAllocatedAmtEditRender"
              field="allocatedAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.allocatedAmount')"
              width="160px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tBoAmtFormatter"
              :edit-render="viy2Table_8XEr2tBoAmtEditRender"
              field="boAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.boAmount')"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tCancelAmtFormatter"
              :edit-render="viy2Table_8XEr2tCancelAmtEditRender"
              field="cancelAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.cancelAmount')"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tAllocateAmtRateFormatter"
              :edit-render="viy2Table_8XEr2tAllocateAmtRateEditRender"
              field="allocateAmtRate"
              footer-align="right"
              align="right"
              :precision="2"
              :sortable="true"
              :title="t('label.allocateRate')"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tShipmentAmtFormatter"
              :edit-render="viy2Table_8XEr2tShipmentAmtEditRender"
              field="shipmentAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.shipmentAmount')"
              width="195px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tReturnAmtFormatter"
              :edit-render="viy2Table_8XEr2tReturnAmtEditRender"
              field="returnAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.returnAmount')"
              width="170px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tPoAmtFormatter"
              :edit-render="viy2Table_8XEr2tPoAmtEditRender"
              field="poAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.purchaseAmount')"
              width="170px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tPoEoAmtFormatter"
              :edit-render="viy2Table_8XEr2tPoEoAmtEditRender"
              field="poEoAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.purchaseOrderEAmount')"
              width="210px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tPoEoAmtRateFormatter"
              :edit-render="viy2Table_8XEr2tPoEoAmtRateEditRender"
              field="poEoAmtRate"
              footer-align="right"
              align="right"
              :precision="2"
              :sortable="true"
              :title="t('label.purchaseOrderEORate')"
              width="190px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tPoRoAmtFormatter"
              :edit-render="viy2Table_8XEr2tPoRoAmtEditRender"
              field="poRoAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.purchaseOrderRAmount')"
              width="220px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tPoRoAmtRateFormatter"
              :edit-render="viy2Table_8XEr2tPoRoAmtRateEditRender"
              field="poRoAmtRate"
              footer-align="right"
              align="right"
              :precision="2"
              :sortable="true"
              :title="t('label.purchaseOrderRORate')"
              width="190px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tPoHoAmtFormatter"
              :edit-render="viy2Table_8XEr2tPoHoAmtEditRender"
              field="poHoAmt"
              footer-align="right"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.purchaseOrderHAmount')"
              width="210px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tPoHoAmtRateFormatter"
              :edit-render="viy2Table_8XEr2tPoHoAmtRateEditRender"
              field="poHoAmtRate"
              align="right"
              :sortable="true"
              :title="t('label.purchaseOrderHORate')"
              width="160px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tPoWoAmtFormatter"
              :edit-render="viy2Table_8XEr2tPoWoAmtEditRender"
              field="poWoAmt"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.purchaseOrderWAmount')"
              width="210px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tPoWoAmtRateFormatter"
              :edit-render="viy2Table_8XEr2tPoWoAmtRateEditRender"
              field="poWoAmtRate"
              align="right"
              :sortable="true"
              :title="t('label.purchaseOrderWORate')"
              width="160px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="viy2Table_8XEr2tReceiveAmtFormatter"
              :edit-render="viy2Table_8XEr2tReceiveAmtEditRender"
              field="receiveAmt"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.receiptAmount')"
              width="180px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
