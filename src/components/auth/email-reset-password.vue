<template>
    <div class="flex min-h-screen">
      <!-- Left Side (Form) -->
      <div class="w-1/2 flex justify-center items-center bg-white">
        <div class="bg-white p-8 rounded-lg w-full max-w-md">
          <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-4"> <!-- Reduced bottom margin -->
            Cek Email Anda
          </h2>
          <!-- Add the image here above the heading -->
          <div class="text-center mb-4"> <!-- Reduced bottom margin -->
            <img
              src="../../assets/img2.png"
              alt="OTP Image"
              class="mx-auto w-110 h-50 object-cover"
            />
          </div>
          
          <p class="text-center font-medium leading-4 text-gray-900 mb-4">
            Kami telah mengirim Intruksi Untuk Mengganti Password
          </p>
          <p class="text-center font-medium leading-4 text-gray-900">
            Belum Menerima? 
            <a
              href="#"
              class="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer"
              @click.prevent="resendOtp"
            >
              Kirim ulang
            </a>
            <span v-if="countdown > 0" class="ml-2 text-gray-600">
              {{ formattedCountdown }}
            </span>
          </p>
        </div>
      </div>
  
      <!-- Right Side (Image) -->
      <div class="w-1/2 hidden md:block">
        <img
          src="../../assets/img1.jpeg"
          alt="Placeholder Image"
          class="h-screen w-full object-cover"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        countdown: 0,
        timer: null,
      };
    },
    computed: {
      formattedCountdown() {
        const minutes = Math.floor(this.countdown / 60);
        const seconds = this.countdown % 60;
        return `${minutes} menit ${seconds} detik`;
      },
    },
    methods: {
      resendOtp() {
        if (this.countdown > 0) return; // Prevent resending while countdown is active
  
        // Reset countdown to 2 minutes (120 seconds)
        this.countdown = 120;
        this.startCountdown();
  
        // Handle OTP resend logic here
      },
      startCountdown() {
        this.timer = setInterval(() => {
          if (this.countdown > 0) {
            this.countdown -= 1;
          } else {
            clearInterval(this.timer);
            this.timer = null; // Clear the timer when countdown ends
          }
        }, 1000);
      },
    },
    beforeDestroy() {
      // Clear the timer if the component is destroyed
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
  };
  </script>
  