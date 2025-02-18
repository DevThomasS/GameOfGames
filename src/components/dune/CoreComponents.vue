<template>
  <v-expansion-panels>
    <v-expansion-panel title="cORe cOmponents and Rules" class="transparent-panel h2-text">
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
          title: "Spice Deck (21)",
          subtitle: "Six Shai-Halud cards & Fifteen Spice Blow cards - one card for each blow territory." +
          " Normally replaced by unofficial spice deck.",
          // image: new URL(`@/assets/dune/core/spice.png`, import.meta.url ).href,
          image: new URL(`@/assets/dune/core/rule.png`, import.meta.url ).href,
          class: 0,
        },
        {
          title: "Treachery Deck (40)",
          subtitle: "Core 33 treachery cards + poison & projectile weapon & defense cards + 2 extra Karamas." +
          " Shuffle discarded cards (if any) and replace deck as it runs empty.",
          // image: new URL(`@/assets/dune/core/treachery.png`, import.meta.url ).href,
          image: new URL(`@/assets/dune/core/rule.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: "Traitor Deck (30+)",
          subtitle: "1 Traitor card for each leader token in the game.  Normally supplemented by Cheap Hero" +
          " Traitor card and Traitor cards for any included expansion faction. A faction's Traitor cards are always removed if not in play.",
          image: new URL(`@/assets/dune/core/traitor.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: "Alliance Cards (6+)",
          subtitle: "1 Alliance card for each faction in the game.  Normally supplemented for each" +
          " included expansion faction. A faction's Alliance card is always removed if not in play.",
          // image: new URL(`@/assets/dune/core/alliance.png`, import.meta.url ).href,
          image: new URL(`@/assets/dune/core/rule.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: "Advanced Combat rule",
          subtitle: "Unless otherwise stated, each troop in combat counts at half strength unless the battle plan" +
          " includes one spice for that troop.  A battle plan may never include more than one spice for each troop dialed." +
          " Normally included in every game of Dune.",
          image: new URL(`@/assets/dune/core/rule.png`, import.meta.url ).href,
          class: 1,
        },
        {
          title: "Storm Movement rule",
          subtitle: "Replaced by Storm Deck when Fremen are in play. Last player in storm order and" +
          " first player in storm order take hold of the battle wheels. Each player independently dials a number from 1 to 3, and reveal" +
          " their selection simultaneously. Storm then moves the sum.",
          image: new URL(`@/assets/dune/core/rule.png`, import.meta.url ).href,
          class: 0,
        },
        {
          title: "Shield Wall Settlement",
          subtitle: "Shield Wall territory counts as a stronghold for victory purposes after 4 worms have appeared;" +
          " occupancy still treated as rock territory (any number of players can be inside). Normally excluded from every game of Dune.",
          image: new URL(`@/assets/dune/core/rule.png`, import.meta.url ).href,
          class: 2,
        },
        {
          title: "Advanced Strongholds",
          subtitle: "Shield Wall territory counts as a stronghold for victory purposes after 4 worms have appeared;" +
          " occupancy still treated as rock territory (any number of players can be inside). Normally excluded from every game of Dune.",
          image: new URL(`@/assets/dune/core/rule.png`, import.meta.url ).href,
          class: 2,
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
