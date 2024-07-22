---
title: JavaScript复习-3
layout: page
author: C4iN
cover: https://ts1.cn.mm.bing.net/th/id/R-C.535e92c65ddaff1a55f11df10c680c75?rik=f%2biBg6VYkZpFAQ&riu=http%3a%2f%2fradicalhub.com%2fwp-content%2fuploads%2f2018%2f07%2fjavascript.jpg&ehk=%2f8TEVGmLi%2bQfePoivY3xtjLzdul2sHZ8uuJe38nC3L4%3d&risl=&pid=ImgRaw&r=0
tags:
 - 前端
 - JavaScript


---



Javascript复习速通第二部分，主要是对JS数据类型更进一步的理解。

<!--more-->

我们来看看原始类型和对象之间的关键区别。

一个原始值：

- 是原始类型中的一种值。
- 在 JavaScript 中有 7 种原始类型：`string`，`number`，`bigint`，`boolean`，`symbol`，`null` 和 `undefined`。

一个对象：

- 能够存储多个值作为属性。
- 可以使用大括号 `{}` 创建对象，例如：`{name: "John", age: 30}`。JavaScript 中还有其他种类的对象，例如函数就是对象。

关于对象的最好的事儿之一是，我们可以把一个函数作为对象的属性存储到对象中。

- 除 `null` 和 `undefined` 以外的原始类型都提供了许多有用的方法。我们后面的章节中学习这些内容。
- 从形式上讲，这些方法通过临时对象工作，但 JavaScript 引擎可以很好地调整，以在内部对其进行优化，因此调用它们并不需要太高的成本。

# 数字类型

要写有很多零的数字：

- 将 `"e"` 和 0 的数量附加到数字后。就像：`123e6` 与 `123` 后面接 6 个 0 相同。
- `"e"` 后面的负数将使数字除以 1 后面接着给定数量的零的数字。例如 `123e-6` 表示 `0.000123`（`123` 的百万分之一）。

对于不同的数字系统：

- 可以直接在十六进制（`0x`），八进制（`0o`）和二进制（`0b`）系统中写入数字。
- `parseInt(str, base)` 将字符串 `str` 解析为在给定的 `base` 数字系统中的整数，`2 ≤ base ≤ 36`。
  - `parseInt()` 函数具有可选的第二个参数。它指定了数字系统的基数，因此 `parseInt` 还可以解析十六进制数字、二进制数字等的字符串。
- `num.toString(base)` 将数字转换为在给定的 `base` 数字系统中的字符串。

对于常规数字检测：

- `isNaN(value)` 将其参数转换为数字，然后检测它是否为 `NaN`
- `isFinite(value)` 将其参数转换为数字，如果它是常规数字，则返回 `true`，而不是 `NaN/Infinity/-Infinity`

要将 `12pt` 和 `100px` 之类的值转换为数字：

- 使用 `parseInt/parseFloat` 进行“软”转换，它从字符串中读取数字，然后返回在发生 error 前可以读取到的值。

小数：

- 使用 `Math.floor`，`Math.ceil`，`Math.trunc`，`Math.round` 或 `num.toFixed(precision)` 进行舍入。
- 请确保记住使用小数时会损失精度。

更多数学函数：

