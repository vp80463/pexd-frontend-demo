<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { get } from 'lodash-es';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { OrderType } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const initializedFlag = ref(true);
const brandFlag = ref(false);
const router = useRouter();
const orderId = ref();
const brand = ref();
const disableButton = ref(true);
const routeParam = useParams();
defineOptions({
  name: 'cmm0001_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_1bUQHY = ref();
const viy2Button_1bUQIc = ref();
const viy2Flex_dkb6D = ref();
const conditionForm = ref();
const orderType = ref();
const viy2Flex_dkqy0 = ref();
const viy2Panel_80GOW = ref();
const viy2Row_29swGY = ref();
const viy2Button_29swKX = ref();
const grid = ref();
const formData = reactive({
});
const conditionFormData = reactive({
  orderType: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/master/todolist/queryOrder.json',
  method: 'post',
  data: () => {
    return conditionFormData;
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const orderTypeDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S082'],
}, {
  initialData: {
    S082: [],
  },
});
const orderTypeDs = orderTypeDsApi.data;
const viy2Button_1bUQHYClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_1bUQIcClick = () => {
  const queryFormElement = conditionForm.value;
  queryFormElement.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const orderTypeChange = (value, data) => {
  if (value == OrderType.ServiceOrder || value == OrderType.ServiceFor0KMMC || value == OrderType.BatteryClaim) {
    brandFlag.value = true;
  } else {
    brandFlag.value = false;
    disableButton.value = true;
  }
};
const viy2Button_29swKXClick = () => {
  viewDetail();
};
const gridCellClick = (obj) => {
  debugger;
  const row = obj.row;
  orderId.value = row.orderId;
  if (conditionFormData.orderType !== OrderType.PurchaseOrder
&& conditionFormData.orderType !== OrderType.SalesOrder) {
    brand.value = row.brand;
  }
  if (row.orderId == '') {
    disableButton.value = true;
  } else {
    disableButton.value = false;
  }
};
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEmployeeNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridBrandEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  initData();
});
// reset监听
watch(() => conditionFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
// 监听router参数有变化时，
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const initData = () => {
  if (Object.entries(routeParam).length !== 0) {
    conditionFormData.orderType = routeParam.orderType;
  }
};
const resetCondition = () => {
// 清空表单元素
  conditionForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in conditionFormData) {
    conditionFormData[key] = '';
  }
  resetTblResults();
  initializedFlag.value = true;
};
const resetTblResults = () => {
  grid.value.remove();
  disableButton.value = true;
};
// 跳转详情页
const viewDetail = () => {
// 跳转到详情页的必要参数
  const name = ref();
  const title = ref();
  debugger;
  if (conditionFormData.orderType == OrderType.PurchaseOrder) {
    name.value = 'spm0404_02';
    title.value = 'title.partsPurchaseOrderDetailModify_02';
  } else if (conditionFormData.orderType == OrderType.SalesOrder) {
    name.value = 'spm0201_03';
    title.value = 'title.fastSalesEntry_03';
  } else if (conditionFormData.orderType == OrderType.ServiceOrder) {
    if (brand.value == 'YAMAHA') {
      name.value = 'svm0102_01';
      title.value = 'title.serviceOrder_01';
    } else {
      name.value = 'svm0120_01';
      title.value = 'title.serviceOrderForOtherBrand_01';
    }
  } else if (conditionFormData.orderType == OrderType.ServiceFor0KMMC) {
    name.value = 'svm0130_01';
    title.value = 'menu.SVM0130_01';
  } else if (conditionFormData.orderType == OrderType.BatteryClaim) {
    name.value = 'svm0109_01';
    title.value = 'title.claimForBattery';
  }
  const data = {
    orderId: orderId.value,
  };
  useMultiTags().openTag({
    name: name.value, // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: name.value }).meta.title = t(title.value);
  // router导航到页面并传递参数
  router.push({ name: name.value, data });
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
        <VueButton id="viy2Button_1bUQHY" ref="viy2Button_1bUQHY" icon-position="left" type="warning" @click="viy2Button_1bUQHYClick">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_1bUQIc" ref="viy2Button_1bUQIc" icon-position="left" type="info" @click="viy2Button_1bUQIcClick">
          Retrieve
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_dkb6D"
      ref="viy2Flex_dkb6D"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="conditionForm"
        ref="conditionForm"
        class="margin-top-div0 except-height-css"
        :model="conditionFormData"
      >
        <VueFormItem
          :label="t('label.orderType')"
          prop="orderType"
        >
          <VueSelect
            id="orderType"
            ref="orderType"
            v-model="conditionFormData.orderType"
            :style="{ width: '230px' }"
            :clearable="true"
            :options="get(orderTypeDs, 'S082')"
            :props="{
              label: 'codeData1',
              value: 'codeDbid',
            }"
            @change="orderTypeChange"
          />
        </VueFormItem>
      </VueForm>
      <VueFlex
        id="viy2Flex_dkqy0"
        ref="viy2Flex_dkqy0"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_80GOW" ref="viy2Panel_80GOW" :title="t('common.label.retrievedResult')" :collapse="true" collapse-icon-position="right" height="100%">
          <template #header>
            <div style="width: 200px">
              <VueRow
                id="viy2Row_29swGY"
                ref="viy2Row_29swGY"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_29swKX" ref="viy2Button_29swKX" icon-position="left" :disabled="disableButton" @click="viy2Button_29swKXClick">
                    Button
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-click="gridCellClick">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              width="200px"
              :title="t('label.orderNo')"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridOrderStatusEditRender"
              field="orderStatus"
              width="200px"
              :title="t('label.orderStatus')"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridEmployeeNameEditRender"
              field="employeeName"
              width="200px"
              :title="t('label.employeeName')"
              header-align="center"
            />
            <VueDateTimeColumn
              :edit-render="gridOrderDateEditRender"
              field="orderDate"
              align="center"
              width="200px"
              :title="t('label.orderDate')"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridBrandEditRender"
              field="brand"
              :visible="brandFlag"
              width="200px"
              :title="t('label.brand')"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
