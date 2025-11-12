<template>
  <BasePopup :visible="visible" @close="$emit('close')">
    <template #title
      >{{ characterName }}的照片 ({{
        photos.length > 0 ? `${currentIndex + 1} / ${photos.length}` : '无图片'
      }})</template
    >
    <div class="photo-viewer">
      <div id="photo-display-container">
        <img
          v-if="photos.length > 0"
          :src="currentPhoto"
          alt="照片"
          @error="onImageError"
          @click="openOriginalImage"
          style="cursor: pointer"
        />
        <img
          v-else
          src="https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk="
          alt="无照片"
        />
        <div v-if="photos.length > 1" class="nav-overlay prev" @click="changePhoto(-1)"><span>←</span></div>
        <div v-if="photos.length > 1" class="nav-overlay next" @click="changePhoto(1)"><span>→</span></div>
      </div>
      <div class="photo-description">{{ photos.length > 0 ? currentDescription : '暂无照片' }}</div>
      <div class="photo-counter"></div>
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

const openOriginalImage = () => {
  if (currentPhoto.value) {
    if (confirm('是否在新标签页中查看原图？')) {
      window.open(currentPhoto.value, '_blank');
    }
  }
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
    max-height: 100%; /* 例如，修改为 300px */
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

#photo-display-container:hover .nav-overlay {
  opacity: 1;
}

.nav-overlay {
  position: absolute;
  top: 0;
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent);
}

.nav-overlay.next {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.3), transparent);
}

.nav-overlay:hover {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
}

.nav-overlay.next:hover {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent);
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
