<script setup>
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();

const lastLoginTime = ref('system error');

const lastLoginTimeApi = useApi({
  url: '/common/homePage/lastLoginTime.json',
  method: 'post',
  data: () => {
    const param = {};
    return param;
  },
}, {
  onSuccess: (data) => {
    lastLoginTime.value = data.data;
  },
});
</script>

<template>
  <!-- <VueTooltip placement="top" effect="dark">
    <template #content>
      {{ t('label.lastLoginTime') }}: {{ lastLoginTime }}
    </template>
    <div class="iconDiv">
      <IconClock style="height: 18px;" />
    </div>
  </VueTooltip> -->
  <div class="divClass">
    <div>
      {{ t('label.lastLoginTime') }}:
    </div>
    <div>
      {{ lastLoginTime }}
    </div>
  </div>
</template>

<style scoped>
/* .iconDiv{
  height: 48px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.iconDiv:hover {
  background-color: #4091f7;
} */
.divClass {
  font-size: 13px;
  margin-right: 12px;
  margin-left: 12px;
  text-align: center;
}
</style>
