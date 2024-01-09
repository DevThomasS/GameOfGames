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

<script lang="ts">
import { FactionData, Factions, GameDune, GameStatistics, } from '@/models/models';
import { defineComponent, } from 'vue';

export default defineComponent({
  data() {
    return {
      searchQuery: '',
      people: FactionData.getFactions(),
      selectedPerson: null,
      allGames: GameDune.getAllGames(),
    };
  },
  methods: {
    loadPersonData( personName: Factions ): void {
      const personIndex = this.people.findIndex( person => person.person === personName );

      if ( personIndex !== -1 ) {
        this.people[personIndex].data = GameStatistics.getPersonStatistics( this.allGames, personName );
        this.people[personIndex].loaded = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/dune.scss";

.player-content {
  display: flex;
  width: 100%;
}

.transparent-panel {
  background-color: rgba( 0, 0, 0, 0 );
}
</style>
