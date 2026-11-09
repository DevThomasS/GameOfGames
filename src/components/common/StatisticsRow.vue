<template>
  <v-list-item class="statistics-row">
    <v-list-item-title class="stat-value">
      <div>{{ value }}</div>
    </v-list-item-title>
    <v-list-item-subtitle class="subtitle-text">{{ label }}</v-list-item-subtitle>
  </v-list-item>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  value: string | number;
}

withDefaults(defineProps<Props>(), {
  label: '',
  value: '',
});
</script>

<style lang="scss" scoped>
.statistics-row {
  padding: 4px 0;
  min-height: auto;
}

.stat-value {
  font-weight: 600;
}

.subtitle-text {
  font-size: 13px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
}

@media (max-width: 600px) {
  .statistics-row {
    padding: 2px 0;
  }

  .subtitle-text {
    font-size: 12px;
  }
}
</style>
