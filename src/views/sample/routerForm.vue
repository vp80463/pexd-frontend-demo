<script setup>
import { IconDocument, IconMoreFilled, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { formatCost, formatPartNo } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
defineOptions({
  name: 'routerForm',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Flex_KcOSV = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2Radio_X7nfd = ref();
const viy2Flex_KcTfE = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_2waqBC = ref();
const viy2Button_2wbnYU = ref();
const viy2Row_M0Opx = ref();
const formData = reactive({
});
const queryFormData = reactive({
  datafieldviy2Radio_X7nfd: '',
});
const viy2Radio_X7nfdOpts = reactive([
  { value: 'label.all', label: 'label.all' },
  { value: 'label.serviceOrder', label: 'label.serviceOrder' },
  { value: 'label.fastSalesOrder', label: 'label.fastSalesOrder' },
]);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_b2T5nButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocument,
      click: viewDetail,
      title: 'Detail',
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: {
    totalPages: 1,
    totalElements: 6,
    size: 15,
    content: [{
      siteId: null,
      toSiteId: null,
      fromSiteId: null,
      updateProgram: null,
      updateCount: null,
      partsNo: '104813282000',
      partsNm: 'Kẹp giữ dây điện',
      partsId: '49676',
      orderDate: '20240605',
      supersedingPartsId: null,
      onHandQty: 111140.01,
      allocatedQty: 2222550.00,
      boQty: 0.00,
      onReceivingQty: 0,
      onPickingQty: 37.00,
      hoQty: 0,
      eoQty: 0,
      roQty: 0,
      woQty: 0,
      onTransferQty: 0,
      onServiceQty: 0,
      onFrozenQty: 0,
      averageCost: 0,
      largeGroup: 'Motor Cycle',
      middleGroup: 'MOTOR CYCLE',
    },
    {
      siteId: null,
      toSiteId: null,
      fromSiteId: null,
      updateProgram: null,
      updateCount: null,
      partsNo: '10F843402000',
      partsNm: 'Đui đèn pha',
      partsId: '20786',
      orderDate: '20240515',
      supersedingPartsId: null,
      onHandQty: 1638400.00,
      allocatedQty: 0,
      boQty: 0,
      onReceivingQty: 459735.00,
      onPickingQty: 524288.00,
      hoQty: 0,
      eoQty: 0,
      roQty: 0,
      woQty: 0,
      onTransferQty: 0,
      onServiceQty: 0,
      onFrozenQty: 0,
      averageCost: 0.0000,
      largeGroup: 'Motor Cycle',
      middleGroup: 'MOTOR CYCLE',
    }, {
      siteId: null,
      toSiteId: null,
      fromSiteId: null,
      updateProgram: null,
      updateCount: null,
      partsNo: '10LW00920000',
      partsNm: 'Bộ van khoá xăng',
      partsId: '5147',
      orderDate: '20240624',
      supersedingPartsId: null,
      onHandQty: 0,
      allocatedQty: 0,
      boQty: 0,
      onReceivingQty: 0,
      onPickingQty: 7.00,
      hoQty: 0,
      eoQty: 0,
      roQty: 0,
      woQty: 0,
      onTransferQty: 0,
      onServiceQty: 0,
      onFrozenQty: 0,
      averageCost: 0,
      largeGroup: 'Motor Cycle',
      middleGroup: 'MOTOR CYCLE',
    }, {
      siteId: null,
      toSiteId: null,
      fromSiteId: null,
      updateProgram: null,
      updateCount: null,
      partsNo: '2VPF34610000',
      partsNm: 'GÍA ĐỠ GHI ĐÔNG',
      partsId: '1002',
      orderDate: '20230605',
      supersedingPartsId: null,
      onHandQty: 373.00,
      allocatedQty: 0,
      boQty: 0,
      onReceivingQty: -85.00,
      onPickingQty: 0,
      hoQty: 0,
      eoQty: 0,
      roQty: 0,
      woQty: 0,
      onTransferQty: 0,
      onServiceQty: 0,
      onFrozenQty: 126.00,
      averageCost: 0,
      largeGroup: 'Local Factories',
      middleGroup: 'Gravita',
    }, {
      siteId: null,
      toSiteId: null,
      fromSiteId: null,
      updateProgram: null,
      updateCount: null,
      partsNo: 'B24FS110W30M',
      partsNm: 'Áo thun (Size M)',
      partsId: '1004',
      orderDate: '20251205',
      supersedingPartsId: null,
      onHandQty: 0,
      allocatedQty: 0,
      boQty: 0,
      onReceivingQty: 0,
      onPickingQty: 0,
      hoQty: 0,
      eoQty: 0,
      roQty: 0,
      woQty: 0,
      onTransferQty: 0,
      onServiceQty: 0,
      onFrozenQty: 0,
      averageCost: 0,
      largeGroup: 'Accessories',
      middleGroup: 'Accessory for big bike ',
    }, {
      siteId: null,
      toSiteId: null,
      fromSiteId: null,
      updateProgram: null,
      updateCount: null,
      partsNo: 'BGYF832L3000',
      partsNm: 'TEM',
      partsId: '1003',
      supersedingParts: '',
      supersedingPartsId: null,
      onHandQty: 304.00,
      allocatedQty: 0,
      boQty: 0,
      onReceivingQty: -68.00,
      onPickingQty: 0,
      hoQty: 0,
      eoQty: 0,
      roQty: 0,
      woQty: 0,
      onTransferQty: 0,
      onServiceQty: 0,
      onFrozenQty: 170.00,
      averageCost: 0,
      largeGroup: 'Local Factories',
      middleGroup: 'SIRIUS',
    },
    ],
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    first: true,
    last: true,
    numberOfElements: 6,
    pageable: {
      pageNumber: 0,
      pageSize: 15,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      offset: 0,
      paged: true,
      unpaged: false,
    },
    empty: false,
  },
});
const gridDs = gridDsApi.data;
const viy2Radio_X7nfdLabelFormatter = (option, displaymember, valuemember) => {
  return t(option.label);
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  viewDetail(row);
};
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOrderDateEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridOnHandQtyFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);
};
const gridOnHandQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridAllocatedQtyFormatter = (row, columnConfig, cellValue) => {
  return formatCost(row.cellValue);
};
const gridAllocatedQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
// 跳转详情页
const viewDetail = (row) => {
// 跳转到详情页的必要参数
  const data = {
    point: queryFormData.point,
    pointId: queryFormData.pointId,
    partsNo: formatPartNo(row.partsNo),
    partsNm: row.partsNm,
    partsId: row.partsId,
  };
  useMultiTags().openTag({
    name: 'routerFormTo', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'routerFormTo' }).meta.title = t('title.partsStockInformationInquiryDetail_02');
  // router导航到页面并传递参数
  router.push({ name: 'routerFormTo', data });
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
      />
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      />
    </VueRow>
    <VueFlex
      id="viy2Flex_KcOSV"
      ref="viy2Flex_KcOSV"
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
          id="viy2Row_lOY8w"
          ref="viy2Row_lOY8w"
          :gutter="15"
        >
          <VueCol
            item-key="item"
            align="left"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="Order Source Type"
              prop="datafieldviy2Radio_X7nfd"
            >
              <VueRadioGroup
                id="viy2Radio_X7nfd"
                ref="viy2Radio_X7nfd"
                v-model="queryFormData.datafieldviy2Radio_X7nfd"
                radio-style="button"
                direction="horizontal"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_X7nfdOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ viy2Radio_X7nfdLabelFormatter(option, 'label', 'value') }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_KcTfE"
        ref="viy2Flex_KcTfE"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="99%" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
            fixed="left"
            width="50px"
            min-width="50px"
            header-align="center"
          />
          <VueInputColumn
            :formatter="gridPartsNoFormatter"
            :edit-render="gridPartsNoEditRender"
            field="partsNo"
            fixed="left"
            :sortable="true"
            :title="t('label.partsNo')"
            width="150px"
          >
            <template #append="scope">
              <VueButton id="viy2Button_2waqBC" ref="viy2Button_2waqBC" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
            </template>
          </VueInputColumn>
          <VueInputColumn
            :edit-render="gridOrderDateEditRender"
            field="orderDate"
            show-overflow="tooltip"
            fixed="left"
            :sortable="true"
            :title="t('label.partsName')"
            width="200px"
          >
            <template #append="scope">
              <VueButton id="viy2Button_2wbnYU" ref="viy2Button_2wbnYU" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
            </template>
          </VueInputColumn>
          <VueNumberColumn
            :formatter="gridOnHandQtyFormatter"
            :edit-render="gridOnHandQtyEditRender"
            field="onHandQty"
            aggregate="sum"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.onHandQuantity')"
            width="130px"
            header-align="center"
          />
          <VueNumberColumn
            :formatter="gridAllocatedQtyFormatter"
            :edit-render="gridAllocatedQtyEditRender"
            field="allocatedQty"
            aggregate="sum"
            show-overflow="tooltip"
            :sortable="true"
            title="成本"
            width="130px"
            header-align="center"
          />
          <VueButtonColumn
            align="center"
            fixed="right"
            width="60px"
            :buttons="gridViy2TableButtonColumn_b2T5nButtons"
          />
        </VueTable>
      </VueFlex>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        class="except-height-css"
      >
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 17 }"
        />
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 7 }"
        />
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
