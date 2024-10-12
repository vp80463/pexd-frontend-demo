<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const printFlag = ref(true);
const finishFlag = ref(true);
const cancleFlag = ref(true);
defineOptions({
  name: 'spm0310_01',
});
const form = ref();
const viy2Flex_KM2rL = ref();
const queryForm = ref();
const viy2Panel_IOrch = ref();
const viy2Button_4yEnxa = ref();
const resetBtn = ref();
const viy2Row_2FErgO = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_KM8nY = ref();
const viy2Panel_IOswv = ref();
const viy2Button_6uqKIi = ref();
const viy2Button_6uqM5s = ref();
const viy2Button_5heznY = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Row_vEUP3 = ref();
const viy2Row_7xMz9A = ref();
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
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const FinishStockTakingDsApi = useApi({
  url: '/parts/spm0310/doFinishStockTaking.json',
  method: 'post',
  data: () => {
    return {
      gridDataList: grid.value.getTableData().fullData,
      pointId: queryFormData.pointId,
    };
  },
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
  },
  manual: true,
});
const FinishStockTakingDs = FinishStockTakingDsApi.data;
const gridDs3Api = useApi({
  url: '/parts/spm0310/doRetrieve.json',
  method: 'post',
  data: () => {
    return {
      pointId: queryFormData.pointId,
    };
  },
}, {
  onSuccess: (data, params) => {
    if (data.length !== 0) {
      printFlag.value = false;
      finishFlag.value = false;
      cancleFlag.value = false;
    }
  },
  manual: true,
});
const gridDs3 = gridDs3Api.data;
const printDsApi = useApi({
  url: '/parts/spm0310/doPrint.json',
  method: 'post',
  data: () => {
    return {
      // gridDataList: grid.value.getTableData().fullData,
      pointId: queryFormData.pointId,
      point: queryFormData.pointvl,
    };
  },
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
    onPrintBtn();
  },
  manual: true,
});
const printDs = printDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      type: 'システム合計',
      lines: '637',
      items: '634',
      qty: '9850',
      amount: '904258330',
    },
    {
      type: '実績合計',
      lines: '637',
      items: '634',
      qty: '9830',
      amount: '904258330',
    },
    {
      type: '実績数量=システム数量',
      lines: '633',
      items: '630',
      qty: '9850',
      amount: '904258330',
    },
    {
      type: '実績数量>システム数量',
      lines: '4',
      items: '4',
      qty: '80',
      amount: '1859962',
    },
    {
      type: '実績数量<システム数量',
      lines: '0',
      items: '0',
      qty: '0',
      amount: '0',
    },
    {
      type: '差異率=（実績数量=システム数量）/実績合計',
      lines: '99.37',
      items: '99.37',
      qty: '99.19',
      amount: '99.79',
    },
  ],
}, {
  onSuccess: (data, params) => {
    cancleFlag.value = false;
    finishFlag.value = false;
    printFlag.value = false;// for test
  },
});
const gridDs = gridDsApi.data;
const CancelStockTakingDsApi = useApi({
  url: '/parts/spm0310/doCancelStockTaking.json',
  method: 'post',
  data: () => {
    return {
      pointId: queryFormData.pointId,
    };
  },
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const CancelStockTakingDs = CancelStockTakingDsApi.data;
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
const viy2Button_4yEnxaClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Select_1rPSyEHChange = (value, data) => {
  queryFormData.pointId = data.id;
  queryFormData.pointCd = data.code;
};
const viy2Button_6uqKIiClick = () => {
  if (queryFormData.action !== 'VIEW') {
    VueMessageBox.confirm(t('ymc-commons.P.00008'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      // CancelStockTakingDsApi.runAsync();
    });
  }
};
const viy2Button_6uqM5sClick = () => {
// FinishStockTakingDsApi.runAsync();
};
const viy2Button_5heznYClick = () => {
  printDsApi.runAsync();
};
const gridTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLinesFormatter = (row) => {
  if (row.rowIndex === 5) {
    return Number(row.cellValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return Number(row.cellValue).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
const gridLinesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridItemsFormatter = (row) => {
  if (row.rowIndex === 5) {
    return Number(row.cellValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return Number(row.cellValue).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
const gridItemsEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridQtyFormatter = (row) => {
  if (row.rowIndex === 5) {
    return Number(row.cellValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return Number(row.cellValue).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
const gridQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAmountFormatter = (row) => {
  if (row.rowIndex === 5) {
    return Number(row.cellValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return Number(row.cellValue).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
const gridAmountEditRender = computed(() => {
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
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.pointNm = uc.defaultPointNm;
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
  pointDsShopApi.runAsync();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
  printFlag.value = true;
  finishFlag.value = true;
  cancleFlag.value = true;
};
const onPrintBtn = () => {
  useApi(
    {
      url: '/parts/spm0310/printPartsStocktakingResultStatistics.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          pointId: queryFormData.pointId,
          point: queryFormData.pointvl,
        };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartsStocktakingResultStatistics.pdf');
      },
    },
  );
  useApi(
    {
      url: '/parts/spm0310/printPartsStocktakingGapList.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          pointId: queryFormData.pointId,
          point: queryFormData.pointvl,
        };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartsStocktakingGapList.pdf');
      },
    },
  );
  useApi(
    {
      url: '/parts/spm0310/printPartsStocktakingLedger.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          pointId: queryFormData.pointId,
          point: queryFormData.pointvl,
        };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartsStocktakingLedger.pdf');
      },
    },
  );
  useApi(
    {
      url: '/parts/spm0310/printPartsStocktakingResultList.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return {
          pointId: queryFormData.pointId,
          point: queryFormData.pointvl,
          pointCd: queryFormData.pointCd,
          pointNm: queryFormData.pointNm,
        };
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
      id="viy2Flex_KM2rL"
      ref="viy2Flex_KM2rL"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel v-if="false" id="viy2Panel_IOrch" ref="viy2Panel_IOrch" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton v-if="false" id="viy2Button_4yEnxa" ref="viy2Button_4yEnxa" icon-position="left" type="info" @click="viy2Button_4yEnxaClick">
                検索
              </VueButton>
              <VueButton v-if="false" id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_2FErgO"
            ref="viy2Row_2FErgO"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 10 }"
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
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_KM8nY"
        ref="viy2Flex_KM8nY"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_IOswv" ref="viy2Panel_IOswv" title="棚卸情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_6uqKIi" ref="viy2Button_6uqKIi" icon-position="left" :disabled="cancleFlag" @click="viy2Button_6uqKIiClick">
                棚卸取消
              </VueButton>
              <VueButton id="viy2Button_6uqM5s" ref="viy2Button_6uqM5s" icon-position="left" type="info" :disabled="finishFlag" @click="viy2Button_6uqM5sClick">
                棚卸完了
              </VueButton>
              <VueButton id="viy2Button_5heznY" ref="viy2Button_5heznY" icon-position="left" :disabled="printFlag" @click="viy2Button_5heznYClick">
                印刷
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
              :edit-render="gridTypeEditRender"
              field="type"
              title="タイプ"
              width="400px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridLinesFormatter"
              :edit-render="gridLinesEditRender"
              field="lines"
              align="right"
              title="行数"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridItemsFormatter"
              :edit-render="gridItemsEditRender"
              field="items"
              align="right"
              title="項目数"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridQtyFormatter"
              :edit-render="gridQtyEditRender"
              field="qty"
              align="right"
              title="数量"
              width="200px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridAmountFormatter"
              :edit-render="gridAmountEditRender"
              field="amount"
              align="right"
              title="合計金額"
              width="200px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
      <VueRow
        id="viy2Row_vEUP3"
        ref="viy2Row_vEUP3"
      >
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueRow
            id="viy2Row_7xMz9A"
            ref="viy2Row_7xMz9A"
            class="except-height-css"
          >
            <VueCol
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueText id="viy2Text_7xMz9B" ref="viy2Text_7xMz9B" :style="{ width: '100%', display: 'inline-block' }">
                「棚卸完成」棚卸を終了し、在庫レポートを生成する
              </VueText>
            </VueCol>
            <VueCol
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueText id="viy2Text_7xMz9C" ref="viy2Text_7xMz9C" :style="{ width: '100%', display: 'inline-block' }">
                「棚卸取消」棚卸取消
              </VueText>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
