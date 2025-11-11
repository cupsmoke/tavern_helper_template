<template>
  <div v-if="visible" class="popup-modal" @click.self="$emit('close')">
    <div class="popup-content">
      <div class="popup-header">
        <h3 class="popup-title">
          <slot name="title"></slot>
        </h3>
        <button class="popup-close" @click="$emit('close')">×</button>
      </div>
      <div class="popup-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});

defineEmits(['close']);
</script>

<style lang="scss" scoped>
$color-bg-dark: #2c3e50;
$color-text-light: #ecf0f1;

.popup-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
}

.popup-content {
  background: $color-bg-dark;
  border-radius: 15px;
  padding: 20px;
  max-width: 350px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.popup-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: white;
}

.popup-close {
  background: none;
  border: none;
  color: $color-text-light;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
}

.popup-body {
  line-height: 1.5;
}
</style>
