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
  name: 'cmm0310_01',
});
const form = ref();
const viy2Flex_LU6VA = ref();
const queryForm = ref();
const viy2Panel_GvVgb = ref();
const viy2Button_5SkH4A = ref();
const resetBtn = ref();
const viy2Row_4Hp8hY = ref();
const viy2InputBox_2Uqfv = ref();
const viy2InputBox_92mNuM = ref();
const viy2Flex_LUasz = ref();
const viy2Panel_GvVUq = ref();
const viy2Button_Ar1oV = ref();
const grid = ref();
const aside001 = ref();
const viy2Row_TBVFW = ref();
const viy2Row_TCZrB = ref();
const viy2Button_SS9Ht = ref();
const viy2Button_Au5Xf = ref();
const viy2Form_SRIEF = ref();
const viy2Panel_AsqWp = ref();
const viy2Row_STxN0 = ref();
const viy2InputBox_STKLR1 = ref();
const viy2InputBox_STKLR2 = ref();
const viy2Panel_SXD4P = ref();
const viy2Row_SYw06 = ref();
const viy2Button_SYzVO = ref();
const asideGrid = ref();
const formData = reactive({
});
const queryFormData = reactive({
  datafieldviy2InputBox_2Uqfv: '', datafieldviy2InputBox_2Uqfv: '',
});
const viy2Form_SRIEFData = reactive({
  orgCd: '01234', orgNm: 'グループA',
});
const rules = reactive({
  viy2InputBox_STKLR1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_STKLR2Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const asideGridRules = {
  org1: [
    { required: true, message: 'name required' },
  ],
};
const aside001002 = ref(false);
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
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      title: 'Delete',
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
const viy2Button_5SkH4AClick = () => {
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
const viy2Button_Ar1oVClick = () => {
  aside001002.value = true;
};
const gridGroupCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_Au5XfClick = () => {
  VueMessageBox.confirm(t('閉じるをしますか?'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    aside001002.value = false;
  });
};
const asideGridOrg1EditRender = computed(() => {
  return {
    enabled: true,
    options: gridDs.value,
  };
});
const asideGridOrgNmEditRender = computed(() => {
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
              <VueButton id="viy2Button_5SkH4A" ref="viy2Button_5SkH4A" icon-position="left" type="info" @click="viy2Button_5SkH4AClick">
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
                label="売上グループコード"
                prop="datafieldviy2InputBox_2Uqfv"
              >
                <VueInput
                  id="viy2InputBox_2Uqfv"
                  ref="viy2InputBox_2Uqfv"
                  v-model="queryFormData.datafieldviy2InputBox_2Uqfv"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="売上グループ名称"
                prop="datafieldviy2InputBox_2Uqfv"
              >
                <VueInput
                  id="viy2InputBox_92mNuM"
                  ref="viy2InputBox_92mNuM"
                  v-model="queryFormData.datafieldviy2InputBox_2Uqfv"
                  :style="{ width: '200px' }"
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
        <VuePanel id="viy2Panel_GvVUq" ref="viy2Panel_GvVUq" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_Ar1oV" ref="viy2Button_Ar1oV" icon-position="left" @click="viy2Button_Ar1oVClick">
                行追加
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No."
            />
            <VueInputColumn
              :edit-render="gridGroupCdEditRender"
              field="groupCd"
              :sortable="true"
              title="売上グループコード"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridGroupNmEditRender"
              field="groupNm"
              :sortable="true"
              title="売上グループ名称"
              width="150px"
              header-align="center"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="100px"
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
      size="40%"
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
              <VueText id="viy2Text_TD8p4" ref="viy2Text_TD8p4" class="aside-title-text" :style="{ width: '300px', display: 'inline-block' }">
                売上グループ明細
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
              <VueButton id="viy2Button_Au5Xf" ref="viy2Button_Au5Xf" icon-position="left" @click="viy2Button_Au5XfClick">
                閉じる
              </VueButton>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueForm
        id="viy2Form_SRIEF"
        ref="viy2Form_SRIEF"
        :model="viy2Form_SRIEFData"
      >
        <VuePanel id="viy2Panel_AsqWp" ref="viy2Panel_AsqWp" title="グループ詳細">
          <VueRow
            id="viy2Row_STxN0"
            ref="viy2Row_STxN0"
          >
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="売上グループコード"
                prop="orgCd"
                :rules="rules.viy2InputBox_STKLR1Rules"
              >
                <VueInput
                  id="viy2InputBox_STKLR1"
                  ref="viy2InputBox_STKLR1"
                  v-model="viy2Form_SRIEFData.orgCd"
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
                label="売上グループ名"
                prop="orgNm"
                :rules="rules.viy2InputBox_STKLR2Rules"
              >
                <VueInput
                  id="viy2InputBox_STKLR2"
                  ref="viy2InputBox_STKLR2"
                  v-model="viy2Form_SRIEFData.orgNm"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VuePanel id="viy2Panel_SXD4P" ref="viy2Panel_SXD4P" title="明細情報" :collapse="true" collapse-icon-position="left" height="100%">
        <template #header>
          <div style="width: auto">
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
                  行追加
                </VueButton>
              </VueCol>
            </VueRow>
          </div>
        </template>
        <VueTable id="asideGrid" ref="asideGrid" height="auto" :data="asideGridDs" :edit-rules="asideGridRules" :edit-config="asideGridEditConfig" :mouse-config="asideGridMouseConfig">
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueSelectColumn
            :edit-render="asideGridOrg1EditRender"
            field="org1"
            width="200px"
            title="販売店コード"
          />
          <VueInputColumn
            :edit-render="asideGridOrgNmEditRender"
            field="orgNm"
            title="販売店名称"
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
