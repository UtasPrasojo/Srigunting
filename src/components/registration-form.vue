<template>
  <div class="flex min-h-screen">
    <!-- Left Side (Form) -->
    <div class="w-1/2 flex justify-center items-center bg-white">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2
          class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Registrasi
        </h2>
        <p class="text-center font-medium leading-9 text-gray-900">
          Silahkan Masukan Data Diri Anda
        </p>

        <form class="space-y-6 mt-10" action="#" method="POST">
          <!-- Email -->
          <div>
            <div class="flex items-center justify-between">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email</label
              >
            </div>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <!-- Confirm Password -->
            <div class="flex items-center justify-between">
              <label
                for="confirm-password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Confirm Password</label
              >
            </div>
            <div class="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign in
            </button>
          </div>

          <!-- Login -->
          <div class="mt-2">
            <span class="font-semibold text-gray-900">Sudah punya akun? </span>
            <RouterLink
              to="/login"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
              >Masuk</RouterLink
            >
          </div>
        </form>
      </div>
    </div>

    <!-- Right Side (Image) -->
    <div class="w-1/2 hidden md:block">
      <img
        src="../assets/img1.jpeg"
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
    };
  },
  methods: {
    submitForm() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match";
        return;
      }

      // Simulasi pengiriman data
      const registrationData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      console.log("Registration successful", registrationData);
      this.errorMessage = "";
      alert("Registration successful!");
    },
  },
};
</script>

<!-- <style scoped>
  .registration-form {
    width: 300px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4260b9;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #38a773;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
   -->
