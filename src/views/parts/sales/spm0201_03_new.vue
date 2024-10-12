<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import viy2Subpage_92y0kPPage from '/src/views/commons/parts_select_multi.vue';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'spm0201_03_new',
});
const form = ref();
const viy2Flex_1lcFp = ref();
const viy2Form_3gckrw = ref();
const viy2Panel_3gckra = ref();
const saveOrderBtn = ref();
const resetBtn = ref();
const viy2Row_x5ZiW6 = ref();
const viy2InputBox_2FYzgw = ref();
const viy2Radio_x5Zg2G = ref();
const viy2DateTimePicker_1GTRddE = ref();
const viy2Radio_x5Zg4g = ref();
const viy2CheckBox_x5Zg5W = ref();
const viy2ValueList_sloqw = ref();
const viy2ValueList_slGns = ref();
const viy2Row_3V3IZ = ref();
const viy2InputBox_kxtHQ = ref();
const viy2InputBox_CYeZS = ref();
const viy2InputBox_Aevce = ref();
const viy2Select_x5ZiXG = ref();
const viy2Flex_lymUW = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const viy2Button_dEE4S = ref();
const viy2Button_AsKSg = ref();
const viy2Button_8d4cpK = ref();
const viy2Button_5SFpP6 = ref();
const viy2Button_89VsAk = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Row_99De62 = ref();
const viy2CheckBox_939QSr = ref();
const viy2Aside_92y0kC = ref();
const viy2Subpage_92y0kP = ref();
const formData = reactive({
});
const viy2Form_3gckrwData = reactive({
  orderNo: '', datafieldviy2Radio_ksdEB: 'しない', dateFrom: '', orderType: '通常', orderOutSign: 'N', salesShop: '', deliveryAddress: '', siwakecd: '', saimokucd: '', datafieldviy2InputBox_kxtHQ: '', point: 'YSP 傘下',
});
const rules = reactive({
  viy2ValueList_sloqwRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2ValueList_slGnsRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_kxtHQRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const gridRules = {
  partsNo: [{
    required: true,
    message: t('errors.required', [t('label.partsNo')]),
  },
  ],
  orderQty: [
    { required: true, message: t('errors.required', [t('label.quantity')]) },
  ],
  stdSellingPrice: [
    {
      validator(rule) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (rule.row.sellingPrice <= 0) {
              reject(new Error(t('M.E.00200', [t('label.sellingPrice'), '0'])));
            } else {
              resolve();
            }
          }, 100);
        });
      },
    },
  ],
  discountPercentage: [
    { required: true, message: 'name required' },
  ],
};
const showPartsMultiWin = ref(false);
const viy2Radio_x5Zg2GOpts = reactive([
  { value: 'する', label: 'する' },
  { value: 'しない', label: 'しない' },
]);
const viy2Radio_x5Zg4gOpts = reactive([
  { value: '通常', label: '通常' },
  { value: '社内', label: '社内' },
  { value: '廃却', label: '廃却' },
]);
const viy2CheckBox_x5Zg5WOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2Select_x5ZiXGOpts = reactive([
  {
    codeData1:
'YSP 傘下',
    codeData1:
'YSP 傘下',
  },
]);
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
});
const gridCheckboxConfig = reactive({
  checkField: 'cancelSign',
});
const gridExportMethod = (obj) => {
  const row = obj.row;
  // 如果为saveOrder后的值则都不可编辑
  console.log(row);
  if (row.orderItemId !== null) {
    if (obj.column.property === 'partsNo'
|| obj.column.property === 'orderQty'
|| obj.column.property === 'discountAmtVAT'
|| obj.column.property === 'discount'
|| obj.column.property === 'specialPriceVAT'
|| obj.column.property === 'batteryID') {
      return false;
    }
  } else {
    // createOrderForEmployee勾选时
    if (obj.column.property == 'discountAmtVAT'
|| obj.column.property == 'discount'
|| obj.column.property == 'specialPriceVAT') {
      return orderForEmployeeFlag.value === 'N';
    }
  }
};
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_939QSrOpts = [
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
];
const gridViy2TableButtonColumn_S6mhnButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRow,
      title: 'Delete',
    },
  ];
};
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    if (orderStatus.value === 'S015SPCREATED') {
      resetCondition();
    } else {
      resetCondition();
      gridDsApi.runAsync({
        salesOrderId: null,
      });
    }
  }).catch(() => {
  });
};
const viy2Button_dEE4SClick = () => {
  showPartsMultiWin.value = true;
};
const viy2Button_8d4cpKClick = () => {
  window.open('https://www.baidu.com', '_blank');
};
const viy2Button_5SFpP6Click = () => {
  showPartsMultiWin.value = true;
};
const viy2Button_89VsAkClick = () => {
  const row = {
    partsNo: null,
    partsNm: null,
    partsId: null,
    supersedingPartsNo: null,
    allocatedProductId: null,
    onHandQty: null,
    orderQty: null,
    ymvnStockQty: null,
    stdPrice: null,
    sellingPrice: null,
    taxRate: null,
    orderAmt: null,
    discountAmtVAT: null,
    discount: null,
    specialPriceVAT: null,
    locationCd: null,
    allocatedQty: null,
    pickingQty: null,
    shippedQty: null,
    cancelledQty: null,
    boQty: null,
    largeGroupNm: null,
    batteryID: null,
    boCancel: null,
    orderItemId: null,
    sellingPriceExVAT: null,
    salesLotQty: null,
    batteryFlag: null,
  };
  grid.value.insertAt(row, -1).then((newRow) => {
    grid.value.setCurrentRow(newRow.row);
  });
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      clearable: true,
      selectField: 'code',
      usePopover: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
      popupPagable: true,
      closeOnClickModal: true,
    },
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSupersedingPartsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSupersedingPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderQtyEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      min: 1,
      step: 1,
      stepStrictly: true,
      textAlign: 'right',
    },
  };
});
const gridPcStockQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOtherStockQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridDeliveryPlanDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridStdSellingPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSellingPriceBlur = (obj) => {
  const row = obj.row;
  // 如果有输入值
  if (!isNoValue(row.specialPriceVAT)) {
    row.discountAmtVAT = null;
    row.discount = null;
  }
  calculateSellingPrice(row);
};
const gridSellingPriceEvents = reactive({
  blur: gridSellingPriceBlur,
});
const gridSellingPriceEditRender = computed(() => {
  return {
    enabled: true,
    events: gridSellingPriceEvents,
    attrs: {
      min: 1,
      step: 1,
      stepStrictly: true,
      textAlign: 'right',
    },
  };
});
const gridDiscountPercentageEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridOrderAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridBoCancelSignEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridBoQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOtherAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCancelledQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const onDelRow = (row) => {
  grid.value.remove(row);
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_1lcFp"
      ref="viy2Flex_1lcFp"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="viy2Form_3gckrw"
        ref="viy2Form_3gckrw"
        :model="viy2Form_3gckrwData"
      >
        <VuePanel id="viy2Panel_3gckra" ref="viy2Panel_3gckra" title="受注情報" height="auto">
          <template #header>
            <div style="width: auto">
              <VueButton id="saveOrderBtn" ref="saveOrderBtn" icon-position="left" type="info" class="fixed-button">
                保存
              </VueButton>
              <VueButton id="resetBtn" ref="resetBtn" icon-position="left" class="fixed-button" @click="resetBtnClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_x5ZiW6"
            ref="viy2Row_x5ZiW6"
          >
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="受注番号"
                label-width="120px"
                prop="orderNo"
              >
                <VueInput
                  id="viy2InputBox_2FYzgw"
                  ref="viy2InputBox_2FYzgw"
                  v-model="viy2Form_3gckrwData.orderNo"
                  :readonly="true"
                  type="text"
                  class="no-border"
                  :style="{ width: '160px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="まとめ出荷"
                label-width="120px"
                prop="datafieldviy2Radio_ksdEB"
                size="default"
              >
                <VueRadioGroup
                  id="viy2Radio_x5Zg2G"
                  ref="viy2Radio_x5Zg2G"
                  v-model="viy2Form_3gckrwData.datafieldviy2Radio_ksdEB"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_x5Zg2GOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="出庫指示日"
                label-width="120px"
                prop="dateFrom"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1GTRddE"
                  ref="viy2DateTimePicker_1GTRddE"
                  v-model="viy2Form_3gckrwData.dateFrom"
                  :shortcuts="datePickerShortcuts"
                  type="date"
                  :style="{ width: '130px' }"
                  format="YYYY/MM/DD"
                  value-format="YYYYMMDD"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="受注種類"
                label-width="120px"
                prop="orderType"
                size="default"
              >
                <VueRadioGroup
                  id="viy2Radio_x5Zg4g"
                  ref="viy2Radio_x5Zg4g"
                  v-model="viy2Form_3gckrwData.orderType"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_x5Zg4gOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="異常受注サイン"
                label-width="120px"
                prop="orderOutSign"
              >
                <VueCheckbox
                  id="viy2CheckBox_x5Zg5W"
                  ref="viy2CheckBox_x5Zg5W"
                  v-model="viy2Form_3gckrwData.orderOutSign"
                  true-label="Y"
                  false-label="N"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            />
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="受注先"
                label-width="120px"
                prop="salesShop"
                :rules="rules.viy2ValueList_sloqwRules"
              >
                <VueValueList
                  id="viy2ValueList_sloqw"
                  ref="viy2ValueList_sloqw"
                  v-model="viy2Form_3gckrwData.salesShop"
                  :use-popover="false"
                  width="290px"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="出荷先"
                label-width="120px"
                prop="deliveryAddress"
                :rules="rules.viy2ValueList_slGnsRules"
              >
                <VueValueList
                  id="viy2ValueList_slGns"
                  ref="viy2ValueList_slGns"
                  v-model="viy2Form_3gckrwData.deliveryAddress"
                  :use-popover="true"
                  width="300px"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueRow
                id="viy2Row_3V3IZ"
                ref="viy2Row_3V3IZ"
              >
                <VueCol
                  v-show="true"
                  item-key="item"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueFormItem
                    label="仕訳コード"
                    label-width="120px"
                    prop="siwakecd"
                    :rules="rules.viy2InputBox_kxtHQRules"
                  >
                    <VueInput
                      id="viy2InputBox_kxtHQ"
                      ref="viy2InputBox_kxtHQ"
                      v-model="viy2Form_3gckrwData.siwakecd"
                      :style="{ width: '50px' }"
                    />
                  </VueFormItem>
                  <!-- BEGIN CUSTOM DIV CODE -->
                  <span>-</span>
                  <!-- END CUSTOM DIV CODE -->
                  <VueFormItem
                    label-width="0px"
                    prop="saimokucd"
                  >
                    <VueInput
                      id="viy2InputBox_CYeZS"
                      ref="viy2InputBox_CYeZS"
                      v-model="viy2Form_3gckrwData.saimokucd"
                      :style="{ width: '80px' }"
                    />
                  </VueFormItem>
                </VueCol>
              </VueRow>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="コメント"
                label-width="120px"
                prop="datafieldviy2InputBox_kxtHQ"
              >
                <VueInput
                  id="viy2InputBox_Aevce"
                  ref="viy2InputBox_Aevce"
                  v-model="viy2Form_3gckrwData.datafieldviy2InputBox_kxtHQ"
                  :style="{ width: '350px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              v-show="true"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                v-show="false"
                label="出荷倉庫"
                label-width="120px"
                prop="point"
              >
                <VueSelect
                  id="viy2Select_x5ZiXG"
                  ref="viy2Select_x5ZiXG"
                  v-model="viy2Form_3gckrwData.point"
                  :style="{ width: '300px' }"
                  :disabled="true"
                  :filterable="true"
                  :clearable="true"
                  :options="viy2Select_x5ZiXGOpts"
                  :props="{
                    label: 'codeData1',
                    value: 'codeData1',
                  }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_lymUW"
        ref="viy2Flex_lymUW"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" title="明細情報" height="100%" collapse-icon-position="left">
          <template #header>
            <div style="width: auto">
              <VueRow
                id="viy2Row_wZvy4"
                ref="viy2Row_wZvy4"
              >
                <VueCol
                  v-show="true"
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_dEE4S" ref="viy2Button_dEE4S" icon-position="left" type="danger" @click="viy2Button_dEE4SClick">
                    受注キャンセル
                  </VueButton>
                  <VueButton id="viy2Button_AsKSg" ref="viy2Button_AsKSg" icon-position="left">
                    ファイル取込
                  </VueButton>
                  <VueButton id="viy2Button_8d4cpK" ref="viy2Button_8d4cpK" icon-position="left" @click="viy2Button_8d4cpKClick">
                    YPEC
                  </VueButton>
                  <VueButton id="viy2Button_5SFpP6" ref="viy2Button_5SFpP6" icon-position="left" @click="viy2Button_5SFpP6Click">
                    部品選択
                  </VueButton>
                  <VueButton id="viy2Button_89VsAk" ref="viy2Button_89VsAk" icon-position="left" @click="viy2Button_89VsAkClick">
                    行追加
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :show-footer="true" :edit-rules="gridRules" :edit-config="gridEditConfig" :checkbox-config="gridCheckboxConfig" :mouse-config="gridMouseConfig">
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
              header-align="center"
              title="No."
            />
            <VueSelectionColumn
              :resizable="true"
              check-field="cancelSign"
              align="center"
              fixed="left"
              header-align="center"
              width="50px"
              type="checkbox"
            />
            <VueValueListColumn
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              :clearable="true"
              fixed="left"
              show-overflow="tooltip"
              :sortable="true"
              title="部品番号"
              width="180px"
            >
              <template #asideHeader="scope">
                <VueRow
                  id="viy2Row_99De62"
                  ref="viy2Row_99De62"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_5Wg0tq" ref="viy2Text_5Wg0tq" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      部品選択
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 14 }"
                  />
                </VueRow>
              </template>
            </VueValueListColumn>
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              show-overflow="title"
              :sortable="true"
              title="部品名称"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridSupersedingPartsCdEditRender"
              field="supersedingPartsCd"
              :sortable="true"
              title="引当部品番号"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridSupersedingPartsNmEditRender"
              field="supersedingPartsNm"
              :sortable="true"
              aggregate-label="合計"
              title="引当部品名称"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridOrderQtyEditRender"
              field="orderQty"
              align="right"
              :resizable="true"
              :step="1"
              :step-strictly="true"
              :min="1"
              aggregate="sum"
              :sortable="true"
              title="受注数"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridPcStockQtyEditRender"
              field="pcStockQty"
              align="right"
              footer-align="center"
              :sortable="true"
              title="在庫数"
              width="100px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridOtherStockQtyEditRender"
              field="otherStockQty"
              align="right"
              footer-align="center"
              :sortable="true"
              title="他在庫数"
              width="100px"
              header-align="center"
            />
            <VueDateTimeColumn
              :edit-render="gridDeliveryPlanDateEditRender"
              field="deliveryPlanDate"
              :visible="true"
              :sortable="true"
              title="納品予定日"
              width="110px"
            />
            <VueNumberColumn
              :edit-render="gridStdSellingPriceEditRender"
              field="stdSellingPrice"
              align="right"
              show-overflow="tooltip"
              :sortable="true"
              title="希望小売価格"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridSellingPriceEditRender"
              field="sellingPrice"
              align="right"
              :min="1"
              :step="1"
              :step-strictly="true"
              :sortable="true"
              title="仕切単価"
              width="120px"
              header-align="center"
            />
            <VueSelectColumn
              :edit-render="gridDiscountPercentageEditRender"
              field="discountPercentage"
              :sortable="true"
              title="仕切率"
              width="110px"
            />
            <VueNumberColumn
              :edit-render="gridOrderAmtEditRender"
              field="orderAmt"
              align="right"
              aggregate="sum"
              :sortable="true"
              title="合計金額"
              width="110px"
              header-align="center"
            />
            <VueTemplateColumn
              :edit-render="gridBoCancelSignEditRender"
              align="center"
              :sortable="true"
              field="boCancelSign"
              title=" B/O キャンセル"
              width="140px"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_939QSr"
                  ref="viy2CheckBox_939QSr"
                  v-model="scope.row.boCancelSign"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
            <VueNumberColumn
              v-if="true"
              v-show="'S015SPCREATED' !== orderStatus"
              :edit-render="gridBoQtyEditRender"
              field="boQty"
              :visible="'S015SPCREATED' !== orderStatus"
              align="right"
              :sortable="true"
              title="B/O数"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              v-if="false"
              v-show="'S015SPCREATED' !== orderStatus"
              :edit-render="gridAllocatedQtyEditRender"
              field="allocatedQty"
              :visible="'S015SPCREATED' !== orderStatus"
              align="right"
              :sortable="true"
              title="引当数"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              v-if="false"
              :edit-render="gridOtherAllocatedQtyEditRender"
              field="otherAllocatedQty"
              :visible="false"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              title="他引当数"
              width="110px"
              header-align="center"
            />
            <VueNumberColumn
              v-if="false"
              v-show="'S015SPCREATED' !== orderStatus"
              :edit-render="gridCancelledQtyEditRender"
              field="cancelledQty"
              :visible="false"
              align="right"
              :sortable="true"
              title="キャンセル数"
              width="130px"
              header-align="center"
            />
            <VueButtonColumn
              align="center"
              fixed="right"
              width="40px"
              :buttons="gridViy2TableButtonColumn_S6mhnButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="viy2Aside_92y0kC"
      ref="viy2Aside_92y0kC"
      v-model="showPartsMultiWin"
      :modal="true"
      direction="btt"
      size="90%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="true"
    >
      <viy2Subpage_92y0kPPage
        id="viy2Subpage_92y0kP"
        ref="viy2Subpage_92y0kP"
        :init-data="asideParams"
        @select="callbkSelectMultiParts"
        @close="closeMultiPartsAside"
      />
    </VueAside>
  </VueForm>
</template>
