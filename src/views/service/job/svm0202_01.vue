<script setup>
import { IconArrowLeftBold, IconDocumentCopy, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { isNoValue } from '@/pj-commonutils.js';
import { RequestStatus } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
// 获取系统日期
const fixDateTo = dayjs().format('YYYYMMDD');
// 获取系统日期当天-3个月
const fixDate = dayjs().subtract(3, 'month').format('YYYYMMDD');
const router = useRouter();
const defaultValue = [RequestStatus.INFOR_ECEIVED, RequestStatus.CONFIRMED, RequestStatus.CONFIRM_ISSUED, RequestStatus.STATEMENT_RECEIPT];
defineOptions({
  name: 'svm0202_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_LEfOa = ref();
const queryForm = ref();
const viy2Row_7GvwBy = ref();
const viy2DateTimePicker_7GvwBz = ref();
const viy2DateTimePicker_7GvwBB = ref();
const viy2Button_7GvwBM = ref();
const viy2Button_7GvwBN = ref();
const viy2InputBox_7GvwBO = ref();
const viy2Select_7GvwBR = ref();
const viy2CheckBox_1eR5g6Y = ref();
const viy2Flex_LEq2O = ref();
const grid = ref();
const viy2Row_7GwMnv = ref();
const formData = reactive({
});
const queryFormData = reactive({
  fixDate: '', fixDateTo: '', paymentControlNo: '', requestCategory: '', status: [],
});
const rules = reactive({
  viy2DateTimePicker_7GvwBzRules: [
    {
      validator: fixDateValidator,
    },
    {
      required: true,
      message: t('errors.required', [t('label.fixDate')]),
    },
  ],
  viy2DateTimePicker_7GvwBBRules: [
    {
      required: true,
      message: t('errors.required', [t('label.fixDateTo')]),
    },
    {
      validator: dateRangeValidator,
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
const retrieveDsApi = useApi({
  url: '/service/svm0202/findServicePaymentList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  manual: true,
});
const retrieveDs = retrieveDsApi.data;
const servicePaymentStatusDsApi = useApi({
  url: '/common/helper/getServicePaymentStatusList.json',
  method: 'post',
});
const servicePaymentStatusDs = servicePaymentStatusDsApi.data;
const svCategoryDsApi = useApi({
  url: '/common/helper/getSvCategoryList.json',
  method: 'post',
  data: {
    arg0: '0',
  },
});
const svCategoryDs = svCategoryDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5FbWKcClick = () => {
  queryForm.value.validate((valid, fields) => {
    if (valid) {
      retrieveDsApi.runAsync();
    }
  });
};
const viy2Button_7GvwBMClick = () => {
  if (!isNoValue(queryFormData.fixDate)) {
    queryFormData.fixDate = dayjs(queryFormData.fixDate).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  }
  if (!isNoValue(queryFormData.fixDateTo)) {
    queryFormData.fixDateTo = dayjs(queryFormData.fixDateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  }
};
const viy2Button_7GvwBNClick = () => {
  queryFormData.fixDate = fixDate;
  queryFormData.fixDateTo = fixDateTo;
};
const gridCellDblclick = (obj) => {
  viewDetail(obj.row);
};
const gridDisplayCategoryEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFixDateEditRender = computed(() => {
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
const gridPaymentControlNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPaymentAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      precision: 2,
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const gridStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridConfirmDateEditRender = computed(() => {
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
const gridBulletinNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridConfirmPersonEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReceiptDateEditRender = computed(() => {
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
onMounted(() => {
  initCondition();
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const initCondition = () => {
  queryFormData.fixDate = fixDate;
  queryFormData.fixDateTo = fixDateTo;
};
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  queryFormData.fixDate = fixDate;
  queryFormData.fixDateTo = fixDateTo;
  queryFormData.paymentControlNo = '';
  queryFormData.requestCategory = '';
  resetTblResults();
};
const resetTblResults = () => {
  retrieveDs.value.splice(0);
};
const viewDetail = (row) => {
  const data = {
    serviceRequestPaymentId: row.serviceRequestPaymentId,
    category: row.category,
    bulletinNo: row.bulletinNo,
  };
  useMultiTags().openTag({
    name: 'svm0202_02',
  });
  useMultiTags().getTag({ name: 'svm0202_02' }).meta.title = t('title.servicePaymentDetail_02');
  router.push({ name: 'svm0202_02', data });
};
queryFormData.status = defaultValue;
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
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_LEfOa"
      ref="viy2Flex_LEfOa"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_7GvwBy"
          ref="viy2Row_7GvwBy"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.fixDate')"
              label-width="130px"
              prop="fixDate"
              :rules="rules.viy2DateTimePicker_7GvwBzRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_7GvwBz"
                ref="viy2DateTimePicker_7GvwBz"
                v-model="queryFormData.fixDate"
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
              prop="fixDateTo"
              :rules="rules.viy2DateTimePicker_7GvwBBRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_7GvwBB"
                ref="viy2DateTimePicker_7GvwBB"
                v-model="queryFormData.fixDateTo"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueButton id="viy2Button_7GvwBM" ref="viy2Button_7GvwBM" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_7GvwBMClick" />
            <VueButton id="viy2Button_7GvwBN" ref="viy2Button_7GvwBN" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_7GvwBNClick" />
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.paymentControlNo')"
              label-width="160px"
              prop="paymentControlNo"
            >
              <VueInput
                id="viy2InputBox_7GvwBO"
                ref="viy2InputBox_7GvwBO"
                v-model="queryFormData.paymentControlNo"
                :clearable="true"
                :maxlength="40"
                :style="{ width: '150px' }"
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
              :label="t('label.requestCategory')"
              label-width="130px"
              prop="requestCategory"
            >
              <VueSelect
                id="viy2Select_7GvwBR"
                ref="viy2Select_7GvwBR"
                v-model="queryFormData.requestCategory"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :clearable="true"
                :collapse-tags-tooltip="true"
                :options="svCategoryDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 12 }"
          />
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.requestStatus')"
              label-width="130px"
              prop="status"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_1eR5g6Y"
                ref="viy2CheckBox_1eR5g6Y"
                v-model="queryFormData.status"
                split-size="default"
              >
                <VueCheckbox
                  v-for="option in servicePaymentStatusDs"
                  :key="option.codeDbid"
                  :label="option.codeDbid"
                  :name="option.name"
                  :disabled="option.disabled"
                >
                  {{ option.codeData2 }}
                </VueCheckbox>
              </VueCheckboxGroup>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_LEq2O"
        ref="viy2Flex_LEq2O"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" size="mini" header-align="center" height="100%" :data="retrieveDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
          <VueRow
            id="viy2Row_7GwMnv"
            ref="viy2Row_7GwMnv"
            class="toolbar-row-width except-height-css"
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
            :edit-render="gridDisplayCategoryEditRender"
            field="displayCategory"
            aggregate="sum"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.category')"
            width="170px"
            header-align="center"
          />
          <VueDateTimeColumn
            :edit-render="gridFixDateEditRender"
            field="fixDate"
            align="center"
            :sortable="true"
            :title="t('label.fixDate')"
            width="120px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridPaymentControlNoEditRender"
            field="paymentControlNo"
            aggregate="sum"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.paymentControlNo')"
            width="180px"
            header-align="center"
          />
          <VueNumberColumn
            :edit-render="gridPaymentAmountEditRender"
            field="paymentAmount"
            align="right"
            :precision="2"
            :sortable="true"
            :title="t('label.account')"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridStatusEditRender"
            field="status"
            aggregate="sum"
            :sortable="true"
            :title="t('label.status')"
            width="160px"
            header-align="center"
          />
          <VueDateTimeColumn
            :edit-render="gridConfirmDateEditRender"
            field="confirmDate"
            align="center"
            :sortable="true"
            :title="t('label.confirmDate')"
            width="140px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridBulletinNoEditRender"
            field="bulletinNo"
            aggregate="sum"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.bulletinNo')"
            width="170px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridConfirmPersonEditRender"
            field="confirmPerson"
            aggregate="sum"
            :sortable="true"
            :title="t('label.confirmPerson')"
            width="150px"
            header-align="center"
          />
          <VueDateTimeColumn
            :edit-render="gridReceiptDateEditRender"
            field="receiptDate"
            align="center"
            :sortable="true"
            :title="t('label.receiptDate')"
            width="100px"
            header-align="center"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="40px"
            :buttons="gridViy2TableButtonColumn_odGQQButtons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
