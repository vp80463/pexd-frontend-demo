<script setup>
import { IconCloseBold, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdm0107_02',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_5GLRO0 = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_82AuHD = ref();
const viy2Button_82AuHF = ref();
const viy2InputBox_auigg4 = ref();
const viy2InputBox_82Fc4M = ref();
const viy2InputBox_atgqNq = ref();
const viy2DateTimePicker_12W2g0 = ref();
const viy2InputBox_131DVE = ref();
const viy2Panel_amUXt6 = ref();
const viy2Row_amUXu6 = ref();
const viy2Table_amUXxe = ref();
const viy2Row_amUXy4 = ref();
const formData = reactive({
});
const orderFormData = reactive({
  pointvl: '', manifestStatus: 'Issued', supplier: '666N YMVN', deliveryNoteNo: '3M120801', deliveryDate: '20240401', datafieldviy2InputBox_131DVE: '',
});
const rules = reactive({
  viy2ValueList_12gOt1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2Table_amUXxeEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      frameNo: 'RLCJ15C108Y001001',
      engineNo: '15C1-001001',
      barcode: '2515C1 0001001',
      modelCd: '15C100010A',
      modelNm: 'Nouvo SX STD 1DB1',
      supplierDeliveryDate: '20240401',
      colorNm: 'X.Dương',
      purchasePrice: '0',
      error: '',
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
const viy2ValueList_12gOt1Select = (params) => {
  orderFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2Table_amUXxeFrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeEngineNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeBarcodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeSupplierDeliveryDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const viy2Table_amUXxeColorNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxePurchasePriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left">
          Back
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5GLRO0" ref="viy2Button_5GLRO0" icon-position="left" type="info">
          Issue
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="Header" class="margin-top-div except-height-css">
      <VueForm
        id="orderForm"
        ref="orderForm"
        label-width="130px"
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
              label="Receipt Point"
              prop="pointvl"
              :rules="rules.viy2ValueList_12gOt1Rules"
            >
              <VueValueList
                id="viy2ValueList_12gOt1"
                ref="viy2ValueList_12gOt1"
                :style="{ width: '250px' }"
                v-model="orderFormData.pointvl"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
                :popover-width="500"
                :use-popup="true"
                :readonly="true"
                class="no-border"
                :popover-columns="viy2ValueList_12gOt1PopoverColumns"
                :popover-query-method="viy2ValueList_12gOt1PopoverQueryMethod"
                :popup-columns="viy2ValueList_12gOt1PopupColumns"
                :popup-conditions="viy2ValueList_12gOt1PopupConditions"
                :popup-query-method="viy2ValueList_12gOt1PopupQueryMethod"
                @select="viy2ValueList_12gOt1Select"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_82AuHD"
                    ref="viy2Row_82AuHD"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_82AuHE" ref="viy2Text_82AuHE" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_82AuHF" ref="viy2Button_82AuHF" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
              label="Manifest Status"
              prop="manifestStatus"
            >
              <VueInput
                id="viy2InputBox_auigg4"
                ref="viy2InputBox_auigg4"
                v-model="orderFormData.manifestStatus"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Supplier"
              prop="supplier"
            >
              <VueInput
                id="viy2InputBox_82Fc4M"
                ref="viy2InputBox_82Fc4M"
                v-model="orderFormData.supplier"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Delivery Note No"
              label-width="130px"
              prop="deliveryNoteNo"
            >
              <VueInput
                id="viy2InputBox_atgqNq"
                ref="viy2InputBox_atgqNq"
                v-model="orderFormData.deliveryNoteNo"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Supplier Delivery Date"
              label-width="155px"
              prop="deliveryDate "
            >
              <VueDatePicker
                id="viy2DateTimePicker_12W2g0"
                ref="viy2DateTimePicker_12W2g0"
                v-model="orderFormData.deliveryDate "
                :readonly="true"
                class="no-border"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Estimated Time of Arrival"
              label-width="169px"
              prop="datafieldviy2InputBox_131DVE"
            >
              <VueInput
                id="viy2InputBox_131DVE"
                ref="viy2InputBox_131DVE"
                v-model="orderFormData.datafieldviy2InputBox_131DVE"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_amUXt6" ref="viy2Panel_amUXt6" v-model="ModelDetailPanelModel" title="Detail" :collapse="true">
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
            />
          </VueRow>
        </div>
      </template>
      <VueTable id="viy2Table_amUXxe" ref="viy2Table_amUXxe" :height="gridHeight" :data="gridDs" :edit-config="viy2Table_amUXxeEditConfig">
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
          :edit-render="viy2Table_amUXxeFrameNoEditRender"
          field="frameNo"
          show-overflow="tooltip"
          title="Frame No. "
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeEngineNoEditRender"
          field="engineNo"
          show-overflow="tooltip"
          title="Engine No."
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeBarcodeEditRender"
          field="barcode"
          show-overflow="tooltip"
          title="Barcode"
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeModelCdEditRender"
          field="modelCd"
          show-overflow="tooltip"
          title="Model Code"
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeModelNmEditRender"
          field="modelNm"
          show-overflow="tooltip"
          title="Model Name"
          width="150px"
        />
        <VueDateTimeColumn
          :edit-render="viy2Table_amUXxeSupplierDeliveryDateEditRender"
          align="center"
          field="supplierDeliveryDate"
          width="160px"
          title="Supplier Delivery Date"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeColorNmEditRender"
          field="colorNm"
          show-overflow="tooltip"
          title="Color Name"
          width="130px"
        />
        <VueNumberColumn
          :edit-render="viy2Table_amUXxePurchasePriceEditRender"
          field="purchasePrice"
          align="right"
          title="Purchase Price"
          width="120px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeErrorEditRender"
          field="error"
          title="Error"
          min-width="120px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
