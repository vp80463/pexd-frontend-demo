<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'testdz',
});
const form = ref();
const viy2Row_X4rwQ = ref();
const viy2InputBox = ref();
const searchButton = ref();
const formData = reactive({
  dealerRetrieve: '',
});
const viy2InputBoxChange = (event) => {
// do some thing
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_X4rwQ"
      ref="viy2Row_X4rwQ"
    >
      <VueCol
        item-key="item"
        :inline="true"
        :md="{ span: 16 }"
      >
        <VueFormItem
          :label="t('common.label.dealerDetail')"
          prop="dealerRetrieve"
        >
          <VueInput
            id="viy2InputBox"
            ref="viy2InputBox"
            v-model="formData.dealerRetrieve"
            :style="{ width: '200px' }"
            @change="viy2InputBoxChange"
          />
        </VueFormItem>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 8 }"
      >
        <VueButton id="searchButton" ref="searchButton" icon-position="left" type="primary">
          {{ t('button.search') }}
        </VueButton>
      </VueCol>
    </VueRow>
  </VueForm>
</template>
