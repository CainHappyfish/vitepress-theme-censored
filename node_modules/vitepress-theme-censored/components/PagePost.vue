<script setup lang="ts">
import {Content} from "vitepress";
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
import { countWords } from "@homegrown/word-counter"

const { page } = useData<CensoredThemeConfig>()

// import SideBar from "./SideBar.vue";
import {onMounted, onUnmounted, ref} from "vue";
import PageFooter from "./PageFooter.vue";
import Outline from "./global/Outline.vue";
import ArticleInfo from "./global/ArticleInfo.vue";
import PostPageSideIntro from "./global/PostPageSideIntro.vue";

const isSmallScreen = ref(false)
const wordCount = ref(0);

const handleResize = () => {
  isSmallScreen.value = window.innerWidth < 1400;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化检查屏幕宽度

  const contentElement = document.querySelector('.post-content');
  if (contentElement) {
    wordCount.value = countWords(contentElement.textContent || '');
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="page-container">
    <div class="page-content">
      <ArticleInfo
          :title="page.title"
          :word="wordCount"
          :cover="page.frontmatter.cover"
          :tags="page.frontmatter.tags"
          :author="page.frontmatter.author"
          class="page-info"/>
      <Content class="post-content"/>
      <PageFooter />
    </div>
    <div class="right-side" v-if="!isSmallScreen">
      <PostPageSideIntro />
      <Outline />
    </div>
  </div>


</template>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  justify-content: center;

}

.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-side {
  margin-top: 90px;
  position: sticky;
  top: 110px;
  display: flex;
  flex-direction: column;
  height: 80%;
}

.post-content {
  width: 70rem;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));

}


@media only screen and (max-width: 1400px) {
  .post-content {
    width: 100%;
    max-width: 85vw;
  }

}

@media only screen and (max-width: 1600px) {
  .post-content {
    max-width: 70vw;
  }
}


</style>