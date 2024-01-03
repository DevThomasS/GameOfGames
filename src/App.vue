<template>
  <div id="app">
    <div class="top-gradient"></div>
    <Header />
    <div class="router-view-container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/common/Header.vue';
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontally center content */
  justify-content: flex-start;
}

/* TODO: Make sure background image is game-specific! */
body {
  margin: 0;
  padding: 0;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  background-size: cover; /* Adjust image sizing */
  background-attachment: scroll; /* Ensure the background scrolls */
  background-image: url('./assets/dune/bg.png');
}

/* For WebKit browsers (Chrome, Safari) */
body::-webkit-scrollbar {
  display: none;
}

/* Container for the top gradient */
.top-gradient {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px; /* Adjust height as needed */
  background: linear-gradient( rgba( 237, 225, 186, 0.9 ), rgba(160, 84, 14, 0.1) );
  z-index: 100; /* Set a high z-index to ensure it stays on top */
}
</style>
