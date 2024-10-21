<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Provide Feedback</h2>
    <form @submit.prevent="submitFeedback" class="space-y-4">
      <div>
        <label for="rating" class="block mb-1">Rating</label>
        <select
          v-model="rating"
          id="rating"
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="5">Excellent</option>
          <option value="4">Good</option>
          <option value="3">Average</option>
          <option value="2">Poor</option>
          <option value="1">Very Poor</option>
        </select>
      </div>
      <div>
        <label for="comment" class="block mb-1">Comment</label>
        <textarea
          v-model="comment"
          id="comment"
          rows="4"
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit Feedback
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const rating = ref('5');
const comment = ref('');

const submitFeedback = () => {
  // TODO: Implement sending feedback to backend
  console.log('Submitting feedback:', { rating: rating.value, comment: comment.value });
  // Reset form after submission
  rating.value = '5';
  comment.value = '';
};
</script>