<script setup>
import { IconCloseBold, IconDelete, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
const props = defineProps({
  initData: Object,
});
const emit = defineEmits(['select']);
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
// 非666N的场合,按钮不可用,头部不可编辑
const disableFlg = ref(false);
if (uc.dealerCode !== 'YT35') {
  disableFlg.value = true;
}
// 如果是confirm或者非666N的场合,不可编辑
const disEditFlg = ref(false);
if (disableFlg) {
  disEditFlg.value = true;
}
const isNoValue = (value) => {
  return value === undefined || value === null || value === '';
};
defineOptions({
  name: 'cmm0402_02',
});
const form = ref();
const viy2Row_10QMyC = ref();
const viy2Button_5vlgbW = ref();
const viy2Button_5vm4Bi = ref();
const viy2Button_gYGrq = ref();
const viy2Flex_gpyp3 = ref();
const queryForm = ref();
const viy2Row_8Pd1GE = ref();
const viy2InputBox_8Pd1GF = ref();
const viy2InputBox_8Pd1GI = ref();
const viy2Flex_gpyKK = ref();
const viy2Panel_8PdCBi = ref();
const viy2Row_8PdCBk = ref();
const viy2Button_8PdCBl = ref();
const grid = ref();
const viy2Row_8PdCBy = ref();
const formData = reactive({
});
const queryFormData = reactive({
  sectionCd: '', sectionNm: '',
});
const rules = reactive({
  viy2InputBox_8Pd1GFRules: [
    {
      required: true,
      message: t('errors.required', [t('label.sectionCode')]),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
  mode: 'cell',
  beforeEditMethod: (obj) => {
    const row = obj.row;
    if (!isNoValue(row.symptomId)) {
      if ((obj.column.property === 'symptomCd' || obj.column.property === 'description') && disableFlg) {
        return true;
      }
    }
    return !disableFlg;
  },
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_vGoCZButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDelete,
      click: onDelGridRow,
    },
  ];
};
const confirmDsApi = useApi({
  url: '/master/cmm0402/confirm.json',
  method: 'post',
  data: () => {
    queryFormData.detailList = grid.value.getTableData().fullData;
    queryFormData.tableDataList = grid.value.getRecordset();
    return Object.assign({}, queryFormData);
  },
}, {
  onSuccess: (data, params) => {
    VueMessage.success(t('ymc-commons.P.00005'));
    gridDsApi.runAsync();
    queryFormData.sectionId = data.sectionId;
    emit('close');
  },
  manual: true,
});
const confirmDs = confirmDsApi.data;
const gridDsApi = useApi({
  url: '/master/cmm0402/findSectionInfoMaintenanceList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const viy2Button_5vlgbWClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5vm4BiClick = () => {
  queryForm.value.validate((valid, fields) => {
    if (valid) {
      confirmDsApi.runAsync();
    }
  });
};
const viy2Button_gYGrqClick = () => {
  VueMessageBox.confirm(t('M.C.10214'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    emit('close');
  });
};
const viy2Button_8PdCBlClick = () => {
  const row = {};
  grid.value.insertAt(row, -1).then((newRow) => {
    grid.value.setCurrentRow(newRow.row);
  });
};
const gridSymptomCdEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridDescriptionEditRender = computed(() => {
  return {
    enabled: true,
  };
});
const gridSymptomIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
});
watch(() => props.initData, (newVal) => {
  if (newVal) {
    queryFormData.sectionCd = newVal.sectionCd;
    queryFormData.sectionNm = newVal.sectionNm;
    queryFormData.sectionId = newVal.sectionId;
    if (!isNoValue(queryFormData.sectionId)) {
      disEditFlg.value = true;
      gridDsApi.runAsync();
    } else {
      if (grid.value) {
        grid.value.remove();
      }
      disEditFlg.value = false;
    }
  }
}, {
  immediate: true,
  deep: true,
});
const onDelGridRow = (row) => {
  grid.value.remove(row);
};
const resetCondition = () => {
// reset后重检索
  gridDsApi.runAsync();
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueRow
      id="viy2Row_10QMyC"
      ref="viy2Row_10QMyC"
      class="aside-title-row"
    >
      <VueCol
        item-key="item"
        align="left"
        :inline="true"
        class="aside-title-button"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_5vlgbW" ref="viy2Button_5vlgbW" icon-position="left" type="warning" @click="viy2Button_5vlgbWClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        class="aside-title-button"
        :md="{ span: 12 }"
      >
        <VueButton v-show="!disableFlg" id="viy2Button_5vm4Bi" ref="viy2Button_5vm4Bi" icon-position="left" type="info" @click="viy2Button_5vm4BiClick">
          {{ t('button.confirm') }}
        </VueButton>
        <VueButton id="viy2Button_gYGrq" ref="viy2Button_gYGrq" icon-position="left" size="large" type="text" class="icon-button-width" :icon="IconCloseBold" @click="viy2Button_gYGrqClick" />
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_gpyp3"
      ref="viy2Flex_gpyp3"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="150px"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_8Pd1GE"
          ref="viy2Row_8Pd1GE"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.sectionCode')"
              prop="sectionCd"
              :rules="rules.viy2InputBox_8Pd1GFRules"
            >
              <VueInput
                id="viy2InputBox_8Pd1GF"
                ref="viy2InputBox_8Pd1GF"
                v-model="queryFormData.sectionCd"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                :readonly="disEditFlg"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 12 }"
          >
            <VueFormItem
              :label="t('label.sectionName')"
              prop="sectionNm"
            >
              <VueInput
                id="viy2InputBox_8Pd1GI"
                ref="viy2InputBox_8Pd1GI"
                v-model="queryFormData.sectionNm"
                :formatter="formatCodeInput"
                :parser="formatCodeInput"
                :readonly="disableFlg"
                class="no-border"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_gpyKK"
        ref="viy2Flex_gpyKK"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_8PdCBi" ref="viy2Panel_8PdCBi" :title="t('label.detail')" :collapse="true" height="100%">
          <template #header>
            <div style="width: 400px">
              <VueRow
                id="viy2Row_8PdCBk"
                ref="viy2Row_8PdCBk"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton v-show="!disableFlg" id="viy2Button_8PdCBl" ref="viy2Button_8PdCBl" icon-position="left" class="icon-button-width" @click="viy2Button_8PdCBlClick">
                    +
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueRow
              id="viy2Row_8PdCBy"
              ref="viy2Row_8PdCBy"
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
              :edit-render="gridSymptomCdEditRender"
              field="symptomCd"
              :title="t('label.faultSectionCode')"
              width="300px"
            />
            <VueInputColumn
              :edit-render="gridDescriptionEditRender"
              field="description"
              :title="t('label.faultSectionName')"
              width="400px"
            />
            <VueButtonColumn
              :visible="!disableFlg"
              width="40px"
              :buttons="gridViy2TableButtonColumn_vGoCZButtons"
            />
            <VueInputColumn
              :edit-render="gridSymptomIdEditRender"
              field="symptomId"
              :visible="false"
              title="faultSectionId"
              width="150px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
