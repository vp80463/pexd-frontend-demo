<script setup>
import { IconArrowLeftBold, IconCloseBold, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
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
  name: 'sdm0506_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_ab3PDC = ref();
const queryForm = ref();
const viy2Row_6IAt6a = ref();
const viy2ValueList_2INoky = ref();
const viy2Row_2INokA = ref();
const viy2Button_2INokM = ref();
const viy2DateTimePicker_2INokO = ref();
const viy2DateTimePicker_2INokQ = ref();
const viy2Button_2INokR = ref();
const viy2Button_rdXVlg = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_tSDiP = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  promotion: '', dateFrom: '', dateTo: '',
});
const rules = reactive({
  viy2DateTimePicker_2INokQRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_2INokyPopoverQueryMethod = promotion_query_method;
const viy2ValueList_2INokyPopupColumns = ref(promotion_column);
const viy2ValueList_2INokyPopupQueryMethod = promotion_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      promotionCode: 'P20230008',
      promotionName: 'TEST',
      effectiveDate: '20240401',
      expiredDate: '20240402',
      uploadEndDate: '20240403',
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
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2Button_ab3PDCClick = () => {
  debugger;
};
const viy2ValueList_2INokySelect = (params) => {
  queryFormData.promotion = `${params.code} ${params.name}`;
};
const viy2ValueList_2INokyPopoverColumns = computed(() => {
  return promotion_column;
});
const viy2ValueList_2INokyPopupConditions = computed(() => {
  return promotion_pop_condition;
});
const viy2Button_2INokRClick = () => {
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
const viy2Button_rdXVlgClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = new Date();
};
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
const gridEffectiveDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridExpiredDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridUploadEndDateEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = new Date();
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
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" @click="viy2Button_5FbWKcClick">
          Retrieve
        </VueButton>
        <VueButton id="viy2Button_ab3PDC" ref="viy2Button_ab3PDC" icon-position="left" type="info" @click="viy2Button_ab3PDCClick">
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
              id="viy2ValueList_2INoky"
              ref="viy2ValueList_2INoky"
              v-model="queryFormData.promotion"
              :style="{ width: '250px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_2INokyPopoverColumns"
              :popover-query-method="viy2ValueList_2INokyPopoverQueryMethod"
              :popup-columns="viy2ValueList_2INokyPopupColumns"
              :popup-conditions="viy2ValueList_2INokyPopupConditions"
              :popup-query-method="viy2ValueList_2INokyPopupQueryMethod"
              @select="viy2ValueList_2INokySelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_2INokA"
                  ref="viy2Row_2INokA"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_2INokL" ref="viy2Text_2INokL" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_2INokM" ref="viy2Button_2INokM" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
              id="viy2DateTimePicker_2INokO"
              ref="viy2DateTimePicker_2INokO"
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
            :rules="rules.viy2DateTimePicker_2INokQRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_2INokQ"
              ref="viy2DateTimePicker_2INokQ"
              v-model="queryFormData.dateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_2INokR" ref="viy2Button_2INokR" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_2INokRClick" />
          <VueButton id="viy2Button_rdXVlg" ref="viy2Button_rdXVlg" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_rdXVlgClick" />
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
          :resizable="true"
          :sortable="true"
          title="Promotion Code"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridPromotionNameEditRender"
          field="promotionName"
          show-overflow="tooltip"
          :resizable="true"
          :sortable="true"
          title="Promotion Name"
          width="500px"
        />
        <VueDateTimeColumn
          :edit-render="gridEffectiveDateEditRender"
          field="effectiveDate"
          align="center"
          title="Effective Date"
          width="120px"
        />
        <VueDateTimeColumn
          :edit-render="gridExpiredDateEditRender"
          field="expiredDate"
          align="center"
          title="Expired Date"
          width="120px"
        />
        <VueDateTimeColumn
          :edit-render="gridUploadEndDateEditRender"
          field="uploadEndDate"
          align="center"
          title="Upload End Date"
          width="150px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
