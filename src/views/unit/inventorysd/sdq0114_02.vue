<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
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
  name: 'sdq0114_02',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_ab3W9O = ref();
const queryForm = ref();
const viy2Panel_6IAt5Y = ref();
const viy2Form_aekkzV = ref();
const viy2Row_hpInK = ref();
const viy2InputBox_abSxYk = ref();
const viy2InputBox_gTr4i = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_tSDiP = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
});
const viy2Form_aekkzVData = reactive({
  model: 'B6AD00010A SIRIUS-B6A1', point: 'YT350 Yamaha Town Nha Trang_DO 10',
});
const rules = reactive({
  viy2InputBox_abSxYkRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      frameNo: 'RLCUT1326NY133007',
      engineNo: 'E42VU-102607',
    },
  ],
});
const gridDs = gridDsApi.data;
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
        <VueButton id="viy2Button_ab3W9O" ref="viy2Button_ab3W9O" icon-position="left" @click="viy2Button_ab3W9OClick">
          Back
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      />
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      label-width="80px"
      class="margin-top-div except-height-css"
      :model="queryFormData"
    >
      <VuePanel id="viy2Panel_6IAt5Y" ref="viy2Panel_6IAt5Y" title="Condition" :collapse="true">
        <VueForm
          id="viy2Form_aekkzV"
          ref="viy2Form_aekkzV"
          label-width="130px"
          :model="viy2Form_aekkzVData"
        >
          <VueRow
            id="viy2Row_hpInK"
            ref="viy2Row_hpInK"
          >
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="Model"
                prop="model"
                :rules="rules.viy2InputBox_abSxYkRules"
              >
                <VueInput
                  id="viy2InputBox_abSxYk"
                  ref="viy2InputBox_abSxYk"
                  v-model="viy2Form_aekkzVData.model"
                  :clearable="true"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '250px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="Point"
                prop="point"
              >
                <VueInput
                  id="viy2InputBox_gTr4i"
                  ref="viy2InputBox_gTr4i"
                  v-model="viy2Form_aekkzVData.point"
                  :clearable="true"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '250px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            id="viy2Row_tSDiP"
            ref="viy2Row_tSDiP"
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
      <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig">
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
          :edit-render="gridFrameNoEditRender"
          field="frameNo"
          show-overflow="tooltip"
          :resizable="true"
          :sortable="true"
          title="Frame No."
          width="180px"
        />
        <VueInputColumn
          :edit-render="gridEngineNoEditRender"
          field="engineNo"
          show-overflow="tooltip"
          :resizable="true"
          :sortable="true"
          title="Engine No."
          width="150px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
