<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
import {formatDate} from "../utils/client";
const { theme } = useData<CensoredThemeConfig>()

</script>

<template>
  <div class="foot-container">
    <div class="foot-copyright">
      © {{ theme.footer?.copyrightYear }} - {{ formatDate(new Date(), "YYYY") }} . {{ theme.user?.name }}
    </div>
    <div class="foot-powered">
      powered by <a href='https://vitepress.dev' target='_blank' rel='noopener'>Vitepress</a>
      | theme - <a href='https://github.com/CainHappyfish/vitepress-theme-censored' target='_blank' rel='noopener'>Censored</a>
    </div>
  </div>
</template>

<style scoped>
.foot-container {
  margin: 20px 0;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  width: 100%;
  border-radius: 20px;

  font-family: "Microsoft YaHei UI Light", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.foot-copyright {
  margin: 0.5em 0;
}
.foot-powered {
  margin: 0.5em 0;
}
</style>