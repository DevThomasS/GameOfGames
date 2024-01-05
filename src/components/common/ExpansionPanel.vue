<template>
  <v-expansion-panels>
    <v-expansion-panel title="Default Components" class="transparent-panel">
      <v-expansion-panel-text>
        <v-row>
          <v-col cols="4" v-for="( component, index ) in getColumnComponents( 1 )" :key="index">
            <v-list-item>
              <v-list-item-title>
                  <a :href="getComponentLink( component.component_id )" target="_blank">{{ component.component_name }}</a>
                </v-list-item-title>
                <v-list-item-subtitle>{{ component.expansion }}</v-list-item-subtitle>
            </v-list-item>
          </v-col>
          <v-col cols="4" v-for="( component, index ) in getColumnComponents( 2 )" :key="index">
            <v-list-item>
              <v-list-item-title>
                  <a :href="getComponentLink( component.component_id )" target="_blank">{{ component.component_name }}</a>
                </v-list-item-title>
                <v-list-item-subtitle>{{ component.expansion }}</v-list-item-subtitle>
            </v-list-item>
          </v-col>
          <v-col cols="4" v-for="( component, index ) in getColumnComponents( 3 )" :key="index">
            <v-list-item>
              <v-list-item-title>
                  <a :href="getComponentLink( component.component_id )" target="_blank">{{ component.component_name }}</a>
                </v-list-item-title>
                <v-list-item-subtitle>{{ component.expansion }}</v-list-item-subtitle>
            </v-list-item>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import DuneComponent from '@/components/dune/GameComponents';

export default {
  data() {
    return {
      isPanelExpanded: false,
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
    // TODO: Use componentId to link directly to specified component on Dune Components page.
    getComponentLink( componentId: number ): string {
      // return `/dune-components/${component.toLowerCase().replace(/\s+/g, '-')}`;
      return `/dune-components`;
    },
    togglePanel() {
      this.isPanelExpanded = !this.isPanelExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.transparent-panel {
  background-color: rgb(0, 0, 0, 0);
}
</style>
