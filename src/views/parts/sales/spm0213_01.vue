<script setup>
import { IconArrowLeftBold, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import viy2Subpage_3Xf1mPage from '/src/views/commons/select_consumer.vue';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { merge } from 'lodash-es';
import { useUser } from 'viy-menu';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import { useApi } from '@/composables/useApi';
import { datePickerShortcuts } from '@/pj-commonutils.js';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
const uc = useUser().userInfo;
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
const exportFlag = ref(true);
const router = useRouter();
const total = ref();
const asideParams = ref();
defineOptions({
  name: 'spm0213_01',
});
const form = ref();
const viy2Flex_TOFAo = ref();
const queryForm = ref();
const viy2Panel_2SEB6 = ref();
const viy2Button_5FbWKc = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_7Lhg02 = ref();
const viy2Row_90aZnw = ref();
const viy2Radio_x5Zg2G = ref();
const viy2InputBox_1s1LTQN = ref();
const viy2DateTimePicker_90aZnN = ref();
const viy2DateTimePicker_90aZnP = ref();
const viy2Button_1s1LTOW = ref();
const viy2Button_1s1LTOX = ref();
const viy2ValueList_sloqw = ref();
const viy2ValueList_sloqw2 = ref();
const viy2Select_obE5B = ref();
const viy2Flex_TOGIC = ref();
const viy2Panel_2SEB61 = ref();
const grid = ref();
const viy2Row_90bZkP = ref();
const viy2Row_4aW26C = ref();
const pagination = ref();
const consumerAside = ref();
const viy2Subpage_3Xf1m = ref();
const formData = reactive({
});
const queryFormData = reactive({
  datafieldviy2Radio_ksdEB: '全て', orderNo: '', dateFrom: '', dateTo: '', salesShop: '', parts: '', pointId: '',
});
const rules = reactive({
  viy2Select_obE5BRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showConsumerWin = ref(false);
const viy2Radio_x5Zg2GOpts = reactive([
  { value: '全て', label: '全て' },
  { value: 'BOリリース可能', label: 'BOリリース可能' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const gridDsApi = useApi({
  url: '/parts/spm0213/searchBackOrderList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
}, {
  onSuccess: (data, params) => {
    total.value = data.totalElements;
    if (total.value > 0) {
      exportFlag.value = false;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const boReleaseDsApi = useApi({
  url: '/parts/spm0213/boRelease.json',
  method: 'post',
  data: () => {
    queryFormData.content = grid.value.getTableData().fullData;
    return queryFormData;
  },
}, {
  manual: true,
});
const boReleaseDs = boReleaseDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const viy2Button_5FbWKcClick = () => {
  doRetrieve();
};
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_7Lhg02Click = () => {
  boReleaseDsApi.runAsync();
};
const viy2InputBox_1s1LTQNChange = (event) => {
  queryFormData.dateFrom = null;
  queryFormData.dateTo = null;
};
const viy2Button_1s1LTOWClick = () => {
  if (queryFormData.dateFrom == null) {
    queryFormData.dateFrom = firstDay;
  }
  if (queryFormData.dateTo == null) {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
};
const viy2Button_1s1LTOXClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  const query = { orderId: row.orderId };
  // 使用多标签存储钩子来处理标签
  useMultiTags().openTag({
    name: 'spm0213_02', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0213_02' }).meta.title = t('menu.SPM0213_02');
  // router导航到页面并传递参数
  router.push({ name: 'spm0213_02', data: query });
};
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'YYYYMMDD',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridSalesShopEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSalesShopCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridBoQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridStockQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const paginationCurrentChange = (currentPage) => {
  if (total.value === 0) {
    return;
  }
  doRetrieve();
};
onMounted(() => {
  paginationPageSize.value = PAGE_SIZE;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
// queryFormData.pointId = uc.defaultPointId;
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
  // 清空表单元素
  queryForm.value.resetFields();
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  // queryFormData.pointId = uc.defaultPointId;
  paginationPageSize.value = PAGE_SIZE;
};
const resetTblResults = () => {
  grid.value.remove();
  // 重置分页
  paginationCurrentPage.value = 1;
  total.value = 0;
  exportFlag.value = true;
};
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const onExport = () => {
  useApi(
    {
      url: '/parts/spm0213/exportBackOrderExcel.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        const condition = {};
        merge(condition, queryFormData);
        condition.pageSize = paginationPageSize.value;
        condition.currentPage = paginationCurrentPage.value;
        return condition;
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'SPM0213_01.xlsx');
      },
    },
  );
};
// 路由跳转
const onEditWin = (obj) => {
  const query = { orderId: obj.orderId };
  useMultiTags().openTag({
    name: 'spm0213_02', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0213_02' }).meta.title = t('menu.SPM0213_02');
  // router导航到页面并传递参数
  router.push({ name: 'spm0213_02', data: query });
};
const onLinkToOrderWin = (obj) => {
  if (obj.orderSourceType == 'S001PART') {
    const query = { siteId: uc.siteId, salesOrderId: obj.orderId };
    useMultiTags().openTag({
      name: 'spm0201_03', // 路由名称
    });
    // 详情页标签名
    useMultiTags().getTag({ name: 'spm0201_03' }).meta.title = t('menu.SPM0201_03');
    // router导航到页面并传递参数
    router.push({ name: 'spm0201_03', data: query });
  }
  if (obj.orderSourceType == 'S001SERVICE') {
    const query = { orderNo: obj.orderNo, serviceOrderId: obj.serviceId };
    useMultiTags().openTag({
      name: 'svm0102_01', // 路由名称
    });
    // 详情页标签名
    useMultiTags().getTag({ name: 'svm0102_01' }).meta.title = t('menu.SVM0102_01');
    // router导航到页面并传递参数
    router.push({ name: 'svm0102_01', data: query });
  }
};
// consumer侧边栏选择后
const callbkSelectConsumer = (params) => {
  queryFormData.consumer = params.consumerName;
  queryFormData.consumerId = params.consumerId;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_TOFAo"
      ref="viy2Flex_TOFAo"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_2SEB6" ref="viy2Panel_2SEB6" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" @click="viy2Button_5FbWKcClick">
                検索
              </VueButton>
              <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" @click="viy2Button_2gh3EyClick">
                クリア
              </VueButton>
              <VueButton id="viy2Button_7Lhg02" ref="viy2Button_7Lhg02" icon-position="left" type="info" @click="viy2Button_7Lhg02Click">
                BOリリース
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_90aZnw"
            ref="viy2Row_90aZnw"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="BOリリース状態"
                prop="datafieldviy2Radio_ksdEB"
                size="default"
              >
                <VueRadioGroup
                  id="viy2Radio_x5Zg2G"
                  ref="viy2Radio_x5Zg2G"
                  v-model="queryFormData.datafieldviy2Radio_ksdEB"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_x5Zg2GOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                label="受注番号"
                prop="orderNo"
              >
                <VueInput
                  id="viy2InputBox_1s1LTQN"
                  ref="viy2InputBox_1s1LTQN"
                  v-model="queryFormData.orderNo"
                  :formatter="(value) => value.toUpperCase()"
                  :parser="(value) => value.toUpperCase()"
                  :clearable="true"
                  :style="{ width: '150px' }"
                  @change="viy2InputBox_1s1LTQNChange"
                />
              </VueFormItem>
              <VueFormItem
                label="受注日"
                prop="dateFrom"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_90aZnN"
                  ref="viy2DateTimePicker_90aZnN"
                  v-model="queryFormData.dateFrom"
                  :shortcuts="datePickerShortcuts"
                  type="date"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                label-width="0"
                prop="dateTo"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_90aZnP"
                  ref="viy2DateTimePicker_90aZnP"
                  v-model="queryFormData.dateTo"
                  :shortcuts="datePickerShortcuts"
                  type="date"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <VueButton id="viy2Button_1s1LTOW" ref="viy2Button_1s1LTOW" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1s1LTOWClick" />
              <VueButton id="viy2Button_1s1LTOX" ref="viy2Button_1s1LTOX" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_1s1LTOXClick" />
              <VueFormItem
                label="受注先"
                prop="salesShop"
              >
                <VueValueList
                  id="viy2ValueList_sloqw"
                  ref="viy2ValueList_sloqw"
                  v-model="queryFormData.salesShop"
                  :use-popover="true"
                  width="300px"
                />
              </VueFormItem>
              <VueFormItem
                label="部品"
                prop="parts"
              >
                <VueValueList
                  id="viy2ValueList_sloqw2"
                  ref="viy2ValueList_sloqw2"
                  v-model="queryFormData.parts"
                  :use-popover="true"
                  width="300px"
                />
              </VueFormItem>
              <VueFormItem
                v-show="false"
                label="出荷倉庫"
                prop="pointId"
                :rules="rules.viy2Select_obE5BRules"
              >
                <VueSelect
                  id="viy2Select_obE5B"
                  ref="viy2Select_obE5B"
                  v-model="queryFormData.pointId"
                  :style="{ width: '250px' }"
                  :disabled="true"
                  :options="pointDs"
                  :props="{
                    label: 'desc',
                    value: 'id',
                  }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_TOGIC"
        ref="viy2Flex_TOGIC"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_2SEB61" ref="viy2Panel_2SEB61" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" height="97%" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
            <VueRow
              id="viy2Row_90bZkP"
              ref="viy2Row_90bZkP"
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
              title="No."
            />
            <VueInputColumn
              :edit-render="gridOrderNoEditRender"
              field="orderNo"
              show-overflow="tooltip"
              :sortable="true"
              title="受注番号"
              width="130px"
            />
            <VueDateTimeColumn
              :edit-render="gridOrderDateEditRender"
              field="orderDate"
              align="center"
              :sortable="true"
              title="受注日"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridSalesShopEditRender"
              field="salesShop"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridSalesShopCdEditRender"
              field="salesShopCd"
              show-overflow="tooltip"
              :sortable="true"
              title="受注先名称"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              show-overflow="tooltip"
              :sortable="true"
              title="部品番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              show-overflow="tooltip"
              :sortable="true"
              title="部品名称"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridAllocatedPartsNoEditRender"
              field="allocatedPartsNo"
              show-overflow="tooltip"
              :sortable="true"
              title="引当部品番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridAllocatedPartsNmEditRender"
              field="allocatedPartsNm"
              show-overflow="tooltip"
              :sortable="true"
              title="引当部品名称"
              width="150px"
            />
            <VueNumberColumn
              :edit-render="gridOrderQtyEditRender"
              field="orderQty"
              align="right"
              :sortable="true"
              title="受注数"
              width="140px"
            />
            <VueNumberColumn
              :edit-render="gridAllocatedQtyEditRender"
              field="allocatedQty"
              align="right"
              :sortable="true"
              title="引当数"
              width="140px"
            />
            <VueNumberColumn
              :edit-render="gridBoQtyEditRender"
              field="boQty"
              align="right"
              :sortable="true"
              title="BO数"
              width="120px"
            />
            <VueNumberColumn
              :edit-render="gridStockQtyEditRender"
              field="stockQty"
              align="right"
              :sortable="true"
              title="在庫数"
              width="120px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
      <VueRow
        id="viy2Row_4aW26C"
        ref="viy2Row_4aW26C"
        :gutter="15"
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
            :total="total || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
    <VueAside
      id="consumerAside"
      ref="consumerAside"
      v-model="showConsumerWin"
      :modal="true"
      :close-on-click-modal="false"
      direction="rtl"
      size="60%"
      :show-close="false"
      :with-header="false"
    >
      <viy2Subpage_3Xf1mPage
        id="viy2Subpage_3Xf1m"
        ref="viy2Subpage_3Xf1m"
        :init-data="asideParams"
        @select="callbkSelectConsumer"
        @close="closeConsumerAside"
      />
    </VueAside>
  </VueForm>
</template>
