import { defineStore } from 'pinia';

export const useKycFormStore = defineStore('kycForm', {
  state: () => ({
    formData: {
      personalDetails: {
        title: '',
        fullName: '',
        mobileNumber: '',
        emailAddress: '',
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
    getImage: (state) => (key) => {
      return state.formData.images[key];
    }
  },

  actions: {
    updatePersonalDetails(details) {
      this.formData.personalDetails = { ...this.formData.personalDetails, ...details };
    },
    updateImage(key, image) {
      if (Object.prototype.hasOwnProperty.call(this.formData.images, key)) {
        this.formData.images[key] = image;
      }else{
        console.error("Invalid key for image data");
      }
    },
    updateMobileNumber(mobileNumberWithCode) { // New method to handle mobile number update
      this.formData.personalDetails.mobileNumber = mobileNumberWithCode;
    }
  }
});
