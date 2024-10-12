<script setup>
import { IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const routeParam = useParams();
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
defineOptions({
  name: 'cmq0603_03',
});
const form = ref();
const viy2Row_10QMyC = ref();
const backBtn = ref();
const viy2Flex_c2hBW = ref();
const header = ref();
const queryForm = ref();
const viy2Row_1WoO3S = ref();
const viy2InputBox_1WoO43 = ref();
const viy2InputBox_1WoO46 = ref();
const viy2InputBox_1WoO4g = ref();
const viy2InputBox_gq04FO = ref();
const viy2DateTimePicker_gq04FR = ref();
const viy2DateTimePicker_gq04Hu = ref();
const viy2Flex_c2i8b = ref();
const grid = ref();
const viy2Row_1Wp7yK = ref();
const viy2Table_1Wp7yV = ref();
const viy2Row_1Wp7yX = ref();
const viy2Button_gq3dEu = ref();
const viy2Button_gq3dEy = ref();
const formData = reactive({
});
const queryFormData = reactive({
  campaignNo: '', campaignTitle: '', campaignType: '', campaignDescription: '', effectiveDate: '', expiredDate: '',
});
const viy2Table_1Wp7yVEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_1Wp7yVMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/master/cmq0603/findCampaignResultInquiryList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const backBtnClick = () => {
  doBack();
};
const viy2Table_1Wp7yVModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_gq3dEuClick = () => {
  showPartsWin.value = true;
};
const viy2Table_1Wp7yVModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_gq3dEyClick = () => {
  showPartsWin.value = true;
};
const viy2Table_1Wp7yVFrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_1Wp7yVSoldDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const viy2Table_1Wp7yVPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_1Wp7yVApplyDateEditRender = computed(() => {
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
  initData();
});
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const initData = () => {
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    queryFormData.campaignId = params.campaignId;
    queryFormData.campaignNo = params.campaignNo;
    queryFormData.campaignType = params.campaignType;
    queryFormData.campaignTitle = params.campaignTitle;
    queryFormData.effectiveDate = params.effectiveDate;
    queryFormData.expiredDate = params.expiredDate;
    queryFormData.campaignDescription = params.campaignDescription;
    if (!isNoValue(queryFormData.campaignId)) {
      gridDsApi.runAsync();
    }
  }
};
const doBack = () => {
  router.back();
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
        <VueButton id="backBtn" ref="backBtn" icon-position="left" @click="backBtnClick">
          {{ t('button.back') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      />
    </VueRow>
    <VueFlex
      id="viy2Flex_c2hBW"
      ref="viy2Flex_c2hBW"
      direction="column"
      class="full-height"
    >
      <VuePanel id="header" ref="header" :collapse="true" :title="t('common.label.header')" class="margin-top-div0 except-height-css">
        <VueForm
          id="queryForm"
          ref="queryForm"
          label-width="150px"
          :model="queryFormData"
        >
          <VueRow
            id="viy2Row_1WoO3S"
            ref="viy2Row_1WoO3S"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.campaignNumber')"
                prop="campaignNo"
              >
                <VueInput
                  id="viy2InputBox_1WoO43"
                  ref="viy2InputBox_1WoO43"
                  v-model="queryFormData.campaignNo"
                  :readonly="true"
                  :maxlength="40"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.campaignTitle')"
                prop="campaignTitle"
              >
                <VueInput
                  id="viy2InputBox_1WoO46"
                  ref="viy2InputBox_1WoO46"
                  v-model="queryFormData.campaignTitle"
                  :readonly="true"
                  :maxlength="300"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.campaignType')"
                prop="campaignType"
              >
                <VueInput
                  id="viy2InputBox_1WoO4g"
                  ref="viy2InputBox_1WoO4g"
                  v-model="queryFormData.campaignType"
                  :readonly="true"
                  :maxlength="40"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.campaignDescription')"
                prop="campaignDescription"
              >
                <VueInput
                  id="viy2InputBox_gq04FO"
                  ref="viy2InputBox_gq04FO"
                  v-model="queryFormData.campaignDescription"
                  :readonly="true"
                  :maxlength="1500"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.effectiveDate')"
                prop="effectiveDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_gq04FR"
                  ref="viy2DateTimePicker_gq04FR"
                  v-model="queryFormData.effectiveDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.expiredDate')"
                prop="expiredDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_gq04Hu"
                  ref="viy2DateTimePicker_gq04Hu"
                  v-model="queryFormData.expiredDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VueFlex
        id="viy2Flex_c2i8b"
        ref="viy2Flex_c2i8b"
        direction="column"
        grow="1"
      >
        <VuePanel id="grid" ref="grid" :title="t('common.label.detail')" :collapse="true" height="100%">
          <template #header>
            <div style="width: 400px">
              <VueRow
                v-show="detailPanelModel"
                id="viy2Row_1Wp7yK"
                ref="viy2Row_1Wp7yK"
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
          <VueTable id="viy2Table_1Wp7yV" ref="viy2Table_1Wp7yV" height="auto" :data="gridDs" :edit-config="viy2Table_1Wp7yVEditConfig" :mouse-config="viy2Table_1Wp7yVMouseConfig">
            <VueRow
              id="viy2Row_1Wp7yX"
              ref="viy2Row_1Wp7yX"
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
              header-align="center"
            />
            <VueInputColumn
              :edit-render="viy2Table_1Wp7yVModelCdEditRender"
              field="modelCd"
              :title="t('label.modelCode')"
              width="130px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_gq3dEu" ref="viy2Button_gq3dEu" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_gq3dEuClick" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="viy2Table_1Wp7yVModelNmEditRender"
              field="modelNm"
              :title="t('label.modelName')"
              width="160px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_gq3dEy" ref="viy2Button_gq3dEy" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_gq3dEyClick" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="viy2Table_1Wp7yVFrameNoEditRender"
              field="frameNo"
              :title="t('label.frameNumber')"
              width="140px"
            />
            <VueDateTimeColumn
              :edit-render="viy2Table_1Wp7yVSoldDateEditRender"
              field="soldDate"
              align="center"
              :title="t('label.soldDate')"
              width="120px"
            />
            <VueInputColumn
              :edit-render="viy2Table_1Wp7yVPointCdEditRender"
              field="pointCd"
              :title="t('label.pointCode')"
              width="130px"
            />
            <VueDateTimeColumn
              :edit-render="viy2Table_1Wp7yVApplyDateEditRender"
              field="applyDate"
              align="center"
              :title="t('label.applyDate')"
              width="120px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
