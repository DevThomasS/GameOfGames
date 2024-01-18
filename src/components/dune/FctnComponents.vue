<template>
  <v-expansion-panels>
    <v-expansion-panel title="factiOn cards" class="transparent-panel h2-text">
      <v-expansion-panel-text>
        <v-row>
          <v-col v-for="( component, index ) in components" :key="index" cols="12" sm="6" md="4">
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
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/factionCards/atreides.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/factionCards/harkonnen.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/factionCards/emperor.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/factionCards/fremen.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/factionCards/benegesserit.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/factionCards/spacingguild.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/factionCards/ixians.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/factionCards/tleilaxu.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/factionCards/choam.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/factionCards/richese.png`, import.meta.url ).href,
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
@import "@/styles/dune.scss";
</style>
