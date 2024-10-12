<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_4wmMaPage from '/src/views/fileLoad/fileImport.vue';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const exportFlag = ref(true);
const confirmFlag = ref(true);
const checkFlag = ref(true);
const importInfo = ref({
  programid: 'DIM020701',
  templatename: 'DIM020701_template.xlsx',
  otherproperty: '',
  downloadfilename: 'DIM020701ImportExample.xlsx',
  savewarningmsg: 'Do you want to import this file?',
});
defineOptions({
  name: 'dim0207_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_9AIw0 = ref();
const viy2Button_9AIw01 = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_vaCBe = ref();
const queryForm = ref();
const viy2Row_6DXlvW = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_vaD8T = ref();
const grid = ref();
const viy2Dialog_3e32s = ref();
const viy2Subpage_4wmMa = ref();
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
const viy2Select_1rPSyEHOpts = reactive([
  {
    desc:
'Option1',
    id:
'Option1',
  },
  {
    desc:
'Option2',
    id:
'Option2',
  },
  {
    desc:
'Option3',
    id:
'Option3',
  },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      dealerCd: 'YT35',
      pointCd: 'YT35A',
      locationCd: '102-55-1205',
      locationType: '通常',
      binType: 'フラットトレイ',
      workzoneCd: 'WZ001',
      partsNo: 'DFBK-564-DHS',
      error: '部品（DFBK-564-DHS）は「部品マスタ」に存在しない',
    },
    {
      dealerCd: 'YT35',
      pointCd: 'YT35A',
      locationCd: '102-44-1205',
      locationType: '通常',
      binType: 'フラットトレイ',
      workzoneCd: 'WZ001',
      partsNo: 'AAA-564-DHS',
      error: '',
    },
    {
      dealerCd: 'YT35',
      pointCd: 'YT35A',
      locationCd: '102-33-1205',
      locationType: '凍結',
      binType: 'フラットトレイ',
      workzoneCd: 'WZ001',
      partsNo: 'BBB-564-DHS',
      error: '',
    },
    {
      dealerCd: 'YT35',
      pointCd: 'YT35A',
      locationCd: '102-22-1205',
      locationType: '欠品',
      binType: 'フラットトレイ',
      workzoneCd: 'WZ001',
      partsNo: 'DDD-564-DHS',
      error: '',
    },
  ]
  ,
});
const gridDs = gridDsApi.data;
const exportDsApi = useApi({
  url: '/parts/dim0207/doDownload.json',
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
      a.download = 'DIM0207_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/dim0207/doConfirm.json',
  method: 'post',
  data: () => {
    queryFormData.gridDataList = grid.value.getTableData().fullData;
    confirmFlag.value = true;
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
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
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_9AIw0Click = () => {
  exportDsApi.runAsync();
};
const viy2Button_9AIw01Click = () => {
  importWindowShowFlag.value = true;
  importInfo._rawValue.otherproperty = queryFormData.pointId;
};
const viy2Button_5FbWKcClick = () => {
  if (grid.value.getTableData().fullData.length > 0) {
    grid.value.validate((valid) => {
      if (!valid) {
        if (checkFlag.value) {
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
  };
});
const gridPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLocationCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLocationTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBinTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridWorkzoneCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridErrorEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  queryFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.pointId = uc.defaultPointId;
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
        :sm="{ span: 12 }" :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
          リセット
        </VueButton>
        <VueButton id="viy2Button_9AIw0" ref="viy2Button_9AIw0" icon-position="left" :disabled="exportFlag" @click="viy2Button_9AIw0Click">
          エクスポート
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :sm="{ span: 12 }" :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_9AIw01" ref="viy2Button_9AIw01" icon-position="left" @click="viy2Button_9AIw01Click">
          インポート
        </VueButton>
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" :disabled="confirmFlag" @click="viy2Button_5FbWKcClick">
          確定
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_vaCBe"
      ref="viy2Flex_vaCBe"
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
              label="倉庫"
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
                :options="viy2Select_1rPSyEHOpts"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_1rPSyEHChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          />
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_vaD8T"
        ref="viy2Flex_vaD8T"
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
            show-overflow="tooltip"
            title="特約店"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridPointCdEditRender"
            field="pointCd"
            show-overflow="tooltip"
            title="倉庫"
            width="200px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridLocationCdEditRender"
            field="locationCd"
            show-overflow="tooltip"
            title="棚"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridLocationTypeEditRender"
            field="locationType"
            show-overflow="tooltip"
            title="棚別"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridBinTypeEditRender"
            field="binType"
            show-overflow="tooltip"
            title="箱別"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridWorkzoneCdEditRender"
            field="workzoneCd"
            show-overflow="tooltip"
            title="エリア"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridPartsNoEditRender"
            field="partsNo"
            show-overflow="tooltip"
            title="部品"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridErrorEditRender"
            field="error"
            show-overflow="tooltip"
            title="エラーメーセージ"
            header-align="center"
            min-width="200px"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
    <VueDialog
      id="viy2Dialog_3e32s"
      ref="viy2Dialog_3e32s"
      v-model="importWindowShowFlag"
      :destroy-on-close="true"
      :title="t('label.fileImport')"
    >
      <template #default>
        <viy2Subpage_4wmMaPage
          id="viy2Subpage_4wmMa"
          ref="viy2Subpage_4wmMa"
          :import-info="importInfo"
          @transferring-data="handle"
        />
      </template>
    </VueDialog>
  </VueForm>
</template>
