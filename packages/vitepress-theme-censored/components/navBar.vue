<script setup lang="ts">
import {useData, withBase} from "vitepress";
import { CensoredThemeConfig } from "types"
import SwitchThemeColorButton from "./ThemeColorButton.vue"
import BurgerMenu from "./global/BurgerMenu.vue";

const { theme } = useData<CensoredThemeConfig>()

</script>

<template>
  <div class=navbar>
    <div class="container">
      <BurgerMenu class="burger-menu" />
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

<style scoped lang="scss">
.burger-menu {
  display: none;
  visibility: hidden;
}

.navbar {
  margin-top: 10px;
  width: 100%;
  height: 90px;
  border-radius: 10px;
  z-index: 10;

  display: flex;
  align-items: center;

  background: var(--censored-nav-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));
  transition: background 0.5s ease, color 0.5s ease;

  position: sticky;
  top: 0;
}
.container {
  display: flex;
  align-items: center;
}

.nav {
  position: relative;
  right: 10rem;
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

  color: var(--censored-nav-text-color);

}

.container a:hover {
  border-radius: 10px;
  background: var(--censored-nav-hover-color);
  color: var(--censored-nav-text-hover-color);
  opacity: 0.5; /* 初始透明度 */
}

@media only screen and (max-width: 1400px) {
  .burger-menu {
    display: flex;
    align-items: center;
  }

  .nav {
    display: none;
  }

  .burger-menu {
    display: block;
    visibility: visible;
  }
}


</style>