<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  {
    src: '/src/assets/image1.jpg',
    title: 'Northern Green Hills',
    desc: 'Endless rolling hills and fresh countryside views.'
  },
  {
    src: '/src/assets/image2.jpg',
    title: 'Kigali Convention Center',
    desc: 'Golden sunsets reflecting over calm waters.'
  },
  {
    src: '/src/assets/image3.jpg',
    title: 'Gisenyi Lake Side',
    desc: 'Modern skyline blending with African vibrance.'
  },
  {
    src: '/src/assets/image4.jpg',
    title: 'Volcanoes National Park',
    desc: 'Wildlife roaming across open golden savannas.'
  },
  {
    src: '/src/assets/image5.jpg',
    title: 'Rwanda Light Trails',
    desc: 'Lush green tea fields stretching across hills.'
  },
  {
    src: '/src/assets/image6.jpg',
    title: 'Kigali Night',
    desc: 'A close encounter with Africa’s wild beauty.'
  },
  {
    src: '/src/assets/image7.jpg',
    title: 'Rwandan Staduim',
    desc: 'Dramatic volcanic mountains rising into the sky.'
  },
  {
    src: '/src/assets/image8.jpg',
    title: 'Rwandan Restraunt Convetion center',
    desc: 'Deep rainforest adventures and natural serenity.'
  }
]

const currentIndex = ref(0)
let slideInterval

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length
}

onMounted(() => {
  slideInterval = setInterval(nextImage, 4000)
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<template>
  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen bg-cover bg-center text-white overflow-hidden"
    style="
      background-image:
        linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
        url('/src/assets/image4.jpg');
      background-attachment: fixed;
    "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20"></div>

    <div class="relative z-10 px-6 md:px-20 py-20">

      <!-- HEADER -->
      <div class="text-center mb-16">
        <p class="uppercase tracking-[6px] text-green-300 text-sm mb-4 font-semibold">
          Explore Rwanda
        </p>

        <h1 class="text-5xl md:text-7xl font-extrabold">
          Gallery
        </h1>

        <p class="text-lg md:text-2xl mt-4 text-gray-200">
          Browse Our Beautiful Collections
        </p>
      </div>

      <!-- SLIDESHOW -->
      <div class="max-w-6xl mx-auto mb-24">

        <div
          class="relative h-[650px] overflow-hidden rounded-[40px] shadow-2xl border border-white/20"
        >

          <!-- Image -->
          <transition name="fade" mode="out-in">
            <img
              :key="images[currentIndex].src"
              :src="images[currentIndex].src"
              :alt="images[currentIndex].title"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </transition>

          <!-- Dark overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          <!-- TEXT -->
          <div class="absolute bottom-0 left-0 p-8 md:p-14 max-w-3xl">
            <p class="uppercase tracking-[5px] text-green-300 mb-3">
              Rwanda Gallery
            </p>

            <h2 class="text-4xl md:text-6xl font-extrabold mb-4">
              {{ images[currentIndex].title }}
            </h2>

            <p class="text-lg md:text-xl text-gray-200">
              {{ images[currentIndex].desc }}
            </p>
          </div>

          <!-- Counter -->
          <div class="absolute top-6 right-6 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full">
            {{ currentIndex + 1 }} / {{ images.length }}
          </div>

          <!-- Prev -->
          <button
            @click="prevImage"
            class="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 w-14 h-14 rounded-full text-2xl transition"
          >
            ←
          </button>

          <!-- Next -->
          <button
            @click="nextImage"
            class="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 w-14 h-14 rounded-full text-2xl transition"
          >
            →
          </button>

        </div>

        <!-- DOTS -->
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

      </div>

      <!-- GRID SECTION -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-green-300 mb-4">
          Browse All Photos
        </h2>

        <p class="text-gray-200 max-w-2xl mx-auto">
          Explore Rwanda’s landscapes, wildlife, city life, and natural beauty.
        </p>
      </div>

      <!-- CARDS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        <div
          v-for="(image, idx) in images"
          :key="idx"
          @click="currentIndex = idx"
          class="group cursor-pointer rounded-[25px] overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition"
        >

          <img
            :src="image.src"
            :alt="image.title"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />

          <div class="p-5">
            <h3 class="text-xl font-bold text-green-300 mb-2">
              {{ image.title }}
            </h3>

            <p class="text-gray-200 text-sm">
              {{ image.desc }}
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>