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
        <h2>本站信息</h2>
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
    flex-direction: column;
    align-items: center;
  }

}
</style>