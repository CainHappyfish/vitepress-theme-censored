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
import PageFooter from "./PageFooter.vue";

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
  <NavBar class="scroll-animation" id="navbar"/>
  <div class="index-container">
    <SideBar class="scroll-animation"  id="index-sidebar"/>
    <div class="content scroll-animation">
      <Divider :content='LatestDivider' :style="DividerStyle" class="divider"/>
      <PageCard :post="allPosts[0]"/>
      <Divider :content='ArticleDivider' class="scroll-animation divider" />
      <div class="articles">
        <div v-for="(post, index) in allPosts.slice(1)" :key="index">
          <PageCardMini :post="post" class="page-card"/>
        </div>

      </div>
      <PageFooter />
    </div>

  </div>
</template>

<style scoped>
.index-cover {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;


}

.index-container {
  position: relative;

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

/* Mobile Styles */
@media only screen and (max-width: 640px) {
  #index-sidebar {
    display: none;
  }

  .index-container {
    width: 100vw;
    height: 100vh;
  }

  .divider {
    display: none;
  }

}

/* Mobile Styles */
@media only screen and (max-width: 1400px) {

  #index-sidebar {
    display: none;
  }

  .index-container {
    width: 94vw;
    height: 100vh;
  }

  .divider {
    display: none
  }

}



</style>