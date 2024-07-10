<script setup lang="ts">

import {Content} from "vitepress";
</script>

<template>
  <div class="page-container">
    <Content class="content"/>

  </div>


</template>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;

}

.content {
  width: 70rem;
  background: var(--censored-nav-color);
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  color: var(--censored-text-color);

}
</style>