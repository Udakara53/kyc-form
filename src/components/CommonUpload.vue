<template>
    <div class="hero">
      <div class="drop-area">
        <div v-if="!imgLink" id="img-view">
          <!-- Clickable upload icon -->
            <v-img src="../assets/icon-upload.png" width="66px" height="75px" @click="triggerFileInput" id="icon-up-1"></v-img>
            <p class="drop-p-tag">Click here  <br>or <br></p>
          <!-- Camera component if needed -->
          <camera v-if="showCamera" ref="camera" :resolution="{ width: 1280, height: 720 }" autoplay></camera>
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
        <input type="file" accept="image/*" ref="fileInput" hidden @change="uploadImage">
      </div>
    </div>
  </template>

  <script>
import Camera from 'simple-vue-camera';
import { ref } from 'vue';
import { useKycFormStore } from '@/stores/FormStore';

export default {
  props: ['imageType'],
  components: {
    Camera
  },
  setup(props) {
    const store = useKycFormStore();
    const camera = ref(null);
    const imgLink = ref(store.getImage(props.imageType));
    const showCamera = ref(false);
    const fileInput = ref(null); // Reference to the file input

    const uploadImage = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      /*if (file) {
        imgLink.value = URL.createObjectURL(file);
        store.updateImage(props.imageType, imgLink.value);
        showCamera.value = false; // Hide camera after upload
      }*/
      reader.onload = () => {
        const imageData = reader.result;
        imgLink.value = imageData;
        store.updateImage(props.imageType, imageData);  // Save image data to store
      };
      reader.readAsDataURL(file);
    };

    const triggerFileInput = () => {
      fileInput.value.click(); // Trigger the file input when icon is clicked
    };

    const startCamera = () => {
      showCamera.value = true;
    };

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

    const clearImage = () => {
      imgLink.value = null;
      store.updateImage(props.imageType, null);
      startCamera(); // Restart camera for another capture
    };

    return {
      camera,
      imgLink,
      showCamera,
      uploadImage,
      takeSnapshot,
      startCamera,
      clearImage,
      fileInput, // Make sure to return it here
      triggerFileInput
    };
  }
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
  