

<template>
  <div class="player-card">
    <input type="text" v-model="searchQuery" placeholder="Search player..." @input="searchPlayer">
    <div v-if="selectedPlayer">
      <h2>{{ selectedPlayer.name }}</h2>
      <!-- Display player statistics here -->
      <p>Wins: {{ selectedPlayer.wins }}</p>
      <p>Losses: {{ selectedPlayer.losses }}</p>
      <!-- Add more statistics as needed -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      players: [ /* Array of player objects with 'name', 'wins', 'losses', etc. */ ],
      selectedPlayer: null
    };
  },
  methods: {
    searchPlayer() {
      // Perform filtering logic based on searchQuery
      const result = this.players.find(player =>
        player.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.selectedPlayer = result || null;
    }
  }
};
</script>

<style scoped>
/* Add some styles for your player card here */
.player-card {
  /* Style your player card container */
}
</style>
