<template>
  <v-container class="pa-9" style="width: 60%">
    <h1>KYC Form</h1>
    <p class="poppins-paragraph mt-5">
      Please enter your valid Name & email address to use all of our features.
    </p>

    <v-row>
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
    </v-row>

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
        @click="continueToNextStep"
        class="custom-btn"
        style="background-color: #f54d4d; color: #ffffff; width: 299px"
        >Let's Continue</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import { useRouter } from 'vue-router';
import DropZone from '@/components/DropZone';
import { ref } from 'vue';

export default {
  name: 'FormStep2',
  components: {
    DropZone,
  },
  setup() {
    const router = useRouter();
    const idFront = ref({ preview: null });
    const idRear = ref({ preview: null });
    const selfie = ref(null);

    const captureSelfie = () => {
      // Placeholder function for capturing a selfie
    };

    const continueToNextStep = () => {
      router.push({ name: 'Step2' }); // Replace 'NextStepName' with your next step route name
    };

    const goBack = () => {
      router.push({ name: 'Step1' }); // Ensure this is the correct route name for going back
    };

    let dropzoneFile = ref('');

    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector('.dropzoneFile').files[0];
    };

    return {
      idFront,
      idRear,
      selfie,
      captureSelfie,
      continueToNextStep,
      goBack,
      selectedFile,
      drop,
      dropzoneFile,
    };
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
