<script setup>
import { IconArrowLeftBold, IconEdit, IconPrinter, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const dateFrom = dayjs().subtract(1, 'month').format('YYYYMMDD');
const dateTo = dayjs().format('YYYYMMDD');
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
// var checked = ['S090WAITCONFIRM'];
const detailMdl = ref(true);
defineOptions({
  name: 'svm0201_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_Rcg0A = ref();
const queryForm = ref();
const viy2Row_8A0BXm = ref();
const viy2Select_8A0BXx = ref();
const viy2Select_8A0BY8 = ref();
const viy2InputBox_1nO67L5 = ref();
const viy2DateTimePicker_1nO67MK = ref();
const viy2DateTimePicker_1nO67Oo = ref();
const viy2Button_1nO67Op = ref();
const viy2Button_1nO67Q2 = ref();
const viy2CheckBox_S6Ibi = ref();
const viy2CheckBox_1nO67Q3 = ref();
const viy2Flex_RcgRW = ref();
const viy2Panel_8A13i2 = ref();
const viy2Row_8A13ie = ref();
const viy2Button_8A13ip = ref();
const grid = ref();
const viy2Row_8A13iC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', requestCategoryId: '', serviceOrderNo: '', dateFrom: '', dateTo: '', allFlag: 'Y', requestStatus: ['All'],
});
const rules = reactive({
  viy2Select_8A0BXxRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const viy2CheckBox_S6IbiOpts = [
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
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_odGQQButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      title: 'Detail',
    },
    {
      label: '',
      type: 'text',
      icon: IconPrinter,
      title: 'Print Claim Tag',
    },
  ];
};
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const svCategoryDsApi = useApi({
  url: '/common/helper/getSvCategoryList.json',
  method: 'post',
  data: {
    arg0: '',
  },
});
const svCategoryDs = svCategoryDsApi.data;
const gridDsApi = useApi({
  url: '/service/svm0201/retrieve.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S026'],
}, {
  initialData: {
    S026: [],
  },
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid, fields) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Button_1nO67OpClick = () => {
  if (!isNoValue(queryFormData.dateFrom)) {
    queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  }
  if (!isNoValue(queryFormData.dateTo)) {
    queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  }
};
const viy2Button_1nO67Q2Click = () => {
  queryFormData.dateFrom = dateFrom;
  queryFormData.dateTo = dateTo;
};
const viy2Button_8A13ipClick = () => {
  showConsumerWin.value = true;
};
const gridPolicyTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestDateEditRender = computed(() => {
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
const gridRequestNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDisplayCategoryEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFactoryReceiptNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridServiceOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCampaignNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBulletinNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPlateNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  queryFormData.dateFrom = dateFrom;
  queryFormData.dateTo = dateTo;
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  queryFormData.dateFrom = dateFrom;
  queryFormData.dateTo = dateTo;
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
};
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
      id="viy2Flex_Rcg0A"
      ref="viy2Flex_Rcg0A"
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
          id="viy2Row_8A0BXm"
          ref="viy2Row_8A0BXm"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.point')"
              label-width="130px"
              prop="pointId"
              :rules="rules.viy2Select_8A0BXxRules"
            >
              <VueSelect
                id="viy2Select_8A0BXx"
                ref="viy2Select_8A0BXx"
                v-model="queryFormData.pointId"
                :style="{ width: '210px' }"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.requestCategory')"
              label-width="130px"
              prop="requestCategoryId"
            >
              <VueSelect
                id="viy2Select_8A0BY8"
                ref="viy2Select_8A0BY8"
                v-model="queryFormData.requestCategoryId"
                :style="{ width: '210px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="svCategoryDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.serviceOrderNo')"
              label-width="130px"
              prop="serviceOrderNo"
            >
              <VueInput
                id="viy2InputBox_1nO67L5"
                ref="viy2InputBox_1nO67L5"
                v-model="queryFormData.serviceOrderNo"
                :clearable="true"
                :style="{ width: '210px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.requestDate')"
              label-width="130px"
              prop="dateFrom"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1nO67MK"
                ref="viy2DateTimePicker_1nO67MK"
                v-model="queryFormData.dateFrom"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
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
                id="viy2DateTimePicker_1nO67Oo"
                ref="viy2DateTimePicker_1nO67Oo"
                v-model="queryFormData.dateTo"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueButton id="viy2Button_1nO67Op" ref="viy2Button_1nO67Op" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1nO67OpClick" />
            <VueButton id="viy2Button_1nO67Q2" ref="viy2Button_1nO67Q2" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_1nO67Q2Click" />
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.requestStatus')"
              label-width="13opx"
              prop="allFlag"
            >
              <VueCheckbox
                id="viy2CheckBox_S6Ibi"
                ref="viy2CheckBox_S6Ibi"
                v-model="queryFormData.allFlag"
                true-label="Y"
                false-label="N"
              >
                {{ t('label.all') }}
              </VueCheckbox>
            </VueFormItem>
            <VueFormItem
              label-width="30px"
              prop="requestStatus"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_1nO67Q3"
                ref="viy2CheckBox_1nO67Q3"
                v-model="queryFormData.requestStatus"
                split-size="default"
              >
                <VueCheckbox
                  v-for="option in mstCodeInfoDs.S026"
                  :key="option.codeDbid"
                  :label="option.codeDbid"
                  :name="option.name"
                  :disabled="option.disabled"
                >
                  {{ option.codeData1 }}
                </VueCheckbox>
              </VueCheckboxGroup>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_RcgRW"
        ref="viy2Flex_RcgRW"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_8A13i2" ref="viy2Panel_8A13i2" v-model="detailMdl" :title="t('common.label.detail')" :collapse="true" height="100%">
          <template #header>
            <div style="width: 400px">
              <VueRow
                v-show="detailMdl"
                id="viy2Row_8A13ie"
                ref="viy2Row_8A13ie"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_8A13ip" ref="viy2Button_8A13ip" icon-position="left" type="info" @click="viy2Button_8A13ipClick">
                    {{ t('button.issue') }}
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" size="mini" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueRow
              id="viy2Row_8A13iC"
              ref="viy2Row_8A13iC"
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
            <VueSelectionColumn
              align="center"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueInputColumn
              :edit-render="gridPolicyTypeEditRender"
              field="policyType"
              aggregate="sum"
              show-overflow="tooltip"
              :title="t('label.policyType')"
              width="140px"
              header-align="center"
            />
            <VueDateTimeColumn
              :edit-render="gridRequestDateEditRender"
              field="requestDate"
              align="center"
              :title="t('label.requestDate')"
              width="120px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridRequestNoEditRender"
              field="requestNo"
              aggregate="sum"
              show-overflow="tooltip"
              :title="t('label.requestNo')"
              width="170px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridDisplayCategoryEditRender"
              field="displayCategory"
              aggregate="sum"
              show-overflow="tooltip"
              :title="t('label.category')"
              width="160px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridFactoryReceiptNoEditRender"
              field="factoryReceiptNo"
              aggregate="sum"
              show-overflow="tooltip"
              :title="t('label.factoryReceiptNo')"
              width="170px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridServiceOrderNoEditRender"
              field="serviceOrderNo"
              aggregate="sum"
              show-overflow="tooltip"
              :title="t('label.serviceOrderNo')"
              width="160px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridModelEditRender"
              field="model"
              aggregate="sum"
              show-overflow="tooltip"
              :title="t('label.model')"
              width="160px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridCampaignNoEditRender"
              field="campaignNo"
              aggregate="sum"
              :title="t('label.campaignNo')"
              width="160px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridBulletinNoEditRender"
              field="bulletinNo"
              aggregate="sum"
              :title="t('label.bulletinNo')"
              width="160px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridPlateNoEditRender"
              field="plateNo"
              aggregate="sum"
              :title="t('label.numberPlate')"
              width="140px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridRequestStatusEditRender"
              field="requestStatus"
              aggregate="sum"
              :title="t('label.status')"
              width="140px"
              header-align="center"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="70px"
              :buttons="gridViy2TableButtonColumn_odGQQButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
