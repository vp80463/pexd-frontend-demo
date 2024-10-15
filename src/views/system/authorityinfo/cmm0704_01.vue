<script setup>
import { VueCheckbox, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
defineOptions({
  name: 'cmm0704_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const viy2Button_8vp41k = ref();
const grid = ref();
const viy2CheckBox_kVaYO = ref();
const viy2CheckBox_liFbS = ref();
const viy2CheckBox_3qwDvA = ref();
const viy2CheckBox_3qxTg4 = ref();
const formData = reactive({
});
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'row',
});
const gridTreeConfig = reactive({
  expandAll: true,
});
const viy2CheckBox_kVaYOOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2CheckBox_liFbSOpts = [
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
const viy2CheckBox_3qwDvAOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2CheckBox_3qxTg4Opts = [
  {
    label:
'',
    value:
'',
  },
];
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      id: '1',
      name: 'Company',
      level: 0,
      flag1: 'Y',
      flag2: 'Y',
      flag3: 'N',
      flag4: 'Y',
      children: [
        {
          id: '1-1',
          name: 'Company',
          level: 1,
          flag1: 'N',
          flag2: false,
          flag3: '1',
          flag4: '1',
          children: [
            {
              id: '1-1-1',
              name: 'CMM0204_01 Company Info. Maintenance',
              level: 2,
              flag1: 'Y',
              flag2: 'N',
              flag3: 'N',
              flag4: 'Y',
              children: [],
            },
            {
              id: '1-1-2',
              name: 'CMM0205_01 Parts Info. Maintenance',
              level: 2,
              flag1: 'N',
              flag2: 'Y',
              flag3: 'N',
              flag4: 'Y',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Follow Up Action',
      level: 0,
      flag1: 'N',
      flag2: 'N',
      flag3: 'N',
      flag4: 'Y',
      children: [
        {
          id: '2-1',
          name: 'Follow Up Action',
          level: 1,
          flag1: 'Y',
          flag2: 'Y',
          flag3: 'Y',
          flag4: 'Y',
          children: [
            {
              id: '2-1-1',
              name: 'SVM0106_01 Remind List',
              level: 2,
              flag1: 'Y',
              flag2: 'N',
              flag3: 'N',
              flag4: 'N',
              children: [],
            },
          ],
        },
      ],
    },
  ]
  ,
});
const gridDs = gridDsApi.data;
const confirmDsApi = useApi({
  method: 'post',
  localData: [
    {
      id: '1',
      name: 'Company2222',
      level: 0,
      flag1: 'Y',
      flag2: true,
      flag3: '1',
      flag4: '0',
      children: [
        {
          id: '1-1',
          name: 'Company',
          level: 1,
          flag1: 'N',
          flag2: false,
          flag3: '1',
          flag4: '1',
          children: [
            {
              id: '1-1-1',
              name: 'CMM0204_01 Company Info. Maintenance',
              level: 2,
              flag1: '0',
              flag2: '1',
              flag3: '1',
              flag4: '0',
              children: [],
            },
            {
              id: '1-1-2',
              name: 'CMM0205_01 Parts Info. Maintenance',
              level: 2,
              flag1: '1',
              flag2: '0',
              flag3: '1',
              flag4: '1',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Follow Up Action',
      level: 0,
      flag1: true,
      flag2: '1',
      flag3: '1',
      flag4: '1',
      children: [
        {
          id: '2-1',
          name: 'Follow Up Action',
          level: 1,
          flag1: false,
          flag2: '1',
          flag3: '1',
          flag4: '0',
          children: [
            {
              id: '2-1-1',
              name: 'SVM0106_01 Remind List',
              level: 2,
              flag1: '0',
              flag2: '1',
              flag3: '1',
              flag4: '1',
              children: [],
            },
          ],
        },
      ],
    },
  ]
  ,
}, {
  onSuccess: (data, params) => {
    gridDs.value = data;
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const gridNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridViy2TableTemplateColumn_kV47aEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridViy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy0_copy0_viy2TableTemplateColumn_kV47aEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridCopy0_copy0_copy0_viy2TableTemplateColumn_kV47aEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
onMounted(() => {
  proxy.autoSetGridHeight();
});
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
        <VueButton id="viy2Button_8vp41k" ref="viy2Button_8vp41k" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      />
    </VueRow>
    <VueTable id="grid" ref="grid" header-align="center" :height="gridHeight" class="margin-top-div" :data="gridDs" :edit-config="gridEditConfig" :tree-config="gridTreeConfig">
      <VueInputColumn
        :edit-render="gridNameEditRender"
        field="name"
        :tree-node="true"
        show-overflow="tooltip"
        title="Menu Item"
        header-align="center"
        width="380px"
      />
      <VueTemplateColumn
        :edit-render="gridViy2TableTemplateColumn_kV47aEditRender"
        align="center"
        width="200px"
        title="Account Month Check"
      >
        <template #default="scope">
          <VueCheckbox
            id="viy2CheckBox_kVaYO"
            ref="viy2CheckBox_kVaYO"
            v-model="scope.row.flag1"
            true-label="Y"
            false-label="N"
          />
        </template>
      </VueTemplateColumn>
      <VueTemplateColumn
        :edit-render="gridViy2TableTemplateColumn_liAHZEditRender"
        align="center"
        title="Work Day Check"
        width="200px"
      >
        <template #default="scope">
          <VueCheckbox
            id="viy2CheckBox_liFbS"
            ref="viy2CheckBox_liFbS"
            v-model="scope.row.flag2"
            true-label="Y"
            false-label="N"
          />
        </template>
      </VueTemplateColumn>
      <VueTemplateColumn
        :edit-render="gridCopy0_copy0_viy2TableTemplateColumn_kV47aEditRender"
        align="center"
        width="210px"
        title="Parts Stock Taking Check"
      >
        <template #default="scope">
          <VueCheckbox
            id="viy2CheckBox_3qwDvA"
            ref="viy2CheckBox_3qwDvA"
            v-model="scope.row.flag3"
            true-label="Y"
            false-label="N"
          />
        </template>
      </VueTemplateColumn>
      <VueTemplateColumn
        :edit-render="gridCopy0_copy0_copy0_viy2TableTemplateColumn_kV47aEditRender"
        align="center"
        width="210px"
        title="Unit Stock Taking Check"
      >
        <template #default="scope">
          <VueCheckbox
            id="viy2CheckBox_3qxTg4"
            ref="viy2CheckBox_3qxTg4"
            v-model="scope.row.flag4"
            true-label="Y"
            false-label="N"
          />
        </template>
      </VueTemplateColumn>
    </VueTable>
  </VueForm>
</template>
