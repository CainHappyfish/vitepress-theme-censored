<script setup lang="ts">
defineProps<{
  title: string,
  description?: string
}>()
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()
</script>

<template>
<div class="info-container">
  <div class="info-content">
<!--    <h2>文章信息</h2>-->
    <h2 style="border-bottom: solid 2px var(--censored-text-color)">{{ title }}</h2>
    <h3>作者：{{ theme.user?.name }}</h3>
    <h3>{{ description }}</h3>
    <h3>字数：</h3>
    <h3>阅读时间：</h3>
    <h3>阅读量：</h3>

  </div>
</div>
</template>

<style scoped>
.info-container {
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  /*align-items: center;*/

  width: 300px;
  max-width: 300px;
  height: 300px;
  max-height: 100vh;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));
  border-radius: 10px;

}

.info-content {
  padding: 20px;
}
</style>