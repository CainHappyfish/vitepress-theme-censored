---
title: 软工复习Java部分-3
date: 2023-12-23 20:35:53
tags:
  - 软工
  - Java
---

# 包&访问控制&接口

## 包

包：包实际上是一组类组成的集合，也称之为类库。

包的层次结构与文件系统的文件目录结构是相似的。包名是Java的合法标识符，一般都用小写的字母单词表示。
Java语言提供了一些常用的基本类包，如`java.io`和`java.lang`。

### 包声明

package语句作为**Java源文件的第一条语句**，指明该文件中定义的类所在的包，若缺省该语句，则指定为无名包。

`package pkgName1[.pkgName2[.pkgName3...]];`

其中：`pkgName1~pkgNameN`表示包的目录层次。它对应于文件系统的目录结构。

### 包的作用

- 对类进行管理
  - 不同包里有相同的类不会发生冲突
  - 相同功能的类放在同一个包里
- 规定了类的使用范围
  - 同一个包里的类可以相互访问，不同包里的类不能直接相互访问。

## `import`

类引入语句

- 引入语句提供了能使用Java中API或用户已创建的类。引入语句是在包语句(如果有的话)之后的任何条语句。

  `import pack1[.pack2...].<className|*>;`

- `pack1`～`packN`为包的层次结构，它对应着要访问的类所在文件目录结构

- `className`则指明所要引入的类，如果要从一个包中引入多个类时，则可以用星号\*来表示。

- 使用“\*”引入语句，只表示了源程序中所需要的类会在包中找到并引入，但是对包中其它的类或它下面的包中的类并不引入。

引入语句有两种形式：

- 直接指明所要引入的类。

  `import src.Point;`

- 使用“*”引入语句，指明类会在包。

  `import src.*;`

- 如果没有引入语句，而直接使用类时则必须显示其包。

  `src.Point p = new src.Point(10,20);`

## 成员访问控制

- 类的成员变量和方法都可以有自己的访问控制修饰符，来表示其访问控制的权限。
- 访问权限修饰符用于标明类、变量、方法的可访问程度。
- 在类中封装了数据和代码，在包中封装了类和其它的包。

