<script setup lang="ts">
import Cover from "../components/ThemeCover.vue"
import NavBar from "./navBar.vue";
import SideBar from "../components/SideBar.vue"
import PageCard from '../components/global/PostPreviewCard.vue'
import PageCardMini from '../components/global/PostPreviewCardMini.vue'
import Divider from '../components/global/divider.vue'

import {Content, useData} from "vitepress"
import { CensoredThemeConfig } from "types"
const { theme, page, frontmatter } = useData<CensoredThemeConfig>()
import { setupScrollAnimation } from "../utils/blog"

import { useAllPosts, useCategories, usePageUrl } from "../composables"
import {onMounted, onUpdated, ref} from "vue";

const allPosts = useAllPosts();

const DividerStyle = ref("divider-x")
const LatestDivider = ref("LATEST ARTICLE | 最新文章")
const ArticleDivider = ref("BLOGS | 博客文章")


onMounted(() => {
  setupScrollAnimation()
});

onUpdated(() => {
  setupScrollAnimation()
});
</script>

<template>

  <div class="index-cover">
    <Cover />
  </div>
  <NavBar class="scroll-animation"/>
  <div class="index-container">
    <SideBar class="scroll-animation"/>
    <div class="content scroll-animation">
      <Divider :content='LatestDivider' :style="DividerStyle"/>
      <PageCard :post="allPosts[0]"/>
      <Divider :content='ArticleDivider'/>
      <div class="articles">
        <div v-for="(post, index) in allPosts.slice(1)" :key="index">
          <PageCardMini :post="post" />
        </div>

      </div>

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
  margin: 20px 40px;
  width: 1200px;
  height: 1000px;
  min-height: 100vh;
}

.articles {
  width: 100%;

  margin: 30px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}


</style>