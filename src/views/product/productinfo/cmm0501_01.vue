<script setup>
import { IconEdit, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { merge } from 'lodash-es';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
import { formatCodeInput, formatPartNo, formatPrice } from '@/pj-commonutils.js';
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
  name: 'cmm0501_01',
});
const form = ref();
const viy2Flex_KMyPE = ref();
const queryForm = ref();
const viy2Panel_IYGVh = ref();
const viy2Button_2IkqVS = ref();
const confirmBtn = ref();
const viy2Row_3K9grA = ref();
const viy2InputBox_tyPCQ = ref();
const viy2ValueList_gDEeL = ref();
const viy2Cascader_87KXO = ref();
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
  parts: '', partsNo: '', productCategory: [],
});
const viy2InputBox_tyPCQformatter = value => formatCodeInput(value);
const viy2Cascader_87KXOProps = reactive({
  checkStrictly: true,
  expandTrigger: 'click',
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
const productGroupDsApi = useApi({
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
const productGroupDs = productGroupDsApi.data;
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
      partsCd: '10V-15641-00',
      partsNm: 'スターターギア',
      largeGroupNm: 'MC',
      middleGroupNm: 'Motor',
      samllGroupNm: 'Motor 23101',
      registrationDate: '20240830',
      stdPurchasePrice: '120000',
    },
    {
      partsCd: '110-09817-72',
      partsNm: 'パッキン',
      largeGroupNm: 'MC',
      middleGroupNm: 'Motor',
      samllGroupNm: 'Motor 23102',
      registrationDate: '20240824',
      stdPurchasePrice: '118000',
    },
    {
      partsCd: '11H-12114-00',
      partsNm: 'フロントサイドリフレクターアセンブリ',
      largeGroupNm: 'MC',
      middleGroupNm: 'Motor',
      samllGroupNm: 'Motor 23101',
      registrationDate: '20240826',
      stdPurchasePrice: '265000',
    },
    {
      partsCd: '11H-81844-00',
      partsNm: 'シフトレバーアセンブリ',
      largeGroupNm: 'MC',
      middleGroupNm: 'Motor',
      samllGroupNm: 'Motor 23101',
      registrationDate: '20240828',
      stdPurchasePrice: '565600',
    },
  ]
  ,
}, {
  onSuccess: (data, params) => {
    disExportFlag.value = false;
  },
  manual: true,
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
const viy2InputBox_tyPCQChange = (value) => {
  if (queryFormData.parts != '') {
    queryFormData.productCategory = [];
  }
};
const viy2InputBox_tyPCQBlur = (event) => {
  queryFormData.productCategory = [];
};
const viy2Button_2Himl4Click = () => {
  exportFile();
};
const gridCellDblclick = (obj) => {
  const row = obj.row;
  onEditWin(row);
};
const gridPartsCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
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
const gridLargeGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSamllGroupNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridStdPurchasePriceFormatter = (row, columnConfig, cellValue) => {
  return formatPrice(row.cellValue);
};
const gridStdPurchasePriceEditRender = computed(() => {
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
    dataType: 'view',
  };
  useMultiTags().openTag({
    name: 'cmq0501_01', // 路由名称
  });
  // Update the meta title of the tag if it exists.
  useMultiTags().getTag({ name: 'cmq0501_01' }).meta.title = t('部品情報照会', data);
  // Use Vue Router to navigate to the specified route and pass the data parameters
  router.push({ name: 'cmq0501_01', data });
};
const onEditWi222 = (selectedRow) => {
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
    name: 'cmm0501_02', // 路由名称
  });
  // Update the meta title of the tag if it exists.
  useMultiTags().getTag({ name: 'cmm0501_02' }).meta.title = t('部品情報詳細', data);
  // Use Vue Router to navigate to the specified route and pass the data parameters
  router.push({ name: 'cmm0501_02', data });
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
                v-if="false"
                label="部品"
                prop="parts"
              >
                <VueInput
                  id="viy2InputBox_tyPCQ"
                  ref="viy2InputBox_tyPCQ"
                  v-model="queryFormData.parts"
                  :clearable="true"
                  :style="{ width: '250px' }"
                  :formatter="viy2InputBox_tyPCQformatter"
                  @change="viy2InputBox_tyPCQChange" @blur="viy2InputBox_tyPCQBlur"
                />
              </VueFormItem>
              <VueFormItem
                label="部品"
                prop="partsNo"
              >
                <VueValueList
                  id="viy2ValueList_gDEeL"
                  ref="viy2ValueList_gDEeL"
                  v-model="queryFormData.partsNo"
                  :use-popover="true"
                  :use-popup="true"
                  width="180px"
                />
              </VueFormItem>
              <VueFormItem
                label="商品区分"
                prop="productCategory"
              >
                <VueCascader
                  id="viy2Cascader_87KXO"
                  ref="viy2Cascader_87KXO"
                  v-model="queryFormData.productCategory"
                  display-member="label"
                  value-member="value"
                  :clearable="true"
                  :disabled="queryFormData.parts !== ''"
                  :options="productGroupDs"
                  :props="viy2Cascader_87KXOProps"
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
              width="50px"
              title="No."
            />
            <VueInputColumn
              :formatter="gridPartsCdFormatter"
              :edit-render="gridPartsCdEditRender"
              field="partsCd"
              fixed="left"
              :sortable="true"
              show-overflow="tooltip"
              title="部品番号"
              width="130px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridPartsNmEditRender"
              field="partsNm"
              :sortable="true"
              show-overflow="tooltip"
              title="部品名称"
              width="200px"
              min-width="200px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridLargeGroupNmEditRender"
              field="largeGroupNm"
              :sortable="true"
              title="大区分"
              width="105px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridMiddleGroupNmEditRender"
              field="middleGroupNm"
              :sortable="true"
              show-overflow="tooltip"
              title="中区分"
              width="165px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridSamllGroupNmEditRender"
              field="samllGroupNm"
              :sortable="true"
              show-overflow="tooltip"
              title="小区分"
              width="165px"
              header-align="center"
            />
            <VueNumberColumn
              :formatter="gridStdPurchasePriceFormatter"
              :edit-render="gridStdPurchasePriceEditRender"
              field="stdPurchasePrice"
              align="right"
              :sortable="true"
              title="標準小売価格"
              width="130px"
              header-align="center"
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
