<script setup>
import { IconEdit, useLockScreen } from 'viy-ui';
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
  name: 'spq0205_01',
});
const form = ref();
const viy2Flex_iVmBu = ref();
const queryForm = ref();
const viy2Panel_2ZIIn = ref();
const retrieve = ref();
const reset = ref();
const viy2Button_3DpMU6 = ref();
const viy2Row_lOY8w = ref();
const dateFrom = ref();
const viy2Radio_ng8mR = ref();
const duNo = ref();
const viy2ValueList_3CNIVA = ref();
const viy2Select_1rPSyEH = ref();
const viy2Flex_iWZgg = ref();
const viy2Panel_2ZIIn1 = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const detailAside = ref();
const viy2Subpage_RoWUZ = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', datafieldviy2Radio_ng8mR: '受注別', duNo: '', customer: '', pointId: 'YSP 傘下',
});
const rules = reactive({
  dateFromRules: [
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
const viy2Radio_ng8mROpts = reactive([
  { value: '受注別', label: '受注別' },
  { value: 'ロケーション別', label: 'ロケーション別' },
]);
const viy2ValueList_3CNIVAPopoverQueryMethod = customer_query_method;
const viy2Select_1rPSyEHOpts = reactive([
  {
    desc:
'YSP 傘下',
    id:
'YSP 傘下',
  },
]);
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
    { pickingListNo: 'PL241000001', customerCd: '1', customerNm: 'テスト販売店', instructionDate: '20241010', orderAmount: 10000, dateFrom: '20241001', pickingLines: 10, boOrderAmount: 200000, boRowCount: 10 },
  ],
}, {
  onSuccess: (data, params) => {
    // if (data && data.content.length > 0) {
    btnFlg.value = false;
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
const viy2Button_3DpMU6Click = () => {
  doRetrieve();
};
const viy2ValueList_3CNIVASelect = (params) => {
  queryFormData.customerId = params.id;
};
const viy2ValueList_3CNIVAClear = () => {
  queryFormData.customerId = '';
};
const viy2ValueList_3CNIVALeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.customerId = '';
  }
};
const viy2ValueList_3CNIVAPopoverColumns = computed(() => {
  return customer_column;
});
const gridCellClick = (obj) => {
  const row = obj.row;
  pickingListId.value = row.pickingListId;
  deliveryOrderId.value = row.deliveryOrderId;
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  viewDetail(row);
};
const gridPickingListNoEditRender = computed(() => {
  return {
    enabled: false,
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
const gridInstructionDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
    },
  };
});
const gridOrderAmountEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDateFromEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
    },
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
const gridBoOrderAmountEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBoRowCountEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const paginationCurrentChange = (currentPage) => {
  if (gridDs.value.totalElements === 0) {
    return;
  }
  doRetrieve();
};
onMounted(() => {
// queryFormData.pointId = uc.defaultPointId;
  queryFormData.dateFrom = firstDay;
  // queryFormData.dateTo = lastDay;
  paginationPageSize.value = PAGE_SIZE;
});
watch (
  () => queryFormData, (newVal, oldVal) => {
    resetTblResults();
  }, { deep: true },
);
const doRetrieve = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const resetCondition = () => {
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = '';
  }
  resetTblResults();
  queryFormData.unfinishedOnly = 'N';
  // queryFormData.pointId = uc.defaultPointId;
  // queryFormData.dateFrom = firstDay;
  // queryFormData.dateTo = lastDay;
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
        <VuePanel id="viy2Panel_2ZIIn" ref="viy2Panel_2ZIIn" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="retrieve" ref="retrieve" icon-position="left" @click="retrieveClick">
                検索
              </VueButton>
              <VueButton id="reset" ref="reset" icon-position="left" @click="resetClick">
                クリア
              </VueButton>
              <VueButton id="viy2Button_3DpMU6" ref="viy2Button_3DpMU6" icon-position="left" type="info" @click="viy2Button_3DpMU6Click">
                保存
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
                label="出庫指示日"
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
              <VueFormItem
                label="ピッキング種類"
                prop="datafieldviy2Radio_ng8mR"
              >
                <VueRadioGroup
                  id="viy2Radio_ng8mR"
                  ref="viy2Radio_ng8mR"
                  v-model="queryFormData.datafieldviy2Radio_ng8mR"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                >
                  <VueRadioButton
                    v-for="option in viy2Radio_ng8mROpts"
                    :key="option.value"
                    :label="option.value"
                  >
                    {{ option.label }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
              <VueFormItem
                label="受注番号"
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
                label="受注先"
                prop="customer"
              >
                <VueValueList
                  id="viy2ValueList_3CNIVA"
                  ref="viy2ValueList_3CNIVA"
                  :popover-component="valulistWin"
                  v-model="queryFormData.customer"
                  :use-common-popover="true"
                  :toggle-popover-on-click="true"
                  select-field="desc"
                  :use-popover="true"
                  :popover-width="500"
                  :use-popup="false"
                  width="250px"
                  :popover-columns="viy2ValueList_3CNIVAPopoverColumns"
                  :popover-query-method="viy2ValueList_3CNIVAPopoverQueryMethod"
                  @select="viy2ValueList_3CNIVASelect"
                  @clear="viy2ValueList_3CNIVAClear"
                  @leave="viy2ValueList_3CNIVALeave"
                />
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
                  :options="viy2Select_1rPSyEHOpts"
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
        <VuePanel id="viy2Panel_2ZIIn1" ref="viy2Panel_2ZIIn1" height="100%" title="明細情報">
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-click="gridCellClick" @cell-dblclick="gridCellDblclick">
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
            <VueSelectionColumn
              align="center"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueInputColumn
              :edit-render="gridPickingListNoEditRender"
              field="pickingListNo"
              show-overflow="tooltip"
              :sortable="true"
              title="受注番号"
              width="200px"
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
              :sortable="true"
              title="受注先名称"
              width="150px"
            />
            <VueDateTimeColumn
              :edit-render="gridInstructionDateEditRender"
              field="instructionDate"
              align="center"
              :sortable="true"
              title="受注日"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridOrderAmountEditRender"
              field="orderAmount"
              :sortable="true"
              title="受注金額"
              width="130px"
            />
            <VueDateTimeColumn
              :edit-render="gridDateFromEditRender"
              field="dateFrom"
              align="center"
              :sortable="true"
              title="出庫指示日"
              width="150px"
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
            <VueInputColumn
              :edit-render="gridBoOrderAmountEditRender"
              field="boOrderAmount"
              :sortable="true"
              title="受注残金額"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridBoRowCountEditRender"
              field="boRowCount"
              :sortable="true"
              title="受注残行数"
              width="130px"
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
