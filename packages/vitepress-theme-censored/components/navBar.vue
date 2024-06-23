<script setup lang="ts">
import {useData, withBase} from "vitepress";
import { CensoredThemeConfig } from "types"
import SwitchThemeColorButton from "./ThemeColorButton.vue"
import {ref} from "vue";
const { theme } = useData<CensoredThemeConfig>()

</script>

<template>
  <div class=navbar>
    <div class="container">
      <nav class="nav">
        <ul>
          <li
          v-for="(item, index) in theme.navBars"
          :key="index"
          >
            <a :href="item.url ? withBase(item.url) : '404' ">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <SwitchThemeColorButton style="position: absolute; right: 50px"/>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: 120px;
  border-radius: 10px;

  display: flex;
  align-items: center;

  background: var(--cencored-nav-color);
  transition: background 0.5s ease, color 0.5s ease;

}

.container ul{
  display: flex;
}

.container li {
  list-style: none;
  padding-left: 12px;
}

.container a {
  padding: 5px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  text-decoration: none;
  cursor: pointer;

  background: transparent;
  transition: background 0.5s ease, opacity 0.5s ease, color 0.5s ease;

  color: var(--cencored-nav-text-color);

}

.container a:hover {
  border-radius: 10px;
  background: var(--cencored-nav-hover-color);
  color: var(--cencored-nav-text-hover-color);
  opacity: 0.5; /* 初始透明度 */
}


</style>