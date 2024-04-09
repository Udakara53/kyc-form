<template>
    <v-container class="pa-9" style="width: 60%">
    <h1 style="">KYC Form</h1>
    <p class="poppins-paragraph mt-5">
      Please enter your valid Name & email address to using all of our
    </p>
    <p class="poppins-paragraph mb-8">feature</p>
    <!-- <FormStep1 /> -->
    <v-form v-model="valid" @submit.prevent>
    <v-container class="">
      <v-row class="">
        <v-col cols="3" class="text-left">
          <label for=""><strong>Title</strong> <span class="required-star">*</span></label>
          <v-select
            v-model="title"
            :items="['Mr.', 'Mrs.', 'Miss']"
            rounded
            variant="outlined"
            class="no-shadow-select"
          ></v-select>
        </v-col>
        <v-col cols="9" class="text-left">
          <label for=""><strong>Full Name</strong> <span class="required-star">*</span></label>
          <v-text-field v-model="fullname" rounded variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          <label for=""
            ><strong>Mobile Number</strong> <span class="required-star">*</span></label
          >
          <v-text-field v-model="mobileNumber" rounded variant="outlined" style="box-shadow:none;" :disabled="true" 
          ></v-text-field>
        </v-col>
        <v-col class="text-left">
          <label for=""><strong>Email</strong> <span class="required-star">*</span></label>
          <v-text-field v-model="email" rounded variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          <label for=""><strong>NIC Number</strong> <span class="required-star">*</span></label>
          <v-text-field v-model="nicNumber" rounded outlined variant="outlined"></v-text-field>
        </v-col>
        <v-col class="text-left">
          <label for=""><strong>Nationality</strong> <span class="required-star">*</span></label>
          <v-select
            v-model="nationality"
            :items="['US', 'Sri Lanka', 'Other']"
            rounded
            outlined
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>
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
          @click="continueToNextStep"
          class="custom-btn py-6"
          style="
            background-color: #f54d4d;
            color: #ffffff; 
            width:100%;
          "
          ><!-- width: 299px; -->
          Let's Continue</v-btn
        >
      </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-container>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'FormStep1',
  data() {
    return {
      valid: false,
      title: 'Mr',
      fullname: '',
      mobileNumber: '+94 71 333 3333',
      email: '',
      nicNumber: '',
      nationality: 'USA',
    };
  },
  setup() {
    const router = useRouter();

    function continueToNextStep() {
      // Add validation or other logic as needed
      router.push({ name: 'Step2' }); // Proceed to FormStep2
    }
    return { continueToNextStep };
  },
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
  /* height: 60px;  */
  border-radius: 10px; 
  opacity: 1;
  font-weight: 500;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
}



</style>
