<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import valulistWin from '/src/views/REF/SAMPLE/modelInfo.vue';
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
  name: 'svq0106_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_4pO0F0 = ref();
const viy2Button_5FbWKc = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2InputBox_1pMvpE = ref();
const viy2InputBox_4pYVky = ref();
const viy2InputBox_QQvs6e = ref();
const viy2InputBox_4q0GM0 = ref();
const viy2Select_hBG7e8 = ref();
const viy2Panel_MXmeg = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_M0Opx = ref();
const filterpopover = ref();
const filterForm = ref();
const viy2Row_HNs8v = ref();
const viy2InputBox_3K4hbg = ref();
const viy2ValueList_1C7zl2 = ref();
const viy2Row_10xsoa = ref();
const viy2InputBox_62uou = ref();
const viy2Row_3K1VuQ = ref();
const formData = reactive({
});
const queryFormData = reactive({
  model: '', modelNm: '', partNo: '', partNm: '', type: '',
});
const filterFormData = reactive({
  mobilePhone: '', consumer: '', batteryId: '',
});
const rules = reactive({
  viy2InputBox_1pMvpERules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_QQvs6eRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Select_hBG7e8Opts = reactive([
  {
    label:
'Km',
    value:
'Km',
  },
  {
    label:
'Option',
    value:
'Option',
  },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      type: 'km',
      modelCd: '2NDC00010B',
      modelNm: 'EXCITER-2NDC RC',
      partsNo: '5MLE13510100',
      partsNm: 'Gioăng xi lanh',
      value: '15000',
    },
    {
      type: 'Tháng',
      modelCd: '2NDC00010B',
      modelNm: 'EXCITER-2NDC RC',
      partsNo: '5MLE13510100',
      partsNm: 'Gioăng xi lanh',
      value: '61',
    },
  ],
});
const gridDs = gridDsApi.data;
const exportDataApi = useApi({
  method: 'post',
  localData: [
    {
      orderDate: '20240201',
      orderNo: 'SO2402A000001',
      orderId: 'aaaaaa',
      orderStatus: 'ZZ. Completed',
      consumer: ' Test Nha Trang',
      noPlate: '1112222',
      modelCd: '2NDC00010B',
      modelNm: 'EXCITER-2NDC RC',
      model: '2NDC00010B EXCITER-2NDC RC',
      color: 'Trắng-Đỏ-Đen',
      ctg: 'Bảo trì miễn phí',
      demand: 'Phiếu số 1',
      pic: 'SYSTEM ADMINSD',
      mechanic: 'SYSTEM ADMINSD',
    },
  ],
});
const exportData = exportDataApi.data;
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
const viy2Button_4pO0F0Click = () => {
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
const gridTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
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
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridValueEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2ValueList_1C7zl2Select = (value, type) => {
  filterForm.consumer = value.value;
};
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
const onDelRow = (row) => {
  queryFormData.gridHeight = gridHeight.value;
};
const viewDetail = (row) => {
  router.push('/REF/SAMPLE/DX03');
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
        <VueButton id="viy2Button_4pO0F0" ref="viy2Button_4pO0F0" icon-position="left" @click="viy2Button_4pO0F0Click">
          Export
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
      label-suffix=":"
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
            label="Model"
            prop="model"
            :rules="rules.viy2InputBox_1pMvpERules"
          >
            <VueInput
              id="viy2InputBox_1pMvpE"
              ref="viy2InputBox_1pMvpE"
              v-model="queryFormData.model"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Model Name"
            prop="modelNm"
          >
            <VueInput
              id="viy2InputBox_4pYVky"
              ref="viy2InputBox_4pYVky"
              v-model="queryFormData.modelNm"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Part No"
            prop="partNo"
            :rules="rules.viy2InputBox_QQvs6eRules"
          >
            <VueInput
              id="viy2InputBox_QQvs6e"
              ref="viy2InputBox_QQvs6e"
              v-model="queryFormData.partNo"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Part Name"
            prop="partNm"
          >
            <VueInput
              id="viy2InputBox_4q0GM0"
              ref="viy2InputBox_4q0GM0"
              v-model="queryFormData.partNm"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Claim Request Type"
            label-width="140px"
            prop="type"
          >
            <VueSelect
              id="viy2Select_hBG7e8"
              ref="viy2Select_hBG7e8"
              v-model="queryFormData.type"
              :style="{ width: '200px' }"
              :collapse-tags="true"
              :clearable="true"
              :filterable="true"
              :collapse-tags-tooltip="true"
              :options="viy2Select_hBG7e8Opts"
              :props="{
                label: 'label',
                value: 'value',
              }"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Detail" :collapse="true">
      <VueTable id="grid" ref="grid" size="mini" header-align="center" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig">
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
          :edit-render="gridTypeEditRender"
          field="type"
          aggregate="sum"
          show-overflow="tooltip"
          title="Claim Request Type"
          width="140px"
        />
        <VueInputColumn
          :edit-render="gridModelCdEditRender"
          field="modelCd"
          aggregate="sum"
          show-overflow="tooltip"
          title="Model"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridModelNmEditRender"
          field="modelNm"
          aggregate="sum"
          show-overflow="tooltip"
          title="Model Name"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridPartsNoEditRender"
          field="partsNo"
          aggregate="sum"
          show-overflow="tooltip"
          title="Parts No."
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridPartsNmEditRender"
          field="partsNm"
          show-overflow="tooltip"
          title="Parts Name"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridValueEditRender"
          field="value"
          show-overflow="tooltip"
          title="Claim Request Value"
          width="140px"
        />
      </VueTable>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        class="except-height-css"
      >
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 17 }"
        />
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 7 }"
        />
      </VueRow>
    </VuePanel>
    <VuePopover
      id="filterpopover"
      ref="filterpopover"
      trigger="click"
      title="Filter Condition"
      width="700px"
      popper-class="screen-popover"
      :virtual-ref="filterBtn"
    >
      <VueForm
        id="filterForm"
        ref="filterForm"
        label-width="120px"
        label-suffix=":"
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
              label="Mobile Phone"
              prop="mobilePhone"
            >
              <VueInput
                id="viy2InputBox_3K4hbg"
                ref="viy2InputBox_3K4hbg"
                v-model="filterFormData.mobilePhone"
                :style="{ width: '185px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Consumer"
              prop="consumer"
            >
              <VueValueList
                id="viy2ValueList_1C7zl2"
                ref="viy2ValueList_1C7zl2"
                v-model="filterFormData.consumer"
                :style="{ width: '185px' }"
                :popover-component="valulistWin"
                :popover-teleported="false"
                :use-popover="true"
                :popover-width="500"
                @select="viy2ValueList_1C7zl2Select"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <VueRow
          id="viy2Row_10xsoa"
          ref="viy2Row_10xsoa"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Battery ID"
              prop="batteryId"
            >
              <VueInput
                id="viy2InputBox_62uou"
                ref="viy2InputBox_62uou"
                v-model="filterFormData.batteryId"
                :style="{ width: '185px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <VueRow
          id="viy2Row_3K1VuQ"
          ref="viy2Row_3K1VuQ"
        >
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
          />
        </VueRow>
      </VueForm>
    </VuePopover>
  </VueForm>
</template>
