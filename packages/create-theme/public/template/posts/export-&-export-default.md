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

# `import`

我们先来看看`import`语句。`import`语句导入的是引用而不是值：

```typescript
const module = await import('./module.js');
const { A: destructuredA } = await import('./module.js');
```

在这段代码中，`module.A` 与 `A` 是相同的，但是因为 `destructuredA` 是解构赋值，因此就有一些不同了。

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

# ` export default`

```typescript
// module.js
let A = 'initial';

export { A };
export default A;

setTimeout(() => {
  A = 'changed';
}, 500);

// main.js
import { A, default as defaultA } from './module.js';

setTimeout(() => {
  console.log(A); // "changed"
  console.log(defaultA); // "initial"
}, 1000);
```

我们知道，我们可以直接 `export default 'hello';` 但是却不能 `export { 'hello' as A }`。规范在这两种语法上有一点不同。`export default` 后面的将会被作为表达式对待。因此我们可以 `export default 'hello';`， 甚至可以 `export default 1 + 2;`。因此，在 `export default A` 中，`A` 是作为表达式语句使用的，因此使用的是 A 的值。

# `export { A as default }`

`export {}` 导出的始终是一个引用。这里的`as default`更类似于别名。

```
// module.js
let A = 'initial';

export { A, A as default };

setTimeout(() => {
  A = 'changed';
}, 500);

// main.js
import { A, default as defaultA } from './module.js';

setTimeout(() => {
  console.log(A); // "changed"
  console.log(defaultA); // "changed"
}, 1000);

```

小结：

```typescript
// 导入引用
import { A } from './module.js';
import { A as otherName } from './module.js';
import * as module from './module.js';
const module = await import('./module.js');
// 导入值
let { A } = await import('./module.js');

// 导出引用
export { A };
export { A as otherName };
export { A as default };
// 导出值
export default A;
export default 'hello!';
```

# `export default function` 

`export default function` 有其特殊的语法，在这个语法中，函数是作为引用传递的。

从前面的例子可以看出，使用`import`命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到`export default`命令，为模块指定默认输出。

```typescript
// export-default.js
export default function () {  
	console.log('foo');
}
```

上面代码是一个模块文件`export-default.js`，它的默认输出是一个函数。

其他模块加载该模块时，`import`命令可以为该匿名函数指定任意名字。

```typescript
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```

上面代码的`import`命令，可以用任意名称指向`export-default.js`输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时`import`命令后面，不使用大括号。

`export default`命令用在非匿名函数前，也是可以的。

```typescript
// export-default.js
export default function foo() {  
	console.log('foo');
}
// 或者写成
function foo() {  
	console.log('foo');
}
export default foo;
```

上面代码中，`foo`函数的函数名`foo`，在模块外部是无效的。加载的时候，视同匿名函数加载。

下面比较一下默认输出和正常输出。

```typescript
// 第一组
export default function crc32() { // 输出  // ...}

import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出  // ...};

import {crc32} from 'crc32'; // 输入
```

上面代码的两组写法，第一组是使用`export default`时，对应的`import`语句不需要使用大括号；第二组是不使用`export default`时，对应的`import`语句需要使用大括号。

# 总结

`export default`命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此`export default`命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应`export default`命令。

本质上，`export default`就是输出一个叫做`default`的变量或方法，然后系统允许你为它取任意名字。正是因为`export default`命令其实只是输出一个叫做`default`的变量，所以它后面不能跟变量声明语句。

同样地，因为`export default`命令的本质是将后面的值，赋给`default`变量，所以可以直接将一个值写在`export default`之后。

```typescript
// 正确
export default 42;
// 报错 没有指定对外的接口
export 42;
```

如果想在一条`import`语句中，同时输入默认方法和其他接口，可以写成下面这样。

```typescript
import _, { each, forEach } from 'lodash';
```

对应上面代码的`export`语句如下。

```typescript
export default function (obj) {  // ···}

export function each(obj, iterator, context) {  // ···}

export { each as forEach };
```

上面代码的最后一行的意思是，暴露出`forEach`接口，默认指向`each`接口，即`forEach`和`each`指向同一个方法。

`export default`也可以用来输出类。

```typescript
// MyClass.js
export default class { ... }

// main.js
import MyClass from 'MyClass';
let o = new MyClass();
```





























