<script setup>
import { on } from 'viy-menu';
import i18n from '@/i18n';
import config from '@/settings/componentSetting';

on('changeLayoutRoute', (route) => {
  const menuClickApi = useApi({
    url: '/common/homePage/menuChange.json',
    method: 'post',
    data: () => {
      const param = { menuCd: route.name };
      return param;
    },
    manual: true,
  });
});
</script>

<template>
  <VueConfigProvider :default-props="config" :i18n="i18n">
    <RouterView />
  </VueConfigProvider>
</template>