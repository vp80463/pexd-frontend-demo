<script setup>
import { IconDocument, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { get } from 'lodash-es';
import { useUser } from 'viy-menu';
import { useRouter } from 'vue-router';
import { CONST_SYSTEM_DATE_FORMAT } from '@/constants';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
const uc = useUser().userInfo;
let point;
let pointId;
defineOptions({
  name: 'spm0214_01',
});
const form = ref();
const viy2Row_zgSti = ref();
const viy2Button_2gh3Ey = ref();
const viy2Button_5FbWKc = ref();
const viy2Flex_gRSyH = ref();
const queryForm = ref();
const viy2Row_lOY8w = ref();
const viy2Select_oTfX9 = ref();
const viy2Select_1KZ5B6 = ref();
const viy2Flex_gRYhN = ref();
const grid = ref();
const viy2Row_soVPC = ref();
const formData = reactive({
});
const queryFormData = reactive({
  point: '', status: [],
});
const rules = reactive({
  viy2Select_oTfX9Rules: [
    {
      required: true,
      message: t('errors.required', [t('label.point')]),
    },
  ],
});
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_EYcPrButtons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconDocument,
      click: showRowDetail,
      title: 'Detail',
    },
  ];
};
const gridDsApi = useApi({
  url: '/parts/spm0214/getReturnRequestListList.json',
  method: 'post',
  data: () => {
    return { ...queryFormData };
  },
}, {
  manual: true,
});
const gridDs = gridDsApi.data;
const pointDsApi = useApi({
  url: '/common/helper/pointList.json',
  method: 'post',
  data: {
    arg0: 'SHOP',
  },
});
const pointDs = pointDsApi.data;
const mstCodeInfoDsApi = useApi({
  url: '/common/helper/getMstCodeInfos.json',
  method: 'post',
  data: ['S057'],
}, {
  initialData: {
    S057: [],
  },
});
const mstCodeInfoDs = mstCodeInfoDsApi.data;
const viy2Button_2gh3EyClick = () => {
  VueMessageBox.confirm(t('ymc-commons.P.00006'), t('title.warn'), {
    type: 'warning',
  }).then(() => {
    resetCondition();
  }).catch(() => {
  });
};
const viy2Button_5FbWKcClick = () => {
  const queryFormElement = queryForm.value;
  queryFormElement.validate((valid, fields) => {
    if (valid) {
      gridDsApi.runAsync();
    }
  });
};
const viy2Select_oTfX9Change = (value, data) => {
  queryFormData.pointId = data.id;
  queryFormData.pointCd = data.code;
  queryFormData.pointNm = data.name;
};
const gridCellDblclick = (obj) => {
  showRowDetail(obj.row);
};
const gridRequestStatusEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridRecommendDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'YYYYMMDD',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridRequestDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'YYYYMMDD',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridApprovedDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'YYYYMMDD',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
const gridExpireDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
      type: 'date',
      valueFormat: 'YYYYMMDD',
      format: CONST_SYSTEM_DATE_FORMAT.ymd,
    },
  };
});
onMounted(() => {
  point = `${uc.defaultPointCd} ${uc.defaultPointNm}`;
  pointId = uc.defaultPointId;
  queryFormData.point = point;
  queryFormData.pointId = pointId;
});
watch(() => ({ ...queryFormData }), (newVal, oldVal) => {
  resetTblResults();
}, { deep: true });
const resetCondition = () => {
// 清空表单元素
  queryForm.value.resetFields();
  queryFormData.point = point;
  queryFormData.pointId = pointId;
  resetTblResults();
};
const resetTblResults = () => {
  gridDs.value.splice(0);
};
const showRowDetail = (row) => {
  const query = { returnRequestListId: row.returnRequestListId };
  useMultiTags().openTag({
    name: 'spm0214_02', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0214_02' }).meta.title = t('title.partsReturnRequest_02');
  // router导航到页面并传递参数
  router.push({ name: 'spm0214_02', data: query });
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
      id="viy2Flex_gRSyH"
      ref="viy2Flex_gRSyH"
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
              :label="t('label.point')"
              prop="point"
              :rules="rules.viy2Select_oTfX9Rules"
            >
              <VueSelect
                id="viy2Select_oTfX9"
                ref="viy2Select_oTfX9"
                v-model="queryFormData.point"
                :collapse-tags="true"
                :filterable="true"
                :clearable="true"
                :collapse-tags-tooltip="true"
                :options="pointDs"
                :props="{
                  label: 'desc',
                  value: 'id',
                }"
                @change="viy2Select_oTfX9Change"
              />
            </VueFormItem>
            <VueFormItem
              :label="t('label.status')"
              prop="status"
            >
              <VueSelect
                id="viy2Select_1KZ5B6"
                ref="viy2Select_1KZ5B6"
                v-model="queryFormData.status"
                :style="{ width: '250px' }"
                :collapse-tags="true"
                :clearable="true"
                :filterable="true"
                :multiple="true"
                :collapse-tags-tooltip="true"
                :options="get(mstCodeInfoDs, 'S057')"
                :props="{
                  label: 'codeData1',
                  value: 'codeDbid',
                }"
              />
            </VueFormItem>
          </VueCol>
        </VueRow>
      </VueForm>
      <VueFlex
        id="viy2Flex_gRYhN"
        ref="viy2Flex_gRYhN"
        direction="column"
        grow="1"
      >
        <VueTable id="grid" ref="grid" header-align="center" height="100%" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig" @cell-dblclick="gridCellDblclick">
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
            :edit-render="gridRequestStatusEditRender"
            field="requestStatus"
            show-overflow="tooltip"
            :title="t('label.status')"
            width="110px"
          />
          <VueDateTimeColumn
            :edit-render="gridRecommendDateEditRender"
            field="recommendDate"
            align="center"
            :title="t('label.recommendedDate')"
            width="170px"
          />
          <VueDateTimeColumn
            :edit-render="gridRequestDateEditRender"
            field="requestDate"
            align="center"
            :title="t('label.requestDate')"
            width="140px"
          />
          <VueDateTimeColumn
            :edit-render="gridApprovedDateEditRender"
            field="approvedDate"
            align="center"
            :title="t('label.approvedDate')"
            width="140px"
          />
          <VueDateTimeColumn
            :edit-render="gridExpireDateEditRender"
            field="expireDate"
            align="center"
            :title="t('label.expiredDate')"
            width="140px"
          />
          <VueButtonColumn
            align="center"
            width="40px"
            :buttons="gridViy2TableButtonColumn_EYcPrButtons"
          />
        </VueTable>
      </VueFlex>
    </VueFlex>
  </VueForm>
</template>
