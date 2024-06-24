<script setup lang="ts">
import {useData} from 'vitepress'
import { CensoredThemeConfig } from "types"
import PageLoading from '../components/PageLoading.vue'
// import ThemeLoading from "../components/ThemeLoading.vue"
import NavBar from "../components/navBar.vue"
import PageContent from "../components/PageContent.vue"
import Index from "../components/PageIndex.vue"
import About from "../components/PageAbout.vue"
import NotFound from "../components/404Page.vue"

import {onMounted, onUnmounted, ref, watch} from "vue"


const { theme, page } = useData<CensoredThemeConfig>()

const pageLoadingKey = ref(0)

// 主题颜色变化时重新挂在PageLoading
const observeClassChanges = () => {
  const observer = new MutationObserver(() => {
    pageLoadingKey.value++;
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
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});


watch(page, () => {
  // 每次页面发生变化时，重新挂载PageLoading组件
  pageLoadingKey.value++
})

</script>

<template>
  <NotFound v-if="page.isNotFound"/>
  <div class="container" v-else>
    <PageLoading v-if="theme.pageLoading && !page.isNotFound" :key="pageLoadingKey"/>
    <PageContent class="page-container">
      <Index v-if="page.frontmatter.layout == 'index'" />
      <About v-if="page.frontmatter.layout == 'about'"/>
    </PageContent>
  </div>
</template>


<style scoped>
.page-container {
  width: 100%;
  height: 100%;


}
</style>