<template>
  <BasePopup :visible="visible" @close="$emit('close')">
    <template #title>{{ characterName }}的内心独白</template>
    <div class="monologue-content">
      {{ monologue }}
    </div>
  </BasePopup>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import BasePopup from './BasePopup.vue';

defineProps({
  visible: Boolean,
  characterName: String,
  monologue: String,
});

defineEmits(['close']);
</script>

<style lang="scss" scoped>
$color-accent-purple: #c47be3;

.monologue-content {
  font-style: italic;
  color: white;
  background: rgba(142, 68, 173, 0.1);
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid $color-accent-purple;
}
</style>
