<script setup lang="ts">
import ThemeAvatar from "./ThemeAvatar.vue";
import {ref} from "vue";
import Links = CensoredTheme.Links;

defineProps<{
  link: Links
}>()

const shape = ref("circle")
</script>

<template>
<a class="container" :href="link?.url">
  <ThemeAvatar :src="link.image" :size="60" :type="shape" style="margin: 10px" />
  <div class="content">
    <h3>{{ link.name }}</h3>
    <p>{{ link?.desc }}</p>
  </div>


</a>
</template>

<style scoped>
.container {
  width: 32%;
  max-width: 340px;
  height: 130px;
  display: flex;
  align-items: center;

  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));
  border-radius: 10px;
  text-decoration: none;
}

.content {
  margin: 10px 10px;
}

@media only screen and (max-width: 600px) {
  .container {
    min-width: 80vw;
  }
}
</style>