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
  name: 'cmm0301_01Copy',
});
const form = ref();
const viy2Row_zgSti = ref();
const resetBtn = ref();
const viy2Button_4CGTzC = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_pVofi = ref();
const queryForm = ref();
const viy2Row_rFsZl = ref();
const copy8_viy2Row_rFsZl_col1 = ref();
const viy2Select_4uc4zb = ref();
const viy2InputBox_4y5p9E = ref();
const viy2Select_4CHRQo = ref();
const viy2Flex_pVGDy = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  org: '', wholesaleRate: '', largeGroupCd: '',
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
const viy2Select_4CHRQoOpts = reactive([
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
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: '0',
      largeGroupNm: 'TEST0',
      rank: 'A',
    },
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: '2',
      largeGroupNm: 'TEST2',
      rank: 'B',
    },
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: 'C',
      largeGroupNm: 'TESTC',
      rank: 'C',
    },
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: 'H',
      largeGroupNm: 'TESTH',
      rank: 'D',
    },
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: 'M',
      largeGroupNm: 'TESTM',
      rank: 'E',
    },
    {
      org: '66564 ジャック',
      pureRank: '05',
      largeGroupCd: 'Q',
      largeGroupNm: 'TESTQ',
      rank: 'F',
    },
  ],
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
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_4CGTzCClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
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
const gridRankEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      useSeparator: true,
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
          リセット
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_4CGTzC" ref="viy2Button_4CGTzC" icon-position="left" @click="viy2Button_4CGTzCClick">
          検索
        </VueButton>
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          確定
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_pVofi"
      ref="viy2Flex_pVofi"
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
              label="纯掛ランク"
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
              label="大分類"
              prop="largeGroupCd"
            >
              <VueSelect
                id="viy2Select_4CHRQo"
                ref="viy2Select_4CHRQo"
                v-model="queryFormData.largeGroupCd"
                :style="{ width: '200px' }"
                :options="viy2Select_4CHRQoOpts"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_pVGDy"
        ref="viy2Flex_pVGDy"
        direction="column"
        grow="1"
      >
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
            :sortable="true"
            width="200px"
            header-align="center"
            title="販売店"
          />
          <VueInputColumn
            :edit-render="gridPureRankEditRender"
            field="pureRank"
            show-overflow="tooltip"
            :sortable="true"
            title="纯掛ランク"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridLargeGroupCdEditRender"
            field="largeGroupCd"
            show-overflow="tooltip"
            :sortable="true"
            title="大分類"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridLargeGroupNmEditRender"
            field="largeGroupNm"
            show-overflow="tooltip"
            :sortable="true"
            title="大分類名"
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
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
