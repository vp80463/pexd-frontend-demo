<script setup>
import { IconCloseBold, IconDelete, IconEdit, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { DefaultDate, YES_NO_FLAG } from '@/constants/pj-constants.js';
import { clearFormData, warn_msg } from '@/pj-commonutils.js';
import {
  employee_column, employee_pop_condition, employee_pop_query_method, employee_query_method,
  userRole_column, userRole_pop_condition, userRole_pop_query_method, userRole_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const dateFrom = new Date();
const dateTo = new Date(DefaultDate.MAX_DATE);
const userRoleList = ref();
const requirdEmail = ref(false);
const strength = ref();
const progressWidth = ref();
defineOptions({
  name: 'cmq0701_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_agpKr8 = ref();
const viy2Flex_111nWp = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2InputBox_gaglvQ = ref();
const viy2ValueList_828HyC = ref();
const viy2Row_2GKo6Z = ref();
const viy2Flex_111tOE = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const userAside = ref();
const consumerInfoTitle = ref();
const viy2Button_alfgtG = ref();
const viy2Button_6z9lSS = ref();
const viy2Button_alfgtR = ref();
const userAsideTabs = ref();
const userForm = ref();
const viy2Row_FRRzE = ref();
const viy2ValueList_FRRzF = ref();
const viy2Row_FRRzR = ref();
const viy2InputBox_FRRA5 = ref();
const viy2InputBox_6r77qa = ref();
const viy2DateTimePicker_6KGDU7 = ref();
const viy2DateTimePicker_6KGDU8 = ref();
const viy2CheckBox_6KGDVL = ref();
const viy2Row_6KGDVO = ref();
const viy2Button_6KGDXr = ref();
const userRoleGrid = ref();
const formData = reactive({
});
const queryFormData = reactive({
  userCd: '', role: '',
});
const userFormData = reactive({
  employee: '', userCd: '', email: '', dateFrom: '', dateTo: '', status: false,
});
const rules = reactive({
  viy2ValueList_FRRzFRules: [
    {
      required: true,
      message: t('errors.required', [t('label.employee')]),
    },
  ],
  viy2InputBox_FRRA5Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.userCode')]),
    },
  ],
  viy2InputBox_6r77qaRules: [
    {
      required: true,
      message: t('errors.required', [t('label.email')]),
      enabled: requirdEmail,
    },
  ],
  viy2DateTimePicker_6KGDU7Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.effectiveDate')]),
    },
  ],
  viy2DateTimePicker_6KGDU8Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.expiredDate')]),
    },
  ],
});
const showUserAside = ref(false);
const userAsideTabsActiveName = ref('userAsideTabsTab0');
const viy2ValueList_FRRzFPopoverQueryMethod = employee_query_method;
const viy2ValueList_FRRzFPopupColumns = ref(employee_column);
const viy2ValueList_FRRzFPopupQueryMethod = employee_pop_query_method;
const userRoleGridEditConfig = reactive({
  trigger: 'click',
  mode: 'row',
  beforeEditMethod: (obj) => {
    return obj.row.roleId == '';
  },
});
const userRoleGridMouseConfig = reactive({
  extension: true,
});
const userRoleGridViy2TableButtonColumn_ohtaaButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRoleRow,
      title: 'Delete',
    },
  ];
};
const viy2ValueList_828HyCPopoverQueryMethod = userRole_query_method;
const viy2ValueList_828HyCPopupColumns = ref(userRole_column);
const viy2ValueList_828HyCPopupQueryMethod = userRole_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_ySNcgButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onEditRow,
      title: 'Edit',
    },
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRow,
      title: 'Delete',
    },
  ];
};
const saveOrUpdateUserDsApi = useApi({
  url: '/master/cmq0701/newOrModifyUser.json',
  method: 'post',
  data: () => {
    userFormData.roleList = userRoleGrid.value.getTableData().fullData;
    return userFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    showUserAside.value = false;
    userListApi.runAsync();
  },
  manual: true,
});
const saveOrUpdateUserDs = saveOrUpdateUserDsApi.data;
const userListApi = useApi({
  url: '/master/cmq0701/findUserList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  manual: true,
});
const userList = userListApi.data;
const deleteUserDsApi = useApi({
  url: '/master/cmq0701/deleteUser.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    userListApi.runAsync();
  },
  manual: true,
});
const deleteUserDs = deleteUserDsApi.data;
const userDetailApi = useApi({
  url: '/master/cmq0701/getUserDetail.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    merge(userFormData, data);
    requirdEmail.value = false;
    userRoleList.value = data.roleList;
  },
  manual: true,
});
const userDetail = userDetailApi.data;
const resetPasswordDsApi = useApi({
  url: '/master/cmq0701/resetPassword.json',
  method: 'post',
  data: () => {
    userFormData.roleList = userRoleGrid.value.getTableData().fullData;
    return userFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    showUserAside.value = false;
    userListApi.runAsync();
  },
  manual: true,
});
const resetPasswordDs = resetPasswordDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5FbWKcClick = () => {
  showUserAside.value = true;
  requirdEmail.value = true;
  resetUserDetailAside();
};
const viy2Button_agpKr8Click = () => {
  userListApi.runAsync();
};
const viy2ValueList_828HyCSelect = (params) => {
  queryFormData.role = `${params.roleCode} ${params.roleName}`;
  queryFormData.roleId = params.roleId;
};
const viy2ValueList_828HyCClear = () => {
  queryFormData.roleId = '';
};
const viy2ValueList_828HyCLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.roleId = '';
  }
};
const viy2ValueList_828HyCPopoverColumns = computed(() => {
  return userRole_column;
});
const viy2ValueList_828HyCPopupConditions = computed(() => {
  return userRole_pop_condition;
});
const gridUserCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRegisterDateEditRender = computed(() => {
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
const gridDateFromEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymdt,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridDateToEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymdt,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_alfgtGClick = () => {
  requirdEmail.value = true;
  if (!userFormData.email) {
    warn_msg(t('M.E.00117', [t('label.email')]));
  } else {
    resetPasswordDsApi.runAsync();
  }
};
const viy2Button_6z9lSSClick = () => {
  userForm.value.validate((valid) => {
    if (valid) {
      userRoleGrid.value.validate((valid) => {
        if (!valid) {
          saveOrUpdateUserDsApi.runAsync();
        } else {
          userAsideTabsActiveName.value = 'userAsideTabsTab1';
        }
      });
    } else {
      userAsideTabsActiveName.value = 'userAsideTabsTab0';
    }
  });
};
const viy2Button_alfgtRClick = () => {
  if (userFormData.action !== 'VIEW') {
    VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      showUserAside.value = false;
    });
  }
};
const viy2ValueList_FRRzFSelect = (params) => {
  userFormData.employee = `${params.code} ${params.name}`;
  userFormData.employeeId = params.id;
};
const viy2ValueList_FRRzFPopoverColumns = computed(() => {
  return employee_column;
});
const viy2ValueList_FRRzFPopupConditions = computed(() => {
  return employee_pop_condition;
});
const viy2Button_6KGDXrClick = () => {
  const row = { roleId: '', roleCode: '', roleName: '', effectiveDate: '', expiredDate: '' };
  userRoleGrid.value.insertAt(row, -1).then((newRow) => {
    userRoleGrid.value.setCurrentRow(newRow.row);
  });
};
const userRoleGridRoleCodeSelect = (obj, params) => {
  obj.row.roleId = params.roleId;
  obj.row.roleCode = params.roleCode;
  obj.row.roleName = params.roleName;
  obj.row.effectiveDate = params.effectiveDate;
  obj.row.expiredDate = params.expiredDate;
};
const userRoleGridRoleCodeEvents = reactive({
  select: userRoleGridRoleCodeSelect,
});
const userRoleGridRoleCodeEditRender = computed(() => {
  return {
    enabled: true,
    events: userRoleGridRoleCodeEvents,
    attrs: {
      clearable: true,
      usePopover: true,
      popoverWidth: 500,
      useCommonPopover: true,
      popoverColumns: userRole_column,
      popoverQueryMethod: userRole_query_method,
      togglePopoverOnClick: true,
      asideSize: '50%',
    },
  };
});
const userRoleGridRoleNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  clearFormData(queryFormData);
  resetTblResults();
};
const resetTblResults = () => {
  userList.value.splice(0);
};
const resetUserDetailAside = () => {
  resetUserFormData();
  userRoleList.value = [];
  userAsideTabsActiveName.value = 'userAsideTabsTab0';
};
const resetUserFormData = () => {
  clearFormData(userFormData);
  // 设置为初始值
  userFormData.status = YES_NO_FLAG.YES;
  userFormData.dateFrom = dateFrom;
  userFormData.dateTo = dateTo;
  setTimeout(() => {
    userForm.value.clearValidate();
  }, 100);
};
const onEditRow = (row) => {
  showUserAside.value = true;
  resetUserDetailAside();
  nextTick(() => {
    userDetailApi.runAsync({
      userId: row.userId,
    });
  });
};
const onDelRow = (row) => {
  VueMessageBox.confirm(t('M.C.00103', [row.userCd]), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    deleteUserDsApi.runAsync({
      userId: row.userId,
    });
  }).catch(() => {
  });
};
const onDelRoleRow = (row) => {
  userRoleGrid.value.remove(row);
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
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" @click="viy2Button_5FbWKcClick">
          {{ t('button.newUser') }}
        </VueButton>
        <VueButton id="viy2Button_agpKr8" ref="viy2Button_agpKr8" icon-position="left" type="info" @click="viy2Button_agpKr8Click">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_111nWp"
      ref="viy2Flex_111nWp"
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
              :label="t('label.userCode')"
              prop="userCd"
            >
              <VueInput
                id="viy2InputBox_gaglvQ"
                ref="viy2InputBox_gaglvQ"
                v-model="queryFormData.userCd"
                :formatter="(value) => value.toUpperCase()"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.role')"
              prop="role"
            >
              <VueValueList
                id="viy2ValueList_828HyC"
                ref="viy2ValueList_828HyC"
                v-model="queryFormData.role"
                :use-common-popover="true"
                :use-common-popup="true"
                aside-size="50%"
                :close-on-click-modal="true"
                :popover-width="500"
                :use-popup="true"
                width="250px"
                :popover-columns="viy2ValueList_828HyCPopoverColumns"
                :popover-query-method="viy2ValueList_828HyCPopoverQueryMethod"
                :popup-columns="viy2ValueList_828HyCPopupColumns"
                :popup-conditions="viy2ValueList_828HyCPopupConditions"
                :popup-query-method="viy2ValueList_828HyCPopupQueryMethod"
                @select="viy2ValueList_828HyCSelect"
                @clear="viy2ValueList_828HyCClear"
                @leave="viy2ValueList_828HyCLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_2GKo6Z"
                    ref="viy2Row_2GKo6Z"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_2GKo7a" ref="viy2Text_2GKo7a" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Role
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
        id="viy2Flex_111tOE"
        ref="viy2Flex_111tOE"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" :data="userList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            :edit-render="gridUserCdEditRender"
            field="userCd"
            show-overflow="tooltip"
            :title="t('label.userCode')"
            width="200px"
          />
          <VueDateTimeColumn
            :edit-render="gridRegisterDateEditRender"
            field="registerDate"
            align="center"
            :title="t('label.registerDate')"
            width="150px"
          />
          <VueDateTimeColumn
            :edit-render="gridDateFromEditRender"
            field="dateFrom"
            align="center"
            :title="t('label.effectiveDate')"
            width="155px"
          />
          <VueDateTimeColumn
            :edit-render="gridDateToEditRender"
            field="dateTo"
            align="center"
            :title="t('label.expiredDate')"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridStatusEditRender"
            field="status"
            show-overflow="tooltip"
            :title="t('label.status')"
            width="100px"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="80px"
            :buttons="gridViy2TableButtonColumn_ySNcgButtons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="userAside"
      ref="userAside"
      v-model="showUserAside"
      size="50%"
      :with-header="false"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
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
          <VueText id="viy2Text_alfgtu" ref="viy2Text_alfgtu" size="large">
            {{ t('title.userInformationMaintenance_01') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          class="aside-title-button"
          :md="{ span: 14 }"
        >
          <VueButton v-if="!!userFormData.userId" id="viy2Button_alfgtG" ref="viy2Button_alfgtG" icon-position="left" type="info" @click="viy2Button_alfgtGClick">
            {{ t('button.resetPsw') }}
          </VueButton>
          <VueButton id="viy2Button_6z9lSS" ref="viy2Button_6z9lSS" icon-position="left" type="info" @click="viy2Button_6z9lSSClick">
            {{ t('button.confirm') }}
          </VueButton>
          <VueButton id="viy2Button_alfgtR" ref="viy2Button_alfgtR" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_alfgtRClick" />
        </VueCol>
      </VueRow>
      <VueTabs
        id="userAsideTabs"
        ref="userAsideTabs"
        v-model="userAsideTabsActiveName"
      >
        <VueTabPane
          name="userAsideTabsTab0"
          label="User Info"
        >
          <VueForm
            id="userForm"
            ref="userForm"
            label-width="130px"
            :model="userFormData"
          >
            <VueRow
              id="viy2Row_FRRzE"
              ref="viy2Row_FRRzE"
            >
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              >
                <VueFormItem
                  :label="t('label.employee')"
                  prop="employee"
                  :rules="rules.viy2ValueList_FRRzFRules"
                >
                  <VueValueList
                    id="viy2ValueList_FRRzF"
                    ref="viy2ValueList_FRRzF"
                    :use-common-popover="true"
                    v-model="userFormData.employee"
                    :use-common-popup="true"
                    aside-size="30%"
                    :popover-teleported="false"
                    :toggle-popover-on-click="true"
                    :close-on-click-modal="true"
                    :popover-width="500"
                    width="250px"
                    :popover-columns="viy2ValueList_FRRzFPopoverColumns"
                    :popover-query-method="viy2ValueList_FRRzFPopoverQueryMethod"
                    :popup-columns="viy2ValueList_FRRzFPopupColumns"
                    :popup-conditions="viy2ValueList_FRRzFPopupConditions"
                    :popup-query-method="viy2ValueList_FRRzFPopupQueryMethod"
                    @select="viy2ValueList_FRRzFSelect"
                  >
                    <template #asideHeader>
                      <VueRow
                        id="viy2Row_FRRzR"
                        ref="viy2Row_FRRzR"
                        class="aside-title-row"
                      >
                        <VueCol
                          item-key="item"
                          class="aside-title-text"
                          :md="{ span: 7 }"
                        >
                          <VueText id="viy2Text_FRRzS" ref="viy2Text_FRRzS" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                            Select Employee
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
                  :label="t('label.userCode')"
                  prop="userCd"
                  :rules="rules.viy2InputBox_FRRA5Rules"
                >
                  <VueInput
                    id="viy2InputBox_FRRA5"
                    ref="viy2InputBox_FRRA5"
                    v-model="userFormData.userCd"
                    :formatter="(value) => value.toUpperCase()"
                    :disabled="!!userFormData.userId"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
                <VueFormItem
                  :label="t('label.email')"
                  prop="email"
                  :rules="rules.viy2InputBox_6r77qaRules"
                >
                  <VueInput
                    id="viy2InputBox_6r77qa"
                    ref="viy2InputBox_6r77qa"
                    v-model="userFormData.email"
                    :style="{ width: '250px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              >
                <VueFormItem
                  :label="t('label.effectiveDate')"
                  prop="dateFrom"
                  :rules="rules.viy2DateTimePicker_6KGDU7Rules"
                >
                  <VueDatePicker
                    id="viy2DateTimePicker_6KGDU7"
                    ref="viy2DateTimePicker_6KGDU7"
                    v-model="userFormData.dateFrom"
                    type="date"
                    :style="{ width: '130px' }"
                    :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                    :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymdt"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              >
                <VueFormItem
                  :label="t('label.expiredDate')"
                  prop="dateTo"
                  :rules="rules.viy2DateTimePicker_6KGDU8Rules"
                >
                  <VueDatePicker
                    id="viy2DateTimePicker_6KGDU8"
                    ref="viy2DateTimePicker_6KGDU8"
                    v-model="userFormData.dateTo"
                    type="date"
                    :style="{ width: '130px' }"
                    :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                    :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymdt"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              >
                <VueFormItem
                  :label="t('label.active')"
                  prop="status"
                >
                  <VueCheckbox
                    id="viy2CheckBox_6KGDVL"
                    ref="viy2CheckBox_6KGDVL"
                    v-model="userFormData.status"
                    :true-label="YES_NO_FLAG.YES"
                    :false-label="YES_NO_FLAG.NO"
                  />
                </VueFormItem>
              </VueCol>
            </VueRow>
          </VueForm>
        </VueTabPane>
        <VueTabPane
          name="userAsideTabsTab1"
          label="User Role"
        >
          <VueRow
            id="viy2Row_6KGDVO"
            ref="viy2Row_6KGDVO"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_6KGDXr" ref="viy2Button_6KGDXr" icon-position="left" class="icon-button-width" @click="viy2Button_6KGDXrClick">
                +
              </VueButton>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueTable id="userRoleGrid" ref="userRoleGrid" class="margin-top-aside" :data="userRoleList" :edit-config="userRoleGridEditConfig" :mouse-config="userRoleGridMouseConfig">
                <VueIndexColumn
                  align="center"
                  width="50px"
                  min-width="50px"
                  header-align="center"
                />
                <VueValueListColumn
                  :edit-render="userRoleGridRoleCodeEditRender"
                  field="roleCode"
                  :clearable="true"
                  :toggle-popover-on-click="true"
                  title="Role Code"
                  width="130px"
                />
                <VueInputColumn
                  :edit-render="userRoleGridRoleNameEditRender"
                  field="roleName"
                  title="Role Name"
                  width="150px"
                />
                <VueButtonColumn
                  align="center"
                  width="60px"
                  :buttons="userRoleGridViy2TableButtonColumn_ohtaaButtons"
                />
              </VueTable>
            </VueCol>
          </VueRow>
        </VueTabPane>
      </VueTabs>
    </VueAside>
  </VueForm>
</template>

<style type="text/css" scoped>
.progress-bar {
width: 200px;
height: 20px;
background-color: #eee;
margin-top: 5px;
margin-left: 20px;
}
.progress-bar div {
height: 100%;
}
.red {
background-color: red;
}
.orange {
background-color: orange;
}
.green {
background-color: green;
}
</style>
