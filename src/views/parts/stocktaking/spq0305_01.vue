<script setup>
import { IconMoreFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { formatPartNo, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const exportFlg = ref(true);
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
defineOptions({
  name: 'spq0305_01',
});
const form = ref();
const viy2Flex_KK8Dx = ref();
const queryForm = ref();
const viy2Panel_Dg4It = ref();
const retrieve = ref();
const reset = ref();
const viy2Row_lOY8w = ref();
const parts = ref();
const viy2Row_2GnwrX = ref();
const viy2ValueList_m8NTd = ref();
const viy2Flex_KKdAL = ref();
const viy2Panel_Dgdtg = ref();
const print = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_2G489o = ref();
const viy2Button_2G4Dgq = ref();
const formData = reactive({
});
const queryFormData = reactive({
  parts: '', partsNo: '',
});
const partsPopoverQueryMethod = parts_query_method;
const partsPopupColumns = ref(parts_pop_column);
const partsPopupQueryMethod = parts_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const productCtgDsApi = useApi({
  method: 'post',
  localData: [
    {
      value: 'guide',
      label: 'Guide',
      children: [
        {
          value: 'disciplines',
          label: 'Disciplines',
          children: [
            {
              value: 'consistency',
              label: 'Consistency',
            },
            {
              value: 'feedback',
              label: 'Feedback',
            },
          ],
        },
        {
          value: 'navigation',
          label: 'Navigation',
          children: [
            {
              value: 'side nav',
              label: 'Side Navigation',
            },
            {
              value: 'top nav',
              label: 'Top Navigation',
            },
          ],
        },
      ],
    },
    {
      value: 'resource',
      label: 'Resource',
      children: [
        {
          value: 'axure',
          label: 'Axure Components',
        },
        {
          value: 'sketch',
          label: 'Sketch Templates',
        },
      ],
    },
  ],
}, {
  manual: true,
});
const productCtgDs = productCtgDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      partsNo: '10V-15641-00',
      partsNm: 'スターターギア',
      onReceivingQty: '1',
      onPickingQty: '0',
      onFrozenQty: '0',
    },
    {
      partsNo: '110-09817-72',
      partsNm: 'パッキン',
      onReceivingQty: '2',
      onPickingQty: '3',
      onFrozenQty: '0',
    },
    {
      partsNo: '11H-12114-00',
      partsNm: 'フロントサイドリフレクターアセンブリ',
      onReceivingQty: '0',
      onPickingQty: '1',
      onFrozenQty: '0',
    },
    {
      partsNo: '11H-81844-00',
      partsNm: 'シフトレバーアセンブリ',
      onReceivingQty: '3',
      onPickingQty: '0',
      onFrozenQty: '2',
    },
  ],
}, {
  onSuccess: (data, params) => {
    exportFlg.value = false;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
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
const gridDs2Api = useApi({
  url: '/parts/spq0305/getPartsOnWorkingCheckList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (data.length > 0) {
      exportFlg.value = false;
    } else {
      exportFlg.value = true;
    }
  },
  manual: true,
});
const gridDs2 = gridDs2Api.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const partsInputDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
}, {
  manual: true,
});
const partsInputDs = partsInputDsApi.data;
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
const partsSelect = (params) => {
  queryFormData.partsId = params.id;
};
const partsClear = () => {
  queryFormData.partsId = '';
};
const partsLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.partsId = '';
    if (obj.currentValue) {
      onLeavePartsCode(obj.currentValue);
    }
  }
};
const partsPopoverColumns = computed(() => {
  return parts_column;
});
const partsPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), options: largeGroupDs.value, clearable: true, props: { checkStrictly: true }, style: { width: '150px' } },
  ];
});
const printClick = () => {
  onPrintBtn();
};
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
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
const gridOnReceivingQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnReceivingQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
    },
  };
});
const gridOnPickingQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnPickingQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
    },
  };
});
const gridOnFrozenQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnFrozenQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
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
    queryFormData[key] = '';
  }
  resetTblResults();
  queryFormData.pointId = uc.defaultPointId;
};
const resetTblResults = () => {
  gridDs.value.splice(0);
  exportFlg.value = true;
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
      url: '/parts/spq0305/printPartsOnWorkingCheckList.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return queryFormData;
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartsOnWorkingCheckList.pdf');
      },
    },
  );
};
// 配件输入后Leave
const onLeavePartsCode = async (code) => {
  const res = await partsInputDsApi.runAsync({
    partsCd: code,
    pageSize: 1,
    currentPage: 1,
  });
  if (res && res.total > 0) {
    const data = res.list[0];
    queryFormData.parts = data.desc;
    queryFormData.partsId = data.id;
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_KK8Dx"
      ref="viy2Flex_KK8Dx"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_Dg4It" ref="viy2Panel_Dg4It" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="retrieve" ref="retrieve" icon-position="left" type="info" @click="retrieveClick">
                検索
              </VueButton>
              <VueButton id="reset" ref="reset" icon-position="left" @click="resetClick">
                クリア
              </VueButton>
            </div>
          </template>
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
                label="部品2"
                prop="parts"
              >
                <VueValueList
                  :use-common-popover="true"
                  :use-common-popup="true"
                  id="parts"
                  aside-size="60%"
                  ref="parts"
                  :toggle-popover-on-click="queryFormData.parts.length > 3"
                  v-model="queryFormData.parts"
                  select-field="desc"
                  :popover-min-query-length="3"
                  :close-on-click-modal="queryFormData.parts.length > 3"
                  :use-popup="true"
                  :clearable="true"
                  :popover-width="500"
                  width="250px"
                  :popover-columns="partsPopoverColumns"
                  :popover-query-method="partsPopoverQueryMethod"
                  :popup-columns="partsPopupColumns"
                  :popup-conditions="partsPopupConditions"
                  :popup-query-method="partsPopupQueryMethod"
                  @select="partsSelect"
                  @clear="partsClear"
                  @leave="partsLeave"
                >
                  <template #asideHeader>
                    <VueRow
                      id="viy2Row_2GnwrX"
                      ref="viy2Row_2GnwrX"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_2GnwrY" ref="viy2Text_2GnwrY" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                          {{ t('title.partItemRef') }}
                        </VueText>
                      </VueCol>
                      <VueCol
                        item-key="item"
                        align="right"
                        :inline="true"
                        class="aside-title-button"
                        :md="{ span: 17 }"
                      />
                    </VueRow>
                  </template>
                </VueValueList>
              </VueFormItem>
              <VueFormItem
                label="部品"
                prop="partsNo"
              >
                <VueValueList
                  id="viy2ValueList_m8NTd"
                  ref="viy2ValueList_m8NTd"
                  v-model="queryFormData.partsNo"
                  :use-popover="true"
                  :use-popup="true"
                  width="250px"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_KKdAL"
        ref="viy2Flex_KKdAL"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_Dgdtg" ref="viy2Panel_Dgdtg" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="print" ref="print" icon-position="left" :disabled="exportFlg" @click="printClick">
                印刷
              </VueButton>
            </div>
          </template>
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
              :formatter="gridPartsNoFormatter"
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              :sortable="true"
              title="部品番号"
              width="130px"
              header-align="center"
            >
              <template #append="scope">
                <VueButton id="viy2Button_2G489o" ref="viy2Button_2G489o" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              aggregate-label="合計"
              footer-align="center"
              :sortable="true"
              title="部品名称"
              width="200px"
              header-align="center"
            >
              <template #append="scope">
                <VueButton id="viy2Button_2G4Dgq" ref="viy2Button_2G4Dgq" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
              </template>
            </VueInputColumn>
            <VueNumberColumn
              :formatter="gridOnReceivingQtyFormatter"
              :edit-render="gridOnReceivingQtyEditRender"
              field="onReceivingQty"
              aggregate="sum"
              :sortable="true"
              title="受付中数量"
              width="180px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnPickingQtyFormatter"
              :edit-render="gridOnPickingQtyEditRender"
              field="onPickingQty"
              aggregate="sum"
              :sortable="true"
              title="ピック中数量"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridOnFrozenQtyFormatter"
              :edit-render="gridOnFrozenQtyEditRender"
              field="onFrozenQty"
              aggregate="sum"
              :sortable="true"
              title="凍結数量"
              width="140px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
