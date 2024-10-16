<script setup>
import { IconEdit, useLockScreen } from 'viy-ui';
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
  name: 'cmm0309_01',
});
const form = ref();
const viy2Flex_KMyPE = ref();
const queryForm = ref();
const viy2Panel_IYGVh = ref();
const viy2Button_2IkqVS = ref();
const confirmBtn = ref();
const viy2Row_3K9grA = ref();
const viy2DateTimePicker_nQ0Vk = ref();
const viy2DateTimePicker_nQ1qx = ref();
const viy2Cascader_2IGG1 = ref();
const viy2Flex_KMDho = ref();
const viy2Panel_IYKn8 = ref();
const viy2Button_2Himl4 = ref();
const grid = ref();
const viy2Row_3K4mQp = ref();
const viy2Row_M0Opx = ref();
const pagination = ref();
const formData = reactive({
});
const queryFormData = reactive({
  dateFrom: '', dateTo: '', middleCategoryCd: [],
});
const rules = reactive({
  viy2DateTimePicker_nQ0VkRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2DateTimePicker_nQ1qxRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Cascader_2IGG1Props = reactive({
  checkStrictly: true,
  label: 'label',
  value: 'value',
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_gR42iButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onEditWin,
    },
  ];
};
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
      date: '20240501',
      middleGroupCd: '0',
      middleGroupNm: 'オートバイ',
      itemQty: '113',
      amount: '1433375',
    },
    {
      date: '20240501',
      middleGroupCd: '1',
      middleGroupNm: '標準パーツ',
      itemQty: '3',
      amount: '328',
    },
    {
      date: '20240513',
      middleGroupCd: '2',
      middleGroupNm: 'カート',
      itemQty: '13',
      amount: '-51530',
    },
    {
      date: '20240514',
      middleGroupCd: '3',
      middleGroupNm: '発電機',
      itemQty: '1328',
      amount: '-9500000',
    },
  ],
}, {
  onSuccess: (data, params) => {
    disExportFlag.value = false;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const groupDsApi = useApi({
  method: 'post',
  localData: [
    {
      value: '0',
      label: 'Ｍ／Ｃ部品',
      children: [
        {
          value: '0',
          label: 'オートバイ',
          children: [
            {
              value: 'A4',
              label: 'モトクロス',
            },
            {
              value: 'A5',
              label: 'トライアル',
            },
          ],
        },
        {
          value: '4',
          label: 'スノーモービル、除雪機',
          children: [
            {
              value: 'G7',
              label: '小型除雪機',
            },
            {
              value: 'G8',
              label: 'トロ除雪機',
            },
          ],
        },
      ],
    },
    {
      value: '2',
      label: '特機',
      children: [
        {
          value: '9',
          label: 'ボート純正オプション',
          children: [
            {
              value: 'G1',
              label: '２．発電機',
            },
            {
              value: 'G2',
              label: '４．発電機',
            },
            {
              value: 'G3',
              label: 'Ｄ．発電機',
            },
          ],
        },
      ],
    },
    {
      value: '7',
      label: '船外機',
      children: [
        {
          value: 'C',
          label: 'ヘルメット',
          children: [
            {
              value: 'B5',
              label: 'モトクロス',
            },
            {
              value: 'A6',
              label: 'エンデューロ',
            },
          ],
        },
        {
          value: '6',
          label: 'ＧＨＰ',
          children: [
            {
              value: 'F8',
              label: 'スプロケットドライブ',
            },
            {
              value: 'L0',
              label: 'ＭＵマリンジェット',
            },
            {
              value: 'F5',
              label: 'チェーン．Ｊチェーン',
            },
          ],
        },
      ],
    },
  ]
  ,
});
const groupDs = groupDsApi.data;
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
const viy2Button_2IkqVSClick = () => {
// findPartsInformationApi.runAsync();
  gridDsApi.runAsync();
};
const confirmBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_2Himl4Click = () => {
  exportFile();
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  onEditWin(row);
};
const gridDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridMiddleGroupCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridItemQtyEditRender = computed(() => {
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
        <VuePanel id="viy2Panel_IYGVh" ref="viy2Panel_IYGVh" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_2IkqVS" ref="viy2Button_2IkqVS" icon-position="left" type="info" @click="viy2Button_2IkqVSClick">
                検索
              </VueButton>
              <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" @click="confirmBtnClick">
                クリア
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
                :rules="rules.viy2DateTimePicker_nQ0VkRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_nQ0Vk"
                  ref="viy2DateTimePicker_nQ0Vk"
                  v-model="queryFormData.dateFrom"
                  :style="{ width: '150px' }"
                />
              </VueFormItem>
              <!-- BEGIN CUSTOM DIV CODE -->
              <span>-</span>
              <!-- END CUSTOM DIV CODE -->
              <VueFormItem
                prop="dateTo"
                :rules="rules.viy2DateTimePicker_nQ1qxRules"
              >
                <VueDatePicker
                  id="viy2DateTimePicker_nQ1qx"
                  ref="viy2DateTimePicker_nQ1qx"
                  v-model="queryFormData.dateTo"
                  :style="{ width: '150px' }"
                />
              </VueFormItem>
              <VueFormItem
                label="中区分"
                prop="middleCategoryCd"
              >
                <VueCascader
                  id="viy2Cascader_2IGG1"
                  ref="viy2Cascader_2IGG1"
                  v-model="queryFormData.middleCategoryCd"
                  display-member="label"
                  value-member="value"
                  :options="groupDs"
                  :props="viy2Cascader_2IGG1Props"
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
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_2Himl4" ref="viy2Button_2Himl4" icon-position="left" :disabled="disExportFlag" @click="viy2Button_2Himl4Click">
                ファイル出力
              </VueButton>
            </div>
          </template>
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
            <VueDateTimeColumn
              :edit-render="gridDateEditRender"
              field="date"
              align="center"
              :sortable="true"
              title="価格改定日"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridMiddleGroupCdEditRender"
              field="middleGroupCd"
              :sortable="true"
              show-overflow="tooltip"
              title="中区分"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridMiddleGroupNmEditRender"
              field="middleGroupNm"
              :sortable="true"
              show-overflow="tooltip"
              title="中区分名称"
              width="180px"
              header-align="center"
            />
            <VueNumberColumn
              :edit-render="gridItemQtyEditRender"
              field="itemQty"
              align="right"
              title="部品点数"
              header-align="center"
              width="180px"
            />
            <VueButtonColumn
              align="center"
              fixed="right"
              width="60px"
              :buttons="gridViy2TableButtonColumn_gR42iButtons"
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