- 需要时请查看 [Math](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象。这个库很小，但是可以满足基本的需求。

> 为什么`6.35.toFixed(1)==6.3`
>
> 在内部，`6.35` 的小数部分是一个无限的二进制。在这种情况下，它的存储会造成精度损失。
>
> 让我们来看看：
>
> ```javascript
> alert( 6.35.toFixed(20) ); // 6.34999999999999964473
> ```
>
> 精度损失可能会导致数字的增加和减小。在这种特殊的情况下，数字变小了一点，这就是它向下舍入的原因。
>
> 那么 `1.35` 会怎样呢？
>
> ```javascript
> alert( 1.35.toFixed(20) ); // 1.35000000000000008882
> ```
>
> 在这里，精度损失使得这个数字稍微大了一些，因此其向上舍入。
>
> **如果我们希望以正确的方式进行舍入，我们应该如何解决 `6.35` 的舍入问题呢？**
>
> 在进行舍入前，我们应该使其更接近整数：
>
> ```javascript
> alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
> ```
>
> 请注意，`63.5` 完全没有精度损失。这是因为小数部分 `0.5` 实际上是 `1/2`。以 2 的整数次幂为分母的小数在二进制数字系统中可以被精确地表示，现在我们可以对它进行舍入：
>
> ```javascript
> alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
> ```
>
> 需要注意的是`null`（取消）和空行在数字形式中是 `0`。

# 字符串

| 字符                                    | 描述                                                         |
| :-------------------------------------- | :----------------------------------------------------------- |
| `\n`                                    | 换行                                                         |
| `\r`                                    | 在 Windows 文本文件中，两个字符 `\r\n` 的组合代表一个换行。而在非 Windows 操作系统上，它就是 `\n`。这是历史原因造成的，大多数的 Windows 软件也理解 `\n`。 |
| `\'`, `\"`                              | 引号                                                         |
| `\\`                                    | 反斜线                                                       |
| `\t`                                    | 制表符                                                       |
| `\b`, `\f`, `\v`                        | 退格，换页，垂直标签 —— 为了兼容性，现在已经不使用了。       |
| `\xXX`                                  | 具有给定十六进制 Unicode `XX` 的 Unicode 字符，例如：`'\x7A'` 和 `'z'` 相同。 |
| `\uXXXX`                                | 以 UTF-16 编码的十六进制代码 `XXXX` 的 Unicode 字符，例如 `\u00A9` —— 是版权符号 `©` 的 Unicode。它必须正好是 4 个十六进制数字。 |
| `\u{X…XXXXXX}`（1 到 6 个十六进制字符） | 具有给定 UTF-32 编码的 Unicode 符号。一些罕见的字符用两个 Unicode 符号编码，占用 4 个字节。这样我们就可以插入长代码了。 |

| 方法                    | 选择方式……                                | 负值参数            |
| :---------------------- | :---------------------------------------- | :------------------ |
| `slice(start, end)`     | 从 `start` 到 `end`（不含 `end`）         | 允许                |
| `substring(start, end)` | 从 `start` 到 `end`（不含 `end`）         | 负值被视为 `0`      |
| `substr(start, length)` | 从 `start` 开始获取长为 `length` 的字符串 | 允许 `start` 为负数 |

- 有 3 种类型的引号。反引号允许字符串跨越多行并可以使用 `${…}` 在字符串中嵌入表达式。
- JavaScript 中的字符串使用的是 UTF-16 编码。
- 我们可以使用像 `\n` 这样的特殊字符或通过使用 `\u...` 来操作它们的 Unicode 进行字符插入。
- 获取字符时，使用 `[]`。
- 获取子字符串，使用 `slice` 或 `substring`。
- 字符串的大/小写转换，使用：`toLowerCase/toUpperCase`。
- 查找子字符串时，使用 `indexOf` 或 `includes/startsWith/endsWith` 进行简单检查。
- 根据语言比较字符串时使用 `localeCompare`，否则将按字符代码进行比较。

还有其他几种有用的字符串方法：

- `str.trim()` —— 删除字符串前后的空格 (“trims”)。
- `str.repeat(n)` —— 重复字符串 `n` 次。
- ……更多内容细节请参见 [手册](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String)。

# 数组

数组（`Array`）存储有序的集合。数组可以存储任何类型的元素。 请将数组视为作用于 **有序数据** 的特殊结构。它们为此提供了特殊的方法。数组在 JavaScript 引擎内部是经过特殊调整的，使得更好地作用于连续的有序数据，所以请以正确的方式使用数组。如果你需要任意键值，那很有可能实际上你需要的是常规对象 `{}`。清空数组最简单的方法就是：`arr.length = 0;`。

数组是一种特殊的对象，适用于存储和管理有序的数据项。

声明：

```javascript
// 方括号 (常见用法)
let arr = [item1, item2...];

// new Array (极其少见)
let arr = new Array(item1, item2...);
```

调用 `new Array(number)` 会创建一个给定长度的数组，但不含有任何项。

- `length` 属性是数组的长度，准确地说，它是数组最后一个数字索引值加一。它由数组方法自动调整。
- 如果我们手动缩短 `length`，那么数组就会被截断。

获取元素：

- 你可以通过元素的索引获取元素，例如 `arr[0]`
- 我们也可以使用允许负索引的 `at(i)` 方法。对于负值的 `i`，它会从数组的末尾往回数。如果 `i >= 0`，它的工作方式与 `arr[i]` 相同。

我们可以通过下列操作以双端队列的方式使用数组：

- `push(...items)` 在末端添加 `items` 项。
- `pop()` 从末端移除并返回该元素。
- `shift()` 从首端移除并返回该元素。
- `unshift(...items)` 从首端添加 `items` 项。

遍历数组的元素：

- `for (let i=0; i<arr.length; i++)` — 运行得最快，可兼容旧版本浏览器。
- `for (let item of arr)` — 现代语法，只能访问 items。
- `for (let i in arr)` — 永远不要用这个。

数组有自己的 `toString` 方法的实现，会返回以逗号隔开的元素列表。数组没有 `Symbol.toPrimitive`，也没有 `valueOf`，它们只能执行 `toString` 进行转换，所以这里 `[]` 就变成了一个空字符串，`[1]` 变成了 `"1"`，`[1,2]` 变成了 `"1,2"`。当 `"+"` 运算符把一些项加到字符串后面时，加号后面的项也会被转换成字符串。

例如：比较数组时，不要使用 `==` 运算符（当然也不要使用 `>` 和 `<` 等运算符），因为它们不会对数组进行特殊处理。它们通常会像处理任意对象那样处理数组，这通常不是我们想要的。

但是，我们可以使用 `for..of` 循环来逐项比较数组。

## 数组方法

在这里和其他数组方法中，负向索引都是被允许的。

- 添加/删除元素：
  - `push(...items)` —— 向尾端添加元素，
  - `pop()` —— 从尾端提取一个元素，
  - `shift()` —— 从首端提取一个元素，
  - `unshift(...items)` —— 向首端添加元素，
  - `splice(pos, deleteCount, ...items)` —— 从 `pos` 开始删除 `deleteCount` 个元素，并插入 `items`。
  - `slice(start, end)` —— 创建一个新数组，将从索引 `start` 到索引 `end`（但不包括 `end`）的元素复制进去。
  - `concat(...items)` —— 返回一个新数组：复制当前数组的所有元素，并向其中添加 `items`。如果 `items` 中的任意一项是一个数组，那么就取其元素。
- 搜索元素：
  - `indexOf/lastIndexOf(item, pos)` —— 从索引 `pos` 开始搜索 `item`，搜索到则返回该项的索引，否则返回 `-1`。
  - `includes(value)` —— 如果数组有 `value`，则返回 `true`，否则返回 `false`。
  - `find/filter(func)` —— 通过 `func` 过滤元素，返回使 `func` 返回 `true` 的第一个值/所有值。
  - `findIndex` 和 `find` 类似，但返回索引而不是值。
- 遍历元素：
  - `forEach(func)` —— 对每个元素都调用 `func`，不返回任何内容。
- 转换数组：
  - `map(func)` —— 根据对每个元素调用 `func` 的结果创建一个新数组。
  - `sort(func)` —— 对数组进行原位（in-place）排序，然后返回它。
  - `reverse()` —— 原位（in-place）反转数组，然后返回它。
  - `split/join` —— 将字符串拆分为数组并返回/将数组项组合成字符串并返回。
  - `reduce/reduceRight(func, initial)` —— 通过对每个元素调用 `func` 计算数组上的单个值，并在调用之间传递中间结果。
- 其他：
  - `Array.isArray(value)` 检查 `value` 是否是一个数组，如果是则返回 `true`，否则返回 `false`。

请注意，`sort`，`reverse` 和 `splice` 方法修改的是数组本身。

这些是最常用的方法，它们覆盖 99％ 的用例。但是还有其他几个：

- `arr.some(fn)/arr.every(fn)`检查数组。

  与 `map` 类似，对数组的每个元素调用函数 `fn`。如果任何/所有结果为 `true`，则返回 `true`，否则返回 `false`。

  这两个方法的行为类似于 `||` 和 `&&` 运算符：如果 `fn` 返回一个真值，`arr.some()` 立即返回 `true` 并停止迭代其余数组项；如果 `fn` 返回一个假值，`arr.every()` 立即返回 `false` 并停止对其余数组项的迭代。

  我们可以使用 `every` 来比较数组：

  ```javascript
  function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }
  
  alert( arraysEqual([1, 2], [1, 2])); // true
  ```

- `arr.fill(value, start, end)` —— 从索引 `start` 到 `end`，用重复的 `value` 填充数组。

- `arr.copyWithin(target, start, end)`—— 将从位置 `start` 到 `end` 的所有元素复制到 **自身** 的 `target` 位置（覆盖现有元素）。

- `arr.flat(depth)/[arr.flatMap(fn)`从多维数组创建一个新的扁平数组。

- `Array.of(element0[, element1[, …[, elementN\]]])·`基于可变数量的参数创建一个新的 `Array` 实例，而不需要考虑参数的数量或类型。

有关完整列表，请参阅 [手册](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array)。

创建可扩展calculator：

```
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
```

从数组创建键值对象，在这个任务里我们假设 `id` 是唯一的。没有两个具有相同 `id` 的数组项。

```
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
```

# 可迭代对象

为了让对象可迭代（也就让 `for..of` 可以运行）我们需要为对象添加一个名为 `Symbol.iterator` 的方法（一个专门用于使对象可迭代的内建 symbol）。

1. 当 `for..of` 循环启动时，它会调用这个方法（如果没找到，就会报错）。这个方法必须返回一个 **迭代器（iterator）** —— 一个有 `next` 方法的对象。
2. 从此开始，`for..of` **仅适用于这个被返回的对象**。
3. 当 `for..of` 循环希望取得下一个数值，它就调用这个对象的 `next()` 方法。
4. `next()` 方法返回的结果的格式必须是 `{done: Boolean, value: any}`，当 `done=true` 时，表示循环结束，否则 `value` 是下一个值。

```javascript
let range = {
  from: 1,
  to: 5
};

// 1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function() {

  // ……它返回迭代器对象（iterator object）：
  // 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
  return {
    current: this.from,
    last: this.to,

    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}
```

请注意可迭代对象的核心功能：关注点分离。

- `range` 自身没有 `next()` 方法。
- 相反，是通过调用 `range[Symbol.iterator]()` 创建了另一个对象，即所谓的“迭代器”对象，并且它的 `next` 会为迭代生成值。

因此，迭代器对象和与其进行迭代的对象是分开的。从技术上说，我们可以将它们合并，并使用 `range` 自身作为迭代器来简化代码。但缺点是，现在不可能同时在对象上运行两个 `for..of` 循环了：它们将共享迭代状态，因为只有一个迭代器，即对象本身。但是两个并行的 `for..of` 是很罕见的，即使在异步情况下。

```javascript
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}
```

- **Iterable** 如上所述，是实现了 `Symbol.iterator` 方法的对象。
- **Array-like** 是有索引和 `length` 属性的对象，所以它们看起来很像数组。

可以应用 `for..of` 的对象被称为 **可迭代的**。

- 技术上来说，可迭代对象必须实现`Symbol.iterator`方法。
  - `obj[Symbol.iterator]()` 的结果被称为 **迭代器（iterator）**。由它处理进一步的迭代过程。
  - 一个迭代器必须有 `next()` 方法，它返回一个 `{done: Boolean, value: any}` 对象，这里 `done:true` 表明迭代结束，否则 `value` 就是下一个值。
- `Symbol.iterator` 方法会被 `for..of` 自动调用，但我们也可以直接调用它。
- 内建的可迭代对象例如字符串和数组，都实现了 `Symbol.iterator`。
- 字符串迭代器能够识别代理对（surrogate pair）。（译注：代理对也就是 UTF-16 扩展字符。）

有索引属性和 `length` 属性的对象被称为 **类数组对象**。这种对象可能还具有其他属性和方法，但是没有数组的内建方法。

如果我们仔细研究一下规范 —— 就会发现大多数内建方法都假设它们需要处理的是可迭代对象或者类数组对象，而不是“真正的”数组，因为这样抽象度更高。

`Array.from(obj[, mapFn, thisArg])` 将可迭代对象或类数组对象 `obj` 转化为真正的数组 `Array`，然后我们就可以对它应用数组的方法。可选参数 `mapFn` 和 `thisArg` 允许我们将函数应用到每个元素。

```javascript
let range = {
  from: 1,
  to: 5
};

let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25
```

# Map

[Map](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Map) 是一个带键的数据项的集合，就像一个 `Object` 一样。 但是它们最大的差别是 `Map` 允许任何类型的键（key）。

它的方法和属性如下：

- `new Map()` —— 创建 map。
- `map.set(key, value)` —— 根据键存储值。
- `map.get(key)` —— 根据键来返回值，如果 `map` 中不存在对应的 `key`，则返回 `undefined`。
- `map.has(key)` —— 如果 `key` 存在则返回 `true`，否则返回 `false`。
- `map.delete(key)` —— 删除指定键的值。
- `map.clear()` —— 清空 map。
- `map.size` —— 返回当前元素个数。

> **`map[key]` 不是使用 `Map` 的正确方式**
>
> 虽然 `map[key]` 也有效，例如我们可以设置 `map[key] = 2`，这样会将 `map` 视为 JavaScript 的 plain object，因此它暗含了所有相应的限制（仅支持 string/symbol 键等）。
>
> 所以我们应该使用 `map` 方法：`set` 和 `get` 等。

每一次 `map.set` 调用都会返回 map 本身，所以我们可以进行“链式”调用：

```javascript
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
```

如果要在 `map` 里使用循环，可以使用以下三个方法：

- `map.keys()` —— 遍历并返回一个包含所有键的可迭代对象，
- `map.values()` —— 遍历并返回一个包含所有值的可迭代对象，
- `map.entries()` —— 遍历并返回一个包含所有实体 `[key, value]` 的可迭代对象，`for..of` 在默认情况下使用的就是这个。

除此之外，`Map` 有内建的 `forEach` 方法，与 `Array` 类似。

```javascript
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// 遍历所有的键（vegetables）
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 遍历所有的值（amounts）
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// 遍历所有的实体 [key, value]
for (let entry of recipeMap) { // 与 recipeMap.entries() 相同
  alert(entry); // cucumber,500 (and so on)
}

// 对每个键值对 (key, value) 运行 forEach 函数
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});
```

## Object & Map

当创建一个 `Map` 后，我们可以传入一个带有键值对的数组（或其它可迭代对象）来进行初始化，如下所示：

```javascript
// 键值对 [key, value] 数组
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

alert( map.get('1') ); // str1
```

如果我们想从一个已有的普通对象（plain object）来创建一个 `Map`，那么我们可以使用内建方法 [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)，该方法返回对象的键/值对数组，该数组格式完全按照 `Map` 所需的格式。

所以可以像下面这样从一个对象创建一个 Map：

```javascript
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John
```

这里，`Object.entries` 返回键/值对数组：`[ ["name","John"], ["age", 30] ]`。这就是 `Map` 所需要的格式。

`Object.fromEntries` 方法的作用是相反的：给定一个具有 `[key, value]` 键值对的数组，它会根据给定数组创建一个对象：

```javascript
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// 现在 prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2
```

我们可以使用 `Object.fromEntries` 从 `Map` 得到一个普通对象（plain object）。

例如，我们在 `Map` 中存储了一些数据，但是我们需要把这些数据传给需要普通对象（plain object）的第三方代码。

```javascript
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // 创建一个普通对象（plain object）(*)

// 完成了！
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
```

调用 `map.entries()` 将返回一个可迭代的键/值对，这刚好是 `Object.fromEntries` 所需要的格式。

我们可以把带 `(*)` 这一行写得更短：

```javascript
let obj = Object.fromEntries(map); // 省掉 .entries()
```

上面的代码作用也是一样的，因为 `Object.fromEntries` 期望得到一个可迭代对象作为参数，而不一定是数组。并且 `map` 的标准迭代会返回跟 `map.entries()` 一样的键/值对。因此，我们可以获得一个普通对象（plain object），其键/值对与 `map` 相同。

# Set

`Set` 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。

它的主要方法如下：

- `new Set(iterable)` —— 创建一个 `set`，如果提供了一个 `iterable` 对象（通常是数组），将会从数组里面复制值到 `set` 中。
- `set.add(value)` —— 添加一个值，返回 set 本身
- `set.delete(value)` —— 删除值，如果 `value` 在这个方法调用的时候存在则返回 `true` ，否则返回 `false`。
- `set.has(value)` —— 如果 `value` 在 set 中，返回 `true`，否则返回 `false`。
- `set.clear()` —— 清空 set。
- `set.size` —— 返回元素个数。

它的主要特点是，重复使用同一个值调用 `set.add(value)` 并不会发生什么改变。这就是 `Set` 里面的每一个值只出现一次的原因。

我们可以使用 `for..of` 或 `forEach` 来遍历 Set：

```javascript
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// 与 forEach 相同：
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

注意一件有趣的事儿。`forEach` 的回调函数有三个参数：一个 `value`，然后是 **同一个值** `valueAgain`，最后是目标对象。没错，同一个值在参数里出现了两次。

`forEach` 的回调函数有三个参数，是为了与 `Map` 兼容。当然，这看起来确实有些奇怪。但是这对在特定情况下轻松地用 `Set` 代替 `Map` 很有帮助，反之亦然。

`Map` 中用于迭代的方法在 `Set` 中也同样支持：

- `set.keys()` —— 遍历并返回一个包含所有值的可迭代对象，
- `set.values()` —— 与 `set.keys()` 作用相同，这是为了兼容 `Map`，
- `set.entries()` —— 遍历并返回一个包含所有的实体 `[value, value]` 的可迭代对象，它的存在也是为了兼容 `Map`。

# 弱映射和弱集合

如果我们使用对象作为常规 `Map` 的键，那么当 `Map` 存在时，该对象也将存在。它会占用内存，并且不会被（垃圾回收机制）回收。

`WeakMap` 和 `Map` 的第一个不同点就是，`WeakMap` 的键必须是对象，不能是原始值：`WeakMap` 不支持迭代以及 `keys()`，`values()` 和 `entries()` 方法。所以没有办法获取 `WeakMap` 的所有键或值。如果我们在 weakMap 中使用一个对象作为键，并且没有其他对这个对象的引用 —— 该对象将会被从内存（和map）中自动清除。`WeakMap` 的主要应用场景是 **额外数据的存储**。另外一个常见的例子是缓存。我们可以存储（“缓存”）函数的结果，以便将来对同一个对象的调用可以重用这个结果。

`WeakMap` 只有以下的方法：

- `weakMap.get(key)`
- `weakMap.set(key, value)`
- `weakMap.delete(key)`
- `weakMap.has(key)`

缓存：

```javascript
// 📁 cache.js
let cache = new WeakMap();

// 计算并记结果
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculate the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {/* some object */};

let result1 = process(obj);
let result2 = process(obj);

// ……稍后，我们不再需要这个对象时：
obj = null;

// 无法获取 cache.size，因为它是一个 WeakMap，
// 要么是 0，或即将变为 0
// 当 obj 被垃圾回收，缓存的数据也会被清除
```

`WeakSet` 的表现类似：

- 与 `Set` 类似，但是我们只能向 `WeakSet` 添加对象（而不能是原始值）。
- 对象只有在其它某个（些）地方能被访问的时候，才能留在 `WeakSet` 中。
- 跟 `Set` 一样，`WeakSet` 支持 `add`，`has` 和 `delete` 方法，但不支持 `size` 和 `keys()`，并且不可迭代。

`WeakMap` 是类似于 `Map` 的集合，它仅允许对象作为键，并且一旦通过其他方式无法访问这些对象，垃圾回收便会将这些对象与其关联值一同删除。

`WeakSet` 是类似于 `Set` 的集合，它仅存储对象，并且一旦通过其他方式无法访问这些对象，垃圾回收便会将这些对象删除。

它们的主要优点是它们对对象是弱引用，所以被它们引用的对象很容易地被垃圾收集器移除。

这是以不支持 `clear`、`size`、`keys`、`values` 等作为代价换来的。`WeakMap` 和 `WeakSet` 最明显的局限性就是不能迭代，并且无法获取所有当前内容。那样可能会造成不便，但是并不会阻止 `WeakMap/WeakSet` 完成其主要工作 —— 为在其它地方存储/管理的对象数据提供“额外”存储。

`WeakMap` 和 `WeakSet` 被用作“主要”对象存储之外的“辅助”数据结构。一旦将对象从主存储器中删除，如果该对象仅被用作 `WeakMap` 或 `WeakSet` 的键，那么该对象将被自动清除。

# `Object.keys, values, entries`

这些方法是通用的，有一个共同的约定来将它们用于各种数据结构。如果我们创建一个我们自己的数据结构，我们也应该实现这些方法。

它们支持：

- `Map`
- `Set`
- `Array`

对于普通对象，下列这些方法是可用的：

- `Object.keys(obj)`—— 返回一个包含该对象所有的键的数组。
- `Object.values(obj)` —— 返回一个包含该对象所有的值的数组。
- `Object.entries(obj)` —— 返回一个包含该对象所有 [key, value] 键值对的数组。

但是请注意区别。第一个区别是，对于对象我们使用的调用语法是 `Object.keys(obj)`，而不是 `obj.keys()`。

为什么会这样？主要原因是灵活性。请记住，在 JavaScript 中，对象是所有复杂结构的基础。因此，我们可能有一个自己创建的对象，比如 `data`，并实现了它自己的 `data.values()` 方法。同时，我们依然可以对它调用 `Object.values(data)` 方法。

第二个区别是 `Object.*` 方法返回的是“真正的”数组对象，而不只是一个可迭代对象。这主要是历史原因。

## 转换对象

对象缺少数组存在的许多方法，例如 `map` 和 `filter` 等。

如果我们想应用它们，那么我们可以使用 `Object.entries`，然后使用 `Object.fromEntries`：

1. 使用 `Object.entries(obj)` 从 `obj` 获取由键/值对组成的数组。
2. 对该数组使用数组方法，例如 `map`，对这些键/值对进行转换。
3. 对结果数组使用 `Object.fromEntries(array)` 方法，将结果转回成对象。

例如，我们有一个带有价格的对象，并想将它们加倍：

```javascript
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 将价格转换为数组，将每个键/值对映射为另一对
  // 然后通过 fromEntries 再将结果转换为对象
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

alert(doublePrices.meat); // 8
```

# 解构赋值

**解构赋值** 是一种特殊的语法，它使我们可以将数组或对象“拆包”至一系列变量中。有时这样做更方便。

## 数组解构

```javascript
// 我们有一个存放了名字和姓氏的数组
let arr = ["John", "Smith"]

// 解构赋值
// 设置 firstName = arr[0]
// 以及 surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith
```

我们可以使用这些变量而非原来的数组项了。这种语法被叫做“解构赋值”，是因为它“拆开”了数组或对象，将其中的各元素复制给一些变量。原来的数组或对象自身没有被修改。

换句话说，解构赋值只是写起来简洁一点。以下两种写法是等价的：

```javascript
// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];
```

可以通过添加额外的逗号来丢弃数组中不想要的元素：

```javascript
// 不需要第二个元素
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
```

实际上，我们可以将其与任何可迭代对象一起使用，而不仅限于数组：

```javascript
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
```

这种情况下解构赋值是通过迭代右侧的值来完成工作的。这是一种用于对在 `=` 右侧的值上调用 `for..of` 并进行赋值的操作的语法糖。

我们可以在等号左侧使用任何“可以被赋值的”东西。例如，一个对象的属性：

```javascript
let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith
```

我们可以将 .entries() 方法与解构语法一同使用，来遍历一个对象的“键—值”对：

```javascript
let user = {
  name: "John",
  age: 30
};

// 使用循环遍历键—值对
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```

用于 `Map` 的类似代码更简单，因为 Map 是可迭代的：

```javascript
let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map 是以 [key, value] 对的形式进行迭代的，非常便于解构
for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```

使用解构赋值来交换两个变量的值是一个著名的技巧：

```javascript
let guest = "Jane";
let admin = "Pete";

// 让我们来交换变量的值：使得 guest = Pete，admin = Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane（成功交换！）
```

这里我们创建了一个由两个变量组成的临时数组，并且立即以颠倒的顺序对其进行了解构赋值。我们也可以用这种方式交换两个以上的变量。

如果我们还想收集其余的数组项 —— 我们可以使用三个点 `"..."` 来再加一个参数以获取其余数组项：

```javascript
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest 是包含从第三项开始的其余数组项的数组
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

`rest` 的值就是数组中剩下的元素组成的数组。

不一定要使用变量名 `rest`，我们也可以使用任何其他的变量名。只要确保它前面有三个点，并且在解构赋值的最后一个参数位置上就行了：

```javascript
let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// 现在 titles = ["Consul", "of the Roman Republic"]
```

如果数组比左边的变量列表短，这里不会出现报错。缺少对应值的变量都会被赋 `undefined`：

```javascript
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined
```

如果我们想要一个“默认”值给未赋值的变量，我们可以使用 `=` 来提供：

```javascript
// 默认值
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius（来自数组的值）
alert(surname); // Anonymous（默认值被使用了）
```

默认值可以是更加复杂的表达式，甚至可以是函数调用。**不过，这些表达式或函数只会在这个变量未被赋值的时候才会被计算。**

## 对象解构

基本语法是：

```javascript
let {var1, var2} = {var1:…, var2:…}
```

在等号右侧是一个已经存在的对象，我们想把它拆分到变量中。等号左侧包含了对象相应属性的一个类对象“模式（pattern）”。在最简单的情况下，等号左侧的就是 `{...}` 中的变量名列表。

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

属性 `options.title`、`options.width` 和 `options.height` 值被赋给了对应的变量。

变量的顺序并不重要，下面这个代码也是等价的：

```javascript
// 改变 let {...} 中元素的顺序
let {height, width, title} = { title: "Menu", height: 200, width: 100 }
```

如果我们想把一个属性赋值给另一个名字的变量，比如把 `options.width` 属性赋值给名为 `w` 的变量，那么我们可以使用冒号来设置变量名称：

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```

冒号的语法是“从对象中什么属性的值：赋值给哪个变量”。上面的例子中，属性 `width` 被赋值给了 `w`，属性 `height` 被赋值给了 `h`，属性 `title` 被赋值给了同名变量。

对于可能缺失的属性，我们可以使用 `"="` 设置默认值，如下所示：

```javascript
let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

就像数组或函数参数一样，默认值可以是任意表达式甚至可以是函数调用。它们只会在未提供对应的值时才会被计算/调用。

我们还可以将冒号和等号结合起来：

```javascript
let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```

如果我们有一个具有很多属性的复杂对象，那么我们可以只提取所需的内容：

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// 仅提取 title 作为变量
let { title } = options;

alert(title); // Menu
```

可以使用剩余模式（pattern）：

```javascript
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = 名为 title 的属性
// rest = 存有剩余属性的对象
let {title, ...rest} = options;

// 现在 title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100
```

> 在上面的示例中，变量都是在赋值中通过正确方式声明的：`let {…} = {…}`。当然，我们也可以使用已有的变量，而不用 `let`，但这里有一个陷阱。
>
> 以下代码无法正常运行：
>
> ```javascript
> let title, width, height;
> 
> // 这一行发生了错误
> {title, width, height} = {title: "Menu", width: 200, height: 100};
> ```
>
> 问题在于 JavaScript 把主代码流（即不在其他表达式中）的 `{...}` 当做一个代码块。这样的代码块可以用于对语句分组，如下所示：
>
> ```javascript
> {
>   // 一个代码块
>   let message = "Hello";
>   // ...
>   alert( message );
> }
> ```
>
> 因此，这里 JavaScript 假定我们有一个代码块，这就是报错的原因。我们需要解构它。
>
> 为了告诉 JavaScript 这不是一个代码块，我们可以把整个赋值表达式用括号 `(...)` 包起来：
>
> ```javascript
> let title, width, height;
> 
> // 现在就可以了
> ({title, width, height} = {title: "Menu", width: 200, height: 100});
> 
> alert( title ); // Menu
> ```

## 嵌套解构

如果一个对象或数组嵌套了其他的对象和数组，我们可以在等号左侧使用更复杂的模式（pattern）来提取更深层的数据。

在下面的代码中，`options` 的属性 `size` 是另一个对象，属性 `items` 是另一个数组。赋值语句中等号左侧的模式（pattern）具有相同的结构以从中提取值：

```javascript
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// 为了清晰起见，解构赋值语句被写成多行的形式
let {
  size: { // 把 size 赋值到这里
    width,
    height
  },
  items: [item1, item2], // 把 items 赋值到这里
  title = "Menu" // 在对象中不存在（使用默认值）
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut
```

对象 `options` 的所有属性，除了 `extra` 属性在等号左侧不存在，都被赋值给了对应的变量。注意，`size` 和 `items` 没有对应的变量，因为我们取的是它们的内容。

## 智能函数参数

我们可以用一个对象来传递所有参数，而函数负责把这个对象解构成各个参数：

```javascript
// 我们传递一个对象给函数
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ……然后函数马上把对象解构成变量
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – 提取于 options，
  // width, height – 使用默认值
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu(options);
```

我们也可以使用带有嵌套对象和冒号映射的更加复杂的解构：

```javascript
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);
```

完整语法和解构赋值是一样的：

```javascript
function({
  incomingProperty: varName = defaultValue
  ...
})
```

对于参数对象，属性 `incomingProperty` 对应的变量是 `varName`，默认值是 `defaultValue`。

请注意，这种解构假定了 `showMenu()` 函数确实存在参数。如果我们想让所有的参数都使用默认值，那我们应该传递一个空对象：

```javascript
showMenu({}); // 不错，所有值都取默认值

showMenu(); // 这样会导致错误
```

我们可以通过指定空对象 `{}` 为整个参数对象的默认值来解决这个问题：

```javascript
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200
```

在上面的代码中，整个参数对象的默认是 `{}`，因此总会有内容可以用来解构。

## 总结

- 解构赋值可以简洁地将一个对象或数组拆开赋值到多个变量上。

- 解构对象的完整语法：

  ```javascript
  let {prop : varName = default, ...rest} = object
  ```

  这表示属性 `prop` 会被赋值给变量 `varName`，如果没有这个属性的话，就会使用默认值 `default`。

  没有对应映射的对象属性会被复制到 `rest` 对象。

- 解构数组的完整语法：

  ```javascript
  let [item1 = default, item2, ...rest] = array
  ```

  数组的第一个元素被赋值给 `item1`，第二个元素被赋值给 `item2`，剩下的所有元素被复制到另一个数组 `rest`。

- 从嵌套数组/对象中提取数据也是可以的，此时等号左侧必须和等号右侧有相同的结构。

# 日期和时间

该对象存储日期和时间，并提供了日期/时间的管理方法。我们可以使用它来存储创建/修改时间，测量时间，或者仅用来打印当前时间。

## 创建

`new Date()`

不带参数 —— 创建一个表示当前日期和时间的 `Date` 对象：

```javascript
let now = new Date();
alert( now ); // 显示当前的日期/时间
```

`new Date(milliseconds)`

创建一个 `Date` 对象，其时间等于 1970 年 1 月 1 日 UTC+0 之后经过的毫秒数（1/1000 秒）。

传入的整数参数代表的是自 1970-01-01 00:00:00 以来经过的毫秒数，该整数被称为 **时间戳**。

这是一种日期的轻量级数字表示形式。我们通常使用 `new Date(timestamp)` 通过时间戳来创建日期，并可以使用 `date.getTime()` 将现有的 `Date` 对象转化为时间戳（下文会讲到）。

```javascript
// 0 表示 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// 现在增加 24 小时，得到 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
```

`new Date(datestring)`

如果只有一个参数，并且是字符串，那么它会被自动解析。该算法与 `Date.parse` 所使用的算法相同，将在下文中进行介绍。

```javascript
let date = new Date("2017-01-26");
alert(date);
// 未指定具体时间，所以假定时间为格林尼治标准时间（GMT）的午夜零点
// 并根据运行代码时的用户的时区进行调整
// 因此，结果可能是
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// 或
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)
```

`new Date(year, month, date, hours, minutes, seconds, ms)`

使用当前时区中的给定组件创建日期。只有前两个参数是必须的。

- `year` 应该是四位数。为了兼容性，也接受 2 位数，并将其视为 `19xx`，例如 `98` 与 `1998` 相同，但强烈建议始终使用 4 位数。
- `month` 计数从 `0`（一月）开始，到 `11`（十二月）结束。
- `date` 是当月的具体某一天，如果缺失，则为默认值 `1`。
- 如果 `hours/minutes/seconds/ms` 缺失，则均为默认值 `0`。

例如：

```javascript
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // 同样，时分秒等均为默认值 0
```

时间度量最大精确到 1 毫秒（1/1000 秒）：

```javascript
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567
```

## 访问日期组件

从 `Date` 对象中访问年、月等信息有多种方式：

- [getFullYear()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)

  获取年份（4 位数）

- [getMonth()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)

  获取月份，**从 0 到 11**。

- [getDate()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)

  获取当月的具体日期，从 1 到 31，这个方法名称可能看起来有些令人疑惑。

- [getHours()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)，[getMinutes()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)，[getSeconds()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)，[getMilliseconds()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds)

  获取相应的时间组件。

> **不是 `getYear()`，而是 `getFullYear()`**
>
> 很多 JavaScript 引擎都实现了一个非标准化的方法 `getYear()`。不推荐使用这个方法。它有时候可能会返回 2 位的年份信息。永远不要使用它。要获取年份就使用 `getFullYear()`。

另外，我们还可以获取一周中的第几天：

- [getDay()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)

  获取一周中的第几天，从 `0`（星期日）到 `6`（星期六）。第一天始终是星期日，在某些国家可能不是这样的习惯，但是这不能被改变。

**以上的所有方法返回的组件都是基于当地时区的。**

当然，也有与当地时区的 UTC 对应项，它们会返回基于 UTC+0 时区的日、月、年等：[getUTCFullYear()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear)，[getUTCMonth()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth)，[getUTCDay()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay)。只需要在 `"get"` 之后插入 `"UTC"` 即可。

如果你当地时区相对于 UTC 有偏移，那么下面代码会显示不同的小时数：

```javascript
//  当前日期
let date = new Date();

