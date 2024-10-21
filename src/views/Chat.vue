<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Chat with our AI Assistant</h2>
    <div class="bg-white shadow-md rounded-lg p-4 mb-4 h-64 overflow-y-auto">
      <!-- Chat messages will be displayed here -->
    </div>
    <form @submit.prevent="sendMessage" class="flex">
      <input
        v-model="message"
        type="text"
        placeholder="Type your message..."
        class="flex-grow border rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref('');

const sendMessage = () => {
  // TODO: Implement sending message to backend
  console.log('Sending message:', message.value);
  message.value = '';
};
</script>