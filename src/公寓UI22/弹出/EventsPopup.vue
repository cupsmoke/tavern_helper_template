<template>
  <BasePopup :visible="visible" @close="$emit('close')">
    <template #title>{{ characterName }}的可触发事件</template>
    <div class="events-content" v-html="formattedEvents"></div>
  </BasePopup>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue';
import BasePopup from './BasePopup.vue';

const props = defineProps({
  visible: Boolean,
  characterName: String,
  events: String,
});

defineEmits(['close']);

const formattedEvents = computed(() => {
  if (!props.events || props.events === '无') {
    return '当前没有可触发的事件。';
  }
  return props.events
    .replace(/\(/g, '<br>(')
    .replace(/\)/g, ')<br>')
    .replace(/\[/g, '<strong>[')
    .replace(/\]/g, ']</strong>');
});
</script>

<style lang="scss" scoped>
$color-accent-green: #27ae60;

.events-content {
  color: white;
  background: rgba(46, 204, 113, 0.1);
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid $color-accent-green;
}
</style>
