<template>
  <div id="app-container">
    <div id="phone-shell">
      <div id="phone-screen">
        <StatusBar :current-time="building.currentTimeFull" />
        <div v-if="currentView === 'main'" class="app-click-area">
          <button v-for="app in apps" :key="app.name" @click="handleButtonClick(app.name)">
            <span class="icon">{{ app.icon }}</span>
            {{ app.name }}
          </button>
        </div>
        <ApartmentOverview v-if="currentView === 'apartment-overview'" :building="building" @back="showMainView" />
        <Profile v-if="currentView === 'profile'" @back="showMainView" />
        <Skills v-if="currentView === 'skills'" @back="showMainView" />
        <Inventory v-if="currentView === 'inventory'" @back="showMainView" />
        <Residents v-if="currentView === 'residents'" @back="showMainView" />
        <Npcs v-if="currentView === 'npcs'" @back="showMainView" />
        <Tasks v-if="currentView === 'tasks'" @back="showMainView" />
        <Yuzusaka v-if="currentView === 'yuzusaka'" @back="showMainView" />
        <Letters v-if="currentView === 'letters'" @back="showMainView" />
        <BottomNav @to-top="scrollToTop" @go-home="goHome" @go-back="goBack" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Profile from './界面/个人档案.vue'; // Import the new Profile component
import ApartmentOverview from './界面/公寓总览.vue'; // Import the new ApartmentOverview component
import Npcs from './界面/其他角色.vue'; // Import the new Npcs component
import Yuzusaka from './界面/周边地区.vue'; // Import the new Yuzusaka component
import Tasks from './界面/当前任务.vue'; // Import the new Tasks component
import Residents from './界面/房间信息.vue'; // Import the new Residents component
import Skills from './界面/技能图鉴.vue'; // Import the new Skills component
import Inventory from './界面/物品背包.vue'; // Import the new Inventory component
import Letters from './界面/远方来信.vue'; // Import the new Letters component
import BottomNav from './组件/BottomNav.vue'; // Import the new BottomNav component
import StatusBar from './组件/StatusBar.vue'; // Import the new StatusBar component

const building = ref({
  apartmentName: '☘️常春藤公寓',
  currentDay: '1',
  currentTimeFull: '17:30',
  disciplineValue: 75,
  seasonInfo: '初夏',
});

const apps = ref([
  { icon: '🏢', name: '公寓总览' },
  { icon: '👤', name: '个人档案' },
  { icon: '⚡', name: '技能图鉴' },
  { icon: '🎒', name: '物品背包' },
  { icon: '👥', name: '住户名册' },
  { icon: '🎎', name: '柚坂风采' },
  { icon: '✉️', name: '远方来信' },
  { icon: '🤖', name: '其他角色' },
  { icon: '🌟', name: '当前任务' },
]);

const currentView = ref('main');
const viewHistory = ref(['main']);

const handleButtonClick = (buttonName: string) => {
  let nextView = '';
  if (buttonName === '公寓总览') nextView = 'apartment-overview';
  else if (buttonName === '个人档案') nextView = 'profile';
  else if (buttonName === '技能图鉴') nextView = 'skills';
  else if (buttonName === '物品背包') nextView = 'inventory';
  else if (buttonName === '住户名册') nextView = 'residents';
  else if (buttonName === '其他角色') nextView = 'npcs';
  else if (buttonName === '当前任务') nextView = 'tasks';
  else if (buttonName === '柚坂风采') nextView = 'yuzusaka';
  else if (buttonName === '远方来信') nextView = 'letters';

  if (nextView) {
    currentView.value = nextView;
    viewHistory.value.push(nextView);
  } else {
    console.log(`${buttonName} clicked`);
  }
};

const showMainView = () => {
  currentView.value = 'main';
  viewHistory.value = ['main'];
};

const scrollToTop = () => {
  const activeView = document.querySelector('.view');
  if (activeView) {
    activeView.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const goHome = () => {
  showMainView();
};

const goBack = () => {
  if (viewHistory.value.length > 1) {
    viewHistory.value.pop();
    currentView.value = viewHistory.value[viewHistory.value.length - 1];
  }
};
</script>

<style lang="scss" scoped>
#app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px; /* Add padding to show the shadow */
  box-sizing: border-box;
}

#phone-shell {
  width: 95vw;
  max-width: 420px; /* Matches the reference HTML */
  height: 540px; /* Matches the reference HTML */
  background-color: #111;
  border: 4px solid #222;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 4px;
  box-sizing: border-box;
}

#phone-screen {
  width: 100%;
  height: 100%;
  background-color: #2c3e50; /* Dark background from reference */
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  color: #ecf0f1; /* Light text color from reference */
  padding-bottom: 40px; /* Space for navigation buttons */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.app-click-area {
  flex-grow: 0; /* Allow this area to take up remaining space */
  display: grid; /* Use grid for app icons */
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); /* From reference */
  gap: 20px 0px; /* From reference, ensures both row and column gap */
  padding: 20px 10px; /* From reference */
  box-sizing: border-box;
  overflow-y: auto; /* Add scroll if content exceeds height */
  padding-top: 50px; /* Add padding to avoid overlap with status bar */
  text-align: center;
}

.app-click-area button {
  width: 80px; /* From reference */
  height: 70px; /* From reference */
  margin: 0 auto; /* Center the button */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ecf0f1; /* Light text color from reference */
  font-size: 12px; /* From reference */
  cursor: pointer;
  word-break: break-all;
  transition: transform 0.2s;
  background-color: transparent; /* No background for app icons */
  border: none; /* No border for app icons */
  border-radius: 0; /* No border-radius for app icons */
}

.app-click-area button:hover {
  transform: scale(1.05); /* From reference */
}

.icon {
  font-size: 32px; /* From reference */
  margin-bottom: 5px; /* From reference */
}
</style>

<style lang="scss">
/* Global Scrollbar Styles */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.2);
}
</style>
