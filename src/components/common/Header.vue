<template>
  <header class="sticky-header" :key="selectedGame.route_main">
    <div class="header-item header-link-a">
      <router-link :to="selectedGame.route_a">
        <img :src="selectedGame.image_a" style="max-height: 20px;" class="nav-img">
      </router-link>
    </div>

    <div class="header-item header-link-b">
      <router-link :to="selectedGame.route_b">
        <img :src="selectedGame.image_b" style="max-height: 20px;" class="nav-img">
      </router-link>
    </div>

    <div class="header-item header-link-main">
      <router-link :to="selectedGame.route_main">
        <img :src="selectedGame.image_main" style="max-height: 75px;" class="nav-img">
      </router-link>
    </div>

    <div class="header-item header-link-c"/>

    <div class="header-item header-link-d">
      <router-link :to="selectedGame.route_d">
        <img :src="selectedGame.image_d" style="max-height: 20px;" class="nav-img">
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import GameHeaderInfo from '@/models/common/GameHeaderInfo';

export default {
  data() {
    return {
      dropdownVisible: false,
      selectedGame: new GameHeaderInfo( '' ),
      gameHeaders: GameHeaderInfo.getAllGameHeaderInfo()
    };
  },
  mounted() {
    this.selectedGame = this.getSelectedGame();
  },
  methods: {
    selectGame( gameHeader: GameHeaderInfo ): void {
      this.selectedGame = gameHeader;
      this.dropdownVisible = false;
    },
    showDropdown(): void {
      this.dropdownVisible = true;
    },
    hideDropdown(): void {
      this.dropdownVisible = false;
    },
    getSelectedGame(): GameHeaderInfo {
      const selectedGame = this.gameHeaders.find( gameHeader => gameHeader.route_main === this.selectedGame.route_main );
      return selectedGame ? selectedGame : this.gameHeaders[0];
    },
    getOtherGames(): GameHeaderInfo[] {
      return this.gameHeaders.filter( gameHeader => gameHeader.route_main !== this.selectedGame.route_main );
    },
  }
};
</script>

<style>
.sticky-header {
  position: fixed;
  display: flex;
  align-items: center;
  top: 10px;
  width: 100%;
  z-index: 1000;
}

/* Styles for each header item */
.header-item {
  height: 100%; /* Sets the height of each header item to 100% of the header */
  display: flex; /* Displays the image inline */
  justify-content: center; /* Centers the image horizontally */
  align-items: baseline; /* Aligns the image vertically */
}

/* Add transform for hover effect */
.nav-img {
  transition: transform; /* Smooth transition effect */
}

.nav-img:hover {
  opacity: 0.8; /* Adjust the opacity as desired */
  transform: translateY( 1px ); /* Adjust the transformation as needed */
}

.header-link-a {
  width: 19%;
}

.header-link-b {
  width: 16%;
}

.header-link-main {
  width: 30%;
  position: relative; /* Necessary for absolute positioning of the dropdown */
}

.header-link-c {
  width: 16%;
}

.header-link-d {
  width: 19%;
}

.scrolling-bg {
  height: 100vh;
  z-index: 0;
}

.router-view-container {
  width: 100%;
  max-width: 1200px; /* Adjust max-width as needed */
  margin-top: 20px; /* Adjust top margin as needed */
  padding-top: 100px; /* Adjust top padding to match header height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
