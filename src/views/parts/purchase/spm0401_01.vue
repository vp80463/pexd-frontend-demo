<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const detailPanelModel = ref(true);
defineOptions({
  name: 'spm0401_01',
});
const form = ref();
const viy2Flex_KDhg3 = ref();
const viy2Flex_KDkIk = ref();
const viy2Panel_1lAVc = ref();
const viy2Button_7vrcC0 = ref();
const resetBtn = ref();
const queryForm = ref();
const viy2Row_4Hp8hY = ref();
const viy2Select_ZCBR7 = ref();
const viy2Panel_1lOg1 = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const formData = reactive({
});
const queryFormData = reactive({
  largeGroupId: '',
});
const rules = reactive({
  viy2Select_ZCBR7Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.largeCategory')]),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'row',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/parts/spm0401/searchRoqRopDefineList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  lockScreen: true,
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const viy2Button_7vrcC0Click = () => {
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
const gridLargeGroupIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCostUsageEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTargetSupplyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSafetyFactorEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSsmUpperFormatter = ({ cellValue }) => {
  return VueUtil.formatNumber(Number(cellValue), { digits: 2 });
}; ;
const gridSsmUpperEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      controls: false,
      textAlign: 'right',
    },
  };
});
const gridSsmLowerFormatter = ({ cellValue }) => {
  return VueUtil.formatNumber(Number(cellValue), { digits: 2 });
}; ;
const gridSsmLowerEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      controls: false,
      textAlign: 'right',
    },
  };
});
const gridAddLTDaysEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      controls: false,
    },
  };
});
const gridRopMonthFormatter = ({ cellValue }) => {
  return VueUtil.formatNumber(Number(cellValue), { digits: 2 });
}; ;
const gridRopMonthEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      controls: false,
      textAlign: 'right',
    },
  };
});
const gridRoqMonthFormatter = ({ cellValue }) => {
  return VueUtil.formatNumber(Number(cellValue), { digits: 2 });
}; ;
const gridRoqMonthEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      controls: false,
      textAlign: 'right',
    },
  };
});
onMounted(() => {
});
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
};
const resetTblResults = () => {
  gridDs.value.splice(0);
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_KDhg3"
      ref="viy2Flex_KDhg3"
      direction="column"
      class="full-height"
    >
      <VueFlex
        id="viy2Flex_KDkIk"
        ref="viy2Flex_KDkIk"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_1lAVc" ref="viy2Panel_1lAVc" title="検索条件" height="auto">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_7vrcC0" ref="viy2Button_7vrcC0" icon-position="left" type="info" @click="viy2Button_7vrcC0Click">
                検索
              </VueButton>
              <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueForm
            id="queryForm"
            ref="queryForm"
            :model="queryFormData"
          >
            <VueRow
              id="viy2Row_4Hp8hY"
              ref="viy2Row_4Hp8hY"
            >
              <VueCol
                item-key="item"
                align="left"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueFormItem
                  label="商品大区分"
                  prop="largeGroupId"
                  :rules="rules.viy2Select_ZCBR7Rules"
                >
                  <VueSelect
                    id="viy2Select_ZCBR7"
                    ref="viy2Select_ZCBR7"
                    v-model="queryFormData.largeGroupId"
                    :style="{ width: '200px' }"
                    :options="largeGroupDs"
                    :props="{
                      label: 'label',
                      value: 'value',
                    }"
                  />
                </VueFormItem>
              </VueCol>
            </VueRow>
          </VueForm>
        </VuePanel>
        <VuePanel id="viy2Panel_1lOg1" ref="viy2Panel_1lOg1" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueRow
              id="viy2Row_AsHNi"
              ref="viy2Row_AsHNi"
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
              title="No."
            />
            <VueInputColumn
              :edit-render="gridLargeGroupIdEditRender"
              field="largeGroupId"
              :sortable="true"
              title="商品大区分"
              width="120px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridCostUsageEditRender"
              field="costUsage"
              :sortable="true"
              title="CU分類"
              width="120px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridTargetSupplyEditRender"
              field="targetSupply"
              align="right"
              :sortable="true"
              title="目標供給率"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridSafetyFactorEditRender"
              field="safetyFactor"
              align="right"
              :sortable="true"
              title="安全指数"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridSsmUpperFormatter"
              :edit-render="gridSsmUpperEditRender"
              field="ssmUpper"
              align="right"
              :sortable="true"
              title="安全在庫月上限"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridSsmLowerFormatter"
              :edit-render="gridSsmLowerEditRender"
              field="ssmLower"
              align="right"
              :sortable="true"
              title="安全在庫月下限"
              width="140px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridAddLTDaysEditRender"
              field="addLTDays"
              :sortable="true"
              title="追加リードタイム"
              width="145px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridRopMonthFormatter"
              :edit-render="gridRopMonthEditRender"
              field="ropMonth"
              align="right"
              :sortable="true"
              title="発注点月数"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridRoqMonthFormatter"
              :edit-render="gridRoqMonthEditRender"
              field="roqMonth"
              align="right"
              :sortable="true"
              title="発注量月数"
              width="130px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
