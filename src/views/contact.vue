<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen bg-cover bg-center text-white overflow-hidden"
    style="
      background-image:
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
      url('/src/assets/image4.jpg');
      background-attachment: fixed;
    "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- Main Content -->
    <div
      class="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-20 py-20"
    >

      <!-- Heading -->
      <div class="max-w-3xl mb-16">
        <p
          class="uppercase tracking-[6px] text-green-300 text-sm mb-4 font-semibold"
        >
          Contact Rwanda
        </p>

        <h1
          class="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl"
        >
          Get In Touch
        </h1>

        <p class="text-lg md:text-2xl mt-4 text-gray-200">
          We'd Love to Hear From You
        </p>
      </div>

      <!-- Contact Cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8"
      >

        <!-- Address -->
        <div
          class="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300 text-center"
        >
          <div class="text-6xl mb-5">📍</div>

          <h2 class="text-3xl font-bold text-green-300 mb-4">
            Address
          </h2>

          <p class="text-gray-100 text-lg">
            Kigali, Rwanda <br />
            East Africa
          </p>
        </div>

        <!-- Phone -->
        <div
          class="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300 text-center"
        >
          <div class="text-6xl mb-5">📱</div>

          <h2 class="text-3xl font-bold text-green-300 mb-4">
            Phone
          </h2>

          <p class="text-gray-100 text-lg">
            +250 700 000 000
          </p>
        </div>

        <!-- Email -->
        <div
          class="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300 text-center"
        >
          <div class="text-6xl mb-5">✉️</div>

          <h2 class="text-3xl font-bold text-green-300 mb-4">
            Email
          </h2>

          <p class="text-gray-100 text-lg">
            info@visitrwanda.com
          </p>
        </div>

      </div>

      <!-- Contact Form -->
      <div
        class="mt-16 max-w-4xl mx-auto w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl"
      >
        <h2 class="text-4xl font-bold text-center text-green-300 mb-8">
          Send Us a Message
        </h2>

        <form class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Your Name"
            class="bg-white/20 border border-white/20 rounded-xl px-5 py-4 outline-none text-white placeholder-gray-300"
          />

          <input
            type="email"
            placeholder="Your Email"
            class="bg-white/20 border border-white/20 rounded-xl px-5 py-4 outline-none text-white placeholder-gray-300"
          />

          <input
            type="text"
            placeholder="Subject"
            class="md:col-span-2 bg-white/20 border border-white/20 rounded-xl px-5 py-4 outline-none text-white placeholder-gray-300"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            class="md:col-span-2 bg-white/20 border border-white/20 rounded-xl px-5 py-4 outline-none text-white placeholder-gray-300"
          ></textarea>

          <button
            class="md:col-span-2 bg-green-600 hover:bg-green-700 transition py-4 rounded-xl font-bold text-lg shadow-lg"
          >
            Send Message
          </button>

        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>