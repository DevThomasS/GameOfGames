<template>
  <div class="default-page">
    <div class="dune-box">
      <h1 class="h1-text">
        DUNE RulEs
      </h1>
      <v-divider :thickness="6" class="dune-divider"/>
      <h2 class="h2-text">
        exhibition RulEs
      </h2>
      <p class="p-text">
        When playing a one-off game, players are free to agree to use any component; it is assumed the following components will be
        used with the Gale Force Nine edition of Dune (2019) unless otherwise agreed upon by the players:
      </p>
      <ExpansionPanel />
      <p class="p-text">
        Every component of the base game will be in play, including all Advanced Game rules, unless otherwise agreed, with the following exceptions:
      </p>

      <li v-for="faction in getAllFactions()" :key="faction" class="p-text">
        {{ faction }}
      </li>
      <br>
      <br>
      <h2 class="h2-text">
        touRnamEnt RulEs
      </h2>
      <p class="p-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
        Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
        quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
        Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.
        Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis,
        tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat
        mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
        Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum
        magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
        molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
        facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut
        ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Factions } from '@/models/models';
import { ExpansionPanel } from '@/components/components';

export default defineComponent({
  components: {
    ExpansionPanel,
  },
  data() {
    return {
      expandedIndex: -1,
    };
  },
  methods: {
    getAllFactions(): string[] {
      return [ Factions.Atreides.toString(), Factions.BeneGesserit.toString(), Factions.Emperor.toString(),
      Factions.Fremen.toString(), Factions.Harkonnen.toString(), Factions.SpacingGuild.toString(),
      Factions.Ixians.toString(), Factions.Tleilaxu.toString(), Factions.CHOAM.toString(),
      Factions.Richese.toString(), Factions.Ecaz.toString(), Factions.Moritani.toString(), ];
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/common.scss";
@import "@/styles/dune.scss";

.dune-divider {
  color: rgba(175, 145, 48);
  border-radius: 10px;
}
</style>
