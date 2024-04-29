<template>
    <v-container class="pa-9" style="width: 60%">
      <div  v-if="showHeader">
        <h1>KYC Form</h1>
      <p class="poppins-paragraph mt-5">
        Please enter your valid Name & email address to use all of our
      </p>
      <p class="poppins-paragraph mb-8">feature</p>
      </div>
  
      <!-- <v-row>
        <v-col>
          <div class="upload-section">
            <DropZone @drop.prevent="drop" />
          </div>
        </v-col>
        <v-col>
          <div class="upload-section">
            <DropZone @drop.prevent="drop" />
          </div>
        </v-col>
      </v-row> -->

      <v-form ref="form" @submit.prevent>
        <v-row>
        <v-col cols="5">
            <div class="d-flex align-start mt-9" style="max-width:250px; max-height:250px">
        <label for=""><strong>NIC / DL front image</strong> <span class="required-star">*</span></label>
    </div>
            <!-- <DropArea id="nic-front"    @update-image="updateNicFront"/> -->
            <CommonUpload id="nic-front" :imageType="'nicFront'" />
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="5">
            <div class="d-flex align-start mt-9" style="max-width:250px; max-height:250px">
        <label for=""><strong>NIC / DL rear image</strong> <span class="required-star">*</span></label>
    </div>
            <!-- <DropArea id="nic-rear" @update-image="updateNicRear"/> -->
            <CommonUpload id="nic-rear" :imageType="'nicRear'"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <div class="d-flex align-start mt-9" style="max-width:250px; max-height:250px">
        <label><strong>Selfie Image</strong> <span class="required-star">*</span></label>
    </div>
          <!-- <SelfieUpload/> -->
          <CommonUpload id="selfie" :imageType="'selfie'"/>
        </v-col>
      </v-row>
      </v-form>
      <v-row class="mb-9"></v-row>
      <v-row class="d-flex justify-end" v-if="props.showButtons">
        <v-col cols="3">
          <v-btn
          text
          @click="goBack"
          class="mr-7 custom-btn py-6"
          style="outline: 2px solid black; width: 90%"
          >Back</v-btn
        >
        </v-col>
        <v-col cols="4">
          <v-btn
          color="#F54D4D"
          @click="onSubmit"
          class="custom-btn py-6"
          style="background-color: #f54d4d; color: #ffffff; width: 299px" 
          >Let's Continue</v-btn
        >
        </v-col>
      </v-row>
    </v-container>
    
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';
import CommonUpload from '@/components/CommonUpload';
import {defineProps, ref} from 'vue';


// Use defineProps to declare the component's props
const props = defineProps({
  showHeader: {
    type: Boolean,
    default: true
  },
  showButtons: {
    type: Boolean,
    default: true
  }
});

const router = useRouter();
const form = ref(null);

const continueToNextStep = () => {
  router.push({ name: 'Preview' });
};

const onSubmit = ()=>{
  if (form.value && form.value.validate()){
    continueToNextStep();
  }
}

const goBack = () => {
  router.push({ name: 'Step1' });
};
</script>
  
  <style>
  h1 {
    font-family: Gotham, sans-serif;
    font-size: 40px;
    font-weight: 900;
    line-height: 52.8px;
    text-align: center;
    color: #f54d4d;
  }
  .poppins-paragraph {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #333333;
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
  .drop-zone {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .drop-zone.active {
    background-color: #fafafa;
  }
  .file-info {
      margin-top: 32px;
    }
  </style>
  