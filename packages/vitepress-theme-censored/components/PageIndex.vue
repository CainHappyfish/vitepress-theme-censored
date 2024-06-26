<script setup lang="ts">
import Cover from "../components/ThemeCover.vue"
import NavBar from "./navBar.vue";
import SideBar from "../components/SideBar.vue"
import PageCard from '../components/global/PostPreviewCard.vue'

import {Content, useData} from "vitepress"
import { CensoredThemeConfig } from "types"
const { theme, page, frontmatter } = useData<CensoredThemeConfig>()
import { RollingLoading } from "../utils/blog"

import { useAllPosts, useCategories, usePageUrl } from "../composables"

const allPosts = useAllPosts();
console.log(allPosts)

RollingLoading()
</script>

<template>

  <div class="index-cover">
    <Cover />
  </div>
  <NavBar id="navbar"/>

  <div class="index-container">
    <SideBar class="scroll-animation"/>
    <div class="content">
      <PageCard :post="allPosts[0]"/>

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
  width: 1400px;
}

.content {
  margin: 20px 20px;
  width: 1200px;
  height: 1000px;
  min-height: 100vh;


}



</style>