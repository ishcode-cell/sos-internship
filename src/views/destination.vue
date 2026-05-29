<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-64 bg-cover bg-center flex items-center text-white overflow-hidden"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/image7.jpg'); background-attachment: fixed;">
    <div class="ml-auto mr-12 z-10 text-right">
      <h1 class="text-5xl font-bold drop-shadow-lg">🗺️ Destinations</h1>
      <p class="text-xl mt-2 drop-shadow-lg">Explore Rwanda's Regions</p>
    </div>
  </section>

  <!-- Content Section -->
  <section class="bg-white text-gray-800 py-16">
    <div class="container mx-auto px-8">
      <p class="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        Choose a region to explore travel options and discover what each area has to offer.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <router-link
          to="/northern"
          class="group bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-white"
        >
          <div class="text-4xl mb-3">🏔️</div>
          <h3 class="text-2xl font-bold mb-2">Northern Region</h3>
          <p class="group-hover:text-green-100 transition">Mountains & Adventure</p>
        </router-link>

        <router-link
          to="/southern"
          class="group bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-white"
        >
          <div class="text-4xl mb-3">🌾</div>
          <h3 class="text-2xl font-bold mb-2">Southern Region</h3>
          <p class="group-hover:text-yellow-100 transition">Lakes & Landscapes</p>
        </router-link>

        <router-link
          to="/eastern"
          class="group bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-white"
        >
          <div class="text-4xl mb-3">🌅</div>
          <h3 class="text-2xl font-bold mb-2">Eastern Region</h3>
          <p class="group-hover:text-blue-100 transition">Sunrise & Safari</p>
        </router-link>

        <router-link
          to="/western"
          class="group bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-white"
        >
          <div class="text-4xl mb-3">🌄</div>
          <h3 class="text-2xl font-bold mb-2">Western Region</h3>
          <p class="group-hover:text-purple-100 transition">Forests & Wildlife</p>
        </router-link>

        <router-link
          to="/kigali"
          class="group bg-gradient-to-br from-red-400 to-red-600 rounded-lg p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-white"
        >
          <div class="text-4xl mb-3">🏙️</div>
          <h3 class="text-2xl font-bold mb-2">Kigali City</h3>
          <p class="group-hover:text-red-100 transition">Capital & Culture</p>
        </router-link>
      </div>
    </div>
  </section>
</template>