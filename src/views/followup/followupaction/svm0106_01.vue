<script setup>
import { IconCloseBold, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const { proxy } = getCurrentInstance();
const currentDate = new Date();
// 获取当前月份的第一天
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDay = new Date(nextMonth - 1);
defineOptions({
  name: 'svm0106_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_3v8K26 = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_hrzSYn = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_3tz1Vd = ref();
const viy2Button_3tz1Vp = ref();
const viy2Select_RkdQK0 = ref();
const viy2ValueList_12gOt12 = ref();
const viy2Row_3tzDMt = ref();
const viy2Button_3tzDMv = ref();
const viy2InputBox_hwbhC8 = ref();
const viy2InputBox_8gVFUg = ref();
const viy2CheckBox_h9qeH = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_5E8eU = ref();
const viy2Button_2KmD0C = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2CheckBox_3uceY3 = ref();
const viy2CheckBox_3ucoKv = ref();
const formData = reactive({
});
const queryFormData = reactive({
  remindDate: '', pointvl: 'YT350 Yamaha Town Nha Trang_DO 10', remindType: '', model: '', noPlate: '', frameNo: '', showReminded: false,
});
const rules = reactive({
  viy2DateTimePicker_hrzSYnRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2ValueList_12gOt1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Select_RkdQK0Opts = reactive([
  {
    label:
'2S Sales Lead',
    value:
'2S Sales Lead',
  },
  {
    label:
'Bảo trì định kỳ',
    value:
'Bảo trì định kỳ',
  },
  {
    label:
'Holiday',
    value:
'Holiday',
  },
  {
    label:
'MC Lead 1st Reminder',
    value:
'MC Lead 1st Reminder',
  },
  {
    label:
'MC Lead 2st Reminder',
    value:
'MC Lead 2st Reminder',
  },
  {
    label:
'Theo dõi bán hàng',
    value:
'Theo dõi bán hàng',
  },
  {
    label:
'Theo dõi dịch vụ',
    value:
'Theo dõi dịch vụ',
  },
]);
const viy2CheckBox_h9qeHOpts = [
  {
    label:
'Option',
    value:
'Option',
  },
];
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_3uceY3Opts = [
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
const viy2CheckBox_3ucoKvOpts = [
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
      refuseCall: 'N',
      remindFlag: 'N',
      type: 'Theo dõi dịch vụ',
      validDate: '20240207',
      invalidDate: '20991231',
      description: 'Sửa chữa,Kiểm tra/ Thay thế nắp đầu xy lanh (trước)',
      consumerNm: 'zhou ye',
      phone: '0977306352',
      model: '1DB100010A',
      noPlate: '15C10B',
      frameNo: 'RLCUT1526NY133000',
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
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2Button_3v8K26Click = () => {
  debugger;
};
const viy2ValueList_12gOt1Select = (params) => {
  queryFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt12Select = (params) => {
  queryFormData.model = `${params.code} ${params.name}`;
};
const gridCopy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy1_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridValidDateEditRender = computed(() => {
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
const gridInvalidDateEditRender = computed(() => {
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
const gridConsumerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPhoneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridNoPlateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDescriptionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const onDelRow = (row) => {
  queryFormData.gridHeight = gridHeight.value;
};
const viewDetail = (row) => {
  router.push('/REF/SAMPLE/DX03');
};
// consumer侧边栏选择后
const callbkSelectConsumer = (param) => {
  filterFormData.consumer = param.name;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
};
queryFormData.remindDate = new Date();
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
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" @click="viy2Button_5FbWKcClick">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_3v8K26" ref="viy2Button_3v8K26" icon-position="left" type="info" @click="viy2Button_3v8K26Click">
          Retrieve
        </VueButton>
      </VueCol>
    </VueRow>
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
            label="Remind Date"
            label-width="110px"
            prop="remindDate"
            :rules="rules.viy2DateTimePicker_hrzSYnRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_hrzSYn"
              ref="viy2DateTimePicker_hrzSYn"
              v-model="queryFormData.remindDate"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueFormItem
            label="Point"
            prop="pointvl"
            :rules="rules.viy2ValueList_12gOt1Rules"
          >
            <VueValueList
              id="viy2ValueList_12gOt1"
              ref="viy2ValueList_12gOt1"
              :use-common-popover="true"
              v-model="queryFormData.pointvl"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              width="250px"
              @select="viy2ValueList_12gOt1Select"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_3tz1Vd"
                  ref="viy2Row_3tz1Vd"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_3tz1Ve" ref="viy2Text_3tz1Ve" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_3tz1Vp" ref="viy2Button_3tz1Vp" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Remind Type"
            prop="remindType"
          >
            <VueSelect
              id="viy2Select_RkdQK0"
              ref="viy2Select_RkdQK0"
              v-model="queryFormData.remindType"
              :style="{ width: '150px' }"
              :clearable="true"
              :filterable="true"
              :options="viy2Select_RkdQK0Opts"
            />
          </VueFormItem>
          <VueFormItem
            label="Model"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_12gOt12"
              ref="viy2ValueList_12gOt12"
              v-model="queryFormData.model"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              width="250px"
              @select="viy2ValueList_12gOt12Select"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_3tzDMt"
                  ref="viy2Row_3tzDMt"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_3tzDMu" ref="viy2Text_3tzDMu" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_3tzDMv" ref="viy2Button_3tzDMv" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="No. Plate"
            prop="noPlate"
          >
            <VueInput
              id="viy2InputBox_hwbhC8"
              ref="viy2InputBox_hwbhC8"
              v-model="queryFormData.noPlate"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Frame No."
            prop="frameNo"
          >
            <VueInput
              id="viy2InputBox_8gVFUg"
              ref="viy2InputBox_8gVFUg"
              v-model="queryFormData.frameNo"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Show Reminded"
            label-width="130px"
            prop="showReminded"
          >
            <VueCheckbox
              id="viy2CheckBox_h9qeH"
              ref="viy2CheckBox_h9qeH"
              v-model="queryFormData.showReminded"
              true-label="T"
              false-label="N"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Detail">
      <template #header>
        <div style="width: 200px">
          <VueRow
            id="viy2Row_5E8eU"
            ref="viy2Row_5E8eU"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_2KmD0C" ref="viy2Button_2KmD0C" icon-position="left">
                Follow Up
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="grid" ref="grid" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
        <VueTemplateColumn
          :edit-render="gridCopy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          title="Refuse Call"
          width="90px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_3uceY3"
              ref="viy2CheckBox_3uceY3"
              v-model="scope.row.refuseCall"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueTemplateColumn
          :edit-render="gridCopy1_copy0_viy2TableTemplateColumn_liAHZEditRender"
          align="center"
          title="Remind Flag"
          width="100px"
        >
          <template #default="scope">
            <VueCheckbox
              id="viy2CheckBox_3ucoKv"
              ref="viy2CheckBox_3ucoKv"
              v-model="scope.row.remindFlag"
              :disabled="true"
              true-label="Y"
              false-label="N"
            />
          </template>
        </VueTemplateColumn>
        <VueInputColumn
          :edit-render="gridTypeEditRender"
          field="type"
          show-overflow="tooltip"
          title="Remind Type"
          width="120px"
        />
        <VueDateTimeColumn
          :edit-render="gridValidDateEditRender"
          field="validDate"
          align="center"
          title="Valid Date"
          width="100px"
        />
        <VueDateTimeColumn
          :edit-render="gridInvalidDateEditRender"
          field="invalidDate"
          align="center"
          title="Invalid Date"
          width="100px"
        />
        <VueInputColumn
          :edit-render="gridConsumerNmEditRender"
          field="consumerNm"
          show-overflow="tooltip"
          title="Consumer Name"
          width="160px"
        />
        <VueInputColumn
          :edit-render="gridPhoneEditRender"
          field="phone"
          show-overflow="tooltip"
          title="Mobile Phone"
          width="110px"
        />
        <VueInputColumn
          :edit-render="gridModelEditRender"
          field="model"
          show-overflow="tooltip"
          title="Model"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridNoPlateEditRender"
          field="noPlate"
          show-overflow="tooltip"
          title="No. Plate"
          width="100px"
        />
        <VueInputColumn
          :edit-render="gridFrameNoEditRender"
          field="frameNo"
          show-overflow="tooltip"
          title="Frame No."
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridDescriptionEditRender"
          field="description"
          show-overflow="tooltip"
          title="Description"
          min-width="320px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
