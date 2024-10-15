<script setup>
import { IconCloseBold, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'select_symptom',
});
const form = ref();
const titlerow = ref();
const viy2Button_pMAH6 = ref();
const viy2Button_fsC6p = ref();
const viy2Flex_RDg1O = ref();
const viy2Flex_RDKF3 = ref();
const setionTable = ref();
const viy2Row_85Fzgt = ref();
const viy2Flex_RDSI0 = ref();
const symptomGrid = ref();
const viy2Row_85I3gb = ref();
const formData = reactive({
});
const setionTableEditConfig = reactive({
  trigger: 'click',
});
const setionTableMouseConfig = reactive({
  extension: true,
});
const symptomGridEditConfig = reactive({
  trigger: 'click',
});
const symptomGridMouseConfig = reactive({
  extension: true,
});
const sectionDsApi = useApi({
  url: '/common/valuelist/sectionList.json',
  method: 'post',
  data: {
    pageSize: 0, currentPage: 0,
  },
});
const sectionDs = sectionDsApi.data;
const symptomDsApi = useApi({
  url: '/common/valuelist/symptomValueListWithCache.json',
  method: 'post',
}, {
  manual: true,
});
const symptomDs = symptomDsApi.data;
const viy2Button_pMAH6Click = () => {
  emit('select', symptomGrid.value.getCurrentRecord());
};
const viy2Button_fsC6pClick = () => {
  emit('close');
};
const setionTableCellClick = (obj) => {
  symptomDsApi.runAsync({
    arg0: obj.row.id,
  });
};
const setionTableCopy0_viy2TableTemplateColumn_tGgWCEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const symptomGridCellDblclick = (obj) => {
  emit('select', obj.row);
};
const symptomGridCopy0_copy0_viy2TableTemplateColumn_tGgWCEditRender = computed(() => {
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
          {{ t('label.symptom') }}
        </VueText>
      </VueCol>
      <VueCol
        item-key="item"
        class="aside-title-button"
        :md="{ span: 17 }"
      >
        <VueButton id="viy2Button_pMAH6" ref="viy2Button_pMAH6" icon-position="left" type="info" @click="viy2Button_pMAH6Click">
          {{ t('button.set') }}
        </VueButton>
        <VueButton id="viy2Button_fsC6p" ref="viy2Button_fsC6p" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_fsC6pClick" />
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_RDg1O"
      ref="viy2Flex_RDg1O"
      direction="row"
      justify="space-between"
      class="full-height"
    >
      <VueFlex
        id="viy2Flex_RDKF3"
        ref="viy2Flex_RDKF3"
        direction="column"
        grow="1"
        class="margin-right"
      >
        <VueTable id="setionTable" ref="setionTable" height="100%" :data="sectionDs.list" :edit-config="setionTableEditConfig" :mouse-config="setionTableMouseConfig" @cell-click="setionTableCellClick">
          <VueTemplateColumn
            :edit-render="setionTableCopy0_viy2TableTemplateColumn_tGgWCEditRender"
            class-name="no-border"
            :title="t('label.section')"
            min-width="250px"
          >
            <template #default="scope">
              <VueRow
                id="viy2Row_85Fzgt"
                ref="viy2Row_85Fzgt"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 10 }"
                >
                  <VueText id="viy2Text_85Fzgu" ref="viy2Text_85Fzgu" :style="{ width: '100%', display: 'inline-block' }" v-html="scope.row.code" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 14 }"
                >
                  <VueText id="viy2Text_85Fzgv" ref="viy2Text_85Fzgv" :style="{ width: '100%', display: 'inline-block' }" v-html="scope.row.name" />
                </VueCol>
              </VueRow>
            </template>
          </VueTemplateColumn>
        </VueTable>
      </VueFlex>
      <VueFlex
        id="viy2Flex_RDSI0"
        ref="viy2Flex_RDSI0"
        direction="column"
        grow="1"
      >
        <VueTable id="symptomGrid" ref="symptomGrid" height="100%" :data="symptomDs.list" :edit-config="symptomGridEditConfig" :mouse-config="symptomGridMouseConfig" @cell-dblclick="symptomGridCellDblclick">
          <VueTemplateColumn
            :edit-render="symptomGridCopy0_copy0_viy2TableTemplateColumn_tGgWCEditRender"
            class-name="no-border"
            :title="t('label.symptom')"
            min-width="250px"
          >
            <template #default="scope">
              <VueRow
                id="viy2Row_85I3gb"
                ref="viy2Row_85I3gb"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 10 }"
                >
                  <VueText id="viy2Text_85I3gm" ref="viy2Text_85I3gm" :style="{ width: '100%', display: 'inline-block' }" v-html="scope.row.code" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 14 }"
                >
                  <VueText id="viy2Text_85I3gn" ref="viy2Text_85I3gn" :style="{ width: '100%', display: 'inline-block' }" v-html="scope.row.name" />
                </VueCol>
              </VueRow>
            </template>
          </VueTemplateColumn>
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>

<style type="text/css" scoped>
:deep(.margin-right) {
margin-right: 20px;
}
</style>
