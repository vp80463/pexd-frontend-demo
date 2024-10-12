<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
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
  name: 'cmm0901_02',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_5rPLgS = ref();
const viy2Button_83Yd = ref();
const panels = ref();
const baseInfo = ref();
const viy2Row_l9gv0 = ref();
const baseForm = ref();
const viy2Row_11ig3p = ref();
const viy2InputBox_4Do7zM = ref();
const viy2InputBox_4CGsV2 = ref();
const viy2Select_4CCQGM = ref();
const viy2InputBox_5uRy8I = ref();
const viy2DateTimePicker_5U2eFY = ref();
const viy2DateTimePicker_4CIE4e = ref();
const viy2InputBox_5uSCFy = ref();
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
});
const baseFormData = reactive({
  ListNo: '', listNm: '', type: '', versionNo: '', fromDate: '20240416', toDate: '20240416', status: 'Pending',
});
const viy2Form_k49sfData = reactive({
  freeCouponResult: [],
});
const rules = reactive({
  viy2InputBox_4CGsV2Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_4CCQGMRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_5U2eFYRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_4CIE4eRules: [
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
const viy2Select_4CCQGMOpts = reactive([
  {
    label:
'Bảo trì miễn phí',
    value:
'1',
  },
  {
    label:
'Bảo hành',
    value:
'2',
  },
  {
    label:
'Sửa chữa',
    value:
'3',
  },
  {
    label:
'PDI',
    value:
'4',
  },
  {
    label:
'Quick Service',
    value:
'5',
  },
  {
    label:
'Miễn phí',
    value:
'6',
  },
  {
    label:
'Chương trình DV',
    value:
'7',
  },
]);
const jobDsApi = useApi({
  method: 'post',
  localData: [
    {
      pointCd: 'YT350',
      pointNm: 'Yamaha Town Nha Trang_DO 10',
    },
  ],
});
const jobDs = jobDsApi.data;
const serviceHistDsApi = useApi({
  method: 'post',
  localData: [
    {
      pointCd: 'YT350',
      pointNm: 'Yamaha Town Nha Trang_DO 10',
    },
  ],
});
const serviceHistDs = serviceHistDsApi.data;
const viy2Select_4CCQGMChange = (value) => {
  if (['2', '7'].includes(value)) {
    situationPanelModel.value = true;
  } else {
    situationPanelModel.value = false;
  }
};
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
        <VueButton id="viy2Button_5rPLgS" ref="viy2Button_5rPLgS" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left" type="info">
          Detail
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="panels"
      ref="panels"
      label-width="115px"
      class="margin-top-div"
      :model="panelsData"
    >
      <VuePanel id="baseInfo" ref="baseInfo" v-model="motorInfoPanelModel" title="Header">
        <template #header>
          <div style="width: 500px">
            <VueRow
              v-show="motorInfoPanelModel"
              id="viy2Row_l9gv0"
              ref="viy2Row_l9gv0"
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
        <VueForm
          id="baseForm"
          ref="baseForm"
          label-width="115px"
          :model="baseFormData"
        >
          <VueRow
            id="viy2Row_11ig3p"
            ref="viy2Row_11ig3p"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="List No"
                label-width="130px"
                prop="ListNo"
              >
                <VueInput
                  id="viy2InputBox_4Do7zM"
                  ref="viy2InputBox_4Do7zM"
                  v-model="baseFormData.ListNo"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="List Name"
                prop="listNm"
                :rules="rules.viy2InputBox_4CGsV2Rules"
              >
                <VueInput
                  id="viy2InputBox_4CGsV2"
                  ref="viy2InputBox_4CGsV2"
                  v-model="baseFormData.listNm"
                  :clearable="true"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Price Type"
                prop="type"
                :rules="rules.viy2Select_4CCQGMRules"
              >
                <VueSelect
                  id="viy2Select_4CCQGM"
                  ref="viy2Select_4CCQGM"
                  v-model="baseFormData.type"
                  :clearable="true"
                  :filterable="true"
                  :options="viy2Select_4CCQGMOpts"
                  @change="viy2Select_4CCQGMChange"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Version No"
                label-width="130px"
                prop="versionNo"
              >
                <VueInput
                  id="viy2InputBox_5uRy8I"
                  ref="viy2InputBox_5uRy8I"
                  v-model="baseFormData.versionNo"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="From Date"
                label-width="130px"
                prop="fromDate"
                :rules="rules.viy2DateTimePicker_5U2eFYRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_5U2eFY"
                  ref="viy2DateTimePicker_5U2eFY"
                  v-model="baseFormData.fromDate"
                  type="date"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="To Date"
                label-width="130px"
                prop="toDate"
                :rules="rules.viy2DateTimePicker_4CIE4eRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_4CIE4e"
                  ref="viy2DateTimePicker_4CIE4e"
                  v-model="baseFormData.toDate"
                  type="date"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Status"
                label-width="130px"
                prop="status"
              >
                <VueInput
                  id="viy2InputBox_5uSCFy"
                  ref="viy2InputBox_5uSCFy"
                  v-model="baseFormData.status"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
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
