<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()

import Avatar from "../../assets/avatar.gif"
import {ref} from "vue";

const AvatarURL = ref(Avatar)
</script>

<template>
<div class="side-container">
  <img :src="AvatarURL" alt="Avatar" class="side-avatar"/>
  <h2>{{ theme.user?.name }}</h2>
  <p class="intro">{{ theme.user?.describe }}</p>


</div>
</template>

<style scoped>
.side-container {
  margin: 0 0 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  max-width: 300px;
  height: 300px;
  max-height: 100vh;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));
  border-radius: 10px;

  position: sticky;
  top: 110px;

}

.side-avatar {
  margin-top: 2em;
  width:100px;
  height:100px;
  border-radius: 50%;
}

.intro {
  font-family: Microsoft YaHei UI Light, sans-serif;
  padding: 10px;
  text-align: center;
}
</style>