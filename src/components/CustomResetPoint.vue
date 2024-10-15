<script setup>
import { useI18n } from 'vue-i18n';
import { VueCol, VueDialog, VueIndexColumn, VueInputColumn, VueRow, VueTable } from 'viy-ui';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();

const pointCd = ref();
const pointId = ref();
const pointNm = ref();
const showFlag = ref(false);
const viy2Dialog = ref();
const pointList = ref();
const viy2Row = ref();
const viy2Table = ref();
const viy2Button = ref();

const viy2TableEditConfig = reactive({
  trigger: 'click',
});
const viy2TableMouseConfig = reactive({
  extension: true,
});
const viy2TablePointCdEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2TablePointNmEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const viy2TableRowConfig = reactive({
  isCurrent: true,
});

const defaultPointApi = useApi({
  url: '/common/homePage/defaultPoint.json',
  method: 'post',
  data: () => {
    const param = {};
    return param;
  },
}, {
  onSuccess: (data) => {
    if (data.data) {
      pointCd.value = data.data.pointCd;
      pointId.value = data.data.pointId;
      pointNm.value = data.data.pointNm;
    }
  },
});

const resetPointInformation = (point) => {
  const resetPointInformationtApi = useApi({
    url: '/common/homePage/resetPointInformation.json',
    method: 'post',
    data: () => {
      const param = { pointId: point };
      return param;
    },
    manual: true,
  }, {
    onSuccess: (data) => {
      if (data.data) {
        pointCd.value = data.data.pointCd;
        pointId.value = data.data.pointId;
        pointNm.value = data.data.pointNm;
        showFlag.value = false;
      }
    },
  });
};

const pointListSrcApi = useApi({
  url: '/common/homePage/pointList.json',
  method: 'post',
  data: () => {
    const param = {};
    return param;
  },
}, {
  onSuccess: (data) => {
    if (data) {
      pointList.value = data.data;
    }
  },
});
const pointListSrc = pointListSrcApi.data;

const changePoint = () => {
  pointListSrc.data = [];
  showFlag.value = true;
  pointListSrcApi.runAsync();
};

const viy2ButtonClick = () => {
  const $table = viy2Table.value;
  if ($table && $table.getCurrentRecord() && $table.getCurrentRecord().pointId) {
    resetPointInformation($table.getCurrentRecord().pointId);
  }
};

const viy2TableCellDblclick = (obj) => {
  resetPointInformation(obj.row.pointId);
};
</script>

<template>
  <div class="divClass" @click="changePoint">
    <div style="text-align: center;">
      {{ t('label.currentPoint') }}:
    </div>
    <div class="scrollable-container">
      <div class="scrollable-content">
        {{ pointCd }} {{ pointNm }}
      </div>
    </div>
  </div>
  <VueDialog id="viy2Dialog" ref="viy2Dialog" v-model="showFlag" :title="t('title.pointChangeRef')" width="500px">
    <template #default>
      <VueRow id="viy2Row" ref="viy2Row">
        <VueCol item-key="item" :md="{ span: 24 }">
          <VueTable
            id="viy2Table" ref="viy2Table" :mouse-config-area="false" :mouse-config-extension="true"
            height="300px" :data="pointListSrc.data" :edit-config="viy2TableEditConfig"
            :mouse-config="viy2TableMouseConfig" :row-config="viy2TableRowConfig" @cell-dblclick="viy2TableCellDblclick"
          >
            <VueIndexColumn align="center" min-width="50px" header-align="center" width="55px" />
            <VueInputColumn
              :edit-render="viy2TablePointCdEditRender" field="pointCd" min-width="120px"
              :title="t('label.pointCode')"
            />
            <VueInputColumn
              :edit-render="viy2TablePointNmEditRender" field="pointNm" min-width="260px"
              :title="t('label.pointName')"
            />
          </VueTable>
        </VueCol>
        <VueCol item-key="item" align="right" :inline="true" class="marginTop10" :md="{ span: 24 }">
          <VueButton id="viy2Button" ref="viy2Button" type="primary" @click="viy2ButtonClick">
            {{ t('button.set') }}
          </VueButton>
        </VueCol>
      </VueRow>
    </template>
  </VueDialog>
</template>

<style scoped>
.divClass {
  display: inline-block;
  font-size: 12px;
  padding: 3px 5px;
  border-radius: 5px;
  background-color: #2c3e50;
  color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-right: 1px;
}
.divClass:hover {
  background-color: #34495e;
}
.marginTop10{
    margin-top: 10px;
}
.scrollable-container {
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}

.scrollable-content {
  display: inline-block;
  white-space: nowrap;
  transition: transform 0.5s ease;
  will-change: transform;
}

.divClass:hover .scrollable-content {
  animation: scroll-left 10s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
