<template>
  <div>
    <v-card>
      <v-card-title>
        Spacing Guild Details
      </v-card-title>
      <v-card-text>
        <!-- Add specific faction details here -->
        <p>This is the faction information.</p>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="emitIndex">Load More Info</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    emitIndex() {
      this.$emit( 'emit-index' );
    },
  },
});
</script>

<style scoped>
/* Styles here */
</style>
