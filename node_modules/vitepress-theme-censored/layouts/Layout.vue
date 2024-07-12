<script setup lang="ts">
import { useData } from 'vitepress'
import { CensoredThemeConfig } from "types"
import PageLoading from '../components/PageLoading.vue'
import PageContent from "../components/PageContent.vue"
import Index from "../components/PageIndex.vue"
import About from "../components/PageAbout.vue"
import Friends from "../components/PageFriends.vue";
import NotFound from "../components/404Page.vue"
import Archives from "../components/PageArchives.vue"

import { useLoadingStore } from "../stores/loading"

import {onMounted, onUnmounted, watch} from "vue"
import NavBar from "../components/navBar.vue";

import { setupScrollAnimation } from "../utils/blog"
import PagePost from "../components/PagePost.vue";

const LoadStore = useLoadingStore()



const { theme, page } = useData<CensoredThemeConfig>()


setupScrollAnimation()


function loadCounter() {
  LoadStore.pageLoadingKey++
}

// 主题颜色变化时重新挂载PageLoading
const observeClassChanges = () => {
  const observer = new MutationObserver(() => {
    loadCounter()
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })

  return observer
}

let observer: MutationObserver

onMounted(() => {
  observer = observeClassChanges()
  loadCounter()
  setupScrollAnimation()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

watch(page, () => {
  // 每次页面发生变化时，重新挂载PageLoading组件
  loadCounter()
})

</script>

<template>
  <NotFound v-if="page.isNotFound"/>
  <PageLoading v-if="theme.pageLoading && !page.isNotFound " :key="LoadStore.pageLoadingKey"/>
  <div class="container">
    <Index v-if="page.frontmatter.layout == 'index'" />
    <PageContent class="page-container" v-else>
      <NavBar />
      <About v-if="page.frontmatter.layout == 'about'"/>
      <Friends v-else-if="page.frontmatter.layout == 'friends'"/>
      <Archives v-else-if="page.frontmatter.layout == 'archives'"/>
      <PagePost v-else/>
    </PageContent>
  </div>
</template>


<style scoped>
html, body {
  overflow-x: hidden;
}
.page-container {
  width: 100%;
  height: 100%;
}
</style>