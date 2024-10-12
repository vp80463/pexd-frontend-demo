<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_CpizGPage from '/src/views/fileLoad/fileImport.vue';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const exportFlag = ref(true);
const confirmFlag = ref(true);
const checkFlag = ref(true);
const importInfo = ref({
  programid: 'DIM020601',
  templatename: 'DIM020601_template.xlsx',
  otherproperty: '',
  downloadfilename: 'DIM020601ImportExample.xlsx',
  savewarningmsg: 'Do you want to import this file?',
});
defineOptions({
  name: 'dim0206_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5heur2 = ref();
const viy2Button_CsZgm = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_Crkyw = ref();
const queryForm = ref();
const viy2Row_6DXlvW = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_CrkbX = ref();
const grid = ref();
const viy2Dialog_Cp4gg = ref();
const viy2Subpage_CpizG = ref();
const formData = reactive({
});
const queryFormData = reactive({
  point: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const importWindowShowFlag = ref(false);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const confirmDsApi = useApi({
  url: '/parts/dim0206/doConfirm.json',
  method: 'post',
  data: () => {
    queryFormData.gridDataList = grid.value.getTableData().fullData;
    confirmFlag.value = true;
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const gridDsApi = useApi({
  method: 'post',
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
const exportDsApi = useApi({
  url: '/parts/dim0206/doDownload.json',
  method: 'post',
  data: () => {
    queryFormData.gridDataList = grid.value.getTableData().fullData;
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'DIM0206_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5heur2Click = () => {
  exportDsApi.runAsync();
};
const viy2Button_CsZgmClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      importWindowShowFlag.value = true;
      importInfo._rawValue.otherproperty = queryFormData.pointId;
    }
  });
};
const viy2Button_5FbWKcClick = () => {
  if (grid.value.getTableData().fullData.length > 0) {
    grid.value.validate((valid) => {
      if (!valid) {
        if (queryFormData.checkFlag) {
          VueMessageBox.confirm(t('M.E.10414'), t('title.warn'), {
            type: 'warning',
          }).then(() => {
            confirmDsApi.runAsync();
          }).catch(() => {
          });
        } else {
          confirmDsApi.runAsync();
        }
      }
    });
  }
};
const viy2Select_1rPSyEHChange = (value, data) => {
  queryFormData.pointId = data.id;
  queryFormData.pointCd = data.code;
};
const gridDealerCdEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const gridPointCdEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const gridLocationCdEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const gridQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAverageCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridErrorMessageEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
onMounted(() => {
  queryFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.pointCd = uc.defaultPointCd;
});
watch (
  () => queryFormData, (newVal, oldVal) => {
    resetTblResults();
  }, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  queryFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.pointId = uc.defaultPointId;
  resetTblResults();
};
const resetTblResults = () => {
  grid.value.remove();
  exportFlag.value = true;
  confirmFlag.value = true;
  checkFlag.value = true;
};
const handle = (formData) => {
  gridDs.value = formData.importList;
  importWindowShowFlag.value = false;
  if (formData.errorExistFlag) {
    confirmFlag.value = true;
    exportFlag.value = false;
  } else {
    confirmFlag.value = false;
    exportFlag.value = true;
  }
  checkFlag.value = formData.checkFlag;
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
        <VueButton id="viy2Button_5heur2" ref="viy2Button_5heur2" icon-position="left" :disabled="exportFlag" @click="viy2Button_5heur2Click">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_CsZgm" ref="viy2Button_CsZgm" icon-position="left" @click="viy2Button_CsZgmClick">
          {{ t('button.import') }}
        </VueButton>
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" :disabled="confirmFlag" @click="viy2Button_5FbWKcClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_Crkyw"
      ref="viy2Flex_Crkyw"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="130px"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_6DXlvW"
          ref="viy2Row_6DXlvW"
        >
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.point')"
              prop="point"
              :rules="rules.viy2Select_1rPSyEHRules"
            >
              <VueSelect
                id="viy2Select_1rPSyEH"
                ref="viy2Select_1rPSyEH"
                v-model="queryFormData.point"
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
                @change="viy2Select_1rPSyEHChange"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_CrkbX"
        ref="viy2Flex_CrkbX"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridDealerCdEditRender"
            field="dealerCd"
            aggregate="sum"
            show-overflow="tooltip"
            align="left"
            :title="t('label.dealerCode')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridPointCdEditRender"
            field="pointCd"
            aggregate="sum"
            show-overflow="tooltip"
            align="left"
            :title="t('label.pointCode')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridPartsNoEditRender"
            field="partsNo"
            aggregate="sum"
            show-overflow="tooltip"
            align="left"
            :title="t('label.partsNo')"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridLocationCdEditRender"
            field="locationCd"
            aggregate="sum"
            show-overflow="tooltip"
            align="left"
            :title="t('label.locationCode')"
            width="150px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridQtyEditRender"
            field="qty"
            align="right"
            :title="t('label.quantity')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridAverageCostEditRender"
            field="averageCost"
            align="right"
            :title="t('label.averageCost')"
            width="140px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridErrorMessageEditRender"
            field="errorMessage"
            aggregate="sum"
            show-overflow="tooltip"
            align="left"
            :title="t('label.error')"
            header-align="center"
            min-width="200px"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
    <VueDialog
      id="viy2Dialog_Cp4gg"
      ref="viy2Dialog_Cp4gg"
      v-model="importWindowShowFlag"
      :destroy-on-close="true"
      :title="t('label.fileImport')"
    >
      <template #default>
        <viy2Subpage_CpizGPage
          id="viy2Subpage_CpizG"
          ref="viy2Subpage_CpizG"
          :import-info="importInfo"
          @transferring-data="handle"
        />
      </template>
    </VueDialog>
  </VueForm>
</template>
