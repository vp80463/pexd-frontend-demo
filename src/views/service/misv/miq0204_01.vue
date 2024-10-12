<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
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
  name: 'miq0204_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_1rbvzy = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_2PWvSe = ref();
const viy2Select_2PWvSf = ref();
const viy2Panel_MXmeg = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_M0Opx = ref();
const formData = reactive({
});
const queryFormData = reactive({
  targetYear: '', datafieldviy2Select_vR8cm: '',
});
const rules = reactive({
  viy2DateTimePicker_2PWvSeRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Select_2PWvSfOpts = reactive([
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
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      reservationDate: '20240201',
      reservationTime: '',
      reservationNo: 'SO2402A000001',
      orderNo: 'SO2402A000001',
      serviceStatus: 'ZZ. Completed',
      consumer: ' Test Nha Trang',
      noPlate: '1112222',
      modelCd: '2NDC00010B',
      modelNm: 'EXCITER-2NDC RC',
      model: '2NDC00010B EXCITER-2NDC RC abcdefghicklmn',
      mobilePhone: 'Trắng-Đỏ-Đen',
      pic: 'SYSTEM ADMINSD',
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
const viy2Button_1rbvzyClick = () => {
  debugger;
};
const gridVoteTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandOneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestOneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateOneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy3_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandTwoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestTwoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateTwoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy2_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandThreeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestThreeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateThreeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy1_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandFourEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestFourEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateFourEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy0_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandFiveEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestFiveEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateFiveEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy3_copy0_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandSixEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestSixEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateSixEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy2_copy0_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandSevenEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestSevenEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateSevenEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy1_copy0_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandEightEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestEightEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateEightEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy0_copy0_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandNightEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestNightEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateNightEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy1_copy0_copy0_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandTenEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestTenEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateTenEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy0_copy1_copy0_copy0_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandElevenEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestElevenEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateElevenEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy0_copy0_copy0_viy2TableGroupColumn_w7YBZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDemandTweleveEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestTweleveEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRateTweleveEditRender = computed(() => {
  return {
    enabled: false,
  };
});
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
        <VueButton id="viy2Button_1rbvzy" ref="viy2Button_1rbvzy" icon-position="left" type="info" @click="viy2Button_1rbvzyClick">
          Retrieve
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      label-width="120px"
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
            label-width="130px"
            prop="targetYear"
            :rules="rules.viy2DateTimePicker_2PWvSeRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_2PWvSe"
              ref="viy2DateTimePicker_2PWvSe"
              v-model="queryFormData.targetYear"
              :format="CONST_SYSTEM_DATE_FORMAT.ym"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.x"
            />
          </VueFormItem>
          <VueFormItem
            label="Service category"
            prop="datafieldviy2Select_vR8cm"
          >
            <VueSelect
              id="viy2Select_2PWvSf"
              ref="viy2Select_2PWvSf"
              v-model="queryFormData.datafieldviy2Select_vR8cm"
              :style="{ width: '200px' }"
              :options="viy2Select_2PWvSfOpts"
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
          :edit-render="gridVoteTypeEditRender"
          field="voteType"
          title="Loại phiếu"
          width="120px"
        />
        <VueColgroup
          id="viy2TableGroupColumn_w7YBZ"
          ref="viy2TableGroupColumn_w7YBZ"
          title="Tháng 1"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandOneEditRender"
            field="demandOne"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestOneEditRender"
            field="requestOne"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateOneEditRender"
            field="rateOne"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy3_viy2TableGroupColumn_w7YBZ"
          ref="copy3_viy2TableGroupColumn_w7YBZ"
          title="Tháng 2"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandTwoEditRender"
            field="demandTwo"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestTwoEditRender"
            field="requestTwo"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateTwoEditRender"
            field="rateTwo"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy2_viy2TableGroupColumn_w7YBZ"
          ref="copy2_viy2TableGroupColumn_w7YBZ"
          title="Tháng 3"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandThreeEditRender"
            field="demandThree"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestThreeEditRender"
            field="requestThree"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateThreeEditRender"
            field="rateThree"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy1_viy2TableGroupColumn_w7YBZ"
          ref="copy1_viy2TableGroupColumn_w7YBZ"
          title="Tháng 4"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandFourEditRender"
            field="demandFour"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestFourEditRender"
            field="requestFour"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateFourEditRender"
            field="rateFour"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy0_viy2TableGroupColumn_w7YBZ"
          ref="copy0_viy2TableGroupColumn_w7YBZ"
          title="Tháng 5"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandFiveEditRender"
            field="demandFive"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestFiveEditRender"
            field="requestFive"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateFiveEditRender"
            field="rateFive"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy3_copy0_viy2TableGroupColumn_w7YBZ"
          ref="copy3_copy0_viy2TableGroupColumn_w7YBZ"
          title="Tháng 6"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandSixEditRender"
            field="demandSix"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestSixEditRender"
            field="requestSix"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateSixEditRender"
            field="rateSix"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy2_copy0_viy2TableGroupColumn_w7YBZ"
          ref="copy2_copy0_viy2TableGroupColumn_w7YBZ"
          title="Tháng 7"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandSevenEditRender"
            field="demandSeven"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestSevenEditRender"
            field="requestSeven"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateSevenEditRender"
            field="rateSeven"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy1_copy0_viy2TableGroupColumn_w7YBZ"
          ref="copy1_copy0_viy2TableGroupColumn_w7YBZ"
          title="Tháng 8"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandEightEditRender"
            field="demandEight"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestEightEditRender"
            field="requestEight"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateEightEditRender"
            field="rateEight"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy0_copy0_viy2TableGroupColumn_w7YBZ"
          ref="copy0_copy0_viy2TableGroupColumn_w7YBZ"
          title="Tháng 9"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandNightEditRender"
            field="demandNight"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestNightEditRender"
            field="requestNight"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateNightEditRender"
            field="rateNight"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy1_copy0_copy0_viy2TableGroupColumn_w7YBZ"
          ref="copy1_copy0_copy0_viy2TableGroupColumn_w7YBZ"
          title="Tháng 10"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandTenEditRender"
            field="demandTen"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestTenEditRender"
            field="requestTen"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateTenEditRender"
            field="rateTen"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy0_copy1_copy0_copy0_viy2TableGroupColumn_w7YBZ"
          ref="copy0_copy1_copy0_copy0_viy2TableGroupColumn_w7YBZ"
          title="Tháng 11"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandElevenEditRender"
            field="demandEleven"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestElevenEditRender"
            field="requestEleven"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateElevenEditRender"
            field="rateEleven"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
        <VueColgroup
          id="copy0_copy0_copy0_viy2TableGroupColumn_w7YBZ"
          ref="copy0_copy0_copy0_viy2TableGroupColumn_w7YBZ"
          title="Tháng 12"
          width="240px"
        >
          <VueInputColumn
            :edit-render="gridDemandTweleveEditRender"
            field="demandTweleve"
            width="80px"
            title="Nhu cầu"
          />
          <VueInputColumn
            :edit-render="gridRequestTweleveEditRender"
            field="requestTweleve"
            width="80px"
            title="Kết quả"
          />
          <VueInputColumn
            :edit-render="gridRateTweleveEditRender"
            field="rateTweleve"
            width="80px"
            title="Tỉ lệ"
          />
        </VueColgroup>
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
  </VueForm>
</template>
