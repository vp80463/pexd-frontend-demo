<script setup>
import { IconArrowLeftBold, IconDelete, IconRefreshRight, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
const currentDate = new Date();
// 获取当前月份的第一天
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// 当前月份的最后一天: 获取下一个月的第一天，然后减去一天得到
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const lastDay = new Date(nextMonth - 1);
defineOptions({
  name: 'sdm0502_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_fXTyu = ref();
const viy2Button_fRK8g = ref();
const viy2Panel_2rs6nZ = ref();
const queryForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_auigg4 = ref();
const viy2DateTimePicker_1Dh8P = ref();
const viy2DateTimePicker_gn1aA = ref();
const viy2Button_1Eked = ref();
const viy2Button_gvktW = ref();
const viy2CheckBox_1BUPz = ref();
const viy2Select_1K9MTB = ref();
const viy2InputBox_g5V6I = ref();
const viy2InputBox_4n9Gaw = ref();
const viy2InputBox_4n9Smm = ref();
const viy2Panel_amUXt6 = ref();
const viy2Row_amUXu6 = ref();
const viy2Button_fSq4q = ref();
const viy2Button_fYw4S = ref();
const viy2Button_fZ0XS = ref();
const viy2Table_amUXxe = ref();
const viy2Row_amUXy4 = ref();
const formData = reactive({
});
const queryFormData = reactive({
  promotionNm: '', dateFrom: '', dateTo: '', datafieldviy2CheckBox_1BUPz: ['Invoice', 'Gift Receipt'], giftMax: '', giftNmOne: '', giftNmTwo: '', giftNmThree: '',
});
const rules = reactive({
  viy2InputBox_auigg4Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_1Dh8PRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_gn1aARules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2CheckBox_1BUPzRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2CheckBox_1BUPzOpts = [
  {
    label:
'Invoice',
    value:
'Invoice',
  },
  {
    label:
'Gift Receipt',
    value:
'Gift Receipt',
  },
  {
    label:
'ID Card',
    value:
'ID Card',
  },
  {
    label:
'Registration Card',
    value:
'Registration Card',
  },
  {
    label:
'Lucky Draw Voucher',
    value:
'Lucky Draw Voucher',
  },
  {
    label:
'Others',
    value:
'Others',
  },
];
const viy2Select_1K9MTBOpts = reactive([
  {
    label:
'1',
    value:
'1',
  },
  {
    label:
'2',
    value:
'2',
  },
  {
    label:
'3',
    value:
'3',
  },
]);
const viy2Table_amUXxeEditConfig = reactive({
  trigger: 'click',
});
const viy2Table_amUXxeViy2TableButtonColumn_S6mhnButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelRow,
      title: 'Delete',
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      frameNo: 'RLCJ15C108Y001001',
      engineNo: '15C1-001001',
      barcode: '2515C1 0001001',
      modelCd: '15C100010A',
      modelNm: 'Nouvo SX STD 1DB1',
      supplierDeliveryDate: '20240401',
      colorNm: 'X.Dương',
      purchasePrice: '0',
      error: '',
    },
  ],
}, {
  initialData: [
    { id: '1', name: 'NameA', type: '1', description: 'DescriptionA' },
    { id: '2', name: 'NameB', type: '1', description: 'DescriptionB' },
    { id: '3', name: 'NameC', type: '2', description: 'DescriptionC' },
    { id: '4', name: 'NameD', type: '2', description: 'DescriptionD' },
    { id: '5', name: 'NameE', type: '2', description: 'DescriptionE' },
  ],
});
const gridDs = gridDsApi.data;
const viy2Button_1EkedClick = () => {
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
const viy2Button_gvktWClick = () => {
  queryFormData.dateFrom = firstDay;
  queryFormDate.dateTo = lastDay;
};
const viy2Table_amUXxeModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeErrInfoEditRender = computed(() => {
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
const onDelRow = (row) => {
  grid.value.remove(row);
};
const callbkSelectParts = (param) => {
  grid.value.getCurrentRecord().partsNo = param.partsNo;
  grid.value.getCurrentRecord().partsNm = param.partsNm;
  showPartsWin.value = false;
};
const closeAside = () => {
  showPartsWin.value = false;
};
// 部品多选回调
const multiPartsParams = () => {
  const existData = grid.value.getTableData().visibleData;
  const initData = [];
  existData.forEach((row) => {
    const newOne = {
      partsNo: row.partsNo,
      partsNm: row.partsNm,
    };
    initData.push(newOne);
  });
  return initData;
};
const callbkSelectMultiParts = (param) => {
// 移除新删除行
  param.removeRecords.forEach((delOne) => {
    grid.value.getTableData().visibleData.forEach((row) => {
      if (delOne.partsNo == row.partsNo) {
        grid.value.remove(row);
      }
    });
  });
  // 追加新追加行
  const tableData = grid.value.getTableData().visibleData;
  param.insertRecords.forEach((newOne) => {
    const existOne = tableData.find(chosen => chosen.partsNo === newOne.partsNo);
    if (!existOne) {
      grid.value.insertAt(newOne, -1).then((newRow) => {
        grid.value.setCurrentRow(newRow.row);
      });
    }
  });
  showPartsMultiWin.value = false;
};
const closeMultiPartsAside = () => {
  showPartsMultiWin.value = false;
};
// consumer侧边栏选择后
const callbkSelectConsumer = (param) => {
  consumerFormData.fn = param.name;
  consumerFormData.mobile = param.mobile;
  showConsumerWin.value = false;
};
const closeConsumerAside = () => {
  showConsumerWin.value = false;
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning">
          Reset
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_fXTyu" ref="viy2Button_fXTyu" icon-position="left" :disabled="true">
          Upload MC
        </VueButton>
        <VueButton id="viy2Button_fRK8g" ref="viy2Button_fRK8g" icon-position="left" type="info" :disabled="true">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" title="Header" class="margin-top-div except-height-css">
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="130px"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_3mqzSt"
          ref="viy2Row_3mqzSt"
        >
          <VueCol
            item-key="item"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Promotion Name"
              prop="promotionNm"
              :rules="rules.viy2InputBox_auigg4Rules"
            >
              <VueInput
                id="viy2InputBox_auigg4"
                ref="viy2InputBox_auigg4"
                v-model="queryFormData.promotionNm"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              label="Period"
              prop="dateFrom"
              :rules="rules.viy2DateTimePicker_1Dh8PRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_1Dh8P"
                ref="viy2DateTimePicker_1Dh8P"
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
              label-width="0px"
              prop="dateTo"
              :rules="rules.viy2DateTimePicker_gn1aARules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_gn1aA"
                ref="viy2DateTimePicker_gn1aA"
                v-model="queryFormData.dateTo"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              />
            </VueFormItem>
            <VueButton id="viy2Button_1Eked" ref="viy2Button_1Eked" icon-position="left" class="icon-button-small" :icon="IconArrowLeftBold" @click="viy2Button_1EkedClick" />
            <VueButton id="viy2Button_gvktW" ref="viy2Button_gvktW" icon-position="left" class="icon-button-small" :icon="IconRefreshRight" @click="viy2Button_gvktWClick" />
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="Required Document"
              label-width="150px"
              prop="datafieldviy2CheckBox_1BUPz"
              :rules="rules.viy2CheckBox_1BUPzRules"
            >
              <VueCheckboxGroup
                id="viy2CheckBox_1BUPz"
                ref="viy2CheckBox_1BUPz"
                v-model="queryFormData.datafieldviy2CheckBox_1BUPz"
              >
                <VueCheckbox
                  v-for="option in viy2CheckBox_1BUPzOpts"
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
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Gift Max"
              prop="giftMax"
            >
              <VueSelect
                id="viy2Select_1K9MTB"
                ref="viy2Select_1K9MTB"
                v-model="queryFormData.giftMax"
                :style="{ width: '200px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="viy2Select_1K9MTBOpts"
                :props="{
                  label: 'label',
                  value: 'value',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Gift Name1"
              prop="giftNmOne"
            >
              <VueInput
                id="viy2InputBox_g5V6I"
                ref="viy2InputBox_g5V6I"
                v-model="queryFormData.giftNmOne"
                :readonly="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Gift Name2"
              prop="giftNmTwo"
            >
              <VueInput
                id="viy2InputBox_4n9Gaw"
                ref="viy2InputBox_4n9Gaw"
                v-model="queryFormData.giftNmTwo"
                :readonly="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Gift Name3"
              prop="giftNmThree"
            >
              <VueInput
                id="viy2InputBox_4n9Smm"
                ref="viy2InputBox_4n9Smm"
                v-model="queryFormData.giftNmThree"
                :readonly="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_amUXt6" ref="viy2Panel_amUXt6" v-model="ModelDetailPanelModel" title="Detail">
      <template #header>
        <div style="width: 400px">
          <VueRow
            v-show="detailPanelModel"
            id="viy2Row_amUXu6"
            ref="viy2Row_amUXu6"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_fSq4q" ref="viy2Button_fSq4q" icon-position="left">
                Export
              </VueButton>
              <VueButton id="viy2Button_fYw4S" ref="viy2Button_fYw4S" icon-position="left">
                Import
              </VueButton>
              <VueButton id="viy2Button_fZ0XS" ref="viy2Button_fZ0XS" icon-position="left" class="icon-button-width">
                +
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="viy2Table_amUXxe" ref="viy2Table_amUXxe" :height="gridHeight - 250" :data="gridDs" :edit-config="viy2Table_amUXxeEditConfig">
        <VueRow
          id="viy2Row_amUXy4"
          ref="viy2Row_amUXy4"
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
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeModelCdEditRender"
          field="modelCd"
          show-overflow="tooltip"
          title="Model Code"
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeModelNmEditRender"
          field="modelNm"
          show-overflow="tooltip"
          title="Model Name"
          width="350px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeErrInfoEditRender"
          field="errInfo"
          :sortable="true"
          :resizable="true"
          show-overflow="tooltip"
          title="Error Info"
          width="250px"
        />
        <VueButtonColumn
          align="center"
          fixed="right"
          width="40px"
          header-align="center"
          :buttons="viy2Table_amUXxeViy2TableButtonColumn_S6mhnButtons"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
