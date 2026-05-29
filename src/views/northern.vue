<!-- northern.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const regionImages = [
  { src: '/src/assets/image8.jpg', alt: 'Northern mountains', title: 'Mountain Views' },
  { src: '/src/assets/image7.jpg', alt: 'Northern forest', title: 'Forest Trails' },
  { src: '/src/assets/image1.jpg', alt: 'Northern wildlife', title: 'Wildlife Encounters' }
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
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/image8.jpg'); background-attachment: fixed;">
    <div class="ml-auto mr-12 z-10 text-right">
      <h1 class="text-5xl font-bold drop-shadow-lg">🏔️ Northern Province</h1>
      <p class="text-xl mt-2 drop-shadow-lg">Mountains & Adventure Await</p>
    </div>
  </section>

  <!-- Content Section -->
  <section class="bg-white text-gray-800 py-16">
    <div class="container mx-auto px-8">
      <h2 class="text-3xl font-bold text-center mb-8 text-green-700">Welcome to Northern Rwanda</h2>
      <p class="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
        Experience the breathtaking beauty of Rwanda's northern highlands. Home to misty mountains, lush forests, and incredible wildlife encounters. Discover gorilla trekking, volcanic landscapes, and pristine nature.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg">
          <div class="text-4xl mb-3">🦍</div>
          <h3 class="font-bold text-lg text-green-700 mb-2">Gorilla Trekking</h3>
          <p class="text-gray-600">Encounter the majestic mountain gorillas in their natural habitat</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg">
          <div class="text-4xl mb-3">🌋</div>
          <h3 class="font-bold text-lg text-green-700 mb-2">Volcanoes</h3>
          <p class="text-gray-600">Explore the stunning volcanic peaks and crater lakes</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg">
          <div class="text-4xl mb-3">🌲</div>
          <h3 class="font-bold text-lg text-green-700 mb-2">Forests</h3>
          <p class="text-gray-600">Trek through pristine rainforests and misty landscapes</p>
        </div>
      </div>
      <div class="mt-12">
        <h3 class="text-2xl font-bold text-center mb-6 text-green-700">Northern Photo Highlights - Slideshow</h3>
        
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