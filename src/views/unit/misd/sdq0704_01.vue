<script setup>
import { IconCloseBold, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import {
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const currentDate = new Date();
// 获取当前月份的第一天
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDay = new Date(nextMonth - 1);
defineOptions({
  name: 'sdq0704_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_ab3W9O = ref();
const viy2Button_hWEfo = ref();
const queryForm = ref();
const viy2Panel_6IAt5Y = ref();
const viy2Form_aekkzV = ref();
const viy2Row_hpInK = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_86CvfZ = ref();
const viy2Button_86Cvg1 = ref();
const viy2DateTimePicker_5hElpm = ref();
const viy2InputBox_11BrOE = ref();
const viy2DateTimePicker_5hElpd = ref();
const viy2InputBox_11BrOF = ref();
const viy2Panel_MXmeg = ref();
const viy2Row_tSDiP = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
});
const viy2Form_aekkzVData = reactive({
  pointvl: 'YT350 Yamaha Town Nha Trang_DO 10', fromMonth: '', datafieldviy2InputBox_11BrOF: 'mmyyyy ', toMonth: '', datafieldviy2InputBox_11BrOF: 'mmyyyy ',
});
const rules = reactive({
  viy2DateTimePicker_5hElpmRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_5hElpdRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      date: '01/2024',
      point: 'YT18C',
      initialStock: '1612',
      ymvn: '0',
      wholeSalesIn: '9',
      transferIn: '0',
      retail: '23',
      wholeSalesOut: '0',
      transferOut: '0',
      endStock: '1598',
      inTransit: '0',
    }, {
      date: '01/2024',
      point: 'Sub Total',
      initialStock: '1612',
      ymvn: '0',
      wholeSalesIn: '9',
      transferIn: '0',
      retail: '23',
      wholeSalesOut: '0',
      transferOut: '0',
      endStock: '1598',
      inTransit: '0',
    }, {
      date: '02/2024',
      point: 'YT18C',
      initialStock: '792',
      ymvn: '0',
      wholeSalesIn: '0',
      transferIn: '0',
      retail: '1',
      wholeSalesOut: '0',
      transferOut: '0',
      endStock: '791',
      inTransit: '0',
    }, {
      date: '02/2024',
      point: 'Sub Total',
      initialStock: '792',
      ymvn: '0',
      wholeSalesIn: '0',
      transferIn: '0',
      retail: '1',
      wholeSalesOut: '0',
      transferOut: '0',
      endStock: '791',
      inTransit: '0',
    }, {
      date: 'Total',
      point: '',
      initialStock: '-',
      ymvn: '0',
      wholeSalesIn: '9',
      transferIn: '0',
      retail: '24',
      wholeSalesOut: '0',
      transferOut: '0',
      endStock: '-',
      inTransit: '-',
    },
  ],
});
const gridDs = gridDsApi.data;
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
const viy2Button_hWEfoClick = () => {
  debugger;
};
const viy2ValueList_12gOt1Select = (params) => {
  queryFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const gridDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridPointEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInitialStockEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Viy2TableGroupColumn_V533UEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridYmvnEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridWholeSalesInEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTransferInEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Copy0_viy2TableGroupColumn_V533UEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRetailEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridWholeSalesOutEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridTransferOutEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEndStockEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInTransitEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
  queryFormData.dateFrom = firstDay;
  queryFormData.dateTo = lastDay;
});
viy2Form_aekkzVData.fromMonth = new Date();
viy2Form_aekkzVData.toMonth = new Date();
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
          Reset
        </VueButton>
        <VueButton id="viy2Button_ab3W9O" ref="viy2Button_ab3W9O" icon-position="left" @click="viy2Button_ab3W9OClick">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_hWEfo" ref="viy2Button_hWEfo" icon-position="left" type="info" @click="viy2Button_hWEfoClick">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      label-width="80px"
      class="margin-top-div except-height-css"
      :model="queryFormData"
    >
      <VuePanel id="viy2Panel_6IAt5Y" ref="viy2Panel_6IAt5Y" title="Condition" :collapse="true">
        <VueForm
          id="viy2Form_aekkzV"
          ref="viy2Form_aekkzV"
          label-width="130px"
          :model="viy2Form_aekkzVData"
        >
          <VueRow
            id="viy2Row_hpInK"
            ref="viy2Row_hpInK"
          >
            <VueCol
              item-key="item"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="Point"
                prop="pointvl"
              >
                <VueValueList
                  id="viy2ValueList_12gOt1"
                  ref="viy2ValueList_12gOt1"
                  :style="{ width: '250px' }"
                  v-model="viy2Form_aekkzVData.pointvl"
                  :use-common-popover="true"
                  :use-common-popup="true"
                  aside-size="60%"
                  :toggle-popover-on-click="true"
                  :popover-width="500"
                  :use-popup="true"
                  :clearable="true"
                  :popover-columns="viy2ValueList_12gOt1PopoverColumns"
                  :popover-query-method="viy2ValueList_12gOt1PopoverQueryMethod"
                  :popup-columns="viy2ValueList_12gOt1PopupColumns"
                  :popup-conditions="viy2ValueList_12gOt1PopupConditions"
                  :popup-query-method="viy2ValueList_12gOt1PopupQueryMethod"
                  @select="viy2ValueList_12gOt1Select"
                >
                  <template #asideHeader>
                    <VueRow
                      id="viy2Row_86CvfZ"
                      ref="viy2Row_86CvfZ"
                      class="aside-title-row"
                    >
                      <VueCol
                        item-key="item"
                        class="aside-title-text"
                        :md="{ span: 7 }"
                      >
                        <VueText id="viy2Text_86Cvg0" ref="viy2Text_86Cvg0" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                          Select Point
                        </VueText>
                      </VueCol>
                      <VueCol
                        item-key="item"
                        align="right"
                        :inline="true"
                        class="aside-title-button"
                        :md="{ span: 17 }"
                      >
                        <VueButton id="viy2Button_86Cvg1" ref="viy2Button_86Cvg1" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                      </VueCol>
                    </VueRow>
                  </template>
                </VueValueList>
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="From Month"
                prop="fromMonth"
                :rules="rules.viy2DateTimePicker_5hElpmRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_5hElpm"
                  ref="viy2DateTimePicker_5hElpm"
                  v-model="viy2Form_aekkzVData.fromMonth"
                  type="month"
                  :style="{ width: '100px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ym"
                />
              </VueFormItem>
              <VueFormItem
                label-width="2px"
                prop="datafieldviy2InputBox_11BrOF"
              >
                <VueInput
                  id="viy2InputBox_11BrOE"
                  ref="viy2InputBox_11BrOE"
                  v-model="viy2Form_aekkzVData.datafieldviy2InputBox_11BrOF"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '80px' }"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 8 }"
            >
              <VueFormItem
                label="To Month"
                prop="toMonth"
                :rules="rules.viy2DateTimePicker_5hElpdRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_5hElpd"
                  ref="viy2DateTimePicker_5hElpd"
                  v-model="viy2Form_aekkzVData.toMonth"
                  type="month"
                  :style="{ width: '100px' }"
                  :format="CONST_SYSTEM_DATE_FORMAT.ym"
                />
              </VueFormItem>
              <VueFormItem
                label-width="2px"
                prop="datafieldviy2InputBox_11BrOF"
              >
                <VueInput
                  id="viy2InputBox_11BrOF"
                  ref="viy2InputBox_11BrOF"
                  v-model="viy2Form_aekkzVData.datafieldviy2InputBox_11BrOF"
                  :readonly="true"
                  class="no-border"
                  :style="{ width: '80px' }"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VueForm>
      </VuePanel>
    </VueForm>
    <VuePanel id="viy2Panel_MXmeg" ref="viy2Panel_MXmeg" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            id="viy2Row_tSDiP"
            ref="viy2Row_tSDiP"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            />
          </VueRow>
        </div>
      </template>
      <VueTable id="grid" ref="grid" header-align="center" :height="gridHeight - 30" :data="gridDs" :edit-config="gridEditConfig">
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
        <VueInputColumn
          :edit-render="gridDateEditRender"
          field="date"
          show-overflow="tooltip"
          align="center"
          title="Term"
          width="100px"
        />
        <VueInputColumn
          :edit-render="gridPointEditRender"
          field="point"
          show-overflow="tooltip"
          title="Point"
          width="130px"
        />
        <VueNumberColumn
          :edit-render="gridInitialStockEditRender"
          field="initialStock"
          title="Initial Stock"
          width="130px"
        />
        <VueColgroup
          id="viy2TableGroupColumn_V533U"
          ref="viy2TableGroupColumn_V533U"
          width="200px"
          title="Purchase(In)"
        >
          <VueNumberColumn
            :edit-render="gridYmvnEditRender"
            field="ymvn"
            title="YMVN"
            width="100px"
          />
          <VueNumberColumn
            :edit-render="gridWholeSalesInEditRender"
            field="wholeSalesIn"
            title="Whole Sales In"
            width="130px"
          />
          <VueNumberColumn
            :edit-render="gridTransferInEditRender"
            field="transferIn"
            title="Transfer In"
            width="100px"
          />
        </VueColgroup>
        <VueColgroup
          id="copy0_viy2TableGroupColumn_V533U"
          ref="copy0_viy2TableGroupColumn_V533U"
          width="200px"
          title="Sales(Out)"
        >
          <VueNumberColumn
            :edit-render="gridRetailEditRender"
            field="retail"
            title="Retail"
            width="100px"
          />
          <VueNumberColumn
            :edit-render="gridWholeSalesOutEditRender"
            field="wholeSalesOut"
            title="Whole Sales Out"
            width="130px"
          />
          <VueNumberColumn
            :edit-render="gridTransferOutEditRender"
            field="transferOut"
            title="Transfer Out"
            width="100px"
          />
        </VueColgroup>
        <VueNumberColumn
          :edit-render="gridEndStockEditRender"
          field="endStock"
          title="End Stock"
          width="100px"
        />
        <VueNumberColumn
          :edit-render="gridInTransitEditRender"
          field="inTransit"
          title="In Transit"
          width="100px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
