# IRModule

## 概述

IRModule 是 LG IR 模块的顶层容器，代表一个完整的程序模块。它包含了程序的所有组成部分，如结构体定义、常量池、全局数据、函数定义等。

## 结构

IRModule 由以下主要组件构成：

1. **结构体集合** - 存储程序中定义的所有结构体
2. **常量池** - 存储程序中使用的所有常量
3. **全局数据段** - 存储全局变量和静态变量
4. **全局初始化段** - 存储全局变量的初始化代码
5. **函数集合** - 存储程序中定义的所有函数
6. **虚函数表映射** - 存储类到其虚函数表的映射关系
7. **接口表映射** - 存储类到其实现的接口表的映射关系
8. **入口点** - 程序执行的起始函数

## 功能

### 结构体管理

IRModule 维护一个结构体映射表，通过结构体名称可以快速查找对应的结构体定义。

### 常量池管理

IRModule 包含一个常量池，用于存储程序中使用的所有常量值，包括字符串、数字等。

### 全局数据管理

全局数据段存储程序中的全局变量和静态变量，这些变量在程序执行期间一直存在。

### 全局初始化管理

全局初始化段存储全局变量和静态变量的初始化代码，这些代码在程序启动时执行。

### 函数管理

IRModule 维护一个函数映射表，通过函数名称可以快速查找对应的函数定义。

### 程序入口点

入口点标识程序执行的起始位置，通常是 main 函数。

## 使用场景

IRModule 通常在编译过程的后期创建，将前端生成的 AST 转换为 IR 表示。然后，优化器可以对 IRModule 进行各种优化，最后由代码生成器将其转换为目标代码。

## API 参考

### 构造函数

```java
public IRModule()
```

创建一个新的空 IRModule 实例。

### 字段

- `public final Map<String, IRStructure> structures` - 存储所有结构体定义的映射表，键为结构体名称，值为 IRStructure 对象
- `public final IRConstantPool constantPool` - 存储所有常量的常量池
- `public final IRGlobalDataSection globalDataSection` - 全局数据段，存储全局变量和静态变量
- `public final IRControlFlowGraph globalInitSection` - 全局初始化段，包含全局变量初始化代码
- `public final Map<String, IRFunction> functions` - 存储所有函数定义的映射表，键为函数名称，值为 IRFunction 对象
- `public final Map<String, List<String>> name2VTableKeys` - 存储类到虚函数表键的映射
- `public final Map<String, List<String>> name2ITableKeys` - 存储类到接口表键的映射
- `public String entryPoint` - 程序入口点函数名称

### 方法

#### putStructure

```java
public void putStructure(IRStructure structure)
```

将结构体添加到模块中。

参数：

- `structure` - 要添加的结构体

#### putFunction

```java
public void putFunction(IRFunction function)
```

将函数添加到模块中。

参数：

- `function` - 要添加的函数

#### accept

```java
@Override
public Object accept(IRVisitor visitor, Object additional)
```

接受访问者对象，用于访问者模式遍历。

## 相关组件

- [IRStructure](/lg/ir-structure) - 结构体定义
- [IRConstantPool](/lg/ir-constant-pool) - 常量池
- [IRGlobalDataSection](/lg/ir-global-data-section) - 全局数据段
- [IRControlFlowGraph](/lg/ir-global-init-section) - 全局初始化段
- [IRFunction](/lg/ir-function) - 函数定义