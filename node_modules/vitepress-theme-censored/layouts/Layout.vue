<script setup lang="ts">
import { useData } from 'vitepress'
import { CensoredThemeConfig } from "types"
import PageLoading from '../components/PageLoading.vue'
import NavBar from "../components/navBar.vue"
import PageContent from "../components/PageContent.vue";
import Index from "../components/PageIndex.vue"
import SideBar from "../components/SideBar.vue";
import About from "../components/PageAbout.vue"
import NotFound from "../components/404Page.vue";



const { theme, page } = useData<CensoredThemeConfig>()

</script>

<template>
  <NotFound v-if="page.isNotFound"/>
  <div class="container" v-else>
    <PageLoading v-if="theme.pageLoading&&!page.isNotFound"/>
    <PageContent class="page-container">
      <Index v-if="page.frontmatter.layout == 'index'" />
      <NavBar v-else/>
      <About v-if="page.frontmatter.layout == 'about'"/>

    </PageContent>
    <SideBar />

  </div>



</template>

<style scoped>
.body, html {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow: auto;

}

.page-container {
  width: 100%;
  height: 100%;
}
</style>