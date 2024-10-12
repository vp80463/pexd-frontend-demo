<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
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
  name: 'sdm0301_03',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_ab3W9O = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Panel_2rs6nZ = ref();
const viy2Form_aekkzV = ref();
const viy2Row_aekkzW = ref();
const viy2InputBox_ab8Q86 = ref();
const viy2InputBox_aekkAc = ref();
const viy2InputBox_aenbMG = ref();
const viy2InputBox_aemVOQ = ref();
const viy2InputBox_afzxxG = ref();
const viy2DateTimePicker_5hElpd = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_tSDiP = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const viy2Form_aekkzVData = reactive({
  consumer: 'YT350 Yamaha Town Nha Trang_DO 10', orderNo: 'SO2403A000023', dealer: '2186 Toan Sen', conslgnee: '2186A Toan Sen', deliveryPoint: 'YT350 Yamaha Town Nha Trang_DO 10', orderDate: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      modelCd: '1DB100010A',
      modelNm: 'Nouvo SX STD 1DB1',
      colorName: 'Đen',
      qty: 1,
      deliveryDate: new Date(),
      allocatedQty: 0,
      cancelledQty: 0,
    },
  ],
});
const gridDs = gridDsApi.data;
const viy2Button_ab3W9OClick = () => {
  debugger;
};
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
const gridColorNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridDeliveryDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'YYYYMMDD',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCancelledQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridShipQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
});
viy2Form_aekkzVData.orderDate = new Date();
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
        <VueButton id="viy2Button_ab3W9O" ref="viy2Button_ab3W9O" icon-position="left" @click="viy2Button_ab3W9OClick">
          Back
        </VueButton>
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
          Print
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" title="Header" class="margin-top-div except-height-css">
      <VueForm
        id="viy2Form_aekkzV"
        ref="viy2Form_aekkzV"
        label-width="130px"
        :model="viy2Form_aekkzVData"
      >
        <VueRow
          id="viy2Row_aekkzW"
          ref="viy2Row_aekkzW"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Entry Point"
              prop="consumer"
            >
              <VueInput
                id="viy2InputBox_ab8Q86"
                ref="viy2InputBox_ab8Q86"
                v-model="viy2Form_aekkzVData.consumer"
                :clearable="true"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Order No."
              prop="orderNo"
            >
              <VueInput
                id="viy2InputBox_aekkAc"
                ref="viy2InputBox_aekkAc"
                v-model="viy2Form_aekkzVData.orderNo"
                :disabled="true"
                :readonly="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Dealer"
              prop="dealer"
            >
              <VueInput
                id="viy2InputBox_aenbMG"
                ref="viy2InputBox_aenbMG"
                v-model="viy2Form_aekkzVData.dealer"
                :clearable="true"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Conslgnee"
              prop="conslgnee"
            >
              <VueInput
                id="viy2InputBox_aemVOQ"
                ref="viy2InputBox_aemVOQ"
                v-model="viy2Form_aekkzVData.conslgnee"
                :clearable="true"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Delivery Point"
              prop="deliveryPoint"
            >
              <VueInput
                id="viy2InputBox_afzxxG"
                ref="viy2InputBox_afzxxG"
                v-model="viy2Form_aekkzVData.deliveryPoint"
                :clearable="true"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="OrderDate"
              prop="orderDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_5hElpd"
                ref="viy2DateTimePicker_5hElpd"
                v-model="viy2Form_aekkzVData.orderDate"
                type="date"
                :disabled="true"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Detail">
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
      <VueTable id="grid" ref="grid" header-align="center" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig">
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
          :edit-render="gridModelCdEditRender"
          field="modelCd"
          show-overflow="tooltip"
          title="Model Code"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridModelNmEditRender"
          field="modelNm"
          show-overflow="tooltip"
          title="Model Name"
          width="200px"
        />
        <VueInputColumn
          :edit-render="gridColorNameEditRender"
          field="colorName"
          show-overflow="tooltip"
          title="Color Name"
          width="150px"
        />
        <VueNumberColumn
          :edit-render="gridQtyEditRender"
          field="qty"
          align="right"
          title="Qty"
          width="130px"
        />
        <VueDateTimeColumn
          :edit-render="gridDeliveryDateEditRender"
          field="deliveryDate"
          align="center"
          title="Delivery Date"
          width="120px"
        />
        <VueNumberColumn
          :edit-render="gridAllocatedQtyEditRender"
          field="allocatedQty"
          align="right"
          title="Allocated Qty"
          width="130px"
        />
        <VueNumberColumn
          :edit-render="gridCancelledQtyEditRender"
          field="cancelledQty"
          align="right"
          title="Cancelled Qty"
          width="130px"
        />
        <VueNumberColumn
          :edit-render="gridShipQtyEditRender"
          field="shipQty"
          align="right"
          title="Shipped Qty"
          width="130px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
