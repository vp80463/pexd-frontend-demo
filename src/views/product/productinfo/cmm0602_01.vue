<script setup>
import { IconCloseBold, IconEdit, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
import { package_column, package_query_method } from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const exportDisabledFlag = ref(true);
// 获取系统日期
const validDate = dayjs().format('YYYYMMDD');
const router = useRouter();
defineOptions({
  name: 'cmm0602_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const exportBtn = ref();
const newBtn = ref();
const retrieveBtn = ref();
const viy2Flex_Vovl6 = ref();
const queryForm = ref();
const viy2Row_9fXwUu = ref();
const viy2ValueList_9fXwUv = ref();
const viy2Row_9fXwUH = ref();
const viy2Button_9fXwUG = ref();
const viy2DateTimePicker_9fXwUL = ref();
const viy2Select_9fXwUM = ref();
const viy2Flex_VovMQ = ref();
const grid = ref();
const viy2Row_9fYgbL = ref();
const formData = reactive({
});
const queryFormData = reactive({
  packageNo: '', validDate: '', productCategoryId: '',
});
const rules = reactive({
  viy2DateTimePicker_9fXwULRules: [
    {
      required: true,
      message: t('errors.required', [t('label.validDate')]),
    },
  ],
});
const viy2ValueList_9fXwUvPopoverQueryMethod = package_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_ngQpnButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: viewDetail,
      title: 'Detail',
    },
  ];
};
const productCategoryDsApi = useApi({
  url: '/common/helper/getProductCategoryList.json',
  method: 'post',
  data: {
    arg0: 'S001GOODS',
  },
});
const productCategoryDs = productCategoryDsApi.data;
const retrieveDsApi = useApi({
  url: '/master/cmm0602/findServicePackageInquiryList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: (data, params) => {
    if (retrieveDs.value.length !== 0) {
      exportDisabledFlag.value = false;
    } else {
      exportDisabledFlag.value = true;
    }
  },
  manual: true,
});
const retrieveDs = retrieveDsApi.data;
const exportDsApi = useApi({
  url: '/master/cmm0602/exportServicePackageInformation.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'CMM0602_01.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  manual: true,
});
const exportDs = exportDsApi.data;
const resetBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const exportBtnClick = () => {
  exportDsApi.runAsync();
};
const newBtnClick = () => {
  viewNew();
};
const retrieveBtnClick = () => {
  retrieveDsApi.runAsync();
};
const viy2ValueList_9fXwUvSelect = (params) => {
  queryFormData.packageId = params.id;
  queryFormData.packageCd = params.code;
  queryFormData.packageNm = params.name;
};
const viy2ValueList_9fXwUvClear = () => {
  queryFormData.packageId = '';
  queryFormData.packageCd = '';
  queryFormData.packageNm = '';
};
const viy2ValueList_9fXwUvLeave = (obj) => {
  if (obj.currentValue != obj.lastSelectedValue) {
    queryFormData.packageId = '';
    queryFormData.packageCd = '';
    queryFormData.packageNm = '';
  }
};
const viy2ValueList_9fXwUvPopoverColumns = computed(() => {
  return package_column;
});
const gridCellDblclick = (obj) => {
  viewDetail(obj.row);
};
const gridPackageNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPackageNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridProductCategoryEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const Viy2TableGroupColumn_7aYzoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridValidDateFromEditRender = computed(() => {
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
const gridValidDateToEditRender = computed(() => {
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
onMounted(() => {
  queryFormData.validDate = validDate;
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  exportDisabledFlag.value = true;
  queryFormData.validDate = validDate;
  resetTblResults();
};
const resetTblResults = () => {
  retrieveDs.value.splice(0);
  exportDisabledFlag.value = true;
};
const viewDetail = (row) => {
  nextTick(() => {
    const data = {
      servicePackageId: row.servicePackageId,
    };
    useMultiTags().openTag({
      name: 'cmm0602_02',
    });
    useMultiTags().getTag({ name: 'cmm0602_02' }).meta.title = t('title.servicePackageMaintenance_02');
    router.push({ name: 'cmm0602_02', data });
  });
};
const viewNew = () => {
  const data = {
    servicePackageId: null,
  };
  useMultiTags().openTag({
    name: 'cmm0602_02',
  });
  useMultiTags().getTag({ name: 'cmm0602_02' }).meta.title = t('title.servicePackageMaintenance_02');
  router.push({ name: 'cmm0602_02', data });
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
        <VueButton id="resetBtn" ref="resetBtn" icon-position="left" type="warning" @click="resetBtnClick">
          {{ t('button.reset') }}
        </VueButton>
        <VueButton id="exportBtn" ref="exportBtn" icon-position="left" :disabled="exportDisabledFlag" @click="exportBtnClick">
          {{ t('button.export') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="newBtn" ref="newBtn" icon-position="left" @click="newBtnClick">
          {{ t('button.new') }}
        </VueButton>
        <VueButton id="retrieveBtn" ref="retrieveBtn" icon-position="left" type="info" @click="retrieveBtnClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_Vovl6"
      ref="viy2Flex_Vovl6"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="130px"
        class="margin-top-div0 except-height-css"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_9fXwUu"
          ref="viy2Row_9fXwUu"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.packageNumber')"
              label-width="150px"
              prop="packageNo"
            >
              <VueValueList
                id="viy2ValueList_9fXwUv"
                :use-common-popover="true"
                ref="viy2ValueList_9fXwUv"
                :use-common-popup="true"
                v-model="queryFormData.packageNo"
                aside-size="60%"
                :toggle-popover-on-click="true"
                select-field="desc"
                :close-on-click-modal="true"
                :clearable="true"
                :popover-width="500"
                width="210px"
                :popover-columns="viy2ValueList_9fXwUvPopoverColumns"
                :popover-query-method="viy2ValueList_9fXwUvPopoverQueryMethod"
                @select="viy2ValueList_9fXwUvSelect"
                @clear="viy2ValueList_9fXwUvClear"
                @leave="viy2ValueList_9fXwUvLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_9fXwUH"
                    ref="viy2Row_9fXwUH"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 7 }"
                    >
                      <VueText id="viy2Text_9fXwUI" ref="viy2Text_9fXwUI" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
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
                      <VueButton id="viy2Button_9fXwUG" ref="viy2Button_9fXwUG" icon-position="left" type="text" size="large" class="icon-button-width" :icon="IconCloseBold" />
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
              :label="t('label.validDate')"
              label-width="150px"
              prop="validDate"
              :rules="rules.viy2DateTimePicker_9fXwULRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_9fXwUL"
                ref="viy2DateTimePicker_9fXwUL"
                v-model="queryFormData.validDate"
                type="date"
                :style="{ width: '140px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.productCategory')"
              label-width="150px"
              prop="productCategoryId"
            >
              <VueSelect
                id="viy2Select_9fXwUM"
                ref="viy2Select_9fXwUM"
                v-model="queryFormData.productCategoryId"
                :style="{ width: '200px' }"
                :collapse-tags="true"
                :clearable="true"
                :collapse-tags-tooltip="true"
                :options="productCategoryDs"
                :props="{
                  label: 'categoryNm',
                  value: 'productCategoryId',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_VovMQ"
        ref="viy2Flex_VovMQ"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" height="100%" :data="retrieveDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
          <VueRow
            id="viy2Row_9fYgbL"
            ref="viy2Row_9fYgbL"
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
            fixed="left"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridPackageNoEditRender"
            field="packageNo"
            :sortable="true"
            :title="t('label.packageNumber')"
            width="120px"
          />
          <VueInputColumn
            :edit-render="gridPackageNameEditRender"
            field="packageName"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.packageName')"
            width="200px"
          />
          <VueInputColumn
            :edit-render="gridProductCategoryEditRender"
            field="productCategory"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.productCategory')"
            width="300px"
          />
          <VueColgroup
            id="viy2TableGroupColumn_7aYzo"
            ref="viy2TableGroupColumn_7aYzo"
            width="200px"
            :title="t('label.validDate')"
            header-align="center"
          >
            <VueDateTimeColumn
              :edit-render="gridValidDateFromEditRender"
              field="validDateFrom"
              align="center"
              :sortable="true"
              width="120px"
              :title="t('label.fromDate')"
            />
            <VueDateTimeColumn
              :edit-render="gridValidDateToEditRender"
              field="validDateTo"
              align="center"
              :sortable="true"
              width="120px"
              :title="t('label.toDate')"
            />
          </VueColgroup>
          <VueButtonColumn
            align="center"
            width="80px"
            :buttons="gridViy2TableButtonColumn_ngQpnButtons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
