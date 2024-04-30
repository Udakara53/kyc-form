<template>
    <v-dialog v-model="visibleContact" persistent max-width="38%">
      <v-card class="d-flex flex-column align-center pt-0 pb-5"> <!-- Flex column to align items centrally -->
        <v-row style="background-color:#F54D4D; width:100%">
          <v-col ><h3 class="custom-topic mt-2 text-center">LOGIN OR REGISTER</h3></v-col>
        </v-row>
        <v-row style="width:80%">
          <v-col cols="4">
            <v-select
              :items="['+94','+85']"
              label="Country Code"
              v-model="selectedCountryCode"
            ></v-select>
          </v-col>
          <v-col cols="8">
            <v-text-field
              label="Phone Number"
              v-model="phoneNumber"
              :rules="phoneNumberRules"
            ></v-text-field>
          </v-col>
  </v-row>
        <v-card-text class="my-2">{{ message }}</v-card-text>
        <v-card-actions class="justify-center my-2">
          <v-btn class="selfie-btn" text @click="closeDialog">Back</v-btn>
          <v-btn class="selfie-btn" text @click="closeDialog">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    message: String,
    modelValue: Boolean,
    previewSectionModelValue: Boolean
  });
  
  const emits = defineEmits(['update:modelValue']);
  const selectedCountryCode = ref('+94');
  const phoneNumber = ref('');
  const phoneNumberRules = [
    v => !!v || 'Phone number is required',
    v => (v && v.length > 5) || 'Phone number must be at least 6 digits',
  ];
  
  // Create a local state that reacts to the prop for showing the dialog
  const visibleContact = ref(props.modelValue);
  
  // Watch for changes in modelValue prop to update the local visible state
  watch(() => props.modelValue, (newVal) => {
    visibleContact.value = newVal;
  });
  
  // Emit an update to the modelValue when the local visible state changes
  watch(visibleContact, (newVal) => {
    if (newVal !== props.modelValue) {
      emits('update:modelValue', newVal);
    }
  });
  
  // Function to close the dialog and emit the change
  const closeDialog = () => {
    visibleContact.value = false;
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
.custom-topic{
  font-family: Gotham, sans-serif;
  font-size: 26.95px;
  font-weight: 700;
  line-height: 32.34px;
  color: #FFFFFF;
}
  </style>
  