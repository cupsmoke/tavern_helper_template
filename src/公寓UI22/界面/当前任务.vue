<template>
  <div class="view">
    <PageHeader title="🌟当前任务" @back="$emit('back')" />
    <div v-if="tasks.length > 0">
      <div v-for="(task, index) in tasks" :key="index" class="card">
        <h3 class="card-title">{{ task.name }}</h3>
        <p><strong>目标:</strong> {{ task.target }}</p>
        <p><strong>详情:</strong> {{ task.detail }}</p>
        <p>
          <strong>奖励:</strong> <span class="reward">{{ task.reward }}</span>
        </p>
      </div>
    </div>
    <div v-else class="card">
      <p>没有任务信息。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageHeader from '../组件/PageHeader.vue';

defineEmits(['back']);

const tasks = ref([
  { name: '收集住户反馈', target: '访问3位住户', detail: '了解住户对公寓管理的意见和建议', reward: '500円 + 管理经验' },
]);
</script>

<style lang="scss" scoped>
$color-bg-dark: #2c3e50;
$color-accent-gold: #f39c12;
$color-accent-green: #27ae60;

.view {
  padding: 15px;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: $color-bg-dark;
  color: #ecf0f1;
  padding-top: 30px;
}

.card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid $color-accent-gold;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
}

.reward {
  color: $color-accent-green;
}
</style>
