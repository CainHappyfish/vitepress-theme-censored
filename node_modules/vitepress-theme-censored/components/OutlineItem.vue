<!--参考https://www.cnblogs.com/zhiyiYo/p/16003255.html-->
<!--
v0.0.0 待实现
自动高亮选中当前正在阅读的章节
自动展开当前正在阅读的章节的子标题，并隐藏其他章节的子标题
显示阅读进度
-->

<script setup lang="ts">
import { Title } from "utils/outline"
import {ref} from "vue";
defineProps<{
  children: Title[],
  level?: number
}>();

const progress = ref()

window.addEventListener("scroll", () => {
  progress.value = parseInt(
      String((window.scrollY / document.documentElement.scrollHeight) * 100)
  ) + "%"

})

const scrollToView = (id: string) => {
  const target = document.getElementById(id);
  if (target) {
    const scrollTargetY = target.getBoundingClientRect().top + window.scrollY - 100; // 计算目标元素的滚动位置, 100为导航栏高度往下10px
    const scrollDuration = 400; // 滚动动画的持续时间（毫秒）
    const startY = window.scrollY; // 起始滚动位置
    // console.log('scroll start', startY, scrollDuration);
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
  <ul class="outline-item">
    <li v-for="child in children" :key="child.id" class="outline-children" :style="{ marginLeft: `${(child.level - 1) * 20}px` }">
      <a :href="`#${child.id}`" @click.prevent="scrollToView(child.id)">{{ child.text }}</a>
<!--      {{ child.text }}-->
      <OutlineItem v-if="child.children.length" :children="child.children" :level="child.level"></OutlineItem>
    </li>
  </ul>
</template>

<style scoped>
.outline-item {
  text-decoration: none;
  color: var(--censored-text-color);
  padding-left: 0;
}

.outline-item li {
  list-style: none;
}

.outline-item li a {
  color: var(--censored-text-color);
  text-decoration: none;

}

.outline-children {
  margin: 5px 0;
}

.current-title {
  background-color: var(--censored-current-title-color);
}
</style>