![](https://pic.imgdb.cn/item/6586d6d2c458853aefca3bef.jpg)

- `public`：可访问性最大修饰符，由public修饰的成员，则可以被任何范围中所访问。
- `protected`：允许类中、子类(包括在或不在同一包中)和它所在包中的类所访问。
- 缺省：可以被类自身和同一个包中的类访问。
- `private`：限制最强的修饰符。私有成员只能在它自身的类中访问。
- 可以最大限度地保持好类中敏感变量和方法，避免对象对这些类的成员访问时带来危害。

## 接口的创建与使用

- `Java`是通过接口使得处于不同类层次，甚至互不相关的类可以具有相同的行为。
- 接口是方法定义（没有实现）和常数变量的集合。
- 用接口，你可以指定一个类必须做什么，而不是规定它如何去做。
- 在类层次的任何地方都可以使用接口定义一个行为的协议实现它。

Java接口主要用于

- 通过接口可以指明多个类需要实现的方法。
- 通过接口可以了解对象的交互界面，而不需要了解对象所对应的类。
- 通过接口可以实现不相关类的相同行为，而不需要考虑这些类之间的层次关系。

### 定义

接口的定义格式与类相似，具有成员变量和成员方法。但是接口中的所有方法都是`abstract`方法，这些方法是**没有语句**。

```
interface Declaration{
	interfaceBody
}
```

`interfaceDeclaration`为接口声明部分；

`interfaceBody`为接口体部分。

接口体中包括常量定义和方法定义。

```
type constantName = value;
returnType methodName([paramList]);
```

- `type constantName=Value;`语句为常量定义部分。在接口中定义的成员变量都是常量，具有`pubilc`，`final`和`static属性，在创建这些变量时可以省略这些修饰符。
- `returnType methodName([parameterList]);`为方法定义部分。接口中方法是抽象方法，只有方法声明，而无方法实现，所以它的方法定义是没有方法体，由`;`直接结束。接口中声明的方法具有`public`，`abstract`属性。

```
interface Collection {
	int MAX_NUM=100;
	void add (Object objAdd);
	void delete (Object objDelet);
	Object find (Object objFind);
	int currentCount();
}
```

### 实现

- 接口的方法必须由（非抽象的）类非抽象实现。
  - 可以由抽象类抽象的实现
- 在类的声明中，如果用`implements`子句就可以声明这个类对接口的实现。
- 关键字`implements`不同于`extends`，**它表示类对接口的实现而不是继承**，并且一个类可以实现多个接口。
- 类实现接口，则必须实现接口中的所有方法。

```
class FIFOQueue implements Collection {
    public void add (Object objAdd){
        //add object code
    }
    public void delete (Object objDelet){
        //delete object code
    }
    public Object find (Object objFind){
        //find object code
    }
    public int currentCount(){
        //count object code
    }
}
```

### 接口的类型

接口可以作为一个引用类型来使用。任何实现该接口的类的实例都可以存储在该接口类型的变量中，通过这些变量可以访问类所实现接口中的方法。

在程序运行时，Java动态地确定需要使用那个类中的方法。

- 超类变量可以引用子类对象
- 接口变量可以引用子类对象

```
public static void main(String args[]){
    Collection cVar = new FIFOQueue();
    Object objAdd = new Object();
    ...
    cVar.add(objAdd);
    ...
}
```

### 接口的扩展

接口可以通过运用关键字extends被其他接口继承。语法与继承类是一样的。

- 当一个类实现一个继承了另一个接口的接口时，它必须实现接口继承链表中定义的**所有方法**
- 接口中的变量和方法的被隐藏和覆盖
- 如果在子接口中定义了和超接口同名的常量或相同的方法，则超接口中的常量被隐藏，方法被覆盖

### 接口的变量

可以使用接口来引入多个类的共享常量，这样做只需要简单的声明包含变量初始化想要的值的接口就可以了。

如果一个类中包含那个接口（就是说当实现了接口时），所有的这些变量名都将作为常量看待。

### 常数分组

由于置入一个接口的所有字段都自动具有`static `和`final`属性，所以接口是对常数值进行分组的一个好工具，它具有与C 或C++的`enum `非常相似的效果。

```
public interface Months {
    int JANUARY = 1, FEBRUARY = 2, MARCH = 3,
    APRIL = 4, MAY = 5, JUNE = 6, JULY = 7,
    AUGUST = 8, SEPTEMBER = 9, OCTOBER = 10,
    NOVEMBER = 11, DECEMBER = 12;
}
```

### 接口与抽象类的比较

- 接口中的方法都是由`public`、`abstract`修饰的抽象方法，而抽象类中则即可以有抽象方法，也可以含有非抽象方法
- 接口中的变量都是由`public`、`final`和`static`修饰的常量，而抽象类中即可以有一般的成员变量，也可以自己声明的常量
- 接口可以用`extends`关键字实现多重继承，而抽象类继承性是类的单一继承，同时也可以实现接口
- 接口实现的类由关键字`implements`声明，而抽象类的子类由关键字`extends`声明；
- 实现接口的类必须实现接口中的所有方法，而抽象类的子类(非抽象类)只必须实现抽象类中的全部的抽象方法；
- 接口中的变量(即常量)可以用接口名直接访问，而抽象类的变量则不完全可以用类名直接访问；
- 接口不是类分级结构的一部分。而没有联系的类可以执行相同的接口。
- 抽象类可以实现接口

## 内部类

- Java支持在一个类中声明另一个类，这样的类称作内部类，而包含内部类的类成为内部类的外嵌类。
- 内部类可以调用外嵌类的成员变量和方法
- 内部类不可以声明类变量和类方法

## 匿名类

### 和类有关的匿名类

- Java允许我们直接使用一个类的子类的类体创建一个子类对象。

- 创建子类对象时，除了使用父类的构造方法外还有类体，此类体被认为是一个**子类去掉类声明后的类体**，称作匿名类。

- 假设People是类，那么下列代码就是用People的一个子类（匿名类）创建对象：

  ```
  new People () {
  	匿名类的类体
  };
  
  public class Main {
      public static void main(String[] args) {
          System.out.println("Hello world!");
          me Me = new me();
          new people() {
              @Override
              void sayHello() {
                  System.out.println("与子类有关的匿名类！");
              }
          };
      }
  }
  
  abstract class people {
      abstract void sayHello();
  }
  ```

### 和接口有关的匿名类

假设`Computable`是一个接口，那么，Java允许直接用接口名和一个类体创建一个匿名对象，此类体被认为是实现了`Computable`接口的类去掉类声明后的类体，称作匿名类。

- 下列代码就是用实现了Computable接口的类（匿名类）创建对象：

  ```
  new Computable() {
  	实现接口的匿名类的类体
  }
  ```

## 完整的Java源程序

- 最多可以有一条package语句，并且放在除注解外的第一条语句的位置上
- 可以有任意条import语句，并处在package语句之后(如果有)
- 可以定义任意个类，如果没有接口时则至少有一个类的定义
- 可以定义任意个接口，如果没有类时则至少有一个接口的定义

# 异常处理

## 异常概念及异常类的层次

异常就是程序执行过程中出现的不正常现象。非预期情况，错误的参数、网络故障。

任何一个程序都可能出现异常，Java使用对象表示对打开的文件不存在、内存不够、数组访问超界等非预期情况。

Java使异常处理标准化，使程序设计思路更清楚，理解更容易。

### 层次

Java定义的异常类有自己的类层次。所有异常类都是`Throwable`类的子类。

`Throwable`属于`java.lang`包，在程序中不必使用import语句引入即可使用。

`Throwable`类有三个最基本的子类`Error, Exception`和`RuntimeException`类。

![](https://pic.imgdb.cn/item/6586ea05c458853aef29e0ca.jpg)

### 常用方法

- `getMessage()`：

  获得更详细的异常信息，但并非每个异常都有详细信息。如果没有详细信息，该方法调用后返回空值。

- `toString()`：

  获得异常的简短描述。

- `printStackTrace()`：

  打印异常发生处堆栈跟踪的信息，包括异常的类名、方法名及所在程序的行数。

### 异常形式

- `Error`

  表示产生了非常严重的问题，即使有可能使程序恢复正常也非常困难，如内存不足等。对于这一类问题，一般不要求应用程序进行异常处理。

- `RuntimeException`

  表明产生了一个设计或执行问题，如果程序设计正确应该能够避免发生这类问题，如在访问数组时，数组下标越界等。对于这类问题也不要求进行处理，使该类问题能够暴露出来，从而改正程序。

- 其它Exception

  由于执行环境的影响，不可避免地将产生的问题。如用户敲入错误的文件名而导致文件没有找到等。对于这类问题，Java强烈要求应用程序进行完整的异常处理，给用户友好的提示，或者修正后使程序继续执行。

### 常用异常类

- `ArithmeticException`

  算术运算中，整数被零除，如int i = 12/0;

- `ArrayIndexOutOfBoundsException`

  访问数组超界异常

- `ArrayStoreException`

  进行写数组操作时，对象或数据类型不兼容，导致异常。

- `ClassCastException`

  当试图把对象A转换为对象B时，如果对象A既不是对象B的同类，又非对象B的子类，将产生该异常。

- `IllegalArgumentException`

  在方法的参数表中，如果参数无效，将产生异常。

- `IllegalThreadStateException`

  非法改变线程状态，如启动已执行线程，导致异常。

- `IndexOutOfBoundsException`

  是`ArrayIndexOutOfBoundsException`类的超类，它是抽象类。

- `NegativeArraySizeException`

  创建数组时，规定数组大小的参数是负数，产生异常

- `NullPointerException`

  试图访问空对象的变量、方法或空数组的元素，产生异常。

- `NumberFormatException`

  试图把一字符串非法转换成数组（或相反），导致该异常

- `SecurityException`

  Applet试图执行被WWW浏览器安全设置所禁止的操作，产生异常。

- `IncompatibleClassChangeException`

  有两种情况抛出该异常，一是某成员变量的声明被从静态改变为非静态，但其它引用了这个变量的类却没有重新编译，或者相反。二是删除了类声明中的某一域或方法，但没有重新编译那些引用了这个域或方法的类。

- `OutOfMemoryException`

  表示“内存不足”异常。

- `NoClassDefException`

  Java执行时找不到所引用的类，产生该异常。

- `IncompatibleTypeException`

  试图实例化一个接口，产生该异常。

- `UnsatisfiedLinkException`

  所调用的方法是C方法，但执行时无法连接这个方法，将产生该异常。

- `InternalException`

  是系统内部故障所导致的异常。

### 异常处理

发生异常时，就会抛出一个异常，通过捕获这个异常，就可以进行相应异常处理。其形式如下：

```
try {
	正常程序段；
}
catch(异常类1 异常变量) {
	与异常类1有关的处理程序段
}
catch(异常类2 异常变量) {
	与异常类2有关的处理程序段
}
......
finally {
	退出异常处理程序段;
}
```

### 嵌套的异常处理

在`try-catch-finally`结构中，可以使用嵌套形式，即在捕获异常处理过程中，可以继续抛出异常。

- 在这种嵌套结构中，产生异常后，首先与最内层的`try-catch-finally`结构中的`catch`语句进行匹配比较。
- 如果没有相匹配的catch语句，该异常情况可以被抛出，让外层的`try-catch-finlly`的结构重复进行匹配检查。这样从最内层到最外层，逐一检查匹配，直到找到一个匹配为止。

### `throw`语句

在实际的应用程序中，除了可能产生Java的标准异常外，还可能产生应用程序的特定异常，这时应用程序应该给用户提供明确的指示，帮助用户正确理解和使用该应用程序。
`throw`语句抛出异常格式为：

`throw 表达式;`

其中，“表达式” 为一个异常对象。

例：
`throw new IOException("Not found the file");`

### 自定义异常类

用户可以根据需要定义异常类。则要完成三件事:

- 生成Throwable类或其子类的一个子类。

- 在可能发生异常的地方，判断是否发生异常，如果发生异常，则用throw抛出异常。

- 用try-catch-finally结构来捕获异常，进行处理。

  例，自定义异常类IllegalMarkException:

  ```
  class IllegelMarkException extends Throwable{
  	IllegelMarkException() {}
  }
  ```

### `throws`语句

抛出异常的方法并不处理该异常，而是由调用该方法的另一方法来处理，那么这时可以使用throws语句给方法声明一个例外情况，其声明格式为：

```
<返回类型> <方法名>(paraList) throws 异常类1,...
```

例子：

```
void exam(int mark) throws NegativeMarkException,
OutofMarkException {
    if(mark < 0) throw new NegativeMarkException();
    if(mark> 100) throw new OutofMarkException();
}
```

