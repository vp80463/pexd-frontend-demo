<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'cmm0717_01',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_4GB8Xo = ref();
const viy2Button_83Yd = ref();
const viy2Button_1KgPD8 = ref();
const viy2Flex_12gBw7 = ref();
const queryForm = ref();
const viy2Row_angkyU = ref();
const viy2Select_angkz5 = ref();
const viy2Flex_12gBUL = ref();
const grid = ref();
const viy2Row_anitWW = ref();
const formData = reactive({
});
const queryFormData = reactive({
  modelType: '',
});
const rules = reactive({
  viy2Select_angkz5Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const modelTypeDsApi = useApi({
  url: '/common/helper/getModelTypeList.json',
  method: 'post',
});
const modelTypeDs = modelTypeDsApi.data;
const gridModelTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridJobCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridJobNmEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridHourEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridLaborCostEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridTotalCostEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
});
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_GgDWR"
      ref="viy2Row_GgDWR"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" type="warning">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="viy2Button_4GB8Xo" ref="viy2Button_4GB8Xo" icon-position="left">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left">
          {{ t('button.retrieve') }}
        </VueButton>
        <VueButton id="viy2Button_1KgPD8" ref="viy2Button_1KgPD8" icon-position="left" type="info">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_12gBw7"
      ref="viy2Flex_12gBw7"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="130px"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_angkyU"
          ref="viy2Row_angkyU"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.modelType')"
              prop="modelType"
              :rules="rules.viy2Select_angkz5Rules"
            >
              <VueSelect
                id="viy2Select_angkz5"
                ref="viy2Select_angkz5"
                v-model="queryFormData.modelType"
                :style="{ width: '200px' }"
                :options="modelTypeDs"
                :props="{
                  label: 'categoryNm',
                  value: 'productCategoryId',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_12gBUL"
        ref="viy2Flex_12gBUL"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_anitWW"
            ref="viy2Row_anitWW"
          >
            <VueCol
              item-key="item"
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
            :edit-render="gridModelTypeEditRender"
            field="modelType"
            :title="t('label.modelType')"
            width="120px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridJobCdEditRender"
            field="JobCd"
            :title="t('label.jobCode')"
            width="120px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridJobNmEditRender"
            field="JobNm"
            :title="t('label.jobName')"
            width="175px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridHourEditRender"
            field="hour"
            :title="t('label.laborHours')"
            width="150px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridLaborCostEditRender"
            field="laborCost"
            :title="t('label.laborCost')"
            width="120px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridTotalCostEditRender"
            field="TotalCost"
            :title="t('label.totalCost')"
            width="120px"
            header-align="center"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