// 当地时区的小时数
alert( date.getHours() );

// 在 UTC+0 时区的小时数（非夏令时的伦敦时间）
alert( date.getUTCHours() );
```

除了上述给定的方法，还有两个没有 UTC 变体的特殊方法：

- [getTime()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)

  返回日期的时间戳 —— 从 1970-1-1 00:00:00 UTC+0 开始到现在所经过的毫秒数。

- [getTimezoneOffset()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)

  返回 UTC 与本地时区之间的时差，以分钟为单位：

  ```javascript
  // 如果你在时区 UTC-1，输出 60
  // 如果你在时区 UTC+3，输出 -180
  alert( new Date().getTimezoneOffset() );
  ```

## 设置日期组件

下列方法可以设置日期/时间组件：

- [`setFullYear(year, [month\], [date])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)
- [`setMonth(month, [date\])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)
- [`setDate(date)`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)
- [`setHours(hour, [min\], [sec], [ms])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)
- [`setMinutes(min, [sec\], [ms])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes)
- [`setSeconds(sec, [ms\])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)
- [`setMilliseconds(ms)`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds)
- [`setTime(milliseconds)`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime)（使用自 1970-01-01 00:00:00 UTC+0 以来的毫秒数来设置整个日期）

以上方法除了 `setTime()` 都有 UTC 变体，例如：`setUTCHours()`。

