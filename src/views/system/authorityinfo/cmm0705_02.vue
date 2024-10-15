<script setup>
import { IconHide, VueUtil, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const { proxy } = getCurrentInstance();
const detailPanelModel = ref(true);
const partsCostHidden = false;
defineOptions({
  name: 'cmm0705_02',
});
const form = ref();
const viy2Row_10QMyC = ref();
const resetBtn = ref();
const confirmBtn = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_3mqzSt = ref();
const viy2InputBox_2MEHpU = ref();
const viy2Button_hk1zb = ref();
const viy2InputBox_2MEGcU = ref();
const viy2Button_2NgSKU = ref();
const viy2InputBox_TFFBXK = ref();
const viy2Button_2NgRba = ref();
const partsAside = ref();
const viy2Subpage_fInzM = ref();
const partsMultiAside = ref();
const viy2Subpage_OzNTu = ref();
const consumerAside = ref();
const viy2Subpage_BTeF1 = ref();
const formData = reactive({
});
const orderFormData = reactive({
  oldPassword: '', newPassword: '', retypeNewPassword: '',
});
const rules = reactive({
  viy2InputBox_2MEHpURules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_2MEGcURules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
  viy2InputBox_TFFBXKRules: [
    {
      required: true,
      message: t('validation.error.required'),
    },
  ],
});
const showPartsWin = ref(false);
const showPartsMultiWin = ref(false);
const showConsumerWin = ref(false);
const reasonTypeDsApi = useApi({
  method: 'post',
  localData: [
    { label: 'Adjustment to Frozen', value: '1' },
    { label: 'Normal Stock Adjustment (+/-)', value: '2' },
  ],
});
const reasonTypeDs = reasonTypeDsApi.data;
const reasonDsApi = useApi({
  method: 'post',
  localData: [
    { label: 'Damage', value: '1' },
    { label: 'Find Out', value: '2' },
    { label: 'Fixed', value: '3' },
    { label: 'Lost', value: '4' },
    { label: 'STOCKTAKINGFIND', value: '5' },
    { label: 'STOCKTAKINGLOST', value: '6' },
  ],
});
const reasonDs = reasonDsApi.data;
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
      </VueCol>
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      >
        <VueButton id="confirmBtn" ref="confirmBtn" icon-position="left" type="info">
          Confirm
        </VueButton>
      </VueCol>
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" title="Header" class="margin-top-div except-height-css">
      <VueForm
        id="orderForm"
        ref="orderForm"
        label-width="145px"
        :model="orderFormData"
      >
        <VueRow
          id="viy2Row_3mqzSt"
          ref="viy2Row_3mqzSt"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 18 }"
          >
            <VueFormItem
              label="Old Password"
              label-width="160px"
              prop="oldPassword"
              :rules="rules.viy2InputBox_2MEHpURules"
            >
              <VueInput
                id="viy2InputBox_2MEHpU"
                ref="viy2InputBox_2MEHpU"
                v-model="orderFormData.oldPassword"
                :clearable="false"
              />
            </VueFormItem>
            <VueButton id="viy2Button_hk1zb" ref="viy2Button_hk1zb" icon-position="left" type="text" class="icon-button-width" :icon="IconHide" />
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 18 }"
          >
            <VueFormItem
              label="New Password"
              label-width="160px"
              prop="newPassword"
              :rules="rules.viy2InputBox_2MEGcURules"
            >
              <VueInput
                id="viy2InputBox_2MEGcU"
                ref="viy2InputBox_2MEGcU"
                v-model="orderFormData.newPassword"
                :clearable="false"
              />
            </VueFormItem>
            <VueButton id="viy2Button_2NgSKU" ref="viy2Button_2NgSKU" icon-position="left" type="text" class="icon-button-width" :icon="IconHide" />
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 18 }"
          >
            <VueFormItem
              label="Retype New Password"
              label-width="160px"
              prop="retypeNewPassword"
              :rules="rules.viy2InputBox_TFFBXKRules"
            >
              <VueInput
                id="viy2InputBox_TFFBXK"
                ref="viy2InputBox_TFFBXK"
                v-model="orderFormData.retypeNewPassword"
                :clearable="false"
              />
            </VueFormItem>
            <VueButton id="viy2Button_2NgRba" ref="viy2Button_2NgRba" icon-position="left" type="text" class="icon-button-width" :icon="IconHide" />
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 16 }"
          >
            <VueText id="viy2Text_higuX" ref="viy2Text_higuX" type="info" :style="{ width: '100%', display: 'inline-block' }">
              ✔ The PWD need to equal or greater than 6 digit.
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 16 }"
          >
            <VueText id="viy2Text_2MZyOy" ref="viy2Text_2MZyOy" type="info" :style="{ width: '100%', display: 'inline-block' }">
              ✔ The PWD need to include the lowercase letter,uppercase letter.
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 8 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 16 }"
          >
            <VueText id="viy2Text_2MYC48" ref="viy2Text_2MYC48" type="info" :style="{ width: '100%', display: 'inline-block' }">
              ✔ The PWD cannot be the same with the User ID .
            </VueText>
          </VueCol>
          <VueCol
            item-key="item"
            :md="{ span: 8 }"
          />
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 16 }"
          >
            <VueText id="viy2Text_2MZA30" ref="viy2Text_2MZA30" type="info" :style="{ width: '100%', display: 'inline-block' }">
              ✔ The PWD cannot be the same with the latest one.
            </VueText>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VueAside
      id="partsAside"
      ref="partsAside"
      v-model="showPartsWin"
      :modal="true"
      direction="rtl"
      size="70%"
      :with-header="false"
      :show-close="false"
    />
    <VueAside
      id="partsMultiAside"
      ref="partsMultiAside"
      v-model="showPartsMultiWin"
      :modal="true"
      direction="btt"
      size="90%"
      :with-header="false"
      :show-close="false"
    />
    <VueAside
      id="consumerAside"
      ref="consumerAside"
      v-model="showConsumerWin"
      :modal="true"
      direction="rtl"
      size="60%"
      :with-header="false"
      :show-close="false"
    />
  </VueForm>
</template>
