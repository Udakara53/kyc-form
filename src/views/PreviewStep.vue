<template>
    
    <div>
        <h1>Preview</h1>
      <p class="poppins-paragraph mt-5">
        Please enter your valid Name & email address to use all of our
      </p>
      <p class="poppins-paragraph mb-8">feature</p>
      </div>
      <FormStep1 :showHeader="false" :showButtons="false" />
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
</template>

<script>
import { useRouter } from 'vue-router';
import FormStep1 from '@/views/FormStep1.vue'
import FormStep2 from '@/views/FormStep2.vue'

export default{
    name:'PreviewStep',
    components:{
        FormStep1,
        FormStep2

    },
    setup(){
        const router = useRouter();
        const SubmitForm = () => {
        router.push({ name: 'Preview' }); 
      };
  
      const goBack = () => {
        router.push({ name: 'Step2' }); 
      };

      return {
        goBack,
        SubmitForm
      }
    }
}

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

</style>