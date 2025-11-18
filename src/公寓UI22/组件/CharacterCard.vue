<template>
  <div class="character-compact-card">
    <div class="character-header-compact">
      <div class="character-avatar-placeholder" @click="$emit('avatarClick')">
        <img v-if="avatarUrl" :src="avatarUrl" class="character-avatar-img" alt="avatar" />
        <span v-else>{{ character.name ? character.name.charAt(0) : '?' }}</span>
      </div>
      <div class="character-title">
        <h3 class="character-name">{{ character.name || 'N/A' }}</h3>
        <div class="character-role">
          <template v-if="roleTags.length">
            <span v-for="tag in roleTags" :key="tag" class="role-tag">{{ tag }}</span>
          </template>
          <span v-else class="character-role-placeholder">{{ '未知' }}</span>
        </div>
      </div>
    </div>

    <div class="info-row">
      <span class="info-label">好感度</span>
      <span class="affection-value" :style="{ color: affectionColor }"
        >{{ character.affectionValue || 0 }}/100 🌱{{ character.relationshipStage || '未知' }}</span
      >
    </div>
    <!-- <div class="info-row">
      <span class="info-label">关系阶段</span>
      <span class="info-value">{{ character.relationshipStage || '未知' }}</span>
    </div> -->
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
      <button class="popup-btn" @click="$emit('showLog')">📝 日志</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
  avatarUrl: {
    type: String,
    default: '',
  },
});

defineEmits(['avatarClick', 'showMonologue', 'showEvents', 'showPhotos', 'showLog']);

const roleTags = computed(() => {
  if (!props.character.role) return [];
  return props.character.role
    .split('#')
    .map((s: string) => s.trim())
    .filter(Boolean);
});

const affectionColor = computed(() => {
  const value = props.character.affectionValue || 0;
  let r, g, b;

  if (value >= 0) {
    // from white (0) to green (100)
    const ratio = Math.min(value / 100, 1);
    r = Math.round(180 * (1 - ratio));
    g = 180;
    b = Math.round(180 * (1 - ratio));
  } else {
    // from red (-100) to white (0)
    const ratio = Math.max((value + 100) / 100, 0);
    r = 180;
    g = Math.round(180 * ratio);
    b = Math.round(180 * ratio);
  }
  return `rgb(${r}, ${g}, ${b})`;
});
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
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
  min-height: 18px; /* To prevent layout shift */
}

.character-role-placeholder {
  font-size: 13px;
  color: #ccc;
}

.role-tag {
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  background-color: #5534db;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
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
}

.affection-text {
  font-size: 14px;
  font-weight: bold;
  color: #f2f2f2;
}

.popup-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}

.popup-btn {
  flex: 1 1 calc(50% - 4px);
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
