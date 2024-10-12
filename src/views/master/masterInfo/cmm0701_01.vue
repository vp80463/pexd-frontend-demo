<script setup>
import { IconCloseBold, IconDelete, IconEdit, useLockScreen } from 'viy-ui';
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
  name: 'cmm0701_01',
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
const viy2InputBox_Olecl = ref();
const viy2Radio_Okggq = ref();
const viy2Flex_LUasz = ref();
const viy2Panel_GvVUq = ref();
const grid = ref();
const aside001 = ref();
const viy2Row_TBVFW = ref();
const viy2Row_TCZrB = ref();
const viy2Button_10s0uo = ref();
const viy2Button_SS9Ht = ref();
const viy2Button_SSkis = ref();
const viy2Form_SRIEF = ref();
const viy2Row_STxN0 = ref();
const viy2InputBox_STKLR1 = ref();
const viy2InputBox_STKLR2 = ref();
const viy2Row_STzBq = ref();
const viy2InputBox_STKLR3 = ref();
const viy2InputBox_STKLR4 = ref();
const viy2Row_STAAi = ref();
const viy2InputBox_STKLR5 = ref();
const viy2InputBox_STKLR6 = ref();
const viy2Row_STBZB = ref();
const viy2Radio_UbcrS = ref();
const viy2InputBox_STKLR8 = ref();
const viy2Row_STCGW = ref();
const viy2InputBox_8RazzA11 = ref();
const viy2InputBox_STKLR10 = ref();
const viy2Row_SWFsQ = ref();
const viy2Radio_U4f1I = ref();
const viy2Radio_U59Hr = ref();
const viy2Row_SVDqS = ref();
const viy2InputBox_8RaGQ514 = ref();
const viy2Panel_SXD4P = ref();
const viy2Row_SYw06 = ref();
const viy2Button_SYzVO = ref();
const asideGrid = ref();
const formData = reactive({
});
const queryFormData = reactive({
  shop: '', tel: '', city: '', activeStatus: '有効',
});
const viy2Form_SRIEFData = reactive({
  orgCd: '01234', orgNm: '特金製造株式会社', orgAbbr: '特金製造', orgNm: '特金製造', orgRequestCd: '01234', pcCd: '', attribute: '販売店', proDpCd: '', regularRank: '', resscutFlag: '', shipflag: 'する', status: '有効', shipDay: '火曜日',
});
const aside001002 = ref(false);
const viy2Radio_UbcrSOpts = reactive([
  { value: '販売店', label: '販売店' },
  { value: '内部課', label: '内部課' },
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
      address1: '大阪府堺市',
      address2: '大阪府堺市',
      default: '1',
    },
    {
      consigneeCd: '15566',
      consigneeNm: '特金製造222',
      tel: '15154545633',
      postCode: '4544-6454',
      cityGove: '大阪府',
      city: '吹田市',
      address1: '大阪府吹田市',
      address2: '大阪府吹田市',
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
const gridCityEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCityGoveEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridActiveStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_SSkisClick = () => {
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
const asideGridAutonomousEditRender = computed(() => {
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
                label="販売店"
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
                label="市町村"
                prop="city"
              >
                <VueInput
                  id="viy2InputBox_Olecl"
                  ref="viy2InputBox_Olecl"
                  v-model="queryFormData.city"
                />
              </VueFormItem>
              <VueFormItem
                label="状況"
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
              title="販売店CD"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridOrgnizationNmEditRender"
              field="orgnizationNm"
              :sortable="true"
              title="販売店名"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridOrgnizationAbbrEditRender"
              field="orgnizationAbbr"
              :sortable="true"
              title="販売店略称"
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
              :edit-render="gridCityEditRender"
              field="city"
              :sortable="true"
              title="市町村"
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
              :edit-render="gridActiveStatusEditRender"
              field="activeStatus"
              :sortable="true"
              title="状況"
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
                販売店情報
              </VueText>
            </VueCol>
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueButton id="viy2Button_10s0uo" ref="viy2Button_10s0uo" icon-position="left">
                削除
              </VueButton>
              <VueButton id="viy2Button_SS9Ht" ref="viy2Button_SS9Ht" type="info" icon-position="right">
                保存
              </VueButton>
              <VueButton id="viy2Button_SSkis" ref="viy2Button_SSkis" icon-position="right" type="text" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_SSkisClick" />
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueForm
        id="viy2Form_SRIEF"
        ref="viy2Form_SRIEF"
        class="margin-top-div0 except-height-css"
        :model="viy2Form_SRIEFData"
      >
        <VueRow
          id="viy2Row_STxN0"
          ref="viy2Row_STxN0"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="販売店CD"
              prop="orgCd"
            >
              <VueInput
                id="viy2InputBox_STKLR1"
                ref="viy2InputBox_STKLR1"
                v-model="viy2Form_SRIEFData.orgCd"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="販売店名"
              prop="orgNm"
            >
              <VueInput
                id="viy2InputBox_STKLR2"
                ref="viy2InputBox_STKLR2"
                v-model="viy2Form_SRIEFData.orgNm"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <VueRow
          id="viy2Row_STzBq"
          ref="viy2Row_STzBq"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="販売店名（漢字）"
              prop="orgAbbr"
            >
              <VueInput
                id="viy2InputBox_STKLR3"
                ref="viy2InputBox_STKLR3"
                v-model="viy2Form_SRIEFData.orgAbbr"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="販売店名（カナ）"
              prop="orgNm"
            >
              <VueInput
                id="viy2InputBox_STKLR4"
                ref="viy2InputBox_STKLR4"
                v-model="viy2Form_SRIEFData.orgNm"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <VueRow
          id="viy2Row_STAAi"
          ref="viy2Row_STAAi"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="請求先販売先"
              prop="orgRequestCd"
            >
              <VueInput
                id="viy2InputBox_STKLR5"
                ref="viy2InputBox_STKLR5"
                v-model="viy2Form_SRIEFData.orgRequestCd"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="管轄ＰＣ"
              prop="pcCd"
            >
              <VueInput
                id="viy2InputBox_STKLR6"
                ref="viy2InputBox_STKLR6"
                v-model="viy2Form_SRIEFData.pcCd"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <VueRow
          id="viy2Row_STBZB"
          ref="viy2Row_STBZB"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="属性区分"
              prop="attribute"
            >
              <VueRadioGroup
                id="viy2Radio_UbcrS"
                ref="viy2Radio_UbcrS"
                v-model="viy2Form_SRIEFData.attribute"
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
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="受注代行拠点"
              prop="proDpCd"
            >
              <VueInput
                id="viy2InputBox_STKLR8"
                ref="viy2InputBox_STKLR8"
                v-model="viy2Form_SRIEFData.proDpCd"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <VueRow
          id="viy2Row_STCGW"
          ref="viy2Row_STCGW"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="純掛ランク"
              prop="regularRank"
            >
              <VueInput
                id="viy2InputBox_8RazzA11"
                ref="viy2InputBox_8RazzA11"
                v-model="viy2Form_SRIEFData.regularRank"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="レスカットサイン"
              prop="resscutFlag"
            >
              <VueInput
                id="viy2InputBox_STKLR10"
                ref="viy2InputBox_STKLR10"
                v-model="viy2Form_SRIEFData.resscutFlag"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <VueRow
          id="viy2Row_SWFsQ"
          ref="viy2Row_SWFsQ"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="出荷可否"
              prop="shipflag"
            >
              <VueRadioGroup
                id="viy2Radio_U4f1I"
                ref="viy2Radio_U4f1I"
                v-model="viy2Form_SRIEFData.shipflag"
                radio-style="button"
                direction="horizontal"
                :disabled="true"
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
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="ステータス"
              prop="status"
            >
              <VueRadioGroup
                id="viy2Radio_U59Hr"
                ref="viy2Radio_U59Hr"
                v-model="viy2Form_SRIEFData.status"
                radio-style="button"
                direction="horizontal"
                :disabled="true"
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
        <VueRow
          id="viy2Row_SVDqS"
          ref="viy2Row_SVDqS"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="非稼働日"
              prop="shipDay"
            >
              <VueInput
                id="viy2InputBox_8RaGQ514"
                ref="viy2InputBox_8RaGQ514"
                v-model="viy2Form_SRIEFData.shipDay"
                :readonly="true"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          />
        </VueRow>
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
        <VueTable id="asideGrid" ref="asideGrid" :data="asideGridDs" :edit-config="asideGridEditConfig" :mouse-config="asideGridMouseConfig">
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
            title="住所"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="asideGridAutonomousEditRender"
            field="autonomous"
            title="自治体コード"
            width="100px"
            header-align="center"
          />
          <VueSelectionColumn
            align="center"
            header-align="center"
            title="デフォルト"
            width="100px"
            type="radio"
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
