<template>
    <v-dialog :value="isVisible" persistent max-width="400px">
      <v-card class="d-flex flex-column align-center p-5">
        <h3 class="text-center">Enter OTP</h3>
        <v-otp-input
          ref="otpInput"
          :num-inputs="5"
          input-classes="otp-input"
          :should-auto-focus="true"
          v-model:value="otp"
          @on-complete="handleOtpComplete"
        />
        <p v-if="time > 0">Time remaining: {{ timeFormatted }}</p>
        <a href="#" v-if="time <= 0" @click.prevent="resendCode">Resend code</a>
        <v-btn :disabled="!otpComplete" @click="verifyOtp">Verify</v-btn>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch,defineProps, defineEmits } from 'vue';
  import VOtpInput from 'vue3-otp-input';
  
  const emit = defineEmits(['update:isVisible', 'verified']);
  const isVisible = ref(false);
  
  // Prop for visibility control
  const props=defineProps({
    modelValue: Boolean
  });
  
  watch(() => props.modelValue, (newValue) => {
    isVisible.value = newValue;
  });
  
  const otp = ref('');
  const otpComplete = ref(false);
  const time = ref(60); // 60 seconds for the timer
  
  const timeFormatted = computed(() => {
    const minutes = Math.floor(time.value / 60);
    const seconds = time.value % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  });
  
  onMounted(() => {
    const interval = setInterval(() => {
      if (time.value > 0) {
        time.value--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  });
  
  const resendCode = () => {
    time.value = 60;
    console.log('Resend OTP');
  };
  
  const handleOtpComplete = () => {
    otpComplete.value = true;
  };
  
  const verifyOtp = () => {
    console.log('OTP Verified:', otp.value);
    emit('verified');
    emit('update:isVisible', false);
  };
  </script>
  
  <style scoped>
  .otp-input {
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 0 5px;
    font-size: 18px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
  }
  </style>
  