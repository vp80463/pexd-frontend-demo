<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { formatPartNo } from '@/pj-commonutils.js';
import { parts_column, parts_pop_column, parts_pop_query_method, parts_query_method } from '@/settings/valuelistSetting.js';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const nowPartsCode = ref();
defineOptions({
  name: 'vl2select',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Flex_KcOSV = ref();
const queryForm = ref();
const viy2Row_Z91dx = ref();
const viy2ValueList_Z8SYg = ref();
const viy2Row_Zbg75 = ref();
const grid = ref();
const viy2Row_1As6uCC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  parts: '',
});
const viy2ValueList_Z8SYgPopoverQueryMethod = parts_query_method;
const viy2ValueList_Z8SYgPopupColumns = ref(parts_pop_column);
const viy2ValueList_Z8SYgPopupQueryMethod = parts_pop_query_method;
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  showStatus: 'true',
});
const gridMouseConfig = reactive({
  selected: true,
  extension: true,
});
const partsDsApi = useApi({
  url: '/common/valuelist/partsList.json',
  method: 'post',
  data: () => {
    return {
      partsCd: nowPartsCode.value,
      pageSize: 1,
      currentPage: 1,
    };
  },
  lockScreen: false,
});
const partsDs = partsDsApi.data;
const brandDsApi = useApi({
  url: '/common/helper/getBrandListVL.json',
  method: 'post',
  lockScreen: false,
});
const brandDs = brandDsApi.data;
const gridDsApi = useApi({
  url: '/common/helper/userRoleList.json',
  method: 'post',
  data: {},
});
const gridDs = gridDsApi.data;
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
  lockScreen: false,
});
const largeGroupDs = largeGroupDsApi.data;
const viy2ValueList_Z8SYgSelect = (params) => {
  queryFormData.partId = params.id;
  queryFormData.partCd = params.code;
  queryFormData.partNm = params.name;
};
const viy2ValueList_Z8SYgClear = () => {
  clearPartsVl();
};
const viy2ValueList_Z8SYgLeave = (params) => {
  if (params.currentValue != params.lastSelectedValue) {
    clearPartsVl();
  }
};
const viy2ValueList_Z8SYgPopoverColumns = computed(() => {
  return parts_column;
});
const viy2ValueList_Z8SYgPopupConditions = computed(() => {
  return [
    { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' }, formatter: formatPartNo },
    { compType: 'VueCheckbox', field: 'batteryFlag', label: t('label.batteryFlag'), trueLabel: 'Y', falseLabel: 'N', defaultValue: 'N' },
    { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
    { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '150px' } },
  ];
});
const gridPartCdSelect = (obj, params) => {
  const row = obj.row;
  row.partId = params.id;
  row.partNm = params.name;
};
const gridPartCdClear = (obj) => {
  clearPartsCd(obj.row);
};
const gridPartCdLeave = (obj, params) => {
  if (params.currentValue != params.lastSelectedValue) {
    const row = obj.row;
    clearPartsCd(row);
    if (params.currentValue) {
      onLeaveGridParts(row, params.currentValue);
    }
  }
};
const gridPartCdEvents = reactive({
  select: gridPartCdSelect,
  clear: gridPartCdClear,
  leave: gridPartCdLeave,
});
const gridPartCdFormatter = (row, columnConfig, cellValue) => {
  return formatPartNo(row.cellValue);
};
const gridPartCdEditRender = computed(() => {
  return {
    enabled: true,
    events: gridPartCdEvents,
    attrs: {
      selectField: 'code',
      popoverWidth: 500,
      popoverMinQueryLength: 3,
      useCommonPopover: true,
      popoverColumns: parts_column,
      popoverQueryMethod: parts_query_method,
      togglePopoverOnClick: false,
      usePopup: true,
      popupType: 'aside',
      asideSize: '60%',
      useCommonPopup: true,
      popupColumns: parts_pop_column,
      popupConditions: [
        { compType: 'VueInput', field: 'code', label: t('label.parts'), clearable: true, style: { width: '150px' }, formatter: formatPartNo },
        { compType: 'VueCheckbox', field: 'batteryFlag', label: t('label.batteryFlag'), trueLabel: 'Y', falseLabel: 'N', defaultValue: 'N' },
        { compType: 'VueCascader', field: 'prodCtg', label: t('label.productCategory'), props: { checkStrictly: true }, options: largeGroupDs.value, clearable: true, style: { width: '150px' } },
        { compType: 'VueSelect', field: 'brandId', label: t('label.brand'), options: brandDs.value, clearable: true, style: { width: '150px' } },
      ],
      popupQueryMethod: parts_pop_query_method,
      closeOnClickModal: true,
    },
  };
});
const gridPartNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const clearPartsVl = () => {
  queryFormData.partId = '';
  queryFormData.partCd = '';
  queryFormData.partNm = '';
};
const clearPartsCd = (row) => {
  row.partId = '';
  row.partNm = '';
};
const onLeaveGridParts = (row, code) => {
  nowPartsCode.value = code;
  getGridPartsData(row);
};
const getGridPartsData = async (row) => {
  const data = await partsDsApi.runAsync();
  const partsData = data.total > 0 ? data.list[0] : null;
  if (partsData) {
    row.partId = partsData.id;
    row.partNm = partsData.name;
  }
};
// const onLeavePartsCd = (code) => {
// nowPartsCode.value = code;
// getPartsData();
// }
// const getPartsData = async () => {
// const data = await partsDsApi.runAsync();
// let partsData = data.total > 0? data.list[0] : null;
// if (partsData) {
// queryFormData.partId = partsData.id;
// queryFormData.partNm = partsData.name;
// }
// }
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
          id="viy2Row_Z91dx"
          ref="viy2Row_Z91dx"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.parts')"
              prop="parts"
            >
              <VueValueList
                :popover-min-query-length="3"
                :use-common-popover="true"
                select-field="desc"
                id="viy2ValueList_Z8SYg"
                popup-type="aside"
                ref="viy2ValueList_Z8SYg"
                aside-size="60%"
                v-model="queryFormData.parts"
                :use-common-popup="true"
                :close-on-click-modal="true"
                :toggle-popover-on-click="queryFormData.parts.length >= 3"
                :popover-width="500"
                :use-popover="true"
                :use-popup="true"
                width="250px"
                :popover-columns="viy2ValueList_Z8SYgPopoverColumns"
                :popover-query-method="viy2ValueList_Z8SYgPopoverQueryMethod"
                :popup-columns="viy2ValueList_Z8SYgPopupColumns"
                :popup-conditions="viy2ValueList_Z8SYgPopupConditions"
                :popup-query-method="viy2ValueList_Z8SYgPopupQueryMethod"
                @select="viy2ValueList_Z8SYgSelect"
                @clear="viy2ValueList_Z8SYgClear"
                @leave="viy2ValueList_Z8SYgLeave"
              >
                <template #asideHeader>
                  <VueRow
                    id="viy2Row_Zbg75"
                    ref="viy2Row_Zbg75"
                    class="aside-title-row"
                  >
                    <VueCol
                      item-key="item"
                      class="aside-title-text"
                      :md="{ span: 14 }"
                    >
                      <VueText id="viy2Text_ZbOXX" ref="viy2Text_ZbOXX" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                        {{ t('title.partItemRef') }}
                      </VueText>
                    </VueCol>
                    <VueCol
                      item-key="item"
                      align="right"
                      :inline="true"
                      :md="{ span: 10 }"
                    >
                      <VueText id="viy2Text_ZbEnF" ref="viy2Text_ZbEnF" :style="{ width: '100%', display: 'inline-block', fontWeight: 'bold', color: '#F56C6C', textAlign: 'right' }">
                        {{ t('label.conditonInput') }}
                      </VueText>
                    </VueCol>
                  </VueRow>
                </template>
              </VueValueList>
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueTable id="grid" ref="grid" header-align="center" :keyboard-config="{ isTab: true, isArrow: true, isEnter: true }" :border="true" height="250px" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
        <VueIndexColumn
          align="center"
          fixed="left"
          width="50px"
          min-width="50px"
          header-align="center"
        />
        <VueValueListColumn
          :formatter="gridPartCdFormatter"
          :edit-render="gridPartCdEditRender"
          field="partCd"
          fixed="left"
          :toggle-popover-on-click="false"
          :title="t('label.parts')"
          width="150px"
        >
          <template #asideHeader="scope">
            <VueRow
              id="viy2Row_1As6uCC"
              ref="viy2Row_1As6uCC"
              class="aside-title-row"
            >
              <VueCol
                item-key="item"
                :inline="true"
                class="aside-title-text"
                :md="{ span: 14 }"
              >
                <VueText id="viy2Text_1As6uCD" ref="viy2Text_1As6uCD" :style="{ width: '100%', display: 'inline-block', fontSize: '16px', fontWeight: 'bold' }">
                  {{ t('title.partItemRef') }}
                </VueText>
              </VueCol>
              <VueCol
                item-key="item"
                align="right"
                :inline="true"
                :md="{ span: 10 }"
              >
                <VueText id="viy2Text_1As6uCE" ref="viy2Text_1As6uCE" :style="{ width: '100%', display: 'inline-block', fontWeight: 'bold', color: '#F56C6C', textAlign: 'right' }">
                  {{ t('label.conditonInput') }}
                </VueText>
              </VueCol>
            </VueRow>
          </template>
        </VueValueListColumn>
        <VueInputColumn
          :edit-render="gridPartNmEditRender"
          field="partNm"
          show-overflow="tooltip"
          width="200px"
          :title=" t('label.partsName')"
        />
      </VueTable>
    </VueFlex>
  </VueForm>
</template>
