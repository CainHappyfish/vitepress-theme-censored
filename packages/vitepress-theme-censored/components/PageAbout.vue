<script setup lang="ts">
import { useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()

import Avatar from "../assets/avatar.gif"
import {ref} from "vue";
import PageFooter from "./PageFooter.vue";
import githubIcon from "./icons/github.svg";
import bilibiliIcon from "./icons/bilibili-fill.svg";
import themeIcon from "./icons/theme.svg";
const AvatarURL = ref(Avatar)
</script>

<template>
  <div class="about-container">
    <div class="infor-content">
      <img :src="AvatarURL" alt="Avatar" class="side-avatar"/>
      <h2>{{ theme.user?.name }}</h2>
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

    <div class="content">
      <div class="about-content">
        <div class="about-text">
          <h2> ESSAY </h2>
          <h3> {{ theme.user?.essay}} </h3>
        </div>
      </div>
      <div class="about-content">
        <div class="about-text">
          <h2>POWERED BY</h2>
          <p>powered by <a href='https://vitepress.dev' target='_blank' rel='noopener'>Vitepress</a></p>
          <p>theme - <a href='https://github.com/CainHappyfish/vitepress-theme-censored' target='_blank' rel='noopener'>Censored</a></p>
          <p>deployed with <a href='https://github.com/CainHappyfish/vitepress-theme-censored' target='_blank' rel='noopener'>GitHub Page</a></p>
        </div>
      </div>
      <div class="about-content">
        <div class="about-text">
          <h2>INTRODUCTION</h2>
          <p>{{ theme.about?.introduction }}</p>
        </div>
      </div>
      <PageFooter />
    </div>


  </div>
</template>

<style scoped>
.about-container {
  margin: 20px 0;
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;
  border-radius: 0.2em;

  color: var(--censored-text-color);
}

.content {
  margin: 0 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.about-content {
  margin: 10px 10px;
  width: 100%;
  border-radius: 10px;
  background: var(--censored-nav-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));

  display: flex;
  flex-direction: column;
}

.about-text {
  margin: 20px
}

.powered a {
  text-decoration: none;
  color: var(--censored-text-color);
}

.infor-content {
  margin: 0 10px;
  width: 300px;
  height: 400px;
  max-height: 80vh;
  border-radius: 10px;
  background: var(--censored-nav-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));

  display: flex;
  flex-direction: column;
  align-items: center;

  position: sticky;
  top: 110px;
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


@media only screen and (max-width: 600px){
  .about-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .infor-content {
    width: 100vw;
    position: inherit;
  }

  .content {
    width: 90vw;
  }

}
</style>