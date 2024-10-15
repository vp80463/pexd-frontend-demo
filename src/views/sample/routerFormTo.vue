<script setup>
import { IconMoreFilled, IconSearch, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useParams } from 'viy-menu';
import { useApi } from '@/composables/useApi';
import viy2Subpage_nm3U6Page from '/src/views/commons/select_location.vue';
import { formatPartNo, formatQty } from '@/pj-commonutils.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const routeParam = useParams();
defineOptions({
  name: 'routerFormTo',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5heznY = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_Kxk1Y = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const location = ref();
const viy2Button_CblvN = ref();
const viy2InputBox_33GnQk = ref();
const viy2Button_33GnQn = ref();
const viy2CheckBox_hPg6Iu = ref();
const viy2Flex_Kxqgc = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const viy2Button_2wveVC = ref();
const viy2Button_2wvHSi = ref();
const viy2CheckBox_5Ezc7N = ref();
const viy2Row_M0Opx = ref();
const locationAside = ref();
const viy2Subpage_nm3U6 = ref();
const formData = reactive({
});
const queryFormData = reactive({
  parts: '', point: '', mainLocationSign: 'N',
});
const showLocationWin = ref(false);
const viy2CheckBox_hPg6IuOpts = [
  {
    label:
'',
    value:
'',
  },
];
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const viy2CheckBox_5Ezc7NOpts = [
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
const gridDsApi = useApi({
  method: 'post',
  localData: {
    totalElements: 1,
    totalPages: 1,
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
      supersedingParts: '',
      supersedingPartsId: null,
      wz: 'descriptionWN1',
      wzId: '2024062101',
      location: '101-76-01-01',
      locationId: '20240614',
      binType: null,
      binTypeId: '2',
      locationType: 'TENTATIVE',
      locationTypeId: 'S006TENTATIVE',
      mainLocationSign: 'N',
      stockQty: 763.00,
      largeGroup: 'Motor Cycle',
      middleGroup: 'MOTOR CYCLE',
    }],
    number: 0,
    first: true,
    last: true,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    numberOfElements: 1,
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
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5heznYClick = () => {
  onExport();
};
const viy2Button_5FbWKcClick = () => {
  doRetrieve();
};
const locationChange = (value) => {
  if (value && value.length > 0) {
    const pointid = queryFormData.pointId;
    const flag = '';
    const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL,
      LocationType.SERVICE, LocationType.FROZEN];
    locationDsApi.runAsync({
      arg0: flag,
      pointId: pointid,
      locationCd: value,
      locationTypeList,
    });
  }
};
const locationOnSuffixIconClick = (event) => {
  queryFormData.locationId = '';
};
const viy2Button_CblvNClick = (params) => {
  showLocationWin.value = true;
  const point = queryFormData.point;
  const pointid = queryFormData.pointId;
  const flag = '';
  const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL,
    LocationType.SERVICE, LocationType.FROZEN];
  asideParams.value = {
    flag,
    point,
    pointId: pointid,
    locationTypeList,
  };
};
const viy2InputBox_33GnQkChange = (value) => {
  if (value && value.length > 0) {
    const pointid = queryFormData.pointId;
    const flag = '';
    const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL,
      LocationType.SERVICE, LocationType.FROZEN];
    locationDsApi.runAsync({
      arg0: flag,
      pointId: pointid,
      locationCd: value,
      locationTypeList,
    });
  }
};
const viy2InputBox_33GnQkOnSuffixIconClick = (event) => {
  queryFormData.locationId = '';
};
const viy2Button_33GnQnClick = (params) => {
  showLocationWin.value = true;
  const point = queryFormData.point;
  const pointid = queryFormData.pointId;
  const flag = '';
  const locationTypeList = [LocationType.TENTATIVE, LocationType.NORMAL,
    LocationType.SERVICE, LocationType.FROZEN];
  asideParams.value = {
    flag,
    point,
    pointId: pointid,
    locationTypeList,
  };
};
const gridPartsNoFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartsNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridPartsNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridSupersedingPartsFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridSupersedingPartsEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridWzEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLocationEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLocationTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridBinTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCopy0_copy0_viy2TableTemplateColumn_liAHZEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridStockQtyFormatter = (row, columnConfig, cellValue) => {
  return formatQty(row.cellValue);
};
const gridStockQtyEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLargeGroupEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridMiddleGroupEditRender = computed(() => {
  return {
    enabled: false,
  };
});
// 初始化画面完了后，
onMounted(() => {
  initData();
});
// 监听router参数有变化时，
watch(() => routeParam, (newVal, oldVal) => {
  initData();
}, { deep: true },
);
const initData = () => {
  const params = routeParam;
  if (Object.entries(params).length !== 0) {
    queryFormData.point = params.point;
    queryFormData.pointId = params.pointId;
    queryFormData.parts = `${params.partsNo} ${params.partsNm}`;
    queryFormData.partsId = params.partsId;
    queryFormData.productCategory = [];
  }
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
        <VueButton id="viy2Button_5heznY" ref="viy2Button_5heznY" icon-position="left" :disabled="exportFlg" @click="viy2Button_5heznYClick">
          {{ t('button.export') }}
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
      id="viy2Flex_Kxk1Y"
      ref="viy2Flex_Kxk1Y"
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
              :label="t('label.parts')"
              prop="parts"
            >
              <VueInput
                id="location"
                ref="location"
                v-model="queryFormData.parts"
                type="text"
                class="no-border"
                :on-suffix-icon-click="locationOnSuffixIconClick"
                :style="{ width: '250px' }"
                @change="locationChange"
              >
                <template #append>
                  <VueButton id="viy2Button_CblvN" ref="viy2Button_CblvN" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_CblvNClick" />
                </template>
              </VueInput>
            </VueFormItem>
            <VueFormItem
              :label="t('label.point')"
              prop="point"
            >
              <VueInput
                id="viy2InputBox_33GnQk"
                ref="viy2InputBox_33GnQk"
                v-model="queryFormData.point"
                type="text"
                class="no-border"
                :on-suffix-icon-click="viy2InputBox_33GnQkOnSuffixIconClick"
                :style="{ width: '250px' }"
                @change="viy2InputBox_33GnQkChange"
              >
                <template #append>
                  <VueButton id="viy2Button_33GnQn" ref="viy2Button_33GnQn" icon-position="left" class="icon-button-width" :icon="IconSearch" @click="viy2Button_33GnQnClick" />
                </template>
              </VueInput>
            </VueFormItem>
            <VueFormItem
              :label="t('label.mainLocationSign')"
              prop="mainLocationSign"
            >
              <VueCheckbox
                id="viy2CheckBox_hPg6Iu"
                ref="viy2CheckBox_hPg6Iu"
                v-model="queryFormData.mainLocationSign"
                true-label="Y"
                false-label="N"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_Kxqgc"
        ref="viy2Flex_Kxqgc"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" :show-footer="true" height="100%" :data="gridDs.content" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
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
            :formatter="gridPartsNoFormatter"
            :edit-render="gridPartsNoEditRender"
            field="partsNo"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.partsNo')"
            width="150px"
          >
            <template #append="scope">
              <VueButton id="viy2Button_2wveVC" ref="viy2Button_2wveVC" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
            </template>
          </VueInputColumn>
          <VueInputColumn
            :edit-render="gridPartsNmEditRender"
            field="partsNm"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.partsName')"
            min-width="200px"
          >
            <template #append="scope">
              <VueButton id="viy2Button_2wvHSi" ref="viy2Button_2wvHSi" icon-position="left" class="icon-button-width" :icon="IconMoreFilled" />
            </template>
          </VueInputColumn>
          <VueInputColumn
            :formatter="gridSupersedingPartsFormatter"
            :edit-render="gridSupersedingPartsEditRender"
            field="supersedingParts"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.supersededParts')"
            width="180px"
          />
          <VueInputColumn
            :edit-render="gridWzEditRender"
            field="wz"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.wz')"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridLocationEditRender"
            field="location"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.location')"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridLocationTypeEditRender"
            field="locationType"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.locationType')"
            width="130px"
          />
          <VueInputColumn
            :edit-render="gridBinTypeEditRender"
            field="binType"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.binType')"
            width="120px"
          />
          <VueTemplateColumn
            :edit-render="gridCopy0_copy0_viy2TableTemplateColumn_liAHZEditRender"
            align="center"
            :aggregate-label="t('label.total')"
            :sortable="true"
            :title="t('label.mainLocationSign')"
            width="160px"
          >
            <template #default="scope">
              <VueCheckbox
                id="viy2CheckBox_5Ezc7N"
                ref="viy2CheckBox_5Ezc7N"
                v-model="scope.row.mainLocationSign"
                :disabled="true"
                true-label="Y"
                false-label="N"
              />
            </template>
          </VueTemplateColumn>
          <VueNumberColumn
            :formatter="gridStockQtyFormatter"
            :edit-render="gridStockQtyEditRender"
            field="stockQty"
            aggregate="sum"
            :sortable="true"
            :title="t('label.stockQty')"
            width="100px"
            header-align="center"
          />
          <VueInputColumn
            :edit-render="gridLargeGroupEditRender"
            field="largeGroup"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.largeCategory')"
            width="150px"
          />
          <VueInputColumn
            :edit-render="gridMiddleGroupEditRender"
            field="middleGroup"
            show-overflow="tooltip"
            :sortable="true"
            :title="t('label.middleCategory')"
            width="150px"
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
          class="paging-area-margin"
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
    <VueAside
      id="locationAside"
      ref="locationAside"
      v-model="showLocationWin"
      :modal="true"
      direction="rtl"
      size="60%"
      :with-header="false"
      :close-on-click-modal="true"
      :close-on-press-escape="true"
    >
      <viy2Subpage_nm3U6Page
        id="viy2Subpage_nm3U6"
        ref="viy2Subpage_nm3U6"
        :init-data="asideParams"
        @select="callbkSelectLocation"
        @close="closeLocationAside"
      />
    </VueAside>
  </VueForm>
</template>
