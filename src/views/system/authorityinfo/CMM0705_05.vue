<script setup>
import { VueCheckbox, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'CMM0705_05',
});
const form = ref();
const viy2Row_10QMyC = ref();
const viy2Button_8vp41k = ref();
const viy2Button_5AQ2Ks = ref();
const viy2Flex_112Egr = ref();
const viy2Panel_yH62g = ref();
const viy2Row_yH10Y = ref();
const viy2InputBox_yHvPK = ref();
const viy2InputBox_5B1GCq = ref();
const viy2Flex_112TZ5 = ref();
const viy2Panel_5AZY2m = ref();
const viy2Table_5AZY2n = ref();
const viy2CheckBox_5AZY2O = ref();
const formData = reactive({
  roleCd: '', roleNm: '',
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
const viy2CheckBox_5AZY2OOpts = [
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
const viy2Table_5AZY2nNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_5AZY2nCopy0_copy0_copy0_copy0_viy2TableTemplateColumn_kV47aEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
onMounted(() => {
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
        <VueButton id="viy2Button_8vp41k" ref="viy2Button_8vp41k" icon-position="left">
          Back
        </VueButton>
        <VueButton id="viy2Button_5AQ2Ks" ref="viy2Button_5AQ2Ks" icon-position="left" type="warning">
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
    <VueFlex
      id="viy2Flex_112Egr"
      ref="viy2Flex_112Egr"
      direction="column"
      class="full-height"
    >
      <VuePanel id="viy2Panel_yH62g" ref="viy2Panel_yH62g" :title="t('label.header')" class="margin-top-div0 except-height-css">
        <VueRow
          id="viy2Row_yH10Y"
          ref="viy2Row_yH10Y"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Role Code"
              prop="roleCd"
            >
              <VueInput
                id="viy2InputBox_yHvPK"
                ref="viy2InputBox_yHvPK"
                v-model="formData.roleCd"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Role Name"
              prop="roleNm"
            >
              <VueInput
                id="viy2InputBox_5B1GCq"
                ref="viy2InputBox_5B1GCq"
                v-model="formData.roleNm"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
      <VueFlex
        id="viy2Flex_112TZ5"
        ref="viy2Flex_112TZ5"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_5AZY2m" ref="viy2Panel_5AZY2m" :title="t('label.detail')" height="100%">
          <VueTable id="viy2Table_5AZY2n" ref="viy2Table_5AZY2n" header-align="center" height="auto" :data="gridDs" :edit-config="viy2Table_5AZY2nEditConfig" :tree-config="viy2Table_5AZY2nTreeConfig" :mouse-config="viy2Table_5AZY2nMouseConfig">
            <VueInputColumn
              :edit-render="viy2Table_5AZY2nNameEditRender"
              field="name"
              :tree-node="true"
              show-overflow="tooltip"
              title="Menu Item"
              header-align="center"
              width="380px"
            />
            <VueTemplateColumn
              :edit-render="viy2Table_5AZY2nCopy0_copy0_copy0_copy0_viy2TableTemplateColumn_kV47aEditRender"
              align="center"
              width="140px"
              title="Allow to access"
            >
              <template #default="scope">
                <VueCheckbox
                  id="viy2CheckBox_5AZY2O"
                  ref="viy2CheckBox_5AZY2O"
                  v-model="scope.row.flag4"
                  true-label="Y"
                  false-label="N"
                />
              </template>
            </VueTemplateColumn>
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
