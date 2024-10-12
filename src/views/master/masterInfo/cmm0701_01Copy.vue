<script setup>
import { IconCloseBold, IconDelete, IconEdit, IconView, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_4Y5adPage from '/src/views/commons/select_location.vue';
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
  name: 'cmm0701_01Copy',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_5heznY = ref();
const viy2Flex_LU6VA = ref();
const queryForm = ref();
const viy2Row_4Hp8hY = ref();
const viy2Radio_Ogpxm = ref();
const viy2ValueList_OqyCL = ref();
const viy2Radio_Okggq = ref();
const viy2InputBox_Oldnm = ref();
const viy2InputBox_Olecl = ref();
const viy2Flex_LUasz = ref();
const grid = ref();
const addStockAside = ref();
const addRow = ref();
const viy2Button_70FD2D = ref();
const viy2Button_70FD2E = ref();
const stockForm = ref();
const viy2Row_8g7Ctm = ref();
const viy2Row_8g7Ctn = ref();
const viy2InputBox_8g7Cty = ref();
const viy2Row_8g7Cud = ref();
const viy2InputBox_8g7Cue = ref();
const viy2Row_8fWb8u = ref();
const viy2Row_8glY7A = ref();
const viy2Row_8glY7L = ref();
const viy2InputBox_8glY86 = ref();
const viy2Row_8glY8D = ref();
const viy2InputBox_8glY8Y = ref();
const viy2Row_8glU6I = ref();
const viy2Row_8glU73 = ref();
const viy2InputBox_8glU7o = ref();
const viy2Row_8glU7V = ref();
const viy2InputBox_8glU86 = ref();
const viy2Row_8glK7w = ref();
const viy2Row_8glK7H = ref();
const viy2InputBox_8glK7S = ref();
const viy2Row_8glK85 = ref();
const viy2InputBox_8glK8g = ref();
const viy2Row_8gmYDe = ref();
const viy2Row_8gmYDz = ref();
const viy2InputBox_8gmYDU = ref();
const viy2Row_8gmYEr = ref();
const viy2InputBox_8gmYEC = ref();
const viy2Row_8go0IM = ref();
const viy2Row_8go0G7 = ref();
const viy2InputBox_8go0Gs = ref();
const viy2Row_8go0GZ = ref();
const viy2InputBox_8go0Kk = ref();
const viy2Row_8gnZqs = ref();
const viy2Row_8gnZqN = ref();
const viy2InputBox_8gnZrC = ref();
const viy2Row_8gnZsD = ref();
const viy2InputBox_8hmz4C = ref();
const locationAside = ref();
const viy2Subpage_4Y5ad = ref();
const aside001 = ref();
const viy2Row_TBVFW = ref();
const viy2Row_TCZrB = ref();
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
const viy2InputBox_STKLR7 = ref();
const viy2InputBox_STKLR8 = ref();
const viy2Row_STCGW = ref();
const viy2InputBox_STKLR9 = ref();
const viy2InputBox_STKLR10 = ref();
const viy2Row_SWFsQ = ref();
const viy2InputBox_8RazzA11 = ref();
const viy2Radio_U59Hr = ref();
const viy2Row_SVDqS = ref();
const viy2Radio_U4f1I = ref();
const viy2InputBox_8RaGQ514 = ref();
const viy2Panel_SXD4P = ref();
const viy2Row_SYw06 = ref();
const viy2Button_SYzVO = ref();
const viy2Table_SRLpW = ref();
const formData = reactive({
  orgAbbr: '', orgNm: '', orgRequestCd: '', pcCd: '', attributeId: '', proDpCd: '', salesMan: '', resscutFlag: '', regularRank: '', status: '', shipFlag: '', shipDay: '',
});
const queryFormData = reactive({
  datafieldviy2Radio_Ogpxm: '販売店', shop: '', activeStatus: '有効', tel: '', city: '',
});
const stockFormData = reactive({
  orgCd: '', orgNm: '',
});
const viy2Form_SRIEFData = reactive({
  orgCd: '01203', orgNm: '北京雅尊汇贸易有限公司', orgAbbr: '北京雅尊汇贸易有限公司', orgNm: '北京雅尊汇贸易有限公司', orgRequestCd: '01203', pcCd: '', attributeId: '', proDpCd: '', salesMan: '', resscutFlag: '', regularRank: '', status: '有効', shipflag: '可', shipDay: '火曜日',
});
const showStockAside = ref(false);
const showLocationWin = ref(false);
const aside001002 = ref(false);
const viy2Radio_U59HrOpts = reactive([
  { value: '有効', label: '有効' },
  { value: '失効', label: '失効' },
]);
const viy2Radio_U4f1IOpts = reactive([
  { value: '可', label: '可' },
  { value: '否', label: '否' },
]);
const viy2Table_SRLpWEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_SRLpWMouseConfig = reactive({
  extension: true,
});
const viy2Table_SRLpWViy2TableButtonColumn_T1ELOButtons = (scope) => {
  return [
    {
      label: '',
      icon: IconDelete,
    },
  ];
};
const viy2Radio_OgpxmOpts = reactive([
  { value: '販売店', label: '販売店' },
  { value: '内部課', label: '内部課' },
]);
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
      icon: IconView,
      click: onViewRow,
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
      actualQty: '11',
      currentAverageCost: '100000',
    },
    {
      location: '637-123-4504',
      productCd: 'FJS-002-DHFU',
      productName: '電子ディスク002',
      actualQty: '10',
      currentAverageCost: '100000',
    },
    {
      location: '637-456-4504',
      productCd: 'FJS-003-DHFU',
      productName: '電子ディスク003',
      actualQty: '25',
      currentAverageCost: '100000',
    },
    {
      location: '637-152-3321',
      productCd: 'FJS-004-DHFU',
      productName: '電子ディスク004',
      actualQty: '32',
      currentAverageCost: '100000',
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
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5heznYClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      // findPartsActualStockListApi.runAsync();
      gridDsApi.runAsync();
    }
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
const gridPostCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTelEditRender = computed(() => {
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
const viy2Button_70FD2DClick = () => {
  stockForm.value.validate((valid) => {
    if (valid) {
      saveOrUpdateStockDsApi.runAsync();
    }
  });
};
const viy2Button_70FD2EClick = () => {
  VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    showStockAside.value = false;
  });
};
const viy2Button_SSkisClick = () => {
  VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    aside001002.value = false;
  });
};
const viy2Table_SRLpWConsigneeCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_SRLpWConsigneeNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_SRLpWTelEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_SRLpWPostCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_SRLpWCityGoveEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_SRLpWCityEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_SRLpWAddress1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_SRLpWDefaultEditRender = computed(() => {
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
const onViewRow = (row) => {
// showStockAside.value = true;
  aside001002.value = true;
// resetStockDetailAside();
// stockFormData.action = OperationStatus.UPDATE;
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" class="fixed-button" @click="resetBtnClick">
          リセット
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5heznY" ref="viy2Button_5heznY" icon-position="left" type="info" @click="viy2Button_5heznYClick">
          検索
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_LU6VA"
      ref="viy2Flex_LU6VA"
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
              prop="datafieldviy2Radio_Ogpxm"
            >
              <VueRadioGroup
                id="viy2Radio_Ogpxm"
                ref="viy2Radio_Ogpxm"
                v-model="queryFormData.datafieldviy2Radio_Ogpxm"
                radio-style="button"
                direction="horizontal"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_OgpxmOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
            <VueFormItem
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
              label="ステータス"
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
              label="市町村名称"
              prop="city"
            >
              <VueInput
                id="viy2InputBox_Olecl"
                ref="viy2InputBox_Olecl"
                v-model="queryFormData.city"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_LUasz"
        ref="viy2Flex_LUasz"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            :edit-render="gridPostCodeEditRender"
            field="postCode"
            :sortable="true"
            title="郵便番号"
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
            title="ステータス"
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
      size="50%"
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
            販売店詳細
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
          id="viy2Row_8g7Ctm"
          ref="viy2Row_8g7Ctm"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueRow
              id="viy2Row_8g7Ctn"
              ref="viy2Row_8g7Ctn"
            >
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              >
                <VueFormItem
                  label="販売店CD"
                  prop="orgCd"
                >
                  <VueInput
                    id="viy2InputBox_8g7Cty"
                    ref="viy2InputBox_8g7Cty"
                    v-model="stockFormData.orgCd"
                    :style="{ width: '200px' }"
                  />
                </VueFormItem>
              </VueCol>
            </VueRow>
            <VueRow
              id="viy2Row_8g7Cud"
              ref="viy2Row_8g7Cud"
            >
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              >
                <VueFormItem
                  label="販売店名"
                  prop="orgNm"
                >
                  <VueInput
                    id="viy2InputBox_8g7Cue"
                    ref="viy2InputBox_8g7Cue"
                    v-model="stockFormData.orgNm"
                    :style="{ width: '200px' }"
                  />
                </VueFormItem>
              </VueCol>
            </VueRow>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueRow
        id="viy2Row_8fWb8u"
        ref="viy2Row_8fWb8u"
      >
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueRow
            id="viy2Row_8glY7A"
            ref="viy2Row_8glY7A"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueRow
                id="viy2Row_8glY7L"
                ref="viy2Row_8glY7L"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueFormItem
                    label="漢字名"
                    prop="orgAbbr"
                  >
                    <VueInput
                      id="viy2InputBox_8glY86"
                      ref="viy2InputBox_8glY86"
                      v-model="formData.orgAbbr"
                      :style="{ width: '200px' }"
                    />
                  </VueFormItem>
                </VueCol>
              </VueRow>
              <VueRow
                id="viy2Row_8glY8D"
                ref="viy2Row_8glY8D"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueFormItem
                    label="販売店名（カナ）"
                    prop="orgNm"
                  >
                    <VueInput
                      id="viy2InputBox_8glY8Y"
                      ref="viy2InputBox_8glY8Y"
                      v-model="formData.orgNm"
                      :style="{ width: '200px' }"
                    />
                  </VueFormItem>
                </VueCol>
              </VueRow>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_8glU6I"
        ref="viy2Row_8glU6I"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueRow
            id="viy2Row_8glU73"
            ref="viy2Row_8glU73"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="請求先販売先"
                prop="orgRequestCd"
              >
                <VueInput
                  id="viy2InputBox_8glU7o"
                  ref="viy2InputBox_8glU7o"
                  v-model="formData.orgRequestCd"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_8glU7V"
            ref="viy2Row_8glU7V"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="管轄ＰＣ"
                prop="pcCd"
              >
                <VueInput
                  id="viy2InputBox_8glU86"
                  ref="viy2InputBox_8glU86"
                  v-model="formData.pcCd"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_8glK7w"
        ref="viy2Row_8glK7w"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueRow
            id="viy2Row_8glK7H"
            ref="viy2Row_8glK7H"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="属性区分"
                prop="attributeId"
              >
                <VueInput
                  id="viy2InputBox_8glK7S"
                  ref="viy2InputBox_8glK7S"
                  v-model="formData.attributeId"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_8glK85"
            ref="viy2Row_8glK85"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="受注代行拠点"
                prop="proDpCd"
              >
                <VueInput
                  id="viy2InputBox_8glK8g"
                  ref="viy2InputBox_8glK8g"
                  v-model="formData.proDpCd"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_8gmYDe"
        ref="viy2Row_8gmYDe"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueRow
            id="viy2Row_8gmYDz"
            ref="viy2Row_8gmYDz"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="セールスマン"
                prop="salesMan"
              >
                <VueInput
                  id="viy2InputBox_8gmYDU"
                  ref="viy2InputBox_8gmYDU"
                  v-model="formData.salesMan"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_8gmYEr"
            ref="viy2Row_8gmYEr"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="レスカットサイン"
                prop="resscutFlag"
              >
                <VueInput
                  id="viy2InputBox_8gmYEC"
                  ref="viy2InputBox_8gmYEC"
                  v-model="formData.resscutFlag"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_8go0IM"
        ref="viy2Row_8go0IM"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueRow
            id="viy2Row_8go0G7"
            ref="viy2Row_8go0G7"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="純掛ランク"
                prop="regularRank"
              >
                <VueInput
                  id="viy2InputBox_8go0Gs"
                  ref="viy2InputBox_8go0Gs"
                  v-model="formData.regularRank"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_8go0GZ"
            ref="viy2Row_8go0GZ"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="ステータス"
                prop="status"
              >
                <VueInput
                  id="viy2InputBox_8go0Kk"
                  ref="viy2InputBox_8go0Kk"
                  v-model="formData.status"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueRow
        id="viy2Row_8gnZqs"
        ref="viy2Row_8gnZqs"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueRow
            id="viy2Row_8gnZqN"
            ref="viy2Row_8gnZqN"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="出荷可否区分"
                prop="shipFlag"
              >
                <VueInput
                  id="viy2InputBox_8gnZrC"
                  ref="viy2InputBox_8gnZrC"
                  v-model="formData.shipFlag"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_8gnZsD"
            ref="viy2Row_8gnZsD"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="出荷不可曜日"
                prop="shipDay"
              >
                <VueInput
                  id="viy2InputBox_8hmz4C"
                  ref="viy2InputBox_8hmz4C"
                  v-model="formData.shipDay"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
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
          class="aside-title-row"
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
              <VueButton id="viy2Button_SS9Ht" ref="viy2Button_SS9Ht" type="info" icon-position="right">
                確定
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
                placeholder="北京雅尊汇贸易有限公司"
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
              prop="attributeId"
            >
              <VueInput
                id="viy2InputBox_STKLR7"
                ref="viy2InputBox_STKLR7"
                v-model="viy2Form_SRIEFData.attributeId"
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
              label="セールスマン"
              prop="salesMan"
            >
              <VueInput
                id="viy2InputBox_STKLR9"
                ref="viy2InputBox_STKLR9"
                v-model="viy2Form_SRIEFData.salesMan"
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
              label="出荷可否区分"
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
        <VueTable id="viy2Table_SRLpW" ref="viy2Table_SRLpW" :edit-config="viy2Table_SRLpWEditConfig" :mouse-config="viy2Table_SRLpWMouseConfig">
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="viy2Table_SRLpWConsigneeCdEditRender"
            field="consigneeCd"
            title="出荷先CD"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="viy2Table_SRLpWConsigneeNmEditRender"
            field="consigneeNm"
            title="出荷先名"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="viy2Table_SRLpWTelEditRender"
            field="tel"
            title="電話番号"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="viy2Table_SRLpWPostCodeEditRender"
            field="postCode"
            title="郵便番号"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="viy2Table_SRLpWCityGoveEditRender"
            field="cityGove"
            title="都道府県"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="viy2Table_SRLpWCityEditRender"
            field="city"
            title="市町村"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="viy2Table_SRLpWAddress1EditRender"
            field="address1"
            title="住所1"
            width="100px"
            header-align="center"
          />
          <VueRadioColumn
            :edit-render="viy2Table_SRLpWDefaultEditRender"
            field="default"
            title="デフォルト"
            width="100px"
          />
          <VueButtonColumn
            align="center"
            width="40px"
            header-align="center"
            :buttons="viy2Table_SRLpWViy2TableButtonColumn_T1ELOButtons"
          />
        </VueTable>
      </VuePanel>
    </VueAside>
  </VueForm>
</template>
