<template>
  <div class="page-header">
    <a class="back-button" @click="$emit('back')">←</a>
    <h2 class="page-title">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
});

defineEmits(['back']);
</script>

<style lang="scss" scoped>
$color-bg-dark: #2c3e50;
$color-accent-blue: #3498db;

.page-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  background-color: $color-bg-dark;
  z-index: 0;
  padding: 10px 0;
  justify-content: center;
}

.back-button {
  font-size: 20px;
  font-weight: bold;
  color: $color-accent-blue;
  cursor: pointer;
  text-decoration: none;
  padding: 6px 10px;
  background-color: rgba(255, 255, 255, 0.814);
  border-radius: 8px;
  transition:
    background-color 0.2s,
    transform 0.1s;
  line-height: 1;
  position: absolute;
  left: 0;
}

.back-button:hover {
  background-color: rgb(255, 255, 255);
}

.back-button:active {
  transform: scale(0.95);
}

.page-title {
  font-size: 22px;
  font-weight: bold;
  margin: 0;
}
</style>
