<template>
  <v-container class=" pa-9" style="width: 60%">
    <h1 style="">KYC Form</h1>
    <p class="poppins-paragraph mt-5">
      Please enter your valid Name & email address to using all of our
    </p>
    <p class="poppins-paragraph mb-8">feature</p>
    <FormStep1 />
  </v-container>
</template>

<script>
import FormStep1 from './FormStep1.vue';

export default {
  name: 'MainSection',
  components: {
    FormStep1,
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
</style>
