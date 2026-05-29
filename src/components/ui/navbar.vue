<script setup>
</script>

<template>
  <nav
    class="relative z-30 bg-green-900 shadow-lg px-8 py-4 flex justify-between items-center">
    <div class="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Logo"
        class="w-12 h-12 rounded-full object-cover border-2 border-white"
      />
    </div>

    <ul class="flex gap-6 text-white font-medium items-center">
      <li>
        <router-link to="/" class="hover:text-yellow-300">Home</router-link>
      </li>
      <li>
        <router-link to="/about" class="hover:text-yellow-300">About</router-link>
      </li>
      <li>
        <router-link to="/service" class="hover:text-yellow-300">Service</router-link>
      </li>
      <li class="relative group">
        <router-link to="/gallery" class="hover:text-yellow-300"
          >Gallery <span>v</span></router-link
        >

        <div
          class="hidden group-hover:grid absolute top-full left-0 bg-white text-black rounded-3xl shadow-2xl p-4 gap-3 grid-cols-2 z-50 w-[320px]">
          <router-link
            to="/photos"
            class="overflow-hidden rounded-2xl bg-slate-50 shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]"
          >
            <img
              src="/src/assets/image5.jpg"
              alt="Photo preview"
              class="w-full h-24 object-cover photo-transition"
            />
            <div class="p-3">
              <p class="font-semibold">Photos</p>
              <p class="text-sm text-gray-600">Browse photo collections.</p>
            </div>
          </router-link>
          <router-link
            to="/video"
            class="overflow-hidden rounded-2xl bg-slate-50 shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]"
          >
            <img
              src="/src/assets/image6.jpg"
              alt="Video preview"
              class="w-full h-24 object-cover photo-transition"
            />
            <div class="p-3">
              <p class="font-semibold">Video</p>
              <p class="text-sm text-gray-600">Watch travel stories.</p>
            </div>
          </router-link>
        </div>
      </li>
      <li class="relative group">
        <router-link to="/destination" class="hover:text-yellow-300"
          >Destination <span>v</span></router-link
        >
        <div
          class="hidden group-hover:block absolute top-full left-0 bg-white text-black rounded shadow-lg min-w-[140px] z-50">
          <router-link to="/northern" class="block px-4 py-2 hover:bg-green-200"
            >Northern</router-link
          >
          <router-link to="/eastern" class="block px-4 py-2 hover:bg-green-200"
            >Eastern</router-link
          >
          <router-link to="/western" class="block px-4 py-2 hover:bg-green-200"
            >Western</router-link
          >
          <router-link to="/southern" class="block px-4 py-2 hover:bg-green-200"
            >Southern</router-link
          >
          <router-link to="/kigali" class="block px-4 py-2 hover:bg-green-200"
            >Kigali</router-link
          >
        </div>
      </li>
      <li>
        <router-link to="/contact" class="hover:text-yellow-300">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>