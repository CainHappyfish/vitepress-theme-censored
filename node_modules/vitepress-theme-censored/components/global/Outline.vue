<script setup lang="ts">
// import {useData, withBase} from "vitepress";
// import { CensoredThemeConfig } from "types"
// const { theme } = useData<CensoredThemeConfig>()
import { Title } from "utils/outline"
import {onMounted, ref} from "vue";
import OutlineItem from "./OutlineItem.vue";

const getTitle = (): Title[] => {
  const headers = document.querySelectorAll('.post-content :where(h1,h2,h3,h4,h5,h6)');
  const titles: Title[] = [];

  headers.forEach(header => {
    const level = Number(header.tagName[1]);
    const scrollTop = header.getBoundingClientRect().top + window.scrollY;
    const title: Title = {
      text: header.textContent.trim(),
      id: header.id,
      level,
      children: [],
      scrollTop
    };

    if (titles.length === 0) {
      titles.push(title);
    } else {
      let lastItem: Title = titles[titles.length - 1];

      // Find the correct parent for the current title
      while (lastItem.level >= title.level && lastItem.parent) {
        lastItem = lastItem.parent;
      }

      if (lastItem.level < title.level) {
        lastItem.children.push(title);
        title.parent = lastItem;
      } else {
        titles.push(title);
      }
    }
  });

  const cleanTitles = (titles: Title[]): Title[] => {
    return titles.map(title => {
      const { parent, ...rest } = title;
      if (rest.children.length > 0) {
        rest.children = cleanTitles(rest.children);
      }
      return rest;
    });
  };

  return cleanTitles(titles);
};

// console.log(JSON.stringify(getTitle(), null, 2));

const titles = ref()
const level = ref(0)

const progress = ref("0%")

window.addEventListener("scroll", () => {
  progress.value = parseInt(
      String((window.scrollY / document.documentElement.scrollHeight) * 100)
  ) + "%"

})

onMounted(() => {
  titles.value = getTitle();
})



</script>

<template>
  <div class="outline-container">
    <div class="outline-header">
      <h2 class="outline-title">目录</h2>
      <h2 class="progress">{{ progress }}</h2>
    </div>
    <div class="outline-content">
      <OutlineItem :children="titles" class="outline-root" :level="level" :style="{ marginLeft: `${level * 20}px` }"/>
    </div>
  </div>
</template>

<style scoped>
.outline-container {

  z-index: 2;

  display: flex;
  flex-direction: column;


  width: 300px;
  max-width: 300px;
  max-height: 500px;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));
  border-radius: 10px;





}

.outline-content {
  overflow: auto;
  width: 90%;
  display: flex;
  margin: 0 20px;

}

.outline-header {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 20px;
  border-bottom: solid 2px var(--censored-text-color);
  color: var(--censored-text-color);
}

.progress {
  position: relative;
  left: 140px;
}

.outline-container ul {
  list-style: none;
  text-decoration: none;
}

.outline-container ul li a {
  text-decoration: none;

}

.outline-root {
  position: relative;
  padding: 0 0 0 10px;
  margin: 5px 0;
}

</style>