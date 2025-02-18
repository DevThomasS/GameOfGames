<template>
  <v-expansion-panels multiple>
    <v-row>
      <v-col>
        <v-card>
          <div class="faction-content">
            <div class="panel-container">
              <v-expansion-panel class="transparent-panel h2-text"
                @click="isLoaded ? null : loadCoreData()"
              >
                <v-expansion-panel-text class="panel-text">

                  <v-card class="transparent-panel p-text" v-for="( faq, faqIndex ) in coreData" :key="faqIndex">
                    <v-list-item>
                      <v-list-item-title>
                        &#x2022; {{ faq.question }} &#x2022;
                      </v-list-item-title>
                      <v-list-item-subtitle class="panel-text p-text spaced">
                        Answer: {{ faq.answer }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-card>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-expansion-panels>
</template>

<script lang="ts">
import { FAQ } from '@/models/models';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      coreData: new Array<FAQ>(),
      isLoaded: false,
    };
  },
  methods: {
    loadCoreData(): void {
      this.coreData = FAQ.getCoreFAQ();
      this.isLoaded = true;
    },
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/dune.scss";

.spaced {
  font-size: 16px;
  line-height: 1.5;
}
</style>
