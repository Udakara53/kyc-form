<template>
  <v-form v-model="valid">
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
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'FormStep1',
};
</script>

<style>
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
</style>
