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
  name: 'spq0510_01',
});
const form = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const viy2Panel_281u6 = ref();
const viy2Button_6Eq86q = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_28hKZ = ref();
const viy2DateTimePicker_L6xsi = ref();
const viy2Radio_BPvTQ = ref();
const viy2Select_m5rXO = ref();
const viy2Select_1a1t5k4 = ref();
const viy2Select_3UTmVK = ref();
const viy2Select_3UTMNC = ref();
const viy2Flex_SMXLZ = ref();
const grid1 = ref();
const viy2Button_5heur2 = ref();
const viy2Form_IZmIk = ref();
const grid = ref();
const viy2Row_7fBlfh = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetMonth: '', searchType: 'companyWide', datafieldviy2Select_m5rXO: [], productCd: '', productCd: '', productCd: '',
});
const viy2Form_IZmIkData = reactive({
});
const rules = reactive({
  viy2DateTimePicker_L6xsiRules: [
    {
      required: true,
      message: t('errors.required', [t('label.targetMonth')]),
    },
  ],
  viy2Radio_BPvTQRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_m5rXORules: [
    {
      required: true,
      message: '入力してください。',
    },
  ],
});
const viy2Radio_BPvTQOpts = reactive([
  { value: 'companyWide', label: '全社' },
  { value: 'salesman', label: 'セールスマン' },
  { value: 'consumer', label: '販売店' },
  { value: 'internalDivision', label: '内部課' },
]);
const viy2Select_m5rXOOpts = reactive([
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
const viy2Radio_BPvTQChange = (value) => {
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
const gridCellDblclick = (row) => {
  skipToDetail(row);
};
const gridSalesStoredFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSalesStoredEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSalesStoreFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSalesStoreEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridLargeCategoryFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridLargeCategoryEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridLargeGroupNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridT15Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT15EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT14Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT14EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT13Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT13EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT12Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT12EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT11Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT11EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT10Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT10EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT9Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT9EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT8Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT8EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT79Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT79EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT7Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT7EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT6Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT6EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT152Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT152EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT145Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT145EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT136Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT136EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT1242Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT1242EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridT134Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridT134EditRender = computed(() => {
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
        <VuePanel id="viy2Panel_281u6" ref="viy2Panel_281u6" :title="t('label.searchCondition')">
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
              <VueFormItem
                :label="t('label.searchType')"
                label-width="120px"
                prop="searchType"
                :rules="rules.viy2Radio_BPvTQRules"
                size="default"
              >
                <VueRadioGroup
                  id="viy2Radio_BPvTQ"
                  ref="viy2Radio_BPvTQ"
                  v-model="queryFormData.searchType"
                  radio-style="button"
                  direction="horizontal"
                  :split="false"
                  split-size="default"
                  @change="viy2Radio_BPvTQChange"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_BPvTQOpts"
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
                :rules="rules.viy2Select_m5rXORules"
              >
                <VueSelect
                  id="viy2Select_m5rXO"
                  ref="viy2Select_m5rXO"
                  v-model="queryFormData.datafieldviy2Select_m5rXO"
                  :style="{ width: '200px' }"
                  :collapse-tags="true"
                  :multiple="true"
                  :filterable="true"
                  :placeholder="placeholderNm"
                  :collapse-tags-tooltip="true"
                  :options="viy2Select_m5rXOOpts"
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
        id="viy2Flex_SMXLZ"
        ref="viy2Flex_SMXLZ"
        direction="column"
        grow="1"
      >
        <VuePanel id="grid1" ref="grid1" :title="t('label.detailInfo')" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
                {{ t('button.export') }}
              </VueButton>
            </div>
          </template>
          <VueForm
            id="viy2Form_IZmIk"
            ref="viy2Form_IZmIk"
            style="height:100%;"
            :model="viy2Form_IZmIkData"
          >
            <VueTable id="grid" ref="grid" header-align="center" :show-footer="false" height="100%" :data="findStockAccountList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
              <VueRow
                id="viy2Row_7fBlfh"
                ref="viy2Row_7fBlfh"
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
                :formatter="gridSalesStoredFormatter"
                :edit-render="gridSalesStoredEditRender"
                field="salesStored"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                :title="t('label.targetMonth')"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridSalesStoreFormatter"
                :edit-render="gridSalesStoreEditRender"
                field="salesStore"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="販売店"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridLargeCategoryFormatter"
                :edit-render="gridLargeCategoryEditRender"
                field="largeCategory"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                :title="t('label.productDiff')"
                header-align="center"
              />
              <VueInputColumn
                :edit-render="gridLargeGroupNameEditRender"
                field="largeGroupName"
                show-overflow="tooltip"
                :sortable="true"
                :title="t('label.productDiffNm')"
                width="130px"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT15Formatter"
                :edit-render="gridT15EditRender"
                field="t15"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="販売計画"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT14Formatter"
                :edit-render="gridT14EditRender"
                field="t14"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT13Formatter"
                :edit-render="gridT13EditRender"
                field="t13"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="販売計画差"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT12Formatter"
                :edit-render="gridT12EditRender"
                field="t12"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="販売計画達成率"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT11Formatter"
                :edit-render="gridT11EditRender"
                field="t11"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="前年売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT10Formatter"
                :edit-render="gridT10EditRender"
                field="t10"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="売上伸長率"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT9Formatter"
                :edit-render="gridT9EditRender"
                field="t9"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="荒利計画額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT8Formatter"
                :edit-render="gridT8EditRender"
                field="t8"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="荒利金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT79Formatter"
                :edit-render="gridT79EditRender"
                field="t79"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="荒利計画差"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT7Formatter"
                :edit-render="gridT7EditRender"
                field="t7"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="荒利計画達成率"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT6Formatter"
                :edit-render="gridT6EditRender"
                field="t6"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="荒利率"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT152Formatter"
                :edit-render="gridT152EditRender"
                field="t152"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="出庫中金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT145Formatter"
                :edit-render="gridT145EditRender"
                field="t145"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="引当中金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT136Formatter"
                :edit-render="gridT136EditRender"
                field="t136"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="受注残金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT1242Formatter"
                :edit-render="gridT1242EditRender"
                field="t1242"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="売上+出庫中金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridT134Formatter"
                :edit-render="gridT134EditRender"
                field="t134"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="200px"
                title="販売計画達成率(出庫中含む)"
                header-align="center"
              />
            </VueTable>
          </VueForm>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
