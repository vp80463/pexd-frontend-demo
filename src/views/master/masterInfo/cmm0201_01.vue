<script setup>
import { IconDelete, IconEdit, IconSearch, VueMessage, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { find, merge } from 'lodash-es';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_A5K24Page from '/src/views/commons/select_location.vue';
import { LocationType, OperationStatus, PAGE_SIZE, YES_NO_FLAG } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const pointFlag = ref(true);
const locationFlag = ref(false);
const locationTypeFlag = ref(false);
const asideParams = ref();
const uc = useUser().userInfo;
const pointIdForWorkZone = ref(uc.defaultPointId);
const total = ref();
defineOptions({
  name: 'cmm0201_01',
});
const form = ref();
const viy2Flex_KRqWh = ref();
const conditionForm = ref();
const viy2Panel_GQhgl = ref();
const viy2Button_83Yd = ref();
const viy2Button_8d8t = ref();
const viy2Row_118QTw = ref();
const viy2Select_1rPSyEH = ref();
const viy2InputBox_A6HxA = ref();
const viy2Button_vOyv0 = ref();
const viy2Select_1KzHGg = ref();
const viy2Select_1KBTgy = ref();
const viy2Select_aR23E = ref();
const viy2CheckBox_vEEkq = ref();
const viy2Flex_KRvlb = ref();
const viy2Panel_GQhG2 = ref();
const viy2Button_91PMP = ref();
const grid = ref();
const viy2CheckBox_4DOWmd = ref();
const viy2Row_9XkUb = ref();
const pagination = ref();
const locationAside = ref();
const viy2Subpage_A5K24 = ref();
const addAside = ref();
const viy2Row_a8uIG = ref();
const viy2Row_a8x7n = ref();
const viy2Button_ag9EkT = ref();
const viy2Button_a8H3c = ref();
const locationForm = ref();
const viy2Panel_a80Ut = ref();
const viy2Row_a8axL = ref();
const viy2Select_1rPSyE1 = ref();
const viy2InputBox_6Wsa95 = ref();
const viy2Select_17qxDrQ = ref();
const viy2Select_17qxDtz = ref();
const viy2Select_17qxDvi = ref();
const viy2CheckBox_17qxDx1 = ref();
const formData = reactive({
});
const conditionFormData = reactive({
  org: '66564 ジャック', location: '', locationTypeId: '', binTypeId: '', wzId: '', mainLocation: 'N',
});
const locationFormData = reactive({
  pointId: '', location: '', locationTypeId: '', wzId: '', binTypeId: '', mainLocation: 'N',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2InputBox_6Wsa95Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.location')]),
    },
  ],
  viy2Select_17qxDrQRules: [
    {
      required: true,
      message: t('errors.required', [t('label.locationType')]),
    },
  ],
  viy2Select_17qxDtzRules: [
    {
      required: true,
      message: t('errors.required', [t('label.workZone')]),
    },
  ],
  viy2Select_17qxDviRules: [
    {
      required: true,
      message: t('errors.required', [t('label.binType')]),
    },
  ],
});
const showLocationWin = ref(false);
const showLocationAside = ref(false);
const viy2Select_1rPSyE1Opts = reactive([
  {
    desc:
'66564 ジャック',
    id:
'66564 ジャック',
  },
  {
    desc:
'Option 1',
    id:
'Option 1',
  },
  {
    desc:
'Option 2',
    id:
'Option 2',
  },
]);
const viy2CheckBox_17qxDx1Opts = [
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
const viy2Select_1rPSyEHOpts = reactive([
  {
    desc:
'66564 ジャック',
    id:
'66564 ジャック',
  },
  {
    desc:
'66598 ジャック698',
    id:
'66598 ジャック698',
  },
]);
const viy2Select_1KzHGgOpts = reactive([
  {
    codeData1:
'普通',
    codeDbid:
'普通',
  },
  {
    codeData1:
'欠品',
    codeDbid:
'欠品',
  },
  {
    codeData1:
'凍結',
    codeDbid:
'凍結',
  },
]);
const viy2CheckBox_vEEkqOpts = [
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
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_4DOWmdOpts = [
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
const gridViy2TableButtonColumn_vF1uXButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelLocationRow,
      title: 'Delete',
    },
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onEditRow,
      title: 'Edit',
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const workzoneDsApi = useApi({
  url: '/common/helper/getWorkZoneList.json',
  method: 'post',
  data: {
    arg0: pointIdForWorkZone,
  },
}, {
  manual: true,
});
const workzoneDs = workzoneDsApi.data;
const findLocationInformationInquiryApi = useApi({
  url: '/master/cmm0201/findLocationInformationInquiryList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, conditionFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    total.value = data.totalElements;
  },
  manual: true,
});
const findLocationInformationInquiry = findLocationInformationInquiryApi.data;
const binTypeDsApi = useApi({
  url: '/common/helper/getBinTypeList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const binTypeDs = binTypeDsApi.data;
const locationDsApi = useApi({
  url: '/common/valuelist/locationValueList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    conditionFormData.location = data[0].locationNo;
    conditionFormData.locationId = data[0].locationId;
  },
  manual: true,
});
const locationDs = locationDsApi.data;
const saveOrUpdateLocationDsApi = useApi({
  url: '/master/cmm0201/newOrModifyLocation.json',
  method: 'post',
  data: () => {
    return locationFormData;
  },
  lockScreen: true,
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
    showLocationAside.value = false;
    findLocationInformationInquiryApi.runAsync();
  },
  manual: true,
});
const saveOrUpdateLocationDs = saveOrUpdateLocationDsApi.data;
const deleteLocationDsApi = useApi({
  url: '/master/cmm0201/deleteLocation.json',
  method: 'post',
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    findLocationInformationInquiryApi.runAsync();
  },
  manual: true,
});
const deleteLocationDs = deleteLocationDsApi.data;
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
const locationTypeDsApi = useApi({
  url: '/common/helper/getLocationClassificationList.json',
  method: 'post',
  data: {
    // arg0: 'S006TENTATIVE'
    // , arg1: 'S006NORMAL'
  },
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const locationTypeDs = locationTypeDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      location: '101-76-01-04',
      locationType: '通常',
      binType: 'フラットトレイ',
      wz: 'description1',
    },
    {
      location: '19-06-24-02',
      locationType: '欠品',
      binType: 'タイヤラック',
      wz: 'description2',
    },
    {
      location: '101-03-20-00',
      locationType: '凍結',
      binType: ' チューブトレイ',
      wz: 'TEST3',
    },
    {
      location: '103-66-31-04',
      locationType: '通常',
      binType: 'ヘッドカバー用トレイ',
      wz: 'TEST4',
    },
  ],
});
const gridDs = gridDsApi.data;
const viy2Button_83YdClick = () => {
  conditionForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Button_8d8tClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
    conditionFormData.mainLocation = 'N';
    conditionFormData.pointId = uc.defaultPointId;
  }).catch(() => {
  });
};
const viy2Select_1rPSyEHChange = (value) => {
  pointIdForWorkZone.value = value;
  conditionFormData.wzId = '';
// workzoneDsApi.runAsync();
};
const viy2InputBox_A6HxAChange = (event) => {
  conditionFormData.locationId = '';
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
const viy2Button_vOyv0Click = (params) => {
  conditionForm.value.validate((valid) => {
    if (valid) {
      showLocationWin.value = true;
      const point = getPointLabel(conditionFormData.pointId);
      const pointid = conditionFormData.pointId;
      const flag = YES_NO_FLAG.NO;
      const locationTypeList = [LocationType.TENTATIVE,
        LocationType.NORMAL,
        LocationType.SERVICE,
        LocationType.FROZEN];
      asideParams.value = { flag, point, pointId: pointid, locationTypeList };
    }
  });
};
const viy2Button_91PMPClick = () => {
  conditionForm.value.validate((valid) => {
    if (valid) {
      locationFlag.value = false;
      locationTypeFlag.value = false;
      showLocationAside.value = true;
      resetLocationDetailAside();
      locationFormData.action = OperationStatus.NEW;
      locationFormData.point = conditionFormData.point;
      locationFormData.pointId = conditionFormData.pointId;
      locationFormData.mainLocation = YES_NO_FLAG.NO;
    }
  });
};
const gridLocationEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      clearable: true,
      usePopover: true,
      popoverWidth: 500,
      textAlign: 'left',
    },
  };
});
const gridLocationTypeEditRender = computed(() => {
  return {
    enabled: false,
    options: locationTypeDs.value,
    displayMember: 'codeData1',
    valueMember: 'codeData1',
    attrs: {
      textAlign: 'left',
    },
  };
});
const gridBinTypeEditRender = computed(() => {
  return {
    enabled: false,
    options: binTypeDs.value,
    displayMember: 'description',
    valueMember: 'description',
    attrs: {
      textAlign: 'left',
    },
  };
});
const gridWzEditRender = computed(() => {
  return {
    enabled: false,
    options: workzoneDs.value,
    displayMember: 'description',
    valueMember: 'description',
  };
});
const gridCopy0_viy2TableTemplateColumn_b3l7VEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const paginationCurrentChange = (currentPage) => {
  if (total.value === 0) {
    return;
  }
  findLocationInformationInquiryApi.runAsync();
};
const viy2Button_ag9EkTClick = () => {
  locationForm.value.validate((valid) => {
    if (valid) {
      // saveOrUpdateLocationDsApi.runAsync();
    }
  });
};
const viy2Button_a8H3cClick = () => {
  VueMessageBox.confirm(t('閉じるをしますか?'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    showLocationAside.value = false;
  });
};
onMounted(() => {
  conditionFormData.pointId = uc.defaultPointId;
  paginationPageSize.value = PAGE_SIZE;
});
// 条件改变，清空明细
watch(() => conditionFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
// 参考userlist的
const resetLocationDetailAside = () => {
// resetLocationFormData();
};
// 参考userlist的
const resetLocationFormData = () => {
// const locationFormElement = locationForm.value;
// if (locationFormElement && locationFormElement.resetFields) {
// locationFormElement.resetFields();
// for (let key in locationFormData) {
// locationFormData[key] = "";
// }
// }
// 设置为初始值
  locationFormData.status = YES_NO_FLAG.YES;
};
const resetCondition = () => {
// 清空表单元素
  conditionForm.value.resetFields();
  // 清空conditionFormData中的其他值
  for (const key in conditionFormData) {
    conditionFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
  // conditionFormData.pointId = uc.defaultPointId;
  paginationPageSize.value = PAGE_SIZE;
};
const resetTblResults = () => {
  grid.value.remove();
  findLocationInformationInquiry.value.content = [];
  total.value = 0;
  paginationCurrentPage.value = 1;
};
// 删除数据
// const onDelLocationRow = (row) => {
// VueMessageBox.confirm(t('M.C.00103', [row.location]),t('title.warn'), {
// type: 'warning',
// }).then(() => {
// // deleteLocationDsApi.runAsync({
// // locationId: row.locationId
// // });
// }).catch(() => {
// });
// };
const onDelLocationRow = (row) => {
  if (row.location != null && typeof (row.location) != 'undefined') {
    VueMessageBox.confirm(t('削除を確認しますか？'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      grid.value.remove(row);
      // deleteGridDsApi.runAsync();
      // resetCondition();
    }).catch(() => {
    });
  } else {
    grid.value.remove(row);
  }
};
// 编辑数据
const onEditRow = (row) => {
  locationFlag.value = true;
  locationTypeFlag.value = true;
  showLocationAside.value = true;
  resetLocationDetailAside();
  row.action = OperationStatus.UPDATE;
  locationFormData.point = row.point;
  locationFormData.pointId = row.pointId;
  locationFormData.locationId = row.locationId;
  locationFormData.location = row.location;
  locationFormData.locationTypeId = row.locationTypeId;
  locationFormData.binTypeId = row.binTypeId;
  locationFormData.wzId = row.wzId;
  locationFormData.mainLocation = row.mainLocation;
  nextTick(() => {
    // findLocationInformationInquiryApi.runAsync();
  });
};
// location侧边栏选择后
const callbkSelectLocation = (param) => {
  conditionFormData.location = param.locationNo;
  conditionFormData.locationId = param.locationId;
  showLocationWin.value = false;
};
// location侧边栏选择关闭后
const closeLocationAside = () => {
  showLocationWin.value = false;
};
const getPointLabel = (pointId) => {
  const item = find(pointDs.value, { id: pointId });
  return item ? item.desc : null;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_KRqWh"
      ref="viy2Flex_KRqWh"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="conditionForm"
        ref="conditionForm"
        :model="conditionFormData"
      >
        <VuePanel id="viy2Panel_GQhgl" ref="viy2Panel_GQhgl" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left" type="info" @click="viy2Button_83YdClick">
                検索
              </VueButton>
              <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" @click="viy2Button_8d8tClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_118QTw"
            ref="viy2Row_118QTw"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                v-if="false"
                label="倉庫"
                prop="org"
                :rules="rules.viy2Select_1rPSyEHRules"
              >
                <VueSelect
                  id="viy2Select_1rPSyEH"
                  ref="viy2Select_1rPSyEH"
                  v-model="conditionFormData.org"
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
              <VueFormItem
                label="ロケーション"
                prop="location"
              >
                <VueInput
                  id="viy2InputBox_A6HxA"
                  ref="viy2InputBox_A6HxA"
                  v-model="conditionFormData.location"
                  type="text"
                  class="no-border"
                  :on-suffix-icon-click="viy2InputBox_A6HxAOnSuffixIconClick"
                  :style="{ width: '200px' }"
                  @change="viy2InputBox_A6HxAChange"
                >
                  <template #append>
                    <VueButton id="viy2Button_vOyv0" ref="viy2Button_vOyv0" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_vOyv0Click" />
                  </template>
                </VueInput>
              </VueFormItem>
              <VueFormItem
                label="ロケーションタイプ"
                prop="locationTypeId"
              >
                <VueSelect
                  id="viy2Select_1KzHGg"
                  ref="viy2Select_1KzHGg"
                  v-model="conditionFormData.locationTypeId"
                  :style="{ width: '200px' }"
                  :clearable="true"
                  :options="viy2Select_1KzHGgOpts"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                label="箱別"
                prop="binTypeId"
              >
                <VueSelect
                  id="viy2Select_1KBTgy"
                  ref="viy2Select_1KBTgy"
                  v-model="conditionFormData.binTypeId"
                  :style="{ width: '200px' }"
                  :clearable="true"
                  :options="binTypeDs"
                  :props="{
                    label: 'description',
                    value: 'binTypeId',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                label="エリア"
                prop="wzId"
              >
                <VueSelect
                  id="viy2Select_aR23E"
                  ref="viy2Select_aR23E"
                  v-model="conditionFormData.wzId"
                  :style="{ width: '200px' }"
                  :clearable="true"
                  :options="workzoneDs"
                  :props="{
                    label: 'description',
                    value: 'workzoneId',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="メインロケーション"
                prop="mainLocation"
              >
                <VueCheckbox
                  id="viy2CheckBox_vEEkq"
                  ref="viy2CheckBox_vEEkq"
                  v-model="conditionFormData.mainLocation"
                  true-label="Y"
                  false-label="N"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_KRvlb"
        ref="viy2Flex_KRvlb"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_GQhG2" ref="viy2Panel_GQhG2" title="明細情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_91PMP" ref="viy2Button_91PMP" icon-position="left" @click="viy2Button_91PMPClick">
                行追加
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
            />
            <VueValueListColumn
              :edit-render="gridLocationEditRender"
              field="location"
              :clearable="true"
              align="left"
              :sortable="true"
              title="ロケーション"
              width="180px"
              header-align="center"
            />
            <VueSelectColumn
              :edit-render="gridLocationTypeEditRender"
              field="locationType"
              align="left"
              :sortable="true"
              width="180px"
              title="ロケーションタイプ"
              header-align="center"
            />
            <VueSelectColumn
              v-if="false"
              :edit-render="gridBinTypeEditRender"
              field="binType"
              align="left"
              :sortable="true"
              title="箱別"
              header-align="center"
              width="150px"
            />
            <VueSelectColumn
              v-if="false"
              :edit-render="gridWzEditRender"
              field="wz"
              :sortable="true"
              title="エリア"
              header-align="center"
              width="150px"
            />
            <VueTemplateColumn
              :edit-render="gridCopy0_viy2TableTemplateColumn_b3l7VEditRender"
              align="center"
              :sortable="true"
              title="メインロケーション"
              header-align="center"
              width="160px"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_4DOWmd"
                  ref="viy2CheckBox_4DOWmd"
                  v-model="scope.row.mainLocation"
                  :disabled="true"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
            <VueButtonColumn
              align="center"
              width="80px"
              :buttons="gridViy2TableButtonColumn_vF1uXButtons"
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
    <VueAside
      id="locationAside"
      ref="locationAside"
      v-model="showLocationWin"
      :modal="true"
      size="50%"
      :close-on-click-modal="true"
      :close-on-press-escape="true"
      :with-header="false"
      :show-close="false"
    >
      <viy2Subpage_A5K24Page
        id="viy2Subpage_A5K24"
        ref="viy2Subpage_A5K24"
        :init-data="asideParams"
        @select="callbkSelectLocation"
        @close="closeLocationAside"
      />
    </VueAside>
    <VueAside
      id="addAside"
      v-model="showLocationAside"
      ref="addAside"
      :modal="true"
      direction="rtl"
      size="40%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
    >
      <VueRow
        id="viy2Row_a8uIG"
        ref="viy2Row_a8uIG"
      >
        <VueCol
          item-key="item"
          style="padding-bottom:5px"
          :md="{ span: 24 }"
        >
          <VueRow
            id="viy2Row_a8x7n"
            ref="viy2Row_a8x7n"
          >
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueText id="viy2Text_ag9EkS" ref="viy2Text_ag9EkS" class="aside-title-text">
                ロケーションメンテ（詳細）
              </VueText>
            </VueCol>
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueButton id="viy2Button_ag9EkT" ref="viy2Button_ag9EkT" icon-position="left" type="info" @click="viy2Button_ag9EkTClick">
                保存
              </VueButton>
              <VueButton id="viy2Button_a8H3c" ref="viy2Button_a8H3c" icon-position="left" @click="viy2Button_a8H3cClick">
                閉じる
              </VueButton>
            </VueCol>
          </VueRow>
        </VueCol>
      </VueRow>
      <VueForm
        id="locationForm"
        ref="locationForm"
        :model="locationFormData"
      >
        <VuePanel id="viy2Panel_a80Ut" ref="viy2Panel_a80Ut" title="詳細情報">
          <VueRow
            id="viy2Row_a8axL"
            ref="viy2Row_a8axL"
          >
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                v-if="false"
                label="販売店"
                label-width="110px"
                prop="pointId"
              >
                <VueSelect
                  id="viy2Select_1rPSyE1"
                  ref="viy2Select_1rPSyE1"
                  v-model="locationFormData.pointId"
                  :style="{ width: '250px' }"
                  :collapse-tags="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :disabled="true"
                  :options="viy2Select_1rPSyE1Opts"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="ロケーション"
                label-width="150px"
                prop="location"
                :rules="rules.viy2InputBox_6Wsa95Rules"
              >
                <VueInput
                  id="viy2InputBox_6Wsa95"
                  ref="viy2InputBox_6Wsa95"
                  v-model="locationFormData.location"
                  :disabled="locationFlag"
                  :style="{ width: '250px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="ロケーションタイプ"
                label-width="180px"
                prop="locationTypeId"
                :rules="rules.viy2Select_17qxDrQRules"
              >
                <VueSelect
                  id="viy2Select_17qxDrQ"
                  ref="viy2Select_17qxDrQ"
                  v-model="locationFormData.locationTypeId"
                  :style="{ width: '250px' }"
                  :disabled="locationTypeFlag"
                  :clearable="true"
                  :options="locationTypeDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                label="エリア"
                label-width="110px"
                prop="wzId"
                :rules="rules.viy2Select_17qxDtzRules"
              >
                <VueSelect
                  id="viy2Select_17qxDtz"
                  ref="viy2Select_17qxDtz"
                  v-model="locationFormData.wzId"
                  :style="{ width: '250px' }"
                  :clearable="true"
                  :options="workzoneDs"
                  :props="{
                    label: 'description',
                    value: 'workzoneId',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                v-if="false"
                label="箱別"
                label-width="110px"
                prop="binTypeId"
                :rules="rules.viy2Select_17qxDviRules"
              >
                <VueSelect
                  id="viy2Select_17qxDvi"
                  ref="viy2Select_17qxDvi"
                  v-model="locationFormData.binTypeId"
                  :style="{ width: '250px' }"
                  :clearable="true"
                  :options="binTypeDs"
                  :props="{
                    label: 'description',
                    value: 'binTypeId',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="主サイン"
                label-width="110px"
                prop="mainLocation"
              >
                <VueCheckbox
                  id="viy2CheckBox_17qxDx1"
                  ref="viy2CheckBox_17qxDx1"
                  v-model="locationFormData.mainLocation"
                  true-label="Y"
                  false-label="N"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
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
