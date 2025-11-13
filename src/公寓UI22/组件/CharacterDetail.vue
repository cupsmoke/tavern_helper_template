<template>
  <div>
    <CharacterCard
      :character="character"
      :avatar-url="characterAssetsMap[character.name]?.avatar"
      @showMonologue="isMonologueVisible = true"
      @showEvents="isEventsVisible = true"
      @showPhotos="showPhotosPopup"
      @avatarClick="showAvatarPopup"
    />

    <MonologuePopup
      :visible="isMonologueVisible"
      :characterName="character.name"
      :monologue="character.innerMonologue"
      @close="isMonologueVisible = false"
    />
    <EventsPopup
      :visible="isEventsVisible"
      :characterName="character.name"
      :events="character.triggerableEvents"
      @close="isEventsVisible = false"
    />
    <PhotosPopup
      :visible="isPhotosVisible"
      :characterName="character.name"
      :photos="characterPhotos"
      :descriptions="characterPhotoDescriptions"
      @close="isPhotosVisible = false"
    />
    <AvatarPopup
      :visible="isAvatarVisible"
      :characterName="character.name"
      :avatarUrl="characterAvatar"
      @close="isAvatarVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AvatarPopup from '../弹出/AvatarPopup.vue';
import EventsPopup from '../弹出/EventsPopup.vue';
import MonologuePopup from '../弹出/MonologuePopup.vue';
import PhotosPopup from '../弹出/PhotosPopup.vue';
import { characterAssetsMap } from '../数据/characterAssets';
import CharacterCard from './CharacterCard.vue';

const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
});

const isMonologueVisible = ref(false);
const isEventsVisible = ref(false);
const isPhotosVisible = ref(false);
const isAvatarVisible = ref(false);

const characterPhotos = ref<string[]>([]);
const characterPhotoDescriptions = ref<string[]>([]);
const characterAvatar = ref('');

const showPhotosPopup = () => {
  const assets = characterAssetsMap[props.character.name];
  characterPhotos.value = assets?.photos || [];
  characterPhotoDescriptions.value = assets?.descriptions || [];
  isPhotosVisible.value = true;
};

const showAvatarPopup = () => {
  characterAvatar.value = characterAssetsMap[props.character.name]?.avatar || '';
  isAvatarVisible.value = true;
};
</script>
