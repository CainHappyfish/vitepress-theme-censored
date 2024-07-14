<script setup lang="ts">
import {ref} from "vue";
import toTopIcon from "../icons/top.svg"

// const progress = ref()

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

</script>

<template>
  <div class="toTop-container" @click="scrollToTop">
    <img class="toTop-icon" :src="toTopIcon" alt="toTop"/>
  </div>
</template>

<style scoped>


.toTop-container {
  cursor: pointer;
  position: fixed;
  top: 90vh;
  left: 97%;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-toTop-shadow-color));
  display: flex;
  align-items: center;
  justify-content: center;
}

.toTop-icon {
  padding: 5px;
  height: 90%;
  width: 90%;
}

@media only screen and (max-width: 1400px){
  .toTop-container {
    left: 92%;

  }
}

@media only screen and (max-width: 600px){
  .toTop-container {
    left: 85%;

  }
}
</style>