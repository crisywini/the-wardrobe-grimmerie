<template>

  <header class="header">
    <h1 class="menu" @click="onMenu"> My Look!</h1>
  </header>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter();

const onMenu = () => {
  router.push("/");
}

</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  color: white;
  width: 100%;
  font-family: "Bebas Neue", serif;
  font-style: normal;
  font-size: xx-large;
  height: 50px;
}

.menu {
  cursor: pointer;
  text-justify: auto;
  font-size: xx-large;
}
</style>
