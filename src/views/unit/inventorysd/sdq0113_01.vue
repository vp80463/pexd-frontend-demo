<script setup>
import { IconDocumentCopy, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT } from '@/constants';
import { formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const router = useRouter();
defineOptions({
  name: 'sdq0113_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_ab3PDC = ref();
const viy2Button_ab3W9O = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_YcIK6 = ref();
const queryForm = ref();
const viy2Row_6IAt6a = ref();
const viy2Select_1rPSyEH = ref();
const viy2InputBox_qHSXrO = ref();
const viy2DateTimePicker_Ygvbg = ref();
const viy2Flex_YcMdP = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  pointId: '', model: '', modelYear: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
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
      icon: IconDocumentCopy,
      click: onDetailWin,
      title: 'Detail',
    },
  ];
};
const gridDsApi = useApi({
  url: '/unit/sdq0113/findStockInformationInquiry.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
});
const gridDs = gridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
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
const viy2Button_ab3PDCClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      exportByModelBtn();
    }
  });
};
const viy2Button_ab3W9OClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      exportByMotorcycleBtn();
    }
  });
};
const viy2Button_5FbWKcClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  onDetailWin(row);
};
const gridPointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelYearEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'y',
      format: CONST_SYSTEM_DATE_FORMAT.y,
    },
  };
});
const gridColorNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridInTransitQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridInTransitQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAvailableQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridAvailableQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridAllocatedQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridOnTransferInQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridOnTransferInQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
onMounted(() => {
  queryFormData.pointId = uc.defaultPointId;
});
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  queryFormData.pointId = uc.defaultPointId;
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
};
const exportByModelBtn = () => {
  useApi(
    {
      url: '/unit/sdq0113/findStockInfoInquiryExport.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return queryFormData;
      },
      timeout: 500000,
    },
    {
      onSuccess: (data, params) => {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Stock Information Inquiry(By Model).xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  );
};
const exportByMotorcycleBtn = () => {
  useApi(
    {
      url: '/unit/sdq0113/findExportByMotorcycle.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return queryFormData;
      },
      timeout: 500000,
    },
    {
      onSuccess: (data, params) => {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Stock Information Inquiry(By Motorcycle).xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  );
};
const onDetailWin = (selectedRow) => {
  const data = {
    point: `${selectedRow.pointCd} ${selectRow.pointNm}`,
    model: `${selectedRow.modelCd} ${selectRow.modelNm}`,
    colorNm: selectedRow.colorNm,
    pointId: selectedRow.pointId,
    modelId: selectedRow.modelId,
  };
  useMultiTags().openTag({
    name: 'sdq0113_02', // 路由名称
  });
  // Update the meta title of the tag if it exists.
  useMultiTags().getTag({ name: 'sdq0113_02' }).meta.title = t('title.stockInformationInquiryDetail_02', data);
  // Use Vue Router to navigate to the specified route and pass the data parameters
  router.push({ name: 'sdq0113_02', data });
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
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_2gh3Ey" ref="viy2Button_2gh3Ey" icon-position="left" type="warning" @click="viy2Button_2gh3EyClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="viy2Button_ab3PDC" ref="viy2Button_ab3PDC" icon-position="left" @click="viy2Button_ab3PDCClick">
          {{ t('button.exportByModel') }}
        </VueButton>
        <VueButton id="viy2Button_ab3W9O" ref="viy2Button_ab3W9O" icon-position="left" @click="viy2Button_ab3W9OClick">
          {{ t('button.exportByMotorcycle') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5FbWKc" ref="viy2Button_5FbWKc" icon-position="left" type="info" @click="viy2Button_5FbWKcClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_YcIK6"
      ref="viy2Flex_YcIK6"
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
          id="viy2Row_6IAt6a"
          ref="viy2Row_6IAt6a"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
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
              :label="t('label.model')"
              prop="model"
            >
              <VueInput
                id="viy2InputBox_qHSXrO"
                ref="viy2InputBox_qHSXrO"
                v-model="queryFormData.model"
                :clearable="true"
                :style="{ width: '250px' }"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.modelYear')"
              prop="modelYear"
            >
              <VueDatePicker
                id="viy2DateTimePicker_Ygvbg"
                ref="viy2DateTimePicker_Ygvbg"
                v-model="queryFormData.modelYear"
                type="date"
                :style="{ width: '80px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.y"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.y"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_YcMdP"
        ref="viy2Flex_YcMdP"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="100%" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
            :edit-render="gridPointCdEditRender"
            field="pointCd"
            show-overflow="tooltip"
            :sortable="true"
            fixed="left"
            :title="t('label.point')"
            width="100px"
          />
          <VueInputColumn
            :edit-render="gridModelCdEditRender"
            field="modelCd"
            show-overflow="tooltip"
            :sortable="true"
            fixed="left"
            :title="t('label.modelCode')"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridModelNmEditRender"
            field="modelNm"
            show-overflow="tooltip"
            :sortable="true"
            fixed="left"
            :title="t('label.modelName')"
            min-width="150px"
          />
          <VueDateTimeColumn
            :edit-render="gridModelYearEditRender"
            field="modelYear"
            align="center"
            :sortable="true"
            :title="t('label.modelYear')"
          />
          <VueInputColumn
            :edit-render="gridColorNmEditRender"
            field="colorNm"
            show-overflow="tooltip"
            :sortable="true"
            :aggregate-label="t('label.total')"
            :title="t('label.colorName')"
            width="150px"
          />
          <VueNumberColumn
            :formatter="gridInTransitQtyFormatter"
            :edit-render="gridInTransitQtyEditRender"
            field="inTransitQty"
            align="right"
            aggregate="sum"
            :sortable="true"
            :title="t('label.inTransitQuantity')"
            width="130px"
          />
          <VueNumberColumn
            :formatter="gridAvailableQtyFormatter"
            :edit-render="gridAvailableQtyEditRender"
            field="availableQty"
            align="right"
            aggregate="sum"
            :sortable="true"
            :title="t('label.availableQty')"
            width="130px"
          />
          <VueNumberColumn
            :formatter="gridAllocatedQtyFormatter"
            :edit-render="gridAllocatedQtyEditRender"
            field="allocatedQty"
            align="right"
            aggregate="sum"
            :sortable="true"
            :title="t('label.allocatedQuantity')"
            width="130px"
          />
          <VueNumberColumn
            :formatter="gridOnTransferInQtyFormatter"
            :edit-render="gridOnTransferInQtyEditRender"
            field="onTransferInQty"
            align="right"
            aggregate="sum"
            :sortable="true"
            :title="t('label.onTransferInQuantity')"
            width="140px"
          />
          <VueButtonColumn
            fixed="right"
            width="40px"
            :buttons="gridViy2TableButtonColumn_odGQQButtons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
