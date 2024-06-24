<script setup lang="ts">
import {onMounted, ref} from "vue";
import SunURL from "./icons/sun.svg"
import MoonURL from "./icons/moon.svg"
import { useData } from 'vitepress'
import { CensoredThemeConfig } from "types"
const { theme } = useData<CensoredThemeConfig>()



function SwitchThemeColor() {
  const ThemeColor = document.documentElement.classList

  ThemeColor.toggle("dark")
  ThemeColor.toggle("light")
  updateSwitchSvgURL()
}

const SwitchSvgURL = ref("");

function updateSwitchSvgURL() {
  const ThemeColor = document.documentElement.classList;
  SwitchSvgURL.value = ThemeColor.contains("dark") ? MoonURL : SunURL
  theme.value.themeLoading = true
}

onMounted(() => {
  updateSwitchSvgURL()
})
</script>

<template>
  <div class="switch">
    <div class="circle" @click="SwitchThemeColor">
      <img :src="SwitchSvgURL" alt="ThemeColor" style="width: 100%; height: 100%;" />
    </div>
  </div>
</template>

<style scoped>
.circle {
  border-radius: 50%;
  width: 50px;
  height: 50px;

  background: var(--censored-btn-stc-bg-color);
  transition: background 0.5s ease;
  z-index: 9;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

</style>