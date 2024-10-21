<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome to Intelligent Customer Service</h1>
    <p class="mb-8">How can we assist you today?</p>
    <div class="space-x-4">
      <router-link to="/chat" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Start Chat
      </router-link>
      <router-link to="/feedback" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Give Feedback
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Home component logic
</script>