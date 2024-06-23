<script setup lang="ts">
import { useData } from 'vitepress'
import { CensoredThemeConfig } from "types"
import PageLoading from '../components/PageLoading.vue'
import NavBar from "../components/navBar.vue"


const { theme, site, page } = useData<CensoredThemeConfig>()
</script>

<template>
  <PageLoading />
  <NavBar />


</template>

<style scoped>

</style>