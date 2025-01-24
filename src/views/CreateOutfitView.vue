<template>
  <div class="selector-container">
    <div>
      <ItemSelector :items="tshirts" :containerStyle="getContainerStyle('shirts')" @sendItem="onSetItem" />
      <ItemSelector :items="pants" :containerStyle="getContainerStyle('pants')" @sendItem="onSetItem" />
      <ItemSelector :items="shoes" :containerStyle="getContainerStyle('shoes')" @sendItem="onSetItem" />

    </div>
    <div class="button-container">

      <button @click="onSaveOutfit" class="button-56">Save</button>

    </div>
  </div>

</template>


<script setup lang="ts">
import ItemSelector from '@/components/ItemSelector.vue';
import { API_URLS } from '@/constants/constants';
import type Item from '@/interfaces/item';
import { onMounted, ref, computed } from 'vue';

const itemServiceUrl = API_URLS.ITEM_SERVICE_URL;
const outfitsServiceUrl = API_URLS.OUTFITS_SERVICE_URL;

const items = ref<Item[]>([]);
const shirtSelected = ref<Item>();
const pantsSelected = ref<Item>();
const shoesSelected = ref<Item>();

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
    console.log(items);
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

const onSetItem = (item: Item) => {

  switch (item.category) {

    case 'pants':
      pantsSelected.value = item;
      break;
    case 'shirts':
      shirtSelected.value = item;
      break;
    case 'shoes':
      shoesSelected.value = item;
      break;
  }
}

const onSaveOutfit = async () => {

  try {
    const body = {
      name: "outfit",
      items: [shirtSelected.value, pantsSelected.value, shoesSelected.value]
    };
    const response = await fetch(outfitsServiceUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      console.log(response);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

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
  align-items: center;


}
</style>
