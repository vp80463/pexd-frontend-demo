<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const exportFlag = ref(true);
defineOptions({
  name: 'cmm0301_01',
});
const form = ref();
const viy2Flex_pVofi = ref();
const queryForm = ref();
const viy2Panel_GELG9 = ref();
const viy2Button_4CGTzC = ref();
const resetBtn = ref();
const viy2Row_rFsZl = ref();
const copy8_viy2Row_rFsZl_col1 = ref();
const viy2Select_4uc4zb = ref();
const viy2InputBox_4y5p9E = ref();
const viy2Cascader_4o8AI = ref();
const viy2Flex_pVGDy = ref();
const viy2Panel_GEM7N = ref();
const viy2Button_5FbWKc = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  org: '', wholesaleRate: '', largeGroupCd: [],
});
const rules = reactive({
  viy2Select_4uc4zbRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Select_4uc4zbOpts = reactive([
  {
    label:
'66564 ジャック',
    value:
'66564 ジャック',
  },
  {
    label:
'Option 2',
    value:
'Option 2',
  },
  {
    label:
'Option 3',
    value:
'Option 3',
  },
]);
const viy2Cascader_4o8AIProps = reactive({
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
const mstCodeDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S006'],
}, {
  initialData: {
    S006: [],
  },
  manual: true,
});
const mstCodeDs = mstCodeDsApi.data;
const productCategoryCdApi = useApi({
  method: 'post',
  localData: [
    {
      value: '0',
      label: 'Ｍ／Ｃ部品',
    },
    {
      value: '2',
      label: '特機',
    },
    {
      value: '7',
      label: '船外機',
    },
  ],
});
const productCategoryCd = productCategoryCdApi.data;
const downloadDsApi = useApi({
  url: '/parts/spq0308/doDownload.json',
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
      a.download = 'SPQ0308_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    gridDsApi.runAsync();
  },
  manual: true,
});
const downloadDs = downloadDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: '0',
      largeGroupNm: 'Ｍ／Ｃ部品',
      rank: 'A',
    },
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: '2',
      largeGroupNm: '特機',
      rank: 'B',
    },
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: '7',
      largeGroupNm: '船外機',
      rank: 'C',
    },
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: 'H',
      largeGroupNm: 'ボルトオン',
      rank: 'D',
    },
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: 'M',
      largeGroupNm: '消耗品',
      rank: 'E',
    },
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: 'Q',
      largeGroupNm: 'Ｍ／Ｃ仕入品',
      rank: 'F',
    },
  ],
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const gridDs2Api = useApi({
  url: '/parts/spq0308/doRetrieve.json',
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
const gridDs2 = gridDs2Api.data;
const binTypeDsApi = useApi({
  url: '/common/helper/getBinTypeList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const binTypeDs = binTypeDsApi.data;
const viy2Button_4CGTzCClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const gridOrgEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSpRankEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLargeGroupCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLargeGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRankEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'left',
    },
  };
});
onMounted(() => {
  queryFormData.wholesaleRate = '05';
});
watch (
  () => queryFormData, (newVal, oldVal) => {
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
  queryFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.pointId = uc.defaultPointId;
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
  exportFlag.value = true;
};
const getTotalRate = () => {
  const tableDataList = grid.value.getTableData().fullData;
  if (tableDataList.length > 0) {
    let totalInUseQty = 0;
    let totalTotalQty = 0;
    for (const key in tableDataList) {
      const item = tableDataList[key];
      totalInUseQty += item.inUseQty;
      totalTotalQty += item.totalQty;
    }
    return VueUtil.formatNumber(Number(totalInUseQty / totalTotalQty) * 100, { digits: 2 });
  }
  return VueUtil.formatNumber(Number(0), { digits: 2 });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_pVofi"
      ref="viy2Flex_pVofi"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_GELG9" ref="viy2Panel_GELG9" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_4CGTzC" ref="viy2Button_4CGTzC" icon-position="left" @click="viy2Button_4CGTzCClick">
                検索
              </VueButton>
              <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_rFsZl"
            ref="viy2Row_rFsZl"
          >
            <VueCol
              id="copy8_viy2Row_rFsZl_col1"
              ref="copy8_viy2Row_rFsZl_col1"
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="販売店"
                prop="org"
                :rules="rules.viy2Select_4uc4zbRules"
              >
                <VueSelect
                  id="viy2Select_4uc4zb"
                  ref="viy2Select_4uc4zb"
                  v-model="queryFormData.org"
                  :style="{ width: '200px' }"
                  :options="viy2Select_4uc4zbOpts"
                />
              </VueFormItem>
              <VueFormItem
                label="純掛掛率ランク"
                prop="wholesaleRate"
              >
                <VueInput
                  id="viy2InputBox_4y5p9E"
                  ref="viy2InputBox_4y5p9E"
                  v-model="queryFormData.wholesaleRate"
                  :disabled="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="商品大区分"
                prop="largeGroupCd"
              >
                <VueCascader
                  id="viy2Cascader_4o8AI"
                  ref="viy2Cascader_4o8AI"
                  v-model="queryFormData.largeGroupCd"
                  display-member="label"
                  value-member="value"
                  :options="productCategoryCd"
                  :props="viy2Cascader_4o8AIProps"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_pVGDy"
        ref="viy2Flex_pVGDy"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_GEM7N" ref="viy2Panel_GEM7N" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
                保存
              </VueButton>
            </div>
          </template>
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
              :edit-render="gridOrgEditRender"
              field="org"
              show-overflow="tooltip"
              :sortable="true"
              title="販売店"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridSpRankEditRender"
              field="spRank"
              show-overflow="tooltip"
              :sortable="true"
              title="純掛掛率ランク"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridLargeGroupCdEditRender"
              field="largeGroupCd"
              show-overflow="tooltip"
              :sortable="true"
              title="大区分"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridLargeGroupNmEditRender"
              field="largeGroupNm"
              show-overflow="tooltip"
              :sortable="true"
              title="大区分名"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridRankEditRender"
              field="rank"
              align="left"
              :sortable="true"
              width="150px"
              title="特掛ランク"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
