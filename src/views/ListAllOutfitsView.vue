<template>
  <div class="parent-container">

    <div class="box" />

    <div class="category-container">
      <h1>Gym wear</h1>
      <h1>Casual</h1>
      <h1>Streetwear</h1>

    </div>


    <div class="outfits-container">

      <img src="/public/images/o1.png">
      <img src="/public/images/o2.png">
      <img src="/public/images/o3.png">
      <img src="/public/images/o4.png">
      <img src="/public/images/o1.png">
      <img src="/public/images/o2.png">
      <img src="/public/images/o3.png">
      <img src="/public/images/o4.png">

    </div>





  </div>
</template>

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
  grid-template-columns: repeat(auto-fill, minmax(250px, 0fr));
  gap: 1px;
}

.outfits-container img {
  width: 100%;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

}
</style>
