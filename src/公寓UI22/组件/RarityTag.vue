<template>
  <span :class="['rarity-tag', 'rarity-' + getRarityClass(rarity)]">{{ rarity }}</span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  rarity: {
    type: String,
    required: true,
  },
});

const getRarityClass = (rarity: string) => {
  const definedRarities = ['N', 'R', 'SR', 'SSR', 'UR'];
  const upperRarity = String(rarity || 'UNKNOWN').toUpperCase();
  let baseRarity = upperRarity;
  if (!definedRarities.includes(upperRarity)) {
    const match = upperRarity.match(/^(N|R|SR|SSR|UR)/);
    if (match) {
      baseRarity = match[0];
    }
  }
  if (definedRarities.includes(baseRarity)) {
    return baseRarity;
  }
  return 'UNKNOWN';
};
</script>

<style lang="scss" scoped>
$color-bg-dark: #2c3e50;
$rarity-n: #95a5a6;
$rarity-r: #3498db;
$rarity-sr: #9b59b6;
$rarity-ssr: #f1c40f;
$rarity-ur: #c0392b;
$rarity-unknown: #666666;

.rarity-tag {
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  margin-left: 5px;
  display: inline-block;
}

.rarity-N {
  background-color: $rarity-n;
  color: #fff;
}

.rarity-R {
  background-color: $rarity-r;
  color: #fff;
}

.rarity-SR {
  background-color: $rarity-sr;
  color: #fff;
}

.rarity-SSR {
  background-color: $rarity-ssr;
  color: $color-bg-dark;
}

.rarity-UR {
  background-image: linear-gradient(to right, #c0392b, #e74c3c, #f39c12);
  color: #fff;
}

.rarity-UNKNOWN {
  background-color: $rarity-unknown;
  color: #fff;
}
</style>
