<script setup>
import { IconArrowLeftBold, IconCloseBold, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import {
  dealer_column, dealer_pop_condition, dealer_pop_query_method, dealer_query_method,
  model_column, model_pop_condition, model_pop_query_method, model_query_method,
  promotion_column, promotion_pop_condition, promotion_pop_query_method, promotion_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdm0507_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_fXTyu = ref();
const viy2Button_fRK8g = ref();
const queryForm = ref();
const viy2Row_3mqzSt = ref();
const viy2ValueList_84X5Le = ref();
const viy2Row_86rLqd = ref();
const viy2Button_86rLqf = ref();
const viy2DateTimePicker_1Dh8P = ref();
const viy2DateTimePicker_gn1aA = ref();
const viy2Button_1Eked = ref();
const viy2Button_gvktW = ref();
const viy2ValueList_80zpZw = ref();
const viy2Row_86t8kG = ref();
const viy2Button_86t8kL = ref();
const viy2ValueList_12gOt12 = ref();
const viy2Row_86tPn7 = ref();
const viy2Button_86tPng = ref();
const viy2InputBox_hTD6E = ref();
const viy2Panel_amUXt6 = ref();
const viy2Row_amUXu6 = ref();
const viy2Table_amUXxe = ref();
const viy2Row_amUXy4 = ref();
const viy2CheckBox_1OXKm = ref();
const formData = reactive({
});
const queryFormData = reactive({
  promotion: '', dateFrom: '', dateTo: '', dealer: '', model: '', frameNo: '',
});
const rules = reactive({
  viy2ValueList_84X5LeRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_84X5LePopoverQueryMethod = promotion_query_method;
const viy2ValueList_84X5LePopupColumns = ref(promotion_column);
const viy2ValueList_84X5LePopupQueryMethod = promotion_pop_query_method;
const viy2ValueList_80zpZwPopoverQueryMethod = dealer_query_method;
const viy2ValueList_80zpZwPopupColumns = ref(dealer_column);
const viy2ValueList_80zpZwPopupQueryMethod = dealer_pop_query_method;
const viy2ValueList_12gOt12PopoverQueryMethod = model_query_method;
const viy2ValueList_12gOt12PopupColumns = ref(model_column);
const viy2ValueList_12gOt12PopupQueryMethod = model_pop_query_method;
const viy2Table_amUXxeEditConfig = reactive({
  trigger: 'click',
});
const viy2CheckBox_1OXKmOpts = [
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
];
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      promotionCd: 'P20210031',
      promotionNm: 'XE ĐẸP QUÀ SANG - RỘN RÀNG ĐÓN TẾT',
      frameNo: 'RLCSEF910LY019127',
      dealerCd: '2179',
      dealerNm: 'Toan Sen',
      modelCd: 'BJ7H00010B',
      modelNm: 'JANUS BJ71 STD',
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
const viy2ValueList_84X5LeSelect = (params) => {
  queryFormData.promotion = `${params.code} ${params.name}`;
};
const viy2ValueList_84X5LePopoverColumns = computed(() => {
  return promotion_column;
});
const viy2ValueList_84X5LePopupConditions = computed(() => {
  return promotion_pop_condition;
});
const viy2Button_1EkedClick = () => {
  const current = queryForm.dateFrom ? queryForm.dateFrom : currentDate;
  // 获取上个月的年份和月份
  let lastMonthYear = current.getFullYear();
  let lastMonth = current.getMonth() - 1;
  if (lastMonth < 0) {
    lastMonth = 11; // 如果是1月，则上个月是12月
    lastMonthYear--; // 年份减一
  }
  queryForm.dateFrom = new Date(lastMonthYear, lastMonth, 1);
  queryForm.dateTo = new Date(lastMonthYear, lastMonth + 1, 0);
};
const viy2Button_gvktWClick = () => {
  queryForm.dateFrom = firstDay;
  queryForm.dateTo = lastDay;
};
const viy2ValueList_80zpZwSelect = (params) => {
  queryFormData.dealer = `${params.code} ${params.name}`;
};
const viy2ValueList_80zpZwPopoverColumns = computed(() => {
  return dealer_column;
});
const viy2ValueList_80zpZwPopupConditions = computed(() => {
  return dealer_pop_condition;
});
const viy2ValueList_12gOt12Select = (params) => {
  queryFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt12PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_12gOt12PopupConditions = computed(() => {
  return model_pop_condition;
});
const viy2Table_amUXxePromotionCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxePromotionNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeFrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeDealerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeDealerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeViy2TableTemplateColumn_1OU8FEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_fXTyu" ref="viy2Button_fXTyu" icon-position="left">
          Retrieve
        </VueButton>
        <VueButton id="viy2Button_fRK8g" ref="viy2Button_fRK8g" icon-position="left" type="info">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      class="margin-top-div0 except-height-css"
      :model="queryFormData"
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
            label="Promotion"
            prop="promotion"
            :rules="rules.viy2ValueList_84X5LeRules"
          >
            <VueValueList
              id="viy2ValueList_84X5Le"
              ref="viy2ValueList_84X5Le"
              v-model="queryFormData.promotion"
              :style="{ width: '200px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_84X5LePopoverColumns"
              :popover-query-method="viy2ValueList_84X5LePopoverQueryMethod"
              :popup-columns="viy2ValueList_84X5LePopupColumns"
              :popup-conditions="viy2ValueList_84X5LePopupConditions"
              :popup-query-method="viy2ValueList_84X5LePopupQueryMethod"
              @select="viy2ValueList_84X5LeSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_86rLqd"
                  ref="viy2Row_86rLqd"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_86rLqe" ref="viy2Text_86rLqe" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Promotion
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 14 }"
                  >
                    <VueButton id="viy2Button_86rLqf" ref="viy2Button_86rLqf" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Period"
            prop="dateFrom"
          >
            <VueDatePicker
              id="viy2DateTimePicker_1Dh8P"
              ref="viy2DateTimePicker_1Dh8P"
              v-model="queryFormData.dateFrom"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
            />
          </VueFormItem>
          <!-- BEGIN CUSTOM DIV CODE -->
          <span>-</span>
          <!-- END CUSTOM DIV CODE -->
          <VueFormItem
            label-width="0px"
            prop="dateTo"
          >
            <VueDatePicker
              id="viy2DateTimePicker_gn1aA"
              ref="viy2DateTimePicker_gn1aA"
              v-model="queryFormData.dateTo"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_1Eked" ref="viy2Button_1Eked" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1EkedClick" />
          <VueButton id="viy2Button_gvktW" ref="viy2Button_gvktW" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_gvktWClick" />
          <VueFormItem
            label="Dealer"
            prop="dealer"
          >
            <VueValueList
              id="viy2ValueList_80zpZw"
              ref="viy2ValueList_80zpZw"
              :style="{ width: '200px' }"
              v-model="queryFormData.dealer"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              :popover-columns="viy2ValueList_80zpZwPopoverColumns"
              :popover-query-method="viy2ValueList_80zpZwPopoverQueryMethod"
              :popup-columns="viy2ValueList_80zpZwPopupColumns"
              :popup-conditions="viy2ValueList_80zpZwPopupConditions"
              :popup-query-method="viy2ValueList_80zpZwPopupQueryMethod"
              @select="viy2ValueList_80zpZwSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_86t8kG"
                  ref="viy2Row_86t8kG"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_86t8kK" ref="viy2Text_86t8kK" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Dealer
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 17 }"
                  >
                    <VueButton id="viy2Button_86t8kL" ref="viy2Button_86t8kL" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Model Code"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_12gOt12"
              ref="viy2ValueList_12gOt12"
              v-model="queryFormData.model"
              :style="{ width: '200px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_12gOt12PopoverColumns"
              :popover-query-method="viy2ValueList_12gOt12PopoverQueryMethod"
              :popup-columns="viy2ValueList_12gOt12PopupColumns"
              :popup-conditions="viy2ValueList_12gOt12PopupConditions"
              :popup-query-method="viy2ValueList_12gOt12PopupQueryMethod"
              @select="viy2ValueList_12gOt12Select"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_86tPn7"
                  ref="viy2Row_86tPn7"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_86tPni" ref="viy2Text_86tPni" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Model
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 17 }"
                  >
                    <VueButton id="viy2Button_86tPng" ref="viy2Button_86tPng" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Frame No"
            prop="frameNo"
          >
            <VueInput
              id="viy2InputBox_hTD6E"
              ref="viy2InputBox_hTD6E"
              v-model="queryFormData.frameNo"
              :readonly="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_amUXt6" ref="viy2Panel_amUXt6" v-model="ModelDetailPanelModel" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            v-show="detailPanelModel"
            id="viy2Row_amUXu6"
            ref="viy2Row_amUXu6"
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
      <VueTable id="viy2Table_amUXxe" ref="viy2Table_amUXxe" :height="gridHeight" :data="gridDs" :edit-config="viy2Table_amUXxeEditConfig">
        <VueRow
          id="viy2Row_amUXy4"
          ref="viy2Row_amUXy4"
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
          :edit-render="viy2Table_amUXxePromotionCdEditRender"
          field="promotionCd"
          show-overflow="tooltip"
          title="Promotion Code"
          width="90px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxePromotionNmEditRender"
          field="promotionNm"
          show-overflow="tooltip"
          title="Promotion Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeFrameNoEditRender"
          field="frameNo"
          show-overflow="tooltip"
          title="Frame No."
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeDealerCdEditRender"
          field="dealerCd"
          show-overflow="tooltip"
          title="Dealer Code"
          width="110px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeDealerNmEditRender"
          field="dealerNm"
          show-overflow="tooltip"
          title="Dealer Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeModelCdEditRender"
          field="modelCd"
          show-overflow="tooltip"
          title="Model Code"
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeModelNmEditRender"
          field="modelNm"
          show-overflow="tooltip"
          title="Model Name"
          min-width="130px"
        />
        <VueTemplateColumn
          :edit-render="viy2Table_amUXxeViy2TableTemplateColumn_1OU8FEditRender"
          align="center"
          fixed="right"
          title="Can Enjoy Promotion"
          width="150px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_1OXKm"
              ref="viy2CheckBox_1OXKm"
              v-model="scope.row.flag1"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
