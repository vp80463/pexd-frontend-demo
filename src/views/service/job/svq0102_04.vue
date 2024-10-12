<script setup>
import { IconArrowLeftBold, IconArrowRight, IconCloseBold, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import {
  employee_column, employee_pop_condition, employee_pop_query_method, employee_query_method,
  model_column, model_pop_condition, model_pop_query_method, model_query_method,
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
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
  name: 'svq0102_04',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_9AIw0 = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2ValueList_1Ce29c = ref();
const viy2Row_1Ce29e = ref();
const viy2Button_1Ce29g = ref();
const viy2DateTimePicker_1Ce29i = ref();
const viy2DateTimePicker_1Ce29k = ref();
const viy2Button_1Ce29v = ref();
const viy2Button_gaglvI = ref();
const viy2Select_gaglvK = ref();
const viy2ValueList_12gOt122 = ref();
const viy2Row_4u0tVn = ref();
const viy2Button_4u0tVz = ref();
const filterpopover = ref();
const filterForm = ref();
const viy2Row_HNs8v = ref();
const viy2ValueList_12gOt12 = ref();
const viy2Row_99De6s = ref();
const viy2Button_5dubL5 = ref();
const brand = ref();
const viy2InputBox_2PRDN = ref();
const viy2Button_2Q7DH = ref();
const viy2ValueList_sgkiW = ref();
const viy2Row_99De6e = ref();
const viy2Button_5dw2lB = ref();
const viy2ValueList_sc5ys = ref();
const viy2Row_99De6y = ref();
const viy2Button_5dzsTP = ref();
const viy2ValueList_1CigGq = ref();
const viy2Row_99De6t = ref();
const viy2Button_5dzImH = ref();
const viy2InputBox_5hhMPi = ref();
const viy2InputBox_62uou = ref();
const viy2Row_10xsoa = ref();
const viy2CheckBox_eNArs = ref();
const viy2Button_6ayce = ref();
const consumerAside = ref();
const viy2Subpage_2QC7G = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointvl: 'YT350 Yamaha Town Nha Trang', dateFrom: '20240416', dateTo: '20240416', serviceCategory: '', model: '',
});
const filterFormData = reactive({
  model: '', brand: '', consumer: '', pic: '', mechanic: '', serviceJob: '', frameNo: '', batteryId: '', exception: [],
});
const rules = reactive({
  viy2ValueList_1Ce29cRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1Ce29iRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1Ce29kRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_gaglvKRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_12gOt12PopoverQueryMethod = model_query_method;
const viy2ValueList_12gOt12PopupColumns = ref(model_column);
const viy2ValueList_12gOt12PopupQueryMethod = model_pop_query_method;
const brandOpts = reactive([
  {
    label:
'Bảo trì miễn phí',
    value:
'Bảo trì miễn phí',
  },
  {
    label:
'Bảo hành',
    value:
'Bảo hành',
  },
  {
    label:
'Sửa chữa',
    value:
'Sửa chữa',
  },
]);
const viy2ValueList_sgkiWPopoverQueryMethod = employee_query_method;
const viy2ValueList_sgkiWPopupColumns = ref(employee_column);
const viy2ValueList_sgkiWPopupQueryMethod = employee_pop_query_method;
const viy2ValueList_sc5ysPopoverQueryMethod = employee_query_method;
const viy2ValueList_sc5ysPopupColumns = ref(employee_column);
const viy2ValueList_sc5ysPopupQueryMethod = employee_pop_query_method;
const viy2CheckBox_eNArsOpts = [
  {
    label:
'',
    value:
'',
  },
];
const showConsumerWin = ref(false);
const viy2ValueList_1Ce29cPopoverQueryMethod = point_query_method;
const viy2ValueList_1Ce29cPopupColumns = ref(point_column);
const viy2ValueList_1Ce29cPopupQueryMethod = point_pop_query_method;
const viy2ValueList_12gOt122PopoverQueryMethod = model_query_method;
const viy2ValueList_12gOt122PopupColumns = ref(model_column);
const viy2ValueList_12gOt122PopupQueryMethod = model_pop_query_method;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      orderDate: '20240201',
      orderNo: 'SO2402A000001',
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
      amt: 11111,
      partsAmt: 732121,
      brandCd: 'YAMAHA',
      brandNm: 'YAMAHA',
    },
    {
      orderDate: '20240220',
      orderNo: 'SO2402A000002',
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
      amt: 111,
      partsAmt: 732121,
      brandCd: 'YAMAHA',
      brandNm: 'YAMAHA',
    },
    {
      orderDate: '20230130',
      orderNo: 'SO2402A000003',
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
      amt: 11,
      partsAmt: 732121,
      brandCd: 'YAMAHA',
      brandNm: 'YAMAHA',
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
const viy2Button_9AIw0Click = () => {
  const $table = grid.value;
  if ($table) {
    // $table.exportData({
    // data: exportData.value,
    // });
    $table.openExport();
    // $table.exportData({ type: 'xlsx' });
  }
};
const viy2ValueList_1Ce29cSelect = (params) => {
  queryFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_1Ce29cPopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_1Ce29cPopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2Button_1Ce29vClick = () => {
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
const viy2Button_gaglvIClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_12gOt122Select = (params) => {
  queryFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt122PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_12gOt122PopupConditions = computed(() => {
  return model_pop_condition;
});
const viy2ValueList_12gOt12Select = (params) => {
  filterFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt12PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_12gOt12PopupConditions = computed(() => {
  return model_pop_condition;
});
const viy2Button_2Q7DHClick = () => {
  showConsumerWin.value = true;
};
const viy2ValueList_sgkiWSelect = (params) => {
  filterFormData.pic = `${params.code} ${params.name}`;
};
const viy2ValueList_sgkiWPopoverColumns = computed(() => {
  return employee_column;
});
const viy2ValueList_sgkiWPopupConditions = computed(() => {
  return employee_pop_condition;
});
const viy2ValueList_sc5ysSelect = (params) => {
  filterFormData.mechanic = `${params.code} ${params.name}`;
};
const viy2ValueList_sc5ysPopoverColumns = computed(() => {
  return employee_column;
});
const viy2ValueList_sc5ysPopupConditions = computed(() => {
  return employee_pop_condition;
});
const viy2ValueList_1CigGqSelect = (value, type) => {
  filterForm.pic = `${value.code} ${value.value}`;
};
const viy2Button_6ayceClick = () => {
  const filterFormElement = filterForm.value;
  if (filterFormElement && filterFormElement.resetFields) {
    filterFormElement.resetFields();
  }
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
        <VueButton id="viy2Button_9AIw0" ref="viy2Button_9AIw0" icon-position="left" @click="viy2Button_9AIw0Click">
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
            label="Point"
            prop="pointvl"
            :rules="rules.viy2ValueList_1Ce29cRules"
          >
            <VueValueList
              id="viy2ValueList_1Ce29c"
              ref="viy2ValueList_1Ce29c"
              v-model="queryFormData.pointvl"
              :style="{ width: '250px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              :popover-columns="viy2ValueList_1Ce29cPopoverColumns"
              :popover-query-method="viy2ValueList_1Ce29cPopoverQueryMethod"
              :popup-columns="viy2ValueList_1Ce29cPopupColumns"
              :popup-conditions="viy2ValueList_1Ce29cPopupConditions"
              :popup-query-method="viy2ValueList_1Ce29cPopupQueryMethod"
              @select="viy2ValueList_1Ce29cSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_1Ce29e"
                  ref="viy2Row_1Ce29e"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_1Ce29f" ref="viy2Text_1Ce29f" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_1Ce29g" ref="viy2Button_1Ce29g" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Order Date"
            prop="dateFrom"
            :rules="rules.viy2DateTimePicker_1Ce29iRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_1Ce29i"
              ref="viy2DateTimePicker_1Ce29i"
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
            :rules="rules.viy2DateTimePicker_1Ce29kRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_1Ce29k"
              ref="viy2DateTimePicker_1Ce29k"
              v-model="queryFormData.dateTo"
              :autofocus="true"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_1Ce29v" ref="viy2Button_1Ce29v" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1Ce29vClick" />
          <VueButton id="viy2Button_gaglvI" ref="viy2Button_gaglvI" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_gaglvIClick" />
          <VueFormItem
            label="Service Category"
            label-width="130px"
            prop="serviceCategory"
            :rules="rules.viy2Select_gaglvKRules"
          >
            <VueSelect
              id="viy2Select_gaglvK"
              ref="viy2Select_gaglvK"
              v-model="queryFormData.serviceCategory"
              :style="{ width: '250px' }"
              :collapse-tags="true"
              :clearable="true"
              :filterable="true"
              :collapse-tags-tooltip="true"
              :options="orderStsDs"
              :props="{
                label: 'label',
                value: 'value',
              }"
            />
          </VueFormItem>
          <VueFormItem
            label="Model"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_12gOt122"
              ref="viy2ValueList_12gOt122"
              v-model="queryFormData.model"
              :style="{ width: '250px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_12gOt122PopoverColumns"
              :popover-query-method="viy2ValueList_12gOt122PopoverQueryMethod"
              :popup-columns="viy2ValueList_12gOt122PopupColumns"
              :popup-conditions="viy2ValueList_12gOt122PopupConditions"
              :popup-query-method="viy2ValueList_12gOt122PopupQueryMethod"
              @select="viy2ValueList_12gOt122Select"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_4u0tVn"
                  ref="viy2Row_4u0tVn"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_4u0tVy" ref="viy2Text_4u0tVy" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_4u0tVz" ref="viy2Button_4u0tVz" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
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
              label="Model"
              prop="model"
            >
              <VueValueList
                id="viy2ValueList_12gOt12"
                ref="viy2ValueList_12gOt12"
                v-model="filterFormData.model"
                :style="{ width: '250px' }"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                :popover-teleported="false"
                :popover-width="500"
                :use-popup="true"
                :popover-columns="viy2ValueList_12gOt12PopoverColumns"
                :popover-query-method="viy2ValueList_12gOt12PopoverQueryMethod"
                :popup-columns="viy2ValueList_12gOt12PopupColumns"
                :popup-conditions="viy2ValueList_12gOt12PopupConditions"
                :popup-query-method="viy2ValueList_12gOt12PopupQueryMethod"
                @select="viy2ValueList_12gOt12Select"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_99De6s"
                    ref="viy2Row_99De6s"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_5dubL4" ref="viy2Text_5dubL4" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_5dubL5" ref="viy2Button_5dubL5" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Service Category"
              prop="brand"
            >
              <VueSelect
                id="brand"
                ref="brand"
                v-model="filterFormData.brand"
                :style="{ width: '185px' }"
                :teleported="false"
                :clearable="true"
                :filterable="true"
                :options="brandOpts"
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
              <VueInput
                id="viy2InputBox_2PRDN"
                ref="viy2InputBox_2PRDN"
                v-model="filterFormData.consumer"
              >
                <template #append>
                  <VueButton id="viy2Button_2Q7DH" ref="viy2Button_2Q7DH" icon-position="left" type="primary" class="icon-button-width" :icon="IconArrowRight" @click="viy2Button_2Q7DHClick" />
                </template>
              </VueInput>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Reception P.I.C"
              prop="pic"
            >
              <VueValueList
                id="viy2ValueList_sgkiW"
                ref="viy2ValueList_sgkiW"
                v-model="filterFormData.pic"
                :style="{ width: '250px' }"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                :popover-teleported="false"
                :popover-width="500"
                :use-popup="true"
                :popover-columns="viy2ValueList_sgkiWPopoverColumns"
                :popover-query-method="viy2ValueList_sgkiWPopoverQueryMethod"
                :popup-columns="viy2ValueList_sgkiWPopupColumns"
                :popup-conditions="viy2ValueList_sgkiWPopupConditions"
                :popup-query-method="viy2ValueList_sgkiWPopupQueryMethod"
                @select="viy2ValueList_sgkiWSelect"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_99De6e"
                    ref="viy2Row_99De6e"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_5dw2lq" ref="viy2Text_5dw2lq" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Employee
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_5dw2lB" ref="viy2Button_5dw2lB" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Mechanic"
              prop="mechanic"
            >
              <VueValueList
                id="viy2ValueList_sc5ys"
                ref="viy2ValueList_sc5ys"
                v-model="filterFormData.mechanic"
                :style="{ width: '250px' }"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                :popover-teleported="false"
                :popover-width="500"
                :use-popup="true"
                :popover-columns="viy2ValueList_sc5ysPopoverColumns"
                :popover-query-method="viy2ValueList_sc5ysPopoverQueryMethod"
                :popup-columns="viy2ValueList_sc5ysPopupColumns"
                :popup-conditions="viy2ValueList_sc5ysPopupConditions"
                :popup-query-method="viy2ValueList_sc5ysPopupQueryMethod"
                @select="viy2ValueList_sc5ysSelect"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_99De6y"
                    ref="viy2Row_99De6y"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_5dzsTO" ref="viy2Text_5dzsTO" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Employee
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_5dzsTP" ref="viy2Button_5dzsTP" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Service Job"
              prop="serviceJob"
            >
              <VueValueList
                id="viy2ValueList_1CigGq"
                ref="viy2ValueList_1CigGq"
                v-model="filterFormData.serviceJob"
                :popover-component="valulistWin"
                :popover-teleported="false"
                :use-popover="true"
                :popover-width="500"
                @select="viy2ValueList_1CigGqSelect"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_99De6t"
                    ref="viy2Row_99De6t"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_5dzImw" ref="viy2Text_5dzImw" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Job
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_5dzImH" ref="viy2Button_5dzImH" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Frame No."
              prop="frameNo"
            >
              <VueInput
                id="viy2InputBox_5hhMPi"
                ref="viy2InputBox_5hhMPi"
                v-model="filterFormData.frameNo"
                :style="{ width: '185px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
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
                :disabled="true"
                :style="{ width: '185px' }"
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
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Except Only Battery Claim"
              label-width="190px"
              prop="exception"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_eNArs"
                ref="viy2CheckBox_eNArs"
                v-model="filterFormData.exception"
              >
                <VueCheckbox
                  v-for="option in viy2CheckBox_eNArsOpts"
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
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueButton id="viy2Button_6ayce" ref="viy2Button_6ayce" icon-position="left" type="warning" @click="viy2Button_6ayceClick">
              Reset
            </VueButton>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePopover>
    <VueAside
      id="consumerAside"
      ref="consumerAside"
      v-model="showConsumerWin"
      :modal="true"
      size="60%"
      :with-header="false"
      :show-close="false"
    />
  </VueForm>
</template>
