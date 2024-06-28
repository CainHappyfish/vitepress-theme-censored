<script setup lang="ts">
import { defineProps } from 'vue';

// 定义接受的 props，包含 location 属性，用于指定目标滚动位置的选择器
const props = defineProps({
  location: String
});

// 处理滚动的函数
const handleScroll = (event: Event) => {
  event.preventDefault(); // 阻止默认的锚点点击行为
  const target = document.querySelector(props.location); // 根据 location prop 获取目标元素
  if (target) {
    const scrollTargetY = target.getBoundingClientRect().top + window.scrollY; // 计算目标元素的滚动位置
    const scrollDuration = 400; // 滚动动画的持续时间（毫秒）
    const startY = window.scrollY; // 起始滚动位置
    const startTime = performance.now(); // 获取动画开始的时间

    // 定义 easeInOutQuad 缓动函数
    const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    // 动画滚动函数
    const animateScroll = () => {
      const currentTime = performance.now(); // 获取当前时间
      const time = Math.min(1, ((currentTime - startTime) / scrollDuration)); // 计算时间比例
      const easedTime = easeInOutQuad(time); // 计算缓动时间

      // 滚动到计算出的当前位置
      window.scrollTo(0, Math.ceil((easedTime * (scrollTargetY - startY)) + startY));

      // 如果已经滚动到目标位置或动画时间结束，则停止动画
      if (window.scrollY !== scrollTargetY && time < 1) {
        requestAnimationFrame(animateScroll); // 继续下一帧的动画
      }
    };

    requestAnimationFrame(animateScroll); // 开始动画滚动
  }
};
</script>


<template>
<section id="section10" class="demo">
  <a href="#" @click="handleScroll"><span></span></a>
</section>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Josefin+Sans:300,400);
* {
  margin: 0;
  padding: 0;
}

section {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 99;
}

.demo a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  transform: translate(0, -50%);
  color: #fff;
  font : normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
}

.demo a:hover {
  opacity: .5;
}

#section10 a {
  padding-top: 60px;
}
#section10 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2rem;
  height: 3rem;
  margin-left: -15px;
  border: 2px solid #fff;
  border-radius: 50px;
  box-sizing: border-box;
}
#section10 a span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: '';
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media only screen and (max-width: 600px) {
  #section10 a span {
    width: 5vw;
    height: 9vw;
  }

  .demo a{
    font-size: 2vw;
  }

  @keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 3.5vw);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
}

</style>