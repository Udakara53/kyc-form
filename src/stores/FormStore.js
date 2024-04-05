import { defineStore } from 'pinia';

export const useKycFormStore = defineStore('kycForm', {
  state: () => ({
    currentStep: 1,
    formData: {
      title: '',
      fullName: '',
      mobileNumber: '',
      email: '',
      nicNumber: '',
      nationality: '',
      images: {
        nicFront: null,
        nicRear: null,
        selfie: null,
      },
    },
  }),
  actions: {
    setStep(step) {
      this.currentStep = step;
    },
    updateTitle(value) {
      this.formData.title = value;
    },
    updateFullName(value) {
      this.formData.fullName = value;
    },
    // Add update methods for the rest of your form fields
    // Add logic to handle image uploads and setting image data
    submitForm() {
      // Perform form submission logic
      // Show success message or modal
    },
  },
});
