<script setup>
import { IconCloseBold, IconDelete, IconEdit, IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_4Y5adPage from '/src/views/commons/select_location.vue';
import { LocationType, OperationStatus, YES_NO_FLAG } from '@/constants/pj-constants.js';
import { parts_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
import { formatCost, formatPartNo, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const asideParams = ref();
const uc = useUser().userInfo;
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const initializedFlag = ref(true);
const locationOpenFromCondition = ref(false);
const confirmFlag = ref(true);
const partsDsApi = useApi({ url: '/common/valuelist/partsList.json', method: 'post' }, { manual: true });
const nowPartsCode = ref();
defineOptions({
  name: 'spm0309_01',
});
const form = ref();
const viy2Flex_LU6VA = ref();
const queryForm = ref();
const viy2Panel_EuU8S = ref();
const viy2Button_5heznY = ref();
const resetBtn = ref();
const viy2Row_4Hp8hY = ref();
const viy2Select_1rPSyEH = ref();
const viy2InputBox_QQvs4z = ref();
const viy2Button_4X4Ky = ref();
const viy2ValueList_iR7L7t = ref();
const viy2Row_2Cu0kg = ref();
const viy2InputNumber_gSi5N = ref();
const viy2InputNumber_gSObA = ref();
const viy2Select_RfsMPg = ref();
const viy2CheckBox_5k94Sw = ref();
const viy2CheckBox_4H01hK = ref();
const viy2Flex_LUasz = ref();
const viy2Panel_EuUzI = ref();
const viy2Button_4yEnxa = ref();
const viy2Button_5heznZ = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const copy1_viy2Row_AsHNi_col1 = ref();
const addStockAside = ref();
const addRow = ref();
const viy2Button_70FD2D = ref();
const viy2Button_70FD2E = ref();
const stockForm = ref();
const viy2Row_70FZUc = ref();
const viy2Select_1rPSyE2 = ref();
const viy2Select_186LZ5P = ref();
const viy2InputBox_A6HxA = ref();
const viy2Button_76LHTy = ref();
const viy2ValueList_iR7L6t = ref();
const viy2Row_72ZSpZ = ref();
const viy2InputNumber_HGnhi = ref();
const viy2InputNumber_hp0oH = ref();
const locationAside = ref();
const viy2Subpage_4Y5ad = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', location: '', parts: '', seqNoFrom: 1, seqNoTo: 1000, wzId: '', noneInputOnly: 'N', showDiff: 'N',
});
const stockFormData = reactive({
  pointId: '', wzId: '', location: '', parts: '', actualQty: 0, currentAverageCost: 0,
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2Select_186LZ5PRules: [
    {
      required: true,
      message: t('errors.required', [t('label.wz')]),
    },
  ],
  viy2InputBox_A6HxARules: [
    {
      required: true,
      message: t('errors.required', [t('label.location')]),
    },
  ],
  viy2ValueList_iR7L6tRules: [
    {
      required: true,
      message: t('errors.required', [t('label.parts')]),
    },
  ],
  viy2InputNumber_HGnhiRules: [
    {
      required: true,
      message: t('errors.required', [t('label.actualQuantity')]),
    },
    {
      validator: validator.numberValue,
      minValue: 0,
      message: t('validation.error.value'),
    },
  ],
});
const showStockAside = ref(false);
const viy2ValueList_iR7L6tPopoverQueryMethod = ({ value, pageParams }) => {
  return partsDsApi.runAsync({
    content: value, autoFillFlag: 'Y', facilityId: stockFormData.pointId, pageSize: pageParams.pageSize, currentPage: pageParams.currentPage,
  });
}; ;
const viy2ValueList_iR7L6tPopupColumns = ref(parts_column);
const viy2ValueList_iR7L6tPopupQueryMethod = parts_pop_query_method;
const showLocationWin = ref(false);
const viy2Select_1rPSyEHOpts = reactive([
  {
    desc:
'10. Waiting for Receipt Order',
    id:
'10. Waiting for Receipt Order',
  },
  {
    desc:
'20. Wait for assigning',
    id:
'20. Wait for assigning',
  },
]);
const viy2ValueList_iR7L7tPopoverQueryMethod = parts_query_method;
const viy2ValueList_iR7L7tPopupColumns = ref(parts_column);
const viy2ValueList_iR7L7tPopupQueryMethod = parts_pop_query_method;
const viy2Select_RfsMPgOpts = reactive([
  {
    description:
'Workzone 1',
    workzoneId:
'Workzone 1',
  },
]);
const viy2CheckBox_5k94SwOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2CheckBox_4H01hKOpts = [
  {
    label:
'',
    value:
'',
  },
];
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  beforeEditMethod: // 如果productId为空，则不让修改actualqty
(obj) => {
  return !(obj.column.property == 'actualQty' && obj.row.productId == null);
},
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_GBAuoButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelStockRow,
      title: 'Delete',
      disabled: !isNewInput(scope.row.newFoundFlag),
    },
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onEditRow,
      disabled: !isNoValue(scope.row.productId),
    },
  ];
};
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
const deleteStockDsApi = useApi({
  url: '/parts/spm0309/deletePartsActualStock.json',
  method: 'post',
  lockScreen: true,
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
    findPartsActualStockListApi.runAsync();
  },
  manual: true,
});
const deleteStockDs = deleteStockDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const saveOrUpdateStockDsApi = useApi({
  url: '/parts/spm0309/newOrModifyPartsActualStock.json',
  method: 'post',
  data: () => {
    return stockFormData;
  },
  lockScreen: true,
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
    showStockAside.value = false;
    findPartsActualStockListApi.runAsync();
  },
  manual: true,
});
const saveOrUpdateStockDs = saveOrUpdateStockDsApi.data;
const findPartsActualStockListApi = useApi({
  url: '/parts/spm0309/findPartsActualStockList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data.length > 0) {
      confirmFlag.value = false;
    }
  },
  manual: true,
});
const findPartsActualStockList = findPartsActualStockListApi.data;
const workzoneDsApi = useApi({
  url: '/common/helper/getWorkZoneList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const workzoneDs = workzoneDsApi.data;
const editStockDsApi = useApi({
  url: '/parts/spm0309/editStockList.json',
  method: 'post',
  data: () => {
    queryFormData.stockData = grid.value.getRecordset();
    for (const element of findPartsActualStockList.value) {
      if (element.actualQty != element.actualQtyBefore) {
        queryFormData.stockData.updateRecords.push(element);
      }
    }
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    findPartsActualStockListApi.runAsync();
  },
  manual: true,
});
const editStockDs = editStockDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      location: '637-454-4504',
      productCd: 'FJS-001-DHFU',
      productName: '電子ディスク001',
      seqNo: '1',
      currentAverageCost: '100000',
    },
    {
      location: '637-123-4504',
      productCd: 'FJS-002-DHFU',
      productName: '電子ディスク002',
      seqNo: '2',
      currentAverageCost: '100000',
    },
    {
      location: '637-456-4504',
      productCd: 'FJS-003-DHFU',
      productName: '電子ディスク003',
      seqNo: '3',
      currentAverageCost: '100000',
    },
    {
      location: '637-152-3321',
      productCd: 'FJS-004-DHFU',
      productName: '電子ディスク004',
      seqNo: '4',
      currentAverageCost: '100000',
    },
  ]
  ,
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
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
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const viy2Button_5heznYClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      // findPartsActualStockListApi.runAsync();
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
const viy2Button_4X4KyClick = (params) => {
  locationOpenFromCondition.value = true;
  showLocationWin.value = true;
  const point = queryFormData.point;
  const pointid = queryFormData.pointId;
  const flag = YES_NO_FLAG.NO;
  const locationTypeList = [LocationType.TENTATIVE,
    LocationType.NORMAL,
    LocationType.SERVICE,
    LocationType.FROZEN];
  asideParams.value = { flag, point, pointId: pointid, locationTypeList };
};
const viy2ValueList_iR7L7tSelect = (params) => {
  queryFormData.partsId = params.id;
};
const viy2ValueList_iR7L7tClear = (params) => {
  queryFormData.partsId = '';
};
const viy2ValueList_iR7L7tLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    if (obj.currentValue) {
      onLeavePartsCode(obj.currentValue);
    } else {
      queryFormData.partsId = '';
    }
  }
};
const viy2ValueList_iR7L7tPopoverColumns = computed(() => {
  return parts_column;
});
const viy2ValueList_iR7L7tPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), checkStrictly: true, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
  ];
});
const viy2Button_4yEnxaClick = () => {
  showStockAside.value = true;
  resetStockDetailAside();
  stockFormData.action = OperationStatus.NEW;
  stockFormData.point = queryFormData.point;
  stockFormData.pointId = queryFormData.pointId;
  stockFormData.startedDate = findPartsActualStockList.value[0].startedDate;
  stockFormData.startedTime = findPartsActualStockList.value[0].startedTime;
  stockFormData.rangeType = findPartsActualStockList.value[0].rangeType;
  stockFormData.actualQty = 0;
};
const viy2Button_5heznZClick = () => {
  if (grid.value.getTableData().fullData.length > 0) {
    grid.value.validate((valid) => {
      if (!valid) {
        editStockDsApi.runAsync();
      }
    });
  }
};
const gridProductStockTakingIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridWorkzoneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProductIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProductCdFormatter = (row, columnConfig, cellValue) => {
  if (isNoValue(row.cellValue)) {
    return '';
  }
  return formatPartNo(row.cellValue);
};
const gridProductCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProductNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSeqNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridActualQty2Formatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridActualQty2EditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridActualQtyBeforeFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridActualQtyBeforeEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridCurrentAverageCostFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);
};
const gridCurrentAverageCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const viy2Button_70FD2DClick = () => {
  stockForm.value.validate((valid) => {
    if (valid) {
      saveOrUpdateStockDsApi.runAsync();
    }
  });
};
const viy2Button_70FD2EClick = () => {
  VueMessageBox.confirm(t('閉じるをしますか?'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    showStockAside.value = false;
  });
};
const viy2InputBox_A6HxAChange = (event) => {
  if (event.length > 0) {
    const pointid = conditionFormData.pointId;
    const location = conditionFormData.location;
    const flag = YES_NO_FLAG.NO;
    const locationTypeList = [LocationType.TENTATIVE,
      LocationType.NORMAL,
      LocationType.SERVICE,
      LocationType.FROZEN];
    locationDsApi.runAsync({
      arg0: flag,
      pointId: pointid,
      locationCd: location,
      locationTypeList,
    });
  }
};
const viy2InputBox_A6HxAOnSuffixIconClick = () => {
  conditionFormData.location = '';
  conditionFormData.locationId = '';
};
const viy2Button_76LHTyClick = (params) => {
  locationOpenFromCondition.value = false;
  showLocationWin.value = true;
  const point = queryFormData.point;
  const pointid = queryFormData.pointId;
  const flag = YES_NO_FLAG.NO;
  const locationTypeList = [LocationType.TENTATIVE,
    LocationType.NORMAL,
    LocationType.SERVICE,
    LocationType.FROZEN];
  asideParams.value = { flag, point, pointId: pointid, locationTypeList };
};
const viy2ValueList_iR7L6tSelect = (params) => {
  stockFormData.partsId = params.id;
  stockFormData.currentAverageCost = params.price;
};
const viy2ValueList_iR7L6tClear = (params) => {
  stockFormData.partsId = '';
// stockFormData.currentAverageCost = 0;
};
const viy2ValueList_iR7L6tLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    stockFormData.partsId = '';
  }
};
const viy2ValueList_iR7L6tPopoverColumns = computed(() => {
  return parts_column;
});
const viy2ValueList_iR7L6tPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), checkStrictly: true, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
  ];
});
// 条件改变，清空明细
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
});
const resetStockDetailAside = () => {
  resetStockFormData();
};
// 清除侧边栏
const resetStockFormData = () => {
  const stockFormElement = stockForm.value;
  if (stockFormElement && stockFormElement.resetFields) {
    stockFormElement.resetFields();
    for (const key in stockFormData) {
      stockFormData[key] = '';
    }
  }
  // 设置为初始值
  stockFormData.locationMap = 0;
  stockFormData.currentAverageCost = 0;
};
// 清除条件部
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空conditionFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  queryFormData.noneInputOnly = 'N';
  queryFormData.showDiff = 'N';
  queryFormData.seqNoFrom = '1';
  queryFormData.seqNoTo = '1000';
  resetTblResults();
  queryFormData.pointId = uc.defaultPointId;
};
// 清除明细表
const resetTblResults = () => {
  findPartsActualStockList.value.splice(0);
  confirmFlag.value = true;
};
// location侧边栏选择后
const callbkSelectLocation = (param) => {
  if (locationOpenFromCondition.value) {
    queryFormData.location = param.locationNo;
    queryFormData.locationId = param.locationId;
  } else {
    stockFormData.location = param.locationNo;
    stockFormData.locationId = param.locationId;
    stockFormData.wzId = param.workzoneId;
    stockFormData.locationTypeCode = param.locationTypeCd;
  }
  showLocationWin.value = false;
};
// location侧边栏选择关闭后
const closeLocationAside = () => {
  showLocationWin.value = false;
};
// 删除数据
const onDelStockRow = (row) => {
  VueMessageBox.confirm(t('M.C.00103', [row.location + row.productCd]), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    // deleteStockDsApi.runAsync({
    // productStockTakingId: row.productStockTakingId,
    // pointId: row.pointId
    // });
    grid.value.remove(row);
  }).catch(() => {
  });
};
// 编辑数据
const onEditRow = (row) => {
  showStockAside.value = true;
  resetStockDetailAside();
  stockFormData.action = OperationStatus.UPDATE;
  stockFormData.productStockTakingId = row.productStockTakingId;
  stockFormData.point = queryFormData.point;
  stockFormData.pointId = queryFormData.pointId;
  stockFormData.locationId = row.locationId;
  stockFormData.location = row.location;
  stockFormData.wzId = row.workzoneId;
  stockFormData.locationTypeCode = row.locationTypeCode;
  stockFormData.startedDate = row.startedDate;
  stockFormData.startedTime = row.startedTime;
  nextTick(() => {
    // findPartsActualStockListApi.runAsync();
  });
};
// 配件输入后Leave
const onLeavePartsCode = async (code) => {
  nowPartsCode.value = code;
  await getPartsData();
};
const getPartsData = async () => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData != null) {
    queryFormData.parts = partsData.desc;
    queryFormData.partsId = partsData.id;
  } else {
    queryFormData.partsId = '';
  }
};
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const isNewInput = (value) => {
  return value === 'Y';
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_LU6VA"
      ref="viy2Flex_LU6VA"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_EuU8S" ref="viy2Panel_EuU8S" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heznY" ref="viy2Button_5heznY" icon-position="left" @click="viy2Button_5heznYClick">
                検索
              </VueButton>
              <VueButton id="resetBtn" ref="resetBtn" icon-position="left" class="fixed-button" @click="resetBtnClick">
                クリア
              </VueButton>
            </div>
          </template>
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
                v-if="false"
                :label="t('label.point')"
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
                />
              </VueFormItem>
              <VueFormItem
                label="ロケーション"
                prop="location"
              >
                <VueInput
                  id="viy2InputBox_QQvs4z"
                  ref="viy2InputBox_QQvs4z"
                  v-model="queryFormData.location"
                  :clearable="true"
                  type="text"
                  :style="{ width: '230px' }"
                >
                  <template #append>
                    <VueButton id="viy2Button_4X4Ky" ref="viy2Button_4X4Ky" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_4X4KyClick" />
                  </template>
                </VueInput>
              </VueFormItem>
              <VueFormItem
                label="部品"
                prop="parts"
              >
                <VueValueList
                  :use-common-popover="true"
                  :use-common-popup="true"
                  aside-size="60%"
                  id="viy2ValueList_iR7L7t"
                  :toggle-popover-on-click="queryFormData.parts.length > 3"
                  ref="viy2ValueList_iR7L7t"
                  select-field="desc"
                  v-model="queryFormData.parts"
                  popup-type="aside"
                  :popover-min-query-length="3"
                  :close-on-click-modal="true"
                  :popover-width="500"
                  :use-popup="true"
                  :clearable="true"
                  width="250px"
                  :popover-columns="viy2ValueList_iR7L7tPopoverColumns"
                  :popover-query-method="viy2ValueList_iR7L7tPopoverQueryMethod"
                  :popup-columns="viy2ValueList_iR7L7tPopupColumns"
                  :popup-conditions="viy2ValueList_iR7L7tPopupConditions"
                  :popup-query-method="viy2ValueList_iR7L7tPopupQueryMethod"
                  @select="viy2ValueList_iR7L7tSelect"
                  @clear="viy2ValueList_iR7L7tClear"
                  @leave="viy2ValueList_iR7L7tLeave"
                >
                  <template #asideHeader>
                    <VueRow
                      id="viy2Row_2Cu0kg"
                      ref="viy2Row_2Cu0kg"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_2Cu0ku" ref="viy2Text_2Cu0ku" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                label="表示順"
                prop="seqNoFrom"
                size="mini"
              >
                <VueInputNumber
                  id="viy2InputNumber_gSi5N"
                  ref="viy2InputNumber_gSi5N"
                  v-model="queryFormData.seqNoFrom"
                  :controls="false"
                  :min="1"
                  :max="1000"
                  size="mini"
                  text-align="right"
                  :style="{ width: '60px' }"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0px"
                prop="seqNoTo"
              >
                <VueInputNumber
                  id="viy2InputNumber_gSObA"
                  ref="viy2InputNumber_gSObA"
                  v-model="queryFormData.seqNoTo"
                  :controls="false"
                  :min="1"
                  :max="1000"
                  text-align="right"
                  :style="{ width: '80px' }"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                :label="t('label.wz')"
                prop="wzId"
              >
                <VueSelect
                  id="viy2Select_RfsMPg"
                  ref="viy2Select_RfsMPg"
                  v-model="queryFormData.wzId"
                  :style="{ width: '140px' }"
                  :clearable="true"
                  :options="viy2Select_RfsMPgOpts"
                  :props="{
                    label: 'description',
                    value: 'workzoneId',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="未入力のみ"
                prop="noneInputOnly"
              >
                <VueCheckbox
                  id="viy2CheckBox_5k94Sw"
                  ref="viy2CheckBox_5k94Sw"
                  v-model="queryFormData.noneInputOnly"
                  true-label="Y"
                  false-label="N"
                />
              </VueFormItem>
              <VueFormItem
                label="差異部分のみ"
                prop="showDiff"
              >
                <VueCheckbox
                  id="viy2CheckBox_4H01hK"
                  ref="viy2CheckBox_4H01hK"
                  v-model="queryFormData.showDiff"
                  true-label="Y"
                  false-label="N"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_LUasz"
        ref="viy2Flex_LUasz"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_EuUzI" ref="viy2Panel_EuUzI" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_4yEnxa" ref="viy2Button_4yEnxa" icon-position="left" @click="viy2Button_4yEnxaClick">
                行追加
              </VueButton>
              <VueButton id="viy2Button_5heznZ" ref="viy2Button_5heznZ" icon-position="left" type="info" :disabled="confirmFlag" @click="viy2Button_5heznZClick">
                保存
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueRow
              id="viy2Row_AsHNi"
              ref="viy2Row_AsHNi"
              class="toolbar-row-width except-height-css"
            >
              <VueCol
                id="copy1_viy2Row_AsHNi_col1"
                ref="copy1_viy2Row_AsHNi_col1"
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
              v-if="false"
              :edit-render="gridProductStockTakingIdEditRender"
              field="productStockTakingId"
              :visible="false"
              :sortable="true"
              width="200px"
              title="productStockTakingId"
            />
            <VueInputColumn
              v-if="false"
              :edit-render="gridWorkzoneEditRender"
              field="workzone"
              :sortable="true"
              :title="t('label.wz')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridLocationEditRender"
              field="location"
              :sortable="true"
              title="ロケーション"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              v-if="false"
              :edit-render="gridProductIdEditRender"
              field="productId"
              :visible="false"
              :sortable="true"
              width="120px"
              :title="t('label.productId')"
              header-align="center"
            />
            <VueInputColumn
              :formatter="gridProductCdFormatter"
              :edit-render="gridProductCdEditRender"
              field="productCd"
              :sortable="true"
              title="部品番号"
              width="120px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridProductNameEditRender"
              field="productName"
              :sortable="true"
              title="部品名称"
              width="250px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridSeqNoEditRender"
              field="seqNo"
              title="表示順"
              width="100px"
            />
            <VueNumberColumn
              :formatter="gridActualQty2Formatter"
              :edit-render="gridActualQty2EditRender"
              field="actualQty2"
              align="right"
              :sortable="true"
              title="実績数量"
              width="130px"
              header-align="center"
            />
            <VueNumberColumn
              v-if="false"
              :formatter="gridActualQtyBeforeFormatter"
              :edit-render="gridActualQtyBeforeEditRender"
              field="actualQtyBefore"
              align="right"
              :visible="false"
              :sortable="true"
              :title="t('label.actualQuantity')"
              width="110px"
            />
            <VueNumberColumn
              :formatter="gridCurrentAverageCostFormatter"
              :edit-render="gridCurrentAverageCostEditRender"
              field="currentAverageCost"
              align="right"
              :sortable="true"
              title="原価"
              width="110px"
              header-align="center"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="80px"
              :buttons="gridViy2TableButtonColumn_GBAuoButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="addStockAside"
      ref="addStockAside"
      v-model="showStockAside"
      :modal="true"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
      :with-header="false"
      :show-close="false"
    >
      <VueRow
        id="addRow"
        ref="addRow"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 16 }"
        >
          <VueText id="viy2Text_70FD2C" ref="viy2Text_70FD2C" class="aside-title-text">
            棚卸在庫実績入力（明細）
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 8 }"
        >
          <VueButton id="viy2Button_70FD2D" ref="viy2Button_70FD2D" icon-position="left" size="large" type="info" @click="viy2Button_70FD2DClick">
            確定
          </VueButton>
          <VueButton id="viy2Button_70FD2E" ref="viy2Button_70FD2E" icon-position="left" size="large" type="text" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_70FD2EClick" />
        </VueCol>
      </VueRow>
      <VueForm
        id="stockForm"
        ref="stockForm"
        class="margin-top-div0 except-height-css"
        :model="stockFormData"
      >
        <VueRow
          id="viy2Row_70FZUc"
          ref="viy2Row_70FZUc"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              v-if="false"
              :label="t('label.point')"
              label-width="110px"
              prop="pointId"
            >
              <VueSelect
                id="viy2Select_1rPSyE2"
                ref="viy2Select_1rPSyE2"
                v-model="stockFormData.pointId"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :disabled="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              v-if="false"
              :label="t('label.wz')"
              label-width="110px"
              prop="wzId"
              :rules="rules.viy2Select_186LZ5PRules"
            >
              <VueSelect
                id="viy2Select_186LZ5P"
                ref="viy2Select_186LZ5P"
                v-model="stockFormData.wzId"
                :style="{ width: '250px' }"
                :disabled="true"
                :options="workzoneDs"
                :props="{
                  label: 'description',
                  value: 'workzoneId',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="棚"
              label-width="110px"
              prop="location"
              :rules="rules.viy2InputBox_A6HxARules"
            >
              <VueInput
                id="viy2InputBox_A6HxA"
                ref="viy2InputBox_A6HxA"
                v-model="stockFormData.location"
                type="text"
                :disabled="stockFormData.action === OperationStatus.UPDATE"
                class="no-border"
                :on-suffix-icon-click="viy2InputBox_A6HxAOnSuffixIconClick"
                :style="{ width: '250px' }"
                @change="viy2InputBox_A6HxAChange"
              >
                <template #append>
                  <VueButton id="viy2Button_76LHTy" ref="viy2Button_76LHTy" icon-position="left" :disabled="stockFormData.action === OperationStatus.UPDATE" class="icon-button-width" :icon="IconSearch" @click="viy2Button_76LHTyClick" />
                </template>
              </VueInput>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="部品"
              label-width="110px"
              prop="parts"
              :rules="rules.viy2ValueList_iR7L6tRules"
            >
              <VueValueList
                :use-common-popover="true"
                id="viy2ValueList_iR7L6t"
                :use-common-popup="true"
                ref="viy2ValueList_iR7L6t"
                aside-size="60%"
                v-model="stockFormData.parts"
                :toggle-popover-on-click="true"
                select-field="desc"
                popup-type="aside"
                :popover-width="500"
                :use-popup="true"
                :clearable="true"
                width="250px"
                :popover-columns="viy2ValueList_iR7L6tPopoverColumns"
                :popover-query-method="viy2ValueList_iR7L6tPopoverQueryMethod"
                :popup-columns="viy2ValueList_iR7L6tPopupColumns"
                :popup-conditions="viy2ValueList_iR7L6tPopupConditions"
                :popup-query-method="viy2ValueList_iR7L6tPopupQueryMethod"
                @select="viy2ValueList_iR7L6tSelect"
                @clear="viy2ValueList_iR7L6tClear"
                @leave="viy2ValueList_iR7L6tLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_72ZSpZ"
                    ref="viy2Row_72ZSpZ"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_72ZSq0" ref="viy2Text_72ZSq0" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Parts
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
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="実績数量"
              label-width="110px"
              prop="actualQty"
              :rules="rules.viy2InputNumber_HGnhiRules"
            >
              <VueInputNumber
                id="viy2InputNumber_HGnhi"
                ref="viy2InputNumber_HGnhi"
                v-model="stockFormData.actualQty"
                controls-position="both"
                text-align="center"
                :controls="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="コスト"
              label-width="110px"
              prop="currentAverageCost"
            >
              <VueInputNumber
                id="viy2InputNumber_hp0oH"
                ref="viy2InputNumber_hp0oH"
                v-model="stockFormData.currentAverageCost"
                :controls="false"
                :precision="2"
                text-align="center"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VueAside>
    <VueAside
      id="locationAside"
      ref="locationAside"
      v-model="showLocationWin"
      :modal="true"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
      size="50%"
      :with-header="false"
      :show-close="false"
    >
      <viy2Subpage_4Y5adPage
        id="viy2Subpage_4Y5ad"
        ref="viy2Subpage_4Y5ad"
        :init-data="asideParams"
        @select="callbkSelectLocation"
        @close="closeLocationAside"
      />
    </VueAside>
  </VueForm>
</template>
