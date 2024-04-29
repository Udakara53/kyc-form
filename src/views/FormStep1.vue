<template>
  <v-container class="pa-9" style="width: 60%">
    <div v-if="props.showHeader">
      <h1 style="">KYC Form</h1>
      <p class="poppins-paragraph mt-5">
        Please enter your valid Name & email address to use all of our
      </p>
      <p class="poppins-paragraph mb-8">feature</p>
    </div>
    <!-- <FormStep1 /> -->
    <v-form v-model="valid" @submit.prevent>
      <v-container class="">
        <v-row class="">
          <v-col cols="3" class="text-left">
            <label for="title"
              ><strong>Title</strong>
              <span class="required-star">*</span></label
            >
            <v-select
              name="title"
              id="title"
              v-model="title"
              :disabled="previewState"
              :rules="titleRules"
              :items="['Mr.', 'Mrs.', 'Miss']"
              rounded
              variant="outlined"
              class="no-shadow-select"
              required
            ></v-select>
          </v-col>
          <v-col cols="9" class="text-left">
            <label for="fullname"
              ><strong>Full Name</strong>
              <span class="required-star">*</span></label
            >
            <v-text-field
              id="fullname"
              :disabled="previewState"
              :rules="nameRules"
              v-model="fullname"
              rounded
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-left">
            <label for="mobileNumber"
              ><strong>Mobile Number</strong>
              <span class="required-star">*</span></label
            >
            <v-text-field
              id="mobileNumber"
              v-model="mobileNumber"
              rounded
              variant="outlined"
              style="box-shadow: none"
              :disabled="true"
              required
            ></v-text-field>
          </v-col>
          <v-col class="text-left">
            <label for="email"
              ><strong>Email</strong>
              <span class="required-star">*</span></label
            >
            <v-text-field
              id="email"
              v-model="email"
              :disabled="previewState"
              :rules="emailRules"
              rounded
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-left">
            <label for="nicNumber"
              ><strong>NIC Number</strong>
              <span class="required-star">*</span></label
            >
            <v-text-field
              id="nicNumber"
              v-model="nicNumber"
              :disabled="previewState"
              :rules="nicNumberRules"
              rounded
              outlined
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col class="text-left">
            <label for="nationality"
              ><strong>Nationality</strong>
              <span class="required-star">*</span></label
            >
            <v-select
              id="nationality"
              v-model="nationality"
              :disabled="previewState"
              :rules="nationalityRules"
              :items="['US', 'Sri Lanka', 'Other']"
              rounded
              outlined
              variant="outlined"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-end" v-if="props.showButtons">
          <!-- <v-col cols="5"></v-col> -->
          <v-col cols="3">
            <v-btn
              text
              @click="goBack"
              class="custom-btn py-6"
              style="outline: 2px solid black; width: 90%"
            >
              <!-- width:180px -->
              Back</v-btn
            >
          </v-col>

          <v-col cols="4">
            <v-btn
              color="#F54D4D"
              @click="continueToNextStep"
              :disabled="!valid"
              class="custom-btn py-6"
              style="background-color: #f54d4d; color: #ffffff; width: 100%"
              ><!-- width: 299px; -->
              Let's Continue</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useKycFormStore } from '@/stores/FormStore';
import { ref, computed ,defineProps} from 'vue';
import {nameRules, emailRules, nicNumberRules, nationalityRules, titleRules} from '@/validations/Validation';

// Props definition with defineProps (if you use TypeScript or want better IDE integration)
const props = defineProps({
  showHeader: {
    type: Boolean,
    default: true,
  },
  showButtons: {
    type: Boolean,
    default: true,
  },
  previewState:{
    type: Boolean,
    default:false
  }
});

const router = useRouter();
const store = useKycFormStore();

// Reactive data equivalent to 'data()' in Options API
const valid = ref(false);

// Methods
const goBack = () => {
  router.push({ name: 'Step1' });
};

const continueToNextStep = () => {
  // Add validation or other logic as needed
  if (valid.value) { // Example check on the form validity
    router.push({ name: 'Step2' }); // Proceed to FormStep2
  }

};

// Computed properties to bind form fields with the store
const title = computed({
  get: () => store.formData.personalDetails.title,
  set: value => store.updatePersonalDetails({ title: value })
});

const fullname = computed({
  get: () => store.formData.personalDetails.fullName,
  set: value => store.updatePersonalDetails({ fullName: value })
});

const mobileNumber = computed({
  get: () => store.formData.personalDetails.mobileNumber,
  set: value => store.updatePersonalDetails({ mobileNumber: value })
});

const email = computed({
  get: () => store.formData.personalDetails.email,
  set: value => store.updatePersonalDetails({ email: value })
});

const nicNumber = computed({
  get: () => store.formData.personalDetails.nicNumber,
  set: value => store.updatePersonalDetails({ nicNumber: value })
});

const nationality = computed({
  get: () => store.formData.personalDetails.nationality,
  set: value => store.updatePersonalDetails({ nationality: value })
});
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
