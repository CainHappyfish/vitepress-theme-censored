<script setup lang="ts">
import Cover from "../components/ThemeCover.vue"
import NavBar from "./navBar.vue";
import PageScroll from "../components/PageAnchor.vue"
import SideBar from "../components/SideBar.vue";
</script>

<template>
  <div class="index-cover">
    <Cover />
    <PageScroll location="#navbar" class="page-scroll"/>
    <NavBar id="navbar"/>
    <div class="index-container">
      <SideBar />

    </div>
  </div>
</template>

<style scoped>
.index-cover {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.index-container {
  display: flex;
  height: 1000px;
  width: 80%;


}

.page-scroll {
  position: relative;
  top:50%;

}
</style>