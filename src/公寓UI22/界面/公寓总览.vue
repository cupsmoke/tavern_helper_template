<template>
  <div class="view">
    <div class="page-header">
      <BackButton @back="$emit('back')" />
      <h2 class="page-title">🏢公寓总览</h2>
    </div>
    <h3 class="building-name">{{ building.apartmentName }}</h3>

    <div class="building-discipline-circle">
      <div class="progress-ring" :style="disciplineRingStyle">
        <div class="progress-ring-inner">
          <div class="ring-label">风纪值</div>
          <div class="ring-value" :style="{ color: disciplineColor }">{{ building.disciplineValue }}</div>
          <div class="discipline-max">/ {{ building.disciplineMax }}</div>
        </div>
      </div>
      <div class="discipline-stage">{{ building.disciplineStage }}</div>
    </div>

    <div class="card">
      <p>
        <strong>当前日期:</strong> <span>{{ building.currentDay }}</span>
      </p>
      <p>
        <strong>当前时间:</strong> <span>{{ building.currentTimeFull }}</span>
      </p>
      <p>
        <strong>当前季节:</strong> <span>{{ building.seasonInfo }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import BackButton from '../组件/BackButton.vue';

defineEmits(['back']);

const building = ref({
  apartmentName: '樱花公寓',
  currentDay: '第15天',
  currentTimeFull: '14:30',
  disciplineValue: 75,
  disciplineMax: 100,
  disciplineStage: '良好',
  seasonInfo: '春季',
});

const disciplineColor = computed(() => {
  const val = building.value.disciplineValue;
  if (val <= 20) return '#e74c3c'; // --color-accent-red
  if (val >= 80) return '#27ae60'; // --color-accent-green
  return '#f39c12'; // --color-accent-gold
});

const disciplineRingStyle = computed(() => {
  const percentage =
    building.value.disciplineMax > 0 ? (building.value.disciplineValue / building.value.disciplineMax) * 100 : 0;
  const trackColor = 'rgba(255, 255, 255, 0.2)';
  return {
    background: `conic-gradient(${disciplineColor.value} ${percentage}%, ${trackColor} ${percentage}%)`,
  };
});
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
  padding-top: 45px; /* Add padding to avoid overlap with status bar */
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

.building-name {
  text-align: center;
}

.building-discipline-circle {
  text-align: center;
  padding: 20px 0;
}

.progress-ring {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  margin: 20px auto 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  transition: background 0.5s ease;
}

.progress-ring-inner {
  width: 100px;
  height: 100px;
  background-color: $color-bg-dark;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ring-label {
  font-size: 14px;
  color: #ccc;
  margin-bottom: 5px;
}

.ring-value {
  font-size: 30px;
  font-weight: bold;
  transition: color 0.5s ease;
}

.discipline-max {
  font-size: 12px;
  color: #888;
}

.card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
