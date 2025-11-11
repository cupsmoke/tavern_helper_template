<template>
  <BasePopup :visible="visible" @close="$emit('close')">
    <template #title>{{ characterName }}的照片</template>
    <div class="photo-viewer">
      <div id="photo-display-container">
        <img :src="currentPhoto" alt="照片" @error="onImageError" />
        <button v-if="photos.length > 1" class="nav-btn prev-btn" @click="changePhoto(-1)">←</button>
        <button v-if="photos.length > 1" class="nav-btn next-btn" @click="changePhoto(1)">→</button>
      </div>
      <div class="photo-description">{{ currentDescription }}</div>
      <div class="photo-counter">{{ currentIndex + 1 }} / {{ photos.length }}</div>
    </div>
  </BasePopup>
</template>

<script setup lang="ts">
import { computed, PropType, ref, watch } from 'vue';
import BasePopup from './BasePopup.vue';

const props = defineProps({
  visible: Boolean,
  characterName: String,
  photos: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  descriptions: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});

defineEmits(['close']);

const currentIndex = ref(0);

const currentPhoto = computed(() => props.photos[currentIndex.value] || '');
const currentDescription = computed(() => props.descriptions[currentIndex.value] || '');

watch(
  () => props.visible,
  newVal => {
    if (newVal) {
      currentIndex.value = 0;
    }
  },
);

const changePhoto = (direction: number) => {
  const newIndex = currentIndex.value + direction;
  if (newIndex < 0) {
    currentIndex.value = props.photos.length - 1;
  } else if (newIndex >= props.photos.length) {
    currentIndex.value = 0;
  } else {
    currentIndex.value = newIndex;
  }
};

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7lm77moIfpobXpnaI8L3RleHQ+PC9zdmc+';
};
</script>

<style lang="scss" scoped>
.photo-viewer {
  text-align: center;
}

#photo-display-container {
  position: relative;
  margin: 15px 0;

  img {
    max-width: 100%;
    max-height: 400px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.2s;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.nav-btn:active {
  transform: translateY(-50%) scale(0.95);
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.photo-description {
  margin: 10px 0;
  font-style: italic;
  color: #ddd;
  min-height: 20px;
}

.photo-counter {
  font-size: 14px;
  color: #aaa;
  margin-top: 10px;
}
</style>
