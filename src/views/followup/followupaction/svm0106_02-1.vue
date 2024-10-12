<script setup>
import { IconCloseBold, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import {
  point_column, point_pop_condition, point_pop_query_method, point_query_method,
} from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
const checkedCoupon = ref([1, 4, 6]);
defineOptions({
  name: 'svm0106_02-1',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_83Yd = ref();
const viy2Button_4mhNO8 = ref();
const viy2Button_4mhK3o = ref();
const viy2Panel_2rs6nZ = ref();
const viy2Row_4oxNRI = ref();
const viy2ValueList_12gOt1 = ref();
const viy2Row_4ntKxd = ref();
const viy2Button_4ntKyx = ref();
const viy2InputBox_3b5mPM = ref();
const viy2InputBox_4n9gAe = ref();
const viy2InputBox_4n9kOw = ref();
const viy2InputBox_4n9Xcw = ref();
const viy2InputBox_4n9VY4 = ref();
const viy2CheckBox_6fbQP = ref();
const viy2Radio_h96kC = ref();
const viy2Textarea_12pDei = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_4oycD1 = ref();
const viy2Button_ARtwE = ref();
const viy2Table_4oycEb = ref();
const viy2Row_4oycFl = ref();
const freeCouponAside = ref();
const titler2ow = ref();
const viy2Button_5uiM3 = ref();
const viy2Form_k49sf = ref();
const viy2Row_5uELU = ref();
const viy2CheckBox_5uELV = ref();
const formData = reactive({
  pointvl: '2560B Long Thanh Da1 3', subject: '', type: 'Bảo trì định kỳ', consumer: 'TRƯƠNG QUỐC CƯỜNG', phone: '0933112170', pic: 'SYSTEM ADMINSP', refuseCall: false, remindCallReceived: 'Y', description: 'Phiếu số 5,Nhắc nhở trước thời hạn',
});
const viy2Form_k49sfData = reactive({
  freeCouponResult: [],
});
const rules = reactive({
  viy2ValueList_12gOt1Rules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_3b5mPMRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showFreeCouponWin = ref(false);
const viy2ValueList_12gOt1PopoverQueryMethod = point_query_method;
const viy2ValueList_12gOt1PopupColumns = ref(point_column);
const viy2ValueList_12gOt1PopupQueryMethod = point_pop_query_method;
const viy2CheckBox_6fbQPOpts = [
  {
    label:
'Option 3',
    value:
'Option 3',
  },
];
const viy2Radio_h96kCOpts = reactive([
  { value: 'Y', label: 'Y' },
  { value: 'N', label: 'N' },
]);
const viy2Table_4oycEbEditConfig = reactive({
  trigger: 'click',
});
const freeCouponResultDsApi = useApi({
  method: 'post',
  localData: [
    { value: 1, label: 'First FSC', disabled: true },
    { value: 2, label: 'Second FSC', disabled: true },
    { value: 3, label: 'Third FSC', disabled: true },
    { value: 4, label: 'Fourth FSC', disabled: true },
    { value: 5, label: 'Fifth FSC', disabled: true },
    { value: 6, label: 'Sixth FSC', disabled: true },
    { value: 7, label: 'Seventh FSC', disabled: false },
    { value: 8, label: 'Eighth FSC', disabled: false },
    { value: 9, label: 'Nith FSC', disabled: false },
  ],
});
const freeCouponResultDs = freeCouponResultDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      date: '20240418',
      pic: 'SYSTEM ADMIN',
      subject: '1',
    },
  ],
});
const gridDs = gridDsApi.data;
const viy2ValueList_12gOt1Select = (params) => {
  conditionFormData.pointvl = `${params.code} ${params.name}`;
};
const viy2ValueList_12gOt1PopoverColumns = computed(() => {
  return point_column;
});
const viy2ValueList_12gOt1PopupConditions = computed(() => {
  return point_pop_condition;
});
const viy2Button_ARtwEClick = () => {
  showFreeCouponWin.value = true;
};
const viy2Table_4oycEbDateEditRender = computed(() => {
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
const viy2Table_4oycEbPicEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Table_4oycEbSubjectEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_5uiM3Click = () => {
  showFreeCouponWin.value = false;
};
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
viy2Form_k49sfData.freeCouponResult = checkedCoupon;
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_GgDWR"
      ref="viy2Row_GgDWR"
      :gutter="15"
      class="fixed-button-area"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" type="warning">
          Reset
        </VueButton>
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left">
          Back
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_4mhNO8" ref="viy2Button_4mhNO8" icon-position="left" type="info">
          Confirm
        </VueButton>
        <VueButton id="viy2Button_4mhK3o" ref="viy2Button_4mhK3o" icon-position="left">
          Reservation
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="Header" class="margin-top-div except-height-css">
      <VueRow
        id="viy2Row_4oxNRI"
        ref="viy2Row_4oxNRI"
      >
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="Point"
            prop="pointvl"
            :rules="rules.viy2ValueList_12gOt1Rules"
          >
            <VueValueList
              id="viy2ValueList_12gOt1"
              ref="viy2ValueList_12gOt1"
              :style="{ width: '250px' }"
              v-model="formData.pointvl"
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
                  id="viy2Row_4ntKxd"
                  ref="viy2Row_4ntKxd"
                  class="aside-title-row"
                >
                  <VueCol
                    item-key="item"
                    class="aside-title-text"
                    :md="{ span: 7 }"
                  >
                    <VueText id="viy2Text_4ntKxS" ref="viy2Text_4ntKxS" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                    <VueButton id="viy2Button_4ntKyx" ref="viy2Button_4ntKyx" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
                  </VueCol>
                </VueRow>
              </template>
            </VueValueList>
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="Subject"
            prop="subject"
            :rules="rules.viy2InputBox_3b5mPMRules"
          >
            <VueInput
              id="viy2InputBox_3b5mPM"
              ref="viy2InputBox_3b5mPM"
              v-model="formData.subject"
              :clearable="true"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="Remind Type"
            prop="type"
          >
            <VueInput
              id="viy2InputBox_4n9gAe"
              ref="viy2InputBox_4n9gAe"
              v-model="formData.type"
              :clearable="true"
              :readonly="true"
              :disabled="true"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="Consumer"
            prop="consumer"
          >
            <VueInput
              id="viy2InputBox_4n9kOw"
              ref="viy2InputBox_4n9kOw"
              v-model="formData.consumer"
              :clearable="true"
              :readonly="true"
              class="no-border"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="Mobile Phone"
            prop="phone"
          >
            <VueInput
              id="viy2InputBox_4n9Xcw"
              ref="viy2InputBox_4n9Xcw"
              v-model="formData.phone"
              :clearable="true"
              :readonly="true"
              class="no-border"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="P.I.C"
            prop="pic"
          >
            <VueInput
              id="viy2InputBox_4n9VY4"
              ref="viy2InputBox_4n9VY4"
              v-model="formData.pic"
              :clearable="true"
              :readonly="true"
              class="no-border"
              :style="{ width: '200px' }"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="Refuse Call"
            prop="refuseCall"
          >
            <VueCheckbox
              id="viy2CheckBox_6fbQP"
              ref="viy2CheckBox_6fbQP"
              v-model="formData.refuseCall"
              true-label="Y"
              false-label="N"
            />
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 6 }"
        >
          <VueFormItem
            label="Remind Call Received"
            label-width="155px"
            prop="remindCallReceived"
          >
            <VueRadioGroup
              id="viy2Radio_h96kC"
              ref="viy2Radio_h96kC"
              v-model="formData.remindCallReceived"
            >
              <VueRadio
                v-for="option in viy2Radio_h96kCOpts"
                :key="option.value"
                :label="option.value"
              >
                {{ option.label }}
              </VueRadio>
            </VueRadioGroup>
          </VueFormItem>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 24 }"
        >
          <VueFormItem
            label="Description"
            prop="description"
          >
            <VueInput
              id="viy2Textarea_12pDei"
              ref="viy2Textarea_12pDei"
              v-model="formData.description"
              type="textarea"
              :style="{ width: '600px' }"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VuePanel>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" title="Detail" :collapse="true">
      <template #header>
        <div style="width: 400px">
          <VueRow
            v-show="detailPanelModel"
            id="viy2Row_4oycD1"
            ref="viy2Row_4oycD1"
          >
            <VueCol
              item-key="item"
              align="right"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_ARtwE" ref="viy2Button_ARtwE" icon-position="left" @click="viy2Button_ARtwEClick">
                Free Coupon Condition
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="viy2Table_4oycEb" ref="viy2Table_4oycEb" :height="gridHeight - 40" :show-footer="true" :data="gridDs" :edit-config="viy2Table_4oycEbEditConfig">
        <VueRow
          id="viy2Row_4oycFl"
          ref="viy2Row_4oycFl"
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
        <VueDateTimeColumn
          :edit-render="viy2Table_4oycEbDateEditRender"
          field="date"
          align="center"
          title="Date"
          width="120px"
        />
        <VueInputColumn
          :edit-render="viy2Table_4oycEbPicEditRender"
          field="pic"
          title="P.I.C"
          width="150px"
        />
        <VueInputColumn
          :edit-render="viy2Table_4oycEbSubjectEditRender"
          field="subject"
          title="Subject"
          width="150px"
        />
      </VueTable>
    </VuePanel>
    <VueAside
      id="freeCouponAside"
      ref="freeCouponAside"
      v-model="showFreeCouponWin"
      :modal="true"
      :with-header="false"
      :show-close="false"
      size="40%"
    />
  </VueForm>
</template>

<style type="text/css" scoped>
.rotate-icon {
transform: rotate(90deg);
font-size: large;
align-self: center;
}
.row-margin-top {
margin-top: 10px;
}
</style>
