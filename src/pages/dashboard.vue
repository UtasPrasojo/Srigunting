<template>
  <div class="flex bg-white p-4 min-h-screen" style="width: 1165px; height: 122px;">
    <Sidebar /> <!-- Menambahkan komponen Sidebar di sini -->
    
    <div class="flex-1 p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-3xl font-bold text-blue-500">Dashboard</h1>
        <div class="flex items-center space-x-4">
          <i class="fas fa-bell text-xl"></i>
          <div class="flex items-center space-x-2">
    <img
      src="../assets/profil.png"
      alt="Gambar profil pengguna"
      class="w-10 h-10 rounded-full"
    />
    <span class="font-medium">Faygo Umandana</span>
  </div>
        </div>
      </div>

      <!-- Banner -->
      <div class="relative " style="width: 1093px; height: 600px;">

        <img
          class="w-full h-full object-cover rounded-lg transition-opacity duration-500"
          :src="images[currentIndex]"
          alt="Gambar Banner"
        />
        <button
          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          @click="prevImage"
        >
          <i class="fas fa-chevron-left text-blue-500"></i>
        </button>
        <button
          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          @click="nextImage"
        >
          <i class="fas fa-chevron-right text-blue-500"></i>
        </button>
      </div>

      <!-- Aktivitas -->
      <div>
        <h2 class="text-xl font-bold text-blue-500 mb-2">Aktivitas</h2>
        <div class="flex gap-4 mb-4">
          <!-- Profil Ibu -->
          <div
            id="card"
            class="bg-white p-6 rounded-lg shadow-md"
            style="width: 375px; height: 190px"
          >
            <h3 class="font-bold text-lg mb-2">Profil Ibu</h3>
            <div class="flex items-center space-x-4">
              <img
                src="../assets/profil2.png"
                alt="Gambar profil Julia"
                class="w-16 h-16 rounded-full"
              />
              <div>
                <p class="font-medium text-xl">Julia</p>
                <p class="text-gray-500">julia@user.com</p>
                <p class="text-gray-500">NIK: 1105702240006</p>
              </div>
            </div>
          </div>

          <!-- Total Kunjungan Posyandu -->
          <div
            id="baris 2"
            class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
            style="width: 234px; height: 190px" 
          >
            <h3 class="font-bold mb-2">Total Kunjungan Posyandu</h3>
            <p class="text-3xl font-bold">8</p>
          </div>

          <!-- Jadwal Posyandu -->
        <div
          class="bg-white p-4 rounded-lg shadow-md flex flex-col  overflow-y-auto"
          style="width: 435px; height: 507px;"
        >
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
        <div class="flex space-x-4">
    <!-- Surat Hasil Perkembangan Anak -->
    <div
      id="perkembangan anak"
      class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
      style="width: 308px; height: 176px"
    >
      <h3 class="font-bold mb-2">Surat Hasil Perkembangan Anak</h3>
      <p class="text-3xl font-bold">5</p>
    </div>

    <!-- Surat Hasil Kesehatan Ibu -->
    <div
      id="kesehatan ibu"
      class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
      style="width: 308px; height: 176px"
    >
      <h3 class="font-bold mb-2">Surat Hasil Kesehatan Ibu</h3>
      <p class="text-3xl font-bold">5</p>
    </div>
  </div>
        

        

        <!-- Artikel -->
        <div>
          <h2 class="text-xl font-bold text-blue-500 mb-2">Artikel</h2>
        </div>
        <!-- Seksi Artikel -->
        <div class="flex mb-4">
    <!-- Card 1 -->
    <div
      class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
      style="width: 345px; height: 286px; margin-right: 20px;" 
    >
      <img
        class="w-full h-32 object-cover rounded-lg mb-2"
        src="../assets/artikel.jpeg"
        alt="Gambar Artikel"
      />
      <div>
        <h3 class="font-bold">Pentingnya Gosok Gigi</h3>
        <p class="text-gray-500">Senin, 25 Januari 2024</p>
      </div>
    </div>

    <!-- Card 2 -->
    <div
      class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
      style="width: 345px; height: 286px; margin-right: 24px;" 
    >
      <img
        class="w-full h-32 object-cover rounded-lg mb-2"
        src="../assets/artikel.jpeg"
        alt="Gambar Artikel"
      />
      <div>
        <h3 class="font-bold">Pentingnya Gosok Gigi</h3>
        <p class="text-gray-500">Senin, 25 Januari 2024</p>
      </div>
    </div>

    <!-- Card 3 -->
    <div
      class="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
      style="width: 345px; height: 286px;"
    >
      <img
        class="w-full h-32 object-cover rounded-lg mb-2"
        src="../assets/artikel.jpeg"
        alt="Gambar Artikel"
      />
      <div>
        <h3 class="font-bold">Pentingnya Gosok Gigi</h3>
        <p class="text-gray-500">Senin, 25 Januari 2024</p>
      </div>
    </div>
  </div>

        <!-- Tombol Footer -->
        <div class="mt-4 text-center">
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Lihat Artikel Lainnya
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import headerImage from "../assets/header-dashboard.jpeg"; 
import profil from "../assets/profil.png"; 
import headerImage1 from "../assets/img2.png";

export default {
  name: "Dashboard",
  data() {
    return {
      currentIndex: 0,
      images: [headerImage, headerImage, headerImage], // Menggunakan gambar yang diimpor
    };
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    autoScroll() {
      setInterval(() => {
        this.nextImage();
      }, 3000);
    },
  },
  mounted() {
    this.autoScroll();
  },
};
</script>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
}
</style>
