<script setup>
import { IconDelete, IconEdit, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { OperationStatus } from '@/constants/pj-constants.js';
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
  name: 'cmm0702_01',
});
const form = ref();
const viy2Flex_LU6VA = ref();
const queryForm = ref();
const viy2Panel_GvVgb = ref();
const viy2Button_5heznY = ref();
const resetBtn = ref();
const viy2Row_4Hp8hY = ref();
const viy2ValueList_OqyCL = ref();
const viy2InputBox_Oldnm = ref();
const viy2InputBox_7PsTYg = ref();
const viy2InputBox_Olecl = ref();
const viy2InputBox_7PwZem = ref();
const viy2Radio_Okggq = ref();
const viy2Flex_LUasz = ref();
const viy2Panel_GvVUq = ref();
const viy2Button_MWNYN = ref();
const grid = ref();
const aside001 = ref();
const viy2Row_TBVFW = ref();
const viy2Row_TCZrB = ref();
const viy2Button_SS9Ht = ref();
const viy2Button_MHEph = ref();
const viy2Form_MFuoe = ref();
const viy2Panel_MFrbq = ref();
const viy2Row_MFE8R = ref();
const viy2InputBox_STKLR1 = ref();
const viy2InputBox_STKLR3 = ref();
const viy2Radio_UbcrS = ref();
const viy2InputBox_STKLR5 = ref();
const viy2Select_MLrPg = ref();
const viy2InputBox_STKLR2 = ref();
const viy2InputBox_STKLR4 = ref();
const viy2Radio_U4f1I = ref();
const viy2Radio_U59Hr = ref();
const viy2Panel_SXD4P = ref();
const viy2Row_SYw06 = ref();
const viy2Button_SYzVO = ref();
const asideGrid = ref();
const formData = reactive({
});
const queryFormData = reactive({
  shop: '', tel: '', zipCode: '', cityGove: '', city: '', activeStatus: '有効',
});
const viy2Form_MFuoeData = reactive({
  orgCd: '01234', orgAbbr: '特金製造', attribute: '内部課', orgRequestCd: '01234', stopFlag: [], orgNm: '特金製造株式会社', orgNm: '特金製造', shipflag: 'する', status: '有効',
});
const aside001002 = ref(false);
const viy2Radio_UbcrSOpts = reactive([
  { value: '販売店', label: '販売店' },
  { value: '内部課', label: '内部課' },
]);
const viy2Select_MLrPgOpts = reactive([
  {
    label:
'月曜日',
    value:
'月曜日',
  },
  {
    label:
'火曜日',
    value:
'火曜日',
  },
  {
    label:
'水曜日',
    value:
'水曜日',
  },
  {
    label:
'木曜日',
    value:
'木曜日',
  },
  {
    label:
'金曜日',
    value:
'金曜日',
  },
  {
    label:
'土曜日',
    value:
'土曜日',
  },
  {
    label:
'日曜日',
    value:
'日曜日',
  },
]);
const viy2Radio_U4f1IOpts = reactive([
  { value: 'する', label: 'する' },
  { value: 'しない', label: 'しない' },
]);
const viy2Radio_U59HrOpts = reactive([
  { value: '有効', label: '有効' },
  { value: '無効', label: '無効' },
]);
const asideGridEditConfig = reactive({
  trigger: 'click',
});
const asideGridMouseConfig = reactive({
  extension: true,
});
const asideGridViy2TableButtonColumn_T1ELOButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      title: 'Delete',
    },
  ];
};
const viy2Radio_OkggqOpts = reactive([
  { value: '有効', label: '有効' },
  { value: '無効', label: '無効' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_GBAuoButtons = (scope) => {
  return [
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
const asideGridDsApi = useApi({
  method: 'post',
  localData: [
    {
      consigneeCd: '15565',
      consigneeNm: '特金製造株式会社',
      tel: '15154545644',
      postCode: '4544-6454',
      cityGove: '大阪府',
      city: '堺市',
      fax: '+81-3-1234-5678',
      address1: '１－１１',
      address2: 'マンション１０１号室',
      default: '1',
    },
    {
      consigneeCd: '15566',
      consigneeNm: '特金製造222',
      tel: '15154545633',
      postCode: '4544-6454',
      cityGove: '大阪府',
      city: '吹田市',
      fax: '+81-45-6789-0123',
      address1: '１－１１',
      address2: 'マンション１０１号室',
      default: '0',
    },
  ],
});
const asideGridDs = asideGridDsApi.data;
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
      orgnizationCd: '01234',
      orgnizationNm: '特金製造株式会社',
      orgnizationAbbr: '特金製造',
      postCode: '4544-6454',
      tel: '15154545644',
      cityGove: '大阪府',
      city: '堺市',
      activeStatus: '有効',
    },
    {
      orgnizationCd: '01235',
      orgnizationNm: '特金製造222株式会社',
      orgnizationAbbr: '特金製造2',
      postCode: '4544-6454',
      tel: '15154545644',
      cityGove: '京都府',
      city: '宇治市',
      activeStatus: '有効',
    },
    {
      orgnizationCd: '01236',
      orgnizationNm: '特金製造333株式会社',
      orgnizationAbbr: '特金製造3',
      postCode: '4544-6454',
      tel: '15154545644',
      cityGove: '大阪府',
      city: '堺市',
      activeStatus: '有効',
    },
  ],
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
const viy2Button_MWNYNClick = () => {
  aside001002.value = true;
};
const gridOrgnizationCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrgnizationNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrgnizationAbbrEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTelEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPostCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCityGoveEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCityEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridActiveStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_MHEphClick = () => {
  VueMessageBox.confirm(t('閉じるをしますか?'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    aside001002.value = false;
  });
};
const asideGridConsigneeCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const asideGridConsigneeNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const asideGridTelEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const asideGridFaxEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const asideGridPostCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const asideGridCityGoveEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const asideGridCityEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const asideGridAddress1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const asideGridAddress2EditRender = computed(() => {
  return {
    enabled: false,
  };
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
// showStockAside.value = true;
  aside001002.value = true;
  // resetStockDetailAside();
  stockFormData.action = OperationStatus.UPDATE;
  // stockFormData.productStockTakingId = row.productStockTakingId;
  // stockFormData.point = queryFormData.point;
  // stockFormData.pointId = queryFormData.pointId;
  // stockFormData.locationId = row.locationId;
  // stockFormData.location = row.location;
  // stockFormData.wzId = row.workzoneId;
  // stockFormData.locationTypeCode = row.locationTypeCode;
  // stockFormData.startedDate = row.startedDate;
  // stockFormData.startedTime = row.startedTime;
  nextTick(() => {
    // findPartsActualStockListApi.runAsync();
  });
};
// 侧边栏查看
// const onViewRow = (row) => {
// // showStockAside.value = true;
// aside001002.value = true;
// // resetStockDetailAside();
// // stockFormData.action = OperationStatus.UPDATE;
// };
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
        <VuePanel id="viy2Panel_GvVgb" ref="viy2Panel_GvVgb" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5heznY" ref="viy2Button_5heznY" icon-position="left" type="info" @click="viy2Button_5heznYClick">
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
                label="内部課"
                prop="shop"
              >
                <VueValueList
                  id="viy2ValueList_OqyCL"
                  ref="viy2ValueList_OqyCL"
                  v-model="queryFormData.shop"
                  :use-popover="true"
                  width="200px"
                />
              </VueFormItem>
              <VueFormItem
                label="電話番号"
                prop="tel"
              >
                <VueInput
                  id="viy2InputBox_Oldnm"
                  ref="viy2InputBox_Oldnm"
                  v-model="queryFormData.tel"
                />
              </VueFormItem>
              <VueFormItem
                label="郵便番号"
                prop="zipCode"
              >
                <VueInput
                  id="viy2InputBox_7PsTYg"
                  ref="viy2InputBox_7PsTYg"
                  v-model="queryFormData.zipCode"
                />
              </VueFormItem>
              <VueFormItem
                label="都道府県"
                prop="cityGove"
              >
                <VueInput
                  id="viy2InputBox_Olecl"
                  ref="viy2InputBox_Olecl"
                  v-model="queryFormData.cityGove"
                />
              </VueFormItem>
              <VueFormItem
                label="市町村"
                prop="city"
              >
                <VueInput
                  id="viy2InputBox_7PwZem"
                  ref="viy2InputBox_7PwZem"
                  v-model="queryFormData.city"
                />
              </VueFormItem>
              <VueFormItem
                label="有効状態"
                prop="activeStatus"
              >
                <VueRadioGroup
                  id="viy2Radio_Okggq"
                  ref="viy2Radio_Okggq"
                  v-model="queryFormData.activeStatus"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_OkggqOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
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
        <VuePanel id="viy2Panel_GvVUq" ref="viy2Panel_GvVUq" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_MWNYN" ref="viy2Button_MWNYN" icon-position="left" @click="viy2Button_MWNYNClick">
                追加内部課
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridOrgnizationCdEditRender"
              field="orgnizationCd"
              :sortable="true"
              title="内部課コード"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridOrgnizationNmEditRender"
              field="orgnizationNm"
              :sortable="true"
              title="正式名称＆代表者"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridOrgnizationAbbrEditRender"
              field="orgnizationAbbr"
              :sortable="true"
              title="漢字略称"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridTelEditRender"
              field="tel"
              :sortable="true"
              title="電話番号"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridPostCodeEditRender"
              field="postCode"
              :sortable="true"
              title="郵便番号"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridCityGoveEditRender"
              field="cityGove"
              :sortable="true"
              title="都道府県"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridCityEditRender"
              field="city"
              :sortable="true"
              title="市町村"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridActiveStatusEditRender"
              field="activeStatus"
              :sortable="true"
              title="有効状態"
              width="150px"
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
      id="aside001"
      ref="aside001"
      v-model="aside001002"
      :modal="true"
      size="50%"
      :close-on-click-modal="false"
      :show-close="false"
      :with-header="false"
    >
      <VueRow
        id="viy2Row_TBVFW"
        ref="viy2Row_TBVFW"
      >
        <VueCol
          item-key="item"
          style="padding-bottom:5px"
          :md="{ span: 24 }"
        >
          <VueRow
            id="viy2Row_TCZrB"
            ref="viy2Row_TCZrB"
          >
            <VueCol
              item-key="item"
              align="left"
              class="aside-title-text"
              :md="{ span: 12 }"
            >
              <VueText id="viy2Text_TD8p4" ref="viy2Text_TD8p4" class="aside-title-text">
                内部課詳細情報
              </VueText>
            </VueCol>
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueButton id="viy2Button_SS9Ht" ref="viy2Button_SS9Ht" type="info" icon-position="right">
                保存
              </VueButton>
              <VueButton id="viy2Button_MHEph" ref="viy2Button_MHEph" icon-position="left" @click="viy2Button_MHEphClick">
                閉じる
              </VueButton>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueForm
        id="viy2Form_MFuoe"
        ref="viy2Form_MFuoe"
        :model="viy2Form_MFuoeData"
      >
        <VuePanel id="viy2Panel_MFrbq" ref="viy2Panel_MFrbq" title="内部課情報">
          <VueRow
            id="viy2Row_MFE8R"
            ref="viy2Row_MFE8R"
          >
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="内部課コード"
                prop="orgCd"
              >
                <VueInput
                  id="viy2InputBox_STKLR1"
                  ref="viy2InputBox_STKLR1"
                  v-model="viy2Form_MFuoeData.orgCd"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="漢字略称"
                prop="orgAbbr"
              >
                <VueInput
                  id="viy2InputBox_STKLR3"
                  ref="viy2InputBox_STKLR3"
                  v-model="viy2Form_MFuoeData.orgAbbr"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="属性区分"
                prop="attribute"
              >
                <VueRadioGroup
                  id="viy2Radio_UbcrS"
                  ref="viy2Radio_UbcrS"
                  v-model="viy2Form_MFuoeData.attribute"
                  radio-style="button"
                  direction="horizontal"
                  :disabled="true"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_UbcrSOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                label="請求先販売先コード"
                prop="orgRequestCd"
              >
                <VueInput
                  id="viy2InputBox_STKLR5"
                  ref="viy2InputBox_STKLR5"
                  v-model="viy2Form_MFuoeData.orgRequestCd"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="非稼働日"
                prop="stopFlag"
              >
                <VueSelect
                  id="viy2Select_MLrPg"
                  ref="viy2Select_MLrPg"
                  v-model="viy2Form_MFuoeData.stopFlag"
                  :style="{ width: '200px' }"
                  :multiple="true"
                  :options="viy2Select_MLrPgOpts"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="正式名称＆代表者"
                prop="orgNm"
              >
                <VueInput
                  id="viy2InputBox_STKLR2"
                  ref="viy2InputBox_STKLR2"
                  v-model="viy2Form_MFuoeData.orgNm"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="カナ略称"
                prop="orgNm"
              >
                <VueInput
                  id="viy2InputBox_STKLR4"
                  ref="viy2InputBox_STKLR4"
                  v-model="viy2Form_MFuoeData.orgNm"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="出荷可否"
                prop="shipflag"
              >
                <VueRadioGroup
                  id="viy2Radio_U4f1I"
                  ref="viy2Radio_U4f1I"
                  v-model="viy2Form_MFuoeData.shipflag"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_U4f1IOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                label="有効状態"
                prop="status"
              >
                <VueRadioGroup
                  id="viy2Radio_U59Hr"
                  ref="viy2Radio_U59Hr"
                  v-model="viy2Form_MFuoeData.status"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_U59HrOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VuePanel id="viy2Panel_SXD4P" ref="viy2Panel_SXD4P" title="出荷先情報" :collapse="true" collapse-icon-position="left">
        <template #header>
          <div style="width: 200px">
            <VueRow
              id="viy2Row_SYw06"
              ref="viy2Row_SYw06"
            >
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueButton id="viy2Button_SYzVO" ref="viy2Button_SYzVO" icon-position="left">
                  追加
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="asideGrid" ref="asideGrid" height="auto" :data="asideGridDs" :edit-config="asideGridEditConfig" :mouse-config="asideGridMouseConfig">
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="asideGridConsigneeCdEditRender"
            field="consigneeCd"
            title="出荷先"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="asideGridConsigneeNmEditRender"
            field="consigneeNm"
            title="出荷先名称"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="asideGridTelEditRender"
            field="tel"
            title="電話番号"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="asideGridFaxEditRender"
            field="fax"
            title="FAX"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="asideGridPostCodeEditRender"
            field="postCode"
            title="郵便番号"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="asideGridCityGoveEditRender"
            field="cityGove"
            title="都道府県"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="asideGridCityEditRender"
            field="city"
            title="市町村"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="asideGridAddress1EditRender"
            field="address1"
            title="住所1"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="asideGridAddress2EditRender"
            field="address2"
            title="住所2"
            width="150px"
            header-align="center"
          />
          <VueButtonColumn
            align="center"
            width="40px"
            header-align="center"
            :buttons="asideGridViy2TableButtonColumn_T1ELOButtons"
          />
        </VueTable>
      </VuePanel>
    </VueAside>
  </VueForm>
</template>
