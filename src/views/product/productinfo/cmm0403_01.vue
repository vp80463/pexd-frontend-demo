<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'cmm0403_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const confirmBtn = ref();
const viy2Button_4G4BCI = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_4AMI9W = ref();
const viy2InputBox_2GzIPK = ref();
const viy2InputBox_2GzNUU = ref();
const viy2InputBox_2GzYBY = ref();
const viy2Panel_wZlWr = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const partsAside = ref();
const viy2Subpage_fInzM = ref();
const partsMultiAside = ref();
const viy2Subpage_OzNTu = ref();
const consumerAside = ref();
const viy2Subpage_BTeF1 = ref();
const formData = reactive({
});
const orderFormData = reactive({
  model: '', modelNm: '', regModel: '', modelYear: '',
});
const showPartsWin = ref(false);
const showPartsMultiWin = ref(false);
const showConsumerWin = ref(false);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      colorNm: 'X.Dương',
      regModel: '15C1',
      modelYear: '2010',
      expiredDate: '20240412',
      modelCd: '15C100010A',
      modelNm: 'Lexam 15C1',
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
const gridModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridColorNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRegModelEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelYearEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridExpiredDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
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
        <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_4G4BCI" ref="viy2Button_4G4BCI" icon-position="left">
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
            label="Model"
            prop="model"
          >
            <VueInput
              id="viy2InputBox_4AMI9W"
              ref="viy2InputBox_4AMI9W"
              v-model="orderFormData.model"
              :readonly="true"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Model Name"
            prop="modelNm"
          >
            <VueInput
              id="viy2InputBox_2GzIPK"
              ref="viy2InputBox_2GzIPK"
              v-model="orderFormData.modelNm"
              :readonly="true"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Registered Model"
            prop="regModel"
          >
            <VueInput
              id="viy2InputBox_2GzNUU"
              ref="viy2InputBox_2GzNUU"
              v-model="orderFormData.regModel"
              :readonly="true"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Model Year"
            prop="modelYear"
          >
            <VueInput
              id="viy2InputBox_2GzYBY"
              ref="viy2InputBox_2GzYBY"
              v-model="orderFormData.modelYear"
              :readonly="true"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" title="Retrieved Result">
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
        <VueInputColumn
          :edit-render="gridModelCdEditRender"
          field="modelCd"
          title="Model Code"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridModelNmEditRender"
          field="modelNm"
          title="Model Name"
          width="150px"
        />
        <VueInputColumn
          :edit-render="gridColorNmEditRender"
          field="colorNm"
          title="Color Name"
          width="150px"
        />
        <VueNumberColumn
          :edit-render="gridRegModelEditRender"
          field="regModel"
          title="Registered Model"
          width="150px"
        />
        <VueNumberColumn
          :edit-render="gridModelYearEditRender"
          field="modelYear"
          title="Model Year"
          width="150px"
        />
        <VueDateTimeColumn
          :edit-render="gridExpiredDateEditRender"
          field="expiredDate"
          title="Expired Date"
          width="120px"
        />
      </VueTable>
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
