import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuthStore } from './auth';

export const useFeedbackStore = defineStore('feedback', {
  actions: {
    async submitFeedback(rating: number, comment: string) {
      const authStore = useAuthStore();
      try {
        await axios.post('/api/feedback', { rating, comment }, {
          headers: { Authorization: `Bearer ${authStore.token}` },
        });
      } catch (error) {
        console.error('Failed to submit feedback:', error);
        throw error;
      }
    },
  },
});