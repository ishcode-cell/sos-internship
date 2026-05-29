<!-- Slideshow Section -->
<div class="max-w-6xl mx-auto mb-24">

  <div
    class="relative h-[650px] overflow-hidden rounded-[40px] shadow-2xl border border-white/20"
  >

    <!-- Slides -->
    <transition name="fade" mode="out-in">
      <img
        :key="images[currentIndex].src"
        :src="images[currentIndex].src"
        :alt="images[currentIndex].title"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </transition>

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
    ></div>

    <!-- Text -->
    <div class="absolute bottom-0 left-0 p-8 md:p-14 max-w-3xl">

      <p class="uppercase tracking-[5px] text-green-300 mb-3">
        Rwanda Gallery
      </p>

      <h2 class="text-5xl md:text-7xl font-extrabold mb-4">
        {{ images[currentIndex].title }}
      </h2>

      <p class="text-lg md:text-2xl text-gray-200">
        {{ images[currentIndex].desc }}
      </p>

    </div>

    <!-- Counter -->
    <div
      class="absolute top-6 right-6 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full text-lg"
    >
      {{ currentIndex + 1 }} / {{ images.length }}
    </div>

    <!-- Left Arrow -->
    <button
      @click="prevImage"
      class="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md w-14 h-14 rounded-full text-2xl transition"
    >
      ←
    </button>
<div>
    <!-- Right Arrow -->
    <button
      @click="nextImage"
      class="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md w-14 h-14 rounded-full text-2xl transition"
    >
      →
    </button>

  </div>

  <!-- Dots -->
  <div class="flex justify-center gap-3 mt-8">

    <button
      v-for="(image, idx) in images"
      :key="idx"
      @click="currentIndex = idx"
      :class="[
        'transition-all duration-300 rounded-full',
        currentIndex === idx
          ? 'bg-green-400 w-10 h-3'
          : 'bg-white/50 hover:bg-white w-3 h-3'
      ]"
    />

  </div>

