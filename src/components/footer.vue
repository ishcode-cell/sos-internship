
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
<footer class="bg-green-800 text-white px-8 py-10 mt-10">       
<div class="flex flex-wrap justify-between gap-8">
          <!-- this is the footer -->
<div>
<h3 class="text-yellow-300 font-bold text-lg mt-3">TEMBERA RWANDA</h3>
 <p class="text-sm text-green-200">Discover the beauty of the land of a thousand hills</p>
</div>              
    <!-- Quick links  -->
<div>
 <h3 class="text-lg font-bold text-yellow-300 mt-3 mb-3">Quick Links</h3>
 <ul class="text-sm text-green-200 space-y-2">
<li><router-link to='/' class="hover:text-yellow-300">Home</router-link></li>
<li><router-link to='/about' class="hover:text-yellow-300">About</router-link></li>
<li><router-link to='/gallery' class="hover:text-yellow-300">Gallery</router-link></li>
<li><router-link to='/destination' class="hover:text-yellow-300">Destination</router-link></li>
<li><router-link to='/service' class="hover:text-yellow-300">Services</router-link></li>
</ul>
</div>
     <!-- Destinations -->
 <div>
<h3 class="text-lg font-bold text-yellow-300 mb-3">Destinations</h3>
<ul class="space-y-2 text-sm">
<li><router-link to="/" class="hover:bg-yellow-300">Northern</router-link></li>
<li><router-link to="/" class="hover:bg-yellow-300">southern</router-link></li>
<li><router-link to="/" class="hover:bg-yellow-300">easthern</router-link></li>
<li><router-link to="/" class="hover:bg-yellow-300">western</router-link></li>
 <li><router-link to="/" class="hover:bg-yellow-300">kigali</router-link></li></ul>
</div>
<!-- Contact -->
<div>
  <h3 class="text-lg font-bold text-yellow-300 mb-3">Contact</h3>

  <ul class="space-y-2 text-sm">
    <li><a href="#" class="hover:text-yellow-300">Phone 0788608309</a></li>
    <li><a href="#" class="hover:text-yellow-300">Email info@tembera.rw</a></li>
    <li><a href="#" class="hover:text-yellow-300">Location Kigali, Rwanda</a></li>
    <li><a href="#" class="hover:text-yellow-300">Website www.tembera.rw</a></li>
    <li><a href="#" class="hover:text-yellow-300">Support</a></li>
  </ul>
</div>
</div>
<!-- Copyright -->
<div class="w-full border-t text-center text-sm px-2 py-2">
       <p class="mx-auto">© 2026 Rwanda Tourism. All Rights Reserved.</p>
</div>
</footer>
</template>