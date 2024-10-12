<script setup>
import { IconArrowLeftBold, IconCloseBold, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  supplier_column, supplier_pop_condition, supplier_pop_query_method, supplier_query_method,
} from '@/settings/valuelistSetting.js';
import valulistWin from '/src/views/REF/SAMPLE/modelInfo.vue';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdm0107_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_5GLRO0 = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2ValueList_80BlCs = ref();
const viy2Row_82qP3f = ref();
const viy2Button_82qP3r = ref();
const viy2DateTimePicker_12W2g0 = ref();
const viy2DateTimePicker_atptG0 = ref();
const viy2Button_12WFWl = ref();
const viy2Button_atubPk = ref();
const viy2ValueList_amnPPM = ref();
const viy2InputBox_atgqNq = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const viy2Button_amiikw = ref();
const viy2Row_12hnwe = ref();
const viy2InputBox_12hqq6 = ref();
const viy2Panel_amUXt6 = ref();
const viy2Row_amUXu6 = ref();
const viy2Table_amUXxe = ref();
const viy2Row_amUXy4 = ref();
const formData = reactive({
  deliveryNoteNo: '',
});
const orderFormData = reactive({
  supplier: '', dateFrom: '', dateTo: '', status: '', deliveryNoteNo: '',
});
const rules = reactive({
  viy2InputBox_12hqq6Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_80BlCsPopoverQueryMethod = supplier_query_method;
const viy2ValueList_80BlCsPopupColumns = ref(supplier_column);
const viy2ValueList_80BlCsPopupQueryMethod = supplier_pop_query_method;
const viy2Table_amUXxeEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      manifestStatus: 'Issued',
      supplierDeliveryDate: '20240401',
      supplierCd: '666N',
      supplierNm: 'YMVN',
      deliveryNoteNo: '0L078229',
      qty: 100,
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
const viy2ValueList_80BlCsSelect = (params) => {
  orderFormData.supplier = `${params.code} ${params.name}`;
};
const viy2ValueList_80BlCsPopoverColumns = computed(() => {
  return supplier_column;
});
const viy2ValueList_80BlCsPopupConditions = computed(() => {
  return supplier_pop_condition;
});
const viy2Button_12WFWlClick = () => {
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
const viy2Button_atubPkClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2Table_amUXxeManifestStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeSupplierCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeSupplierNmEditRender = computed(() => {
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
const viy2Table_amUXxeDeliveryNoteNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
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
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5GLRO0" ref="viy2Button_5GLRO0" icon-position="left" type="info">
          Retrieve
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
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="Supplier"
              prop="supplier"
            >
              <VueValueList
                id="viy2ValueList_80BlCs"
                ref="viy2ValueList_80BlCs"
                :style="{ width: '250px' }"
                v-model="orderFormData.supplier"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
                :popover-width="500"
                :use-popup="true"
                :clearable="true"
                :popover-columns="viy2ValueList_80BlCsPopoverColumns"
                :popover-query-method="viy2ValueList_80BlCsPopoverQueryMethod"
                :popup-columns="viy2ValueList_80BlCsPopupColumns"
                :popup-conditions="viy2ValueList_80BlCsPopupConditions"
                :popup-query-method="viy2ValueList_80BlCsPopupQueryMethod"
                @select="viy2ValueList_80BlCsSelect"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_82qP3f"
                    ref="viy2Row_82qP3f"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_82qP3g" ref="viy2Text_82qP3g" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_82qP3r" ref="viy2Button_82qP3r" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
            <VueFormItem
              label="Supplier Delivery Date"
              label-width="155px"
              prop="dateFrom"
            >
              <VueDatePicker
                id="viy2DateTimePicker_12W2g0"
                ref="viy2DateTimePicker_12W2g0"
                v-model="orderFormData.dateFrom"
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
            >
              <VueDatePicker
                id="viy2DateTimePicker_atptG0"
                ref="viy2DateTimePicker_atptG0"
                v-model="orderFormData.dateTo"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueButton id="viy2Button_12WFWl" ref="viy2Button_12WFWl" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_12WFWlClick" />
            <VueButton id="viy2Button_atubPk" ref="viy2Button_atubPk" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_atubPkClick" />
            <VueFormItem
              label="Manifest Status"
              prop="status"
            >
              <VueValueList
                id="viy2ValueList_amnPPM"
                ref="viy2ValueList_amnPPM"
                v-model="orderFormData.status"
                :popover-component="valulistWin"
                :popover-width="500"
                :use-popover="true"
              />
            </VueFormItem>
            <VueFormItem
              label="Delivery Note No"
              label-width="130px"
              prop="deliveryNoteNo"
            >
              <VueInput
                id="viy2InputBox_atgqNq"
                ref="viy2InputBox_atgqNq"
                v-model="orderFormData.deliveryNoteNo"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="ScandetailPanelModel" title="Scan Detail" :collapse="true">
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
            >
              <VueButton id="viy2Button_amiikw" ref="viy2Button_amiikw" icon-position="left">
                Confirm
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueRow
        id="viy2Row_12hnwe"
        ref="viy2Row_12hnwe"
      >
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Delivery Note No"
            label-width="130px"
            prop="deliveryNoteNo"
            :rules="rules.viy2InputBox_12hqq6Rules"
          >
            <VueInput
              id="viy2InputBox_12hqq6"
              ref="viy2InputBox_12hqq6"
              v-model="formData.deliveryNoteNo"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
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
      <VueTable id="viy2Table_amUXxe" ref="viy2Table_amUXxe" :height="gridHeight - 250" :data="gridDs" :edit-config="viy2Table_amUXxeEditConfig">
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
          :edit-render="viy2Table_amUXxeManifestStatusEditRender"
          field="manifestStatus"
          show-overflow="tooltip"
          title="Manifest Status"
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeSupplierCdEditRender"
          field="supplierCd"
          show-overflow="tooltip"
          title="Supplier Code"
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeSupplierNmEditRender"
          field="supplierNm"
          show-overflow="tooltip"
          title="Supplier Name"
          min-width="150px"
        />
        <VueDateTimeColumn
          :edit-render="viy2Table_amUXxeSupplierDeliveryDateEditRender"
          align="center"
          field="supplierDeliveryDate"
          width="170px"
          title="Supplier Delivery Date"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeDeliveryNoteNoEditRender"
          field="deliveryNoteNo"
          show-overflow="tooltip"
          title="Delivery Note No. "
          width="140px"
        />
        <VueNumberColumn
          :edit-render="viy2Table_amUXxeQtyEditRender"
          field="qty"
          align="right"
          title="Total Qty"
          width="120px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
