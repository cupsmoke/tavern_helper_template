<template>
  <div class="view">
    <div class="page-header">
      <BackButton @back="$emit('back')" />
      <h2 class="page-title">👤个人档案</h2>
    </div>

    <!-- 基本信息卡片 -->
    <div class="profile-header-card card">
      <div class="profile-avatar-section">
        <div class="profile-avatar">
          <div class="avatar-placeholder">{{ profile.adminName.charAt(0) }}</div>
        </div>
        <div class="profile-basic-info">
          <h3 class="profile-name">{{ profile.adminName }}</h3>
          <p class="profile-identity">{{ profile.identity }}</p>
          <div class="status-tags-container">
            <span v-for="tag in profile.statusTags" :key="tag" class="status-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div class="profile-appearance-section">
        <p class="profile-appearance">{{ profile.appearance }}</p>
      </div>
    </div>

    <!-- 纵向排列的状态数值卡片 -->
    <div class="profile-stats-card card">
      <h3 class="card-title">📊 状态数值</h3>
      <div class="stats-vertical">
        <div class="stat-item-vertical">
          <div class="stat-info">
            <span class="stat-icon">💰</span>
            <span class="stat-label">金钱</span>
          </div>
          <div class="stat-value-container">
            <div class="stat-value">{{ profile.money }}</div>
            <div class="stat-unit">円</div>
          </div>
        </div>
        <div class="stat-item-vertical">
          <div class="stat-info">
            <span class="stat-icon">✨</span>
            <span class="stat-label">精力</span>
          </div>
          <div class="stat-value-container">
            <div class="stat-value">{{ profile.currentEnergy }}</div>
            <div class="stat-unit">/</div>
            <div class="stat-unit">{{ profile.maxEnergy }}</div>
          </div>
          <div class="stat-progress-container">
            <div class="stat-progress-bar">
              <div class="stat-progress-fill" :style="{ width: energyProgress }"></div>
            </div>
          </div>
        </div>
        <div class="stat-item-vertical">
          <div class="stat-info">
            <span class="stat-icon">😈</span>
            <span class="stat-label">堕落值</span>
          </div>
          <div class="stat-value-container">
            <div class="stat-value">{{ profile.corruption }}</div>
            <div class="stat-unit">/ 100</div>
          </div>
          <div class="stat-progress-container">
            <div class="stat-progress-bar">
              <div class="stat-progress-fill corruption-fill" :style="{ width: corruptionProgress }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 简化版技能卡片 -->
    <div class="profile-skills-card card">
      <h3 class="card-title">⚡ 核心技能</h3>
      <div class="skills-grid">
        <div v-for="skill in profile.skills" :key="skill.name" class="skill-item">
          <h4 class="skill-name">{{ skill.name }}</h4>
          <div class="skill-level">Lv. {{ skill.level }}</div>
          <p class="skill-description">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import BackButton from '../组件/BackButton.vue';

defineEmits(['back']);

const profile = ref({
  adminName: '林小美',
  identity: '公寓管理员',
  appearance: '黑色长发，身高165cm，常穿制服',
  statusTags: ['管理员', '认真', '亲和力'],
  money: 12500,
  currentEnergy: 80,
  maxEnergy: 100,
  corruption: 25,
  skills: [{ name: '沟通技巧', level: '3', description: '与住户沟通时效果提升' }],
});

const energyProgress = computed(() => {
  const { currentEnergy, maxEnergy } = profile.value;
  return maxEnergy > 0 ? `${(currentEnergy / maxEnergy) * 100}%` : '0%';
});

const corruptionProgress = computed(() => {
  return `${profile.value.corruption}%`;
});
</script>

<style lang="scss" scoped>
$color-bg-dark: #2c3e50;
$color-accent-blue: #3498db;
$color-accent-purple: #c47be3;
$color-accent-gold: #f39c12;

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

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
}

/* Profile Header */
.profile-header-card {
  padding: 20px;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(142, 68, 173, 0.1));
  border-left: 4px solid $color-accent-blue;
}

.profile-avatar-section {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.profile-avatar {
  margin-right: 15px;
}

.avatar-placeholder {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, $color-accent-blue, $color-accent-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.profile-basic-info {
  flex: 1;
}

.profile-name {
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 5px 0;
  color: white;
}

.profile-identity {
  font-size: 14px;
  color: #ccc;
  margin: 0 0 10px 0;
}

.status-tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.status-tag {
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  background-color: $color-accent-blue;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.profile-appearance-section {
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.profile-appearance {
  font-style: italic;
  color: #ddd;
  margin: 0;
  line-height: 1.5;
}

/* Stats Card */
.profile-stats-card {
  padding: 15px;
}

.stats-vertical {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stat-item-vertical {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.stat-info {
  display: flex;
  align-items: center;
}

.stat-icon {
  font-size: 18px;
  margin-right: 10px;
}

.stat-label {
  font-size: 14px;
  font-weight: 600;
}

.stat-value-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-value {
  font-size: 16px;
  font-weight: bold;
}

.stat-unit {
  font-size: 12px;
  color: #aaa;
}

.stat-progress-container {
  width: 100px;
  margin-left: 10px;
}

.stat-progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.stat-progress-fill {
  height: 100%;
  background: $color-accent-blue;
  border-radius: 3px;
}

.corruption-fill {
  background: $color-accent-purple;
}

/* Skills Card */
.profile-skills-card {
  padding: 15px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
}

.skill-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  border-left: 3px solid $color-accent-gold;
}

.skill-name {
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 4px 0;
  color: white;
}

.skill-level {
  font-size: 14px;
  color: $color-accent-gold;
  margin-bottom: 6px;
}

.skill-description {
  font-size: 11px;
  color: #ccc;
  line-height: 1.3;
}
</style>
