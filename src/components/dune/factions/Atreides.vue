<template>
  <div>
    <v-card>
      <v-card-actions>
        <v-btn @click="emitIndex()">Atreides</v-btn>
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

<style lang="scss" scoped>
/* Styles here */
</style>
