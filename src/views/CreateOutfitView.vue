<template>
  <div class="selector-container">
    <ItemSelector :images="shirtsUrls" :containerStyle="getContainerStyle('shirts')" />
    <ItemSelector :images="pantsUrls" :containerStyle="getContainerStyle('pants')" />

    <ItemSelector :images="shoesUrls" :containerStyle="getContainerStyle('shoes')" />
  </div>

</template>


<script setup lang="ts">
import ItemSelector from '@/components/ItemSelector.vue';
import { API_URLS } from '@/constants/constants';
import { onMounted, ref, computed } from 'vue';

const itemServiceUrl = API_URLS.ITEM_SERVICE_URL;

const items = ref([]);

const getAllItems = async () => {
  try {

    const response = await fetch(itemServiceUrl, {
      method: 'GET'
    });

    if (!response.ok) {
      console.log(response);
    }

    const data = await response.json();
    items.value = data;
  } catch (error) {
    console.error(error);
  }
}
onMounted(getAllItems);

const pants = computed(() => {
  return items.value.filter(item => item.category === 'pants');
});

const tshirts = computed(() => {
  return items.value.filter(item => item.category === 'shirts');
});

const shoes = computed(() => {
  return items.value.filter(item => item.category === 'shoes');
});


const pantsUrls = computed(() => {
  return pants.value.map(mapToImageUrls);

})

const shirtsUrls = computed(() => {
  return tshirts.value.map(mapToImageUrls);

})


const shoesUrls = computed(() => {
  return shoes.value.map(mapToImageUrls);

})


const mapToImageUrls = (item) => {
  return item.image_url;
}

const getContainerStyle = (category: string) => {
  switch (category) {
    case 'pants':
      return {
        width: '200px',
        height: '300px',
        display: 'grid',
        placeItems: 'center',
      };
    case 'shirts':
      return {
        width: '250px',
        height: '350px',
        display: 'grid',
        placeItems: 'center',
      };
    case 'shoes':
      return {
        width: '150px',
        height: '200px',
        display: 'grid',
        placeItems: 'center',
      };
    default:
      return {
        width: '200px',
        height: '200px',
        display: 'grid',
        placeItems: 'center',
      };
  }
}



</script>



<style lang="css" scoped>
.selector-container {

  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);


}
</style>
