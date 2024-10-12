<script setup>
import { IconArrowLeftBold, IconCloseBold, IconDocumentCopy, IconEditPen, IconRefreshRight, IconSearch, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import {
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'cmm0901_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const backBtn = ref();
const viy2Button_5qLO0C = ref();
const viy2Button_5qKM1Q = ref();
const orderForm = ref();
const viy2Row_5qKga2 = ref();
const viy2DateTimePicker_5qKgax = ref();
const viy2DateTimePicker_5qKgb3 = ref();
const viy2Button_5qKgbe = ref();
const viy2Button_5qKgbz = ref();
const viy2ValueList_5qKgbK = ref();
const viy2Row_5qKgcg = ref();
const viy2Button_SgsC78 = ref();
const viy2Select_SgsCc0 = ref();
const viy2Select_SgsCka = ref();
const viy2Panel_3vbAg4 = ref();
const viy2Row_3vbAh4 = ref();
const viy2Table_3vbAhT = ref();
const viy2Row_3vbAiT = ref();
const viy2Button_z1RRtE = ref();
const viy2Button_5pGXHp = ref();
const partsAside = ref();
const viy2Subpage_fInzM = ref();
const partsMultiAside = ref();
const viy2Subpage_OzNTu = ref();
const consumerAside = ref();
const viy2Subpage_BTeF1 = ref();
const formData = reactive({
});
const orderFormData = reactive({
  dateFrom: '20240412', dateTo: '20240412', listNo: '', priceType: '', status: '',
});
const rules = reactive({
  viy2DateTimePicker_5qKgaxRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_5qKgb3Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showPartsWin = ref(false);
const showPartsMultiWin = ref(false);
const showConsumerWin = ref(false);
const viy2ValueList_5qKgbKPopoverQueryMethod = point_query_method;
const viy2ValueList_5qKgbKPopupColumns = ref(point_column);
const viy2ValueList_5qKgbKPopupQueryMethod = point_pop_query_method;
const viy2Select_SgsCc0Opts = reactive([
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
const viy2Select_SgsCkaOpts = reactive([
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
const viy2Table_3vbAhTEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_3vbAhTViy2TableButtonColumn_xDRbkButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocumentCopy,
    },
    {
      label: '',
      type: 'text',
      icon: IconEditPen,
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      listNo: 'BGY500010C',
      ListNm: 'Sirius-BGY2',
      versionNo: '25',
      priceType: 'Employee Price',
      Status: 'Activity',
      fromDate: '20240413',
      toDate: '20240413',
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
const viy2Button_5qKgbeClick = () => {
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
const viy2Button_5qKgbzClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_5qKgbKSelect = (params) => {
  queryFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_5qKgbKPopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_5qKgbKPopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2Table_3vbAhTListNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_z1RRtEClick = () => {
  showPartsWin.value = true;
};
const viy2Table_3vbAhTListNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_5pGXHpClick = () => {
  showPartsWin.value = true;
};
const viy2Table_3vbAhTFromDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const viy2Table_3vbAhTToDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const viy2Table_3vbAhTVersionNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3vbAhTPriceTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3vbAhTStatusEditRender = computed(() => {
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
        <VueButton id="backBtn" ref="backBtn" icon-position="left" type="warning">
          Rest
        </VueButton>
        <VueButton id="viy2Button_5qLO0C" ref="viy2Button_5qLO0C" icon-position="left">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5qKM1Q" ref="viy2Button_5qKM1Q" icon-position="left" type="info">
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
        id="viy2Row_5qKga2"
        ref="viy2Row_5qKga2"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Date"
            prop="dateFrom"
            :rules="rules.viy2DateTimePicker_5qKgaxRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_5qKgax"
              ref="viy2DateTimePicker_5qKgax"
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
            :rules="rules.viy2DateTimePicker_5qKgb3Rules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_5qKgb3"
              ref="viy2DateTimePicker_5qKgb3"
              v-model="orderFormData.dateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_5qKgbe" ref="viy2Button_5qKgbe" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_5qKgbeClick" />
          <VueButton id="viy2Button_5qKgbz" ref="viy2Button_5qKgbz" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_5qKgbzClick" />
          <VueFormItem
            label="List No."
            prop="listNo"
          >
            <VueValueList
              id="viy2ValueList_5qKgbK"
              ref="viy2ValueList_5qKgbK"
              :style="{ width: '250px' }"
              v-model="orderFormData.listNo"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              :popover-columns="viy2ValueList_5qKgbKPopoverColumns"
              :popover-query-method="viy2ValueList_5qKgbKPopoverQueryMethod"
              :popup-columns="viy2ValueList_5qKgbKPopupColumns"
              :popup-conditions="viy2ValueList_5qKgbKPopupConditions"
              :popup-query-method="viy2ValueList_5qKgbKPopupQueryMethod"
              @select="viy2ValueList_5qKgbKSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_5qKgcg"
                  ref="viy2Row_5qKgcg"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_5qKgcL" ref="viy2Text_5qKgcL" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_SgsC78" ref="viy2Button_SgsC78" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Price Type"
            prop="priceType"
          >
            <VueSelect
              id="viy2Select_SgsCc0"
              ref="viy2Select_SgsCc0"
              v-model="orderFormData.priceType"
              :style="{ width: '120px' }"
              :options="viy2Select_SgsCc0Opts"
            />
          </VueFormItem>
          <VueFormItem
            label="Status"
            prop="status"
          >
            <VueSelect
              id="viy2Select_SgsCka"
              ref="viy2Select_SgsCka"
              v-model="orderFormData.status"
              :style="{ width: '120px' }"
              :options="viy2Select_SgsCkaOpts"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_3vbAg4" ref="viy2Panel_3vbAg4" v-model="detailPanelModel" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 200px">
          <VueRow
            v-show="detailPanelModel"
            id="viy2Row_3vbAh4"
            ref="viy2Row_3vbAh4"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            />
          </VueRow>
        </div>
      </template>
      <VueTable id="viy2Table_3vbAhT" ref="viy2Table_3vbAhT" :height="gridHeight - 40" :data="gridDs" :edit-config="viy2Table_3vbAhTEditConfig">
        <VueRow
          id="viy2Row_3vbAiT"
          ref="viy2Row_3vbAiT"
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
          fixed="left"
          width="50px"
          min-width="50px"
        />
        <VueInputColumn
          :edit-render="viy2Table_3vbAhTListNoEditRender"
          field="listNo"
          title="List No."
          width="130px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_z1RRtE" ref="viy2Button_z1RRtE" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_z1RRtEClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="viy2Table_3vbAhTListNmEditRender"
          field="ListNm"
          title="List Name"
          width="160px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_5pGXHp" ref="viy2Button_5pGXHp" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_5pGXHpClick" />
          </template>
        </VueInputColumn>
        <VueDateTimeColumn
          :edit-render="viy2Table_3vbAhTFromDateEditRender"
          field="fromDate"
          title="From Date"
          width="120px"
        />
        <VueDateTimeColumn
          :edit-render="viy2Table_3vbAhTToDateEditRender"
          field="toDate"
          title="To Date"
          width="120px"
        />
        <VueInputColumn
          :edit-render="viy2Table_3vbAhTVersionNoEditRender"
          field="versionNo"
          title="Version No."
          width="140px"
        />
        <VueInputColumn
          :edit-render="viy2Table_3vbAhTPriceTypeEditRender"
          field="priceType"
          title="Price Type"
          width="120px"
        />
        <VueInputColumn
          :edit-render="viy2Table_3vbAhTStatusEditRender"
          field="Status"
          title="Status"
          width="120px"
        />
        <VueButtonColumn
          align="center"
          width="80px"
          :buttons="viy2Table_3vbAhTViy2TableButtonColumn_xDRbkButtons"
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
