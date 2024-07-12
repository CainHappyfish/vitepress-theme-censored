<script setup lang="ts">
import {Content} from "vitepress";
import SideBar from "./SideBar.vue";
import {onMounted, onUnmounted, ref} from "vue";
import PageFooter from "./PageFooter.vue";

const isSmallScreen = ref(false);

const handleResize = () => {
  isSmallScreen.value = window.innerWidth < 1400;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化检查屏幕宽度
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="page-container">
    <Content class="content"/>
    <SideBar class="side-bar" v-if="!isSmallScreen"/>
  </div>
  <PageFooter />

</template>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  justify-content: center;

}

.content {
  width: 70rem;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));

}

@media only screen and (max-width: 1400px) {
  .content {
    width: 100%;
    max-width: 85vw;
  }


}
</style>