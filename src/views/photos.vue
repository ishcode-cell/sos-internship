<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  { src: '/src/assets/image1.jpg', title: 'Highland Trails', desc: 'Fresh mountain air and epic viewpoints.' },
  { src: '/src/assets/image2.jpg', title: 'Lake Reflections', desc: 'Calm waters and soft evening sky tones.' },
  { src: '/src/assets/image3.jpg', title: 'City Lights', desc: 'Modern city charm and cultural rhythm.' }
]

const currentIndex = ref(0)
let slideInterval

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

onMounted(() => {
  slideInterval = setInterval(nextImage, 3000)
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-64 bg-cover bg-center flex items-center text-white overflow-hidden"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/image5.jpg'); background-attachment: fixed;">
    <div class="ml-auto mr-12 z-10 text-right">
      <h1 class="text-5xl font-bold drop-shadow-lg">📸 Photos</h1>
      <p class="text-xl mt-2 drop-shadow-lg">Capture Moments, Create Memories</p>
    </div>
  </section>

  <!-- Content Section -->
  <section class="bg-white text-gray-800 py-16">
    <div class="container mx-auto px-8">
      <p class="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        Explore our stunning collection of travel and landscape photography from around Rwanda.
      </p>
      <!-- Slideshow Section -->
      <div class="max-w-4xl mx-auto mb-12">
        <div class="relative overflow-hidden rounded-3xl shadow-2xl bg-slate-900">
          <img 
            :src="images[currentIndex].src" 
            :alt="images[currentIndex].title"
            class="w-full h-96 object-cover photo-transition"
          />
          
          <!-- Navigation Arrows -->
          <button 
            @click="prevImage"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 z-10 transition hover:scale-110"
          >
            ←
          </button>
          <button 
            @click="nextImage"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 z-10 transition hover:scale-110"
          >
            →
          </button>
          
          <!-- Image Info -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
            <h3 class="text-3xl font-bold mb-2">{{ images[currentIndex].title }}</h3>
            <p class="text-lg">{{ images[currentIndex].desc }}</p>
          </div>
        </div>
        
        <!-- Indicator Dots -->
        <div class="flex justify-center gap-2 mt-6">
          <button 
            v-for="(image, idx) in images"
            :key="idx"
            @click="currentIndex = idx"
            :class="[
              'w-3 h-3 rounded-full transition-all',
              currentIndex === idx ? 'bg-green-600 w-8' : 'bg-gray-400 hover:bg-gray-600'
            ]"
          />
        </div>
      </div>

      <!-- Thumbnail Gallery -->
      <h3 class="text-2xl font-bold text-center mb-6 text-gray-800">Photo Collection</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(image, idx) in images"
          :key="idx"
          @click="currentIndex = idx"
          class="overflow-hidden rounded-3xl shadow-xl group cursor-pointer hover:shadow-2xl transition"
        >
          <img :src="image.src" :alt="image.title" class="w-full h-72 object-cover photo-transition transform group-hover:scale-105 group-hover:brightness-110" />
          <div class="bg-white p-5">
            <h3 class="font-semibold text-xl mb-2">{{ image.title }}</h3>
            <p class="text-gray-600">{{ image.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
