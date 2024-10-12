<script setup>
import { IconArrowDownBold, IconArrowLeftBold, IconRefreshRight, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { get } from 'lodash-es';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import detailPagePage from '/src/views/parts/purchase/spm0404_02.vue';
import { formatAmount, formatCodeInput, warn_msg } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const uc = useUser().userInfo;
// 获取当前月份的第一天
const firstDay = dayjs().startOf('month').format('YYYYMMDD');
// 该程序取当天为最后一天
const lastDay = dayjs().format('YYYYMMDD');
const asideParams = ref();
let point;
let pointId;
let supplier;
let supplierId;
const orderStatusList = [];
const orderDateValidator = (rule, value, callback) => {
  if (queryFormData.dateFrom > queryFormData.dateTo) {
    callback(new Error(t('error.dateEqAfter', [t('label.orderDateTo'), t('label.orderDateFrom')])));
  }
  callback();
};
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
defineOptions({
  name: 'spm0404_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5ErFUi = ref();
const viy2Button_5Eryo0 = ref();
const viy2Button_4GGP3o = ref();
const viy2Flex_KDR4H = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2DateTimePicker_1N9XyB = ref();
const viy2DateTimePicker_hVBByH = ref();
const viy2Button_hVBByI = ref();
const viy2Button_hVBByG = ref();
const viy2InputBox_1N9XxY = ref();
const viy2Select_1N9Xyb = ref();
const viy2Select_hVBBAm = ref();
const viy2InputBox_5F6RGO = ref();
const filterBtn = ref();
const viy2Flex_KDUow = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2popover_kzzlp = ref();
const filterForm = ref();
const viy2Row_7wysyQ = ref();
const viy2Select_nMOiy = ref();
const viy2Select_nVlMn = ref();
const viy2InputBox_QQvs6e = ref();
const viy2Button_1dfyBFQ = ref();
const detailAside = ref();
const detailPage = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', poNo: '', status: [], type: [], salesOrderNo: '',
});
const filterFormData = reactive({
  orderPic: '', point: '', supplierOrderNo: '',
});
const rules = reactive({
  viy2DateTimePicker_1N9XyBRules: [
    {
      required: true,
      message: t('errors.required', [t('label.orderDate')]),
    },
    {
      validator: orderDateValidator,
    },
  ],
  viy2DateTimePicker_hVBByHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.orderDate')]),
    },
    {
      validator: orderDateValidator,
    },
  ],
});
const showDetailAside = ref(false);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S042', 'S043', 'S045'],
}, {
  onSuccess: (data) => {
    const list = data.S042;
    for (const key in list) {
      const item = list[key];
      if (item.codeData3 !== '') {
        orderStatusList.push(item.codeDbid);
      }
    }
    queryFormData.status = orderStatusList;
  },
  initialData: {
    S042: [],
    S043: [],
    S045: [],
  },
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const cancelDsApi = useApi({
  url: '/parts/spm0404/cancelPurchaseOrder.json',
  method: 'post',
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const cancelDs = cancelDsApi.data;
const gridDsApi = useApi({
  url: '/parts/spm0404/getPurchaseOrderList.json',
  method: 'post',
  data: () => {
    return { ...queryFormData, ...filterFormData };
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const supplierDsApi = useApi({
  url: '/common/helper/supplierList.json',
  method: 'post',
  data: {},
}, {
  onSuccess: (data) => {
    supplier = data[0].desc;
    supplierId = data[0].id;
    filterFormData.supplier = supplier;
    filterFormData.supplierId = supplierId;
  },
});
const supplierDs = supplierDsApi.data;
const employeeDsApi = useApi({
  url: '/common/helper/employeeList.json',
  method: 'post',
  data: {},
});
const employeeDs = employeeDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
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
const viy2Button_5ErFUiClick = () => {
  const query = {
  };
  useMultiTags().openTag({
    name: 'spm0413_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0413_01' }).meta.title = t('title.WholesalePurchaseOrderEntry_01');
  // router导航到页面并传递参数
  router.push({ name: 'spm0413_01', data: query });
}
;
const viy2Button_5Eryo0Click = () => {
  const query = {
  };
  useMultiTags().openTag({
    name: 'spm0406_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0406_01' }).meta.title = t('title.individualPurchaseOrderEntry_01');
  // router导航到页面并传递参数
  router.push({ name: 'spm0406_01', data: query });
}
;
const viy2Button_4GGP3oClick = () => {
  if (checkFilter()) {
    const queryFormElement = queryForm.value;
    queryFormElement.validate((valid, fields) => {
      if (valid) {
        gridDsApi.runAsync();
      }
    });
  }
};
const viy2Button_hVBByIClick = () => {
  if (!isNoValue(queryFormData.dateFrom)) {
    queryFormData.dateFrom = dayjs(queryFormData.dateFrom).subtract(1, 'month').startOf('month').format('YYYYMMDD');
  }
  if (!isNoValue(queryFormData.dateTo)) {
    queryFormData.dateTo = dayjs(queryFormData.dateTo).subtract(1, 'month').endOf('month').format('YYYYMMDD');
  }
};
const viy2Button_hVBByGClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
};
const gridCellDblclick = (obj) => {
  showRowDetail(obj.row);
};
const gridPoNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSupplierOrderNoEditRender = computed(() => {
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
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
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
const gridOrderStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridDeliveryPlanDateEditRender = computed(() => {
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
const gridOrderLinesEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAmtFormatter = (row, columnConfig, cellValue) => {
  if (!isNoValue(row.cellValue)) {
    return formatAmount(row.cellValue);
  }
  return row.cellValue;
};
const gridAmtEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOrderPicEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Select_nMOiyChange = (value, data) => {
  filterFormData.orderPicId = data.id;
  filterFormData.orderPicCd = data.code;
  filterFormData.orderPicNm = data.name;
};
const viy2Select_nVlMnChange = (value, data) => {
  filterFormData.pointId = data.id;
  filterFormData.pointCd = data.code;
  filterFormData.pointNm = data.name;
};
const viy2Button_1dfyBFQClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    filterForm.value.resetFields();
    filterFormData.point = point;
    filterFormData.pointId = pointId;
    filterFormData.supplier = supplier;
    filterFormData.supplierId = supplierId;
    filterFormData.orderPicId = '';
    resetTblResults();
  }).catch(() => {
  });
};
onMounted(() => {
  point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  pointId = uc.defaultPointId;
  filterFormData.point = point;
  filterFormData.pointId = pointId;
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
watch(() => ({ ...queryFormData, ...filterFormData }), (newVal, oldVal) => {
  resetTblResults();
  queryForm.value.validate();
}, { deep: true });
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  filterForm.value.resetFields();
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
  filterFormData.point = point;
  filterFormData.pointId = pointId;
  filterFormData.supplier = supplier;
  filterFormData.supplierId = supplierId;
  filterFormData.orderPicId = '';
  queryFormData.status = orderStatusList;
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
};
const cancelRow = (row) => {
  VueMessageBox.confirm(t('M.C.00104', [row.poNo]), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    cancelDsApi.runAsync({
      purchaseOrderId: row.purchaseOrderId,
      orderNo: row.poNo,
      updateCount: row.updateCount,
    });
  }).catch(() => {
  });
};
const showRowDetail = (row) => {
  showDetailAside.value = true;
  asideParams.value = {
    purchaseOrderId: row.purchaseOrderId,
  };
};
const closeSpm040402 = () => {
  showDetailAside.value = false;
  gridDsApi.runAsync();
};
const checkFilter = () => {
  if (!isNoValue(filterFormData.supplier) && isNoValue(filterFormData.supplierId)) {
    warn_msg(t('M.E.00303', [t('label.supplier'), filterFormData.supplier, t('label.tableSupplierInfo')]));
    return false;
  }
  if (!isNoValue(filterFormData.point) && isNoValue(filterFormData.pointId)) {
    warn_msg(t('M.E.00303', [t('label.point'), filterFormData.point, t('label.tablePointInfo')]));
    return false;
  }
  if (!isNoValue(filterFormData.orderPic) && isNoValue(filterFormData.orderPicId)) {
    warn_msg(t('M.E.00303', [t('label.orderPic'), filterFormData.orderPic, t('label.tableOrderPicInfo')]));
    return false;
  }
  return true;
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
        :md="{ span: 4 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          リセット
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 20 }"
      >
        <VueButton id="viy2Button_5ErFUi" ref="viy2Button_5ErFUi" icon-position="left" @click="viy2Button_5ErFUiClick">
          発注(点量)
        </VueButton>
        <VueButton id="viy2Button_5Eryo0" ref="viy2Button_5Eryo0" icon-position="left" @click="viy2Button_5Eryo0Click">
          発注(手動入力)
        </VueButton>
        <VueButton id="viy2Button_4GGP3o" ref="viy2Button_4GGP3o" icon-position="left" type="info" @click="viy2Button_4GGP3oClick">
          検索
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_KDR4H"
      ref="viy2Flex_KDR4H"
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
              label="発注日"
              prop="dateFrom"
              :rules="rules.viy2DateTimePicker_1N9XyBRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1N9XyB"
                ref="viy2DateTimePicker_1N9XyB"
                v-model="queryFormData.dateFrom"
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
              prop="dateTo"
              :rules="rules.viy2DateTimePicker_hVBByHRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_hVBByH"
                ref="viy2DateTimePicker_hVBByH"
                v-model="queryFormData.dateTo"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueButton id="viy2Button_hVBByI" ref="viy2Button_hVBByI" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_hVBByIClick" />
            <VueButton id="viy2Button_hVBByG" ref="viy2Button_hVBByG" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_hVBByGClick" />
            <VueFormItem
              label="発注NO"
              prop="poNo"
            >
              <VueInput
                id="viy2InputBox_1N9XxY"
                ref="viy2InputBox_1N9XxY"
                v-model="queryFormData.poNo"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              label="発注ステータス"
              prop="status"
            >
              <VueSelect
                id="viy2Select_1N9Xyb"
                ref="viy2Select_1N9Xyb"
                v-model="queryFormData.status"
                :style="{ width: '220px' }"
                :collapse-tags="true"
                :clearable="true"
                :multiple="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="get(mstCodeInfoDs, 'S042')"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
            <VueFormItem
              label="発注タイプ"
              prop="type"
            >
              <VueSelect
                id="viy2Select_hVBBAm"
                ref="viy2Select_hVBBAm"
                v-model="queryFormData.type"
                :style="{ width: '200px' }"
                :collapse-tags="true"
                :clearable="true"
                :multiple="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="get(mstCodeInfoDs, 'S043')"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
            <VueFormItem
              v-if="true"
              label="受注NO"
              prop="salesOrderNo"
            >
              <VueInput
                id="viy2InputBox_5F6RGO"
                ref="viy2InputBox_5F6RGO"
                v-model="queryFormData.salesOrderNo"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueButton id="filterBtn" ref="filterBtn" icon-position="left" class="icon-button-small" :icon="IconArrowDownBold">
              {{ t('button.more') }}
            </VueButton>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_KDUow"
        ref="viy2Flex_KDUow"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" height="100%" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
            :edit-render="gridPoNoEditRender"
            field="poNo"
            show-overflow="tooltip"
            title="発注NO"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridSupplierOrderNoEditRender"
            field="supplierOrderNo"
            show-overflow="tooltip"
            title="サプライヤーNO"
            width="180px"
          />
          <VueDateTimeColumn
            :edit-render="gridOrderDateEditRender"
            field="orderDate"
            align="center"
            title="発注日"
            width="120px"
          />
          <VueDateTimeColumn
            :edit-render="gridConfirmDateEditRender"
            field="confirmDate"
            align="center"
            title="承認日"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridOrderStatusEditRender"
            field="orderStatus"
            show-overflow="tooltip"
            title="発注ステータス"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridOrderTypeEditRender"
            field="orderType"
            show-overflow="tooltip"
            title="発注タイプ"
            width="110px"
          />
          <VueDateTimeColumn
            :edit-render="gridDeliveryPlanDateEditRender"
            field="deliveryPlanDate"
            align="center"
            title="予定出荷日"
            width="190px"
          />
          <VueNumberColumn
            :edit-render="gridOrderLinesEditRender"
            field="orderLines"
            footer-align="right"
            align="right"
            aggregate-label="Total"
            title="発注行"
            width="110px"
          />
          <VueNumberColumn
            :formatter="gridAmtFormatter"
            :edit-render="gridAmtEditRender"
            field="amt"
            align="right"
            title="金額"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridOrderPicEditRender"
            field="orderPic"
            show-overflow="tooltip"
            title="作成人"
            width="130px"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
    <VuePopover
      id="viy2popover_kzzlp"
      ref="viy2popover_kzzlp"
      trigger="click"
      width="700px"
      popper-class="screen-popover"
      :title="t('label.filterCondition')"
      :virtual-ref="filterBtn"
    >
      <VueForm
        id="filterForm"
        ref="filterForm"
        label-width="170px"
        :model="filterFormData"
      >
        <VueRow
          id="viy2Row_7wysyQ"
          ref="viy2Row_7wysyQ"
        >
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="作成人"
              prop="orderPic"
            >
              <VueSelect
                id="viy2Select_nMOiy"
                ref="viy2Select_nMOiy"
                v-model="filterFormData.orderPic"
                :style="{ width: '250px' }"
                :teleported="false"
                :collapse-tags="true"
                :filterable="true"
                :clearable="true"
                :collapse-tags-tooltip="true"
                :options="employeeDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_nMOiyChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="倉庫"
              prop="point"
            >
              <VueSelect
                id="viy2Select_nVlMn"
                ref="viy2Select_nVlMn"
                v-model="filterFormData.point"
                :style="{ width: '250px' }"
                :teleported="false"
                :collapse-tags="true"
                :filterable="true"
                :clearable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_nVlMnChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              v-if="true"
              label="supplierOrderNo"
              prop="supplierOrderNo"
            >
              <VueInput
                id="viy2InputBox_QQvs6e"
                ref="viy2InputBox_QQvs6e"
                v-model="filterFormData.supplierOrderNo"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                :clearable="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueButton id="viy2Button_1dfyBFQ" ref="viy2Button_1dfyBFQ" icon-position="left" type="warning" @click="viy2Button_1dfyBFQClick">
              {{ t('button.reset') }}
            </VueButton>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePopover>
    <VueAside
      id="detailAside"
      ref="detailAside"
      v-model="showDetailAside"
      :close-on-click-modal="false"
      size="60%"
      :with-header="false"
      :show-close="false"
      direction="rtl"
      :close-on-press-escape="true"
    >
      <detailPagePage
        id="detailPage"
        ref="detailPage"
        :init-data="asideParams"
        @select="callBackSpm040402"
        @close="closeSpm040402"
      />
    </VueAside>
  </VueForm>
</template>
