<template>
  <header class="sticky-header" :key="selectedGame.route_main">
    <nav class="header-nav" aria-label="Main navigation">
      <v-container fluid class="header-container">
        <v-row align="center" class="header-row">
          <!-- Left Logo -->
          <v-col cols="12" sm="3" class="header-item header-link-a">
            <router-link :to="selectedGame.route_a" :aria-label="`Navigate to ${selectedGame.name} option A`">
              <img :src="selectedGame.image_a" :alt="`${selectedGame.name} option A logo`" class="nav-img">
            </router-link>
          </v-col>

          <!-- Center Logo -->
          <v-col cols="12" sm="6" class="header-item header-link-main">
            <router-link :to="selectedGame.route_main" :aria-label="`Navigate to ${selectedGame.name} main page`">
              <img :src="selectedGame.image_main" :alt="`${selectedGame.name} main logo`" class="nav-img nav-img-main">
            </router-link>
          </v-col>

          <!-- Right Logo -->
          <v-col cols="12" sm="3" class="header-item header-link-b">
            <router-link :to="selectedGame.route_b" :aria-label="`Navigate to ${selectedGame.name} option B`">
              <img :src="selectedGame.image_b" :alt="`${selectedGame.name} option B logo`" class="nav-img">
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </nav>
  </header>
</template>

<script lang="ts">
import { GameHeaderInfo } from '@/models/models';

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

<!-- Intentionally not scoped style. This is to keep the main content of page and header in desired format. -->
<style lang="scss">
.sticky-header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(rgba(237, 225, 186, 0.95), rgba(160, 84, 14, 0.2));
  padding: 10px 0;
}

.header-nav {
  width: 100%;
}

.header-container {
  padding: 0 16px;
  max-width: 100%;
}

.header-row {
  margin: 0 !important;
}

/* Styles for each header item */
.header-item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
  }
}

/* Add transform for hover effect */
.nav-img {
  max-height: 20px;
  max-width: 100%;
  height: auto;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(175, 145, 48, 0.8);
    outline-offset: 4px;
  }
}

.nav-img-main {
  max-height: 75px;

  @media (max-width: 600px) {
    max-height: 50px;
  }

  @media (max-width: 480px) {
    max-height: 40px;
  }
}

.header-link-a {
  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
}

.header-link-b {
  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
}

.header-link-main {
  position: relative;

  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
}

.scrolling-bg {
  height: 100vh;
  z-index: 0;
}

.router-view-container {
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  padding: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
}

@media (max-width: 600px) {
  .sticky-header {
    padding: 8px 0;
  }

  .header-container {
    padding: 0 8px;
  }

  .header-item {
    padding: 4px;
  }
}
</style>
