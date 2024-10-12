<script setup>
import { IconDocumentCopy, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
import { CONST_SYSTEM_DATE_FORMAT, CONST_SYSTEM_DATE_VALUE_FORMAT, CONST_SYSTEM_TIME_VALUE_FORMAT } from '@/constants';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
let cpId = null;
let cpNo = null;
let cpType = null;
let cpTitle = null;
let effDate = null;
let expDate = null;
let cpDes = null;
const disableFlg = ref(true);
const detailMdl = ref(true);
defineOptions({
  name: 'cmq0603_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const confirmBtn = ref();
const viy2Button_4zxG7I = ref();
const viy2Flex_v0d7L = ref();
const queryForm = ref();
const viy2Row_502vde = ref();
const viy2InputBox_502vdf = ref();
const viy2DateTimePicker_502vds = ref();
const viy2Flex_55eD1k = ref();
const viy2Panel_55gxFs = ref();
const viy2Row_3e1vow = ref();
const viy2Button_55kX8M = ref();
const grid = ref();
const viy2Row_55gxFG = ref();
const formData = reactive({
});
const queryFormData = reactive({
  campaignNo: '', validDate: '',
});
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
      icon: IconDocumentCopy,
      click: viewDetail,
      title: 'Detail',
    },
  ];
};
const gridDsApi = useApi({
  url: '/master/cmq0603/findServiceJobInquiryList.json',
  method: 'post',
  data: () => {
    return queryFormData;
  },
}, {
  onSuccess: () => {
    disableFlg.value = true;
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const confirmBtnClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_4zxG7IClick = () => {
  gridDsApi.runAsync();
};
const viy2Button_55kX8MClick = () => {
  const data = {
    campaignId: cpId,
    campaignNo: cpNo,
    campaignType: cpType,
    campaignTitle: cpTitle,
    effectiveDate: effDate,
    expiredDate: expDate,
    campaignDescription: cpDes,
  };
  useMultiTags().openTag({
    name: 'cmq0603_03',
  });
  useMultiTags().getTag({ name: 'cmq0603_03' }).meta.title = t('title.campaignResult_03');
  router.push({ name: 'cmq0603_03', data });
};
const gridCellClick = (obj) => {
  const row = obj.row;
  cpId = row.campaignId;
  cpNo = row.campaignNo;
  cpType = row.campaignType;
  cpTitle = row.campaignTitle;
  effDate = row.effectiveDate;
  expDate = row.expiredDate;
  cpDes = row.campaignDescription;
  disableFlg.value = false;
};
const gridBulletinNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCampaignNoEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCampaignTypeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCampaignTitleEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridEffectiveDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridExpiredDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      valueFormat: CONST_SYSTEM_TIME_VALUE_FORMAT.ymd,
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridCampaignIdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridCampaignDescriptionEditRender = computed(() => {
  return {
    enabled: false,
  };
});
onMounted(() => {
});
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in queryFormData) {
    queryFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
  disableFlg.value = true;
};
const resetTblResults = () => {
  gridDs.value.splice(0);
};
const viewDetail = (row) => {
  const data = {
    campaignId: row.campaignId,
    campaignNo: row.campaignNo,
    campaignType: row.campaignType,
    campaignTitle: row.campaignTitle,
    effectiveDate: row.effectiveDate,
    expiredDate: row.expiredDate,
    campaignDescription: row.campaignDescription,
  };
  useMultiTags().openTag({
    name: 'cmq0603_02',
  });
  useMultiTags().getTag({ name: 'cmq0603_02' }).meta.title = t('title.campaignDetail_02');
  router.push({ name: 'cmq0603_02', data });
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
        <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="warning" @click="confirmBtnClick">
          {{ t('button.reset') }}
        </VueButton>
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="viy2Button_4zxG7I" ref="viy2Button_4zxG7I" icon-position="left" type="info" @click="viy2Button_4zxG7IClick">
          {{ t('button.retrieve') }}
        </VueButton>
      </VueCol>
    </VueRow>
    <VueFlex
      id="viy2Flex_v0d7L"
      ref="viy2Flex_v0d7L"
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
          id="viy2Row_502vde"
          ref="viy2Row_502vde"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.campaignNo')"
              label-width="130px"
              prop="campaignNo"
            >
              <VueInput
                id="viy2InputBox_502vdf"
                ref="viy2InputBox_502vdf"
                v-model="queryFormData.campaignNo"
                :maxlength="40"
                :style="{ width: '200px' }"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          >
            <VueFormItem
              :label="t('label.validDate')"
              label-width="130px"
              prop="validDate"
            >
              <VueDatePicker
                id="viy2DateTimePicker_502vds"
                ref="viy2DateTimePicker_502vds"
                v-model="queryFormData.validDate"
                type="date"
                :style="{ width: '200px' }"
                :format="CONST_SYSTEM_DATE_FORMAT.ymd"
                :value-format="CONST_SYSTEM_DATE_VALUE_FORMAT.ymd"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_55eD1k"
        ref="viy2Flex_55eD1k"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_55gxFs" ref="viy2Panel_55gxFs" v-model="detailMdl" height="100%" :title="t('label.detail')" :collapse="true">
          <template #header>
            <div style="width: 400px">
              <VueRow
                v-show="detailMdl"
                id="viy2Row_3e1vow"
                ref="viy2Row_3e1vow"
              >
                <VueCol
                  item-key="item"
                  align="right"
                  :inline="true"
                  :md="{ span: 24 }"
                >
                  <VueButton id="viy2Button_55kX8M" ref="viy2Button_55kX8M" icon-position="left" :disabled="disableFlg" @click="viy2Button_55kX8MClick">
                    {{ t('label.result') }}
                  </VueButton>
                </VueCol>
              </VueRow>
            </div>
          </template>
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-click="gridCellClick">
            <VueRow
              id="viy2Row_55gxFG"
              ref="viy2Row_55gxFG"
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
              :edit-render="gridBulletinNoEditRender"
              field="bulletinNo"
              :title="t('label.bulletinNo')"
              width="120px"
            />
            <VueInputColumn
              :edit-render="gridCampaignNoEditRender"
              field="campaignNo"
              show-overflow="tooltip"
              :title="t('label.campaignNumber')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridCampaignTypeEditRender"
              field="campaignType"
              show-overflow="tooltip"
              :title="t('label.campaignType')"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridCampaignTitleEditRender"
              field="campaignTitle"
              show-overflow="tooltip"
              :title="t('label.campaignTitle')"
              width="150px"
            />
            <VueDateTimeColumn
              :edit-render="gridEffectiveDateEditRender"
              field="effectiveDate"
              align="center"
              :title="t('label.effectiveDate')"
              width="120px"
            />
            <VueDateTimeColumn
              :edit-render="gridExpiredDateEditRender"
              field="expiredDate"
              align="center"
              :title="t('label.expiredDate')"
              width="120px"
            />
            <VueButtonColumn
              align="center"
              width="40px"
              :buttons="gridViy2TableButtonColumn_ngQpnButtons"
            />
            <VueInputColumn
              :edit-render="gridCampaignIdEditRender"
              field="campaignId"
              :visible="false"
              title="campaignId"
              width="150px"
            />
            <VueInputColumn
              :edit-render="gridCampaignDescriptionEditRender"
              field="campaignDescription"
              :visible="false"
              title="campaignDescription"
              width="150px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
