<template>
    <div class="about">
      <h1>About the Font Matcher App</h1>
      <p>This page provides information about the Font Matcher application.</p>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AboutView',
    setup() {
      // Add setup logic if needed
    },
  });
  </script>

  <style scoped>
  .about {
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