我们可以看到，有些方法可以一次性设置多个组件，比如 `setHours`。未提及的组件不会被修改。

举个例子：

```javascript
let today = new Date();

today.setHours(0);
alert(today); // 日期依然是今天，但是小时数被改为了 0

today.setHours(0, 0, 0, 0);
alert(today); // 日期依然是今天，时间为 00:00:00。
```

## 自动校准

**自动校准** 是 `Date` 对象的一个非常方便的特性。我们可以设置超范围的数值，它会自动校准。

举个例子：

```javascript
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ……是 1st Feb 2013!
```

超出范围的日期组件将会被自动分配。

假设我们要在日期 “28 Feb 2016” 上加 2 天。结果可能是 “2 Mar” 或 “1 Mar”，因为存在闰年。但是我们不需要考虑这些，只需要直接加 2 天，剩下的 `Date` 对象会帮我们处理：

```javascript
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 1 Mar 2016
```

这个特性经常被用来获取给定时间段后的日期。例如，我们想获取“现在 70 秒后”的日期：

```javascript
let date = new Date();
date.setSeconds(date.getSeconds() + 70);

alert( date ); // 显示正确的日期信息
```

我们还可以设置 0 甚至可以设置负值。例如：

```javascript
let date = new Date(2016, 0, 2); // 2016 年 1 月 2 日

date.setDate(1); // 设置为当月的第一天
alert( date );

date.setDate(0); // 天数最小可以设置为 1，所以这里设置的是上一月的最后一天
alert( date ); // 31 Dec 2015
```

