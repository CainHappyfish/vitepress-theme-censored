---
title: Vitepress主题制作学习笔记-2
layout: page
author: C4iN
cover: https://pic.imgdb.cn/item/66938d79d9c307b7e995e9b9.jpg
tags:
 - Vitepress
 - 前端
 - TypeScript
 - vue3
 - 痛苦的配置问题
 - theme-censored
---



这里写制作主题中用到的Typescript。

<!--more-->

# 数据处理

我们先来看`vitepress-theme-censored/composables`的ts使用：

- `index.ts`：用于数据输出以及处理
- `post.data.ts`：用于获取博客文章的内容与数据

## `post.data.ts`

这里涉及nodeJS的文件读取操作。

```typescript
const config: SiteConfig<CensoredThemeConfig> = (globalThis as any).VITEPRESS_CONFIG;
const theme = config.site.themeConfig;

declare const data: CensoredTheme.PostData[];

let md: MarkdownRenderer;
const cache = /* @__PURE__ */ new Map();

export { data };
```

全局属性 `globalThis` 包含全局的 `this` 值。在 Web 中，可以通过 `window`、`self` 或者 `frames` 取到全局对象，但是在 [Web Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker) 中，只有 `self` 可以。在 Node.js 中，它们都无法获取，必须使用 `global`。

对于`/* @__PURE__ */`，是terser（vue使用的压缩工具）认可的行内注释，一般有3种：

```
/*@__INLINE__*/ - forces a function to be inlined somewhere.
/*@__NOINLINE__*/ - Makes sure the called function is not inlined into the call site.
/*@__PURE__*/ - Marks a function call as pure. That means, it can safely be dropped.
```

- 可以把@换成#。
- inline表示内联，会强制把标记的函数里依赖的函数内敛在里面。
- 而noinline则相反，不会把函数拆成内容内联进函数体内。
- 最后的pure则是用的最多的。会告诉编辑器，如果没用到这玩意，可以放心删了。

接下来我们来看模块导出`<LoaderModule>`。我们需要注意的是`export default` 后面的将会被作为表达式对待。因此我们可以 `export default 'hello';`， 甚至可以 `export default 1 + 2;`。因此，在 `export default A` 中，`A` 是作为表达式语句使用的，因此使用的是 A 的值。

Vitepress中`LoaderModule`的定义为：

```typescript
interface LoaderModule {
    watch?: string[] | string;
    load: (watchedFiles: string[]) => any;
}
```



## `index.ts`

```typescript
// 获取所有文章
export const useAllPosts = (sort?: CensoredTheme.OrderByArg, filter?: (v: CensoredTheme.PostData, i: number, l: CensoredTheme.PostData[]) => boolean) => {
	let list = allPosts;
	if (filter) {
		list = list.filter(filter);
	}
	return sort ? sortBy([...list], sort) : [...list];
};
```

