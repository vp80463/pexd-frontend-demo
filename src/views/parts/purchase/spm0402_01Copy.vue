<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_cBluzPage from '/src/views/fileLoad/fileImport.vue';
import { formatPartNo, formatQty } from '@/pj-commonutils.js';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const detailPanelModel = ref(true);
const initializedFlag = ref(true);
const confirmFlag = ref(true);
const uc = useUser().userInfo;
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const total = ref();
const nowPartsCode = ref();
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const importInfo = ref({ programid: 'SPM040201', templatename: 'SPM040201_template.xlsx', otherproperty: '123456', downloadfilename: 'downloadExample.xlsx', savewarningmsg: 'Do you want to import this file?' });
defineOptions({
  name: 'spm0402_01Copy',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_8WgCMY = ref();
const viy2Button_7vrcC0 = ref();
const viy2Button_4yEnxa = ref();
const viy2Flex_KUH8r = ref();
const queryForm = ref();
const viy2Row_4Hp8hY = ref();
const viy2Select_okFFM = ref();
const viy2ValueList_90dtey = ref();
const viy2Row_2z7k93 = ref();
const viy2Select_7wtHHf = ref();
const viy2Flex_KUKeY = ref();
const viy2Panel_QGbH1 = ref();
const viy2Row_QGshA = ref();
const viy2Button_7wxlCE = ref();
const viy2Button_7wxlCF = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2CheckBox_7wPzOh = ref();
const viy2CheckBox_67a2Sc = ref();
const viy2Row_9XkUb = ref();
const pagination = ref();
const viy2Dialog_cBgVr = ref();
const viy2Subpage_cBluz = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', part: '', largeGroupId: '',
});
const rules = reactive({
  viy2Select_okFFMRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const gridRules = {
  partsCd: [
    { required: true, message: t('errors.required', [t('label.partsNo')]) },
  ],
  rop: [
    { required: true, message: t('errors.required', [t('label.rop')]) },
  ],
  roq: [
    { required: true, message: t('errors.required', [t('label.roq')]) },
  ],
};
const importWindowShowFlag = ref(false);
const viy2ValueList_90dteyPopoverQueryMethod = parts_query_method;
const viy2ValueList_90dteyPopupColumns = ref(parts_pop_column);
const viy2ValueList_90dteyPopupQueryMethod = parts_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  beforeEditMethod: (obj) => {
    return !(obj.column.property == 'partsCd' && obj.row.reorderGuidelineId != null);
  },
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_7wPzOhOpts = [
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
const viy2CheckBox_67a2ScOpts = [
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
const gridViy2TableButtonColumn_KMbPgButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRoleRow,
      title: 'Delete',
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const partsAutoFill2DsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  data: () => {
    return {
      partsCd: nowPartsCode.value,
      pageSize: 1,
      currentPage: 1,
    };
  },
}, {
  manual: true,
});
const partsAutoFill2Ds = partsAutoFill2DsApi.data;
const editGridDsApi = useApi({
  url: '/parts/spm0402/editRoqRopList.json',
  method: 'post',
  data: () => {
    queryFormData.ropRoqData = grid.value.getRecordset();
    for (const element of gridDs.value.content) {
      if (element.sign != element.beforeSign) {
        queryFormData.ropRoqData.updateRecords.push(element);
      }
    }
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  onError: (data, params) => {
    gridDsApi.runAsync();
  },
  manual: true,
});
const editGridDs = editGridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const gridDsApi = useApi({
  url: '/parts/spm0402/searchRoqRopList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data.size > 0) {
      confirmFlag.value = false;
    }
    total.value = data.totalElements;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const deleteGridDsApi = useApi({
  url: '/parts/spm0402/deleteRoqRop.json',
  method: 'post',
  data: () => {
    queryFormData.ropRoqData = grid.value.getRecordset();
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const deleteGridDs = deleteGridDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const largeGroupDs = largeGroupDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
});
const brandDs = brandDsApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_7vrcC0Click = () => {
  doRetrieve();
};
const viy2ValueList_90dteySelect = (params) => {
  queryFormData.partsId = params.id;
};
const viy2ValueList_90dteyClear = (params) => {
  queryFormData.partsId = '';
};
const viy2ValueList_90dteyLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    if (obj.currentValue) {
      onLeavePartsCode(obj.currentValue);
    } else {
      queryFormData.partsId = '';
    }
  }
};
const viy2ValueList_90dteyPopoverColumns = computed(() => {
  return parts_column;
});
const viy2ValueList_90dteyPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
  ];
});
const viy2Button_7wxlCEClick = () => {
  importWindowShowFlag.value = true;
  importInfo._rawValue.otherproperty = queryFormData.pointId;
};
const viy2Button_7wxlCFClick = () => {
  const row = { partsCd: '', rop: 0, roq: 0, sign: 'N' };
  grid.value.insertAt(row, -1).then((newRow) => {
    grid.value.setCurrentRow(newRow.row);
  });
  confirmFlag.value = false;
};
const gridPartsCdSelect = (obj, params) => {
  obj.row.partsNm = params.name;
  obj.row.partsCd = params.code;
  obj.row.partsId = params.id;
};
const gridPartsCdLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    const row = obj.row;
    if (params.currentValue) {
      onDetailLeavePartsCode(row, params.currentValue);
    } else {
      row.partsNm = '';
      row.partsId = '';
    }
  }
};
const gridPartsCdClear = (obj, params) => {
  obj.row.partsId = '';
  obj.row.partsNm = '';
};
const gridPartsCdEvents = reactive({
  select: gridPartsCdSelect,
  leave: gridPartsCdLeave,
  clear: gridPartsCdClear,
});
const gridPartsCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartsCdEditRender = computed(() => {
  return {
    enabled: true,
    events: gridPartsCdEvents,
    attrs: {
      clearable: true,
      selectField: 'code',
      usePopover: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      popoverColumns: parts_column,
      popoverQueryMethod: parts_query_method,
      togglePopoverOnClick: true,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
      popupColumns: parts_pop_column,
      popupConditions: [
        { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
        { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
        { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
        { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
      ],
      popupQueryMethod: parts_pop_query_method,
      closeOnClickModal: true,
    },
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRopBlur = function (obj, value) {
  if (obj.row.rop == null) {
    obj.row.rop = 0;
  }
};
const gridRopEvents = reactive({
  blur: gridRopBlur,
});
const gridRopFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridRopEditRender = computed(() => {
  return {
    enabled: true,
    events: gridRopEvents,
    defaultValue: '0',
    attrs: {
      precision: 0,
      textAlign: 'right',
    },
  };
});
const gridRoqBlur = function (obj, value) {
  if (obj.row.roq == null) {
    obj.row.roq = 0;
  }
};
const gridRoqEvents = reactive({
  blur: gridRoqBlur,
});
const gridRoqFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatQty(row.cellValue);
  }
  return row.cellValue;
};
const gridRoqEditRender = computed(() => {
  return {
    enabled: true,
    events: gridRoqEvents,
    defaultValue: '0',
    attrs: {
      precision: 0,
      textAlign: 'right',
    },
  };
});
const gridCopy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy0_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridLargeGroupEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCostUsageEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTotalOneEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTotalTwoEditRender = computed(() => {
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
const gridStockQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnPurchaseQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridBoQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const paginationCurrentChange = (currentPage) => {
  if (total.value === 0) {
    return;
  }
  gridDsApi.runAsync();
};
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
  paginationPageSize.value = PAGE_SIZE;
});
watch(() => queryFormData, (newVal, oldVal) => {
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
  initializedFlag.value = true;
  queryFormData.pointId = uc.defaultPointId;
  paginationPageSize.value = PAGE_SIZE;
};
const resetTblResults = () => {
  grid.value.remove();
  gridDs.value.content = [];
  confirmFlag.value = true;
  total.value = 0;
  paginationCurrentPage.value = 1;
};
const onDelRoleRow = (row) => {
  const message = `${t('label.partsNo')} ${t('label.rop')} ${t('label.roq')}`;
  VueMessageBox.confirm(t('M.C.00103', [message]), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    grid.value.remove(row);
    if (row.reorderGuidelineId != null) {
      deleteGridDsApi.runAsync();
    }
  }).catch(() => {
  });
};
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
// 配件输入后Leave
const onLeavePartsCode = async (code) => {
  nowPartsCode.value = code;
  await getPartsData();
};
const onDetailLeavePartsCode = async (row, code) => {
  nowPartsCode.value = code;
  await getDetailPartsData(row);
};
const getPartsData = async () => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData != null) {
    queryFormData.part = partsData.desc;
    queryFormData.partsId = partsData.id;
  } else {
    queryFormData.partsId = '';
  }
};
const getDetailPartsData = async (row) => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData != null) {
    row.partsNm = partsData.name;
    row.partsCd = partsData.code;
    row.partsId = partsData.id;
  } else {
    row.partsNm = '';
    row.partsId = '';
  }
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_10QMyC"
      ref="viy2Row_10QMyC"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" @click="resetBtnClick">
          リセット
        </VueButton>
        <VueButton id="viy2Button_8WgCMY" ref="viy2Button_8WgCMY" icon-position="left" type="info">
          確定
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_7vrcC0" ref="viy2Button_7vrcC0" icon-position="left" @click="viy2Button_7vrcC0Click">
          検索
        </VueButton>
        <VueButton id="viy2Button_4yEnxa" ref="viy2Button_4yEnxa" icon-position="left" type="info">
          確定
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_KUH8r"
      ref="viy2Flex_KUH8r"
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
          id="viy2Row_4Hp8hY"
          ref="viy2Row_4Hp8hY"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="倉庫"
              prop="pointId"
              :rules="rules.viy2Select_okFFMRules"
            >
              <VueSelect
                id="viy2Select_okFFM"
                ref="viy2Select_okFFM"
                v-model="queryFormData.pointId"
                :style="{ width: '250px' }"
                :filterable="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
            <VueFormItem
              label="部品"
              prop="part"
            >
              <VueValueList
                :use-common-popover="true"
                :use-common-popup="true"
                id="viy2ValueList_90dtey"
                aside-size="60%"
                ref="viy2ValueList_90dtey"
                :toggle-popover-on-click="queryFormData.part.length > 3"
                v-model="queryFormData.part"
                select-field="desc"
                :popover-min-query-length="3"
                :close-on-click-modal="true"
                :use-popup="true"
                :clearable="true"
                :popover-width="500"
                width="250px"
                :popover-columns="viy2ValueList_90dteyPopoverColumns"
                :popover-query-method="viy2ValueList_90dteyPopoverQueryMethod"
                :popup-columns="viy2ValueList_90dteyPopupColumns"
                :popup-conditions="viy2ValueList_90dteyPopupConditions"
                :popup-query-method="viy2ValueList_90dteyPopupQueryMethod"
                @select="viy2ValueList_90dteySelect"
                @clear="viy2ValueList_90dteyClear"
                @leave="viy2ValueList_90dteyLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_2z7k93"
                    ref="viy2Row_2z7k93"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_2z7k9e" ref="viy2Text_2z7k9e" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        {{ t('title.partNoRef') }}
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
              label="商品大区分"
              label-width="130px"
              prop="largeGroupId"
            >
              <VueSelect
                id="viy2Select_7wtHHf"
                ref="viy2Select_7wtHHf"
                v-model="queryFormData.largeGroupId"
                :style="{ width: '200px' }"
                :collapse-tags="true"
                :clearable="true"
                :collapse-tags-tooltip="true"
                :options="largeGroupDs"
                :props="{
                  label: 'label',
                  value: 'value',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_KUKeY"
        ref="viy2Flex_KUKeY"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_QGbH1" ref="viy2Panel_QGbH1" :title="t('label.detail')" height="100%">
          <template #header>
            <div style="width: 300px">
              <VueRow
                id="viy2Row_QGshA"
                ref="viy2Row_QGshA"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_7wxlCE" ref="viy2Button_7wxlCE" icon-position="left" @click="viy2Button_7wxlCEClick">
                    {{ t('button.import') }}
                  </VueButton>
                  <VueButton id="viy2Button_7wxlCF" ref="viy2Button_7wxlCF" icon-position="left" class="icon-button-width" @click="viy2Button_7wxlCFClick">
                    +
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs.content" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
              fixed="left"
              width="50px"
              min-width="50px"
              header-align="center"
            />
            <VueValueListColumn
              :formatter="gridPartsCdFormatter"
              :edit-render="gridPartsCdEditRender"
              :clearable="true"
              :toggle-popover-on-click="true"
              field="partsCd"
              show-overflow="tooltip"
              fixed="left"
              title="部品番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              fixed="left"
              show-overflow="tooltip"
              title="部品名"
              min-width="180px"
            />
            <VueNumberColumn
              :formatter="gridRopFormatter"
              :edit-render="gridRopEditRender"
              field="rop"
              align="right"
              :precision="0"
              title="発注点"
              width="100px"
            />
            <VueNumberColumn
              :formatter="gridRoqFormatter"
              :edit-render="gridRoqEditRender"
              field="roq"
              align="right"
              :precision="0"
              title="発注量"
              width="100px"
            />
            <VueTemplateColumn
              :edit-render="gridCopy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
              align="center"
              aggregate-label="Total"
              title="発注点量手動要否"
              width="180px"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_7wPzOh"
                  ref="viy2CheckBox_7wPzOh"
                  v-model="scope.row.sign"
                  :disabled="false"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
            <VueTemplateColumn
              :edit-render="gridCopy0_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
              align="center"
              aggregate-label="Total"
              :visible="false"
              title="注点量手動要否"
              width="180px"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_67a2Sc"
                  ref="viy2CheckBox_67a2Sc"
                  v-model="scope.row.beforeSign"
                  :disabled="false"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
            <VueInputColumn
              :edit-render="gridLargeGroupEditRender"
              field="largeGroup"
              title="商品大区分"
              width="160px"
            />
            <VueInputColumn
              :edit-render="gridCostUsageEditRender"
              field="costUsage"
              title="CU分類"
              width="125px"
            />
            <VueNumberColumn
              :edit-render="gridTotalOneEditRender"
              field="totalOne"
              align="right"
              title="J1合計"
              width="90px"
            />
            <VueNumberColumn
              :edit-render="gridTotalTwoEditRender"
              field="totalTwo"
              align="right"
              title="J２合計"
              width="90px"
            />
            <VueNumberColumn
              :edit-render="gridAverageCostEditRender"
              field="averageCost"
              align="right"
              title="平均コスト"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridStockQtyEditRender"
              field="stockQty"
              align="right"
              title="有効在庫"
              width="110px"
            />
            <VueNumberColumn
              :edit-render="gridOnPurchaseQtyEditRender"
              field="onPurchaseQty"
              align="right"
              title="購入中数量"
              width="145px"
            />
            <VueNumberColumn
              :edit-render="gridBoQtyEditRender"
              field="boQty"
              align="right"
              title="欠品数量"
              width="90px"
            />
            <VueButtonColumn
              align="center"
              fixed="right"
              width="60px"
              :buttons="gridViy2TableButtonColumn_KMbPgButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
      <VueRow
        id="viy2Row_9XkUb"
        ref="viy2Row_9XkUb"
      >
        <VueCol
          item-key="item"
          :md="{ span: 15 }"
        />
        <VueCol
          item-key="item"
          align="right"
          :md="{ span: 9 }"
        >
          <VuePagination
            id="pagination"
            ref="pagination"
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :background="true"
            :small="true"
            :style="{ 'justify-content': 'right' }"
            :total="total || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
    <VueDialog
      id="viy2Dialog_cBgVr"
      ref="viy2Dialog_cBgVr"
      v-model="importWindowShowFlag"
      :close-on-click-modal="false"
      :destroy-on-close="true"
      title="File Import"
      width="1000px"
    >
      <template #default>
        <viy2Subpage_cBluzPage
          id="viy2Subpage_cBluz"
          ref="viy2Subpage_cBluz"
          :import-info="importInfo"
        />
      </template>
    </VueDialog>
  </VueForm>
</template>
