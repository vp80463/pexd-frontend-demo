<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const selectFlag = ref(true);
defineOptions({
  name: 'msg0201_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_gRSyH = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2Flex_gRYhN = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridDsApi = useApi({
  url: '/common/homePage/listMessageData.json',
  method: 'post',
  data: () => {
    return {};
  },
});
const gridDs = gridDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    selectFlag.value = true;
    gridDsApi.runAsync();
  }).catch(() => {
  });
};
const viy2Button_5FbWKcClick = () => {
  const $table = grid.value;
  if ($table) {
    const selectRecords = $table.getCheckboxRecords();
    if (selectRecords.length > 0) {
      const messageRemindIdList = selectRecords.map(record => record.messageRemindId);
      const lastLoginTimeApi = useApi({
        url: '/common/homePage/messageRead.json',
        method: 'post',
        data: () => {
          return { messageRemindIdList };
        },
      }, {
        onSuccess: (data) => {
          selectFlag.value = true;
          gridDsApi.runAsync();
        },
      });
    } else {
      VueNotification({
        title: 'Error',
        message: t('M.W.00102'),
        type: 'error',
        position: 'center-center',
      });
    }
  }
};
const gridCheckboxChange = () => {
  if (grid.value.getCheckboxRecords().length > 0) {
    selectFlag.value = false;
  } else {
    selectFlag.value = true;
  }
};
const gridCheckboxAll = () => {
  if (grid.value.getCheckboxRecords().length > 0) {
    selectFlag.value = false;
  } else {
    selectFlag.value = true;
  }
};
const gridDescriptionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReadTypeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridDatetimeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymdt,
      format: CONST_SYSTEM_DATE_FORMAT.ymdt,
    },
  };
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
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="primary" :disabled="selectFlag" @click="viy2Button_5FbWKcClick">
          {{ t('button.readed') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_gRSyH"
      ref="viy2Flex_gRSyH"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_lOY8w"
          ref="viy2Row_lOY8w"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          />
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_gRYhN"
        ref="viy2Flex_gRYhN"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" height="100%" :data="gridDs.data" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @checkbox-change="gridCheckboxChange" @checkbox-all="gridCheckboxAll">
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
          <VueSelectionColumn
            align="center"
            width="50px"
            header-align="center"
            type="checkbox"
          />
          <VueInputColumn
            :edit-render="gridDescriptionEditRender"
            field="description"
            show-overflow="tooltip"
            :resizable="true"
            :title="t('label.content')"
            min-width="500px"
          />
          <VueInputColumn
            :edit-render="gridReadTypeEditRender"
            field="readType"
            show-overflow="tooltip"
            :resizable="true"
            align="center"
            :title="t('label.status')"
            width="120px"
          />
          <VueDateTimeColumn
            :edit-render="gridDatetimeEditRender"
            field="datetime"
            align="center"
            :title="t('label.sendTime')"
            width="180px"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
