<script setup lang="ts">
import Cover from "../components/ThemeCover.vue"
import NavBar from "./navBar.vue";
import SideBar from "../components/SideBar.vue";

import {Content, useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme, page, frontmatter } = useData<CensoredThemeConfig>()
console.log(page.value.title)
</script>

<template>

  <div class="index-cover">
    <Cover />
  </div>
  <NavBar id="navbar"/>

  <div class="index-container">
    <SideBar />
    <div class="content">


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
  position: relative;
  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 1000px;
  width: 1600px;
}

.content {
  margin: 20px 20px;
  width: 1200px;
  height: 1000px;
  min-height: 100vh;

  border-radius: 10px;
  background: var(--censored-nav-color);
}


</style>