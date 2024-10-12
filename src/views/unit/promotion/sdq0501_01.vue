<script setup>
import { IconArrowLeftBold, IconCloseBold, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  dealer_column, dealer_pop_condition, dealer_pop_query_method, dealer_query_method,
  model_column, model_pop_condition, model_pop_query_method, model_query_method,
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
  promotion_column, promotion_pop_condition, promotion_pop_query_method, promotion_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdq0501_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_6rlKUm = ref();
const viy2Button_6rOQzM = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2ValueList_84X5Le = ref();
const viy2Row_8GFEfz = ref();
const viy2Button_8GFEfL = ref();
const viy2DateTimePicker_12CKgS = ref();
const viy2DateTimePicker_aqhxvI = ref();
const viy2Button_12Q99p = ref();
const viy2Button_aspEBs = ref();
const viy2Select_Amx5O = ref();
const viy2ValueList_80zpZw = ref();
const viy2Row_8GBGar = ref();
const viy2Button_8GBGaD = ref();
const viy2ValueList_8GziFi = ref();
const viy2Row_8GziFu = ref();
const viy2Button_8GziFG = ref();
const viy2ValueList_12gOt12 = ref();
const viy2Row_8GDFR1 = ref();
const viy2Button_8GDFR3 = ref();
const viy2InputBox_12EqLC = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Row_M0Opx = ref();
const viy2Pagination_2GtEFk = ref();
const formData = reactive({
});
const orderFormData = reactive({
  promotion: 'YT350 Yamaha Town Nha Trang_DO 10', dateFrom: '', dateTo: '', province: '', dealer: '', pointvl: '', model: '', frameNo: '',
});
const rules = reactive({
  viy2DateTimePicker_12CKgSRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_aqhxvIRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_84X5LePopoverQueryMethod = promotion_query_method;
const viy2ValueList_84X5LePopupColumns = ref(promotion_column);
const viy2ValueList_84X5LePopupQueryMethod = promotion_pop_query_method;
const viy2Select_Amx5OOpts = reactive([
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
const viy2ValueList_80zpZwPopoverQueryMethod = dealer_query_method;
const viy2ValueList_80zpZwPopupColumns = ref(dealer_column);
const viy2ValueList_80zpZwPopupQueryMethod = dealer_pop_query_method;
const viy2ValueList_8GziFiPopoverQueryMethod = point_query_method;
const viy2ValueList_8GziFiPopupColumns = ref(point_column);
const viy2ValueList_8GziFiPopupQueryMethod = point_pop_query_method;
const viy2ValueList_12gOt12PopoverQueryMethod = model_query_method;
const viy2ValueList_12gOt12PopupColumns = ref(model_column);
const viy2ValueList_12gOt12PopupQueryMethod = model_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const viy2Pagination_2GtEFkCurrentPage = ref(1);
const viy2Pagination_2GtEFkPageSize = ref();
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      promotionCd: 'P20230008',
      promotionNm: 'TEST',
      giftNm: 'SO2401A000054',
      modelCd: '15C100010C',
      modelNm: 'Lexam 15C1',
      receivedDate: '20240401',
      uploadDate: '20240401',
      province: 'Tỉnh Khánh Hòa',
      dealerCd: '2009',
      dealerNm: 'Trung Ta',
      pointCd: 'YT350',
      pointNm: 'Yamaha Town Nha',
    },
  ],
}, {
  initialData: [
    { id: '1', name: 'NameA', type: '1', description: 'DescriptionA' },
    { id: '2', name: 'NameB', type: '1', description: 'DescriptionB' },
    { id: '3', name: 'NameC', type: '2', description: 'DescriptionC' },
    { id: '4', name: 'NameD', type: '2', description: 'DescriptionD' },
    { id: '5', name: 'NameE', type: '2', description: 'DescriptionE' },
  ],
});
const gridDs = gridDsApi.data;
const viy2ValueList_84X5LeSelect = (params) => {
  orderFormData.promotion = `${params.code} ${params.name}`;
};
const viy2ValueList_84X5LePopoverColumns = computed(() => {
  return promotion_column;
});
const viy2ValueList_84X5LePopupConditions = computed(() => {
  return promotion_pop_condition;
});
const viy2Button_12Q99pClick = () => {
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
const viy2Button_aspEBsClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2ValueList_80zpZwSelect = (params) => {
  orderFormData.dealer = `${params.code} ${params.name}`;
};
const viy2ValueList_80zpZwPopoverColumns = computed(() => {
  return dealer_column;
});
const viy2ValueList_80zpZwPopupConditions = computed(() => {
  return dealer_pop_condition;
});
const viy2ValueList_8GziFiSelect = (params) => {
  orderFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_8GziFiPopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_8GziFiPopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2ValueList_12gOt12Select = (params) => {
  orderFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt12PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_12gOt12PopupConditions = computed(() => {
  return model_pop_condition;
});
const gridPromotionCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPromotionNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProvinceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDealerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDealerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointNmEditRender = computed(() => {
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
const gridUploadDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridReceivedDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
});
const onDelRow = (row) => {
  grid.value.remove(row);
};
const callbkSelectParts = (param) => {
  grid.value.getCurrentRecord().partsNo = param.partsNo;
  grid.value.getCurrentRecord().partsNm = param.partsNm;
  showPartsWin.value = false;
};
const closeAside = () => {
  showPartsWin.value = false;
};
// 部品多选回调
const multiPartsParams = () => {
  const existData = grid.value.getTableData().visibleData;
  const initData = [];
  existData.forEach((row) => {
    const newOne = {
      partsNo: row.partsNo,
      partsNm: row.partsNm,
    };
    initData.push(newOne);
  });
  return initData;
};
const callbkSelectMultiParts = (param) => {
// 移除新删除行
  param.removeRecords.forEach((delOne) => {
    grid.value.getTableData().visibleData.forEach((row) => {
      if (delOne.partsNo == row.partsNo) {
        grid.value.remove(row);
      }
    });
  });
  // 追加新追加行
  const tableData = grid.value.getTableData().visibleData;
  param.insertRecords.forEach((newOne) => {
    const existOne = tableData.find(chosen => chosen.partsNo === newOne.partsNo);
    if (!existOne) {
      grid.value.insertAt(newOne, -1).then((newRow) => {
        grid.value.setCurrentRow(newRow.row);
      });
    }
  });
  showPartsMultiWin.value = false;
};
const closeMultiPartsAside = () => {
  showPartsMultiWin.value = false;
};
// consumer侧边栏选择后
const callbkSelectConsumer = (param) => {
  consumerFormData.fn = param.name;
  consumerFormData.mobile = param.mobile;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_10QMyC"
      ref="viy2Row_10QMyC"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning">
          Reset
        </VueButton>
        <VueButton id="viy2Button_6rlKUm" ref="viy2Button_6rlKUm" icon-position="left" :disabled="true">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_6rOQzM" ref="viy2Button_6rOQzM" icon-position="left" type="info">
          Retrieve
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="orderForm"
      ref="orderForm"
      class="margin-top-div0 except-height-css"
      :model="orderFormData"
    >
      <VueRow
        id="viy2Row_3mqzSt"
        ref="viy2Row_3mqzSt"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Promotion"
            prop="promotion"
          >
            <VueValueList
              id="viy2ValueList_84X5Le"
              ref="viy2ValueList_84X5Le"
              v-model="orderFormData.promotion"
              :style="{ width: '250px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_84X5LePopoverColumns"
              :popover-query-method="viy2ValueList_84X5LePopoverQueryMethod"
              :popup-columns="viy2ValueList_84X5LePopupColumns"
              :popup-conditions="viy2ValueList_84X5LePopupConditions"
              :popup-query-method="viy2ValueList_84X5LePopupQueryMethod"
              @select="viy2ValueList_84X5LeSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_8GFEfz"
                  ref="viy2Row_8GFEfz"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_8GFEfA" ref="viy2Text_8GFEfA" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Promotion
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 14 }"
                  >
                    <VueButton id="viy2Button_8GFEfL" ref="viy2Button_8GFEfL" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Period"
            prop="dateFrom"
            :rules="rules.viy2DateTimePicker_12CKgSRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_12CKgS"
              ref="viy2DateTimePicker_12CKgS"
              v-model="orderFormData.dateFrom"
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
            label-width="0px"
            prop="dateTo"
            :rules="rules.viy2DateTimePicker_aqhxvIRules"
          >
            <VueDatePicker
              id="viy2DateTimePicker_aqhxvI"
              ref="viy2DateTimePicker_aqhxvI"
              v-model="orderFormData.dateTo"
              type="date"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueButton id="viy2Button_12Q99p" ref="viy2Button_12Q99p" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_12Q99pClick" />
          <VueButton id="viy2Button_aspEBs" ref="viy2Button_aspEBs" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_aspEBsClick" />
          <VueFormItem
            label="Province"
            prop="province"
          >
            <VueSelect
              id="viy2Select_Amx5O"
              ref="viy2Select_Amx5O"
              v-model="orderFormData.province"
              :style="{ width: '200px' }"
              :options="viy2Select_Amx5OOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Dealer"
            prop="dealer"
          >
            <VueValueList
              id="viy2ValueList_80zpZw"
              ref="viy2ValueList_80zpZw"
              v-model="orderFormData.dealer"
              :style="{ width: '220px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_80zpZwPopoverColumns"
              :popover-query-method="viy2ValueList_80zpZwPopoverQueryMethod"
              :popup-columns="viy2ValueList_80zpZwPopupColumns"
              :popup-conditions="viy2ValueList_80zpZwPopupConditions"
              :popup-query-method="viy2ValueList_80zpZwPopupQueryMethod"
              @select="viy2ValueList_80zpZwSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_8GBGar"
                  ref="viy2Row_8GBGar"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_8GBGas" ref="viy2Text_8GBGas" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Dealer
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 17 }"
                  >
                    <VueButton id="viy2Button_8GBGaD" ref="viy2Button_8GBGaD" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Point"
            prop="pointvl"
          >
            <VueValueList
              id="viy2ValueList_8GziFi"
              ref="viy2ValueList_8GziFi"
              v-model="orderFormData.pointvl"
              :style="{ width: '220px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_8GziFiPopoverColumns"
              :popover-query-method="viy2ValueList_8GziFiPopoverQueryMethod"
              :popup-columns="viy2ValueList_8GziFiPopupColumns"
              :popup-conditions="viy2ValueList_8GziFiPopupConditions"
              :popup-query-method="viy2ValueList_8GziFiPopupQueryMethod"
              @select="viy2ValueList_8GziFiSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_8GziFu"
                  ref="viy2Row_8GziFu"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_8GziFF" ref="viy2Text_8GziFF" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_8GziFG" ref="viy2Button_8GziFG" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Model Code"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_12gOt12"
              ref="viy2ValueList_12gOt12"
              v-model="orderFormData.model"
              :style="{ width: '220px' }"
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
                  id="viy2Row_8GDFR1"
                  ref="viy2Row_8GDFR1"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_8GDFR2" ref="viy2Text_8GDFR2" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_8GDFR3" ref="viy2Button_8GDFR3" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
              id="viy2InputBox_12EqLC"
              ref="viy2InputBox_12EqLC"
              v-model="orderFormData.frameNo"
              :clearable="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            v-show="detailPanelModel"
            id="viy2Row_wZvy4"
            ref="viy2Row_wZvy4"
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
      <VueTable id="grid" ref="grid" :height="gridHeight - 40" :data="gridDs" :edit-config="gridEditConfig">
        <VueRow
          id="viy2Row_AsHNi"
          ref="viy2Row_AsHNi"
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
          fixed="left"
          width="50px"
          min-width="50px"
        />
        <VueInputColumn
          :edit-render="gridPromotionCdEditRender"
          field="promotionCd"
          show-overflow="tooltip"
          title="Promotion Code"
          width="90px"
        />
        <VueInputColumn
          :edit-render="gridPromotionNmEditRender"
          field="promotionNm"
          show-overflow="tooltip"
          title="Promotion Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridProvinceEditRender"
          field="province"
          show-overflow="tooltip"
          title="Province"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridDealerCdEditRender"
          field="dealerCd"
          show-overflow="tooltip"
          title="Dealer Code"
          width="70px"
        />
        <VueInputColumn
          :edit-render="gridDealerNmEditRender"
          field="dealerNm"
          show-overflow="tooltip"
          title="Dealer Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridPointCdEditRender"
          field="pointCd"
          show-overflow="tooltip"
          title="Point Code"
          width="60px"
        />
        <VueInputColumn
          :edit-render="gridPointNmEditRender"
          field="pointNm"
          show-overflow="tooltip"
          title="Point Name"
          min-width="130px"
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
          min-width="130px"
        />
        <VueDateTimeColumn
          :edit-render="gridUploadDateEditRender"
          field="uploadDate"
          align="center"
          title="Promotion Upload Date"
          width="100px"
        />
        <VueDateTimeColumn
          :edit-render="gridReceivedDateEditRender"
          field="receivedDate"
          align="center"
          title="Received Date"
          width="110px"
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
        >
          <VuePagination
            id="viy2Pagination_2GtEFk"
            ref="viy2Pagination_2GtEFk"
            v-model:current-page="viy2Pagination_2GtEFkCurrentPage"
            v-model:page-size="viy2Pagination_2GtEFkPageSize"
            :pager-count="7"
            :total="200"
          />
        </VueCol>
      </VueRow>
    </VuePanel>
  </VueForm>
</template>
