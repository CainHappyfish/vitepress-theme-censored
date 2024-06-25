<script setup lang="ts">
const props = defineProps({
  content: String,
  style: String
})
</script>

<template>
<div class="divider" :class="style">
  <h3> {{ content }}</h3>
</div>
</template>

<style scoped>
.divider {
  font-family: sans-serif;
  line-height: 1.4;
}

.divider-x {

}

.divider-y {

}
</style>