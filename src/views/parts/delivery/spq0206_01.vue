<script setup>
import { IconArrowLeftBold, IconCaretRight, IconEdit, IconPromotion, IconRefreshRight, IconSelect, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import viy2Subpage_RoWUZPage from '/src/views/parts/delivery/spq0206_02.vue';
import dayjs from 'dayjs';
import { useUser } from 'viy-menu';
import { merge } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { formatCodeInput } from '@/pj-commonutils.js';
import { PAGE_SIZE, YES_NO_FLAG } from '@/constants/pj-constants.js';
import { customer_column, customer_query_method } from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const asideParams = ref();
const uc = useUser().userInfo;
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
const duStatusFlg = ref(false);
const btnFlg = ref(true);
const pickingListId = ref();
const deliveryOrderId = ref();
defineOptions({
  name: 'spq0206_01',
});
const form = ref();
const viy2Flex_iVmBu = ref();
const queryForm = ref();
const viy2Panel_30obz = ref();
const retrieve = ref();
const reset = ref();
const viy2Row_lOY8w = ref();
const duNo = ref();
const dateFrom = ref();
const viy2DateTimePicker_1M2QPm = ref();
const viy2Button_1M2QPn = ref();
const viy2Button_hKswgq = ref();
const viy2ValueList_4xOiLa = ref();
const viy2Select_hdgyc = ref();
const viy2CheckBox_sbEgC = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_iWZgg = ref();
const viy2Panel_30obz1 = ref();
const Export = ref();
const print = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_ocHt9 = ref();
const viy2Button_3YVCby = ref();
const viy2Button_3YXceg = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const detailAside = ref();
const viy2Subpage_RoWUZ = ref();
const formData = reactive({
});
const queryFormData = reactive({
  duNo: '', dateFrom: '', dateTo: '', customer: '', transactionType: '', datafieldviy2CheckBox_sbEgC: ['ピッキング待ち'], pointId: '',
});
const rules = reactive({
  dateFromRules: [
    {
      required: true,
      message: t('errors.required', [t('label.instructionDate')]),
    },
  ],
  viy2DateTimePicker_1M2QPmRules: [
    {
      required: true,
      message: t('errors.required', [t('label.instructionDate')]),
    },
  ],
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const showAsideWin = ref(false);
const viy2ValueList_4xOiLaPopoverQueryMethod = customer_query_method;
const viy2CheckBox_sbEgCOpts = [
  {
    label:
'ピッキング待ち',
    value:
'ピッキング待ち',
  },
  {
    label:
'出荷完了',
    value:
'出荷完了',
  },
];
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
  ];
};
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    { duStatus: 'ピッキング待ち', pickingListNo: 'PL20240101', duNo: 'DO20240101', transactionType: '売上出庫', instructionDate: '20241001', customerCd: '1', customerNm: 'テスト販売店', pickingLines: 10 },
  ],
}, {
  onSuccess: (data, params) => {
    btnFlg.value = true;
    // if (data && data.content.length > 0) {
    // btnFlg.value = false;
    // pickingListId.value = data.content[0].pickingListId;
    // deliveryOrderId.value = data.content[0].deliveryOrderId;
    // nextTick(() => {
    // grid.value.setCurrentRow(data.content[0]);
    // })
    // } else {
    // btnFlg.value = true;
    // }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const transactionTypedDsApi = useApi({
  url: '/common/helper/getInventoryTransactionTypeList.json',
  method: 'post',
  data: {
    // arg0: 'S027PURCHASESTOCKIN/S027TRANSFERIN/S027RETURNIN',
    arg0: '',
  },
});
const transactionTypedDs = transactionTypedDsApi.data;
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S029'],
}, {
  initialData: {
    S029: [],
  },
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const retrieveClick = () => {
  doRetrieve();
};
const resetClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_1M2QPnClick = () => {
  if (!queryFormData.dateFrom) {
    queryFormData.dateFrom = firstDay;
  }
  if (!queryFormData.dateTo) {
    queryFormData.dateTo = lastDay;
  }
  queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  queryForm.value.validate();
};
const viy2Button_hKswgqClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  queryForm.value.validate();
};
const viy2ValueList_4xOiLaSelect = (params) => {
  queryFormData.customerId = params.id;
};
const viy2ValueList_4xOiLaClear = () => {
  queryFormData.customerId = '';
};
const viy2ValueList_4xOiLaLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.customerId = '';
  }
};
const viy2ValueList_4xOiLaPopoverColumns = computed(() => {
  return customer_column;
});
const ExportClick = () => {
  doExport();
};
const printClick = () => {
  onPrintBtn();
};
const gridCellClick = (obj) => {
  const row = obj.row;
  pickingListId.value = row.pickingListId;
  deliveryOrderId.value = row.deliveryOrderId;
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  viewDetail(row);
};
const gridViy2TableTemplateColumn_ocCGPEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridDuStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPickingListNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDuNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTransactionTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInstructionDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
    },
  };
});
const gridCustomerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCustomerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPickingLinesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const paginationCurrentChange = (currentPage) => {
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
watch (
  () => queryFormData, (newVal, oldVal) => {
    resetTblResults();
  }, { deep: true },
);
const doRetrieve = () => {
// queryForm.value.validate((valid) => {
// if (valid) {
  gridDsApi.runAsync();
// }
// })
};
const resetCondition = () => {
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = '';
  }
  resetTblResults();
  queryFormData.unfinishedOnly = 'N';
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  // 重置分页
  gridDs.value.totalElements = 0;
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
};
const resetTblResults = () => {
  gridDs.value.content = [];
  btnFlg.value = true;
  gridDs.value.totalElements = 0;
};
const unfinishedOnlyChg = (row) => {
  if (queryFormData.unfinishedOnly === YES_NO_FLAG.YES) {
    queryFormData.duStatus = '';
    duStatusFlg.value = true;
  } else {
    duStatusFlg.value = false;
  }
};
const doExport = () => {
  useApi(
    {
      url: '/parts/spq0206/exportPickingInstructionExcel.json',
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
        VueUtil.saveAs(data, 'SPQ0206_01.xlsx');
      },
    },
  );
};
const onPrintBtn = () => {
  useApi(
    {
      url: '/common/report/printPartsPickingListByOrderReport.json',
      method: 'post',
      responseType: 'blob',
      data: {
        deliveryOrderId,
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartsPickingList(ByOrder).pdf');
      },
    },
  );
};
const onPrintByPickingListNoBtn = () => {
  useApi(
    {
      url: '/parts/spq0206/printPartsPickingList.json',
      method: 'post',
      responseType: 'blob',
      data: {
        pickingListId,
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'PartsPickingList.pdf');
      },
    },
  );
};
const viewDetail = (row) => {
  showAsideWin.value = true;
  asideParams.value = {
    deliveryOrderId: row.deliveryOrderId,
    pickingListId: row.pickingListId,
    pickingListNo: row.pickingListNo,
  };
};
const closeAside = () => {
  showAsideWin.value = false;
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_iVmBu"
      ref="viy2Flex_iVmBu"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_30obz" ref="viy2Panel_30obz" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="retrieve" ref="retrieve" icon-position="left" type="info" @click="retrieveClick">
                検索
              </VueButton>
              <VueButton id="reset" ref="reset" icon-position="left" @click="resetClick">
                クリア
              </VueButton>
            </div>
          </template>
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
                label="出荷番号"
                prop="duNo"
              >
                <VueInput
                  id="duNo"
                  ref="duNo"
                  v-model="queryFormData.duNo"
                  :formatter="formatCodeInput"
                  :parser="formatCodeInput"
                  :clearable="true"
                  :style="{ width: '200px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="指示日"
                prop="dateFrom"
                :rules="rules.dateFromRules"
              >
                <VueDatePicker
                  id="dateFrom"
                  ref="dateFrom"
                  v-model="queryFormData.dateFrom"
                  type="date"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                prop="dateTo"
                :rules="rules.viy2DateTimePicker_1M2QPmRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_1M2QPm"
                  ref="viy2DateTimePicker_1M2QPm"
                  v-model="queryFormData.dateTo"
                  type="date"
                  :style="{ width: '130px' }"
                />
              </VueFormItem>
              <VueButton id="viy2Button_1M2QPn" ref="viy2Button_1M2QPn" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1M2QPnClick" />
              <VueButton id="viy2Button_hKswgq" ref="viy2Button_hKswgq" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hKswgqClick" />
              <VueFormItem
                label="受注先"
                prop="customer"
              >
                <VueValueList
                  id="viy2ValueList_4xOiLa"
                  ref="viy2ValueList_4xOiLa"
                  :popover-component="valulistWin"
                  v-model="queryFormData.customer"
                  :use-common-popover="true"
                  :toggle-popover-on-click="true"
                  select-field="desc"
                  :use-popover="true"
                  :popover-width="500"
                  :use-popup="false"
                  width="250px"
                  :popover-columns="viy2ValueList_4xOiLaPopoverColumns"
                  :popover-query-method="viy2ValueList_4xOiLaPopoverQueryMethod"
                  @select="viy2ValueList_4xOiLaSelect"
                  @clear="viy2ValueList_4xOiLaClear"
                  @leave="viy2ValueList_4xOiLaLeave"
                />
              </VueFormItem>
              <VueFormItem
                label="在庫変更種類"
                prop="transactionType"
              >
                <VueSelect
                  id="viy2Select_hdgyc"
                  ref="viy2Select_hdgyc"
                  v-model="queryFormData.transactionType"
                  :style="{ width: '200px' }"
                  :clearable="true"
                  :options="transactionTypedDs"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                />
              </VueFormItem>
              <VueFormItem
                label="出庫状態"
                prop="datafieldviy2CheckBox_sbEgC"
              >
                <VueCheckboxGroup
                  id="viy2CheckBox_sbEgC"
                  ref="viy2CheckBox_sbEgC"
                  v-model="queryFormData.datafieldviy2CheckBox_sbEgC"
                  split-size="default"
                >
                  <VueCheckboxButton
                    v-for="option in viy2CheckBox_sbEgCOpts"
                    :key="option.value"
                    :label="option.value"
                    :name="option.name"
                    :disabled="option.disabled"
                  >
                    {{ option.label }}
                  </VueCheckboxButton>
                </VueCheckboxGroup>
              </VueFormItem>
              <VueFormItem
                v-show="false"
                label="出荷倉庫"
                prop="pointId"
                :rules="rules.viy2Select_1rPSyEHRules"
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
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_iWZgg"
        ref="viy2Flex_iWZgg"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_30obz1" ref="viy2Panel_30obz1" height="100%" title="明細情報">
          <template #header>
            <div style="width: auto">
              <VueButton id="Export" ref="Export" icon-position="left" :disabled="btnFlg" @click="ExportClick">
                ファイル出力
              </VueButton>
              <VueButton id="print" ref="print" icon-position="left" :disabled="btnFlg" @click="printClick">
                印刷
              </VueButton>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="97%" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-click="gridCellClick" @cell-dblclick="gridCellDblclick">
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
              title="No."
            />
            <VueTemplateColumn
              v-if="false"
              :edit-render="gridViy2TableTemplateColumn_ocCGPEditRender"
              align="center"
              width="55px"
            >
              <template #default="scope">
                <VueButton v-show="scope.row.status === 'S029ONPICKING'" id="viy2Button_ocHt9" ref="viy2Button_ocHt9" icon-position="left" type="text" class="icon-green-triangle-larger" :icon="IconCaretRight" />
                <VueButton v-show="scope.row.status === 'S029INVOICED'" id="viy2Button_3YVCby" ref="viy2Button_3YVCby" icon-position="left" type="text" class="icon-green-triangle" :icon="IconSelect" />
                <VueButton v-show="scope.row.status === 'S029DISPATCHED'" id="viy2Button_3YXceg" ref="viy2Button_3YXceg" icon-position="left" type="text" class="icon-green-triangle" :icon="IconPromotion" />
              </template>
            </VueTemplateColumn>
            <VueInputColumn
              :edit-render="gridDuStatusEditRender"
              field="duStatus"
              show-overflow="tooltip"
              :sortable="true"
              title="出庫状態"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridPickingListNoEditRender"
              field="pickingListNo"
              show-overflow="tooltip"
              :sortable="true"
              title="出庫指示番号"
              width="200px"
            />
            <VueInputColumn
              :edit-render="gridDuNoEditRender"
              field="duNo"
              show-overflow="tooltip"
              :sortable="true"
              title="出荷番号"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridTransactionTypeEditRender"
              field="transactionType"
              show-overflow="tooltip"
              :sortable="true"
              title="在庫変更種類"
              width="150px"
            />
            <VueDateTimeColumn
              :edit-render="gridInstructionDateEditRender"
              field="instructionDate"
              align="center"
              :sortable="true"
              title="指示日"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridCustomerCdEditRender"
              field="customerCd"
              :sortable="true"
              title="受注先"
              width="120px"
            />
            <VueInputColumn
              :edit-render="gridCustomerNmEditRender"
              field="customerNm"
              aggregate-label="合計"
              footer-align="center"
              :sortable="true"
              title="受注先名称"
              width="200px"
            />
            <VueNumberColumn
              :edit-render="gridPickingLinesEditRender"
              field="pickingLines"
              align="right"
              aggregate="sum"
              :sortable="true"
              width="120px"
              title="指示行数"
            />
            <VueButtonColumn
              fixed="right"
              align="center"
              width="60px"
              :buttons="gridViy2TableButtonColumn_odGQQButtons"
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
    <VueAside
      id="detailAside"
      ref="detailAside"
      v-model="showAsideWin"
      :modal="true"
      direction="btt"
      size="90%"
      :with-header="false"
    >
      <viy2Subpage_RoWUZPage
        id="viy2Subpage_RoWUZ"
        ref="viy2Subpage_RoWUZ"
        :params="asideParams"
        @close="closeAside"
      />
    </VueAside>
  </VueForm>
</template>
