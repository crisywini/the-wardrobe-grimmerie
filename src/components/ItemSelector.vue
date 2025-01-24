<template>
  <div class="file-container">
    <button class="button-56" @click="previousImage">Anterior</button>

    <div class="image-container" :style="containerStyle">
      <img v-if="items[currentIndex]" :src="items[currentIndex].image_url" alt="Image" />
    </div>

    <button class="button-56" @click="nextImage">Siguiente</button>
  </div>
</template>

<script setup lang="ts">
import type Item from '@/interfaces/item';
import { ref } from 'vue';
import { watch } from 'vue';

const props = defineProps({
  items: { type: Array as () => Item[], required: true },
  containerStyle: { type: Object, required: false }

});

const emits = defineEmits<{
  sendItem: [item: Item]
}>();

watch(() => props.items, (newItem) => {
  console.log('Updated items:', newItem);
});

const currentIndex = ref(0);

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = props.items.length - 1;
  }
  emits('sendItem', props.items[currentIndex.value])

};

const nextImage = () => {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
  emits('sendItem', props.items[currentIndex.value])

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
