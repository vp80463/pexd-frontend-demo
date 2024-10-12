<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'cmm0302_02',
});
const form = ref();
const viy2Row_10QMyC = ref();
const backBtn = ref();
const viy2Button_8nY4RS = ref();
const viy2Button_8nYZQM = ref();
const header = ref();
const consumerForm = ref();
const viy2Row_xChMPR = ref();
const viy2InputBox_3t8PKu = ref();
const viy2InputBox_5oZ87Q = ref();
const viy2InputBox_5p1afG = ref();
const viy2InputBox_5oWPmI = ref();
const viy2DateTimePicker_5oX13o = ref();
const viy2DateTimePicker_5oXaxC = ref();
const viy2Select_Q28l0 = ref();
const viy2InputBox_8fNykA = ref();
const viy2InputBox_8ohrbo = ref();
const partsAside = ref();
const viy2Subpage_fInzM = ref();
const partsMultiAside = ref();
const viy2Subpage_OzNTu = ref();
const consumerAside = ref();
const viy2Subpage_BTeF1 = ref();
const formData = reactive({
});
const consumerFormData = reactive({
  listNo: 'PR19120004', listNm: 'Employee price', versionNo: 'Purchase Order', version: '1', fromDate: '', toDate: '', ProductClassification: '', PriceType: 'Standard Price', status: 'pending',
});
const rules = reactive({
  viy2InputBox_5oZ87QRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_5p1afGRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_5oX13oRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_5oXaxCRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_8fNykARules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showPartsWin = ref(false);
const showPartsMultiWin = ref(false);
const showConsumerWin = ref(false);
const viy2Select_Q28l0Opts = reactive([
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
        <VueButton id="viy2Button_8nY4RS" ref="viy2Button_8nY4RS" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_8nYZQM" ref="viy2Button_8nYZQM" icon-position="left" type="info">
          Detail
        </VueButton>
      </VueCol>
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
              :rules="rules.viy2InputBox_5oZ87QRules"
            >
              <VueInput
                id="viy2InputBox_5oZ87Q"
                ref="viy2InputBox_5oZ87Q"
                v-model="consumerFormData.listNm"
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
              :rules="rules.viy2InputBox_5p1afGRules"
            >
              <VueInput
                id="viy2InputBox_5p1afG"
                ref="viy2InputBox_5p1afG"
                v-model="consumerFormData.versionNo"
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
              :rules="rules.viy2DateTimePicker_5oX13oRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_5oX13o"
                ref="viy2DateTimePicker_5oX13o"
                v-model="consumerFormData.fromDate"
                type="date"
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
              :rules="rules.viy2DateTimePicker_5oXaxCRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_5oXaxC"
                ref="viy2DateTimePicker_5oXaxC"
                v-model="consumerFormData.toDate"
                type="date"
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
              label="Product Classification"
              label-width="155px"
              prop="ProductClassification"
            >
              <VueSelect
                id="viy2Select_Q28l0"
                ref="viy2Select_Q28l0"
                v-model="consumerFormData.ProductClassification"
                :style="{ width: '200px' }"
                :options="viy2Select_Q28l0Opts"
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
              :rules="rules.viy2InputBox_8fNykARules"
            >
              <VueInput
                id="viy2InputBox_8fNykA"
                ref="viy2InputBox_8fNykA"
                v-model="consumerFormData.PriceType"
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
                id="viy2InputBox_8ohrbo"
                ref="viy2InputBox_8ohrbo"
                v-model="consumerFormData.status"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
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