## 日期转化为数字

当 `Date` 对象被转化为数字时，得到的是对应的时间戳，与使用 `date.getTime()` 的结果相同：

```javascript
let date = new Date();
alert(+date); // 以毫秒为单位的数值，与使用 date.getTime() 的结果相同
```

有一个重要的副作用：日期可以相减，相减的结果是以毫秒为单位时间差。

这个作用可以用于时间测量：

```javascript
let start = new Date(); // 开始测量时间

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // 结束测量时间

alert( `The loop took ${end - start} ms` );
```

## `Date.now()`

如果我们仅仅想要测量时间间隔，我们不需要 `Date` 对象。

有一个特殊的方法 `Date.now()`，它会返回当前的时间戳。

它相当于 `new Date().getTime()`，但它不会创建中间的 `Date` 对象。因此它更快，而且不会对垃圾回收造成额外的压力。

这种方法很多时候因为方便，又或是因性能方面的考虑而被采用，例如使用 JavaScript 编写游戏或其他的特殊应用场景。

因此这样做可能会更好：

```javascript
let start = Date.now(); // 从 1 Jan 1970 至今的时间戳

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // 完成

alert( `The loop took ${end - start} ms` ); // 相减的是时间戳，而不是日期
```

## 基准测试

我们想判断以下两个计算日期差值的函数：哪个更快？这种性能测量通常称为“基准测试（benchmark）”。**为了得到更加可靠的度量，整个度量测试包应该重新运行多次。**

