<script setup>
import { IconCloseBold, IconDocumentCopy, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import {
  dealer_column, dealer_pop_condition, dealer_pop_query_method, dealer_query_method,
  model_column, model_pop_condition, model_pop_query_method, model_query_method,
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
  name: 'sdm0504_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_ab3PDC = ref();
const viy2Button_rW1Re = ref();
const viy2Button_rWmT6 = ref();
const viy2Button_rWi8U = ref();
const viy2Button_rWgWI = ref();
const viy2Button_rWg7K = ref();
const viy2Button_5FbWKc = ref();
const queryForm = ref();
const viy2Row_6IAt6a = ref();
const viy2ValueList_2Ib3Oc = ref();
const viy2Row_2Ib3Oo = ref();
const viy2Button_2Ib3Oq = ref();
const viy2Select_2Ib3OC = ref();
const viy2ValueList_r7MCaY = ref();
const viy2Row_r7MCcC = ref();
const viy2Button_r7MCcE = ref();
const viy2ValueList_r7MCei = ref();
const viy2Row_r7MCek = ref();
const viy2Button_r7MCfY = ref();
const viy2InputBox_r7MCg0 = ref();
const viy2Select_r7MChF = ref();
const viy2InputBox_r7MCgn = ref();
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
const formData = reactive({
});
const queryFormData = reactive({
  promotion: '', province: '', dealer: '', model: '', frameNo: '', status: 'toàn bộ', consumer: '',
});
const rules = reactive({
  viy2ValueList_2Ib3OcRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_r7MChFRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_2Ib3OcPopoverQueryMethod = promotion_query_method;
const viy2ValueList_2Ib3OcPopupColumns = ref(promotion_column);
const viy2ValueList_2Ib3OcPopupQueryMethod = promotion_pop_query_method;
const viy2Select_2Ib3OCOpts = reactive([
  {
    label:
'Tỉnh An Giang',
    value:
'Tỉnh An Giang',
  },
  {
    label:
'province 2',
    value:
'province 2',
  },
  {
    label:
'province 3',
    value:
'province 3',
  },
]);
const viy2ValueList_r7MCaYPopoverQueryMethod = dealer_query_method;
const viy2ValueList_r7MCaYPopupColumns = ref(dealer_column);
const viy2ValueList_r7MCaYPopupQueryMethod = dealer_pop_query_method;
const viy2ValueList_r7MCeiPopoverQueryMethod = model_query_method;
const viy2ValueList_r7MCeiPopupColumns = ref(model_column);
const viy2ValueList_r7MCeiPopupQueryMethod = model_pop_query_method;
const viy2Select_r7MChFOpts = reactive([
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
      promotionCode: 'P20210031',
      promotionName: 'XE ĐẸP QUÀ SANG - RỘN RÀNG ĐÓN TẾT',
      dealerCode: '2179',
      dealerName: 'Trung Ta',
      pointCode: '2179A',
      pointName: 'Trung Ta',
      customer: 'NGUYỄN THỊ NGỌC ANH',
      frameNo: 'RLCSEC820LY154984',
      modelCode: 'BJ7G00010C',
      modelName: 'JANUS BJ72 LTD',
      invoiceNo: '1459',
      orderNo: 'SO2105A000008',
      duNo: 'DO2105A000008',
      invoiceSign: 'Y',
      giftReceiptSign: 'Y',
      idCardSign: 'N',
      registrationCardSign: 'N',
      luckyDrawSign: 'N',
      othersSign: 'N',
      judgement: 'Hồ sơ lỗi (Kế toán kiểm tra)',
      rejectReason: '',
      link: 'https://www.yammer.com/yamaha-motor.co.jp/',
      verificationCode: 'ceshi1111',
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
const viy2Button_rW1ReClick = () => {
  debugger;
};
const viy2Button_rWmT6Click = () => {
  debugger;
};
const viy2Button_rWi8UClick = () => {
  debugger;
};
const viy2Button_rWgWIClick = () => {
  debugger;
};
const viy2Button_rWg7KClick = () => {
  debugger;
};
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2ValueList_2Ib3OcSelect = (params) => {
  queryFormData.promotion = `${params.code} ${params.name}`;
};
const viy2ValueList_2Ib3OcPopoverColumns = computed(() => {
  return promotion_column;
});
const viy2ValueList_2Ib3OcPopupConditions = computed(() => {
  return promotion_pop_condition;
});
const viy2ValueList_r7MCaYSelect = (params) => {
  queryFormData.dealer = `${params.code} ${params.name}`;
};
const viy2ValueList_r7MCaYPopoverColumns = computed(() => {
  return dealer_column;
});
const viy2ValueList_r7MCaYPopupConditions = computed(() => {
  return dealer_pop_condition;
});
const viy2ValueList_r7MCeiSelect = (params) => {
  queryFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_r7MCeiPopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_r7MCeiPopupConditions = computed(() => {
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
const gridDealerCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDealerNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointNameEditRender = computed(() => {
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
    enabled: true,
  };
});
const gridLinkEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridVerificationCodeEditRender = computed(() => {
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
        :md="{ span: 10 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          Reset
        </VueButton>
        <VueButton id="viy2Button_ab3PDC" ref="viy2Button_ab3PDC" icon-position="left" @click="viy2Button_ab3PDCClick">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 14 }"
      >
        <VueButton id="viy2Button_rW1Re" ref="viy2Button_rW1Re" icon-position="left" @click="viy2Button_rW1ReClick">
          Send To YMVN
        </VueButton>
        <VueButton id="viy2Button_rWmT6" ref="viy2Button_rWmT6" icon-position="left" @click="viy2Button_rWmT6Click">
          Zip Xml
        </VueButton>
        <VueButton id="viy2Button_rWi8U" ref="viy2Button_rWi8U" icon-position="left" @click="viy2Button_rWi8UClick">
          Download Xml
        </VueButton>
        <VueButton id="viy2Button_rWgWI" ref="viy2Button_rWgWI" icon-position="left" @click="viy2Button_rWgWIClick">
          Approve
        </VueButton>
        <VueButton id="viy2Button_rWg7K" ref="viy2Button_rWg7K" icon-position="left" @click="viy2Button_rWg7KClick">
          Reject
        </VueButton>
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          Retrieve
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      label-width="80px"
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
            :rules="rules.viy2ValueList_2Ib3OcRules"
          >
            <VueValueList
              id="viy2ValueList_2Ib3Oc"
              ref="viy2ValueList_2Ib3Oc"
              v-model="queryFormData.promotion"
              :style="{ width: '200px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_2Ib3OcPopoverColumns"
              :popover-query-method="viy2ValueList_2Ib3OcPopoverQueryMethod"
              :popup-columns="viy2ValueList_2Ib3OcPopupColumns"
              :popup-conditions="viy2ValueList_2Ib3OcPopupConditions"
              :popup-query-method="viy2ValueList_2Ib3OcPopupQueryMethod"
              @select="viy2ValueList_2Ib3OcSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_2Ib3Oo"
                  ref="viy2Row_2Ib3Oo"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_2Ib3Op" ref="viy2Text_2Ib3Op" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_2Ib3Oq" ref="viy2Button_2Ib3Oq" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Province"
            prop="province"
          >
            <VueSelect
              id="viy2Select_2Ib3OC"
              ref="viy2Select_2Ib3OC"
              v-model="queryFormData.province"
              :style="{ width: '200px' }"
              :collapse-tags="true"
              :filterable="true"
              :clearable="true"
              :collapse-tags-tooltip="true"
              :options="viy2Select_2Ib3OCOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Dealer"
            prop="dealer"
          >
            <VueValueList
              id="viy2ValueList_r7MCaY"
              ref="viy2ValueList_r7MCaY"
              :style="{ width: '200px' }"
              v-model="queryFormData.dealer"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              :popover-columns="viy2ValueList_r7MCaYPopoverColumns"
              :popover-query-method="viy2ValueList_r7MCaYPopoverQueryMethod"
              :popup-columns="viy2ValueList_r7MCaYPopupColumns"
              :popup-conditions="viy2ValueList_r7MCaYPopupConditions"
              :popup-query-method="viy2ValueList_r7MCaYPopupQueryMethod"
              @select="viy2ValueList_r7MCaYSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_r7MCcC"
                  ref="viy2Row_r7MCcC"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_r7MCcD" ref="viy2Text_r7MCcD" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_r7MCcE" ref="viy2Button_r7MCcE" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Model"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_r7MCei"
              ref="viy2ValueList_r7MCei"
              v-model="queryFormData.model"
              :style="{ width: '200px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_r7MCeiPopoverColumns"
              :popover-query-method="viy2ValueList_r7MCeiPopoverQueryMethod"
              :popup-columns="viy2ValueList_r7MCeiPopupColumns"
              :popup-conditions="viy2ValueList_r7MCeiPopupConditions"
              :popup-query-method="viy2ValueList_r7MCeiPopupQueryMethod"
              @select="viy2ValueList_r7MCeiSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_r7MCek"
                  ref="viy2Row_r7MCek"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_r7MCfX" ref="viy2Text_r7MCfX" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_r7MCfY" ref="viy2Button_r7MCfY" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Frame No."
            prop="frameNo"
          >
            <VueInput
              id="viy2InputBox_r7MCg0"
              ref="viy2InputBox_r7MCg0"
              v-model="queryFormData.frameNo"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Status"
            prop="status"
            :rules="rules.viy2Select_r7MChFRules"
          >
            <VueSelect
              id="viy2Select_r7MChF"
              ref="viy2Select_r7MChF"
              v-model="queryFormData.status"
              :style="{ width: '250px' }"
              :collapse-tags="true"
              :filterable="true"
              :clearable="true"
              :collapse-tags-tooltip="true"
              :options="viy2Select_r7MChFOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Consumer"
            prop="consumer"
          >
            <VueInput
              id="viy2InputBox_r7MCgn"
              ref="viy2InputBox_r7MCgn"
              v-model="queryFormData.consumer"
              :clearable="true"
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
        <VueSelectionColumn
          align="center"
          width="60px"
          type="checkbox"
        />
        <VueInputColumn
          :edit-render="gridPromotionCodeEditRender"
          field="promotionCode"
          show-overflow="tooltip"
          title="Promotion Code"
          width="90px"
        />
        <VueInputColumn
          :edit-render="gridPromotionNameEditRender"
          field="promotionName"
          show-overflow="tooltip"
          title="Promotion Name"
          min-width="150px"
        />
        <VueInputColumn
          :edit-render="gridDealerCodeEditRender"
          field="dealerCode"
          show-overflow="tooltip"
          title="Dealer Code"
          width="100px"
        />
        <VueInputColumn
          :edit-render="gridDealerNameEditRender"
          field="dealerName"
          show-overflow="tooltip"
          title="Dealer Name"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridPointCodeEditRender"
          field="pointCode"
          show-overflow="tooltip"
          title="Point Code"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridPointNameEditRender"
          field="pointName"
          show-overflow="tooltip"
          title="Point Name"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridCustomerEditRender"
          field="customer"
          show-overflow="tooltip"
          title="Customer"
          min-width="180px"
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
          width="135px"
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
          width="200px"
        />
        <VueInputColumn
          :edit-render="gridRejectReasonEditRender"
          field="rejectReason"
          show-overflow="tooltip"
          title="Reject Reason"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridLinkEditRender"
          field="link"
          show-overflow="tooltip"
          title="Link"
          width="200px"
        />
        <VueInputColumn
          :edit-render="gridVerificationCodeEditRender"
          field="verificationCode"
          show-overflow="tooltip"
          title="Verification Code"
          width="150px"
        />
        <VueButtonColumn
          fixed="right"
          width="40px"
          :buttons="gridViy2TableButtonColumn_odGQQButtons"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
