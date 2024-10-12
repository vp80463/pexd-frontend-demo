<script setup>
import { IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const routeParam = useParams();
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
defineOptions({
  name: 'cmq0603_02',
});
const form = ref();
const viy2Row_10QMyC = ref();
const backBtn = ref();
const header = ref();
const queryForm = ref();
const viy2Row_xChMPR = ref();
const viy2InputBox_3t8PKu = ref();
const viy2InputBox_5oZ87Q = ref();
const viy2InputBox_5p1afG = ref();
const viy2InputBox_5oWPmI = ref();
const viy2DateTimePicker_5oX13o = ref();
const viy2DateTimePicker_5oXaxC = ref();
const viy2Panel_2GXKvM = ref();
const grid1 = ref();
const viy2Row_3vX9to = ref();
const viy2Button_3vX9xb = ref();
const viy2Button_5oKr7D = ref();
const viy2CheckBox_5phsZF = ref();
const grid2 = ref();
const viy2Row_5oDfaK = ref();
const viy2Button_5oNlGH = ref();
const viy2Button_5oNNhr = ref();
const viy2Button_5oDfbD = ref();
const viy2Panel_5oGi8w = ref();
const grid3 = ref();
const viy2Row_5oGi94 = ref();
const viy2Button_5oGia7 = ref();
const grid4 = ref();
const viy2Row_RYOVGZ = ref();
const viy2Button_RYOVTK = ref();
const viy2Panel_3vbAg4 = ref();
const viy2Row_3vbAh4 = ref();
const grid5 = ref();
const viy2Row_3vbAiT = ref();
const viy2Button_z1RRtE = ref();
const formData = reactive({
});
const queryFormData = reactive({
  campaignNo: '', campaignTitle: '', campaignType: '', campaignDescription: '', effectiveDate: '', expiredDate: '',
});
const grid1EditConfig = reactive({
  trigger: 'click',
});
const grid1MouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_5phsZFOpts = [
  {
    label:
'',
    value:
'',
  },
];
const grid2EditConfig = reactive({
  trigger: 'click',
});
const grid2MouseConfig = reactive({
  extension: true,
});
const grid3EditConfig = reactive({
  trigger: 'click',
});
const grid3MouseConfig = reactive({
  extension: true,
});
const grid4EditConfig = reactive({
  trigger: 'click',
});
const grid4MouseConfig = reactive({
  extension: true,
});
const grid5EditConfig = reactive({
  trigger: 'click',
});
const grid5MouseConfig = reactive({
  extension: true,
});
const initDsApi = useApi({
  url: '/master/cmq0603/cmq060302InitSearch.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  manual: true,
});
const initDs = initDsApi.data;
const backBtnClick = () => {
  doBack();
};
const grid1RepairPattern1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_3vX9xbClick = () => {
  showPartsWin.value = true;
};
const grid1RepairTypeCd1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_5oKr7DClick = () => {
  showPartsWin.value = true;
};
const grid1PartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1PartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1PrimaryFlagEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const grid2RepairPattern2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_5oNlGHClick = () => {
  showPartsWin.value = true;
};
const grid2RepairTypeCd2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_5oNNhrClick = () => {
  showPartsWin.value = true;
};
const grid2JobCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_5oDfbDClick = () => {
  showPartsWin.value = true;
};
const grid2JobNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid3SymptomCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_5oGia7Click = () => {
  showPartsWin.value = true;
};
const grid3SymptomNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid4ConditionCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_RYOVTKClick = () => {
  showPartsWin.value = true;
};
const grid4ConditionNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid5StampingStyleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_z1RRtEClick = () => {
  showPartsWin.value = true;
};
const grid5SerialNoFromEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid5SerialNoToEditRender = computed(() => {
  return {
    enabled: false,
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
      initDsApi.runAsync();
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
    <VuePanel id="header" ref="header" :collapse="true" :title="t('common.label.header')" class="margin-top-div0 except-height-css">
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="150px"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_xChMPR"
          ref="viy2Row_xChMPR"
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
                id="viy2InputBox_3t8PKu"
                ref="viy2InputBox_3t8PKu"
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
                id="viy2InputBox_5oZ87Q"
                ref="viy2InputBox_5oZ87Q"
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
                id="viy2InputBox_5p1afG"
                ref="viy2InputBox_5p1afG"
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
                id="viy2InputBox_5oWPmI"
                ref="viy2InputBox_5oWPmI"
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
                id="viy2DateTimePicker_5oX13o"
                ref="viy2DateTimePicker_5oX13o"
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
                id="viy2DateTimePicker_5oXaxC"
                ref="viy2DateTimePicker_5oXaxC"
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
    <VuePanel id="viy2Panel_2GXKvM" ref="viy2Panel_2GXKvM" :collapse="true" :title="t('common.label.repairDetail')" class="except-height-css">
      <VueTable id="grid1" ref="grid1" :height="40" :data="initDs.repairDetailOne" :edit-config="grid1EditConfig" :mouse-config="grid1MouseConfig">
        <VueRow
          id="viy2Row_3vX9to"
          ref="viy2Row_3vX9to"
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
          :edit-render="grid1RepairPattern1EditRender"
          field="repairPattern1"
          :title="t('label.repairPartten')"
          width="120px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_3vX9xb" ref="viy2Button_3vX9xb" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_3vX9xbClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="grid1RepairTypeCd1EditRender"
          field="repairTypeCd1"
          :title="t('label.repairTypeCode')"
          width="145px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_5oKr7D" ref="viy2Button_5oKr7D" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_5oKr7DClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="grid1PartsNoEditRender"
          field="partsNo"
          :title="t('label.partsNo')"
          width="130px"
        />
        <VueInputColumn
          :edit-render="grid1PartsNmEditRender"
          field="partsNm"
          :title="t('label.partsName')"
          width="200px"
        />
        <VueTemplateColumn
          :edit-render="grid1PrimaryFlagEditRender"
          align="center"
          field="primaryFlag"
          width="100px"
          :title="t('label.primaryFlag')"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_5phsZF"
              ref="viy2CheckBox_5phsZF"
              v-model="scope.row.primaryFlag"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
      </VueTable>
      <VueTable id="grid2" ref="grid2" :height="80" :data="initDs.repairDetailTwo" :edit-config="grid2EditConfig" :mouse-config="grid2MouseConfig">
        <VueRow
          id="viy2Row_5oDfaK"
          ref="viy2Row_5oDfaK"
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
          :edit-render="grid2RepairPattern2EditRender"
          field="repairPattern2"
          :title="t('label.repairPartten')"
          width="120px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_5oNlGH" ref="viy2Button_5oNlGH" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_5oNlGHClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="grid2RepairTypeCd2EditRender"
          field="repairTypeCd2"
          :title="t('label.repairTypeCode')"
          width="145px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_5oNNhr" ref="viy2Button_5oNNhr" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_5oNNhrClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="grid2JobCdEditRender"
          field="jobCd"
          :title="t('label.jobCode')"
          width="120px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_5oDfbD" ref="viy2Button_5oDfbD" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_5oDfbDClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="grid2JobNmEditRender"
          field="jobNm"
          :title="t('label.jobName')"
          width="200px"
        />
      </VueTable>
    </VuePanel>
    <VuePanel id="viy2Panel_5oGi8w" ref="viy2Panel_5oGi8w" :collapse="true" :title="t('common.label.problemDetail')" class="except-height-css">
      <VueTable id="grid3" ref="grid3" :height="80" :data="initDs.problemDetailOne" :edit-config="grid3EditConfig" :mouse-config="grid3MouseConfig">
        <VueRow
          id="viy2Row_5oGi94"
          ref="viy2Row_5oGi94"
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
          :edit-render="grid3SymptomCdEditRender"
          field="symptomCd"
          :title="t('label.symptomCode')"
          width="120px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_5oGia7" ref="viy2Button_5oGia7" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_5oGia7Click" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="grid3SymptomNmEditRender"
          field="symptomNm"
          :title="t('label.symptomName')"
          width="150px"
        />
      </VueTable>
      <VueTable id="grid4" ref="grid4" :height="80" :data="initDs.problemDetailTwo" :edit-config="grid4EditConfig" :mouse-config="grid4MouseConfig">
        <VueRow
          id="viy2Row_RYOVGZ"
          ref="viy2Row_RYOVGZ"
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
          :edit-render="grid4ConditionCdEditRender"
          field="conditionCd"
          :title="t('label.conditionCode')"
          width="120px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_RYOVTK" ref="viy2Button_RYOVTK" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_RYOVTKClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="grid4ConditionNmEditRender"
          field="conditionNm"
          :title="t('label.conditionName')"
          width="150px"
        />
      </VueTable>
    </VuePanel>
    <VuePanel id="viy2Panel_3vbAg4" ref="viy2Panel_3vbAg4" :title="t('common.label.stampingStyleDetail')" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            v-show="detailPanelModel"
            id="viy2Row_3vbAh4"
            ref="viy2Row_3vbAh4"
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
      <VueTable id="grid5" ref="grid5" :height="gridHeight - 40" :data="initDs.stampingStyleDetail" :edit-config="grid5EditConfig" :mouse-config="grid5MouseConfig">
        <VueRow
          id="viy2Row_3vbAiT"
          ref="viy2Row_3vbAiT"
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
          :edit-render="grid5StampingStyleEditRender"
          field="stampingStyle"
          :title="t('label.stampingStyle')"
          width="160px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_z1RRtE" ref="viy2Button_z1RRtE" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_z1RRtEClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="grid5SerialNoFromEditRender"
          field="serialNoFrom"
          :title="t('lable.serialNoFrom')"
          width="200px"
        />
        <VueInputColumn
          :edit-render="grid5SerialNoToEditRender"
          field="serialNoTo"
          :title="t('label.serialNoTo')"
          width="200px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
