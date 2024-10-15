<script setup>
import { IconDownload, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import detailPagePage from '/src/views/parts/receipt/spm0301_02.vue';
import { warn_msg } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const asideParams = ref();
let point;
let pointId;
let supplier;
let supplierId;
defineOptions({
  name: 'spm0302_01',
});
const form = ref();
const viy2Flex_LT1Oa = ref();
const viy2Flex_LT7Dg = ref();
const viy2Panel_2741X = ref();
const viy2Button_9SMLNC = ref();
const resetBtn = ref();
const viy2Button_6rlKUm = ref();
const queryForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_RfsMSE = ref();
const viy2Button_E1Br6 = ref();
const viy2InputBox_2E6HTU = ref();
const viy2Button_2E6HU7 = ref();
const partsNo = ref();
const viy2Select_oP7od = ref();
const viy2Panel_27lR9 = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const detailAside = ref();
const detailPage = ref();
const formData = reactive({
});
const queryFormData = reactive({
  purchaseNo: '', salesNo: '', partsNo: '', point: '',
});
const rules = reactive({
  viy2Select_oP7odRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const gridRules = {
  deliveryQty: [
    { required: true, message: t('errors.required', [t('label.orderQuantity')]) },
  ],
  deliveryPrice: [
    { required: true, message: t('errors.required', [t('label.orderQuantity')]) },
  ],
};
const showDetailAside = ref(false);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/parts/spm0301/getReceiptManifestList.json',
  method: 'post',
  data: () => {
    return Object.assign({}, queryFormData);
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0301/confirmReceiptManifest.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const supplierDsApi = useApi({
  url: '/common/helper/supplierList.json',
  method: 'post',
  data: {},
}, {
  onSuccess: (data) => {
    supplier = data[0].desc;
    supplierId = data[0].id;
    queryFormData.supplier = supplier;
    queryFormData.supplierId = supplierId;
  },
  manual: true,
});
const supplierDs = supplierDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const viy2Button_9SMLNCClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_6rlKUmClick = () => {
  const checkDataList = grid.value.getCheckboxRecords();
  let msg = '';
  const caseNoList = [];
  if (checkDataList.length === 0) {
    msg = t('M.E.10015');
  }
  for (const key in checkDataList) {
    const item = checkDataList[key];
    if (item.errorLines !== 0) {
      msg = t('M.E.00352');
      break;
    }
    caseNoList.push(item.caseNo);
  }
  if (msg !== '') {
    warn_msg(msg);
  } else {
    queryForm.value.validate((valid) => {
      if (valid) {
        confirmDsApi.runAsync({
          caseNoList,
          pointId: queryFormData.pointId,
          allTableDataList: checkDataList,
        });
      }
    });
  }
};
const viy2Select_oP7odChange = (value, data) => {
  queryFormData.pointId = data.id;
  queryFormData.pointCd = data.code;
  queryFormData.pointNm = data.name;
};
const gridCellDblclick = (obj) => {
  showRowDetail(obj.row);
};
const gridPurchaseNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDeliveryNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsnoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPartsnameEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAllocatepartsnoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAllocatepartsnameEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPurchaseQtyEditRender = computed(() => {
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
const gridDeliveryQtyEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridDeliveryPriceEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReceiptAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridConsignee_cdEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridName_kanjiEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridKana_nameEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPost_cdEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAdrsEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTelEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridFaxEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  pointId = uc.defaultPointId;
  queryFormData.point = point;
  queryFormData.pointId = pointId;
});
watch(() => ({ ...queryFormData }), (newVal, oldVal) => {
  resetTblResults();
}, { deep: true });
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  queryFormData.point = point;
  queryFormData.pointId = pointId;
  queryFormData.supplier = supplier;
  queryFormData.supplierId = supplierId;
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
};
const showRowDetail = (row) => {
  showDetailAside.value = true;
  asideParams.value = {
    caseNo: row.caseNo,
    point: queryFormData.point,
    pointId: queryFormData.pointId,
    supplier: queryFormData.supplier,
  };
};
const closeSpm030102 = () => {
  showDetailAside.value = false;
  gridDsApi.runAsync();
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_LT1Oa"
      ref="viy2Flex_LT1Oa"
      direction="column"
      class="full-height"
    >
      <VueFlex
        id="viy2Flex_LT7Dg"
        ref="viy2Flex_LT7Dg"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2741X" ref="viy2Panel_2741X" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_9SMLNC" ref="viy2Button_9SMLNC" icon-position="left" @click="viy2Button_9SMLNCClick">
                検索
              </VueButton>
              <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
                クリア
              </VueButton>
              <VueButton id="viy2Button_6rlKUm" ref="viy2Button_6rlKUm" icon-position="left" type="info" @click="viy2Button_6rlKUmClick">
                保存
              </VueButton>
            </div>
          </template>
          <VueForm
            id="queryForm"
            ref="queryForm"
            :model="queryFormData"
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
                  label="発注番号"
                  prop="purchaseNo"
                >
                  <VueInput
                    id="viy2InputBox_RfsMSE"
                    ref="viy2InputBox_RfsMSE"
                    v-model="queryFormData.purchaseNo"
                    :clearable="true"
                    :style="{ width: '180px' }"
                  >
                    <template #append>
                      <VueButton id="viy2Button_E1Br6" ref="viy2Button_E1Br6" icon-position="left" type="primary" class="icon-button-width" :icon="IconDownload" />
                    </template>
                  </VueInput>
                </VueFormItem>
                <VueFormItem
                  label="仕入先受注番号"
                  prop="salesNo"
                >
                  <VueInput
                    id="viy2InputBox_2E6HTU"
                    ref="viy2InputBox_2E6HTU"
                    v-model="queryFormData.salesNo"
                    :clearable="true"
                    :style="{ width: '180px' }"
                  >
                    <template #append>
                      <VueButton id="viy2Button_2E6HU7" ref="viy2Button_2E6HU7" icon-position="left" type="primary" class="icon-button-width" :icon="IconDownload" />
                    </template>
                  </VueInput>
                </VueFormItem>
                <VueFormItem
                  label="部品番号"
                  prop="partsNo"
                >
                  <VueValueList
                    id="partsNo"
                    ref="partsNo"
                    v-model="queryFormData.partsNo"
                    select-field="desc"
                  />
                </VueFormItem>
                <VueFormItem
                  v-show="false"
                  label="倉庫"
                  prop="point"
                  :rules="rules.viy2Select_oP7odRules"
                >
                  <VueSelect
                    id="viy2Select_oP7od"
                    ref="viy2Select_oP7od"
                    v-model="queryFormData.point"
                    :collapse-tags="true"
                    :filterable="true"
                    :clearable="true"
                    :collapse-tags-tooltip="true"
                    :options="pointDs"
                    :props="{
                      label: 'desc',
                      value: 'id',
                    }"
                    @change="viy2Select_oP7odChange"
                  />
                </VueFormItem>
              </VueCol>
            </VueRow>
          </VueForm>
        </VuePanel>
        <VuePanel id="viy2Panel_27lR9" ref="viy2Panel_27lR9" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" height="auto" :show-footer="true" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
              width="50px"
              min-width="50px"
              header-align="center"
            />
            <VueSelectionColumn
              align="center"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueInputColumn
              :edit-render="gridPurchaseNoEditRender"
              field="purchaseNo"
              :resizable="true"
              :sortable="true"
              show-overflow="tooltip"
              title="発注番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridDeliveryNoEditRender"
              field="deliveryNo"
              :resizable="true"
              :sortable="true"
              show-overflow="tooltip"
              title="仕入先受注番号"
              width="150px"
            />
            <VueNumberColumn
              :edit-render="gridPartsnoEditRender"
              field="partsno"
              align="right"
              :resizable="true"
              :sortable="true"
              title="部品番号"
              width="150px"
            />
            <VueNumberColumn
              :edit-render="gridPartsnameEditRender"
              field="partsname"
              align="right"
              :resizable="true"
              :sortable="true"
              title="部品名称"
              width="200px"
            />
            <VueNumberColumn
              :edit-render="gridAllocatepartsnoEditRender"
              field="allocatepartsno"
              align="right"
              :resizable="true"
              :sortable="true"
              title="受付部品番号"
              width="200px"
            />
            <VueNumberColumn
              :edit-render="gridAllocatepartsnameEditRender"
              field="allocatepartsname"
              align="right"
              :resizable="true"
              :sortable="true"
              title="受付部品名称"
              width="200px"
            />
            <VueNumberColumn
              :edit-render="gridPurchaseQtyEditRender"
              field="purchaseQty"
              align="right"
              :resizable="true"
              aggregate="sum"
              :sortable="true"
              title="発注数"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridBoQtyEditRender"
              field="boQty"
              align="right"
              :resizable="true"
              aggregate="sum"
              :sortable="true"
              title="発注残数"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridDeliveryQtyEditRender"
              field="deliveryQty"
              align="right"
              :resizable="true"
              aggregate="sum"
              :sortable="true"
              title="受付数"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridDeliveryPriceEditRender"
              field="deliveryPrice"
              align="right"
              :resizable="true"
              :sortable="true"
              title="仕切単価"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridReceiptAmountEditRender"
              field="receiptAmount"
              align="right"
              :sortable="true"
              title="金額"
              width="180px"
            />
            <VueNumberColumn
              :edit-render="gridConsignee_cdEditRender"
              field="consignee_cd"
              align="right"
              :resizable="true"
              :sortable="true"
              title="荷受人コード"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridName_kanjiEditRender"
              field="name_kanji"
              align="right"
              :resizable="true"
              :sortable="true"
              title="荷受人名称"
              width="100px"
            />
            <VueNumberColumn
              :edit-render="gridKana_nameEditRender"
              field="kana_name"
              align="right"
              :resizable="true"
              :sortable="true"
              title="荷受人カナ"
              width="100px"
            />
            <VueNumberColumn
              :edit-render="gridPost_cdEditRender"
              field="post_cd"
              align="right"
              :resizable="true"
              :sortable="true"
              title="荷受人郵便番号"
              width="100px"
            />
            <VueNumberColumn
              :edit-render="gridAdrsEditRender"
              field="adrs"
              align="right"
              :resizable="true"
              :sortable="true"
              title="荷受人住所"
              width="100px"
            />
            <VueNumberColumn
              :edit-render="gridTelEditRender"
              field="tel"
              align="right"
              :resizable="true"
              :sortable="true"
              title="荷受人電話番号"
              width="100px"
            />
            <VueNumberColumn
              :edit-render="gridFaxEditRender"
              field="fax"
              align="right"
              :resizable="true"
              :sortable="true"
              title="荷受人FAX"
              width="100px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="detailAside"
      ref="detailAside"
      v-model="showDetailAside"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
      direction="rtl"
      size="60%"
      :with-header="false"
      :show-close="false"
    >
      <detailPagePage
        id="detailPage"
        ref="detailPage"
        :init-data="asideParams"
        @select="callBackSpm030102"
        @close="closeSpm030102"
      />
    </VueAside>
  </VueForm>
</template>
