<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { PAGE_SIZE } from '@/constants/pj-constants.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const disExportFlag = ref(true);
const router = useRouter();
const flagOpts = reactive([
  { label: 'Y', value: 'Y' },
  { label: 'N', value: 'N' },
]);
const productCategory = [];
const resetFlag = ref(false);
defineOptions({
  name: 'cmm0309_02',
});
const form = ref();
const viy2Flex_KMyPE = ref();
const queryForm = ref();
const viy2Panel_IYGVh = ref();
const returnButton = ref();
const viy2Row_3K9grA = ref();
const viy2DateTimePicker_nQ0Vk = ref();
const viy2InputBox_zs4Yg = ref();
const viy2Flex_KMDho = ref();
const viy2Panel_IYKn8 = ref();
const grid = ref();
const viy2Row_3K4mQp = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '20240501', middleGroup: '0:オートバイ',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const paginationCurrentPage = ref(1);
const paginationPageSize = ref();
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const exportPartsInformationApi = useApi({
  url: '/master/cmm0501/exportPartsInformation.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  responseType: 'blob',
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Parts Information Inquiry.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const exportPartsInformation = exportPartsInformationApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      partsCd: '4D-1F837-101',
      partsNm: '電子ディスク001',
      price: '10000',
    },
    {
      partsCd: '4D-1F837-102',
      partsNm: '電子ディスク002',
      price: '10000',
    },
    {
      partsCd: '4D-1F837-103',
      partsNm: '電子ディスク003',
      price: '10000',
    },
    {
      partsCd: '4D-1F837-104',
      partsNm: '電子ディスク004',
      price: '10000',
    },
  ],
}, {
  onSuccess: (data, params) => {
    disExportFlag.value = false;
  },
});
const gridDs = gridDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandList.json',
  method: 'post',
  data: {
    arg0: '1',
  },
}, {
  manual: true,
});
const brandDs = brandDsApi.data;
const partsInformationListApi = useApi({
  url: '/master/cmm0501/findPartsInformationInquiryList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    disExportFlag.value = partsInformationList.value.length == 0;
  },
  manual: true,
});
const partsInformationList = partsInformationListApi.data;
const findPartsInformationApi = useApi({
  url: '/master/cmm0501/findPartsInformationInquiryAndPageList.json',
  method: 'post',
  data: () => {
    const condition = {};
    merge(condition, queryFormData);
    condition.pageSize = paginationPageSize.value;
    condition.currentPage = paginationCurrentPage.value;
    return condition;
  },
}, {
  onSuccess: (data, params) => {
    disExportFlag.value = findPartsInformation.value.content.length == 0;
    findPartsInformation.value.totalElements = data.totalElements;
  },
  manual: true,
});
const findPartsInformation = findPartsInformationApi.data;
const returnButtonClick = () => {
  doBack();
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  onEditWin(row);
};
const gridPartsCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPriceEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const paginationCurrentChange = () => {
  if (findPartsInformation.value.totalElements === undefined || findPartsInformation.value.totalElements === 0) {
    return;
  }
  findPartsInformationApi.runAsync();
};
onMounted(() => {
  paginationPageSize.value = PAGE_SIZE;
});
watch(() => queryFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  queryFormData.parts = '';
  queryFormData.productCategory = [];
  queryFormData.brand = '';
  queryFormData.brandNm = '';
  paginationCurrentPage.value = 1;
  paginationPageSize.value = PAGE_SIZE;
  findPartsInformation.value.totalElements = 0;
  resetTblResults();
};
const resetTblResults = () => {
  findPartsInformation.value.content = [];
  findPartsInformation.value.totalElements = 0;
  disExportFlag.value = true;
};
const onEditWin = (selectedRow) => {
  const data = {
    dataType: 'edit',
    siteId: selectedRow.siteId,
    brandCd: selectedRow.brandCd,
    brandId: selectedRow.brandId,
    partsNo: selectedRow.partsCd,
    partsNm: selectedRow.partsNm,
    partsId: selectedRow.partsId,
    middleGroupNm: selectedRow.middleGroupNm,
    middleGroupId: selectedRow.middleGroupId,
    registrationDate: selectedRow.registrationDate,
    priceExcludeVAT: selectedRow.priceExcludeVAT,
    priceIncludeVAT: selectedRow.priceIncludeVAT,
    stdPurchasePrice: selectedRow.stdPurchasePrice,
  };
  useMultiTags().openTag({
    name: 'cmm0309_02', // 路由名称
  });
  // Update the meta title of the tag if it exists.
  useMultiTags().getTag({ name: 'cmm0309_02' }).meta.title = t('価格履歴詳細', data);
  // Use Vue Router to navigate to the specified route and pass the data parameters
  router.push({ name: 'cmm0309_02', data });
};
const onAddWin = () => {
// 路由参数得是字符串
  const data = {
    dataType: 'add',
  };
  useMultiTags().openTag({
    name: 'cmm0501_02', // 路由名称
  });
  // Update the meta title of the tag if it exists.
  useMultiTags().getTag({ name: 'cmm0501_02' }).meta.title = t('部品情報詳細', data);
  // Use Vue Router to navigate to the specified route and pass the data parameters
  router.push({ name: 'cmm0501_02', data });
};
const exportFile = () => {
  useApi(
    {
      url: '/master/cmm0501/exportPartsInformation.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return queryFormData;
      },
      timeout: 300000,
    },
    {
      onSuccess: (data, params) => {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Parts Information Inquiry.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  );
};
const doBack = () => {
  router.back();
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_KMyPE"
      ref="viy2Flex_KMyPE"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        :model="queryFormData"
      >
        <VuePanel id="viy2Panel_IYGVh" ref="viy2Panel_IYGVh" title="履歴情報">
          <template #header>
            <div style="width: auto">
              <VueButton id="returnButton" ref="returnButton" icon-position="left" @click="returnButtonClick">
                戻る
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_3K9grA"
            ref="viy2Row_3K9grA"
          >
            <VueCol
              item-key="item"
              align="left"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                label="価格改定日"
                prop="dateFrom"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_nQ0Vk"
                  ref="viy2DateTimePicker_nQ0Vk"
                  v-model="queryFormData.dateFrom"
                  :style="{ width: '150px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="中区分"
                prop="middleGroup"
              >
                <VueInput
                  id="viy2InputBox_zs4Yg"
                  ref="viy2InputBox_zs4Yg"
                  v-model="queryFormData.middleGroup"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_KMDho"
        ref="viy2Flex_KMDho"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_IYKn8" ref="viy2Panel_IYKn8" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
            <VueRow
              id="viy2Row_3K4mQp"
              ref="viy2Row_3K4mQp"
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
              min-width="50px"
              header-align="center"
              width="60px"
              title="No."
            />
            <VueInputColumn
              :edit-render="gridPartsCdEditRender"
              field="partsCd"
              width="200px"
              title="部品番号"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              width="200px"
              title="部品名称"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridPriceEditRender"
              field="price"
              align="right"
              title="価格"
              header-align="center"
              width="180px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
      <VueRow
        id="viy2Row_M0Opx"
        ref="viy2Row_M0Opx"
        class="paging-area-margin"
      >
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 12 }"
        />
        <VueCol
          item-key="item"
          align="right"
          :inline="true"
          :md="{ span: 12 }"
        >
          <VuePagination
            id="pagination"
            ref="pagination"
            v-model:current-page="paginationCurrentPage"
            v-model:page-size="paginationPageSize"
            :background="true"
            :small="true"
            :total="findPartsInformation.totalElements || 0"
            @current-change="paginationCurrentChange"
          />
        </VueCol>
      </VueRow>
    </VueFlex>
  </VueForm>
</template>
