<script setup>
import { IconCloseBold, IconDelete, IconEdit, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import viy2Subpage_13B2uUPage from '/src/views/fileLoad/fileImport.vue';
import { merge } from 'lodash-es';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
import { formatPartNo } from '@/pj-commonutils.js';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const initializedFlag = ref(true);
const uc = useUser().userInfo;
const exportFlag = ref(true);
const calculateFlag = ref(true);
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const total = ref();
const nowPartsCode = ref();
const importInfo = ref({ programid: 'CMM050901', templatename: 'CMM0509_01_Improt_Template.xlsx', otherproperty: '123456', downloadfilename: 'downloadExample.xlsx', savewarningmsg: 'Do you want to import this file?' });
defineOptions({
  name: 'cmm0509_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_auYwHU = ref();
const viy2Button_A5lhu = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_6KSCgk = ref();
const viy2Button_6KSBee = ref();
const viy2Flex_KPbYF = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2Select_oLbtr = ref();
const viy2ValueList_90dtey = ref();
const viy2Row_9GuEdp = ref();
const viy2Flex_KPfpG = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_64P9Cy = ref();
const pagination = ref();
const editAside = ref();
const titleRow = ref();
const viy2Button_apuEhV = ref();
const viy2Button_apuEi6 = ref();
const detialForm = ref();
const viy2Row_apuUdO = ref();
const viy2InputBox_12yQgq = ref();
const viy2InputBox_apE01s = ref();
const viy2InputBox_apG4Iu = ref();
const viy2InputNumber_12zloO = ref();
const viy2InputNumber_apNgBi = ref();
const viy2InputNumber_apNlfS = ref();
const viy2InputNumber_apNmzE = ref();
const viy2InputNumber_apNmGE = ref();
const viy2InputNumber_apNoHK = ref();
const viy2InputNumber_apOciU = ref();
const viy2InputNumber_apMqqu = ref();
const viy2InputNumber_apMtzu = ref();
const viy2InputNumber_apMtGa = ref();
const viy2InputNumber_apNnEq = ref();
const viy2InputNumber_apNoT2 = ref();
const viy2InputNumber_apOaxe = ref();
const viy2InputNumber_apMoyw = ref();
const viy2InputNumber_apMrki = ref();
const viy2InputNumber_apMtfO = ref();
const viy2InputNumber_apMtpu = ref();
const viy2InputNumber_apK20o = ref();
const viy2InputNumber_apK0VC = ref();
const viy2InputNumber_apGZRE = ref();
const viy2InputNumber_apGXKG = ref();
const viy2InputNumber_apKqzi = ref();
const viy2InputNumber_apKnOE = ref();
const viy2InputNumber_apKoIC = ref();
const viy2InputNumber_apKpEm = ref();
const viy2Dialog_13AOSx = ref();
const viy2Subpage_13B2uU = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', newPart: '',
});
const detialFormData = reactive({
  dealerCode: '', pointCode: '', partsNo: '', n0: undefined, n1: undefined, n2: undefined, n3: undefined, n4: undefined, n5: undefined, n6: undefined, n7: undefined, n8: undefined, n9: undefined, n10: undefined, n11: undefined, n12: undefined, n13: undefined, n14: undefined, n15: undefined, n16: undefined, n17: undefined, n18: undefined, n19: undefined, n20: undefined, n21: undefined, n22: undefined, n23: undefined, n24: undefined,
});
const rules = reactive({
  viy2Select_oLbtrRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showEditWin = ref(false);
const importWindowShowFlag = ref(false);
const viy2ValueList_90dteyPopoverQueryMethod = parts_query_method;
const viy2ValueList_90dteyPopupColumns = ref(parts_pop_column);
const viy2ValueList_90dteyPopupQueryMethod = parts_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_XgHkHButtons = (scope) => {
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
      click: onDelRoleRow,
      title: 'Delete',
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const editGridDsApi = useApi({
  url: '/master/cmm0509/editPartsDemand.json',
  method: 'post',
  data: () => {
    return detialFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    showEditWin.value = false;
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
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
});
const brandDs = brandDsApi.data;
const demandDetailDsApi = useApi({
  url: '/master/cmm0509/searchPartsDemand.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    merge(detialFormData, data);
  },
  manual: true,
});
const demandDetailDs = demandDetailDsApi.data;
const calculateDsApi = useApi({
  url: 'public/monthlyBatch/dimMonthly.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
  },
  manual: true,
});
const calculateDs = calculateDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
});
const largeGroupDs = largeGroupDsApi.data;
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
const gridDsApi = useApi({
  url: '/master/cmm0509/searchPartsDemandList.json',
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
    total.value = data.totalElements;
    if (data.content.length > 0) {
      exportFlag.value = false;
      calculateFlag.value = false;
    } else {
      exportFlag.value = true;
      calculateFlag.value = true;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const gridAsideButtonApi = useApi({
  method: 'post',
  localData: [
    { dealerCode: '1', pointCode: 'YT35B', partsNo: '1' },
  ],
});
const gridAsideButton = gridAsideButtonApi.data;
const deleteGridDsApi = useApi({
  url: '/master/cmm0509/deletePartsDemand.json',
  method: 'post',
  data: () => {
    queryFormData.partsDemandData = grid.value.getRecordset();
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    gridDsApi.runAsync();
  },
  manual: true,
});
const deleteGridDs = deleteGridDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_auYwHUClick = () => {
  onExport();
};
const viy2Button_A5lhuClick = () => {
  importWindowShowFlag.value = true;
  importInfo._rawValue.otherproperty = queryFormData.pointId;
};
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Button_6KSCgkClick = () => {
  calculateDsApi.runAsync({
    siteFac: `${uc.siteId}:${queryFormData.pointId}`,
  });
// 注销
// logOut();
};
const viy2Button_6KSBeeClick = () => {
  VueMessageBox.confirm(t('M.C.00103', [t('label.demand')]), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    deleteGridDsApi.runAsync();
  }).catch(() => {
  });
};
const viy2ValueList_90dteySelect = (params) => {
  queryFormData.partsId = params.id;
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
const viy2ValueList_90dteyClear = () => {
  queryFormData.partsId = '';
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
const gridDealerCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridN0EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN3EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN4EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN5EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN6EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN7EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN8EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN9EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN10EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN11EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN12EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN13EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN14EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN15EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN16EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN17EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN18EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN19EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN20EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN21EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN22EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN23EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridN24EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const paginationCurrentChange = () => {
  if (total.value === 0) {
    return;
  }
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Button_apuEhVClick = () => {
  editGridDsApi.runAsync();
};
const viy2Button_apuEi6Click = () => {
  VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    showEditWin.value = false;
  });
};
onMounted(() => {
  paginationPageSize.value = PAGE_SIZE;
  queryFormData.pointId = uc.defaultPointId;
});
watch(() => queryFormData, (newVal, oldVal) => {
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
  resetTblResults();
  initializedFlag.value = true;
  queryFormData.pointId = uc.defaultPointId;
  exportFlag.value = true;
  calculateFlag.value = true;
  paginationPageSize.value = PAGE_SIZE;
};
const resetTblResults = () => {
  gridDs.value.content = [];
  total.value = 0;
  paginationCurrentPage.value = 1;
};
const onExport = () => {
  useApi(
    {
      url: '/master/cmm0509/exportPartsDemandExcel.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        const condition = {};
        merge(condition, queryFormData);
        condition.pageSize = paginationPageSize.value;
        condition.currentPage = paginationCurrentPage.value;
        return condition;
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'CMM0509_01.xlsx');
      },
    },
  );
};
const onDelRoleRow = (row) => {
  const message = `${t('label.partsNo')} ${t('label.demand')}`;
  VueMessageBox.confirm(t('M.C.00103', [message]), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    grid.value.remove(row);
    deleteGridDsApi.runAsync();
  }).catch(() => {
  });
};
const onEditWin = (row) => {
  showEditWin.value = true;
  resetDetailAside();
  nextTick(() => {
    demandDetailDsApi.runAsync({
      partsId: row.partsId,
      pointId: queryFormData.pointId,
      pageSize: paginationPageSize.value,
      currentPage: 1,
    });
  });
};
const resetDetailAside = () => {
// 清空侧边栏表单元素
  for (const key in detialFormData) {
    detialFormData[key] = ''; // 或者设置为初始值
  }
};
const onLeavePartsCode = async (code) => {
  nowPartsCode.value = code;
  await getPartsData();
};
const getPartsData = async () => {
  const data = await partsAutoFill2DsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData != null) {
    queryFormData.newPart = partsData.desc;
    queryFormData.partsId = partsData.id;
  } else {
    queryFormData.partsId = '';
  }
};
// async function logOut(){
// const idp = localStorage.getItem('idp');
// const { data: redirectUrl, headers } = await axios.get(`/oauth2/solid/logout/${idp}`, {
// baseURL,
// withCredentials: true,
// headers: {
// 'X-Auth-Token': getToken()?.accessToken,
// },
// });
// setToken({
// accessToken: headers.get('X-Auth-Token'),
// });
// window.location.href = redirectUrl;
// return false;
// }
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_zgSti"
      ref="viy2Row_zgSti"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="viy2Button_auYwHU" ref="viy2Button_auYwHU" icon-position="left" :disabled="exportFlag" @click="viy2Button_auYwHUClick">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_A5lhu" ref="viy2Button_A5lhu" icon-position="left" @click="viy2Button_A5lhuClick">
          {{ t('button.import') }}
        </VueButton>
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          {{ t('button.retrieve') }}
        </VueButton>
        <VueButton id="viy2Button_6KSCgk" ref="viy2Button_6KSCgk" icon-position="left" :disabled="calculateFlag" @click="viy2Button_6KSCgkClick">
          {{ t('button.calculate') }}
        </VueButton>
        <VueButton id="viy2Button_6KSBee" ref="viy2Button_6KSBee" icon-position="left" @click="viy2Button_6KSBeeClick">
          Delete All Parts
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_KPbYF"
      ref="viy2Flex_KPbYF"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_lOY8w"
          ref="viy2Row_lOY8w"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.point')"
              prop="pointId"
              :rules="rules.viy2Select_oLbtrRules"
            >
              <VueSelect
                id="viy2Select_oLbtr"
                ref="viy2Select_oLbtr"
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
              :label="t('label.parts')"
              prop="newPart"
            >
              <VueValueList
                :use-common-popover="true"
                :use-common-popup="true"
                id="viy2ValueList_90dtey"
                aside-size="60%"
                ref="viy2ValueList_90dtey"
                :toggle-popover-on-click="queryFormData.newPart.length > 3"
                v-model="queryFormData.newPart"
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
                @leave="viy2ValueList_90dteyLeave"
                @clear="viy2ValueList_90dteyClear"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_9GuEdp"
                    ref="viy2Row_9GuEdp"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_9GuEdq" ref="viy2Text_9GuEdq" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_KPfpG"
        ref="viy2Flex_KPfpG"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" height="100%" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_soVPC"
            ref="viy2Row_soVPC"
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
          <VueInputColumn
            :edit-render="gridDealerCodeEditRender"
            field="dealerCode"
            aggregate="sum"
            show-overflow="tooltip"
            :title="t('label.dealerCode')"
            width="120px"
          />
          <VueInputColumn
            :edit-render="gridPointCodeEditRender"
            field="pointCode"
            aggregate="sum"
            show-overflow="tooltip"
            :title="t('label.pointCode')"
            width="110px"
          />
          <VueInputColumn
            :formatter="gridPartsNoFormatter"
            :edit-render="gridPartsNoEditRender"
            field="partsNo"
            aggregate="sum"
            show-overflow="tooltip"
            :title="t('label.partsNo')"
            width="150px"
          />
          <VueNumberColumn
            :edit-render="gridN0EditRender"
            field="n0"
            align="right"
            :title="t('label.n')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN1EditRender"
            field="n1"
            align="right"
            :title="t('label.n1')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN2EditRender"
            field="n2"
            align="right"
            :title="t('label.n2')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN3EditRender"
            field="n3"
            align="right"
            :title="t('label.n3')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN4EditRender"
            field="n4"
            align="right"
            :title="t('label.n4')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN5EditRender"
            field="n5"
            align="right"
            :title="t('label.n5')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN6EditRender"
            field="n6"
            align="right"
            :title="t('label.n6')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN7EditRender"
            field="n7"
            align="right"
            :title="t('label.n7')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN8EditRender"
            field="n8"
            align="right"
            :title="t('label.n8')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN9EditRender"
            field="n9"
            align="right"
            :title="t('label.n9')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN10EditRender"
            field="n10"
            align="right"
            :title="t('label.n10')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN11EditRender"
            field="n11"
            align="right"
            :title="t('label.n11')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN12EditRender"
            field="n12"
            align="right"
            :title="t('label.n12')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN13EditRender"
            field="n13"
            align="right"
            :title="t('label.n13')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN14EditRender"
            field="n14"
            align="right"
            :title="t('label.n14')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN15EditRender"
            field="n15"
            align="right"
            :title="t('label.n15')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN16EditRender"
            field="n16"
            align="right"
            :title="t('label.n16')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN17EditRender"
            field="n17"
            align="right"
            :title="t('label.n17')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN18EditRender"
            field="n18"
            align="right"
            :title="t('label.n18')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN19EditRender"
            field="n19"
            align="right"
            :title="t('label.n18')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN20EditRender"
            field="n20"
            align="right"
            :title="t('label.n20')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN21EditRender"
            field="n21"
            align="right"
            :title="t('label.n21')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN22EditRender"
            field="n22"
            align="right"
            :title="t('label.n22')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN23EditRender"
            field="n23"
            align="right"
            :title="t('label.n23')"
            width="65px"
          />
          <VueNumberColumn
            :edit-render="gridN24EditRender"
            field="n24"
            align="right"
            :title="t('label.n24')"
            width="65px"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="80px"
            :buttons="gridViy2TableButtonColumn_XgHkHButtons"
          />
        </VueTable>
      </VueFlex>
      <VueRow
        id="viy2Row_64P9Cy"
        ref="viy2Row_64P9Cy"
        :gutter="15"
      >
        <VueCol
          item-key="item"
          align="left"
          :inline="true"
          :md="{ span: 14 }"
        />
        <VueCol
          item-key="item"
          align="left"
          :inline="true"
          :md="{ span: 10 }"
        >
          <VuePagination
            id="pagination"
            ref="pagination"
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :background="true"
            :small="true"
            :total="total || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
    <VueAside
      id="editAside"
      ref="editAside"
      v-model="showEditWin"
      :modal="true"
      :with-header="false"
      size="50%"
      direction="btt"
      :close-on-click-modal="false"
    >
      <VueRow
        id="titleRow"
        ref="titleRow"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueText id="viy2Text_apuEhU" ref="viy2Text_apuEhU" class="aside-title-text">
            Parts Demand Maintenance Detail
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          class="aside-title-button"
          :md="{ span: 12 }"
        >
          <VueButton id="viy2Button_apuEhV" ref="viy2Button_apuEhV" icon-position="left" type="info" @click="viy2Button_apuEhVClick">
            {{ t('button.confirm') }}
          </VueButton>
          <VueButton id="viy2Button_apuEi6" ref="viy2Button_apuEi6" icon-position="left" type="text" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_apuEi6Click" />
        </VueCol>
      </VueRow>
      <VueForm
        id="detialForm"
        ref="detialForm"
        class="margin-top-div0 except-height-css"
        :model="detialFormData"
      >
        <VueRow
          id="viy2Row_apuUdO"
          ref="viy2Row_apuUdO"
        >
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.dealerCode')"
              prop="dealerCode"
            >
              <VueInput
                id="viy2InputBox_12yQgq"
                ref="viy2InputBox_12yQgq"
                v-model="detialFormData.dealerCode"
                :disabled="true"
                :readonly="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.pointCode')"
              prop="pointCode"
            >
              <VueInput
                id="viy2InputBox_apE01s"
                ref="viy2InputBox_apE01s"
                v-model="detialFormData.pointCode"
                :readonly="true"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.partsNo')"
              prop="partsNo"
            >
              <VueInput
                id="viy2InputBox_apG4Iu"
                ref="viy2InputBox_apG4Iu"
                v-model="detialFormData.partsNo"
                :readonly="true"
                :disabled="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n')"
              prop="n0"
            >
              <VueInputNumber
                id="viy2InputNumber_12zloO"
                ref="viy2InputNumber_12zloO"
                v-model="detialFormData.n0"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 20 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n1')"
              prop="n1"
            >
              <VueInputNumber
                id="viy2InputNumber_apNgBi"
                ref="viy2InputNumber_apNgBi"
                v-model="detialFormData.n1"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n2')"
              prop="n2"
            >
              <VueInputNumber
                id="viy2InputNumber_apNlfS"
                ref="viy2InputNumber_apNlfS"
                v-model="detialFormData.n2"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n3')"
              prop="n3"
            >
              <VueInputNumber
                id="viy2InputNumber_apNmzE"
                ref="viy2InputNumber_apNmzE"
                v-model="detialFormData.n3"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n4')"
              prop="n4"
            >
              <VueInputNumber
                id="viy2InputNumber_apNmGE"
                ref="viy2InputNumber_apNmGE"
                v-model="detialFormData.n4"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n5')"
              prop="n5"
            >
              <VueInputNumber
                id="viy2InputNumber_apNoHK"
                ref="viy2InputNumber_apNoHK"
                v-model="detialFormData.n5"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n6')"
              prop="n6"
            >
              <VueInputNumber
                id="viy2InputNumber_apOciU"
                ref="viy2InputNumber_apOciU"
                v-model="detialFormData.n6"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n7')"
              prop="n7"
            >
              <VueInputNumber
                id="viy2InputNumber_apMqqu"
                ref="viy2InputNumber_apMqqu"
                v-model="detialFormData.n7"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n8')"
              prop="n8"
            >
              <VueInputNumber
                id="viy2InputNumber_apMtzu"
                ref="viy2InputNumber_apMtzu"
                v-model="detialFormData.n8"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n9')"
              prop="n9"
            >
              <VueInputNumber
                id="viy2InputNumber_apMtGa"
                ref="viy2InputNumber_apMtGa"
                v-model="detialFormData.n9"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n10')"
              prop="n10"
            >
              <VueInputNumber
                id="viy2InputNumber_apNnEq"
                ref="viy2InputNumber_apNnEq"
                v-model="detialFormData.n10"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n11')"
              prop="n11"
            >
              <VueInputNumber
                id="viy2InputNumber_apNoT2"
                ref="viy2InputNumber_apNoT2"
                v-model="detialFormData.n11"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n12')"
              prop="n12"
            >
              <VueInputNumber
                id="viy2InputNumber_apOaxe"
                ref="viy2InputNumber_apOaxe"
                v-model="detialFormData.n12"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n13')"
              prop="n13"
            >
              <VueInputNumber
                id="viy2InputNumber_apMoyw"
                ref="viy2InputNumber_apMoyw"
                v-model="detialFormData.n13"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n14')"
              prop="n14"
            >
              <VueInputNumber
                id="viy2InputNumber_apMrki"
                ref="viy2InputNumber_apMrki"
                v-model="detialFormData.n14"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n15')"
              prop="n15"
            >
              <VueInputNumber
                id="viy2InputNumber_apMtfO"
                ref="viy2InputNumber_apMtfO"
                v-model="detialFormData.n15"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n16')"
              prop="n16"
            >
              <VueInputNumber
                id="viy2InputNumber_apMtpu"
                ref="viy2InputNumber_apMtpu"
                v-model="detialFormData.n16"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n17')"
              prop="n17"
            >
              <VueInputNumber
                id="viy2InputNumber_apK20o"
                ref="viy2InputNumber_apK20o"
                v-model="detialFormData.n17"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n18')"
              prop="n18"
            >
              <VueInputNumber
                id="viy2InputNumber_apK0VC"
                ref="viy2InputNumber_apK0VC"
                v-model="detialFormData.n18"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n19')"
              prop="n19"
            >
              <VueInputNumber
                id="viy2InputNumber_apGZRE"
                ref="viy2InputNumber_apGZRE"
                v-model="detialFormData.n19"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n20')"
              prop="n20"
            >
              <VueInputNumber
                id="viy2InputNumber_apGXKG"
                ref="viy2InputNumber_apGXKG"
                v-model="detialFormData.n20"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n21')"
              prop="n21"
            >
              <VueInputNumber
                id="viy2InputNumber_apKqzi"
                ref="viy2InputNumber_apKqzi"
                v-model="detialFormData.n21"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n22')"
              prop="n22"
            >
              <VueInputNumber
                id="viy2InputNumber_apKnOE"
                ref="viy2InputNumber_apKnOE"
                v-model="detialFormData.n22"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n23')"
              prop="n23"
            >
              <VueInputNumber
                id="viy2InputNumber_apKoIC"
                ref="viy2InputNumber_apKoIC"
                v-model="detialFormData.n23"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 4 }"
          >
            <VueFormItem
              :label="t('label.n24')"
              prop="n24"
            >
              <VueInputNumber
                id="viy2InputNumber_apKpEm"
                ref="viy2InputNumber_apKpEm"
                v-model="detialFormData.n24"
                text-align="right"
                :precision="0"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VueAside>
    <VueDialog
      id="viy2Dialog_13AOSx"
      ref="viy2Dialog_13AOSx"
      v-model="importWindowShowFlag"
      :destroy-on-close="true"
      :close-on-click-modal="false"
      title="File Import"
    >
      <template #default>
        <viy2Subpage_13B2uUPage
          id="viy2Subpage_13B2uU"
          ref="viy2Subpage_13B2uU"
          :import-info="importInfo"
        />
      </template>
    </VueDialog>
  </VueForm>
</template>
