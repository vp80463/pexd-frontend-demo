<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
// 使用useRoute来获取路由信息
const route = useRoute();
const router = useRouter();
const detailPanelModel = ref(true);
const routeParam = useParams();
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const selectFlag = ref(false);
defineOptions({
  name: 'spm0201_04',
});
const form = ref();
const viy2Row_10QMyC = ref();
const backBtn = ref();
const viy2Button_5GLRO0 = ref();
const viy2Button_gM7II = ref();
const viy2Button_gMc36 = ref();
const viy2Flex_gTuLI = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_5HGG5M = ref();
const viy2InputBox_5HOPSO = ref();
const viy2InputBox_CuC6i = ref();
const viy2DateTimePicker_eHUMc = ref();
const viy2InputBox_CxlSK = ref();
const viy2InputBox_Cxud2 = ref();
const viy2Flex_gTzgz = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const formData = reactive({
});
const orderFormData = reactive({
  orderNo: '', orderType: '', customer: '', deliveryPlanDate: '', point: '', memo: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const shipmentDsApi = useApi({
  url: '/parts/spm020104/shipment.json',
  method: 'post',
  data: () => {
    const allTableDataList = grid.value.getCheckboxRecords();
    orderFormData.allTableDataList = allTableDataList;
    return { ...orderFormData };
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
  },
  manual: true,
});
const shipmentDs = shipmentDsApi.data;
const gridDsApi = useApi({
  url: '/parts/spm020104/getPickingItemList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    orderFormData.orderNo = data.orderNo;
    orderFormData.orderType = data.orderType;
    orderFormData.customer = data.customer;
    orderFormData.deliveryPlanDate = data.deliveryPlanDate;
    orderFormData.point = data.point;
    orderFormData.memo = data.memo;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const backBtnClick = () => {
  emit('back');
};
const viy2Button_5GLRO0Click = () => {
};
const viy2Button_gM7IIClick = () => {
  shipmentDs.runAsync();
}
;
const viy2Button_gMc36Click = () => {
}
;
const gridCheckboxChange = () => {
  selectFlag.value = grid.value.getCheckboxRecords().length > 0;
};
const gridCheckboxAll = () => {
  selectFlag.value = grid.value.getCheckboxRecords().length > 0;
};
const gridSeqNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPickingQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  initData();
});
// 监听router参数有变化时，
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const initData = () => {
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    gridDsApi.runAsync({
      deliveryOrderId: params.deliveryOrderId,
    });
  }
};
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
        <VueButton id="backBtn" ref="backBtn" icon-position="left" @click="backBtnClick">
          {{ t('button.back') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5GLRO0" ref="viy2Button_5GLRO0" icon-position="left" :disabled="!selectFlag" @click="viy2Button_5GLRO0Click">
          {{ t('button.print') }}
        </VueButton>
        <VueButton id="viy2Button_gM7II" ref="viy2Button_gM7II" icon-position="left" :disabled="!selectFlag" @click="viy2Button_gM7IIClick">
          {{ t('button.shipment') }}
        </VueButton>
        <VueButton id="viy2Button_gMc36" ref="viy2Button_gMc36" icon-position="left" type="info" :disabled="!selectFlag" @click="viy2Button_gMc36Click">
          {{ t('button.discrepancy') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_gTuLI"
      ref="viy2Flex_gTuLI"
      direction="column"
      class="full-height"
    >
      <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="false" :title="t('label.header')" class="margin-top-div except-height-css">
        <VueForm
          id="orderForm"
          ref="orderForm"
          label-width="130px"
          :model="orderFormData"
        >
          <VueRow
            id="viy2Row_3mqzSt"
            ref="viy2Row_3mqzSt"
          >
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.orderNo')"
                prop="orderNo"
              >
                <VueInput
                  id="viy2InputBox_5HGG5M"
                  ref="viy2InputBox_5HGG5M"
                  v-model="orderFormData.orderNo"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.orderType')"
                prop="orderType"
              >
                <VueInput
                  id="viy2InputBox_5HOPSO"
                  ref="viy2InputBox_5HOPSO"
                  v-model="orderFormData.orderType"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.customerm')"
                prop="customer"
              >
                <VueInput
                  id="viy2InputBox_CuC6i"
                  ref="viy2InputBox_CuC6i"
                  v-model="orderFormData.customer"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.deliveryPlanDate')"
                label-width="145px"
                prop="deliveryPlanDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_eHUMc"
                  ref="viy2DateTimePicker_eHUMc"
                  v-model="orderFormData.deliveryPlanDate"
                  type="date"
                  :disabled="false"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.point')"
                prop="point"
              >
                <VueInput
                  id="viy2InputBox_CxlSK"
                  ref="viy2InputBox_CxlSK"
                  v-model="orderFormData.point"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.memo')"
                prop="memo"
              >
                <VueInput
                  id="viy2InputBox_Cxud2"
                  ref="viy2InputBox_Cxud2"
                  v-model="orderFormData.memo"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VueFlex
        id="viy2Flex_gTzgz"
        ref="viy2Flex_gTzgz"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" :title="t('label.detail')" :collapse="false" height="100%">
          <template #header>
            <div style="width: 400px">
              <VueRow
                v-show="detailPanelModel"
                id="viy2Row_wZvy4"
                ref="viy2Row_wZvy4"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                />
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs.tableDataList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @checkbox-change="gridCheckboxChange" @checkbox-all="gridCheckboxAll">
            <VueRow
              id="viy2Row_AsHNi"
              ref="viy2Row_AsHNi"
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
            <VueSelectionColumn
              v-if="'S057APPROVED' === statusFlag"
              align="center"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueInputColumn
              :edit-render="gridSeqNoEditRender"
              field="seqNo"
              :title="t('label.pickingSeqNo')"
              width="250px"
            />
            <VueInputColumn
              :edit-render="gridOrderPartsNoEditRender"
              field="orderPartsNo"
              :title="t('label.orderPartsNo')"
              width="250px"
            />
            <VueInputColumn
              :edit-render="gridOrderPartsNmEditRender"
              field="orderPartsNm"
              :title="t('label.orderPartsName')"
              width="250px"
            />
            <VueInputColumn
              :edit-render="gridAllocatedPartsNoEditRender"
              field="allocatedPartsNo"
              :title="t('label.allocatedPartsNo')"
              width="250px"
            />
            <VueInputColumn
              :edit-render="gridAllocatedPartsNmEditRender"
              field="allocatedPartsNm"
              :title="t('label.allocatedPartsName')"
              width="250px"
            />
            <VueInputColumn
              :edit-render="gridLocationEditRender"
              field="location"
              :title="t('label.location')"
              width="250px"
            />
            <VueNumberColumn
              :edit-render="gridPickingQtyEditRender"
              field="pickingQty"
              align="right"
              :title="t('label.pickingQuantity')"
              width="140px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
