<script setup lang="ts">
import Cover from "../components/ThemeCover.vue"
import NavBar from "./navBar.vue";
import PageScroll from "../components/PageAnchor.vue"
</script>

<template>
  <div class="index-cover">
    <Cover />
    <PageScroll location="#navbar"/>
    <NavBar id="navbar"/>
    <div class="index-container">

    </div>
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

.index-container {
  display: flex;
  height: 1000px;
  width: 100%;
  background: var(--censored-c-dawn-3);

}
</style>