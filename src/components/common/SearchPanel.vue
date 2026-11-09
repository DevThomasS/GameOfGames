<template>
  <v-card class="player-card h2-text">
    <div class="search-panel">
      <input
        type="text"
        v-model="searchQuery"
        :placeholder="`Search ${gameType} player...`"
        :aria-label="`Search ${gameType} player`"
        class="search-input"
      />
    </div>
    <div v-if="selectedPerson">
      <div v-if="filteredPlayers.length > 0">
        <v-row dense>
          <!-- TODO: Only show 3 Players with search at a time. -->
          <v-card
            v-for="player in filteredPlayers"
            :key="player.person"
            class="filtered-person h2-text"
            @click="searchPlayer(player.person)"
            role="button"
            tabindex="0"
            @keydown.enter="searchPlayer(player.person)"
            @keydown.space="searchPlayer(player.person)"
          >
            <button
              v-if="selectedPerson.person !== 'n/a' && searchQuery !== ''"
              aria-label="Clear search"
              class="clear-button"
              @click.stop="clearSearch"
            >
              ✕
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

    <div class="selected-person">
      <v-row dense>
        <v-col cols="12" sm="6">
          <StatisticsRow
            label="Number of Games"
            :value="selectedPerson.data.usage_rate"
          />
        </v-col>

        <v-col v-if="selectedPerson.person !== 'n/a'" cols="12" sm="6">
          <StatisticsRow
            label="Win Rate"
            :value="formatPercentage(selectedPerson.data.win_rate)"
          />
        </v-col>

        <v-col cols="12" sm="6">
          <StatisticsRow
            label="Best Faction"
            :value="selectedPerson.data.champion"
          />
        </v-col>

        <v-col v-if="selectedPerson.person === 'n/a'" cols="12" sm="6">
          <StatisticsRow label="Champion" :value="selectedPerson.data.person" />
        </v-col>

        <v-col cols="12" sm="6">
          <StatisticsRow
            label="Average Game Length"
            :value="`Turn: ${truncateAverageGameLength(selectedPerson.data.average_game_length)}`"
          />
        </v-col>

        <v-col v-if="selectedPerson.person !== 'n/a'" cols="12" sm="6">
          <StatisticsRow
            label="Adversary"
            :value="selectedPerson.data.adversary"
          />
        </v-col>

        <v-col v-if="selectedPerson.person !== 'n/a'" cols="12" sm="6">
          <StatisticsRow
            label="Rival House"
            :value="selectedPerson.data.rival_house"
          />
        </v-col>

        <v-col v-if="selectedPerson.person === 'n/a'" cols="12" sm="6">
          <StatisticsRow
            label="Seat Win Rate"
            :value="selectedPerson.data.seat_rates"
          />
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { truncateAverageGameLength, formatPercentage } from '@/utils/formatters';
import StatisticsRow from '@/components/common/StatisticsRow.vue';

interface Props {
  gameType: 'dune' | 'war';
  peopleDataList: any[];
  allGamesList: any[];
  statisticsCalculator: any;
}

const props = defineProps<Props>();

const searchQuery = ref('');
const selectedPerson = ref(props.peopleDataList[0]);

const filteredPlayers = computed(() => {
  const filtered = props.peopleDataList.filter((person) =>
    person.person.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  if (filtered.length < props.peopleDataList.length) {
    return filtered;
  }
  return [];
});

const searchPlayer = (query: string): void => {
  const foundPerson = props.peopleDataList.find((person) => person.person === query);

  if (foundPerson === undefined) {
    const personIndex = props.peopleDataList.findIndex(
      (person) => person.person === 'n/a'
    );
    selectedPerson.value = props.peopleDataList[personIndex];
  } else {
    const personIndex = props.peopleDataList.findIndex((person) =>
      person.person.includes(foundPerson.person)
    );

    if (personIndex !== -1) {
      if (!props.peopleDataList[personIndex].loaded) {
        props.peopleDataList[personIndex].data =
          props.statisticsCalculator.getPersonStatistics(
            props.allGamesList,
            props.peopleDataList[personIndex].person
          );
        props.peopleDataList[personIndex].loaded = true;
        selectedPerson.value = props.peopleDataList[personIndex];
        searchQuery.value = props.peopleDataList[personIndex].person;
      } else if (selectedPerson.value === props.peopleDataList[personIndex]) {
        clearSearch();
      } else {
        selectedPerson.value = props.peopleDataList[personIndex];
        searchQuery.value = props.peopleDataList[personIndex].person;
      }
    } else {
      clearSearch();
    }
  }
};

const clearSearch = (): void => {
  searchQuery.value = '';
  const personIndex = props.peopleDataList.findIndex(
    (person) => person.person === 'n/a'
  );
  selectedPerson.value = props.peopleDataList[personIndex];
};
</script>

<style lang="scss" scoped>
.player-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: auto;
  background-color: rgba(200, 200, 200, 0.2);
}

.search-panel {
  display: flex;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  gap: 10px;
  min-height: auto;
}

.search-input {
  flex: 1;
  min-width: 200px;
  padding: 8px 12px;
  border: 1px solid rgba(175, 145, 48, 0.5);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.95);
  font-size: 14px;
  font-family: 'Roboto', sans-serif;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
    border-color: rgba(175, 145, 48, 0.8);
    box-shadow: 0 0 0 2px rgba(175, 145, 48, 0.1);
  }
}

.filtered-person {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0);
  white-space: normal;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;

  &:hover,
  &:focus {
    background-color: rgba(175, 145, 48, 0.1);
  }

  &:focus-visible {
    outline: 2px solid rgba(175, 145, 48, 0.8);
  }
}

.clear-button {
  position: absolute;
  right: 8px;
  top: 8px;
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  font-size: 18px;
  padding: 4px;
  line-height: 1;

  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  &:focus {
    outline: 2px solid rgba(175, 145, 48, 0.8);
  }
}

.selected-person {
  margin-top: 20px;
  padding: 10px;
}

@media (max-width: 600px) {
  .search-input {
    min-width: 100%;
    flex: 1 1 100%;
  }

  .search-panel {
    flex-direction: column;
  }

  .filtered-person {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
