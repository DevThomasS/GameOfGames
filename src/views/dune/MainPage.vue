<template>
  <div class="default-page">
    <div class="dune-box">
      <v-row>
        <SearchPanel />
        <Factions />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Factions from '@/components/dune/Factions.vue';
import SearchPanel from '@/components/dune/SearchPanel.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Factions,
    SearchPanel,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/common.scss";
@import "@/styles/dune.scss";
</style>
