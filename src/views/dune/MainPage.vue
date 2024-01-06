<template>
  <div class="default-page">
    <div class="dune-box">
      <v-row>
        <Factions />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Factions from '@/components/dune/Factions.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Factions
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/common.scss";
@import "@/styles/dune.scss";
</style>
