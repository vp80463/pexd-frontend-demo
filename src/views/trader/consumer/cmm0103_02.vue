<script setup>
import { IconDocumentCopy, VueMessage, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { get } from 'lodash-es';
import dayjs from 'dayjs';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const routeParam = useParams();
const disableFlag = ref(false);
const currentDate = dayjs().format('YYYYMMDD');
const today = new Date();
const policyFileName = ref();
const privacyPolicyResultFromDB = ref();
// const uploadPrivacyDisabled = ref(true);
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
// 跳转画面用参数
let consumerId1 = null;
let consumerId2 = null;
let serializedProductId1 = null;
let serializedProductId2 = null;
const disclickFlg1 = ref(true);
const disclickFlg2 = ref(true);
const vehicleMdl = ref(true);
const serviceMdl = ref(true);
defineOptions({
  name: 'cmm0103_02',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_83Yd = ref();
const queryForm = ref();
const viy2Panel_BU3YW = ref();
const viy2Row_BU3Zs = ref();
const viy2Select_BU3ZX = ref();
const viy2InputBox_672Ese = ref();
const viy2InputBox_672EBX = ref();
const viy2InputBox_672ELG = ref();
const viy2Radio_672EX1 = ref();
const viy2Upload_672F8l = ref();
const viy2Button_wTDcL = ref();
const viy2Radio_ydSRK = ref();
const viy2InputBox_672FwF = ref();
const viy2InputBox_672FI0 = ref();
const viy2InputBox_672FQ7 = ref();
const viy2DateTimePicker_672FZQ = ref();
const viy2InputBox_672G1t = ref();
const viy2DateTimePicker_672GcO = ref();
const viy2InputBox_672Gg3 = ref();
const viy2Select_672Gt0 = ref();
const viy2Select_672GMt = ref();
const viy2InputBox_672He0 = ref();
const viy2InputBox_672Hsz = ref();
const viy2InputBox_672HDU = ref();
const viy2InputBox_672HQR = ref();
const viy2Select_672I0A = ref();
const viy2InputBox_672IlF = ref();
const viy2InputBox_672Ivo = ref();
const viy2Select_672IGG = ref();
const viy2DateTimePicker_42NIh = ref();
const viy2Select_672Gd9 = ref();
const viy2Panel_Z8rl1k = ref();
const viy2Row_Z8rm3S = ref();
const viy2InputBox_Z8rmQh = ref();
const viy2InputBox_Z8rop6 = ref();
const viy2InputBox_Z8rqub = ref();
const viy2InputBox_Z8rs30 = ref();
const viy2InputBox_Z8rtRX = ref();
const viy2InputBox_Z8rvGU = ref();
const motorcyclePanel = ref();
const viy2Row_BUxfX = ref();
const viy2Button_BUxhA = ref();
const viy2Button_BUxiG = ref();
const viy2Button_BUxgo = ref();
const grid1 = ref();
const viy2Row_BUxkT = ref();
const serviceOrderPanel = ref();
const viy2Row_BUKA5 = ref();
const viy2Button_BUKAK = ref();
const grid2 = ref();
const viy2Row_BUKBB = ref();
const formData = reactive({
});
const queryFormData = reactive({
  consumerType: '', lastNm: '', middleNm: '', firstNm: '', privacyPolicyResult: '', gender: '', mobilePhone: '', mobile2: '', mobile3: '', birthday: '', age: '', regDate: '', vipNo: '', province: '', cityId: '', addr1: '', addr2: '', email1: '', email2: '', occupation: '', comment: '', interestModel: '', currentBikeBrand: '', currentBikePurchase: '', registrationReason: '', consumerIdentification: '', idNo: '', visaNo: '', faxNo: '', postCd: '', telephone: '',
});
const rules = reactive({
  viy2Select_BU3ZXRules: [
    {
      required: true,
      message: t('errors.required', [t('label.consumerType')]),
    },
  ],
  viy2InputBox_672EseRules: [
    {
      required: true,
      message: t('errors.required', [t('label.lastName')]),
    },
  ],
  viy2InputBox_672ELGRules: [
    {
      required: true,
      message: t('errors.required', [t('label.firstName')]),
    },
  ],
  viy2Radio_672EX1Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.privacyPolicyResult')]),
    },
  ],
  viy2Radio_ydSRKRules: [
    {
      required: true,
      message: t('errors.required', [t('label.gender')]),
    },
  ],
  viy2InputBox_672FwFRules: [
    {
      required: true,
      message: t('errors.required', [t('label.mobilephone')]),
    },
  ],
  viy2DateTimePicker_672FZQRules: [
    {
      required: true,
      message: t('errors.required', [t('label.dateOfBirth')]),
    },
  ],
  viy2DateTimePicker_672GcORules: [
    {
      required: true,
      message: t('errors.required', [t('label.registrationDate')]),
    },
  ],
  viy2Select_672Gt0Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.province')]),
    },
  ],
  viy2Select_672GMtRules: [
    {
      required: true,
      message: t('errors.required', [t('label.city')]),
    },
  ],
  viy2InputBox_672He0Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.address1')]),
    },
  ],
  viy2Select_672I0ARules: [
    {
      required: true,
      message: t('errors.required', [t('label.occupation')]),
    },
  ],
  viy2Select_672IGGRules: [
    {
      required: true,
      message: t('errors.required', [t('label.currentBikeBrand')]),
    },
  ],
  viy2Select_672Gd9Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.rTGConsumerInfo')]),
    },
  ],
});
const grid1EditConfig = reactive({
  trigger: 'click',
});
const grid1MouseConfig = reactive({
  extension: true,
});
const grid2EditConfig = reactive({
  trigger: 'click',
});
const grid2MouseConfig = reactive({
  extension: true,
});
const grid2Viy2TableButtonColumn1_AY9Y4Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocumentCopy,
    },
  ];
};
const genderDsApi = useApi({
  url: '/common/helper/getGenderTypeList.json',
  method: 'post',
});
const genderDs = genderDsApi.data;
const consumerUploadPrivacyDsApi = useApi({
  url: '/common/consumer/consumerUploadPrivacy.json',
  method: 'post',
}, {
  manual: true,
});
const consumerUploadPrivacyDs = consumerUploadPrivacyDsApi.data;
const ConsumerCategoryTypeDsApi = useApi({
  url: '/common/helper/getConsumerCategoryTypeList.json',
  method: 'post',
  data: {
    arg0: queryFormData.consumerId,
    arg1: '',
  },
});
const ConsumerCategoryTypeDs = ConsumerCategoryTypeDsApi.data;
const provinceDsApi = useApi({
  url: '/common/helper/getProvinceList.json',
  method: 'post',
});
const provinceDs = provinceDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandList.json',
  method: 'post',
  data: {
    arg0: '1',
  },
}, {
  initialData: {
    data: [],
  },
});
const brandDs = brandDsApi.data;
const confirmDsApi = useApi({
  url: '/master/cmm0103/confirmConsumerInfoList.json',
  method: 'post',
  data: () => {
    return Object.assign({}, queryFormData);
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    queryFormData.consumerId = data.consumerId;
    gridDsApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S020', 'S044', 'S029', 'S019', 'S054', 'S082', 'S032', 'S062'],
}, {
  initialData: {
    S020: [],
    S044: [],
    S029: [],
    S019: [],
    S054: [],
    S082: [],
    S032: [],
  },
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const privacyPolicyResultDsApi = useApi({
  url: '/common/codevalue/getPrivacyPolicyResult.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data) => {
    const agreementResult = data.agreementResult;
    if (!isNoValue(agreementResult)) {
      queryFormData.privacyPolicyResult = agreementResult;
      privacyPolicyResultFromDB.value = agreementResult;
    } else {
      queryFormData.privacyPolicyResult = null;
      privacyPolicyResultFromDB.value = null;
    }
  },
  manual: true,
});
const privacyPolicyResultDs = privacyPolicyResultDsApi.data;
const gridDsApi = useApi({
  url: '/master/cmm0103/getConsumerMaintenanceInfo.json',
  method: 'post',
  data: () => {
    return {
      consumerId: queryFormData.consumerId,
    };
  },
}, {
  onSuccess: (data) => {
    queryFormData.consumerType = data.consumerType;
    queryFormData.lastNm = data.lastNm;
    queryFormData.middleNm = data.middleNm;
    queryFormData.firstNm = data.firstNm;
    queryFormData.privacyPolicyResult = data.privacyPolicyResult;
    queryFormData.gender = data.gender;
    queryFormData.mobilePhone = data.mobilePhone;
    queryFormData.mobile2 = data.mobile2;
    queryFormData.mobile3 = data.mobile3;
    queryFormData.vipNo = data.vipNo;
    queryFormData.birthday = data.birthday;
    queryFormData.age = data.age;
    queryFormData.regDate = data.regDate;
    queryFormData.province = data.province;
    queryFormData.cityId = data.cityId;
    queryFormData.addr1 = data.addr1;
    queryFormData.addr2 = data.addr2;
    queryFormData.email1 = data.email1;
    queryFormData.email2 = data.email2;
    queryFormData.occupation = data.occupation;
    queryFormData.comment = data.comment;
    queryFormData.interestModel = data.interestModel;
    queryFormData.currentBikeBrand = data.currentBikeBrand;
    queryFormData.currentBikePurchase = data.currentBikePurchase;
    queryFormData.registrationReason = data.registrationReason;
    queryFormData.consumerIdentification = data.consumerIdentification;
    queryFormData.idNo = data.idNo;
    queryFormData.visaNo = data.visaNo;
    queryFormData.faxNo = data.faxNo;
    queryFormData.postCd = data.postCd;
    queryFormData.telephone = data.telephone;
    disclickFlg1.value = true;
    disclickFlg2.value = true;
    disableFlag.value = true;
    privacyPolicyResultDsApi.runAsync();
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const cityDsApi = useApi({
  url: '/common/helper/getCityList.json',
  method: 'post',
});
const cityDs = cityDsApi.data;
const viy2Button_8d8tClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_83YdClick = () => {
  queryForm.value.validate((valid, fields) => {
    if (valid) {
      confirmDsApi.runAsync();
    }
  });
};
const viy2InputBox_672EseChange = () => {
  privacyPolicyResultDsApi.runAsync();
};
const viy2InputBox_672EBXChange = () => {
  privacyPolicyResultDsApi.runAsync();
};
const viy2InputBox_672ELGChange = () => {
  privacyPolicyResultDsApi.runAsync();
};
const viy2Upload_672F8lOnSuccess = (response, file) => {
  policyFileName.value = file.name;
  consumerUploadPrivacyDsApi.runAsync({
    privacyResult: queryFormData.privacyPolicyResult,
    consumerId: queryFormData.consumerId,
    lastNm: queryFormData.lastNm,
    middleNm: queryFormData.middleNm,
    firstNm: queryFormData.firstNm,
    mobilePhone: queryFormData.mobilePhone,
  });
};
const viy2Upload_672F8lSubmitUpload = () => {
  viy2Upload_672F8l.value.submit();
};
const viy2Button_wTDcLClick = () => {
  queryFormData.privacyPolicyResult = null;
  policyFileName.value = null;
  privacyPolicyResultFromDB.value = null;
};
const viy2InputBox_672FwFChange = () => {
  privacyPolicyResultDsApi.runAsync();
};
const viy2DateTimePicker_672FZQChange = () => {
  if (!isNoValue(queryFormData.birthday)) {
    const birthYear = new Date(queryFormData.birthday.substring(0, 4)).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    queryFormData.age = age.toString();
  } else {
    queryFormData.age = '';
  }
};
const viy2Button_BUxhAClick = () => {
  const data = { consumerId: consumerId1 };
  useMultiTags().openTag({
    name: 'sdm0302_01',
  });
  useMultiTags().getTag({ name: 'sdm0302_01' }).meta.title = t('title.retailOrderEntry_02');
  router.push({ name: 'sdm0302_01', data });
};
const viy2Button_BUxiGClick = () => {
  const data = {
    consumerId: consumerId1,
    serializedProductId: serializedProductId1,
  };
  useMultiTags().openTag({
    name: 'svm0102_01',
  });
  useMultiTags().getTag({ name: 'svm0102_01' }).meta.title = t('title.serviceOrderNewSOP_01');
  router.push({ name: 'svm0102_01', data });
};
const viy2Button_BUxgoClick = () => {
  const data = { serializedProductId: serializedProductId1 };
  useMultiTags().openTag({
    name: 'svm0104_02',
  });
  useMultiTags().getTag({ name: 'svm0104_02' }).meta.title = t('title.unitInfoMaintenance_02');
  router.push({ name: 'svm0104_02', data });
};
const grid1CellClick = (obj) => {
  const row = obj.row;
  consumerId1 = row.consumerId1;
  serializedProductId1 = row.serializedProductId1;
  disclickFlg1.value = false;
};
const grid1PlateNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1BrandNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1ModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1FrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1EngineNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1ConsumerId1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid1SerializedProductId1EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_BUKAKClick = () => {
  const data = {
    consumerId: consumerId2,
    serializedProductId: serializedProductId2,
  };
  useMultiTags().openTag({
    name: 'svm0102_01',
  });
  useMultiTags().getTag({ name: 'svm0102_01' }).meta.title = t('title.serviceOrderNewSOP_01');
  router.push({ name: 'svm0102_01', data });
};
const grid2CellClick = (obj) => {
  const row = obj.row;
  consumerId2 = row.consumerId2;
  serializedProductId2 = row.serializedProductId2;
  disclickFlg2.value = false;
};
const grid2ServiceDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const grid2OrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2PlateNoByServiceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2ServiceCategoryEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2ServiceDemandEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2ServiceTitleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2TotalAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
    },
  };
});
const grid2ConsumerId2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const grid2SerializedProductId2EditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  initData();
  queryFormData.regDate = currentDate;
});
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const initData = () => {
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    queryFormData.consumerId = params.consumerId;
    if (!isNoValue(queryFormData.consumerId)) {
      gridDsApi.runAsync();
    } else {
      queryForm.value.resetFields();
      policyFileName.value = null;
      privacyPolicyResultFromDB.value = null;
      queryFormData.regDate = currentDate;
      disclickFlg1.value = true;
      disclickFlg2.value = true;
    }
  }
};
const resetCondition = () => {
// 清空表单元素
  if (queryFormData.consumerId) {
    gridDsApi.runAsync();
  } else {
    queryForm.value.resetFields();
  }
  policyFileName.value = null;
  privacyPolicyResultFromDB.value = null;
  queryFormData.regDate = currentDate;
  disclickFlg1.value = true;
  disclickFlg2.value = true;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_GgDWR"
      ref="viy2Row_GgDWR"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" type="warning" @click="viy2Button_8d8tClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left" type="info" @click="viy2Button_83YdClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      label-width="115px"
      class="margin-top-div"
      :model="queryFormData"
    >
      <VuePanel id="viy2Panel_BU3YW" ref="viy2Panel_BU3YW" :title="t('common.label.generalInformation')">
        <VueRow
          id="viy2Row_BU3Zs"
          ref="viy2Row_BU3Zs"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.consumerType')"
              label-width="120px"
              prop="consumerType"
              :rules="rules.viy2Select_BU3ZXRules"
            >
              <VueSelect
                id="viy2Select_BU3ZX"
                ref="viy2Select_BU3ZX"
                v-model="queryFormData.consumerType"
                :style="{ width: '220px' }"
                :clearable="true"
                :filterable="true"
                :disabled="disableFlag"
                :options="ConsumerCategoryTypeDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.lastName')"
              prop="lastNm"
              :rules="rules.viy2InputBox_672EseRules"
            >
              <VueInput
                id="viy2InputBox_672Ese"
                ref="viy2InputBox_672Ese"
                v-model="queryFormData.lastNm"
                @change="viy2InputBox_672EseChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.middleName')"
              prop="middleNm"
            >
              <VueInput
                id="viy2InputBox_672EBX"
                ref="viy2InputBox_672EBX"
                v-model="queryFormData.middleNm"
                @change="viy2InputBox_672EBXChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.firstName')"
              prop="firstNm"
              :rules="rules.viy2InputBox_672ELGRules"
            >
              <VueInput
                id="viy2InputBox_672ELG"
                ref="viy2InputBox_672ELG"
                v-model="queryFormData.firstNm"
                @change="viy2InputBox_672ELGChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 16 }"
          >
            <VueFormItem
              :label="t('label.privacyPolicyResult')"
              label-width="160px"
              prop="privacyPolicyResult"
              :rules="rules.viy2Radio_672EX1Rules"
            >
              <VueRadioGroup
                id="viy2Radio_672EX1"
                ref="viy2Radio_672EX1"
                v-model="queryFormData.privacyPolicyResult"
                radio-style="button"
                direction="horizontal"
                :disabled="!isNoValue(privacyPolicyResultFromDB)"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in mstCodeInfoDs.S062"
                  :key="option.codeDbid"
                  :label="option.codeDbid"
                  :name="option.name"
                  :disabled="option.disabled"
                >
                  {{ option.codeData1 }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
            <VueUpload v-show="isNoValue(queryFormData.privacyPolicyResult) && isNoValue(privacyPolicyResultFromDB)" id="viy2Upload_672F8l" ref="viy2Upload_672F8l" :accept="acceptFileType" :auto-upload="false" :commit-btn="false" :limit="1" action="http://localhost:8080/a1stream/api/public/test/escortFileUploadTest.json" :on-success="viy2Upload_672F8lOnSuccess">
              <template #trigger>
                <VueButton>
                  {{ t('title.chooseUploadFile') }}
                </VueButton>
              </template>
            </VueUpload>
            <VueButton v-show="!isNoValue(privacyPolicyResultFromDB)" id="viy2Button_wTDcL" ref="viy2Button_wTDcL" icon-position="left" @click="viy2Button_wTDcLClick">
              {{ t('button.reset') }}
            </VueButton>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.gender')"
              prop="gender"
              :rules="rules.viy2Radio_ydSRKRules"
            >
              <VueRadioGroup
                id="viy2Radio_ydSRK"
                ref="viy2Radio_ydSRK"
                v-model="queryFormData.gender"
                radio-style="button"
                direction="horizontal"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in genderDs"
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
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.mobile1')"
              prop="mobilePhone"
              :rules="rules.viy2InputBox_672FwFRules"
            >
              <VueInput
                id="viy2InputBox_672FwF"
                ref="viy2InputBox_672FwF"
                v-model="queryFormData.mobilePhone"
                @change="viy2InputBox_672FwFChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.mobile2')"
              prop="mobile2"
            >
              <VueInput
                id="viy2InputBox_672FI0"
                ref="viy2InputBox_672FI0"
                v-model="queryFormData.mobile2"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.mobile3')"
              prop="mobile3"
            >
              <VueInput
                id="viy2InputBox_672FQ7"
                ref="viy2InputBox_672FQ7"
                v-model="queryFormData.mobile3"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.dateOfBirth')"
              prop="birthday"
              :rules="rules.viy2DateTimePicker_672FZQRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_672FZQ"
                ref="viy2DateTimePicker_672FZQ"
                v-model="queryFormData.birthday"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                @change="viy2DateTimePicker_672FZQChange"
              />
            </VueFormItem>
            <VueFormItem
              label="Age"
              label-width="35px"
              prop="age"
            >
              <VueInput
                id="viy2InputBox_672G1t"
                ref="viy2InputBox_672G1t"
                v-model="queryFormData.age"
                :disabled="true"
                :style="{ width: '50px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.registrationDate')"
              label-width="130px"
              prop="regDate"
              :rules="rules.viy2DateTimePicker_672GcORules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_672GcO"
                ref="viy2DateTimePicker_672GcO"
                v-model="queryFormData.regDate"
                type="date"
                :disabled="true"
                class="no-border"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 10 }"
          >
            <VueFormItem
              :label="t('label.vipNumber')"
              prop="vipNo"
            >
              <VueInput
                id="viy2InputBox_672Gg3"
                ref="viy2InputBox_672Gg3"
                v-model="queryFormData.vipNo"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.province')"
              prop="province"
              :rules="rules.viy2Select_672Gt0Rules"
            >
              <VueSelect
                id="viy2Select_672Gt0"
                ref="viy2Select_672Gt0"
                v-model="queryFormData.province"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="provinceDs"
                :props="{
                  label: 'geographyNm',
                  value: 'geographyId',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.city')"
              prop="cityId"
              :rules="rules.viy2Select_672GMtRules"
            >
              <VueSelect
                id="viy2Select_672GMt"
                ref="viy2Select_672GMt"
                v-model="queryFormData.cityId"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
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
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.address1')"
              prop="addr1"
              :rules="rules.viy2InputBox_672He0Rules"
            >
              <VueInput
                id="viy2InputBox_672He0"
                ref="viy2InputBox_672He0"
                v-model="queryFormData.addr1"
                :style="{ width: '350px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.address2')"
              prop="addr2"
            >
              <VueInput
                id="viy2InputBox_672Hsz"
                ref="viy2InputBox_672Hsz"
                v-model="queryFormData.addr2"
                :style="{ width: '350px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.email1')"
              prop="email1"
            >
              <VueInput
                id="viy2InputBox_672HDU"
                ref="viy2InputBox_672HDU"
                v-model="queryFormData.email1"
                :style="{ width: '350px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.email2')"
              prop="email2"
            >
              <VueInput
                id="viy2InputBox_672HQR"
                ref="viy2InputBox_672HQR"
                v-model="queryFormData.email2"
                :style="{ width: '350px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.occupation')"
              prop="occupation"
              :rules="rules.viy2Select_672I0ARules"
            >
              <VueSelect
                id="viy2Select_672I0A"
                ref="viy2Select_672I0A"
                v-model="queryFormData.occupation"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :options="get(mstCodeInfoDs, 'S019')"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.comment')"
              prop="comment"
            >
              <VueInput
                id="viy2InputBox_672IlF"
                ref="viy2InputBox_672IlF"
                v-model="queryFormData.comment"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.interestModel')"
              prop="interestModel"
            >
              <VueInput
                id="viy2InputBox_672Ivo"
                ref="viy2InputBox_672Ivo"
                v-model="queryFormData.interestModel"
                :disabled="disableFlag"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.currentBikeBrand')"
              label-width="150px"
              prop="currentBikeBrand"
              :rules="rules.viy2Select_672IGGRules"
            >
              <VueSelect
                id="viy2Select_672IGG"
                ref="viy2Select_672IGG"
                v-model="queryFormData.currentBikeBrand"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :disabled="disableFlag"
                :options="brandDs"
                :props="{
                  label: 'brandNm',
                  value: 'brandCd',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Current Bike Purchase Date"
              label-width="200px"
              prop="currentBikePurchase"
            >
              <VueDatePicker
                id="viy2DateTimePicker_42NIh"
                ref="viy2DateTimePicker_42NIh"
                v-model="queryFormData.currentBikePurchase"
                type="month"
                :disabled="disableFlag"
                :style="{ width: '120px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ym"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ym"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.rTGConsumerInfo')"
              label-width="200px"
              prop="registrationReason"
              :rules="rules.viy2Select_672Gd9Rules"
            >
              <VueSelect
                id="viy2Select_672Gd9"
                ref="viy2Select_672Gd9"
                v-model="queryFormData.registrationReason"
                :style="{ width: '200px' }"
                :clearable="true"
                :filterable="true"
                :disabled="disableFlag"
                :options="get(mstCodeInfoDs, 'S020')"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
      <VuePanel id="viy2Panel_Z8rl1k" ref="viy2Panel_Z8rl1k" title="ID No. & Contact">
        <VueRow
          id="viy2Row_Z8rm3S"
          ref="viy2Row_Z8rm3S"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Consumer Identification"
              label-width="190px"
              prop="consumerIdentification"
            >
              <VueInput
                id="viy2InputBox_Z8rmQh"
                ref="viy2InputBox_Z8rmQh"
                v-model="queryFormData.consumerIdentification"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.idNoDetail')"
              prop="idNo"
            >
              <VueInput
                id="viy2InputBox_Z8rop6"
                ref="viy2InputBox_Z8rop6"
                v-model="queryFormData.idNo"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Visa Number"
              prop="visaNo"
            >
              <VueInput
                id="viy2InputBox_Z8rqub"
                ref="viy2InputBox_Z8rqub"
                v-model="queryFormData.visaNo"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Fax"
              prop="faxNo"
            >
              <VueInput
                id="viy2InputBox_Z8rs30"
                ref="viy2InputBox_Z8rs30"
                v-model="queryFormData.faxNo"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.postCode')"
              label-width="190px"
              prop="postCd"
            >
              <VueInput
                id="viy2InputBox_Z8rtRX"
                ref="viy2InputBox_Z8rtRX"
                v-model="queryFormData.postCd"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.telephone')"
              prop="telephone"
            >
              <VueInput
                id="viy2InputBox_Z8rvGU"
                ref="viy2InputBox_Z8rvGU"
                v-model="queryFormData.telephone"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VuePanel>
    </VueForm>
    <VuePanel id="motorcyclePanel" ref="motorcyclePanel" v-model="vehicleMdl" :title="t('common.label.vehicleInfo')">
      <template #header>
        <div style="width: 500px">
          <VueRow
            v-show="vehicleMdl"
            id="viy2Row_BUxfX"
            ref="viy2Row_BUxfX"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_BUxhA" ref="viy2Button_BUxhA" icon-position="left" :disabled="disclickFlg1" @click="viy2Button_BUxhAClick">
                {{ t('button.newRetailOrder') }}
              </VueButton>
              <VueButton id="viy2Button_BUxiG" ref="viy2Button_BUxiG" icon-position="left" :disabled="disclickFlg1" @click="viy2Button_BUxiGClick">
                {{ t('button.newServiceOrder') }}
              </VueButton>
              <VueButton id="viy2Button_BUxgo" ref="viy2Button_BUxgo" icon-position="left" :disabled="disclickFlg1" @click="viy2Button_BUxgoClick">
                {{ t('common.label.vehicleDetail') }}
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="grid1" ref="grid1" :data="gridDs.motorcycleInfoList" :edit-config="grid1EditConfig" :mouse-config="grid1MouseConfig" @cell-click="grid1CellClick">
        <VueRow
          id="viy2Row_BUxkT"
          ref="viy2Row_BUxkT"
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
        />
        <VueInputColumn
          :edit-render="grid1PlateNoEditRender"
          field="plateNo"
          :title="t('label.numberPlate')"
          width="130px"
        />
        <VueInputColumn
          :edit-render="grid1BrandNmEditRender"
          field="brandNm"
          :title="t('label.brand')"
          width="150px"
        />
        <VueInputColumn
          :edit-render="grid1ModelNmEditRender"
          field="modelNm"
          :title="t('label.modelName')"
          width="170px"
        />
        <VueInputColumn
          :edit-render="grid1FrameNoEditRender"
          field="frameNo"
          :title="t('label.frameNumber')"
          width="160px"
        />
        <VueInputColumn
          :edit-render="grid1EngineNoEditRender"
          field="engineNo"
          :title="t('label.engineNumber')"
          width="160px"
        />
        <VueInputColumn
          :edit-render="grid1ConsumerId1EditRender"
          field="consumerId1"
          :visible="false"
          title="ConsumerId1"
          width="100px"
        />
        <VueInputColumn
          :edit-render="grid1SerializedProductId1EditRender"
          field="serializedProductId1"
          :visible="false"
          title="SerializedProductId1"
          width="100px"
        />
      </VueTable>
    </VuePanel>
    <VuePanel id="serviceOrderPanel" ref="serviceOrderPanel" v-model="serviceMdl" :title="t('common.label.serviceOrder')">
      <template #header>
        <div style="width: 300px">
          <VueRow
            v-show="serviceMdl"
            id="viy2Row_BUKA5"
            ref="viy2Row_BUKA5"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_BUKAK" ref="viy2Button_BUKAK" icon-position="left" :disabled="disclickFlg2" @click="viy2Button_BUKAKClick">
                {{ t('button.newServiceOrder') }}
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="grid2" ref="grid2" :data="gridDs.serviceDetailList" :edit-config="grid2EditConfig" :mouse-config="grid2MouseConfig" @cell-click="grid2CellClick">
        <VueRow
          id="viy2Row_BUKBB"
          ref="viy2Row_BUKBB"
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
        />
        <VueDateTimeColumn
          :edit-render="grid2ServiceDateEditRender"
          field="serviceDate"
          align="center"
          :title="t('label.serviceDate')"
          width="120px"
        />
        <VueInputColumn
          :edit-render="grid2OrderNoEditRender"
          field="orderNo"
          :title="t('label.orderNo')"
          width="140px"
        />
        <VueInputColumn
          :edit-render="grid2PlateNoByServiceEditRender"
          field="plateNoByService"
          :title="t('label.numberPlate')"
          width="150px"
        />
        <VueInputColumn
          :edit-render="grid2ServiceCategoryEditRender"
          field="serviceCategory"
          :title="t('label.serviceCategory')"
          width="180px"
        />
        <VueInputColumn
          :edit-render="grid2ServiceDemandEditRender"
          field="serviceDemand"
          :title="t('label.serviceDemand')"
          width="180px"
        />
        <VueInputColumn
          :edit-render="grid2ServiceTitleEditRender"
          field="serviceTitle"
          :title="t('label.serviceTitle')"
          width="170px"
        />
        <VueNumberColumn
          :edit-render="grid2TotalAmountEditRender"
          field="totalAmount"
          :title="t('label.totalAmount')"
          width="150px"
        />
        <VueButtonColumn
          fixed="right"
          align="center"
          width="40px"
          :buttons="grid2Viy2TableButtonColumn1_AY9Y4Buttons"
        />
        <VueInputColumn
          :edit-render="grid2ConsumerId2EditRender"
          field="consumerId2"
          :visible="false"
          title="ConsumerId2"
          width="100px"
        />
        <VueInputColumn
          :edit-render="grid2SerializedProductId2EditRender"
          field="serializedProductId2"
          :visible="false"
          title="SerializedProductId2"
          width="100px"
        />
      </VueTable>
    </VuePanel>
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
