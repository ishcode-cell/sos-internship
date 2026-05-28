<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="p-8">
    <h1 class="text-3xl font-bold text-green-900">Destinations</h1>
    <p class="mt-4 text-gray-700">Choose a region to explore travel options.</p>

    <div class="mt-6 space-y-3 text-sm text-green-800">
      <router-link to="/northern" class="block hover:text-yellow-300">Northern</router-link>
      <router-link to="/southern" class="block hover:text-yellow-300">Southern</router-link>
      <router-link to="/eastern" class="block hover:text-yellow-300">Eastern</router-link>
      <router-link to="/western" class="block hover:text-yellow-300">Western</router-link>
      <router-link to="/kigali" class="block hover:text-yellow-300">Kigali</router-link>
    </div>
  </section>
</template>