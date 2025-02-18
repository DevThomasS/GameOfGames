<template>
  <div class="default-page">
    <div class="dune-box">
      <h1 class="h1-text">
        comPonEnts
      </h1>
      <v-divider :thickness="6" class="dune-divider"/>
      <p class="h2-text">
        RulEbooks:
      </p>
      <p class="p-text">
        <a style="color:inherit;" href="https://www.gf9games.com/dunegame/wp-content/uploads/Dune-Rulebook.pdf" target="_blank">
          Dune Rulebook
        </a>
      </p>
      <br>
      <p class="p-text">
        <a style="color:inherit;" href="https://www.gf9games.com/dunegame/wp-content/uploads/2020/09/IxianAndTleilaxuRulebook.pdf" target="_blank">
          Ixian & Tleilaxu  ( extra treachery cards & tech tokens )
        </a>
      </p>
      <br>
      <p class="p-text">
        <a style="color:inherit;" href="https://www.gf9games.com/dune/wp-content/uploads/2021/11/CHOAM-Rulebook-low-res.pdf" target="_blank">
          CHOAM & Richese  ( leader skill cards & stronghold cards )
        </a>
      </p>
      <br>
      <p class="p-text">
        <a style="color:inherit;" href="https://www.gf9games.com/dune/wp-content/uploads/EcazMoritani-Rulebook-LOWRES.pdf" target="_blank">
          Ecaz & Moritani  ( nexus cards, homeworlds, extra treachery cards, & discovery tokens )
        </a>
      </p>
      <br>
      <v-divider :thickness="6" class="dune-divider"/>
      <v-row class="centered-row">
        <CoreComponents/>
        <TrchComponents/>
        <FctnComponents/>
        <NexusComponents/>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import CoreComponents from '@/components/dune/CoreComponents.vue';
import TrchComponents from '@/components/dune/TrchComponents.vue';
import FctnComponents from '@/components/dune/FctnComponents.vue';
import NexusComponents from '@/components/dune/NexusComponents.vue';
import { defineComponent, } from 'vue';

export default defineComponent({
  components: {
    CoreComponents,
    TrchComponents,
    FctnComponents,
    NexusComponents
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/common.scss";
@use "@/styles/dune.scss";
</style>
