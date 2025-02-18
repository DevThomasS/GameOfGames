<template>
  <div class="default-page">
    <div class="dune-box">
      <v-row class="centered-row">
        <h2 class="h2-text">
          Player Standings
        </h2>
        <SearchPanel />
        <h2 class="h2-text">
          House Standings
        </h2>
        <FactionStatistics />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import FactionStatistics from '@/components/dune/FactionStatistics.vue';
import SearchPanel from '@/components/dune/SearchPanel.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    FactionStatistics,
    SearchPanel,
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/common.scss";
@use "@/styles/dune.scss";
</style>
