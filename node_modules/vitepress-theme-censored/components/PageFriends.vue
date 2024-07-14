<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()

import SideBar from "./SideBar.vue";
import ThemeBanner from "./global/ThemeBanner.vue";
import LinkCard from "./global/LinkCard.vue";
import {computed, nextTick, onMounted, onUnmounted, ref, watch} from "vue";
import { setupScrollAnimation } from "../utils/blog";
import Pagination from "./global/Pagination.vue";
import PageFooter from "./PageFooter.vue";



const itemsPerPage = ref(6);
const currentPage = ref(1);
const reRenderKey = ref(0); // 用于重新渲染的 key

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  console.log("start: ", start, " end: ", end, " paginatedItems: ", theme.value?.links.slice(start, end));
  return theme.value?.links.slice(start, end) || [];
});

const handlePageChange = async (page: number) => {
  currentPage.value = page;
  console.log(paginatedItems);
  reRenderKey.value++;
  await nextTick(); // 等待DOM更新
  setupScrollAnimation()
};

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

onMounted(async () => {
  await nextTick(); // 等待DOM更新
  setupScrollAnimation()
})

watch(currentPage, async () => {
  await nextTick();
  setupScrollAnimation()
});

</script>

<template>
  <div class="container">
    <SideBar class="side-bar scroll-animation" v-if="!isSmallScreen"/>
    <div class="content scroll-animation">
      <ThemeBanner class="banner"/>
      <div class="about scroll-animation">
        <h2>本站信息</h2>
        <p>网站名称：破酥的个人博客</p>
        <p>网站地址：https://cainhappyfish.github.io/vitepress-theme-censored</p>
      </div>
      <div class="friends" :key="reRenderKey">
        <LinkCard v-for="(friend, index) in paginatedItems"
                  :key="index + currentPage || friend.name"
                  :link="friend"
                  class="scroll-animation"
        />
      </div>
      <Pagination
        :PageNo="currentPage"
        :pageSize="itemsPerPage"
        :total="theme.links?.length"
        :continues="5"
        @update:PageNo="handlePageChange"
      />
      <PageFooter />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about {
  margin: 20px 20px;
  padding: 0 20px;
  width: 720px;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));
  border-radius: 10px;
}

.friends {
  padding: 0 20px;

  width: 720px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 10px;
}

@media only screen and (max-width: 1400px) {
  .side-bar {
    display: none;
    visibility: hidden;
  }

  .banner {
    min-width: 100vw;
  }
  .about {
    max-width: 80vw;
  }
  .friends {
    min-width: 100vw;
    justify-content: center;
  }

}

@media only screen and (max-width: 600px) {
  .friends {
    overflow-x: hidden;
    max-width: 81vw;
    flex-direction: column;
    align-items: center;
  }
}
</style>