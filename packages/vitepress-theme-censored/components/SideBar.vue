<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()

import Avatar from "../assets/avatar.gif"
import githubIcon from "./icons/github.svg"
import bilibiliIcon from "./icons/bilibili-fill.svg"
import themeIcon from "./icons/theme.svg"
import {ref} from "vue";

const AvatarURL = ref(Avatar)
</script>

<template>
<div class="side-container">
  <img :src="AvatarURL" alt="Avatar" class="side-avatar"/>
  <h2>{{ theme.user?.name }}</h2>
  <p class="intro">{{ theme.user?.describe }}</p>
  <div class="links-info">
    <a class="github" href="https://github.com/CainHappyfish">
      <img :src="githubIcon" alt="GitHub" class=" link-icon"/>
    </a>
    <a class="bilibili" href="https://www.bilibili.com/video/BV1Zu4y1B7DU/?spm_id_from=333.337.search-card.all.click&vd_source=f4ff1713be2d7897decaf0e4e3bc74ad">
      <img :src="bilibiliIcon" alt="bilibili" class=" link-icon"/>
    </a>
    <a class="theme" href="https://github.com/CainHappyfish/vitepress-theme-censored">
      <img :src="themeIcon" alt="theme-censored" class=" link-icon"/>
    </a>
  </div>


</div>
</template>

<style scoped>
.side-container {
  margin-top: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  max-width: 300px;
  height: 500px;
  max-height: 100vh;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));
  border-radius: 10px;

  position: sticky;
  top: 110px;

  font-family: Microsoft YaHei UI Light, sans-serif;
}

.intro {
  font-family: Microsoft YaHei UI Light, sans-serif;
}

.side-avatar {
  margin-top: 2em;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.links-info {
  margin: 20px;
  height: 140px;
  width: 80%;
  border-top: 2px dotted var(--censored-text-color);
  border-bottom: 2px dotted var(--censored-text-color);

  display: flex;
  align-items: center;
  justify-content: center;


}

.link-icon {
  width: 30px;
  height: 30px;
  margin: 5px;
}
</style>