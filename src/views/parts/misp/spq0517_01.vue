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
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
const router = useRouter();
const placeholderNm = ref('');
const assignShow = ref(false);
const validataFlag = ref(true);
const gridGroupShow = ref(false);
defineOptions({
  name: 'spq0517_01',
});
const form = ref();
const viy2Flex_SgqAi = ref();
const queryForm = ref();
const viy2Panel_1qB4L = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_28hKZ = ref();
const viy2DateTimePicker_2XqVWY = ref();
const viy2Radio_7cxUk1 = ref();
const viy2Select_7cxUkd = ref();
const viy2Select_1a1t5k4 = ref();
const viy2Select_3UTmVK = ref();
const viy2Select_3UTMNC = ref();
const viy2Flex_Sgypv = ref();
const viy2Panel_1r1DW = ref();
const viy2Button_5heur2 = ref();
const grid2 = ref();
const viy2Row_2Y3yKg = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetMonth: '', searchType: 'consumer', datafieldviy2Select_m5rXO: [], productCd: '', productCd: '', productCd: '',
});
const rules = reactive({
  viy2DateTimePicker_2XqVWYRules: [
    {
      required: true,
      message: t('errors.required', [t('label.targetMonth')]),
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
  { value: 'consumer', label: '販売店' },
  { value: 'groups', label: 'グルーブ' },
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
const grid2EditConfig = reactive({
  trigger: 'click',
});
const grid2MouseConfig = reactive({
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
const viy2Radio_7cxUk1Change = (value) => {
  if (value == 'consumer') {
    // 隐藏 表示タイプ、
    gridGroupShow.value = false;
  } else {
    gridGroupShow.value = true;
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
const grid2SearchTypedEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2Consumer15EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2SearchTyped2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2Consumer22EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2Consumer2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2LargeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2MiddleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2SmallEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2Consumer125EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2Consumer124EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2InvoiceAmt4Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const grid2InvoiceAmt4EditRender = computed(() => {
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
                :label="t('label.targetMonth')"
                label-width="100px"
                prop="targetMonth"
                :rules="rules.viy2DateTimePicker_2XqVWYRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_2XqVWY"
                  ref="viy2DateTimePicker_2XqVWY"
                  v-model="queryFormData.targetMonth"
                  type="month"
                  :style="{ width: '100px' }"
                />
              </VueFormItem>
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
          <VueTable id="grid2" ref="grid2" header-align="center" height="auto" :data="findSpartsMIList" :edit-config="grid2EditConfig" :mouse-config="grid2MouseConfig">
            <VueRow
              id="viy2Row_2Y3yKg"
              ref="viy2Row_2Y3yKg"
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
              :edit-render="grid2SearchTypedEditRender"
              field="searchTyped"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.targetMonth')"
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              v-if="gridGroupShow"
              :edit-render="grid2Consumer15EditRender"
              field="consumer15"
              show-overflow="tooltip"
              title="グルーブコード "
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              v-if="gridGroupShow"
              :edit-render="grid2SearchTyped2EditRender"
              field="searchTyped2"
              show-overflow="tooltip"
              title="グルーブ名"
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2Consumer22EditRender"
              field="consumer22"
              show-overflow="tooltip"
              :sortable="true"
              title="販売店コード"
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2Consumer2EditRender"
              field="consumer2"
              show-overflow="tooltip"
              :sortable="true"
              title="販売店"
              width="210px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2LargeEditRender"
              field="large"
              show-overflow="tooltip"
              :sortable="true"
              title="大"
              width="100px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2MiddleEditRender"
              field="middle"
              show-overflow="tooltip"
              :sortable="true"
              title="中"
              width="100px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2SmallEditRender"
              field="small"
              show-overflow="tooltip"
              :sortable="true"
              title="小"
              width="100px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2Consumer125EditRender"
              field="consumer125"
              show-overflow="tooltip"
              :sortable="true"
              title="区分名称"
              width="100px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="grid2Consumer124EditRender"
              field="consumer124"
              show-overflow="tooltip"
              :sortable="true"
              title="部品用品区分"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="grid2InvoiceAmt4Formatter"
              :edit-render="grid2InvoiceAmt4EditRender"
              field="invoiceAmt4"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="140px"
              :title="t('label.salesAmount')"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
