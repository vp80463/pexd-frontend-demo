<script setup>
import { IconArrowLeftBold, IconCloseBold, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  model_column, model_pop_condition, model_pop_query_method, model_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const today = new Date();
const currentDate = new Date();
// 获取当前月份的第一天
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDay = new Date(nextMonth - 1);
// 默认收起MotorcycleSituationPanel
const collapse = ref(false);
const conditionPanelModel = ref(true);
const motorInfoPanelModel = ref(true);
const servicePanelModel = ref(true);
const situationPanelModel = ref(false);
const jobPanelModel = ref(true);
const partsPanelModel = ref(true);
const totalAccPanelModel = ref(true);
const historyPanelModel = ref(true);
const checkedCoupon = ref([1, 4, 6]);
const depositAmt = ref(0);
defineOptions({
  name: 'svm0106_03',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_83Yd = ref();
const viy2Button_2ObKV0 = ref();
const viy2Button_2Ob0Ly = ref();
const queryForm = ref();
const viy2Row_118QTw = ref();
const viy2DateTimePicker_hrzSYn = ref();
const viy2DateTimePicker_hrzT01 = ref();
const viy2Button_hrzT02 = ref();
const viy2Button_hrzT03 = ref();
const viy2ValueList_12gOt12 = ref();
const viy2Row_2PcLqz = ref();
const viy2Button_2PcLr5 = ref();
const viy2InputBox_sdNLSX = ref();
const viy2Row_2P4GN0 = ref();
const viy2CheckBox_hwrmU = ref();
const partsPanel = ref();
const partsGrid = ref();
const viy2Row_UG4z = ref();
const ttlPanel = ref();
const viy2Grid_YOkb = ref();
const viy2Row_YOkx = ref();
const serviceHistoryAside = ref();
const titlerow = ref();
const viy2Button_3du2Mf = ref();
const histGrid = ref();
const freeCouponAside = ref();
const titler2ow = ref();
const viy2Button_3eDUVb = ref();
const viy2Form_k49sf = ref();
const viy2Row_k4bvq = ref();
const viy2CheckBox_k4lwU = ref();
const consumerAside = ref();
const viy2Subpage_k0p7N = ref();
const consumerInfoAside = ref();
const viy2Subpage_2svxN = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', model: '', phone: '', status: ['--', 'Not Connect', 'Interested', 'Walk-In'],
});
const viy2Form_k49sfData = reactive({
  freeCouponResult: [],
});
const rules = reactive({
  viy2DateTimePicker_hrzSYnRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showServiceHist = ref(false);
const histGridEditConfig = reactive({
  trigger: 'click',
});
const showFreeCouponWin = ref(false);
const showConsumerWin = ref(false);
const showConsumerInfoWin = ref(false);
const viy2ValueList_12gOt12PopoverQueryMethod = model_query_method;
const viy2ValueList_12gOt12PopupColumns = ref(model_column);
const viy2ValueList_12gOt12PopupQueryMethod = model_pop_query_method;
const viy2CheckBox_hwrmUOpts = [
  {
    label:
'--',
    value:
'--',
  },
  {
    label:
'Not Connect',
    value:
'Not Connect',
  },
  {
    label:
'Interested',
    value:
'Interested',
  },
  {
    label:
'Walk-In',
    value:
'Walk-In',
  },
  {
    label:
'Wrong Number',
    value:
'Wrong Number',
  },
  {
    label:
'Cold',
    value:
'Cold',
  },
  {
    label:
'Bought YMVN\'s MC',
    value:
'Bought YMVN\'s MC',
  },
  {
    label:
'Bought Other Brand',
    value:
'Bought Other Brand',
  },
  {
    label:
'Not Buy',
    value:
'Not Buy',
  },
];
const partsGridEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const viy2Grid_YOkbEditConfig = reactive({
  trigger: 'click',
});
const historyDsApi = useApi({
  method: 'post',
  localData: [
    {
      phoneNo: '0333555876',
      customerNm: 'Ngô Hoàng Tấn',
      dealerCallDate: '20240225',
      status: 'Quan tâm',
    },
  ],
});
const historyDs = historyDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      status: 'dataSource',
      remark: '2',
      leadStatus: 'L1: Super Hot',
      leadType: 'Event',
      phoneNo: '0333555876',
      customerName: 'Ngô Hoàng Tấn',
      interestedModel: 'XS155R',
      interestedColor: '',
      province: 'Long An',
      address: 'Thủ Thừa',
      dateCustomer: '20240225',
      dealerCallDate: '20240227',
      buyTime: '1 - 2 ngày nữa',
      dataSource: 'Inbound Call',
    },
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
const viy2ValueList_12gOt12Select = (params) => {
  queryFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt12PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_12gOt12PopupConditions = computed(() => {
  return model_pop_condition;
});
const partsGridStatusEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const partsGridRemarkEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const partsGridLeadStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridLeadTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridPhoneNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridCustomerNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridInterestedModelEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridInterestedColorEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridProvinceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridAddressEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridDateCustomerEditRender = computed(() => {
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
const partsGridDealerCallDateEditRender = computed(() => {
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
const partsGridBuyTimeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const partsGridDataSourceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Grid_YOkbPhoneNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Grid_YOkbCustomerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Grid_YOkbDealerCallDateEditRender = computed(() => {
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
const viy2Grid_YOkbStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_3du2MfClick = () => {
  showServiceHist.value = false;
};
const histGridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const histGridCtgEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const histGridTitleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_3eDUVbClick = () => {
  showFreeCouponWin.value = false;
};
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
const delMotorInfoRow = (row) => {
  motorInfoGrid.value.remove(row);
};
const delJobRow = (row) => {
  jobGrid.value.remove(row);
};
const delPartsRow = (row) => {
  partsGrid.value.remove(row);
};
const onFrameNoInput = (value) => {
  if (value) {
    baseFormData.frameNo = 'RLCUG1010LY272040';
    baseFormData.modelCd = 'BGY500010A Sirius-BGY2';
    baseFormData.modelNm = 'Sirius-BGY2';
    baseFormData.fn = 'Test';
    baseFormData.ln = 'Nha Trang';
    baseFormData.modelType = '1';
  } else {
    const formElement = baseForm.value;
    if (formElement && formElement.resetFields) {
      formElement.resetFields();
    }
  }
};
// consumer侧边栏选择后
const callbkSelectConsumer = (param) => {
  baseFormData.fn = param.name;
  baseFormData.mobile = param.mobile;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
};
// consumer
const callbakConsumerInfo = (consumerFormData) => {
  baseFormData.fn = consumerFormData.fn;
  baseFormData.mn = consumerFormData.mn;
  baseFormData.ln = consumerFormData.ln;
  baseFormData.mobile = consumerFormData.mobile;
  showConsumerInfoWin.value = false;
};
const clsConsumerInfoAside = () => {
  showConsumerInfoWin.value = false;
};
// 收起-展开所有Panel
const toggleAllPanel = () => {
  const value = collapse.value;
  conditionPanelModel.value = value;
  motorInfoPanelModel.value = value;
  servicePanelModel.value = value;
  situationPanelModel.value = value;
  jobPanelModel.value = value;
  partsPanelModel.value = value;
  historyPanelModel.value = value;
};
viy2Form_k49sfData.freeCouponResult = checkedCoupon;
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_GgDWR"
      ref="viy2Row_GgDWR"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" type="warning">
          Reset
        </VueButton>
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_2ObKV0" ref="viy2Button_2ObKV0" icon-position="left">
          Receive
        </VueButton>
        <VueButton id="viy2Button_2Ob0Ly" ref="viy2Button_2Ob0Ly" icon-position="left" type="info">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      label-width="115px"
      class="margin-top-div0"
      :model="queryFormData"
    >
      <VueRow
        id="viy2Row_118QTw"
        ref="viy2Row_118QTw"
        :gutter="15"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Contacted Date"
            label-width="120px"
            prop="dateFrom"
            :rules="rules.viy2DateTimePicker_hrzSYnRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_hrzSYn"
              ref="viy2DateTimePicker_hrzSYn"
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
          >
            <VueDatePicker
              id="viy2DateTimePicker_hrzT01"
              ref="viy2DateTimePicker_hrzT01"
              v-model="queryFormData.dateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_hrzT02" ref="viy2Button_hrzT02" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hrzT02Click" />
          <VueButton id="viy2Button_hrzT03" ref="viy2Button_hrzT03" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hrzT03Click" />
          <VueFormItem
            label="Interested Model"
            label-width="130px"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_12gOt12"
              ref="viy2ValueList_12gOt12"
              v-model="queryFormData.model"
              :style="{ width: '250px' }"
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
                  id="viy2Row_2PcLqz"
                  ref="viy2Row_2PcLqz"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_2PcLqU" ref="viy2Text_2PcLqU" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_2PcLr5" ref="viy2Button_2PcLr5" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Phone No."
            prop="phone"
          >
            <VueInput
              id="viy2InputBox_sdNLSX"
              ref="viy2InputBox_sdNLSX"
              v-model="queryFormData.phone"
              :clearable="false"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_2P4GN0"
        ref="viy2Row_2P4GN0"
        :gutter="15"
      >
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Status"
            prop="status"
          >
            <VueCheckboxGroup
              id="viy2CheckBox_hwrmU"
              ref="viy2CheckBox_hwrmU"
              v-model="queryFormData.status"
            >
              <VueCheckbox
                v-for="option in viy2CheckBox_hwrmUOpts"
                :key="option.value"
                :label="option.value"
                :name="option.name"
                :disabled="option.disabled"
              >
                {{ option.label }}
              </VueCheckbox>
            </VueCheckboxGroup>
          </VueFormItem>
        </VueCol>
      </VueRow>
      <VuePanel id="partsPanel" ref="partsPanel" v-model="partsPanelModel" title="Detail">
        <VueTable id="partsGrid" ref="partsGrid" height="250px" :data="gridDs" :edit-config="partsGridEditConfig">
          <VueRow
            id="viy2Row_UG4z"
            ref="viy2Row_UG4z"
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
            :edit-render="partsGridStatusEditRender"
            field="status"
            title="Status"
            width="120px"
          />
          <VueInputColumn
            :edit-render="partsGridRemarkEditRender"
            field="remark"
            title="Remark"
            width="120px"
          />
          <VueInputColumn
            :edit-render="partsGridLeadStatusEditRender"
            field="leadStatus"
            title="Lead Status"
            width="150px"
          />
          <VueInputColumn
            :edit-render="partsGridLeadTypeEditRender"
            field="leadType"
            title="Lead Type"
            width="150px"
          />
          <VueInputColumn
            :edit-render="partsGridPhoneNoEditRender"
            field="phoneNo"
            title="Phone No."
            width="150px"
          />
          <VueInputColumn
            :edit-render="partsGridCustomerNameEditRender"
            field="customerName"
            title="Customer Name"
            width="150px"
          />
          <VueInputColumn
            :edit-render="partsGridInterestedModelEditRender"
            field="interestedModel"
            title="Interested Model"
            width="150px"
          />
          <VueInputColumn
            :edit-render="partsGridInterestedColorEditRender"
            field="interestedColor"
            title="Interested Color"
            width="150px"
          />
          <VueInputColumn
            :edit-render="partsGridProvinceEditRender"
            field="province"
            title="Province"
            width="150px"
          />
          <VueInputColumn
            :edit-render="partsGridAddressEditRender"
            field="address"
            title="District/Town/City"
            width="150px"
          />
          <VueDateTimeColumn
            :edit-render="partsGridDateCustomerEditRender"
            field="dateCustomer"
            align="center"
            title="Contacted Date From Customer"
            width="120px"
          />
          <VueDateTimeColumn
            :edit-render="partsGridDealerCallDateEditRender"
            field="dealerCallDate"
            align="center"
            title="Dealer Call Date"
            width="120px"
          />
          <VueInputColumn
            :edit-render="partsGridBuyTimeEditRender"
            field="buyTime"
            title="Estimate Time to Buy"
            width="150px"
          />
          <VueInputColumn
            :edit-render="partsGridDataSourceEditRender"
            field="dataSource"
            title="Data Source"
            width="150px"
          />
        </VueTable>
      </VuePanel>
      <VuePanel id="ttlPanel" ref="ttlPanel" v-model="totalAccPanelModel" title="Update History by Customer">
        <VueTable id="viy2Grid_YOkb" ref="viy2Grid_YOkb" :data="historyDs" :edit-config="viy2Grid_YOkbEditConfig">
          <VueRow
            id="viy2Row_YOkx"
            ref="viy2Row_YOkx"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            />
          </VueRow>
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
          />
          <VueInputColumn
            :edit-render="viy2Grid_YOkbPhoneNoEditRender"
            field="phoneNo"
            title="Phone No."
            width="150px"
          />
          <VueInputColumn
            :edit-render="viy2Grid_YOkbCustomerNmEditRender"
            field="customerNm"
            title="Customer Name"
            width="150px"
          />
          <VueDateTimeColumn
            :edit-render="viy2Grid_YOkbDealerCallDateEditRender"
            field="dealerCallDate"
            align="center"
            title="Dealer Call Date"
            width="120px"
          />
          <VueInputColumn
            :edit-render="viy2Grid_YOkbStatusEditRender"
            field="status"
            title="Status"
            width="150px"
          />
        </VueTable>
      </VuePanel>
    </VueForm>
    <VueAside
      id="serviceHistoryAside"
      ref="serviceHistoryAside"
      v-model="showServiceHist"
      :modal="true"
      size="50%"
      :show-close="false"
      :with-header="false"
    />
    <VueAside
      id="freeCouponAside"
      ref="freeCouponAside"
      v-model="showFreeCouponWin"
      :modal="true"
      size="40%"
      :with-header="false"
      :show-close="false"
    />
    <VueAside
      id="consumerAside"
      ref="consumerAside"
      v-model="showConsumerWin"
      :modal="true"
      :with-header="false"
      :show-close="false"
      size="60%"
      direction="rtl"
    />
    <VueAside
      id="consumerInfoAside"
      ref="consumerInfoAside"
      v-model="showConsumerInfoWin"
      :modal="true"
      :with-header="false"
      size="60%"
    />
  </VueForm>
</template>

<style type="text/css" scoped>
.rotate-icon {
transform: rotate(90deg);
font-size: large;
align-self: center;
}
.row-margin-top {
margin-top: 10px;
}
</style>
