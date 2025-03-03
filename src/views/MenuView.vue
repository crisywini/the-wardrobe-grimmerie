<template>

  <nav class="menu">
    <div v-for="feature in features" :key="feature.id" class="menu-item" @click="navigateTo(feature.link)">
      <h2>{{ feature.name }}</h2>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { type RouteLocationAsRelativeGeneric, type RouteLocationAsPathGeneric, useRouter } from 'vue-router';

const router = useRouter();

const features = [
  { id: 1, name: 'Create Outfit', link: '/outfits' },
  { id: 2, name: 'See All Outfits', link: '/outfits/all' },
  { id: 3, name: 'Add Items', link: '/items' },
];

const navigateTo = (link: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric) => {
  router.push(link);
};


</script>

<style scoped>
.menu {
  display: flex;
  align-items: first baseline;
  justify-items: center;
  padding: 50px 0 0 0;
  margin: 0;
  gap: 10px;
  min-height: 100vh;
  font-family: "Bebas Neue", serif;
  font-style: normal;
}

.menu li {
  display: inline-block;
  text-align: center;
  padding: 60px 0;
}

.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: white;
  font-size: xx-large;
  border: 1px solid #ddd;
  height: 50vw;
  width: 30vw;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.menu-item:nth-child(1) {
  background-image: url('/public/images/wardrobe-grimmerie.jpg');
  background-size: cover;
}

.menu-item:nth-child(2) {
  background-image: url('/public/images/see-all.jpg');
  background-size: contain;
}

.menu-item:nth-child(3) {
  background-image: url('/public/images/add-items.jpg');
  background-size: cover;
}

.menu-item:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
