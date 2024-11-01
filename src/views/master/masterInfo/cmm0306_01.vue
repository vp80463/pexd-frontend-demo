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
  name: 'cmm0306_01',
});
const form = ref();
const viy2Flex_aaV33 = ref();
const viy2Flex_aaXuz = ref();
const viy2Panel_GLqEE = ref();
const viy2Button_5FbWKcnew = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const grid = ref();
const dataForm = ref();
const formData = reactive({
});
const dataFormData = reactive({
});
const gridRules = {
  stdprice: [
    { required: true, message: '入力必須' },
  ],
  upRate: [
    { required: true, message: '入力必須' },
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
const gridDs2Api = useApi({
  url: '/parts/dim0205/doInitial.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
  },
  manual: true,
});
const gridDs2 = gridDs2Api.data;
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
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      upRate: '30',
      pattern: '1',
      stdprice: '101',
    },
    {
      upRate: '30',
      pattern: '2',
      stdprice: '1001',
    },
    {
      upRate: '30',
      pattern: '3',
      stdprice: '10001',
    },
    {
      upRate: '30',
      pattern: '4',
      stdprice: '999999999',
    },
  ],
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
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const gridStdpriceEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      useSeparator: true,
    },
  };
});
const gridUpRateEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridPatternChange = (obj, newValue, newOption, oldValue) => {
  obj.row.pointCd = newOption.label;
  if (newValue != oldValue) {
    confirmFlag.value = false;
  }
};
const gridPatternEvents = reactive({
  change: gridPatternChange,
});
const gridPatternEditRender = computed(() => {
  return {
    enabled: true,
    events: gridPatternEvents,
    options: pointDs.value,
    displayMember: 'desc',
    valueMember: 'id',
    attrs: {
      clearable: true,
    },
  };
});
const onDelRoleRow = (row) => {
  if (row.stdprice != null && typeof (row.stdprice) != 'undefined') {
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
    <VueFlex
      id="viy2Flex_aaV33"
      ref="viy2Flex_aaV33"
      direction="column"
      class="full-height"
    >
      <VueFlex
        id="viy2Flex_aaXuz"
        ref="viy2Flex_aaXuz"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_GLqEE" ref="viy2Panel_GLqEE" title="単価情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5FbWKcnew" ref="viy2Button_5FbWKcnew" icon-position="left" class="icon-button-width" @click="viy2Button_5FbWKcnewClick">
                行追加
              </VueButton>
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
                保存
              </VueButton>
              <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
                クリア
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No."
            />
            <VueNumberColumn
              :edit-render="gridStdpriceEditRender"
              field="stdprice"
              title="基準標準小売単価"
              header-align="center"
              width="160px"
            />
            <VueNumberColumn
              :edit-render="gridUpRateEditRender"
              field="upRate"
              title="アップ率"
              header-align="center"
              width="120px"
            />
            <VueSelectColumn
              :edit-render="gridPatternEditRender"
              field="pattern"
              title="切上パターン"
              header-align="center"
              width="130px"
            />
            <VueButtonColumn
              align="center"
              fixed="right"
              width="40px"
              :buttons="gridViy2TableButtonColumn_GDWleButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
    <VueForm
      id="dataForm"
      ref="dataForm"
      :model="dataFormData"
    />
  </VueForm>
</template>
