<script setup>
import { IconDocument, IconPrinter, IconRefreshLeft, IconSearch, useLockScreen } from 'viy-ui';
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
  name: 'spq0516_01Copy',
});
const form = ref();
const viy2Flex_HG4DT = ref();
const queryFormData = ref();
const Search_Panel = ref();
const viy2Button_6My7VA = ref();
const viy2Button_6Myu8Q = ref();
const viy2Row_HpOsK = ref();
const viy2Radio_ANhIC = ref();
const viy2Space_HB634 = ref();
const viy2InputBox_1GTRdfl = ref();
const viy2Space_HB6ET = ref();
const viy2DateTimePicker_AEG3e = ref();
const viy2Space_HB7Cg = ref();
const viy2Radio_HB2Db = ref();
const viy2Flex_HGAUw = ref();
const Item_Panel = ref();
const viy2Button_4oCZZW = ref();
const viy2Button_5TwGxM = ref();
const grid = ref();
const viy2Row_8Z2zZ1 = ref();
const viy2Row_M0Opx = ref();
const viy2Pagination_72qEoM = ref();
const filterpopover = ref();
const filterForm = ref();
const viy2Row_HNs8v = ref();
const viy2ValueList_1C7zl2 = ref();
const viy2CheckBox_eNArs = ref();
const viy2DateTimePicker_o8KNG = ref();
const viy2DateTimePicker_3TtW0a = ref();
const viy2Button_6ayce = ref();
const formData = reactive({
});
const queryFormDataData = reactive({
  BrowseType: '会社', SleListId: '', datafieldviy2DateTimePicker_AEG3e: [], PrintSn: '',
});
const filterFormData = reactive({
  consumer: '', exception: [], datafieldviy2DateTimePicker_o8KNG: '', datafieldviy2DateTimePicker_o8KNG: '',
});
const viy2CheckBox_eNArsOpts = [
  {
    label:
'',
    value:
'',
  },
];
const viy2Radio_ANhICOpts = reactive([
  { value: '会社', label: '会社' },
  { value: '担当拠点', label: '担当拠点' },
  { value: '個人', label: '個人' },
]);
const viy2Radio_HB2DbOpts = reactive([
  { value: '', label: '' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2Pagination_72qEoMCurrentPage = ref(1);
const viy2Pagination_72qEoMPageSize = ref();
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
});
const orderStatusDs = orderStatusDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
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
const viy2Button_4oCZZWClick = () => {
  onExport();
};
const viy2Button_5TwGxMClick = () => {
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
  };
});
const viy2Pagination_72qEoMCurrentChange = (currentPage) => {
  if (total.value === 0) {
    return;
  }
  gridDsApi.runAsync();
};
const viy2ValueList_1C7zl2Select = (value, type) => {
  filterForm.consumer = value.value;
};
const viy2Button_6ayceClick = () => {
  const filterFormElement = filterForm.value;
  if (filterFormElement && filterFormElement.resetFields) {
    filterFormElement.resetFields();
  }
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
      id="viy2Flex_HG4DT"
      ref="viy2Flex_HG4DT"
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
              <VueButton id="viy2Button_6My7VA" ref="viy2Button_6My7VA" icon-position="left" :icon="IconSearch" @click="viy2Button_6My7VAClick">
                {{ t('button.retrieve') }}
              </VueButton>
              <VueButton id="viy2Button_6Myu8Q" ref="viy2Button_6Myu8Q" icon-position="left" :icon="IconRefreshLeft" @click="viy2Button_6Myu8QClick">
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
              <VueSpace
                id="viy2Space_HB634"
                ref="viy2Space_HB634"
              />
              <VueFormItem
                label="リストID"
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
              <VueSpace
                id="viy2Space_HB6ET"
                ref="viy2Space_HB6ET"
              />
              <VueFormItem
                label="作成期間"
                prop="datafieldviy2DateTimePicker_AEG3e"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_AEG3e"
                  ref="viy2DateTimePicker_AEG3e"
                  v-model="queryFormDataData.datafieldviy2DateTimePicker_AEG3e"
                  type="daterange"
                />
              </VueFormItem>
              <VueSpace
                id="viy2Space_HB7Cg"
                ref="viy2Space_HB7Cg"
              />
              <VueFormItem
                label="印刷済含む"
                prop="PrintSn"
              >
                <VueRadioGroup
                  id="viy2Radio_HB2Db"
                  ref="viy2Radio_HB2Db"
                  v-model="queryFormDataData.PrintSn"
                  radio-style="radio"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadio
                    v-for="option in viy2Radio_HB2DbOpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadio>
                </VueRadioGroup>
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_HGAUw"
        ref="viy2Flex_HGAUw"
        direction="column"
        grow="1"
      >
        <VuePanel id="Item_Panel" ref="Item_Panel" :title="t('label.detailInfo')" collapse-icon-position="left" height="100%" :collapse="false">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_4oCZZW" ref="viy2Button_4oCZZW" icon-position="left" :icon="IconDocument" @click="viy2Button_4oCZZWClick">
                {{ t('button.Preview') }}
              </VueButton>
              <VueButton id="viy2Button_5TwGxM" ref="viy2Button_5TwGxM" icon-position="left" :icon="IconPrinter" @click="viy2Button_5TwGxMClick">
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
            <VueInputColumn
              :edit-render="gridListCtrlIdEditRender"
              field="ListCtrlId"
              :sortable="true"
              align="right"
              title="帳票管理No"
              width="150px"
              header-align="left"
            />
            <VueInputColumn
              :edit-render="gridListIDEditRender"
              field="ListID"
              :sortable="true"
              align="right"
              title="リストID"
              width="150px"
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
              width="180px"
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
              width="100px"
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
              title="印刷済"
              width="50px"
            />
          </VueTable>
        </VuePanel>
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
            id="viy2Pagination_72qEoM"
            ref="viy2Pagination_72qEoM"
            v-model:current-page="viy2Pagination_72qEoMCurrentPage"
            v-model:page-size="viy2Pagination_72qEoMPageSize"
            :background="true"
            :small="true"
            :style="{ 'justify-content': 'right' }"
            :total="total || 0"
            @current-change="viy2Pagination_72qEoMCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
    <VuePopover
      id="filterpopover"
      ref="filterpopover"
      trigger="click"
      title="Filter Condition"
      width="700px"
      popper-class="screen-popover"
      :virtual-ref="filterBtn"
    >
      <VueForm
        id="filterForm"
        ref="filterForm"
        label-width="130px"
        :model="filterFormData"
      >
        <VueRow
          id="viy2Row_HNs8v"
          ref="viy2Row_HNs8v"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Customer"
              prop="consumer"
            >
              <VueValueList
                id="viy2ValueList_1C7zl2"
                ref="viy2ValueList_1C7zl2"
                v-model="filterFormData.consumer"
                :popover-component="valulistWin"
                :popover-teleported="false"
                :use-popover="true"
                :popover-width="500"
                @select="viy2ValueList_1C7zl2Select"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Unfinished Only"
              prop="exception"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_eNArs"
                ref="viy2CheckBox_eNArs"
                v-model="filterFormData.exception"
                split-size="default"
              >
                <VueCheckbox
                  v-for="option in viy2CheckBox_eNArsOpts"
                  :key="option.value"
                  :label="option.value"
                  :name="option.name"
                  :disabled="option.disabled"
                >
                  {{ option.label }}
                </VueCheckbox>
              </VueCheckboxGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 16 }"
          >
            <VueFormItem
              label="Allocate Due Date"
              prop="datafieldviy2DateTimePicker_o8KNG"
            >
              <VueDatePicker
                id="viy2DateTimePicker_o8KNG"
                ref="viy2DateTimePicker_o8KNG"
                v-model="filterFormData.datafieldviy2DateTimePicker_o8KNG"
                :style="{ width: '130px' }"
                format="DD/MM/YYYY"
              />
            </VueFormItem>
            <VueFormItem
              label-width="2PX"
              prop="datafieldviy2DateTimePicker_o8KNG"
            >
              <VueDatePicker
                id="viy2DateTimePicker_3TtW0a"
                ref="viy2DateTimePicker_3TtW0a"
                v-model="filterFormData.datafieldviy2DateTimePicker_o8KNG"
                :style="{ width: '130px' }"
                format="DD/MM/YYYY"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueButton id="viy2Button_6ayce" ref="viy2Button_6ayce" icon-position="left" type="warning" @click="viy2Button_6ayceClick">
              Reset
            </VueButton>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePopover>
  </VueForm>
</template>