## `Date.parse`

[Date.parse(str)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) 方法可以从一个字符串中读取日期。

字符串的格式应该为：`YYYY-MM-DDTHH:mm:ss.sssZ`，其中：

- `YYYY-MM-DD` —— 日期：年-月-日。
- 字符 `"T"` 是一个分隔符。
- `HH:mm:ss.sss` —— 时间：小时，分钟，秒，毫秒。
- 可选字符 `'Z'` 为 `+-hh:mm` 格式的时区。单个字符 `Z` 代表 UTC+0 时区。

简短形式也是可以的，比如 `YYYY-MM-DD` 或 `YYYY-MM`，甚至可以是 `YYYY`。

`Date.parse(str)` 调用会解析给定格式的字符串，并返回时间戳（自 1970-01-01 00:00:00 起所经过的毫秒数）。如果给定字符串的格式不正确，则返回 `NaN`。

举个例子：

```javascript
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (时间戳)
```

我们可以通过时间戳来立即创建一个 `new Date` 对象：

```javascript
let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

alert(date);
```

## 总结

- 在 JavaScript 中，日期和时间使用 [Date](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象来表示。我们不能单独创建日期或时间，`Date` 对象总是同时创建两者。
- 月份从 0 开始计数（对，一月是 0）。
- 一周中的某一天 `getDay()` 同样从 0 开始计算（0 代表星期日）。
- 当设置了超出范围的组件时，`Date` 会进行自动校准。这一点对于日/月/小时的加减很有用。
- 日期可以相减，得到的是以毫秒表示的两者的差值。因为当 `Date` 被转换为数字时，`Date` 对象会被转换为时间戳。
- 使用 `Date.now()` 可以更快地获取当前时间的时间戳。

和其他系统不同，JavaScript 中时间戳以毫秒为单位，而不是秒。

有时我们需要更加精准的时间度量。JavaScript 自身并没有测量微秒的方法（百万分之一秒），但大多数运行环境会提供。例如：浏览器有 [performance.now()](https://developer.mozilla.org/zh/docs/Web/API/Performance/now) 方法来给出从页面加载开始的以毫秒为单位的微秒数（精确到毫秒的小数点后三位）：

```javascript
alert(`Loading started ${performance.now()}ms ago`);
// 类似于 "Loading started 34731.26000000001ms ago"
// .26 表示的是微秒（260 微秒）
// 小数点后超过 3 位的数字是精度错误，只有前三位数字是正确的
```

Node.js 可以通过 `microtime` 模块或使用其他方法。从技术上讲，几乎所有的设备和环境都允许获取更高精度的时间数值，只不过不是使用 `Date` 对象。

# JSON方法

[JSON](https://en.wikipedia.org/wiki/JSON)（JavaScript Object Notation）是表示值和对象的通用格式。在 [RFC 4627](https://tools.ietf.org/html/rfc4627) 标准中有对其的描述。最初它是为 JavaScript 而创建的，但许多其他编程语言也有用于处理它的库。因此，当客户端使用 JavaScript 而服务器端是使用 Ruby/PHP/Java 等语言编写的时，使用 JSON 可以很容易地进行数据交换。

JavaScript 提供了如下方法：

- `JSON.stringify` 将对象转换为 JSON。
- `JSON.parse` 将 JSON 转换回对象。

##  `JSON.stringify`

方法 `JSON.stringify` 接收对象并将其转换为字符串。

得到的 `json` 字符串是一个被称为 **JSON 编码（JSON-encoded）** 或 **序列化（serialized）** 或 **字符串化（stringified）** 或 **编组化（marshalled）** 的对象。我们现在已经准备好通过有线发送它或将其放入普通数据存储。

请注意，JSON 编码的对象与对象字面量有几个重要的区别：

- 字符串使用双引号。JSON 中没有单引号或反引号。所以 `'John'` 被转换为 `"John"`。
- 对象属性名称也是双引号的。这是强制性的。所以 `age:30` 被转换成 `"age":30`。

`JSON.stringify` 也可以应用于原始（primitive）数据类型。

JSON 支持以下数据类型：

- Objects `{ ... }`
- Arrays `[ ... ]`
- Primitives：
  - strings，
  - numbers，
  - boolean values `true/false`，
  - `null`。

JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 `JSON.stringify` 跳过。

即：

- 函数属性（方法）。
- Symbol 类型的键和值。
- 存储 `undefined` 的属性。

重要的限制：不得有循环引用。例如：

```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup 引用了 room
room.occupiedBy = meetup; // room 引用了 meetup

JSON.stringify(meetup); // Error: Converting circular structure to JSON
```

## 排除和转换

`JSON.stringify` 的完整语法是：

```javascript
let json = JSON.stringify(value[, replacer, space])
```

- value

  要编码的值。

- replacer

  要编码的属性数组或映射函数 `function(key, value)`。

- space

  用于格式化的空格数量。

大部分情况，`JSON.stringify` 仅与第一个参数一起使用。但是，如果我们需要微调替换过程，比如过滤掉循环引用，我们可以使用 `JSON.stringify` 的第二个参数。

如果我们传递一个属性数组给它，那么只有这些属性会被编码。

```
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

alert( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}
```

我们可以使用一个函数代替数组作为 `replacer`。该函数会为每个 `(key,value)` 对调用并返回“已替换”的值，该值将替换原有的值。如果值被跳过了，则为 `undefined`。在我们的例子中，我们可以为 `occupiedBy` 以外的所有内容按原样返回 `value`。对于 `occupiedBy`，下面的代码返回 `undefined`：

```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/
```

请注意 `replacer` 函数会获取每个键/值对，包括嵌套对象和数组项。它被递归地应用。`replacer` 中的 `this` 的值是包含当前属性的对象。

第一个调用很特别。它是使用特殊的“包装对象”制作的：`{"": meetup}`。换句话说，第一个 `(key, value)` 对的键是空的，并且该值是整个目标对象。这就是上面的示例中第一行是 `":[object Object]"` 的原因。

这个理念是为了给 `replacer` 提供尽可能多的功能：如果有必要，它有机会分析并替换/跳过整个对象。

### 排除反向引用

在简单循环引用的情况下，我们可以通过名称排除序列化中违规的属性。

但是，有时我们不能只使用名称，因为它既可能在循环引用中也可能在常规属性中使用。因此，我们可以通过属性值来检查属性。

```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));

```

这里我们还需要判断 `key==""` 以排除第一个调用时 `value` 是 `meetup` 的情况。这种情况下如果不判断该条件，由于room和meetup两者的value都包含meetup，均会返回undefined，最后的结果也是undefined。

## 格式化

`JSON.stringify(value, replacer, spaces)` 的第三个参数是用于优化格式的空格数量。

以前，所有字符串化的对象都没有缩进和额外的空格。如果我们想通过网络发送一个对象，那就没什么问题。`space` 参数专门用于调整出更美观的输出。

这里的 `space = 2` 告诉 JavaScript 在多行中显示嵌套的对象，对象内部缩进 2 个空格：

```
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2));
```

## 自定义`toJSON`

像 `toString` 进行字符串转换，对象也可以提供 `toJSON` 方法来进行 JSON 转换。如果可用，`JSON.stringify` 会自动调用它。

```
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
```

正如我们所看到的，`toJSON` 既可以用于直接调用 `JSON.stringify(room)` 也可以用于当 `room` 嵌套在另一个编码对象中时。

## `JSON.parse`

```javascript
let value = JSON.parse(str, [reviver]);
```

- str

  要解析的 JSON 字符串。

- reviver

  可选的函数 function(key,value)，该函数将为每个 `(key, value)` 对调用，并可以对值进行转换。

例如：

```javascript
// 字符串化数组
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1
```

对于嵌套对象：

```javascript
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1
```

JSON 可能会非常复杂，对象和数组可以包含其他对象和数组。但是它们必须遵循相同的 JSON 格式。

## `reviver`

`meetup.date` 的值是一个字符串，而不是 `Date` 对象。`JSON.parse` 怎么知道应该将字符串转换为 `Date` 呢？

让我们将 reviver 函数传递给 `JSON.parse` 作为第二个参数，该函数按照“原样”返回所有值，但是 `date` 会变成 `Date`：

```javascript
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // 现在正常运行了！
```

顺便说一下，这也适用于嵌套对象：

```javascript
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( schedule.meetups[1].date.getDate() ); // 正常运行了！
```

## 总结

- JSON 是一种数据格式，具有自己的独立标准和大多数编程语言的库。
- JSON 支持 object，array，string，number，boolean 和 `null`。
- JavaScript 提供序列化（serialize）成 JSON 的方法 [JSON.stringify](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 和解析 JSON 的方法 [JSON.parse](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)。
- 这两种方法都支持用于智能读/写的转换函数。
- 如果一个对象具有 `toJSON`，那么它会被 `JSON.stringify` 调用。