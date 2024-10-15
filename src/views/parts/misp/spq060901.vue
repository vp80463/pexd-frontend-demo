<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import { formatAmount, formatCost } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const currentMonth = dayjs().format('YYYYMM');
const exportFlag = ref(true);
const router = useRouter();
defineOptions({
  name: 'spq060901',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5heur2 = ref();
const viy2Button_6Eq86q = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_L6xsi = ref();
const viy2DateTimePicker_9Tgkq2 = ref();
const viy2Select_GSWyG = ref();
const components = ref();
const viy2Flex_SMXLZ = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetMonth: '', targetMonth: '', largeGroupCd: '', components: '',
});
const rules = reactive({
  viy2DateTimePicker_L6xsiRules: [
    {
      required: true,
      message: t('errors.required', [t('label.targetMonth')]),
    },
  ],
  viy2DateTimePicker_9Tgkq2Rules: [
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
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const viy2Button_6Eq86qClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      findStockAccountListApi.runAsync();
    }
  });
};
const viy2Select_GSWyGChange = (value, data) => {
  queryFormData.largeGroupNm = data.allNm;
}
;
const viy2Select_GSWyGClear = () => {
  queryFormData.largeGroupNm = '';
};
const gridCellDblclick = (row) => {
  skipToDetail(row);
};
const gridYearEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonthEditRender = computed(() => {
  return {
    enabled: false,
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
const gridComponentsNoFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridComponentsNoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridComponentsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridQuantityFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridQuantityEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridWholesaleTotalPriceFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);
};
const gridWholesaleTotalPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTotalCostFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);
};
const gridTotalCostEditRender = computed(() => {
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
  queryFormData.targetMonth = currentMonth;
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
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
          {{ t('button.import') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_6Eq86q" ref="viy2Button_6Eq86q" icon-position="left" type="info" @click="viy2Button_6Eq86qClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_SMXA1"
      ref="viy2Flex_SMXA1"
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
              :label="t('label.targetYear')"
              label-width="110px"
              prop="targetMonth"
              :rules="rules.viy2DateTimePicker_L6xsiRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_L6xsi"
                ref="viy2DateTimePicker_L6xsi"
                v-model="queryFormData.targetMonth"
                type="year"
                :style="{ width: '110px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ym"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ym"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.targetMonth')"
              label-width="110px"
              prop="targetMonth"
              :rules="rules.viy2DateTimePicker_9Tgkq2Rules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_9Tgkq2"
                ref="viy2DateTimePicker_9Tgkq2"
                v-model="queryFormData.targetMonth"
                type="month"
                :style="{ width: '110px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ym"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ym"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.salesStore')"
              prop="largeGroupCd"
            >
              <VueSelect
                id="viy2Select_GSWyG"
                ref="viy2Select_GSWyG"
                v-model="queryFormData.largeGroupCd"
                :style="{ width: '200px' }"
                :clearable="true"
                :options="largeGroupDs"
                :props="{
                  label: 'allNm',
                  value: 'allPath',
                }"
                @change="viy2Select_GSWyGChange"
                @clear="viy2Select_GSWyGClear"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.components')"
              prop="components"
            >
              <VueInput
                id="components"
                ref="components"
                v-model="queryFormData.components"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_SMXLZ"
        ref="viy2Flex_SMXLZ"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="findStockAccountList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
            :edit-render="gridYearEditRender"
            field="year"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            :title="t('label.year')"
            header-align="center"
            min-width="100px"
          />
          <VueInputColumn
            :edit-render="gridMonthEditRender"
            field="month"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            :title="t('label.month')"
            header-align="center"
            min-width="100px"
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
            :title="t('label.salesStore')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridComponentsNoFormatter"
            :edit-render="gridComponentsNoEditRender"
            field="componentsNo"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="200px"
            :title="t('label.componentsNo')"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridComponentsNmEditRender"
            field="componentsNm"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.componentsNm')"
            width="130px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridQuantityFormatter"
            :edit-render="gridQuantityEditRender"
            field="quantity"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="190px"
            :title="t('label.quantity')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridWholesaleTotalPriceFormatter"
            :edit-render="gridWholesaleTotalPriceEditRender"
            field="wholesaleTotalPrice"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="130px"
            :title="t('label.wholesaleTotalPrice')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridTotalCostFormatter"
            :edit-render="gridTotalCostEditRender"
            field="totalCost"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="130px"
            :title="t('label.totalCost')"
            header-align="center"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
