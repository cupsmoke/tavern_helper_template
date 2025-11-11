<template>
  <div class="view">
    <div v-if="!selectedRoom">
      <div class="page-header">
        <BackButton @back="$emit('back')" />
        <h2 class="page-title">👥 住户名册</h2>
      </div>

      <!-- 添加楼层导航 -->
      <div class="floor-navigation">
        <button
          v-for="floor in floors"
          :key="floor"
          :class="['floor-btn', { active: activeFloor === floor }]"
          @click="activeFloor = floor"
        >
          {{ floor }}楼
        </button>
      </div>

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
            <div v-if="room.tenants && room.tenants.length > 0" class="tenant-name">{{ room.tenants[0].name }}</div>
            <div v-else class="no-tenant">暂无住户</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="page-header">
        <BackButton @back="selectedRoom = null" />
        <h2 class="page-title">🏠 {{ selectedRoom.number }}号房</h2>
      </div>
      <CharacterCard
        v-for="tenant in selectedRoom.tenants"
        :key="tenant.name"
        :character="tenant"
        :avatar-url="characterAvatarMap[tenant.name]"
        @showMonologue="showMonologuePopup(tenant)"
        @showEvents="showEventsPopup(tenant)"
        @showPhotos="showPhotosPopup(tenant)"
        @avatarClick="showAvatarPopup(tenant)"
      />
    </div>

    <MonologuePopup
      :visible="isMonologueVisible"
      :characterName="activeTenant?.name"
      :monologue="activeTenant?.innerMonologue"
      @close="isMonologueVisible = false"
    />
    <EventsPopup
      :visible="isEventsVisible"
      :characterName="activeTenant?.name"
      :events="activeTenant?.triggerableEvents"
      @close="isEventsVisible = false"
    />
    <PhotosPopup
      :visible="isPhotosVisible"
      :characterName="activeTenant?.name"
      :photos="characterPhotos"
      :descriptions="characterPhotoDescriptions"
      @close="isPhotosVisible = false"
    />
    <AvatarPopup
      :visible="isAvatarVisible"
      :characterName="activeTenant?.name"
      :avatarUrl="characterAvatar"
      @close="isAvatarVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import AvatarPopup from '../弹出/AvatarPopup.vue';
import EventsPopup from '../弹出/EventsPopup.vue';
import MonologuePopup from '../弹出/MonologuePopup.vue';
import PhotosPopup from '../弹出/PhotosPopup.vue';
import { characterAvatarMap, characterPhotosMap } from '../数据/characterAssets';
import BackButton from '../组件/BackButton.vue';
import CharacterCard from '../组件/CharacterCard.vue';

