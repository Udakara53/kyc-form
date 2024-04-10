<template>
    <!--  -->
    
    <div class="hero">
      <label for="input-file" class="drop-area" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop">
        <input type="file" accept="image/*" id="input-file" hidden @change="uploadImage">
        <div v-if="!imgLink" id="img-view" class="d-flex flex-column align-center">
          <!-- <img src="../assets/icon-upload.png"> -->
          <div class="d-flex ">
            <v-img src="../assets/icon-upload.png" width="66px" height="75px" cover class="icon-upload"></v-img>
          </div>
          <p class="drop-p-tag">Drop your image here <br>or <br> capture</p>
        </div>
        <div class="uploaded-img-div">
            <img v-if="imgLink" :src="imgLink" class="uploaded-img" >
        </div>
      </label>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'DropArea',
    setup() {
      const imgLink = ref('');
  
      const uploadImage = (event) => {
        const file = event.target.files[0];
        if (file) {
          imgLink.value = URL.createObjectURL(file);
        }
      };
  
      const handleDragOver = (event) => {
        event.preventDefault();
      };
  
      const handleDrop = (event) => {
        const file = event.dataTransfer.files[0];
        if (file) {
          imgLink.value = URL.createObjectURL(file);
        }
      };
  
      return {
        imgLink,
        uploadImage,
        handleDragOver,
        handleDrop,
      };
    },
  };
  </script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
label {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  
}
.required-star {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  text-align: left;
  color: #ff505a;
}
.hero{
    position:relative;
    width: 100%;
    min-width: 250px;
    min-height: 250px;
    background: #F8F8FA;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

}
#drop-area{
    width: 500px; /*height: 300px;*/
    padding: 30px;
    background: #fff;
    text-align: center;
    border-radius: 20px;
}
#img-view{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    
    background: #f7f8ff;
    background-position: center;
}
#img-view img{
    width: 100%;
    margin-top: 25px;
}
.uploaded-img{
    max-width: 250px; /* Limit the width to not exceed the drop area */
    max-height: 250px; /* Limit the height to not exceed the drop area */
    border-radius: 20px; /* Maintain the border-radius */
    
    object-fit: contain;
    top: 0;
    left: 0;
}
.drop-p-tag{
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
  text-align: center;
  color: #58595B;
}

</style>