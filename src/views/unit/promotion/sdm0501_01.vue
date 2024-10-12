<script setup>
import { IconArrowLeftBold, IconCloseBold, IconDocumentCopy, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  model_column, model_pop_condition, model_pop_query_method, model_query_method,
  promotion_column, promotion_pop_condition, promotion_pop_query_method, promotion_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdm0501_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_6rlKUm = ref();
const viy2Button_6rOQzM = ref();
const queryForm = ref();
const viy2Row_3mqzSt = ref();
const viy2ValueList_2GKbpm = ref();
const viy2Row_2GKbpy = ref();
const viy2Button_2GKbpA = ref();
const viy2DateTimePicker_2GKbpC = ref();
const viy2DateTimePicker_2GKbpE = ref();
const viy2Button_2GKbpF = ref();
const viy2Button_qTrQ7k = ref();
const viy2InputBox_qTrQ7l = ref();
const viy2ValueList_qTrQ7o = ref();
const viy2Row_qTrQ92 = ref();
const viy2Button_qTrQ94 = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const viy2Button_e0SWy = ref();
const viy2Button_ebiqe = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2CheckBox_1uXlP = ref();
const viy2CheckBox_1vZ1h = ref();
const viy2CheckBox_1xfc3 = ref();
const viy2CheckBox_2GPwGk = ref();
const viy2CheckBox_1xUpz = ref();
const viy2CheckBox_1y97c = ref();
const formData = reactive({
});
const queryFormData = reactive({
  promotion: '', dateFrom: '', dateTo: '', giftName: '', model: '',
});
const rules = reactive({
  viy2DateTimePicker_2GKbpCRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_2GKbpERules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_2GKbpmPopoverQueryMethod = promotion_query_method;
const viy2ValueList_2GKbpmPopupColumns = ref(promotion_column);
const viy2ValueList_2GKbpmPopupQueryMethod = promotion_pop_query_method;
const viy2ValueList_qTrQ7oPopoverQueryMethod = model_query_method;
const viy2ValueList_qTrQ7oPopupColumns = ref(model_column);
const viy2ValueList_qTrQ7oPopupQueryMethod = model_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const viy2CheckBox_1uXlPOpts = [
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
const viy2CheckBox_1vZ1hOpts = [
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
const viy2CheckBox_1xfc3Opts = [
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
const viy2CheckBox_2GPwGkOpts = [
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
const viy2CheckBox_1xUpzOpts = [
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
const viy2CheckBox_1y97cOpts = [
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
const gridViy2TableButtonColumn_odGQQButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocumentCopy,
      title: 'Detail',
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      promotionCd: 'P20230008',
      promotionNm: 'TEST',
      giftNm: 'SO2401A000054',
      modelCd: '1FCR00010D',
      modelNm: 'Lexam 15C1',
      fromDate: '20240401',
      toDate: '20240401',
      flag1: 'Y',
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
const viy2ValueList_2GKbpmSelect = (params) => {
  orderFormData.promotion = `${params.code} ${params.name}`;
};
const viy2ValueList_2GKbpmPopoverColumns = computed(() => {
  return promotion_column;
});
const viy2ValueList_2GKbpmPopupConditions = computed(() => {
  return promotion_pop_condition;
});
const viy2Button_2GKbpFClick = () => {
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
const viy2Button_qTrQ7kClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_qTrQ7oSelect = (params) => {
  orderFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_qTrQ7oPopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_qTrQ7oPopupConditions = computed(() => {
  return model_pop_condition;
});
const gridPromotionCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPromotionNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridGiftNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridViy2TableTemplateColumn_1uMtREditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy4_viy2TableTemplateColumn_1uMtREditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy2_viy2TableTemplateColumn_1uMtREditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy0_copy2_viy2TableTemplateColumn_1uMtREditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy1_viy2TableTemplateColumn_1uMtREditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy0_viy2TableTemplateColumn_1uMtREditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridFromDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridToDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
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
        <VueButton id="viy2Button_6rlKUm" ref="viy2Button_6rlKUm" icon-position="left" :disabled="true">
          Export MC
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_6rOQzM" ref="viy2Button_6rOQzM" icon-position="left" type="info">
          Retrieve
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
          >
            <VueValueList
              id="viy2ValueList_2GKbpm"
              ref="viy2ValueList_2GKbpm"
              v-model="queryFormData.promotion"
              :style="{ width: '220px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_2GKbpmPopoverColumns"
              :popover-query-method="viy2ValueList_2GKbpmPopoverQueryMethod"
              :popup-columns="viy2ValueList_2GKbpmPopupColumns"
              :popup-conditions="viy2ValueList_2GKbpmPopupConditions"
              :popup-query-method="viy2ValueList_2GKbpmPopupQueryMethod"
              @select="viy2ValueList_2GKbpmSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_2GKbpy"
                  ref="viy2Row_2GKbpy"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_2GKbpz" ref="viy2Text_2GKbpz" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_2GKbpA" ref="viy2Button_2GKbpA" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Period"
            prop="dateFrom"
            :rules="rules.viy2DateTimePicker_2GKbpCRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_2GKbpC"
              ref="viy2DateTimePicker_2GKbpC"
              v-model="queryFormData.dateFrom"
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
            label-width="0px"
            prop="dateTo"
            :rules="rules.viy2DateTimePicker_2GKbpERules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_2GKbpE"
              ref="viy2DateTimePicker_2GKbpE"
              v-model="queryFormData.dateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_2GKbpF" ref="viy2Button_2GKbpF" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_2GKbpFClick" />
          <VueButton id="viy2Button_qTrQ7k" ref="viy2Button_qTrQ7k" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_qTrQ7kClick" />
          <VueFormItem
            label="Gift Name"
            prop="giftName"
          >
            <VueInput
              id="viy2InputBox_qTrQ7l"
              ref="viy2InputBox_qTrQ7l"
              v-model="queryFormData.giftName"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Model"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_qTrQ7o"
              ref="viy2ValueList_qTrQ7o"
              v-model="queryFormData.model"
              :style="{ width: '250px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_qTrQ7oPopoverColumns"
              :popover-query-method="viy2ValueList_qTrQ7oPopoverQueryMethod"
              :popup-columns="viy2ValueList_qTrQ7oPopupColumns"
              :popup-conditions="viy2ValueList_qTrQ7oPopupConditions"
              :popup-query-method="viy2ValueList_qTrQ7oPopupQueryMethod"
              @select="viy2ValueList_qTrQ7oSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_qTrQ92"
                  ref="viy2Row_qTrQ92"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_qTrQ93" ref="viy2Text_qTrQ93" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_qTrQ94" ref="viy2Button_qTrQ94" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            v-show="detailPanelModel"
            id="viy2Row_wZvy4"
            ref="viy2Row_wZvy4"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_e0SWy" ref="viy2Button_e0SWy" icon-position="left">
                Detail Promo MC
              </VueButton>
              <VueButton id="viy2Button_ebiqe" ref="viy2Button_ebiqe" icon-position="left" class="icon-button-width">
                +
              </VueButton>
            </VueCol>
          </VueRow>
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
          fixed="left"
          width="50px"
          min-width="50px"
        />
        <VueInputColumn
          :edit-render="gridPromotionCdEditRender"
          field="promotionCd"
          show-overflow="tooltip"
          title="Promotion Code"
          width="95px"
        />
        <VueInputColumn
          :edit-render="gridPromotionNmEditRender"
          field="promotionNm"
          show-overflow="tooltip"
          title="Promotion Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridGiftNmEditRender"
          field="giftNm"
          show-overflow="tooltip"
          title="Gift Name"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridModelCdEditRender"
          field="modelCd"
          show-overflow="tooltip"
          title="Model Code"
          width="110px"
        />
        <VueInputColumn
          :edit-render="gridModelNmEditRender"
          field="modelNm"
          show-overflow="tooltip"
          title="Model Name"
          min-width="130px"
        />
        <VueTemplateColumn
          :edit-render="gridViy2TableTemplateColumn_1uMtREditRender"
          align="center"
          prop="invoice"
          title="Invoice"
          width="80px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_1uXlP"
              ref="viy2CheckBox_1uXlP"
              v-model="scope.row.flag1"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy4_viy2TableTemplateColumn_1uMtREditRender"
          align="center"
          prop="registrationCard"
          title="Registration Card"
          width="100px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_1vZ1h"
              ref="viy2CheckBox_1vZ1h"
              v-model="scope.row.flag2"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy2_viy2TableTemplateColumn_1uMtREditRender"
          align="center"
          prop="gift"
          title="Gift Receipt"
          width="95px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_1xfc3"
              ref="viy2CheckBox_1xfc3"
              v-model="scope.row.flag4"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy0_copy2_viy2TableTemplateColumn_1uMtREditRender"
          align="center"
          prop="luckyDrawVoucher"
          title="Lucky Draw Voucher"
          width="95px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_2GPwGk"
              ref="viy2CheckBox_2GPwGk"
              v-model="scope.row.flag4"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy1_viy2TableTemplateColumn_1uMtREditRender"
          align="center"
          prop="idCard"
          title="ID Card"
          width="90px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_1xUpz"
              ref="viy2CheckBox_1xUpz"
              v-model="scope.row.flag5"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy0_viy2TableTemplateColumn_1uMtREditRender"
          align="center"
          prop="others"
          title="Others"
          width="90px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_1y97c"
              ref="viy2CheckBox_1y97c"
              v-model="scope.row.flag6"
            />
          </template>
        </VueTemplateColumn>
        <VueDateTimeColumn
          :edit-render="gridFromDateEditRender"
          field="fromDate"
          align="center"
          title="From Date "
          width="100px"
        />
        <VueDateTimeColumn
          :edit-render="gridToDateEditRender"
          field="toDate"
          align="center"
          title="To Date"
          width="100px"
        />
        <VueButtonColumn
          fixed="right"
          align="center"
          width="40px"
          :buttons="gridViy2TableButtonColumn_odGQQButtons"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
