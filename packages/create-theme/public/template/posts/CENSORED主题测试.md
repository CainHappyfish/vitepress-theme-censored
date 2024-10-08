---
layout: page
title: CENSORED主题测试
tags: 
  - Vitepress
  - theme-censored
cover: https://pic.imgdb.cn/item/66936bd8d9c307b7e961f10b.jpg
description: 这是一篇测试文章
---



本文章用于测试主题功能是否可以正常使用，但我不知道为什么一刷新就爆炸

~~呃，然后又莫名其妙好了~~

<!--more-->

# 标题

本部分主要用来测试目录。

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

## EMOJI 🤤

🧩😅🧩😄💔😄👌✋✋🥽🖼️🎠🛝🫲🎐

## 摘要

> 使用`<!--more-->`来截取摘要

## 段落

**痛苦啊，你便是我的唯一（加粗）**

除了你，我皆无欲求

**痛苦啊，你忠实的陪伴我，直至现在也没有一丝改变**

当我的灵魂徘徊于深渊之底

唯有你相伴在我身旁，守护着我

我又怎能埋怨你呢

**痛苦啊，你绝不会从我身旁遁走**

我终于能表达对你的尊敬

现在也认识到你的存在

而你只是存于世，便那么美丽

**痛苦啊，你就像那从未离开我那贫苦的心之火炉旁的人一样**

比我那身为至爱的恋人还要多情

我知道在我迈向死亡的那一天

*你会走进我内心的深处（斜体）*

与我并排躺下

> 目前使用的解析器不支持高亮`==highlight==`，遇到中文括号可能会出错

## 任务列表

- [x] task 1

留档

## 代码

```typescript
document.addEventListener("DOMContentLoaded", () => {
  const highlightElements = document.querySelectorAll('code.highlighted');

  highlightElements.forEach((highlightElement) => {
    const parentElement = highlightElement.closest('.language-container') as HTMLElement;

    if (parentElement && highlightElement instanceof HTMLElement) {
      // Adjust the width of the highlighted element
      const adjustHighlightWidth = () => {
        const parentWidth = parentElement.offsetWidth;
        console.log(parentWidth);
        highlightElement.style.width = `${parentWidth}px`;
      };

      // Initial adjustment
      adjustHighlightWidth();

      // Adjust on window resize
      window.addEventListener('resize', adjustHighlightWidth);
    }
  });
});
```

### 代码突出

```typescript{6}
document.addEventListener("DOMContentLoaded", () => {
  const highlightElements = document.querySelectorAll('code.highlighted');

  highlightElements.forEach((highlightElement) => {
    const parentElement = highlightElement.closest('.language-container') as HTMLElement;

    if (parentElement && highlightElement instanceof HTMLElement) {
      // Adjust the width of the highlighted element
      const adjustHighlightWidth = () => {
        const parentWidth = parentElement.offsetWidth;
        console.log(parentWidth);
        highlightElement.style.width = `${parentWidth}px`;
      };

      // Initial adjustment
      adjustHighlightWidth();

      // Adjust on window resize
      window.addEventListener('resize', adjustHighlightWidth);
    }
  });
});
```

### 行内代码

`index.d.ts`：定义 VitePress 中使用的各种类型，包括配置对象、主题配置、插件接口等

## 图片

![test](https://pic.imgdb.cn/item/668e4c3dd9c307b7e98e9068.jpg)

## 列表

### 有序列表

1. 先这样
2. 再那样
3. 最后这样

### 无序列表

- 先这样
- 在这样
- 最后那样

## 引用

> 我遗落的风景。

## 表格

|      |  A   |  B   |
| :--: | :--: | :--: |
|  1   |  1A  |  1B  |
|  2   |  2A  |  2B  |
|  3   |  3A  |  3B  |
|  4   |  4A  |  4B  |
|  5   |  5A  |  5B  |

## 公式

### 行内公式

这是一个行内公式：$E = mc^2$

相应的估计量$\hat{\theta}_{k}=\hat{\theta}_{k}\left(X_{1}, X_{2}, \ldots, X_{n}\right), k=1,2, \cdots, l$称为参数$\theta_{k}$的极大似然估计量。

### 公式块

这是一个块级公式：
$$
\frac{\partial \ln L\left(\theta_{1}, \theta_{2}, \cdots, \theta_{l}\right)}{\partial \theta_{k}}=0, k=1,2, \cdots, l
$$

## Vitepress内置内容

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::