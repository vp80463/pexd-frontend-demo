<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
defineOptions({
  name: 'cmm0503_01',
});
const form = ref();
const viy2Flex_KQRHG = ref();
const conditionForm = ref();
const viy2Panel_g8RSh = ref();
const viy2Button_83Yd = ref();
const viy2Button_8d8t = ref();
const viy2Row_118QTw = ref();
const viy2Cascader_14yp9q = ref();
const viy2Flex_KQViE = ref();
const viy2Panel_g8SzT = ref();
const grid = ref();
const viy2Row_18ZEg = ref();
const formData = reactive({
});
const conditionFormData = reactive({
  largeGroup: [],
});
const viy2Cascader_14yp9qProps = reactive({
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
const largeGroupDsApi = useApi({
  url: '/common/helper/getLargeGroupList.json',
  method: 'post',
}, {
  initialData: {
    data: [],
  },
  manual: true,
});
const largeGroupDs = largeGroupDsApi.data;
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      largeGroupCd: '0',
      largeGroupNm: 'Ｍ／Ｃ部品',
      middleGroupCd: '0',
      middleGroupNm: 'オートバイ',
    },
    {
      largeGroupCd: '2',
      largeGroupNm: '特機',
      middleGroupCd: '1',
      middleGroupNm: '標準パーツ',
    },
    {
      largeGroupCd: '7',
      largeGroupNm: '船外機',
      middleGroupCd: '2',
      middleGroupNm: 'カート',
    },
    {
      largeGroupCd: '8',
      largeGroupNm: 'マリン',
      middleGroupCd: '3',
      middleGroupNm: '発電機',
    },
    {
      largeGroupCd: 'C',
      largeGroupNm: 'ヘルメット',
      middleGroupCd: '4',
      middleGroupNm: 'スノーモービル、除雪機',
    },
    {
      largeGroupCd: 'D',
      largeGroupNm: 'アパレル',
      middleGroupCd: '5',
      middleGroupNm: 'ゴルフカー、ランドカー',
    },
    {
      largeGroupCd: 'H',
      largeGroupNm: 'ボルトオン',
      middleGroupCd: '6',
      middleGroupNm: 'ＧＨＰ',
    },
  ],
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const jobDsApi = useApi({
  url: '/master/cmm0503/searchPartsMiddleGroupList.json',
  method: 'post',
  data: () => {
    return conditionFormData;
  },
}, {
  manual: true,
});
const jobDs = jobDsApi.data;
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
const viy2Button_83YdClick = () => {
// jobDsApi.runAsync();
  gridDsApi.runAsync();
};
const viy2Button_8d8tClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
    jobDsApi.runAsync();
  }).catch(() => {
  });
};
const gridLargeGroupCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridLargeGroupNmEditRender = computed(() => {
  return {
    enabled: false,
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
onMounted(() => {
});
watch(() => conditionFormData, (newVal, oldVal) => {
  resetTblResults();
}, { deep: true },
);
const resetCondition = () => {
// 清空表单元素
  conditionForm.value.resetFields();
  // 清空queryFormData中的其他值
  for (const key in conditionFormData) {
    conditionFormData[key] = ''; // 或者设置为初始值
  }
  resetTblResults();
};
const resetTblResults = () => {
  jobDs.value.splice(0);
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_KQRHG"
      ref="viy2Flex_KQRHG"
      direction="column"
      class="full-height"
    >
      <VueForm
        id="conditionForm"
        ref="conditionForm"
        label-width="auto"
        :model="conditionFormData"
      >
        <VuePanel id="viy2Panel_g8RSh" ref="viy2Panel_g8RSh" title="検索条件">
          <template #header>
            <div style="width: auto">
              <VueButton id="viy2Button_83Yd" ref="viy2Button_83Yd" icon-position="left" type="info" @click="viy2Button_83YdClick">
                検索
              </VueButton>
              <VueButton id="viy2Button_8d8t" ref="viy2Button_8d8t" icon-position="left" @click="viy2Button_8d8tClick">
                {{ t('button.reset') }}
              </VueButton>
            </div>
          </template>
          <VueRow
            id="viy2Row_118QTw"
            ref="viy2Row_118QTw"
            :gutter="15"
          >
            <VueCol
              item-key="item"
              :md="{ span: 12 }"
            >
              <VueFormItem
                label="大区分"
                prop="largeGroup"
              >
                <VueCascader
                  id="viy2Cascader_14yp9q"
                  ref="viy2Cascader_14yp9q"
                  v-model="conditionFormData.largeGroup"
                  display-member="label"
                  value-member="value"
                  :style="{ width: '200px' }"
                  :options="groupDs"
                  :props="viy2Cascader_14yp9qProps"
                />
              </VueFormItem>
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_KQViE"
        ref="viy2Flex_KQViE"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_g8SzT" ref="viy2Panel_g8SzT" title="明細情報" height="100%">
          <VueTable id="grid" ref="grid" header-align="center" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueRow
              id="viy2Row_18ZEg"
              ref="viy2Row_18ZEg"
            >
              <VueCol
                item-key="item"
                :md="{ span: 24 }"
              />
            </VueRow>
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
              title="No."
            />
            <VueInputColumn
              :edit-render="gridLargeGroupCdEditRender"
              field="largeGroupCd"
              :sortable="true"
              title="大区分番号"
              width="160px"
            />
            <VueInputColumn
              :edit-render="gridLargeGroupNmEditRender"
              field="largeGroupNm"
              :sortable="true"
              title="大区分名"
              width="200px"
            />
            <VueInputColumn
              :edit-render="gridMiddleGroupCdEditRender"
              field="middleGroupCd"
              :sortable="true"
              title="中区分番号"
              width="160px"
            />
            <VueInputColumn
              :edit-render="gridMiddleGroupNmEditRender"
              field="middleGroupNm"
              show-overflow="tooltip"
              :sortable="true"
              title="中区分名"
              width="200px"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>

<style type="text/css" scoped>
.rotate-icon {
transform: rotate(90deg);
font-size: large;
align-self: center;
}
.row-margin-top {
margin-top: 10px;
}
</style>
