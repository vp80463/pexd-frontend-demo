<script setup>
import { IconDownload, IconEdit, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
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
  name: 'spm0301_01',
});
const form = ref();
const viy2Flex_LT1Oa = ref();
const viy2Flex_LT7Dg = ref();
const viy2Panel_1DGxI = ref();
const viy2Button_9SMLNC = ref();
const resetBtn = ref();
const viy2Button_6rlKUm = ref();
const queryForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_RfsMSE = ref();
const viy2Button_E1Br6 = ref();
const viy2InputBox_43OW3q = ref();
const viy2Button_43OW3t = ref();
const viy2Select_oP7od = ref();
const viy2Panel_1DZns = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const detailAside = ref();
const detailPage = ref();
const formData = reactive({
});
const queryFormData = reactive({
  invoiceNoFrom: '', invoiceNoTo: '', point: '',
});
const rules = reactive({
  viy2Select_oP7odRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const showDetailAside = ref(false);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_DYaB6Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: showRowDetail,
      title: 'Detail',
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      seqNo: '1',
      importDate: '20241015',
      invoiceNo: 'IV202410002',
      deliveryNo: 'S2410000056',
      lines: '1',
      receiptQty: '5',
      receiptAmount: '500',
    },
  ],
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
const gridImportDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridInvoiceNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDeliveryNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLinesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReceiptQtyEditRender = computed(() => {
  return {
    enabled: false,
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
        <VuePanel id="viy2Panel_1DGxI" ref="viy2Panel_1DGxI" title="検索条件">
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
              >
                <VueFormItem
                  label="納品書番号"
                  prop="invoiceNoFrom"
                >
                  <VueInput
                    id="viy2InputBox_RfsMSE"
                    ref="viy2InputBox_RfsMSE"
                    v-model="queryFormData.invoiceNoFrom"
                    :clearable="true"
                    :style="{ width: '180px' }"
                  >
                    <template #append>
                      <VueButton id="viy2Button_E1Br6" ref="viy2Button_E1Br6" icon-position="left" type="primary" class="icon-button-width" :icon="IconDownload" />
                    </template>
                  </VueInput>
                </VueFormItem>
                <!-- BEGIN CUSTOM DIV CODE -->
                -
                <!-- END CUSTOM DIV CODE -->
                <VueFormItem
                  prop="invoiceNoTo"
                >
                  <VueInput
                    id="viy2InputBox_43OW3q"
                    ref="viy2InputBox_43OW3q"
                    v-model="queryFormData.invoiceNoTo"
                    :clearable="true"
                    :style="{ width: '180px' }"
                  >
                    <template #append>
                      <VueButton id="viy2Button_43OW3t" ref="viy2Button_43OW3t" icon-position="left" type="primary" class="icon-button-width" :icon="IconDownload" />
                    </template>
                  </VueInput>
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
        <VuePanel id="viy2Panel_1DZns" ref="viy2Panel_1DZns" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" height="auto" :show-footer="true" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
              title="No."
            />
            <VueSelectionColumn
              align="center"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueDateTimeColumn
              :edit-render="gridImportDateEditRender"
              field="importDate"
              :sortable="true"
              :resizable="true"
              width="120px"
              title="受入日"
            />
            <VueInputColumn
              :edit-render="gridInvoiceNoEditRender"
              field="invoiceNo"
              :sortable="true"
              :resizable="true"
              show-overflow="tooltip"
              title="納品書番号"
              width="160px"
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
              :edit-render="gridLinesEditRender"
              field="lines"
              align="right"
              :resizable="true"
              :aggregate-label="t('label.total')"
              :sortable="true"
              title="行数"
              width="100px"
            />
            <VueNumberColumn
              :edit-render="gridReceiptQtyEditRender"
              field="receiptQty"
              align="right"
              :resizable="true"
              aggregate="sum"
              :sortable="true"
              title="数量"
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
            <VueButtonColumn
              fixed="right"
              align="center"
              width="40px"
              :buttons="gridViy2TableButtonColumn_DYaB6Buttons"
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
