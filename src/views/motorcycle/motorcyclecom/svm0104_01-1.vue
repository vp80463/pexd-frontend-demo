<script setup>
import { IconCloseBold, IconDocumentCopy, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  customer_column, customer_pop_condition, customer_pop_query_method, customer_query_method,
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
  name: 'svm0104_01-1',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5U3XQ = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2ValueList_1Ce29c = ref();
const viy2Row_1Ce29e = ref();
const viy2Button_1Ce29g = ref();
const viy2ValueList_12gOt12 = ref();
const viy2Row_1MWupL = ref();
const viy2Button_1MWuq7 = ref();
const viy2InputBox_gaglvQ = ref();
const viy2Select_gaglvK = ref();
const viy2InputBox_1MZFya = ref();
const viy2InputBox_1MZCn4 = ref();
const viy2InputBox_1MZg4E = ref();
const viy2ValueList_80ngBa = ref();
const viy2Row_3Pb3CR = ref();
const viy2Button_3Pb3CT = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_BM4iq = ref();
const viy2Button_1MCIwq = ref();
const viy2Button_1MDImC = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const consumerAside = ref();
const viy2Subpage_2QC7G = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointvl: 'YT350 Yamaha Town Nha Trang', model: '', plateNo: '', brand: '', frameNo: '', mobilePhone: '', batteryID: '', customer: '',
});
const showConsumerWin = ref(false);
const viy2ValueList_1Ce29cPopoverQueryMethod = point_query_method;
const viy2ValueList_1Ce29cPopupColumns = ref(point_column);
const viy2ValueList_1Ce29cPopupQueryMethod = point_pop_query_method;
const viy2ValueList_12gOt12PopoverQueryMethod = model_query_method;
const viy2ValueList_12gOt12PopupColumns = ref(model_column);
const viy2ValueList_12gOt12PopupQueryMethod = model_pop_query_method;
const viy2Select_gaglvKOpts = reactive([
  {
    label:
'YAMAHA(S)',
    value:
'YAMAHA(S)',
  },
  {
    label:
'HONDA',
    value:
'HONDA',
  },
  {
    label:
'KIMOCO',
    value:
'KIMOCO',
  },
  {
    label:
'Bo Bike',
    value:
'Bo Bike',
  },
  {
    label:
'Other',
    value:
'Other',
  },
  {
    label:
'PIAGGIO',
    value:
'PIAGGIO',
  },
  {
    label:
'SUZUKI',
    value:
'SUZUKI',
  },
  {
    label:
'SYM',
    value:
'SYM',
  },
  {
    label:
'YAMAHA',
    value:
'YAMAHA',
  },
]);
const viy2ValueList_80ngBaPopoverQueryMethod = customer_query_method;
const viy2ValueList_80ngBaPopupColumns = ref(customer_column);
const viy2ValueList_80ngBaPopupQueryMethod = customer_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridViy2TableButtonColumn_ySNcgButtons = (scope) => {
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
      p: 'L',
      pointNm: 'Yamaha Town Nha Trang_DO 10',
      model: '1FCA00010A',
      modelNm: 'SIRIUS FI 1FCA',
      colorNm: 'Đỏ - Đen',
      noPlate: '1',
      frameNo: 'RLCUF4740MY040317',
      engineNo: 'F32VE-340317',
      battery1: '',
      battery2: '',
      soldDate: '',
      stockSts: 'On Hand',
      salesSts: 'Stock',
      qualitySts: 'Normal',
      serviceFlag: 'No',
      brandNm: 'YAMAHA',
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
const viy2Button_5U3XQClick = () => {
  debugger;
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
const viy2ValueList_12gOt12Select = (params) => {
  filterFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt12PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_12gOt12PopupConditions = computed(() => {
  return model_pop_condition;
});
const viy2ValueList_80ngBaSelect = (params) => {
  queryFormData.customer = `${params.code} ${params.name}`;
};
const viy2ValueList_80ngBaPopoverColumns = computed(() => {
  return customer_column;
});
const viy2ValueList_80ngBaPopupConditions = computed(() => {
  return customer_pop_condition;
});
const gridPEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridPointNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelEditRender = computed(() => {
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
const gridEngineNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBattery1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBattery2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSoldDateEditRender = computed(() => {
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
const gridStockStsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSalesStsEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridQualityStsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridServiceFlagEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridBrandNmEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
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
        <VueButton id="viy2Button_5U3XQ" ref="viy2Button_5U3XQ" icon-position="left" type="info" @click="viy2Button_5U3XQClick">
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
            label="Point"
            prop="pointvl"
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
            label="Model"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_12gOt12"
              ref="viy2ValueList_12gOt12"
              v-model="queryFormData.model"
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
                  id="viy2Row_1MWupL"
                  ref="viy2Row_1MWupL"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_1MWupW" ref="viy2Text_1MWupW" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_1MWuq7" ref="viy2Button_1MWuq7" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="No. Plate"
            prop="plateNo"
          >
            <VueInput
              id="viy2InputBox_gaglvQ"
              ref="viy2InputBox_gaglvQ"
              v-model="queryFormData.plateNo"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Brand"
            prop="brand"
          >
            <VueSelect
              id="viy2Select_gaglvK"
              ref="viy2Select_gaglvK"
              v-model="queryFormData.brand"
              :style="{ width: '300px' }"
              :collapse-tags="true"
              :clearable="true"
              :filterable="true"
              :collapse-tags-tooltip="true"
              :options="viy2Select_gaglvKOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Frame No."
            prop="frameNo"
          >
            <VueInput
              id="viy2InputBox_1MZFya"
              ref="viy2InputBox_1MZFya"
              v-model="queryFormData.frameNo"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Mobile Phone"
            prop="mobilePhone"
          >
            <VueInput
              id="viy2InputBox_1MZCn4"
              ref="viy2InputBox_1MZCn4"
              v-model="queryFormData.mobilePhone"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Battery ID"
            prop="batteryID"
          >
            <VueInput
              id="viy2InputBox_1MZg4E"
              ref="viy2InputBox_1MZg4E"
              v-model="queryFormData.batteryID"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Consumer"
            prop="customer"
          >
            <VueValueList
              id="viy2ValueList_80ngBa"
              ref="viy2ValueList_80ngBa"
              v-model="queryFormData.customer"
              :style="{ width: '250px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_80ngBaPopoverColumns"
              :popover-query-method="viy2ValueList_80ngBaPopoverQueryMethod"
              :popup-columns="viy2ValueList_80ngBaPopupColumns"
              :popup-conditions="viy2ValueList_80ngBaPopupConditions"
              :popup-query-method="viy2ValueList_80ngBaPopupQueryMethod"
              @select="viy2ValueList_80ngBaSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_3Pb3CR"
                  ref="viy2Row_3Pb3CR"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_3Pb3CS" ref="viy2Text_3Pb3CS" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Consumer
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 14 }"
                  >
                    <VueButton id="viy2Button_3Pb3CT" ref="viy2Button_3Pb3CT" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Retrieved Result">
      <template #header>
        <div style="width: 300px">
          <VueRow
            id="viy2Row_BM4iq"
            ref="viy2Row_BM4iq"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_1MCIwq" ref="viy2Button_1MCIwq" icon-position="left" :disabled="true">
                Download
              </VueButton>
              <VueButton id="viy2Button_1MDImC" ref="viy2Button_1MDImC" icon-position="left" :disabled="true">
                New Service Order
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
        <VueInputColumn
          :edit-render="gridPEditRender"
          field="p"
          show-overflow="tooltip"
          align="center"
          title="P"
          width="40px"
        />
        <VueInputColumn
          :edit-render="gridPointNmEditRender"
          field="pointNm"
          show-overflow="tooltip"
          title="Point Name"
          width="110px"
        />
        <VueInputColumn
          :edit-render="gridModelEditRender"
          field="model"
          show-overflow="tooltip"
          title="Model"
          width="110px"
        />
        <VueInputColumn
          :edit-render="gridModelNmEditRender"
          field="modelNm"
          show-overflow="tooltip"
          title="Model Name"
          width="140px"
        />
        <VueInputColumn
          :edit-render="gridColorNmEditRender"
          field="colorNm"
          show-overflow="tooltip"
          title="Color Name"
          width="140px"
        />
        <VueInputColumn
          :edit-render="gridNoPlateEditRender"
          field="noPlate"
          show-overflow="tooltip"
          title="No. Plate"
          width="110px"
        />
        <VueInputColumn
          :edit-render="gridFrameNoEditRender"
          field="frameNo"
          show-overflow="tooltip"
          title="Frame No."
          width="110px"
        />
        <VueInputColumn
          :edit-render="gridEngineNoEditRender"
          field="engineNo"
          show-overflow="tooltip"
          title="Engine No."
          width="110px"
        />
        <VueInputColumn
          :edit-render="gridBattery1EditRender"
          field="battery1"
          show-overflow="tooltip"
          title="Battery ID 1"
          width="110px"
        />
        <VueInputColumn
          :edit-render="gridBattery2EditRender"
          field="battery2"
          show-overflow="tooltip"
          title="Battery ID 2"
          width="110px"
        />
        <VueDateTimeColumn
          :edit-render="gridSoldDateEditRender"
          field="soldDate"
          align="center"
          title="Sold Date"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridStockStsEditRender"
          field="stockSts"
          aggregate="sum"
          title="Stock Status"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridSalesStsEditRender"
          field="salesSts"
          aggregate="sum"
          align="center"
          title="Sales Status"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridQualityStsEditRender"
          field="qualitySts"
          aggregate="sum"
          title="Quality Status"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridServiceFlagEditRender"
          field="serviceFlag"
          aggregate="sum"
          align="center"
          title="Service Flag"
          width="100px"
        />
        <VueInputColumn
          :edit-render="gridBrandNmEditRender"
          field="brandNm"
          aggregate="sum"
          align="center"
          title="Brand Name"
          width="110px"
        />
        <VueButtonColumn
          fixed="right"
          align="center"
          title="Operation"
          width="90px"
          :buttons="gridViy2TableButtonColumn_ySNcgButtons"
        />
      </VueTable>
    </VuePanel>
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
