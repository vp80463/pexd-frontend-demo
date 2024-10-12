<script setup>
import { IconArrowLeftBold, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
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
  name: 'spq0502_01',
});
const form = ref();
const viy2Flex_SgqAi = ref();
const queryForm = ref();
const viy2Panel_1qB4L = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_28hKZ = ref();
const viy2DateTimePicker_7cxUgM = ref();
const viy2DateTimePicker_7cxUgY = ref();
const viy2Button_7cxUgZ = ref();
const viy2Button_7cxUk0 = ref();
const viy2Radio_7cxUk1 = ref();
const viy2Select_7cxUkd = ref();
const viy2Select_1a1t5k4 = ref();
const viy2Select_3UTmVK = ref();
const viy2Select_3UTMNC = ref();
const viy2Flex_Sgypv = ref();
const viy2Panel_1r1DW = ref();
const viy2Button_5heur2 = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', searchType: 'companyWide', datafieldviy2Select_m5rXO: [], productCd: '', productCd: '', productCd: '',
});
const rules = reactive({
  viy2DateTimePicker_7cxUgMRules: [
    {
      required: true,
      message: t('errors.required', [t('label.date')]),
      enabled: validataFlag,
    },
  ],
  viy2DateTimePicker_7cxUgYRules: [
    {
      required: true,
      message: t('errors.required', [t('label.date')]),
      enabled: validataFlag,
    },
  ],
  viy2Radio_7cxUk1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_7cxUkdRules: [
    {
      required: true,
      message: '入力してください。',
    },
  ],
});
const viy2Radio_7cxUk1Opts = reactive([
  { value: 'companyWide', label: '全社' },
  { value: 'salesman', label: 'セールスマン' },
  { value: 'consumer', label: '販売店' },
  { value: 'internalDivision', label: '内部課' },
]);
const viy2Select_7cxUkdOpts = reactive([
  {
    label:
'member1',
    value:
'1',
  },
  {
    label:
'member2',
    value:
'2',
  },
  {
    label:
'member3',
    value:
'3',
  },
  {
    label:
'member4',
    value:
'4',
  },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const findSpartsMIListApi = useApi({
  url: '/parts/spq0502/findPartsMIList.json',
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
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const exportDsApi = useApi({
  url: '/parts/spq0502/doDownload.json',
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
      a.download = 'SPQ0502_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    findSpartsMIListApi.runAsync();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
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
const viy2Button_7cxUgZClick = () => {
  if (queryFormData.dateFrom == null || queryFormData.dateFrom == '') {
    queryFormData.dateFrom = firstDay;
  }
  if (queryFormData.dateTo == null || queryFormData.dateTo == '') {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
};
const viy2Button_7cxUk0Click = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2Radio_7cxUk1Change = (value) => {
  debugger;
  if (value == 'companyWide') {
    // 隐藏 表示タイプ、
    assignShow.value = false;
  } else if (value == 'salesman') {
    assignShow.value = true;
  } else if (value == 'consumer') {
    assignShow.value = true;
  } else if (value == 'internalDivision') {
    assignShow.value = false;
  }
}
;
const viy2Select_1a1t5k4Change = (value, data) => {
  queryFormData.pointCd = data.code;
};
const viy2Select_3UTmVKChange = (value, data) => {
  queryFormData.pointCd = data.code;
};
const viy2Select_3UTMNCChange = (value, data) => {
  queryFormData.pointCd = data.code;
};
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const gridSearchTypedEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridConsumerEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridGroupTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridGroupTypeNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReturnLine1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnLine2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnLine4EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnLine6231EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnLine245EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSoCancelLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnLine52EditRender = computed(() => {
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
const gridInvoiceAmtFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridInvoiceAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridInvoiceCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      textAlign: 'right',
    },
  };
});
const gridSalesProfitEditRender = computed(() => {
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
  queryFormData.customerCd = '';
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
// 条件改变，清空明细
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
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
// Rate 格式转换
const percentFormat = (cellValue) => {
  return `${(cellValue * 100).toFixed(0)}%`;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_SgqAi"
      ref="viy2Flex_SgqAi"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_1qB4L" ref="viy2Panel_1qB4L" :title="t('label.searchCondition')">
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
                :label="t('label.targetDay')"
                label-width="100px"
                prop="dateFrom"
                :rules="rules.viy2DateTimePicker_7cxUgMRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_7cxUgM"
                  ref="viy2DateTimePicker_7cxUgM"
                  v-model="queryFormData.dateFrom"
                  :shortcuts="datePickerShortcuts"
                  type="date"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0"
                prop="dateTo"
                :rules="rules.viy2DateTimePicker_7cxUgYRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_7cxUgY"
                  ref="viy2DateTimePicker_7cxUgY"
                  v-model="queryFormData.dateTo"
                  :shortcuts="datePickerShortcuts"
                  :enabled="validataFlag"
                  type="date"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
              <VueButton id="viy2Button_7cxUgZ" ref="viy2Button_7cxUgZ" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_7cxUgZClick" />
              <VueButton id="viy2Button_7cxUk0" ref="viy2Button_7cxUk0" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_7cxUk0Click" />
              <VueFormItem
                :label="t('label.searchType')"
                label-width="100px"
                prop="searchType"
                :rules="rules.viy2Radio_7cxUk1Rules"
                size="default"
              >
                <VueRadioGroup
                  id="viy2Radio_7cxUk1"
                  ref="viy2Radio_7cxUk1"
                  v-model="queryFormData.searchType"
                  radio-style="button"
                  direction="horizontal"
                  :split="false"
                  split-size="default"
                  @change="viy2Radio_7cxUk1Change"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_7cxUk1Opts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                v-if="assignShow"
                label-width="10px"
                prop="datafieldviy2Select_m5rXO"
                :rules="rules.viy2Select_7cxUkdRules"
              >
                <VueSelect
                  id="viy2Select_7cxUkd"
                  ref="viy2Select_7cxUkd"
                  v-model="queryFormData.datafieldviy2Select_m5rXO"
                  :style="{ width: '200px' }"
                  :collapse-tags="true"
                  :multiple="true"
                  :filterable="true"
                  :placeholder="placeholderNm"
                  :collapse-tags-tooltip="true"
                  :options="viy2Select_7cxUkdOpts"
                />
              </VueFormItem>
              <VueFormItem
                label="大区分"
                label-width="100px"
                prop="productCd"
              >
                <VueSelect
                  id="viy2Select_1a1t5k4"
                  ref="viy2Select_1a1t5k4"
                  v-model="queryFormData.productCd"
                  :style="{ width: '100px' }"
                  :collapse-tags="true"
                  :clearable="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :options="pointDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                  @change="viy2Select_1a1t5k4Change"
                />
              </VueFormItem>
              <VueFormItem
                label="中区分"
                label-width="100px"
                prop="productCd"
              >
                <VueSelect
                  id="viy2Select_3UTmVK"
                  ref="viy2Select_3UTmVK"
                  v-model="queryFormData.productCd"
                  :style="{ width: '100px' }"
                  :collapse-tags="true"
                  :clearable="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :options="pointDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                  @change="viy2Select_3UTmVKChange"
                />
              </VueFormItem>
              <VueFormItem
                label="小区分"
                label-width="100px"
                prop="productCd"
              >
                <VueSelect
                  id="viy2Select_3UTMNC"
                  ref="viy2Select_3UTMNC"
                  v-model="queryFormData.productCd"
                  :style="{ width: '100px' }"
                  :collapse-tags="true"
                  :clearable="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :options="pointDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                  @change="viy2Select_3UTMNCChange"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_Sgypv"
        ref="viy2Flex_Sgypv"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_1r1DW" ref="viy2Panel_1r1DW" :title="t('label.detailInfo')" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
                {{ t('button.export') }}
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="findSpartsMIList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
              aggregate-label="total:"
              width="50px"
              min-width="50px"
              header-align="center"
              :title="t('label.seqNo')"
            />
            <VueInputColumn
              :edit-render="gridSearchTypedEditRender"
              field="searchTyped"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.targetDay')"
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridConsumerEditRender"
              field="consumer"
              show-overflow="tooltip"
              :sortable="true"
              title="販売店"
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridGroupTypeEditRender"
              field="groupType"
              show-overflow="tooltip"
              :sortable="true"
              title="商品区分"
              width="140px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridGroupTypeNmEditRender"
              field="groupTypeNm"
              show-overflow="tooltip"
              :sortable="true"
              title="区分名称"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridReturnLine1EditRender"
              field="returnLine1"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="受注件数"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridReturnLine2EditRender"
              field="returnLine2"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="出荷件数"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridReturnLine4EditRender"
              field="returnLine4"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="引当率"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridReturnLine6231EditRender"
              field="returnLine6231"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="発注件数"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridReturnLine245EditRender"
              field="returnLine245"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="受注残件数"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridSoCancelLineEditRender"
              field="soCancelLine"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="キャンセル数"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridReturnLine52EditRender"
              field="returnLine52"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="仕入件数"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridReturnLineEditRender"
              field="returnLine"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              title="返品数"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridInvoiceAmtFormatter"
              :edit-render="gridInvoiceAmtEditRender"
              field="invoiceAmt"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              :title="t('label.salesAmount')"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridInvoiceCostEditRender"
              field="invoiceCost"
              align="right"
              aggregate="sum"
              footer-align="right"
              :precision="2"
              :sortable="true"
              width="140px"
              :title="t('label.salesCost')"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridSalesProfitEditRender"
              field="salesProfit"
              align="right"
              footer-align="right"
              :sortable="true"
              width="180px"
              :title="t('label.salesProfit')"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
