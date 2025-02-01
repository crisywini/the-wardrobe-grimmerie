<template>
  <div class="parent-container">

    <div class="box" />

    <div class="category-container">
      <h1 v-for="category in categories" :key="category" class="category" @click="selectCategory(category)"> {{ category
        }}</h1>
    </div>

    <div class="outfits-container">
      <img v-for="path in images" :key="path" :src="path" class="outfit" @click="selectOutfit(path)">
    </div>

  </div>
</template>

<script setup lang="ts">

const images = ["/public/images/o1.png", "/public/images/o2.png", "/public/images/o3.png", "/public/images/o4.png"]

const categories = ["gym wear", "casual", "streetwear"]

const selectOutfit = (path: string) => {
  console.log(path);
}

const selectCategory = (category: string) => {
  console.log('Category Selected', category)
}


</script>


<style scoped>
.parent-container {
  display: flex;
  flex-direction: column;
}

.category-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: gray;
  color: white;
  font-family: "Bebas Neue", serif;
  width: 100vw;
  gap: 20px;
}

.box {
  background-color: white;
  height: 30px;
}

.outfits-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.outfit {
  width: 100%;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.outfit:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.category {
  transition: transform 0.3s, box-shadow 0.3s;
}

.category:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
