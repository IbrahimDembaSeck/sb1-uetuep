import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(username: string, password: string) {
      try {
        const response = await axios.post('/api/auth/login', { username, password });
        this.token = response.data.token;
        localStorage.setItem('token', this.token);
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    async register(username: string, password: string) {
      try {
        await axios.post('/api/auth/register', { username, password });
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },
    logout() {
      this.token = null;
      localStorage.removeItem('token');
    },
  },
});