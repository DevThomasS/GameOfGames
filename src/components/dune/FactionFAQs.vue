<template>
  <v-expansion-panels multiple>
    <v-row>
      <v-col v-for="(faction, index) in factionData" :key="index" cols="12">
        <v-card :color="faction.color" :class="{ 'choam-card': faction.faction === 'CHOAM' }">
          <div class="faction-content">
            <div class="panel-container">
              <!-- TODO: Space between words in title for BG & SG. -->
              <v-expansion-panel :title="faction.faction" class="transparent-panel h2-text"
                @click="faction.loaded ? null : loadFactionData( faction.faction )"
              >
                <v-expansion-panel-text class="panel-text">
                  <v-expansion-panels multiple>
                    <!-- Interior Expansion panels for each question. -->
                    <v-expansion-panel v-for="( faq, faqIndex ) in faction.data" :key="faqIndex"
                      :title="faq.question" class="transparent-panel h2-text"
                    >
                      <v-expansion-panel-text class="panel-text">
                        {{ faq.answer }}
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                    <p v-if="faction.data.length === 0" class="subtitle-text">
                      No questions yet!
                    </p>
                  </v-expansion-panels>
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
import { Factions, FactionFAQ, FAQ } from '@/models/models';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      factionData: FactionFAQ.getFactionFAQ(),
    };
  },
  methods: {
    loadFactionData( factionName: Factions ): void {
      const factionIndex = this.factionData.findIndex( faction => faction.faction === factionName );

      if (factionIndex !== -1) {
        this.factionData[factionIndex].data = [];
        this.factionData[factionIndex].loaded = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/dune.scss";
</style>
