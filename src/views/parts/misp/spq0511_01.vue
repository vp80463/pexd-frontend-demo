<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const currentMonth = dayjs().format('YYYYMM');
const exportFlag = ref(true);
const router = useRouter();
defineOptions({
  name: 'spq0511_01',
});
const form = ref();
const viy2Flex_SMXA1 = ref();
const queryForm = ref();
const viy2Panel_BNAeW = ref();
const viy2Button_6Eq86q = ref();
const viy2Button_65XP4e = ref();
const viy2Flex_N4KgA = ref();
const viy2Row_lOY8w = ref();
const viy2Radio_BPvTQ = ref();
const viy2Radio_N4rHF = ref();
const viy2InputBox_gQSTd = ref();
const viy2Select_8LERi4 = ref();
const viy2Select_SpVoA = ref();
const viy2Select_8OLCOA = ref();
const viy2Select_8OLBzE = ref();
const viy2Select_8OZfZS = ref();
const viy2Flex_SMXLZ = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_Sh2vF = ref();
const viy2Pagination_Sh5cM = ref();
const formData = reactive({
});
const queryFormData = reactive({
  datafieldviy2Radio_BPvTQ: '1', displayType: '', datafieldviy2InputBox_gQSTd: '', datafieldviy2Select_SidkH: '', SelectLargeType: '', SelectMiddleType: '', SelectLargeType: '', SelectLargeType: '',
});
const viy2Radio_BPvTQOpts = reactive([
  { value: '1', label: '全社' },
  { value: '2', label: 'セールスマン' },
  { value: '3', label: '販売店' },
  { value: '4', label: '内部課' },
]);
const viy2Radio_N4rHFOpts = reactive([
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  { value: '4', label: 'Option 4' },
]);
const viy2Select_8LERi4Opts = reactive([
  {
    label:
'Option 1',
    value:
'Option 1',
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
const viy2Select_SpVoAOpts = reactive([
  {
    label:
'Option 1',
    value:
'Option 1',
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
const viy2Select_8OLCOAOpts = reactive([
  {
    label:
'Option 1',
    value:
'Option 1',
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
const viy2Select_8OLBzEOpts = reactive([
  {
    label:
'Option 1',
    value:
'Option 1',
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
const viy2Select_8OZfZSOpts = reactive([
  {
    label:
'Option 1',
    value:
'Option 1',
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
const viy2Pagination_Sh5cMCurrentPage = ref(1);
const viy2Pagination_Sh5cMPageSize = ref();
const largeGroupDsApi = useApi({
  url: '/common/helper/getSingleLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
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
const displayTypeDsApi = useApi({
  method: 'post',
  localData: [
    { id: '1', name: 'NameA', type: '1', description: 'DescriptionA' },
    { id: '2', name: 'NameB', type: '1', description: 'DescriptionB' },
    { id: '3', name: 'NameC', type: '2', description: 'DescriptionC' },
    { id: '4', name: 'NameD', type: '2', description: 'DescriptionD' },
    { id: '5', name: 'NameE', type: '2', description: 'DescriptionE' },
  ],
});
const displayTypeDs = displayTypeDsApi.data;
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
const viy2Button_65XP4eClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      findStockAccountListApi.runAsync();
    }
  });
};
const viy2Radio_BPvTQChange = (value) => {
  searchTypeOnChange(value);
}
;
const gridCellDblclick = (row) => {
  skipToDetail(row);
};
const gridCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCodeNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLargeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSmallEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDivisionNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDisplayItemsEditRender = computed(() => {
  return {
    enabled: false,
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
const searchTypeOnChange = (value) => {
  debugger;
  queryFormData.displayType = value;
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
        <VuePanel id="viy2Panel_BNAeW" ref="viy2Panel_BNAeW" title="検索条件" height="auto">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_6Eq86q" ref="viy2Button_6Eq86q" icon-position="left" type="info" @click="viy2Button_6Eq86qClick">
                {{ t('button.retrieve') }}
              </VueButton>
              <VueButton id="viy2Button_65XP4e" ref="viy2Button_65XP4e" icon-position="left" @click="viy2Button_65XP4eClick">
                {{ t('button.reset') }}
              </VueButton>
            </div>
          </template>
          <VueFlex
            id="viy2Flex_N4KgA"
            ref="viy2Flex_N4KgA"
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
                  :label="t('label.searchType')"
                  prop="datafieldviy2Radio_BPvTQ"
                  size="default"
                >
                  <VueRadioGroup
                    id="viy2Radio_BPvTQ"
                    ref="viy2Radio_BPvTQ"
                    v-model="queryFormData.datafieldviy2Radio_BPvTQ"
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
                  :label="t('label.displayType')"
                  label-width="100px"
                  prop="displayType"
                >
                  <VueRadioGroup
                    id="viy2Radio_N4rHF"
                    ref="viy2Radio_N4rHF"
                    v-model="queryFormData.displayType"
                    radio-style="button"
                    direction="horizontal"
                    split-size="default"
                  >
                    <VueRadioButton
                      v-for="option in viy2Radio_N4rHFOpts"
                      :key="option.value"
                      :label="option.value"
                    >
                      {{ option.label }}
                    </VueRadioButton>
                  </VueRadioGroup>
                </VueFormItem>
                <VueFormItem
                  label="対象１"
                  label-width="100px"
                  prop="datafieldviy2InputBox_gQSTd"
                >
                  <VueInput
                    id="viy2InputBox_gQSTd"
                    ref="viy2InputBox_gQSTd"
                    v-model="queryFormData.datafieldviy2InputBox_gQSTd"
                  />
                </VueFormItem>
                <VueFormItem
                  label="対象２"
                  label-width="100px"
                  prop="datafieldviy2Select_SidkH"
                >
                  <VueSelect
                    id="viy2Select_8LERi4"
                    ref="viy2Select_8LERi4"
                    v-model="queryFormData.datafieldviy2Select_SidkH"
                    :style="{ width: '150px' }"
                    :options="viy2Select_8LERi4Opts"
                  />
                </VueFormItem>
                <VueFormItem
                  :label="t('label.largeCategory')"
                  label-width="100px"
                  prop="SelectLargeType"
                >
                  <VueSelect
                    id="viy2Select_SpVoA"
                    ref="viy2Select_SpVoA"
                    v-model="queryFormData.SelectLargeType"
                    :style="{ width: '100px' }"
                    :options="viy2Select_SpVoAOpts"
                  />
                </VueFormItem>
                <VueFormItem
                  :label="t('label.middleCategory')"
                  label-width="70px"
                  prop="SelectMiddleType"
                >
                  <VueSelect
                    id="viy2Select_8OLCOA"
                    ref="viy2Select_8OLCOA"
                    v-model="queryFormData.SelectMiddleType"
                    :style="{ width: '100px' }"
                    :options="viy2Select_8OLCOAOpts"
                  />
                </VueFormItem>
                <VueFormItem
                  :label="t('label.smallCategory')"
                  label-width="70px"
                  prop="SelectLargeType"
                >
                  <VueSelect
                    id="viy2Select_8OLBzE"
                    ref="viy2Select_8OLBzE"
                    v-model="queryFormData.SelectLargeType"
                    :style="{ width: '100px' }"
                    :options="viy2Select_8OLBzEOpts"
                  />
                </VueFormItem>
                <VueFormItem
                  :label="t('label.aggregationType')"
                  label-width="100px"
                  prop="SelectLargeType"
                >
                  <VueSelect
                    id="viy2Select_8OZfZS"
                    ref="viy2Select_8OZfZS"
                    v-model="queryFormData.SelectLargeType"
                    :style="{ width: '150px' }"
                    :options="viy2Select_8OZfZSOpts"
                  />
                </VueFormItem>
              </VueCol>
            </VueRow>
          </VueFlex>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_SMXLZ"
        ref="viy2Flex_SMXLZ"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" :stripe="true" header-align="center" :show-footer="true" height="auto" :data="exportDs" :style="{ width: 'auto' }" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
            title="No"
          />
          <VueInputColumn
            :edit-render="gridCodeEditRender"
            field="Code"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            :title="t('label.code')"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridCodeNameEditRender"
            field="CodeName"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            :title="t('label.name')"
            width="200px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridLargeEditRender"
            field="large"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            :title="t('label.largeCategory')"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridMiddleEditRender"
            field="middle"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            :title="t('label.middleCategory')"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridSmallEditRender"
            field="small"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            :title="t('label.smallCategory')"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridDivisionNameEditRender"
            field="DivisionName"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            :title="t('label.name')"
            width="200px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridDisplayItemsEditRender"
            field="displayItems"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.diplayItems')"
            width="150px"
            header-align="center"
          />
        </VueTable>
        <VueRow
          id="viy2Row_Sh2vF"
          ref="viy2Row_Sh2vF"
        >
          <VueCol
            item-key="item"
            :md="{ span: 16 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VuePagination
              id="viy2Pagination_Sh5cM"
              ref="viy2Pagination_Sh5cM"
              v-model:current-page="viy2Pagination_Sh5cMCurrentPage"
              v-model:page-size="viy2Pagination_Sh5cMPageSize"
              :background="true"
              :small="true"
            />
          </VueCol>
        </VueRow>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
