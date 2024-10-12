<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useUser } from 'viy-menu';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const uc = useUser().userInfo;
defineOptions({
  name: 'dim0203_01',
});
const form = ref();
const viy2Row_10QMyC = ref();
const viy2Panel_2rs6nZ = ref();
const orderForm = ref();
const viy2Row_4Hp8hY = ref();
const viy2InputBox_EGN3d = ref();
const viy2Button_6vnrzk = ref();
const workZoneBtn = ref();
const binTypeBtn = ref();
const viy2InputBox_6zyKla = ref();
const locationBtn = ref();
const viy2Button_6yU7kC = ref();
const partsDemandBtn = ref();
const viy2InputBox_6zyOGA = ref();
const viy2Panel_wZlWr = ref();
const uploadForm = ref();
const viy2Row_4Hp8hy = ref();
const copy0_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1 = ref();
const viy2Select_1rPSyEH = ref();
const viy2Button_6vuy8P = ref();
const formData = reactive({
});
const orderFormData = reactive({
  block1: '', block2: '', block3: '',
});
const uploadFormData = reactive({
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
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP', // CONSIGNEE | WO | ALL
  },
}, {
  manual: true,
});
const pointDs = pointDsApi.data;
const gridDsApi = useApi({
  url: '/parts/dim0203/doReUploadComplete.json',
  method: 'post',
  data: () => {
    return uploadFormData;
  },
}, {
  onSuccess: () => {
    VueMessage.success(t('ymc-commons.P.00005'));
  },
  manual: true,
});
const gridDs = gridDsApi.data;
const viy2Button_6vnrzkClick = () => {
  skipToOrderCancel();
}
;
const workZoneBtnClick = () => {
  skipToWzMainten();
};
const binTypeBtnClick = () => {
  skipToBinTypeMainten();
};
const locationBtnClick = () => {
  skipToLocImport();
};
const viy2Button_6yU7kCClick = () => {
  skipToPartsStockImport();
};
const partsDemandBtnClick = () => {
  skipToPartsDemandMainten();
};
const viy2Select_1rPSyEHChange = (value) => {
  uploadFormData.pointId = value;
};
const viy2Button_6vuy8PClick = () => {
  uploadForm.value.validate((valid) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
onMounted(() => {
  uploadFormData.point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  uploadFormData.pointId = uc.defaultPointId;
});
// 跳转详情页
const skipToOrderCancel = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'dim0204_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'dim0204_01' }).meta.title = t('title.partsUnfinishedOrderCancel_01');
  // router导航到页面并传递参数
  router.push({ name: 'dim0204_01', data });
};
// 跳转详情页
const skipToWzMainten = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'dim0205_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'dim0205_01' }).meta.title = t('title.workzoneMaintenance_01');
  // router导航到页面并传递参数
  router.push({ name: 'dim0205_01', data });
};
// 跳转详情页
const skipToBinTypeMainten = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'cmm0211_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'cmm0211_01' }).meta.title = t('title.binTypeMaintenance_01');
  // router导航到页面并传递参数
  router.push({ name: 'cmm0211_01', data });
};
// 跳转详情页
const skipToLocImport = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'dim0207_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'dim0207_01' }).meta.title = t('title.locationImport_01');
  // router导航到页面并传递参数
  router.push({ name: 'dim0207_01', data });
};
// 跳转详情页
const skipToPartsStockImport = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'dim0206_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'dim0206_01' }).meta.title = t('title.partsStockImport_01');
  // router导航到页面并传递参数
  router.push({ name: 'dim0206_01', data });
};
// 跳转详情页
const skipToPartsDemandMainten = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'cmm0509_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'cmm0509_01' }).meta.title = t('title.partsDemandImport_01');
  // router导航到页面并传递参数
  router.push({ name: 'cmm0509_01', data });
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
      />
      <VueCol
        item-key="item"
        align="right"
        :inline="true"
        :md="{ span: 12 }"
      />
    </VueRow>
    <VuePanel id="viy2Panel_2rs6nZ" ref="viy2Panel_2rs6nZ" :collapse="true" class="margin-top-div except-height-css">
      <VueForm
        id="orderForm"
        ref="orderForm"
        label-width="130px"
        :model="orderFormData"
      >
        <VueRow
          id="viy2Row_4Hp8hY"
          ref="viy2Row_4Hp8hY"
        >
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              prop="block1"
            >
              <VueInput
                id="viy2InputBox_EGN3d"
                ref="viy2InputBox_EGN3d"
                v-model="orderFormData.block1"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 7 }"
          >
            <VueButton id="viy2Button_6vnrzk" ref="viy2Button_6vnrzk" icon-position="left" size="large" :tabindex="200" class="btn" @click="viy2Button_6vnrzkClick">
              {{ t('button.unfinishedOrderCancel') }}
            </VueButton>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 7 }"
          >
            <VueButton id="workZoneBtn" ref="workZoneBtn" icon-position="left" size="large" :tabindex="200" class="btn" @click="workZoneBtnClick">
              {{ t('button.workzoneMaintenance') }}
            </VueButton>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 7 }"
          >
            <VueButton id="binTypeBtn" ref="binTypeBtn" icon-position="left" size="large" :tabindex="200" class="btn" @click="binTypeBtnClick">
              {{ t('button.binTypeMaintenance') }}
            </VueButton>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              prop="block2"
            >
              <VueInput
                id="viy2InputBox_6zyKla"
                ref="viy2InputBox_6zyKla"
                v-model="orderFormData.block2"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 7 }"
          >
            <VueButton id="locationBtn" ref="locationBtn" icon-position="left" size="large" :tabindex="200" class="btn" @click="locationBtnClick">
              {{ t('button.locationImport') }}
            </VueButton>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 7 }"
          >
            <VueButton id="viy2Button_6yU7kC" ref="viy2Button_6yU7kC" icon-position="left" size="large" :tabindex="200" class="btn" @click="viy2Button_6yU7kCClick">
              {{ t('button.partsStockImport') }}
            </VueButton>
          </VueCol>
          <VueCol
            item-key="item"
            align="right"
            :inline="true"
            :md="{ span: 7 }"
          >
            <VueButton id="partsDemandBtn" ref="partsDemandBtn" icon-position="left" size="large" :tabindex="200" class="btn" @click="partsDemandBtnClick">
              {{ t('button.partsDemandMaintenance') }}
            </VueButton>
          </VueCol>
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 24 }"
          >
            <VueFormItem
              prop="block3"
            >
              <VueInput
                id="viy2InputBox_6zyOGA"
                ref="viy2InputBox_6zyOGA"
                v-model="orderFormData.block3"
                :readonly="true"
                class="no-border"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
    <VuePanel id="viy2Panel_wZlWr" ref="viy2Panel_wZlWr" :collapse="true">
      <VueForm
        id="uploadForm"
        ref="uploadForm"
        label-width="130px"
        :model="uploadFormData"
      >
        <VueRow
          id="viy2Row_4Hp8hy"
          ref="viy2Row_4Hp8hy"
        >
          <VueCol
            id="copy0_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1"
            ref="copy0_copy0_copy0_copy0_copy0_copy1_copy0_copy0_viy2Row_eZL79_col1"
            item-key="item"
            :inline="true"
            :md="{ span: 6 }"
          >
            <VueFormItem
              :label="t('label.point')"
              prop="point"
              :rules="rules.viy2Select_1rPSyEHRules"
            >
              <VueSelect
                id="viy2Select_1rPSyEH"
                ref="viy2Select_1rPSyEH"
                v-model="uploadFormData.point"
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
          <VueCol
            item-key="item"
            :inline="true"
            :md="{ span: 16 }"
          >
            <VueButton id="viy2Button_6vuy8P" ref="viy2Button_6vuy8P" icon-position="left" size="large" @click="viy2Button_6vuy8PClick">
              {{ t('button.reUploadCompletion') }}
            </VueButton>
          </VueCol>
        </VueRow>
      </VueForm>
    </VuePanel>
  </VueForm>
</template>

<style type="text/css" scoped>
.btn{
width: 210px;
height: 40px;
}
</style>
