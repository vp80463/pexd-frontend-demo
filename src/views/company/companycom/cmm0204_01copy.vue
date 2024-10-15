<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
let provinceList = [];
let cityList = [];
defineOptions({
  name: 'cmm0204_01copy',
});
const form = ref();
const companyForm = ref();
const viy2Panel_Odf8N = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Row_O5tKr = ref();
const viy2InputBox_O5F3m = ref();
const viy2InputBox_86aQio = ref();
const viy2InputNumber_g1O3B = ref();
const viy2CheckBox_T2LG6 = ref();
const viy2InputBox_86aQOE = ref();
const viy2InputBox_86aRqI = ref();
const viy2InputNumber_34kt0e = ref();
const viy2CheckBox_8SufCS = ref();
const viy2InputBox_86bzTk = ref();
const viy2InputBox_86c0gy = ref();
const viy2InputBox_86bykS = ref();
const viy2CheckBox_8StWhQ = ref();
const viy2InputBox_86bzoG = ref();
const viy2InputBox_86c8aE = ref();
const viy2Radio_iWHDU = ref();
const formData = reactive({
});
const companyFormData = reactive({
  teat1: '', teat5: '', rate1: undefined, test12: false, teat2: '', teat6: '', rate2: undefined, test13: false, teat3: '', teat7: '', teat11: '', test14: false, teat4: '', teat8: '', hasStockFlag: '1',
});
const viy2CheckBox_T2LG6Opts = [
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
const viy2CheckBox_8SufCSOpts = [
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
const viy2CheckBox_8StWhQOpts = [
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
const viy2Radio_iWHDUOpts = reactive([
  { value: '1', label: '在庫有り' },
  { value: '0', label: '在庫無し' },
]);
const companyDsApi = useApi({
  url: '/master/cmm0204/getCompanyInfo.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    merge(companyFormData, data);
  },
  manual: true,
});
const companyDs = companyDsApi.data;
const cityDsApi = useApi({
  url: '/common/helper/getCityList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    cityList = data;
  },
  manual: true,
});
const cityDs = cityDsApi.data;
const updateCompanyApi = useApi({
  url: '/master/cmm0204/updateCompanyInfo.json',
  method: 'post',
  data: () => {
    return companyFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    companyDsApi.runAsync();
  },
  manual: true,
});
const updateCompany = updateCompanyApi.data;
const provinceDsApi = useApi({
  url: '/common/helper/getProvinceList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    provinceList = data;
  },
  manual: true,
});
const provinceDs = provinceDsApi.data;
const viy2Button_5FbWKcClick = () => {
  companyForm.value.validate((valid) => {
    if (valid) {
      updateCompanyApi.runAsync();
    }
  });
};
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm('Are you sure to reset this page?')
    .then(() => {
      companyDsApi.runAsync();
    }).catch(() => {
    });
};
onMounted(() => {
});
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueForm
      id="companyForm"
      ref="companyForm"
      :model="companyFormData"
    >
      <VuePanel id="viy2Panel_Odf8N" ref="viy2Panel_Odf8N" title="拠点情報">
        <template #header>
          <div style="width: auto">
            <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
              保存
            </VueButton>
            <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
              クリア
            </VueButton>
          </div>
        </template>
        <VueRow
          id="viy2Row_O5tKr"
          ref="viy2Row_O5tKr"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="拠点コード"
              prop="teat1"
            >
              <VueInput
                id="viy2InputBox_O5F3m"
                ref="viy2InputBox_O5F3m"
                v-model="companyFormData.teat1"
                :readonly="true"
                class="no-border"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="漢字名称"
              prop="teat5"
            >
              <VueInput
                id="viy2InputBox_86aQio"
                ref="viy2InputBox_86aQio"
                v-model="companyFormData.teat5"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="部品レス率"
              prop="rate1"
            >
              <VueInputNumber
                id="viy2InputNumber_g1O3B"
                ref="viy2InputNumber_g1O3B"
                v-model="companyFormData.rate1"
                :precision="2"
                :max="99999.99"
                :min="0"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="受発注停止サイン"
              prop="test12"
            >
              <VueCheckbox
                id="viy2CheckBox_T2LG6"
                ref="viy2CheckBox_T2LG6"
                v-model="companyFormData.test12"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="会社コード"
              prop="teat2"
            >
              <VueInput
                id="viy2InputBox_86aQOE"
                ref="viy2InputBox_86aQOE"
                v-model="companyFormData.teat2"
                class="no-border"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="漢字略称"
              prop="teat6"
            >
              <VueInput
                id="viy2InputBox_86aRqI"
                ref="viy2InputBox_86aRqI"
                v-model="companyFormData.teat6"
                class="no-border"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="用品レス率"
              prop="rate2"
            >
              <VueInputNumber
                id="viy2InputNumber_34kt0e"
                ref="viy2InputNumber_34kt0e"
                v-model="companyFormData.rate2"
                :precision="2"
                :min="0"
                :max="99999.99"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="自動発注サイン"
              prop="test13"
            >
              <VueCheckbox
                id="viy2CheckBox_8SufCS"
                ref="viy2CheckBox_8SufCS"
                v-model="companyFormData.test13"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="ＴＥＬ"
              prop="teat3"
            >
              <VueInput
                id="viy2InputBox_86bzTk"
                ref="viy2InputBox_86bzTk"
                v-model="companyFormData.teat3"
                class="no-border"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="カナ名称"
              prop="teat7"
            >
              <VueInput
                id="viy2InputBox_86c0gy"
                ref="viy2InputBox_86c0gy"
                v-model="companyFormData.teat7"
                class="no-border"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="管轄ＰＣコード"
              prop="teat11"
            >
              <VueInput
                id="viy2InputBox_86bykS"
                ref="viy2InputBox_86bykS"
                v-model="companyFormData.teat11"
                :readonly="true"
                class="no-border"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="特殊単価適用サイン"
              prop="test14"
            >
              <VueCheckbox
                id="viy2CheckBox_8StWhQ"
                ref="viy2CheckBox_8StWhQ"
                v-model="companyFormData.test14"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="ＦＡＸ"
              prop="teat4"
            >
              <VueInput
                id="viy2InputBox_86bzoG"
                ref="viy2InputBox_86bzoG"
                v-model="companyFormData.teat4"
                class="no-border"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="短縮カナ"
              prop="teat8"
            >
              <VueInput
                id="viy2InputBox_86c8aE"
                ref="viy2InputBox_86c8aE"
                v-model="companyFormData.teat8"
                class="no-border"
                :style="{ width: '300px' }"
              />
            </VueFormItem>
            <VueFormItem
              v-if="false"
              label="在庫有無"
              prop="hasStockFlag"
            >
              <VueRadioGroup
                id="viy2Radio_iWHDU"
                ref="viy2Radio_iWHDU"
                v-model="companyFormData.hasStockFlag"
                radio-style="button"
                direction="horizontal"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_iWHDUOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
    </VueForm>
  </VueForm>
</template>
