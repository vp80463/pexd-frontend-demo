<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const route = useParams();
defineOptions({
  name: 'sdq0113_02',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_ab3W9O = ref();
const viy2Flex_12M2U8 = ref();
const queryForm = ref();
const viy2Row_hhRfa = ref();
const viy2InputBox_abSxYk = ref();
const viy2InputBox_gOz7Y = ref();
const viy2InputBox_avXlVo = ref();
const viy2Flex_12M74Y = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  point: '', model: '', colorNm: '',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const detailDsApi = useApi({
  url: '/unit/sdq0113/findStockInformationInquiryDetail.json',
  method: 'post',
  params: () => {
    return queryFormData;
  },
});
const detailDs = detailDsApi.data;
const viy2Button_ab3W9OClick = () => {
  debugger;
};
const gridFrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEngineNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBatteryNo1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBatteryNo2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReceivedDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'YYYYMMDD',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridStockAgeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridStockStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  const params = route;
  if (params) {
    queryFormData.point = params.point;
    queryFormData.model = params.model;
    queryFormData.colorNm = params.colorNm;
    queryFormData.pointId = params.pointId;
    queryFormData.modelId = params.modelId;
  }
  detailDsApi.runAsync();
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
        <VueButton id="viy2Button_ab3W9O" ref="viy2Button_ab3W9O" icon-position="left" type="warning" @click="viy2Button_ab3W9OClick">
          {{ t('button.back') }}
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
      id="viy2Flex_12M2U8"
      ref="viy2Flex_12M2U8"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_hhRfa"
          ref="viy2Row_hhRfa"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.point')"
              prop="point"
            >
              <VueInput
                id="viy2InputBox_abSxYk"
                ref="viy2InputBox_abSxYk"
                v-model="queryFormData.point"
                :clearable="true"
                :readonly="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.model')"
              prop="model"
            >
              <VueInput
                id="viy2InputBox_gOz7Y"
                ref="viy2InputBox_gOz7Y"
                v-model="queryFormData.model"
                :clearable="true"
                :readonly="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.colorName')"
              prop="colorNm"
            >
              <VueInput
                id="viy2InputBox_avXlVo"
                ref="viy2InputBox_avXlVo"
                v-model="queryFormData.colorNm"
                :clearable="true"
                :readonly="true"
                class="no-border"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_12M74Y"
        ref="viy2Flex_12M74Y"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" :height="gridHeight - 30" :data="detailDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            :edit-render="gridFrameNoEditRender"
            field="frameNo"
            show-overflow="tooltip"
            :title="t('label.frameNo')"
            width="120px"
          />
          <VueInputColumn
            :edit-render="gridEngineNoEditRender"
            field="engineNo"
            show-overflow="tooltip"
            :title="t('label.engineNo')"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridBatteryNo1EditRender"
            field="batteryNo1"
            show-overflow="tooltip"
            :title="t('label.batteryId1')"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridBatteryNo2EditRender"
            field="batteryNo2"
            show-overflow="tooltip"
            :title="t('label.batteryId2')"
            width="150px"
          />
          <VueDateTimeColumn
            :edit-render="gridReceivedDateEditRender"
            field="receivedDate"
            align="center"
            :title="t('label.receiptDate')"
            width="150px"
          />
          <VueNumberColumn
            :edit-render="gridStockAgeEditRender"
            field="stockAge"
            align="right"
            :title="t('label.stockAge')"
            width="200px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridStockStatusEditRender"
            field="stockStatus"
            show-overflow="tooltip"
            :title="t('label.stockStatus')"
            width="150px"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
