<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const currentMonth = dayjs().format('YYYYMM');
const exportFlag = ref(true);
defineOptions({
  name: 'spq0504_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5heur2 = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_SpzWQ = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_K8SSM = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_SpAcO = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetMonth: '', pointId: '',
});
const rules = reactive({
  viy2DateTimePicker_K8SSMRules: [
    {
      required: true,
      message: t('errors.required', [t('label.targetMonth')]),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const findWhListApi = useApi({
  url: '/parts/spq0504/findWhList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      exportFlag.value = false;
    }
  },
  manual: true,
});
const findWhList = findWhListApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const exportDsApi = useApi({
  url: '/parts/spq0504/doDownload.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SPQ0504_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    findWhListApi.runAsync();
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      findWhListApi.runAsync();
    }
  });
};
const viy2Select_1rPSyEHChange = (value, data) => {
  queryFormData.pointCd = data.code;
};
const gridTargetDayEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridFacilityCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFacilityNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReceiveLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridStoredLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPickingSoLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridShipmentLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTransferLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAdjustLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridStocktakingLineEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
// 初始化targetMonth 和 point
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.targetMonth = currentMonth;
});
// 条件改变，清空明细
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.targetMonth = currentMonth;
};
const resetTblResults = () => {
  findWhList.value.splice(0);
  exportFlag.value = true;
};
queryFormData.targetMonth = new Date();
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
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_SpzWQ"
      ref="viy2Flex_SpzWQ"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_lOY8w"
          ref="viy2Row_lOY8w"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.targetMonth')"
              label-width="130px"
              prop="targetMonth"
              :rules="rules.viy2DateTimePicker_K8SSMRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_K8SSM"
                ref="viy2DateTimePicker_K8SSM"
                v-model="queryFormData.targetMonth"
                type="month"
                :style="{ width: '110px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ym"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ym"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.point')"
              prop="pointId"
            >
              <VueSelect
                id="viy2Select_1rPSyEH"
                ref="viy2Select_1rPSyEH"
                v-model="queryFormData.pointId"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_1rPSyEHChange"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_SpAcO"
        ref="viy2Flex_SpAcO"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="findWhList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            header-align="center"
          />
          <VueDateTimeColumn
            :edit-render="gridTargetDayEditRender"
            field="targetDay"
            align="center"
            :sortable="true"
            :title="t('label.date')"
            width="110px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridFacilityCdEditRender"
            field="facilityCd"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.pointCode')"
            width="120px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridFacilityNmEditRender"
            field="facilityNm"
            show-overflow="tooltip"
            :sortable="true"
            aggregate-label="Total"
            :title="t('label.pointName')"
            header-align="center"
            min-width="200px"
          />
          <VueNumberColumn
            :edit-render="gridReceiveLineEditRender"
            field="receiveLine"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="130px"
            :title="t('label.receiptLines')"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridStoredLineEditRender"
            field="storedLine"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="120px"
            :title="t('label.storedLines')"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridPickingSoLineEditRender"
            field="pickingSoLine"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="120px"
            :title="t('label.pickingLines')"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridShipmentLineEditRender"
            field="shipmentLine"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="160px"
            :title="t('label.shipmentLine')"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridTransferLineEditRender"
            field="transferLine"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="150px"
            :title="t('label.transferLines')"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridAdjustLineEditRender"
            field="adjustLine"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="140px"
            :title="t('label.adjustLines')"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridStocktakingLineEditRender"
            field="stocktakingLine"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="150px"
            :title="t('label.stocktakingLines')"
            header-align="center"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
