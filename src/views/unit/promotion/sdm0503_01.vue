<script setup>
import { IconArrowDownBold, IconArrowLeftBold, IconCloseBold, IconDocumentCopy, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import {
  model_column, model_pop_condition, model_pop_query_method, model_query_method,
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
  promotion_column, promotion_pop_condition, promotion_pop_query_method, promotion_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const currentDate = new Date();
// 获取当前月份的第一天
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDay = new Date(nextMonth - 1);
defineOptions({
  name: 'sdm0503_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_ab3PDC = ref();
const viy2Button_5FbWKc = ref();
const queryForm = ref();
const viy2Row_6IAt6a = ref();
const viy2ValueList_2HHaGe = ref();
const viy2Row_2HHaGq = ref();
const viy2Button_2HHaGs = ref();
const viy2DateTimePicker_2HHaGE = ref();
const viy2DateTimePicker_2HHaGG = ref();
const viy2Button_2HHaGH = ref();
const viy2Button_r2XGlE = ref();
const viy2DateTimePicker_r2XGlF = ref();
const viy2DateTimePicker_r2XGng = ref();
const viy2Button_r2XGnk = ref();
const viy2Button_r2XGnl = ref();
const viy2CheckBox_r2XGqG = ref();
const viy2ValueList_r2XGnm = ref();
const viy2Row_r2XGno = ref();
const viy2Button_r2XGp2 = ref();
const filterBtn = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_tSDiP = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2CheckBox_6ocBM5 = ref();
const viy2CheckBox_oauai = ref();
const viy2CheckBox_oasI8 = ref();
const viy2CheckBox_oarx4 = ref();
const viy2CheckBox_oapui = ref();
const viy2CheckBox_oaoge = ref();
const filterpopover = ref();
const filterForm = ref();
const viy2Row_qfI40 = ref();
const viy2InputBox_gOn0I = ref();
const viy2InputBox_gOowg = ref();
const viy2InputBox_ab8Q86 = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_85OLpV = ref();
const viy2Button_85OLq7 = ref();
const viy2Select_ablnwE = ref();
const customerInput = ref();
const viy2Button_4ex9aG = ref();
const formData = reactive({
});
const queryFormData = reactive({
  promotion: '', periodDateFrom: '', periodDateTo: '', dateFrom: '', dateTo: '', salesMethod: ['Sales to customer', 'Fast shipping report'], model: '',
});
const filterFormData = reactive({
  invoiceNo: '', duNo: '', frameNo: '', pointvl: '', status: 'toàn bộ', consumer: '',
});
const rules = reactive({
  viy2DateTimePicker_2HHaGERules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_2HHaGGRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_r2XGngRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2CheckBox_r2XGqGRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2Select_ablnwEOpts = reactive([
  {
    label:
'toàn bộ',
    value:
'toàn bộ',
  },
  {
    label:
'Hồ sơ đạt',
    value:
'Hồ sơ đạt',
  },
  {
    label:
'Hồ sơ lỗi',
    value:
'Hồ sơ lỗi',
  },
  {
    label:
'Chờ đại lý tải chứng từ',
    value:
'Chờ đại lý tải chứng từ',
  },
  {
    label:
'Chờ YAMAHA kiểm tra hồ sơ',
    value:
'Chờ YAMAHA kiểm tra hồ sơ',
  },
]);
const viy2ValueList_2HHaGePopoverQueryMethod = promotion_query_method;
const viy2ValueList_2HHaGePopupColumns = ref(promotion_column);
const viy2ValueList_2HHaGePopupQueryMethod = promotion_pop_query_method;
const viy2CheckBox_r2XGqGOpts = [
  {
    label:
'Sales to customer',
    value:
'Sales to customer',
  },
  {
    label:
'Fast shipping report',
    value:
'Fast shipping report',
  },
];
const viy2ValueList_r2XGnmPopoverQueryMethod = model_query_method;
const viy2ValueList_r2XGnmPopupColumns = ref(model_column);
const viy2ValueList_r2XGnmPopupQueryMethod = model_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const viy2CheckBox_6ocBM5Opts = [
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
const viy2CheckBox_oauaiOpts = [
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
const viy2CheckBox_oasI8Opts = [
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
const viy2CheckBox_oarx4Opts = [
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
const viy2CheckBox_oapuiOpts = [
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
const viy2CheckBox_oaogeOpts = [
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
      promotionCode: 'P20230008',
      promotionName: 'TEST',
      customer: 'zheng zhen',
      frameNo: 'RLCUT3526NY166012',
      modelCode: '1FCR00010D',
      modelName: 'SIRIUS FI 1FC8',
      invoiceNo: '',
      orderNo: 'SO2403A000019',
      duNo: 'DO2403A000011',
      invoiceSign: 'Y',
      giftReceiptSign: 'N',
      idCardSign: 'N',
      registrationCardSign: 'N',
      luckyDrawSign: 'N',
      othersSign: 'N',
      judgement: 'Chờ đại lý tải chứng từ',
      rejectReason: '',
    },
  ],
});
const gridDs = gridDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm('Are you sure to reset this page?')
    .then(() => {
      const filterFormElement = orderForm.value;
      if (filterFormElement && filterFormElement.resetFields) {
        filterFormElement.resetFields();
      }
    }).catch(() => {
    });
};
const viy2Button_ab3PDCClick = () => {
  debugger;
};
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2ValueList_2HHaGeSelect = (params) => {
  queryFormData.promotion = `${params.code} ${params.name}`;
};
const viy2ValueList_2HHaGePopoverColumns = computed(() => {
  return promotion_column;
});
const viy2ValueList_2HHaGePopupConditions = computed(() => {
  return promotion_pop_condition;
});
const viy2Button_2HHaGHClick = () => {
  const current = queryFormData.periodDateFrom ? queryFormData.periodDateFrom : currentDate;
  // 获取上个月的年份和月份
  let lastMonthYear = current.getFullYear();
  let lastMonth = current.getMonth() - 1;
  if (lastMonth < 0) {
    lastMonth = 11; // 如果是1月，则上个月是12月
    lastMonthYear--; // 年份减一
  }
  queryFormData.periodDateFrom = new Date(lastMonthYear, lastMonth, 1);
  queryFormData.periodDateTo = new Date(lastMonthYear, lastMonth + 1, 0);
};
const viy2Button_r2XGlEClick = () => {
  queryFormData.periodDateFrom = firstDay;
  queryFormData.periodDateTo = lastDay;
};
const viy2Button_r2XGnkClick = () => {
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
const viy2Button_r2XGnlClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_r2XGnmSelect = (params) => {
  queryFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_r2XGnmPopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_r2XGnmPopupConditions = computed(() => {
  return model_pop_condition;
});
const gridPromotionCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPromotionNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCustomerEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDuNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCopy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy4_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy3_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy2_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy1_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy0_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridJudgementEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRejectReasonEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2ValueList_12gOt1Select = (params) => {
  filterFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2Button_4ex9aGClick = () => {
  const filterFormElement = filterForm.value;
  if (filterFormElement && filterFormElement.resetFields) {
    filterFormElement.resetFields();
  }
};
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.periodDateFrom = firstDay;
  queryFormData.periodDateTo = lastDay;
});
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
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          Reset
        </VueButton>
        <VueButton id="viy2Button_ab3PDC" ref="viy2Button_ab3PDC" icon-position="left" :disabled="true" @click="viy2Button_ab3PDCClick">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
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
        id="viy2Row_6IAt6a"
        ref="viy2Row_6IAt6a"
        :gutter="15"
      >
        <VueCol
          item-key="item"
          align="left"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Promotion"
            prop="promotion"
          >
            <VueValueList
              id="viy2ValueList_2HHaGe"
              ref="viy2ValueList_2HHaGe"
              v-model="queryFormData.promotion"
              :style="{ width: '200px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_2HHaGePopoverColumns"
              :popover-query-method="viy2ValueList_2HHaGePopoverQueryMethod"
              :popup-columns="viy2ValueList_2HHaGePopupColumns"
              :popup-conditions="viy2ValueList_2HHaGePopupConditions"
              :popup-query-method="viy2ValueList_2HHaGePopupQueryMethod"
              @select="viy2ValueList_2HHaGeSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_2HHaGq"
                  ref="viy2Row_2HHaGq"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_2HHaGr" ref="viy2Text_2HHaGr" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_2HHaGs" ref="viy2Button_2HHaGs" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Period"
            prop="periodDateFrom"
            :rules="rules.viy2DateTimePicker_2HHaGERules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_2HHaGE"
              ref="viy2DateTimePicker_2HHaGE"
              v-model="queryFormData.periodDateFrom"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <!-- BEGIN CUSTOM DIV CODE -->
          <span>-</span>
          <!-- END CUSTOM DIV CODE -->
          <VueFormItem
            label-width="0"
            prop="periodDateTo"
            :rules="rules.viy2DateTimePicker_2HHaGGRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_2HHaGG"
              ref="viy2DateTimePicker_2HHaGG"
              v-model="queryFormData.periodDateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_2HHaGH" ref="viy2Button_2HHaGH" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_2HHaGHClick" />
          <VueButton id="viy2Button_r2XGlE" ref="viy2Button_r2XGlE" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_r2XGlEClick" />
          <VueFormItem
            label="Sales/Shipment Date"
            label-width="145px"
            prop="dateFrom"
          >
            <VueDatePicker
              id="viy2DateTimePicker_r2XGlF"
              ref="viy2DateTimePicker_r2XGlF"
              v-model="queryFormData.dateFrom"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <!-- BEGIN CUSTOM DIV CODE -->
          <span>-</span>
          <!-- END CUSTOM DIV CODE -->
          <VueFormItem
            label-width="0"
            prop="dateTo"
            :rules="rules.viy2DateTimePicker_r2XGngRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_r2XGng"
              ref="viy2DateTimePicker_r2XGng"
              v-model="queryFormData.dateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_r2XGnk" ref="viy2Button_r2XGnk" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_r2XGnkClick" />
          <VueButton id="viy2Button_r2XGnl" ref="viy2Button_r2XGnl" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_r2XGnlClick" />
          <VueFormItem
            label="Sales Method"
            label-width="110px"
            prop="salesMethod"
            :rules="rules.viy2CheckBox_r2XGqGRules"
          >
            <VueCheckboxGroup
              id="viy2CheckBox_r2XGqG"
              ref="viy2CheckBox_r2XGqG"
              v-model="queryFormData.salesMethod"
            >
              <VueCheckbox
                v-for="option in viy2CheckBox_r2XGqGOpts"
                :key="option.value"
                :label="option.value"
                :name="option.name"
                :disabled="option.disabled"
              >
                {{ option.label }}
              </VueCheckbox>
            </VueCheckboxGroup>
          </VueFormItem>
          <VueFormItem
            label="Model"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_r2XGnm"
              ref="viy2ValueList_r2XGnm"
              v-model="queryFormData.model"
              :style="{ width: '200px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_r2XGnmPopoverColumns"
              :popover-query-method="viy2ValueList_r2XGnmPopoverQueryMethod"
              :popup-columns="viy2ValueList_r2XGnmPopupColumns"
              :popup-conditions="viy2ValueList_r2XGnmPopupConditions"
              :popup-query-method="viy2ValueList_r2XGnmPopupQueryMethod"
              @select="viy2ValueList_r2XGnmSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_r2XGno"
                  ref="viy2Row_r2XGno"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_r2XGp1" ref="viy2Text_r2XGp1" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_r2XGp2" ref="viy2Button_r2XGp2" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueButton id="filterBtn" ref="filterBtn" icon-position="left" class="icon-button-small" :icon="IconArrowDownBold">
            More...
          </VueButton>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            id="viy2Row_tSDiP"
            ref="viy2Row_tSDiP"
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
      <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig">
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
        />
        <VueInputColumn
          :edit-render="gridPromotionCodeEditRender"
          field="promotionCode"
          show-overflow="tooltip"
          title="Promotion Code"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridPromotionNameEditRender"
          field="promotionName"
          show-overflow="tooltip"
          title="Promotion Name"
          min-width="140px"
        />
        <VueInputColumn
          :edit-render="gridCustomerEditRender"
          field="customer"
          show-overflow="tooltip"
          title="Customer"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridFrameNoEditRender"
          field="frameNo"
          show-overflow="tooltip"
          title="Frame No."
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridModelCodeEditRender"
          field="modelCode"
          show-overflow="tooltip"
          title="Model Code"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridModelNameEditRender"
          field="modelName"
          show-overflow="tooltip"
          title="Model Name"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridInvoiceNoEditRender"
          field="invoiceNo"
          show-overflow="tooltip"
          title="Invoice No."
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridOrderNoEditRender"
          field="orderNo"
          show-overflow="tooltip"
          title="Order No."
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridDuNoEditRender"
          field="duNo"
          show-overflow="tooltip"
          title="DU No."
          width="150px"
        />
        <VueTemplateColumn
          :edit-render="gridCopy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          title="Invoice Upload Status"
          width="120px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_6ocBM5"
              ref="viy2CheckBox_6ocBM5"
              v-model="scope.row.invoiceSign"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy4_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          title="Gift Receipt Upload Status"
          width="120px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_oauai"
              ref="viy2CheckBox_oauai"
              v-model="scope.row.giftReceiptSign"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy3_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          title="ID Card Upload Status"
          width="120px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_oasI8"
              ref="viy2CheckBox_oasI8"
              v-model="scope.row.idCardSign"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy2_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          title="Registration Card Upload Status"
          width="120px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_oarx4"
              ref="viy2CheckBox_oarx4"
              v-model="scope.row.registrationCardSign"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy1_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          title="Lucky Draw Voucher Upload Status"
          width="130px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_oapui"
              ref="viy2CheckBox_oapui"
              v-model="scope.row.luckyDrawSign"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy0_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          title="Others Upload Status"
          width="120px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_oaoge"
              ref="viy2CheckBox_oaoge"
              v-model="scope.row.otherSign"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueInputColumn
          :edit-render="gridJudgementEditRender"
          field="judgement"
          show-overflow="tooltip"
          title="Judgement"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridRejectReasonEditRender"
          field="rejectReason"
          show-overflow="tooltip"
          title="Reject Reason"
          width="150px"
        />
        <VueButtonColumn
          fixed="right"
          width="40px"
          :buttons="gridViy2TableButtonColumn_odGQQButtons"
        />
      </VueTable>
    </VuePanel>
    <VuePopover
      id="filterpopover"
      ref="filterpopover"
      title="Filter Condition"
      trigger="click"
      width="700px"
      popper-class="screen-popover"
      :virtual-ref="filterBtn"
    >
      <VueForm
        id="filterForm"
        ref="filterForm"
        label-width="130px"
        :model="filterFormData"
      >
        <VueRow
          id="viy2Row_qfI40"
          ref="viy2Row_qfI40"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Invoice No."
              prop="invoiceNo"
            >
              <VueInput
                id="viy2InputBox_gOn0I"
                ref="viy2InputBox_gOn0I"
                v-model="filterFormData.invoiceNo"
                :clearable="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="DU No."
              prop="duNo"
            >
              <VueInput
                id="viy2InputBox_gOowg"
                ref="viy2InputBox_gOowg"
                v-model="filterFormData.duNo"
                :clearable="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Frame No."
              prop="frameNo"
            >
              <VueInput
                id="viy2InputBox_ab8Q86"
                ref="viy2InputBox_ab8Q86"
                v-model="filterFormData.frameNo"
                :clearable="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Point"
              prop="pointvl"
            >
              <VueValueList
                id="viy2ValueList_12gOt1"
                ref="viy2ValueList_12gOt1"
                :style="{ width: '250px' }"
                v-model="filterFormData.pointvl"
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
                    id="viy2Row_85OLpV"
                    ref="viy2Row_85OLpV"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_85OLq6" ref="viy2Text_85OLq6" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_85OLq7" ref="viy2Button_85OLq7" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Status"
              prop="status"
            >
              <VueSelect
                id="viy2Select_ablnwE"
                ref="viy2Select_ablnwE"
                v-model="filterFormData.status"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :filterable="true"
                :clearable="true"
                :collapse-tags-tooltip="true"
                :options="viy2Select_ablnwEOpts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Customer"
              prop="consumer"
            >
              <VueInput
                id="customerInput"
                ref="customerInput"
                v-model="filterFormData.consumer"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :md="{ span: 12 }"
          />
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueButton id="viy2Button_4ex9aG" ref="viy2Button_4ex9aG" icon-position="left" type="warning" @click="viy2Button_4ex9aGClick">
              Reset
            </VueButton>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePopover>
  </VueForm>
</template>