interface Tenant {
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

interface Room {
  number: string;
  tenants: Tenant[] | null;
}

defineEmits(['back']);

const floors = ref(['1', '2', '3']);
const activeFloor = ref('1');

const rooms = ref<Record<string, Room[]>>({
  '1': [
    {
      number: '101',
      tenants: [
        {
          name: '张伟',
          role: '程序员',
          affectionValue: 65,
          affectionMax: 100,
          appearance: '戴眼镜，略显疲惫',
          relationshipStage: '朋友',
          husbandStatus: '未婚',
          innerMonologue: '最近工作压力好大，真想找个人聊聊...',
          triggerableEvents: '深夜加班事件[可触发]',
        },
      ],
    },
    { number: '102', tenants: null },
    {
      number: '103',
      tenants: [
        {
          name: '王芳',
          role: '教师',
          affectionValue: 80,
          affectionMax: 100,
          appearance: '温柔知性',
          relationshipStage: '邻居',
          husbandStatus: '已婚',
          innerMonologue: '今天的课程很顺利。',
          triggerableEvents: '周末辅导事件[可触发]',
        },
      ],
    },
    { number: '104', tenants: null },
  ],
  '2': [
    {
      number: '201',
      tenants: [
        {
          name: '李娜',
          role: '医生',
          affectionValue: 70,
          affectionMax: 100,
          appearance: '白大褂，一丝不苟',
          relationshipStage: '普通',
          husbandStatus: '未婚',
          innerMonologue: '希望大家都能健健康康的。',
          triggerableEvents: '健康咨询事件[可触发]',
        },
      ],
    },
    {
      number: '202',
      tenants: [
        {
          name: '刘强',
          role: '健身教练',
          affectionValue: 90,
          affectionMax: 100,
          appearance: '身材健硕，阳光开朗',
          relationshipStage: '好友',
          husbandStatus: '未婚',
          innerMonologue: '今天也要元气满满！',
          triggerableEvents: '一起健身事件[可触发]',
        },
      ],
    },
    { number: '203', tenants: null },
    {
      number: '204',
      tenants: [
        {
          name: '陈静',
          role: '自由职业者',
          affectionValue: 50,
          affectionMax: 100,
          appearance: '艺术气息，特立独行',
          relationshipStage: '陌生',
          husbandStatus: '未知',
          innerMonologue: '灵感，快到我碗里来！',
          triggerableEvents: '画展邀请事件[可触发]',
        },
      ],
    },
  ],
  '3': [
    { number: '301', tenants: null },
    {
      number: '302',
      tenants: [
        {
          name: '杨勇',
          role: '外卖员',
          affectionValue: 60,
          affectionMax: 100,
          appearance: '行色匆匆，皮肤黝黑',
          relationshipStage: '认识',
          husbandStatus: '未知',
          innerMonologue: '下一单，冲！',
          triggerableEvents: '雨天送餐事件[可触发]',
        },
        {
          name: '杨勇是',
          role: '外卖员',
          affectionValue: 60,
          affectionMax: 100,
          appearance: '行色匆匆，皮肤黝黑',
          relationshipStage: '认识',
          husbandStatus: '未知',
          innerMonologue: '下一单，冲！',
          triggerableEvents: '雨天送餐事件[可触发]',
        },
      ],
    },
    { number: '303', tenants: null },
    { number: '304', tenants: null },
  ],
});

const selectedRoom = ref<Room | null>(null);
const activeTenant = ref<Tenant | null>(null);

const isMonologueVisible = ref(false);
const isEventsVisible = ref(false);
const isPhotosVisible = ref(false);
const isAvatarVisible = ref(false);

const characterPhotos = ref<string[]>([]);
const characterPhotoDescriptions = ref<string[]>([]);
const characterAvatar = ref('');

const roomsForActiveFloor = computed(() => {
  return rooms.value[activeFloor.value] || [];
});

const showRoomDetail = (room: Room) => {
  if (room.tenants && room.tenants.length > 0) {
    selectedRoom.value = room;
  }
};

const showMonologuePopup = (tenant: Tenant) => {
  activeTenant.value = tenant;
  isMonologueVisible.value = true;
};

const showEventsPopup = (tenant: Tenant) => {
  activeTenant.value = tenant;
  isEventsVisible.value = true;
};

const showPhotosPopup = (tenant: Tenant) => {
  activeTenant.value = tenant;
  const photosData = characterPhotosMap[tenant.name];
  if (photosData) {
    characterPhotos.value = photosData.photos;
    characterPhotoDescriptions.value = photosData.descriptions;
    isPhotosVisible.value = true;
  }
};

const showAvatarPopup = (tenant: Tenant) => {
  activeTenant.value = tenant;
  characterAvatar.value = characterAvatarMap[tenant.name] || '';
  isAvatarVisible.value = true;
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

.floor-navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 8px;
  flex-wrap: wrap;
}

.floor-btn {
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid $color-accent-blue;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: $color-accent-blue;
  cursor: pointer;
  transition: all 0.3s ease;
}

.floor-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.floor-btn.active {
  background-color: $color-accent-blue;
  color: white;
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

  .floor-btn {
    padding: 8px 15px;
    font-size: 13px;
  }
}
</style>
