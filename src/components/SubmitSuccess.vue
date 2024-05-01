<template>
    <v-dialog v-model="visible" persistent max-width="38%">
      <v-card class="d-flex flex-column align-center pa-5"> <!-- Flex column to align items centrally -->
        <v-img
          class="my-2"
          width="35%"
          height="36.5%"
          src="../assets/SubmitSuccess.png"
        />
        <v-card-title class="text-h5 my-2 custom-title">{{ title }}</v-card-title>
        <v-card-text class="my-2">{{ message }}</v-card-text>
        <v-card-actions class="justify-center my-2">
          <v-btn class="custom-btn" text @click="closeDialog">Back</v-btn>
          <v-btn class="selfie-btn" text @click="closeDialog">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    title: String,
    message: String,
    modelValue: Boolean
  });
  
  const emits = defineEmits(['update:modelValue']);
  
  // Create a local state that reacts to the prop for showing the dialog
  const visible = ref(props.modelValue);
  
  // Watch for changes in modelValue prop to update the local visible state
  watch(() => props.modelValue, (newVal) => {
    visible.value = newVal;
  });
  
  // Emit an update to the modelValue when the local visible state changes
  watch(visible, (newVal) => {
    if (newVal !== props.modelValue) {
      emits('update:modelValue', newVal);
    }
  });
  
  // Function to close the dialog and emit the change
  const closeDialog = () => {
    visible.value = false;
  };
  </script>
  
  <style scoped>
  /* Add any specific styles for your dialog here */
  .selfie-btn {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  background:#F54D4D;
  padding:5px 45px;
  line-height: 0.8;
  border-radius:5px;
  color:#FFFFFF;
  text-transform: none;
}
.custom-title {
  font-family: "Gotham", sans-serif;
  font-size: 40px;
  font-weight: 900;
  line-height: 52.8px;
  text-align: center;
  color: #F54D4D;
}
.custom-btn {
    border-radius: 10px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.04em;
    text-transform: none;
    height: 60px;
    border-radius: 10px;
    opacity: 1;
    font-weight: 500;
    text-transform: none;
  }
  </style>
  