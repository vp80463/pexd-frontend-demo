<script setup>
import { IconArrowLeftBold, IconCloseBold, IconCopyDocument, IconEdit, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const routeParam = useParams();
// 获取当前日期+1天
const dateFrom = dayjs().add(1, 'day').format('YYYYMMDD');
// 获取当前日期+1天+1月
const datePlusOneDay = dayjs().add(1, 'day');
const dateTo = datePlusOneDay.add(1, 'month').format('YYYYMMDD');
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
const checked = ['S090WAITCONFIRM'];
const exportDisabledFlag = ref(true);
defineOptions({
  name: 'svm0107_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_8KZu4 = ref();
const viy2Button_1rbvzy = ref();
const viy2Flex_OvdCA = ref();
const queryForm = ref();
const viy2Row_893nUG = ref();
const viy2Row_OwG6g = ref();
const viy2DateTimePicker_OB5Uc = ref();
const viy2DateTimePicker_OBf5E = ref();
const viy2Button_OBiUf = ref();
const viy2Button_OBsFY = ref();
const viy2InputBox_893nUY = ref();
const viy2Select_oek86 = ref();
const viy2ValueList_1gsxRce = ref();
const viy2Row_1gsxRcg = ref();
const viy2Button_1gsxRci = ref();
const viy2InputBox_1gsxRck = ref();
const viy2CheckBox_OQBlv = ref();
const viy2Flex_OvdSV = ref();
const grid = ref();
const viy2Row_893OVo = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', plateNo: '', pointId: '', customerNm: '', mobilePhone: '', reservationSts: [],
});
const rules = reactive({
  viy2DateTimePicker_OB5UcRules: [
    {
      required: true,
      message: t('errors.required', [t('label.reservationDate')]),
    },
  ],
  viy2DateTimePicker_OBf5ERules: [
    {
      required: true,
      message: t('errors.required', [t('label.reservationDate')]),
    },
  ],
  viy2Select_oek86Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
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
      icon: IconEdit,
      click: viewDetail,
      title: 'Detail',
    },
    {
      label: '',
      type: 'text',
      icon: IconCopyDocument,
      click: viewServiceOrder,
      title: 'Service Order',
      disabled: scope.row.disViewFlag,
    },
  ];
};
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S090'],
}, {
  initialData: {
    S090: [],
  },
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const gridDsApi = useApi({
  url: '/service/svm0107/retrieve.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (gridDs.value.length !== 0) {
      exportDisabledFlag.value = false;
    } else {
      exportDisabledFlag.value = true;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const exportDsApi = useApi({
  url: '/service/svm0107/export.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'SVM0107_01.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5FbWKcClick = () => {
  exportDsApi.runAsync();
};
const viy2Button_8KZu4Click = () => {
  viewNew();
};
const viy2Button_1rbvzyClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Button_OBiUfClick = () => {
  if (!isNoValue(queryFormData.dateFrom)) {
    queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  }
  if (!isNoValue(queryFormData.dateTo)) {
    queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  }
};
const viy2Button_OBsFYClick = () => {
  queryFormData.dateFrom = dateFrom;
  queryFormData.dateTo = dateTo;
};
const viy2ValueList_1gsxRceSelect = (params) => {
  queryFormData.customer = `${params.code} ${params.name}`;
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  viewDetail(row);
};
const gridReservationStsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReservationDateEditRender = computed(() => {
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
const gridReservationTimeEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'time',
      valueFormat: 'hm',
      format: CONST_SYSTEM_TIME_FORMAT.hm,
    },
  };
});
const gridPlateNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridConsumerEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMobilePhoneEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridServiceBookingEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMemoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReservationMethodEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridServiceScheduleIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridServiceOrderIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridConsumerIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSerializedProductIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridServiceStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPicEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  queryFormData.dateFrom = dateFrom;
  queryFormData.dateTo = dateTo;
});
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  exportDisabledFlag.value = true;
  queryFormData.dateFrom = dateFrom;
  queryFormData.dateTo = dateTo;
  resetTblResults();
};
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const resetTblResults = () => {
  gridDs.value.splice(0);
  exportDisabledFlag.value = true;
};
const initData = () => {
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    resetCondition();
  }
};
const viewDetail = (row) => {
  nextTick(() => {
    const data = {
      serviceScheduleId: row.serviceScheduleId,
    };
    useMultiTags().openTag({
      name: 'svm0107_02',
    });
    useMultiTags().getTag({ name: 'svm0107_02' }).meta.title = t('title.serviceReservation_02');
    router.push({ name: 'svm0107_02', data });
  });
};
const viewServiceOrder = (row) => {
  const data = {
    serviceOrderId: row.serviceOrderId,
    consumerId: row.consumerId,
    serializedProductId: row.serializedProductId,
  };
  useMultiTags().openTag({
    name: 'svm0102_01',
  });
  useMultiTags().getTag({ name: 'svm0102_01' }).meta.title = t('title.serviceOrderNewSOP_01');
  router.push({ name: 'svm0102_01', query: params });
};
const viewNew = () => {
  const data = {
    serviceScheduleId: null,
  };
  useMultiTags().openTag({
    name: 'svm0107_02',
  });
  useMultiTags().getTag({ name: 'svm0107_02' }).meta.title = t('title.serviceReservation_02');
  router.push({ name: 'svm0107_02', data });
};
queryFormData.reservationSts = checked;
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
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" :disabled="exportDisabledFlag" @click="viy2Button_5FbWKcClick">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_8KZu4" ref="viy2Button_8KZu4" icon-position="left" @click="viy2Button_8KZu4Click">
          {{ t('label.newReservation') }}
        </VueButton>
        <VueButton id="viy2Button_1rbvzy" ref="viy2Button_1rbvzy" icon-position="left" type="info" @click="viy2Button_1rbvzyClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_OvdCA"
      ref="viy2Flex_OvdCA"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_893nUG"
          ref="viy2Row_893nUG"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :md="{ span: 24 }"
          >
            <VueRow
              id="viy2Row_OwG6g"
              ref="viy2Row_OwG6g"
            >
              <VueCol
                item-key="item"
                :inline="true"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.reservationDate')"
                  label-width="140px"
                  prop="dateFrom"
                  :rules="rules.viy2DateTimePicker_OB5UcRules"
                >
                  <VueDatePicker
                    id="viy2DateTimePicker_OB5Uc"
                    ref="viy2DateTimePicker_OB5Uc"
                    v-model="queryFormData.dateFrom"
                    :style="{ width: '130px' }"
                  />
                </VueFormItem>
                <!-- BEGIN CUSTOM DIV CODE -->
                <span>-</span>
                <!-- END CUSTOM DIV CODE -->
                <VueFormItem
                  prop="dateTo"
                  :rules="rules.viy2DateTimePicker_OBf5ERules"
                >
                  <VueDatePicker
                    id="viy2DateTimePicker_OBf5E"
                    ref="viy2DateTimePicker_OBf5E"
                    v-model="queryFormData.dateTo"
                    :style="{ width: '130px' }"
                  />
                </VueFormItem>
                <VueButton id="viy2Button_OBiUf" ref="viy2Button_OBiUf" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_OBiUfClick" />
                <VueButton id="viy2Button_OBsFY" ref="viy2Button_OBsFY" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_OBsFYClick" />
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 12 }"
              >
                <VueFormItem
                  :label="t('label.numberPlate')"
                  prop="plateNo"
                >
                  <VueInput
                    id="viy2InputBox_893nUY"
                    ref="viy2InputBox_893nUY"
                    v-model="queryFormData.plateNo"
                    :clearable="true"
                    :style="{ width: '150px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :md="{ span: 8 }"
              >
                <VueFormItem
                  :label="t('label.point')"
                  label-width="140px"
                  prop="pointId"
                  :rules="rules.viy2Select_oek86Rules"
                >
                  <VueSelect
                    id="viy2Select_oek86"
                    ref="viy2Select_oek86"
                    v-model="queryFormData.pointId"
                    :style="{ width: '250px' }"
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
                  :label="t('label.consumerName')"
                  prop="customerNm"
                >
                  <VueValueList
                    id="viy2ValueList_1gsxRce"
                    ref="viy2ValueList_1gsxRce"
                    v-model="queryFormData.customerNm"
                    :use-common-popover="true"
                    :use-common-popup="true"
                    aside-size="60%"
                    :toggle-popover-on-click="true"
                    :popover-width="500"
                    :use-popup="true"
                    width="200px"
                    @select="viy2ValueList_1gsxRceSelect"
                  >
                    <template #asideHeader>
                      <VueRow
                        id="viy2Row_1gsxRcg"
                        ref="viy2Row_1gsxRcg"
                        class="aside-title-row"
                      >
                        <VueCol
                          item-key="item"
                          class="aside-title-text"
                          :md="{ span: 10 }"
                        >
                          <VueText id="viy2Text_1gsxRch" ref="viy2Text_1gsxRch" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                          <VueButton id="viy2Button_1gsxRci" ref="viy2Button_1gsxRci" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
                  prop="mobilePhone"
                >
                  <VueInput
                    id="viy2InputBox_1gsxRck"
                    ref="viy2InputBox_1gsxRck"
                    v-model="queryFormData.mobilePhone"
                    :clearable="true"
                    :style="{ width: '150px' }"
                  />
                </VueFormItem>
              </VueCol>
              <VueCol
                item-key="item"
                :inline="true"
                :md="{ span: 24 }"
              >
                <VueFormItem
                  :label="t('label.reservationStatus')"
                  prop="reservationSts"
                >
                  <VueCheckboxGroup
                    id="viy2CheckBox_OQBlv"
                    ref="viy2CheckBox_OQBlv"
                    v-model="queryFormData.reservationSts"
                    split-size="default"
                  >
                    <VueCheckbox
                      v-for="option in mstCodeInfoDs.S090"
                      :key="option.codeDbid"
                      :label="option.codeDbid"
                      :name="option.name"
                      :disabled="option.disabled"
                    >
                      {{ option.codeData1 }}
                    </VueCheckbox>
                  </VueCheckboxGroup>
                </VueFormItem>
              </VueCol>
            </VueRow>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_OvdSV"
        ref="viy2Flex_OvdSV"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" size="mini" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
          <VueRow
            id="viy2Row_893OVo"
            ref="viy2Row_893OVo"
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
            :edit-render="gridReservationStsEditRender"
            field="reservationSts"
            show-overflow="tooltip"
            :title="t('label.reservationStatus')"
            width="150px"
            header-align="center"
          />
          <VueDateTimeColumn
            :edit-render="gridReservationDateEditRender"
            field="reservationDate"
            align="center"
            :title="t('label.reservationDate')"
            width="130px"
            header-align="center"
          />
          <VueDateTimeColumn
            :edit-render="gridReservationTimeEditRender"
            field="reservationTime"
            align="center"
            :title="t('label.reservationTime')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridPlateNoEditRender"
            field="plateNo"
            aggregate="sum"
            show-overflow="tooltip"
            :title="t('label.numberPlate')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridModelEditRender"
            field="model"
            :title="t('label.model')"
            width="140px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridConsumerEditRender"
            field="consumer"
            :title="t('label.consumer')"
            width="200px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridMobilePhoneEditRender"
            field="mobilePhone"
            show-overflow="tooltip"
            :title="t('label.mobilephone')"
            width="140px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridServiceBookingEditRender"
            field="serviceBooking"
            aggregate="sum"
            show-overflow="tooltip"
            :title="t('label.serviceBooking')"
            width="140px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridMemoEditRender"
            field="memo"
            aggregate="sum"
            show-overflow="tooltip"
            :title="t('label.memo')"
            width="160px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridReservationMethodEditRender"
            field="reservationMethod"
            aggregate="sum"
            show-overflow="tooltip"
            :title="t('label.reservationMethod')"
            width="160px"
            header-align="center"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="80px"
            :buttons="gridViy2TableButtonColumn_odGQQButtons"
          />
          <VueInputColumn
            :edit-render="gridServiceScheduleIdEditRender"
            field="serviceScheduleId"
            :visible="false"
            title="Service Schedule Id"
            width="100px"
          />
          <VueInputColumn
            :edit-render="gridServiceOrderIdEditRender"
            field="serviceOrderId"
            :visible="false"
            title="Service Order Id"
            width="100px"
          />
          <VueInputColumn
            :edit-render="gridConsumerIdEditRender"
            field="consumerId"
            :visible="false"
            width="100px"
            title="Consumer Id"
          />
          <VueInputColumn
            :edit-render="gridSerializedProductIdEditRender"
            field="serializedProductId"
            :visible="false"
            title="Serialized Product Id"
            width="100px"
          />
          <VueInputColumn
            :edit-render="gridOrderNoEditRender"
            field="orderNo"
            :visible="false"
            title="Order No."
            width="100px"
          />
          <VueInputColumn
            :edit-render="gridServiceStatusEditRender"
            field="serviceStatus"
            :visible="false"
            width="100px"
            title="Service Status "
          />
          <VueInputColumn
            :edit-render="gridPicEditRender"
            field="pic"
            :visible="false"
            width="100px"
            title="P.I.C"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
