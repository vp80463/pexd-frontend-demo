<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import { formatAmount } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const currentYear = dayjs().format('YYYY');
const exportFlag = ref(true);
const router = useRouter();
const selectTypeDisabled = ref(false);
defineOptions({
  name: 'spq0509_01',
});
const form = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const viy2Panel_22dRk = ref();
const viy2Button_6Eq86q = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_23d4A = ref();
const viy2DateTimePicker_1yEexG = ref();
const viy2Select_1rPSyEH = ref();
const viy2Cascader_LmE9w = ref();
const viy2Flex_SMXLZ = ref();
const viy2Panel_22eDL = ref();
const viy2Button_5heur2 = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetYear: '', salesStore: '', datafieldviy2Cascader_LmE9w: [],
});
const rules = reactive({
  viy2DateTimePicker_1yEexGRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Cascader_LmE9wProps = reactive({
  checkStrictly: true,
  label: 'label',
  value: 'value',
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
const pcTypeDsApi = useApi({
  method: 'post',
  localData: [
    {
      value: '0',
      label: 'Ｍ／Ｃ部品',
      children: [
        {
          value: '0',
          label: 'オートバイ',
          children: [
            {
              value: 'A4',
              label: 'モトクロス',
            },
            {
              value: 'A5',
              label: 'トライアル',
            },
          ],
        },
        {
          value: '4',
          label: 'スノーモービル、除雪機',
          children: [
            {
              value: 'G7',
              label: '小型除雪機',
            },
            {
              value: 'G8',
              label: 'トロ除雪機',
            },
          ],
        },
      ],
    },
    {
      value: '2',
      label: '特機',
      children: [
        {
          value: '9',
          label: 'ボート純正オプション',
          children: [
            {
              value: 'G1',
              label: '２．発電機',
            },
            {
              value: 'G2',
              label: '４．発電機',
            },
            {
              value: 'G3',
              label: 'Ｄ．発電機',
            },
          ],
        },
      ],
    },
  ],
});
const pcTypeDs = pcTypeDsApi.data;
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
const viy2Select_1rPSyEHChange = (value, data) => {
  queryFormData.pointCd = data.code;
};
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const gridCellDblclick = (row) => {
  skipToDetail(row);
};
const gridTargetYearEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointCdNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProductDiffNmFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridProductDiffNmEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridJanuary1Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJanuary1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJanuary2Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJanuary2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy10_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridFebruary1Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridFebruary1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridFebruary2Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridFebruary2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy9_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridJune1Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJune1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJune2Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJune2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy8_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridJuly1Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJuly1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJuly2Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJuly2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy7_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridAugust1Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAugust1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAugust2Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAugust2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy6_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridSeptember1Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSeptember1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSeptember2Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSeptember2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy0_copy6_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridOctober1Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridOctober1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOctober2Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridOctober2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy4_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridNovember1Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridNovember1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridNovember2Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridNovember2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy3_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridDecember1Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridDecember1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridDecember2Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridDecember2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy2_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridJanuary12Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJanuary12EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJanuary22Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJanuary22EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy1_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridJanuary132Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJanuary132EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJanuary1245Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJanuary1245EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy0_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridJanuary134Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJanuary134EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJanuary252Formatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJanuary252EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const Copy0_copy0_viy2TableGroupColumn_WgzrGEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridTotalAmountSaFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridTotalAmountSaEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTotalAmountGpFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridTotalAmountGpEditRender = computed(() => {
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
  queryFormData.targetYear = currentYear;
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
        <VuePanel id="viy2Panel_22dRk" ref="viy2Panel_22dRk" :title="t('label.searchCondition')">
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
            id="viy2Row_23d4A"
            ref="viy2Row_23d4A"
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
                prop="targetYear"
                :rules="rules.viy2DateTimePicker_1yEexGRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1yEexG"
                  ref="viy2DateTimePicker_1yEexG"
                  v-model="queryFormData.targetYear"
                  type="year"
                  :style="{ width: '110px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.y"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.y"
                />
              </VueFormItem>
              <VueFormItem
                label="受注先"
                label-width="100px"
                prop="salesStore"
              >
                <VueSelect
                  id="viy2Select_1rPSyEH"
                  ref="viy2Select_1rPSyEH"
                  v-model="queryFormData.salesStore"
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
                :label="t('label.productDiff')"
                label-width="100px"
                prop="datafieldviy2Cascader_LmE9w"
              >
                <VueCascader
                  id="viy2Cascader_LmE9w"
                  ref="viy2Cascader_LmE9w"
                  v-model="queryFormData.datafieldviy2Cascader_LmE9w"
                  display-member="label"
                  value-member="value"
                  :filterable="true"
                  :clearable="true"
                  :style="{ width: '250px' }"
                  :options="pcTypeDs"
                  :props="viy2Cascader_LmE9wProps"
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
        <VuePanel id="viy2Panel_22eDL" ref="viy2Panel_22eDL" :title="t('label.detailInfo')" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
                {{ t('button.import') }}
              </VueButton>
            </div>
          </template>
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
              :title="t('label.seqNo')"
            />
            <VueInputColumn
              :edit-render="gridTargetYearEditRender"
              field="targetYear"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.targetYear')"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridPointCdEditRender"
              field="pointCd"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridPointCdNmEditRender"
              field="pointCdNm"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先名称"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridPointNmEditRender"
              field="pointNm"
              show-overflow="tooltip"
              :sortable="true"
              :title="t('label.productDiff')"
              header-align="center"
              min-width="200px"
            />
            <VueNumberColumn
              :formatter="gridProductDiffNmFormatter"
              :edit-render="gridProductDiffNmEditRender"
              field="productDiffNm"
              align="right"
              footer-align="right"
              :aggregate-label="t('label.total')"
              :sortable="true"
              width="200px"
              :title="t('label.productDiffNm')"
              header-align="center"
            />
            <VueColgroup
              id="viy2TableGroupColumn_WgzrG"
              ref="viy2TableGroupColumn_WgzrG"
              align="center"
              title="1月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridJanuary1Formatter"
                :edit-render="gridJanuary1EditRender"
                field="january1"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridJanuary2Formatter"
                :edit-render="gridJanuary2EditRender"
                field="january2"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy10_viy2TableGroupColumn_WgzrG"
              ref="copy10_viy2TableGroupColumn_WgzrG"
              align="center"
              title="2月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridFebruary1Formatter"
                :edit-render="gridFebruary1EditRender"
                field="february1"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridFebruary2Formatter"
                :edit-render="gridFebruary2EditRender"
                field="february2"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy9_viy2TableGroupColumn_WgzrG"
              ref="copy9_viy2TableGroupColumn_WgzrG"
              align="center"
              title="3月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridJune1Formatter"
                :edit-render="gridJune1EditRender"
                field="june1"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridJune2Formatter"
                :edit-render="gridJune2EditRender"
                field="june2"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy8_viy2TableGroupColumn_WgzrG"
              ref="copy8_viy2TableGroupColumn_WgzrG"
              align="center"
              title="4月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridJuly1Formatter"
                :edit-render="gridJuly1EditRender"
                field="july1"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridJuly2Formatter"
                :edit-render="gridJuly2EditRender"
                field="july2"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy7_viy2TableGroupColumn_WgzrG"
              ref="copy7_viy2TableGroupColumn_WgzrG"
              align="center"
              title="5月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridAugust1Formatter"
                :edit-render="gridAugust1EditRender"
                field="august1"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridAugust2Formatter"
                :edit-render="gridAugust2EditRender"
                field="august2"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy6_viy2TableGroupColumn_WgzrG"
              ref="copy6_viy2TableGroupColumn_WgzrG"
              align="center"
              title="6月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridSeptember1Formatter"
                :edit-render="gridSeptember1EditRender"
                field="september1"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridSeptember2Formatter"
                :edit-render="gridSeptember2EditRender"
                field="september2"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy0_copy6_viy2TableGroupColumn_WgzrG"
              ref="copy0_copy6_viy2TableGroupColumn_WgzrG"
              align="center"
              title="7月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridOctober1Formatter"
                :edit-render="gridOctober1EditRender"
                field="october1"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridOctober2Formatter"
                :edit-render="gridOctober2EditRender"
                field="october2"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy4_viy2TableGroupColumn_WgzrG"
              ref="copy4_viy2TableGroupColumn_WgzrG"
              align="center"
              title="8月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridNovember1Formatter"
                :edit-render="gridNovember1EditRender"
                field="november1"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridNovember2Formatter"
                :edit-render="gridNovember2EditRender"
                field="november2"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy3_viy2TableGroupColumn_WgzrG"
              ref="copy3_viy2TableGroupColumn_WgzrG"
              align="center"
              title="9月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridDecember1Formatter"
                :edit-render="gridDecember1EditRender"
                field="december1"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridDecember2Formatter"
                :edit-render="gridDecember2EditRender"
                field="december2"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy2_viy2TableGroupColumn_WgzrG"
              ref="copy2_viy2TableGroupColumn_WgzrG"
              align="center"
              title="10月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridJanuary12Formatter"
                :edit-render="gridJanuary12EditRender"
                field="january12"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridJanuary22Formatter"
                :edit-render="gridJanuary22EditRender"
                field="january22"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy1_viy2TableGroupColumn_WgzrG"
              ref="copy1_viy2TableGroupColumn_WgzrG"
              align="center"
              title="11月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridJanuary132Formatter"
                :edit-render="gridJanuary132EditRender"
                field="january132"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridJanuary1245Formatter"
                :edit-render="gridJanuary1245EditRender"
                field="january1245"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy0_viy2TableGroupColumn_WgzrG"
              ref="copy0_viy2TableGroupColumn_WgzrG"
              align="center"
              title="12月"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridJanuary134Formatter"
                :edit-render="gridJanuary134EditRender"
                field="january134"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridJanuary252Formatter"
                :edit-render="gridJanuary252EditRender"
                field="january252"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
            <VueColgroup
              id="copy0_copy0_viy2TableGroupColumn_WgzrG"
              ref="copy0_copy0_viy2TableGroupColumn_WgzrG"
              align="center"
              :title="t('label.totalAmount')"
              width="150px"
            >
              <VueNumberColumn
                :formatter="gridTotalAmountSaFormatter"
                :edit-render="gridTotalAmountSaEditRender"
                field="totalAmountSa"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="売上金額"
                header-align="center"
              />
              <VueNumberColumn
                :formatter="gridTotalAmountGpFormatter"
                :edit-render="gridTotalAmountGpEditRender"
                field="totalAmountGp"
                align="right"
                aggregate="sum"
                footer-align="right"
                :sortable="true"
                width="130px"
                title="粗利金額"
                header-align="center"
              />
            </VueColgroup>
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
