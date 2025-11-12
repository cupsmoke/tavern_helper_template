<template>
  <div class="view">
    <div v-if="!selectedLetter">
      <PageHeader title="💌 远方来信" @back="$emit('back')" />

      <TabNav :tabs="tabs" v-model:activeTab="activeTab" />

      <div class="letters-grid">
        <div
          v-for="letter in filteredLetters"
          :key="letter.title"
          :class="['letter-card', { 'not-clickable': letter.status === '未开始' }]"
          @click="letter.status !== '未开始' && showLetterDetail(letter)"
        >
          <div :class="['letter-header', getStatusClass(letter.status)]">
            <div class="letter-title">{{ letter.title }}</div>
          </div>
          <div class="letter-info">
            <div class="letter-from">来自: <span :class="['fi', 'fi-' + letter.from]"></span></div>

            <!-- <p>当前代码: {{ letter.from }}</p> -->
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <PageHeader :title="selectedLetter.title" @back="selectedLetter = null" />
      <CharacterDetail :character="selectedLetter.character" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Letter, letters } from '../数据/letters';
import CharacterDetail from '../组件/CharacterDetail.vue';
import PageHeader from '../组件/PageHeader.vue';
import TabNav from '../组件/TabNav.vue';

defineEmits(['back']);

const tabs = ref(['进行中', '未开始', '已完成']);
const activeTab = ref('进行中');

const selectedLetter = ref<Letter | null>(null);

const filteredLetters = computed(() => {
  return letters.filter(letter => letter.status === activeTab.value);
});

const getStatusClass = (status: string) => {
  switch (status) {
    case '进行中':
      return 'status-inprogress';
    case '已完成':
      return 'status-completed';
    case '未开始':
      return 'status-not-started';
    default:
      return '';
  }
};

const showLetterDetail = (letter: Letter) => {
  selectedLetter.value = letter;
};
</script>

<style lang="scss" scoped>
$color-bg-dark: #2c3e50;
$color-accent-blue: #3498db;

.view {
  padding: 15px;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: $color-bg-dark;
  color: #ecf0f1;
  padding-top: 30px;
}

.letters-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
}

.letter-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.letter-card.not-clickable {
  cursor: not-allowed;
  opacity: 0.7;
}

.letter-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

.letter-header {
  padding: 12px;
  background-color: #e67e22; /* A more letter-like color */
  color: white;
  display: flex;
  align-items: center;
}

.status-inprogress {
  background-color: #f39c12; /* Lighter orange */
}

.status-completed {
  background-color: #27ae60; /* Teal green */
}

.status-not-started {
  background-color: #95a5a6; /* Gray */
}

.letter-title {
  font-size: 18px;
  font-weight: 600;
}

.letter-info {
  padding: 12px;
}

.letter-from {
  font-size: 14px;
  color: #ccc;
}
</style>
