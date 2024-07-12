<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
// const { theme } = useData<CensoredThemeConfig>()

import SideBar from "./SideBar.vue";
import ArchiveCard from "./global/ArchiveCard.vue";
import {useAllPosts} from "../composables";


const allPosts = useAllPosts();

console.log(allPosts)
</script>

<template>
  <div class="archive-container">
    <div class="archive">
      <div class="archive-card" v-for="(item, index) in allPosts"  >
        <ArchiveCard :time="item.lastUpdated" :title="item.title" :key="index" :description="item.excerpt" :url="item.url"/>
      </div>
    </div>
    <SideBar />
  </div>
</template>

<style scoped>
.archive-container {
  margin: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.archive {
  margin: 0 20px;
  display: flex;
  flex-direction: column;
}

</style>