<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const startFlag = ref(false);
defineOptions({
  name: 'spm0308_01',
});
const form = ref();
const viy2Panel_2rs6nZ = ref();
const StartBtn = ref();
const queryForm = ref();
const viy2Row_6qyMmI = ref();
const viy2Select_6qyMn4 = ref();
const viy2Radio_12hBNSa = ref();
const formData = reactive({
});
const queryFormData = reactive({
  point: '', stockTakingRange: '0',
});
const rules = reactive({
  viy2Select_6qyMn4Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
  viy2Radio_12hBNSaRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const viy2Radio_12hBNSaOpts = reactive([
  { value: '0', label: '在庫のみ' },
  { value: '1', label: 'すべて' },
]);
const startDsApi = useApi({
  url: '/parts/spm0308/doStartStockTaking.json',
  method: 'post',
  data: () => {
    return {
      pointId: queryFormData.pointId,
      pointvl: queryFormData.pointvl,
      stockTakingRange: queryFormData.stockTakingRange,
    };
  },
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
    startFlag.value = true;
    onPrintBtn();
  },
  manual: true,
});
const startDs = startDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const StartBtnClick = () => {
  queryForm.value.validate((valid) => {
    if (valid) {
      startDsApi.runAsync();
    }
  });
};
const viy2Select_6qyMn4Change = (value, data) => {
  queryFormData.pointId = data.id;
  queryFormData.pointCd = data.code;
};
onMounted(() => {
  queryFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  queryFormData.pointId = uc.defaultPointId;
  queryFormData.pointCd = uc.defaultPointCd;
  queryFormData.pointNm = uc.defaultPointNm;
});
const onPrintBtn = () => {
  useApi(
    {
      url: '/parts/spm0308/printPartsStocktakingResultList.json',
      method: 'post',
      responseType: 'blob',
      data: () => {
        return queryFormData;
      },
      timeout: 30000,
    },
    {
      onSuccess: (data, params) => {
        toFile(data, 'PartStocktakingResultList.pdf');
      },
    },
  );
};
const toFile = (data, fileNm) => {
  const url = URL.createObjectURL(data);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = fileNm;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="棚卸情報" collapse-icon-position="left">
      <template #header>
        <div style="width: auto">
          <VueButton id="StartBtn" ref="StartBtn" type="info" :disabled="startFlag" icon-position="right" @click="StartBtnClick">
            棚卸開始
          </VueButton>
        </div>
      </template>
      <VueForm
        id="queryForm"
        ref="queryForm"
        label-width="80px"
        :model="queryFormData"
      >
        <VueRow
          id="viy2Row_6qyMmI"
          ref="viy2Row_6qyMmI"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueText v-if="false" id="viy2Text_6qyMmT" ref="viy2Text_6qyMmT" :style="{ width: '100%', display: 'inline-block' }">
              1.棚卸倉庫を選択
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              v-if="false"
              label="倉庫"
              prop="point"
              :rules="rules.viy2Select_6qyMn4Rules"
            >
              <VueSelect
                id="viy2Select_6qyMn4"
                ref="viy2Select_6qyMn4"
                v-model="queryFormData.point"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_6qyMn4Change"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueText v-if="false" id="viy2Text_6qyMnZ" ref="viy2Text_6qyMnZ" :style="{ width: '100%', display: 'inline-block' }">
              2.棚卸種別を選択
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 24 }"
          >
            <VueFormItem
              label="棚卸種別"
              label-width="100px"
              prop="stockTakingRange"
              :rules="rules.viy2Radio_12hBNSaRules"
            >
              <VueRadioGroup
                id="viy2Radio_12hBNSa"
                ref="viy2Radio_12hBNSa"
                v-model="queryFormData.stockTakingRange"
                radio-style="button"
                direction="horizontal"
                split-size="default"
              >
                <VueRadioButton
                  v-for="option in viy2Radio_12hBNSaOpts"
                  :key="option.value"
                  :label="option.value"
                >
                  {{ option.label }}
                </VueRadioButton>
              </VueRadioGroup>
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueText v-if="false" id="viy2Text_12hBNTO" ref="viy2Text_12hBNTO" :style="{ width: '100%', display: 'inline-block' }">
              3.「開始」ボタンをクリックして棚卸を開始
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueText id="viy2Text_12hBNX3" ref="viy2Text_12hBNX3" :style="{ width: '100%', display: 'inline-block', fontWeight: 'bold' }">
              備考
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueText id="viy2Text_12hBNYG" ref="viy2Text_12hBNYG" :style="{ width: '100%', display: 'inline-block' }">
              1.棚卸前に出庫中や受入中の在庫を確認し、処理を完了してください。
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueText id="viy2Text_12hBO0g" ref="viy2Text_12hBO0g" :style="{ width: '100%', display: 'inline-block' }">
              2.棚卸開始後、検索機能以外のシステム機能は無効になります。
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueText id="viy2Text_6qSucg" ref="viy2Text_6qSucg" :style="{ width: '100%', display: 'inline-block' }">
              3.棚卸開始後、「棚卸完成/取消」画面に今回の棚卸を終了できます。
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueText id="viy2Text_6qStFQ" ref="viy2Text_6qStFQ" :style="{ width: '100%', display: 'inline-block' }">
              4.「棚卸開始」ボタンをクリックして棚卸を開始し、棚卸リストを印刷します。
            </VueText>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
  </VueForm>
</template>
