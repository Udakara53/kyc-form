<template>
    <!--  -->
    <div class="hero">
      <label for="input-file" class="drop-area" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop">
        <input type="file" accept="image/*" id="input-file" hidden @change="uploadImage">
        <div v-if="!imgLink" id="img-view">
          <img src="../assets/icon-upload.png">
          <p>Drop your image here <br>or <br> click here</p>
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
.hero{
    position:relative;
    width: 100%;
    min-height: 30%;
    background: linear-gradient(#e7baff,#c2b6d9);
    display: flex;
    align-items: center;
    justify-content: center;

}
#drop-area{
    
    width: 500px;
    height: 300px;
    padding: 30px;
    background: #fff;
    text-align: center;
    border-radius: 20px;

}
#img-view{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 2px dashed #bbb5ff;
    background: #f7f8ff;
    background-position: center;


}
#img-view img{
    width: 100px;
    margin-top: 25px;
}
.uploaded-img{
    max-width: 100%; /* Limit the width to not exceed the drop area */
    max-height: 100%; /* Limit the height to not exceed the drop area */
    border-radius: 20px; /* Maintain the border-radius */
    position: absolute; /* Position it within the drop area */
    object-fit: contain;
    top: 0;
    left: 0;
}


</style>