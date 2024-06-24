<script setup lang="ts">
import { useData} from "vitepress";
import { CensoredThemeConfig } from "types"
import SideBar from "./SideBar.vue";
import NavBar from "./navBar.vue";
const { frontmatter } = useData<CensoredThemeConfig>()
</script>

<template>
  <NavBar />
  <div class="about-container">
    <div class="content">
      <SideBar />

    </div>
  </div>
  {{ frontmatter.name }}
</template>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-height: 100vh;

  border-radius: 0.2em;
}
.content {
  width: 80%;
}

</style>