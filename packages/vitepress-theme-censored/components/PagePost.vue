<script setup lang="ts">
import {Content} from "vitepress";
import SideBar from "./SideBar.vue";
</script>

<template>
  <div class="page-container">
    <Content class="content"/>
    <SideBar class="side-bar" />
  </div>


</template>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  justify-content: center;

}

.content {
  width: 70rem;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));

}

@media only screen and (max-width: 1400px) {
  .content {
    width: 100%;
    max-width: 90vw;
  }

  .side-bar {
    display: none;
    visibility: hidden;
  }
}
</style>