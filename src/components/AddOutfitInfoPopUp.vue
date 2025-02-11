<template>
  <div class="pop-up">
    <div class="pop-up-inner">
      <div class="pop-up-close" @click="close">
        &times;
      </div>
      <h1>Save Outfit</h1>
      <div class="input-form">
        <div class="input-group">
          <input v-model="form.name" type="text" placeholder="Name" />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>
        <div class="input-group">
          <input v-model="form.category" type="text" placeholder="Category" />
          <span v-if="errors.category" class="error">{{ errors.category }}</span>
        </div>
      </div>


      <button @click="onSaveOutfit" class="button-56">Submit </button>
    </div>


  </div>

</template>

<script setup lang="ts">
import { API_URLS } from '@/constants/constants';
import type Item from '@/interfaces/item';
import { reactive, watch } from 'vue';

const form = reactive({
  name: '',
  category: ''
});

const errors = reactive({
  name: '',
  category: ''
});

const props = defineProps({
  items: { type: Array as () => Item[], required: true }
});

const emits = defineEmits<{
  showPopUp: [popUp: boolean]
}>();

const outfitsServiceUrl = API_URLS.OUTFITS_SERVICE_URL;

const onSaveOutfit = async () => {
  try {
    const body = {
      name: form.name,
      category: form.category,
      items: props.items
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
    console.log("Saved with data: " + data);
    emits('showPopUp', false);
  } catch (error) {
    console.log(error);
  }
}

watch(
  () => form.name,
  (newValue) => validateField('name', newValue)
);

watch(
  () => form.category,
  (newValue) => validateField('category', newValue)
);

const validateField = (field: string, value: string) => {

  switch (field) {
    case 'category':
      if (!value) {
        errors.category = 'The Category is required';
      } else {
        errors.name = '';
      }
      break;
    case 'name':
      if (!value) {
        errors.name = 'The Name is required';
      } else {
        errors.name = '';
      }
      break;
  }

}

const close = () => {
  emits('showPopUp', false);
}



</script>

<style>
.pop-up {

  padding: 32px 16px 120px;
  height: 100vh;
  min-width: 100vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  place-items: center;

}

.pop-up-close {
  position: absolute;
  height: 52px;
  width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  font-size: 3rem;
  cursor: pointer;
}

.pop-up-inner {
  position: relative;
  width: 65%;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}

.input-form {

  display: flex;
  flex-direction: column;


}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

input {

  border: 3px solid #000;
  border-radius: 5px;
  height: 50px;
  line-height: normal;
  color: #282828;
  display: block;
  width: 100%;
  box-sizing: border-box;
  user-select: auto;
  font-size: 16px;
  padding: 0 6px;
  padding-left: 12px;

  :focus {
    border: 3px solid #ffdeda;
  }
}

input:focus {
  border-color: #ffdeda;
  outline: none;
}


input.is-invalid {
  border-color: red;
}

.error {
  color: red;
  font-size: 12px;
}

small {
  font-size: 12px;
  color: #666666;
}
</style>
