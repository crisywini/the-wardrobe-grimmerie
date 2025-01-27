<template>
  <div class="pop-up">
    <div class="pop-up-inner">
      <div class="pop-up-close">
        &times;
      </div>
      <h1>Save Outfit</h1>
      <div class="input-form">
        <div class="input-group">
          <input type="text" placeholder="Name" />
          <span class="error"></span>
        </div>
        <div class="input-group">
          <input type="text" placeholder="Category" />
          <span class="error"></span>
        </div>
      </div>


      <button class="button-56">Submit </button>
    </div>


  </div>

</template>

<style>
.pop-up {

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 32px 16px 120px;
  height: 120vh;
  width: 100%;
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
