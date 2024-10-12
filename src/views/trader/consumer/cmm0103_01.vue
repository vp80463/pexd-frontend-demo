<script setup>
import { IconArrowLeftBold, IconDocumentCopy, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
// 获取系统日期
const salesDateTo = dayjs().format('YYYYMMDD');
// 获取系统日期当天-6个月
const salesDateFrom = dayjs().subtract(6, 'month').format('YYYYMMDD');
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
const isNoValue = (value) => {
  return value === undefined || value === null || value === '' || value === 'N';
};
let defaultValue;
const downloadDisabledFlag = ref(true);
const headerFlag = ref(false);
// newRetailOrder按钮控制
let csId = null;
const disableFlg = ref(true);
const router = useRouter();
let cityList = [];
const detailMdl = ref(true);
defineOptions({
  name: 'cmm0103_01',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_XP0UO = ref();
const viy2Button_83Yd = ref();
const viy2Flex_Y49qO = ref();
const queryForm = ref();
const viy2Panel_9GG3cW = ref();
const viy2Row_9GG3cY = ref();
const viy2Row_9GG3d9 = ref();
const viy2InputBox_9GG3da = ref();
const viy2InputBox_9GG3dn = ref();
const viy2InputBox_1ySMw8K = ref();
const viy2InputBox_1ySMwap = ref();
const viy2InputBox_1ySMwas = ref();
const viy2InputBox_1ySMwc7 = ref();
const conditionForm = ref();
const viy2Panel_9Oa3xe = ref();
const viy2Row_9Oa3xq = ref();
const viy2DateTimePicker_9Oa3xr = ref();
const viy2DateTimePicker_9Oa3xt = ref();
const viy2Button_9Oa3xE = ref();
const viy2Button_9Oa3xF = ref();
const viy2DateTimePicker_9Oa3xG = ref();
const viy2DateTimePicker_1A5CzpE = ref();
const viy2Button_1A5Czrh = ref();
const viy2Button_1A5Czri = ref();
const viy2InputBox_1A5Czrg = ref();
const viy2InputBox_1A5Czrm = ref();
const viy2Select_1A5Czt1 = ref();
const viy2Radio_142pdN = ref();
const viy2Select_1A5CzuR = ref();
const viy2Select_1A5CzwA = ref();
const viy2Select_1A5Czyg = ref();
const viy2CheckBox_1A5CzA2 = ref();
const viy2Row_1A5CzA4 = ref();
const viy2DateTimePicker_1A5CzA5 = ref();
const viy2DateTimePicker_1A5CzA7 = ref();
const viy2Button_1A5CzA8 = ref();
const viy2Button_1A5CzBL = ref();
const viy2DateTimePicker_1A5CzBM = ref();
const viy2DateTimePicker_1A5CzBO = ref();
const viy2Button_1A5CzBP = ref();
const viy2Button_1A5CzBQ = ref();
const viy2Flex_Y4aeS = ref();
const viy2Panel_9OaGSU = ref();
const viy2Row_9OaGT6 = ref();
const viy2Button_9OaGT7 = ref();
const viy2Button_9OaGTi = ref();
const grid = ref();
const viy2Row_9OaGTl = ref();
const formData = reactive({
});
const queryFormData = reactive({
  lastNm: '', middleNm: '', firstNm: '', phone: '', idNo: '', vipNo: '',
});
const conditionFormData = reactive({
  salesDateFrom: '', salesDateTo: '', serviceDateFrom: '', serviceDateTo: '', modelCd: '', modelNm: '', consumerType: '', gender: '', birthday: '', province: '', cityId: '', vipNoHolder: 'N', ageDateFrom: '', ageDateTo: '', regDateFrom: '', regDateTo: '',
});
const viy2Select_1A5CzuROpts = reactive([
  {
    label:
'January',
    value:
'1',
  },
  {
    label:
'February',
    value:
'2',
  },
  {
    label:
'March',
    value:
'3',
  },
  {
    label:
'April',
    value:
'4',
  },
  {
    label:
'May',
    value:
'5',
  },
  {
    label:
'June',
    value:
'6',
  },
  {
    label:
'July',
    value:
'7',
  },
  {
    label:
'August',
    value:
'8',
  },
  {
    label:
'September',
    value:
'9',
  },
  {
    label:
'October',
    value:
'10',
  },
  {
    label:
'November',
    value:
'11',
  },
  {
    label:
'December',
    value:
'12',
  },
]);
const viy2CheckBox_1A5CzA2Opts = [
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
const gridEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_AY9Y4Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocumentCopy,
      click: viewDetail,
      title: 'Detail',
    },
  ];
};
const ConsumerCategoryTypeDsApi = useApi({
  url: '/common/helper/getConsumerCategoryTypeList.json',
  method: 'post',
  data: {
    arg0: '1',
    arg1: '',
  },
}, {
  onSuccess: (data) => {
    const list = data;
    for (const key in list) {
      const item = list[key];
      if (item.codeDbid == 'S021BIKEPURCHASECUSTOMER') {
        defaultValue = item.codeDbid;
      }
    }
    conditionFormData.consumerType = defaultValue;
  },
  initialData: {
    data: [],
  },
});
const ConsumerCategoryTypeDs = ConsumerCategoryTypeDsApi.data;
const gridDsApi = useApi({
  url: '/master/cmm0103/findConsumerInfoList.json',
  method: 'post',
  data: () => {
    return Object.assign({}, queryFormData, conditionFormData);
  },
}, {
  onSuccess: (data, params) => {
    if (gridDs.value.length !== 0) {
      downloadDisabledFlag.value = false;
    } else {
      downloadDisabledFlag.value = true;
    }
    disableFlg.value = true;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const downloadDsApi = useApi({
  url: '/master/cmm0103/findConsumerExportList.json',
  method: 'post',
  data: () => {
    return Object.assign({}, queryFormData, conditionFormData);
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'CMM0103_01.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  manual: true,
});
const downloadDs = downloadDsApi.data;
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
  data: () => {
    return {};
  }
  ,
}, {
  onSuccess: (data) => {
    cityList = data;
    cityDs.value = [];
  },
  initialData: {
    data: [],
  },
});
const cityDs = cityDsApi.data;
const genderDsApi = useApi({
  url: '/common/helper/getGenderTypeList.json',
  method: 'post',
});
const genderDs = genderDsApi.data;
const viy2Button_8d8tClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_XP0UOClick = () => {
  downloadDsApi.runAsync();
};
const viy2Button_83YdClick = () => {
  gridDsApi.runAsync();
};
const viy2Button_9Oa3xEClick = () => {
  if (!isNoValue(conditionFormData.salesDateFrom)) {
    conditionFormData.salesDateFrom = dayjs(conditionFormData.salesDateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  }
  if (!isNoValue(conditionFormData.salesDateTo)) {
    conditionFormData.salesDateTo = dayjs(conditionFormData.salesDateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  }
};
const viy2Button_9Oa3xFClick = () => {
  conditionFormData.salesDateFrom = salesDateFrom;
  conditionFormData.salesDateTo = salesDateTo;
};
const viy2Button_1A5CzrhClick = () => {
  if (!isNoValue(queryFormData.serviceDateFrom)) {
    queryFormData.serviceDateFrom = dayjs(queryFormData.serviceDateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  }
  if (!isNoValue(queryFormData.serviceDateTo)) {
    queryFormData.serviceDateTo = dayjs(queryFormData.serviceDateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  }
};
const viy2Button_1A5CzriClick = () => {
  queryFormData.serviceDateFrom = firstDay;
  queryFormData.serviceDateTo = lastDay;
};
const viy2Select_1A5Czt1Change = () => {
  if (conditionFormData.consumerType == 'S0212SCUSTOMER') {
    conditionFormData.salesDateFrom = '';
    conditionFormData.salesDateTo = '';
  }
};
const viy2Button_1A5CzA8Click = () => {
  if (!isNoValue(conditionFormData.ageDateFrom)) {
    conditionFormData.ageDateFrom = dayjs(conditionFormData.ageDateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  }
  if (!isNoValue(conditionFormData.ageDateTo)) {
    conditionFormData.ageDateTo = dayjs(conditionFormData.ageDateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  }
};
const viy2Button_1A5CzBLClick = () => {
  conditionFormData.ageDateFrom = firstDay;
  conditionFormData.ageDateTo = lastDay;
};
const viy2Button_1A5CzBPClick = () => {
  if (!isNoValue(conditionFormData.regDateFrom)) {
    conditionFormData.regDateFrom = dayjs(conditionFormData.regDateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  }
  if (!isNoValue(conditionFormData.regDateTo)) {
    conditionFormData.regDateTo = dayjs(conditionFormData.regDateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  }
};
const viy2Button_1A5CzBQClick = () => {
  conditionFormData.regDateFrom = firstDay;
  conditionFormData.regDateTo = lastDay;
};
const viy2Button_9OaGT7Click = () => {
  const data = { consumerId: csId };
  useMultiTags().openTag({
    name: 'sdm0302_01',
  });
  useMultiTags().getTag({ name: 'sdm0302_01' }).meta.title = t('title.retailOrderEntry_02');
  router.push({ name: 'sdm0302_01', data });
};
const viy2Button_9OaGTiClick = () => {
  viewNew();
};
const gridCellClick = (obj) => {
  const row = obj.row;
  csId = row.consumerId;
  disableFlg.value = false;
};
const gridCellDblclick = (obj) => {
  viewDetail(obj.row);
};
const gridConsumerTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridConsumerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridVipNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPhoneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridIdNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
    },
  };
});
const gridConsumerIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  conditionFormData.salesDateFrom = salesDateFrom;
  conditionFormData.salesDateTo = salesDateTo;
});
watch(() => queryFormData, (newVal, oldVal) => {
  if (!isNoValue(queryFormData.lastNm)
|| !isNoValue(queryFormData.middleNm)
|| !isNoValue(queryFormData.firstNm)
|| !isNoValue(queryFormData.phone)
|| !isNoValue(queryFormData.idNo)
|| !isNoValue(queryFormData.vipNo)) {
    conditionForm.value.resetFields();
    headerFlag.value = true;
  }
  queryFormData.headerFlag = headerFlag;
}, { deep: true });
watch(() => conditionFormData, (newVal, oldVal) => {
  if (!isNoValue(conditionFormData.salesDateFrom)
|| !isNoValue(conditionFormData.salesDateTo)
|| !isNoValue(conditionFormData.serviceDateTo)
|| !isNoValue(conditionFormData.modelCd)
|| !isNoValue(conditionFormData.modelNm)
|| !isNoValue(conditionFormData.consumerType)
|| !isNoValue(conditionFormData.gender)
|| !isNoValue(conditionFormData.birthday)
|| !isNoValue(conditionFormData.provinceId)
|| !isNoValue(conditionFormData.cityId)
|| !isNoValue(conditionFormData.vipNoHolder)
|| !isNoValue(conditionFormData.ageDateFrom)
|| !isNoValue(conditionFormData.ageDateTo)
|| !isNoValue(conditionFormData.regDateFrom)
|| !isNoValue(conditionFormData.regDateTo)) {
    queryForm.value.resetFields();
    headerFlag.value = false;
  }
  queryFormData.headerFlag = headerFlag;
}, { deep: true });
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  conditionForm.value.resetFields();
  downloadDisabledFlag.value = true;
  conditionFormData.salesDateFrom = salesDateFrom;
  conditionFormData.salesDateTo = salesDateTo;
  conditionFormData.consumerType = defaultValue;
  resetTblResults();
  disableFlg.value = true;
};
const resetTblResults = () => {
  gridDs.value.splice(0);
  downloadDisabledFlag.value = true;
};
const viewNew = () => {
  const data = {
    consumerId: null,
  };
  useMultiTags().openTag({
    name: 'cmm0103_02',
  });
  useMultiTags().getTag({ name: 'cmm0103_02' }).meta.title = t('title.consumerInfoMaintenance_02');
  router.push({ name: 'cmm0103_02', data });
};
const viewDetail = (row) => {
  const data = {
    consumerId: row.consumerId,
  };
  useMultiTags().openTag({
    name: 'cmm0103_02',
  });
  useMultiTags().getTag({ name: 'cmm0103_02' }).meta.title = t('title.consumerInfoMaintenance_02');
  router.push({ name: 'cmm0103_02', data });
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
        <VueButton id="viy2Button_XP0UO" ref="viy2Button_XP0UO" icon-position="left" :disabled="downloadDisabledFlag" @click="viy2Button_XP0UOClick">
          {{ t('button.download') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left" type="info" @click="viy2Button_83YdClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_Y49qO"
      ref="viy2Flex_Y49qO"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="115px"
        class="margin-top-div"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_9GG3cW" ref="viy2Panel_9GG3cW" :title="t('common.label.header')">
          <template #header>
            <div style="width: 400px">
              <VueRow
                id="viy2Row_9GG3cY"
                ref="viy2Row_9GG3cY"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                />
              </VueRow>
            </div>
          </template>
          <VueRow
            id="viy2Row_9GG3d9"
            ref="viy2Row_9GG3d9"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.lastName')"
                prop="lastNm"
              >
                <VueInput
                  id="viy2InputBox_9GG3da"
                  ref="viy2InputBox_9GG3da"
                  v-model="queryFormData.lastNm"
                  :clearable="true"
                  :style="{ width: '150px' }"
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
                  id="viy2InputBox_9GG3dn"
                  ref="viy2InputBox_9GG3dn"
                  v-model="queryFormData.middleNm"
                  :clearable="true"
                  :style="{ width: '150px' }"
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
              >
                <VueInput
                  id="viy2InputBox_1ySMw8K"
                  ref="viy2InputBox_1ySMw8K"
                  v-model="queryFormData.firstNm"
                  :clearable="true"
                  :style="{ width: '180px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.mobilephone')"
                prop="phone"
              >
                <VueInput
                  id="viy2InputBox_1ySMwap"
                  ref="viy2InputBox_1ySMwap"
                  v-model="queryFormData.phone"
                  :clearable="true"
                  :style="{ width: '150px' }"
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
                  id="viy2InputBox_1ySMwas"
                  ref="viy2InputBox_1ySMwas"
                  v-model="queryFormData.idNo"
                  :clearable="true"
                  :style="{ width: '150px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.vipNumber')"
                prop="vipNo"
              >
                <VueInput
                  id="viy2InputBox_1ySMwc7"
                  ref="viy2InputBox_1ySMwc7"
                  v-model="queryFormData.vipNo"
                  :clearable="true"
                  :style="{ width: '150px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueForm
        id="conditionForm"
        ref="conditionForm"
        :model="conditionFormData"
      >
        <VuePanel id="viy2Panel_9Oa3xe" ref="viy2Panel_9Oa3xe" :title="t('label.condition')">
          <VueRow
            id="viy2Row_9Oa3xq"
            ref="viy2Row_9Oa3xq"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.salesDate')"
                prop="salesDateFrom"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_9Oa3xr"
                  ref="viy2DateTimePicker_9Oa3xr"
                  v-model="conditionFormData.salesDateFrom"
                  type="date"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0"
                prop="salesDateTo"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_9Oa3xt"
                  ref="viy2DateTimePicker_9Oa3xt"
                  v-model="conditionFormData.salesDateTo"
                  type="date"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
              <VueButton id="viy2Button_9Oa3xE" ref="viy2Button_9Oa3xE" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_9Oa3xEClick" />
              <VueButton id="viy2Button_9Oa3xF" ref="viy2Button_9Oa3xF" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_9Oa3xFClick" />
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.serviceDate')"
                prop="serviceDateFrom"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_9Oa3xG"
                  ref="viy2DateTimePicker_9Oa3xG"
                  v-model="conditionFormData.serviceDateFrom"
                  type="date"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0"
                prop="serviceDateTo"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1A5CzpE"
                  ref="viy2DateTimePicker_1A5CzpE"
                  v-model="conditionFormData.serviceDateTo"
                  type="date"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
              <VueButton id="viy2Button_1A5Czrh" ref="viy2Button_1A5Czrh" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1A5CzrhClick" />
              <VueButton id="viy2Button_1A5Czri" ref="viy2Button_1A5Czri" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_1A5CzriClick" />
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.modelCode')"
                prop="modelCd"
              >
                <VueInput
                  id="viy2InputBox_1A5Czrg"
                  ref="viy2InputBox_1A5Czrg"
                  v-model="conditionFormData.modelCd"
                  :clearable="true"
                  :style="{ width: '160px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.modelName')"
                prop="modelNm"
              >
                <VueInput
                  id="viy2InputBox_1A5Czrm"
                  ref="viy2InputBox_1A5Czrm"
                  v-model="conditionFormData.modelNm"
                  :clearable="true"
                  :style="{ width: '160px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.consumerType')"
                prop="consumerType"
              >
                <VueSelect
                  id="viy2Select_1A5Czt1"
                  ref="viy2Select_1A5Czt1"
                  v-model="conditionFormData.consumerType"
                  :style="{ width: '200px' }"
                  :clearable="true"
                  :filterable="true"
                  :options="ConsumerCategoryTypeDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                  @change="viy2Select_1A5Czt1Change"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.gender')"
                prop="gender"
              >
                <VueRadioGroup
                  id="viy2Radio_142pdN"
                  ref="viy2Radio_142pdN"
                  v-model="conditionFormData.gender"
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
                :label="t('label.birthday')"
                prop="birthday"
              >
                <VueSelect
                  id="viy2Select_1A5CzuR"
                  ref="viy2Select_1A5CzuR"
                  v-model="conditionFormData.birthday"
                  :style="{ width: '200px' }"
                  :clearable="true"
                  :filterable="true"
                  :options="viy2Select_1A5CzuROpts"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.province')"
                prop="province"
              >
                <VueSelect
                  id="viy2Select_1A5CzwA"
                  ref="viy2Select_1A5CzwA"
                  v-model="conditionFormData.province"
                  :style="{ width: '200px' }"
                  :clearable="true"
                  :filterable="true"
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
              >
                <VueSelect
                  id="viy2Select_1A5Czyg"
                  ref="viy2Select_1A5Czyg"
                  v-model="conditionFormData.cityId"
                  :style="{ width: '200px' }"
                  :clearable="true"
                  :filterable="true"
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
            >
              <VueFormItem
                :label="t('label.vipNoHolder')"
                prop="vipNoHolder"
              >
                <VueCheckbox
                  id="viy2CheckBox_1A5CzA2"
                  ref="viy2CheckBox_1A5CzA2"
                  v-model="conditionFormData.vipNoHolder"
                  true-label="Y"
                  false-label="N"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
          <VueRow
            id="viy2Row_1A5CzA4"
            ref="viy2Row_1A5CzA4"
          >
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.age')"
                prop="ageDateFrom"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1A5CzA5"
                  ref="viy2DateTimePicker_1A5CzA5"
                  v-model="conditionFormData.ageDateFrom"
                  type="date"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0"
                prop="ageDateTo"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1A5CzA7"
                  ref="viy2DateTimePicker_1A5CzA7"
                  v-model="conditionFormData.ageDateTo"
                  type="date"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
              <VueButton id="viy2Button_1A5CzA8" ref="viy2Button_1A5CzA8" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1A5CzA8Click" />
              <VueButton id="viy2Button_1A5CzBL" ref="viy2Button_1A5CzBL" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_1A5CzBLClick" />
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 12 }"
            >
              <VueFormItem
                :label="t('label.registrationDate')"
                label-width="125px"
                prop="regDateFrom"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1A5CzBM"
                  ref="viy2DateTimePicker_1A5CzBM"
                  v-model="conditionFormData.regDateFrom"
                  type="date"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0"
                prop="regDateTo"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1A5CzBO"
                  ref="viy2DateTimePicker_1A5CzBO"
                  v-model="conditionFormData.regDateTo"
                  type="date"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
              <VueButton id="viy2Button_1A5CzBP" ref="viy2Button_1A5CzBP" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1A5CzBPClick" />
              <VueButton id="viy2Button_1A5CzBQ" ref="viy2Button_1A5CzBQ" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_1A5CzBQClick" />
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_Y4aeS"
        ref="viy2Flex_Y4aeS"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_9OaGSU" ref="viy2Panel_9OaGSU" v-model="detailMdl" :title="t('label.detail')" height="100%">
          <template #header>
            <div style="width: 500px">
              <VueRow
                id="viy2Row_9OaGT6"
                ref="viy2Row_9OaGT6"
              >
                <VueCol
                  v-show="detailMdl"
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_9OaGT7" ref="viy2Button_9OaGT7" icon-position="left" :disabled="disableFlg" @click="viy2Button_9OaGT7Click">
                    {{ t('button.newRetailOrder') }}
                  </VueButton>
                  <VueButton id="viy2Button_9OaGTi" ref="viy2Button_9OaGTi" icon-position="left" class="icon-button-width" @click="viy2Button_9OaGTiClick">
                    +
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-click="gridCellClick" @cell-dblclick="gridCellDblclick">
            <VueRow
              id="viy2Row_9OaGTl"
              ref="viy2Row_9OaGTl"
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
            <VueInputColumn
              :edit-render="gridConsumerTypeEditRender"
              field="consumerType"
              :title="t('label.consumerType')"
              width="250px"
            />
            <VueInputColumn
              :edit-render="gridConsumerNmEditRender"
              field="consumerNm"
              :title="t('label.consumerName')"
              width="250px"
            />
            <VueInputColumn
              :edit-render="gridVipNoEditRender"
              field="vipNo"
              :title="t('label.vipNumber')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridPhoneEditRender"
              field="phone"
              :title="t('label.mobilephone')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridIdNoEditRender"
              field="idNo"
              :title="t('label.idNoDetail')"
              width="150px"
            />
            <VueNumberColumn
              :edit-render="gridQtyEditRender"
              field="qty"
              width="200px"
              :title="t('label.servicedUnitQuantity')"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="80px"
              :buttons="gridViy2TableButtonColumn_AY9Y4Buttons"
            />
            <VueInputColumn
              :edit-render="gridConsumerIdEditRender"
              field="consumerId"
              :visible="false"
              title="Consumer Id"
              width="100px"
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
