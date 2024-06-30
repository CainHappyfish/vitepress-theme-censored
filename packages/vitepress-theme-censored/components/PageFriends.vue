<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()

import SideBar from "./SideBar.vue";
import ThemeBanner from "./global/ThemeBanner.vue";
import LinkCard from "./global/LinkCard.vue";

</script>

<template>
  <div class="container">
    <SideBar class="side-bar scroll-animation"/>
    <div class="content scroll-animation">
      <ThemeBanner class="banner"/>
      <div class="about">
        <h1>本站信息</h1>
        <p>网站名称：破酥的个人博客</p>
        <p>网站地址：https://cainhappyfish.github.io/vitepress-theme-censored</p>
      </div>
      <div class="friends">
        <LinkCard v-for="(friend, index) in theme.links" :key="index" :link="friend" />

      </div>
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

  .friends {
    min-width: 100vw;
  }

}
</style>