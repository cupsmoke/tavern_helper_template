<template>
  <div v-if="visible" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h3 class="modal-title">{{ item.name }}</h3>
      <div class="modal-subtitle">
        <span v-if="item.quantity">持有数量: {{ item.quantity }} </span>
        <RarityTag :rarity="item.rarity" />
      </div>
      <hr class="modal-separator" />
      <p class="modal-description">{{ item.description }}</p>
      <p class="modal-effect">{{ item.effect }}</p>
      <button class="modal-close-btn" @click="$emit('close')">关闭</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import RarityTag from './RarityTag.vue';

defineProps({
  item: {
    type: Object,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
});

defineEmits(['close']);
</script>

<style lang="scss" scoped>
$color-bg-dark: #2c3e50;
$color-accent-blue: #3498db;
$rarity-n: #95a5a6;
$rarity-r: #3498db;
$rarity-sr: #9b59b6;
$rarity-ssr: #f1c40f;
$rarity-ur: #c0392b;
$rarity-unknown: #666666;

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background-color: $color-bg-dark;
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 350px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.modal-title {
  font-size: 20px;
  font-weight: bold;
}

.modal-subtitle {
  font-size: 14px;
  margin: 10px 0;
}

.modal-separator {
  border-color: rgba(255, 255, 255, 0.2);
  margin: 15px 0;
}

.modal-description,
.modal-effect {
  margin-bottom: 10px;
  font-size: 14px;
}

.modal-close-btn {
  background-color: $color-accent-blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.2s;
}

.modal-close-btn:hover {
  background-color: #2980b9;
}
</style>
