<script setup>
import { IconCloseBold, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const props = defineProps({
  initData: Object,
});
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const total = ref();
defineOptions({
  name: 'select_consumer',
});
const form = ref();
const titlerow = ref();
const viy2Button_2uA36e = ref();
const viy2Button_pMAH6 = ref();
const viy2Button_fsC6p = ref();
const viy2Flex_vGcX2 = ref();
const queryForm = ref();
const viy2Row_yq3p2 = ref();
const viy2InputBox_fsX54 = ref();
const viy2InputBox_5lkBRO = ref();
const viy2InputBox_pRu5A = ref();
const viy2InputBox_pS0ps = ref();
const viy2Flex_vGnaL = ref();
const grid = ref();
const viy2Row_1ZsiT = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  content: '', mobilePhone: '', idNo: '', vipNo: '',
});
const rules = reactive({
  viy2InputBox_5lkBRORules: [
    {
      required: true,
      message: t('errors.required', [t('label.mobilephone')]),
    },
  ],
});
const gridEditConfig = reactive({
});
const gridMouseConfig = reactive({
  selected: true,
  extension: true,
});
const paginationCurrentPage = ref(1);
const paginationPageSize = ref(15);
const gridDsApi = useApi({
  url: '/common/valuelist/consumerByUnitList.json',
  method: 'post',
  data: () => {
    queryFormData.pageSize = paginationPageSize.value;
    queryFormData.currentPage = paginationCurrentPage.value;
    return Object.assign({}, queryFormData);
  },
}, {
  onSuccess: (data, params) => {
    total.value = data.total;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const viy2Button_2uA36eClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Button_pMAH6Click = () => {
  emit('select', grid.value.getCurrentRecord());
};
const viy2Button_fsC6pClick = () => {
  emit('close');
};
const gridCellDblclick = (obj) => {
  emit('select', obj.row);
};
const gridConsumerNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridVipNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMobilePhoneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridIdNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEmailEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const paginationCurrentChange = () => {
  gridDsApi.runAsync();
};
const paginationSizeChange = () => {
  gridDsApi.runAsync();
};
onMounted(() => {
});
watch(() => props.initData, (newVal) => {
  if (newVal) {
    queryFormData.content = null;
    queryFormData.mobilePhone = null;
    queryFormData.idNo = null;
    queryFormData.vipNo = null;
    gridDs.value = [];
  }
}, {
  immediate: true,
  deep: true,
});
watch(() => ({ ...queryFormData }), (newVal, oldVal) => {
  resetTblResults();
}, { deep: true });
const resetTblResults = () => {
  if (gridDs.value && gridDs.value.list) {
    gridDs.value.list.splice(0);
  } else {
    gridDs.value.total = 0;
    gridDs.value.list = [];
  }
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
          {{ t('button.selectConsumer') }}
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
        <VueButton id="viy2Button_pMAH6" ref="viy2Button_pMAH6" icon-position="left" type="info" @click="viy2Button_pMAH6Click">
          {{ t('button.set') }}
        </VueButton>
        <VueButton id="viy2Button_fsC6p" ref="viy2Button_fsC6p" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_fsC6pClick" />
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_vGcX2"
      ref="viy2Flex_vGcX2"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-suffix=":"
        class="margin-top-aside"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_yq3p2"
          ref="viy2Row_yq3p2"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.name')"
              prop="content"
            >
              <VueInput
                id="viy2InputBox_fsX54"
                ref="viy2InputBox_fsX54"
                v-model="queryFormData.content"
                :clearable="true"
                placeholder=" Last/Middle/First Name"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.mobilephone')"
              prop="mobilePhone"
              :rules="rules.viy2InputBox_5lkBRORules"
            >
              <VueInput
                id="viy2InputBox_5lkBRO"
                ref="viy2InputBox_5lkBRO"
                v-model="queryFormData.mobilePhone"
                :clearable="true"
                :maxlength="10"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.consumerIdNo')"
              prop="idNo"
            >
              <VueInput
                id="viy2InputBox_pRu5A"
                ref="viy2InputBox_pRu5A"
                v-model="queryFormData.idNo"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.vipNumber')"
              prop="vipNo"
            >
              <VueInput
                id="viy2InputBox_pS0ps"
                ref="viy2InputBox_pS0ps"
                v-model="queryFormData.vipNo"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_vGnaL"
        ref="viy2Flex_vGnaL"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" height="100%" :data="gridDs.list" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
          <VueIndexColumn
            align="center"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridConsumerNameEditRender"
            field="consumerName"
            show-overflow="tooltip"
            :title="t('label.consumerName')"
            header-align="center"
            min-width="200px"
          />
          <VueInputColumn
            :edit-render="gridVipNoEditRender"
            field="vipNo"
            show-overflow="tooltip"
            :title="t('label.vipNumber')"
            header-align="center"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridMobilePhoneEditRender"
            field="mobilePhone"
            show-overflow="tooltip"
            :title="t('label.mobilephone')"
            header-align="center"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridIdNoEditRender"
            field="idNo"
            show-overflow="tooltip"
            :title="t('label.consumerIdNo')"
            header-align="center"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridEmailEditRender"
            field="email"
            show-overflow="tooltip"
            :title="t('label.email')"
            header-align="center"
            width="180px"
          />
        </VueTable>
      </VueFlex>
      <VueRow
        id="viy2Row_1ZsiT"
        ref="viy2Row_1ZsiT"
      >
        <VueCol
          item-key="item"
          :md="{ span: 17 }"
        />
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 7 }"
        >
          <VuePagination
            id="pagination"
            ref="pagination"
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :background="true"
            :small="true"
            :total="total || 0"
            @current-change="paginationCurrentChange"
            @size-change="paginationSizeChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
