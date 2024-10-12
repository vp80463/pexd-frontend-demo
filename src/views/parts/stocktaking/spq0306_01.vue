<script setup>
import { IconMoreFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { formatCost, formatPartNo } from '@/pj-commonutils.js';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const printFlg = ref(true);
const pointIdForWorkZone = ref(uc.defaultPointId);
defineOptions({
  name: 'spq0306_01',
});
const form = ref();
const viy2Flex_KKL7P = ref();
const queryForm = ref();
const viy2Panel_EhVB8 = ref();
const viy2Row_lOY8w = ref();
const viy2Select_1rPSyEH = ref();
const wz = ref();
const viy2Flex_KKNO6 = ref();
const viy2Panel_EhWHD = ref();
const print = ref();
const retrieve = ref();
const reset = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_2GIEFQ = ref();
const viy2Button_2GG9Gq = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', wzId: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const viy2Select_1rPSyEHOpts = reactive([
  {
    desc:
'65651 倉庫1',
    id:
'65651 倉庫1',
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
const wzOpts = reactive([
  {
    description:
'Workzone 1',
    workzoneId:
'Workzone 1',
  },
  {
    description:
'Option2',
    workzoneId:
'Option2',
  },
  {
    description:
'Option3',
    workzoneId:
'Option3',
  },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDs2Api = useApi({
  url: '/parts/spq0306/getPartsStocktakingList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
}, {
  onSuccess: (data, params) => {
    if (data.content.length > 0) {
      printFlg.value = false;
    } else {
      printFlg.value = true;
    }
  },
  manual: true,
});
const gridDs2 = gridDs2Api.data;
const workZoneDsApi = useApi({
  url: '/common/helper/getWorkZoneList.json',
  method: 'post',
  data: {
    arg0: pointIdForWorkZone,
  },
}, {
  manual: true,
});
const workZoneDs = workZoneDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      seqNo: '1',
      wz: 'DES001',
      location: '637-454-4504',
      partsNo: 'FJS-001-DHFU',
      partsNm: '電子ディスク001',
      cost: '1000000',
    },
    {
      seqNo: '2',
      wz: 'DES001',
      location: '637-123-4504',
      partsNo: 'FJS-002-DHFU',
      partsNm: '電子ディスク002',
      cost: '1000000',
    },
    {
      seqNo: '3',
      wz: 'DES001',
      location: '637-456-4504',
      partsNo: 'FJS-003-DHFU',
      partsNm: '電子ディスク003',
      cost: '1000000',
    },
    {
      seqNo: '4',
      wz: 'DES001',
      location: '637-152-3321',
      partsNo: 'FJS-004-DHFU',
      partsNm: '電子ディスク004',
      cost: '1000000',
    },
  ],
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      printFlg.value = false;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const viy2Select_1rPSyEHChange = (value) => {
  pointIdForWorkZone.value = value;
  queryFormData.wzId = '';
// workZoneDsApi.runAsync();
};
const printClick = () => {
  onPrintBtn();
};
const retrieveClick = () => {
  doRetrieve();
};
const resetClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const gridSeqNoEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridWzEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  if (row.cellValue) {
    return formatPartNo(row.cellValue);
  }
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCostFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);
};
const gridCostEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const paginationCurrentChange = (currentPage) => {
  if (gridDs.value.totalElements === 0) {
    return;
  }
  doRetrieve();
};
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
  paginationPageSize.value = PAGE_SIZE;
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
  queryFormData.pointId = uc.defaultPointId;
  // 重置分页
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
  gridDs.value.totalElements = 0;
};
const resetTblResults = () => {
  gridDs.value.content = [];
  printFlg.value = true;
  gridDs.value.totalElements = 0;
};
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const onPrintBtn = () => {
  useApi(
    {
      url: '/parts/spq0306/printPartsStocktakingResultList.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return queryFormData;
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartStocktakingResultList.pdf');
      },
    },
  );
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_KKL7P"
      ref="viy2Flex_KKL7P"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel v-if="false" id="viy2Panel_EhVB8" ref="viy2Panel_EhVB8" title="検索条件">
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
                v-if="false"
                label="倉庫"
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
                  :options="viy2Select_1rPSyEHOpts"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                  @change="viy2Select_1rPSyEHChange"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                v-show="false"
                label="エリア"
                prop="wzId"
              >
                <VueSelect
                  id="wz"
                  ref="wz"
                  v-model="queryFormData.wzId"
                  :style="{ width: '200px' }"
                  :collapse-tags="true"
                  :filterable="true"
                  :clearable="true"
                  :collapse-tags-tooltip="true"
                  :options="wzOpts"
                  :props="{
                    label: 'description',
                    value: 'workzoneId',
                  }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_KKNO6"
        ref="viy2Flex_KKNO6"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_EhWHD" ref="viy2Panel_EhWHD" title="棚卸リスト情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="print" ref="print" icon-position="left" :disabled="printFlg" @click="printClick">
                印刷
              </VueButton>
              <VueButton id="retrieve" ref="retrieve" icon-position="left" type="info" @click="retrieveClick">
                検索
              </VueButton>
              <VueButton id="reset" ref="reset" icon-position="left" @click="resetClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            <VueInputColumn
              :edit-render="gridSeqNoEditRender"
              field="seqNo"
              align="center"
              width="80px"
              header-align="center"
              title="表示順"
            />
            <VueInputColumn
              v-if="false"
              :edit-render="gridWzEditRender"
              field="wz"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="エリア"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridLocationEditRender"
              field="location"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              title="ロケーション"
              width="200px"
              header-align="center"
            />
            <VueInputColumn
              :formatter="gridPartsNoFormatter"
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              :sortable="true"
              title="部品番号"
              width="130px"
              header-align="center"
            >
              <template #append="scope">
                <VueButton id="viy2Button_2GIEFQ" ref="viy2Button_2GIEFQ" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              aggregate-label="Total"
              :sortable="true"
              title="部品名称"
              width="200px"
              header-align="center"
            >
              <template #append="scope">
                <VueButton id="viy2Button_2GG9Gq" ref="viy2Button_2GG9Gq" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueNumberColumn
              :formatter="gridCostFormatter"
              :edit-render="gridCostEditRender"
              field="cost"
              :sortable="true"
              title="平均原価"
              width="180px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        class="except-height-css"
      >
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          class="paging-area-margin"
          :md="{ span: 17 }"
        />
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 7 }"
        >
          <VuePagination
            id="pagination"
            ref="pagination"
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :background="true"
            :small="true"
            :total="gridDs.totalElements || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
