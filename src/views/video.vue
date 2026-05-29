<template>
  <!-- Hero Section -->
  <section
    class="relative h-64 bg-cover bg-center flex items-center text-white overflow-hidden"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/image6.jpg'); background-attachment: fixed;">
    <div class="ml-auto mr-12 z-10 text-right">
      <h1 class="text-5xl font-bold drop-shadow-lg">🎥 Videos</h1>
      <p class="text-xl mt-2 drop-shadow-lg">Discover Through Motion</p>
    </div>
  </section>

  <!-- Content Section -->
  <section class="bg-white text-gray-800 py-16">
    <div class="container mx-auto px-8">
      <p class="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        Watch our curated travel videos and highlights showcasing the beauty of Rwanda.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="relative group overflow-hidden rounded-lg shadow-lg h-80 bg-black flex items-center justify-center group-hover:shadow-2xl transition">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-60 group-hover:opacity-80 transition flex items-center justify-center">
            <span class="text-white text-6xl">▶</span>
          </div>
          <span class="text-white text-lg font-bold z-10 group-hover:scale-110 transition">Travel Highlights</span>
        </div>
        <div class="relative group overflow-hidden rounded-lg shadow-lg h-80 bg-black flex items-center justify-center group-hover:shadow-2xl transition">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-60 group-hover:opacity-80 transition flex items-center justify-center">
            <span class="text-white text-6xl">▶</span>
          </div>
          <span class="text-white text-lg font-bold z-10 group-hover:scale-110 transition">Adventure Documentary</span>
        </div>
      </div>
    </div>
  </section>
</template>
