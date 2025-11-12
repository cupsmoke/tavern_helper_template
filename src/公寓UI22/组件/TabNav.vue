<template>
  <div class="tab-nav">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: activeTab === tab }]"
      @click="$emit('update:activeTab', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, PropType } from 'vue';

defineProps({
  tabs: {
    type: Array as PropType<string[]>,
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
});

defineEmits(['update:activeTab']);
</script>

<style lang="scss" scoped>
$color-accent-blue: #3498db;

.tab-nav {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 15px;
  overflow-x: auto;
}

.tab-button {
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  background: none;
  color: #aaa;
  font-size: 15px;
  white-space: nowrap;
  transition: color 0.3s;
}

.tab-button.active {
  color: $color-accent-blue;
  border-bottom: 2px solid $color-accent-blue;
}
</style>
