<script setup lang="ts">
import { useData } from 'vitepress'
import { CensoredThemeConfig } from "types"
import NavBar from "../components/navBar.vue"


const { theme, site } = useData<CensoredThemeConfig>()
</script>

<template>
  <NavBar />
</template>

<style scoped>

</style>