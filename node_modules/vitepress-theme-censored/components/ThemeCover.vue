<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
import {onMounted, ref, watchEffect} from "vue";
const { theme } = useData<CensoredThemeConfig>()

// 使用过大的图片会导致加载速度变慢
import DarkIMG from '../assets/ThemeCover2.jpg'
import LightIMG from '../assets/ThemeCover1.jpg'
import PageScroll from "./PageAnchor.vue";

const ThemeCover = ref("")
function UpdateThemeCover() {
  const ThemeColor = document.documentElement.classList;
  ThemeCover.value = ThemeColor.contains("dark")
      ? DarkIMG
      : LightIMG
}

onMounted(() => {
  UpdateThemeCover()
  console.log(ThemeCover.value)

  // 监听主题类的变化
  watchEffect(() => {
    // const ThemeColor = document.documentElement.classList;
    const observer = new MutationObserver(() => {
      UpdateThemeCover();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // 在组件卸载时清除观察者
    return () => {
      observer.disconnect();
    };
  });
})

</script>

<template>
  <div class="cover-container">
    <img :src="ThemeCover" alt="ThemeCover" class="cover"/>
    <PageScroll location="#navbar" class="page-scroll"/>
    <div class="title-container">
      <h1>{{ theme.index?.BlogTitle }}</h1>
      <h2>{{ theme.index?.Signature }}</h2>
    </div>
  </div>
</template>

<style scoped>
.page-scroll {
  position: absolute;
  right: -40%;
}

.cover-container {

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
  max-height: 100vh;
  border-radius: 10px;

  overflow: hidden;
  position: relative;

}

.cover {
  z-index: 1;
  width: 100%;
  object-fit: cover;
}


.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2em 0;

  color: var(--censored-cover-text-color);

  z-index: 2;
}

.title-container h1 {
  font-size: 5vw;
  text-shadow: var(--censored-cover-text-shadow-color);
}

.title-container h2 {
  font-size: 3vw;
  text-shadow: var(--censored-cover-text-shadow-color);
}
</style>