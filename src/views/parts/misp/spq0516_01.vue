<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const total = ref();
const uc = useUser().userInfo;
const router = useRouter();
const unfinishedFlag = ref(false);
const validataFlag = ref(true);
const exportFlag = ref(true);
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
defineOptions({
  name: 'spq0516_01',
});
const form = ref();
const viy2Flex_HIlUy = ref();
const queryFormData = ref();
const Search_Panel = ref();
const viy2Button_6My7VA = ref();
const viy2Button_6Myu8Q = ref();
const viy2Row_HpOsK = ref();
const viy2Radio_ANhIC = ref();
const viy2InputBox_1GTRdfl = ref();
const viy2DateTimePicker_AEG3e = ref();
const viy2CheckBox_McBgS = ref();
const viy2Flex_HGpgp = ref();
const Item_Panel = ref();
const viy2Button_5TwGxM = ref();
const viy2Button_1y6uGc = ref();
const grid = ref();
const viy2Row_8Z2zZ1 = ref();
const viy2Row_HXORp = ref();
const Pagination = ref();
const formData = reactive({
});
const queryFormDataData = reactive({
  BrowseType: '会社', SleListId: '', datafieldviy2DateTimePicker_AEG3e: [], CheckBox: false,
});
const viy2Radio_ANhICOpts = reactive([
  { value: '会社', label: '会社' },
  { value: '担当拠点', label: '担当拠点' },
  { value: '個人', label: '個人' },
]);
const viy2CheckBox_McBgSOpts = [
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
});
const gridMouseConfig = reactive({
  extension: true,
});
const PaginationCurrentPage = ref(1);
const PaginationPageSize = ref();
const gridDsApi = useApi({
  url: '/parts/spm020101/searchSalesOrderList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data.content.length > 0) {
      exportFlag.value = false;
    } else {
      exportFlag.value = true;
    }
    total.value = data.totalElements;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const orderStatusDsApi = useApi({
  url: '/common/helper/getOrderStatus.json',
  method: 'post',
  data: {
    arg0: 'S015',
    arg1: 'S001PART',
  },
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const orderStatusDs = orderStatusDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const viy2Button_6My7VAClick = () => {
  doRetrieve();
};
const viy2Button_6Myu8QClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5TwGxMClick = () => {
  onExport();
};
const viy2Button_1y6uGcClick = () => {
  onPrintBtn();
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  const query = { salesOrderId: row.salesOrderId };
  useMultiTags().openTag({
    name: 'spm0201_03', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0201_03' }).meta.title = t('title.fastSalesEntry_03');
  // router导航到页面并传递参数
  router.push({ name: 'spm0201_03', data: query });
};
const gridListCtrlIdEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridListIDEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridListTitleEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const gridTransDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
      type: 'date',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridListCreatePersonEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const gridListCreateDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
      type: 'datetime',
      valueFormat: 'YYYY/MM/DD/TT:TT',
      format: 'YYYY/MM/DD/TT:TT',
    },
  };
});
const gridMaxPageEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOrientationEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'left',
    },
  };
});
const gridPrintCountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridPrintSnEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const PaginationCurrentChange = (currentPage) => {
  if (total.value === 0) {
    return;
  }
  gridDsApi.runAsync();
};
onMounted(() => {
  paginationPageSize.value = PAGE_SIZE;
  queryFormData.dateStart = lastDay;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateEnd = lastDay;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryFormData.status = ['1', '2', '3'];
// queryFormData.status = ['S015SPCREATED', 'S015SPPROFORMA','S015SPWAITINGFORRELEASE','S015SPWAITINGFORAPPROVE','S015SPWAITINGALLOCATE','S015SPWAITINGPICKING','S015SPONPICKING'];
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
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateStart = lastDay;
  queryFormData.dateEnd = lastDay;
  queryFormData.status = ['1', '2', '3'];
  // queryFormData.status = ['S015SPCREATED', 'S015SPPROFORMA','S015SPWAITINGFORRELEASE','S015SPWAITINGFORAPPROVE','S015SPWAITINGALLOCATE','S015SPWAITINGPICKING','S015SPONPICKING'];
  unfinishedFlag.value = true;
  validataFlag.value = false;
  exportFlag.value = true;
  paginationPageSize.value = PAGE_SIZE;
};
const resetTblResults = () => {
  grid.value.remove();
  // 重置分页
  paginationCurrentPage.value = 1;
  total.value = 0;
};
const onExport = () => {
  useApi(
    {
      url: '/parts/spm020101/exportSalesOrderListExcel.json',
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
        VueUtil.saveAs(data, 'SPM0201_01.xlsx');
      },
    },
  );
};
const onRowDetail = (row) => {
  const query = { salesOrderId: row.salesOrderId };
  useMultiTags().openTag({
    name: 'spm0201_03', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0201_03' }).meta.title = t('title.fastSalesEntry_03');
  // router导航到页面并传递参数
  router.push({ name: 'spm0201_03', data: query });
};
const getPointLabel = (pointId) => {
  const item = find(pointDs.value, { id: pointId });
  return item ? item.desc : null;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_HIlUy"
      ref="viy2Flex_HIlUy"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryFormData"
        ref="queryFormData"
        :model="queryFormDataData"
      >
        <VuePanel id="Search_Panel" ref="Search_Panel" :title="t('label.searchCondition')" height="auto" collapse-icon-position="left">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_6My7VA" ref="viy2Button_6My7VA" icon-position="left" type="info" @click="viy2Button_6My7VAClick">
                {{ t('button.retrieve') }}
              </VueButton>
              <VueButton id="viy2Button_6Myu8Q" ref="viy2Button_6Myu8Q" icon-position="left" @click="viy2Button_6Myu8QClick">
                {{ t('button.reset') }}
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_HpOsK"
            ref="viy2Row_HpOsK"
          >
            <VueCol
              item-key="item"
              align="center"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="閲覧種別"
                prop="BrowseType"
              >
                <VueRadioGroup
                  id="viy2Radio_ANhIC"
                  ref="viy2Radio_ANhIC"
                  v-model="queryFormDataData.BrowseType"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_ANhICOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                label="リストID"
                label-width="100px"
                prop="SleListId"
              >
                <VueInput
                  id="viy2InputBox_1GTRdfl"
                  ref="viy2InputBox_1GTRdfl"
                  v-model="queryFormDataData.SleListId"
                  :formatter="(value) => value.toUpperCase()"
                  :parser="(value) => value.toUpperCase()"
                  :clearable="true"
                  :style="{ width: '150px' }"
                />
              </VueFormItem>
              <VueFormItem
                :label="t('label.createDateRange')"
                label-width="100px"
                prop="datafieldviy2DateTimePicker_AEG3e"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_AEG3e"
                  ref="viy2DateTimePicker_AEG3e"
                  v-model="queryFormDataData.datafieldviy2DateTimePicker_AEG3e"
                  type="daterange"
                />
              </VueFormItem>
              <VueFormItem
                label="印刷済含む"
                label-width="100px"
                prop="CheckBox"
              >
                <VueCheckbox
                  id="viy2CheckBox_McBgS"
                  ref="viy2CheckBox_McBgS"
                  v-model="queryFormDataData.CheckBox"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_HGpgp"
        ref="viy2Flex_HGpgp"
        direction="column"
        grow="1"
      >
        <VuePanel id="Item_Panel" ref="Item_Panel" :title="t('label.detailInfo')" collapse-icon-position="left" height="100%" :collapse="false">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_5TwGxM" ref="viy2Button_5TwGxM" icon-position="left" @click="viy2Button_5TwGxMClick">
                {{ t('button.Preview') }}
              </VueButton>
              <VueButton id="viy2Button_1y6uGc" ref="viy2Button_1y6uGc" @click="viy2Button_1y6uGcClick">
                {{ t('button.print') }}
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" :stripe="true" size="default" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
            <VueRow
              id="viy2Row_8Z2zZ1"
              ref="viy2Row_8Z2zZ1"
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
              title="No"
            />
            <VueSelectionColumn
              align="center"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueInputColumn
              :edit-render="gridListCtrlIdEditRender"
              field="ListCtrlId"
              :sortable="true"
              align="right"
              title="帳票管理No"
              width="140px"
              header-align="left"
            />
            <VueInputColumn
              :edit-render="gridListIDEditRender"
              field="ListID"
              :sortable="true"
              align="right"
              title="リストID"
              width="140px"
              header-align="left"
            />
            <VueInputColumn
              :edit-render="gridListTitleEditRender"
              field="ListTitle"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              align="left"
              title="タイトル"
              width="300px"
              header-align="left"
            />
            <VueDateTimeColumn
              :edit-render="gridTransDateEditRender"
              field="TransDate"
              align="right"
              :sortable="true"
              title="処理日"
              width="150px"
              header-align="left"
            />
            <VueInputColumn
              :edit-render="gridListCreatePersonEditRender"
              field="ListCreatePerson"
              :sortable="true"
              align="left"
              title="作成者"
              width="150px"
              header-align="left"
            />
            <VueDateTimeColumn
              :edit-render="gridListCreateDateEditRender"
              field="ListCreateDate"
              align="right"
              :sortable="true"
              title="作成日時"
              width="200px"
              header-align="left"
            />
            <VueInputColumn
              :edit-render="gridMaxPageEditRender"
              field="MaxPage"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              align="right"
              title="総ページ"
              width="100px"
              header-align="left"
            />
            <VueInputColumn
              :edit-render="gridOrientationEditRender"
              field="Orientation"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              align="left"
              title="向き"
              width="80px"
              header-align="left"
            />
            <VueInputColumn
              :edit-render="gridPrintCountEditRender"
              field="PrintCount"
              aggregate="sum"
              show-overflow="tooltip"
              :sortable="true"
              align="right"
              title="印刷回数"
              width="100px"
              header-align="left"
            />
            <VueInputColumn
              :edit-render="gridPrintSnEditRender"
              field="PrintSn"
              align="right"
              :sortable="true"
              title="印刷済"
              width="90px"
              header-align="left"
            />
          </VueTable>
        </VuePanel>
        <VueRow
          id="viy2Row_HXORp"
          ref="viy2Row_HXORp"
        >
          <VueCol
            item-key="item"
            :md="{ span: 14 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 10 }"
          >
            <VuePagination
              id="Pagination"
              ref="Pagination"
              v-model:current-page="PaginationCurrentPage"
              v-model:page-size="PaginationPageSize"
              :background="true"
              :small="true"
              :style="{ 'justify-content': 'right' }"
              :total="total || 0"
              @current-change="PaginationCurrentChange"
            />
          </VueCol>
        </VueRow>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
