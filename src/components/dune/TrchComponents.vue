<template>
  <v-expansion-panels>
    <v-expansion-panel title="default tReacheRy deck (40 cards)" class="transparent-panel h2-text">
      <v-expansion-panel-text>
        <v-row>
          <v-col v-for="( component, index ) in components" :key="index" cols="12" sm="6" md="4" lg="3">
            <v-card :class="getCardClass( component.class )" class="card-with-margin">
              <v-img :src="component.image" class="align-end v-image" style="padding: 5px;"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
export default {
  data() {
    return {
      components: [
        {
          image: new URL(`@/assets/dune/treachery/poison.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/snooper.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/projectile.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/shield.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/lasgun.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/hero.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/worthless.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/karama.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/truth.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/atomics.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/ghola.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/hajr.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/treachery/weather.png`, import.meta.url ).href,
          class: 1,
        },
        // Add more components as needed
      ],
    };
  },
  methods: {
    getCardClass( classValue: number ): string {
      switch ( classValue ) {
        case 1:
          return "default";
        case 2:
          return "tournament";
        default:
          return "excluded";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/styles/dune.scss";
</style>
