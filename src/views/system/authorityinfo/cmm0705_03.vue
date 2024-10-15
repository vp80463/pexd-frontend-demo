<script setup>
import { IconCloseBold, IconDocument, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { userRole_column, userRole_pop_condition, userRole_pop_query_method, userRole_query_method } from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const userList = ref();
const menuList = ref();
defineOptions({
  name: 'cmm0705_03',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_1121FC = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2ValueList_828HyC = ref();
const viy2Row_2GKo6Z = ref();
const viy2InputBox_gaglvQ = ref();
const viy2Flex_1127rh = ref();
const grid = ref();
const viy2Row_56zoyF = ref();
const roleAside = ref();
const userListTitle = ref();
const viy2Button_zFzYo = ref();
const roleAsideTabs = ref();
const userForm = ref();
const viy2Row_DwMf8o = ref();
const copy0_copy0_copy0_copy0_viy2Row_oiwXU_col1 = ref();
const viy2Row_1sVMG3 = ref();
const viy2InputBox_1sVMG4 = ref();
const viy2InputBox_1sVMGh = ref();
const userGrid = ref();
const menuForm = ref();
const viy2Row_1yVbrE = ref();
const copy0_copy0_copy0_copy0_copy0_viy2Row_oiwXU_col1 = ref();
const viy2Row_1yVbrQ = ref();
const viy2InputBox_1yVbrR = ref();
const viy2InputBox_1yVbs4 = ref();
const viy2Table_5AZY2n = ref();
const viy2CheckBox_1zBUHC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  role: '', userSearch: '',
});
const userFormData = reactive({
  roleCd: '', roleNm: '',
});
const menuFormData = reactive({
  roleCd: '', roleNm: '',
});
const showRoleAside = ref(false);
const roleAsideTabsActiveName = ref('roleAsideTabsTab0');
const userGridEditConfig = reactive({
  mode: 'row',
});
const userGridMouseConfig = reactive({
  extension: true,
});
const viy2Table_5AZY2nEditConfig = reactive({
  trigger: 'click',
  mode: 'row',
});
const viy2Table_5AZY2nTreeConfig = reactive({
  expandAll: true,
});
const viy2Table_5AZY2nMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_1zBUHCOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2ValueList_828HyCPopoverQueryMethod = userRole_query_method;
const viy2ValueList_828HyCPopupColumns = ref(userRole_column);
const viy2ValueList_828HyCPopupQueryMethod = userRole_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_3FeSGButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocument,
      click: onDetailRow,
      title: 'edit',
    },
  ];
};
const roleListApi = useApi({
  url: '/master/cmm0705/findRoleList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  manual: true,
});
const roleList = roleListApi.data;
const userDetailApi = useApi({
  url: '/master/cmm0705/getRoleUserList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    merge(userFormData, data);
    userList.value = data.userList;
  },
  manual: true,
});
const userDetail = userDetailApi.data;
const menuDetailApi = useApi({
  url: '/master/cmm0705/getRoleMenuList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    merge(menuFormData, data);
    menuList.value = data.menuList;
  },
  manual: true,
});
const menuDetail = menuDetailApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5FbWKcClick = () => {
  roleListApi.runAsync();
};
const viy2ValueList_828HyCSelect = (params) => {
  queryFormData.role = `${params.roleCode} ${params.roleName}`;
  queryFormData.roleId = params.roleId;
};
const viy2ValueList_828HyCClear = () => {
  queryFormData.roleId = '';
};
const viy2ValueList_828HyCPopoverColumns = computed(() => {
  return userRole_column;
});
const viy2ValueList_828HyCPopupConditions = computed(() => {
  return userRole_pop_condition;
});
const gridRoleCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRoleNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_zFzYoClick = () => {
  showRoleAside.value = false;
};
const roleAsideTabsTabChange = (tabName) => {
  if (tabName == 'roleAsideTabsTab1' && menuList.value.length == 0) {
    nextTick(() => {
      menuDetailApi.runAsync({
        roleId: userFormData.roleId,
        roleCd: userFormData.roleCd,
        roleNm: userFormData.roleNm,
      });
    });
  }
};
const userGridUserCodeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      clearable: true,
      usePopover: true,
      popoverWidth: 500,
      useCommonPopover: true,
      togglePopoverOnClick: true,
      asideSize: '50%',
    },
  };
});
const userGridNickNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_5AZY2nMenuFullNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_5AZY2nCopy0_copy0_copy0_copy0_copy0_viy2TableTemplateColumn_kV47aEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
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
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
};
const resetTblResults = () => {
  roleList.value.splice(0);
};
const onDetailRow = (row) => {
  showRoleAside.value = true;
  resetRoleDetailAside();
  nextTick(() => {
    userDetailApi.runAsync({
      roleId: row.roleId,
      roleCd: row.roleCd,
      roleNm: row.roleNm,
    });
  });
};
const resetRoleDetailAside = () => {
  resetRoleDetailFormData();
  userList.value = [];
  menuList.value = [];
  roleAsideTabsActiveName.value = 'roleAsideTabsTab0';
};
const resetRoleDetailFormData = () => {
  const userFormElement = userForm.value;
  if (userFormElement && userFormElement.resetFields) {
    userFormElement.resetFields();
    for (const key in userFormData) {
      userFormData[key] = '';
    }
  }
  const menuFormElement = menuForm.value;
  if (menuFormElement && menuFormElement.resetFields) {
    menuFormElement.resetFields();
    for (const key in menuFormData) {
      menuFormData[key] = '';
    }
  }
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
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_1121FC"
      ref="viy2Flex_1121FC"
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
              :label="t('label.role')"
              prop="role"
            >
              <VueValueList
                id="viy2ValueList_828HyC"
                ref="viy2ValueList_828HyC"
                :use-common-popover="true"
                v-model="queryFormData.role"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
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
            <VueFormItem
              :label="t('label.userCode')"
              prop="userSearch"
            >
              <VueInput
                id="viy2InputBox_gaglvQ"
                ref="viy2InputBox_gaglvQ"
                v-model="queryFormData.userSearch"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_1127rh"
        ref="viy2Flex_1127rh"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" :data="roleList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_56zoyF"
            ref="viy2Row_56zoyF"
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
            :edit-render="gridRoleCdEditRender"
            field="roleCd"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.roleKey')"
            width="200px"
          />
          <VueInputColumn
            :edit-render="gridRoleNmEditRender"
            field="roleNm"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.roleName')"
            width="200px"
          />
          <VueButtonColumn
            align="center"
            fixed="right"
            width="60px"
            :buttons="gridViy2TableButtonColumn_3FeSGButtons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
    <VueAside
      id="roleAside"
      ref="roleAside"
      v-model="showRoleAside"
      :modal="true"
      size="40%"
      :with-header="false"
    >
      <VueRow
        id="userListTitle"
        ref="userListTitle"
        class="aside-title-row"
      >
        <VueCol
          item-key="item"
          class="aside-title-text"
          :md="{ span: 10 }"
        >
          <VueText id="viy2Text_zFzYm" ref="viy2Text_zFzYm" size="large">
            {{ t('label.tableSysRoleInfo') }}
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          class="aside-title-button"
          :md="{ span: 14 }"
        >
          <VueButton id="viy2Button_zFzYo" ref="viy2Button_zFzYo" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_zFzYoClick" />
        </VueCol>
      </VueRow>
      <VueTabs
        id="roleAsideTabs"
        ref="roleAsideTabs"
        v-model="roleAsideTabsActiveName"
        @tab-change="roleAsideTabsTabChange"
      >
        <VueTabPane
          name="roleAsideTabsTab0"
          :label="t('common.label.userInfo')"
        >
          <VueForm
            id="userForm"
            ref="userForm"
            label-width="130px"
            :model="userFormData"
          >
            <VueRow
              id="viy2Row_DwMf8o"
              ref="viy2Row_DwMf8o"
            >
              <VueCol
                id="copy0_copy0_copy0_copy0_viy2Row_oiwXU_col1"
                ref="copy0_copy0_copy0_copy0_viy2Row_oiwXU_col1"
                item-key="item"
                align="left"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueRow
                  id="viy2Row_1sVMG3"
                  ref="viy2Row_1sVMG3"
                >
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.roleCode')"
                      label-width="100px"
                      prop="roleCd"
                    >
                      <VueInput
                        id="viy2InputBox_1sVMG4"
                        ref="viy2InputBox_1sVMG4"
                        v-model="userFormData.roleCd"
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
                      :label="t('label.roleName')"
                      label-width="100px"
                      prop="roleNm"
                    >
                      <VueInput
                        id="viy2InputBox_1sVMGh"
                        ref="viy2InputBox_1sVMGh"
                        v-model="userFormData.roleNm"
                        :disabled="true"
                        :style="{ width: '250px' }"
                      />
                    </VueFormItem>
                  </VueCol>
                </VueRow>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              >
                <VueTable id="userGrid" ref="userGrid" :height="gridHeight" class="margin-top-aside" :data="userList" :edit-config="userGridEditConfig" :mouse-config="userGridMouseConfig">
                  <VueIndexColumn
                    align="center"
                    width="50px"
                    min-width="50px"
                    header-align="center"
                  />
                  <VueValueListColumn
                    :edit-render="userGridUserCodeEditRender"
                    field="userCode"
                    :clearable="true"
                    :toggle-popover-on-click="true"
                    :sortable="true"
                    :title="t('label.userCode')"
                    width="120px"
                  />
                  <VueInputColumn
                    :edit-render="userGridNickNameEditRender"
                    field="nickName"
                    :sortable="true"
                    :title="t('label.userName')"
                    min-width="150px"
                  />
                </VueTable>
              </VueCol>
            </VueRow>
          </VueForm>
        </VueTabPane>
        <VueTabPane
          name="roleAsideTabsTab1"
          :label="t('menu.CD0902')"
        >
          <VueForm
            id="menuForm"
            ref="menuForm"
            label-width="130px"
            :model="menuFormData"
          >
            <VueRow
              id="viy2Row_1yVbrE"
              ref="viy2Row_1yVbrE"
            >
              <VueCol
                id="copy0_copy0_copy0_copy0_copy0_viy2Row_oiwXU_col1"
                ref="copy0_copy0_copy0_copy0_copy0_viy2Row_oiwXU_col1"
                item-key="item"
                align="left"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueRow
                  id="viy2Row_1yVbrQ"
                  ref="viy2Row_1yVbrQ"
                >
                  <VueCol
                    item-key="item"
                    :md="{ span: 12 }"
                  >
                    <VueFormItem
                      :label="t('label.roleCode')"
                      label-width="100px"
                      prop="roleCd"
                    >
                      <VueInput
                        id="viy2InputBox_1yVbrR"
                        ref="viy2InputBox_1yVbrR"
                        v-model="menuFormData.roleCd"
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
                      :label="t('label.roleName')"
                      label-width="100px"
                      prop="roleNm"
                    >
                      <VueInput
                        id="viy2InputBox_1yVbs4"
                        ref="viy2InputBox_1yVbs4"
                        v-model="menuFormData.roleNm"
                        :disabled="true"
                        :style="{ width: '250px' }"
                      />
                    </VueFormItem>
                  </VueCol>
                </VueRow>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              >
                <VueTable id="viy2Table_5AZY2n" ref="viy2Table_5AZY2n" header-align="center" :height="gridHeight" class="margin-top-aside" :data="menuList" :edit-config="viy2Table_5AZY2nEditConfig" :tree-config="viy2Table_5AZY2nTreeConfig" :mouse-config="viy2Table_5AZY2nMouseConfig">
                  <VueInputColumn
                    :edit-render="viy2Table_5AZY2nMenuFullNameEditRender"
                    field="menuFullName"
                    :tree-node="true"
                    show-overflow="tooltip"
                    :title="t('label.menuItem')"
                    header-align="center"
                    width="380px"
                  />
                  <VueTemplateColumn
                    :edit-render="viy2Table_5AZY2nCopy0_copy0_copy0_copy0_copy0_viy2TableTemplateColumn_kV47aEditRender"
                    align="center"
                    :title="t('label.access')"
                  >
                    <template #default="scope">
                      <VueCheckbox
                        id="viy2CheckBox_1zBUHC"
                        ref="viy2CheckBox_1zBUHC"
                        v-model="scope.row.accessFlag"
                        :disabled="true"
                        true-label="Y"
                        false-label="N"
                      />
                    </template>
                  </VueTemplateColumn>
                </VueTable>
              </VueCol>
            </VueRow>
          </VueForm>
        </VueTabPane>
      </VueTabs>
    </VueAside>
  </VueForm>
</template>
