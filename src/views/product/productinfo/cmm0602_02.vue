<script setup>
import { IconDelete, IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import { formatCodeInput, formatPartNo } from '@/pj-commonutils.js';
import
{
  parts_column, parts_pop_column,
  parts_pop_query_method, parts_query_method,
  serviceJobByModel_pop_query_method, serviceJobByModel_query_method, serviceJob_model_column, serviceJob_model_pop_condition,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
// 获取当前月份的第一天
const firstDay = dayjs().format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs('20991231').format('YYYYMMDD');
const routeParam = useParams();
const packageNoReadOnlyflg = ref(false);
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
let servicePackageId = null;
let productCategoryList;
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const productMdl = ref(true);
const serviceMdl = ref(true);
const partsMdl = ref(true);
const nowPartsCode = ref();
defineOptions({
  name: 'cmm0602_02',
});
const form = ref();
const btnRow = ref();
const resetBtn = ref();
const confirmBtn = ref();
const viy2Panel_9gbmH4 = ref();
const queryForm = ref();
const viy2Row_1b4WYW = ref();
const viy2InputBox_1b4WYX = ref();
const viy2InputBox_1b4WZa = ref();
const viy2InputBox_1b4WZn = ref();
const viy2InputBox_bMNvSK = ref();
const viy2DateTimePicker_bMNvUp = ref();
const viy2DateTimePicker_bMNvUr = ref();
const viy2Select_bMNvUu = ref();
const productCategoryDetail = ref();
const viy2Row_1b72SP = ref();
const viy2Button_1b72SQ = ref();
const grid1 = ref();
const viy2Row_1b72T3 = ref();
const viy2Button_bN8sTz = ref();
const serviceDetailAndPartsDetail = ref();
const copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_7uGFk_col1 = ref();
const viy2Panel_1b8keZ = ref();
const viy2Row_1b8kfb = ref();
const viy2Button_1b8kfc = ref();
const grid2 = ref();
const viy2Row_1b8kff = ref();
const viy2Button_bNlgt9 = ref();
const copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_7uGFk_col2 = ref();
const viy2Panel_bNlguV = ref();
const viy2Row_bNlguX = ref();
const viy2Button_bNlguY = ref();
const grid3 = ref();
const viy2Row_bNlgv1 = ref();
const viy2Button_bNlgwL = ref();
const formData = reactive({
});
const queryFormData = reactive({
  packageNo: '', localNm: '', salesNm: '', englishNm: '', dateFrom: '', dateTo: '', serviceCategoryId: '',
});
const rules = reactive({
  viy2InputBox_1b4WYXRules: [
    {
      required: true,
      message: t('errors.required', [t('label.packageNumber')]),
    },
  ],
  viy2InputBox_1b4WZaRules: [
    {
      required: true,
      message: t('errors.required', [t('label.localName')]),
    },
  ],
  viy2DateTimePicker_bMNvUpRules: [
    {
      required: true,
      message: t('errors.required', [t('From Date')]),
    },
  ],
  viy2DateTimePicker_bMNvUrRules: [
    {
      required: true,
      message: t('errors.required', [t('To Date')]),
    },
  ],
});
const grid1Rules = {
  productCategoryId: [
    { required: true, message: t('errors.required', [t('label.productCategory')]) },
  ],
};
const grid2Rules = {
  serviceJobCd: [
    { required: true, message: t('errors.required', [t('label.serviceJob')]) },
  ],
};
const grid3Rules = {
  partsCd: [
    { required: true, message: t('errors.required', [t('label.partsNo')]) },
  ],
  qty: [
    { required: true, message: 'Qty is required' },
  ],
};
const grid1EditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
});
const grid1MouseConfig = reactive({
  extension: true,
});
const grid1Viy2TableButtonColumn_ngQpnButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelGrid1Row,
      title: 'Delete',
    },
  ];
};
const grid2EditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const grid2MouseConfig = reactive({
  extension: true,
});
const grid2Viy2TableButtonColumn_ngQpnButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelGrid2Row,
      title: 'Delete',
    },
  ];
};
const grid3EditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const grid3MouseConfig = reactive({
  extension: true,
});
const grid3Viy2TableButtonColumn_ngQpnButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelGrid3Row,
      title: 'Delete',
    },
  ];
};
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
});
const brandDs = brandDsApi.data;
const productCategoryDsApi = useApi({
  url: '/common/helper/getProductCategoryList.json',
  method: 'post',
  data: {
    arg0: 'S001GOODS',
  },
}, {
  onSuccess: (data, params) => {
    productCategoryList = data;
  },
});
const productCategoryDs = productCategoryDsApi.data;
const confirmDsApi = useApi({
  url: '/master/cmm0602/confirm.json',
  method: 'post',
  data: () => {
    queryFormData.productTableDataList = grid1.value.getRecordset();
    queryFormData.serviceTableDataList = grid2.value.getRecordset();
    queryFormData.partsTableDataList = grid3.value.getRecordset();
    queryFormData.productCategoryDetailList = grid1.value.getTableData().fullData;
    queryFormData.serviceDetailList = grid2.value.getTableData().fullData;
    queryFormData.partsDetailList = grid3.value.getTableData().fullData;
    return Object.assign({}, queryFormData);
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    queryFormData.servicePackageId = data.servicePackageId;
    servicePackageId = data.servicePackageId;
    initDsApi.runAsync();
    packageNoReadOnlyflg.value = true;
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const initDsApi = useApi({
  url: '/master/cmm0602/cmm060202InitSearch.json',
  method: 'post',
  data: () => {
    return {
      servicePackageId,
    };
  },
}, {
  onSuccess: (data) => {
    queryFormData.packageNo = data.packageNo;
    queryFormData.localNm = data.localNm;
    queryFormData.salesNm = data.salesNm;
    queryFormData.englishNm = data.englishNm;
    queryFormData.dateFrom = data.dateFrom;
    queryFormData.dateTo = data.dateTo;
    queryFormData.serviceCategoryId = data.serviceCategoryId;
  },
  manual: true,
});
const initDs = initDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const largeGroupDs = largeGroupDsApi.data;
const partsInputDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
}, {
  manual: true,
});
const partsInputDs = partsInputDsApi.data;
const svCategoryDsApi = useApi({
  url: '/common/helper/getSvCategoryList.json',
  method: 'post',
  data: {
    arg0: '',
  },
}, {
  onSuccess: (data, params) => {
    const sda = data;
  },
});
const svCategoryDs = svCategoryDsApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const confirmBtnClick = () => {
  const tableDataList1 = grid1.value.getTableData().fullData;
  const tableDataList2 = grid2.value.getTableData().fullData;
  const tableDataList3 = grid3.value.getTableData().fullData;
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      const validationPromises = [];
      const validResults = [false, false, false];
      if (tableDataList1.length > 0) {
        validationPromises.push(
          grid1.value.fullValidate(tableDataList1).then((valid) => {
            if (!valid) {
              validResults[0] = true;
            }
          }),
        );
      } else {
        validResults[0] = true;
      }
      if (tableDataList2.length > 0) {
        validationPromises.push(
          grid2.value.fullValidate(tableDataList2).then((valid) => {
            if (!valid) {
              validResults[1] = true;
            }
          }),
        );
      } else {
        validResults[1] = true;
      }
      if (tableDataList3.length > 0) {
        validationPromises.push(
          grid3.value.fullValidate(tableDataList3).then((valid) => {
            if (!valid) {
              validResults[2] = true;
            }
          }),
        );
      } else {
        validResults[2] = true;
      }
      Promise.all(validationPromises).then(() => {
        const validCount = validResults.filter(result => result).length;
        if (validCount === 3) {
          confirmDsApi.runAsync();
        }
      });
    }
  });
};
const viy2Button_1b72SQClick = () => {
  const row = {};
  grid1.value.insertAt(row, -1).then((newRow) => {
    grid1.value.setCurrentRow(newRow.row);
  });
};
const grid1ProductCategoryIdChange = (obj, newValue, newOption, oldValue) => {
  const row = obj.row;
  for (const key in productCategoryList) {
    if (productCategoryList[key].productCategoryId == newOption.value) {
      row.productCategoryNm = productCategoryList[key].categoryNm;
      row.productCategoryCd = productCategoryList[key].categoryCd;
    }
  }
};
const grid1ProductCategoryIdEvents = reactive({
  change: grid1ProductCategoryIdChange,
});
const grid1ProductCategoryIdEditRender = computed(() => {
  return {
    enabled: true,
    events: grid1ProductCategoryIdEvents,
    options: productCategoryDs.value,
    displayMember: 'categoryCd',
    valueMember: 'productCategoryId',
  };
});
const grid1ProductCategoryNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_bN8sTzClick = () => {
  showPartsWin.value = true;
};
const grid1ProductCategoryCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1ServicePackageCategoryIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_1b8kfcClick = () => {
  const row = {};
  grid2.value.insertAt(row, -1).then((newRow) => {
    grid2.value.setCurrentRow(newRow.row);
  });
};
const grid2ServiceJobCdSelect = (obj, params) => {
  obj.row.serviceJobNm = params.name;
  obj.row.serviceJobCd = params.code;
  obj.row.serviceJobId = params.id;
};
const grid2ServiceJobCdClear = (obj, params) => {
  obj.row.serviceJobId = '';
  obj.row.serviceJobNm = '';
};
const grid2ServiceJobCdLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    obj.row.serviceJobId = '';
    obj.row.serviceJobNm = '';
  }
};
const grid2ServiceJobCdEvents = reactive({
  select: grid2ServiceJobCdSelect,
  clear: grid2ServiceJobCdClear,
  leave: grid2ServiceJobCdLeave,
});
const grid2ServiceJobCdEditRender = computed(() => {
  return {
    enabled: true,
    events: grid2ServiceJobCdEvents,
    attrs: {
      clearable: true,
      selectField: 'code',
      usePopover: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      popoverColumns: serviceJob_model_column,
      popoverQueryMethod: serviceJobByModel_query_method,
      togglePopoverOnClick: true,
      popupType: 'aside',
      asideSize: '60%',
      popupColumns: serviceJob_model_column,
      popupConditions: serviceJob_model_pop_condition,
      popupQueryMethod: serviceJobByModel_pop_query_method,
    },
  };
});
const grid2ServiceJobNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_bNlgt9Click = () => {
  showPartsWin.value = true;
};
const grid2ServiceJobIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2PackageItemId1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_bNlguYClick = () => {
  const row = {};
  grid3.value.insertAt(row, -1).then((newRow) => {
    grid3.value.setCurrentRow(newRow.row);
  });
};
const grid3PartsCdSelect = (obj, params) => {
  const row = obj.row;
  setValueOnPartGrid(row, params);
};
const grid3PartsCdClear = (obj) => {
  const row = obj.row;
  clearPartsOnPartsGrid(row);
};
const grid3PartsCdLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    const row = obj.row;
    queryFormData.partsId = '';
    if (params.currentValue) {
      onLeavePartsCode(row, params.currentValue);
    }
  }
};
const grid3PartsCdEvents = reactive({
  select: grid3PartsCdSelect,
  clear: grid3PartsCdClear,
  leave: grid3PartsCdLeave,
});
const grid3PartsCdFormatter = (row, columnConfig, cellValue) => {
  if (row.cellValue !== undefined && row.cellValue !== '' && row.cellValue !== null) {
    return formatPartNo(row.cellValue);
  }
  return row.cellValue;
};
const grid3PartsCdEditRender = computed(() => {
  return {
    enabled: true,
    events: grid3PartsCdEvents,
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
        { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), checkStrictly: true, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
      ],
      popupQueryMethod: parts_pop_query_method,
      popupPagable: true,
      closeOnClickModal: true,
    },
  };
});
const grid3PartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_bNlgwLClick = () => {
  showPartsWin.value = true;
};
const grid3QtyEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      min: 1,
    },
  };
});
const grid3ProductIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid3PackageItemId2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  initData();
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const initData = () => {
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    queryFormData.servicePackageId = params.servicePackageId;
    servicePackageId = params.servicePackageId;
    if (!isNoValue(servicePackageId)) {
      packageNoReadOnlyflg.value = true;
      initDsApi.runAsync();
    } else {
      packageNoReadOnlyflg.value = false;
      queryForm.value.resetFields();
      queryFormData.dateFrom = firstDay;
      queryFormData.dateTo = lastDay;
      grid1.value.remove();
      grid2.value.remove();
      grid3.value.remove();
    }
  }
};
const resetCondition = () => {
// 如果传值则重检索
  if (!isNoValue(servicePackageId)) {
    initDsApi.runAsync();
    packageNoReadOnlyflg.value = true;
  } else {
    // 清空表单元素
    queryForm.value.resetFields();
    queryFormData.dateFrom = firstDay;
    queryFormData.dateTo = lastDay;
    grid1.value.remove();
    grid2.value.remove();
    grid3.value.remove();
  }
};
const onDelGrid1Row = (row) => {
  grid1.value.remove(row);
};
const onDelGrid2Row = (row) => {
  grid2.value.remove(row);
};
const onDelGrid3Row = (row) => {
  grid3.value.remove(row);
};
const setValueOnPartGrid = (row, params) => {
  row.productId = params.id;
  row.partsNo = params.code;
  row.partsNm = params.name;
};
const clearPartsOnPartsGrid = (row) => {
  row.productId = null;
  row.partsNm = null;
};
// 配件输入后Leave
const onLeavePartsCode = async (row, code) => {
  const data = await partsInputDsApi.runAsync({
    partsCd: code,
    pageSize: 1,
    currentPage: 1,
  });
  const partsData = data.total > 0 ? data.list[0] : null;
  setValueOnPartGrid(row, partsData);
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="btnRow"
      ref="btnRow"
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
        <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="info" @click="confirmBtnClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_9gbmH4" ref="viy2Panel_9gbmH4" :collapse="true" :title="t('common.label.packageHead')" class="margin-top-div0 except-height-css">
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_1b4WYW"
          ref="viy2Row_1b4WYW"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.packageNumber')"
              label-width="135px"
              prop="packageNo"
              :rules="rules.viy2InputBox_1b4WYXRules"
            >
              <VueInput
                id="viy2InputBox_1b4WYX"
                ref="viy2InputBox_1b4WYX"
                v-model="queryFormData.packageNo"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                :disabled="packageNoReadOnlyflg"
                :clearable="true"
                :maxlength="40"
                :style="{ width: '180px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.localName')"
              label-width="135px"
              prop="localNm"
              :rules="rules.viy2InputBox_1b4WZaRules"
            >
              <VueInput
                id="viy2InputBox_1b4WZa"
                ref="viy2InputBox_1b4WZa"
                v-model="queryFormData.localNm"
                :clearable="true"
                :maxlength="256"
                :style="{ width: '180px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.salesName')"
              label-width="135px"
              prop="salesNm"
            >
              <VueInput
                id="viy2InputBox_1b4WZn"
                ref="viy2InputBox_1b4WZn"
                v-model="queryFormData.salesNm"
                :clearable="true"
                :maxlength="256"
                :style="{ width: '180px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.englishName')"
              label-width="135px"
              prop="englishNm"
            >
              <VueInput
                id="viy2InputBox_bMNvSK"
                ref="viy2InputBox_bMNvSK"
                v-model="queryFormData.englishNm"
                :clearable="true"
                :maxlength="256"
                :style="{ width: '180px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.validPeriod')"
              label-width="135px"
              prop="dateFrom"
              :rules="rules.viy2DateTimePicker_bMNvUpRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_bMNvUp"
                ref="viy2DateTimePicker_bMNvUp"
                v-model="queryFormData.dateFrom"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <!-- BEGIN CUSTOM DIV CODE -->
            <span>-</span>
            <!-- END CUSTOM DIV CODE -->
            <VueFormItem
              label-width="0"
              prop="dateTo"
              :rules="rules.viy2DateTimePicker_bMNvUrRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_bMNvUr"
                ref="viy2DateTimePicker_bMNvUr"
                v-model="queryFormData.dateTo"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.serviceCategory')"
              label-width="135px"
              prop="serviceCategoryId"
            >
              <VueSelect
                id="viy2Select_bMNvUu"
                ref="viy2Select_bMNvUu"
                v-model="queryFormData.serviceCategoryId"
                :style="{ width: '170px' }"
                :clearable="true"
                :options="svCategoryDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="productCategoryDetail" ref="productCategoryDetail" v-model="productMdl" :title="t('common.label.productCategoryDetail')" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            v-show="productMdl"
            id="viy2Row_1b72SP"
            ref="viy2Row_1b72SP"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_1b72SQ" ref="viy2Button_1b72SQ" icon-position="left" class="icon-button-width" @click="viy2Button_1b72SQClick">
                +
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="grid1" ref="grid1" :stripe="true" :highlight-current-row="true" height="265px" :border="true" :data="initDs.productCategoryDetailList" :edit-rules="grid1Rules" :edit-config="grid1EditConfig" :mouse-config="grid1MouseConfig">
        <VueRow
          id="viy2Row_1b72T3"
          ref="viy2Row_1b72T3"
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
        <VueSelectColumn
          :edit-render="grid1ProductCategoryIdEditRender"
          field="productCategoryId"
          show-overflow="tooltip"
          :title="t('label.productCategory')"
          width="160px"
        />
        <VueInputColumn
          :edit-render="grid1ProductCategoryNmEditRender"
          field="productCategoryNm"
          :title="t('label.productCategoryName')"
          width="200px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_bN8sTz" ref="viy2Button_bN8sTz" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_bN8sTzClick" />
          </template>
        </VueInputColumn>
        <VueButtonColumn
          align="center"
          width="80px"
          :buttons="grid1Viy2TableButtonColumn_ngQpnButtons"
        />
        <VueInputColumn
          :edit-render="grid1ProductCategoryCdEditRender"
          :visible="false"
          field="productCategoryCd"
          title="productCategoryCd"
          width="160px"
        />
        <VueInputColumn
          :edit-render="grid1ServicePackageCategoryIdEditRender"
          field="servicePackageCategoryId"
          :visible="false"
          title="servicePackageCategoryId"
          width="180px"
        />
      </VueTable>
    </VuePanel>
    <VueRow
      id="serviceDetailAndPartsDetail"
      ref="serviceDetailAndPartsDetail"
    >
      <VueCol
        id="copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_7uGFk_col1"
        ref="copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_7uGFk_col1"
        item-key="item"
        :md="{ span: 12 }"
      >
        <VuePanel id="viy2Panel_1b8keZ" ref="viy2Panel_1b8keZ" v-model="serviceMdl" :title="t('common.label.serviceDetail')" :collapse="true">
          <template #header>
            <div style="width: 200px">
              <VueRow
                v-show="serviceMdl"
                id="viy2Row_1b8kfb"
                ref="viy2Row_1b8kfb"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_1b8kfc" ref="viy2Button_1b8kfc" icon-position="left" class="icon-button-width" @click="viy2Button_1b8kfcClick">
                    +
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid2" ref="grid2" :stripe="true" header-align="center" :border="true" :highlight-current-row="true" height="265px" :data="initDs.serviceDetailList" :edit-rules="grid2Rules" :edit-config="grid2EditConfig" :mouse-config="grid2MouseConfig">
            <VueRow
              id="viy2Row_1b8kff"
              ref="viy2Row_1b8kff"
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
            <VueValueListColumn
              :edit-render="grid2ServiceJobCdEditRender"
              field="serviceJobCd"
              show-overflow="tooltip"
              :clearable="true"
              :toggle-popover-on-click="true"
              :title="t('label.serviceJob')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="grid2ServiceJobNmEditRender"
              field="serviceJobNm"
              :title="t('label.serviceJobName')"
              width="250px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_bNlgt9" ref="viy2Button_bNlgt9" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_bNlgt9Click" />
              </template>
            </VueInputColumn>
            <VueButtonColumn
              align="center"
              width="80px"
              :buttons="grid2Viy2TableButtonColumn_ngQpnButtons"
            />
            <VueInputColumn
              :edit-render="grid2ServiceJobIdEditRender"
              field="serviceJobId"
              :visible="false"
              title="serviceJobId"
              width="100px"
            />
            <VueInputColumn
              :edit-render="grid2PackageItemId1EditRender"
              field="packageItemId1"
              :visible="false"
              title="packageItemId1"
              width="100px"
            />
          </VueTable>
        </VuePanel>
      </VueCol>
      <VueCol
        id="copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_7uGFk_col2"
        ref="copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_7uGFk_col2"
        item-key="item"
        :md="{ span: 12 }"
      >
        <VuePanel id="viy2Panel_bNlguV" ref="viy2Panel_bNlguV" v-model="partsMdl" :title="t('label.partsDetail')" :collapse="true">
          <template #header>
            <div style="width: 200px">
              <VueRow
                id="viy2Row_bNlguX"
                ref="viy2Row_bNlguX"
              >
                <VueCol
                  v-show="partsMdl"
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_bNlguY" ref="viy2Button_bNlguY" icon-position="left" class="icon-button-width" @click="viy2Button_bNlguYClick">
                    +
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid3" ref="grid3" :stripe="true" header-align="center" height="265px" :border="true" :highlight-current-row="true" :data="initDs.partsDetailList" :edit-rules="grid3Rules" :edit-config="grid3EditConfig" :mouse-config="grid3MouseConfig">
            <VueRow
              id="viy2Row_bNlgv1"
              ref="viy2Row_bNlgv1"
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
            <VueValueListColumn
              :formatter="grid3PartsCdFormatter"
              :edit-render="grid3PartsCdEditRender"
              field="partsCd"
              show-overflow="tooltip"
              :clearable="true"
              :toggle-popover-on-click="true"
              :title="t('label.partsNo')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="grid3PartsNmEditRender"
              field="partsNm"
              :title="t('label.partsName')"
              width="200px"
            >
              <template #append="scope">
                <VueButton id="viy2Button_bNlgwL" ref="viy2Button_bNlgwL" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_bNlgwLClick" />
              </template>
            </VueInputColumn>
            <VueNumberColumn
              :edit-render="grid3QtyEditRender"
              field="qty"
              aggregate="sum"
              :min="1"
              :title="t('label.quantity')"
              width="130px"
              header-align="center"
            />
            <VueButtonColumn
              align="center"
              width="80px"
              :buttons="grid3Viy2TableButtonColumn_ngQpnButtons"
            />
            <VueInputColumn
              :edit-render="grid3ProductIdEditRender"
              field="productId"
              :visible="false"
              title="productId"
              width="100px"
            />
            <VueInputColumn
              :edit-render="grid3PackageItemId2EditRender"
              field="packageItemId2"
              :visible="false"
              width="100px"
              title="packageItemId2"
            />
          </VueTable>
        </VuePanel>
      </VueCol>
    </VueRow>
  </VueForm>
</template>
