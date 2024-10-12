<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { formatCodeInput } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
defineOptions({
  name: 'spm0211_01',
});
const form = ref();
const viy2Flex_ZfWh5 = ref();
const queryForm = ref();
const viy2Panel_2XfzW = ref();
const viy2Button_4G4BCI = ref();
const confirmBtn = ref();
const viy2Button_tCaO2 = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_4AMI9W = ref();
const viy2Radio_tcGgh = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_ZfWwO = ref();
const viy2Panel_2XfzW1 = ref();
const viy2Button_2EPtRg = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const formData = reactive({
});
const queryFormData = reactive({
  duNo: '', IssueInvoice: 'Y', pointId: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const viy2InputBox_4AMI9Wformatter = formatCodeInput;
const viy2InputBox_4AMI9Wparser = formatCodeInput;
const viy2Radio_tcGghOpts = reactive([
  { value: 'Y', label: 'する' },
  { value: 'N', label: 'しない' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridCheckboxConfig = reactive({
  trigger: 'default',
  checkField: 'selectFlag',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/parts/spm0211/findShipmentComplationList.json',
  method: 'post',
  data: () => {
    return queryFormData;
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
const ConfirmDsApi = useApi({
  url: '/parts/spm0211/confirmShipment.json',
  method: 'post',
  data: () => {
    queryFormData.content = grid.value.getCheckboxRecords();
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const ConfirmDs = ConfirmDsApi.data;
const viy2Button_4G4BCIClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const confirmBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_tCaO2Click = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Button_2EPtRgClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const gridCheckboxChange = (obj) => {
  grid.value.getCheckboxRecords();
};
const gridDeliveryOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInventoryTransactionTypeNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCustomerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCustomerNmEditRender = computed(() => {
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
const gridTotalAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridSendNoEditRender = computed(() => {
  return {
    enabled: true,
  };
});
onMounted(() => {
// 设置默认point
  queryFormData.pointId = uc.defaultPointId;
});
// 清空条件部
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
  queryFormData.pointId = uc.defaultPointId;
};
const resetTblResults = () => {
  gridDs.value.splice(0);
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_ZfWh5"
      ref="viy2Flex_ZfWh5"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="130px"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_2XfzW" ref="viy2Panel_2XfzW" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_4G4BCI" ref="viy2Button_4G4BCI" icon-position="left" @click="viy2Button_4G4BCIClick">
                検索
              </VueButton>
              <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" @click="confirmBtnClick">
                クリア
              </VueButton>
              <VueButton id="viy2Button_tCaO2" ref="viy2Button_tCaO2" icon-position="left" type="info" @click="viy2Button_tCaO2Click">
                出荷完了
              </VueButton>
            </div>
          </template>
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
                label="出荷番号"
                prop="duNo"
              >
                <VueInput
                  id="viy2InputBox_4AMI9W"
                  ref="viy2InputBox_4AMI9W"
                  v-model="queryFormData.duNo"
                  :style="{ width: '200px' }" :formatter="viy2InputBox_4AMI9Wformatter"
                  :parser="viy2InputBox_4AMI9Wparser"
                />
              </VueFormItem>
              <VueFormItem
                label="納品書印刷"
                prop=" IssueInvoice"
              >
                <VueRadioGroup
                  id="viy2Radio_tcGgh"
                  ref="viy2Radio_tcGgh"
                  v-model="queryFormData. IssueInvoice"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_tcGghOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                v-show="false"
                label="出荷倉庫"
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
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_ZfWwO"
        ref="viy2Flex_ZfWwO"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2XfzW1" ref="viy2Panel_2XfzW1" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_2EPtRg" ref="viy2Button_2EPtRg" icon-position="left" @click="viy2Button_2EPtRgClick">
                保存
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-config="gridEditConfig" :checkbox-config="gridCheckboxConfig" :mouse-config="gridMouseConfig" @checkbox-change="gridCheckboxChange">
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
              check-field="selectFlag"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueInputColumn
              :edit-render="gridDeliveryOrderNoEditRender"
              field="deliveryOrderNo"
              :sortable="true"
              title="出荷番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridInventoryTransactionTypeNmEditRender"
              field="inventoryTransactionTypeNm"
              :sortable="true"
              title="出荷種類"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridCustomerCdEditRender"
              field="customerCd"
              :sortable="true"
              title="受注先"
              width="120px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridCustomerNmEditRender"
              field="customerNm"
              :sortable="true"
              title="受注先名称"
              width="200px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridLinesEditRender"
              field="lines"
              align="right"
              :sortable="true"
              title="行数"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridTotalAmtEditRender"
              field="totalAmt"
              align="right"
              :sortable="true"
              title="合計金額"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridSendNoEditRender"
              field="sendNo"
              :sortable="true"
              title="送り状番号"
              width="150px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
