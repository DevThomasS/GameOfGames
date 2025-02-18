<template>
  <v-expansion-panels>
    <v-expansion-panel title="factiOn cards" class="transparent-panel h2-text">
      <v-expansion-panel-text>
        <v-row>
          <v-col v-for="( component, index ) in components" :key="index" cols="12" sm="6" md="4">
            <v-card :class="getCardClass( component.class )" class="card-with-margin"
              @click="openImage( component.image )"
            >
              <v-img :src="component.image" class="align-end v-image" style="padding: 5px;"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <!-- Selected Image Dialog -->
  <v-dialog v-model="dialog" persistent max-width="none">
    <v-img :src="selectedImage" class="selected-image"></v-img>
    <v-btn icon @click="dialog = false" class="close-button">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-dialog>
</template>

<script lang="ts">
export default {
  data() {
    return {
      components: [
        {
          image: new URL(`@/assets/dune/factionCards/atreides.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/harkonnen.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/emperor.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/fremen.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/benegesserit.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/spacingguild.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/ixians.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/tleilaxu.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/choam.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/richese.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/ecaz.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/factionCards/moritani.png`, import.meta.url ).href,
          class: 1,
        },
        // Add more components as needed
      ],
      dialog: false,
      selectedImage: "",
    };
  },
  methods: {
    getCardClass( classValue: number ): string {
      switch ( classValue ) {
        case 1:
          return "default";
        case 2:
          return "tournament";
        default:
          return "excluded";
      }
    },
    openImage( image: string ): void {
      this.selectedImage = image;
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/styles/dune.scss";

.selected-image {
  width: 95vw;
  height: 95vh;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
