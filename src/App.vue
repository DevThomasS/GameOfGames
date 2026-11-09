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

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
}

/* TODO: Make sure background image is game-specific! */
body {
  margin: 0;
  padding: 0;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  background-size: cover;
  background-attachment: fixed;
  background-image: url('./assets/dune/bg.png');
}

/* For WebKit browsers (Chrome, Safari) */
body::-webkit-scrollbar {
  display: none;
}

/* Container for the top gradient */
.top-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(rgba(237, 225, 186, 0.9), rgba(160, 84, 14, 0.1));
  z-index: 50;
  pointer-events: none;
}

.router-view-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
