<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { useRouter } from 'vue-router';
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
  name: 'miq0203_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_52nvuE = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2InputBox_2PSpG4 = ref();
const viy2Select_2PSpGk = ref();
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
  targetYear: '', type: '',
});
const filterFormData = reactive({
  mobilePhone: '', consumer: '', batteryId: '',
});
const rules = reactive({
  viy2InputBox_2PSpG4Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Select_2PSpGkOpts = reactive([
  {
    label:
'2S Sales Lead',
    value:
'2S Sales Lead',
  },
  {
    label:
'Holiday',
    value:
'Holiday',
  },
  {
    label:
'Option 3',
    value:
'Option 3',
  },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      soldDate: '20240201',
      frameNo: 'SO2402A000001',
      orderStatus: 'ZZ. Completed',
      consumer: ' Test Nha Trang',
      noPlate: '1112222',
      model: '2NDC00010B',
      modelNm: 'EXCITER-2NDC RC',
      model: '2NDC00010B EXCITER-2NDC RC abcdefghicklmn',
      colorNm: 'Trắng-Đỏ-Đen',
      ctg: 'Bảo trì miễn phí',
      demand: 'Phiếu số 1',
      pic: 'SYSTEM ADMINSD',
      mechanic: 'SYSTEM ADMINSD',
      amt: 11111,
      partsAmt: 732121,
      brandCd: 'YAMAHA',
      pointNm: 'YAMAHA',
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
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2Button_52nvuEClick = () => {
  debugger;
};
const gridVotingTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonthEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProjectEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCommentEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTimeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRatioEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
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
        <VueButton id="viy2Button_52nvuE" ref="viy2Button_52nvuE" icon-position="left" type="info" @click="viy2Button_52nvuEClick">
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
            label="Target Year"
            prop="targetYear"
            :rules="rules.viy2InputBox_2PSpG4Rules"
          >
            <VueInput
              id="viy2InputBox_2PSpG4"
              ref="viy2InputBox_2PSpG4"
              v-model="queryFormData.targetYear"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Type"
            prop="type"
          >
            <VueSelect
              id="viy2Select_2PSpGk"
              ref="viy2Select_2PSpGk"
              v-model="queryFormData.type"
              :style="{ width: '200px' }"
              :options="viy2Select_2PSpGkOpts"
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
        <VueInputColumn
          :edit-render="gridVotingTypeEditRender"
          field="VotingType"
          aggregate="sum"
          show-overflow="tooltip"
          title="Loại phiếu"
          width="130px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="gridMonthEditRender"
          field="month"
          title="Tháng"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridProjectEditRender"
          field="project"
          title="Mục"
          width="150px"
        />
        <VueNumberColumn
          :edit-render="gridCommentEditRender"
          field="comment"
          title="Đánh giá"
          width="130px"
          header-align="center"
        />
        <VueNumberColumn
          :edit-render="gridTimeEditRender"
          field="time"
          title="Lần"
          width="130px"
          header-align="center"
        />
        <VueInputColumn
          :edit-render="gridRatioEditRender"
          field="ratio"
          align="left"
          title="Tỷ lệ"
          width="120px"
          header-align="center"
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
