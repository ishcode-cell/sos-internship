<template>
  <!-- Hero Section -->
  <section
    class="relative h-screen bg-cover bg-center text-white overflow-hidden"
    style="
      background-image:
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
      url('/src/assets/image2.jpg');
      background-attachment: fixed;
    "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- Main Content -->
    <div
      class="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16"
    >

      <!-- Left Content -->
      <div class="max-w-2xl">
        <p
          class="uppercase tracking-[6px] text-green-300 text-sm mb-4 font-semibold"
        >
          Visit Rwanda
        </p>

        <h1
          class="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl"
        >
          Explore The <br />
          Beauty of Rwanda
        </h1>

        <p class="mt-6 text-lg md:text-xl leading-relaxed text-gray-200">
          Discover breathtaking landscapes, rich culture, mountain gorillas,
          luxury safaris, and unforgettable adventures across the land of a
          thousand hills.
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex gap-4">
          <button
            class="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Explore Tours
          </button>

          <button
            class="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-full font-semibold"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- Right Glass Card -->
      <div
        class="mt-12 md:mt-0 max-w-md backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
      >
        <h2 class="text-4xl font-bold text-green-300 mb-4">
          About Us
        </h2>

        <p class="text-lg leading-relaxed text-gray-100">
          Rwanda is one of Africa’s most beautiful destinations, known for its
          rolling hills, wildlife adventures, vibrant cities, and warm
          hospitality. Whether you seek nature, culture, or luxury travel,
          Rwanda offers experiences you will never forget.
        </p>

        <!-- Tour Highlights -->
        <div class="mt-8 space-y-4">

          <div
            class="flex items-center gap-4 bg-white/10 p-4 rounded-2xl"
          >
            <div class="text-3xl">🦍</div>

            <div>
              <h3 class="font-bold text-lg">Gorilla Trekking</h3>
              <p class="text-sm text-gray-200">
                Explore Volcanoes National Park.
              </p>
            </div>
          </div>

          <div
            class="flex items-center gap-4 bg-white/10 p-4 rounded-2xl"
          >
            <div class="text-3xl">🌋</div>

            <div>
              <h3 class="font-bold text-lg">Nature Tours</h3>
              <p class="text-sm text-gray-200">
                Discover mountains, lakes, and forests.
              </p>
            </div>
          </div>

          <div
            class="flex items-center gap-4 bg-white/10 p-4 rounded-2xl"
          >
            <div class="text-3xl">🏙️</div>

            <div>
              <h3 class="font-bold text-lg">City Experiences</h3>
              <p class="text-sm text-gray-200">
                Enjoy the beauty of Kigali city life.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>