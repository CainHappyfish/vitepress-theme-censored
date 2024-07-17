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

# post文件处理

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

对于`/* @__PURE__ */`，暗示创建 `Map` 实例的代码可以被认为是没有副作用的，因此在优化时可以进行一些特殊处理。是一种特殊的注释，通常用于工具链中的某些优化器（如 UglifyJS、Terser 或其他 JavaScript 压缩工具）。一般有3种：

```
/*@__INLINE__*/ - forces a function to be inlined somewhere.
/*@__NOINLINE__*/ - Makes sure the called function is not inlined into the call site.
/*@__PURE__*/ - Marks a function call as pure. That means, it can safely be dropped.
```

- 可以把@换成#。
- inline表示内联，会强制把标记的函数里依赖的函数内敛在里面。
- 而noinline则相反，不会把函数拆成内容内联进函数体内。
- 最后的pure则是用的最多的。会告诉编辑器，如果没用到这玩意，可以放心删了。

Vitepress中`LoaderModule`的定义为：

```typescript
interface LoaderModule {
    watch?: string[] | string;
    load: (watchedFiles: string[]) => any;
}
/**
 * Helper for defining loaders with type inference
 */
declare function defineLoader(loader: LoaderModule): LoaderModule;
```

vitepress在构建博客时，会根据定义的`LoaderModule`来获取md文件信息（例如存放在frontmatter, theme等信息），我们可以根据我们的需要来扩展该模块，最后根据load函数将处理后的数据存入我们事先定义的数组data中，并导出作为其他组件的输入数据。

我们设置一个缓存来存储读取内容，提高运行效率：

```
const cache = /* @__PURE__ */ new Map();
```

然后进入具体的load实现：

```
watch: [`${theme.postDir ?? 'posts'}/**/*.md`].map(p => normalizePath(path.join(config.root, p))),
async load(files) { }
```

> 在 JavaScript 和 TypeScript 中，对象属性列表的最后一个属性后面可以有一个逗号，但并不是必须的。这被称为“尾随逗号”或“拖尾逗号”（Trailing Comma）。使用尾随逗号的一个好处是，当你添加新的属性或方法时，版本控制系统的diff会更加清晰，因为每次添加属性时不需要修改前一个属性行的逗号。

`watch` 是一个数组，用于指定要监视的文件路径模式。`${theme.postDir ?? 'posts'}`是一个模板字符串，用于读取我们在`config.mts`内定义的post文章路径，如果该路径不存在，则默认使用posts为文章路径。`/**/*.md`是一个通配符模式，表示该目录及其子目录中的所有 Markdown 文件 (`.md` 文件)。

`map` 是 JavaScript 数组上的一个方法，用于创建一个新数组，其中每个元素都是通过调用提供的函数并使用原数组中的相应元素计算出来的。它是一个非常常用的方法，用于数组的转换操作。在`.map(p => normalizePath(path.join(config.root, p)))`中，`path.join(config.root, p)`将 `config.root`（表示项目的根目录）和前面生成的路径（`theme.postDir` 或 `'posts'`）连接起来，形成绝对路径；`normalizePath`将路径标准化（处理不同操作系统的路径分隔符差异）；`map` 方法将标准化后的路径放入 `watch` 数组中。

`load` 是一个异步方法，输入为获取的文件列表，用于处理文件列表并加载这些文件的内容。接下来我们具体看看load函数的实现。

### `async load`

```typescript
md = md || (await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base, config.logger));
const raw = [];
```

首先我们初始化`md`变量，如果`md`已经存在，直接使用`md`的值；如果不存在，则异步创建一个`MarkdownRenderer`并初始化。创建一个`raw`数组用于存储未处理的数据。

接下来遍历每个文件，如果不是md文件，则跳过。

```typescript
for (const file of files) {
    if (!file.endsWith('.md')) {
        continue;
    }

    const { mtimeMs: timestamp, birthtimeMs } = fs.statSync(file);
    const cached = cache.get(file);

    if (cached && timestamp === cached.timestamp) {
        raw.push(cached.data);
        continue;
    }
}
```

`fs.statSync(file)`使用Node.js的`fs`模块中的同步方法`statSync`，用于获取文件的状态信息。`{ mtimeMs: timestamp, birthtimeMs }`从`fs.statSync(file)`返回的对象中解构出`mtimeMs`和`birthtimeMs`属性。`mtimeMs`表示文件的最后修改时间，以毫秒为单位；`birthtimeMs`表示文件的创建时间，以毫秒为单位。将`mtimeMs`重命名为`timestamp`以方便后续使用。

然后我们从缓存中获取与文件路径`file`对应的缓存记录，如果缓存存在且最后修改时间相同，则向raw添加该数据，然后继续下一个文件的读取。其他情况则进入下一步的处理。

vitepress使用`gray-matter`获取md文章中的`yml`参数信息。

```
const fileContent = fs.readFileSync(file, 'utf-8');
const { data: meta, content} = matter(fileContent);
```

我们用fs读取file对应的文件内容后，调用`gray-matter`的`matter`获取`yml`参数信息和文件内容，`{ data: meta, content}`：从`matter(fileContent)`返回的对象中解构出`data`和`content`属性。`data`包含前置物的元数据，重命名为`meta`；`content`包含文件的主要内容。

```
const reg = /<!--\s*more\s*-->/gs;
const rpt = reg.exec(content);
const excerpt = rpt ? content.substring(0, rpt.index) : '';
```

根据正则获取摘要，rpt.index为匹配的行数，从`0-rpt.index`行的内容即为摘要。如果正则匹配，则用`substring`获取content对应的摘要内容，否则返回空值。

> 这里theme-async的代码用回调函数实现的，但我自己写代码的时候死活匹配不了
>
> ```
> const fileContent = fs.readFileSync(file, 'utf-8');
> const { data: meta, excerpt } = matter(fileContent, {
>     excerpt: text => {
>         const reg = /<!--\s*more\s*-->/gs;
>         const rpt = reg.exec(text);
>         return rpt ? text.substring(0, rpt.index) : '';
>     },
> });
> ```
>
> 其实`gray-matter`自己就带有相应的截取参数，感兴趣可以去了解一下

处理完所有需要的数据后，我们将其存入`data`中，加入缓存和`raw`：

```
const renderedExcerpt = excerpt ? excerpt : md.render(excerpt);
const data = {
    excerpt: renderedExcerpt,
    ...meta,
    url: withBase(config.site.base, url),
    filePath: slash(path.relative(config.srcDir, file)),
};
cache.set(file, { data, timestamp });
raw.push(data);
```

最后load返回`raw`经过排序后的数据。

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

该函数接受两个可选参数：

- `sort`：用于指定排序规则的参数，其类型为 `CensoredTheme.OrderByArg`。
- `filter`：用于过滤文章的回调函数，其类型为 `(v: CensoredTheme.PostData, i: number, l: CensoredTheme.PostData[]) => boolean`，即接收三个参数并返回一个布尔值的函数。

如果提供了 `filter` 函数，则使用 `filter` 函数对 `list` 进行过滤，保留满足条件的文章；如果提供了 `sort` 参数，则使用 `sortBy` 函数对 `list` 进行排序，并返回排序后的新数组。`sortBy` 函数接受一个数组和排序规则作为参数。如果没有提供 `sort` 参数，则返回 `list` 的浅拷贝。

# 工具函数

这部分我们来看`vitepress-theme-censored/utils`内的ts使用。
