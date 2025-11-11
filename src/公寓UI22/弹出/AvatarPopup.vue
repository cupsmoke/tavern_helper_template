<template>
  <BasePopup :visible="visible" @close="$emit('close')">
    <template #title>{{ characterName }}的头像</template>
    <div class="avatar-popup-body">
      <img v-if="avatarUrl" :src="avatarUrl" alt="头像" />
      <div v-else class="avatar-placeholder">
        {{ characterName ? characterName.charAt(0) : '?' }}
      </div>
    </div>
  </BasePopup>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import BasePopup from './BasePopup.vue';

defineProps({
  visible: Boolean,
  characterName: String,
  avatarUrl: String,
});

defineEmits(['close']);
</script>

<style lang="scss" scoped>
$color-accent-purple: #c47be3;
$color-accent-blue: #3498db;

.avatar-popup-body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  img {
    max-width: 100%;
    max-height: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.avatar-placeholder {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, $color-accent-purple, $color-accent-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  color: white;
  margin: 0 auto;
}
</style>
