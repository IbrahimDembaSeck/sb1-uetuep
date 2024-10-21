<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4">
        <router-link to="/" class="text-xl font-bold text-gray-800">Intelligent Customer Service</router-link>
      </nav>
    </header>
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts" setup>
// Component logic goes here
</script>