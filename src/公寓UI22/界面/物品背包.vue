<template>
  <div class="view">
    <PageHeader title="🎒物品背包" @back="$emit('back')" />
    <TabNav :tabs="Object.keys(inventory)" v-model:activeTab="activeTab" />
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
import InfoModal from '../组件/InfoModal.vue';
import PageHeader from '../组件/PageHeader.vue';
import RarityTag from '../组件/RarityTag.vue';
import TabNav from '../组件/TabNav.vue';

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
