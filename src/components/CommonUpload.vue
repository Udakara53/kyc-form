<template>
    <div class="hero">
      <div class="drop-area">
        <div v-if="!imgLink" id="img-view">
          <!-- Clickable upload icon -->
            <v-img src="../assets/icon-upload.png" width="66px" height="75px" @click="triggerFileInput" id="icon-up-1"></v-img>
            <p class="drop-p-tag">Click here  <br>or <br></p>
          <!-- Camera component if needed -->
          <Camera v-if="showCamera" ref="camera" :resolution="{ width: 1280, height: 720 }" autoplay></Camera>
          <v-btn v-else @click="startCamera" class="mt-4 selfie-btn">Capture</v-btn>
          
        </div>
        <!-- Display the captured or uploaded image -->
        <div v-if="imgLink" class="uploaded-img-div">
          <v-img :src="imgLink" class="uploaded-img"></v-img>
          <v-btn @click="clearImage" class="selfie-btn">Retake</v-btn>
        </div>
        <!-- Button to take a snapshot -->
        <v-btn v-if="showCamera" @click="takeSnapshot" class="selfie-btn">Capture</v-btn>
        <!-- Hidden file input for uploads -->
        <!-- <input type="file" accept="image/*" ref="fileInput" hidden @change="uploadImage" required> -->
        <v-file-input v-model="file" type="file" :rules="imageRules" accept="image/*" ref="fileInput" :id="`input-file-${props.imageType}`" style="display: none;" @change="uploadImage"></v-file-input>
      </div>
    </div>
  </template>

  <script setup>
import Camera from 'simple-vue-camera';
import { ref, defineProps } from 'vue';
import { useKycFormStore } from '@/stores/FormStore';
import { imageRules } from '@/validations/Validation';

const props = defineProps({
  imageType: String
});

const store = useKycFormStore();
const camera = ref(null);
const showCamera = ref(false);
const fileInput = ref(null);
const file =ref(null);

// Reactive reference for image link, with a computed to fetch initial value from store
const imgLink = ref(null);
imgLink.value = store.getImage(props.imageType);

// Function to handle image upload
const uploadImage = (event) => {
  const fileData = event.target.files[0];
  if (fileData) {
    file.value = fileData;
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      imgLink.value = imageData;
      store.updateImage(props.imageType, imageData); // Save image data to store
    };
    reader.readAsDataURL(fileData);
  }
};

// Function to trigger file input
const triggerFileInput = () => {
  fileInput.value.click(); // Trigger the file input when icon is clicked
};

// Function to start the camera
const startCamera = () => {
  showCamera.value = true;
};

// Function to take a snapshot
const takeSnapshot = async () => {
  if (!camera.value) {
    console.error("Camera not initialized");
    return;
  }
  const snapshot = await camera.value.snapshot();
  imgLink.value = URL.createObjectURL(snapshot);
  store.updateImage(props.imageType, imgLink.value);
  showCamera.value = false; // Hide camera after taking snapshot
};

// Function to clear the image
const clearImage = () => {
  imgLink.value = null;
  store.updateImage(props.imageType, null);
  startCamera(); // Restart camera for another capture
};

</script>


<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.drop-area {
  display: flow;
  justify-content: center; 
  align-items: center;
  position: relative;
  padding: 30px;
  width: 100%;
  height: 250px;
  background: #f7f8ff;
  border-radius: 20px;
  text-align: center;
}

.uploaded-img-div, .uploaded-img {

  width: 100%;
  height: 200px;
  object-fit: contain;
}

#img-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%;
  height: 100%;
}

#img-view img {
  cursor: pointer;
}
.selfie-btn {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  background:#F54D4D;
  padding:5px 15px;
  line-height: 0.8;
  border-radius:37px;
  color:#FFFFFF;
  text-transform: none;
}
</style>
  