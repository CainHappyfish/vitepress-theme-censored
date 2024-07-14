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
import toTop from "../components/global/toTop.vue"

import { useLoadingStore } from "../stores/loading"

import {onMounted, onUnmounted, watch} from "vue"
import NavBar from "../components/navBar.vue";

import { setupScrollAnimation } from "../utils/blog"
import PagePost from "../components/PagePost.vue";
import TESTPAGE from "../components/global/TESTPAGE.vue";

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
  observer = observeClassChanges();
  loadCounter();
  setupScrollAnimation();

  document.addEventListener('copy', function(event) {
    // 获取选中的文本
    let selection = window.getSelection().toString();

    // 添加版权信息
    const copyrightInfo = `
--------------------------------------------------------------------

© 2024 ${theme.value.user?.name}. All rights reserved.
This content is shared under the CC BY-NC-SA 4.0 protocol (Non-Commercial)
Article from ${theme.value.url}`;
    const modifiedSelection = selection + copyrightInfo;

    // 修改剪切板内容
    event.clipboardData.setData('text/plain', modifiedSelection);
    event.preventDefault();
  });
});

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
  <link rel="icon" href="../assets/favicon.ico" />
  <NotFound v-if="page.isNotFound"/>
  <PageLoading v-if="theme.pageLoading && !page.isNotFound " :key="LoadStore.pageLoadingKey"/>
  <div class="layout-container" v-if="!page.isNotFound">
    <Index v-if="page.frontmatter.layout == 'index'" />
    <PageContent class="page-container" v-else>
      <NavBar />
      <About v-if="page.frontmatter.layout == 'about'"/>
      <Friends v-else-if="page.frontmatter.layout == 'friends'"/>
      <Archives v-else-if="page.frontmatter.layout == 'archives'"/>
      <TESTPAGE v-else-if="page.frontmatter.layout == 'test'"/>
      <PagePost v-else/>
    </PageContent>
  </div>
  <toTop class="toTop"/>
</template>


<style scoped>
html, body {
  max-height: 100%;
  overflow-x: hidden;
}

.layout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-container {
  width: 100%;
  height: 100%;
}


</style>