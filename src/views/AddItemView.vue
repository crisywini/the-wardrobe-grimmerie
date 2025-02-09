<template>
  <div class="items-container">
    <form>
      <div class="file-container">
        <div class="input-image-form">
          <input type="file" id="media" accept="image/*" @change="(event) => handelFileUpload(event)" />
          <div>
            <section>
              <img src="../assets/upload.svg" />

              <p>Upload image here.</p>
            </section>
          </div>
        </div>


        <div class="input-form">

          <div class="input-group">
            <input v-model="form.name" type="text" placeholder="Name" />
            <span v-if="errors.name" class="error">{{ errors.name }}</span>
          </div>

          <div class="input-group">
            <input v-model="form.category" type="text" placeholder="Category" />
            <span v-if="errors.category" class="error">{{ errors.category }}</span>
          </div>

          <div class="input-group">
            <input v-model="form.brand" type="text" placeholder="Brand" />
            <span v-if="errors.brand" class="error">{{ errors.brand }}</span>
          </div>

          <div class="input-group">
            <input v-model="form.color" type="text" placeholder="Color" />
            <span v-if="errors.color" class="error">{{ errors.color }}</span>
          </div>

          <div class="input-group">
            <input v-model="form.style" type="text" placeholder="Style" />
            <span v-if="errors.style" class="error">{{ errors.style }}</span>
          </div>

          <div class="input-group">
            <input v-model="form.season" type="text" placeholder="Season" />
            <span v-if="errors.season" class="error">{{ errors.season }}</span>
          </div>

          <button class="button-56" role="button" type="button" @click="onSaveItem">
            Save Item
          </button>


        </div>

      </div>

    </form>
  </div>



</template>


<script setup lang="ts">
import { API_URLS } from '@/constants/constants';
import { reactive, watch, ref, type Ref } from 'vue';



const form = reactive({
  name: '',
  category: '',
  brand: '',
  color: '',
  style: '',
  season: ''
})

const errors = reactive({
  name: '',
  category: '',
  brand: '',
  color: '',
  style: '',
  season: ''
})

const file: Ref = ref(null);

const onSaveItem = () => {

  const formData = new FormData();

  formData.append('file', file.value);
  formData.append('item', JSON.stringify(form));

  const itemServiceUrl = API_URLS.ITEM_SERVICE_URL;

  fetch(itemServiceUrl, {
    method: 'POST',
    body: formData
  }).catch(error => console.error(error));
}


const handelFileUpload = (e: Event) => {
  file.value = (e.target as HTMLInputElement).files?.[0] || null;
};


watch(
  () => form.name,
  (newValue) => validateField('name', newValue)
)

watch(
  () => form.brand,
  (newValue) => validateField('brand', newValue)
)

watch(
  () => form.category,
  (newValue) => validateField('category', newValue)
)

watch(
  () => form.color,
  (newValue) => validateField('color', newValue)
)

watch(
  () => form.style,
  (newValue) => validateField('style', newValue)
)

watch(
  () => form.season,
  (newValue) => validateField('season', newValue)
)


const validateField = (field: string, value: string) => {
  switch (field) {


    case 'name':
      if (!value) {
        errors.name = 'The Name of the item is required';
      } else {
        errors.name = '';
      }
      break;
    case 'brand':
      if (!value) {
        errors.brand = 'The Brand of the item is required';
      } else {
        errors.brand = '';
      }
      break;
    case 'category':
      if (!value) {
        errors.category = 'The Category of the item is required';
      } else {
        errors.category = '';
      }
      break;

    case 'color':
      if (!value) {
        errors.color = 'The Color of the item is required';
      } else {
        errors.color = '';
      }
      break;

    case 'style':
      if (!value) {
        errors.style = 'The Style of the item is required';
      } else {
        errors.style = '';
      }
      break;

    case 'season':
      if (!value) {
        errors.season = 'The Season of the item is required';
      } else {
        errors.season = '';
      }
      break;
  }
}

</script>


<style scoped>
.items-container {

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

}

.file-container {

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  gap: 10px;
  padding: 40px 20px;
  width: 900px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

  font-family: "Bebas Neue", serif;
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
