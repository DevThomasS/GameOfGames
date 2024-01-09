<template>
  <div class="default-page">
    <div class="dune-box">
      <v-row class="centered-row">
        <h2 class="h2-text">
          Rules FAQ
        </h2>
        <p>
          TODO: Rules FAQ!
        </p>
        <h2 class="h2-text">
          Faction FAQ
        </h2>
        <FactionFAQs />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import FactionFAQs from '@/components/dune/FactionFAQs.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    FactionFAQs,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/common.scss";
@import "@/styles/dune.scss";
</style>
