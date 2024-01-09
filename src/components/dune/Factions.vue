<template>
  <v-expansion-panels multiple>
    <v-row>
      <v-col v-for="( component, index ) in componentItems" :key="index" cols="6">
        <v-card :color="getFactionColor( index )" :class="{ 'choam-card': isChoam( index ) }">
          <div class="faction-content">
            <div class="panel-container">
              <component :is="component" :gameData=allGames />
            </div>
            <div class="icon-container">
              <img :src="getFactionIconUrl( index )" class="faction-icon" />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-expansion-panels>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, markRaw } from 'vue';
import { Factions, GameDune, } from '@/models/models';

// This is crucial in preventing unnecessary reactivity with components that may cause performance overhead.
// Imo, importing a component should always return the object itself instead of a proxy, but the wizardry of Vue 3 is beyond me.
// Something, something async components are always proxies, something, something, markRaw() is the solution.
const asyncLoadComponent = ( name: string ) => {
  return markRaw(
    defineAsyncComponent( () => import( `@/components/dune/factions/${name}.vue` ) )
  );
};

export default defineComponent({
  data() {
    return {
      componentItems: [
        asyncLoadComponent( Factions.Atreides ),
        asyncLoadComponent( Factions.BeneGesserit ),
        asyncLoadComponent( Factions.Emperor ),
        asyncLoadComponent( Factions.Fremen ),
        asyncLoadComponent( Factions.Harkonnen ),
        asyncLoadComponent( Factions.SpacingGuild ),
        asyncLoadComponent( Factions.Ixians ),
        asyncLoadComponent( Factions.Tleilaxu ),
        asyncLoadComponent( Factions.CHOAM ),
        asyncLoadComponent( Factions.Richese ),
        asyncLoadComponent( Factions.Ecaz ),
        asyncLoadComponent( Factions.Moritani ),
      ],
      allGames: GameDune.getAllGames(),
    };
  },
  methods: {
    getFactionColor( index: number ): string {
      if ( index === 0 ) { // Atreides
        return 'rgba( 0, 255, 0, 0.05 )';
      } else if ( index === 1 ) { // Bene Gesserit
        return 'rgba( 0, 0, 255, 0.05 )';
      } else if ( index === 2 ) { // Emperor
        return 'rgba( 255, 0, 0, 0.05 )';
      } else if ( index === 3 ) { // Fremen
        return 'rgba( 255, 255, 0, 0.05 )';
      } else if ( index === 4 ) { // Harkonnen
        return 'rgba( 0, 0, 0, 0.05 )';
      } else if ( index === 5 ) { // Spacing Guild
        return 'rgba( 255, 110, 0, 0.05 )';
      } else if ( index === 6 ) { // Ixians
        return 'rgba( 200, 190, 120, 0.05 )';
      } else if ( index === 7 ) { // Tleilaxu
        return 'rgba( 130, 0, 200, 0.05 )';
      } else if ( index === 8 ) { // CHOAM
        return 'rgba( 0, 0, 0, 0 )';
      } else if ( index === 9 ) { // Richese
        return 'rgba( 255, 255, 255, 0.05 )';
      } else if ( index === 10 ) { // Ecaz
        return 'rgba( 200, 0, 130, 0.05 )';
      } else if ( index === 11 ) { // Moritani
        return 'rgba( 0, 180, 255, 0.05 )';
      }
      else {
        return 'secondary';
      }
    },
    getFactionIconUrl( index: number ): string {
      if ( index === 0 ) {
        return new URL(`@/assets/dune/houses/Atreides.png`, import.meta.url ).href;
      } else if ( index === 1 ) {
        return new URL(`@/assets/dune/houses/BeneGesserit.png`, import.meta.url ).href;
      } else if ( index === 2 ) {
        return new URL(`@/assets/dune/houses/Emperor.png`, import.meta.url ).href;
      } else if ( index === 3 ) {
        return new URL(`@/assets/dune/houses/Fremen.png`, import.meta.url ).href;
      } else if ( index === 4 ) {
        return new URL(`@/assets/dune/houses/Harkonnen.png`, import.meta.url ).href;
      } else if ( index === 5 ) {
        return new URL(`@/assets/dune/houses/SpacingGuild.png`, import.meta.url ).href;
      } else if ( index === 6 ) {
        return new URL(`@/assets/dune/houses/Ixians.png`, import.meta.url ).href;
      } else if ( index === 7 ) {
        return new URL(`@/assets/dune/houses/Tleilaxu.png`, import.meta.url ).href;
      } else if ( index === 8 ) {
        return new URL(`@/assets/dune/houses/CHOAM.png`, import.meta.url ).href;
      } else if ( index === 9 ) {
        return new URL(`@/assets/dune/houses/Richese.png`, import.meta.url ).href;
      } else if ( index === 10 ) {
        return new URL(`@/assets/dune/houses/Ecaz.png`, import.meta.url ).href;
      } else if ( index === 11 ) {
        return new URL(`@/assets/dune/houses/Moritani.png`, import.meta.url ).href;
      }
      else {
        return 'secondary';
      }
    },
    isChoam( index: number ): boolean {
      return index === 8;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/dune.scss";

.faction-content {
  display: flex
}

.panel-container {
  padding-left: 10px;
  padding-right: 4px;
  width: 100%;
}

.icon-container {
  padding: 2px;
}

.faction-icon {
  max-height: 100px;
}

.choam-card {
  background: linear-gradient( to bottom, rgba( 255, 0, 0, 0.05 ) 50%, rgba( 0, 0, 0, 0.05 ) 50% );
  box-shadow: inset 0 0 0 9px rgba( 255, 255, 0, 0.1 ), inset 0 0 9px transparent;
  box-sizing: border-box;
}
</style>
