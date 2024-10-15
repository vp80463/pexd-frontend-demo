<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { get } from 'lodash-es';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const exportFlag = ref(true);
defineOptions({
  name: 'spq0308_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const resetBtn = ref();
const viy2Button_5heur2 = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_pVofi = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2Select_1rPSyEH = ref();
const viy2Select_Fpozc = ref();
const viy2Select_6G8oSC = ref();
const viy2Flex_pVGDy = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  point: '', locationTypeId: '', binTypeId: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/parts/spq0308/doRetrieve.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      exportFlag.value = false;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const mstCodeDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S006'],
}, {
  initialData: {
    S006: [],
  },
});
const mstCodeDs = mstCodeDsApi.data;
const downloadDsApi = useApi({
  url: '/parts/spq0308/doDownload.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SPQ0308_01.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
    gridDsApi.runAsync();
  },
  manual: true,
});
const downloadDs = downloadDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const binTypeDsApi = useApi({
  url: '/common/helper/getBinTypeList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const binTypeDs = binTypeDsApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5heur2Click = () => {
  downloadDsApi.runAsync();
};
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Select_1rPSyEHChange = (value, data) => {
  queryFormData.pointId = data.id;
  queryFormData.pointCd = data.code;
};
const gridPointCdEditRender = computed(() => {
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
const gridInUseQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridEmptyQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridTotalQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridUsageRateFormatter = ({ cellValue }) => {
  return VueUtil.formatNumber(Number(cellValue), { digits: 2 });
}; ;
const gridUsageRateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
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
  gridDs.value.splice(0);
  exportFlag.value = true;
};
const getTotalRate = () => {
  const tableDataList = grid.value.getTableData().fullData;
  if (tableDataList.length > 0) {
    let totalInUseQty = 0;
    let totalTotalQty = 0;
    for (const key in tableDataList) {
      const item = tableDataList[key];
      totalInUseQty += item.inUseQty;
      totalTotalQty += item.totalQty;
    }
    return VueUtil.formatNumber(Number(totalInUseQty / totalTotalQty) * 100, { digits: 2 });
  }
  return VueUtil.formatNumber(Number(0), { digits: 2 });
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning" @click="resetBtnClick">
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
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_pVofi"
      ref="viy2Flex_pVofi"
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
            <VueFormItem
              :label="t('label.locationType')"
              prop="locationTypeId"
            >
              <VueSelect
                id="viy2Select_Fpozc"
                ref="viy2Select_Fpozc"
                v-model="queryFormData.locationTypeId"
                :style="{ width: '200px' }"
                :collapse-tags="true"
                :collapse-tags-tooltip="true"
                :clearable="true"
                :options="get(mstCodeDs, 'S006')"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.binType')"
              prop="binTypeId"
            >
              <VueSelect
                id="viy2Select_6G8oSC"
                ref="viy2Select_6G8oSC"
                v-model="queryFormData.binTypeId"
                :style="{ width: '200px' }"
                :collapse-tags="true"
                :collapse-tags-tooltip="true"
                :clearable="true"
                :options="binTypeDs"
                :props="{
                  label: 'description',
                  value: 'binTypeId',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_pVGDy"
        ref="viy2Flex_pVGDy"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            :edit-render="gridPointCdEditRender"
            field="pointCd"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.pointCode')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridLocationTypeEditRender"
            field="locationType"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.locationType')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridBinTypeEditRender"
            field="binType"
            show-overflow="tooltip"
            :sortable="true"
            :aggregate-label="t('label.total')"
            :title="t('label.binType')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridInUseQtyEditRender"
            field="inUseQty"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="150px"
            :title="t('label.locationInUse')"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridEmptyQtyEditRender"
            field="emptyQty"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="150px"
            :title="t('label.locationEmpty')"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridTotalQtyEditRender"
            field="totalQty"
            align="right"
            aggregate="sum"
            footer-align="right"
            :sortable="true"
            width="150px"
            :title="t('label.locationTotal')"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridUsageRateFormatter"
            :edit-render="gridUsageRateEditRender"
            field="usageRate"
            align="right"
            :aggregate="getTotalRate"
            footer-align="right"
            :sortable="true"
            width="150px"
            :title="t('label.usageRate%')"
            header-align="center"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
