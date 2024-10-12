<script setup>
import { IconArrowLeftBold, IconCloseBold, IconDocument, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { merge } from 'lodash-es';
import { useRouter } from 'vue-router';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
import { clearFormData, formatAmount } from '@/pj-commonutils.js';
import {
  model_column, model_query_method,
  serviceJob_column, serviceJob_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const requireValid = ref(true);
const router = useRouter();
// 当前日
const currentDate = dayjs().format('YYYYMMDD');
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const lastDay = dayjs().endOf('month').format('YYYYMMDD');
defineOptions({
  name: 'svq0104_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_7Lhg02 = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_eB9Ug = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2Select_1rPSyEH = ref();
const viy2DateTimePicker_1Ce29i = ref();
const viy2DateTimePicker_1Ce29k = ref();
const viy2Button_1Ce29v = ref();
const viy2Button_gaglvI = ref();
const viy2Select_gaglvK = ref();
const viy2InputBox_gaglvT = ref();
const viy2ValueList_12gOt12 = ref();
const viy2Row_14xqxZ = ref();
const viy2Button_14xqy1 = ref();
const viy2Select_3eV47I = ref();
const viy2ValueList_4Te72W = ref();
const viy2Row_14y4c3 = ref();
const viy2Button_14y4c5 = ref();
const viy2Flex_eBhlO = ref();
const detailGrid = ref();
const viy2Row_soVPC = ref();
const viy2Row_5TbXqG = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', dateFrom: '', dateTo: '', orderStatusList: [], orderNo: '', model: '', mechanicId: '', serviceJob: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2DateTimePicker_1Ce29iRules: [
    {
      required: true,
      message: t('errors.required', [t('label.periodFrom')]),
      enabled: requireValid,
    },
  ],
  viy2DateTimePicker_1Ce29kRules: [
    {
      required: true,
      message: t('errors.required', [t('label.periodTo')]),
      enabled: requireValid,
    },
  ],
});
const viy2ValueList_12gOt12PopoverQueryMethod = model_query_method;
const viy2ValueList_4Te72WPopoverQueryMethod = serviceJob_query_method;
const viy2ValueList_4Te72WPopupColumns = ref(serviceJob_column);
const viy2ValueList_4Te72WPopupQueryMethod = serviceJob_query_method;
const detailGridEditConfig = reactive({
  trigger: 'click',
});
const detailGridMouseConfig = reactive({
  extension: true,
});
const detailGridViy2TableButtonColumn_ySNcgButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocument,
      click: linkOrderDetail,
      title: 'Detail',
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  url: '/service/svq0104/searchServiceOrderList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const employeeDsApi = useApi({
  url: '/common/helper/employeeList.json',
  method: 'post',
  data: {},
});
const employeeDs = employeeDsApi.data;
const orderStsDsApi = useApi({
  url: '/common/helper/getServiceStatusList.json',
  method: 'post',
});
const orderStsDs = orderStsDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_7Lhg02Click = () => {
  linkNewOrder();
};
const viy2Button_5FbWKcClick = () => {
  doRetrieve();
};
const viy2Select_1rPSyEHChange = (value, data) => {
  onChgPointAndPeriod();
}
;
const viy2DateTimePicker_1Ce29iChange = (value) => {
  onChgPointAndPeriod();
};
const viy2DateTimePicker_1Ce29kChange = (value) => {
  onChgPointAndPeriod();
};
const viy2Button_1Ce29vClick = () => {
  if (!queryFormData.dateFrom) {
    queryFormData.dateFrom = firstDay;
  }
  if (!queryFormData.dateTo) {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
};
const viy2Button_gaglvIClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const viy2Select_gaglvKChange = (value) => {
  onChgPointAndPeriod();
};
const viy2InputBox_gaglvTChange = (value) => {
  if (value) {
    onChgOrderNo();
  } else {
    requireValid.value = true;
  }
};
const viy2ValueList_12gOt12Select = (params) => {
  queryFormData.modelId = params.id;
  onChgPointAndPeriod();
};
const viy2ValueList_12gOt12Clear = (obj) => {
  queryFormData.modelId = '';
};
const viy2ValueList_12gOt12Leave = (params) => {
  if (params.currentValue != params.lastSelectedValue) {
    queryFormData.modelId = '';
  }
};
const viy2ValueList_12gOt12PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_4Te72WSelect = (params) => {
  queryFormData.serviceJobId = params.id;
  onChgPointAndPeriod();
};
const viy2ValueList_4Te72WClear = (obj) => {
  queryFormData.serviceJobId = '';
};
const viy2ValueList_4Te72WLeave = (params) => {
  if (params.currentValue != params.lastSelectedValue) {
    queryFormData.serviceJobId = '';
  }
};
const viy2ValueList_4Te72WPopoverColumns = computed(() => {
  return serviceJob_column;
});
const detailGridCellDblclick = (obj) => {
  linkOrderDetail(obj.row);
};
const detailGridOrderDateEditRender = computed(() => {
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
const detailGridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridOrderStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridFrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridCopy0_viy2TableTemplateColumn_AvvIZEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridColorEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridServiceDemandEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridMechanicNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const detailGridServiceAmountFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const detailGridServiceAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      stepStrictly: true,
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const detailGridPartsAmountFormatter = (obj) => {
  return formatAmount(obj.cellValue);
};
const detailGridPartsAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const paginationCurrentChange = () => {
  if (gridDs.value.length === 0) {
    return;
  }
  doRetrieve();
};
onMounted(() => {
  initCondition();
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
// 查询
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
// 新增订单
const linkNewOrder = () => {
// 定义参数对象
  const query = {
    orderNo: null,
    serviceOrderId: null,
  };
  routerTo(query);
};
// 订单详情
const linkOrderDetail = (row) => {
  nextTick(() => {
    const query = {
      orderNo: row.orderNo,
      serviceOrderId: row.serviceOrderId,
    }; // 路由参数得是字符串
    routerTo(query);
  });
};
// 跳转到SVM0130_01
const routerTo = (params) => {
  useMultiTags().openTag({
    name: 'svm0130_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'svm0130_01' }).meta.title = t('menu.SVM0130_01');
  // router导航到页面并传递参数
  router.push({ name: 'svm0130_01', data: params });
};
// 输入仓库后，
const onChgPointAndPeriod = () => {
  queryFormData.orderNo = '';
};
// 输入订单号后，
const onChgOrderNo = () => {
  queryFormData.dateFrom = '';
  queryFormData.dateTo = '';
  queryFormData.model = '';
  queryFormData.modelId = '';
  queryFormData.orderStatusList = [];
  queryFormData.mechanic = '';
  queryFormData.mechanicId = '';
  requireValid.value = false;
};
// 重置
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  clearFormData(queryFormData);
  // 清空明细部
  resetTblResults();
  // 重新初始化条件部
  initCondition();
};
const resetTblResults = () => {
  gridDs.value.content = [];
  gridDs.value.totalElements = 0;
};
// 初始化查询条件
const initCondition = () => {
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.orderStatusList = [];
  // 重置分页
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
  gridDs.value.totalElements = 0;
};
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
        :md="{ span: 14 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 10 }"
      >
        <VueButton id="viy2Button_7Lhg02" ref="viy2Button_7Lhg02" icon-position="left" @click="viy2Button_7Lhg02Click">
          {{ t('button.newServiceOrder') }}
        </VueButton>
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_eB9Ug"
      ref="viy2Flex_eB9Ug"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        class="margin-top-div0"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_lOY8w"
          ref="viy2Row_lOY8w"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.point')"
              prop="pointId"
              :rules="rules.viy2Select_1rPSyEHRules"
            >
              <VueSelect
                id="viy2Select_1rPSyEH"
                ref="viy2Select_1rPSyEH"
                v-model="queryFormData.pointId"
                :style="{ width: '230px' }"
                :collapse-tags="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_1rPSyEHChange"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.orderDate')"
              prop="dateFrom"
              :rules="rules.viy2DateTimePicker_1Ce29iRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1Ce29i"
                ref="viy2DateTimePicker_1Ce29i"
                v-model="queryFormData.dateFrom"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                @change="viy2DateTimePicker_1Ce29iChange"
              />
            </VueFormItem>
            <!-- BEGIN CUSTOM DIV CODE -->
            <span>-</span>
            <!-- END CUSTOM DIV CODE -->
            <VueFormItem
              label-width="0"
              prop="dateTo"
              :rules="rules.viy2DateTimePicker_1Ce29kRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1Ce29k"
                ref="viy2DateTimePicker_1Ce29k"
                v-model="queryFormData.dateTo"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                @change="viy2DateTimePicker_1Ce29kChange"
              />
            </VueFormItem>
            <VueButton id="viy2Button_1Ce29v" ref="viy2Button_1Ce29v" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1Ce29vClick" />
            <VueButton id="viy2Button_gaglvI" ref="viy2Button_gaglvI" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_gaglvIClick" />
            <VueFormItem
              :label="t('label.orderStatus')"
              prop="orderStatusList"
            >
              <VueSelect
                id="viy2Select_gaglvK"
                ref="viy2Select_gaglvK"
                v-model="queryFormData.orderStatusList"
                :style="{ width: '215px' }"
                :collapse-tags="true"
                :clearable="true"
                :multiple="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="orderStsDs"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
                @change="viy2Select_gaglvKChange"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.orderNo')"
              prop="orderNo"
            >
              <VueInput
                id="viy2InputBox_gaglvT"
                ref="viy2InputBox_gaglvT"
                v-model="queryFormData.orderNo"
                :style="{ width: '150px' }"
                @change="viy2InputBox_gaglvTChange"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.model')"
              prop="model"
            >
              <VueValueList
                id="viy2ValueList_12gOt12"
                ref="viy2ValueList_12gOt12"
                v-model="queryFormData.model"
                :use-common-popover="true"
                :popover-teleported="false"
                select-field="desc"
                :popover-width="500"
                width="200px"
                :popover-columns="viy2ValueList_12gOt12PopoverColumns"
                :popover-query-method="viy2ValueList_12gOt12PopoverQueryMethod"
                @select="viy2ValueList_12gOt12Select"
                @clear="viy2ValueList_12gOt12Clear"
                @leave="viy2ValueList_12gOt12Leave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_14xqxZ"
                    ref="viy2Row_14xqxZ"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_14xqy0" ref="viy2Text_14xqy0" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        {{ t('button.selectUnit') }}
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_14xqy1" ref="viy2Button_14xqy1" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
            <VueFormItem
              :label="t('label.mechanic')"
              prop="mechanicId"
            >
              <VueSelect
                id="viy2Select_3eV47I"
                ref="viy2Select_3eV47I"
                v-model="queryFormData.mechanicId"
                :style="{ width: '200px' }"
                :teleported="false"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="employeeDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.serviceJob')"
              prop="serviceJob"
            >
              <VueValueList
                :use-common-popover="true"
                :use-common-popup="true"
                id="viy2ValueList_4Te72W"
                aside-size="60%"
                ref="viy2ValueList_4Te72W"
                :popover-teleported="false"
                v-model="queryFormData.serviceJob"
                select-field="desc"
                popup-type="aside"
                aside-direction="rtl"
                :close-on-click-modal="true"
                :popover-width="500"
                :disabled="queryFormData.batteryClaimFlag == 'Y'"
                width="200px"
                :popover-columns="viy2ValueList_4Te72WPopoverColumns"
                :popover-query-method="viy2ValueList_4Te72WPopoverQueryMethod"
                :popup-columns="viy2ValueList_4Te72WPopupColumns"
                :popup-query-method="viy2ValueList_4Te72WPopupQueryMethod"
                @select="viy2ValueList_4Te72WSelect"
                @clear="viy2ValueList_4Te72WClear"
                @leave="viy2ValueList_4Te72WLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_14y4c3"
                    ref="viy2Row_14y4c3"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_14y4c4" ref="viy2Text_14y4c4" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        {{ t('button.selectUnit') }}
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      class="aside-title-button"
                      :md="{ span: 17 }"
                    >
                      <VueButton id="viy2Button_14y4c5" ref="viy2Button_14y4c5" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_eBhlO"
        ref="viy2Flex_eBhlO"
        direction="column"
        grow="1"
      >
        <VueTable id="detailGrid" ref="detailGrid" height="100%" :data="gridDs.content" :edit-config="detailGridEditConfig" :mouse-config="detailGridMouseConfig" @cell-dblclick="detailGridCellDblclick">
          <VueRow
            id="viy2Row_soVPC"
            ref="viy2Row_soVPC"
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
          <VueDateTimeColumn
            :edit-render="detailGridOrderDateEditRender"
            field="orderDate"
            align="center"
            :sortable="true"
            :title="t('label.orderDate')"
            width="120px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridOrderNoEditRender"
            field="orderNo"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.orderNo')"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridOrderStatusEditRender"
            field="orderStatus"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.orderStatus')"
            width="200px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridFrameNoEditRender"
            field="frameNo"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.frameNo')"
            width="130px"
            header-align="center"
          />
          <VueTemplateColumn
            :edit-render="detailGridCopy0_viy2TableTemplateColumn_AvvIZEditRender"
            show-overflow="tooltip"
            :title="t('label.model')"
            width="250px"
          >
            <template #default="scope">
              <VueRow
                id="viy2Row_5TbXqG"
                ref="viy2Row_5TbXqG"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 10 }"
                >
                  <VueText id="viy2Text_5TbXqK" ref="viy2Text_5TbXqK" :style="{ width: '100%', display: 'inline-block' }" v-html="scope.row.modelCd" />
                </VueCol>
                <VueCol
                  item-key="item"
                  :md="{ span: 14 }"
                >
                  <VueText id="viy2Text_5TbXqV" ref="viy2Text_5TbXqV" :style="{ width: '100%', display: 'inline-block' }" v-html="scope.row.modelNm" />
                </VueCol>
              </VueRow>
            </template>
          </VueTemplateColumn>
          <VueInputColumn
            :edit-render="detailGridColorEditRender"
            field="color"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.color')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridServiceDemandEditRender"
            field="serviceDemand"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.serviceDemand')"
            width="150px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="detailGridMechanicNameEditRender"
            field="mechanicName"
            aggregate="sum"
            :sortable="true"
            :title="t('label.mechanic')"
            width="130px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="detailGridServiceAmountFormatter"
            :edit-render="detailGridServiceAmountEditRender"
            field="serviceAmount"
            align="right"
            aggregate="sum"
            :step-strictly="true"
            :sortable="true"
            :title="t('label.serviceAmount')"
            width="140px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="detailGridPartsAmountFormatter"
            :edit-render="detailGridPartsAmountEditRender"
            field="partsAmount"
            align="right"
            aggregate="sum"
            :sortable="true"
            :title="t('label.partsAmount')"
            width="130px"
            header-align="center"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="60px"
            :buttons="detailGridViy2TableButtonColumn_ySNcgButtons"
          />
        </VueTable>
      </VueFlex>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        align="middle"
        class="except-height-css paging-area-margin"
      >
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 17 }"
        />
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 7 }"
        >
          <VuePagination
            id="pagination"
            ref="pagination"
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :pager-count="7"
            :background="true"
            :small="true"
            :total="gridDs.totalElements || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
