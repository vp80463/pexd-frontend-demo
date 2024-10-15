<script setup>
import { IconCloseBold, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import {
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const today = new Date();
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
  name: 'cmm0705_01',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_5khnoy = ref();
const viy2Button_1KgPD8 = ref();
const panels = ref();
const userRole = ref();
const conditionForm = ref();
const viy2Row_118QTw = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_5lBbRg = ref();
const viy2Button_5lBbRZ = ref();
const viy2InputBox_dGnPEa = ref();
const viy2InputBox_5la8Zu = ref();
const viy2InputBox_5lc7ua = ref();
const viy2DateTimePicker_5lkfFQ = ref();
const viy2DateTimePicker_x7GUP = ref();
const viy2Radio_6f1gy = ref();
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
const panelsData = reactive({
  employeeCd: '', userCd: '', newPassWord: '', retypePassWord: '', datafieldviy2DateTimePicker_x7GUP: '', expiredDate: '', status: 'Active',
});
const conditionFormData = reactive({
});
const viy2Form_k49sfData = reactive({
  freeCouponResult: [],
});
const rules = reactive({
  viy2ValueList_12gOt1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_dGnPEaRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_5la8ZuRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_5lc7uaRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_5lkfFQRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_x7GUPRules: [
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
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2Radio_6f1gyOpts = reactive([
  { value: 'Active', label: 'Active' },
]);
const jobDsApi = useApi({
  method: 'post',
  localData: [
    {
      userCd: 'ADMIN',
      userNm: 'SYSTEM ADMINYMVN',
    },
  ],
});
const jobDs = jobDsApi.data;
const viy2ValueList_12gOt1Select = (params) => {
  queryFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
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
        <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left">
          Back
        </VueButton>
        <VueButton id="viy2Button_5khnoy" ref="viy2Button_5khnoy" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_1KgPD8" ref="viy2Button_1KgPD8" icon-position="left" type="info">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="panels"
      ref="panels"
      label-width="115px"
      class="margin-top-div0 except-height-css"
      :model="panelsData"
    >
      <VuePanel id="userRole" ref="userRole" v-model="conditionPanelModel" title="Condition">
        <VueForm
          id="conditionForm"
          ref="conditionForm"
          label-width="115px"
          :model="conditionFormData"
        />
        <VueRow
          id="viy2Row_118QTw"
          ref="viy2Row_118QTw"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 18 }"
          >
            <VueFormItem
              label="Employee Code"
              label-width="130px"
              prop="employeeCd"
              :rules="rules.viy2ValueList_12gOt1Rules"
            >
              <VueValueList
                id="viy2ValueList_12gOt1"
                ref="viy2ValueList_12gOt1"
                v-model="panelsData.employeeCd"
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
                    id="viy2Row_5lBbRg"
                    ref="viy2Row_5lBbRg"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_5lBbRE" ref="viy2Text_5lBbRE" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_5lBbRZ" ref="viy2Button_5lBbRZ" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="User Code"
              label-width="130px"
              prop="userCd"
              :rules="rules.viy2InputBox_dGnPEaRules"
            >
              <VueInput
                id="viy2InputBox_dGnPEa"
                ref="viy2InputBox_dGnPEa"
                v-model="panelsData.userCd"
                :readonly="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="New Password"
              label-width="130px"
              prop="newPassWord"
              :rules="rules.viy2InputBox_5la8ZuRules"
            >
              <VueInput
                id="viy2InputBox_5la8Zu"
                ref="viy2InputBox_5la8Zu"
                v-model="panelsData.newPassWord"
                :readonly="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueText id="viy2Text_sgaQ" ref="viy2Text_sgaQ" type="info" :style="{ width: '100%', display: 'inline-block' }">
              Weak Medium Strong
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Retype Password"
              label-width="130px"
              prop="retypePassWord"
              :rules="rules.viy2InputBox_5lc7uaRules"
            >
              <VueInput
                id="viy2InputBox_5lc7ua"
                ref="viy2InputBox_5lc7ua"
                v-model="panelsData.retypePassWord"
                :readonly="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Effective Date"
              label-width="130px"
              prop="datafieldviy2DateTimePicker_x7GUP"
              :rules="rules.viy2DateTimePicker_5lkfFQRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_5lkfFQ"
                ref="viy2DateTimePicker_5lkfFQ"
                v-model="panelsData.datafieldviy2DateTimePicker_x7GUP"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Expired Date"
              label-width="130px"
              prop="expiredDate"
              :rules="rules.viy2DateTimePicker_x7GUPRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_x7GUP"
                ref="viy2DateTimePicker_x7GUP"
                v-model="panelsData.expiredDate"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Status"
              label-width="130px"
              prop="status"
            >
              <VueRadioGroup
                id="viy2Radio_6f1gy"
                ref="viy2Radio_6f1gy"
                v-model="panelsData.status"
              >
                <VueRadio
                  v-for="option in viy2Radio_6f1gyOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadio>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 18 }"
          >
            <VueText id="viy2Text_4EQ6A" ref="viy2Text_4EQ6A" type="info" :style="{ width: '100%', display: 'inline-block' }">
              ✔ The PWD need to equal or greater than 6 digit.
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 18 }"
          >
            <VueText id="viy2Text_4Kfea" ref="viy2Text_4Kfea" type="info" :style="{ width: '100%', display: 'inline-block' }">
              ✔ The PWD need to include the lowercase letter,uppercase letter.
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 18 }"
          >
            <VueText id="viy2Text_4Kmku" ref="viy2Text_4Kmku" type="info" :style="{ width: '100%', display: 'inline-block' }">
              ✔ The PWD cannot be the same with the User ID .
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 18 }"
          >
            <VueText id="viy2Text_4KtCg" ref="viy2Text_4KtCg" type="info" :style="{ width: '100%', display: 'inline-block' }">
              ✔ The PWD cannot be the same with the latest one.
            </VueText>
          </VueCol>
        </VueRow>
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
