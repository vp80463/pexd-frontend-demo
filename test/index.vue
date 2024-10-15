<script setup>
import { VueButton, VueCard } from 'viy-ui';
</script>

<template>
  <VueCard class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <VueButton class="button" text>
          Operation button
        </VueButton>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      {{ `List item ${o}` }}
    </div>
    <template #footer>
      Footer content
    </template>
  </VueCard>
</template>

<style scoped>
.button {
  padding: 0;
  min-height: auto;
}

.text {
  font-size: 14px;
}

.box-card {
  width: 480px;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
