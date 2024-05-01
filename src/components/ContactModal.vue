<template>
  <v-dialog v-model="visibleContact" persistent max-width="38%">
    <v-card class="d-flex flex-column align-center pt-0 pb-5">
      <!-- Flex column to align items centrally -->
      <v-row
        no-gutters
        class="pa-5"
        style="background-color: #f54d4d; width: 100%"
      >
        <v-col
          ><h3 class="custom-topic mt-2 text-center">
            LOGIN OR REGISTER
          </h3></v-col
        >
      </v-row>
      <v-row style="width: 80%" class="mt-5">
        <v-col cols="4">
          <v-select
            :items="['+94', '+85', '+67']"
            label="Country Code"
            v-model="selectedCountryCode"
            solo-inverted
            flat
          ></v-select>
        </v-col>
        <v-col cols="8">
          <v-text-field
            label="Phone Number"
            v-model="phoneNumber"
            :rules="phoneNumberValidationRules"
            solo-inverted
            flat
          ></v-text-field>
        </v-col>
      </v-row>
      <v-card-text class="my-2">{{ message }}</v-card-text>
      <v-card-actions class="justify-center my-2">
        <v-btn class="custom-btn px-5" style="outline: 2px solid black" text
          >Back</v-btn
        >
        <v-col cols="8"></v-col>
        <v-btn
          class="selfie-btn ml-5"
          text
          @click="continueWithPhone"
          :disabled="!isFormValid"
          >Continue</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, computed } from 'vue';
import { useKycFormStore } from '@/stores/FormStore';

const props = defineProps({
  message: String,
  modelValue: Boolean,
  previewSectionModelValue: Boolean,
});

const emits = defineEmits(['update:modelValue']);
const store = useKycFormStore();

const selectedCountryCode = ref('+94');
const phoneNumber = ref('');

const phoneNumberRules = {
  minLength: computed(() => phoneNumber.value.length > 5),
  isRequired: computed(() => !!phoneNumber.value),
};

const phoneNumberValidationRules = computed(() => [
  () => {
    const result =
      phoneNumberRules.isRequired.value || 'Phone number is required';
    return result;
  },
  () => {
    const result =
      phoneNumberRules.minLength.value ||
      'Phone number must be at least 6 digits';
    return result;
  },
]);

// Create a local state that reacts to the prop for showing the dialog
const visibleContact = ref(props.modelValue);

// Watch for changes in modelValue prop to update the local visible state
watch(
  () => props.modelValue,
  (newVal) => {
    visibleContact.value = newVal;
  }
);

// Emit an update to the modelValue when the local visible state changes
watch(visibleContact, (newVal) => {
  if (newVal !== props.modelValue) {
    emits('update:modelValue', newVal);
  }
});

const isFormValid = computed(() => {
  // Access the computed properties inside phoneNumberRules, convert them to their values, and check if all are true
  return Object.values(phoneNumberRules).every((rule) => rule.value);
});

// Function to close the dialog and emit the change
const closeDialog = () => {
  visibleContact.value = false;
};

const continueWithPhone = () => {
  const fullNumber = `${selectedCountryCode.value}${phoneNumber.value}`;
  console.log(fullNumber);
  store.updateMobileNumber(fullNumber); // Update the store with the combined number
  closeDialog(); // Optionally close the dialog
  // Here you can also navigate or perform other actions

  /*axios
    .post('/api/ContactNumber/ContactNumber', { contact_number: fullNumber })
    .then(() => {
      console.log('request send');
    })
    .catch((error) => {
      console.error('Error sending contactnum', error);
    });*/
};
</script>

<style scoped>
/* Add any specific styles for your dialog here */
.selfie-btn {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  background: #f54d4d;
  padding: 5px 45px;
  line-height: 0.8;
  border-radius: 5px;
  color: #ffffff;
  text-transform: none;
}
.custom-topic {
  font-family: Gotham, sans-serif;
  font-size: 26.95px;
  font-weight: 700;
  line-height: 32.34px;
  color: #ffffff;
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
  padding: 5px 45px;
  font-weight: 500;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
