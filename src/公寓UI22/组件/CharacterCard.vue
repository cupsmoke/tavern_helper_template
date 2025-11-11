<template>
  <div class="character-compact-card">
    <div class="character-header-compact">
      <div class="character-avatar-placeholder" @click="$emit('avatarClick')">
        <img v-if="avatarUrl" :src="avatarUrl" class="character-avatar-img" alt="avatar" />
        <span v-else>{{ character.name ? character.name.charAt(0) : '?' }}</span>
      </div>
      <div class="character-title">
        <h3 class="character-name">{{ character.name || 'N/A' }}</h3>
        <p class="character-role">{{ character.role || '未知' }}</p>
      </div>
    </div>

    <div class="info-row">
      <span class="info-label">好感度</span>
      <span class="affection-value">{{ character.affectionValue || 0 }}/{{ character.affectionMax || 100 }}</span>
    </div>
    <div class="info-row">
      <span class="info-label">关系阶段</span>
      <span class="info-value">{{ character.relationshipStage || '未知' }}</span>
    </div>
    <div class="info-row">
      <span class="info-label">丈夫状态</span>
      <span class="info-value">{{ character.husbandStatus || '不适用/未知' }}</span>
    </div>
    <div class="info-row">
      <span class="info-label">当前样貌</span>
      <span class="info-value">{{ character.appearance || '无描述' }}</span>
    </div>

    <div class="popup-buttons">
      <button class="popup-btn" @click="$emit('showMonologue')">💭 内心独白</button>
      <button class="popup-btn" @click="$emit('showEvents')">⚡ 可触发事件</button>
      <button class="popup-btn" @click="$emit('showPhotos')">📷 查看照片</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

defineProps({
  character: {
    type: Object,
    required: true,
  },
  avatarUrl: {
    type: String,
    default: '',
  },
});

defineEmits(['avatarClick', 'showMonologue', 'showEvents', 'showPhotos']);
</script>

<style lang="scss" scoped>
$color-accent-purple: #c47be3;
$color-accent-blue: #3498db;
$color-accent-red: #e74c3c;
$color-text-light: #ecf0f1;

.character-compact-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 12px;
}

.character-header-compact {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.character-avatar-placeholder {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: linear-gradient(135deg, $color-accent-purple, $color-accent-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
  margin-right: 12px;
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;
}

.character-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.character-title {
  flex: 1;
}

.character-name {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 4px 0;
}

.character-role {
  font-size: 13px;
  color: #ccc;
  margin: 0;
}

.info-row {
  display: flex;
  margin-bottom: 8px;
  font-size: 13px;
  align-items: center;
}

.info-label {
  min-width: 70px;
  color: #aaa;
  font-weight: normal;
}

.info-value {
  flex: 1;
  color: $color-text-light;
}

.affection-value {
  font-size: 14px;
  font-weight: bold;
  color: $color-accent-red;
}

.popup-buttons {
  display: flex;
  gap: 8px;
  margin: 12px 0;
}

.popup-btn {
  flex: 1;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: $color-text-light;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
}

.popup-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.popup-btn:active {
  transform: translateY(0);
}
</style>
