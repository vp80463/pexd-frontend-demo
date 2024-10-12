<script setup>
import { IconArrowDownBold, IconArrowLeftBold, IconCloseBold, IconDocumentCopy, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  model_column, model_pop_condition, model_pop_query_method, model_query_method,
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
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
  name: 'sdq0401_03',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_7C7edE = ref();
const viy2Button_5FbWKc = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2ValueList_2As8qQ = ref();
const viy2Row_2As8qS = ref();
const viy2Button_2As8r4 = ref();
const viy2DateTimePicker_2As8r6 = ref();
const viy2DateTimePicker_2As8r8 = ref();
const viy2Button_2As8r9 = ref();
const viy2Button_pSxmma = ref();
const viy2ValueList_pSxmmb = ref();
const viy2Row_pSxmnP = ref();
const viy2Button_pSxmnR = ref();
const viy2InputBox_pSxmpy = ref();
const viy2InputBox_aip8wK = ref();
const filterBtn = ref();
const viy2Panel_MXmeg = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const filterpopover = ref();
const filterForm = ref();
const viy2Row_HNs8v = ref();
const viy2InputBox_5hhMPi = ref();
const viy2InputBox_pSxmnT = ref();
const viy2ValueList_12aiaw = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointvl: 'YT350 Yamaha Town Nha Trang_DO 10', dateFrom: '', dateTo: '', model: '', frameNo: '', plateNo: '',
});
const filterFormData = reactive({
  engineNo: '', colorNm: '', datafieldviy2ValueList_12aiaw: '',
});
const rules = reactive({
  viy2DateTimePicker_2As8r6Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_2As8qQPopoverQueryMethod = point_query_method;
const viy2ValueList_2As8qQPopupColumns = ref(point_column);
const viy2ValueList_2As8qQPopupQueryMethod = point_pop_query_method;
const viy2ValueList_pSxmmbPopoverQueryMethod = model_query_method;
const viy2ValueList_pSxmmbPopupColumns = ref(model_column);
const viy2ValueList_pSxmmbPopupQueryMethod = model_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridViy2TableButtonColumn_odGQQButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocumentCopy,
      title: 'Detail',
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      'entryPoint': 'Yamaha Town Nha Trang_DO 10',
      'registrationDate': '20240401',
      'salesDate': '20240401',
      'color': 'Đỏ-Đen',
      'frameNo': 'RLCUT1326NY133018',
      'Consumer Name': 'Sales Admin',
      'engineNo': 'RLCN1DB10BY000003',
      'plateNo': 'MIN D CU501',
      'modelCd': 'B6AD00010A',
      'modelNm': 'SIRIUS-B6A1',
      'consumerNm': 'XH 3 XH 2 XH 1 rev 6666',
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
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2ValueList_2As8qQSelect = (params) => {
  queryFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_2As8qQPopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_2As8qQPopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2Button_2As8r9Click = () => {
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
const viy2Button_pSxmmaClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_pSxmmbSelect = (params) => {
  queryFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_pSxmmbPopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_pSxmmbPopupConditions = computed(() => {
  return model_pop_condition;
});
const gridEntryPointEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRegistrationDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridSalesDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
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
const gridColorEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridConsumerNmEditRender = computed(() => {
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
const gridPlateNoEditRender = computed(() => {
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
        <VueButton id="viy2Button_7C7edE" ref="viy2Button_7C7edE" icon-position="left" :disabled="true">
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
            label="Entry Point"
            prop="pointvl"
          >
            <VueValueList
              id="viy2ValueList_2As8qQ"
              ref="viy2ValueList_2As8qQ"
              :style="{ width: '250px' }"
              v-model="queryFormData.pointvl"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              :popover-columns="viy2ValueList_2As8qQPopoverColumns"
              :popover-query-method="viy2ValueList_2As8qQPopoverQueryMethod"
              :popup-columns="viy2ValueList_2As8qQPopupColumns"
              :popup-conditions="viy2ValueList_2As8qQPopupConditions"
              :popup-query-method="viy2ValueList_2As8qQPopupQueryMethod"
              @select="viy2ValueList_2As8qQSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_2As8qS"
                  ref="viy2Row_2As8qS"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_2As8qT" ref="viy2Text_2As8qT" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_2As8r4" ref="viy2Button_2As8r4" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Registration Date"
            label-width="130px"
            prop="dateFrom"
            :rules="rules.viy2DateTimePicker_2As8r6Rules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_2As8r6"
              ref="viy2DateTimePicker_2As8r6"
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
              id="viy2DateTimePicker_2As8r8"
              ref="viy2DateTimePicker_2As8r8"
              v-model="queryFormData.dateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_2As8r9" ref="viy2Button_2As8r9" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_2As8r9Click" />
          <VueButton id="viy2Button_pSxmma" ref="viy2Button_pSxmma" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_pSxmmaClick" />
          <VueFormItem
            label="Model"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_pSxmmb"
              ref="viy2ValueList_pSxmmb"
              v-model="queryFormData.model"
              :style="{ width: '250px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_pSxmmbPopoverColumns"
              :popover-query-method="viy2ValueList_pSxmmbPopoverQueryMethod"
              :popup-columns="viy2ValueList_pSxmmbPopupColumns"
              :popup-conditions="viy2ValueList_pSxmmbPopupConditions"
              :popup-query-method="viy2ValueList_pSxmmbPopupQueryMethod"
              @select="viy2ValueList_pSxmmbSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_pSxmnP"
                  ref="viy2Row_pSxmnP"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_pSxmnQ" ref="viy2Text_pSxmnQ" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_pSxmnR" ref="viy2Button_pSxmnR" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Frame No"
            prop="frameNo"
          >
            <VueInput
              id="viy2InputBox_pSxmpy"
              ref="viy2InputBox_pSxmpy"
              v-model="queryFormData.frameNo"
              :clearable="true"
              class="no-border"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="No. Plate"
            prop="plateNo"
          >
            <VueInput
              id="viy2InputBox_aip8wK"
              ref="viy2InputBox_aip8wK"
              v-model="queryFormData.plateNo"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
          <VueButton id="filterBtn" ref="filterBtn" icon-position="left" class="icon-button-small" :icon="IconArrowDownBold">
            More...
          </VueButton>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Detail" :collapse="true">
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
          width="50px"
          min-width="50px"
        />
        <VueInputColumn
          :edit-render="gridEntryPointEditRender"
          field="entryPoint"
          show-overflow="tooltip"
          title="Entry Point"
          min-width="150px"
        />
        <VueDateTimeColumn
          :edit-render="gridRegistrationDateEditRender"
          field="registrationDate"
          title="Registration Date"
          width="100px"
        />
        <VueDateTimeColumn
          :edit-render="gridSalesDateEditRender"
          field="salesDate"
          title="Sales Date"
          width="100px"
        />
        <VueInputColumn
          :edit-render="gridModelCdEditRender"
          field="modelCd"
          aggregate="sum"
          show-overflow="tooltip"
          title="Model Code"
          width="100px"
        />
        <VueInputColumn
          :edit-render="gridModelNmEditRender"
          field="modelNm"
          aggregate="sum"
          show-overflow="tooltip"
          title="Model Name"
          min-width="150px"
        />
        <VueInputColumn
          :edit-render="gridColorEditRender"
          field="color"
          aggregate="sum"
          show-overflow="tooltip"
          title="Color"
          width="100px"
        />
        <VueInputColumn
          :edit-render="gridConsumerNmEditRender"
          field="consumerNm"
          aggregate="sum"
          show-overflow="tooltip"
          title="Consumer Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridFrameNoEditRender"
          field="frameNo"
          aggregate="sum"
          show-overflow="tooltip"
          title="Frame No."
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridEngineNoEditRender"
          field="engineNo"
          aggregate="sum"
          show-overflow="tooltip"
          title="Engine No. "
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridPlateNoEditRender"
          field="plateNo"
          show-overflow="tooltip"
          title="No. Plate"
          width="130px"
        />
        <VueButtonColumn
          fixed="right"
          align="center"
          width="40px"
          :buttons="gridViy2TableButtonColumn_odGQQButtons"
        />
      </VueTable>
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
              label="Engine No."
              prop="engineNo"
            >
              <VueInput
                id="viy2InputBox_5hhMPi"
                ref="viy2InputBox_5hhMPi"
                v-model="filterFormData.engineNo"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Color Name"
              prop="colorNm"
            >
              <VueInput
                id="viy2InputBox_pSxmnT"
                ref="viy2InputBox_pSxmnT"
                v-model="filterFormData.colorNm"
                :clearable="true"
                class="no-border"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Consumer"
              prop="datafieldviy2ValueList_12aiaw"
            >
              <VueValueList
                id="viy2ValueList_12aiaw"
                ref="viy2ValueList_12aiaw"
                v-model="filterFormData.datafieldviy2ValueList_12aiaw"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePopover>
  </VueForm>
</template>
