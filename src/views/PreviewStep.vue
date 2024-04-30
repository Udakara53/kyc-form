<template>
    
    <div>
        <h1>Preview</h1>
      <p class="poppins-paragraph mt-5">
        Please enter your valid Name & email address to use all of our
      </p>
      <p class="poppins-paragraph mb-8">feature</p>
      </div>
      <FormStep1 :showHeader="false" :showButtons="false" :previewState="true"/>
      <FormStep2 :showHeader="false" :showButtons="false" />
    <v-container class="pa-9" style="width: 60%">
    <v-row class="d-flex justify-end">
        <!-- <v-col cols="5"></v-col> -->
        <v-col cols="3">          
          <v-btn
          text
          @click="goBack"
          class=" custom-btn py-6"
          style="outline: 2px solid black; width:90%;"
          >
          <!-- width:180px -->
          Back</v-btn
        >
        </v-col>

        <v-col cols="4">
          <v-btn
          color="#F54D4D"
          @click="SubmitForm"
          class="custom-btn py-6"
          style="
            background-color: #f54d4d;
            color: #ffffff; 
            width:100%;
          "
          ><!-- width: 299px; -->
          Submit</v-btn
        >
      </v-col>
      </v-row>
    </v-container>
    <div>
      <!-- Dialog for submission confirmation -->
      <!-- <SuccessDialog
      :title="'Congratulations!'"
      :message="'Your KYC data has been Submitted successfully.'"
      v-model="dialogVisible"
    /> -->
    <v-dialog v-model="dialogVisible" persistent max-width="38%">
      <v-card class="d-flex flex-column align-center pa-5"> <!-- Flex column to align items centrally -->
        <v-img
          class="my-2"
          width="35%"
          height="36.5%"
          src="../assets/SubmitSuccess.png"
        />
        <v-card-title class="text-h5 my-2 custom-title">Congratulations!</v-card-title>
        <v-card-text class="my-2">Your KYC data has been Submitted successfully.</v-card-text>
        <v-card-actions class="justify-center my-2">
          <v-btn class="ok-btn" text @click="dialogVisible = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import FormStep1 from '@/views/FormStep1.vue'
import FormStep2 from '@/views/FormStep2.vue'
import { useKycFormStore } from '@/stores/FormStore';
import { ref } from 'vue';
//import SuccessDialog from '@/components/SubmitSuccess.vue';

const router = useRouter();
const store = useKycFormStore();
const dialogVisible = ref(false);



const SubmitForm = () => {
  //dialogVisible.value = true;
  dialogVisible.value = true;
  console.log('Form Data:', store.formData);
};

const goBack = () => {
  router.push({ name: 'Step2' });
};

</script>

<style>
.custom-btn {
  border-radius: 10px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.04em;
  text-transform: none;
  /* height: 60px;  */
  border-radius: 10px; 
  opacity: 1;
  font-weight: 500;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-title {
  font-family: "Gotham", sans-serif;
  font-size: 40px;
  font-weight: 900;
  line-height: 52.8px;
  text-align: center;
  color: #F54D4D;
}

.ok-btn {
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

</style>