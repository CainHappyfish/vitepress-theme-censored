<script setup lang="ts">
import { useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { frontmatter } = useData<CensoredThemeConfig>()
</script>

<template>
ABOUT PAGE
  {{ frontmatter.title }}
</template>

<style scoped>

</style>