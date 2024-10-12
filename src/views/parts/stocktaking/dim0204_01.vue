<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const uc = useUser().userInfo;
const SPFlag = ref(false);
const SVFlag = ref(false);
const PSFlag = ref(false);
defineOptions({
  name: 'dim0204_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const orderForm = ref();
const viy2Row_4Hp8h3 = ref();
const viy2Select_1rPSyEH = ref();
const viy2Row_EO1Qo = ref();
const viy2Panel_6B36vK = ref();
const viy2Row_4Hp8hY = ref();
const copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1 = ref();
const viy2InputBox_6Bs25e = ref();
const viy2Button_6Bs25L = ref();
const viy2InputBox_6Bs266 = ref();
const viy2Button_6Bs26t = ref();
const viy2InputBox_6Bs26E = ref();
const viy2Panel_6BtiEG = ref();
const viy2Row_6BtiFm = ref();
const copy0_copy0_copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1 = ref();
const viy2InputBox_6BtiFS = ref();
const viy2Button_6BtiGp = ref();
const viy2InputBox_6BtiGK = ref();
const viy2Button_142G0X9 = ref();
const viy2InputBox_142G0YM = ref();
const viy2Panel_6Bt1Z8 = ref();
const viy2Row_6Bt1Zu = ref();
const copy0_copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1 = ref();
const viy2InputBox_6Bt1ZQ = ref();
const viy2Button_6Bt20n = ref();
const viy2InputBox_6Bt20I = ref();
const viy2Button_142Gke3 = ref();
const viy2InputBox_142GkiU = ref();
const viy2Panel_6BtCkQ = ref();
const viy2Row_6BtClc = ref();
const copy0_copy0_copy0_copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1 = ref();
const viy2InputBox_6BtCly = ref();
const viy2Button_6BtClV = ref();
const viy2InputBox_6BtCmg = ref();
const viy2InputBox_142MbFW = ref();
const formData = reactive({
  block1: '', block5: '', block9: '', block2: '', block6: '', block10: '', block3: '', block7: '', block11: '', block4: '', block8: '', datafieldviy2InputBox_EGN3d: '',
});
const orderFormData = reactive({
  point: '',
});
const rules = reactive({
  viy2Select_1rPSyEHRules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const SPCancelDsApi = useApi({
  url: '/parts/dim0204/doSparePartsCancel.json',
  method: 'post',
  data: () => {
    return orderFormData;
  },
  lockScreen: true,
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
  },
  manual: true,
});
const SPCancelDs = SPCancelDsApi.data;
const storingCancelDsApi = useApi({
  url: '/parts/dim0204/doPartsStoringCancel.json',
  method: 'post',
  data: () => {
    return orderFormData;
  },
  lockScreen: true,
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
  },
  manual: true,
});
const storingCancelDs = storingCancelDsApi.data;
const validateDsApi = useApi({
  url: '/parts/dim0204/doValidate.json',
  method: 'post',
  data: () => {
    return orderFormData;
  },
  lockScreen: true,
}, {
  onSuccess: () => {
    if (SPFlag.value) {
      SPDownloadDsApi.runAsync();
      SPFlag.value = false;
    } else if (SVFlag.value) {
      SVDownloadDsApi.runAsync();
      SVFlag.value = false;
    } else if (PSFlag.value) {
      storingDownloadDsApi.runAsync();
      PSFlag.value = false;
    }
  },
  manual: true,
});
const validateDs = validateDsApi.data;
const storingDownloadDsApi = useApi({
  url: '/parts/dim0204/doPartsStoringDownload.json',
  method: 'post',
  data: () => {
    return orderFormData;
  },
  responseType: 'blob',
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'DIM0204_01_PartsStoring.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const storingDownloadDs = storingDownloadDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
});
const pointDs = pointDsApi.data;
const SPDownloadDsApi = useApi({
  url: '/parts/dim0204/doSparePartsDownload.json',
  method: 'post',
  data: () => {
    return orderFormData;
  },
  responseType: 'blob',
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'DIM0204_01_PartsFastSales.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const SPDownloadDs = SPDownloadDsApi.data;
const deleteDsApi = useApi({
  url: '/parts/dim0204/doLocationDelete.json',
  method: 'post',
  data: () => {
    return orderFormData;
  },
  lockScreen: true,
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
  },
  manual: true,
});
const deleteDs = deleteDsApi.data;
const SVDownloadDsApi = useApi({
  url: '/parts/dim0204/doServiceDownload.json',
  method: 'post',
  data: () => {
    return orderFormData;
  },
  responseType: 'blob',
  lockScreen: true,
}, {
  onSuccess: (data, params) => {
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'DIM0204_01_Service.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    }
  },
  manual: true,
});
const SVDownloadDs = SVDownloadDsApi.data;
const SVCancelDsApi = useApi({
  url: '/parts/dim0204/doServiceCancel.json',
  method: 'post',
  data: () => {
    return orderFormData;
  },
  lockScreen: true,
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
  },
  manual: true,
});
const SVCancelDs = SVCancelDsApi.data;
const viy2Select_1rPSyEHChange = (value, data) => {
  orderFormData.pointId = data.id;
  orderFormData.pointCd = data.code;
};
const viy2Button_6Bs25LClick = () => {
  orderForm.value.validate((valid) => {
    if (valid) {
      SPFlag.value = true;
      validateDsApi.runAsync();
    }
  });
};
const viy2Button_6Bs26tClick = () => {
  orderForm.value.validate((valid) => {
    if (valid) {
      SPCancelDsApi.runAsync();
    }
  });
};
const viy2Button_6BtiGpClick = () => {
  orderForm.value.validate((valid) => {
    if (valid) {
      SVFlag.value = true;
      validateDsApi.runAsync();
    }
  });
};
const viy2Button_142G0X9Click = () => {
  orderForm.value.validate((valid) => {
    if (valid) {
      SVCancelDsApi.runAsync();
    }
  });
};
const viy2Button_6Bt20nClick = () => {
  orderForm.value.validate((valid) => {
    if (valid) {
      PSFlag.value = true;
      validateDsApi.runAsync();
    }
  });
};
const viy2Button_142Gke3Click = () => {
  orderForm.value.validate((valid) => {
    if (valid) {
      storingCancelDsApi.runAsync();
    }
  });
};
const viy2Button_6BtClVClick = () => {
  orderForm.value.validate((valid) => {
    if (valid) {
      deleteDsApi.runAsync();
    }
  });
};
onMounted(() => {
  orderFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  orderFormData.pointId = uc.defaultPointId;
  orderFormData.pointCd = uc.defaultPointCd;
});
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
      />
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      />
    </VueRow>
    <VueForm
      id="orderForm"
      ref="orderForm"
      class="margin-top-div0 except-height-css"
      :model="orderFormData"
    >
      <VueRow
        id="viy2Row_4Hp8h3"
        ref="viy2Row_4Hp8h3"
      >
        <VueCol
          item-key="item"
          :inline="true"
          :md="{ span: 24 }"
        >
          <VueFormItem
            :label="t('label.point')"
            prop="point"
            :rules="rules.viy2Select_1rPSyEHRules"
          >
            <VueSelect
              id="viy2Select_1rPSyEH"
              ref="viy2Select_1rPSyEH"
              v-model="orderFormData.point"
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
              @change="viy2Select_1rPSyEHChange"
            />
          </VueFormItem>
        </VueCol>
      </VueRow>
    </VueForm>
    <VueRow
      id="viy2Row_EO1Qo"
      ref="viy2Row_EO1Qo"
    >
      <VueCol
        item-key="item"
        :md="{ span: 6 }"
      >
        <VuePanel id="viy2Panel_6B36vK" ref="viy2Panel_6B36vK" :title="t('label.sparePart')" :collapse="true">
          <VueRow
            id="viy2Row_4Hp8hY"
            ref="viy2Row_4Hp8hY"
          >
            <VueCol
              id="copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1"
              ref="copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1"
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block1"
              >
                <VueInput
                  id="viy2InputBox_6Bs25e"
                  ref="viy2InputBox_6Bs25e"
                  v-model="formData.block1"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_6Bs25L" ref="viy2Button_6Bs25L" width="100px" icon-position="left" size="large" @click="viy2Button_6Bs25LClick">
                {{ t('button.download') }}
              </VueButton>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block5"
              >
                <VueInput
                  id="viy2InputBox_6Bs266"
                  ref="viy2InputBox_6Bs266"
                  v-model="formData.block5"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_6Bs26t" ref="viy2Button_6Bs26t" weight="100px" icon-position="left" size="large" @click="viy2Button_6Bs26tClick">
                {{ t('button.Cancel') }}
              </VueButton>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block9"
              >
                <VueInput
                  id="viy2InputBox_6Bs26E"
                  ref="viy2InputBox_6Bs26E"
                  v-model="formData.block9"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueCol>
      <VueCol
        item-key="item"
        :md="{ span: 6 }"
      >
        <VuePanel id="viy2Panel_6BtiEG" ref="viy2Panel_6BtiEG" :title="t('label.service')" :collapse="true">
          <VueRow
            id="viy2Row_6BtiFm"
            ref="viy2Row_6BtiFm"
          >
            <VueCol
              id="copy0_copy0_copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1"
              ref="copy0_copy0_copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1"
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block2"
              >
                <VueInput
                  id="viy2InputBox_6BtiFS"
                  ref="viy2InputBox_6BtiFS"
                  v-model="formData.block2"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_6BtiGp" ref="viy2Button_6BtiGp" icon-position="left" size="large" @click="viy2Button_6BtiGpClick">
                {{ t('button.download') }}
              </VueButton>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block6"
              >
                <VueInput
                  id="viy2InputBox_6BtiGK"
                  ref="viy2InputBox_6BtiGK"
                  v-model="formData.block6"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_142G0X9" ref="viy2Button_142G0X9" icon-position="left" size="large" @click="viy2Button_142G0X9Click">
                {{ t('button.Cancel') }}
              </VueButton>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block10"
              >
                <VueInput
                  id="viy2InputBox_142G0YM"
                  ref="viy2InputBox_142G0YM"
                  v-model="formData.block10"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueCol>
      <VueCol
        item-key="item"
        :md="{ span: 6 }"
      >
        <VuePanel id="viy2Panel_6Bt1Z8" ref="viy2Panel_6Bt1Z8" :title="t('common.label.partsStoring')" :collapse="true">
          <VueRow
            id="viy2Row_6Bt1Zu"
            ref="viy2Row_6Bt1Zu"
          >
            <VueCol
              id="copy0_copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1"
              ref="copy0_copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1"
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block3"
              >
                <VueInput
                  id="viy2InputBox_6Bt1ZQ"
                  ref="viy2InputBox_6Bt1ZQ"
                  v-model="formData.block3"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_6Bt20n" ref="viy2Button_6Bt20n" icon-position="left" size="large" @click="viy2Button_6Bt20nClick">
                {{ t('button.download') }}
              </VueButton>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block7"
              >
                <VueInput
                  id="viy2InputBox_6Bt20I"
                  ref="viy2InputBox_6Bt20I"
                  v-model="formData.block7"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_142Gke3" ref="viy2Button_142Gke3" icon-position="left" size="large" @click="viy2Button_142Gke3Click">
                {{ t('button.Cancel') }}
              </VueButton>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block11"
              >
                <VueInput
                  id="viy2InputBox_142GkiU"
                  ref="viy2InputBox_142GkiU"
                  v-model="formData.block11"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueCol>
      <VueCol
        item-key="item"
        :md="{ span: 6 }"
      >
        <VuePanel id="viy2Panel_6BtCkQ" ref="viy2Panel_6BtCkQ" :title="t('label.location')" :collapse="true" height="210px">
          <VueRow
            id="viy2Row_6BtClc"
            ref="viy2Row_6BtClc"
          >
            <VueCol
              id="copy0_copy0_copy0_copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1"
              ref="copy0_copy0_copy0_copy2_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1"
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block4"
              >
                <VueInput
                  id="viy2InputBox_6BtCly"
                  ref="viy2InputBox_6BtCly"
                  v-model="formData.block4"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueButton id="viy2Button_6BtClV" ref="viy2Button_6BtClV" icon-position="left" size="large" @click="viy2Button_6BtClVClick">
                {{ t('button.delete') }}
              </VueButton>
            </VueCol>
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="block8"
              >
                <VueInput
                  id="viy2InputBox_6BtCmg"
                  ref="viy2InputBox_6BtCmg"
                  v-model="formData.block8"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
            <VueCol
              item-key="item"
              align="center"
              :inline="true"
              :md="{ span: 24 }"
            />
            <VueCol
              item-key="item"
              :inline="true"
              :md="{ span: 24 }"
            >
              <VueFormItem
                prop="datafieldviy2InputBox_EGN3d"
              >
                <VueInput
                  id="viy2InputBox_142MbFW"
                  ref="viy2InputBox_142MbFW"
                  v-model="formData.datafieldviy2InputBox_EGN3d"
                  :readonly="true"
                  class="no-border"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueCol>
    </VueRow>
  </VueForm>
</template>
