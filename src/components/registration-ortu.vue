<template>
    <div class="flex min-h-screen">
      <!-- Left Side (Form) -->
      <div class="w-1/2 flex justify-center items-center bg-white">
        <div class="bg-white p-8 rounded-lg w-full max-w-xxl"> <!-- Lebarkan menjadi max-w-xl -->
          <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Registrasi Akun</h2>
          <p class="text-center font-medium leading-9 text-gray-900">Silahkan Masukan Data Diri Anda</p>
  
          <form class="space-y-6 mt-10" action="#" method="POST">
            <!-- Nama -->
            <div>
              <div class="flex items-center justify-between">
                <label for="nama" class="block text-sm font-medium leading-6 text-gray-900">Nama</label>
              </div>
              <div class="mt-2">
                <input id="nama" name="nama" type="nama" autocomplete="nama" required
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <!-- NIK -->
            <div>
              <div class="flex items-center justify-between">
                <label for="NIK" class="block text-sm font-medium leading-6 text-gray-900">NIK</label>
              </div>
              <div class="mt-2">
                <input id="NIK" name="NIK" type="NIK" autocomplete="NIK" required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <!-- Tempat Lahir dan Tanggal Lahir (Dibuat Sebaris) -->
            <div class="flex space-x-4">
              <!-- Tempat Lahir -->
              <div class="w-1/2">
                <div class="flex items-center justify-between">
                  <label for="TTL" class="block text-sm font-medium leading-6 text-gray-900">Tempat Lahir</label>
                </div>
                <div class="mt-2">
                  <input id="TTL" name="TTL" type="text" required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <!-- Tanggal Lahir -->
              <div class="w-1/2">
                <div class="flex items-center justify-between">
                  <label for="tanggal_lahir" class="block text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</label>
                </div>
                <div class="mt-2">
                  <input id="tanggal_lahir" name="tanggal_lahir" type="date" required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
  
            <!-- Kelurahan, Kecamatan, dan Kabupaten (Dibuat Sebaris) -->
            <div class="flex space-x-4">
              <!-- Kelurahan -->
              <div class="w-1/3">
                <div class="flex items-center justify-between">
                  <label for="kelurahan" class="block text-sm font-medium leading-6 text-gray-900">Kelurahan</label>
                </div>
                <div class="mt-2">
                  <input id="kelurahan" name="kelurahan" type="text" required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <!-- Kecamatan -->
              <div class="w-1/3">
                <div class="flex items-center justify-between">
                  <label for="kecamatan" class="block text-sm font-medium leading-6 text-gray-900">Kecamatan</label>
                </div>
                <div class="mt-2">
                  <input id="kecamatan" name="kecamatan" type="text" required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <!-- Kabupaten -->
              <div class="w-1/3">
                <div class="flex items-center justify-between">
                  <label for="kabupaten" class="block text-sm font-medium leading-6 text-gray-900">Kabupaten</label>
                </div>
                <div class="mt-2">
                  <input id="kabupaten" name="kabupaten" type="text" required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
  
            <!-- Alamat -->
            <div>
  <div class="flex items-center justify-between">
    <label for="Alamat" class="block text-sm font-medium leading-6 text-gray-900">Alamat</label>
  </div>
  <div class="mt-2">
    <input id="Alamat" name="Alamat" type="Alamat" autocomplete="Alamat" required
      class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
  </div>
</div>

  
            <!-- Submit Button -->
            <div>
              <button type="submit"
                class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Lanjut
              </button>
            </div>
  
            
          </form>
        </div>
      </div>
  
      <!-- Right Side (Image) -->
      <div class="w-1/2 hidden md:block">
        <img src="../assets/img1.jpeg" alt="Placeholder Image" class="h-screen w-full object-cover" />
      </div>
    </div>
  </template>
  