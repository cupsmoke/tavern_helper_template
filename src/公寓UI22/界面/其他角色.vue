<template>
  <div class="view">
    <div v-if="!selectedNpc">
      <div class="page-header">
        <BackButton @back="$emit('back')" />
        <h2 class="page-title">🤖其他角色</h2>
      </div>
      <div v-for="(npc, index) in npcs" :key="index" class="card list-item" @click="showNpcDetail(npc)">
        <h4>{{ npc.name }}</h4>
        <p>[{{ npc.role }}]</p>
      </div>
    </div>
    <div v-else>
      <div class="page-header">
        <BackButton @back="selectedNpc = null" />
        <h2 class="page-title">{{ selectedNpc.name }}</h2>
      </div>
      <CharacterCard
        :character="selectedNpc"
        :avatar-url="characterAvatarMap[selectedNpc.name]"
        @showMonologue="showMonologuePopup"
        @showEvents="showEventsPopup"
        @showPhotos="showPhotosPopup"
        @avatarClick="showAvatarPopup"
      />
    </div>

    <MonologuePopup
      :visible="isMonologueVisible"
      :characterName="selectedNpc?.name"
      :monologue="selectedNpc?.innerMonologue"
      @close="isMonologueVisible = false"
    />
    <EventsPopup
      :visible="isEventsVisible"
      :characterName="selectedNpc?.name"
      :events="selectedNpc?.triggerableEvents"
      @close="isEventsVisible = false"
    />
    <PhotosPopup
      :visible="isPhotosVisible"
      :characterName="selectedNpc?.name"
      :photos="characterPhotos"
      :descriptions="characterPhotoDescriptions"
      @close="isPhotosVisible = false"
    />
    <AvatarPopup
      :visible="isAvatarVisible"
      :characterName="selectedNpc?.name"
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
import { characterAvatarMap, characterPhotosMap } from '../数据/characterAssets';
import BackButton from '../组件/BackButton.vue';
import CharacterCard from '../组件/CharacterCard.vue';

interface Npc {
  name: string;
  role: string;
  affectionValue: number;
  affectionMax: number;
  appearance: string;
  relationshipStage: string;
  husbandStatus: string;
  innerMonologue: string;
  triggerableEvents: string;
}

defineEmits(['back']);

const npcs = ref<Npc[]>([
  {
    name: '刘阿姨',
    role: '清洁工',
    affectionValue: 80,
    affectionMax: 100,
    appearance: '和蔼可亲，总是面带微笑',
    relationshipStage: '亲近',
    husbandStatus: '已婚',
    innerMonologue: '看着这些年轻人，就像看到自己的孩子一样。',
    triggerableEvents: '家常菜分享事件[可触发]',
  },
]);

const selectedNpc = ref<Npc | null>(null);

const isMonologueVisible = ref(false);
const isEventsVisible = ref(false);
const isPhotosVisible = ref(false);
const isAvatarVisible = ref(false);

const characterPhotos = ref<string[]>([]);
const characterPhotoDescriptions = ref<string[]>([]);
const characterAvatar = ref('');

const showNpcDetail = (npc: Npc) => {
  selectedNpc.value = npc;
};

const showMonologuePopup = () => {
  isMonologueVisible.value = true;
};

const showEventsPopup = () => {
  isEventsVisible.value = true;
};

const showPhotosPopup = () => {
  if (selectedNpc.value) {
    const photosData = characterPhotosMap[selectedNpc.value.name];
    if (photosData) {
      characterPhotos.value = photosData.photos;
      characterPhotoDescriptions.value = photosData.descriptions;
      isPhotosVisible.value = true;
    }
  }
};

const showAvatarPopup = () => {
  if (selectedNpc.value) {
    characterAvatar.value = characterAvatarMap[selectedNpc.value.name] || '';
    isAvatarVisible.value = true;
  }
};
</script>

<style lang="scss" scoped>
$color-bg-dark: #2c3e50;

.view {
  padding: 15px;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: $color-bg-dark;
  color: #ecf0f1;
  padding-top: 45px;
}

.page-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  justify-content: center;
}

.page-title {
  font-size: 22px;
  font-weight: bold;
  margin: 0;
}

.card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.list-item {
  cursor: pointer;
  transition: background-color 0.2s;
}

.list-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
