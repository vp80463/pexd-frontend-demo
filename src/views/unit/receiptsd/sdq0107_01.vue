<script setup>
import { IconArrowLeftBold, IconCloseBold, IconDocumentCopy, IconRefreshRight, IconSearch, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  supplier_column, supplier_pop_condition, supplier_pop_query_method, supplier_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdq0107_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_6rlKUm = ref();
const viy2Button_6rOQzM = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2ValueList_80BlCs = ref();
const viy2Row_87ii7n = ref();
const viy2Button_87ii7z = ref();
const viy2DateTimePicker_12CKgS = ref();
const viy2DateTimePicker_aqhxvI = ref();
const viy2Button_12Q99p = ref();
const viy2Button_aspEBs = ref();
const viy2Select_12BUAA = ref();
const viy2InputBox_12EqLC = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Button_2BwtE5 = ref();
const viy2Button_2Bx7v3 = ref();
const viy2Button_fN3c3 = ref();
const formData = reactive({
});
const orderFormData = reactive({
  supplier: 'YT350 Yamaha Town Nha Trang_DO 10', dateFrom: '', dateTo: '', datafieldviy2Select_12BUAA: '', deliveryNoteNo: '',
});
const viy2ValueList_80BlCsPopoverQueryMethod = supplier_query_method;
const viy2ValueList_80BlCsPopupColumns = ref(supplier_column);
const viy2ValueList_80BlCsPopupQueryMethod = supplier_pop_query_method;
const viy2Select_12BUAAOpts = reactive([
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
const gridViy2TableButtonColumn_DYaB6Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocumentCopy,
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      manifestStatus: 'YT35',
      dealer: 'YT35',
      orderNo: 'SO2401A000054',
      orderStatus: 'Shipped',
      modelCode: 'B6AD00010A',
      supplierDeliveryDate: '20240401',
      deliveryNoteNo: 'B6AD00010A',
      qty: 12,
      supplierCd: 'YT35',
      supplierNm: 'YMVN',
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
const viy2Button_12Q99pClick = () => {
  const current = queryForm.dateFrom ? queryForm.dateFrom : currentDate;
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
const gridManifestStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSupplierCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_2BwtE5Click = () => {
  showPartsWin.value = true;
};
const gridSupplierNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_2Bx7v3Click = () => {
  showPartsWin.value = true;
};
const gridSupplierDeliveryDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridDeliveryNoteNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_fN3c3Click = () => {
  showPartsWin.value = true;
};
const gridQtyEditRender = computed(() => {
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
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_6rlKUm" ref="viy2Button_6rlKUm" icon-position="left" :disabled="true">
          EV Manifest Import
        </VueButton>
        <VueButton id="viy2Button_6rOQzM" ref="viy2Button_6rOQzM" icon-position="left" type="info">
          Retrieve
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="orderForm"
      ref="orderForm"
      label-width="130px"
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
                  id="viy2Row_87ii7n"
                  ref="viy2Row_87ii7n"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_87ii7o" ref="viy2Text_87ii7o" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Supplier
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 17 }"
                  >
                    <VueButton id="viy2Button_87ii7z" ref="viy2Button_87ii7z" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
            label="Manifest Status"
            prop="datafieldviy2Select_12BUAA"
          >
            <VueSelect
              id="viy2Select_12BUAA"
              ref="viy2Select_12BUAA"
              v-model="orderFormData.datafieldviy2Select_12BUAA"
              :style="{ width: '200px' }"
              :options="viy2Select_12BUAAOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Delivery Note No."
            prop="deliveryNoteNo"
          >
            <VueInput
              id="viy2InputBox_12EqLC"
              ref="viy2InputBox_12EqLC"
              v-model="orderFormData.deliveryNoteNo"
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
          :edit-render="gridManifestStatusEditRender"
          field="manifestStatus"
          show-overflow="tooltip"
          title="Manifest Status"
          width="135px"
        />
        <VueInputColumn
          :edit-render="gridSupplierCdEditRender"
          field="supplierCd"
          show-overflow="tooltip"
          title="Supplier Code"
          width="130px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_2BwtE5" ref="viy2Button_2BwtE5" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_2BwtE5Click" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="gridSupplierNmEditRender"
          field="supplierNm"
          show-overflow="tooltip"
          title="Supplier Name"
          width="150px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_2Bx7v3" ref="viy2Button_2Bx7v3" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_2Bx7v3Click" />
          </template>
        </VueInputColumn>
        <VueDateTimeColumn
          :edit-render="gridSupplierDeliveryDateEditRender"
          field="supplierDeliveryDate"
          align="center"
          title="Supplier Delivery Date "
          width="160px"
        />
        <VueInputColumn
          :edit-render="gridDeliveryNoteNoEditRender"
          field="deliveryNoteNo"
          show-overflow="tooltip"
          title="Delivery Note No."
          width="140px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_fN3c3" ref="viy2Button_fN3c3" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_fN3c3Click" />
          </template>
        </VueInputColumn>
        <VueNumberColumn
          :edit-render="gridQtyEditRender"
          field="qty"
          :resizable="true"
          :sortable="true"
          title="Total Qty "
          width="130px"
        />
        <VueButtonColumn
          fixed="right"
          align="center"
          width="40px"
          :buttons="gridViy2TableButtonColumn_DYaB6Buttons"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
