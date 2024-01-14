<template>
  <div class="default-page">
    <div class="dune-box">
      <v-row class="centered-row">
        <h1 class="h1-text">
          FAQ
        </h1>
        <v-divider :thickness="6" class="dune-divider"/>
        <h2 class="h2-text">
          core rules
        </h2>
        <CoreFAQ />
        <h2 class="h2-text">
          faction-specific
        </h2>
        <FactionFAQ />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import CoreFAQ from '@/components/dune/CoreFAQ.vue';
import FactionFAQ from '@/components/dune/FactionFAQ.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    CoreFAQ,
    FactionFAQ,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/common.scss";
@import "@/styles/dune.scss";
</style>
