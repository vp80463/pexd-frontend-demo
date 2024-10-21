<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const exportFlag = ref(true);
defineOptions({
  name: 'cmm0304_01',
});
const form = ref();
const viy2Flex_pVofi = ref();
const queryForm = ref();
const viy2Panel_GHgeq = ref();
const viy2Button_5aF6x2 = ref();
const resetBtn = ref();
const viy2Row_rFsZl = ref();
const copy8_viy2Row_rFsZl_col1 = ref();
const viy2InputBox_4uc4za = ref();
const viy2Cascader_4oEfL = ref();
const viy2Flex_pVGDy = ref();
const viy2Panel_GHgKT = ref();
const viy2Button_cAH5o = ref();
const confirm = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  WholesaleRate: '', largeGroupCd: [],
});
const gridRules = {
  Rate: [
    { required: true, message: 'name required' },
  ],
};
const viy2Cascader_4oEfLProps = reactive({
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
const gridViy2TableButtonColumn_GDWleButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRoleRow,
      title: 'Delete',
    },
  ];
};
const productCategoryDsApi = useApi({
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
const productCategoryDs = productCategoryDsApi.data;
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
      largeGroupNm: 'TEST0',
      Rate: '61',
    },
    {
      pureRank: '0A',
      largeGroupCd: '1',
      largeGroupNm: 'TEST1',
      Rate: '63',
    },
    {
      pureRank: '0A',
      largeGroupCd: '2',
      largeGroupNm: 'TEST2',
      Rate: '77',
    },
    {
      pureRank: '0B',
      largeGroupCd: '1',
      largeGroupNm: 'TEST1',
      Rate: '72',
    },
    {
      pureRank: '0B',
      largeGroupCd: '7',
      largeGroupNm: 'TEST7',
      Rate: '80',
    },
    {
      pureRank: '0B',
      largeGroupCd: '8',
      largeGroupNm: 'TEST8',
      Rate: '66',
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
const viy2Button_5aF6x2Click = () => {
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
const viy2Button_cAH5oClick = () => {
  const row = {};
  grid.value.insertAt(row, -1).then((newRow) => {
    grid.value.setCurrentRow(newRow.row);
  });
};
const confirmClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      // gridDsApi.runAsync();
    }
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
const gridRateEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
onMounted(() => {
// queryFormData.point = uc.defaultPointCd+' '+uc.defaultPointNm;
// queryFormData.pointId = uc.defaultPointId;
});
watch (
  () => queryFormData, (newVal, oldVal) => {
    resetTblResults();
  }, { deep: true },
);
const onDelRoleRow = (row) => {
  if (row.pureRank != null && typeof (row.pureRank) != 'undefined') {
    VueMessageBox.confirm(t('削除を確認しますか？'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      grid.value.remove(row);
      // deleteGridDsApi.runAsync();
      // resetCondition();
    }).catch(() => {
    });
  } else {
    grid.value.remove(row);
  }
};
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = null; // 或者设置为初始值
  }
  resetTblResults();
// gridDsApi.runAsync();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
// confirmFlag.value = true;
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
        <VuePanel id="viy2Panel_GHgeq" ref="viy2Panel_GHgeq" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5aF6x2" ref="viy2Button_5aF6x2" icon-position="left" @click="viy2Button_5aF6x2Click">
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
                label="大区分"
                prop="largeGroupCd"
              >
                <VueCascader
                  id="viy2Cascader_4oEfL"
                  ref="viy2Cascader_4oEfL"
                  v-model="queryFormData.largeGroupCd"
                  display-member="label"
                  value-member="value"
                  :options="productCategoryDs"
                  :props="viy2Cascader_4oEfLProps"
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
        <VuePanel id="viy2Panel_GHgKT" ref="viy2Panel_GHgKT" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_cAH5o" ref="viy2Button_cAH5o" icon-position="left" class="icon-button-width" @click="viy2Button_cAH5oClick">
                行追加
              </VueButton>
              <VueButton id="confirm" ref="confirm" icon-position="left" type="info" @click="confirmClick">
                保存
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            <VueNumberColumn
              :edit-render="gridRateEditRender"
              field="Rate"
              align="right"
              :sortable="true"
              width="150px"
              title="掛率"
              header-align="center"
            />
            <VueButtonColumn
              align="center"
              fixed="right"
              width="40px"
              :buttons="gridViy2TableButtonColumn_GDWleButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
