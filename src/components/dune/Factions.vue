<template>
  <v-expansion-panels multiple>
    <v-row>
      <v-col v-for="faction in factionData" :key="faction.faction" cols="6">
        <v-card :color="faction.color" :class="{ 'choam-card': faction.faction == 'CHOAM' }">
          <div class="faction-content">
            <div class="panel-container">
              <v-expansion-panel :title="faction.faction" class="transparent-panel h2-text"
                @click="faction.loaded ? null : loadFactionData( faction.faction )"
              >
                <v-expansion-panel-text class="panel-text">
                  <v-row>
                    <v-list-item>
                      <v-list-item-title>
                        <div>{{ Math.round( faction.data.usage_rate * 100 ) }}%</div>
                      </v-list-item-title>
                      <v-list-item-subtitle class="subtitle-text">Usage Rate</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <div>{{ Math.round( faction.data.win_rate * 100 ) }}%</div>
                      </v-list-item-title>
                      <v-list-item-subtitle class="subtitle-text">Win Rate</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <div>{{ faction.data.champion }}</div>
                      </v-list-item-title>
                      <v-list-item-subtitle class="subtitle-text">Champion</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <div>{{ faction.data.average_game_length !== 0 ? 'Turn ' + faction.data.average_game_length : 'n/a' }}</div>
                      </v-list-item-title>
                      <v-list-item-subtitle class="subtitle-text">Average Game Length</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <div>{{ faction.data.adversary }}</div>
                      </v-list-item-title>
                      <v-list-item-subtitle class="subtitle-text">Adversary</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <div>{{ faction.data.rival_house }}</div>
                      </v-list-item-title>
                      <v-list-item-subtitle class="subtitle-text">Rival House</v-list-item-subtitle>
                    </v-list-item>
                  </v-row>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </div>
            <div class="icon-container">
              <img :src="faction.image_url" class="faction-icon" />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-expansion-panels>
</template>

<script lang="ts">
import { FactionData, Factions, GameDune, GameStatistics, } from '@/models/models';
import { defineComponent, } from 'vue';

export default defineComponent({
  data() {
    return {
      factionData: FactionData.getFactions(),
      allGames: GameDune.getAllGames(),
    };
  },
  methods: {
    loadFactionData( factionName: Factions ): void {
      const factionIndex = this.factionData.findIndex( faction => faction.faction === factionName );

      if ( factionIndex !== -1 ) {
        this.factionData[factionIndex].data = GameStatistics.getFactionStatistics( this.allGames, factionName );
        this.factionData[factionIndex].loaded = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/dune.scss";

.faction-content {
  display: flex;
}

.panel-container {
  padding-left: 10px;
  padding-right: 4px;
  width: 100%;
}

.panel-text {
  padding-top: 5px;
}

.transparent-panel {
  background-color: rgba( 0, 0, 0, 0 );
}

.icon-container {
  padding: 2px;
}

.faction-icon {
  max-height: 100px;
}

.choam-card {
  background: linear-gradient( to bottom, rgba( 255, 0, 0, 0.05 ) 50%, rgba( 0, 0, 0, 0.05 ) 50% );
  box-shadow: inset 0 0 0 9px rgba( 255, 255, 0, 0.1 ), inset 0 0 9px transparent;
  box-sizing: border-box;
}
</style>
