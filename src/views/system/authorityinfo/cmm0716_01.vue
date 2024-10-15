<script setup>
import { IconArrowLeftBold, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
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
  name: 'cmm0716_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_hrzSYn = ref();
const viy2DateTimePicker_hrzT01 = ref();
const viy2Button_hrzT02 = ref();
const viy2Button_hrzT03 = ref();
const viy2Radio_h96kC = ref();
const viy2CheckBox_h9qeH = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_5E8eU = ref();
const viy2Button_2KmD0C = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', status: 'Error', type: ['Invoice'],
});
const rules = reactive({
  viy2DateTimePicker_hrzSYnRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Radio_h96kCOpts = reactive([
  { value: 'Error', label: 'Error' },
  { value: 'Success', label: 'Success' },
  { value: 'Waiting Send', label: 'Waiting Send' },
]);
const viy2CheckBox_h9qeHOpts = [
  {
    label:
'Invoice',
    value:
'Invoice',
  },
  {
    label:
'Tax Authority',
    value:
'Tax Authority',
  },
];
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      date: '20240412',
      type: 'Invoice',
      interfaceType: 'E-invoice Parts sales',
      orderNo: 'SO2404A000048',
      invoiceNo: 'IV2404000023',
      status: 'Error',
      returnMessage: 'ERR:5_Không thể phát hành hóa đơn',
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
const viy2Button_hrzT02Click = () => {
  const current = queryFormData.dateFrom ? queryFormData.dateFrom : currentDate;
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
const viy2Button_hrzT03Click = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const gridDateEditRender = computed(() => {
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
const gridTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInterfaceTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReturnMessageEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
    queryFormData.dateFrom = firstDay;
    queryFormData.dateTo = lastDay;
  });
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
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
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
            label="Date"
            prop="dateFrom"
            :rules="rules.viy2DateTimePicker_hrzSYnRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_hrzSYn"
              ref="viy2DateTimePicker_hrzSYn"
              v-model="queryFormData.dateFrom"
              type="date"
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
          >
            <VueDatePicker
              id="viy2DateTimePicker_hrzT01"
              ref="viy2DateTimePicker_hrzT01"
              v-model="queryFormData.dateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_hrzT02" ref="viy2Button_hrzT02" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hrzT02Click" />
          <VueButton id="viy2Button_hrzT03" ref="viy2Button_hrzT03" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hrzT03Click" />
          <VueFormItem
            label="Status"
            prop="status"
          >
            <VueRadioGroup
              id="viy2Radio_h96kC"
              ref="viy2Radio_h96kC"
              v-model="queryFormData.status"
            >
              <VueRadio
                v-for="option in viy2Radio_h96kCOpts"
                :key="option.value"
                :label="option.value"
              >
                {{ option.label }}
              </VueRadio>
            </VueRadioGroup>
          </VueFormItem>
          <VueFormItem
            label="Type"
            prop="type"
          >
            <VueCheckboxGroup
              id="viy2CheckBox_h9qeH"
              ref="viy2CheckBox_h9qeH"
              v-model="queryFormData.type"
            >
              <VueCheckbox
                v-for="option in viy2CheckBox_h9qeHOpts"
                :key="option.value"
                :label="option.value"
                :name="option.name"
                :disabled="option.disabled"
              >
                {{ option.label }}
              </VueCheckbox>
            </VueCheckboxGroup>
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
                ReSend
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="grid" ref="grid" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig">
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
        <VueDateTimeColumn
          :edit-render="gridDateEditRender"
          field="date"
          align="center"
          title="Date"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridTypeEditRender"
          field="type"
          show-overflow="tooltip"
          title="Type"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridInterfaceTypeEditRender"
          field="interfaceType"
          show-overflow="tooltip"
          title="Interface Type"
          width="200px"
        />
        <VueInputColumn
          :edit-render="gridOrderNoEditRender"
          field="orderNo"
          show-overflow="tooltip"
          title="Order No."
          width="160px"
        />
        <VueInputColumn
          :edit-render="gridInvoiceNoEditRender"
          field="invoiceNo"
          show-overflow="tooltip"
          title="Invoice No."
          width="160px"
        />
        <VueInputColumn
          :edit-render="gridStatusEditRender"
          field="status"
          show-overflow="tooltip"
          title="Status"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridReturnMessageEditRender"
          field="returnMessage"
          show-overflow="tooltip"
          title="Return Message"
          min-width="250px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
