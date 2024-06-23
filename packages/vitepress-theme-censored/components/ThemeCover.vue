<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
import {onMounted, ref, watchEffect} from "vue";
const { theme } = useData<CensoredThemeConfig>()

import DarkIMG from '../assets/ThemeCover3.jpg'
import LightIMG from '../assets/ThemeCover1.jpg'

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
    const ThemeColor = document.documentElement.classList;
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
    <div class="title-container">
      <h1>{{ theme.index?.BlogTitle }}</h1>
      <h2>{{ theme.index?.Signature }}</h2>
    </div>
  </div>
</template>

<style scoped>
.cover-container {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  height: 90vh;
  border-radius: 10px;

  overflow: hidden;
  position: relative; /* 新增 */

  z-index: 1;
}

.cover {
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

  color: var(--censored-cover-text-color);

  z-index: 1;
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