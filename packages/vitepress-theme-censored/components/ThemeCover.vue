<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()

</script>

<template>
  <div class="cover-container">
    <img :src="theme.index?.ThemeCoverURL" alt="ThemeCover" class="cover"/>
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
  height: 85vh;
  border-radius: 10px;

  overflow: hidden;
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


  color: var(--censored-cover-text-color);

  z-index: 1;
}

.title-container h1{
  font-size: 5vw;
  text-shadow: var(--censored-cover-text-shadow-color);
}

.title-container h2{
  font-size: 3vw;
  text-shadow: var(--censored-cover-text-shadow-color);
}
</style>