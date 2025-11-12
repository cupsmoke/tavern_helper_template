<template>
  <div class="view">
    <div v-if="!selectedRoom">
      <PageHeader title="👥 住户名册" @back="$emit('back')" />

      <TabNav
        :tabs="floors.map(f => `${f}楼`)"
        :active-tab="`${activeFloor}楼`"
        @update:activeTab="activeFloor = $event.replace('楼', '')"
      />

      <!-- 房间网格容器 -->
      <div class="rooms-grid">
        <div v-for="room in roomsForActiveFloor" :key="room.number" class="room-card" @click="showRoomDetail(room)">
          <div class="room-header">
            <div class="room-number">{{ room.number }}</div>
            <div
              :class="['room-status', room.tenants && room.tenants.length > 0 ? 'status-occupied' : 'status-vacant']"
            >
              {{ room.tenants && room.tenants.length > 0 ? '已入住' : '空闲' }}
            </div>
          </div>
          <div class="tenant-info">
            <div v-if="room.tenants && room.tenants.length > 0" class="tenant-name">
              {{ room.tenants[0].name }}
            </div>
            <div v-else class="no-tenant">暂无住户</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <PageHeader :title="`🏠 ${selectedRoom.number}号房`" @back="selectedRoom = null" />
      <CharacterDetail v-for="tenant in selectedRoom.tenants" :key="tenant.name" :character="tenant" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Room, rooms } from '../数据/residents';
import CharacterDetail from '../组件/CharacterDetail.vue';
import PageHeader from '../组件/PageHeader.vue';
import TabNav from '../组件/TabNav.vue';

defineEmits(['back']);

const floors = ref(Object.keys(rooms));
const activeFloor = ref('1');

const selectedRoom = ref<Room | null>(null);

const roomsForActiveFloor = computed(() => {
  return rooms[activeFloor.value] || [];
});

const showRoomDetail = (room: Room) => {
  if (room.tenants && room.tenants.length > 0) {
    selectedRoom.value = room;
  }
};
</script>

<style lang="scss" scoped>
$color-bg-dark: #2c3e50;
$color-accent-blue: #3498db;
$color-accent-red: #e74c3c;
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

.rooms-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
}

.room-card {
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

.room-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

.room-header {
  padding: 12px;
  background-color: $color-accent-blue;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.room-number {
  font-size: 18px;
  font-weight: 600;
}

.room-status {
  padding: 3px 10px;
  border-radius: 15px;
  font-size: 11px;
  font-weight: 600;
}

.status-occupied {
  background-color: $color-accent-red;
}

.status-vacant {
  background-color: $color-accent-green;
}

.tenant-info {
  padding: 12px;
  text-align: center;
}

.tenant-name {
  font-size: 15px;
  font-weight: 600;
  color: #ecf0f1;
}

.no-tenant {
  font-size: 14px;
  color: #888;
  font-style: italic;
}

@media (max-width: 600px) {
  .rooms-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
