<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()

import Avatar from "../assets/avatar.gif"
import {ref} from "vue";

const AvatarURL = ref(Avatar)
</script>

<template>
<div class="container">
<img :src="AvatarURL" alt="Avatar" class="side-avatar"/>
<h2>{{ theme.user?.name }}</h2>

</div>
</template>

<style scoped>
.container {
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;


  width: 300px;
  height: 500px;
  max-height: 100vh;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  border-radius: 10px;

  position: sticky;
  top: 90px;

}

.side-avatar {
  margin-top: 2em;
  width:100px;
  height:100px;
  border-radius: 50%;
}
</style>