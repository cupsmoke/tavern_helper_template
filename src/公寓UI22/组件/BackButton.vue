<template>
  <a class="back-button" @click="$emit('back')">←</a>
</template>

<script setup lang="ts">
defineEmits(['back']);
</script>

<style lang="scss" scoped>
$color-accent-blue: #3498db;

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
</style>
