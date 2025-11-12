<template>
  <div class="view">
    <PageHeader title="🏢公寓总览" @back="$emit('back')" />
    <h3 class="building-name">{{ building.apartmentName }}</h3>

    <div class="building-discipline-circle">
      <div class="progress-ring" :style="disciplineRingStyle">
        <div class="progress-ring-inner">
          <div class="ring-label">风纪值</div>
          <div class="ring-value" :style="{ color: disciplineColor }">{{ building.disciplineValue }}</div>
          <div class="discipline-max">/ 100</div>
        </div>
      </div>
      <div class="discipline-stage">{{ disciplineStage }}</div>
    </div>

    <div class="card">
      <p>
        <strong>当前天数:</strong> <span>第{{ building.currentDay }}天</span>
      </p>
      <p>
        <strong>当前日期:</strong> <span>{{ currentDate }}</span>
      </p>
      <p>
        <strong>当前时间:</strong> <span>{{ building.currentTimeFull }} {{ timeOfDay }}</span>
      </p>
      <p>
        <strong>当前季节:</strong> <span>{{ building.seasonInfo }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import PageHeader from '../组件/PageHeader.vue';

const props = defineProps({
  building: {
    type: Object,
    required: true,
  },
});

const { building } = toRefs(props);

defineEmits(['back']);

const currentDate = computed(() => {
  const baseDate = new Date(2002, 3, 7); // 2002年4月7日, 月份从0开始
  const dayOffset = parseInt(building.value.currentDay, 10) - 1;
  if (isNaN(dayOffset)) {
    return '日期计算错误';
  }
  const targetDate = new Date(baseDate);
  targetDate.setDate(baseDate.getDate() + dayOffset);

  const year = targetDate.getFullYear();
  const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
  const day = targetDate.getDate().toString().padStart(2, '0');
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  const weekday = `星期${weekdays[targetDate.getDay()]}`;

  return `${year}年${month}月${day}日 ${weekday}`;
});

const disciplineColor = computed(() => {
  const val = building.value.disciplineValue;
  if (val <= 20) return '#e74c3c'; // --color-accent-red
  if (val >= 80) return '#27ae60'; // --color-accent-green
  return '#f39c12'; // --color-accent-gold
});

const disciplineRingStyle = computed(() => {
  const percentage = building.value.disciplineValue;
  const trackColor = 'rgba(255, 255, 255, 0.2)';
  return {
    background: `conic-gradient(${disciplineColor.value} ${percentage}%, ${trackColor} ${percentage}%)`,
  };
});

const disciplineStage = computed(() => {
  const val = building.value.disciplineValue;
  if (val <= 19) return '秩序崩坏';
  if (val <= 39) return '纲纪涣散';
  if (val <= 59) return '波澜不惊';
  if (val <= 79) return '井然有序';
  if (val <= 99) return '正气浩然';
  if (val === 100) return '臻于至善';
  return '';
});

const timeOfDay = computed(() => {
  if (!building.value.currentTimeFull) return '';
  const hour = parseInt(building.value.currentTimeFull.split(':'), 10);

  if (hour >= 6 && hour < 8) {
    return '清晨';
  }
  if (hour >= 8 && hour < 12) {
    return '上午';
  }
  if (hour >= 12 && hour < 18) {
    return '下午';
  }
  if (hour >= 18 && hour < 24) {
    return '夜晚';
  }
  return '深夜';
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
