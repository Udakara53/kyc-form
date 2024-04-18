import { defineStore } from 'pinia';

export const useKycFormStore = defineStore('kycForm', {
  state: () => ({
    formData: {
      personalDetails: {
        title: '',
        fullName: '',
        mobileNumber: '',
        email: '',
        nicNumber: '',
        nationality: ''
      },
      images: {
        nicFront: null,
        nicRear: null,
        selfie: null
      }
    }
  }),
  getters: {
    // Add getters if you need to derive any computed properties from the state
  },
  actions: {
    updatePersonalDetails(details) {
      this.formData.personalDetails = { ...this.formData.personalDetails, ...details };
    },
    updateImage(key, image) {
      if (Object.prototype.hasOwnProperty.call(this.formData.images, key)) {
        this.formData.images[key] = image;
      }
    }
  }
});
