<template>
  <v-expansion-panels multiple>
    <v-row>
      <v-col v-for="nation in nationData" :key="nation.nation" cols="6">
        <v-card :color="nation.color">
          <div class="nation-content">
            <div class="panel-container">
              <v-expansion-panel :title="nation.nation" class="transparent-panel h2-text"
                @click="nation.loaded ? null : loadNationData( nation.nation )"
              >
              <!-- TODO: This will have to be redone into Axis v Allies - nation specific stats aren't important! -->
                <v-expansion-panel-text class="panel-text">
                  <v-row>
                    <v-list-item>
                      <v-list-item-title>
                        <div>{{ Math.round( nation.data.win_rate * 100 ) }}%</div>
                      </v-list-item-title>
                      <v-list-item-subtitle class="subtitle-text">Win Rate</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <div>{{ nation.data.champion }}</div>
                      </v-list-item-title>
                      <v-list-item-subtitle class="subtitle-text">Champion</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <div>{{ nation.data.adversary }}</div>
                      </v-list-item-title>
                      <v-list-item-subtitle class="subtitle-text">Adversary</v-list-item-subtitle>
                    </v-list-item>
                  </v-row>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </div>
            <div class="icon-container">
              <img :src="nation.image_url" class="nation-icon" />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-expansion-panels>
</template>

<script lang="ts">
import { NationData, Nations, } from '@/models/models';
import { defineComponent, } from 'vue';

export default defineComponent({
  data() {
    return {
      nationData: NationData.getNations(),
    };
  },
  methods: {
    loadNationData( nationName: Nations ): void {
    },
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/war.scss";
</style>
