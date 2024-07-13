<script setup lang="ts">
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"

import { useAllPosts } from "../../composables";

const { theme, page } = useData<CensoredThemeConfig>()
const posts = useAllPosts()

const tags = () => {
  const tagSet = new Set<string>();

  posts.forEach(post => {
    if (post.tags) {
      console.log(tagSet, post.tags)
      post.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }
  });
  console.log(tagSet);
  return Array.from(tagSet);
}
</script>

<template>
  {{  tags() }}
</template>

<style scoped>

</style>