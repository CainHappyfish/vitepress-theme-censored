---
title: Vue3中的DOM问题
layout: page
author: C4iN
cover: https://pic.imgdb.cn/item/66938d79d9c307b7e995e9b9.jpg
tags:
 - 前端
 - TypeScript
 - vue3

---

最近在写一个自定义首页的小玩意，写的过程中遇到子组件根据父组件传递的props来确定大小无法正确使用的问题，稍微研究了一下是DOM的加载问题，在这里记录下。

<!--more-->

~~突然发现好久没改博客了orz~~

# 问题描述

vue3使用`querySelector`等获取元素只能在`onMounted`之类DOM挂载时获取

```typescript
const handleSize = () => {
  const board = document.getElementById("board")
  if (board) {
    CanvasWidth.value = board.offsetWidth - 40
    CanvasHeight.value = board.offsetHeight - 40
    console.log("boardX: ", CanvasWidth.value, "boardY: ", CanvasHeight.value)
  }
}

onMounted(() => {
  handleSize()
  // console.log("boardX: ", CanvasWidth.value, "boardY: ", CanvasHeight.value)
})
```

但是这种情况下子组件已经被挂载到DOM中，我们知道`onMounted` 钩子用来在组件完成初始渲染并创建 DOM 节点**后**运行代码，此时传递给子组件的参数并不会起作用。也就是说，当子组件接收到父组件传来的props的时候，DOM已经挂载完了，且数据更新时子组件没有响应。

# 问题分析

怎么想还是很奇怪，既然我们父组件传给子组件的值是响应式的，那么这个值改变的时候子组件应该也会触发重新挂载DOM。顺藤摸瓜，`defineProps`是不是有之前没注意过的事情呢。通过在工作台中输出props的值，我们会发现父组件传入的数据变化时，props的值并没有响应数据变化，说明可能存在响应式丢失的问题。

子组件：

```vue
<script setup lang="ts">
import { ref, toRef } from "vue";

const props = defineProps<{
  row: number,
  column: number,
  canvasX: number,
  canvasY: number,
  test: string
}>()

const ItemWidth = ref(props.canvasX / props.column)
const ItemHeight = ref(props.canvasY / props.row)

console.log("row ", props.row, "column ", props.column)
console.log("X: ", props.canvasX, "Y: ", props.canvasY)
console.log("itemX: ", ItemWidth.value, "itemY: ", ItemHeight.value)

const msg = toRef(props, 'data');
</script>

<template>
  {{ canvasX }}
  {{ ItemWidth }}
  <div class="item-container" :style="{width: ItemWidth - 10 + 'px', height: ItemHeight - 10 + 'px'}">

  </div>
</template>

<style scoped>
.item-container {
  margin: 5px;
  border-radius: 10px;
  background: #242424;
}
</style>
```

输出结果：

![QQ_1722593237202](Vue3中的DOM问题.assets\QQ_1722593237202.png)

我们可以看到props是更新的，但是我们的`ItemWidth, ItemHeight`。等等，这里好像哪里不对

解决方法之一就是强制重新挂载DOM：

```typescript
const handleSize = () => {
  const board = document.getElementById("board")
  if (board) {
    CanvasWidth.value = board.offsetWidth - 40
    CanvasHeight.value = board.offsetHeight - 40
    console.log("boardX: ", CanvasWidth.value, "boardY: ", CanvasHeight.value)
    boardKey.value++ // 增加 key 值，触发重新挂载
  }
}

```

```vue
<div class="drag-board" id="board" :key="boardKey">
  <div class="drag-row" v-for="indexX in row" :key="indexX">
    <CapDragGridItem v-for="indexY in column" :key="indexY"
                 :row="row"
                 :column="column"
                 :canvasX="CanvasWidth"
                 :canvasY="CanvasHeight"/>
  </div>
</div>
```

我们回过头来看刚才不对的地方：

```typescript
const ItemWidth = ref(props.canvasX / props.column)
const ItemHeight = ref(props.canvasY / props.row)
```

`ItemWidth` 和 `ItemHeight` 不会自动更新。如果 `props.canvasX` 或 `props.column` 发生变化，这两个值不会自动改变，除非手动更新它们。哈哈，这就是问题所在。当需要手动更新某个值，并且希望它是响应式的时，可以使用 `ref`。而在我们需求下是希望自动更新的。某个值是自动计算得出，并且在依赖的响应式数据变化时自动更新时，可以使用 `computed`。

修改后的代码：

```typescript
const ItemWidth = computed(()=> props.canvasX / props.column)
const ItemHeight = computed(() => props.canvasY / props.row)
```

或者

```vue
<template>
  <div class="item-container" :style="{width: canvasX / column - 10 + 'px', height: canvasY / row - 10 + 'px'}">

  </div>
</template>
```

> PS
>
> 如果我们在CSS中使用100%之类的来给定容器大小，要注意DOM加载时的大小不一定就是最后的大小

~~总结：我是傻逼~~。不过还是学了点东西的orz