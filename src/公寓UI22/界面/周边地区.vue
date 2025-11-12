<template>
  <div class="view">
    <div v-if="!selectedLocation">
      <PageHeader title="🚶 柚坂风采" @back="$emit('back')" />

      <TabNav :tabs="areas" v-model:activeTab="activeArea" />

      <div class="locations-grid">
        <div
          v-for="location in locationsForActiveArea"
          :key="location.name"
          class="location-card"
          @click="showLocationDetail(location)"
        >
          <div class="location-header">
            <div class="location-name">{{ location.name }}</div>
          </div>
          <div class="location-info">
            <!-- You can add more info here if needed -->
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <PageHeader :title="selectedLocation.name" @back="selectedLocation = null" />
      <div class="card location-description">
        <p>{{ selectedLocation.description }}</p>
      </div>
      <CharacterDetail v-for="character in selectedLocation.characters" :key="character.name" :character="character" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Location, locations } from '../数据/locations';
import CharacterDetail from '../组件/CharacterDetail.vue';
import PageHeader from '../组件/PageHeader.vue';
import TabNav from '../组件/TabNav.vue';

defineEmits(['back']);

const areas = ref(Object.keys(locations));
const activeArea = ref(areas.value[0] || '');

const selectedLocation = ref<Location | null>(null);

const locationsForActiveArea = computed(() => {
  return locations[activeArea.value] || [];
});

const showLocationDetail = (location: Location) => {
  selectedLocation.value = location;
};
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
  padding-top: 30px;
}

.locations-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
}

.location-card {
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

.location-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

.location-header {
  padding: 12px;
  background-color: $color-accent-blue;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.location-name {
  font-size: 18px;
  font-weight: 600;
}

.location-info {
  padding: 12px;
  text-align: center;
}

.card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.location-description {
  font-style: italic;
  color: #ddd;
}

@media (max-width: 600px) {
  .locations-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
