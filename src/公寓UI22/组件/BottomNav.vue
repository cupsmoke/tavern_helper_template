<template>
  <div class="quick-nav-buttons">
    <div id="quick-top-button"></div>
    <div id="quick-home-button"></div>
    <div id="quick-back-button"></div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this static component yet
</script>

<style lang="scss" scoped>
/* Quick navigation buttons */
.quick-nav-buttons {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Space between buttons */
  z-index: 100;
}

#quick-back-button,
#quick-home-button,
#quick-top-button {
  width: 45px; /* From reference */
  height: 45px; /* From reference */
  background-color: rgba(255, 255, 255, 0.1); /* From reference */
  border-radius: 50%; /* From reference */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.2); /* From reference */
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* From reference */
  transition:
    background-color 0.2s,
    transform 0.2s;
}

#quick-back-button:hover,
#quick-home-button:hover,
#quick-top-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

#quick-back-button:active,
#quick-home-button:active,
#quick-top-button:active {
  transform: scale(0.9);
}

#quick-back-button::before {
  content: '⇦'; /* From reference */
  font-size: 20px; /* From reference */
  color: #ecf0f1; /* From reference */
}

#quick-home-button::before {
  content: '🏠'; /* From reference */
  font-size: 20px; /* From reference */
  color: #ecf0f1; /* From reference */
}

#quick-top-button::before {
  content: '⇧'; /* From reference */
  font-size: 20px; /* From reference */
  color: #ecf0f1; /* From reference */
}
</style>
