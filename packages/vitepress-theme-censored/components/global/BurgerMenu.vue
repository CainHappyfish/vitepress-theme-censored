<script setup lang="ts">

import {useData, withBase} from "vitepress";
import {CensoredThemeConfig} from "../../types";
import {onMounted} from "vue";

const { theme, page } = useData<CensoredThemeConfig>()

const burgerMenuClick = () => {
  const burgerMenu = document.getElementById('burger');
  const navMenu = document.getElementById('menu');
  console.log(burgerMenu)
  console.log(navMenu)
  if (burgerMenu) {
      console.log("clicked");
      burgerMenu.classList.toggle("is-active");
      navMenu.classList.toggle("is-active");
  }
}

onMounted(() => {
  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', burgerMenuClick);
  }
})
</script>

<template>
  <div id="burger-menu">
    <div id="burger">
       <span></span>
       <span></span>
       <span></span>
    </div>

     <ul id="menu">
        <li
        v-for="(item, index) in theme.navBars"
        :key="index"
        class="menu-item"
        >
          <a :href="item.url ? withBase(item.url) : '404' " class="menu-link">{{ item.title }}</a>
        </li>
     </ul>
    <a href="#" class="title">{{ page.title }}</a>
  </div>
</template>

<style scoped>
#burger-menu {
  display: flex;
  align-items: center;
}

#menu {
  list-style: none;
  display: none;
}

a {
  text-decoration: none;
}

#burger {
  margin: 4vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;


}

#burger span{
  display: block;
  width: 35px;
  height: 5px;
  margin-bottom: 5px;
  position: relative;

  background: var(--censored-text-color);
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0;

  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#burger span {
  transform-origin: left center;
}

#burger.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, -5px);
}

#burger.is-active span:nth-child(2) {
  opacity: 0;
}

#burger.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(-5px, 5px);
}

#menu.is-active {
  display: flex;
  width: 70vw;
  height: 50rem;
  overflow: hidden;

  background: var(--censored-nav-color);
  position: relative;
  top: 65vh;
}
</style>