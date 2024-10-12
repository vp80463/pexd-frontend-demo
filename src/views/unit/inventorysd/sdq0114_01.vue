<script setup>
import { IconArrowLeftBold, IconDocumentCopy, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useUser } from 'viy-menu';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
defineOptions({
  name: 'sdq0114_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_ab3W9O = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_Yf7FM = ref();
const queryForm = ref();
const viy2Row_6IAt6a = ref();
const viy2DateTimePicker_2G4tzq = ref();
const viy2DateTimePicker_2G4tzC = ref();
const viy2Button_2G4tzN = ref();
const viy2Button_2G4tzY = ref();
const viy2Select_1rPSyEH = ref();
const model = ref();
const viy2Flex_YfBOd = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_fgsMv = ref();
const viy2Button_fgsN3 = ref();
const viy2Row_fgsNe = ref();
const viy2Row_flOpw = ref();
const viy2Row_flOpI = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', pointId: '', model: '',
});
const rules = reactive({
  viy2DateTimePicker_2G4tzqRules: [
    {
      required: true,
      message: t('errors.required', [t('label.fromDate')]),
    },
  ],
  viy2DateTimePicker_2G4tzCRules: [
    {
      required: true,
      message: t('errors.required', [t('label.toDatedate')]),
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
      title: 'Detail',
    },
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  url: '/unit/sdq0114/getStockInOutHistoryList.json',
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
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm('Are you sure to reset this page?')
    .then(() => {
      const filterFormElement = orderForm.value;
      if (filterFormElement && filterFormElement.resetFields) {
        filterFormElement.resetFields();
      }
    }).catch(() => {
    });
};
const viy2Button_ab3W9OClick = () => {
  debugger;
};
const viy2Button_5FbWKcClick = () => {
  doRetrieve();
};
const viy2Button_2G4tzNClick = () => {
  const current = queryFormData.dateFrom ? queryFormData.dateFrom : currentDate;
  // 获取上个月的年份和月份
  let lastMonthYear = current.getFullYear();
  let lastMonth = current.getMonth() - 1;
  if (lastMonth < 0) {
    lastMonth = 11; // 如果是1月，则上个月是12月
    lastMonthYear--; // 年份减一
  }
  queryFormData.dateFrom = new Date(lastMonthYear, lastMonth, 1);
  queryFormData.dateTo = new Date(lastMonthYear, lastMonth + 1, 0);
};
const viy2Button_2G4tzYClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const gridPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPointNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTransactionNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTransactionTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTransactionDateEditRender = computed(() => {
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
const Copy0_copy0_viy2TableGroupColumn_y1yWrEditRender = computed(() => {
  return {
    enabled: false,
    defaultValue: {
    },
  };
});
const Copy0_viy2TableGroupColumn_y3aPpEditRender = computed(() => {
  return {
    enabled: false,
    defaultValue: {
    },
  };
});
const gridStockQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      useSeparator: true,
      textAlign: 'right',
    },
  };
});
const paginationCurrentChange = () => {
  if (gridDs.value.totalElements === 0) {
    return;
  }
  doRetrieve();
};
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  paginationPageSize.value = PAGE_SIZE;
});
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
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
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="viy2Button_ab3W9O" ref="viy2Button_ab3W9O" icon-position="left" @click="viy2Button_ab3W9OClick">
          {{ t('button.export') }}
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
      id="viy2Flex_Yf7FM"
      ref="viy2Flex_Yf7FM"
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
          id="viy2Row_6IAt6a"
          ref="viy2Row_6IAt6a"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.date')"
              prop="dateFrom"
              :rules="rules.viy2DateTimePicker_2G4tzqRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_2G4tzq"
                ref="viy2DateTimePicker_2G4tzq"
                v-model="queryFormData.dateFrom"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              />
            </VueFormItem>
            <!-- BEGIN CUSTOM DIV CODE -->
            <span>-</span>
            <!-- END CUSTOM DIV CODE -->
            <VueFormItem
              label-width="0"
              prop="dateTo"
              :rules="rules.viy2DateTimePicker_2G4tzCRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_2G4tzC"
                ref="viy2DateTimePicker_2G4tzC"
                v-model="queryFormData.dateTo"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueButton id="viy2Button_2G4tzN" ref="viy2Button_2G4tzN" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_2G4tzNClick" />
            <VueButton id="viy2Button_2G4tzY" ref="viy2Button_2G4tzY" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_2G4tzYClick" />
            <VueFormItem
              :label="t('label.point')"
              prop="pointId"
            >
              <VueSelect
                id="viy2Select_1rPSyEH"
                ref="viy2Select_1rPSyEH"
                v-model="queryFormData.pointId"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.model')"
              prop="model"
            >
              <VueInput
                id="model"
                ref="model"
                v-model="queryFormData.model"
                :clearable="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_YfBOd"
        ref="viy2Flex_YfBOd"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" height="99%" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
          <VueInputColumn
            :edit-render="gridPointCdEditRender"
            field="pointCd"
            :title="t('label.pointCode')"
            width="100px"
          />
          <VueInputColumn
            :edit-render="gridPointNmEditRender"
            field="pointNm"
            show-overflow="tooltip"
            width="200px"
            :title="t('label.pointName')"
          />
          <VueInputColumn
            :edit-render="gridModelCdEditRender"
            field="modelCd"
            :title="t('label.modelCode')"
            width="120px"
          />
          <VueInputColumn
            :edit-render="gridModelNmEditRender"
            field="modelNm"
            width="200px"
            :title="t('label.modelName')"
          />
          <VueInputColumn
            :edit-render="gridTransactionNoEditRender"
            field="transactionNo"
            show-overflow="tooltip"
            :title="t('label.transactionNo')"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridTransactionTypeEditRender"
            field="transactionType"
            show-overflow="tooltip"
            :title="t('label.transactionType')"
            width="150px"
          />
          <VueDateTimeColumn
            :edit-render="gridTransactionDateEditRender"
            field="transactionDate"
            align="center"
            :title="t('label.transactionDate')"
            width="154px"
          />
          <VueTabularColumn
            field="copy0_copy0_viy2TableGroupColumn_y1yWr"
            :edit-render="Copy0_copy0_viy2TableGroupColumn_y1yWrEditRender"
            min-width="100px"
            :children="[
              {
                field: 'from',
              },
              {
                field: 'to',
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_fgsMv"
                ref="viy2Row_fgsMv"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="from"
                    :title="t('label.from')"
                  />
                </VueCol>
              </VueRow>
              <VueRow
                id="viy2Row_fgsNe"
                ref="viy2Row_fgsNe"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="to"
                    :title="t('label.to')"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_fgsMv"
                ref="viy2Row_fgsMv"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="from"
                    :display-options="{
                      compType: 'input',
                    }"
                    show-overflow="tooltip"
                  />
                </VueCol>
              </VueRow>
              <VueRow
                id="viy2Row_fgsNe"
                ref="viy2Row_fgsNe"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="to"
                    :display-options="{
                      compType: 'input',
                    }"
                    show-overflow="tooltip"
                  />
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueTabularColumn
            field="copy0_viy2TableGroupColumn_y3aPp"
            :edit-render="Copy0_viy2TableGroupColumn_y3aPpEditRender"
            width="100px"
            :children="[
              {
                field: 'inQty',
                aggregate: 'sum',
              },
              {
                field: 'outQty',
                aggregate: 'sum',
              },
            ]"
          >
            <template #header="scope">
              <VueRow
                id="viy2Row_flOpw"
                ref="viy2Row_flOpw"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="inQty"
                    :title="t('label.inQuantity')"
                  />
                </VueCol>
              </VueRow>
              <VueRow
                id="viy2Row_flOpI"
                ref="viy2Row_flOpI"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnHeader
                    field="outQty"
                    :title="t('label.outQuantity')"
                  />
                </VueCol>
              </VueRow>
            </template>
            <template #default="scope">
              <VueRow
                id="viy2Row_flOpw"
                ref="viy2Row_flOpw"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="inQty"
                    align="right"
                    :display-options="{
                      compType: 'number',
                    }"
                  />
                </VueCol>
              </VueRow>
              <VueRow
                id="viy2Row_flOpI"
                ref="viy2Row_flOpI"
              >
                <VueCol
                  item-key="item"
                  :md="{ span: 24 }"
                >
                  <VueColumnDisplay
                    :scope="scope"
                    field="outQty"
                    align="right"
                    :display-options="{
                      compType: 'number',
                    }"
                  />
                </VueCol>
              </VueRow>
            </template>
          </VueTabularColumn>
          <VueNumberColumn
            :edit-render="gridStockQtyEditRender"
            field="stockQty"
            align="right"
            :title="t('label.stockQuantity')"
            header-align="center"
            min-width="90px"
          />
          <VueButtonColumn
            fixed="right"
            align="center"
            width="40px"
            :buttons="gridViy2TableButtonColumn_odGQQButtons"
          />
        </VueTable>
      </VueFlex>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        class="except-height-css"
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
