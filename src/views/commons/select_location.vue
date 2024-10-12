<script setup>
import { IconCloseBold, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
const props = defineProps({
  initData: Object,
});
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const total = ref();
defineOptions({
  name: 'select_location',
});
const form = ref();
const titlerow = ref();
const viy2Button_2uA36e = ref();
const viy2Button_fsC6p = ref();
const viy2Flex_XeXgN = ref();
const queryForm = ref();
const viy2Row_8l7K1g = ref();
const viy2InputBox_8l7K1r = ref();
const viy2Select_8l7K1O = ref();
const viy2Select_1lpfqmr = ref();
const viy2InputBox_1lpfqpM = ref();
const viy2Select_PIfwg = ref();
const viy2Radio_PKnr9 = ref();
const viy2Flex_Xf5hB = ref();
const grid = ref();
const viy2CheckBox_PLWGH = ref();
const viy2Row_YF2UB = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  point: '', workzone: '', binTypw: '', locationCd: '', locationType: '', mainLocationSign: 'ALL',
});
const viy2Radio_PKnr9Opts = reactive([
  { value: 'ALL', label: 'ALL' },
  { value: 'YES', label: 'YES' },
  { value: 'NO', label: 'NO' },
]);
const gridEditConfig = reactive({
});
const gridMouseConfig = reactive({
  selected: true,
  extension: true,
});
const viy2CheckBox_PLWGHOpts = [
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
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  url: '/common/valuelist/locationValueList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
}, {
  onSuccess: (data, params) => {
    total.value = data.totalElements;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const workZoneDsApi = useApi({
  url: '/common/helper/getWorkZoneList.json',
  method: 'post',
  data: {
    arg0: queryFormData.pointId,
  },
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const workZoneDs = workZoneDsApi.data;
const binTypeDsApi = useApi({
  url: '/common/helper/getBinTypeList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const binTypeDs = binTypeDsApi.data;
const locationClassificationDsApi = useApi({
  url: '/common/helper/getLocationClassificationList.json',
  method: 'post',
  data: () => {
    let list;
    if (queryFormData.locationTypeList.length == 1) {
      list = { arg0: 'S006FROZEN' };
    }
    if (queryFormData.locationTypeList.length == 2) {
      list = { arg0: 'S006NORMAL', arg1: 'S006TENTATIVE' };
    }
    if (queryFormData.locationTypeList.length == 4) {
      list = {};
    }
    return list;
  }
  ,
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const locationClassificationDs = locationClassificationDsApi.data;
const viy2Button_2uA36eClick = () => {
// emit('select', grid.value.getCurrentRecord());
  gridDsApi.runAsync();
};
const viy2Button_fsC6pClick = () => {
  emit('close');
};
const gridCellDblclick = (obj) => {
  emit('select', obj.row);
};
const gridLocationNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLocationTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridWorkzoneDescriptionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBinTypeDescriptionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridViy2TableTemplateColumn_PLLULEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const paginationCurrentChange = (currentPage) => {
  if (total.value === 0) {
    return;
  }
  gridDsApi.runAsync();
};
onMounted(() => {
  if (props.initData) {
    const params = props.initData;
    queryFormData.point = params.point;
    queryFormData.pointId = params.pointId;
    queryFormData.locationTypeList = params.locationTypeList;
    queryFormData.arg0 = params.flag;
    queryFormData.partsId = params.partsId;
    queryFormData.mainLocationSign = 'ALL';
    locationClassificationDsApi.runAsync();
    workZoneDsApi.runAsync();
    paginationPageSize.value = PAGE_SIZE;
  }
});
watch(() => props.initData, (newVal) => {
  if (newVal) {
    // 清空queryFormData中值
    for (const key in queryFormData) {
      queryFormData[key] = '';
    }
    const params = newVal;
    queryFormData.point = params.point;
    queryFormData.pointId = params.pointId;
    queryFormData.locationTypeList = params.locationTypeList;
    queryFormData.arg0 = params.flag;
    queryFormData.partsId = params.partsId;
    queryFormData.mainLocationSign = 'ALL';
    locationClassificationDsApi.runAsync();
    // grid.value.remove();
    // gridDs.value.content = [];
    workZoneDsApi.runAsync();
    paginationPageSize.value = PAGE_SIZE;
  }
}, {
  immediate: true,
  deep: true,
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
  paginationPageSize.value = PAGE_SIZE;
};
const resetTblResults = () => {
  grid.value.remove();
  gridDs.value.content = [];
  total.value = 0;
  paginationCurrentPage.value = 1;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="titlerow"
      ref="titlerow"
      class="aside-title-row"
    >
      <VueCol
        item-key="item"
        :md="{ span: 7 }"
      >
        <VueText id="viy2Text_frSdr" ref="viy2Text_frSdr" class="aside-title-text">
          {{ t('title.locationRef') }}
        </VueText>
      </VueCol>
      <VueCol
        item-key="item"
        class="aside-title-button"
        :md="{ span: 17 }"
      >
        <VueButton id="viy2Button_2uA36e" ref="viy2Button_2uA36e" icon-position="left" @click="viy2Button_2uA36eClick">
          {{ t('button.retrieve') }}
        </VueButton>
        <VueButton id="viy2Button_fsC6p" ref="viy2Button_fsC6p" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_fsC6pClick" />
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_XeXgN"
      ref="viy2Flex_XeXgN"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-aside"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_8l7K1g"
          ref="viy2Row_8l7K1g"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.point')"
              prop="point"
            >
              <VueInput
                id="viy2InputBox_8l7K1r"
                ref="viy2InputBox_8l7K1r"
                v-model="queryFormData.point"
                :clearable="true"
                :disabled="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.wz')"
              prop="workzone"
            >
              <VueSelect
                id="viy2Select_8l7K1O"
                ref="viy2Select_8l7K1O"
                v-model="queryFormData.workzone"
                :style="{ width: '200px' }"
                :clearable="true"
                :options="workZoneDs"
                :props="{
                  label: 'description',
                  value: 'workzoneId',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.binType')"
              prop="binTypw"
            >
              <VueSelect
                id="viy2Select_1lpfqmr"
                ref="viy2Select_1lpfqmr"
                v-model="queryFormData.binTypw"
                :style="{ width: '200px' }"
                :clearable="true"
                :options="binTypeDs"
                :props="{
                  label: 'description',
                  value: 'binTypeId',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.location')"
              prop="locationCd"
            >
              <VueInput
                id="viy2InputBox_1lpfqpM"
                ref="viy2InputBox_1lpfqpM"
                v-model="queryFormData.locationCd"
                :clearable="true"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.locationType')"
              prop="locationType"
            >
              <VueSelect
                id="viy2Select_PIfwg"
                ref="viy2Select_PIfwg"
                v-model="queryFormData.locationType"
                :style="{ width: '200px' }"
                :clearable="true"
                :options="locationClassificationDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.mainLocationSign')"
              prop="mainLocationSign"
            >
              <VueRadioGroup
                id="viy2Radio_PKnr9"
                ref="viy2Radio_PKnr9"
                v-model="queryFormData.mainLocationSign"
                radio-style="button"
                direction="horizontal"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_PKnr9Opts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_Xf5hB"
        ref="viy2Flex_Xf5hB"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" height="100%" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridLocationNoEditRender"
            field="locationNo"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.location')"
            header-align="center"
            width="200px"
          />
          <VueInputColumn
            :edit-render="gridLocationTypeEditRender"
            field="locationType"
            show-overflow="tooltip"
            :title="t('label.locationType')"
            header-align="center"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridWorkzoneDescriptionEditRender"
            field="workzoneDescription"
            show-overflow="tooltip"
            :title="t('label.wz')"
            header-align="center"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridBinTypeDescriptionEditRender"
            field="binTypeDescription"
            show-overflow="tooltip"
            :title="t('label.binType')"
            header-align="center"
            width="150px"
          />
          <VueTemplateColumn
            :edit-render="gridViy2TableTemplateColumn_PLLULEditRender"
            align="center"
            :title="t('label.mainLocation')"
            width="120px"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_PLWGH"
                ref="viy2CheckBox_PLWGH"
                v-model="scope.row.mainLocation"
                :disabled="true"
                true-label="Y"
                false-label="N"
              />
            </template>
          </VueTemplateColumn>
        </VueTable>
      </VueFlex>
      <VueRow
        id="viy2Row_YF2UB"
        ref="viy2Row_YF2UB"
      >
        <VueCol
          item-key="item"
          :md="{ span: 15 }"
        />
        <VueCol
          item-key="item"
          :md="{ span: 9 }"
        >
          <VuePagination
            id="pagination"
            ref="pagination"
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :background="true"
            :small="true"
            :style="{ 'justify-content': 'right' }"
            :total="total || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
