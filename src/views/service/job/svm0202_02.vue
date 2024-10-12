<script setup>
import { IconDocumentCopy, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const routeParam = useParams();
const router = useRouter();
const disableFlg = ref(false);
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
defineOptions({
  name: 'svm0202_02',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_1aDgxU = ref();
const viy2Button_1gMWX8 = ref();
const viy2Button_83Yd = ref();
const viy2Flex_Lqg1t = ref();
const queryForm = ref();
const viy2Panel_7EuegM = ref();
const viy2Row_7EuegY = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col1 = ref();
const viy2DateTimePicker_7Eueha = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col2 = ref();
const viy2InputBox_7Euehm = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col3 = ref();
const viy2InputBox_1ewSiOm = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col4 = ref();
const viy2DateTimePicker_1ewSiRE = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col5 = ref();
const viy2DateTimePicker_1ewSiRG = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col6 = ref();
const viy2InputBox_1ewSiTk = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col7 = ref();
const viy2InputBox_1ewSiV0 = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col8 = ref();
const viy2InputBox_1ewSiYi = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col9 = ref();
const viy2InputBox_1ewSiZY = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col10 = ref();
const viy2InputBox_1ewSg3g = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col11 = ref();
const viy2InputBox_1ewSg4W = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col12 = ref();
const viy2DateTimePicker_1ewSg6C = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col13 = ref();
const viy2Select_1ewSg8g = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col14 = ref();
const viy2InputBox_LzHda = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col15 = ref();
const viy2DateTimePicker_1ewSgeU = ref();
const copy0_copy1_copy0_viy2Row_118QTw_col16 = ref();
const viy2InputBox_1ewSggy = ref();
const viy2Flex_LrWap = ref();
const ttlPanel = ref();
const grid = ref();
const viy2Row_7EwdDx = ref();
const formData = reactive({
});
const queryFormData = reactive({
  fixDate: '', bulletinNo: '', status: '', receiptDate: '', confirmDate: '', confirmPerson: '', paymentControlNo: '', freeCouponPaymentAmount: '', warrantyClaimPaymentAmount: '', batteryClaimPaymentAmount: '', paymentTotalAmount: '', statementDocReceiptDate: '', vatCd: '', invoiceNo: '', invoiceDate: '', serialNo: '',
});
const rules = reactive({
  viy2Select_1ewSg8gRules: [
    {
      required: true,
      message: t('errors.required', [t('label.vatCode')]),
    },
  ],
  viy2InputBox_LzHdaRules: [
    {
      required: true,
      message: t('errors.required', [t('label.invoiceNumber')]),
    },
  ],
  viy2DateTimePicker_1ewSgeURules: [
    {
      required: true,
      message: t('errors.required', [t('label.invoiceDate')]),
    },
  ],
  viy2InputBox_1ewSggyRules: [
    {
      required: true,
      message: t('errors.required', [t('label.serialNumber')]),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_odGQQButtons = (scope) => {
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
const issueDsApi = useApi({
  url: '/service/svm0202/issueServicePaymentList.json',
  method: 'post',
  data: () => {
    return Object.assign({}, queryFormData);
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const issueDs = issueDsApi.data;
const confirmDsApi = useApi({
  url: '/service/svm0202/confirmServicePaymentList.json',
  method: 'post',
  data: () => {
    return Object.assign({}, queryFormData);
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const taxControlDsApi = useApi({
  url: '/common/helper/getTaxControlList.json',
  method: 'post',
});
const taxControlDs = taxControlDsApi.data;
const gridDsApi = useApi({
  url: '/service/svm0202/getServicePaymentDetaiList.json',
  method: 'post',
  data: () => {
    return {
      paymentId: queryFormData.paymentId,
      category: queryFormData.category,
      bulletinNo: queryFormData.bulletinNo,
    };
  },
}, {
  onSuccess: (data) => {
    queryFormData.fixDate = data.fixDate;
    queryFormData.bulletinNo = data.bulletinNo;
    queryFormData.status = data.status;
    queryFormData.receiptDate = data.receiptDate;
    queryFormData.confirmDate = data.confirmDate;
    queryFormData.confirmPerson = data.confirmPerson;
    queryFormData.paymentControlNo = data.paymentControlNo;
    queryFormData.freeCouponPaymentAmount = data.freeCouponPaymentAmount;
    queryFormData.warrantyClaimPaymentAmount = data.warrantyClaimPaymentAmount;
    queryFormData.batteryClaimPaymentAmount = data.batteryClaimPaymentAmount;
    queryFormData.paymentTotalAmount = data.paymentTotalAmount;
    queryFormData.statementDocReceiptDate = data.statementDocReceiptDate;
    queryFormData.vatCd = data.vatCd;
    queryFormData.invoiceNo = data.invoiceNo;
    queryFormData.invoiceDate = data.invoiceDate;
    queryFormData.serialNo = data.serialNo;
    disableFlg.value = data.disableFlg;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const viy2Button_8d8tClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_1gMWX8Click = () => {
  queryForm.value.validate((valid, fields) => {
    if (valid) {
      issueDsApi.runAsync();
    }
  });
};
const viy2Button_83YdClick = () => {
  queryForm.value.validate((valid, fields) => {
    if (valid) {
      confirmDsApi.runAsync();
    }
  });
};
const gridCellDblclick = (obj) => {
  viewDetail(obj.row);
};
const gridCategoryEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridPaymentAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      controls: false,
      textAlign: 'right',
    },
  };
});
const gridRequestCommentEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  initData();
});
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const initData = () => {
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    queryFormData.paymentId = params.serviceRequestPaymentId;
    queryFormData.category = params.category;
    queryFormData.bulletinNo = params.bulletinNo;
    if (!isNoValue(queryFormData.paymentId)) {
      gridDsApi.runAsync();
    }
  }
};
const resetCondition = () => {
// reset后重检索
  if (!isNoValue(queryFormData.paymentId)) {
    gridDsApi.runAsync();
  } else {
    queryForm.value.resetFields();
  }
};
const viewDetail = (row) => {
  const data = {
    serviceRequestId: row.serviceRequestId,
  };
  useMultiTags().openTag({
    name: 'svm0201_02',
  });
  useMultiTags().getTag({ name: 'svm0201_02' }).meta.title = t('title.serviceRequestDetail_02');
  router.push({ name: 'svm0201_02', data });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_GgDWR"
      ref="viy2Row_GgDWR"
      :gutter="15"
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
        <VueButton id="viy2Button_1aDgxU" ref="viy2Button_1aDgxU" icon-position="left" :disabled="true">
          {{ t('button.print') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_1gMWX8" ref="viy2Button_1gMWX8" icon-position="left" :disabled="disableFlg" @click="viy2Button_1gMWX8Click">
          {{ t('button.issue') }}
        </VueButton>
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left" type="info" :disabled="disableFlg" @click="viy2Button_83YdClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_Lqg1t"
      ref="viy2Flex_Lqg1t"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-suffix=":"
        class="margin-top-div"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_7EuegM" ref="viy2Panel_7EuegM" v-model="conditionPanelModel" :title="t('label.header')" :collapse="true">
          <VueRow
            id="viy2Row_7EuegY"
            ref="viy2Row_7EuegY"
            :gutter="15"
          >
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col1"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col1"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.fixDate')"
                label-width="150px"
                prop="fixDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_7Eueha"
                  ref="viy2DateTimePicker_7Eueha"
                  v-model="queryFormData.fixDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col2"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col2"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.bulletinNo')"
                label-width="150px"
                prop="bulletinNo"
              >
                <VueInput
                  id="viy2InputBox_7Euehm"
                  ref="viy2InputBox_7Euehm"
                  v-model="queryFormData.bulletinNo"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col3"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col3"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.status')"
                label-width="105px"
                prop="status"
              >
                <VueInput
                  id="viy2InputBox_1ewSiOm"
                  ref="viy2InputBox_1ewSiOm"
                  v-model="queryFormData.status"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col4"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col4"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.receiptDate')"
                label-width="150px"
                prop="receiptDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1ewSiRE"
                  ref="viy2DateTimePicker_1ewSiRE"
                  v-model="queryFormData.receiptDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col5"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col5"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.confirmDate')"
                label-width="150px"
                prop="confirmDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1ewSiRG"
                  ref="viy2DateTimePicker_1ewSiRG"
                  v-model="queryFormData.confirmDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col6"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col6"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.confirmPerson')"
                prop="confirmPerson"
              >
                <VueInput
                  id="viy2InputBox_1ewSiTk"
                  ref="viy2InputBox_1ewSiTk"
                  v-model="queryFormData.confirmPerson"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col7"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col7"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.paymentControlNo')"
                label-width="150px"
                prop="paymentControlNo"
              >
                <VueInput
                  id="viy2InputBox_1ewSiV0"
                  ref="viy2InputBox_1ewSiV0"
                  v-model="queryFormData.paymentControlNo"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col8"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col8"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.freeCouponPaymentAmount')"
                label-width="210px"
                prop="freeCouponPaymentAmount"
              >
                <VueInput
                  id="viy2InputBox_1ewSiYi"
                  ref="viy2InputBox_1ewSiYi"
                  v-model="queryFormData.freeCouponPaymentAmount"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col9"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col9"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.warrantyClaimPaymentAmount')"
                label-width="210px"
                prop="warrantyClaimPaymentAmount"
              >
                <VueInput
                  id="viy2InputBox_1ewSiZY"
                  ref="viy2InputBox_1ewSiZY"
                  v-model="queryFormData.warrantyClaimPaymentAmount"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col10"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col10"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.batteryClaimPaymentAmount')"
                label-width="210px"
                prop="batteryClaimPaymentAmount"
              >
                <VueInput
                  id="viy2InputBox_1ewSg3g"
                  ref="viy2InputBox_1ewSg3g"
                  v-model="queryFormData.batteryClaimPaymentAmount"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col11"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col11"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.paymentTotalAmount')"
                label-width="210px"
                prop="paymentTotalAmount"
              >
                <VueInput
                  id="viy2InputBox_1ewSg4W"
                  ref="viy2InputBox_1ewSg4W"
                  v-model="queryFormData.paymentTotalAmount"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col12"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col12"
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                :label="t('label.statementDocReceiptDate')"
                label-width="210px"
                prop="statementDocReceiptDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1ewSg6C"
                  ref="viy2DateTimePicker_1ewSg6C"
                  v-model="queryFormData.statementDocReceiptDate"
                  type="date"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col13"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col13"
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.vatCode')"
                prop="vatCd"
                :rules="rules.viy2Select_1ewSg8gRules"
              >
                <VueSelect
                  id="viy2Select_1ewSg8g"
                  ref="viy2Select_1ewSg8g"
                  v-model="queryFormData.vatCd"
                  :style="{ width: '100px' }"
                  :clearable="true"
                  :filterable="true"
                  :collapse-tags-tooltip="true"
                  :disabled="disableFlg"
                  :options="taxControlDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col14"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col14"
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.invoiceNo')"
                prop="invoiceNo"
                :rules="rules.viy2InputBox_LzHdaRules"
              >
                <VueInput
                  id="viy2InputBox_LzHda"
                  ref="viy2InputBox_LzHda"
                  v-model="queryFormData.invoiceNo"
                  :clearable="true"
                  :disabled="disableFlg"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col15"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col15"
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.invoiceDate')"
                prop="invoiceDate"
                :rules="rules.viy2DateTimePicker_1ewSgeURules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1ewSgeU"
                  ref="viy2DateTimePicker_1ewSgeU"
                  v-model="queryFormData.invoiceDate"
                  type="date"
                  :disabled="disableFlg"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              id="copy0_copy1_copy0_viy2Row_118QTw_col16"
              ref="copy0_copy1_copy0_viy2Row_118QTw_col16"
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.serialNo')"
                prop="serialNo"
                :rules="rules.viy2InputBox_1ewSggyRules"
              >
                <VueInput
                  id="viy2InputBox_1ewSggy"
                  ref="viy2InputBox_1ewSggy"
                  v-model="queryFormData.serialNo"
                  :disabled="disableFlg"
                  text-align="left"
                  :clearable="true"
                  :style="{ width: '100px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_LrWap"
        ref="viy2Flex_LrWap"
        direction="column"
        grow="1"
      >
        <VuePanel id="ttlPanel" ref="ttlPanel" v-model="totalAccPanelModel" :title="t('common.label.relatedServiceRequests')" :collapse="true" height="100%">
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs.tableDataList" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
            <VueRow
              id="viy2Row_7EwdDx"
              ref="viy2Row_7EwdDx"
            >
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              />
            </VueRow>
            <VueInputColumn
              :edit-render="gridCategoryEditRender"
              field="category"
              :title="t('label.category')"
              header-align="center"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridRequestNoEditRender"
              field="requestNo"
              :title="t('label.requestNo')"
              header-align="center"
              width="150px"
            />
            <VueDateTimeColumn
              :edit-render="gridRequestDateEditRender"
              field="requestDate"
              align="center"
              :title="t('label.requestDate')"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridPaymentAmountEditRender"
              field="paymentAmount"
              align="right"
              :title="t('label.paymentAmount')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridRequestCommentEditRender"
              field="requestComment"
              :title="t('label.requestComment')"
              header-align="center"
              width="300px"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="40px"
              :buttons="gridViy2TableButtonColumn_odGQQButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
