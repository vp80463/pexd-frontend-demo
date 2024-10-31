<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import viy2Subpage_92y0kPPage from '/src/views/commons/parts_select_multi.vue';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'spm0214_01',
});
const form = ref();
const viy2Flex_9gmBC = ref();
const viy2Form_3gckrw = ref();
const viy2Row_3gckrx = ref();
const viy2Panel_3gckra = ref();
const resetBtn = ref();
const saveOrderBtn = ref();
const viy2Row_x5ZiW6 = ref();
const viy2InputBox_2FYzgw = ref();
const viy2Radio_x5Zg4g = ref();
const viy2Radio_x5Zg2G = ref();
const viy2ValueList_sloqw = ref();
const viy2Row_3V3IZ = ref();
const viy2InputBox_kxtHQ = ref();
const viy2InputBox_CYeZS = ref();
const viy2InputBox_9aVkgo = ref();
const viy2InputBox_Aevce = ref();
const viy2Select_x5ZiXG = ref();
const viy2Flex_lymUW = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const viy2Button_AsKSg = ref();
const viy2Button_8d4cpK = ref();
const viy2Button_5SFpP6 = ref();
const viy2Button_89VsAk = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Row_99De62 = ref();
const viy2Aside_92y0kC = ref();
const viy2Subpage_92y0kP = ref();
const formData = reactive({
});
const viy2Form_3gckrwData = reactive({
  orderNo: '', orderType: '直送売上', datafieldviy2Radio_ksdEB: 'する', salesShop: '', siwakecd: '', saimokucd: '', customerInfo: '', datafieldviy2InputBox_kxtHQ: '', point: 'YSP 傘下',
});
const rules = reactive({
  viy2ValueList_sloqwRules: [
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
  partsNo: [
    { required: true, message: t('errors.required', [t('label.partsNo')]) },
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
  purchasePrice: [
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
const viy2Radio_x5Zg4gOpts = reactive([
  { value: '直送売上', label: '直送売上' },
  { value: '特殊部品売上', label: '特殊部品売上' },
  { value: '取消', label: '取消' },
]);
const viy2Radio_x5Zg2GOpts = reactive([
  { value: 'する', label: 'する' },
  { value: 'しない', label: 'しない' },
]);
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
const gridStdSellingPriceEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPurchasePriceEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridDiscountPercentageEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInPercentageBlur = (obj) => {
  const row = obj.row;
  // 如果有输入值
  if (!isNoValue(row.specialPriceVAT)) {
    row.discountAmtVAT = null;
    row.discount = null;
  }
  calculateSellingPrice(row);
};
const gridInPercentageEvents = reactive({
  blur: gridInPercentageBlur,
});
const gridInPercentageEditRender = computed(() => {
  return {
    enabled: true,
    events: gridInPercentageEvents,
    attrs: {
      min: 1,
      step: 1,
      stepStrictly: true,
      textAlign: 'right',
    },
  };
});
const gridOutPercentageBlur = (obj) => {
  const row = obj.row;
  // 如果有输入值
  if (!isNoValue(row.specialPriceVAT)) {
    row.discountAmtVAT = null;
    row.discount = null;
  }
  calculateSellingPrice(row);
};
const gridOutPercentageEvents = reactive({
  blur: gridOutPercentageBlur,
});
const gridOutPercentageEditRender = computed(() => {
  return {
    enabled: true,
    events: gridOutPercentageEvents,
    attrs: {
      min: 1,
      step: 1,
      stepStrictly: true,
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
const gridSellingPriceMJBlur = (obj) => {
  const row = obj.row;
  // 如果有输入值
  if (!isNoValue(row.specialPriceVAT)) {
    row.discountAmtVAT = null;
    row.discount = null;
  }
  calculateSellingPrice(row);
};
const gridSellingPriceMJEvents = reactive({
  blur: gridSellingPriceMJBlur,
});
const gridSellingPriceMJEditRender = computed(() => {
  return {
    enabled: true,
    events: gridSellingPriceMJEvents,
    attrs: {
      min: 1,
      step: 1,
      stepStrictly: true,
      textAlign: 'right',
    },
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
const onDelRow = (row) => {
  grid.value.remove(row);
};
const closeMultiPartsAside = (row) => {
  showPartsMultiWin.value = false;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_9gmBC"
      ref="viy2Flex_9gmBC"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="viy2Form_3gckrw"
        ref="viy2Form_3gckrw"
        label-width="140px"
        :model="viy2Form_3gckrwData"
      >
        <VueRow
          id="viy2Row_3gckrx"
          ref="viy2Row_3gckrx"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VuePanel id="viy2Panel_3gckra" ref="viy2Panel_3gckra" :collapse="true" title="売上情報">
              <template #header>
                <div style="width: auto">
                  <VueButton id="resetBtn" ref="resetBtn" icon-position="left" class="fixed-button" @click="resetBtnClick">
                    クリア
                  </VueButton>
                  <VueButton id="saveOrderBtn" ref="saveOrderBtn" icon-position="left" type="info" class="fixed-button">
                    保存
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
                    label="売上番号"
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
                    label="売上種別"
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
                    label="納品書出力"
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
                    label="売上先"
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
                          :style="{ width: '100px' }"
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
                          :style="{ width: '100px' }"
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
                    label="お客様情報"
                    label-width="120px"
                    prop="customerInfo"
                  >
                    <VueInput
                      id="viy2InputBox_9aVkgo"
                      ref="viy2InputBox_9aVkgo"
                      v-model="viy2Form_3gckrwData.customerInfo"
                      :style="{ width: '345px' }"
                    />
                  </VueFormItem>
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 16 }"
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
                      :style="{ width: '435px' }"
                    />
                  </VueFormItem>
                </VueCol>
                <VueCol
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
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_lymUW"
        ref="viy2Flex_lymUW"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" title="明細情報" :collapse="true" height="100%" collapse-icon-position="left">
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
          <VueTable id="grid" ref="grid" :stripe="true" header-align="center" :highlight-current-row="true" height="97%" :border="true" :show-footer="true" :edit-rules="gridRules" :edit-config="gridEditConfig" :checkbox-config="gridCheckboxConfig" :mouse-config="gridMouseConfig">
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
              aggregate-label="合計"
              title="部品名称"
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
              :edit-render="gridPurchasePriceEditRender"
              field="purchasePrice"
              align="right"
              show-overflow="tooltip"
              :visible="true"
              :sortable="true"
              title="仕切単価"
              width="130px"
              header-align="center"
            />
            <VueSelectColumn
              v-if="false"
              :edit-render="gridDiscountPercentageEditRender"
              field="discountPercentage"
              :sortable="true"
              title="仕切率"
              width="110px"
            />
            <VueNumberColumn
              :edit-render="gridInPercentageEditRender"
              field="inPercentage"
              align="right"
              :min="1"
              :step="1"
              :step-strictly="true"
              :sortable="true"
              title="内掛"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridOutPercentageEditRender"
              field="outPercentage"
              align="right"
              :min="1"
              :step="1"
              :step-strictly="true"
              :sortable="true"
              title="外掛"
              width="120px"
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
              title="仕入単価"
              width="120px"
              header-align="center"
            />
            <VueNumberColumn
              v-if="false"
              :edit-render="gridSellingPriceMJEditRender"
              field="sellingPriceMJ"
              align="right"
              :min="1"
              :step="1"
              :step-strictly="true"
              :sortable="true"
              title="MJ売原"
              width="120px"
              header-align="center"
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
