import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuthStore } from './auth';

export const useChatStore = defineStore('chat', {
  state: () => ({
    chatHistory: [],
  }),
  actions: {
    async sendMessage(message: string) {
      const authStore = useAuthStore();
      try {
        const response = await axios.post('/api/chat', { message }, {
          headers: { Authorization: `Bearer ${authStore.token}` },
        });
        this.chatHistory.push({ message, response: response.data.response });
        return response.data.response;
      } catch (error) {
        console.error('Failed to send message:', error);
        throw error;
      }
    },
    async fetchChatHistory() {
      const authStore = useAuthStore();
      try {
        const response = await axios.get('/api/chat/history', {
          headers: { Authorization: `Bearer ${authStore.token}` },
        });
        this.chatHistory = response.data;
      } catch (error) {
        console.error('Failed to fetch chat history:', error);
        throw error;
      }
    },
  },
});