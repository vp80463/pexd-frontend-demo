<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
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
  name: 'cmm0803_01',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_8kIDpU = ref();
const panels = ref();
const result = ref();
const viy2Row_BM4iq = ref();
const viy2Button_65GQDG = ref();
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
const viy2Form_k49sfData = reactive({
  freeCouponResult: [],
});
const viy2Grid_18ZDtRules = {
  pointCd: [
    { required: true, message: 'name required' },
  ],
  wz: [
    { required: true, message: 'name required' },
  ],
  wzNm: [
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
const viy2Grid_18ZDtOperationButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: delMotorInfoRow,
      title: 'Delete',
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [{
    pointCd: 'YT350',
    wz: 'WZ01',
    wzNm: 'WorkZone 1',
  }],
});
const gridDs = gridDsApi.data;
const viy2Grid_18ZDtPointCdEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const viy2Grid_18ZDtWzEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Grid_18ZDtWzNmEditRender = computed(() => {
  return {
    enabled: true,
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
        <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_8kIDpU" ref="viy2Button_8kIDpU" icon-position="left" type="info">
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
      <VuePanel id="result" ref="result" v-model="historyPanelModel" title="Result">
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
                <VueButton id="viy2Button_65GQDG" ref="viy2Button_65GQDG" icon-position="left" class="icon-button-width">
                  +
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="viy2Grid_18ZDt" ref="viy2Grid_18ZDt" :data="gridDs" :edit-rules="viy2Grid_18ZDtRules" :edit-config="viy2Grid_18ZDtEditConfig">
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
            :edit-render="viy2Grid_18ZDtPointCdEditRender"
            field="pointCd"
            title="Point"
            width="135px"
          />
          <VueInputColumn
            :edit-render="viy2Grid_18ZDtWzEditRender"
            field="wz"
            title="WZ"
            width="135px"
          />
          <VueInputColumn
            :edit-render="viy2Grid_18ZDtWzNmEditRender"
            field="wzNm"
            title="WZ Name"
            width="150px"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="80px"
            :buttons="viy2Grid_18ZDtOperationButtons"
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
