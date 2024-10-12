<script setup>
import { IconUserFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import viy2Subpage_p3bVoPage from '/src/views/commons/select_consumer.vue';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
let cityList = [];
defineOptions({
  name: 'consumer_info_common',
});
const form = ref();
const viy2Panel_oqx1Vg = ref();
const viy2Row_zQgmS = ref();
const viy2Button_8Ifs4a = ref();
const consumerForm = ref();
const viy2Row_ZG0l7 = ref();
const viy2InputBox_9b0PCA = ref();
const viy2InputBox_9b0PCN = ref();
const viy2InputBox_9b0PCQ = ref();
const viy2Button_9b0PD3 = ref();
const viy2InputBox_1tM8khc = ref();
const viy2InputBox_9HbyMy = ref();
const viy2InputBox_1tM8kiU = ref();
const viy2Radio_1tM8kkz = ref();
const viy2DateTimePicker_1tM8kkB = ref();
const viy2InputBox_1tM8kkC = ref();
const viy2DateTimePicker_1tM8kmh = ref();
const viy2Radio_1tM8kmi = ref();
const viy2Upload_1tM8knW = ref();
const viy2Select_1tM8knX = ref();
const viy2Select_1tM8kpF = ref();
const viy2Row_Axv92 = ref();
const viy2InputBox_9b1equ = ref();
const viy2InputBox_9b1eqH = ref();
const consumerAside = ref();
const viy2Subpage_p3bVo = ref();
const formData = reactive({
});
const consumerFormData = reactive({
  lastNm: '', middleNm: '', firstNm: '', mobilePhone: '', custaxCd: '', sns: '', gender: '', birthYear: '', age: '', birthDate: '', privacyResult: 'Consent', province: '', district: '', address: '', email: '',
});
const rules = reactive({
  viy2InputBox_9b0PCARules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_1tM8khcRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_9HbyMyRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Radio_1tM8kkzRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1tM8kkBRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1tM8kmhRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Radio_1tM8kmiRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1tM8knXRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2Select_1tM8kpFRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_9b1eqHRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showConsumerWin = ref(false);
const viy2Radio_1tM8kmiOpts = reactive([
  { value: 'Consent', label: 'Consent' },
  { value: 'Partially Agree', label: 'Partially Agree' },
]);
const provinceDsApi = useApi({
  url: '/common/helper/getProvinceList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
});
const provinceDs = provinceDsApi.data;
const cityDsApi = useApi({
  url: '/common/helper/getCityList.json',
  method: 'post',
}, {
  onSuccess: (data) => {
    cityList = [...data];
  },
  initialData: {
    data: [],
  },
});
const cityDs = cityDsApi.data;
const consumerUploadPrivacyDsApi = useApi({
  url: '/common/consumer/consumerUploadPrivacy.json',
  method: 'post',
}, {
  manual: true,
});
const consumerUploadPrivacyDs = consumerUploadPrivacyDsApi.data;
const genderDsApi = useApi({
  method: 'post',
  localData: [
    {
      label: 'MALE',
      value: 'S005MALE',
    },
    {
      label: 'FEMALE',
      value: 'S005FEMALE',
    },
  ],
});
const genderDs = genderDsApi.data;
const viy2Button_8Ifs4aClick = () => {
  showConsumerWin.value = true;
};
const viy2Button_9b0PD3Click = () => {
  consumerForm.value.resetFields();
};
const viy2DateTimePicker_1tM8kkBChange = (value) => {
  const age = new Date().getFullYear() - value.getFullYear();
  consumerFormData.age = age;
};
const viy2Upload_1tM8knWOnSuccess = () => {
  consumerUploadPrivacyDsApi.runAsync({
    privacy: consumerFormData.privacy,
  });
};
const viy2Select_1tM8knXChange = () => {
  consumerFormData.district = '';
  cityDs.value.splice(0);
  // 若provinceHelper未选中则cityHelper显示未空
  if (consumerFormData.province !== '') {
    for (const key in cityList) {
      if (cityList[key].parentGeographyId === consumerFormData.province) {
        cityDs.value.push(cityList[key]);
      }
    }
  }
};
// consumer侧边栏选择后
const callbkSelectConsumer = (params) => {
  consumerFormData.lastNm = params.lastNm;
  consumerFormData.middleNm = params.middleNm;
  consumerFormData.firstNm = params.firstNm;
  consumerFormData.consumerId = params.consumerId;
  consumerFormData.mobilePhone = params.mobilePhone;
  consumerFormData.sns = params.sns;
  consumerFormData.gender = params.gender;
  consumerFormData.province = parseInt(params.province, 10);
  consumerFormData.district = parseInt(params.city, 10);
  consumerFormData.address = params.address;
  consumerFormData.email = params.email;
  consumerFormData.birthDate = params.birthDate;
  consumerFormData.birthYear = params.birthYear;
  consumerFormData.age = params.age;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
};
const getConsumerFormData = () => {
  return consumerFormData;
};
defineExpose({
  getConsumerFormData,
});
consumerFormData.gender = 'S005MALE';
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VuePanel id="viy2Panel_oqx1Vg" ref="viy2Panel_oqx1Vg" :collapse="true" title="Consumer Info" class="except-height-css">
      <template #header>
        <div style="width: 400px">
          <VueRow
            id="viy2Row_zQgmS"
            ref="viy2Row_zQgmS"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_8Ifs4a" ref="viy2Button_8Ifs4a" icon-position="left" @click="viy2Button_8Ifs4aClick">
                Select Consumer
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueForm
        id="consumerForm"
        ref="consumerForm"
        label-width="120px"
        :model="consumerFormData"
      >
        <VueRow
          id="viy2Row_ZG0l7"
          ref="viy2Row_ZG0l7"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Consumer"
              prop="lastNm"
              :rules="rules.viy2InputBox_9b0PCARules"
            >
              <VueInput
                id="viy2InputBox_9b0PCA"
                ref="viy2InputBox_9b0PCA"
                v-model="consumerFormData.lastNm"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="middleNm"
            >
              <VueInput
                id="viy2InputBox_9b0PCN"
                ref="viy2InputBox_9b0PCN"
                v-model="consumerFormData.middleNm"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2px"
              prop="firstNm"
            >
              <VueInput
                id="viy2InputBox_9b0PCQ"
                ref="viy2InputBox_9b0PCQ"
                v-model="consumerFormData.firstNm"
                :clearable="true"
                :style="{ width: '180px' }"
              >
                <template #append>
                  <VueButton id="viy2Button_9b0PD3" ref="viy2Button_9b0PD3" icon-position="left" type="primary" class="icon-button-width" :icon="IconUserFilled" @click="viy2Button_9b0PD3Click">
                    New
                  </VueButton>
                </template>
              </VueInput>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Mobile"
              label-width="105px"
              prop="mobilePhone"
              :rules="rules.viy2InputBox_1tM8khcRules"
            >
              <VueInput
                id="viy2InputBox_1tM8khc"
                ref="viy2InputBox_1tM8khc"
                v-model="consumerFormData.mobilePhone"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              v-show="false"
              label="Custax Code"
              label-width="105px"
              prop="custaxCd"
              :rules="rules.viy2InputBox_9HbyMyRules"
            >
              <VueInput
                id="viy2InputBox_9HbyMy"
                ref="viy2InputBox_9HbyMy"
                v-model="consumerFormData.custaxCd"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="SNS"
              prop="sns"
            >
              <VueInput
                id="viy2InputBox_1tM8kiU"
                ref="viy2InputBox_1tM8kiU"
                v-model="consumerFormData.sns"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Gender"
              prop="gender"
              :rules="rules.viy2Radio_1tM8kkzRules"
            >
              <VueRadioGroup
                id="viy2Radio_1tM8kkz"
                ref="viy2Radio_1tM8kkz"
                v-model="consumerFormData.gender"
                radio-style="button"
              >
                <VueRadioButton
                  v-for="option in genderDs"
                  :key="option.value"
                  :label="option.value"
                  :name="option.name"
                  :disabled="option.disabled"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Year Of Birth"
              label-width="105px"
              prop="birthYear"
              :rules="rules.viy2DateTimePicker_1tM8kkBRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1tM8kkB"
                ref="viy2DateTimePicker_1tM8kkB"
                v-model="consumerFormData.birthYear"
                type="year"
                :style="{ width: '100px' }"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.y"
                @change="viy2DateTimePicker_1tM8kkBChange"
              />
            </VueFormItem>
            <VueFormItem
              label="Age"
              label-width="35px"
              prop="age"
            >
              <VueInput
                id="viy2InputBox_1tM8kkC"
                ref="viy2InputBox_1tM8kkC"
                v-model="consumerFormData.age"
                :disabled="true"
                text-align="right"
                :readonly="true"
                class="no-border"
                :style="{ width: '38px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Date of Birth"
              label-width="105px"
              prop="birthDate"
              :rules="rules.viy2DateTimePicker_1tM8kmhRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1tM8kmh"
                ref="viy2DateTimePicker_1tM8kmh"
                v-model="consumerFormData.birthDate"
                type="date"
                :style="{ width: '100px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.md"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.md"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              label="Privacy Policy Result"
              label-width="145px"
              prop="privacyResult"
              :rules="rules.viy2Radio_1tM8kmiRules"
            >
              <VueRadioGroup
                id="viy2Radio_1tM8kmi"
                ref="viy2Radio_1tM8kmi"
                v-model="consumerFormData.privacyResult"
                radio-style="button"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_1tM8kmiOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 16 }"
          >
            <VueUpload id="viy2Upload_1tM8knW" ref="viy2Upload_1tM8knW" :accept="acceptFileType" :auto-upload="true" :limit="1" action="http://localhost:8080/a1stream/public/test/escortFileUploadTest.json" :on-success="viy2Upload_1tM8knWOnSuccess">
              <template #trigger>
                <VueButton>
                  Upload Privacy
                </VueButton>
              </template>
            </VueUpload>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Province"
              prop="province"
              :rules="rules.viy2Select_1tM8knXRules"
            >
              <VueSelect
                id="viy2Select_1tM8knX"
                ref="viy2Select_1tM8knX"
                v-model="consumerFormData.province"
                :options="provinceDs"
                :props="{
                  label: 'geographyNm',
                  value: 'geographyId',
                }"
                @change="viy2Select_1tM8knXChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="District"
              prop="district"
              :rules="rules.viy2Select_1tM8kpFRules"
            >
              <VueSelect
                id="viy2Select_1tM8kpF"
                ref="viy2Select_1tM8kpF"
                v-model="consumerFormData.district"
                :options="cityDs"
                :props="{
                  label: 'geographyNm',
                  value: 'geographyId',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
        <VueRow
          id="viy2Row_Axv92"
          ref="viy2Row_Axv92"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Address"
              prop="address"
            >
              <VueInput
                id="viy2InputBox_9b1equ"
                ref="viy2InputBox_9b1equ"
                v-model="consumerFormData.address"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Email"
              prop="email"
              :rules="rules.viy2InputBox_9b1eqHRules"
            >
              <VueInput
                id="viy2InputBox_9b1eqH"
                ref="viy2InputBox_9b1eqH"
                v-model="consumerFormData.email"
                :clearable="true"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VueAside
      id="consumerAside"
      ref="consumerAside"
      v-model="showConsumerWin"
      :modal="true"
      direction="rtl"
      size="60%"
    >
      <viy2Subpage_p3bVoPage
        id="viy2Subpage_p3bVo"
        ref="viy2Subpage_p3bVo"
        @select="callbkSelectConsumer"
        @close="closeConsumerAside"
      />
    </VueAside>
  </VueForm>
</template>
