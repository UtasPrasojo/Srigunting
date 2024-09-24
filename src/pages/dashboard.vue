<template>
    <div class="bg-gray-100 p-4 min-h-screen">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-3xl font-bold text-blue-500">Dashboard</h1>
        <div class="flex items-center space-x-4">
          <i class="fas fa-bell text-xl"></i>
          <div class="flex items-center space-x-2">
            <img
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-Raz6aFMXMw6LvUuxJuGIHLgC.png"
              alt="User profile picture"
              class="w-10 h-10 rounded-full"
            />
            <span class="font-medium">Faygo Umandana</span>
          </div>
        </div>
      </div>
  
      <!-- Banner -->
      <div class="relative mb-4">
        <img
          class="w-full h-48 object-cover rounded-lg"
          src="../assets/header-dashboard.jpeg"
          alt="Banner image"
        />
        <button
          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <i class="fas fa-chevron-left text-blue-500"></i>
        </button>
        <button
          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <i class="fas fa-chevron-right text-blue-500"></i>
        </button>
      </div>
  
      <!-- Aktivitas -->
      <div>
        <h2 class="text-xl font-bold text-blue-500 mb-2">Aktivitas</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <!-- Profil Ibu -->
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-bold mb-2">Profil Ibu</h3>
            <div class="flex items-center space-x-4">
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-yCBktFHlLV33666HgRE9dGYS.png"
                alt="Profile picture of Julia"
                class="w-16 h-16 rounded-full"
              />
              <div>
                <p class="font-medium">Julia</p>
                <p class="text-gray-500">julia@user.com</p>
                <p class="text-gray-500">NIK : 1105702240006</p>
              </div>
            </div>
          </div>
  
          <!-- Total Kunjungan Posyandu -->
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-bold mb-2">Total Kunjungan Posyandu</h3>
            <p class="text-3xl font-bold">8</p>
          </div>
  
          <!-- Jadwal Posyandu -->
          <div class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-bold">Jadwal Posyandu</h3>
              <a href="#" class="text-blue-500">Selengkapnya</a>
            </div>
            <ul class="flex-grow">
              <li class="mb-1">
                <p class="font-medium">Posyandu Suka Jati</p>
                <p class="text-gray-500">8.00-9.00</p>
              </li>
              <li class="mb-1">
                <p class="font-medium">Posyandu Suka Jati</p>
                <p class="text-gray-500">8.00-9.00</p>
              </li>
              <li class="mb-1">
                <p class="font-medium">Posyandu Suka Jati</p>
                <p class="text-gray-500">8.00-9.00</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Artikel -->
      <div>
        <h2 class="text-xl font-bold text-blue-500 mb-2">Artikel</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between max-w-lg min-h-[300px] ">
            <img
              class="w-full h-32 object-cover rounded-lg mb-2"
              src="../assets/artikel.jpeg"
              alt="Article image"
            />
            <div>
              <h3 class="font-bold">Pentingnya Gosok Gigi</h3>
              <p class="text-gray-500">Senin, 25 Januari 2024</p>
            </div>
          </div>
  
          <div class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between md:mx-0 max-w-lg min-h-[300px] gap-0">
            <img
              class="w-full h-32 object-cover rounded-lg mb-2"
              src="../assets/artikel.jpeg"
              alt="Article image"
            />
            <div>
              <h3 class="font-bold">Pentingnya Gosok</h3>
              <p class="text-gray-500">Senin, 25 Januari 2024</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer button -->
      <div class="mt-4 text-center">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Lihat Artikel Lainnya
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard",
  };
  </script>
  
  <style scoped>
  body {
    font-family: "Roboto", sans-serif;
  }
  </style>
  