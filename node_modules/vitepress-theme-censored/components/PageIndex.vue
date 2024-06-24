<script setup lang="ts">
import Cover from "../components/ThemeCover.vue"
import NavBar from "./navBar.vue";
</script>

<template>
  <div class="index-cover">
    <Cover />

    <NavBar />
  </div>
</template>

<style scoped>
.index-cover {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>