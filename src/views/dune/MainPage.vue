<template>
  <div class="default-page">
    <div class="dune-box">
      <v-row>
        <Atreides @toggle-expanded="toggleExpanded( 0 )" :is-expanded="expandedIndex === 0" />
        <BeneGesserit @toggle-expanded="toggleExpanded( 1 )" :is-expanded="expandedIndex === 1" />
        <Emperor @toggle-expanded="toggleExpanded( 2 )" :is-expanded="expandedIndex === 2" />
        <Fremen @toggle-expanded="toggleExpanded( 3 )" :is-expanded="expandedIndex === 3" />
        <Harkonnen @toggle-expanded="toggleExpanded( 4 )" :is-expanded="expandedIndex === 4" />
        <SpacingGuild @toggle-expanded="toggleExpanded( 5 )" :is-expanded="expandedIndex === 5" />
        <Ixians @toggle-expanded="toggleExpanded( 6 )" :is-expanded="expandedIndex === 6" />
        <Tleilaxu @toggle-expanded="toggleExpanded( 7 )" :is-expanded="expandedIndex === 7" />
        <CHOAM @toggle-expanded="toggleExpanded( 8 )" :is-expanded="expandedIndex === 8" />
        <Richese @toggle-expanded="toggleExpanded( 9 )" :is-expanded="expandedIndex === 9" />
        <Ecaz @toggle-expanded="toggleExpanded( 10 )" :is-expanded="expandedIndex === 10" />
        <Moritani @toggle-expanded="toggleExpanded( 11 )" :is-expanded="expandedIndex === 11" />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Atreides, BeneGesserit, Emperor, Fremen, Harkonnen, SpacingGuild,
  Ixians, Tleilaxu, CHOAM, Richese, Ecaz, Moritani,
} from '@/components/components';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Atreides, BeneGesserit, Emperor, Fremen, Harkonnen, SpacingGuild,
    Ixians, Tleilaxu, CHOAM, Richese, Ecaz, Moritani,
  },
  data() {
    return {
      expandedIndex: -1,
    };
  },
  methods: {
    toggleExpanded( index: number ) {
      this.expandedIndex = this.expandedIndex === index ? -1 : index;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/common.scss";
@import "@/styles/dune.scss";
</style>
