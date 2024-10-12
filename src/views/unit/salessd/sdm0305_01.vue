<script setup>
import { IconDocumentCopy, IconSearch, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
defineOptions({
  name: 'sdm0305_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const viy2Button_abg9Zs = ref();
const viy2Button_6rOQzM = ref();
const viy2Button_6rlKUm = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2DateTimePicker_fLDoI = ref();
const viy2Select_11grG2 = ref();
const viy2InputBox_RfsMSE = ref();
const viy2Panel_wZlWr = ref();
const viy2Row_wZvy4 = ref();
const viy2Button_6s8z3O = ref();
const viy2Button_8KgFPY = ref();
const grid = ref();
const viy2Row_AsHNi = ref();
const viy2Button_fN3c3 = ref();
const formData = reactive({
});
const orderFormData = reactive({
  orderMonth: '', orderStatus: '', employeeCode: '',
});
const rules = reactive({
  viy2DateTimePicker_fLDoIRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Select_11grG2Opts = reactive([
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
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridViy2TableButtonColumn_DYaB6Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocumentCopy,
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      dealer: 'YT35',
      orderNo: 'SO2401A000054',
      orderStatus: 'Shipped',
      modelCode: 'B6AD00010A',
      purchaseType: '20 years',
      lastName: 'Nguyễn',
      middleName: 'Văn',
      firstName: 'Hùng',
      mobile: 'TESTtest@123.com',
      sns: 'z',
      gender: 'Female',
      birthday: '20230401',
      province: 'Tỉnh Khánh',
      city: 'Thành phố Nha Trang',
      address: '10B Tràng Thi, Phường Hàng Trống',
      email: 'namnt@gmail.vn',
      employeeCode: 'VT 00029',
      employeeName: 'Nguyễn Văn Trình',
      boCancel: 'Y',
      error: 'error',
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
const gridDealerEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2Button_fN3c3Click = () => {
  showPartsWin.value = true;
};
const gridOrderStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridModelCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLastNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridFirstNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMobileEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSnsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridGenderEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBirthdayEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridProvinceEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCityEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAddressEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEmailEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEmployeeCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEmployeeNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridErrorEditRender = computed(() => {
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
orderFormData.orderMonth = new Date();
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
        <VueButton id="viy2Button_abg9Zs" ref="viy2Button_abg9Zs" icon-position="left">
          Export
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_6rOQzM" ref="viy2Button_6rOQzM" icon-position="left">
          Retrieve
        </VueButton>
        <VueButton id="viy2Button_6rlKUm" ref="viy2Button_6rlKUm" icon-position="left" type="info" :disabled="true">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="Header" class="margin-top-div except-height-css">
      <VueForm
        id="orderForm"
        ref="orderForm"
        label-width="110px"
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
              label="Order Month"
              prop="orderMonth"
              :rules="rules.viy2DateTimePicker_fLDoIRules"
            >
              <VueDatePicker
                id="viy2DateTimePicker_fLDoI"
                ref="viy2DateTimePicker_fLDoI"
                v-model="orderFormData.orderMonth"
                type="month"
                :style="{ width: '120px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ym"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Order Status"
              prop="orderStatus"
            >
              <VueSelect
                id="viy2Select_11grG2"
                ref="viy2Select_11grG2"
                v-model="orderFormData.orderStatus"
                :style="{ width: '200px' }"
                :options="viy2Select_11grG2Opts"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 6 }"
          >
            <VueFormItem
              label="Employee Code"
              prop="employeeCode"
            >
              <VueInput
                id="viy2InputBox_RfsMSE"
                ref="viy2InputBox_RfsMSE"
                v-model="orderFormData.employeeCode"
                :clearable="true"
                :style="{ width: '150px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" v-model="detailPanelModel" title="Detail" :collapse="true">
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
              <VueButton id="viy2Button_6s8z3O" ref="viy2Button_6s8z3O" icon-position="left">
                import
              </VueButton>
              <VueButton id="viy2Button_8KgFPY" ref="viy2Button_8KgFPY" icon-position="left">
                Cancel
              </VueButton>
            </VueCol>
          </VueRow>
        </div>
      </template>
      <VueTable id="grid" ref="grid" :height="gridHeight - 40" :data="gridDs" :edit-config="gridEditConfig">
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
          fixed="left"
          width="50px"
          min-width="50px"
        />
        <VueSelectionColumn
          align="center"
          fixed="left"
          width="50px"
          type="checkbox"
        />
        <VueInputColumn
          :edit-render="gridDealerEditRender"
          field="dealer"
          show-overflow="tooltip"
          title="Dealer"
          min-width="100px"
        />
        <VueInputColumn
          :edit-render="gridOrderNoEditRender"
          field="orderNo"
          show-overflow="tooltip"
          title="Order No."
          width="130px"
        >
          <template #append="scope">
            <VueButton id="viy2Button_fN3c3" ref="viy2Button_fN3c3" icon-position="left" size="small" type="primary" class="icon-button-width" :icon="IconSearch" @click="viy2Button_fN3c3Click" />
          </template>
        </VueInputColumn>
        <VueInputColumn
          :edit-render="gridOrderStatusEditRender"
          field="orderStatus"
          show-overflow="tooltip"
          title="Order Status"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridModelCodeEditRender"
          field="modelCode"
          show-overflow="tooltip"
          title="Model Code"
          width="130px"
        />
        <VueInputColumn
          :edit-render="gridLastNameEditRender"
          field="lastName"
          show-overflow="tooltip"
          title="Last Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridMiddleNameEditRender"
          field="middleName"
          show-overflow="tooltip"
          title="Middle Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridFirstNameEditRender"
          field="firstName"
          show-overflow="tooltip"
          title="First Name"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridMobileEditRender"
          field="mobile"
          show-overflow="tooltip"
          title="Mobile"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridSnsEditRender"
          field="sns"
          show-overflow="tooltip"
          title="SNS"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridGenderEditRender"
          field="gender"
          show-overflow="tooltip"
          title="Gender"
          min-width="100px"
        />
        <VueDateTimeColumn
          :edit-render="gridBirthdayEditRender"
          field="birthday"
          align="center"
          title="Birthday"
          width="120px"
        />
        <VueInputColumn
          :edit-render="gridProvinceEditRender"
          field="province"
          show-overflow="tooltip"
          title="Province"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridCityEditRender"
          field="city"
          show-overflow="tooltip"
          title="City"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridAddressEditRender"
          field="address"
          show-overflow="tooltip"
          title="Address"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridEmailEditRender"
          field="email"
          show-overflow="tooltip"
          title="Email"
          min-width="130px"
        />
        <VueInputColumn
          :edit-render="gridEmployeeCodeEditRender"
          field="employeeCode"
          show-overflow="tooltip"
          title="Employee Code"
          width="135px"
        />
        <VueInputColumn
          :edit-render="gridEmployeeNameEditRender"
          field="employeeName"
          show-overflow="tooltip"
          title="Employee Name"
          min-width="135px"
        />
        <VueInputColumn
          :edit-render="gridErrorEditRender"
          field="error"
          show-overflow="tooltip"
          title="Error"
          min-width="130px"
        />
        <VueButtonColumn
          fixed="right"
          align="center"
          width="40px"
          :buttons="gridViy2TableButtonColumn_DYaB6Buttons"
        />
      </VueTable>
    </VuePanel>
  </VueForm>
</template>
