<template>
  <div class="view">
    <div class="page-header">
      <BackButton @back="$emit('back')" />
      <h2 class="page-title">🎒物品背包</h2>
    </div>
    <div class="tab-nav">
      <button
        v-for="tab in Object.keys(inventory)"
        :key="tab"
        :class="['tab-button', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="inventory-content">
      <div v-for="(items, category) in inventory" :key="category">
        <div v-if="activeTab === category" class="card">
          <div v-for="(item, index) in items" :key="index" class="list-item" @click="showItemInfo(item)">
            {{ item.name }} (x{{ item.quantity }})
            <RarityTag :rarity="item.rarity" />
          </div>
        </div>
      </div>
    </div>
    <InfoModal :item="selectedItem" :visible="isModalVisible" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BackButton from '../组件/BackButton.vue';
import InfoModal from '../组件/InfoModal.vue';
import RarityTag from '../组件/RarityTag.vue';

defineEmits(['back']);

const inventory = ref({
  收藏品: [
    { name: '稀有邮票', quantity: 1, rarity: 'SR', description: '具有收藏价值的邮票', effect: '可出售获取高额金钱' },
  ],
  消耗品: [{ name: '精力药水', quantity: 3, rarity: 'R', description: '恢复少量精力', effect: '使用后恢复20点精力' }],
});

const activeTab = ref(Object.keys(inventory.value)[0] || '');

const selectedItem = ref({});
const isModalVisible = ref(false);

const showItemInfo = (item: any) => {
  selectedItem.value = item;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
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

.tab-nav {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 15px;
  overflow-x: auto;
}

.tab-button {
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  background: none;
  color: #aaa;
  font-size: 15px;
  white-space: nowrap;
  transition: color 0.3s;
}

.tab-button.active {
  color: $color-accent-blue;
  border-bottom: 2px solid $color-accent-blue;
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
