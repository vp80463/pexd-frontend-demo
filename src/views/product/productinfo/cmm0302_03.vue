<script setup>
import { IconSearch, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'cmm0302_03',
});
const form = ref();
const viy2Row_10QMyC = ref();
const backBtn = ref();
const header = ref();
const consumerForm = ref();
const viy2Row_xChMPR = ref();
const viy2InputBox_3t8PKu = ref();
const viy2InputBox_5oZ87Q = ref();
const viy2InputBox_5p1afG = ref();
const viy2InputBox_5oWPmI = ref();
const viy2DateTimePicker_5oX13o = ref();
const viy2DateTimePicker_5oXaxC = ref();
const viy2InputBox_8fNykA = ref();
const viy2InputBox_8fQFG0 = ref();
const viy2InputBox_8fSkeS = ref();
const viy2Panel_3vbAg4 = ref();
const viy2Row_3vbAh4 = ref();
const viy2Row_yy24F = ref();
const viy2InputBox_5zvv4k = ref();
const viy2InputBox_5zxhTi = ref();
const viy2InputBox_5zyKgA = ref();
const viy2Table_3vbAhT = ref();
const viy2Row_3vbAiT = ref();
const viy2Button_z1RRtE = ref();
const viy2Button_5pGXHp = ref();
const viy2Row_yvGGr = ref();
const viy2Pagination_yvKGk = ref();
const partsAside = ref();
const viy2Subpage_fInzM = ref();
const partsMultiAside = ref();
const viy2Subpage_OzNTu = ref();
const consumerAside = ref();
const viy2Subpage_BTeF1 = ref();
const formData = reactive({
  modelItemLines: '30', MaintenanceLines: '30', PriceNotExistLines: '',
});
const consumerFormData = reactive({
  listNo: 'PR19120004', listNm: 'Employee price', versionNo: 'Purchase Order', version: '1', fromDate: '', toDate: '', PriceType: 'Standard Price', productClassification: 'productClassification', status: 'Activity',
});
const showPartsWin = ref(false);
const showPartsMultiWin = ref(false);
const showConsumerWin = ref(false);
const viy2Table_3vbAhTEditConfig = reactive({
  trigger: 'click',
});
const viy2Pagination_yvKGkCurrentPage = ref(1);
const viy2Pagination_yvKGkPageSize = ref();
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      productCd: '102253890000',
      ModelNm: 'Sirius-BGY2',
      productNm: 'oc tang xich',
      standardPrice: '27,700,000',
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
const viy2Table_3vbAhTModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_z1RRtEClick = () => {
  showPartsWin.value = true;
};
const viy2Table_3vbAhTModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_5pGXHpClick = () => {
  showPartsWin.value = true;
};
const viy2Table_3vbAhTProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3vbAhTProductNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_3vbAhTStandardPriceEditRender = computed(() => {
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
consumerFormData.fromDate = new Date();
consumerFormData.toDate = new Date();
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
        <VueButton id="backBtn" ref="backBtn" icon-position="left">
          Back
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      />
    </VueRow>
    <VuePanel id="header" ref="header" :collapse="true" title="Header" class="margin-top-div0 except-height-css">
      <VueForm
        id="consumerForm"
        ref="consumerForm"
        label-width="150px"
        :model="consumerFormData"
      >
        <VueRow
          id="viy2Row_xChMPR"
          ref="viy2Row_xChMPR"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="List No"
              prop="listNo"
            >
              <VueInput
                id="viy2InputBox_3t8PKu"
                ref="viy2InputBox_3t8PKu"
                v-model="consumerFormData.listNo"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="List Name"
              prop="listNm"
            >
              <VueInput
                id="viy2InputBox_5oZ87Q"
                ref="viy2InputBox_5oZ87Q"
                v-model="consumerFormData.listNm"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Order Category"
              prop="versionNo"
            >
              <VueInput
                id="viy2InputBox_5p1afG"
                ref="viy2InputBox_5p1afG"
                v-model="consumerFormData.versionNo"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Version No"
              prop="version"
            >
              <VueInput
                id="viy2InputBox_5oWPmI"
                ref="viy2InputBox_5oWPmI"
                v-model="consumerFormData.version"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="From Date"
              prop="fromDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_5oX13o"
                ref="viy2DateTimePicker_5oX13o"
                v-model="consumerFormData.fromDate"
                type="date"
                :readonly="true"
                class="no-border"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="To Date"
              prop="toDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_5oXaxC"
                ref="viy2DateTimePicker_5oXaxC"
                v-model="consumerFormData.toDate"
                type="date"
                :readonly="true"
                class="no-border"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Price Type"
              prop="PriceType"
            >
              <VueInput
                id="viy2InputBox_8fNykA"
                ref="viy2InputBox_8fNykA"
                v-model="consumerFormData.PriceType"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Product Classification"
              prop="productClassification"
            >
              <VueInput
                id="viy2InputBox_8fQFG0"
                ref="viy2InputBox_8fQFG0"
                v-model="consumerFormData.productClassification"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Status"
              prop="status"
            >
              <VueInput
                id="viy2InputBox_8fSkeS"
                ref="viy2InputBox_8fSkeS"
                v-model="consumerFormData.status"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_3vbAg4" ref="viy2Panel_3vbAg4" v-model="detailPanelModel" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            v-show="detailPanelModel"
            id="viy2Row_3vbAh4"
            ref="viy2Row_3vbAh4"
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
      <VueRow
        id="viy2Row_yy24F"
        ref="viy2Row_yy24F"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Product Item Lines"
            label-width="150px"
            prop="modelItemLines"
          >
            <VueInput
              id="viy2InputBox_5zvv4k"
              ref="viy2InputBox_5zvv4k"
              v-model="formData.modelItemLines"
              :readonly="true"
              class="no-border"
            />
          </VueFormItem>
          <VueFormItem
            label="Product Item Maintenance Lines"
            label-width="240px"
            prop="MaintenanceLines"
          >
            <VueInput
              id="viy2InputBox_5zxhTi"
              ref="viy2InputBox_5zxhTi"
              v-model="formData.MaintenanceLines"
              :readonly="true"
              class="no-border"
            />
          </VueFormItem>
          <VueFormItem
            label="Stand Price Not Exist Lines"
            label-width="200px"
            prop=" PriceNotExistLines"
          >
            <VueInput
              id="viy2InputBox_5zyKgA"
              ref="viy2InputBox_5zyKgA"
              v-model="formData. PriceNotExistLines"
              :readonly="true"
              class="no-border"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
      <VueTable id="viy2Table_3vbAhT" ref="viy2Table_3vbAhT" :height="gridHeight - 80" :data="gridDs" :edit-config="viy2Table_3vbAhTEditConfig">
        <VueRow
          id="viy2Row_3vbAiT"
          ref="viy2Row_3vbAiT"
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
          :edit-render="viy2Table_3vbAhTModelCdEditRender"
          field="ModelCd"
          title="Supplier Code"
          width="130px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_z1RRtE" ref="viy2Button_z1RRtE" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_z1RRtEClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="viy2Table_3vbAhTModelNmEditRender"
          field="ModelNm"
          title="Supplier Name"
          width="160px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_5pGXHp" ref="viy2Button_5pGXHp" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_5pGXHpClick" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="viy2Table_3vbAhTProductCdEditRender"
          field="productCd"
          title="Product"
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_3vbAhTProductNmEditRender"
          field="productNm"
          title="Product Name"
          width="150px"
        />
        <VueNumberColumn
          :edit-render="viy2Table_3vbAhTStandardPriceEditRender"
          field="standardPrice"
          title="Standard Price"
          width="120px"
        />
      </VueTable>
      <VueRow
        id="viy2Row_yvGGr"
        ref="viy2Row_yvGGr"
      >
        <VueCol
          item-key="item"
          :md="{ span: 17 }"
        />
        <VueCol
          item-key="item"
          :md="{ span: 7 }"
        >
          <VuePagination
            id="viy2Pagination_yvKGk"
            ref="viy2Pagination_yvKGk"
            v-model:current-page="viy2Pagination_yvKGkCurrentPage"
            v-model:page-size="viy2Pagination_yvKGkPageSize"
            :background="true"
            :small="true"
            :total="300"
          />
        </VueCol>
      </VueRow>
    </VuePanel>
    <VueAside
      id="partsAside"
      ref="partsAside"
      v-model="showPartsWin"
      :modal="true"
      direction="rtl"
      size="70%"
      :with-header="false"
      :show-close="false"
    />
    <VueAside
      id="partsMultiAside"
      ref="partsMultiAside"
      v-model="showPartsMultiWin"
      :modal="true"
      direction="btt"
      size="90%"
      :with-header="false"
      :show-close="false"
    />
    <VueAside
      id="consumerAside"
      ref="consumerAside"
      v-model="showConsumerWin"
      :modal="true"
      direction="rtl"
      size="60%"
      :with-header="false"
      :show-close="false"
    />
  </VueForm>
</template>
