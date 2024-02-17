<template>
  <v-expansion-panels>
    <v-expansion-panel title="nexus cards" class="transparent-panel h2-text">
      <v-expansion-panel-text>
        <v-row>
          <v-col v-for="( component, index ) in components" :key="index" cols="12" sm="6" md="4" lg="3" xl="2">
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
          image: new URL(`@/assets/dune/nexus/atreides.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/harkonnen.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/emperor.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/fremen.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/benegesserit.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/spacingguild.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/ixians.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/tleilaxu.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/choam.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/richese.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/ecaz.png`, import.meta.url ).href,
          class: 1,
        },
        {
          image: new URL(`@/assets/dune/nexus/moritani.png`, import.meta.url ).href,
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
@import "@/styles/dune.scss";

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
