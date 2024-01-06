<template>
  <v-expansion-panel title="EMPEROR" class="transparent-panel h2-text">
    <v-expansion-panel-text>
      <v-row>
        <v-col cols="4" v-for="( component, index ) in getColumnComponents( 1 )" :key="index">
          <v-list-item class="item">
            <v-list-item-title>
              <div class="link p-text" @click="redirectToComponent( component.component_id )"> {{ component.component_name }} </div>
            </v-list-item-title>
            <v-list-item-subtitle class="subtitle-text"> {{ component.expansion }} </v-list-item-subtitle>
          </v-list-item>
        </v-col>
        <v-col cols="4" v-for="( component, index ) in getColumnComponents( 2 )" :key="index">
          <v-list-item class="item">
            <v-list-item-title>
              <div class="link p-text" @click="redirectToComponent( component.component_id )"> {{ component.component_name }} </div>
            </v-list-item-title>
            <v-list-item-subtitle class="subtitle-text"> {{ component.expansion }} </v-list-item-subtitle>
          </v-list-item>
        </v-col>
        <v-col cols="4" v-for="( component, index ) in getColumnComponents( 3 )" :key="index">
          <v-list-item class="item">
            <v-list-item-title>
              <div class="link p-text" @click="redirectToComponent( component.component_id )"> {{ component.component_name }} </div>
            </v-list-item-title>
            <v-list-item-subtitle class="subtitle-text"> {{ component.expansion }} </v-list-item-subtitle>
          </v-list-item>
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts">
import { DuneComponent } from '@/models/models';
import Router from '@/router/router';

export default {
  data() {
    return {
      gameComponents: DuneComponent.getComponentsByDefaultComponents(),
    };
  },
  methods: {
    getColumnComponents( columnNumber: number ): DuneComponent[] {
      const componentsPerPage = 4; // Max components per column
      const startIndex = ( columnNumber - 1 ) * componentsPerPage;
      const endIndex = columnNumber * componentsPerPage;
      return this.gameComponents.slice( startIndex, endIndex );
    },
    redirectToComponent( componentId: number ): void {
      const componentLink = `/dune-components/${componentId}`;
      Router.push( componentLink )
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/dune.scss";

.transparent-panel {
  background-color: rgba( 0, 0, 0, 0 );
}

.item {
  padding: 0px;
}

.panel-with-padding {
  padding-top: 0px;
  padding-bottom: 10px;
}
</style>
