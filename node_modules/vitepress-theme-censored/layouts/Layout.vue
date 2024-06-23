<script setup lang="ts">
import { useData } from 'vitepress'
import { CensoredThemeConfig } from "types"
import PageLoading from '../components/PageLoading.vue'
import NavBar from "../components/navBar.vue"
import Index from "../components/PageIndex.vue"
import SideBar from "../components/SideBar.vue";



const { theme, site, page } = useData<CensoredThemeConfig>()
</script>

<template>
  <PageLoading />
  <NavBar />
  <Index />
  <SideBar />



</template>

<style scoped>
.body, html {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow: auto;

}
</style>