<template>
  <div class="status-bar">
    <div class="status-bar-left">
      <span>{{ currentTime }}</span>
    </div>
    <div class="status-bar-right">
      <span><i class="icon-wifi"></i></span>
      <span><i class="icon-battery"></i></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentTime = ref('10:00');
const wifiIcon = ref('icon-wifi'); // Placeholder for actual icon component/class
const batteryIcon = ref('icon-battery'); // Placeholder for actual icon component/class

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
  background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent background */
  border-radius: 25px 25px 0 0; /* Match screen radius */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px; /* Padding from reference */
  box-sizing: border-box;
  z-index: 101; /* Ensure it's above other content */
  font-size: 14px; /* Slightly larger font */
  font-weight: 500;
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

/* Placeholder for icons - in a real app, you'd use an icon library or SVG */
.icon-wifi::before {
  content: '📶'; /* Wi-Fi symbol */
}

.icon-battery::before {
  content: '🔋'; /* Battery symbol */
}
</style>
