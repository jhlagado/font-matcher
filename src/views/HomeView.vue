<template>
    <div class="home">
      <h1>Welcome to the Font Matcher App</h1>
      <p>This is the home page of the Font Matcher application.</p>
      <!-- Add more content or components as needed -->
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'HomeView',
    setup() {
      // You can add setup logic here
    },
  });
  </script>

  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    color: #555;
  }
  </style>
