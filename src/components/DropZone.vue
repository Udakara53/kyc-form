<template>
  <v-container
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzen': active }"
    class="dropzone"
  >
    <span>Drop your image here</span>
    <span>OR</span>
    <label for="dropzoneFile">Select File</label>
    <input type="file" id="dropzoneFile" class="dropzoneFile" />
  </v-container>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'DropZone',
  setup() {
    const active = ref(false);

    const toggleActive = () => {
      active.value = !active.value;
    };
    return { active, toggleActive };
  },
};
</script>

<style>
.dropzone {
  padding: 6px;
  width: 46.2%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid grey;
  background-color: #fff;
  transition: 0.3s ease all;
}

.dropzone img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.dropzone label {
  padding: 2px 3px;
  color: #fff;
  background-color: #f54d4d;
  transition: 0.3s ease all;
}

.dropzone input {
  display: none;
}

.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #f54d4d;
}

.active-dropzone label {
  background-color: #fff;
  color: #f54d4d;
}
</style>
