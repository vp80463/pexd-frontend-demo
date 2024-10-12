<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'cmm0208_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_3v8K26 = ref();
const viy2Flex_XKG8b = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2Select_1rPSyEH = ref();
const viy2Select_RkdQK0 = ref();
const viy2Select_3vkE2S = ref();
const viy2Flex_XKRif = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2CheckBox_3uceY3 = ref();
const viy2CheckBox_3ucoKv = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', role: '', status: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_3uceY3Opts = [
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
const viy2CheckBox_3ucoKvOpts = [
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
const gridDsApi = useApi({
  url: '/master/cmm0208/findTraderInfoList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'CONSIGNEE',
  },
});
const pointDs = pointDsApi.data;
const statusDsApi = useApi({
  url: '/common/helper/getEffectStatus.json',
  method: 'post',
});
const statusDs = statusDsApi.data;
const roleDsApi = useApi({
  url: '/common/helper/getRoleTypeCustomerAndSupplier.json',
  method: 'post',
});
const roleDs = roleDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_3v8K26Click = () => {
  gridDsApi.runAsync();
};
const gridTraderEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTraderNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAbbrEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCopy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy1_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridEffectiveDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridExpiredDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_zgSti"
      ref="viy2Row_zgSti"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_3v8K26" ref="viy2Button_3v8K26" icon-position="left" type="info" @click="viy2Button_3v8K26Click">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_XKG8b"
      ref="viy2Flex_XKG8b"
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
          id="viy2Row_lOY8w"
          ref="viy2Row_lOY8w"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.trader')"
              prop="pointId"
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
            <VueFormItem
              :label="t('label.role')"
              prop="role"
            >
              <VueSelect
                id="viy2Select_RkdQK0"
                ref="viy2Select_RkdQK0"
                v-model="queryFormData.role"
                :style="{ width: '150px' }"
                :clearable="true"
                :filterable="true"
                :options="roleDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.status')"
              prop="status"
            >
              <VueSelect
                id="viy2Select_3vkE2S"
                ref="viy2Select_3vkE2S"
                v-model="queryFormData.status"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :options="statusDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_XKRif"
        ref="viy2Flex_XKRif"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" height="100%" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_soVPC"
            ref="viy2Row_soVPC"
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
          <VueInputColumn
            :edit-render="gridTraderEditRender"
            field="trader"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.trader')"
            width="160px"
          />
          <VueInputColumn
            :edit-render="gridTraderNmEditRender"
            field="traderNm"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.traderName')"
            min-width="250px"
          />
          <VueInputColumn
            :edit-render="gridAbbrEditRender"
            field="abbr"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.abbr')"
            width="200px"
          />
          <VueTemplateColumn
            :edit-render="gridCopy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
            align="center"
            :sortable="true"
            :title="t('label.dealer')"
            width="115px"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_3uceY3"
                ref="viy2CheckBox_3uceY3"
                v-model="scope.row.dealerSign"
                :disabled="true"
                true-label="Y"
                false-label="N"
              />
            </template>
          </VueTemplateColumn>
          <VueTemplateColumn
            :edit-render="gridCopy1_copy0_viy2TableTemplateColumn_liAHZEditRender"
            align="center"
            :sortable="true"
            :title="t('label.supplier')"
            width="125px"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_3ucoKv"
                ref="viy2CheckBox_3ucoKv"
                v-model="scope.row.supplierSign"
                :disabled="true"
                true-label="Y"
                false-label="N"
              />
            </template>
          </VueTemplateColumn>
          <VueDateTimeColumn
            :edit-render="gridEffectiveDateEditRender"
            field="effectiveDate"
            align="center"
            :sortable="true"
            show-overflow="tooltip"
            :title="t('label.effectiveDate')"
            width="175px"
          />
          <VueDateTimeColumn
            :edit-render="gridExpiredDateEditRender"
            field="expiredDate"
            align="center"
            :sortable="true"
            show-overflow="tooltip"
            :title="t('label.expiredDate')"
            width="155px"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
