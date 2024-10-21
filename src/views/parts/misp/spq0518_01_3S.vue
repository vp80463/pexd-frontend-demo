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
  name: 'spq0518_01_3S',
});
const form = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const viy2Panel_22dRk = ref();
const viy2Button_6Eq86q = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_23d4A = ref();
const viy2DateTimePicker_1yEexG = ref();
const viy2Cascader_LmE9w = ref();
const viy2Flex_SMXLZ = ref();
const viy2Panel_22eDL = ref();
const viy2Button_5heur2 = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetYear: '', datafieldviy2Cascader_LmE9w: [],
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
const gridTargetTypeCategoryFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridTargetTypeCategoryEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJanuaryFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJanuaryEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridFebruaryFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridFebruaryEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridMarchFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridMarchEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAprilFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAprilEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridMayFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridMayEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJuneFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJuneEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJulyFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridJulyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAugustFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridAugustEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSeptemberFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSeptemberEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOctoberFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridOctoberEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridNovemberFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridNovemberEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridDecemberFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridDecemberEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSumMonthFormatter = (row, columnConfig, cellValue) => {
  return formatAmount(row.cellValue);
};
const gridSumMonthEditRender = computed(() => {
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
  queryFormData.targetYear = targetYear;
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
              :sortable="true"
              width="200px"
              :title="t('label.productDiffNm')"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridTargetTypeCategoryFormatter"
              :edit-render="gridTargetTypeCategoryEditRender"
              field="targetTypeCategory"
              align="right"
              footer-align="right"
              :aggregate-label="t('label.total')"
              :sortable="true"
              width="200px"
              title="タイプ"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridJanuaryFormatter"
              :edit-render="gridJanuaryEditRender"
              field="january"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="1月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridFebruaryFormatter"
              :edit-render="gridFebruaryEditRender"
              field="february"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="2月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridMarchFormatter"
              :edit-render="gridMarchEditRender"
              field="march"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="3月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridAprilFormatter"
              :edit-render="gridAprilEditRender"
              field="april"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="4月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridMayFormatter"
              :edit-render="gridMayEditRender"
              field="may"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="5月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridJuneFormatter"
              :edit-render="gridJuneEditRender"
              field="june"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="6月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridJulyFormatter"
              :edit-render="gridJulyEditRender"
              field="july"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="7月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridAugustFormatter"
              :edit-render="gridAugustEditRender"
              field="august"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="8月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridSeptemberFormatter"
              :edit-render="gridSeptemberEditRender"
              field="september"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="9月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOctoberFormatter"
              :edit-render="gridOctoberEditRender"
              field="october"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="10月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridNovemberFormatter"
              :edit-render="gridNovemberEditRender"
              field="november"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="11月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridDecemberFormatter"
              :edit-render="gridDecemberEditRender"
              field="december"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              title="12月"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridSumMonthFormatter"
              :edit-render="gridSumMonthEditRender"
              field="sumMonth"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              width="100px"
              :title="t('label.total')"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>

<style type="text/css" scoped>
.vue-table--body-wrapper body--wrapper{
height: auto;
}
</style>
