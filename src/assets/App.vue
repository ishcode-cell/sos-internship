<script setup>
import navbar from './components/ui/navbar.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <div>
    <navbar />
    <router-view />
    <Footer />
  </div>
</template>
