<script setup>
import { VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { get } from 'lodash-es';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
import { useParams } from 'viy-menu';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import { warn_msg } from '@/pj-commonutils.js';
import { useApi } from '@/composables/useApi';
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const detailPanelModel = ref(true);
const router = useRouter();
const routeParam = useParams();
const statusFlag = ref('');
const expireDateFlag = ref(false);
const dataFlag = ref(false);
const selectFlag = ref(false);
defineOptions({
  name: 'spm0214_02',
});
const form = ref();
const viy2Row_10QMyC = ref();
const exportBtn = ref();
const viy2Button_5GLRO0 = ref();
const viy2Button_gM7II = ref();
const viy2Button_gMc36 = ref();
const viy2Flex_gTuLI = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_5HGG5M = ref();
const viy2InputBox_5HOPSO = ref();
const viy2DateTimePicker_eHUMc = ref();
const viy2DateTimePicker_eCymw = ref();
const viy2DateTimePicker_5k94S8 = ref();
const viy2DateTimePicker_gyt2m = ref();
const viy2Select_1sXvk = ref();
const viy2Radio_1EV7c = ref();
const viy2Flex_gTzgz = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const viy2Button_eM24g = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const formData = reactive({
});
const orderFormData = reactive({
  point: '', requestStatus: '', recommendDate: '', expireDate: '', requestDate: '', approvedDate: '', status: '', selectPicking: 'Buy Back',
});
const gridRules = {
  requestQty: [
    { required: true, message: t('errors.required', [t('label.requestQty')]) },
    {
      validator(rule) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (rule.row.requestQty > rule.row.recommendQty) {
              reject(new Error(t('M.E.00202', [t('label.requestQty'), t('label.recommendedQty')])));
            } else {
              resolve();
            }
          }, 100);
        });
      },
    },
  ],
};
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  beforeEditMethod: (obj) => {
    return statusFlag.value === 'S057RECOMMENDED' && expireDateFlag.value && dataFlag.value && obj.column.property === 'requestQty';
  },
});
const gridMouseConfig = reactive({
  extension: true,
});
const pickingDsApi = useApi({
  url: '/parts/spm0214/picking.json',
  method: 'post',
  data: () => {
    const allTableDataList = grid.value.getCheckboxRecords();
    orderFormData.allTableDataList = allTableDataList;
    return { ...orderFormData };
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    showDetail(data.deliveryOrderId);
  },
  manual: true,
});
const pickingDs = pickingDsApi.data;
const gridDsApi = useApi({
  url: '/parts/spm0214/getReturnRequestItemList.json',
  method: 'post',
  data: () => {
    return { ...orderFormData };
  },
}, {
  onSuccess: (data) => {
    orderFormData.point = data.point;
    orderFormData.pointId = data.pointId;
    orderFormData.requestStatus = data.requestStatus;
    orderFormData.recommendDate = data.recommendDate;
    orderFormData.expireDate = data.expireDate;
    orderFormData.requestDate = data.requestDate;
    orderFormData.approvedDate = data.approvedDate;
    expireDateFlag.value = data.expireDate >= dayjs().format('YYYYMMDD');
    statusFlag.value = data.requestStatusId;
    dataFlag.value = data.tableDataList.length > 0;
    selectFlag.value = false;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const issueDsApi = useApi({
  url: '/parts/spm0214/issue.json',
  method: 'post',
  data: () => {
    const allTableDataList = grid.value.getTableData().fullData;
    orderFormData.allTableDataList = allTableDataList;
    return { ...orderFormData };
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    emit('close');
  },
  manual: true,
});
const issueDs = issueDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0214/confirm.json',
  method: 'post',
  data: () => {
    const tableDataList = grid.value.getRecordset();
    orderFormData.tableDataList = tableDataList;
    return { ...orderFormData };
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    emit('close');
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S057', 'S058'],
}, {
  onSuccess: (data) => {
    data.S057 = data.S057.filter(item => item.codeDbid === 'S057APPROVED' || item.codeDbid === 'S057COMPLETED');
    orderFormData.selectPicking = 'S058BUYBACK';
    gridDsApi.runAsync();
  },
  initialData: {
    S057: [],
    S058: [],
  },
  manual: true,
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const exportBtnClick = () => {
  useApi(
    {
      url: '/parts/spm0214/export.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return { ...orderFormData };
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        VueUtil.saveAs(data, 'SPM0214_02.xlsx');
      },
    },
  );
};
const viy2Button_5GLRO0Click = () => {
  pickingDsApi.runAsync();
};
const viy2Button_gM7IIClick = () => {
  if (expireDateFlag.value) {
    grid.value.validate((valid) => {
      if (!valid) {
        issueDsApi.runAsync();
      }
    });
  } else {
    warn_msg(t('M.W.10260'));
  }
}
;
const viy2Button_gMc36Click = () => {
  grid.value.validate((valid) => {
    if (!valid) {
      confirmDsApi.runAsync();
    }
  });
}
;
const viy2Select_1sXvkChange = () => {
  gridDsApi.runAsync();
};
const viy2Radio_1EV7cChange = () => {
  gridDsApi.runAsync();
};
const viy2Button_eM24gClick = () => {
  const allTableDataList = grid.value.getTableData().fullData;
  for (const key in allTableDataList) {
    const row = allTableDataList[key];
    row.requestQty = 0;
  }
};
const gridCheckboxChange = () => {
  selectFlag.value = grid.value.getCheckboxRecords().length > 0;
};
const gridCheckboxAll = () => {
  selectFlag.value = grid.value.getCheckboxRecords().length > 0;
};
const gridPartsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRequestTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRecommendQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridRequestQtyEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      min: 0,
      step: 1,
      stepStrictly: true,
      textAlign: 'right',
    },
  };
});
const gridApproveQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridReturnAmountEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridYamahaInvoiceSeqNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTotalCostEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridMainLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOnHandQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridRopEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridRoqEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJ1EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridJ2EditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  initData();
});
// 监听router参数有变化时，
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const initData = () => {
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    orderFormData.returnRequestListId = params.returnRequestListId;
    mstCodeInfoDsApi.runAsync();
  }
};
const showDetail = (deliveryOrderId) => {
  const query = {
    deliveryOrderId,
    point: orderFormData.point,
    pointId: orderFormData.pointId,
  };
  useMultiTags().openTag({
    name: 'spm0201_04', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0201_04' }).meta.title = t('title.fastSalesPickingResult_04');
  // router导航到页面并传递参数
  router.push({ name: 'spm0201_04', data: query });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_10QMyC"
      ref="viy2Row_10QMyC"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="exportBtn" ref="exportBtn" icon-position="left" @click="exportBtnClick">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton v-if="'S057APPROVED' === statusFlag" id="viy2Button_5GLRO0" ref="viy2Button_5GLRO0" icon-position="left" :disabled="!selectFlag" @click="viy2Button_5GLRO0Click">
          {{ t('button.picking') }}
        </VueButton>
        <VueButton v-if="'S057RECOMMENDED' === statusFlag && expireDateFlag" id="viy2Button_gM7II" ref="viy2Button_gM7II" icon-position="left" :disabled="'S057RECOMMENDED' !== statusFlag || !expireDateFlag || !dataFlag" @click="viy2Button_gM7IIClick">
          {{ t('button.issue') }}
        </VueButton>
        <VueButton v-if="'S057RECOMMENDED' === statusFlag && expireDateFlag" id="viy2Button_gMc36" ref="viy2Button_gMc36" icon-position="left" type="info" :disabled="'S057RECOMMENDED' !== statusFlag || !expireDateFlag || !dataFlag" @click="viy2Button_gMc36Click">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_gTuLI"
      ref="viy2Flex_gTuLI"
      direction="column"
      class="full-height"
    >
      <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" :title="t('label.header')" class="margin-top-div except-height-css">
        <VueForm
          id="orderForm"
          ref="orderForm"
          label-width="130px"
          :model="orderFormData"
        >
          <VueRow
            id="viy2Row_3mqzSt"
            ref="viy2Row_3mqzSt"
          >
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.point')"
                prop="point"
              >
                <VueInput
                  id="viy2InputBox_5HGG5M"
                  ref="viy2InputBox_5HGG5M"
                  v-model="orderFormData.point"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.status')"
                prop="requestStatus"
              >
                <VueInput
                  id="viy2InputBox_5HOPSO"
                  ref="viy2InputBox_5HOPSO"
                  v-model="orderFormData.requestStatus"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.recommendedDate')"
                label-width="145px"
                prop="recommendDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_eHUMc"
                  ref="viy2DateTimePicker_eHUMc"
                  v-model="orderFormData.recommendDate"
                  type="date"
                  :disabled="false"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.expiredDate')"
                prop="expireDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_eCymw"
                  ref="viy2DateTimePicker_eCymw"
                  v-model="orderFormData.expireDate"
                  type="date"
                  :disabled="false"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.requestedDate')"
                prop="requestDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_5k94S8"
                  ref="viy2DateTimePicker_5k94S8"
                  v-model="orderFormData.requestDate"
                  type="date"
                  :disabled="false"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.approvedDate')"
                prop="approvedDate"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_gyt2m"
                  ref="viy2DateTimePicker_gyt2m"
                  v-model="orderFormData.approvedDate"
                  type="date"
                  :disabled="false"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '130px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                  :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            >
              <VueFormItem
                :label="t('label.status')"
                prop="status"
              >
                <VueSelect
                  id="viy2Select_1sXvk"
                  ref="viy2Select_1sXvk"
                  v-model="orderFormData.status"
                  :clearable="true"
                  :options="get(mstCodeInfoDs, 'S057')"
                  :props="{
                    label: 'codeData1',
                    value: 'codeDbid',
                  }"
                  @change="viy2Select_1sXvkChange"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :md="{ span: 6 }"
            />
            <VueCol
              item-key="item"
              :md="{ span: 24 }"
            >
              <VueFormItem
                :label="t('label.selectPicking')"
                prop="selectPicking"
              >
                <VueRadioGroup
                  id="viy2Radio_1EV7c"
                  ref="viy2Radio_1EV7c"
                  v-model="orderFormData.selectPicking"
                  radio-style="button"
                  direction="horizontal"
                  split-size="default"
                  @change="viy2Radio_1EV7cChange"
                >
                  <VueRadioButton
                    v-for="option in mstCodeInfoDs.S058"
                    :key="option.codeDbid"
                    :label="option.codeDbid"
                    :name="option.name"
                    :disabled="option.disabled"
                  >
                    {{ option.codeData1 }}
                  </VueRadioButton>
                </VueRadioGroup>
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
      <VueFlex
        id="viy2Flex_gTzgz"
        ref="viy2Flex_gTzgz"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" :title="t('label.detail')" :collapse="true" height="100%">
          <template #header>
            <div style="width: 400px">
              <VueRow
                v-show="detailPanelModel"
                id="viy2Row_wZvy4"
                ref="viy2Row_wZvy4"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton v-if="'S057RECOMMENDED' === statusFlag && expireDateFlag" id="viy2Button_eM24g" ref="viy2Button_eM24g" icon-position="left" :disabled="'S057RECOMMENDED' !== statusFlag || !expireDateFlag || !dataFlag" @click="viy2Button_eM24gClick">
                    {{ t('button.allZero') }}
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs.tableDataList" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @checkbox-change="gridCheckboxChange" @checkbox-all="gridCheckboxAll">
            <VueRow
              id="viy2Row_AsHNi"
              ref="viy2Row_AsHNi"
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
            <VueSelectionColumn
              v-if="'S057APPROVED' === statusFlag"
              align="center"
              width="50px"
              header-align="center"
              type="checkbox"
            />
            <VueInputColumn
              :edit-render="gridPartsEditRender"
              field="parts"
              :title="t('label.partsNo')"
              width="250px"
            />
            <VueInputColumn
              :edit-render="gridRequestTypeEditRender"
              field="requestType"
              :title="t('label.type')"
              width="130px"
            />
            <VueNumberColumn
              :edit-render="gridRecommendQtyEditRender"
              field="recommendQty"
              align="right"
              :title="t('label.recommendedQty')"
              width="140px"
            />
            <VueNumberColumn
              v-if="'S057RECOMMENDED' === statusFlag && expireDateFlag"
              :edit-render="gridRequestQtyEditRender"
              field="requestQty"
              align="right"
              :min="0"
              :step="1"
              :step-strictly="true"
              :title="t('label.requestQty')"
              width="130px"
            />
            <VueNumberColumn
              :edit-render="gridApproveQtyEditRender"
              field="approveQty"
              align="right"
              aggregate-label="Total"
              :title="t('label.approvedQty')"
              width="110px"
            />
            <VueNumberColumn
              :edit-render="gridReturnPriceEditRender"
              field="returnPrice"
              align="right"
              show-overflow="tooltip"
              :title="t('label.returnPrice')"
              width="100px"
            />
            <VueNumberColumn
              :edit-render="gridReturnAmountEditRender"
              field="returnAmount"
              align="right"
              aggregate="sum"
              :title="t('label.returnAmount')"
              width="130px"
            />
            <VueInputColumn
              :edit-render="gridYamahaInvoiceSeqNoEditRender"
              field="yamahaInvoiceSeqNo"
              :title="t('label.yamahaInvoiceNo')"
              width="150px"
            />
            <VueNumberColumn
              :edit-render="gridCostEditRender"
              field="cost"
              align="right"
              aggregate="sum"
              :title="t('label.cost')"
              width="100px"
            />
            <VueNumberColumn
              :edit-render="gridTotalCostEditRender"
              field="totalCost"
              align="right"
              aggregate="sum"
              :title="t('label.totalCost')"
              width="110px"
            />
            <VueInputColumn
              :edit-render="gridMainLocationEditRender"
              field="mainLocation"
              :title="t('label.mainLocation')"
              width="140px"
            />
            <VueNumberColumn
              :edit-render="gridOnHandQtyEditRender"
              field="onHandQty"
              align="right"
              aggregate="sum"
              :title="t('label.onHandQuantity')"
              width="110px"
            />
            <VueNumberColumn
              :edit-render="gridRopEditRender"
              field="rop"
              align="right"
              aggregate="sum"
              :title="t('label.rop')"
              width="80px"
            />
            <VueNumberColumn
              :edit-render="gridRoqEditRender"
              field="roq"
              align="right"
              aggregate="sum"
              :title="t('label.roq')"
              width="80px"
            />
            <VueNumberColumn
              :edit-render="gridJ1EditRender"
              field="j1"
              align="right"
              aggregate="sum"
              :title="t('label.j1')"
              width="80px"
            />
            <VueNumberColumn
              :edit-render="gridJ2EditRender"
              field="j2"
              align="right"
              aggregate="sum"
              :title="t('label.j2')"
              width="80px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
