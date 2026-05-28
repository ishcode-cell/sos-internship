<script setup>
</script>

<template>
  <nav
    class="bg-green-900 shadow-lg px-8 py-4 flex justify-between items-center">
    <div class="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Logo"
        class="w-12 h-12 rounded-full object-cover border-2 border-white"
      />
</div> <ul class="flex gap-6 text-white font-medium items-center">

<li> <router-link to="/" class="hover:text-yellow-300 ">Home</router-link></li>
<li> <router-link to="/about" class="hover:text-yellow-300 ">About</router-link></li>
<li><router-link to="/service" class="hover:text-yellow-300 ">Service</router-link></li>
<li class="relative group"><router-link to="/gallery" class="hover:text-yellow-300 ">Gallery <span>v</span></router-link>
  
  <div class="hidden group-hover:block absolute top-full left-0 bg-white text-black rounded shadow-lg min-w-[120px]">
    <router-link to="/photos" class="block px-4 py-2 hover:bg-green-200">Photo</router-link>
    <router-link to="/video" class="block px-4 py-2 hover:bg-green-200">Video</router-link>
  </div>
</li>
<li class="relative group"><router-link to="/destination" class="hover:text-yellow-300 ">Destination <span>v</span></router-link>
  <div class="hidden group-hover:block absolute top-full left-0 bg-white text-black rounded shadow-lg min-w-[140px]">
    <router-link to="/northern" class="block px-4 py-2 hover:bg-green-200">Northern</router-link>
    <router-link to="/eastern" class="block px-4 py-2 hover:bg-green-200">Eastern</router-link>
    <router-link to="/western" class="block px-4 py-2 hover:bg-green-200">Western</router-link>
    <router-link to="/southern" class="block px-4 py-2 hover:bg-green-200">Southern</router-link>
    <router-link to="/kigali" class="block px-4 py-2 hover:bg-green-200">Kigali</router-link>
  </div>
  
</li>
<li><router-link to="/contact" class="hover:text-yellow-300 ">Contact</router-link></li>
</ul>
  </nav>
</template>