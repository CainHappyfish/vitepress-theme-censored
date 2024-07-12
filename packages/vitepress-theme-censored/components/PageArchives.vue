<script setup lang="ts">
// import {useData} from "vitepress";
// import { CensoredThemeConfig } from "types"
// const { theme } = useData<CensoredThemeConfig>()

import SideBar from "./SideBar.vue";
import ArchiveCard from "./global/ArchiveCard.vue";
import {useAllPosts} from "../composables";


const allPosts = useAllPosts();

const sortByTime = (posts, key) => {
  return posts.sort((a, b) => new Date(b[key]) - new Date(a[key]));
};

const items = sortByTime(allPosts, "lastUpdated");
</script>

<template>
  <div class="archive-container">
    <div class="archive">
      <div class="archive-card " v-for="(item, index) in items" >
        <ArchiveCard
            :time="item.lastUpdated"
            :title="item.title"
            :key="index"
            :description="item.excerpt"
            :url="item.url"
        />
      </div>
    </div>
    <SideBar class="side-bar"/>
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