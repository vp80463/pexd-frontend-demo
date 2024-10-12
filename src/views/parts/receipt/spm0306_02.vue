<script setup>
import { IconDocument, IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import viy2Subpage_1564uxPage from '/src/views/parts/receipt/spm0306_03.vue';
import { formatCodeInput, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const confirmFlg = ref(true);
const now = dayjs().format('YYYYMMDD');
const asideParams = ref();
defineOptions({
  name: 'spm0306_02',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_6rOQzM = ref();
const viy2Button_6rlKUm = ref();
const viy2Flex_13MUOd = ref();
const queryForm = ref();
const viy2Row_aCcini = ref();
const viy2Select_1rPSyEH = ref();
const viy2DateTimePicker_aBWhwt = ref();
const viy2InputBox_aBWhwu = ref();
const viy2Select_3UOCT6 = ref();
const viy2Flex_13P4hL = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Button_fN3c3 = ref();
const viy2CheckBox_akm635 = ref();
const detailAside = ref();
const viy2Subpage_1564ux = ref();
const formData = reactive({
});
const queryFormData = reactive({
  toPointId: '', date: '', duNo: '', fromPoint: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const showAsideWin = ref(false);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_akm635Opts = [
  {
    label:
'',
    value:
'',
  },
];
const gridViy2TableButtonColumn_GxM50Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocument,
      click: viewDetail,
      title: 'Detail',
    },
  ];
};
const gridDsApi = useApi({
  url: '/parts/spm0306/getPartsPointTransferReceiptList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0306/confirmPartsPointTransferReceipt.json',
  method: 'post',
  data: () => {
    const data = grid.value.getTableData().fullData;
    const filteredData = data.filter(item => item.receipt === 'Y');
    return {
      gridList: filteredData,
      fromPointId: queryFormData.fromPointId,
      toPointId: queryFormData.toPointId,
    };
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data) {
      VueMessage.success(t('ymc-commons.P.00005'));
      gridDsApi.runAsync();
      printDsApi.runAsync({
        receiptSlipIds: data,
      });
    }
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const printDsApi = useApi({
  url: '/common/report/printPartsStoringListForWarehouse.json',
  method: 'post',
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      VueUtil.saveAs(data, 'PartsStoringList(ForWarehouse).pdf');
    }
  },
  manual: true,
});
const printDs = printDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_6rOQzMClick = () => {
  doRetrieve();
};
const viy2Button_6rlKUmClick = () => {
  doConfirm();
};
const gridDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridDuNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_fN3c3Click = () => {
  showPartsWin.value = true;
};
const gridFromPointEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridToPointEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTransferQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridTransferQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCopy0_copy1_viy2TableTemplateColumn_kV47aEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const viy2CheckBox_akm635Change = (checkedList) => {
  receiptChg();
};
onMounted(() => {
  queryFormData.toPointId = uc.defaultPointId;
});
watch (
  () => queryFormData, (newVal, oldVal) => {
    resetTblResults();
  }, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  for (const key in queryFormData) {
    queryFormData[key] = '';
  }
  resetTblResults();
  queryFormData.toPointId = uc.defaultPointId;
};
const resetTblResults = () => {
  gridDs.value.splice(0);
  confirmFlg.value = true;
};
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const doConfirm = async () => {
  const table = grid.value;
  const err = await table.validate(true);
  if (err) {

  } else {
    confirmDsApi.runAsync();
  }
};
const viewDetail = (row) => {
  showAsideWin.value = true;
  asideParams.value = {
    deliveryOrderId: row.deliveryOrderId,
  };
};
const closeAside = () => {
  showAsideWin.value = false;
};
const receiptChg = () => {
  const data = grid.value.getTableData().fullData;
  confirmFlg.value = !data.some(item => item.receipt === 'Y');
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning" @click="resetBtnClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_6rOQzM" ref="viy2Button_6rOQzM" icon-position="left" @click="viy2Button_6rOQzMClick">
          {{ t('button.retrieve') }}
        </VueButton>
        <VueButton id="viy2Button_6rlKUm" ref="viy2Button_6rlKUm" icon-position="left" type="info" :disabled="confirmFlg" @click="viy2Button_6rlKUmClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_13MUOd"
      ref="viy2Flex_13MUOd"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_aCcini"
          ref="viy2Row_aCcini"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.point')"
              prop="toPointId"
              :rules="rules.viy2Select_1rPSyEHRules"
            >
              <VueSelect
                id="viy2Select_1rPSyEH"
                ref="viy2Select_1rPSyEH"
                v-model="queryFormData.toPointId"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.date')"
              prop="date"
            >
              <VueDatePicker
                id="viy2DateTimePicker_aBWhwt"
                ref="viy2DateTimePicker_aBWhwt"
                v-model="queryFormData.date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.duNo')"
              prop="duNo"
            >
              <VueInput
                id="viy2InputBox_aBWhwu"
                ref="viy2InputBox_aBWhwu"
                v-model="queryFormData.duNo"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                :clearable="true"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.fromPoint')"
              prop="fromPoint"
            >
              <VueSelect
                id="viy2Select_3UOCT6"
                ref="viy2Select_3UOCT6"
                v-model="queryFormData.fromPoint"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_13P4hL"
        ref="viy2Flex_13P4hL"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" height="100%" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
          />
          <VueDateTimeColumn
            :edit-render="gridDateEditRender"
            field="date"
            align="center"
            width="100px"
            :title="t('label.date')"
          />
          <VueInputColumn
            :edit-render="gridDuNoEditRender"
            field="duNo"
            show-overflow="tooltip"
            :title="t('label.duNo')"
            width="150px"
          >
            <template #append="scope">
              <VueButton id="viy2Button_fN3c3" ref="viy2Button_fN3c3" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_fN3c3Click" />
            </template>
          </VueInputColumn>
          <VueInputColumn
            :edit-render="gridFromPointEditRender"
            field="fromPoint"
            show-overflow="tooltip"
            :title="t('label.fromPoint')"
            width="300px"
          />
          <VueInputColumn
            :edit-render="gridToPointEditRender"
            field="toPoint"
            show-overflow="tooltip"
            :title="t('label.toPoint')"
            width="300px"
          />
          <VueNumberColumn
            :formatter="gridTransferQtyFormatter"
            :edit-render="gridTransferQtyEditRender"
            field="transferQty"
            align="right"
            :title="t('label.transferQuantity')"
            width="150px"
            header-align="center"
          />
          <VueTemplateColumn
            :edit-render="gridCopy0_copy1_viy2TableTemplateColumn_kV47aEditRender"
            align="center"
            width="100px"
            :title="t('label.receipt')"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_akm635"
                ref="viy2CheckBox_akm635"
                v-model="scope.row.receipt"
                true-label="Y"
                false-label="N"
                @change="viy2CheckBox_akm635Change"
              />
            </template>
          </VueTemplateColumn>
          <VueButtonColumn
            fixed="right"
            align="center"
            width="60px"
            :buttons="gridViy2TableButtonColumn_GxM50Buttons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="detailAside"
      ref="detailAside"
      v-model="showAsideWin"
      :modal="true"
      direction="rtl"
      size="60%"
      :with-header="false"
    >
      <viy2Subpage_1564uxPage
        id="viy2Subpage_1564ux"
        ref="viy2Subpage_1564ux"
        :params="asideParams"
        @close="closeAside"
      />
    </VueAside>
  </VueForm>
</template>
