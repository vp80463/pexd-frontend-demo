<script setup>
import { IconCloseBold, IconDelete, IconEdit, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { get, merge } from 'lodash-es';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
let provinceList = [];
let cityList = [];
const pointList = ref();
let defaultGender = '';
const editFlag = ref(false);
defineOptions({
  name: 'cmm0202_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_bqf92 = ref();
const viy2Flex_LRPK1 = ref();
const viy2Form_svH40 = ref();
const viy2Flex_LSe9q = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2CheckBox_d5nix = ref();
const employeeAside = ref();
const employeeInfoTitle = ref();
const viy2Button_dgrrB = ref();
const viy2Button_dgXs3 = ref();
const employeeAsideForm = ref();
const employeeAsideTabs = ref();
const viy2Row_dpOxV = ref();
const viy2InputBox_2a0hVI = ref();
const viy2Select_ds5DF = ref();
const viy2InputBox_2acZZ5 = ref();
const viy2InputBox_2aSGm0 = ref();
const viy2InputBox_2aSup4 = ref();
const viy2Radio_dvNhP = ref();
const viy2Row_2acZYU = ref();
const viy2DateTimePicker_iZtPo = ref();
const viy2DateTimePicker_33Xzg2 = ref();
const viy2Select_hck1Y = ref();
const viy2InputBox_2buXeU = ref();
const viy2Select_2M1xta = ref();
const viy2InputBox_2bv94M = ref();
const viy2InputBox_2Lfhcc = ref();
const viy2InputBox_2LftWw = ref();
const viy2InputBox_2LfDd2 = ref();
const viy2Row_hFhqc = ref();
const viy2Button_hFXpZ = ref();
const pointInfoGrid = ref();
const formData = reactive({
});
const viy2Form_svH40Data = reactive({
});
const employeeAsideFormData = reactive({
  personCd: '', personType: '', firstNm: '', middleNm: '', lastNm: '', genderType: 'S005MALE', fromDate: '', toDate: '', provinceId: '', address1: '', cityId: '', address2: '', faxNo: '', postCode: '', contactTel: '',
});
const rules = reactive({
  viy2InputBox_2a0hVIRules: [
    {
      required: true,
      message: t('errors.required', [t('label.employeeCd')]),
    },
  ],
  viy2InputBox_2acZZ5Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.firstName')]),
    },
  ],
  viy2InputBox_2aSup4Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.lastName')]),
    },
  ],
  viy2DateTimePicker_iZtPoRules: [
    {
      required: true,
      message: t('errors.required', [t('label.employedDate')]),
    },
  ],
  viy2DateTimePicker_33Xzg2Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.demissionDate')]),
    },
  ],
  viy2Select_hck1YRules: [
    {
      required: true,
      message: t('errors.required', [t('label.province')]),
    },
  ],
  viy2Select_2M1xtaRules: [
    {
      required: true,
      message: t('errors.required', [t('label.city')]),
    },
  ],
});
const pointInfoGridRules = {
  facilityId: [{
    required: true,
    message: t('errors.required', [t('label.point')]),
  },
  ],
};
const showEmployeeAside = ref(false);
const employeeAsideTabsActiveName = ref('employeeAsideTabsTab0');
const pointInfoGridEditConfig = reactive({
  trigger: 'click',
});
const pointInfoGridMouseConfig = reactive({
  extension: true,
});
const pointInfoGridViy2TableButtonColumn_hHsy4Buttons = (scope) => {
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
const viy2CheckBox_d5nixOpts = [
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
const gridViy2TableButtonColumn_sKVR8Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onEditRow,
    },
  ];
};
const genderTypeDsApi = useApi({
  url: '/common/helper/getGenderTypeList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    defaultGender = data[0].codeDbid;
  },
});
const genderTypeDs = genderTypeDsApi.data;
const gridDsApi = useApi({
  url: '/master/cmm0202/getEmployeeInfoList.json',
  method: 'post',
});
const gridDs = gridDsApi.data;
const provinceDsApi = useApi({
  url: '/common/helper/getProvinceList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    provinceList = data;
  },
  initialData: {
    data: [],
  },
});
const provinceDs = provinceDsApi.data;
const saveOrUpdateEmployeeDsApi = useApi({
  url: '/master/cmm0202/newModifyEmployee.json',
  method: 'post',
  data: () => {
    employeeAsideFormData.pointList = pointInfoGrid.value.getTableData().fullData;
    return employeeAsideFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    showEmployeeAside.value = false;
    gridDsApi.runAsync();
  },
  manual: true,
});
const saveOrUpdateEmployeeDs = saveOrUpdateEmployeeDsApi.data;
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S007'],
}, {
  initialData: {
    S007: [],
  },
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const employeeDetailApi = useApi({
  url: '/master/cmm0202/getEmployeeDetail.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    merge(employeeAsideFormData, data);
    pointList.value = data.pointList;
  },
  manual: true,
});
const employeeDetail = employeeDetailApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP_ALL',
  },
});
const pointDs = pointDsApi.data;
const cityDsApi = useApi({
  url: '/common/helper/getCityList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    cityList = data;
  },
  initialData: {
    data: [],
  },
});
const cityDs = cityDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetTblResults();
  }).catch(() => {
  });
};
const viy2Button_bqf92Click = () => {
  showEmployeeAside.value = true;
  resetEmployeeDetailAside();
  employeeAsideFormData.genderType = defaultGender;
  editFlag.value = false;
};
const gridCellDblclick = (obj) => {
  onEditRow(obj.row);
};
const gridPersonCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPersonNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridViy2TableTemplateColumn_d563uEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridUserCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFromDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridToDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const viy2Button_dgrrBClick = () => {
  employeeAsideForm.value.validate((valid) => {
    if (valid) {
      pointInfoGrid.value.validate((valid) => {
        if (!valid) {
          saveOrUpdateEmployeeDsApi.runAsync();
        }
      });
    } else {
      employeeAsideTabsActiveName.value = 'employeeAsideTabsTab0';
    }
  });
};
const viy2Button_dgXs3Click = () => {
  if (employeeAsideFormData.action !== 'VIEW') {
    VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      showEmployeeAside.value = false;
    });
  }
};
const viy2Select_hck1YChange = (value, data) => {
  employeeAsideFormData.cityId = '';
  cityDs.value = [];
  // 若provinceHelper未选中则cityHelper显示未空
  if (employeeAsideFormData.provinceId !== '') {
    for (const key in cityList) {
      if (cityList[key].parentGeographyId === employeeAsideFormData.provinceId) {
        cityDs.value.push(cityList[key]);
      }
    }
  }
  // 设置省的名称
  for (const key in provinceList) {
    if (provinceList[key].geographyId === value) {
      employeeAsideFormData.provinceNm = provinceList[key].geographyNm;
      break;
    }
  }
};
const viy2Select_2M1xtaChange = (value) => {
// 设置省的名称
  for (const key in cityList) {
    if (cityList[key].geographyId === value) {
      employeeAsideFormData.cityNm = cityList[key].geographyNm;
      break;
    }
  }
};
const viy2Button_hFXpZClick = () => {
  const row = { pointId: '', pointId: '', pointName: '' };
  pointInfoGrid.value.insertAt(row, -1).then((newRow) => {
    pointInfoGrid.value.setCurrentRow(newRow.row);
  });
};
const pointInfoGridFacilityIdEditRender = computed(() => {
  return {
    enabled: true,
    options: pointDs.value,
    displayMember: 'desc',
    valueMember: 'id',
    attrs: {
      clearable: true,
      filterable: true,
    },
  };
});
onMounted(() => {
});
const resetTblResults = () => {
  gridDsApi.runAsync();
};
const closeEmployeeAside = () => {
  showEmployeeAside.value = false;
};
const resetEmployeeDetailAside = () => {
  resetEmployeeAsideFormData();
  if (pointList.value) {
    pointList.value.splice(0);
    pointList.value = [];
  } else {
    pointList.value = [];
  }
  employeeAsideTabsActiveName.value = 'employeeAsideTabsTab0';
};
const resetEmployeeAsideFormData = () => {
  const employeeAsideFormElement = employeeAsideForm.value;
  if (employeeAsideFormElement && employeeAsideFormElement.resetFields) {
    employeeAsideFormElement.resetFields();
    for (const key in employeeAsideFormData) {
      employeeAsideFormData[key] = '';
    }
  }
// 设置为初始值
};
const onEditRow = (row) => {
  showEmployeeAside.value = true;
  editFlag.value = true;
  resetEmployeeDetailAside();
  nextTick(() => {
    employeeDetailApi.runAsync({
      personId: row.personId,
    });
  });
};
const onDelPointRow = (row) => {
  pointInfoGrid.value.remove(row);
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
      >
        <VueButton id="viy2Button_bqf92" ref="viy2Button_bqf92" icon-position="left" @click="viy2Button_bqf92Click">
          {{ t('button.newEmployee') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_LRPK1"
      ref="viy2Flex_LRPK1"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="viy2Form_svH40"
        ref="viy2Form_svH40"
        class="margin-top-div"
        :model="viy2Form_svH40Data"
      />
      <VueFlex
        id="viy2Flex_LSe9q"
        ref="viy2Flex_LSe9q"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
            :edit-render="gridPersonCdEditRender"
            field="personCd"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.employeeCd')"
            width="145px"
          />
          <VueInputColumn
            :edit-render="gridPersonNmEditRender"
            field="personNm"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.employeeName')"
            width="200px"
          />
          <VueTemplateColumn
            :edit-render="gridViy2TableTemplateColumn_d563uEditRender"
            align="center"
            :sortable="true"
            :title="t('label.systemUser')"
            header-align="center"
            width="180px"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_d5nix"
                ref="viy2CheckBox_d5nix"
                v-model="scope.row.systemUser"
                :disabled="true"
                true-label="Y"
                false-label="N"
              />
            </template>
          </VueTemplateColumn>
          <VueInputColumn
            :edit-render="gridUserCdEditRender"
            field="userCd"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.userCode')"
            width="145px"
          />
          <VueDateTimeColumn
            :edit-render="gridFromDateEditRender"
            field="fromDate"
            align="center"
            :sortable="true"
            :title="t('label.employedDate')"
            width="145px"
          />
          <VueDateTimeColumn
            :edit-render="gridToDateEditRender"
            field="toDate"
            align="center"
            :sortable="true"
            :title="t('label.demissionDate')"
            width="160px"
          />
          <VueButtonColumn
            align="center"
            width="60px"
            :buttons="gridViy2TableButtonColumn_sKVR8Buttons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="employeeAside"
      ref="employeeAside"
      v-model="showEmployeeAside"
      :modal="true"
      size="60%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <VueRow
        id="employeeInfoTitle"
        ref="employeeInfoTitle"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          class="aside-title-text"
          :md="{ span: 10 }"
        >
          <VueText id="viy2Text_dcNUP" ref="viy2Text_dcNUP" size="large">
            {{ t('title.employeeInfoMaintenance_02') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          align="right"
          class="aside-title-button"
          :md="{ span: 14 }"
        >
          <VueButton id="viy2Button_dgrrB" ref="viy2Button_dgrrB" icon-position="left" type="info" @click="viy2Button_dgrrBClick">
            {{ t('button.confirm') }}
          </VueButton>
          <VueButton id="viy2Button_dgXs3" ref="viy2Button_dgXs3" icon-position="left" size="large" type="text" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_dgXs3Click" />
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueForm
            id="employeeAsideForm"
            ref="employeeAsideForm"
            :model="employeeAsideFormData"
          >
            <VueTabs
              id="employeeAsideTabs"
              ref="employeeAsideTabs"
              v-model="employeeAsideTabsActiveName"
            >
              <VueTabPane
                name="employeeAsideTabsTab0"
                :label="t('label.employee')"
              >
                <VueRow
                  id="viy2Row_dpOxV"
                  ref="viy2Row_dpOxV"
                >
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.employeeCd')"
                      label-width="150px"
                      prop="personCd"
                      :rules="rules.viy2InputBox_2a0hVIRules"
                    >
                      <VueInput
                        id="viy2InputBox_2a0hVI"
                        ref="viy2InputBox_2a0hVI"
                        v-model="employeeAsideFormData.personCd"
                        :formatter="(value) => value.toUpperCase()"
                        :parser="(value) => value.toUpperCase()"
                        :disabled="editFlag"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.mechanicYTALevel')"
                      label-width="150px"
                      prop="personType"
                    >
                      <VueSelect
                        id="viy2Select_ds5DF"
                        ref="viy2Select_ds5DF"
                        v-model="employeeAsideFormData.personType"
                        :clearable="true"
                        :options="get(mstCodeInfoDs, 'S007')"
                        :props="{
                          label: 'codeData1',
                          value: 'codeDbid',
                        }"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.firstName')"
                      label-width="150px"
                      prop="firstNm"
                      :rules="rules.viy2InputBox_2acZZ5Rules"
                    >
                      <VueInput
                        id="viy2InputBox_2acZZ5"
                        ref="viy2InputBox_2acZZ5"
                        v-model="employeeAsideFormData.firstNm"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.middleName')"
                      label-width="150px"
                      prop="middleNm"
                    >
                      <VueInput
                        id="viy2InputBox_2aSGm0"
                        ref="viy2InputBox_2aSGm0"
                        v-model="employeeAsideFormData.middleNm"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.lastName')"
                      label-width="150px"
                      prop="lastNm"
                      :rules="rules.viy2InputBox_2aSup4Rules"
                    >
                      <VueInput
                        id="viy2InputBox_2aSup4"
                        ref="viy2InputBox_2aSup4"
                        v-model="employeeAsideFormData.lastNm"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.gender')"
                      label-width="150px"
                      prop="genderType"
                    >
                      <VueRadioGroup
                        id="viy2Radio_dvNhP"
                        ref="viy2Radio_dvNhP"
                        v-model="employeeAsideFormData.genderType"
                        radio-style="button"
                        direction="horizontal"
                        split-size="default"
                      >
                        <VueRadioButton
                          v-for="option in genderTypeDs"
                          :key="option.codeDbid"
                          :label="option.codeDbid"
                          :name="option.name"
                          :disabled="option.disabled"
                        >
                          {{ option.codeData1 }}
                        </VueRadioButton>
                      </VueRadioGroup>
                    </VueFormItem>
                  </VueCol>
                </VueRow>
                <VueRow
                  id="viy2Row_2acZYU"
                  ref="viy2Row_2acZYU"
                >
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.employedDate')"
                      label-width="150px"
                      prop="fromDate"
                      :rules="rules.viy2DateTimePicker_iZtPoRules"
                    >
                      <VueDatePicker
                        id="viy2DateTimePicker_iZtPo"
                        ref="viy2DateTimePicker_iZtPo"
                        v-model="employeeAsideFormData.fromDate"
                        type="date"
                        :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                        :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  />
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.demissionDate')"
                      label-width="150px"
                      prop="toDate"
                      :rules="rules.viy2DateTimePicker_33Xzg2Rules"
                    >
                      <VueDatePicker
                        id="viy2DateTimePicker_33Xzg2"
                        ref="viy2DateTimePicker_33Xzg2"
                        v-model="employeeAsideFormData.toDate"
                        type="date"
                        :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                        :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  />
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.province')"
                      label-width="150px"
                      prop="provinceId"
                      :rules="rules.viy2Select_hck1YRules"
                    >
                      <VueSelect
                        id="viy2Select_hck1Y"
                        ref="viy2Select_hck1Y"
                        v-model="employeeAsideFormData.provinceId"
                        :clearable="true"
                        :options="provinceDs"
                        :props="{
                          label: 'geographyNm',
                          value: 'geographyId',
                        }"
                        @change="viy2Select_hck1YChange"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.address1')"
                      label-width="150px"
                      prop="address1"
                    >
                      <VueInput
                        id="viy2InputBox_2buXeU"
                        ref="viy2InputBox_2buXeU"
                        v-model="employeeAsideFormData.address1"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.city')"
                      label-width="150px"
                      prop="cityId"
                      :rules="rules.viy2Select_2M1xtaRules"
                    >
                      <VueSelect
                        id="viy2Select_2M1xta"
                        ref="viy2Select_2M1xta"
                        v-model="employeeAsideFormData.cityId"
                        :clearable="true"
                        :options="cityDs"
                        :props="{
                          label: 'geographyNm',
                          value: 'geographyId',
                        }"
                        @change="viy2Select_2M1xtaChange"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.address2')"
                      label-width="150px"
                      prop="address2"
                    >
                      <VueInput
                        id="viy2InputBox_2bv94M"
                        ref="viy2InputBox_2bv94M"
                        v-model="employeeAsideFormData.address2"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.fax')"
                      label-width="150px"
                      prop="faxNo"
                    >
                      <VueInput
                        id="viy2InputBox_2Lfhcc"
                        ref="viy2InputBox_2Lfhcc"
                        v-model="employeeAsideFormData.faxNo"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.postCode')"
                      label-width="150px"
                      prop="postCode"
                    >
                      <VueInput
                        id="viy2InputBox_2LftWw"
                        ref="viy2InputBox_2LftWw"
                        v-model="employeeAsideFormData.postCode"
                      />
                    </VueFormItem>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.telephone')"
                      label-width="150px"
                      prop="contactTel"
                    >
                      <VueInput
                        id="viy2InputBox_2LfDd2"
                        ref="viy2InputBox_2LfDd2"
                        v-model="employeeAsideFormData.contactTel"
                      />
                    </VueFormItem>
                  </VueCol>
                </VueRow>
              </VueTabPane>
              <VueTabPane
                name="employeeAsideTabsTab1"
                :label="t('label.point')"
              >
                <VueRow
                  id="viy2Row_hFhqc"
                  ref="viy2Row_hFhqc"
                >
                  <VueCol
                    item-key="item"
                    align="right"
                    class="aside-title-button"
                    :md="{ span: 24 }"
                  >
                    <VueButton id="viy2Button_hFXpZ" ref="viy2Button_hFXpZ" icon-position="left" class="icon-button-width" @click="viy2Button_hFXpZClick">
                      +
                    </VueButton>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    :md="{ span: 24 }"
                  >
                    <VueTable id="pointInfoGrid" ref="pointInfoGrid" class="margin-top-aside" :data="pointList" :edit-rules="pointInfoGridRules" :edit-config="pointInfoGridEditConfig" :mouse-config="pointInfoGridMouseConfig">
                      <VueIndexColumn
                        align="center"
                        width="50px"
                        min-width="50px"
                        header-align="center"
                      />
                      <VueSelectColumn
                        :edit-render="pointInfoGridFacilityIdEditRender"
                        field="facilityId"
                        :sortable="true"
                        :title="t('label.point')"
                        width="420px"
                      />
                      <VueButtonColumn
                        width="40px"
                        :buttons="pointInfoGridViy2TableButtonColumn_hHsy4Buttons"
                      />
                    </VueTable>
                  </VueCol>
                </VueRow>
              </VueTabPane>
            </VueTabs>
          </VueForm>
        </VueCol>
      </VueRow>
    </VueAside>
  </VueForm>
</template>
