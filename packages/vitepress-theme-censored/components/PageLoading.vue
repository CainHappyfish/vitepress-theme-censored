<!--https://codepen.io/creotip/pen/myeMvz-->
<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
  setTimeout(() => {
    document.querySelectorAll('.inner div').forEach(div => div.classList.add('done'));

    setTimeout(() => {
      document.querySelectorAll('.inner div').forEach(div => div.classList.add('page'));

      setTimeout(() => {
        const pageLoad = document.querySelector('.pageLoad');
        if (pageLoad) {
          pageLoad.classList.add('off');
        }
        document.body.classList.add('on');
      }, 500);
    }, 500);
  }, 1500);
});
</script>

<template>
  <div class="pageLoad">
    <div class="inner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.inner {
  position: absolute;
  margin: auto;
  width: 50px;
  height: 95px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.inner > div {
  width: 50px;
  height: 50px;
  background-color: var(--censored-text-color);
  border-radius: 100%;
  position: absolute;
  transition: all 0.5s ease;
}

.inner > div:first-child {
  margin-left: -27px;
  animation: one 1.5s linear 1;
}

.inner > div:nth-child(2) {
  margin-left: 27px;
  animation: two 1.5s linear 1;
}

.inner > div:nth-child(3) {
  margin-top: 54px;
  margin-left: -27px;
  animation: four 1.5s linear 1;
}

.inner > div:nth-child(4) {
  margin-top: 54px;
  margin-left: 27px;
  animation: three 1.5s linear 1;
}

@keyframes one {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.3);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes two {
  0% {
    transform: scale(1.4);
  }
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.3);
  }
  75% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.4);
  }
}

@keyframes three {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.4);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes four {
  0% {
    transform: scale(0.3);
  }
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  75% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.3);
  }
}

.inner > div.done {
  margin-left: 0;
  margin-top: 27px;
}

.inner > div.page {
  transform: scale(40);
}

.pageLoad {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--censored-bg-color);
  transition: all 0.3s ease;
  z-index: 99;
}

.pageLoad.off {
  opacity: 0;
  pointer-events: none;
}

h1 {
  text-indent: 5%;
}
</style>
