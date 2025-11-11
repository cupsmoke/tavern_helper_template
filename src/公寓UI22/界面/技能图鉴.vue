<template>
  <div class="view">
    <div class="page-header">
      <BackButton @back="$emit('back')" />
      <h2 class="page-title">⚡技能图鉴</h2>
    </div>
    <div class="card">
      <div v-for="(skill, index) in skills" :key="index" class="list-item" @click="showSkillInfo(skill)">
        {{ skill.name }}
        <RarityTag :rarity="skill.rarity" />
      </div>
    </div>
    <InfoModal :item="selectedSkill" :visible="isModalVisible" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BackButton from '../组件/BackButton.vue';
import InfoModal from '../组件/InfoModal.vue';
import RarityTag from '../组件/RarityTag.vue';

defineEmits(['back']);

const skills = ref([{ name: '高效沟通', rarity: 'R', description: '提升与住户的沟通效率', effect: '好感度获取+10%' }]);

const selectedSkill = ref({});
const isModalVisible = ref(false);

const showSkillInfo = (skill: any) => {
  selectedSkill.value = skill;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
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
  padding: 10px 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.2s;
}

.list-item:last-child {
  border-bottom: none;
}

.list-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
