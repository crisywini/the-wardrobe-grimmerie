<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';

</script>

<template>
  <AppHeader />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
