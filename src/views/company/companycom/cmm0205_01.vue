<script setup>
import { IconCloseBold, IconDelete, IconEdit, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import {
  point_column, point_query_shop_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const deliveryPointList = ref();
let provinceList = [];
let cityList = [];
defineOptions({
  name: 'cmm0205_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Flex_XaYTT = ref();
const viy2Form_sqSNZ = ref();
const viy2Flex_Xb0NL = ref();
const grid = ref();
const viy2Row_3IBtOD = ref();
const viy2CheckBox_Bc2OdA = ref();
const viy2CheckBox_Bc2Ofq = ref();
const pointAside = ref();
const consumerInfoTitle = ref();
const viy2Button_3X1rff = ref();
const viy2Button_3X1rg4 = ref();
const pointAsideTabs = ref();
const pointForm = ref();
const viy2Row_3XPLUQ = ref();
const viy2InputBox_43kN24 = ref();
const viy2InputBox_4OmHWs = ref();
const viy2DateTimePicker_4OFBGU = ref();
const viy2DateTimePicker_42VT1m = ref();
const viy2InputBox_42YAnu = ref();
const viy2Row_AcEc7 = ref();
const viy2CheckBox_AbLAv = ref();
const viy2CheckBox_Ac41V = ref();
const viy2Select_tWWRf = ref();
const viy2Select_4PxBBu = ref();
const viy2InputBox_43qtAs = ref();
const viy2InputBox_43rgDo = ref();
const viy2InputBox_43rVg2 = ref();
const viy2InputBox_43v2FU = ref();
const viy2InputBox_43vSWS = ref();
const viy2Row_DwMf8o = ref();
const viy2Button_DwMfrL = ref();
const deliveryPointGrid = ref();
const formData = reactive({
});
const viy2Form_sqSNZData = reactive({
});
const pointFormData = reactive({
  facilityCd: '', facilityNm: '', fromDate: '', toDate: '', numberingIdCd: '', shop: false, wsDealerSign: false, provinceId: '', cityId: '', address1: '', address2: '', postCode: '', contactTel: '', contactFax: '',
});
const rules = reactive({
  viy2InputBox_4OmHWsRules: [
    {
      required: true,
      message: t('errors.required', [t('label.pointName')]),
    },
  ],
  viy2Select_tWWRfRules: [
    {
      required: true,
      message: t('errors.required', [t('label.province')]),
    },
  ],
  viy2Select_4PxBBuRules: [
    {
      required: true,
      message: t('errors.required', [t('label.city')]),
    },
  ],
});
const showPointAside = ref(false);
const pointAsideTabsActiveName = ref('pointAsideTabsTab0');
const viy2CheckBox_AbLAvOpts = [
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
const viy2CheckBox_Ac41VOpts = [
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
const deliveryPointGridEditConfig = reactive({
  trigger: 'click',
  mode: 'row',
  beforeEditMethod: (obj) => {
    return obj.row.pointId == '';
  },
});
const deliveryPointGridMouseConfig = reactive({
  extension: true,
});
const deliveryPointGridViy2TableButtonColumn_ohtaaButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelPointRow,
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
const viy2CheckBox_Bc2OdAOpts = [
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
const viy2CheckBox_Bc2OfqOpts = [
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
const gridViy2TableButtonColumn_odGQQButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onEditRow,
      title: 'Edit',
    },
  ];
};
const pointListApi = useApi({
  url: '/master/cmm0205/findPointList.json',
  method: 'post',
});
const pointList = pointListApi.data;
const cityDsApi = useApi({
  url: '/common/helper/getCityList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    cityList = data;
  },
});
const cityDs = cityDsApi.data;
const updatePointApi = useApi({
  url: '/master/cmm0205/updatePoint.json',
  method: 'post',
  data: () => {
    pointFormData.deliveryPointTable = deliveryPointGrid.value.getRecordset();
    return pointFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    showPointAside.value = false;
    pointListApi.runAsync();
  },
  manual: true,
});
const updatePoint = updatePointApi.data;
const provinceDsApi = useApi({
  url: '/common/helper/getProvinceList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    provinceList = data;
  },
});
const provinceDs = provinceDsApi.data;
const pointDetailApi = useApi({
  url: '/master/cmm0205/getPointDetail.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    merge(pointFormData, data);
    deliveryPointList.value = data.deliveryPointList;
  },
  manual: true,
});
const pointDetail = pointDetailApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm('Are you sure to reset this page?')
    .then(() => {
      pointListApi.runAsync();
    }).catch(() => {
    });
};
const gridPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCopy2_copy0_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy0_copy0_copy0_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridAreaEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTelephoneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEffectiveDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'YYYYMMDD',
      format: 'DD/MM/YYYY',
    },
  };
});
const gridExpiredDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'YYYYMMDD',
      format: 'DD/MM/YYYY',
    },
  };
});
const viy2Button_3X1rffClick = () => {
  pointForm.value.validate((valid) => {
    if (valid) {
      deliveryPointGrid.value.validate((valid) => {
        if (!valid) {
          updatePointApi.runAsync();
        } else {
          pointAsideTabsActiveName.value = 'pointAsideTabsTab1';
        }
      });
    } else {
      pointAsideTabsActiveName.value = 'pointAsideTabsTab0';
    }
  });
};
const viy2Button_3X1rg4Click = () => {
  if (pointFormData.action !== 'VIEW') {
    VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      showPointAside.value = false;
    });
  }
};
const viy2Select_tWWRfChange = (value, data) => {
  pointFormData.cityId = '';
  cityDs.value = [];
  // 若provinceHelper未选中则cityHelper显示未空
  if (pointFormData.provinceId !== '') {
    for (const key in cityList) {
      if (cityList[key].parentGeographyId === pointFormData.provinceId) {
        cityDs.value.push(cityList[key]);
      }
    }
  }
  // 设置省的名称
  for (const key in provinceList) {
    if (provinceList[key].geographyId === value) {
      pointFormData.provinceNm = provinceList[key].geographyNm;
      break;
    }
  }
};
const viy2Select_4PxBBuChange = (value) => {
// 设置省的名称
  for (const key in cityList) {
    if (cityList[key].geographyId === value) {
      pointFormData.cityNm = cityList[key].geographyNm;
      break;
    }
  }
};
const viy2Button_DwMfrLClick = () => {
  const row = { pointId: '', pointCd: '', pointNm: '' };
  deliveryPointGrid.value.insertAt(row, -1).then((newRow) => {
    deliveryPointGrid.value.setCurrentRow(newRow.row);
  });
};
const deliveryPointGridFacilityCdSelect = (obj, params) => {
  obj.row.facilityId = params.id;
  obj.row.facilityCd = params.code;
  obj.row.facilityNm = params.name;
};
const deliveryPointGridFacilityCdEvents = reactive({
  select: deliveryPointGridFacilityCdSelect,
});
const deliveryPointGridFacilityCdEditRender = computed(() => {
  return {
    enabled: true,
    events: deliveryPointGridFacilityCdEvents,
    attrs: {
      clearable: true,
      usePopover: true,
      popoverWidth: 500,
      useCommonPopover: true,
      popoverColumns: point_column,
      popoverQueryMethod: point_query_shop_method,
      togglePopoverOnClick: true,
      asideSize: '50%',
    },
  };
});
const deliveryPointGridFacilityNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
});
const onEditRow = (row) => {
  showPointAside.value = true;
  resetPointDetailAside();
  nextTick(() => {
    pointDetailApi.runAsync({
      facilityId: row.pointId,
    });
  });
};
const resetPointDetailAside = () => {
  resetPointDetailFormData();
  deliveryPointList.value = [];
  pointAsideTabsActiveName.value = 'pointAsideTabsTab0';
};
const resetPointDetailFormData = () => {
  const pointFormElement = pointForm.value;
  if (pointFormElement && pointFormElement.resetFields) {
    pointFormElement.resetFields();
    for (const key in pointFormData) {
      pointFormData[key] = '';
    }
  }
};
const onDelPointRow = (row) => {
  deliveryPointGrid.value.remove(row);
};
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
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      />
    </VueRow>
    <VueFlex
      id="viy2Flex_XaYTT"
      ref="viy2Flex_XaYTT"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="viy2Form_sqSNZ"
        ref="viy2Form_sqSNZ"
        class="margin-top-div0"
        :model="viy2Form_sqSNZData"
      />
      <VueFlex
        id="viy2Flex_Xb0NL"
        ref="viy2Flex_Xb0NL"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" :data="pointList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_3IBtOD"
            ref="viy2Row_3IBtOD"
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
          <VueTemplateColumn
            :edit-render="gridPointCdEditRender"
            field="pointCd"
            :sortable="true"
            :title="t('label.pointCode')"
            width="130px"
          />
          <VueTemplateColumn
            :edit-render="gridPointNmEditRender"
            field="pointNm"
            :sortable="true"
            :title="t('label.pointName')"
            min-width="150px"
          />
          <VueTemplateColumn
            :edit-render="gridCopy2_copy0_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
            align="center"
            :sortable="true"
            :title="t('label.WSDealerSign')"
            width="120px"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_Bc2OdA"
                ref="viy2CheckBox_Bc2OdA"
                v-model="scope.row.wsDealerSign"
                :disabled="true"
                true-label="Y"
                false-label="N"
              />
            </template>
          </VueTemplateColumn>
          <VueTemplateColumn
            :edit-render="gridCopy0_copy0_copy0_copy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
            align="center"
            :sortable="true"
            :title="t('label.shop')"
            width="80px"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_Bc2Ofq"
                ref="viy2CheckBox_Bc2Ofq"
                v-model="scope.row.shop"
                :disabled="true"
                true-label="Y"
                false-label="N"
              />
            </template>
          </VueTemplateColumn>
          <VueInputColumn
            :edit-render="gridAreaEditRender"
            field="area"
            aggregate="sum"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.area')"
            min-width="140px"
          />
          <VueInputColumn
            :edit-render="gridTelephoneEditRender"
            field="telephone"
            aggregate="sum"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.telephone')"
            width="130px"
          />
          <VueDateTimeColumn
            :edit-render="gridEffectiveDateEditRender"
            field="effectiveDate"
            align="center"
            :sortable="true"
            :title="t('label.effectiveDate')"
            width="125px"
          />
          <VueDateTimeColumn
            :edit-render="gridExpiredDateEditRender"
            field="expiredDate"
            align="center"
            :sortable="true"
            :title="t('label.expiredDate')"
            width="120px"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="40px"
            :buttons="gridViy2TableButtonColumn_odGQQButtons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="pointAside"
      ref="pointAside"
      v-model="showPointAside"
      :modal="true"
      :close-on-click-modal="false"
      size="60%"
      :with-header="false"
      :show-close="false"
    >
      <VueRow
        id="consumerInfoTitle"
        ref="consumerInfoTitle"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          class="aside-title-text"
          :md="{ span: 10 }"
        >
          <VueText id="viy2Text_3X1rdi" ref="viy2Text_3X1rdi" size="large">
            {{ t('title.pointInfoMaintenance_02') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          class="aside-title-button"
          :md="{ span: 14 }"
        >
          <VueButton id="viy2Button_3X1rff" ref="viy2Button_3X1rff" icon-position="left" type="info" @click="viy2Button_3X1rffClick">
            {{ t('button.confirm') }}
          </VueButton>
          <VueButton id="viy2Button_3X1rg4" ref="viy2Button_3X1rg4" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_3X1rg4Click" />
        </VueCol>
      </VueRow>
      <VueTabs
        id="pointAsideTabs"
        ref="pointAsideTabs"
        v-model="pointAsideTabsActiveName"
      >
        <VueTabPane
          name="pointAsideTabsTab0"
          :label="t('label.tablePointInfo')"
        >
          <VueForm
            id="pointForm"
            ref="pointForm"
            label-width="185px"
            :model="pointFormData"
          >
            <VueRow
              id="viy2Row_3XPLUQ"
              ref="viy2Row_3XPLUQ"
            >
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.pointCode')"
                  prop="facilityCd"
                >
                  <VueInput
                    id="viy2InputBox_43kN24"
                    ref="viy2InputBox_43kN24"
                    v-model="pointFormData.facilityCd"
                    :disabled="true"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.pointName')"
                  prop="facilityNm"
                  :rules="rules.viy2InputBox_4OmHWsRules"
                >
                  <VueInput
                    id="viy2InputBox_4OmHWs"
                    ref="viy2InputBox_4OmHWs"
                    v-model="pointFormData.facilityNm"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.effectiveDate')"
                  prop="fromDate"
                >
                  <VueDatePicker
                    id="viy2DateTimePicker_4OFBGU"
                    ref="viy2DateTimePicker_4OFBGU"
                    v-model="pointFormData.fromDate"
                    :disabled="true"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.expiredDate')"
                  prop="toDate"
                >
                  <VueDatePicker
                    id="viy2DateTimePicker_42VT1m"
                    ref="viy2DateTimePicker_42VT1m"
                    v-model="pointFormData.toDate"
                    :disabled="true"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.pointIdentificationMark')"
                  prop="numberingIdCd"
                >
                  <VueInput
                    id="viy2InputBox_42YAnu"
                    ref="viy2InputBox_42YAnu"
                    v-model="pointFormData.numberingIdCd"
                    :disabled="true"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueRow
                  id="viy2Row_AcEc7"
                  ref="viy2Row_AcEc7"
                >
                  <VueCol
                    item-key="item"
                    :md="{ span: 6 }"
                  >
                    <VueFormItem
                      :label="t('label.pointType')"
                      label-width="170px"
                      prop="shop"
                    >
                      <VueCheckbox
                        id="viy2CheckBox_AbLAv"
                        ref="viy2CheckBox_AbLAv"
                        v-model="pointFormData.shop"
                        true-label="Y"
                        false-label="N"
                      >
                        {{ t('label.shop') }}
                      </VueCheckbox>
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      prop="wsDealerSign"
                    >
                      <VueCheckbox
                        id="viy2CheckBox_Ac41V"
                        ref="viy2CheckBox_Ac41V"
                        v-model="pointFormData.wsDealerSign"
                        :disabled="true"
                        true-label="Y"
                        false-label="N"
                      >
                        {{ t('label.WSDealerSign') }}
                      </VueCheckbox>
                    </VueFormItem>
                  </VueCol>
                </VueRow>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.province')"
                  prop="provinceId"
                  :rules="rules.viy2Select_tWWRfRules"
                >
                  <VueSelect
                    id="viy2Select_tWWRf"
                    ref="viy2Select_tWWRf"
                    v-model="pointFormData.provinceId"
                    :style="{ width: '250px' }"
                    :clearable="true"
                    :options="provinceDs"
                    :props="{
                      label: 'geographyNm',
                      value: 'geographyId',
                    }"
                    @change="viy2Select_tWWRfChange"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.city')"
                  prop="cityId"
                  :rules="rules.viy2Select_4PxBBuRules"
                >
                  <VueSelect
                    id="viy2Select_4PxBBu"
                    ref="viy2Select_4PxBBu"
                    v-model="pointFormData.cityId"
                    :style="{ width: '250px' }"
                    :clearable="true"
                    :options="cityDs"
                    :props="{
                      label: 'geographyNm',
                      value: 'geographyId',
                    }"
                    @change="viy2Select_4PxBBuChange"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.address1')"
                  prop="address1"
                >
                  <VueInput
                    id="viy2InputBox_43qtAs"
                    ref="viy2InputBox_43qtAs"
                    v-model="pointFormData.address1"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.address2')"
                  prop="address2"
                >
                  <VueInput
                    id="viy2InputBox_43rgDo"
                    ref="viy2InputBox_43rgDo"
                    v-model="pointFormData.address2"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.postCode')"
                  prop="postCode"
                >
                  <VueInput
                    id="viy2InputBox_43rVg2"
                    ref="viy2InputBox_43rVg2"
                    v-model="pointFormData.postCode"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.telephone')"
                  prop="contactTel"
                >
                  <VueInput
                    id="viy2InputBox_43v2FU"
                    ref="viy2InputBox_43v2FU"
                    v-model="pointFormData.contactTel"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.fax')"
                  prop="contactFax"
                >
                  <VueInput
                    id="viy2InputBox_43vSWS"
                    ref="viy2InputBox_43vSWS"
                    v-model="pointFormData.contactFax"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              />
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              />
            </VueRow>
          </VueForm>
        </VueTabPane>
        <VueTabPane
          name="pointAsideTabsTab1"
          :label="t('label.deliveryPoint')"
        >
          <VueRow
            id="viy2Row_DwMf8o"
            ref="viy2Row_DwMf8o"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_DwMfrL" ref="viy2Button_DwMfrL" icon-position="left" class="icon-button-width" @click="viy2Button_DwMfrLClick">
                +
              </VueButton>
            </VueCol>
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            />
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueTable id="deliveryPointGrid" ref="deliveryPointGrid" class="margin-top-aside" :data="deliveryPointList" :edit-config="deliveryPointGridEditConfig" :mouse-config="deliveryPointGridMouseConfig">
                <VueIndexColumn
                  align="center"
                  width="50px"
                  min-width="50px"
                  header-align="center"
                />
                <VueValueListColumn
                  :edit-render="deliveryPointGridFacilityCdEditRender"
                  field="facilityCd"
                  :clearable="true"
                  :toggle-popover-on-click="true"
                  :sortable="true"
                  :title="t('label.pointCode')"
                  width="140px"
                />
                <VueInputColumn
                  :edit-render="deliveryPointGridFacilityNmEditRender"
                  field="facilityNm"
                  :sortable="true"
                  :title="t('label.pointName')"
                  min-width="150px"
                />
                <VueButtonColumn
                  align="center"
                  width="60px"
                  :buttons="deliveryPointGridViy2TableButtonColumn_ohtaaButtons"
                />
              </VueTable>
            </VueCol>
          </VueRow>
        </VueTabPane>
      </VueTabs>
    </VueAside>
  </VueForm>
</template>
