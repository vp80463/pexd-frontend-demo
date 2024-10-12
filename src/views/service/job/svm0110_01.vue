<script setup>
import { VueMessage, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
defineOptions({
  name: 'svm0110_01',
});
const form = ref();
const viy2Row_GgDWR = ref();
const viy2Button_8d8t = ref();
const viy2Button_4Yo3NY = ref();
const viy2Button_83Yd = ref();
const viy2Flex_DWZrG = ref();
const queryForm = ref();
const viy2Row_6rzpiu = ref();
const viy2InputBox_6rzpiF = ref();
const viy2DateTimePicker_6rzpiS = ref();
const viy2InputBox_ECrym = ref();
const viy2InputBox_ECgmC = ref();
const viy2InputBox_ECk3e = ref();
const viy2InputBox_6rzpg6 = ref();
const viy2InputBox_ECywb = ref();
const viy2Select_nIwvw = ref();
const viy2Select_nGawq = ref();
const viy2InputBox_2szmR = ref();
const viy2InputBox_2t0DL = ref();
const viy2Flex_DWZPP = ref();
const grid = ref();
const viy2Row_6rAEtw = ref();
const formData = reactive({
});
const queryFormData = reactive({
  frameNo: '', pdiDate: '', modelCd: '', modelNm: '', colorNm: '', consumerCd: '', consumerNm: '', pointId: '', mechanicId: '', startTime: '', finishTime: '',
});
const rules = reactive({
  viy2InputBox_6rzpiFRules: [
    {
      required: true,
      message: t('errors.required', [t('label.frameNumber')]),
    },
  ],
  viy2DateTimePicker_6rzpiSRules: [
    {
      required: true,
      message: t('errors.required', [t('label.pdiDate')]),
    },
  ],
  viy2Select_nIwvwRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2Select_nGawqRules: [
    {
      required: true,
      message: t('errors.required', [t('label.mechanic')]),
    },
  ],
  viy2InputBox_2szmRRules: [
    {
      required: true,
      message: t('errors.required', [t('label.operationStartTime')]),
    },
  ],
  viy2InputBox_2t0DLRules: [
    {
      required: true,
      message: t('errors.required', [t('label.operationFinishTime')]),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
  showStatus: 'true',
});
const gridCheckboxConfig = reactive({
  checkField: 'checkFlag',
});
const gridMouseConfig = reactive({
  extension: true,
});
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const confirmDsApi = useApi({
  url: '/service/svm0110/confirm.json',
  method: 'post',
  data: () => {
    queryFormData.tableDataList = grid.value.getTableData().fullData;
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const motorcycleInfoDsApi = useApi({
  url: '/service/svm0110/getMotorcyclyInfoByFrameNo.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data) => {
    queryFormData.modelCd = data.modelCd;
    queryFormData.modelNm = data.modelNm;
    queryFormData.colorNm = data.colorNm;
    queryFormData.productId = data.productId;
    queryFormData.toProductId = data.toProductId;
    queryFormData.serializedProductId = data.serializedProductId;
    queryFormData.consumerId = data.consumerId;
    queryFormData.consumerCd = data.consumerCd;
    queryFormData.consumerNm = data.consumerNm;
  },
  manual: true,
});
const motorcycleInfoDs = motorcycleInfoDsApi.data;
const gridDsApi = useApi({
  url: '/service/svm0110/getItemInfoList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const employeeDsApi = useApi({
  url: '/common/helper/employeeList.json',
  method: 'post',
  data: {},
});
const employeeDs = employeeDsApi.data;
const viy2Button_8d8tClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_4Yo3NYClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Button_83YdClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      confirmDsApi.runAsync();
    }
  });
};
const viy2InputBox_6rzpiFChange = (value) => {
  motorcycleInfoDsApi.runAsync();
};
const viy2Select_nGawqChange = (value, data) => {
  queryFormData.mechanicCd = data.code;
  queryFormData.mechanicNm = data.name;
};
const viy2InputBox_2szmRChange = () => {
  const startTime = queryFormData.startTime.replace(/\D/g, '');
  // 格式化为HH:MM
  if (startTime.length == 0) {
    queryFormData.startTime = '';
  } else if (startTime.length == 1) {
    queryFormData.startTime = `0${startTime}:00`;
  } else if (startTime.length == 2) {
    queryFormData.startTime = `${startTime}:00`;
  } else if (startTime.length == 3) {
    queryFormData.startTime = `${startTime.slice(0, 2)}:${startTime.slice(2, 3)}0`;
  } else if (startTime.length == 4) {
    queryFormData.startTime = `${startTime.slice(0, 2)}:${startTime.slice(2, 4)}`;
  } else {
    queryFormData.startTime = `${startTime.slice(0, 2)}:${startTime.slice(2, 4)}`;
  }
};
const viy2InputBox_2t0DLChange = () => {
  const finishTime = queryFormData.finishTime.replace(/\D/g, '');
  // 格式化为HH:MM
  if (finishTime.length == 0) {
    queryFormData.finishTime = '';
  } else if (finishTime.length == 1) {
    queryFormData.finishTime = `0${finishTime}:00`;
  } else if (finishTime.length == 2) {
    queryFormData.finishTime = `${finishTime}:00`;
  } else if (finishTime.length == 3) {
    queryFormData.finishTime = `${finishTime.slice(0, 2)}:${finishTime.slice(2, 3)}0`;
  } else if (finishTime.length == 4) {
    queryFormData.finishTime = `${finishTime.slice(0, 2)}:${finishTime.slice(2, 4)}`;
  } else {
    queryFormData.finishTime = `${finishTime.slice(0, 2)}:${finishTime.slice(2, 4)}`;
  }
};
const Viy2TableGroupColumn_GaEV5EditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridItemCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridItemNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPdiSettingIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
});
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  gridDs.value.splice(0);
};
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
        <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" type="warning" @click="viy2Button_8d8tClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_4Yo3NY" ref="viy2Button_4Yo3NY" icon-position="left" @click="viy2Button_4Yo3NYClick">
          {{ t('button.retrieve') }}
        </VueButton>
        <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left" type="info" @click="viy2Button_83YdClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_DWZrG"
      ref="viy2Flex_DWZrG"
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
          id="viy2Row_6rzpiu"
          ref="viy2Row_6rzpiu"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.frameNumber')"
              label-width="120PX"
              prop="frameNo"
              :rules="rules.viy2InputBox_6rzpiFRules"
            >
              <VueInput
                id="viy2InputBox_6rzpiF"
                ref="viy2InputBox_6rzpiF"
                v-model="queryFormData.frameNo"
                :clearable="true"
                :style="{ width: '200px' }"
                @change="viy2InputBox_6rzpiFChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.pdiDate')"
              label-width="130PX"
              prop="pdiDate"
              :rules="rules.viy2DateTimePicker_6rzpiSRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_6rzpiS"
                ref="viy2DateTimePicker_6rzpiS"
                v-model="queryFormData.pdiDate"
                type="date"
                :style="{ width: '130px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.model')"
              label-width="120PX"
              prop="modelCd"
            >
              <VueInput
                id="viy2InputBox_ECrym"
                ref="viy2InputBox_ECrym"
                v-model="queryFormData.modelCd"
                :readonly="true"
                class="no-border"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              prop="modelNm"
            >
              <VueInput
                id="viy2InputBox_ECgmC"
                ref="viy2InputBox_ECgmC"
                v-model="queryFormData.modelNm"
                :readonly="true"
                text-align="left"
                class="no-border"
                :style="{ width: '120px' }"
              />
            </VueFormItem>
            <VueFormItem
              prop="colorNm"
            >
              <VueInput
                id="viy2InputBox_ECk3e"
                ref="viy2InputBox_ECk3e"
                v-model="queryFormData.colorNm"
                :readonly="true"
                text-align="left"
                class="no-border"
                :style="{ width: '110px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.consumer')"
              label-width="160PX"
              prop="consumerCd"
            >
              <VueInput
                id="viy2InputBox_6rzpg6"
                ref="viy2InputBox_6rzpg6"
                v-model="queryFormData.consumerCd"
                :readonly="true"
                class="no-border"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
            <VueFormItem
              prop="consumerNm"
            >
              <VueInput
                id="viy2InputBox_ECywb"
                ref="viy2InputBox_ECywb"
                v-model="queryFormData.consumerNm"
                :readonly="true"
                text-align="left"
                class="no-border"
                :style="{ width: '120px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.point')"
              label-width="120px"
              prop="pointId"
              :rules="rules.viy2Select_nIwvwRules"
            >
              <VueSelect
                id="viy2Select_nIwvw"
                ref="viy2Select_nIwvw"
                v-model="queryFormData.pointId"
                :filterable="true"
                :clearable="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.mechanic')"
              prop="mechanicId"
              :rules="rules.viy2Select_nGawqRules"
            >
              <VueSelect
                id="viy2Select_nGawq"
                ref="viy2Select_nGawq"
                v-model="queryFormData.mechanicId"
                :filterable="true"
                :clearable="true"
                :options="employeeDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_nGawqChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.operationStartTime')"
              label-width="160PX"
              prop="startTime"
              :rules="rules.viy2InputBox_2szmRRules"
            >
              <VueInput
                id="viy2InputBox_2szmR"
                ref="viy2InputBox_2szmR"
                v-model="queryFormData.startTime"
                placeholder="HH:MM"
                :maxlength="5"
                :style="{ width: '80px' }"
                @change="viy2InputBox_2szmRChange"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.operationFinishTime')"
              label-width="160PX"
              prop="finishTime"
              :rules="rules.viy2InputBox_2t0DLRules"
            >
              <VueInput
                id="viy2InputBox_2t0DL"
                ref="viy2InputBox_2t0DL"
                v-model="queryFormData.finishTime"
                placeholder="HH:MM"
                :maxlength="5"
                :style="{ width: '80px' }"
                @change="viy2InputBox_2t0DLChange"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_DWZPP"
        ref="viy2Flex_DWZPP"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" :stripe="true" header-align="center" height="100%" :border="true" :show-header="true" :highlight-current-row="true" :show-footer="true" :data="gridDs" :edit-config="gridEditConfig" :checkbox-config="gridCheckboxConfig" :mouse-config="gridMouseConfig">
          <VueRow
            id="viy2Row_6rAEtw"
            ref="viy2Row_6rAEtw"
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
          <VueColgroup
            id="viy2TableGroupColumn_GaEV5"
            ref="viy2TableGroupColumn_GaEV5"
            width="200px"
            :title="t('label.item')"
            header-align="center"
          >
            <VueInputColumn
              :edit-render="gridItemCdEditRender"
              field="itemCd"
              :title="t('label.itemCode')"
              header-align="center"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridItemNmEditRender"
              field="itemNm"
              :title="t('label.itemName')"
              header-align="center"
              width="400px"
            />
          </VueColgroup>
          <VueSelectionColumn
            align="center"
            check-field="checkFlag"
            width="50px"
            header-align="center"
            type="checkbox"
          />
          <VueInputColumn
            :edit-render="gridPdiSettingIdEditRender"
            field="pdiSettingId"
            :visible="false"
            title="Pdi Setting Id"
            width="100px"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
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
