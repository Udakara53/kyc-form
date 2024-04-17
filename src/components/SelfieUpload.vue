<template>
    <div class="hero">
      <div class="drop-area">
        <div v-if="!imgLink" id="img-view">
          <!-- Placeholder or camera view -->
          <div class="d-flex">
            <v-img src="../assets/icon-upload.png" width="66px" height="75px"></v-img>
          </div>
          
          <camera v-if="showCamera" ref="camera" :resolution="{ width: 1280, height: 720 }" autoplay class=""></camera>
          <v-btn v-else @click="startCamera" class="mt-4" style="background-color: #F54D4D; color:white; text-transform: none;">Capture</v-btn>
          
        </div>
        <!-- Display the captured or uploaded image -->
        <div v-if="imgLink" class="uploaded-img-div">
          <v-img :src="imgLink" class="uploaded-img"></v-img>
          <v-btn @click="clearImage" style="background-color: #F54D4D; color:white; text-transform: none;">Recapture</v-btn>
        </div>
        <!-- Button to take a snapshot -->
        <v-btn v-if="showCamera" @click="takeSnapshot" style="background-color: #F54D4D; color:white; text-transform: none;">Capture</v-btn>
        <!-- Hidden file input for uploads -->
        <input type="file" accept="image/*" hidden @change="uploadImage">
      </div>
    </div>
  </template>
  
  
  <script>
import Camera from 'simple-vue-camera';
import { ref } from 'vue';

export default {
  components: {
    Camera
  },
  setup() {
    const camera = ref(null);
    const imgLink = ref(null);
    const showCamera = ref(false);

    const uploadImage = event => {
      const file = event.target.files[0];
      if (file) {
        imgLink.value = URL.createObjectURL(file);
        showCamera.value = false; // Hide camera after upload
      }
    };

    const startCamera = () => {
      showCamera.value = true;
    };

    const takeSnapshot = async () => {
      if (!camera.value) {
        console.error("Camera not initialized");
        return;
      }
      try {
        const snapshot = await camera.value.snapshot();
        imgLink.value = URL.createObjectURL(snapshot);
        showCamera.value = false; // Hide camera after taking snapshot
      } catch (error) {
        console.error("Error taking snapshot:", error);
      }
    };

    const clearImage = () => {
      imgLink.value = null;
      startCamera(); // Restart camera for another capture
    };

    return {
      camera,
      imgLink,
      showCamera,
      uploadImage,
      takeSnapshot,
      startCamera,
      clearImage
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
  position: relative;
  padding: 30px;
  width: 1000px;
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

#img-view img {
  width: 100px;
}
</style>

  