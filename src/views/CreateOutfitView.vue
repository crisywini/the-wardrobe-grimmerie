<template>


  <AddOutfitInfoPopUp :items="itemsSelected" v-show="popUp" @showPopUp="showPopUpHandler" />

  <div v-show="!popUp" class="outfit-container">


    <div class="selector-container">
      <ItemSelector :items="tshirts || []" :containerStyle="getContainerStyle('shirts')" @sendItem="onSetItem" />
      <ItemSelector :items="pants || []" :containerStyle="getContainerStyle('pants')" @sendItem="onSetItem" />
      <ItemSelector :items="shoes || []" :containerStyle="getContainerStyle('shoes')" @sendItem="onSetItem" />
    </div>

    <div class="button-container">
      <button @click="onSaveOutfit" class="button-56">Save</button>
    </div>
  </div>

</template>


<script setup lang="ts">
import AddOutfitInfoPopUp from '@/components/AddOutfitInfoPopUp.vue';
import ItemSelector from '@/components/ItemSelector.vue';
import { API_URLS } from '@/constants/constants';
import type Item from '@/interfaces/item';
import { onMounted, ref } from 'vue';

const itemServiceUrl = API_URLS.ITEM_SERVICE_URL;

const popUp = ref(false);

const shirtSelected = ref<Item>();
const pantsSelected = ref<Item>();
const shoesSelected = ref<Item>();

const itemsSelected = ref<Item[]>([]);

const tshirts = ref<Item[]>();
const pants = ref<Item[]>();
const shoes = ref<Item[]>();

const fetchAllItems = async () => {
  try {
    pants.value = await getItemsByCategory("pants");
    tshirts.value = await getItemsByCategory("shirts");
    shoes.value = await getItemsByCategory("shoes");
    shirtSelected.value = tshirts.value[0];
    pantsSelected.value = pants.value[0];
    shoesSelected.value = shoes.value[0];
  } catch (error) {
    console.error("Error getting items:", error);
  }
};

const showPopUpHandler = (showPopUp: boolean) => {
  popUp.value = showPopUp;
}

onMounted(fetchAllItems);

const getItemsByCategory = async (category: string): Promise<Item[]> => {
  try {

    const response = await fetch(itemServiceUrl + "?category=" + category, {
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
}

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
  popUp.value = true;
  itemsSelected.value = [shirtSelected.value, pantsSelected.value, shoesSelected.value].filter(
    (item): item is Item => item !== undefined
  );
  console.log("Items selected: " + itemsSelected.value);
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
.outfit-container {

  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  align-items: center;
  gap: 0x;
  min-height: 60vh;
  min-width: 100vh;

}

.selector-container {
  display: flex;
  flex-direction: column;
  gap: 0px;

}

.button-container {
  display: flex;
  flex-direction: column;
  padding: 10%;

}
</style>
