<template>
  <div class="default-page">
    <div class="war-box">
      <v-row class="centered-row">
        <h2 class="h2-text">
          Player Standings
        </h2>
        <SearchPanel />
        <h2 class="h2-text">
          Nation Standings
        </h2>
        <NationStatistics />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import NationStatistics from '@/components/war/NationStatistics.vue';
import SearchPanel from '@/components/war/SearchPanel.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    NationStatistics,
    SearchPanel,
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/common.scss";
@use "@/styles/war.scss";
</style>
