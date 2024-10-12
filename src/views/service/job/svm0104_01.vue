<script setup>
import { IconArrowDownBold, IconCloseBold, IconDocumentCopy, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import valulistWin from '/src/views/REF/SAMPLE/modelInfo.vue';
import {
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
  name: 'svm0104_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_8LuZ4v = ref();
const viy2Button_8LuZ4x = ref();
const viy2ValueList_12gOt12 = ref();
const viy2Row_8Lww5X = ref();
const viy2Button_8Lww69 = ref();
const viy2InputBox_1pMvpE = ref();
const viy2Select_QQvs2R = ref();
const viy2InputBox_QQvs6e = ref();
const filterBtn = ref();
const viy2Panel_MXmeg = ref();
const viy2Button_8KZu4 = ref();
const viy2Button_1pBa0c = ref();
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
  pointvl: 'YT350 Yamaha Town Nha Trang_DO 10', model: 'YT350 Yamaha Town Nha Trang_DO 10', plateNo: '', brand: [], frameNo: '',
});
const filterFormData = reactive({
  mobilePhone: '', consumer: '', batteryId: '',
});
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2ValueList_12gOt12PopoverQueryMethod = model_query_method;
const viy2ValueList_12gOt12PopupColumns = ref(model_column);
const viy2ValueList_12gOt12PopupQueryMethod = model_pop_query_method;
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
const viy2ValueList_12gOt1Select = (params) => {
  queryFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2ValueList_12gOt12Select = (params) => {
  queryFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt12PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_12gOt12PopupConditions = computed(() => {
  return model_pop_condition;
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
const gridSoldDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'YYYYMMDD',
      format: 'DD/MM/YYYY',
    },
  };
});
const gridStockStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSalesStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridQualityStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridServiceFlagEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBrandNmEditRender = computed(() => {
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
            label="Point"
            prop="pointvl"
          >
            <VueValueList
              id="viy2ValueList_12gOt1"
              ref="viy2ValueList_12gOt1"
              :style="{ width: '250px' }"
              v-model="queryFormData.pointvl"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :clearable="true"
              :popover-columns="viy2ValueList_12gOt1PopoverColumns"
              :popover-query-method="viy2ValueList_12gOt1PopoverQueryMethod"
              :popup-columns="viy2ValueList_12gOt1PopupColumns"
              :popup-conditions="viy2ValueList_12gOt1PopupConditions"
              :popup-query-method="viy2ValueList_12gOt1PopupQueryMethod"
              @select="viy2ValueList_12gOt1Select"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_8LuZ4v"
                  ref="viy2Row_8LuZ4v"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_8LuZ4w" ref="viy2Text_8LuZ4w" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_8LuZ4x" ref="viy2Button_8LuZ4x" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
              :toggle-popover-on-click="true"
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
                  id="viy2Row_8Lww5X"
                  ref="viy2Row_8Lww5X"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_8Lww68" ref="viy2Text_8Lww68" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_8Lww69" ref="viy2Button_8Lww69" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
              id="viy2InputBox_1pMvpE"
              ref="viy2InputBox_1pMvpE"
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
              id="viy2Select_QQvs2R"
              ref="viy2Select_QQvs2R"
              v-model="queryFormData.brand"
              :style="{ width: '300px' }"
              :collapse-tags="true"
              :clearable="true"
              :multiple="true"
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
            label="Frame No."
            prop="frameNo"
          >
            <VueInput
              id="viy2InputBox_QQvs6e"
              ref="viy2InputBox_QQvs6e"
              v-model="queryFormData.frameNo"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
          <VueButton id="filterBtn" ref="filterBtn" icon-position="left" class="icon-button-small" :icon="IconArrowDownBold">
            More...
          </VueButton>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Retrieved Result" :collapse="true">
      <template #header>
        <div style="width: 300px">
          <VueButton id="viy2Button_8KZu4" ref="viy2Button_8KZu4" icon-position="left" :disabled="true">
            DownLoad
          </VueButton>
          <VueButton id="viy2Button_1pBa0c" ref="viy2Button_1pBa0c" icon-position="left" :disabled="true">
            New Service Order
          </VueButton>
        </div>
      </template>
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
          :edit-render="gridPointNmEditRender"
          field="pointNm"
          aggregate="sum"
          show-overflow="tooltip"
          :sortable="true"
          title="Point Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridModelEditRender"
          field="model"
          aggregate="sum"
          show-overflow="tooltip"
          title="Model"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridModelNmEditRender"
          field="modelNm"
          aggregate="sum"
          show-overflow="tooltip"
          title="Model Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridColorNmEditRender"
          field="colorNm"
          aggregate="sum"
          show-overflow="tooltip"
          title="Color Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridNoPlateEditRender"
          field="noPlate"
          aggregate="sum"
          show-overflow="tooltip"
          title="No. Plate"
          width="130px"
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
          show-overflow="tooltip"
          title="Engine No."
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridBatteryIdOneEditRender"
          field="batteryIdOne"
          show-overflow="tooltip"
          title="Battery ID 1"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridBatteryIdTwoEditRender"
          field="batteryIdTwo"
          show-overflow="tooltip"
          title="Battery ID 2"
          width="130px"
        />
        <VueDateTimeColumn
          :edit-render="gridSoldDateEditRender"
          field="soldDate"
          align="center"
          title="Sold Date"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridStockStatusEditRender"
          field="stockStatus"
          show-overflow="tooltip"
          title="Stock Status"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridSalesStatusEditRender"
          field="salesStatus"
          show-overflow="tooltip"
          title="Sales Status"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridQualityStatusEditRender"
          field="qualityStatus"
          show-overflow="tooltip"
          title="Quality Status"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridServiceFlagEditRender"
          field="serviceFlag"
          show-overflow="tooltip"
          title="Service Flag"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridBrandNmEditRender"
          field="brandNm"
          aggregate="sum"
          show-overflow="tooltip"
          title="Brand Name"
          min-width="130px"
        />
        <VueButtonColumn
          fixed="right"
          align="center"
          width="80px"
          :buttons="gridViy2TableButtonColumn_odGQQButtons"
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
