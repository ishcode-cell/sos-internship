<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen bg-cover bg-center text-white overflow-hidden"
    style="
      background-image:
        linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
        url('/src/assets/image2.jpg');
      background-attachment: fixed;
    "
  >
    <!-- Content Wrapper -->
    <div
      class="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-16 py-20"
    >
      <div
        class="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12"
      >
        <!-- Left Content -->
        <div class="max-w-2xl text-center lg:text-left">
          <p class="uppercase tracking-[6px] text-green-300 text-xs mb-4 font-semibold">
            Visit Rwanda
          </p>

          <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Explore The <br />
            Beauty of Rwanda
          </h1>

          <p class="mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
            Discover breathtaking landscapes, rich culture, mountain gorillas,
            luxury safaris, and unforgettable adventures across the land of a
            thousand hills.
          </p>

          <!-- Buttons -->
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <!-- Explore Tours -->
            <button
              class="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              Explore Tours
            </button>

            <!-- Learn More (WHITE BUTTON) -->
            <button
              class="bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              Learn More
            </button>

          </div>
        </div>

        <!-- RIGHT GLASSMORPHISM BOX -->
        <div
          class="w-full max-w-sm bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl text-white"
        >
          <h2 class="text-2xl font-bold text-green-300 mb-4">
            About Us
          </h2>

          <p class="text-sm text-gray-200 mb-6">
            Rwanda is one of Africa’s most beautiful destinations, known for its
            rolling hills, wildlife adventures, and warm hospitality.
          </p>

          <!-- Feature Cards -->
          <div class="space-y-4">

            <!-- Card 1 -->
            <div class="bg-white/10 hover:bg-white/20 transition p-4 rounded-xl">
              <div class="text-2xl">🦍</div>
              <h3 class="font-bold mt-2">Gorilla Trekking</h3>
              <p class="text-xs text-gray-200">Volcanoes National Park</p>
            </div>

            <!-- Card 2 -->
            <div class="bg-white/10 hover:bg-white/20 transition p-4 rounded-xl">
              <div class="text-2xl">🌋</div>
              <h3 class="font-bold mt-2">Nature Tours</h3>
              <p class="text-xs text-gray-200">Mountains and lakes</p>
            </div>

            <!-- Card 3 -->
            <div class="bg-white/10 hover:bg-white/20 transition p-4 rounded-xl">
              <div class="text-2xl">🏙️</div>
              <h3 class="font-bold mt-2">City Experiences</h3>
              <p class="text-xs text-gray-200">Kigali city tours</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup></script>