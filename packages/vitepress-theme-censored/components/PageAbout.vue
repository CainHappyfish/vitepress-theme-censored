<script setup lang="ts">
import { useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()

import Avatar from "../assets/avatar.gif"
import {ref} from "vue";
import PageFooter from "./PageFooter.vue";
const AvatarURL = ref(Avatar)
</script>

<template>
  <div class="about-container">
    <div class="infor-content">
      <img :src="AvatarURL" alt="Avatar" class="side-avatar"/>
      <h2>{{ theme.user?.name }}</h2>
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

  display: flex;
  flex-direction: column;
}

.essay {
  margin: 20px;
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
  width: 30%;
  height: 80vh;
  border-radius: 10px;
  background: var(--censored-nav-color);

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