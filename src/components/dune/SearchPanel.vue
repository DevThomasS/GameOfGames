<template>
  <v-card class="player-card h2-text">
    <div class="search-panel">
      <input type="text" v-model="searchQuery" placeholder="Search player...">
      <div v-if="selectedPerson">
        <div v-if="filteredPlayers.length > 0">
          <v-row>
            <!-- TODO: Only show 3? Players with search at a time. -->
            <v-card class="filtered-person h2-text" v-for="player in filteredPlayers" :key="player.person"
              @click="searchPlayer( player.person )"
            >
              <button v-if="selectedPerson.person !== 'n/a' && searchQuery !== ''">
                X
              </button>
              <v-list-item>
                <v-list-item-title>
                  {{ player.person }}
                </v-list-item-title>
              </v-list-item>
            </v-card>
          </v-row>
        </div>
      </div>
    </div>

    <div class="selected-person">
      <v-row>
        <v-list-item>
          <v-list-item-title>
            <div>{{ selectedPerson.data.usage_rate }}</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Number of Games</v-list-item-subtitle>
        </v-list-item>

        <v-list-item v-if="selectedPerson.person !== 'n/a'">
          <v-list-item-title>
            <div>{{ Math.round( selectedPerson.data.win_rate * 100 ) }}%</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Win Rate</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <div>{{ selectedPerson.data.champion }}</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Best Faction</v-list-item-subtitle>
        </v-list-item>

        <v-list-item v-if="selectedPerson.person === 'n/a'">
          <v-list-item-title>
            <div>{{ selectedPerson.data.person }}</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Best Player</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-title class="truncate-decimal">
            <div> {{  'Turn: ' + truncateAverageGameLength( selectedPerson.data.average_game_length ) }} </div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Average Game Length</v-list-item-subtitle>
        </v-list-item>

        <v-list-item v-if="selectedPerson.person !== 'n/a'">
          <v-list-item-title>
            <div>{{ selectedPerson.data.adversary }}</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Adversary</v-list-item-subtitle>
        </v-list-item>

        <v-list-item v-if="selectedPerson.person !== 'n/a'">
          <v-list-item-title>
            <div>{{ selectedPerson.data.rival_house }}</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Rival House</v-list-item-subtitle>
        </v-list-item>

        <v-list-item v-if="selectedPerson.person === 'n/a'">
          <v-list-item-title>
            <div>{{ selectedPerson.data.seat_rates }}</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Seat Win Rate</v-list-item-subtitle>
        </v-list-item>
      </v-row>
    </div>
  </v-card>
</template>

<script lang="ts">
import { GameDune, GameStatistics, PersonData, People, } from '@/models/models';
import { defineComponent, } from 'vue';

export default defineComponent({
  data() {
    return {
      searchQuery: '',
      peopleData: PersonData.getPeople(),
      selectedPerson: new PersonData( People.Unknown ),
      allGames: GameDune.getAllGames(),
    };
  },
  mounted() {
    const personIndex = this.peopleData.findIndex( person => person.person === 'n/a' );
    this.peopleData[personIndex].data = GameStatistics.getPersonStatistics( this.allGames, this.peopleData[personIndex].person );
    this.selectedPerson = this.peopleData[personIndex];
  },
  computed: {
    filteredPlayers() {
      const filteredPlayers = this.peopleData.filter( person =>
        person.person.toLowerCase().includes( this.searchQuery.toLowerCase() )
      );
      if ( filteredPlayers.length < Object.values( People ).length ) {
        return filteredPlayers;
      }
      return [];
    },
  },
  methods: {
    //TODO: Refactor this mess!
    searchPlayer( searchQuery: string ): void {
      const foundPerson = this.peopleData.find( person => person.person === searchQuery );

      if ( foundPerson === undefined ) {
        const personIndex = this.peopleData.findIndex( person => person.person === 'n/a' );
        this.selectedPerson = this.peopleData[personIndex];
      }
      else {
        const personIndex = this.peopleData.findIndex( person => person.person.includes( foundPerson.person ) );

        if ( personIndex !== -1 ) {
          if ( !this.peopleData[personIndex].loaded ) {
            this.peopleData[personIndex].data = GameStatistics.getPersonStatistics( this.allGames, this.peopleData[personIndex].person );
            this.peopleData[personIndex].loaded = true;
            this.selectedPerson = this.peopleData[personIndex];
            this.searchQuery = this.peopleData[personIndex].person;
          }
          else if ( this.selectedPerson === this.peopleData[personIndex] ) {
            this.clearSearch();
          }
          else {
            this.selectedPerson = this.peopleData[personIndex];
            this.searchQuery = this.peopleData[personIndex].person;
          }
        } else {
          this.clearSearch();
        }
      }
    },
    clearSearch() {
      this.searchQuery = '';
      const personIndex = this.peopleData.findIndex( person => person.person === 'n/a' );
      this.selectedPerson = this.peopleData[personIndex];
    },
    truncateAverageGameLength( avgLength: number ): string {
      if ( avgLength === 0 ) {
        return 'n/a';
      }
      return ( Math.round( avgLength * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 ) ).toString();
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/dune.scss";

.player-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 140px;
  background-color: rgba(200, 200, 200, 0.2);
}

.search-panel {
  display: flex;
  align-items: center; /* Center vertically */
  padding: 10px;
  height: 50px; /* Set fixed height */
}

.filtered-person {
  display: flex;
  align-items: center; /* Center content */
  padding: 10px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0);
  white-space: nowrap; /* Prevent text wrapping */
  margin-left: 5px; /* Adjust spacing between filtered players */
  cursor: pointer;
}

.selected-person {
  margin-top: 20px;
  padding: 10px;
}
</style>
