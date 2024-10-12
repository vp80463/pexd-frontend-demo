<script setup>
import { IconMoreFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useParams, useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { formatPartNo, formatQty, formatUpper } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const route = useParams();
const uc = useUser().userInfo;
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const confirmFlag = ref(true);
const pointId = ref();
const pointCd = ref();
const pointNm = ref();
const duNo = ref();
const pickingSeqNo = ref();
defineOptions({
  name: 'spm0209_01',
});
const form = ref();
const viy2Flex_TGyhd = ref();
const queryForm = ref();
const viy2Panel_2VI6g = ref();
const viy2Button_KGB25 = ref();
const viy2Button_KGB1S = ref();
const viy2Button_KXRyw = ref();
const viy2Row_KGSb7 = ref();
const viy2Select_1rPSyEH = ref();
const viy2InputBox_7xoGOT = ref();
const viy2Select_sNVdS = ref();
const viy2Flex_7xoGOZ = ref();
const viy2Panel_2VmAg = ref();
const grid = ref();
const viy2Row_7xoGP2 = ref();
const viy2Button_7xoGP9 = ref();
const viy2Button_4AyWLl = ref();
const viy2Button_7xoGPd = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', duNo: '', pickingSeqNo: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2InputBox_7xoGOTRules: [
    {
      required: true,
      message: t('errors.required', [t('label.duNo')]),
    },
  ],
});
const gridRules = {
  actualQty: [
    { required: true },
  ],
};
const viy2InputBox_7xoGOTformatter = value => (formatUpper(value));
const viy2Select_sNVdSOpts = reactive([
  {
    label:
'Option 3',
    value:
'Option 3',
  },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/parts/spm0209/findPickingDiscEntryList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pointId = route.pointId;
    return condition;
  },
  lockScreen: true,
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const viy2Button_KGB25Click = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Button_KGB1SClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_KXRywClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      confirmDsApi.runAsync();
    }
  });
};
const gridPickingSeqNoFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPickingSeqNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOnHandQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnHandQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridInstructionQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridInstructionQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridActualQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridActualQtyEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      precision: 0,
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  const params = route;
  if (params) {
    // queryFormData.pointId = route.pointId;
    queryFormData.point = `${route.pointCd} ${route.pointNm}`;
    queryFormData.duNo = route.duNo;
    queryFormData.pickingSeqNo = route.pickingSeqNo;
  }
});
watch(() => ({ ...queryFormData }), (newVal, oldVal) => {
  resetTblResults();
}, { deep: true });
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  queryFormData.point = `${pointCd} ${pointNm}`;
  // queryFormData.pointId = pointId;
  queryFormData.duNo = duNo;
  queryFormData.pickingSeqNo = pickingSeqNo;
  gridDsApi.runAsync();
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_TGyhd"
      ref="viy2Flex_TGyhd"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_2VI6g" ref="viy2Panel_2VI6g" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_KGB25" ref="viy2Button_KGB25" icon-position="left" @click="viy2Button_KGB25Click">
                検索
              </VueButton>
              <VueButton id="viy2Button_KGB1S" ref="viy2Button_KGB1S" icon-position="left" @click="viy2Button_KGB1SClick">
                クリア
              </VueButton>
              <VueButton id="viy2Button_KXRyw" ref="viy2Button_KXRyw" icon-position="left" type="info" :disabled="confirmFlag" @click="viy2Button_KXRywClick">
                保存
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_KGSb7"
            ref="viy2Row_KGSb7"
          >
            <VueCol
              v-show="false"
              item-key="item"
              align="left"
              :md="{ span: 6 }"
            >
              <VueFormItem
                v-show="false"
                label="出庫倉庫"
                prop="pointId"
                :rules="rules.viy2Select_1rPSyEHRules"
              >
                <VueSelect
                  id="viy2Select_1rPSyEH"
                  ref="viy2Select_1rPSyEH"
                  v-model="queryFormData.pointId"
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
            <VueCol
              v-show="true"
              item-key="item"
              align="left"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="出荷番号"
                prop="duNo"
                :rules="rules.viy2InputBox_7xoGOTRules"
              >
                <VueInput
                  id="viy2InputBox_7xoGOT"
                  ref="viy2InputBox_7xoGOT"
                  v-model="queryFormData.duNo"
                  :style="{ width: '200px' }" :formatter="viy2InputBox_7xoGOTformatter"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="left"
              :md="{ span: 6 }"
            >
              <VueFormItem
                label="ピッキング順番"
                prop="pickingSeqNo"
              >
                <VueSelect
                  id="viy2Select_sNVdS"
                  ref="viy2Select_sNVdS"
                  v-model="queryFormData.pickingSeqNo"
                  :options="viy2Select_sNVdSOpts"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_7xoGOZ"
        ref="viy2Flex_7xoGOZ"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2VmAg" ref="viy2Panel_2VmAg" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :show-footer="true" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueRow
              id="viy2Row_7xoGP2"
              ref="viy2Row_7xoGP2"
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
            <VueInputColumn
              :formatter="gridPickingSeqNoFormatter"
              :edit-render="gridPickingSeqNoEditRender"
              field="pickingSeqNo"
              :sortable="true"
              title="ピッキング順番"
              width="140px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_7xoGP9" ref="viy2Button_7xoGP9" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :formatter="gridPartsCdFormatter"
              :edit-render="gridPartsCdEditRender"
              field="partsCd"
              :sortable="true"
              title="部品番号"
              width="140px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_4AyWLl" ref="viy2Button_4AyWLl" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              :sortable="true"
              title="部品名称"
              width="250px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_7xoGPd" ref="viy2Button_7xoGPd" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueNumberColumn
              :formatter="gridOnHandQtyFormatter"
              :edit-render="gridOnHandQtyEditRender"
              field="onHandQty"
              align="right"
              :sortable="true"
              title="在庫数"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridInstructionQtyFormatter"
              :edit-render="gridInstructionQtyEditRender"
              field="instructionQty"
              align="right"
              :sortable="true"
              title="指示数"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridActualQtyFormatter"
              :edit-render="gridActualQtyEditRender"
              field="actualQty"
              align="right"
              :precision="0"
              :sortable="true"
              title="実在庫数"
              width="150px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
