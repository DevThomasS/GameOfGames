<template>
  <v-expansion-panel :title="factionData.faction" class="transparent-panel h2-text">
    <v-expansion-panel-text>
      <v-row>
        <v-list-item>
          <v-list-item-title>
            <div>{{ Math.round( factionData.usage_rate * 100 ) }}%</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Usage Rate</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <div>{{ Math.round( factionData.win_rate * 100 ) }}%</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Win Rate</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <div>{{ factionData.champion }}</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Champion</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <div>{{ factionData.average_game_length !== 0 ? 'Turn ' + factionData.average_game_length : 'n/a' }}</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Average Game Length</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <div>{{ factionData.adversary }}</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Adversary</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <div>{{ factionData.rival_house }}</div>
          </v-list-item-title>
          <v-list-item-subtitle class="subtitle-text">Rival House</v-list-item-subtitle>
        </v-list-item>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts">
import { Factions, FactionStatistics, GameDune, People, } from '@/models/models';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    gameData: {
      type: Array as PropType<GameDune[]>,
      required: true,
    },
  },
  data() {
    return {
      factionData: new FactionStatistics( Factions.Unknown, 0, 0, People.Unknown, 0, People.Unknown, Factions.Unknown ),
    };
  },
  mounted() {
    this.factionData = FactionStatistics.getCHOAMStatistics( this.gameData, );
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/dune.scss";

.transparent-panel {
  background-color: rgba( 0, 0, 0, 0 );
}
</style>
