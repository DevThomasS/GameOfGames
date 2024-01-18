<template>
  <div class="default-page">
    <div class="dune-box">
      <v-row class="centered-row">
        <h1 class="h1-text">
          comPonEnts
        </h1>
        <v-divider :thickness="6" class="dune-divider"/>
        <CoreComponents/>
        <TrchComponents/>
        <FctnComponents/>
        <WorldComponents/>
        <!-- <IxTlComponents/>
        <ChRiComponents/>
        <EcMoComponents/>
        <UnExComponents/> -->
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import CoreComponents from '@/components/dune/CoreComponents.vue';
import TrchComponents from '@/components/dune/TrchComponents.vue';
import FctnComponents from '@/components/dune/FctnComponents.vue';
import WorldComponents from '@/components/dune/WorldComponents.vue';
// import IxTlComponents from '@/components/dune/IxTlComponents.vue';
// import ChRiComponents from '@/components/dune/ChRiComponents.vue';
// import EcMoComponents from '@/components/dune/EcMoComponents.vue';
// import UnExComponents from '@/components/dune/UnExComponents.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    CoreComponents,
    TrchComponents,
    FctnComponents,
    WorldComponents,
    // IxTlComponents,
    // ChRiComponents,
    // EcMoComponents,
    // UnExComponents,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/common.scss";
@import "@/styles/dune.scss";
</style>
