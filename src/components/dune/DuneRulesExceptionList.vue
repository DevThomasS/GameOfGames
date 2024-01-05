<template>
  <v-row class="p-text">
    <v-col cols="1"/>
    <v-col cols="4">
      <li>
        <v-list-item-title>No Increased Spice Flow</v-list-item-title>
        <v-list-item-subtitle>
          The component,
          <span class="link" @click="redirectToComponent( 17 )">Double Spice Blow Cards,</span>
          will be used in place of drawing two spice cards per turn.
        </v-list-item-subtitle>
      </li>
    </v-col>
    <v-col cols="1"/>
    <v-col cols="5">
      <li>
        <v-list-item-title>Modified Atreides Bidding Advantage</v-list-item-title>
        <v-list-item-subtitle>
          The player may only look at each Treachery card after it has been purchased (instead of before bidding has begun).
        </v-list-item-subtitle>
      </li>
    </v-col>
    <v-col cols="1"/>
  </v-row>
  <v-row class="p-text">
    <v-col cols="1"/>
    <v-col cols="4">
      <li>
        <v-list-item-title>First Turn Spice Card Must Be A Spice Blow</v-list-item-title>
        <v-list-item-subtitle>
          Any non-spice blow card, such as a sandworm, special, or spice stock, must be set aside and
          shuffled back into the spice deck once the first spice blow has been drawn. 
        </v-list-item-subtitle>
      </li>
    </v-col>
    <v-col cols="1"/>
    <v-col cols="5">
      <li>
        <v-list-item-title>Additional Rule: Bidding Phase Ante</v-list-item-title>
        <v-list-item-subtitle>
          When the bidding of each Treachery card begins, in storm order,
          the first player who has spice does not have a full hand of Treachery cards must bid exactly one spice.
        </v-list-item-subtitle>
      </li>
    </v-col>
    <v-col cols="1"/>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Router from '@/router/router';

export default defineComponent({
  methods: {
    redirectToComponent( componentId: number ): void {
      const componentLink = `/dune-components/${componentId}`;
      Router.push( componentLink )
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/dune.scss";
</style>
