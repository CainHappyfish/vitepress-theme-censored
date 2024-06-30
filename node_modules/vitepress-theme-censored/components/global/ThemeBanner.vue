<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()
</script>

<template>
  <div class="container">
    <div class="content">
      <img :src="theme.banner?.bgurl" alt="banner" class="banner-img"/>
      <div class="title">
        <h1 >FRIENDS</h1>
        <h2 >{{ theme.banner?.bannerText }}</h2>
      </div>
      <div class="site-intro"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.banner-img  {
  width: 100%;
  border-radius: 10px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  margin: 20px;
  position: absolute;
  top: 8rem;
}

.title h1 {
    font-size: 3rem
  }

.title h2 {
  width: 400px;
  font-size: 2rem
}

@media only screen and (max-width: 1400px) {
  .container {
    margin: 20px 0;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  .banner-img  {
    width: 92vw;
  }
  .title {
    width: 70vw;
  }

  .title h1 {
    font-size: 7vw;
  }

  .title h2 {
    font-size: 4vw;
  }
}
</style>