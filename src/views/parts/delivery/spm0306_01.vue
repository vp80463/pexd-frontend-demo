<script setup>
import { IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { find } from 'lodash-es';
import { useApi } from '@/composables/useApi';
import { parts_column, parts_pop_column } from '@/settings/valuelistSetting.js';
import { YES_NO_FLAG } from '@/constants/pj-constants.js';
import { formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const partsUrl = '/common/valuelist/partsList.json';
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const confirmFlg = ref(true);
defineOptions({
  name: 'spm0306_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const confirmBtn = ref();
const viy2Button_4Ahpgm = ref();
const viy2Flex_TBsXB = ref();
const queryForm = ref();
const viy2Row_3Rpc6 = ref();
const fromPoint = ref();
const toPointId = ref();
const viy2Flex_TBtsg = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_GIcwB = ref();
const viy2Button_yazi1 = ref();
const grid = ref();
const viy2Row_8XsIc8 = ref();
const formData = reactive({
});
const queryFormData = reactive({
  fromPointId: '', toPointId: '',
});
const rules = reactive({
  fromPointRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  toPointIdRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const gridRules = {
  partsNo: [
    {
      required: true,
      message: t('errors.required', [t('label.partsNumber')]),
    },
  ],
  transferQty: [
    {
      required: true,
      message: t('errors.required', [t('label.transferQuantity')]),
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
const gridViy2TableButtonColumn_GI1LvButtons = (scope) => {
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
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
});
const brandDs = brandDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const emptyDsApi = useApi({
  method: 'post',
  localData: { total: 0, list: [] },
});
const emptyDs = emptyDsApi.data;
const partsDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
}, {
  manual: true,
});
const partsDs = partsDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
});
const largeGroupDs = largeGroupDsApi.data;
const printDsApi = useApi({
  url: '/common/report/printPartsPickingListByOrderReport.json',
  method: 'post',
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      VueUtil.saveAs(data, 'PartsPickingList(ByOrder).pdf');
    }
  },
  manual: true,
});
const printDs = printDsApi.data;
const confirmDsApi = useApi({
  url: '/parts/spm0306/confirmInstruction.json',
  method: 'post',
  data: () => {
    return {
      gridList: grid.value.getTableData().fullData,
      fromPointId: queryFormData.fromPointId,
      toPointId: queryFormData.toPointId,
      fromPoint: getPointLabel(queryFormData.fromPointId),
      toPoint: getPointLabel(queryFormData.toPointId),
    };
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data) {
      VueMessage.success(t('ymc-commons.P.00005'));
      resetTblResults();
      printDsApi.runAsync({
        deliveryOrderId: data,
      });
    }
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const confirmBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_4AhpgmClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      doConfirm();
    }
  });
};
const viy2Button_yazi1Click = () => {
  onAddRow();
};
const gridPartsNoSelect = (obj, params) => {
  const row = obj.row;
  setPartsRow(row, params);
};
const gridPartsNoClear = (obj) => {
  const row = obj.row;
  clearPartsRow(row);
};
const gridPartsNoLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    const row = obj.row;
    clearPartsRow(row);
    if (params.currentValue) {
      partsDsInputApi(row, params.currentValue);
    }
  }
};
const gridPartsNoEvents = reactive({
  select: gridPartsNoSelect,
  clear: gridPartsNoClear,
  leave: gridPartsNoLeave,
});
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: true,
    events: gridPartsNoEvents,
    attrs: {
      selectField: 'codeFmt',
      usePopover: true,
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      popoverColumns: parts_column,
      popoverQueryMethod: ({ value, pageParams }) => {
        if (value) {
          return request(partsUrl, {
            data: {
              content: value,
              autoFillFlag: YES_NO_FLAG.YES,
              facilityId: queryFormData.fromPointId,
              pageSize: pageParams.pageSize,
              currentPage: pageParams.currentPage,
            },
            method: 'post',
          });
        } else {
          return emptyDsApi.runAsync();
        }
      },
      togglePopoverOnClick: false,
      usePopup: true,
      asideSize: '60%',
      useCommonPopup: true,
      popupColumns: parts_pop_column,
      popupConditions: [
        { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' } },
        { compType: 'VueSelect', field: 'batteryFlag', label: t('label.batteryFlag'), options: flagOpts, clearable: true, style: { width: '100px' } },
        { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '200px' } },
        { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), options: largeGroupDs.value, clearable: true, props: { checkStrictly: true }, style: { width: '150px' } },
      ],
      popupQueryMethod: ({ code, batteryFlag, brandId, prodCtg, pageParams }) => {
        return request(partsUrl, {
          data: {
            code,
            batteryFlag,
            brandId,
            prodCtg,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage,
            autoFillFlag: YES_NO_FLAG.YES,
            facilityId: queryFormData.fromPointId,
          },
          method: 'post',
        });
      },
      closeOnClickModal: true,
    },
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOnHandQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnHandQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridTransferQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridTransferQtyEditRender = computed(() => {
  return {
    enabled: true,
    defaultValue: '0',
    attrs: {
      min: 0,
      precision: 0,
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  queryFormData.fromPointId = uc.defaultPointId;
});
watch (
  () => queryFormData, (newVal, oldVal) => {
    resetTblResults();
  }, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  for (const key in queryFormData) {
    queryFormData[key] = '';
  }
  resetTblResults();
  queryFormData.fromPointId = uc.defaultPointId;
};
const resetTblResults = () => {
  grid.value.clearData();
  grid.value.remove();
  confirmFlg.value = true;
};
const onAddRow = () => {
  const $table = grid.value;
  if ($table) {
    const record = {};
    $table.insertAt(record, -1).then((newRow) => {
      $table.setCurrentRow(newRow.row);
    });
  }
  confirmFlgChg();
};
const onDelRow = (row) => {
  grid.value.remove(row);
  confirmFlgChg();
};
const doConfirm = async () => {
  const table = grid.value;
  const err = await table.validate(true);
  if (err) {

  } else {
    confirmDsApi.runAsync();
  }
};
const confirmFlgChg = () => {
  const data = grid.value.getTableData().fullData;
  if (data && data.length > 0) {
    confirmFlg.value = false;
  } else {
    confirmFlg.value = true;
  }
};
const clearPartsRow = (row) => {
  row.partsId = null;
  row.partsNm = null;
  row.onHandQty = null;
  row.stdPrice = null;
  row.taxRate = null;
};
const setPartsRow = (row, params) => {
  row.partsId = params.id;
  row.partsNm = params.name;
  row.onHandQty = params.onHandQty;
  row.stdPrice = params.stdRetailPrice;
  row.taxRate = params.taxRate;
};
const getPartsByInput = (row, value) => {
  partsDsInputApi(row, value).runAsync();
};
const partsDsInputApi = (row, value) => useApi(
  {
    url: '/common/valuelist/partsList.json',
    method: 'post',
    data: () => {
      return {
        partsCd: value,
        autoFillFlag: YES_NO_FLAG.YES,
        facilityId: queryFormData.fromPointId,
        pageSize: 1,
        currentPage: 1,
      };
    },
  },
  {
    onSuccess: (data, params) => {
      if (data && data.total === 1) {
        const res = data.list[0];
        setPartsRow(row, res);
      } else {
        clearPartsRow(row);
      }
    },
  },
);
const getPointLabel = (pointId) => {
  const item = find(pointDs.value, { id: pointId });
  return item ? item.desc : null;
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
        <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="warning" @click="confirmBtnClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_4Ahpgm" ref="viy2Button_4Ahpgm" icon-position="left" type="info" :disabled="confirmFlg" @click="viy2Button_4AhpgmClick">
          {{ t('button.confirm') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_TBsXB"
      ref="viy2Flex_TBsXB"
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
          id="viy2Row_3Rpc6"
          ref="viy2Row_3Rpc6"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              :label="t('label.fromPoint')"
              prop="fromPointId"
              :rules="rules.fromPointRules"
            >
              <VueSelect
                id="fromPoint"
                ref="fromPoint"
                v-model="queryFormData.fromPointId"
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
              :label="t('label.toPoint')"
              prop="toPointId"
              :rules="rules.toPointIdRules"
            >
              <VueSelect
                id="toPointId"
                ref="toPointId"
                v-model="queryFormData.toPointId"
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
      </VueForm>
      <VueFlex
        id="viy2Flex_TBtsg"
        ref="viy2Flex_TBtsg"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" :title="t('label.detail')" height="100%">
          <template #header>
            <div style="width: 400px">
              <VueRow
                id="viy2Row_GIcwB"
                ref="viy2Row_GIcwB"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_yazi1" ref="viy2Button_yazi1" icon-position="left" class="icon-button-width" @click="viy2Button_yazi1Click">
                    +
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="auto" :show-footer="true" :data="gridDs" :edit-rules="gridRules" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueRow
              id="viy2Row_8XsIc8"
              ref="viy2Row_8XsIc8"
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
            <VueValueListColumn
              :edit-render="gridPartsNoEditRender"
              field="partsNo"
              :toggle-popover-on-click="false"
              :title="t('label.partsNumber')"
              width="250px"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              :title="t('label.partsName')"
              width="200px"
            />
            <VueNumberColumn
              :formatter="gridOnHandQtyFormatter"
              :edit-render="gridOnHandQtyEditRender"
              field="onHandQty"
              align="right"
              :title="t('label.onHandQuantity')"
              width="150px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridTransferQtyFormatter"
              :edit-render="gridTransferQtyEditRender"
              field="transferQty"
              align="right"
              :min="0"
              :precision="0"
              :title="t('label.transferQuantity')"
              width="150px"
              header-align="center"
            />
            <VueButtonColumn
              align="center"
              width="60px"
              :buttons="gridViy2TableButtonColumn_GI1LvButtons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
