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
        When playing a one-off game, players are free to agree to use any component; however, it is assumed the following components will be used with
        the Gale Force Nine edition of Dune (2019), unless otherwise agreed upon by the players:
      </p>
      <DuneComponentPanel />
      <p class="p-text">
        Both faction and seating selections are determined by the players. Players are allowed to scheme with one another before the game begins, but
        no agreement made between players before the game begins is binding.    
      </p>
      <br>
      <p class="p-text">
        Binding agreements are made only when:
      </p>
      <ul class="p-text tabbed-list">
        <li>Player announces the terms to all other players at the table (including players not directly involved in the deal).</li>
        <li>All players (including those not directly involved) acknowledge their understanding of the terms.</li>
        <li>All directly involved players accept the terms by shaking hands.</li>
      </ul>
      <br>
      <p class="p-text">
        In case of a dispute over the terms of a binding agreement between directly involved players, the resolution
        will be determined by a plurality vote of all players (not just the players involved in the dispute).
      </p>
      <br>
      <p class="p-text">
        Every rule - notably all Advanced rules - inside the core rule book & all six core factions,
        as well as each expansion rule book and factions, will be in play with the following exceptions (unless otherwise agreed):
      </p>
      <br>
      <DuneRulesExceptionList />
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
import DuneComponentPanel from '@/components/dune/DuneComponentPanel.vue';
import DuneRulesExceptionList from '@/components/dune/DuneRulesExceptionList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    DuneComponentPanel,
    DuneRulesExceptionList,
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/common.scss";
@use "@/styles/dune.scss";
</style>
