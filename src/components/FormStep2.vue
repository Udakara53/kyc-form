<template>
  <v-container class="pa-9" style="width: 60%">
    <h1 style="">KYC Form</h1>
    <p class="poppins-paragraph mt-5">
      Please enter your valid Name & email address to using all of our
    </p>
    <p class="poppins-paragraph mb-8">feature</p>
    <!-- <FormStep1 /> -->
    
      <v-container class="">
        <v-row class="d-flex justify-end">
          <v-btn
            text
            @click="goBack"
            class="mr-7 custom-btn"
            style="outline: 2px solid black; width: 180px"
            >Back</v-btn
          >
          <v-btn
            color="#F54D4D"
            @click="continueTo"
            class="custom-btn"
            style="
              background-color: #f54d4d; /* Assuming this is the button color; replace as needed */
              color: #ffffff;
              width: 299px;
            "
            >Let's Continue</v-btn
          >
        </v-row>
      </v-container>
  </v-container>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'FormStep2',
  setup() {
    const router = useRouter();

    function goBack() {
      router.push({ name: 'Step1' }); // Navigate back to FormStep1
    }
    return { goBack };
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
  height: 60px;
  border-radius: 10px;
  opacity: 1;
  font-weight: 500;
  text-transform: none;
}
</style>
