<script setup lang="ts">
// import {useData} from "vitepress";
// import { CensoredThemeConfig } from "types"
// const { theme } = useData<CensoredThemeConfig>()

import SideBar from "./SideBar.vue";
import ArchiveCard from "./global/ArchiveCard.vue";
import {useAllPosts} from "../composables";
import {onMounted, onUnmounted, ref, watch} from "vue";


const allPosts = useAllPosts();

const sortByTime = (posts, key) => {
  return posts.sort((a, b) => new Date(b[key]) - new Date(a[key]));
};

const items = sortByTime(allPosts, "lastUpdated");

const isSmallScreen = ref(false);

const handleResize = () => {
  isSmallScreen.value = window.innerWidth < 600;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化检查屏幕宽度
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
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
    <SideBar class="side-bar" v-if="!isSmallScreen"/>
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

@media only screen and (max-width: 800px) {
  .archive-card {
    width: 90vw;
  }
}
</style>