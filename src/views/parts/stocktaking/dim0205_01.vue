<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const confirmFlag = ref(true);
defineOptions({
  name: 'dim0205_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKcnew = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_XCgCD = ref();
const dataForm = ref();
const viy2Flex_XCk5e = ref();
const grid = ref();
const formData = reactive({
});
const dataFormData = reactive({
});
const gridRules = {
  pointId: [{
    required: true,
    message: t('errors.required', [t('label.point')]),
  },
  ],
  workzoneCd: [
    { required: true, message: t('errors.required', [t('label.wz')]) },
  ],
  workzoneNm: [
    { required: true, message: t('errors.required', [t('label.wzName')]) },
  ],
};
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_GDWleButtons = (scope) => {
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
const confirmDsApi = useApi({
  url: '/parts/dim0205/doConfirm.json',
  method: 'post',
  data: () => {
    dataFormData.tableDataList = grid.value.getRecordset();
    dataFormData.gridDataList = grid.value.getTableData().fullData;
    confirmFlag.value = true;
    return dataFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const gridDsApi = useApi({
  url: '/parts/dim0205/doInitial.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
  },
});
const gridDs = gridDsApi.data;
const deleteGridDsApi = useApi({
  url: '/parts/dim0205/deleteDetail.json',
  method: 'post',
  data: () => {
    dataFormData.tableDataList = grid.value.getRecordset();
    return dataFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const deleteGridDs = deleteGridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5FbWKcnewClick = () => {
  const row = { point: '', wz: '', wzName: '' };
  grid.value.insertAt(row, -1).then((newRow) => {
    grid.value.setCurrentRow(newRow.row);
  });
  confirmFlag.value = false;
};
const viy2Button_5FbWKcClick = () => {
  if (grid.value.getTableData().fullData.length > 0) {
    grid.value.validate((valid) => {
      if (!valid) {
        confirmDsApi.runAsync();
      }
    });
  }
};
const gridPointIdChange = (obj, newValue, newOption, oldValue) => {
  obj.row.pointCd = newOption.label;
  if (newValue != oldValue) {
    confirmFlag.value = false;
  }
};
const gridPointIdEvents = reactive({
  change: gridPointIdChange,
});
const gridPointIdEditRender = computed(() => {
  return {
    enabled: true,
    events: gridPointIdEvents,
    options: pointDs.value,
    displayMember: 'desc',
    valueMember: 'id',
    attrs: {
      clearable: true,
    },
  };
});
const gridWorkzoneCdChange // change: Triggered when the input value changes
= function (obj, value) {
  confirmFlag.value = false;
};
const gridWorkzoneCdEvents = reactive({
  change: gridWorkzoneCdChange,
});
const gridWorkzoneCdEditRender = computed(() => {
  return {
    enabled: true,
    events: gridWorkzoneCdEvents,
    attrs: {
      uppercase: true,
    },
  };
});
const gridWorkzoneNmChange // change: Triggered when the input value changes
= function (obj, value) {
  confirmFlag.value = false;
};
const gridWorkzoneNmEvents = reactive({
  change: gridWorkzoneNmChange,
});
const gridWorkzoneNmEditRender = computed(() => {
  return {
    enabled: true,
    events: gridWorkzoneNmEvents,
  };
});
const onDelRoleRow = (row) => {
  if (row.workzoneId != null && typeof (row.workzoneId) != 'undefined') {
    const message = `${row.point} ${row.workzoneCd} ${row.workzoneNm}`;
    VueMessageBox.confirm(t('M.C.00103', [message]), t('title.warn'), {
      type: 'warning',
    }).then(() => {
      grid.value.remove(row);
      deleteGridDsApi.runAsync();
      resetCondition();
    }).catch(() => {
    });
  } else {
    grid.value.remove(row);
  }
};
const resetCondition = () => {
// 清空表单元素
  dataForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in dataFormData) {
    dataFormData[key] = null; // 或者设置为初始值
  }
  resetTblResults();
  gridDsApi.runAsync();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
  confirmFlag.value = true;
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
        <VueButton id="viy2Button_5FbWKcnew" ref="viy2Button_5FbWKcnew" icon-position="left" class="icon-button-width" @click="viy2Button_5FbWKcnewClick">
          +
        </VueButton>
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" :disabled="confirmFlag" @click="viy2Button_5FbWKcClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_XCgCD"
      ref="viy2Flex_XCgCD"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="dataForm"
        ref="dataForm"
        :model="dataFormData"
      />
      <VueFlex
        id="viy2Flex_XCk5e"
        ref="viy2Flex_XCk5e"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="auto" class="margin-top-div0" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueSelectColumn
            :edit-render="gridPointIdEditRender"
            field="pointId"
            :sortable="true"
            :title="t('label.point')"
            header-align="center"
            width="280px"
          />
          <VueInputColumn
            :edit-render="gridWorkzoneCdEditRender"
            field="workzoneCd"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.wz')"
            width="160px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridWorkzoneNmEditRender"
            field="workzoneNm"
            aggregate="sum"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.wzName')"
            width="300px"
            header-align="center"
          />
          <VueButtonColumn
            align="center"
            fixed="right"
            width="40px"
            :buttons="gridViy2TableButtonColumn_GDWleButtons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
