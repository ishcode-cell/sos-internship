<template>
  <div>

    <!-- HERO SECTION -->
    <section
      class="relative h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
      style="
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.75)
          ),
          url('/src/assets/image4.jpg');
        background-attachment: fixed;
      "
    >
      <!-- Hero Content -->
      <div class="relative z-10 text-center max-w-3xl px-6">

        <p class="uppercase tracking-[6px] text-yellow-300 text-sm mb-4">
          Visit Rwanda
        </p>

        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl">
          TEMBERA URWANDA
        </h1>

        <div class="flex justify-center mt-4 mb-6">
          <div class="w-28 h-[2px] bg-yellow-400 rounded-full"></div>
        </div>

        <p class="text-xl md:text-2xl text-gray-200 mb-3">
          Discover the Beauty of Africa
        </p>

        <p class="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
          Experience breathtaking landscapes, vibrant culture, wildlife adventures,
          and unforgettable journeys across the land of a thousand hills.
        </p>

        <button
          class="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg
                 hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
        >
          Explore Now
        </button>

      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="py-20 bg-white text-gray-800">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <!-- Text -->
        <div>
          <h2 class="text-4xl font-bold mb-4 text-green-700">
            About Rwanda
          </h2>

          <p class="text-gray-600 leading-relaxed mb-4">
            Rwanda, known as the land of a thousand hills, is one of Africa’s most
            beautiful and rapidly developing countries. It offers stunning landscapes,
            rich wildlife, and warm hospitality.
          </p>

          <p class="text-gray-600 leading-relaxed">
            From mountain gorilla trekking in Volcanoes National Park to relaxing
            views of Lake Kivu, Rwanda is a destination full of unforgettable experiences.
          </p>
        </div>

        <!-- Image -->
        <div>
          <img
            src="/src/assets/image2.jpg"
            alt="Rwanda Landscape"
            class="rounded-2xl shadow-xl object-cover w-full h-[400px]"
          />
        </div>

      </div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="py-20 bg-gray-100">
      <div class="max-w-6xl mx-auto px-6 text-center">

        <h2 class="text-4xl font-bold text-gray-800 mb-12">
          Top Experiences
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <!-- Card 1 -->
          <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div class="text-4xl mb-3">🦍</div>
            <h3 class="text-xl font-bold mb-2">Gorilla Trekking</h3>
            <p class="text-gray-600 text-sm">
              Meet mountain gorillas in Volcanoes National Park.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div class="text-4xl mb-3">🌋</div>
            <h3 class="text-xl font-bold mb-2">Nature Tours</h3>
            <p class="text-gray-600 text-sm">
              Explore mountains, lakes, and stunning landscapes.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div class="text-4xl mb-3">🏙️</div>
            <h3 class="text-xl font-bold mb-2">City Experience</h3>
            <p class="text-gray-600 text-sm">
              Discover Kigali’s modern and clean city life.
            </p>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<script setup></script>