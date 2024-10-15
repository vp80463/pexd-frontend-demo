<script setup>
import { IconCloseBold, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const props = defineProps({
  params: Object,
});
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const requireValid = ref(true);
defineOptions({
  name: 'select_motor_consumer',
});
const form = ref();
const titlerow = ref();
const viy2Button_2uA36e = ref();
const viy2Button_8wyL9I = ref();
const viy2Button_fsC6p = ref();
const viy2Flex_QBhYD = ref();
const asideForm = ref();
const viy2Row_fsSal = ref();
const viy2InputBox_fsX54 = ref();
const viy2InputBox_5lkBRO = ref();
const viy2InputBox_8wvBt8 = ref();
const viy2Flex_QBtaD = ref();
const grid = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const asideFormData = reactive({
  frameNo: '', mobilePhone: '', consumerName: '',
});
const rules = reactive({
  viy2InputBox_5lkBRORules: [
    {
      required: true,
      message: t('errors.required', [t('label.mobilephone')]),
      enabled: requireValid,
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
    asideFormData.pageSize = paginationPageSize.value;
    asideFormData.currentPage = paginationCurrentPage.value;
    return asideFormData;
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const viy2Button_2uA36eClick = () => {
  asideForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    } else {
      return false;
    }
  });
};
const viy2Button_8wyL9IClick = () => {
  emit('select', grid.value.getCurrentRecord());
};
const viy2Button_fsC6pClick = () => {
  emit('close');
};
const viy2InputBox_fsX54Change = (value) => {
  requireValid.value = !value;
};
const gridCellDblclick = (obj) => {
  emit('select', obj.row);
};
const gridPositionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMobilePhoneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridConsumerNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const paginationCurrentChange = () => {
  if (gridDs.value.length === 0) {
    return;
  }
  gridDsApi.runAsync();
};
watch(() => props.params, (params) => {
  asideFormData.frameNo = params.frameNo;
  requireValid.value = !params.frameNo;
  gridDsApi.runAsync();
}, {
  immediate: true,
});
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
        class="aside-title-text"
        :md="{ span: 7 }"
      >
        <VueText id="viy2Text_frSdr" ref="viy2Text_frSdr" size="large" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
          {{ t('common.label.consumerInfo') }}
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
        <VueButton id="viy2Button_8wyL9I" ref="viy2Button_8wyL9I" icon-position="left" type="info" @click="viy2Button_8wyL9IClick">
          {{ t('button.set') }}
        </VueButton>
        <VueButton id="viy2Button_fsC6p" ref="viy2Button_fsC6p" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_fsC6pClick" />
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_QBhYD"
      ref="viy2Flex_QBhYD"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="asideForm"
        ref="asideForm"
        class="margin-top-aside"
        :model="asideFormData"
      >
        <VueRow
          id="viy2Row_fsSal"
          ref="viy2Row_fsSal"
        >
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.frameNumber')"
              prop="frameNo"
            >
              <VueInput
                id="viy2InputBox_fsX54"
                ref="viy2InputBox_fsX54"
                v-model="asideFormData.frameNo"
                @change="viy2InputBox_fsX54Change"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.mobilephone')"
              prop="mobilePhone"
              :rules="rules.viy2InputBox_5lkBRORules"
            >
              <VueInput
                id="viy2InputBox_5lkBRO"
                ref="viy2InputBox_5lkBRO"
                v-model="asideFormData.mobilePhone"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.consumerName')"
              prop="consumerName"
            >
              <VueInput
                id="viy2InputBox_8wvBt8"
                ref="viy2InputBox_8wvBt8"
                v-model="asideFormData.consumerName"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_QBtaD"
        ref="viy2Flex_QBtaD"
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
            :edit-render="gridPositionEditRender"
            field="position"
            show-overflow="tooltip"
            :title="t('label.position')"
            header-align="center"
            width="110px"
          />
          <VueInputColumn
            :edit-render="gridTypeEditRender"
            field="type"
            show-overflow="tooltip"
            :title="t('label.type')"
            header-align="center"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridMobilePhoneEditRender"
            field="mobilePhone"
            show-overflow="tooltip"
            :title="t('label.mobilephone')"
            header-align="center"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridConsumerNameEditRender"
            field="consumerName"
            show-overflow="tooltip"
            :title="t('label.consumerName')"
            header-align="center"
            min-width="250px"
          />
        </VueTable>
      </VueFlex>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        class="except-height-css"
      >
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
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
            :total="gridDs.total || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
