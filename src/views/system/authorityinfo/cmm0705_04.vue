<script setup>
import { IconMinus, IconPlus, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
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
  name: 'cmm0705_04',
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
const viy2InputBox_dGnPEa = ref();
const viy2InputBox_5kqP0W = ref();
const userList = ref();
const viy2Row_BM4iq = ref();
const viy2Button_65GQDG = ref();
const viy2Button_1KgcVM = ref();
const viy2Grid_18ZDt = ref();
const viy2Row_18ZEg = ref();
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
const conditionFormData = reactive({
  roleCd: 'YMVN_Staff', roleNm: 'YMVN_Staff',
});
const viy2Form_k49sfData = reactive({
  freeCouponResult: [],
});
const rules = reactive({
  viy2InputBox_dGnPEaRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_5kqP0WRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Grid_18ZDtRules = {
  userCd: // Please add validation rules in the following format
[
  { required: true, message: 'name required' },
],
};
const showServiceHist = ref(false);
const histGridEditConfig = reactive({
  trigger: 'click',
});
const showFreeCouponWin = ref(false);
const showConsumerWin = ref(false);
const showConsumerInfoWin = ref(false);
const viy2Grid_18ZDtEditConfig = reactive({
  trigger: 'click',
});
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
const viy2Grid_18ZDtUserCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Grid_18ZDtUserNmEditRender = computed(() => {
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
      <VuePanel id="userRole" ref="userRole" v-model="conditionPanelModel" title="User Role">
        <VueForm
          id="conditionForm"
          ref="conditionForm"
          label-width="115px"
          :model="conditionFormData"
        >
          <VueRow
            id="viy2Row_118QTw"
            ref="viy2Row_118QTw"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Role Code"
                prop="roleCd"
                :rules="rules.viy2InputBox_dGnPEaRules"
              >
                <VueInput
                  id="viy2InputBox_dGnPEa"
                  ref="viy2InputBox_dGnPEa"
                  v-model="conditionFormData.roleCd"
                  :readonly="true"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="Role Name"
                prop="roleNm"
                :rules="rules.viy2InputBox_5kqP0WRules"
              >
                <VueInput
                  id="viy2InputBox_5kqP0W"
                  ref="viy2InputBox_5kqP0W"
                  v-model="conditionFormData.roleNm"
                  :readonly="true"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VuePanel id="userList" ref="userList" v-model="historyPanelModel" title="User List">
        <template #header>
          <div style="width: 300px">
            <VueRow
              v-show="historyPanelModel"
              id="viy2Row_BM4iq"
              ref="viy2Row_BM4iq"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueButton id="viy2Button_65GQDG" ref="viy2Button_65GQDG" icon-position="left" :icon="IconPlus" />
                <VueButton id="viy2Button_1KgcVM" ref="viy2Button_1KgcVM" icon-position="left" :icon="IconMinus" />
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="viy2Grid_18ZDt" ref="viy2Grid_18ZDt" :data="jobDs" :edit-rules="viy2Grid_18ZDtRules" :edit-config="viy2Grid_18ZDtEditConfig">
          <VueRow
            id="viy2Row_18ZEg"
            ref="viy2Row_18ZEg"
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
            :edit-render="viy2Grid_18ZDtUserCdEditRender"
            field="userCd"
            title="User Code"
            width="130px"
          />
          <VueInputColumn
            :edit-render="viy2Grid_18ZDtUserNmEditRender"
            field="userNm"
            title="User Name"
            width="160px"
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
