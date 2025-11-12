<template>
  <div class="status-bar">
    <div class="status-bar-left">
      <span>{{ currentTime }}</span>
    </div>
    <div class="status-bar-right">
      <span id="status-bar-energy">✨ {{ profile.currentEnergy }} / {{ profile.maxEnergy }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { profile } from '../数据/profile';

defineProps({
  currentTime: {
    type: String,
    required: true,
  },
});

// In a real app, you would update currentTime dynamically
// For example, using setInterval to update the time every second
// setInterval(() => {
//   const now = new Date();
//   currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// }, 60000);
</script>

<style lang="scss" scoped>
.status-bar {
  position: absolute; /* Position it at the top */
  top: 0;
  left: 0;
  width: 100%;
  height: 30px; /* Matches the reference HTML */
  background-color: #171f27; /* Solid black background */
  border-radius: 25px 25px 0 0; /* Match screen radius */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px; /* Padding from reference */
  box-sizing: border-box;
  z-index: 101; /* Ensure it's above other content */
  font-size: 14px; /* Slightly larger font */
  font-weight: 500;
  backdrop-filter: blur(100px);
}

.status-bar-left {
  display: flex;
  align-items: center;
}

.status-bar-right {
  display: flex;
  align-items: center;
}

.status-bar-right span {
  margin-left: 8px;
}

#status-bar-energy {
  color: #27ae60; /* --color-accent-green */
}
</style>
