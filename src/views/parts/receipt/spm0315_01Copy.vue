<script setup>
import { IconDelete, IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
// import { YES_NO_FLAG, LocationType } from "@/constants/pj-constants.js";
// import {formatQty, formatCodeInput, formatPartNo } from '@/pj-commonutils.js';
// import { useUser } from 'viy-menu';
// const uc = useUser().userInfo;
// import { find } from 'lodash-es';
// const confirmFlg = ref(true);
// //侧边栏参数
// const asideParams = ref();
// const gridHeight = ref();
// const flagOpts = reactive([
// { label: 'Y', value: 'Y', },
// { label: 'N', value: 'N', },
// ]);
defineOptions({
  name: 'spm0315_01Copy',
});
const form = ref();
const viy2Row_10QMyC = ref();
const reset = ref();
const viy2Button_7yhE5U = ref();
const viy2Button_7yh3oU = ref();
const viy2Flex_KFlYi = ref();
const queryForm = ref();
const viy2Row_3mqzSt = ref();
const viy2Select_1rPSyEH = ref();
const receiptNo = ref();
const viy2Flex_KFwYM = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Button_hHs2g = ref();
const viy2CheckBox_a7aDyp = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', receiptNo: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  receiptNoRules: [
    {
      required: true,
      message: t('errors.required', [t('label.receiptNumber')]),
    },
  ],
});
const gridRules = {
  location: [
    {
      required: true,
      message: t('errors.required', [t('label.location')]),
    },
  ],
};
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_a7aDypOpts = [
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
];
const gridViy2TableButtonColumn_1LV4PButtons = (scope) => {
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
  url: '/parts/spm0315/getPartsStockRegisterList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (data && data.length > 0) {
      confirmFlg.value = false;
    } else {
      confirmFlg.value = true;
    }
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0315/confirmPartsStockRegister.json',
  method: 'post',
  data: () => {
    return {
      gridDataList: grid.value.getTableData().fullData,
      pointId: queryFormData.pointId,
    };
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDs.value.splice(0);
    gridDsApi.runAsync();
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const resetClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_7yhE5UClick = () => {
  doRetrieve();
};
const viy2Button_7yh3oUClick = () => {
  doConfirm();
};
const gridLineNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCaseNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  if (row.cellValue) {
    return formatPartNo(row.cellValue);
  }
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridReceiptedQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridReceiptedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridLocationEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const viy2Button_hHs2gClick = () => {
  iconSearchClick();
};
const gridLocationTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMainLocationSignEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInstructionQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridInstructionQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRegisterQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridRegisterQtyEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {
      min: 0,
      textAlign: 'right',
    },
  };
});
const gridCopy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
// onMounted(() => {
// queryFormData.pointId = uc.defaultPointId;
// })
// watch (
// () => queryFormData, (newVal, oldVal) => {
// resetTblResults();
// },{ deep: true }
// );
// const resetCondition = () => {
// // 清空表单元素
// queryForm.value.resetFields();
// for (let key in queryFormData) {
// queryFormData[key] = "";
// }
// resetTblResults();
// queryFormData.pointId = uc.defaultPointId;
// }
// const resetTblResults = () => {
// gridDs.value.splice(0);
// confirmFlg.value = true;
// }
// const doRetrieve = () => {
// queryForm.value.validate((valid) => {
// if (valid) {
// gridDsApi.runAsync();
// }
// })
// }
// const doConfirm = async () => {
// const err = await grid.value.validate(true);
// if (err) {
// return;
// } else {
// confirmDsApi.runAsync();
// }
// }
// const onDelRow = (row) => {
// grid.value.remove(row);
// let data = grid.value.getTableData().fullData;
// if (Array.isArray(data) && data.length === 0) {
// confirmFlg.value = true;
// } else {
// confirmFlg.value = false;
// }
// }
// const iconSearchClick = () => {
// showLocationWin.value = true;
// let point = getPointLabel(queryFormData.pointId);
// let pointid = queryFormData.pointId;
// let flag = YES_NO_FLAG.NO;
// let locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL,
// LocationType.SERVICE, LocationType.FROZEN];
// asideParams.value = {
// "flag":flag,
// "point": point,
// "pointId": pointid,
// 'locationTypeList':locationTypeList
// }
// }
// //location侧边栏选择后
// const callbkSelectLocation = (param) => {
// let row = grid.value.getCurrentRecord();
// row.location = param.locationNo;
// row.locationId = param.locationId;
// row.binTypeId = param.binTypeId;
// row.locationType = param.locationTypeCode;
// row.locationTypeId = param.locationTypeCd;
// //当Main Location Sign <> 'Y', 且location.location_type = S006NORMAL时可编辑;
// if (row.mainLocationSign !== YES_NO_FLAG.YES && row.locationTypeId === LocationType.NORMAL) {
// row.setAsMainLocationFlg = false;
// } else {
// row.setAsMainLocationFlg = true;
// }
// showLocationWin.value = false;
// }
// const closeLocationAside = () => {
// showLocationWin.value = false;
// }
// const getLocationValue = (row) => {
// if (!row.location) {
// row.locationId = '';
// row.binTypeId = '';
// row.locationType = '';
// row.locationTypeId = '';
// return;
// }
// locationDsApi(row).runAsync();
// }
// const locationDsApi = (row) => useApi(
// {
// url: '/common/valuelist/locationValueList.json',
// method: 'post',
// data: () => {
// return {
// arg0: YES_NO_FLAG.NO,
// pointId: queryFormData.pointId,
// locationCd: row.location,
// locationTypeList: [LocationType.TENTATIVE, LocationType.NORMAL,
// LocationType.SERVICE, LocationType.FROZEN]
// }
// },
// timeout: 30000
// },
// {
// onSuccess: (data, params) => {
// if (data.length > 0) {
// row.locationId = data[0].locationId;
// row.binTypeId = data[0].binTypeId;
// row.locationType = data[0].locationTypeCode;
// row.locationTypeId = data[0].locationTypeCd;
// //当Main Location Sign <> 'Y', 且location.location_type = S006NORMAL时可编辑;
// if (row.mainLocationSign !== YES_NO_FLAG.YES && row.locationTypeId === LocationType.NORMAL) {
// row.setAsMainLocationFlg = false;
// } else {
// row.setAsMainLocationFlg = true;
// }
// }
// }
// },
// )
// const getPointLabel = (pointId) => {
// const item = find(pointDs.value, { id: pointId });
// return item ? item.desc : null;
// }
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
        <VueButton id="reset" ref="reset" icon-position="left" type="warning" @click="resetClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_7yhE5U" ref="viy2Button_7yhE5U" icon-position="left" @click="viy2Button_7yhE5UClick">
          {{ t('button.retrieve') }}
        </VueButton>
        <VueButton id="viy2Button_7yh3oU" ref="viy2Button_7yh3oU" icon-position="left" type="info" :disabled="confirmFlg" @click="viy2Button_7yh3oUClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_KFlYi"
      ref="viy2Flex_KFlYi"
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
          id="viy2Row_3mqzSt"
          ref="viy2Row_3mqzSt"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.point')"
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
            <VueFormItem
              :label="t('label.receiptNumber')"
              prop="receiptNo"
              :rules="rules.receiptNoRules"
            >
              <VueInput
                id="receiptNo"
                ref="receiptNo"
                v-model="queryFormData.receiptNo"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_KFwYM"
        ref="viy2Flex_KFwYM"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
          <VueInputColumn
            :edit-render="gridLineNoEditRender"
            field="lineNo"
            :title="t('label.lineNumber')"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridCaseNoEditRender"
            field="caseNo"
            :title="t('label.caseNumber')"
            width="100px"
          />
          <VueInputColumn
            :formatter="gridPartsNoFormatter"
            :edit-render="gridPartsNoEditRender"
            field="partsNo"
            :title="t('label.partsNumber')"
            width="130px"
          />
          <VueNumberColumn
            :formatter="gridReceiptedQtyFormatter"
            :edit-render="gridReceiptedQtyEditRender"
            field="receiptedQty"
            align="right"
            :title="t('label.receiptedQuantity')"
            width="130px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridLocationEditRender"
            field="location"
            :resizable="true"
            show-overflow="tooltip"
            :title="t('label.location')"
            width="200px"
          >
            <template #append="scope">
              <VueButton id="viy2Button_hHs2g" ref="viy2Button_hHs2g" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_hHs2gClick" />
            </template>
          </VueInputColumn>
          <VueInputColumn
            :edit-render="gridLocationTypeEditRender"
            field="locationType"
            :title="t('label.locationType')"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridMainLocationSignEditRender"
            field="mainLocationSign"
            :title="t('label.mainLocationSign')"
            width="160px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridInstructionQtyFormatter"
            :edit-render="gridInstructionQtyEditRender"
            field="instructionQty"
            :title="t('label.instructQuantity')"
            width="140px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridRegisterQtyFormatter"
            :edit-render="gridRegisterQtyEditRender"
            field="registerQty"
            align="right"
            show-overflow="tooltip"
            :min="0"
            :title="t('label.registerQty')"
            width="140px"
            header-align="center"
          />
          <VueTemplateColumn
            :edit-render="gridCopy0_copy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
            align="center"
            aggregate-label="Total"
            :title="t('label.setAsMainLocation')"
            width="170px"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_a7aDyp"
                ref="viy2CheckBox_a7aDyp"
                v-model="scope.row.setAsMainLocation"
                :disabled="scope.row.setAsMainLocationFlg"
                true-label="Y"
                false-label="N"
              />
            </template>
          </VueTemplateColumn>
          <VueButtonColumn
            align="center"
            width="60px"
            :buttons="gridViy2TableButtonColumn_1LV4PButtons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
