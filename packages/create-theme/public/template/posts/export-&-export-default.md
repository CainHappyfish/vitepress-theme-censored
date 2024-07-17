---
title: export & export default
layout: page
author: C4iN
cover: https://i0.wp.com/puresourcecode.com/wp-content/uploads/2020/06/typescript-wallpaper.png?w=1920&ssl=1
tags:
 - 前端
 - TypeScript
 - ES6

---



> 参考：
>
> [你真的懂 export default 吗？ - 西风D碧树 - 博客园 (cnblogs.com)](https://www.cnblogs.com/everfind/p/export-default.html)
>
> [阮一峰 ECMAScript 6 (ES6) 标准入门教程](https://www.bookstack.cn/read/es6-3rd/spilt.6.docs-module.md)

# `import`语句

我们先来看看`import`语句。`import`语句导入的是引用而不是值：

```typescript
const module = await import('./module.js');
const { A: destructuredA } = await import('./module.js');
```

在这段代码中，`module.A` 与 `A` 是相同的，但是因为 `destructuredA` 是结构赋值，因此就有一些不同了。

```typescript
// 以下代码获得是引用
import { A } from './module.js';
import { A as otherName } from './module.js';
import * as module from './module.js';
const module = await import('./module.js');
// 以下代码获得的是值
let { A } = await import('./module.js');
```

静态语句 `import { A } ...` 虽然看着像解构赋值，实际上与[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)并不相同。

## ` export default`语句

```
// 引用
import { A } from './module.js';
import { A as otherName } from './module.js';
import * as module from './module.js';
const module = await import('./module.js');
// 值
let { A } = await import('./module.js');

// 导出引用
export { A };
export { A as otherName };
// 导出值
export default A;
export default 'hello!';
```

我们知道，我们可以直接 `export default 'hello';` 但是却不能 `export { 'hello' as A }`。规范在这两种语法上有一点不同。`export default` 后面的将会被作为表达式对待。因此我们可以 `export default 'hello';`， 甚至可以 `export default 1 + 2;`。因此，在 `export default A` 中，`A` 是作为表达式语句使用的，因此使用的是 A 的值。因此，当 `A` 的值在 `setTimeout` 中被改变的时候，`export default` 出去的值并没有变化。