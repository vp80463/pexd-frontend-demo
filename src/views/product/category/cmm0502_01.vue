<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'cmm0502_01',
});
const form = ref();
const viy2Flex_sFGoH = ref();
const viy2Flex_sFUMo = ref();
const viy2Panel_IVQo8 = ref();
const viy2Button_8d8t = ref();
const viy2Grid_18ZDt = ref();
const viy2Row_18ZEg = ref();
const formData = reactive({
});
const viy2Grid_18ZDtEditConfig = reactive({
  trigger: 'click',
});
const viy2Grid_18ZDtMouseConfig = reactive({
  extension: true,
});
const resetDetailApi = useApi({
  url: '/master/cmm0502/searchPartsLargeGroupList.json',
  method: 'post',
});
const resetDetail = resetDetailApi.data;
const viy2Button_8d8tClick = () => {
  resetDetailApi.runAsync();
};
const viy2Grid_18ZDtLargeGroupCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Grid_18ZDtLargeGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_sFGoH"
      ref="viy2Flex_sFGoH"
      direction="column"
      class="full-height"
    >
      <VueFlex
        id="viy2Flex_sFUMo"
        ref="viy2Flex_sFUMo"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_IVQo8" ref="viy2Panel_IVQo8" title="大区分情報" height="100%">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" @click="viy2Button_8d8tClick">
                {{ t('button.reset') }}
              </VueButton>
            </div>
          </template>
          <VueTable id="viy2Grid_18ZDt" ref="viy2Grid_18ZDt" header-align="center" height="auto" :data="resetDetail" :edit-config="viy2Grid_18ZDtEditConfig" :mouse-config="viy2Grid_18ZDtMouseConfig">
            <VueRow
              id="viy2Row_18ZEg"
              ref="viy2Row_18ZEg"
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
              title="No."
            />
            <VueInputColumn
              :edit-render="viy2Grid_18ZDtLargeGroupCdEditRender"
              field="largeGroupCd"
              :sortable="true"
              title="大区分コード"
              width="150px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="viy2Grid_18ZDtLargeGroupNmEditRender"
              field="largeGroupNm"
              :sortable="true"
              title="大区分名称"
              width="165px"
              header-align="center"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>

<style type="text/css" scoped>
.rotate-icon {
transform: rotate(90deg);
font-size: large;
align-self: center;
}
.row-margin-top {
margin-top: 10px;
}
</style>
