<template>
  <div class="flex min-h-screen items-center justify-center bg-white">
    <!-- Left Side (Form) -->
    <div class="bg-white p-8 rounded-lg w-full max-w-md">
      <h1
        class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        List Data Anak
      </h1>
      <p class="text-center font-medium leading-9 text-gray-900">
        Silahkan Masukan Data Diri Anak Anda
      </p>

      <form class="space-y-6 mt-10" action="#" method="POST">
        <!-- Tambah Anggota Button -->
        <div class="text-center">
          <label
            for="tambah-anggota"
            class="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Tambah Anggota
          </label>
          <RouterLink
            to="/register-anak"
            class="flex items-center justify-center w-full rounded-md border-2 border-blue-600 bg-white text-blue-600 py-2 px-4 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:text-sm"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Tambah Anggota
          </RouterLink>
        </div>

        <!-- Space between buttons -->
        <div class="mt-8">
          <!-- Submit Button -->
          <div class="flex justify-center">
            <button
              type="submit"
              class="flex w-auto justify-center rounded-md bg-white border-2 border-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Mungkin nanti
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
