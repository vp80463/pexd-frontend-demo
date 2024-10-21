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
  name: 'cmm0303_01',
});
const form = ref();
const viy2Flex_pVofi = ref();
const queryForm = ref();
const viy2Panel_G8xsb = ref();
const viy2Button_5FbWKc = ref();
const resetBtn = ref();
const viy2Row_rFsZl = ref();
const copy8_viy2Row_rFsZl_col1 = ref();
const viy2InputBox_4uc4za = ref();
const viy2Cascader_2Sgt2 = ref();
const viy2Flex_pVGDy = ref();
const viy2Panel_G8xTh = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  WholesaleRate: '', GroupCd: [],
});
const viy2Cascader_2Sgt2Props = reactive({
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
      pureRank: '0A',
      largeGroupCd: '0',
      largeGroupNm: 'TEST',
      middleGroupCd: '1',
      middleGroupNm: 'TESTNM',
      Rate: '60',
    },
    {
      pureRank: '0A',
      largeGroupCd: '0',
      largeGroupNm: 'TEST',
      middleGroupCd: '2',
      middleGroupNm: 'TESTNM',
      Rate: '60',
    },
    {
      pureRank: '0A',
      largeGroupCd: '0',
      largeGroupNm: 'TEST',
      middleGroupCd: '3',
      middleGroupNm: 'TESTNM',
      Rate: '60',
    },
    {
      pureRank: '0B',
      largeGroupCd: '0',
      largeGroupNm: 'TEST',
      middleGroupCd: '1',
      middleGroupNm: 'TESTNM',
      Rate: '63',
    },
    {
      pureRank: '0B',
      largeGroupCd: '0',
      largeGroupNm: 'TEST',
      middleGroupCd: '2',
      middleGroupNm: 'TESTNM',
      Rate: '63',
    },
    {
      pureRank: '0B',
      largeGroupCd: '0',
      largeGroupNm: 'TEST',
      middleGroupCd: '3',
      middleGroupNm: 'TESTNM',
      Rate: '63',
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
});
const gridDs2 = gridDs2Api.data;
const groupDsApi = useApi({
  method: 'post',
  localData: [
    {
      value: '0',
      label: 'Ｍ／Ｃ部品',
      children: [
        {
          value: '0',
          label: 'オートバイ',
        },
        {
          value: '4',
          label: 'スノーモービル、除雪機',
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
        },
      ],
    },
    {
      value: '7',
      label: '船外機',
      children: [
        {
          value: 'C',
          label: 'ヘルメット',
        },
        {
          value: '6',
          label: 'ＧＨＰ',
        },
      ],
    },
  ],
});
const groupDs = groupDsApi.data;
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
const viy2Button_5FbWKcClick = () => {
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
const gridPureRankEditRender = computed(() => {
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
const gridMiddleGroupCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  queryFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.pointId = uc.defaultPointId;
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
        <VuePanel id="viy2Panel_G8xsb" ref="viy2Panel_G8xsb" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
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
                label="純掛掛率ランク"
                prop="WholesaleRate"
              >
                <VueInput
                  id="viy2InputBox_4uc4za"
                  ref="viy2InputBox_4uc4za"
                  v-model="queryFormData.WholesaleRate"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="大中区分"
                prop="GroupCd"
              >
                <VueCascader
                  id="viy2Cascader_2Sgt2"
                  ref="viy2Cascader_2Sgt2"
                  v-model="queryFormData.GroupCd"
                  display-member="label"
                  value-member="value"
                  :options="groupDs"
                  :props="viy2Cascader_2Sgt2Props"
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
        <VuePanel id="viy2Panel_G8xTh" ref="viy2Panel_G8xTh" title="明細情報" height="100%">
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
              :edit-render="gridPureRankEditRender"
              field="pureRank"
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
              title="大区分コード"
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
            <VueInputColumn
              :edit-render="gridMiddleGroupCdEditRender"
              field="middleGroupCd"
              show-overflow="tooltip"
              :sortable="true"
              title="中区分コード"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridMiddleGroupNmEditRender"
              field="middleGroupNm"
              show-overflow="tooltip"
              :sortable="true"
              title="中区分名"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridRateEditRender"
              field="Rate"
              align="right"
              :sortable="true"
              width="150px"
              title="掛率"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
