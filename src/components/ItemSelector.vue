<template>
  <div class="file-container">
    <button class="button-56" @click="previousImage">Anterior</button>

    <div class="image-container" :style="containerStyle">
      <img :src="images[currentIndex]" alt="Image" />
    </div>

    <button class="button-56" @click="nextImage">Siguiente</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { watch } from 'vue';

const props = defineProps({
  images: { type: Array as () => string[], required: true },
  containerStyle: { type: Object, required: false }

});

watch(() => props.images, (newImages) => {
  console.log('Updated images:', newImages);
});

const currentIndex = ref(0);

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = props.images.length - 1;
  }
};

const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};
</script>

<style scoped>
.file-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  gap: 10px;
  padding: 40px 20px;
  width: 900px;
  place-items: center;
}


.image-container img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>
