<!-- western.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const regionImages = [
  { src: '/src/assets/image4.jpg', alt: 'Western landscape', title: 'Forest Views' },
  { src: '/src/assets/image8.jpg', alt: 'Western hills', title: 'Hills & Trails' },
  { src: '/src/assets/image5.jpg', alt: 'Western wildlife', title: 'Wildlife' }
]

const currentSlide = ref(0)
let slideTimer

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % regionImages.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + regionImages.length) % regionImages.length
}

onMounted(() => {
  slideTimer = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  clearInterval(slideTimer)
})
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-64 bg-cover bg-center flex items-center text-white overflow-hidden"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/image4.jpg'); background-attachment: fixed;">
    <div class="ml-auto mr-12 z-10 text-right">
      <h1 class="text-5xl font-bold drop-shadow-lg">🌄 Western Province</h1>
      <p class="text-xl mt-2 drop-shadow-lg">Forests, Wildlife & Natural Wonders</p>
    </div>
  </section>

  <!-- Content Section -->
  <section class="bg-white text-gray-800 py-16">
    <div class="container mx-auto px-8">
      <h2 class="text-3xl font-bold text-center mb-8 text-green-700">Welcome to Western Rwanda</h2>
      <p class="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
        Immerse yourself in the lush rainforests and pristine wilderness of Western Rwanda. Home to chimpanzees, diverse ecosystems, and natural beauty.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg">
          <div class="text-4xl mb-3">🐵</div>
          <h3 class="font-bold text-lg text-green-700 mb-2">Chimp Trekking</h3>
          <p class="text-gray-600">Encounter endangered chimpanzees in Nyungwe Forest</p>
        </div>
        <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg shadow-lg">
          <div class="text-4xl mb-3">🌿</div>
          <h3 class="font-bold text-lg text-emerald-700 mb-2">Rainforests</h3>
          <p class="text-gray-600">Explore ancient rainforests with rare plant species</p>
        </div>
        <div class="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg shadow-lg">
          <div class="text-4xl mb-3">🏞️</div>
          <h3 class="font-bold text-lg text-teal-700 mb-2">Eco-Tourism</h3>
          <p class="text-gray-600">Experience sustainable nature-based tourism at its best</p>
        </div>
      </div>
      <div class="mt-12">
        <h3 class="text-2xl font-bold text-center mb-6 text-green-700">Western Photo Highlights - Slideshow</h3>
        
        <!-- Slideshow -->
        <div class="max-w-3xl mx-auto mb-12">
          <div class="relative overflow-hidden rounded-3xl shadow-2xl bg-slate-900">
            <img 
              :src="regionImages[currentSlide].src" 
              :alt="regionImages[currentSlide].alt"
              class="w-full h-80 object-cover photo-transition"
            />
            <button @click="prevSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 z-10 transition hover:scale-110">←</button>
            <button @click="nextSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 z-10 transition hover:scale-110">→</button>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <p class="text-2xl font-bold">{{ regionImages[currentSlide].title }}</p>
            </div>
          </div>
          <div class="flex justify-center gap-2 mt-6">
            <button 
              v-for="(_, idx) in regionImages"
              :key="idx"
              @click="currentSlide = idx"
              :class="['w-3 h-3 rounded-full transition-all', currentSlide === idx ? 'bg-green-600 w-8' : 'bg-gray-400 hover:bg-gray-600']"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>