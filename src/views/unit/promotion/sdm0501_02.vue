<script setup>
import { IconCloseBold, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import {
  dealer_column, dealer_pop_condition, dealer_pop_query_method, dealer_query_method,
  model_column, model_pop_condition, model_pop_query_method, model_query_method,
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdm0501_02',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_5SFqiM = ref();
const viy2Button_fXTyu = ref();
const viy2Button_fRK8g = ref();
const viy2Button_5SGLIy = ref();
const queryForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_g5V6I = ref();
const viy2DateTimePicker_1Dh8P = ref();
const viy2DateTimePicker_gn1aA = ref();
const viy2Select_AylPd = ref();
const viy2ValueList_80zpZw = ref();
const viy2Row_85egC1 = ref();
const viy2Button_85egCd = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_85b6hg = ref();
const viy2Button_85b6hv = ref();
const viy2ValueList_12gOt12 = ref();
const viy2Row_85fdp3 = ref();
const viy2Button_85fdpf = ref();
const viy2InputBox_854Ggy = ref();
const viy2Panel_amUXt6 = ref();
const viy2Row_amUXu6 = ref();
const viy2Button_fYw4S = ref();
const viy2Button_fSq4q = ref();
const viy2Table_amUXxe = ref();
const viy2Row_amUXy4 = ref();
const formData = reactive({
});
const queryFormData = reactive({
  promotion: '15C100 TK115', dateFrom: '20240402', dateTo: '20240403', datafieldviy2Select_AylPd: '', dealer: '', pointvl: '', model: '', frameNo: '',
});
const rules = reactive({
  viy2DateTimePicker_gn1aARules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Select_AylPdOpts = reactive([
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
]);
const viy2ValueList_80zpZwPopoverQueryMethod = dealer_query_method;
const viy2ValueList_80zpZwPopupColumns = ref(dealer_column);
const viy2ValueList_80zpZwPopupQueryMethod = dealer_pop_query_method;
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2ValueList_12gOt12PopoverQueryMethod = model_query_method;
const viy2ValueList_12gOt12PopupColumns = ref(model_column);
const viy2ValueList_12gOt12PopupQueryMethod = model_pop_query_method;
const viy2Table_amUXxeEditConfig = reactive({
  trigger: 'click',
});
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      promotionCd: 'P20220010',
      promotionNm: 'YMVNTESTFORPROMOTION10',
      province: 'Tỉnh Quảng Ninh',
      dealerCd: 'YT09',
      dealerNm: 'Ha Quynh',
      pointCd: 'YT090',
      pointNm: 'Ha Quynh1',
      modelCd: '1FCF00010A',
      modelNm: 'Sirius FI 1FCC',
      frameNo: 'RLCJ15C108Y001001',
      engineNo: '15C1-001001',
      barcode: '2515C1 0001001',
      modelCd: '15C100010A',
      modelNm: 'Nouvo SX STD 1DB1',
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
const viy2ValueList_80zpZwSelect = (params) => {
  queryFormData.dealer = `${params.code} ${params.name}`;
};
const viy2ValueList_80zpZwPopoverColumns = computed(() => {
  return dealer_column;
});
const viy2ValueList_80zpZwPopupConditions = computed(() => {
  return dealer_pop_condition;
});
const viy2ValueList_12gOt1Select = (params) => {
  queryFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2ValueList_12gOt12Select = (params) => {
  queryFormData.model = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt12PopoverColumns = computed(() => {
  return model_column;
});
const viy2ValueList_12gOt12PopupConditions = computed(() => {
  return model_pop_condition;
});
const viy2Table_amUXxePromotionCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxePromotionNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeProvinceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeDealerCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeDealerNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxePointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxePointNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
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
const viy2Table_amUXxeFrameNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_amUXxeErrorInfoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
  VueUtil.addResizeListener(document.querySelector('.main-content'), () => {
    proxy.autoSetGridHeight();
  });
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left">
          Back
        </VueButton>
        <VueButton id="viy2Button_5SFqiM" ref="viy2Button_5SFqiM" icon-position="left" :disabled="true">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_fXTyu" ref="viy2Button_fXTyu" icon-position="left">
          Retrieve
        </VueButton>
        <VueButton id="viy2Button_fRK8g" ref="viy2Button_fRK8g" icon-position="left" type="info">
          Confirm
        </VueButton>
        <VueButton id="viy2Button_5SGLIy" ref="viy2Button_5SGLIy" icon-position="left" type="info">
          Delete
        </VueButton>
      </VueCol>
    </VueRow>
    <VueForm
      id="queryForm"
      ref="queryForm"
      class="margin-top-div0 except-height-css"
      :model="queryFormData"
    >
      <VueRow
        id="viy2Row_3mqzSt"
        ref="viy2Row_3mqzSt"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Promotion"
            prop="promotion"
          >
            <VueInput
              id="viy2InputBox_g5V6I"
              ref="viy2InputBox_g5V6I"
              v-model="queryFormData.promotion"
              :readonly="true"
              :disabled="true"
              :style="{ width: '250px' }"
            />
          </VueFormItem>
          <VueFormItem
            label="Period"
            prop="dateFrom"
          >
            <VueDatePicker
              id="viy2DateTimePicker_1Dh8P"
              ref="viy2DateTimePicker_1Dh8P"
              v-model="queryFormData.dateFrom"
              :disabled="true"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
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
              :disabled="true"
              :style="{ width: '130px' }"
              :format="CONST_SYSTEM_DATE_FORMAT.ymd"
              :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
            />
          </VueFormItem>
          <VueFormItem
            label="Province"
            prop="datafieldviy2Select_AylPd"
          >
            <VueSelect
              id="viy2Select_AylPd"
              ref="viy2Select_AylPd"
              v-model="queryFormData.datafieldviy2Select_AylPd"
              :style="{ width: '200px' }"
              :options="viy2Select_AylPdOpts"
            />
          </VueFormItem>
          <VueFormItem
            label="Dealer"
            prop="dealer"
          >
            <VueValueList
              id="viy2ValueList_80zpZw"
              ref="viy2ValueList_80zpZw"
              v-model="queryFormData.dealer"
              :style="{ width: '220px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_80zpZwPopoverColumns"
              :popover-query-method="viy2ValueList_80zpZwPopoverQueryMethod"
              :popup-columns="viy2ValueList_80zpZwPopupColumns"
              :popup-conditions="viy2ValueList_80zpZwPopupConditions"
              :popup-query-method="viy2ValueList_80zpZwPopupQueryMethod"
              @select="viy2ValueList_80zpZwSelect"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_85egC1"
                  ref="viy2Row_85egC1"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_85egCc" ref="viy2Text_85egCc" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_85egCd" ref="viy2Button_85egCd" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Point"
            prop="pointvl"
          >
            <VueValueList
              id="viy2ValueList_12gOt1"
              ref="viy2ValueList_12gOt1"
              :style="{ width: '220px' }"
              v-model="queryFormData.pointvl"
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
                  id="viy2Row_85b6hg"
                  ref="viy2Row_85b6hg"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_85b6hk" ref="viy2Text_85b6hk" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_85b6hv" ref="viy2Button_85b6hv" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Model Code"
            prop="model"
          >
            <VueValueList
              id="viy2ValueList_12gOt12"
              ref="viy2ValueList_12gOt12"
              v-model="queryFormData.model"
              :style="{ width: '220px' }"
              :use-common-popover="true"
              :use-common-popup="true"
              aside-size="60%"
              :toggle-popover-on-click="true"
              :popover-width="500"
              :use-popup="true"
              :popover-columns="viy2ValueList_12gOt12PopoverColumns"
              :popover-query-method="viy2ValueList_12gOt12PopoverQueryMethod"
              :popup-columns="viy2ValueList_12gOt12PopupColumns"
              :popup-conditions="viy2ValueList_12gOt12PopupConditions"
              :popup-query-method="viy2ValueList_12gOt12PopupQueryMethod"
              @select="viy2ValueList_12gOt12Select"
            >
              <template #asideHeader>
                <VueRow
                  id="viy2Row_85fdp3"
                  ref="viy2Row_85fdp3"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_85fdpe" ref="viy2Text_85fdpe" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                      Select Model
                    </VueText>
                  </VueCol>
                  <VueCol
                    item-key="item"
                    align="right"
                    :inline="true"
                    class="aside-title-button"
                    :md="{ span: 17 }"
                  >
                    <VueButton id="viy2Button_85fdpf" ref="viy2Button_85fdpf" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
          <VueFormItem
            label="Frame No"
            prop="frameNo"
          >
            <VueInput
              id="viy2InputBox_854Ggy"
              ref="viy2InputBox_854Ggy"
              v-model="queryFormData.frameNo"
              :readonly="true"
              :style="{ width: '150px' }"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VuePanel id="viy2Panel_amUXt6" ref="viy2Panel_amUXt6" v-model="ModelDetailPanelModel" title="Detail" :collapse="true">
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
              <VueButton id="viy2Button_fYw4S" ref="viy2Button_fYw4S" icon-position="left">
                Import
              </VueButton>
              <VueButton id="viy2Button_fSq4q" ref="viy2Button_fSq4q" icon-position="left">
                Export
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="viy2Table_amUXxe" ref="viy2Table_amUXxe" :height="gridHeight" :data="gridDs" :edit-config="viy2Table_amUXxeEditConfig">
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
        <VueSelectionColumn
          align="center"
          width="50px"
          type="checkbox"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxePromotionCdEditRender"
          field="promotionCd"
          show-overflow="tooltip"
          title="Promotion Code"
          width="90px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxePromotionNmEditRender"
          field="promotionNm"
          show-overflow="tooltip"
          title="Promotion Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeProvinceEditRender"
          field="province"
          show-overflow="tooltip"
          title="Province"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeDealerCdEditRender"
          field="dealerCd"
          show-overflow="tooltip"
          title="Dealer Code"
          width="110px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeDealerNmEditRender"
          field="dealerNm"
          show-overflow="tooltip"
          title="Dealer Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxePointCdEditRender"
          field="pointCd"
          show-overflow="tooltip"
          title="Point Code"
          width="60px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxePointNmEditRender"
          field="pointNm"
          show-overflow="tooltip"
          title="Point Name"
          min-width="130px"
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
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeFrameNoEditRender"
          field="frameNo"
          show-overflow="tooltip"
          title="Frame No"
          width="130px"
        />
        <VueInputColumn
          :edit-render="viy2Table_amUXxeErrorInfoEditRender"
          field="errorInfo"
          show-overflow="tooltip"
          title="Error Info"
          width="150px"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
