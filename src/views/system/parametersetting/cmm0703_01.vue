<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const { proxy } = getCurrentInstance();
const workCalendar = ref({});
const currentDate = new Date();
// 获取当前月份的第一天
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDay = new Date(nextMonth - 1);
defineOptions({
  name: 'cmm0703_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_5EwLTg = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_Ot6L5 = ref();
const viy2Row_xwtag = ref();
const formData = reactive({
});
const queryFormData = reactive({
  yearMonth: '',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      key: 'YMVN_Staff',
      roleNm: 'YMVN_Staff',
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
const viy2Button_5EwLTgClick = () => {
  debugger;
};
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
});
const onDelRow = (row) => {
  queryFormData.gridHeight = gridHeight.value;
};
const handleSelectedDates = (dates) => {
  debugger;
  // 在这里可以处理已勾选的日期列表
  console.log('已勾选的日期列表:', selectedDates);
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
queryFormData.yearMonth = new Date();
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
        <VueButton id="viy2Button_5EwLTg" ref="viy2Button_5EwLTg" icon-position="left" @click="viy2Button_5EwLTgClick">
          Confirm
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
          :md="{ span: 2 }"
        />
        <VueCol
          item-key="item"
          align="center"
          :inline="true"
          :md="{ span: 2 }"
        >
          <VueText id="viy2Text_89Ifeu" ref="viy2Text_89Ifeu" :style="{ width: '100%', display: 'inline-block' }">
            Today
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="center"
          :inline="true"
          :md="{ span: 2 }"
        >
          <VueText id="viy2Text_89OlfU" ref="viy2Text_89OlfU" :style="{ width: '100%', display: 'inline-block' }">
            Work Day
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="center"
          :inline="true"
          :md="{ span: 2 }"
        >
          <VueText id="viy2Text_89Ok6M" ref="viy2Text_89Ok6M" :style="{ width: '100%', display: 'inline-block' }">
            Rest Day
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="left"
          :inline="true"
          :md="{ span: 10 }"
        />
        <VueCol
          item-key="item"
          align="left"
          :inline="true"
          :md="{ span: 2 }"
        >
          <VueText id="viy2Text_OvUUv" ref="viy2Text_OvUUv" :style="{ width: '100%', display: 'inline-block' }">
            Work Day:0
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="left"
          :inline="true"
          :md="{ span: 4 }"
        >
          <VueText id="viy2Text_89b8Hy" ref="viy2Text_89b8Hy" :style="{ width: '100%', display: 'inline-block' }">
            Rest Day:0
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="left"
          :inline="true"
          :md="{ span: 1 }"
        />
        <VueCol
          item-key="item"
          align="left"
          :inline="true"
          :md="{ span: 21 }"
        >
          <VueFormItem
            label="Year Month"
            label-width="138px"
            prop="yearMonth"
          >
            <VueDatePicker
              id="viy2DateTimePicker_Ot6L5"
              ref="viy2DateTimePicker_Ot6L5"
              v-model="queryFormData.yearMonth"
              type="date"
              :style="{ width: '150px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ym"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VueRow
      id="viy2Row_xwtag"
      ref="viy2Row_xwtag"
    >
      <VueCol
        item-key="item"
        :md="{ offset: 2, span: 20 }"
      >
        <!-- BEGIN CUSTOM DIV CODE -->
        <!-- 事件处理时取值为：workCalendar.value -->
        <VueCalendar>
          <template #date-cell="{ data }">
            <p>
              {{ data.day.split('-').slice(2).join('-') }}
              <VueCheckbox v-model="workCalendar[data.day]" class="date-cell" />
            </p>
          </template>
        </VueCalendar>
        <!-- END CUSTOM DIV CODE -->
      </VueCol>
    </VueRow>
  </VueForm>
</template>
