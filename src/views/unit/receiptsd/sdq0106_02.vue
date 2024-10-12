<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import valulistWin from '/src/views/REF/SAMPLE/modelInfo.vue';
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
  name: 'sdq0106_02',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_4mGqGc = ref();
const queryForm = ref();
const viy2Panel_wL3n9 = ref();
const viy2Row_lOY8w = ref();
const viy2InputBox_878Cbo = ref();
const viy2DateTimePicker_1gwN4 = ref();
const viy2InputBox_1gWnX = ref();
const viy2InputBox_cLLZ2 = ref();
const viy2InputBox_cY0Ve = ref();
const viy2InputBox_87bhvS = ref();
const viy2InputBox_87b8dg = ref();
const viy2DateTimePicker_1kKHd = ref();
const viy2InputBox_87aclQ = ref();
const viy2Panel_MXmeg = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const filterpopover = ref();
const filterForm = ref();
const viy2Row_HNs8v = ref();
const viy2ValueList_1c1Sa = ref();
const viy2ValueList_12G31m = ref();
const formData = reactive({
});
const queryFormData = reactive({
  receiptPoint: 'YT350 Yamaha Town Nha Trang_DO 10', deliveryDate: '20240402', datafieldviy2InputBox_1gWnX: 'Stored', deliveryNoteNo: 'DO2312A000001', type: 'Purchase Receipt', supplier: 'YT350 Yamaha Town Nha Trang_DO 10', fromPoint: '', receiptDate: '', pic: 'ADMINSP SYSTEM ADMINSP',
});
const filterFormData = reactive({
  supplier: 'YT350 Yamaha Town Nha Trang_DO 10', fromPoint: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      'entryPoint': 'Yamaha Town Nha Trang_DO 10',
      'colorNm': 'Trắng',
      'frameNo': 'RLCSE7610HY132729',
      'engineNo': 'E3N4E-154642',
      'frameNo': 'RLCUT1326NY133018',
      'Consumer Name': 'Sales Admin',
      'engineNo': 'RLCN1DB10BY000003',
      'plateNo': 'MIN D CU501',
      'modelCd': '2BM700010D',
      'modelNm': 'Nozza Grande 2BM1 DLX',
    },
  ],
});
const gridDs = gridDsApi.data;
const orderStsDsApi = useApi({
  method: 'post',
  localData: [
    { label: '10. Waiting for Receipt Order', value: '10' },
    { label: '20. Wait for assigning', value: '20' },
    { label: '30. Wait for job start', value: '30' },
    { label: '50. Wait for job continue', value: '50' },
    { label: '60. Wait for settle', value: '60' },
    { label: '70. Wait for cashier', value: '70' },
    { label: 'ZZ. Completed', value: 'ZZ' },
  ],
});
const orderStsDs = orderStsDsApi.data;
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
const viy2Button_4mGqGcClick = () => {
  VueMessageBox.confirm('Are you sure to reset this page?')
    .then(() => {
      const filterFormElement = orderForm.value;
      if (filterFormElement && filterFormElement.resetFields) {
        filterFormElement.resetFields();
      }
    }).catch(() => {
    });
};
const gridModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridColorNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEngineNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBatteryIdOneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBatteryIdTwoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2ValueList_1c1SaSelect = (value, type) => {
  queryFormData.supplier = `${value.code} ${value.name}`;
};
const viy2ValueList_12G31mSelect = (value, type) => {
  queryFormData.fromPoint = `${value.code} ${value.name}`;
};
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
queryFormData.receiptDate = new Date();
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
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
          Back
        </VueButton>
        <VueButton id="viy2Button_4mGqGc" ref="viy2Button_4mGqGc" icon-position="left" @click="viy2Button_4mGqGcClick">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      />
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      label-width="120px"
      class="margin-top-div0 except-height-css"
      :model="queryFormData"
    >
      <VuePanel id="viy2Panel_wL3n9" ref="viy2Panel_wL3n9" title="Condition" :collapse="true">
        <VueRow
          id="viy2Row_lOY8w"
          ref="viy2Row_lOY8w"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Receipt Point"
              prop="receiptPoint"
            >
              <VueInput
                id="viy2InputBox_878Cbo"
                ref="viy2InputBox_878Cbo"
                v-model="queryFormData.receiptPoint"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Delivery Date"
              prop="deliveryDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1gwN4"
                ref="viy2DateTimePicker_1gwN4"
                v-model="queryFormData.deliveryDate"
                :readonly="true"
                class="no-border"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Receipt Status"
              prop="datafieldviy2InputBox_1gWnX"
            >
              <VueInput
                id="viy2InputBox_1gWnX"
                ref="viy2InputBox_1gWnX"
                v-model="queryFormData.datafieldviy2InputBox_1gWnX"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Delivery Note No. "
              label-width="130px"
              prop="deliveryNoteNo"
            >
              <VueInput
                id="viy2InputBox_cLLZ2"
                ref="viy2InputBox_cLLZ2"
                v-model="queryFormData.deliveryNoteNo"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Transaction Type"
              prop="type"
            >
              <VueInput
                id="viy2InputBox_cY0Ve"
                ref="viy2InputBox_cY0Ve"
                v-model="queryFormData.type"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Supplier"
              prop="supplier"
            >
              <VueInput
                id="viy2InputBox_87bhvS"
                ref="viy2InputBox_87bhvS"
                v-model="queryFormData.supplier"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="From Point"
              prop="fromPoint"
            >
              <VueInput
                id="viy2InputBox_87b8dg"
                ref="viy2InputBox_87b8dg"
                v-model="queryFormData.fromPoint"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Receipt Date"
              prop="receiptDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1kKHd"
                ref="viy2DateTimePicker_1kKHd"
                v-model="queryFormData.receiptDate"
                :readonly="true"
                type="date"
                class="no-border"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="P.I.C"
              prop="pic"
            >
              <VueInput
                id="viy2InputBox_87aclQ"
                ref="viy2InputBox_87aclQ"
                v-model="queryFormData.pic"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Motorcycle Detail" :collapse="true">
      <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig">
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
          width="50px"
          min-width="50px"
        />
        <VueInputColumn
          :edit-render="gridModelCdEditRender"
          field="modelCd"
          show-overflow="tooltip"
          title="Model Code"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridModelNmEditRender"
          field="modelNm"
          show-overflow="tooltip"
          title="Model Name"
          min-width="150px"
        />
        <VueInputColumn
          :edit-render="gridColorNmEditRender"
          field="colorNm"
          show-overflow="tooltip"
          title="Color Name"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridFrameNoEditRender"
          field="frameNo"
          show-overflow="tooltip"
          title="Frame No."
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridEngineNoEditRender"
          field="engineNo"
          show-overflow="tooltip"
          title="Engine No."
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridBatteryIdOneEditRender"
          field="batteryIdOne"
          show-overflow="tooltip"
          title="Battery ID 1 "
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridBatteryIdTwoEditRender"
          field="batteryIdTwo"
          show-overflow="tooltip"
          title="Battery ID 2"
          width="130px"
        />
      </VueTable>
    </VuePanel>
    <VuePopover
      id="filterpopover"
      ref="filterpopover"
      trigger="click"
      width="700px"
      popper-class="screen-popover"
      :virtual-ref="filterBtn"
    >
      <VueForm
        id="filterForm"
        ref="filterForm"
        label-width="130px"
        :model="filterFormData"
      >
        <VueRow
          id="viy2Row_HNs8v"
          ref="viy2Row_HNs8v"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Supplier"
              prop="supplier"
            >
              <VueValueList
                id="viy2ValueList_1c1Sa"
                ref="viy2ValueList_1c1Sa"
                v-model="filterFormData.supplier"
                :popover-component="valulistWin"
                :use-popover="true"
                :popover-width="500"
                @select="viy2ValueList_1c1SaSelect"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="From Point"
              prop="fromPoint"
            >
              <VueValueList
                id="viy2ValueList_12G31m"
                ref="viy2ValueList_12G31m"
                v-model="filterFormData.fromPoint"
                :popover-component="valulistWin"
                :use-popover="true"
                :popover-width="500"
                @select="viy2ValueList_12G31mSelect"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          />
        </VueRow>
      </VueForm>
    </VuePopover>
  </VueForm>
</template>
