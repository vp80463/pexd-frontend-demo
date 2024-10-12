<script setup>
import { IconCaretRight, IconCloseBold, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { get } from 'lodash-es';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import {
  consumer_pop_column, consumer_pop_condition, consumer_pop_query_method
  , model_column, model_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const displayFlag = ref(true);
const routeParam = useParams();
const router = useRouter();
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const disEditFlag1 = ref(false);
const disEditFlag2 = ref(false);
const disEditFlag3 = ref(false);
let defaultReservationStatus;
let defaultReservationMethod;
defineOptions({
  name: 'svm0107_02',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_e0AdK = ref();
const viy2Button_e0g6W = ref();
const viy2Button_dZW0Q = ref();
const viy2Flex_NNGP = ref();
const queryForm = ref();
const viy2Row_nABzq = ref();
const viy2InputBox_nABAG = ref();
const viy2Button_nABCI = ref();
const viy2InputBox_nABDn = ref();
const viy2ValueList_nABG0 = ref();
const viy2Row_3NU4XM = ref();
const viy2Button_3NU5nC = ref();
const viy2Select_ogdQn = ref();
const viy2InputBox_3NU6Da = ref();
const viy2ValueList_3NU731 = ref();
const viy2Row_3NU7fX = ref();
const viy2Button_3NU7FN = ref();
const viy2InputBox_3NU80N = ref();
const viy2DateTimePicker_3NU8sg = ref();
const viy2Select_3NU8Fb = ref();
const viy2InputBox_3NU9uU = ref();
const viy2Radio_igeAp = ref();
const viy2Select_3NUafL = ref();
const viy2Select_3NUb76 = ref();
const viy2InputBox_3NUbVd = ref();
const formData = reactive({
});
const queryFormData = reactive({
  plateNo: '', msg: 'Enter No. Plate then click botton', model: '', pointId: '', orderNo: '', consumerNm: '', mobilePhone: '', reservationDate: '', reservationTime: '', efTime: '', serviceBooking: '', reservationStatus: '', reservationMethod: '', memo: '',
});
const rules = reactive({
  viy2InputBox_nABAGRules: [
    {
      required: true,
      message: t('errors.required', [t('label.numberPlate')]),
    },
  ],
  viy2Select_ogdQnRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2ValueList_3NU731Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.consumerName')]),
    },
  ],
  viy2InputBox_3NU80NRules: [
    {
      required: true,
      message: t('errors.required', [t('label.mobilephone')]),
    },
  ],
  viy2DateTimePicker_3NU8sgRules: [
    {
      required: true,
      message: t('errors.required', [t('label.reservationDate')]),
    },
  ],
  viy2Select_3NU8FbRules: [
    {
      required: true,
      message: t('errors.required', [t('label.reservationTime')]),
    },
  ],
  viy2Radio_igeApRules: [
    {
      required: true,
      message: t('errors.required', [t('label.serviceBooking')]),
    },
  ],
  viy2Select_3NUafLRules: [
    {
      required: true,
      message: t('errors.required', [t('label.reservationStatus')]),
    },
  ],
});
const viy2ValueList_nABG0PopoverQueryMethod = model_query_method;
const viy2ValueList_3NU731PopupColumns = ref(consumer_pop_column);
const viy2ValueList_3NU731PopupQueryMethod = consumer_pop_query_method;
const getInfoByPlateNoDsApi = useApi({
  url: '/service/svm0107/getInfoByPlateNo.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data) => {
    queryFormData.serializedProductId = data.serializedProductId;
    if (!isNoValue(data.modelCd) && !isNoValue(data.modelNm)) {
      queryFormData.model = `${data.modelCd} ${data.modelNm}`;
      queryFormData.modelCd = data.modelCd;
      queryFormData.modelNm = data.modelNm;
    } else {
      queryFormData.model = '';
      queryFormData.modelCd = '';
      queryFormData.modelNm = '';
    }
    queryFormData.productId = data.productId;
    queryFormData.consumerId = data.consumerId;
    queryFormData.consumerNm = data.consumerNm;
    queryFormData.mobilePhone = data.mobilePhone;
  },
  manual: true,
});
const getInfoByPlateNoDs = getInfoByPlateNoDsApi.data;
const reservationTimeDsApi = useApi({
  url: '/common/helper/getReservationTime.json',
  method: 'post',
  data: {
    arg0: '',
    arg1: '',
  },
}, {
  initialData: {
    data: [],
  },
});
const reservationTimeDs = reservationTimeDsApi.data;
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S090', 'S091', 'S092'],
}, {
  onSuccess: (data) => {
    const list1 = data.S090;
    for (const key in list1) {
      var item = list1[key];
      if (item.codeDbid == 'S090CONFIRMED') {
        defaultReservationStatus = item.codeDbid;
      }
    }
    queryFormData.reservationStatus = defaultReservationStatus;
    const list2 = data.S092;
    for (const key in list2) {
      var item = list2[key];
      if (item.codeDbid == 'S092DMS') {
        defaultReservationMethod = item.codeDbid;
      }
      queryFormData.reservationMethod = defaultReservationMethod;
    }
  },
  initialData: {
    S090: [],
    S091: [],
    S092: [],
  },
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const initialDsApi = useApi({
  url: '/service/svm0107/svm010702InitialSearch.json',
  method: 'post',
  data: () => {
    return {
      serviceScheduleId: queryFormData.serviceScheduleId,
    };
  },
}, {
  onSuccess: (data) => {
    disEditFlag1.value = data.disEditFlag1;
    disEditFlag2.value = data.disEditFlag2;
    disEditFlag3.value = data.disEditFlag3;
    queryFormData.plateNo = data.plateNo;
    queryFormData.serializedProductId = data.serializedProductId;
    queryFormData.modelCd = data.modelCd;
    queryFormData.modelNm = data.modelNm;
    queryFormData.model = `${data.modelCd} ${data.modelNm}`;
    queryFormData.productId = data.productId;
    queryFormData.pointId = data.pointId;
    queryFormData.orderNo = data.orderNo;
    queryFormData.consumerNm = data.consumerNm;
    queryFormData.consumerId = data.consumerId;
    queryFormData.mobilePhone = data.mobilePhone;
    queryFormData.reservationDate = data.reservationDate;
    queryFormData.reservationTime = data.reservationTime;
    queryFormData.efTime = data.efTime;
    queryFormData.serviceBooking = data.serviceBooking;
    queryFormData.reservationStatus = data.reservationStatus;
    queryFormData.reservationMethod = data.reservationMethod;
    queryFormData.memo = data.memo;
    queryFormData.serviceScheduleId = data.serviceScheduleId;
    queryFormData.serviceOrderSettledFlag = data.serviceOrderSettledFlag;
  },
  manual: true,
});
const initialDs = initialDsApi.data;
const confirmDsApi = useApi({
  url: '/service/svm0107/confirm.json',
  method: 'post',
  data: () => {
    return Object.assign({}, queryFormData);
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    queryFormData.serviceScheduleId = data;
    initialDsApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_e0g6WClick = () => {
  viewReservationList();
};
const viy2Button_dZW0QClick = () => {
  queryForm.value.validate((valid, fields) => {
    if (valid) {
      confirmDsApi.runAsync();
    }
  });
};
const viy2Button_nABCIClick = () => {
  getInfoByPlateNoDsApi.runAsync();
};
const viy2ValueList_nABG0Select = (params) => {
  queryFormData.productId = params.id;
  queryFormData.modelCd = params.code;
  queryFormData.modelNm = params.name;
};
const viy2ValueList_nABG0Clear = () => {
  queryFormData.productId = '';
};
const viy2ValueList_nABG0Leave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.productId = '';
  }
};
const viy2ValueList_nABG0PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_3NU731Select = (params) => {
  queryFormData.consumerNm = params.desc;
  queryFormData.consumerId = params.consumerId;
};
const viy2ValueList_3NU731Clear = (params) => {
  queryFormData.consumerNm = '';
  queryFormData.consumerId = '';
};
const viy2ValueList_3NU731Leave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.consumerNm = '';
    queryFormData.consumerId = '';
  }
};
const viy2ValueList_3NU731PopupConditions = computed(() => {
  return consumer_pop_condition;
});
const viy2DateTimePicker_3NU8sgChange = (value) => {
  queryFormData.reservationTime = '';
  if (queryFormData.pointId && queryFormData.reservationDate) {
    reservationTimeDsApi.runAsync({
      arg0: queryFormData.pointId,
      arg1: queryFormData.reservationDate,
    });
  }
};
const viy2InputBox_3NU9uUChange = () => {
  const efTime = queryFormData.efTime.replace(/\D/g, '');
  // 格式化为HH:MM
  if (efTime.length == 0) {
    queryFormData.efTime = '';
  } else if (efTime.length == 1) {
    queryFormData.efTime = `0${efTime}:00`;
  } else if (efTime.length == 2) {
    queryFormData.efTime = `${efTime}:00`;
  } else if (efTime.length == 3) {
    queryFormData.efTime = `${efTime.slice(0, 2)}:${efTime.slice(2, 3)}0`;
  } else if (efTime.length == 4) {
    queryFormData.efTime = `${efTime.slice(0, 2)}:${efTime.slice(2, 4)}`;
  } else {
    queryFormData.efTime = `${efTime.slice(0, 2)}:${efTime.slice(2, 4)}`;
  }
};
onMounted(() => {
  initData();
});
watch(() => queryFormData, (newVal, oldVal) => {
  if (isNoValue(queryFormData.plateNo)) {
    displayFlag.value = true;
  } else {
    displayFlag.value = false;
  }
}, { deep: true });
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const initData = () => {
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    queryFormData.serviceScheduleId = params.serviceScheduleId;
    if (!isNoValue(queryFormData.serviceScheduleId)) {
      initialDsApi.runAsync();
    } else {
      queryForm.value.resetFields();
      queryFormData.reservationStatus = defaultReservationStatus;
      queryFormData.reservationMethod = defaultReservationMethod;
    }
  }
};
const resetCondition = () => {
// 如果传值则重检索
  if (!isNoValue(queryFormData.serviceScheduleId)) {
    initDsApi.runAsync();
  } else {
    // 清空表单元素
    queryForm.value.resetFields();
    queryFormData.reservationStatus = defaultReservationStatus;
    queryFormData.reservationMethod = defaultReservationMethod;
  }
};
const viewReservationList = () => {
  const data = {
    serviceScheduleId: null,
  };
  useMultiTags().openTag({
    name: 'svm0107_01',
  });
  useMultiTags().getTag({ name: 'svm0107_01' }).meta.title = t('title.serviceReservationList_01');
  router.push({ name: 'svm0107_01', data });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_10QMyC"
      ref="viy2Row_10QMyC"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning" @click="resetBtnClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_e0AdK" ref="viy2Button_e0AdK" icon-position="left">
          {{ t('button.serviceOrder') }}
        </VueButton>
        <VueButton id="viy2Button_e0g6W" ref="viy2Button_e0g6W" icon-position="left" @click="viy2Button_e0g6WClick">
          {{ t('button.reservationList') }}
        </VueButton>
        <VueButton id="viy2Button_dZW0Q" ref="viy2Button_dZW0Q" icon-position="left" type="info" @click="viy2Button_dZW0QClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_NNGP"
      ref="viy2Flex_NNGP"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="110px"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_nABzq"
          ref="viy2Row_nABzq"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.numberPlate')"
              label-width="150px"
              prop="plateNo"
              :rules="rules.viy2InputBox_nABAGRules"
            >
              <VueInput
                id="viy2InputBox_nABAG"
                ref="viy2InputBox_nABAG"
                v-model="queryFormData.plateNo"
                :disabled="disEditFlag1 || disEditFlag2 || disEditFlag3"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueButton id="viy2Button_nABCI" ref="viy2Button_nABCI" icon-position="left" :disabled="displayFlag || disEditFlag1 || disEditFlag2 || disEditFlag3" class="icon-button-width" :icon="IconCaretRight" @click="viy2Button_nABCIClick" />
            <VueFormItem
              v-show="displayFlag"
              label-width="140px"
              prop="msg"
            >
              <VueInput
                id="viy2InputBox_nABDn"
                ref="viy2InputBox_nABDn"
                v-model="queryFormData.msg"
                :readonly="true"
                :disabled="disEditFlag1 || disEditFlag2 || disEditFlag3"
                class="no-border"
                :style="{ width: '230px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.model')"
              label-width="150px"
              prop="model"
            >
              <VueValueList
                id="viy2ValueList_nABG0"
                ref="viy2ValueList_nABG0"
                :use-common-popover="true"
                v-model="queryFormData.model"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
                select-field="desc"
                :popover-width="500"
                :disabled="disEditFlag1 || disEditFlag2 || disEditFlag3"
                width="250px"
                :popover-columns="viy2ValueList_nABG0PopoverColumns"
                :popover-query-method="viy2ValueList_nABG0PopoverQueryMethod"
                @select="viy2ValueList_nABG0Select"
                @clear="viy2ValueList_nABG0Clear"
                @leave="viy2ValueList_nABG0Leave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_3NU4XM"
                    ref="viy2Row_3NU4XM"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_3NU5aH" ref="viy2Text_3NU5aH" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Model
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_3NU5nC" ref="viy2Button_3NU5nC" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.point')"
              label-width="150px"
              prop="pointId"
              :rules="rules.viy2Select_ogdQnRules"
            >
              <VueSelect
                id="viy2Select_ogdQn"
                ref="viy2Select_ogdQn"
                v-model="queryFormData.pointId"
                :style="{ width: '250px' }"
                :disabled="disEditFlag2 || disEditFlag3"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.orderNo')"
              label-width="150px"
              prop="orderNo"
            >
              <VueInput
                id="viy2InputBox_3NU6Da"
                ref="viy2InputBox_3NU6Da"
                v-model="queryFormData.orderNo"
                :readonly="true"
                class="no-border"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.consumerName')"
              label-width="150px"
              prop="consumerNm"
              :rules="rules.viy2ValueList_3NU731Rules"
            >
              <VueValueList
                id="viy2ValueList_3NU731"
                ref="viy2ValueList_3NU731"
                :use-common-popover="true"
                v-model="queryFormData.consumerNm"
                :use-common-popup="true"
                aside-size="60%"
                :toggle-popover-on-click="true"
                :use-popup="true"
                :popover-width="500"
                :disabled="disEditFlag1 || disEditFlag2 || disEditFlag3"
                width="250px"
                :popup-columns="viy2ValueList_3NU731PopupColumns"
                :popup-conditions="viy2ValueList_3NU731PopupConditions"
                :popup-query-method="viy2ValueList_3NU731PopupQueryMethod"
                @select="viy2ValueList_3NU731Select"
                @clear="viy2ValueList_3NU731Clear"
                @leave="viy2ValueList_3NU731Leave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_3NU7fX"
                    ref="viy2Row_3NU7fX"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 10 }"
                    >
                      <VueText id="viy2Text_3NU7sS" ref="viy2Text_3NU7sS" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        Select Consumer
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 14 }"
                    >
                      <VueButton id="viy2Button_3NU7FN" ref="viy2Button_3NU7FN" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.mobilephone')"
              label-width="150px"
              prop="mobilePhone"
              :rules="rules.viy2InputBox_3NU80NRules"
            >
              <VueInput
                id="viy2InputBox_3NU80N"
                ref="viy2InputBox_3NU80N"
                v-model="queryFormData.mobilePhone"
                :disabled="disEditFlag1 || disEditFlag2 || disEditFlag3"
                :clearable="true"
                :maxlength="10"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.reservationDate')"
              label-width="150px"
              prop="reservationDate"
              :rules="rules.viy2DateTimePicker_3NU8sgRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_3NU8sg"
                ref="viy2DateTimePicker_3NU8sg"
                v-model="queryFormData.reservationDate"
                type="date"
                :disabled="disEditFlag2 || disEditFlag3"
                placeholder="dd/MM/yyyy"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                @change="viy2DateTimePicker_3NU8sgChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.reservationTime')"
              label-width="150px"
              prop="reservationTime"
              :rules="rules.viy2Select_3NU8FbRules"
            >
              <VueSelect
                id="viy2Select_3NU8Fb"
                ref="viy2Select_3NU8Fb"
                v-model="queryFormData.reservationTime"
                :style="{ width: '150px' }"
                :disabled="disEditFlag2 || disEditFlag3"
                :options="reservationTimeDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.estimateFinishTime')"
              label-width="150px"
              prop="efTime"
            >
              <VueInput
                id="viy2InputBox_3NU9uU"
                ref="viy2InputBox_3NU9uU"
                v-model="queryFormData.efTime"
                :disabled="disEditFlag2"
                placeholder="HH:MM"
                :maxlength="5"
                :style="{ width: '80px' }"
                @change="viy2InputBox_3NU9uUChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.serviceBooking')"
              label-width="150px"
              prop="serviceBooking"
              :rules="rules.viy2Radio_igeApRules"
            >
              <VueRadioGroup
                id="viy2Radio_igeAp"
                ref="viy2Radio_igeAp"
                v-model="queryFormData.serviceBooking"
                direction="horizontal"
                :disabled="disEditFlag1 || disEditFlag2 || disEditFlag3"
                split-size="default"
              >
                <VueRadio
                  v-for="option in mstCodeInfoDs.S091"
                  :key="option.codeDbid"
                  :label="option.codeDbid"
                  :name="option.name"
                  :disabled="option.disabled"
                >
                  {{ option.codeData1 }}
                </VueRadio>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.reservationStatus')"
              label-width="150px"
              prop="reservationStatus"
              :rules="rules.viy2Select_3NUafLRules"
            >
              <VueSelect
                id="viy2Select_3NUafL"
                ref="viy2Select_3NUafL"
                v-model="queryFormData.reservationStatus"
                :style="{ width: '200px' }"
                :disabled="disEditFlag2 || disEditFlag3"
                :options="get(mstCodeInfoDs, 'S090')"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.reservationMethod')"
              label-width="150px"
              prop="reservationMethod"
            >
              <VueSelect
                id="viy2Select_3NUb76"
                ref="viy2Select_3NUb76"
                v-model="queryFormData.reservationMethod"
                :style="{ width: '200px' }"
                :disabled="true"
                :options="get(mstCodeInfoDs, 'S092')"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.memo')"
              label-width="150px"
              prop="memo"
            >
              <VueInput
                id="viy2InputBox_3NUbVd"
                ref="viy2InputBox_3NUbVd"
                v-model="queryFormData.memo"
                :disabled="disEditFlag2 || disEditFlag3"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VueFlex>
  </VueForm>
</template>
