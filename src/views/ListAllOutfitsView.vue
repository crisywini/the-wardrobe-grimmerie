<template>
  <div class="parent-container">

    <div class="box" />

    <div class="category-container">
      <h1 class="category" @click="selectAll">All</h1>
      <h1 v-for="category in outfitCategoriesRef" :key="category" class="category" @click="selectCategory(category)">
        {{
          category
        }}</h1>
    </div>

    <div class="outfits-container">
      <img v-for="path in outfitImages" :key="path" :src="path" class="outfit" @click="selectOutfit(path)">
    </div>

  </div>
</template>

<script setup lang="ts">
import { API_URLS } from '@/constants/constants';
import type Outfit from '@/interfaces/outfit';
import { onMounted, ref } from 'vue';

const outfitImages = ref();

const outfitCategoriesServiceUrl = API_URLS.OUTFITS_CATEGORIES_SERVICE_URL;
const ouftitsServiceUrl = API_URLS.OUTFITS_SERVICE_URL;
const imageBaseUrl = API_URLS.BASE_API_URL;

const outfitCategoriesRef = ref([]);
const outfitsRef = ref<Outfit[]>();

const fetchAllItems = async () => {
  try {
    outfitCategoriesRef.value = await getOutfitCategories();
    outfitsRef.value = await getAllOutfits();
    outfitImages.value = outfitsRef.value?.map(outfit => imageBaseUrl + outfit.default_image_url);
  } catch (error) {
    console.log('Error getting categories: ', error);
  }
};

const getOutfitCategories = async () => {
  try {
    const response = await fetch(outfitCategoriesServiceUrl, {
      method: 'GET'
    });

    if (!response.ok) {
      console.log(response);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const getAllOutfits = async () => {
  try {
    const response = await fetch(ouftitsServiceUrl, {
      method: 'GET'
    });

    if (!response.ok) {
      console.log(response);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const getOutfitsByCategory = async (category: string) => {
  try {
    const response = await fetch(ouftitsServiceUrl + "?category=" + category, {
      method: 'GET'
    });

    if (!response.ok) {
      console.log(response);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};


const selectOutfit = (path: string) => {
  console.log(path);
};

const selectCategory = async (category: string) => {
  outfitsRef.value = await getOutfitsByCategory(category);
  outfitImages.value = outfitsRef.value?.map(outfit => imageBaseUrl + outfit.default_image_url);
};

const selectAll = async () => {
  outfitsRef.value = await getAllOutfits();
  outfitImages.value = outfitsRef.value?.map(outfit => imageBaseUrl + outfit.default_image_url);
};

onMounted(fetchAllItems);

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
