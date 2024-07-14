<script setup lang="ts">
defineProps<{
  type: string      // default, circle, hexagon
  size: number
  src?: string
}>()
</script>

<template>
  <img :src="src" alt="Avatar" class="default" :class="type" :style="{ width: size + 'px', height: size + 'px' }"/>
</template>

<style scoped>
.default {
  width: 100px;
  height: 100px;
}

.circle {
  border-radius: 50%;
}

.hexagon {
  clip-path: polygon(
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%,
    0% 50%
  );
}
</style>