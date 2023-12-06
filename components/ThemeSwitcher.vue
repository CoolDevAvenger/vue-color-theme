<template>
    <div>
      <!-- Toggle Button -->
      <button @click="toggleDarkMode">Toggle Dark Mode</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Reactive property for dark mode state
  const isDarkMode = ref(false);
  
  // Toggles the dark mode by adding or removing the 'dark' class on the html element
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  // Optional: Detect system preference and initialize theme accordingly
  function setDefaultTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark');
    }
  }
  
  // Set initial theme on the client-side when mounted
  onMounted(() => {
    if (process.client) {
      setDefaultTheme();
    }
  });
  </script>
  