<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'spm0204_01',
});
const form = ref();
const viy2Flex_lymUW = ref();
const viy2Form_xg9KZ = ref();
const viy2Panel_2QlRD = ref();
const saveOrderBtn = ref();
const resetBtn = ref();
const viy2Button_4Dayh8 = ref();
const viy2Row_xglZR = ref();
const viy2ValueList_sloqw = ref();
const viy2Select_x5ZiXG = ref();
const viy2Flex_xilT7 = ref();
const viy2Panel_2QlRD1 = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const formData = reactive({
});
const viy2Form_xg9KZData = reactive({
  parts: '', point: 'YSP 傘下',
});
const rules = reactive({
  viy2ValueList_sloqwRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
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
const gridSalesShopCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSalesShopNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridPriorityEditRender = computed(() => {
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
const gridAdjustAllocatedQtyEditRender = computed(() => {
  return {
    enabled: true,
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
      grow="1"
      class="full-height"
    >
      <VueForm
        id="viy2Form_xg9KZ"
        ref="viy2Form_xg9KZ"
        :model="viy2Form_xg9KZData"
      >
        <VuePanel id="viy2Panel_2QlRD" ref="viy2Panel_2QlRD" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="saveOrderBtn" ref="saveOrderBtn" icon-position="left" class="fixed-button">
                検索
              </VueButton>
              <VueButton id="resetBtn" ref="resetBtn" icon-position="left" class="fixed-button" @click="resetBtnClick">
                クリア
              </VueButton>
              <VueButton id="viy2Button_4Dayh8" ref="viy2Button_4Dayh8" icon-position="left" type="info" class="fixed-button">
                保存
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_xglZR"
            ref="viy2Row_xglZR"
          >
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="部品"
                label-width="120px"
                prop="parts"
                :rules="rules.viy2ValueList_sloqwRules"
              >
                <VueValueList
                  id="viy2ValueList_sloqw"
                  ref="viy2ValueList_sloqw"
                  v-model="viy2Form_xg9KZData.parts"
                  :use-popover="true"
                  width="300px"
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
                  v-model="viy2Form_xg9KZData.point"
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
        id="viy2Flex_xilT7"
        ref="viy2Flex_xilT7"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2QlRD1" ref="viy2Panel_2QlRD1" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" :stripe="true" header-align="center" :highlight-current-row="true" height="98%" :border="true" :show-footer="true" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            <VueInputColumn
              :edit-render="gridSalesShopCdEditRender"
              field="salesShopCd"
              show-overflow="title"
              :sortable="true"
              title="受注先"
              width="180px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridSalesShopNmEditRender"
              field="salesShopNm"
              show-overflow="title"
              :sortable="true"
              title="受注先名称"
              width="180px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              show-overflow="title"
              :sortable="true"
              title="受注番号"
              width="150px"
              header-align="center"
            />
            <VueDateTimeColumn
              :edit-render="gridOrderDateEditRender"
              field="orderDate"
              :visible="true"
              :sortable="true"
              title="受注日"
              width="100px"
            />
            <VueInputColumn
              :edit-render="gridPriorityEditRender"
              field="priority"
              show-overflow="title"
              :sortable="true"
              title="優先度"
              width="100px"
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
              :edit-render="gridBoQtyEditRender"
              field="boQty"
              :visible="'S015SPCREATED' !== orderStatus"
              align="right"
              :sortable="true"
              title="B/O数"
              width="90px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridPcAllocatedQtyEditRender"
              field="pcAllocatedQty"
              :visible="true"
              align="right"
              footer-align="right"
              :sortable="true"
              title="引当数"
              width="110px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridAdjustAllocatedQtyEditRender"
              field="adjustAllocatedQty"
              :visible="true"
              align="right"
              footer-align="right"
              :sortable="true"
              title="調整後数量"
              width="130px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
