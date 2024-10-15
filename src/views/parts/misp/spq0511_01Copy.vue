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
const displayTypeShow = ref(false);
const object1Show = ref(true);
const placeholderNm = ref('');
const assignShow = ref(false);
const displayMoreTypeDS = ref([
  { label: '指定', value: 'assign' },
  { label: '一覧·全社', value: 'specifyAll' },
  { label: '一覧·セールスマン指定', value: 'specifySalesman' },
]);
const displayInitTypeDS = ref([
  { label: '指定', value: 'assign' },
  { label: '一覽', value: 'view' },
]);
const gridShow = ref(true);
const grid1Show = ref(false);
const grid2Show = ref(false);
defineOptions({
  name: 'spq0511_01Copy',
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
const displayType = ref();
const viy2Select_m5rXO = ref();
const viy2Select_2HKMBy = ref();
const viy2Select_8LERi4 = ref();
const viy2Radio_rnlkN = ref();
const viy2Radio_1zs3Au = ref();
const viy2Select_6GBa68 = ref();
const viy2Flex_SMXLZ = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const grid1 = ref();
const grid2 = ref();
const viy2Row_Sh2vF = ref();
const viy2Pagination_Sh5cM = ref();
const formData = reactive({
});
const queryFormData = reactive({
  searchType: 'companyWide', displayType: '', datafieldviy2Select_m5rXO: [], object1: '', object2: '', datafieldviy2Radio_rnlkN: '1', productType: '', productCd: '',
});
const rules = reactive({
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
const viy2Select_2HKMByOpts = reactive([
  {
    label:
'test1',
    value:
'1',
  },
  {
    label:
'test2',
    value:
'2',
  },
  {
    label:
'test3',
    value:
'3',
  },
  {
    label:
'test4',
    value:
'4',
  },
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
const viy2Radio_rnlkNOpts = reactive([
  { value: '1', label: '販売' },
  { value: '2', label: '供給' },
  { value: '3', label: '在庫' },
]);
const viy2Radio_1zs3AuOpts = reactive([
  { value: '1', label: '大' },
  { value: '2', label: '中' },
  { value: '3', label: '小' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const grid1EditConfig = reactive({
  trigger: 'click',
});
const grid1MouseConfig = reactive({
  extension: true,
});
const grid2EditConfig = reactive({
  trigger: 'click',
});
const grid2MouseConfig = reactive({
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
const displayTypeDSApi = useApi({
  method: 'post',
  localData: [
    { label: '指定', value: 'assign' },
    { label: '一覽', value: 'view' },
  ]
  ,
});
const displayTypeDS = displayTypeDSApi.data;
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
  debugger;
  const displayTypeDS = displayTypeDSApi.data;
  if (value == 'companyWide') {
    // 隐藏 表示タイプ、
    defaultShow();
    displayTypeShow.value = false;
    object1Show.value = false;
    displayTypeDS.value = displayInitTypeDS.value;
  } else if (value == 'salesman') {
    defaultShow();
    displayTypeDS.value = displayInitTypeDS.value;
  } else if (value == 'consumer') {
    defaultShow();
    displayTypeDS.value = displayMoreTypeDS.value;
  } else if (value == 'internalDivision') {
    defaultShow();
    displayTypeShow.value = false;
    object1Show.value = false;
    displayTypeDS.value = displayInitTypeDS.value;
  }
}
;
const displayTypeChange = (value) => {
  debugger;
  if (value == 'assign' || value == 'specifySalesman') {
    object1Show.value = true;
    assignShow.value = true;
    if (queryFormData.searchType == 'consumer' && value == 'assign') {
      placeholderNm.value = ' 販売店コード ';
    } else {
      placeholderNm.value = ' 社員コード ';
    }
  } else if (value == 'view' || value == 'specifyAll') {
    assignShow.value = false;
    object1Show.value = false;
  }
};
const viy2Radio_rnlkNChange = (value) => {
  if (value == '1') {
    grid1Show.value = false;
    grid2Show.value = false;
    gridShow.value = true;
  } else if (value == '2') {
    grid1Show.value = true;
    grid2Show.value = false;
    gridShow.value = false;
  } else {
    grid1Show.value = false;
    grid2Show.value = true;
    gridShow.value = false;
  }
}
;
const viy2Select_6GBa68Change = (value, data) => {
  queryFormData.pointCd = data.code;
};
const gridCellDblclick = (row) => {
  skipToDetail(row);
};
const gridCodeNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1CodeNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2CodeNameEditRender = computed(() => {
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
  ;
  queryFormData.displayType = value;
};
const defaultShow = () => {
  ;
  displayTypeShow.value = true;
  object1Show.value = true;
  assignShow.value = false;
  queryFormData.displayType = '';
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
                  label-width="120px"
                  prop="searchType"
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
                  v-show="displayTypeShow"
                  :label="t('label.displayType')"
                  label-width="120px"
                  prop="displayType"
                >
                  <VueRadioGroup
                    id="displayType"
                    ref="displayType"
                    v-model="queryFormData.displayType"
                    radio-style="button"
                    direction="horizontal"
                    split-size="default"
                    @change="displayTypeChange"
                  >
                    <VueRadioButton
                      v-for="option in displayTypeDS"
                      :key="option.value"
                      :label="option.value"
                      :name="option.name"
                      :disabled="option.disabled"
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
                  v-show="object1Show"
                  label="対象１"
                  label-width="120px"
                  prop="object1"
                >
                  <VueSelect
                    id="viy2Select_2HKMBy"
                    ref="viy2Select_2HKMBy"
                    v-model="queryFormData.object1"
                    :style="{ width: '150px' }"
                    :options="viy2Select_2HKMByOpts"
                  />
                </VueFormItem>
                <VueFormItem
                  label="対象２"
                  label-width="120px"
                  prop="object2"
                >
                  <VueSelect
                    id="viy2Select_8LERi4"
                    ref="viy2Select_8LERi4"
                    v-model="queryFormData.object2"
                    :style="{ width: '150px' }"
                    :options="viy2Select_8LERi4Opts"
                  />
                </VueFormItem>
                <VueFormItem
                  :label="t('label.aggregationType')"
                  prop="datafieldviy2Radio_rnlkN"
                >
                  <VueRadioGroup
                    id="viy2Radio_rnlkN"
                    ref="viy2Radio_rnlkN"
                    v-model="queryFormData.datafieldviy2Radio_rnlkN"
                    radio-style="button"
                    direction="horizontal"
                    split-size="default"
                    @change="viy2Radio_rnlkNChange"
                  >
                    <VueRadioButton
                      v-for="option in viy2Radio_rnlkNOpts"
                      :key="option.value"
                      :label="option.value"
                    >
                      {{ option.label }}
                    </VueRadioButton>
                  </VueRadioGroup>
                </VueFormItem>
                <VueFormItem
                  :label="t('label.productDiff')"
                  label-width="120px"
                  prop="productType"
                >
                  <VueRadioGroup
                    id="viy2Radio_1zs3Au"
                    ref="viy2Radio_1zs3Au"
                    v-model="queryFormData.productType"
                    radio-style="button"
                    direction="horizontal"
                    split-size="default"
                  >
                    <VueRadioButton
                      v-for="option in viy2Radio_1zs3AuOpts"
                      :key="option.value"
                      :label="option.value"
                    >
                      {{ option.label }}
                    </VueRadioButton>
                  </VueRadioGroup>
                </VueFormItem>
                <VueFormItem
                  label-width="10px"
                  prop="productCd"
                >
                  <VueSelect
                    id="viy2Select_6GBa68"
                    ref="viy2Select_6GBa68"
                    v-model="queryFormData.productCd"
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
                    @change="viy2Select_6GBa68Change"
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
        <VueTable v-if="gridShow" id="grid" ref="grid" :stripe="true" header-align="center" :show-footer="true" height="auto" :data="exportDs" :style="{ width: 'auto' }" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
            :edit-render="gridCodeNameEditRender"
            field="CodeName"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            title="販売計画"
            width="200px"
            header-align="center"
          />
        </VueTable>
        <VueTable v-if="grid1Show" id="grid1" ref="grid1" height="auto" :edit-config="grid1EditConfig" :mouse-config="grid1MouseConfig">
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
            title="No"
          />
          <VueInputColumn
            :edit-render="grid1CodeNameEditRender"
            field="CodeName"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            title="受注件数"
            width="200px"
            header-align="center"
          />
        </VueTable>
        <VueTable v-if="grid2Show" id="grid2" ref="grid2" height="auto" :edit-config="grid2EditConfig" :mouse-config="grid2MouseConfig">
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
            title="No"
          />
          <VueInputColumn
            :edit-render="grid2CodeNameEditRender"
            field="CodeName"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            title="在庫修正"
            width="200px"
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
