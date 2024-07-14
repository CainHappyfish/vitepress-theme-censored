<script setup lang="ts">
defineProps<{
  time: number | string,
  title: string,
  description?: string,
  url?: string
}>()
</script>

<template>
<div class="timeline-container">
  <div class="timeline-item">
    <div class="timeline-icon"></div>
    <a class="timeline-content" :href="url" target="_blank">
      <h3 class="time">{{ time }}</h3>
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
    </a>
  </div>
</div>
</template>

<style scoped>
.timeline-container {
  width: 1000px;
  display: flex;


}

.timeline-item {
  position: relative;
  height: 350px;
  border-left: solid 5px var(--censored-timeline-color);
}

.timeline-icon {
  position: absolute;
  left: -12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--censored-timeline-icon-color);
}

.timeline-content {
  text-decoration: none;
  cursor: pointer;
  margin: 20px;
  padding: 20px;
  position: absolute;
  left: 30px;
  top: -20px;
  width: 900px;
  height: 250px;
  background-color: var(--censored-nav-color);
  color: var(--censored-text-color);
  border-radius: 10px;
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));

}

.timeline-content p {
    font-family: Microsoft YaHei UI Light, sans-serif;
  }

@media only screen and (max-width: 1400px) {
  .timeline-container {
    width: 65vw;
  }

  .timeline-content {
    width: 55vw;
  }

}

@media only screen and (max-width: 1200px) {
  .timeline-container {
    width: 80vw;
  }

  .timeline-content {
    width: 80vw;
  }
}

@media only screen and (max-width: 600px) {
  .timeline-content {
    width: 70vw;
    left: 10px;
  }

  .timeline-content h2 {
    font-size: 1.1em;
  }

  .timeline-content h3 {
    font-size: 0.9em;
  }

  .timeline-content p {
    font-size: 0.8em;
  }
}
</style>