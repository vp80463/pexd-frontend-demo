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
  name: 'cmm0204_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const companyForm = ref();
const viy2Panel_wL3n9 = ref();
const viy2Row_lOY8w = ref();
const viy2InputBox_dGnPEa = ref();
const viy2InputBox_1nbmCC = ref();
const viy2Panel_oqx1Vg = ref();
const viy2Row_1n8Aa4 = ref();
const viy2Select_dGnPHx = ref();
const viy2Select_1nwEGa = ref();
const viy2InputBox_5TPLRs = ref();
const viy2InputBox_5TQEZQ = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_56fw7c = ref();
const viy2InputBox_56hCxE = ref();
const viy2InputBox_56hMle = ref();
const viy2InputBox_56hVDG = ref();
const formData = reactive({
});
const companyFormData = reactive({
  organizationCd: '', organizationAbbr: '', provinceId: '', cityId: '', address1: '', address2: '', contactFax: '', postCode: '', contactTel: '',
});
const rules = reactive({
  viy2InputBox_1nbmCCRules: [
    {
      required: true,
      message: t('errors.required', [t('label.dealerName')]),
    },
  ],
  viy2Select_dGnPHxRules: [
    {
      required: true,
      message: t('errors.required', [t('label.province')]),
    },
  ],
  viy2Select_1nwEGaRules: [
    {
      required: true,
      message: t('errors.required', [t('label.city')]),
    },
  ],
});
const companyDsApi = useApi({
  url: '/master/cmm0204/getCompanyInfo.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    merge(companyFormData, data);
  },
});
const companyDs = companyDsApi.data;
const cityDsApi = useApi({
  url: '/common/helper/getCityList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    cityList = data;
  },
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
});
const provinceDs = provinceDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm('Are you sure to reset this page?')
    .then(() => {
      companyDsApi.runAsync();
    }).catch(() => {
    });
};
const viy2Button_5FbWKcClick = () => {
  companyForm.value.validate((valid) => {
    if (valid) {
      updateCompanyApi.runAsync();
    }
  });
};
const viy2Select_dGnPHxChange = (value) => {
  companyFormData.cityId = '';
  cityDs.value = [];
  // 若provinceHelper未选中则cityHelper显示未空
  if (companyFormData.provinceId !== '') {
    for (const key in cityList) {
      if (cityList[key].parentGeographyId === companyFormData.provinceId) {
        cityDs.value.push(cityList[key]);
      }
    }
  }
  // 设置省的名称
  for (const key in provinceList) {
    if (provinceList[key].geographyId === value) {
      companyFormData.provinceNm = provinceList[key].geographyNm;
      break;
    }
  }
};
const viy2Select_1nwEGaChange = (value) => {
// 设置省的名称
  for (const key in cityList) {
    if (cityList[key].geographyId === value) {
      companyFormData.cityNm = cityList[key].geographyNm;
      break;
    }
  }
};
onMounted(() => {
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
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="companyForm"
      ref="companyForm"
      class="margin-top-div0 except-height-css"
      :model="companyFormData"
    >
      <VuePanel id="viy2Panel_wL3n9" ref="viy2Panel_wL3n9" :title="t('common.label.generalInformation')" :collapse="true">
        <VueRow
          id="viy2Row_lOY8w"
          ref="viy2Row_lOY8w"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.dealerCode')"
              label-width="170px"
              prop="organizationCd"
            >
              <VueInput
                id="viy2InputBox_dGnPEa"
                ref="viy2InputBox_dGnPEa"
                v-model="companyFormData.organizationCd"
                :disabled="true"
                :clearable="true"
                :style="{ width: '360px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.dealerName')"
              label-width="170px"
              prop="organizationAbbr"
              :rules="rules.viy2InputBox_1nbmCCRules"
            >
              <VueInput
                id="viy2InputBox_1nbmCC"
                ref="viy2InputBox_1nbmCC"
                v-model="companyFormData.organizationAbbr"
                :clearable="true"
                :style="{ width: '360px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
      <VuePanel id="viy2Panel_oqx1Vg" ref="viy2Panel_oqx1Vg" :collapse="true" :title="t('common.label.address')" class="except-height-css">
        <VueRow
          id="viy2Row_1n8Aa4"
          ref="viy2Row_1n8Aa4"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.province')"
              label-width="170px"
              prop="provinceId"
              :rules="rules.viy2Select_dGnPHxRules"
            >
              <VueSelect
                id="viy2Select_dGnPHx"
                ref="viy2Select_dGnPHx"
                v-model="companyFormData.provinceId"
                :style="{ width: '360px' }"
                :clearable="true"
                :options="provinceDs"
                :props="{
                  label: 'geographyNm',
                  value: 'geographyId',
                }"
                @change="viy2Select_dGnPHxChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.city')"
              label-width="170px"
              prop="cityId"
              :rules="rules.viy2Select_1nwEGaRules"
            >
              <VueSelect
                id="viy2Select_1nwEGa"
                ref="viy2Select_1nwEGa"
                v-model="companyFormData.cityId"
                :style="{ width: '360px' }"
                :clearable="true"
                :options="cityDs"
                :props="{
                  label: 'geographyNm',
                  value: 'geographyId',
                }"
                @change="viy2Select_1nwEGaChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.address1')"
              label-width="170px"
              prop="address1"
            >
              <VueInput
                id="viy2InputBox_5TPLRs"
                ref="viy2InputBox_5TPLRs"
                v-model="companyFormData.address1"
                :clearable="true"
                :style="{ width: '360px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.address2')"
              label-width="170px"
              prop="address2"
            >
              <VueInput
                id="viy2InputBox_5TQEZQ"
                ref="viy2InputBox_5TQEZQ"
                v-model="companyFormData.address2"
                :clearable="true"
                :maxlength="360"
                :style="{ width: '360px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
      <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" :title="t('common.label.contact')" :collapse="true">
        <VueRow
          id="viy2Row_56fw7c"
          ref="viy2Row_56fw7c"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.fax')"
              label-width="170px"
              prop="contactFax"
            >
              <VueInput
                id="viy2InputBox_56hCxE"
                ref="viy2InputBox_56hCxE"
                v-model="companyFormData.contactFax"
                :clearable="true"
                :style="{ width: '360px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.postCode')"
              label-width="170px"
              prop="postCode"
            >
              <VueInput
                id="viy2InputBox_56hMle"
                ref="viy2InputBox_56hMle"
                v-model="companyFormData.postCode"
                :clearable="true"
                :style="{ width: '360px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.telephone')"
              label-width="170px"
              prop="contactTel"
            >
              <VueInput
                id="viy2InputBox_56hVDG"
                ref="viy2InputBox_56hVDG"
                v-model="companyFormData.contactTel"
                :clearable="true"
                :style="{ width: '360px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
    </VueForm>
  </VueForm>
</template>
