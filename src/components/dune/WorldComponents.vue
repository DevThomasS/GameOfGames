<template>
  <v-expansion-panels>
    <v-expansion-panel title="faction homeworlds" class="transparent-panel h2-text">
      <v-expansion-panel-text>
        <v-row>
          <v-col v-for="( component, index ) in components" :key="index" cols="12" sm="6" md="4" lg="3">
            <v-card :class="getCardClass( component.class )" class="card-with-margin">
              <v-img :src="component.image" class="align-end v-image" style="padding: 5px;">
                <v-list-item>
                  <v-list-item-title class="p-text">&#x2022; {{ component.title }} &#x2022;</v-list-item-title>
                  <v-list-item-subtitle class="p-text">{{ component.subtitle }}</v-list-item-subtitle>
                </v-list-item>
              </v-img>
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
          image: new URL(`@/assets/dune/worlds/atreides.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/worlds/harkonnen.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/worlds/emperor.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/worlds/fremen.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/worlds/benegesserit.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/worlds/spacingguild.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/worlds/ixians.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/worlds/tleilaxu.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/worlds/choam.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: ``,
          subtitle: ``,
          image: new URL(`@/assets/dune/worlds/richese.png`, import.meta.url ).href,
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
