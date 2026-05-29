<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen bg-cover bg-center text-white overflow-hidden"
    style="
      background-image:
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
      url('/src/assets/image3.jpg');
      background-attachment: fixed;
    "
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- Main Content -->
    <div
      class="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 py-20"
    >

      <!-- Top Heading -->
      <div class="max-w-3xl">
        <p
          class="uppercase tracking-[6px] text-green-300 text-sm mb-4 font-semibold"
        >
          Explore Rwanda
        </p>

        <h1
          class="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl"
        >
          Our Services
        </h1>

        <p class="text-lg md:text-2xl mt-4 text-gray-200">
          Excellence in Every Experience
        </p>
      </div>

      <!-- Service Cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
      >

        <!-- Card 1 -->
        <div
          class="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300"
        >
          <div class="text-5xl mb-5">🌍</div>

          <h2 class="text-3xl font-bold text-green-300 mb-4">
            Tours & Travels
          </h2>

          <p class="text-gray-100 leading-relaxed">
            Experience guided tours through Rwanda’s most beautiful
            destinations, including mountains, lakes, wildlife parks,
            and cultural sites.
          </p>

          <button
            class="mt-6 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-full font-semibold transition"
          >
            Explore Tours
          </button>
        </div>

        <!-- Card 2 -->
        <div
          class="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300"
        >
          <div class="text-5xl mb-5">📸</div>

          <h2 class="text-3xl font-bold text-green-300 mb-4">
            Photography
          </h2>

          <p class="text-gray-100 leading-relaxed">
            Capture unforgettable moments in breathtaking landscapes,
            vibrant cities, wildlife adventures, and cultural experiences.
          </p>

          <button
            class="mt-6 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-full font-semibold transition"
          >
            View Gallery
          </button>
        </div>

        <!-- Card 3 -->
        <div
          class="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300"
        >
          <div class="text-5xl mb-5">⛰️</div>

          <h2 class="text-3xl font-bold text-green-300 mb-4">
            Adventures
          </h2>

          <p class="text-gray-100 leading-relaxed">
            Enjoy thrilling adventures including hiking, gorilla trekking,
            camping, ziplining, and nature exploration across Rwanda.
          </p>

          <button
            class="mt-6 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-full font-semibold transition"
          >
            Start Adventure
          </button>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>