<script setup lang="ts">

import {useData, withBase} from "vitepress";
import {CensoredThemeConfig} from "../../types";
import {onMounted} from "vue";

const { theme, page } = useData<CensoredThemeConfig>()
import Avatar from "../../assets/avatar.gif"
import {ref} from "vue";

const AvatarURL = ref(Avatar)

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
    <a href="#" class="title">{{ page.title }}</a>

    <div class="menu-container" id="menu">
      <img :src="AvatarURL" alt="Avatar" class="menu-avatar"/>
      <h2>{{ theme.user?.name }}</h2>
      <p>{{ theme.user?.describe }}</p>
       <ul>
          <li
          v-for="(item, index) in theme.navBars"
          :key="index"
          class="menu-item"
          >
            <a :href="item.url ? withBase(item.url) : '404' " class="menu-link">{{ item.title }}</a>
          </li>
       </ul>

    </div>
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
  margin: 2em;

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
  transform-origin: 0 0;
  transform: rotate(45deg) translate(-2px, -1px);
}

#burger.is-active span:nth-child(2) {
  transform: rotate(0deg) scale(0.2, 0.2);
  opacity: 0;
}

#burger.is-active span:nth-child(3) {
  transform-origin: 0 100%;
  transform: rotate(-45deg) translate(-2px, 0);
}

.title {
  text-align: center;
  position: relative;

  font-size: 1.5em;
  color: var(--censored-text-color);
}

#menu.is-active {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 94vw;
  height: 80vh;

  background: var(--censored-nav-color);
  border-radius: 20px;

  position: absolute;
  top: 100px;
  left: 0.1rem;

  animation: menuSlideIn 0.5s forwards;

  overflow: auto;
}

.menu-container h2 {
  font-size: 4vh;
  color: var(--censored-text-color);
}

.menu-container p {
  font-size: 2vh;
  color: var(--censored-text-color);
}

.menu-container ul {
  list-style: none;
  text-decoration: none;
  font-size: 3vh;

}

.menu-container ul li {
  padding-bottom: 1vh;
  color: var(--censored-text-color);
}

.menu-container ul li a {
  color: var(--censored-text-color);
}

.menu-avatar {
  margin: 1em;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

@keyframes menuSlideIn {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>