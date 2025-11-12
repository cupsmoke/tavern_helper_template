<template>
  <div class="view">
    <div v-if="!selectedNpc">
      <PageHeader title="🤖其他角色" @back="$emit('back')" />
      <div v-for="(npc, index) in npcs" :key="index" class="card list-item" @click="showNpcDetail(npc)">
        <h4>{{ npc.name }}</h4>
        <p>[{{ npc.role }}]</p>
      </div>
    </div>
    <div v-else>
      <PageHeader :title="selectedNpc.name" @back="selectedNpc = null" />
      <CharacterDetail :character="selectedNpc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Npc, npcs } from '../数据/npcs';
import CharacterDetail from '../组件/CharacterDetail.vue';
import PageHeader from '../组件/PageHeader.vue';

defineEmits(['back']);

const selectedNpc = ref<Npc | null>(null);

const showNpcDetail = (npc: Npc) => {
  selectedNpc.value = npc;
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
