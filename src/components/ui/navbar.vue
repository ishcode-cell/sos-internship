<script setup>
import { ref } from 'vue'

const language = ref('en')

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    service: 'Service',
    gallery: 'Gallery',
    photos: 'Photos',
    photosDesc: 'Browse photo collections.',
    video: 'Video',
    videoDesc: 'Watch travel stories.',
    destination: 'Destination',
    northern: 'Northern',
    eastern: 'Eastern',
    western: 'Western',
    southern: 'Southern',
    kigali: 'Kigali',
    contact: 'Contact',
  },

  rw: {
    home: 'Ahabanza',
    about: 'Ibyerekeye',
    service: 'Serivisi',
    gallery: 'Amafoto',
    photos: 'Amafoto',
    photosDesc: 'Reba amafoto atandukanye.',
    video: 'Amashusho',
    videoDesc: 'Reba inkuru z’ingendo.',
    destination: 'Aho Wasura',
    northern: 'Amajyaruguru',
    eastern: 'Iburasirazuba',
    western: 'Iburengerazuba',
    southern: 'Amajyepfo',
    kigali: 'Kigali',
    contact: 'Twandikire',
  },

  fr: {
    home: 'Accueil',
    about: 'À propos',
    service: 'Service',
    gallery: 'Galerie',
    photos: 'Photos',
    photosDesc: 'Parcourir les collections de photos.',
    video: 'Vidéo',
    videoDesc: 'Regarder des histoires de voyage.',
    destination: 'Destination',
    northern: 'Nord',
    eastern: 'Est',
    western: 'Ouest',
    southern: 'Sud',
    kigali: 'Kigali',
    contact: 'Contact',
  },
}
</script>

<template>
  <nav
    class="relative z-30 bg-green-900 shadow-lg px-8 py-4 flex justify-between items-center"
  >
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Logo"
        class="w-12 h-12 rounded-full object-cover border-2 border-white"
      />
    </div>

    <!-- Navigation -->
    <ul class="flex gap-6 text-white font-medium items-center">
      <li>
        <router-link to="/" class="hover:text-yellow-300">
          {{ translations[language].home }}
        </router-link>
      </li>

      <li>
        <router-link to="/about" class="hover:text-yellow-300">
          {{ translations[language].about }}
        </router-link>
      </li>

      <li>
        <router-link to="/service" class="hover:text-yellow-300">
          {{ translations[language].service }}
        </router-link>
      </li>

      <!-- Gallery -->
      <li class="relative group">
        <router-link to="/gallery" class="hover:text-yellow-300">
          {{ translations[language].gallery }} <span>▼</span>
        </router-link>

        <div
          class="hidden group-hover:grid absolute top-full left-0 bg-white text-black rounded-3xl shadow-2xl p-4 gap-3 grid-cols-2 z-50 w-[320px]"
        >
          <router-link
            to="/photos"
            class="overflow-hidden rounded-2xl bg-slate-50 shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]"
          >
            <img
              src="/src/assets/image5.jpg"
              alt="Photo preview"
              class="w-full h-24 object-cover"
            />

            <div class="p-3">
              <p class="font-semibold">
                {{ translations[language].photos }}
              </p>

              <p class="text-sm text-gray-600">
                {{ translations[language].photosDesc }}
              </p>
            </div>
          </router-link>

          <router-link
            to="/video"
            class="overflow-hidden rounded-2xl bg-slate-50 shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]"
          >
            <img
              src="/src/assets/image6.jpg"
              alt="Video preview"
              class="w-full h-24 object-cover"
            />

            <div class="p-3">
              <p class="font-semibold">
                {{ translations[language].video }}
              </p>

              <p class="text-sm text-gray-600">
                {{ translations[language].videoDesc }}
              </p>
            </div>
          </router-link>
        </div>
      </li>

      <!-- Destination -->
      <li class="relative group">
        <router-link to="/destination" class="hover:text-yellow-300">
          {{ translations[language].destination }} <span>▼</span>
        </router-link>

        <div
          class="hidden group-hover:block absolute top-full left-0 bg-white text-black rounded shadow-lg min-w-[160px] z-50"
        >
          <router-link
            to="/northern"
            class="block px-4 py-2 hover:bg-green-200"
          >
            {{ translations[language].northern }}
          </router-link>

          <router-link
            to="/eastern"
            class="block px-4 py-2 hover:bg-green-200"
          >
            {{ translations[language].eastern }}
          </router-link>

          <router-link
            to="/western"
            class="block px-4 py-2 hover:bg-green-200"
          >
            {{ translations[language].western }}
          </router-link>

          <router-link
            to="/southern"
            class="block px-4 py-2 hover:bg-green-200"
          >
            {{ translations[language].southern }}
          </router-link>

          <router-link
            to="/kigali"
            class="block px-4 py-2 hover:bg-green-200"
          >
            {{ translations[language].kigali }}
          </router-link>
        </div>
      </li>

      <li>
        <router-link to="/contact" class="hover:text-yellow-300">
          {{ translations[language].contact }}
        </router-link>
      </li>

      <!-- Language Selector -->
      <li>
        <select
          v-model="language"
          class="bg-white text-black px-2 py-1 rounded-lg outline-none cursor-pointer"
        >
          <option value="en">English</option>
          <option value="rw">Kinyarwanda</option>
          <option value="fr">Français</option>
        </select>
      </li>
    </ul>
  </nav>
</template>