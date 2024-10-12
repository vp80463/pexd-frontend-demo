<script setup>
import { IconCloseBold, IconDelete, IconEdit, VueMessage, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge, sum } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { clearFormData } from
  '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const initializedFlag = ref(true);
const asideParams = ref();
const addFlag = ref(true);
const defaultIndex = ref(0);
defineOptions({
  name: 'cmm0508_01',
});
const form = ref();
const viy2Row_GgDWR = ref();
const resetBtn = ref();
const asideBtn = ref();
const retrieveBtn = ref();
const panels = ref();
const viy2Flex_KSt2A = ref();
const conditionForm = ref();
const viy2Row_118QTw = ref();
const point = ref();
const viy2Flex_KSxs1 = ref();
const grid = ref();
const viy2Row_18ZEg = ref();
const viy2CheckBox_4T9AHb = ref();
const editAside = ref();
const titleRow = ref();
const confrimBtn = ref();
const closeBtn = ref();
const detailForm = ref();
const viy2Row_ArbTb = ref();
const largeGroup = ref();
const Sign = ref();
const viy2InputNumber_XrG7A = ref();
const viy2InputNumber_9AyDtY = ref();
const viy2InputNumber_9AyC1Y = ref();
const viy2InputNumber_9AyzLY = ref();
const viy2InputNumber_9AyZvi = ref();
const viy2InputNumber_9AyYqc = ref();
const viy2InputNumber_9Az1A0 = ref();
const viy2InputNumber_9Az0yM = ref();
const viy2InputNumber_9AAIOc = ref();
const viy2InputNumber_9AATY8 = ref();
const viy2InputNumber_9AAHG6 = ref();
const viy2InputNumber_9AASiU = ref();
const viy2InputNumber_9AANs6 = ref();
const addAside = ref();
const addRow = ref();
const viy2Button_9AEuaL = ref();
const viy2Button_9AEuaW = ref();
const addForm = ref();
const viy2Row_9AEI4c = ref();
const addlargeGroup = ref();
const viy2Radio_9AEI5C = ref();
const viy2InputNumber_9AEI5N = ref();
const viy2InputNumber_1xUz6We = ref();
const viy2InputNumber_1xUz6XR = ref();
const viy2InputNumber_1xUz716 = ref();
const viy2InputNumber_1xUz72G = ref();
const viy2InputNumber_1xUz75Y = ref();
const viy2InputNumber_1xUz77B = ref();
const viy2InputNumber_1xUz77C = ref();
const viy2InputNumber_1xUz79f = ref();
const viy2InputNumber_1xUz7cu = ref();
const viy2InputNumber_1xUz7fG = ref();
const viy2InputNumber_1xUz7hm = ref();
const viy2InputNumber_1xUz7iZ = ref();
const formData = reactive({
});
const panelsData = reactive({
});
const conditionFormData = reactive({
  pointId: '',
});
const detailFormData = reactive({
  largeGroup: '', manualFlag: 'Y', month01: 0, month02: 0, month03: 0, month04: 0, month05: 0, month06: 0, month07: 0, month08: 0, month09: 0, month10: 0, month11: 0, month12: 0, monthTotal: 0,
});
const addFormData = reactive({
  largeGroup: '', manualFlag: 'Y', month01: 0, month02: 0, month03: 0, month04: 0, month05: 0, month06: 0, month07: 0, month08: 0, month09: 0, month10: 0, month11: 0, month12: 0, monthTotal: 0,
});
const rules = reactive({
  pointRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  largeGroupRules: [
    {
      required: true,
      message: t('errors.required', [t('label.largeCategory')]),
    },
  ],
  addlargeGroupRules: [
    {
      required: true,
      message: t('errors.required', [t('label.largeCategory')]),
    },
  ],
});
const showEditWin = ref(false);
const SignOpts = reactive([
  { value: 'Y', label: 'Yes' },
  { value: 'N', label: 'No' },
]);
const showAddWin = ref(false);
const viy2Radio_9AEI5COpts = reactive([
  { value: 'Y', label: 'Yes' },
  { value: 'N', label: 'No' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_4T9AHbOpts = [
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
const gridViy2TableButtonColumn_ySNcgButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onEditWin,
    },
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRow,
      title: 'Delete',
    },
  ];
};
const updateRowDsApi = useApi({
  url: '/master/cmm0508/updateRow.json',
  method: 'post',
  data: () => {
    return detailFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    detailGridDsApi.runAsync({
      productCategoryId: detailFormData.productCategoryId,
      pointId: conditionFormData.pointId,
    });
    showEditWin.value = false;
  },
  manual: true,
});
const updateRowDs = updateRowDsApi.data;
const addGridDsApi = useApi({
  url: '/master/cmm0508/findSeasonIndexList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    merge(addFormData, data[0]);
    addFormData.pointId = conditionFormData.pointId;
  },
  manual: true,
});
const addGridDs = addGridDsApi.data;
const gridDsApi = useApi({
  url: '/master/cmm0508/findSeasonIndexList.json',
  method: 'post',
  data: () => {
    return conditionFormData;
  },
}, {
  onSuccess: (data, params) => {
    addFlag.value = false;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const detailGridDsApi = useApi({
  url: '/master/cmm0508/findSeasonIndexList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    merge(detailFormData, data[0]);
    detailFormData.pointId = conditionFormData.pointId;
  },
  manual: true,
});
const detailGridDs = detailGridDsApi.data;
const addRowDsApi = useApi({
  url: '/master/cmm0508/addRow.json',
  method: 'post',
  data: () => {
    addFormData.pointId = conditionFormData.pointId;
    return addFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    addForm.value.resetFields();
    showAddWin.value = false;
  },
  manual: true,
});
const addRowDs = addRowDsApi.data;
const pointDsShopApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDsShop = pointDsShopApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getSingleLargeGroupList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    data.forEach((str) => {
      str.categoryCd = `${str.categoryCd} ${str.categoryNm}`;
    });
  },
  initialData: {
    data: [],
  },
});
const largeGroupDs = largeGroupDsApi.data;
const deleteRowDsApi = useApi({
  url: '/master/cmm0508/deleteRow.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const deleteRowDs = deleteRowDsApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const asideBtnClick = () => {
  onAddWin();
};
const retrieveBtnClick = () => {
  const queryFormElement = conditionForm.value;
  queryFormElement.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const gridLargeGroupEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridManualFlagEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const Viy2TableGroupColumn_ugTgzEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth01EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth02EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth03EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth04EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth05EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth06EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth07EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth08EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth09EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth10EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth11EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonth12EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMonthTotalEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const editAsideClosed = (params) => {
  if (conditionFormData.pointId !== null && conditionFormData.pointId !== '') {
    gridDsApi.runAsync({});
  }
};
const confrimBtnClick = () => {
  detailForm.value.validate((valid) => {
    if (valid) {
      updateRowDsApi.runAsync();
    }
  });
};
const closeBtnClick = () => {
  if (detailFormData.action !== 'VIEW') {
    VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      showEditWin.value = false;
    });
  }
};
const viy2InputNumber_XrG7AChange = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9AyDtYChange = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9AyC1YChange = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9AyzLYChange = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9AyZviChange = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9AyYqcChange = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9Az1A0Change = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9Az0yMChange = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9AAIOcChange = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9AATY8Change = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9AAHG6Change = (value) => {
  countMonthTotal(detailFormData);
};
const viy2InputNumber_9AASiUChange = (value) => {
  countMonthTotal(detailFormData);
};
const addAsideClosed = (params) => {
  if (conditionFormData.pointId !== null && conditionFormData.pointId !== '') {
    gridDsApi.runAsync({});
  }
};
const viy2Button_9AEuaLClick = () => {
  addForm.value.validate((valid) => {
    if (valid) {
      addRowDsApi.runAsync();
    }
  });
};
const viy2Button_9AEuaWClick = () => {
  if (addFormData.action !== 'VIEW') {
    VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      showAddWin.value = false;
    });
  }
};
const addlargeGroupChange = (value, data) => {
  if (value) {
    addFormData.productCategoryId = value;
  }
};
const viy2InputNumber_9AEI5NChange = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz6WeChange = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz6XRChange = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz716Change = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz72GChange = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz75YChange = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz77BChange = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz77CChange = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz79fChange = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz7cuChange = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz7fGChange = (value) => {
  countMonthTotal(addFormData);
};
const viy2InputNumber_1xUz7hmChange = (value) => {
  countMonthTotal(addFormData);
};
onMounted(() => {
});
// reset监听
watch(() => conditionFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
// 打开编辑侧边栏
const onEditWin = (row) => {
  showEditWin.value = true;
  nextTick(() => {
    detailGridDsApi.runAsync({
      productCategoryId: row.productCategoryId,
      pointId: conditionFormData.pointId,
    });
  });
};
// 打开新增侧边栏
const onAddWin = (row) => {
  showAddWin.value = true;
  clearFormData(addFormData);
};
// 关闭编辑侧边栏
const closeEditAside = () => {
  showEditWin.value = false;
};
// 关闭新增侧边栏
const closeAddAside = () => {
  showAddWin.value = false;
};
const resetCondition = () => {
// 清空表单元素
  conditionForm.value.resetFields();
  clearFormData(conditionFormData);
  // 清空queryFormData中的其他值
  for (const key in conditionFormData) {
    conditionFormData[key] = '';
  }
  resetTblResults();
  addFlag.value = true;
  initializedFlag.value = true;
};
const resetTblResults = () => {
  gridDs.value.splice(0);
  pointDsShopApi.runAsync();
};
// 行删除
const onDelRow = (row) => {
  VueMessageBox.confirm(t('M.C.00103', [t('label.seasonIndex')]), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    deleteRowDsApi.runAsync({
      pointId: conditionFormData.pointId,
      productCategoryId: row.productCategoryId,
      manualFlag: row.manualFlag,
    });
  }).catch(() => {
  });
};
const countMonthTotal = (form) => {
  const monthTotalList = ref([]);
  monthTotalList.value.push(form.month01);
  monthTotalList.value.push(form.month02);
  monthTotalList.value.push(form.month03);
  monthTotalList.value.push(form.month04);
  monthTotalList.value.push(form.month05);
  monthTotalList.value.push(form.month06);
  monthTotalList.value.push(form.month07);
  monthTotalList.value.push(form.month08);
  monthTotalList.value.push(form.month09);
  monthTotalList.value.push(form.month10);
  monthTotalList.value.push(form.month11);
  monthTotalList.value.push(form.month12);
  form.monthTotal = sum(monthTotalList.value);
};
const formatInteger = (value) => {
  if (!value) {
    return 0;
  } else {
    return value;
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_GgDWR"
      ref="viy2Row_GgDWR"
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
        <VueButton id="asideBtn" ref="asideBtn" icon-position="left" class="icon-button-width" @click="asideBtnClick">
          {{ t('button.new') }}
        </VueButton>
        <VueButton id="retrieveBtn" ref="retrieveBtn" icon-position="left" @click="retrieveBtnClick">
          {{ t('button.search') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="panels"
      ref="panels"
      :model="panelsData"
    >
      <VueFlex
        id="viy2Flex_KSt2A"
        ref="viy2Flex_KSt2A"
        direction="column"
        class="full-height"
      >
        <VueForm
          id="conditionForm"
          ref="conditionForm"
          class="margin-top-div0 except-height-css"
          :model="conditionFormData"
        >
          <VueRow
            id="viy2Row_118QTw"
            ref="viy2Row_118QTw"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.point')"
                prop="pointId"
                :rules="rules.pointRules"
              >
                <VueSelect
                  id="point"
                  ref="point"
                  v-model="conditionFormData.pointId"
                  :style="{ width: '250px' }"
                  :collapse-tags="true"
                  :filterable="true"
                  :clearable="true"
                  :collapse-tags-tooltip="true"
                  :options="pointDsShop"
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
          id="viy2Flex_KSxs1"
          ref="viy2Flex_KSxs1"
          direction="column"
          grow="1"
        >
          <VueTable id="grid" ref="grid" height="100%" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueRow
              id="viy2Row_18ZEg"
              ref="viy2Row_18ZEg"
            >
              <VueCol
                item-key="item"
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
              :edit-render="gridLargeGroupEditRender"
              field="largeGroup"
              :title="t('label.largeCategory')"
              width="160px"
            />
            <VueTemplateColumn
              :edit-render="gridManualFlagEditRender"
              align="center"
              field="manualFlag"
              :title="t('label.manualSign')"
              width="100px"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_4T9AHb"
                  ref="viy2CheckBox_4T9AHb"
                  v-model="scope.row.manualFlag"
                  :disabled="true"
                  true-label="Y"
                  false-label="N"
                  :border="true"
                />
              </template>
            </VueTemplateColumn>
            <VueColgroup
              id="viy2TableGroupColumn_ugTgz"
              ref="viy2TableGroupColumn_ugTgz"
              width="200px"
              :title="t('label.monthlyIndex')"
            >
              <VueNumberColumn
                :edit-render="gridMonth01EditRender"
                field="month01"
                width="80px"
                :title="t('label.jan')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth02EditRender"
                field="month02"
                width="80px"
                :title="t('label.feb')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth03EditRender"
                field="month03"
                width="80px"
                :title="t('label.mar')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth04EditRender"
                field="month04"
                width="80px"
                :title="t('label.apr')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth05EditRender"
                field="month05"
                width="80px"
                :title="t('label.may')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth06EditRender"
                field="month06"
                width="80px"
                :title="t('label.jun')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth07EditRender"
                field="month07"
                width="80px"
                :title="t('label.jul')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth08EditRender"
                field="month08"
                width="80px"
                :title="t('label.aug')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth09EditRender"
                field="month09"
                width="80px"
                :title="t('label.sep')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth10EditRender"
                field="month10"
                width="80px"
                :title="t('label.oct')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth11EditRender"
                field="month11"
                width="80px"
                :title="t('label.nov')"
                header-align="center"
              />
              <VueNumberColumn
                :edit-render="gridMonth12EditRender"
                field="month12"
                width="80px"
                :title="t('label.dec')"
                header-align="center"
              />
            </VueColgroup>
            <VueNumberColumn
              :edit-render="gridMonthTotalEditRender"
              field="monthTotal"
              align="right"
              :title="t('label.total')"
              width="100px"
              header-align="center"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="80px"
              :buttons="gridViy2TableButtonColumn_ySNcgButtons"
            />
          </VueTable>
        </VueFlex>
      </VueFlex>
    </VueForm>
    <VueAside
      id="editAside"
      ref="editAside"
      v-model="showEditWin"
      :modal="true"
      direction="rtl"
      size="38%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="false"
      @closed="editAsideClosed"
    >
      <VueRow
        id="titleRow"
        ref="titleRow"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          class="aside-title-row"
          :md="{ span: 16 }"
        >
          <VueText id="viy2Text_Am5Os" ref="viy2Text_Am5Os" class="aside-title-text">
            {{ t('label.seasonIndexMaintenanceDetail') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          class="aside-title-row"
          :md="{ span: 8 }"
        >
          <VueButton id="confrimBtn" ref="confrimBtn" icon-position="left" type="primary" class="aside-title-button" @click="confrimBtnClick">
            {{ t('button.confirm') }}
          </VueButton>
          <VueButton id="closeBtn" ref="closeBtn" icon-position="left" size="large" type="text" class="icon-button-width" :icon="IconCloseBold" @click="closeBtnClick" />
        </VueCol>
      </VueRow>
      <VueForm
        id="detailForm"
        ref="detailForm"
        class="margin-top-aside"
        :model="detailFormData"
      >
        <VueRow
          id="viy2Row_ArbTb"
          ref="viy2Row_ArbTb"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.largeCategory')"
              prop="largeGroup"
              :rules="rules.largeGroupRules"
            >
              <VueSelect
                id="largeGroup"
                ref="largeGroup"
                v-model="detailFormData.largeGroup"
                :style="{ width: '250px' }"
                :disabled="true"
                :options="largeGroupDs"
                :props="{
                  label: 'categoryCd',
                  value: 'productCategoryId',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.manualSign')"
              label-width="100px"
              prop="manualFlag"
            >
              <VueRadioGroup
                id="Sign"
                ref="Sign"
                v-model="detailFormData.manualFlag"
                radio-style="button"
                direction="horizontal"
                :disabled="true"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in SignOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.jan')}(%)`"
              label-width="100px"
              prop="month01"
            >
              <VueInputNumber
                id="viy2InputNumber_XrG7A"
                ref="viy2InputNumber_XrG7A"
                v-model="detailFormData.month01"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_XrG7AChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.feb')}(%)`"
              label-width="100px"
              prop="month02"
            >
              <VueInputNumber
                id="viy2InputNumber_9AyDtY"
                ref="viy2InputNumber_9AyDtY"
                v-model="detailFormData.month02"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9AyDtYChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.mar')}(%)`"
              label-width="100px"
              prop="month03"
            >
              <VueInputNumber
                id="viy2InputNumber_9AyC1Y"
                ref="viy2InputNumber_9AyC1Y"
                v-model="detailFormData.month03"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9AyC1YChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.apr')}(%)`"
              label-width="100px"
              prop="month04"
            >
              <VueInputNumber
                id="viy2InputNumber_9AyzLY"
                ref="viy2InputNumber_9AyzLY"
                v-model="detailFormData.month04"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9AyzLYChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.may')}(%)`"
              label-width="100px"
              prop="month05"
            >
              <VueInputNumber
                id="viy2InputNumber_9AyZvi"
                ref="viy2InputNumber_9AyZvi"
                v-model="detailFormData.month05"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9AyZviChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.jun')}(%)`"
              label-width="100px"
              prop="month06"
            >
              <VueInputNumber
                id="viy2InputNumber_9AyYqc"
                ref="viy2InputNumber_9AyYqc"
                v-model="detailFormData.month06"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9AyYqcChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.jul')}(%)`"
              label-width="100px"
              prop="month07"
            >
              <VueInputNumber
                id="viy2InputNumber_9Az1A0"
                ref="viy2InputNumber_9Az1A0"
                v-model="detailFormData.month07"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9Az1A0Change"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.aug')}(%)`"
              label-width="100px"
              prop="month08"
            >
              <VueInputNumber
                id="viy2InputNumber_9Az0yM"
                ref="viy2InputNumber_9Az0yM"
                v-model="detailFormData.month08"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9Az0yMChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.sep')}(%)`"
              label-width="100px"
              prop="month09"
            >
              <VueInputNumber
                id="viy2InputNumber_9AAIOc"
                ref="viy2InputNumber_9AAIOc"
                v-model="detailFormData.month09"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9AAIOcChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.oct')}(%)`"
              label-width="100px"
              prop="month10"
            >
              <VueInputNumber
                id="viy2InputNumber_9AATY8"
                ref="viy2InputNumber_9AATY8"
                v-model="detailFormData.month10"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9AATY8Change"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.nov')}(%)`"
              label-width="100px"
              prop="month11"
            >
              <VueInputNumber
                id="viy2InputNumber_9AAHG6"
                ref="viy2InputNumber_9AAHG6"
                v-model="detailFormData.month11"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9AAHG6Change"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.dec')}(%)`"
              label-width="100px"
              prop="month12"
            >
              <VueInputNumber
                id="viy2InputNumber_9AASiU"
                ref="viy2InputNumber_9AASiU"
                v-model="detailFormData.month12"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9AASiUChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.total')}(%)`"
              label-width="100px"
              prop="monthTotal"
            >
              <VueInputNumber
                id="viy2InputNumber_9AANs6"
                ref="viy2InputNumber_9AANs6"
                v-model="detailFormData.monthTotal"
                text-align="right"
                :disabled="true"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VueAside>
    <VueAside
      id="addAside"
      ref="addAside"
      v-model="showAddWin"
      :modal="true"
      :with-header="false"
      :show-close="false"
      direction="rtl"
      size="38%"
      :close-on-click-modal="false"
      @closed="addAsideClosed"
    >
      <VueRow
        id="addRow"
        ref="addRow"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          class="aside-title-row"
          :md="{ span: 16 }"
        >
          <VueText id="viy2Text_9AEuaq" ref="viy2Text_9AEuaq" class="aside-title-text">
            {{ t('label.seasonIndexMaintenanceDetail') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          class="aside-title-row"
          :md="{ span: 8 }"
        >
          <VueButton id="viy2Button_9AEuaL" ref="viy2Button_9AEuaL" icon-position="left" type="primary" class="aside-title-button" @click="viy2Button_9AEuaLClick">
            {{ t('button.confirm') }}
          </VueButton>
          <VueButton id="viy2Button_9AEuaW" ref="viy2Button_9AEuaW" icon-position="left" size="small" type="text" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_9AEuaWClick" />
        </VueCol>
      </VueRow>
      <VueForm
        id="addForm"
        ref="addForm"
        class="margin-top-aside"
        :model="addFormData"
      >
        <VueRow
          id="viy2Row_9AEI4c"
          ref="viy2Row_9AEI4c"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.largeCategory')"
              prop="largeGroup"
              :rules="rules.addlargeGroupRules"
            >
              <VueSelect
                id="addlargeGroup"
                ref="addlargeGroup"
                v-model="addFormData.largeGroup"
                :style="{ width: '250px' }"
                :clearable="true"
                :options="largeGroupDs"
                :props="{
                  label: 'categoryCd',
                  value: 'productCategoryId',
                }"
                @change="addlargeGroupChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.manualSign')"
              label-width="100px"
              prop="manualFlag"
            >
              <VueRadioGroup
                id="viy2Radio_9AEI5C"
                ref="viy2Radio_9AEI5C"
                v-model="addFormData.manualFlag"
                radio-style="button"
                direction="horizontal"
                :disabled="true"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_9AEI5COpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.jan')}(%)`"
              label-width="100px"
              prop="month01"
            >
              <VueInputNumber
                id="viy2InputNumber_9AEI5N"
                ref="viy2InputNumber_9AEI5N"
                v-model="addFormData.month01"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_9AEI5NChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.feb')}(%)`"
              label-width="100px"
              prop="month02"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz6We"
                ref="viy2InputNumber_1xUz6We"
                v-model="addFormData.month02"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz6WeChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.mar')}(%)`"
              label-width="100px"
              prop="month03"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz6XR"
                ref="viy2InputNumber_1xUz6XR"
                v-model="addFormData.month03"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz6XRChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.apr')}(%)`"
              label-width="100px"
              prop="month04"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz716"
                ref="viy2InputNumber_1xUz716"
                v-model="addFormData.month04"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz716Change"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.may')}(%)`"
              label-width="100px"
              prop="month05"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz72G"
                ref="viy2InputNumber_1xUz72G"
                v-model="addFormData.month05"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz72GChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.jun')}(%)`"
              label-width="100px"
              prop="month06"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz75Y"
                ref="viy2InputNumber_1xUz75Y"
                v-model="addFormData.month06"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz75YChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.jul')}(%)`"
              label-width="100px"
              prop="month07"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz77B"
                ref="viy2InputNumber_1xUz77B"
                v-model="addFormData.month07"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz77BChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.aug')}(%)`"
              label-width="100px"
              prop="month08"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz77C"
                ref="viy2InputNumber_1xUz77C"
                v-model="addFormData.month08"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz77CChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.sep')}(%)`"
              label-width="100px"
              prop="month09"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz79f"
                ref="viy2InputNumber_1xUz79f"
                v-model="addFormData.month09"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz79fChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.oct')}(%)`"
              label-width="100px"
              prop="month10"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz7cu"
                ref="viy2InputNumber_1xUz7cu"
                v-model="addFormData.month10"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz7cuChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.nov')}(%)`"
              label-width="100px"
              prop="month11"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz7fG"
                ref="viy2InputNumber_1xUz7fG"
                v-model="addFormData.month11"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz7fGChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.dec')}(%)`"
              label-width="100px"
              prop="month12"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz7hm"
                ref="viy2InputNumber_1xUz7hm"
                v-model="addFormData.month12"
                :formatter="formatInteger"
                text-align="right"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
                @change="viy2InputNumber_1xUz7hmChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="`${t('label.total')}(%)`"
              label-width="100px"
              prop="monthTotal"
            >
              <VueInputNumber
                id="viy2InputNumber_1xUz7iZ"
                ref="viy2InputNumber_1xUz7iZ"
                v-model="addFormData.monthTotal"
                text-align="right"
                :disabled="true"
                :precision="0"
                :min="0"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VueAside>
  </VueForm>
</template>

<style type="text/css" scoped>
.rotate-icon {
transform: rotate(90deg);
font-size: large;
align-self: center;
}
.row-margin-top {
margin-top: 10px;
}
</style>
