<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { formatPartNo, formatQty } from '@/pj-commonutils.js';
const props = defineProps({
  params: Object,
});
const emit = defineEmits(['close']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'spm0306_03',
});
const form = ref();
const viy2Row_10QMyC = ref();
const close = ref();
const viy2Flex_14T35m = ref();
const queryForm = ref();
const viy2Panel_RzOai = ref();
const viy2Row_RzXMg = ref();
const fromPoint = ref();
const toPoint = ref();
const duNo = ref();
const viy2Flex_aMT75I = ref();
const viy2Panel_wZlWr = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const formData = reactive({
});
const queryFormData = reactive({
  fromPoint: '', toPoint: '', duNo: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/parts/spm0306/getTransferPartsDetailList.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    if (data && data.length > 0) {
      queryFormData.fromPoint = data[0].fromPoint;
      queryFormData.fromPointId = data[0].fromPointId;
      queryFormData.toPoint = data[0].toPoint;
      queryFormData.toPointId = data[0].toPointId;
      queryFormData.duNo = data[0].duNo;
    } else {
      queryForm.value.resetFields();
      for (const key in queryFormData) {
        queryFormData[key] = '';
      }
      gridDs.value.splice(0);
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const closeClick = () => {
  doClose();
};
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTransferQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridTransferQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
watch(() => props.params, (params) => {
  if (params) {
    gridDsApi.runAsync({
      deliveryOrderId: params.deliveryOrderId,
    });
  }
}, {
  immediate: true,
});
const doClose = () => {
  emit('close');
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_10QMyC"
      ref="viy2Row_10QMyC"
      class="aside-title-row"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueText id="viy2Text_Rz5E2" ref="viy2Text_Rz5E2" class="aside-title-text">
          {{ t('title.transferPartsDetail_03') }}
        </VueText>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="close" ref="close" @click="closeClick">
          {{ t('button.close') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_14T35m"
      ref="viy2Flex_14T35m"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-aside"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_RzOai" ref="viy2Panel_RzOai" :title="t('label.condition')">
          <VueRow
            id="viy2Row_RzXMg"
            ref="viy2Row_RzXMg"
          >
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.fromPoint')"
                prop="fromPoint"
              >
                <VueInput
                  id="fromPoint"
                  ref="fromPoint"
                  v-model="queryFormData.fromPoint"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '300px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.toPoint')"
                prop="toPoint"
              >
                <VueInput
                  id="toPoint"
                  ref="toPoint"
                  v-model="queryFormData.toPoint"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '300px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.duNo')"
                prop="duNo"
              >
                <VueInput
                  id="duNo"
                  ref="duNo"
                  v-model="queryFormData.duNo"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '300px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_aMT75I"
        ref="viy2Flex_aMT75I"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" :title="t('label.detail')" height="100%">
          <VueTable id="grid" ref="grid" height="auto" :show-footer="true" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            <VueInputColumn
              :formatter="gridPartsNoFormatter"
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              :sortable="true"
              :title="t('label.partsNumber')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              footer-align="center"
              :aggregate-label="t('label.total')"
              :sortable="true"
              :title="t('label.partsName')"
              width="250px"
            />
            <VueNumberColumn
              :formatter="gridTransferQtyFormatter"
              :edit-render="gridTransferQtyEditRender"
              field="transferQty"
              align="right"
              aggregate="sum"
              :sortable="true"
              :title="t('label.transferQuantity')"
              width="150px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
