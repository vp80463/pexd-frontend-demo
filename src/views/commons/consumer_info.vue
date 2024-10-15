<script setup>
import { IconCloseBold, IconUserFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import { clearFormData } from '@/pj-commonutils.js';
const props = defineProps({
  params: Object,
});
const emit = defineEmits(['close']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const nowYear = dayjs().year();
// 常量请求参数
const mstCodeApiParam = ref([
  'S005',
]);
const mstCodeData = ref(
  {
    S005: [],
  },
);
defineOptions({
  name: 'consumer_info',
});
const form = ref();
const consumerInfoTitle = ref();
const viy2Button_3POXvY = ref();
const viy2Button_nLvbP = ref();
const viy2Button_nLvbQ = ref();
const detailForm = ref();
const viy2Row_nMuKA = ref();
const viy2InputBox_nMuKB = ref();
const viy2InputBox_nMuKE = ref();
const viy2InputBox_nMuKH = ref();
const viy2InputBox_3POXvZ = ref();
const viy2Radio_3POXxK = ref();
const viy2InputBox_3POXw5 = ref();
const viy2InputBox_3POXzH = ref();
const viy2Select_3POXxL = ref();
const viy2Select_3POXxR = ref();
const viy2DateTimePicker_3POXxX = ref();
const viy2InputBox_3POXxY = ref();
const viy2InputBox_3POXy1 = ref();
const viy2DateTimePicker_3POXzG = ref();
const viy2InputBox_3POXw2 = ref();
const formData = reactive({
});
const detailFormData = reactive({
  lastNm: '', middleNm: '', firstNm: '', mobilephone: '', gender: '', sns: '', email: '', provinceGeographyId: '', cityGeographyId: '', birthYear: '', age: '', address: '', birthDate: '', taxCode: '',
});
const rules = reactive({
  viy2InputBox_nMuKBRules: [
    {
      required: true,
      message: t('errors.required', [t('label.consumer')]),
    },
  ],
  viy2InputBox_3POXvZRules: [
    {
      required: true,
      message: t('errors.required', [t('label.mobilephone')]),
    },
    {
      max: 10,
      message: t('M.E.10322', [t('label.mobilephone'), 10]),
    },
    {
      min: 10,
      message: t('M.E.10322', [t('label.mobilephone'), 10]),
    },
  ],
});
const provinceDsApi = useApi({
  url: '/common/helper/getProvinceList.json',
  method: 'post',
});
const provinceDs = provinceDsApi.data;
const mstCodeDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: mstCodeApiParam.value,
}, {
  onSuccess: (data, params) => {
    mstCodeData.value = data;
  },
});
const mstCodeDs = mstCodeDsApi.data;
const consumerInfoDsApi = useApi({
  url: '/service/svm0102/getConsumerDetail.json',
  method: 'post',
  data: () => {
    return detailFormData;
  },
}, {
  onSuccess: (data, params) => {
    merge(detailFormData, data);
    if (data.cityGeographyId) {
      cityDsApi.runAsync();
    }
  },
  manual: true,
});
const consumerInfoDs = consumerInfoDsApi.data;
const cityDsApi = useApi({
  url: '/common/helper/getCityByProvince.json',
  method: 'post',
  data: () => {
    return {
      arg0: detailFormData.provinceGeographyId,
    };
  },
}, {
  manual: true,
});
const cityDs = cityDsApi.data;
const saveConsumerDsApi = useApi({
  url: '/service/svm0102/saveConsumerDetail.json',
  method: 'post',
  data: () => {
    return detailFormData;
  },
}, {
  onSuccess: (data, params) => {
    detailFormData.consumerId = data;
    emit('callback', detailFormData);
  },
  manual: true,
});
const saveConsumerDs = saveConsumerDsApi.data;
const viy2Button_3POXvYClick = () => {
  clearFormData(detailFormData);
};
const viy2Button_nLvbPClick = () => {
  saveConsumerInfo();
};
const viy2Button_nLvbQClick = () => {
  VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    emit('close');
  }).catch(() => {
  });
};
const viy2Select_3POXxLChange = (value, data) => {
  cityDsApi.runAsync();
};
const viy2DateTimePicker_3POXxXChange = (value) => {
  detailFormData.age = nowYear - value.substr(0, 4);
};
watch(() => props.params, (params) => {
  detailForm.value && detailForm.value.resetFields();
  merge(detailFormData, params);
  consumerInfoDsApi.runAsync();
}, {
  immediate: true,
});
const saveConsumerInfo = () => {
  detailForm.value.validate((valid) => {
    if (valid) {
      saveConsumerDsApi.runAsync();
    } else {
      return false;
    }
  });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="consumerInfoTitle"
      ref="consumerInfoTitle"
      class="aside-title-row"
    >
      <VueCol
        item-key="item"
        class="aside-title-text"
        :md="{ span: 14 }"
      >
        <VueText id="viy2Text_nLvbO" ref="viy2Text_nLvbO" size="large">
          {{ t('title.consumerInfoMaintenance_02') }}
        </VueText>
      </VueCol>
      <VueCol
        item-key="item"
        class="aside-title-button"
        :md="{ span: 10 }"
      >
        <VueButton id="viy2Button_3POXvY" ref="viy2Button_3POXvY" icon-position="left" type="info" :icon="IconUserFilled" @click="viy2Button_3POXvYClick">
          {{ t('label.new') }}
        </VueButton>
        <VueButton id="viy2Button_nLvbP" ref="viy2Button_nLvbP" icon-position="left" type="info" @click="viy2Button_nLvbPClick">
          {{ t('label.confirm') }}
        </VueButton>
        <VueButton id="viy2Button_nLvbQ" ref="viy2Button_nLvbQ" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_nLvbQClick" />
      </VueCol>
    </VueRow>
    <VueForm
      id="detailForm"
      ref="detailForm"
      label-width="155px"
      class="margin-top-aside"
      :model="detailFormData"
    >
      <VueRow
        id="viy2Row_nMuKA"
        ref="viy2Row_nMuKA"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            :label="t('label.consumer')"
            prop="lastNm"
            :rules="rules.viy2InputBox_nMuKBRules"
          >
            <VueInput
              id="viy2InputBox_nMuKB"
              ref="viy2InputBox_nMuKB"
              v-model="detailFormData.lastNm"
              :clearable="true"
              :style="{ width: '130px' }"
            />
          </VueFormItem>
          <VueFormItem
            label-width="1px"
            prop="middleNm"
          >
            <VueInput
              id="viy2InputBox_nMuKE"
              ref="viy2InputBox_nMuKE"
              v-model="detailFormData.middleNm"
              :clearable="true"
              :style="{ width: '130px' }"
            />
          </VueFormItem>
          <VueFormItem
            label-width="1px"
            prop="firstNm"
          >
            <VueInput
              id="viy2InputBox_nMuKH"
              ref="viy2InputBox_nMuKH"
              v-model="detailFormData.firstNm"
              :clearable="true"
              :style="{ width: '130px' }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueFormItem
            :label="t('label.mobilephone')"
            prop="mobilephone"
            :rules="rules.viy2InputBox_3POXvZRules"
          >
            <VueInput
              id="viy2InputBox_3POXvZ"
              ref="viy2InputBox_3POXvZ"
              v-model="detailFormData.mobilephone"
              :clearable="true"
              :maxlength="10"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueFormItem
            :label="t('label.gender')"
            prop="gender"
          >
            <VueRadioGroup
              id="viy2Radio_3POXxK"
              ref="viy2Radio_3POXxK"
              v-model="detailFormData.gender"
              radio-style="button"
              direction="horizontal"
              split-size="default"
            >
              <VueRadioButton
                v-for="option in mstCodeData.S005"
                :key="option.codeDbid"
                :label="option.codeDbid"
                :name="option.name"
                :disabled="option.disabled"
              >
                {{ option.codeData1 }}
              </VueRadioButton>
            </VueRadioGroup>
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueFormItem
            :label="t('label.sns')"
            prop="sns"
          >
            <VueInput
              id="viy2InputBox_3POXw5"
              ref="viy2InputBox_3POXw5"
              v-model="detailFormData.sns"
              :clearable="true"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueFormItem
            :label="t('label.email')"
            prop="email"
          >
            <VueInput
              id="viy2InputBox_3POXzH"
              ref="viy2InputBox_3POXzH"
              v-model="detailFormData.email"
              :clearable="true"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueFormItem
            :label="t('label.province')"
            prop="provinceGeographyId"
          >
            <VueSelect
              id="viy2Select_3POXxL"
              ref="viy2Select_3POXxL"
              v-model="detailFormData.provinceGeographyId"
              :options="provinceDs"
              :props="{
                label: 'geographyNm',
                value: 'geographyId',
              }"
              @change="viy2Select_3POXxLChange"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueFormItem
            :label="t('label.city')"
            prop="cityGeographyId"
          >
            <VueSelect
              id="viy2Select_3POXxR"
              ref="viy2Select_3POXxR"
              v-model="detailFormData.cityGeographyId"
              :options="cityDs"
              :props="{
                label: 'geographyNm',
                value: 'geographyId',
              }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 12 }"
        >
          <VueFormItem
            :label="t('label.yearOfBirth')"
            prop="birthYear"
          >
            <VueDatePicker
              id="viy2DateTimePicker_3POXxX"
              ref="viy2DateTimePicker_3POXxX"
              v-model="detailFormData.birthYear"
              type="year"
              :style="{ width: '100px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.y"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.y"
              @change="viy2DateTimePicker_3POXxXChange"
            />
          </VueFormItem>
          <VueFormItem
            :label="t('label.age')"
            label-width="50px"
            prop="age"
          >
            <VueInput
              id="viy2InputBox_3POXxY"
              ref="viy2InputBox_3POXxY"
              v-model="detailFormData.age"
              :disabled="true"
              :readonly="true"
              :style="{ width: '50px' }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueFormItem
            :label="t('label.address')"
            prop="address"
          >
            <VueInput
              id="viy2InputBox_3POXy1"
              ref="viy2InputBox_3POXy1"
              v-model="detailFormData.address"
              :clearable="true"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueFormItem
            :label="t('label.dateOfBirth')"
            prop="birthDate"
          >
            <VueDatePicker
              id="viy2DateTimePicker_3POXzG"
              ref="viy2DateTimePicker_3POXzG"
              v-model="detailFormData.birthDate"
              type="date"
              :style="{ width: '100px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.md"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.md"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueFormItem
            :label="t('label.cusTaxCode')"
            prop="taxCode"
          >
            <VueInput
              id="viy2InputBox_3POXw2"
              ref="viy2InputBox_3POXw2"
              v-model="detailFormData.taxCode"
              :clearable="true"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
  </VueForm>
</template>
