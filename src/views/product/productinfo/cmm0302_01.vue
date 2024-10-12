<script setup>
import { IconArrowLeftBold, IconCloseBold, IconDocument, IconMinus, IconPlus, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'cmm0302_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const confirmBtn = ref();
const viy2Button_2Himl4 = ref();
const viy2Button_2IkqVS = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2DateTimePicker_hrzSYn = ref();
const viy2DateTimePicker_hrzT01 = ref();
const viy2Button_hrzT02 = ref();
const viy2Button_hrzT03 = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_2HSv87 = ref();
const viy2Button_2HSv9L = ref();
const viy2Select_2HKuQg = ref();
const viy2Select_3yO6Vw = ref();
const viy2Select_2HLF4a = ref();
const viy2Select_3yLl5O = ref();
const viy2Panel_wZlWr = ref();
const viy2Button_4G4BCI = ref();
const viy2Button_3C1Lxe = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const partsAside = ref();
const viy2Subpage_fInzM = ref();
const partsMultiAside = ref();
const viy2Subpage_OzNTu = ref();
const consumerAside = ref();
const viy2Subpage_BTeF1 = ref();
const formData = reactive({
});
const orderFormData = reactive({
  dateFrom: '20240412', dateTo: '20240412', listNo: '', orderCategory: '', status: '', productClassification: '', priceType: '',
});
const rules = reactive({
  viy2DateTimePicker_hrzSYnRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_hrzT01Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showPartsWin = ref(false);
const showPartsMultiWin = ref(false);
const showConsumerWin = ref(false);
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2Select_2HKuQgOpts = reactive([
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
const viy2Select_3yO6VwOpts = reactive([
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
const viy2Select_2HLF4aOpts = reactive([
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
const viy2Select_3yLl5OOpts = reactive([
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
const gridViy2TableButtonColumn_gR42iButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocument,
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      orderCategory: 'Purchase Order',
      listNo: 'PR13100002',
      listNm: 'PR13100002',
      fromDate: '20240214',
      toDate: '20240414',
      priceType: 'Standard Price',
      versionNo: '1',
      middleGroupCd: 'Spare Parts',
      productClassification: 'AT',
      status: 'Activity',
    },
  ],
}, {
  initialData: [
    { id: '1', name: 'NameA', type: '1', description: 'DescriptionA' },
    { id: '2', name: 'NameB', type: '1', description: 'DescriptionB' },
    { id: '3', name: 'NameC', type: '2', description: 'DescriptionC' },
    { id: '4', name: 'NameD', type: '2', description: 'DescriptionD' },
    { id: '5', name: 'NameE', type: '2', description: 'DescriptionE' },
  ],
});
const gridDs = gridDsApi.data;
const viy2Button_hrzT02Click = () => {
  const current = queryFormData.dateFrom ? queryFormData.dateFrom : currentDate;
  // 获取上个月的年份和月份
  let lastMonthYear = current.getFullYear();
  let lastMonth = current.getMonth() - 1;
  if (lastMonth < 0) {
    lastMonth = 11; // 如果是1月，则上个月是12月
    lastMonthYear--; // 年份减一
  }
  queryFormData.dateFrom = new Date(lastMonthYear, lastMonth, 1);
  queryFormData.dateTo = new Date(lastMonthYear, lastMonth + 1, 0);
};
const viy2Button_hrzT03Click = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_12gOt1Select = (params) => {
  queryFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const gridOrderCategoryEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridListNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridListNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFromDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridToDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridVersionNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPriceTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProductClassificationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
});
const onDelRow = (row) => {
  grid.value.remove(row);
};
const callbkSelectParts = (param) => {
  grid.value.getCurrentRecord().partsNo = param.partsNo;
  grid.value.getCurrentRecord().partsNm = param.partsNm;
  showPartsWin.value = false;
};
const closeAside = () => {
  showPartsWin.value = false;
};
// 部品多选回调
const multiPartsParams = () => {
  const existData = grid.value.getTableData().visibleData;
  const initData = [];
  existData.forEach((row) => {
    const newOne = {
      partsNo: row.partsNo,
      partsNm: row.partsNm,
    };
    initData.push(newOne);
  });
  return initData;
};
const callbkSelectMultiParts = (param) => {
// 移除新删除行
  param.removeRecords.forEach((delOne) => {
    grid.value.getTableData().visibleData.forEach((row) => {
      if (delOne.partsNo == row.partsNo) {
        grid.value.remove(row);
      }
    });
  });
  // 追加新追加行
  const tableData = grid.value.getTableData().visibleData;
  param.insertRecords.forEach((newOne) => {
    const existOne = tableData.find(chosen => chosen.partsNo === newOne.partsNo);
    if (!existOne) {
      grid.value.insertAt(newOne, -1).then((newRow) => {
        grid.value.setCurrentRow(newRow.row);
      });
    }
  });
  showPartsMultiWin.value = false;
};
const closeMultiPartsAside = () => {
  showPartsMultiWin.value = false;
};
// consumer侧边栏选择后
const callbkSelectConsumer = (param) => {
  consumerFormData.fn = param.name;
  consumerFormData.mobile = param.mobile;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_10QMyC"
      ref="viy2Row_10QMyC"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="warning">
          Reset
        </VueButton>
        <VueButton id="viy2Button_2Himl4" ref="viy2Button_2Himl4" icon-position="left">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_2IkqVS" ref="viy2Button_2IkqVS" icon-position="left" type="info">
          Retrieve
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="orderForm"
      ref="orderForm"
      label-width="130px"
      class="margin-top-div0 except-height-css"
      :model="orderFormData"
    >
      <VueRow
        id="viy2Row_3mqzSt"
        ref="viy2Row_3mqzSt"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Date"
            prop="dateFrom"
            :rules="rules.viy2DateTimePicker_hrzSYnRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_hrzSYn"
              ref="viy2DateTimePicker_hrzSYn"
              v-model="orderFormData.dateFrom"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
            />
          </VueFormItem>
          <!-- BEGIN CUSTOM DIV CODE -->
          <span>-</span>
          <!-- END CUSTOM DIV CODE -->
          <VueFormItem
            label-width="0"
            prop="dateTo"
            :rules="rules.viy2DateTimePicker_hrzT01Rules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_hrzT01"
              ref="viy2DateTimePicker_hrzT01"
              v-model="orderFormData.dateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_hrzT02" ref="viy2Button_hrzT02" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hrzT02Click" />
          <VueButton id="viy2Button_hrzT03" ref="viy2Button_hrzT03" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hrzT03Click" />
          <VueFormItem
            label="List No."
            prop="listNo"
          >
            <VueValueList
              id="viy2ValueList_12gOt1"
              ref="viy2ValueList_12gOt1"
              :style="{ width: '250px' }"
              v-model="orderFormData.listNo"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              :popover-columns="viy2ValueList_12gOt1PopoverColumns"
              :popover-query-method="viy2ValueList_12gOt1PopoverQueryMethod"
              :popup-columns="viy2ValueList_12gOt1PopupColumns"
              :popup-conditions="viy2ValueList_12gOt1PopupConditions"
              :popup-query-method="viy2ValueList_12gOt1PopupQueryMethod"
              @select="viy2ValueList_12gOt1Select"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_2HSv87"
                  ref="viy2Row_2HSv87"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_2HSv8W" ref="viy2Text_2HSv8W" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Point
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 17 }"
                  >
                    <VueButton id="viy2Button_2HSv9L" ref="viy2Button_2HSv9L" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Order Category"
            prop="orderCategory"
          >
            <VueSelect
              id="viy2Select_2HKuQg"
              ref="viy2Select_2HKuQg"
              v-model="orderFormData.orderCategory"
              :style="{ width: '120px' }"
              :options="viy2Select_2HKuQgOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Status"
            prop="status"
          >
            <VueSelect
              id="viy2Select_3yO6Vw"
              ref="viy2Select_3yO6Vw"
              v-model="orderFormData.status"
              :style="{ width: '120px' }"
              :options="viy2Select_3yO6VwOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Product Classification"
            label-width="150px"
            prop="productClassification"
          >
            <VueSelect
              id="viy2Select_2HLF4a"
              ref="viy2Select_2HLF4a"
              v-model="orderFormData.productClassification"
              :style="{ width: '120px' }"
              :options="viy2Select_2HLF4aOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Price Type"
            prop="priceType"
          >
            <VueSelect
              id="viy2Select_3yLl5O"
              ref="viy2Select_3yLl5O"
              v-model="orderFormData.priceType"
              :style="{ width: '120px' }"
              :options="viy2Select_3yLl5OOpts"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" title="Detail">
      <template #header>
        <div style="width: 200px">
          <VueButton id="viy2Button_4G4BCI" ref="viy2Button_4G4BCI" icon-position="left" :icon="IconPlus" />
          <VueButton id="viy2Button_3C1Lxe" ref="viy2Button_3C1Lxe" icon-position="left" :icon="IconMinus" />
        </div>
      </template>
      <VueTable id="grid" ref="grid" :height="gridHeight - 40" :data="gridDs" :edit-config="gridEditConfig">
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
        />
        <VueInputColumn
          :edit-render="gridOrderCategoryEditRender"
          field="orderCategory"
          title="Order Category"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridListNoEditRender"
          field="listNo"
          title="List No."
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridListNmEditRender"
          field="listNm"
          title="List Name"
          width="150px"
        />
        <VueDateTimeColumn
          :edit-render="gridFromDateEditRender"
          field="fromDate"
          title="From Date"
          width="120px"
        />
        <VueDateTimeColumn
          :edit-render="gridToDateEditRender"
          field="toDate"
          title="To Date"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridVersionNoEditRender"
          field="versionNo"
          title="Version No."
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridPriceTypeEditRender"
          field="priceType"
          title="Price Type"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridProductClassificationEditRender"
          field="productClassification"
          title="Product Classification"
          width="153px"
        />
        <VueInputColumn
          :edit-render="gridStatusEditRender"
          field="status"
          title="Status"
          width="130px"
        />
        <VueButtonColumn
          align="center"
          fixed="right"
          width="40px"
          :buttons="gridViy2TableButtonColumn_gR42iButtons"
        />
      </VueTable>
    </VuePanel>
    <VueAside
      id="partsAside"
      ref="partsAside"
      v-model="showPartsWin"
      :modal="true"
      direction="rtl"
      size="70%"
      :with-header="false"
      :show-close="false"
    />
    <VueAside
      id="partsMultiAside"
      ref="partsMultiAside"
      v-model="showPartsMultiWin"
      :modal="true"
      direction="btt"
      size="90%"
      :with-header="false"
      :show-close="false"
    />
    <VueAside
      id="consumerAside"
      ref="consumerAside"
      v-model="showConsumerWin"
      :modal="true"
      direction="rtl"
      size="60%"
      :with-header="false"
      :show-close="false"
    />
  </VueForm>
</template>
