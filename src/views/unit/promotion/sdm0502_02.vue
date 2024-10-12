<script setup>
import { IconArrowLeftBold, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
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
  name: 'sdm0502_02',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_ab3PDC = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_vzg6q = ref();
const viy2Button_vznig = ref();
const queryForm = ref();
const viy2Panel_6IAt5Y = ref();
const viy2Row_6IAt6a = ref();
const viy2InputBox_gOpti = ref();
const viy2DateTimePicker_gSgHm = ref();
const viy2DateTimePicker_QQvs2P = ref();
const viy2Button_5hElpb = ref();
const viy2Button_gTn0y = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_tSDiP = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2CheckBox_wkGGF = ref();
const formData = reactive({
});
const queryFormData = reactive({
  promotionName: 'XE ĐẸP QUÀ SANG - RỘN RÀNG ĐÓN TẾT', dateFrom: '', dateTo: '',
});
const rules = reactive({
  viy2DateTimePicker_gSgHmRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_QQvs2PRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const gridRules = {
  dealerCode: [
    { required: true, message: 'name required' },
  ],
  dealerName: [
    { required: true, message: 'name required' },
  ],
  frameNo: [
    { required: true, message: 'name required' },
  ],
};
const gridEditConfig = reactive({
  trigger: 'click',
});
const viy2CheckBox_wkGGFOpts = [
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
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      dealerCode: '2859',
      dealerName: 'LUAN HUYNH',
      pointCode: '2859A',
      pointName: 'LUAN HUYNH',
      modelCode: 'BFM400010C',
      modelName: 'NEOS-BFM4',
      frameNo: 'RLCSY1420PY001031',
      flag: 'Y',
      rejectReason: '',
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
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2Button_vzg6qClick = () => {
  debugger;
};
const viy2Button_vznigClick = () => {
  debugger;
};
const viy2Button_5hElpbClick = () => {
  const current = queryFormData.periodDateFrom ? queryFormData.periodDateFrom : currentDate;
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
const viy2Button_gTn0yClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = new Date();
};
const gridDealerCodeEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridDealerNameEditRender = computed(() => {
  return {
    enabled: true,
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
const gridFrameNoEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridCopy0_viy2TableTemplateColumn_1OU8FEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridRejectReasonEditRender = computed(() => {
  return {
    enabled: false,
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
        <VueButton id="viy2Button_ab3PDC" ref="viy2Button_ab3PDC" icon-position="left" @click="viy2Button_ab3PDCClick">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" @click="viy2Button_5FbWKcClick">
          Import big data
        </VueButton>
        <VueButton id="viy2Button_vzg6q" ref="viy2Button_vzg6q" icon-position="left" @click="viy2Button_vzg6qClick">
          Execute ETL
        </VueButton>
        <VueButton id="viy2Button_vznig" ref="viy2Button_vznig" icon-position="left" type="info" :disabled="true" @click="viy2Button_vznigClick">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      label-width="80px"
      class="margin-top-div except-height-css"
      :model="queryFormData"
    >
      <VuePanel id="viy2Panel_6IAt5Y" ref="viy2Panel_6IAt5Y" title="Condition" :collapse="true">
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
              label="Promotion Name"
              label-width="120px"
              prop="promotionName"
            >
              <VueInput
                id="viy2InputBox_gOpti"
                ref="viy2InputBox_gOpti"
                v-model="queryFormData.promotionName"
                :clearable="true"
                :disabled="true"
                :readonly="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="Period"
              prop="dateFrom"
              :rules="rules.viy2DateTimePicker_gSgHmRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_gSgHm"
                ref="viy2DateTimePicker_gSgHm"
                v-model="queryFormData.dateFrom"
                type="date"
                :disabled="true"
                :readonly="true"
                class="no-border"
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
              :rules="rules.viy2DateTimePicker_QQvs2PRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_QQvs2P"
                ref="viy2DateTimePicker_QQvs2P"
                v-model="queryFormData.dateTo"
                type="date"
                :disabled="true"
                :readonly="true"
                class="no-border"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueButton id="viy2Button_5hElpb" ref="viy2Button_5hElpb" icon-position="left" :disabled="true" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_5hElpbClick" />
            <VueButton id="viy2Button_gTn0y" ref="viy2Button_gTn0y" icon-position="left" :disabled="true" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_gTn0yClick" />
          </VueCol>
        </VueRow>
      </VuePanel>
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
      <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" :height="gridHeight - 30" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig">
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
          :edit-render="gridDealerCodeEditRender"
          field="dealerCode"
          show-overflow="tooltip"
          title="Dealer Code"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridDealerNameEditRender"
          field="dealerName"
          show-overflow="tooltip"
          title="Dealer Name"
          min-width="140px"
        />
        <VueInputColumn
          :edit-render="gridPointCodeEditRender"
          field="pointCode"
          show-overflow="tooltip"
          title="Point Code"
          width="100px"
        />
        <VueInputColumn
          :edit-render="gridPointNameEditRender"
          field="pointName"
          show-overflow="tooltip"
          title="Point Name"
          min-width="150px"
        />
        <VueInputColumn
          :edit-render="gridModelCodeEditRender"
          field="modelCode"
          show-overflow="tooltip"
          title="Model Code"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridModelNameEditRender"
          field="modelName"
          show-overflow="tooltip"
          title="Model Name"
          min-width="120px"
        />
        <VueInputColumn
          :edit-render="gridFrameNoEditRender"
          field="frameNo"
          show-overflow="tooltip"
          title="Frame No."
          min-width="150px"
        />
        <VueTemplateColumn
          :edit-render="gridCopy0_viy2TableTemplateColumn_1OU8FEditRender"
          align="center"
          title="Stock MC Flag"
          width="120px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_wkGGF"
              ref="viy2CheckBox_wkGGF"
              v-model="scope.row.flag"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueInputColumn
          :edit-render="gridRejectReasonEditRender"
          field="rejectReason"
          show-overflow="tooltip"
          title="Error Info"
          min-width="180px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
