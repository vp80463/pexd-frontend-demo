<script setup>
import { IconCloseBold, IconDArrowRight, IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { formatPartNo, warn_msg } from '@/pj-commonutils.js';
const props = defineProps({
  initData: Object,
});
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const total = ref();
defineOptions({
  name: 'parts_select_multi',
});
const form = ref();
const titlerow = ref();
const viy2Button_fsC6p = ref();
const viy2Flex_24Zbe = ref();
const queryForm = ref();
const viy2Panel_1FmkD = ref();
const viy2Button_fsgWC = ref();
const viy2Row_fsSal = ref();
const viy2InputBox_fsX54 = ref();
const viy2Cascader_87KXO = ref();
const viy2Cascader_gokMA = ref();
const viy2InputBox_1DNhb = ref();
const viy2InputBox_gqHuI = ref();
const viy2InputBox_878tiK = ref();
const viy2Panel_27SSr = ref();
const viy2Button_2uA36e = ref();
const viy2Flex_Wqy6W = ref();
const viy2Flex_WqNqv = ref();
const grid = ref();
const viy2Row_lMpgE = ref();
const pagination = ref();
const viy2Flex_WqSVy = ref();
const viy2Button_NtkrQ = ref();
const viy2Flex_WqGVc = ref();
const chosenGrid = ref();
const formData = reactive({
});
const queryFormData = reactive({
  content: '', productCategory: [], productMiddleCategory: [], datafieldviy2InputBox_1DNhb: '', datafieldviy2InputBox_1DNhb: '', datafieldviy2InputBox_1DNhb: '',
});
const viy2Cascader_87KXOProps = reactive({
  checkStrictly: true,
  expandTrigger: 'click',
});
const viy2Cascader_gokMAProps = reactive({
  checkStrictly: true,
  expandTrigger: 'click',
});
const gridEditConfig = reactive({
});
const gridMouseConfig = reactive({
  selected: true,
  extension: true,
});
const gridViy2TableButtonColumn_NpfPpButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDArrowRight,
      click: moveProduct,
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref(100);
const chosenGridEditConfig = reactive({
  trigger: 'click',
});
const chosenGridMouseConfig = reactive({
  extension: true,
});
const chosenGridViy2TableButtonColumn_NrCHLButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delChosenRow,
      title: 'Delete',
    },
  ];
};
const gridDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  data: () => {
    queryFormData.pageSize = paginationPageSize.value;
    queryFormData.currentPage = paginationCurrentPage.value;
    let largeMiddleGroupString = '';
    for (const key in queryFormData.productCategory) {
      if (key == 0) {
        largeMiddleGroupString += `${queryFormData.productCategory[key]}|`;
      } else {
        largeMiddleGroupString += queryFormData.productCategory[key];
      }
    }
    queryFormData.largeMiddleGroup = largeMiddleGroupString;
    queryFormData.autoFillFlag = 'Y';
    return Object.assign({}, queryFormData);
  },
}, {
  onSuccess: (data, params) => {
    total.value = data.total;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const chosenGridDsApi = useApi({
  method: 'post',
});
const chosenGridDs = chosenGridDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandList.json',
  method: 'post',
  data: {
    arg0: '1',
  },
}, {
  initialData: {
    data: [],
  },
});
const brandDs = brandDsApi.data;
const middleGroupDsApi = useApi({
  url: '/common/helper/getMiddleGroupList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    middleGroupList = [...data];
    middleGroupDs.value.splice(0);
  },
  initialData: {
    data: [],
  },
  manual: true,
});
const middleGroupDs = middleGroupDsApi.data;
const allGridDsApi = useApi({
  method: 'post',
});
const allGridDs = allGridDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const largeGroupDs = largeGroupDsApi.data;
const viy2Button_fsC6pClick = () => {
  emit('close');
};
const viy2Button_fsgWCClick = () => {
  gridDsApi.runAsync();
};
const viy2Button_2uA36eClick = () => {
  emit('select', chosenGrid.value.getRecordset());
};
const gridCellDblclick = (obj) => {
  moveProduct(obj.row);
};
const gridCodeFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLargeGroupEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleGroupEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridJanCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMakerPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBrandEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const paginationCurrentChange = () => {
  gridDsApi.runAsync();
};
const viy2Button_NtkrQClick = () => {
  moveAllProduct();
};
const chosenGridCellDblclick = (obj) => {
  delChosenRow(obj.row);
};
const chosenGridPartsNoFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const chosenGridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const chosenGridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const chosenGridQtyBlur = (obj) => {
  const row = obj.row;
  const orderQty = row.orderQty;
  const salesLotQty = row.salesLotQty;
  row.orderQty = Math.ceil(orderQty / salesLotQty) * salesLotQty;
};
const chosenGridQtyEvents = reactive({
  blur: chosenGridQtyBlur,
});
const chosenGridQtyEditRender = computed(() => {
  return {
    enabled: true,
    events: chosenGridQtyEvents,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
});
watch(() => props.initData, (newVal) => {
  if (newVal) {
    queryFormData.facilityId = newVal.facilityId;
    queryFormData.content = null;
    queryFormData.productCategory = null;
    queryFormData.brandId = null;
    queryFormData.batteryFlag = 'N';
    gridDs.value = [];
    chosenGridDs.value = [];
  }
}, {
  immediate: true,
  deep: true,
});
watch(() => ({ ...queryFormData }), (newVal, oldVal) => {
  resetTblResults();
}, { deep: true });
const resetTblResults = () => {
  if (gridDs.value && gridDs.value.list) {
    gridDs.value.list.splice(0);
  } else {
    gridDs.value.total = 0;
    gridDs.value.list = [];
  }
};
const moveProduct = (row) => {
// 检查部品是否已选择
// const valid = checkChosenItem(chosenGrid.value.getTableData().visibleData, row);
  const data = chosenGrid.value.getTableData().visibleData;
  const existOne = data.find(chosen => chosen.partsNo === row.code);
  // 右侧选择表格中追加一行
  if (!existOne) {
    const newOne = {
      partsId: row.id,
      partsNo: row.code,
      partsNm: row.name,
      stdPrice: row.stdRetailPrice,
      largeGroupNm: row.largeGroup,
      salesLotQty: row.salLotSize,
      onHandQty: row.onHandQty,
    };
    const copyRow = row;
    merge(copyRow, newOne);
    chosenGrid.value.insertAt(copyRow, -1).then((newRow) => {
      chosenGrid.value.setCurrentRow(newRow.row);
    });
  } else {
    warn_msg(t('M.E.103401', [t('label.parts'), formatPartNo(row.code)]));
  }
};
const delChosenRow = (row) => {
  chosenGrid.value.remove(row);
};
const moveAllProduct = () => {
  grid.value.getTableData().visibleData.forEach((row) => {
    // 检查部品是否已选择
    const data = chosenGrid.value.getTableData().visibleData;
    const existOne = data.find(chosen => chosen.partsNo === row.code);
    // 右侧选择表格中追加一行
    if (!existOne) {
      const newOne = {
        partsId: row.id,
        partsNo: row.code,
        partsNm: row.name,
        supersedingPartsNo: row.supersedingPartsId,
        stdPrice: row.stdRetailPrice,
        largeGroupNm: row.largeGroup,
        salesLotQty: row.salLotSize,
        onHandQty: row.onHandQty,
      };
      const copyRow = row;
      merge(copyRow, newOne);
      chosenGrid.value.insertAt(newOne, -1).then((newRow) => {
        chosenGrid.value.setCurrentRow(newRow.row);
      });
    }
  });
};
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      v-show="true"
      id="titlerow"
      ref="titlerow"
      class="aside-title-row"
    >
      <VueCol
        item-key="item"
        class="aside-title-text"
        :md="{ span: 7 }"
      >
        <VueText id="viy2Text_frSdr" ref="viy2Text_frSdr" size="large" :style="{ fontSize: '16px', fontWeight: 'bold', width: '100%', display: 'inline-block' }">
          部品選択
        </VueText>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        class="aside-title-button"
        :md="{ span: 17 }"
      >
        <VueButton id="viy2Button_fsC6p" ref="viy2Button_fsC6p" icon-position="left" type="text" size="default" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_fsC6pClick" />
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_24Zbe"
      ref="viy2Flex_24Zbe"
      direction="column"
      class="full-height-b3t"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_1FmkD" ref="viy2Panel_1FmkD" title="検索条件" height="auto">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_fsgWC" ref="viy2Button_fsgWC" icon-position="left" type="info" @click="viy2Button_fsgWCClick">
                検索
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_fsSal"
            ref="viy2Row_fsSal"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="部品"
                prop="content"
              >
                <VueInput
                  id="viy2InputBox_fsX54"
                  ref="viy2InputBox_fsX54"
                  v-model="queryFormData.content"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="大区分"
                prop="productCategory"
              >
                <VueCascader
                  id="viy2Cascader_87KXO"
                  ref="viy2Cascader_87KXO"
                  v-model="queryFormData.productCategory"
                  :clearable="true"
                  :style="{ width: '200px' }"
                  :options="largeGroupDs"
                  :props="viy2Cascader_87KXOProps"
                />
              </VueFormItem>
              <VueFormItem
                label="中区分"
                prop="productMiddleCategory"
              >
                <VueCascader
                  id="viy2Cascader_gokMA"
                  ref="viy2Cascader_gokMA"
                  v-model="queryFormData.productMiddleCategory"
                  :clearable="true"
                  :style="{ width: '200px' }"
                  :options="middleGroupDs"
                  :props="viy2Cascader_gokMAProps"
                />
              </VueFormItem>
              <VueFormItem
                label="JANコード"
                prop="datafieldviy2InputBox_1DNhb"
              >
                <VueInput
                  id="viy2InputBox_1DNhb"
                  ref="viy2InputBox_1DNhb"
                  v-model="queryFormData.datafieldviy2InputBox_1DNhb"
                />
              </VueFormItem>
              <VueFormItem
                label="メーカー商品コード"
                prop="datafieldviy2InputBox_1DNhb"
              >
                <VueInput
                  id="viy2InputBox_gqHuI"
                  ref="viy2InputBox_gqHuI"
                  v-model="queryFormData.datafieldviy2InputBox_1DNhb"
                />
              </VueFormItem>
              <VueFormItem
                label="ブランド"
                prop="datafieldviy2InputBox_1DNhb"
              >
                <VueInput
                  id="viy2InputBox_878tiK"
                  ref="viy2InputBox_878tiK"
                  v-model="queryFormData.datafieldviy2InputBox_1DNhb"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VuePanel id="viy2Panel_27SSr" ref="viy2Panel_27SSr" title="明細情報" height="98%">
        <template #header>
          <div style="width: auto">
            <VueButton id="viy2Button_2uA36e" ref="viy2Button_2uA36e" icon-position="left" @click="viy2Button_2uA36eClick">
              セット
            </VueButton>
          </div>
        </template>
        <VueFlex
          id="viy2Flex_Wqy6W"
          ref="viy2Flex_Wqy6W"
          direction="row"
          class="full-height-b4t"
        >
          <VueFlex
            id="viy2Flex_WqNqv"
            ref="viy2Flex_WqNqv"
            direction="column"
            grow="1"
          >
            <VueTable id="grid" ref="grid" header-align="center" height="98%" :data="gridDs.list" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
              <VueIndexColumn
                align="center"
                width="50px"
                min-width="50px"
                header-align="center"
                title="No."
              />
              <VueInputColumn
                :formatter="gridCodeFormatter"
                :edit-render="gridCodeEditRender"
                field="code"
                show-overflow="tooltip"
                :sortable="true"
                title="部品番号"
                header-align="center"
                width="125px"
              />
              <VueInputColumn
                :edit-render="gridNameEditRender"
                field="name"
                show-overflow="tooltip"
                :sortable="true"
                title="部品名称"
                header-align="center"
                width="180px"
              />
              <VueInputColumn
                :edit-render="gridLargeGroupEditRender"
                field="largeGroup"
                show-overflow="tooltip"
                :sortable="true"
                title="大区分"
                header-align="center"
                width="150px"
              />
              <VueInputColumn
                :edit-render="gridMiddleGroupEditRender"
                field="middleGroup"
                show-overflow="tooltip"
                :sortable="true"
                title="中区分"
                header-align="center"
                width="150px"
              />
              <VueInputColumn
                :edit-render="gridJanCodeEditRender"
                field="janCode"
                show-overflow="tooltip"
                :sortable="true"
                title="JANコード"
                header-align="center"
                width="150px"
              />
              <VueInputColumn
                :edit-render="gridMakerPartsNoEditRender"
                field="makerPartsNo"
                show-overflow="tooltip"
                :sortable="true"
                title="メーカー商品コード"
                header-align="center"
                width="180px"
              />
              <VueInputColumn
                :edit-render="gridBrandEditRender"
                field="brand"
                show-overflow="tooltip"
                :sortable="true"
                title="ブランド"
                header-align="center"
                width="180px"
              />
              <VueButtonColumn
                align="center"
                fixed="right"
                title="選択"
                width="60px"
                :buttons="gridViy2TableButtonColumn_NpfPpButtons"
              />
            </VueTable>
            <VueRow
              id="viy2Row_lMpgE"
              ref="viy2Row_lMpgE"
              class="pagine-margin-top"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VuePagination
                  id="pagination"
                  ref="pagination"
                  v-model:current-page="paginationCurrentPage"
                  v-model:page-size="paginationPageSize"
                  :page-sizes="[3, 15, 20, 50, 100]"
                  layout="prev, pager, next,sizes,->, total"
                  :background="true"
                  :small="true"
                  :total="total || 0"
                  @current-change="paginationCurrentChange"
                />
              </VueCol>
            </VueRow>
          </VueFlex>
          <VueFlex
            id="viy2Flex_WqSVy"
            ref="viy2Flex_WqSVy"
            justify="center"
            class="align-center"
          >
            <VueButton id="viy2Button_NtkrQ" ref="viy2Button_NtkrQ" icon-position="left" size="large" type="text" class="choose-all-button" @click="viy2Button_NtkrQClick">
              >>
            </VueButton>
          </VueFlex>
          <VueFlex
            id="viy2Flex_WqGVc"
            ref="viy2Flex_WqGVc"
            direction="column"
            grow="1"
          >
            <VueTable id="chosenGrid" ref="chosenGrid" height="98%" :data="chosenGridDs" :edit-config="chosenGridEditConfig" :mouse-config="chosenGridMouseConfig" @cell-dblclick="chosenGridCellDblclick">
              <VueIndexColumn
                align="center"
                width="50px"
                min-width="50px"
                header-align="center"
                title="No."
              />
              <VueInputColumn
                :formatter="chosenGridPartsNoFormatter"
                :edit-render="chosenGridPartsNoEditRender"
                field="partsNo"
                :sortable="true"
                title="部品番号"
                width="125px"
              />
              <VueInputColumn
                :edit-render="chosenGridPartsNmEditRender"
                field="partsNm"
                show-overflow="tooltip"
                :sortable="true"
                title="部品名称"
                width="180px"
              />
              <VueNumberColumn
                :edit-render="chosenGridQtyEditRender"
                field="qty"
                align="right"
                :sortable="true"
                width="100px"
                title="数量"
                header-align="center"
              />
              <VueButtonColumn
                align="center"
                fixed="right"
                width="40px"
                :buttons="chosenGridViy2TableButtonColumn_NrCHLButtons"
              />
            </VueTable>
          </VueFlex>
        </VueFlex>
      </VuePanel>
    </VueFlex>
  </VueForm>
</template>

<style type="text/css" scoped>
:deep(.choose-all-button) {
min-width:20px !important;
padding:0 10px !important;
font-size: 20px !important;
}
:deep(.align-center) {
align-self: center;
}
</style>
