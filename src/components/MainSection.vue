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
        <v-col class="text-left">
          <label for="">Title <span class="required-star">*</span></label>
          <v-select
            v-model="title"
            :items="['Mr.', 'Mrs.', 'Miss']"
            rounded
          ></v-select>
        </v-col>
        <v-col class="text-left">
          <label for="">Full Name <span class="required-star">*</span></label>
          <v-text-field v-model="fullname" rounded></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          <label for=""
            >Mobile Number <span class="required-star">*</span></label
          >
          <v-text-field v-model="fullname" rounded></v-text-field>
        </v-col>
        <v-col class="text-left">
          <label for="">Email <span class="required-star">*</span></label>
          <v-text-field v-model="fullname" rounded></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-left">
          <label for="">NIC Number <span class="required-star">*</span></label>
          <v-text-field v-model="fullname" rounded outlined></v-text-field>
        </v-col>
        <v-col class="text-left">
          <label for="">Nationality <span class="required-star">*</span></label>
          <v-select
            v-model="title"
            :items="['US', 'Sri Lanka', 'Other']"
            rounded
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-end">
        <v-btn
          text
          @click="goBack"
          class="mr-7 custom-btn"
          style="outline: 2px solid black; width:180px"
          >Back</v-btn
        >
        <v-btn
          color="#F54D4D"
          @click="continueTo"
          class="custom-btn"
          style="
            background-color: #f54d4d; /* Assuming this is the button color; replace as needed */
            color: #ffffff; width: 299px;
          "
          >Let's Continue</v-btn
        >
      </v-row>
    </v-container>
  </v-form>
  </v-container>
</template>

<script>


export default {
  name: 'MainSection',
  components: {
    
  },
  data() {
    return {
      currentStep: 1,
    };
  },
  computed: {
    currentStepComponent() {
      switch (this.currentStep) {
        case 1:
          return 'FormStep1';
        case 2:
          return 'FormStep2';
        // case 3: return 'FormPreview'; // Uncomment if you have a preview step
        default:
          return 'FormStep1';
      }
    },
  },
  methods: {
    handleChangeStep(step) {
      this.currentStep = step;
    }
  }
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
</style>
