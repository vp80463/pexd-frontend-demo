<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import viy2Subpage_92y0kPPage from '/src/views/commons/parts_select_multi.vue';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'spm0201_05',
});
const form = ref();
const viy2Flex_lymUW = ref();
const viy2Flex_UImXT = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const resetBtn = ref();
const viy2Button_AsKSg = ref();
const viy2Button_8d4cpK = ref();
const viy2Button_5SFpP6 = ref();
const viy2Button_89VsAk = ref();
const saveOrderBtn = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Row_972Qhd = ref();
const viy2Row_973olD = ref();
const viy2Row_98XSoa = ref();
const viy2CheckBox_98qsnk = ref();
const viy2CheckBox_98ut2U = ref();
const viy2Row_99De62 = ref();
const viy2CheckBox_98lRyL = ref();
const viy2Aside_92y0kC = ref();
const viy2Subpage_92y0kP = ref();
const formData = reactive({
});
const gridRules = {
  salesShop: [{
    required: true,
    message: t('errors.required', [t('label.partsNo')]),
  },
  ],
  deliveryAddress: [{
    required: true,
    message: t('errors.required', [t('label.partsNo')]),
  },
  ],
  siwakecd: [{
    required: true,
    message: t('errors.required', [t('label.partsNo')]),
  },
  ],
  saimokucd: [{
    required: true,
    message: t('errors.required', [t('label.partsNo')]),
  },
  ],
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
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
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
const viy2CheckBox_98qsnkOpts = [
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
const viy2CheckBox_98ut2UOpts = [
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
const viy2CheckBox_98lRyLOpts = [
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
const pageDataSet_ePP6QApi = useApi({
  method: 'post',
});
const pageDataSet_ePP6Q = pageDataSet_ePP6QApi.data;
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
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
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
const gridOrderTypeEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridSalesShopEditRender = computed(() => {
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
const gridDeliveryAddressEditRender = computed(() => {
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
const gridSiwakecdEditRender = computed(() => {
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
const gridSaimokucdEditRender = computed(() => {
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
const gridDemandExceptionSignEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridShipCompleteFlagEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'center',
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
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOutDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
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
const gridPcAllocatedQtyEditRender = computed(() => {
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
const gridAllocatedQtyEditRender = computed(() => {
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
const gridFacilityIdEditRender = computed(() => {
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
      id="viy2Flex_lymUW"
      ref="viy2Flex_lymUW"
      direction="column"
      class="full-height"
    >
      <VueFlex
        id="viy2Flex_UImXT"
        ref="viy2Flex_UImXT"
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
                  <VueButton id="resetBtn" ref="resetBtn" icon-position="left" class="fixed-button" @click="resetBtnClick">
                    クリア
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
                  <VueButton id="saveOrderBtn" ref="saveOrderBtn" icon-position="left" type="info" class="fixed-button">
                    保存
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="98%" :show-footer="true" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            <VueValueListColumn
              v-if="false"
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              :clearable="true"
              fixed="left"
              show-overflow="tooltip"
              :sortable="true"
              title="受注番号"
              width="130px"
            >
              <template #asideHeader="scope">
                <VueRow
                  id="viy2Row_972Qhd"
                  ref="viy2Row_972Qhd"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_972Qhe" ref="viy2Text_972Qhe" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      {{ t('title.partItemRef') }}
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
            <VueSelectColumn
              :edit-render="gridOrderTypeEditRender"
              field="orderType"
              fixed="left"
              :sortable="true"
              title="受注種類"
              width="115px"
            />
            <VueValueListColumn
              :edit-render="gridSalesShopEditRender"
              field="salesShop"
              :clearable="true"
              fixed="left"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先"
              width="180px"
            />
            <VueValueListColumn
              :edit-render="gridDeliveryAddressEditRender"
              field="deliveryAddress"
              :clearable="true"
              fixed="left"
              show-overflow="tooltip"
              :sortable="true"
              title="出荷先"
              width="180px"
            >
              <template #asideHeader="scope">
                <VueRow
                  id="viy2Row_973olD"
                  ref="viy2Row_973olD"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_973olE" ref="viy2Text_973olE" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      {{ t('title.partItemRef') }}
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
            <VueValueListColumn
              :edit-render="gridSiwakecdEditRender"
              field="siwakecd"
              :clearable="true"
              show-overflow="tooltip"
              :sortable="true"
              title="科目コード"
              width="145px"
            />
            <VueValueListColumn
              :edit-render="gridSaimokucdEditRender"
              field="saimokucd"
              :clearable="true"
              show-overflow="tooltip"
              :sortable="true"
              title="摘要コード"
              width="145px"
            >
              <template #asideHeader="scope">
                <VueRow
                  id="viy2Row_98XSoa"
                  ref="viy2Row_98XSoa"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 10 }"
                  >
                    <VueText id="viy2Text_98XSob" ref="viy2Text_98XSob" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      {{ t('title.partItemRef') }}
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
            <VueTemplateColumn
              :edit-render="gridDemandExceptionSignEditRender"
              align="center"
              :sortable="true"
              field="demandExceptionSign"
              title="異常受注サイン"
              width="155px"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_98qsnk"
                  ref="viy2CheckBox_98qsnk"
                  v-model="scope.row.boCancelSign"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
            <VueTemplateColumn
              :edit-render="gridShipCompleteFlagEditRender"
              align="center"
              :sortable="true"
              field="shipCompleteFlag"
              title="まとめ出荷"
              width="130px"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_98ut2U"
                  ref="viy2CheckBox_98ut2U"
                  v-model="scope.row.boCancelSign"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
            <VueDateTimeColumn
              :edit-render="gridDeliveryPlanDateEditRender"
              field="deliveryPlanDate"
              :visible="false"
              :sortable="true"
              title="出庫指示日"
              width="100px"
            />
            <VueValueListColumn
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              :clearable="true"
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
                      {{ t('title.partItemRef') }}
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
              title="引当部品名称"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridPcStockQtyEditRender"
              field="pcStockQty"
              align="right"
              footer-align="center"
              :sortable="true"
              title="在庫数"
              width="110px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridOtherStockQtyEditRender"
              field="otherStockQty"
              align="right"
              aggregate-label="合計"
              footer-align="center"
              :sortable="true"
              title="他在庫数"
              width="110px"
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
            <VueDateTimeColumn
              :edit-render="gridOutDateEditRender"
              field="outDate"
              :visible="true"
              :sortable="true"
              title="納品予定日"
              width="100px"
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
              title="B/Oキャンセル"
              width="140px"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_98lRyL"
                  ref="viy2CheckBox_98lRyL"
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
              :edit-render="gridPcAllocatedQtyEditRender"
              field="pcAllocatedQty"
              :visible="false"
              align="right"
              aggregate="sum"
              footer-align="right"
              :sortable="true"
              title="自引当数"
              width="110px"
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
            <VueNumberColumn
              v-if="false"
              v-show="'S015SPCREATED' !== orderStatus"
              :edit-render="gridFacilityIdEditRender"
              field="facilityId"
              :visible="'S015SPCREATED' !== orderStatus"
              align="right"
              :sortable="true"
              title="出荷倉庫"
              width="100px"
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
