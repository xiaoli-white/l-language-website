# IRField

## 概述

IRField 是 LG IR 模块中用于表示字段（成员变量）的组件。它可以用于表示结构体的成员变量或函数的参数。

## 结构

IRField 由以下主要部分组成：

1. **名称（name）** - 字段的标识符
2. **类型（type）** - 字段的数据类型
3. **索引（index）** - 字段在结构体或参数列表中的位置

## 功能

### 字段描述

IRField 提供了字段的基本信息，包括其名称、类型和位置。

### 类型信息

每个字段都有关联的类型信息，用于类型检查和内存布局计算。

### 位置信息

索引信息用于确定字段在结构体中的偏移量或在参数列表中的位置。

## 使用场景

### 结构体成员

在 IRStructure 中，每个成员变量都表示为一个 IRField 对象。

### 函数参数

在 IRFunction 中，每个参数都表示为一个 IRField 对象。

### 内存访问

在生成内存访问指令时，需要根据字段信息计算偏移量。

## API 参考

### IRField 类

#### 构造函数
```java
public IRField(String name, IRType type)
```

创建一个新的字段定义。

参数：
- `name` - 字段名称
- `type` - 字段类型

#### 字段
- `public final String name` - 字段名称
- `public final IRType type` - 字段类型

#### accept
```java
@Override
public Object accept(IRVisitor visitor, Object additional)
```

接受访问者对象，用于访问者模式遍历。

参数：
- `visitor` - 访问者对象
- `additional` - 附加参数

返回：
- 访问者处理结果

## 相关组件

- [IRStructure](/lg/ir-structure) - 包含字段的结构体
- [IRFunction](/lg/ir-function) - 包含参数字段的函数
- [IRType](/lg/ir-type) - 字段的类型信息