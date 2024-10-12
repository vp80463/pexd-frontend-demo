<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { formatAmount } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const currentMonth = dayjs().format('YYYYMM');
const exportFlag = ref(true);
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
const router = useRouter();
const placeholderNm = ref('');
const assignShow = ref(false);
const validataFlag = ref(true);
defineOptions({
  name: 'spq0518_01',
});
const form = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const viy2Panel_1GFuq = ref();
const viy2Button_6Eq86q = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_28hKZ = ref();
const viy2DateTimePicker_L6xsi = ref();
const viy2Flex_THsL1 = ref();
const viy2Panel_7m7hlM = ref();
const viy2Button_7m7hlO = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetMonth: '',
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
const largeGroupDsApi = useApi({
  url: '/common/helper/getSingleLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const largeGroupDs = largeGroupDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const findStockAccountListApi = useApi({
  url: '/parts/spq0508/findStockAccountList.json',
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
  manual: true,
});
const findStockAccountList = findStockAccountListApi.data;
const exportDsApi = useApi({
  url: '/parts/spq0508/doDownload01.json',
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
      a.download = 'SPQ0508_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    findStockAccountListApi.runAsync();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const viy2Button_6Eq86qClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      findStockAccountListApi.runAsync();
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
const viy2Button_7m7hlOClick = () => {
  onExport();
};
const gridCellDblclick = (row) => {
  skipToDetail(row);
};
const gridTargetMonthFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridTargetMonthEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridLargeGroupCd1Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridLargeGroupCd1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridLargeGroupCd5Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridLargeGroupCd5EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridEvaluatingProfitLossFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridEvaluatingProfitLossEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAdjustmentPlusAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAdjustmentPlusAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAdjustmentMinusAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAdjustmentMinusAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAdjustmentPlusAmt123Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAdjustmentPlusAmt123EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
// 初始化targetMonth 和 point
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
// 条件改变，清空明细
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
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
  findStockAccountList.value.splice(0);
  exportFlag.value = true;
};
const skipToDetail = (row) => {
  const query = {
    targetMonth: queryFormData.targetMonth,
    pointCd: queryFormData.pointCd,
    pointNm: queryFormData.point,
    largeGroupCd: queryFormData.largeGroupCd,
    largeGroupNm: queryFormData.largeGroupNm,
  };
  useMultiTags().openTag({
    name: 'spq0508_02', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spq0508_02' }).meta.title = t('menu.SPQ0508_02');
  // router导航到页面并传递参数
  router.push({ name: 'spq0508_02', data: query });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_SMXA1"
      ref="viy2Flex_SMXA1"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_1GFuq" ref="viy2Panel_1GFuq" :title="t('label.searchCondition')">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_6Eq86q" ref="viy2Button_6Eq86q" icon-position="left" type="info" @click="viy2Button_6Eq86qClick">
                {{ t('button.retrieve') }}
              </VueButton>
              <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
                {{ t('button.reset') }}
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_28hKZ"
            ref="viy2Row_28hKZ"
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
                :rules="rules.viy2DateTimePicker_L6xsiRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_L6xsi"
                  ref="viy2DateTimePicker_L6xsi"
                  v-model="queryFormData.targetMonth"
                  type="month"
                  :style="{ width: '100px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_THsL1"
        ref="viy2Flex_THsL1"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_7m7hlM" ref="viy2Panel_7m7hlM" title="明細情報" collapse-icon-position="left" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_7m7hlO" ref="viy2Button_7m7hlO" :disabled="exportFlag" @click="viy2Button_7m7hlOClick">
                ファイル出力
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="findStockAccountList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
              :title="t('label.seqNo')"
            />
            <VueNumberColumn
              :formatter="gridTargetMonthFormatter"
              :edit-render="gridTargetMonthEditRender"
              field="targetMonth"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="200px"
              :title="t('label.targetMonth')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridLargeGroupCd1Formatter"
              :edit-render="gridLargeGroupCd1EditRender"
              field="largeGroupCd1"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="200px"
              title="商品区分"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridLargeGroupCd5Formatter"
              :edit-render="gridLargeGroupCd5EditRender"
              field="largeGroupCd5"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="200px"
              title="区分名称"
              header-align="center"
            />
            <VueNumberColumn
              v-if="true"
              :formatter="gridEvaluatingProfitLossFormatter"
              :edit-render="gridEvaluatingProfitLossEditRender"
              field="evaluatingProfitLoss"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              title="評価損益"
              header-align="center"
            />
            <VueNumberColumn
              v-if="true"
              :formatter="gridAdjustmentPlusAmtFormatter"
              :edit-render="gridAdjustmentPlusAmtEditRender"
              field="adjustmentPlusAmt"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              :title="t('label.adjustmentPositive')"
              header-align="center"
            />
            <VueNumberColumn
              v-if="true"
              :formatter="gridAdjustmentMinusAmtFormatter"
              :edit-render="gridAdjustmentMinusAmtEditRender"
              field="adjustmentMinusAmt"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              :title="t('label.adjustmentNegative')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridAdjustmentPlusAmt123Formatter"
              :edit-render="gridAdjustmentPlusAmt123EditRender"
              field="adjustmentPlusAmt123"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="130px"
              title="廃却"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
