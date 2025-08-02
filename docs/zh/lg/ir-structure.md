# IRStructure

## 概述

IRStructure 是 LG IR 模块中表示结构体定义的组件。它描述了用户定义的结构体类型，包括结构体的名称和字段列表。

## 结构

IRStructure 由以下主要部分组成：

1. **名称（name）** - 结构体的唯一标识符
2. **字段列表（fields）** - 结构体包含的字段列表

## 功能

### 结构体定义

IRStructure 存储结构体的名称和字段信息，用于在代码生成时确定结构体的内存布局和访问方式。

### 字段管理

通过字段列表，IRStructure 描述了结构体包含的所有字段，包括字段的名称和类型。

### 内存大小计算

IRStructure 可以计算结构体实例所需的内存大小。

## 使用场景

### 用户定义结构体

当用户在源代码中定义结构体时，会在 IR 中创建对应的 IRStructure 对象。

### 类型系统

IRStructure 是类型系统的一部分，用于表示复合类型。

### 内存布局

在代码生成阶段，IRStructure 的信息用于确定结构体实例在内存中的布局。

## API 参考

### IRStructure 类

#### 构造函数
```java
public IRStructure(String name, IRField[] fields)
```

创建一个新的结构体定义。

参数：
- `name` - 结构体名称
- `fields` - 字段数组

#### 字段
- `public final String name` - 结构体名称
- `public final IRField[] fields` - 字段数组

#### 方法

##### getLength
```java
public long getLength()
```

计算结构体的总内存大小（字节）。

返回：
- 结构体的总内存大小

##### accept
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

- [IRModule](/lg/ir-module) - 包含结构体定义的顶层容器
- [IRField](/lg/ir-field) - 结构体字段的表示