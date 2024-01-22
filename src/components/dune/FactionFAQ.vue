<template>
  <v-expansion-panels multiple>
    <v-row>
      <v-col v-for="(faction, index) in factionData" :key="index" cols="12">
        <v-card :color="faction.color" :class="{ 'choam-card': faction.faction === 'CHOAM' }">
          <div class="faction-content">
            <div class="panel-container">
              <v-expansion-panel :title="faction.faction" class="transparent-panel h2-text"
                @click="faction.loaded ? null : loadFactionData( faction.faction )"
              >
                <v-expansion-panel-text class="panel-text">

                  <v-card class="transparent-panel p-text" v-for="( faq, faqIndex ) in faction.data" :key="faqIndex">
                    <v-list-item>
                      <v-list-item-title>
                        &#x2022; {{ faq.question }} &#x2022;
                      </v-list-item-title>
                      <v-list-item-subtitle class="panel-text p-text">
                        Answer: {{ faq.answer }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-card>
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
        this.factionData[factionIndex].data = FAQ.getFactionFAQ( factionName );
        this.factionData[factionIndex].loaded = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/dune.scss";

.spaced {
  font-size: 16px;
  line-height: 1.5;
}
</style>
