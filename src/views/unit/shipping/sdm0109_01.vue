<script setup>
import { IconCloseBold, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  dealer_column, dealer_pop_condition, dealer_pop_query_method, dealer_query_method,
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdm0109_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_3qnNmo = ref();
const viy2Button_5GLRO0 = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_99De6 = ref();
const viy2Button_81M3R7 = ref();
const viy2ValueList_80zpZw = ref();
const viy2Row_81qYL7 = ref();
const viy2Button_81qYL9 = ref();
const viy2DateTimePicker_ldLvp = ref();
const viy2Panel_amUXt6 = ref();
const viy2Row_amUXu6 = ref();
const viy2Button_amiikw = ref();
const viy2Table_amUXxe = ref();
const viy2Row_amUXy4 = ref();
const formData = reactive({
});
const orderFormData = reactive({
  point: 'YT350 Yamaha Town Nha Trang_DO 10', dealer: '', datafieldviy2DateTimePicker_ldLvp: '',
});
const rules = reactive({
  viy2ValueList_12gOt1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2ValueList_80zpZwRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2ValueList_80zpZwPopoverQueryMethod = dealer_query_method;
const viy2ValueList_80zpZwPopupColumns = ref(dealer_column);
const viy2ValueList_80zpZwPopupQueryMethod = dealer_pop_query_method;
const viy2Table_amUXxeEditConfig = reactive({
  trigger: 'click',
});
const scanGridDsApi = useApi({
  method: 'post',
  localData: [
    {
      frameNo: '10F-84700-21-TK',
      engineNo: 'Cum den hau',
      price: 100,
      minPurchaseQty: 1000,
      purchaseLot: 1000,
      orderQty: 10,
      orderAmount: 3,
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
const scanGridDs = scanGridDsApi.data;
const modelGridDsApi = useApi({
  method: 'post',
  localData: [
    {
      modelCd: 'sdasdfdfsa',
      modelNm: '10F-84700-21-TK',
      colorNm: 'Cum den hau',
      price: 100,
      minPurchaseQty: 1000,
      purchaseLot: 1000,
      qty: 10,
      currentStock: 3,
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
const modelGridDs = modelGridDsApi.data;
const viy2ValueList_12gOt1Select = (params) => {
  orderFormData.fromPoint = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2ValueList_80zpZwSelect = (params) => {
  orderFormData.dealer = `${params.code} ${params.name}`;
};
const viy2ValueList_80zpZwPopoverColumns = computed(() => {
  return dealer_column;
});
const viy2ValueList_80zpZwPopupConditions = computed(() => {
  return dealer_pop_condition;
});
const viy2Table_amUXxeDealerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeDealerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeFrameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const viy2Table_amUXxeFacilityEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeProductEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeErrorEditRender = computed(() => {
  return {
    enabled: false,
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
        <VueButton id="viy2Button_3qnNmo" ref="viy2Button_3qnNmo" icon-position="left">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5GLRO0" ref="viy2Button_5GLRO0" icon-position="left" type="info">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" title="Header" class="margin-top-div except-height-css">
      <VueForm
        id="orderForm"
        ref="orderForm"
        :model="orderFormData"
      >
        <VueRow
          id="viy2Row_3mqzSt"
          ref="viy2Row_3mqzSt"
        >
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Point"
              prop="point"
              :rules="rules.viy2ValueList_12gOt1Rules"
            >
              <VueValueList
                id="viy2ValueList_12gOt1"
                ref="viy2ValueList_12gOt1"
                :style="{ width: '250px' }"
                v-model="orderFormData.point"
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
                    id="viy2Row_99De6"
                    ref="viy2Row_99De6"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_81M3R6" ref="viy2Text_81M3R6" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_81M3R7" ref="viy2Button_81M3R7" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="P.I.C"
              prop="dealer"
              :rules="rules.viy2ValueList_80zpZwRules"
            >
              <VueValueList
                id="viy2ValueList_80zpZw"
                ref="viy2ValueList_80zpZw"
                v-model="orderFormData.dealer"
                :style="{ width: '250px' }"
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
                    id="viy2Row_81qYL7"
                    ref="viy2Row_81qYL7"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_81qYL8" ref="viy2Text_81qYL8" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_81qYL9" ref="viy2Button_81qYL9" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Return Date"
              prop="datafieldviy2DateTimePicker_ldLvp"
            >
              <VueDatePicker
                id="viy2DateTimePicker_ldLvp"
                ref="viy2DateTimePicker_ldLvp"
                v-model="orderFormData.datafieldviy2DateTimePicker_ldLvp"
                type="date"
                :style="{ width: '130px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_amUXt6" ref="viy2Panel_amUXt6" v-model="ModelDetailPanelModel" title="Detail">
      <template #header>
        <div style="width: 400px">
          <VueRow
            v-show="detailPanelModel"
            id="viy2Row_amUXu6"
            ref="viy2Row_amUXu6"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_amiikw" ref="viy2Button_amiikw" icon-position="left">
                Import
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="viy2Table_amUXxe" ref="viy2Table_amUXxe" :height="gridHeight - 250" :data="modelGridDs" :edit-config="viy2Table_amUXxeEditConfig">
        <VueRow
          id="viy2Row_amUXy4"
          ref="viy2Row_amUXy4"
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
          :edit-render="viy2Table_amUXxeDealerCdEditRender"
          field="dealerCd"
          title="Dealer Code"
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeDealerNmEditRender"
          field="dealerNm"
          title="Point Code"
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeFrameEditRender"
          field="frame"
          title="Frame No."
          width="130px"
        />
        <VueDateTimeColumn
          :edit-render="viy2Table_amUXxeDateEditRender"
          field="date"
          title="Date"
          width="100px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeFacilityEditRender"
          field="facility"
          title="Facility"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeProductEditRender"
          field="product"
          title="Product"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeErrorEditRender"
          field="error"
          title="Error"
          min-width="130px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
