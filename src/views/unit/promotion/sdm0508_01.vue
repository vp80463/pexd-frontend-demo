<script setup>
import { IconCaretRight, IconCloseBold, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
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
  name: 'sdm0508_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_ab3W9O = ref();
const viy2Button_wCr5g = ref();
const queryForm = ref();
const viy2Row_hpInK = ref();
const viy2ValueList_2G3gzA = ref();
const viy2Row_2G3gzC = ref();
const viy2Button_2G3gzE = ref();
const viy2ValueList_2G3gzG = ref();
const viy2Row_2G3gzI = ref();
const viy2Button_rgx9LA = ref();
const viy2InputBox_rgx9LC = ref();
const viy2InputBox_rgx9LF = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_tSDiP = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_x47ZF = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointvl: '', promotion: '', frameNo: '', currentPIC: '',
});
const rules = reactive({
  viy2ValueList_2G3gzARules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2ValueList_2G3gzGRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_rgx9LCRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_2G3gzAPopoverQueryMethod = point_query_method;
const viy2ValueList_2G3gzAPopupColumns = ref(point_column);
const viy2ValueList_2G3gzAPopupQueryMethod = point_pop_query_method;
const viy2ValueList_2G3gzGPopoverQueryMethod = promotion_query_method;
const viy2ValueList_2G3gzGPopupColumns = ref(promotion_column);
const viy2ValueList_2G3gzGPopupQueryMethod = promotion_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      promotionCode: 'P20230008',
      orderNo: 'SO2403A000019',
      orderDate: new Date(),
      frameNo: 'RLCUT1326NY133007',
      customerName: 'zheng zhen',
      invoiceNo: '',
      deliveryNo: 'E42VU-102607',
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
const viy2Button_ab3W9OClick = () => {
  debugger;
};
const viy2Button_wCr5gClick = () => {
  debugger;
};
const viy2ValueList_2G3gzASelect = (params) => {
  queryFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_2G3gzAPopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_2G3gzAPopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2ValueList_2G3gzGSelect = (params) => {
  queryFormData.promotion = `${params.code} ${params.name}`;
};
const viy2ValueList_2G3gzGPopoverColumns = computed(() => {
  return promotion_column;
});
const viy2ValueList_2G3gzGPopupConditions = computed(() => {
  return promotion_pop_condition;
});
const gridCopy0_viy2TableTemplateColumn_ocCGPEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridPromotionCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderDateEditRender = computed(() => {
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
const gridFrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCustomerNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDeliveryNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
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
        <VueButton id="viy2Button_ab3W9O" ref="viy2Button_ab3W9O" icon-position="left" @click="viy2Button_ab3W9OClick">
          Retrieve
        </VueButton>
        <VueButton id="viy2Button_wCr5g" ref="viy2Button_wCr5g" icon-position="left" type="info" @click="viy2Button_wCr5gClick">
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
        id="viy2Row_hpInK"
        ref="viy2Row_hpInK"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Point"
            prop="pointvl"
            :rules="rules.viy2ValueList_2G3gzARules"
          >
            <VueValueList
              id="viy2ValueList_2G3gzA"
              ref="viy2ValueList_2G3gzA"
              :style="{ width: '230px' }"
              v-model="queryFormData.pointvl"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              :popover-columns="viy2ValueList_2G3gzAPopoverColumns"
              :popover-query-method="viy2ValueList_2G3gzAPopoverQueryMethod"
              :popup-columns="viy2ValueList_2G3gzAPopupColumns"
              :popup-conditions="viy2ValueList_2G3gzAPopupConditions"
              :popup-query-method="viy2ValueList_2G3gzAPopupQueryMethod"
              @select="viy2ValueList_2G3gzASelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_2G3gzC"
                  ref="viy2Row_2G3gzC"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_2G3gzD" ref="viy2Text_2G3gzD" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_2G3gzE" ref="viy2Button_2G3gzE" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Promotion Code"
            label-width="130px"
            prop="promotion"
            :rules="rules.viy2ValueList_2G3gzGRules"
          >
            <VueValueList
              id="viy2ValueList_2G3gzG"
              ref="viy2ValueList_2G3gzG"
              v-model="queryFormData.promotion"
              :style="{ width: '200px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_2G3gzGPopoverColumns"
              :popover-query-method="viy2ValueList_2G3gzGPopoverQueryMethod"
              :popup-columns="viy2ValueList_2G3gzGPopupColumns"
              :popup-conditions="viy2ValueList_2G3gzGPopupConditions"
              :popup-query-method="viy2ValueList_2G3gzGPopupQueryMethod"
              @select="viy2ValueList_2G3gzGSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_2G3gzI"
                  ref="viy2Row_2G3gzI"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_2G3gzT" ref="viy2Text_2G3gzT" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_rgx9LA" ref="viy2Button_rgx9LA" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Frame No."
            label-width="90px"
            prop="frameNo"
            :rules="rules.viy2InputBox_rgx9LCRules"
          >
            <VueInput
              id="viy2InputBox_rgx9LC"
              ref="viy2InputBox_rgx9LC"
              v-model="queryFormData.frameNo"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Current PIC"
            prop="currentPIC"
          >
            <VueInput
              id="viy2InputBox_rgx9LF"
              ref="viy2InputBox_rgx9LF"
              v-model="queryFormData.currentPIC"
              :clearable="true"
              :readonly="true"
              class="no-border"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
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
        <VueTemplateColumn
          :edit-render="gridCopy0_viy2TableTemplateColumn_ocCGPEditRender"
          align="center"
          width="40px"
        >
          <template #default="scope">
            <VueButton id="viy2Button_x47ZF" ref="viy2Button_x47ZF" icon-position="left" type="text" class="icon-green-triangle" :icon="IconCaretRight" />
          </template>
        </VueTemplateColumn>
        <VueInputColumn
          :edit-render="gridPromotionCodeEditRender"
          field="promotionCode"
          show-overflow="tooltip"
          title="Promotion Code"
          width="125px"
        />
        <VueInputColumn
          :edit-render="gridOrderNoEditRender"
          field="orderNo"
          show-overflow="tooltip"
          title="Order No."
          width="130px"
        />
        <VueDateTimeColumn
          :edit-render="gridOrderDateEditRender"
          field="orderDate"
          align="center"
          title="Order Date"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridFrameNoEditRender"
          field="frameNo"
          show-overflow="tooltip"
          title="Frame No."
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridCustomerNameEditRender"
          field="customerName"
          show-overflow="tooltip"
          title="Customer Name"
          min-width="200px"
        />
        <VueInputColumn
          :edit-render="gridInvoiceNoEditRender"
          field="invoiceNo"
          show-overflow="tooltip"
          title="Invoice No."
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridDeliveryNoEditRender"
          field="deliveryNo"
          show-overflow="tooltip"
          title="Delivery No."
          width="130px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
