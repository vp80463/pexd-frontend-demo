<script setup>
import { IconDelete, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const currentDate = new Date();
// 获取当前月份的第一天
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDay = new Date(nextMonth - 1);
defineOptions({
  name: 'sdm0601_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_ab3PDC = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_ab3W9O = ref();
const queryForm = ref();
const viy2Panel_6IAt5Y = ref();
const viy2Row_6IAt6a = ref();
const viy2InputBox_abSxYk = ref();
const viy2InputBox_86GVie = ref();
const viy2InputBox_ab8Q86 = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_zQgmS = ref();
const viy2Button_aoH9ZS = ref();
const viy2Button_aoHa0d = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  cusTaxCode: '', cusTaxName: '', address: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridViy2TableButtonColumn_GxNS1Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      taxCode: '2900466559',
      taxName: 'CÔNG TY TNHH XE MÁY TIẾN NAM',
      address: 'Khối 4,Thị trấn Đô Lương, Huyện Đô Lương, Tỉnh Nghệ An, Việt Nam',
    },
  ],
});
const gridDs = gridDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm('Are you sure to reset this page?')
    .then(() => {
      const filterFormElement = orderForm.value;
      if (filterFormElement && filterFormElement.resetFields) {
        filterFormElement.resetFields();
      }
    }).catch(() => {
    });
};
const viy2Button_ab3PDCClick = () => {
  debugger;
};
const viy2Button_5FbWKcClick = () => {
  debugger;
};
const viy2Button_ab3W9OClick = () => {
  debugger;
};
const gridCusTaxCodeEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridTaxNameEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridAddressEditRender = computed(() => {
  return {
    enabled: true,
  };
});
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
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
          Reset
        </VueButton>
        <VueButton id="viy2Button_ab3PDC" ref="viy2Button_ab3PDC" icon-position="left" @click="viy2Button_ab3PDCClick">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" @click="viy2Button_5FbWKcClick">
          Retrieve
        </VueButton>
        <VueButton id="viy2Button_ab3W9O" ref="viy2Button_ab3W9O" icon-position="left" type="info" @click="viy2Button_ab3W9OClick">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      class="margin-top-div0 except-height-css"
      :model="queryFormData"
    >
      <VuePanel id="viy2Panel_6IAt5Y" ref="viy2Panel_6IAt5Y" title="Header" :collapse="true">
        <VueRow
          id="viy2Row_6IAt6a"
          ref="viy2Row_6IAt6a"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Cus tax Code"
              prop="cusTaxCode"
            >
              <VueInput
                id="viy2InputBox_abSxYk"
                ref="viy2InputBox_abSxYk"
                v-model="queryFormData.cusTaxCode"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Cus tax Name"
              prop="cusTaxName"
            >
              <VueInput
                id="viy2InputBox_86GVie"
                ref="viy2InputBox_86GVie"
                v-model="queryFormData.cusTaxName"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Address"
              prop="address"
            >
              <VueInput
                id="viy2InputBox_ab8Q86"
                ref="viy2InputBox_ab8Q86"
                v-model="queryFormData.address"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            id="viy2Row_zQgmS"
            ref="viy2Row_zQgmS"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_aoH9ZS" ref="viy2Button_aoH9ZS" icon-position="left">
                Import
              </VueButton>
              <VueButton id="viy2Button_aoHa0d" ref="viy2Button_aoHa0d" icon-position="left" class="icon-button-width">
                +
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="grid" ref="grid" header-align="center" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig">
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
        />
        <VueInputColumn
          :edit-render="gridCusTaxCodeEditRender"
          field="CusTaxCode"
          show-overflow="tooltip"
          title="Cus tax Code"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridTaxNameEditRender"
          field="taxName"
          show-overflow="tooltip"
          title="Tax Name"
          width="200px"
        />
        <VueInputColumn
          :edit-render="gridAddressEditRender"
          field="address"
          show-overflow="tooltip"
          title="Address"
          width="500px"
        />
        <VueButtonColumn
          fixed="right"
          align="center"
          width="40px"
          :buttons="gridViy2TableButtonColumn_GxNS1Buttons"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
