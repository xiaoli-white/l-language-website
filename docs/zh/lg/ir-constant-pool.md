# IRConstantPool

## 概述

IRConstantPool 是 LG IR 模块中用于管理程序常量的组件。它存储程序中使用的所有常量值，如字符串字面量、数字常量等，以避免在生成的代码中重复存储相同值。

## 结构

IRConstantPool 由常量条目（Entry）列表组成。每个 Entry 包含两个主要属性：

1. **类型（type）** - 常量的数据类型
2. **值（value）** - 常量的实际值

## 功能

### 常量存储

当需要添加一个新常量时，IRConstantPool 会检查该常量是否已存在。如果存在，则返回现有常量的索引；如果不存在，则将其添加到池中并返回新索引。

### 常量检索

通过索引可以快速检索已存储的常量值。

### 去重机制

IRConstantPool 内部实现了去重机制，确保相同的常量值只存储一次，节省内存空间。

## 使用场景

### 字符串字面量

程序中的字符串字面量通常存储在常量池中，避免在内存中重复存储相同字符串。

### 数值常量

常用的数值常量也可以存储在常量池中，提高代码效率。

### 其他常量数据

其他类型的常量数据，如布尔值、浮点数等，也可以存储在常量池中。

## 优势

1. **内存效率** - 通过去重机制减少内存使用
2. **访问速度** - 通过索引快速访问常量值
3. **代码优化** - 便于进行常量传播等优化

## API 参考

### IRConstantPool 类

#### 构造函数

```java
public IRConstantPool()
```

创建一个新的空常量池。

#### 字段

- `public final List<Entry> entries` - 存储常量条目的列表

#### 方法

##### put

```java
public int put(Entry entry)
```

将常量条目添加到常量池中。如果常量已存在，则返回现有索引；否则添加新条目并返回新索引。

参数：

- `entry` - 要添加的常量条目

返回：

- 常量条目的索引

##### get

```java
public Entry get(int index)
```

根据索引获取常量条目。

参数：

- `index` - 常量条目的索引

返回：

- 指定索引的常量条目，如果索引无效则返回 null

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

### Entry 类

#### 构造函数

```java
public Entry(IRType type, Object value)
```

创建一个新的常量条目。

参数：

- `type` - 常量的类型
- `value` - 常量的值

#### 字段

- `public final IRType type` - 常量的数据类型
- `public final Object value` - 常量的实际值

#### 方法

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

##### equals

```java
@Override
public boolean equals(Object o)
```

比较两个常量条目是否相等。当类型和值都相等时返回 true。

参数：

- `o` - 要比较的对象

返回：

- 如果两个条目相等则返回 true，否则返回 false

##### hashCode

```java
@Override
public int hashCode()
```

获取常量条目的哈希码。

返回：

- 常量条目的哈希码

## 相关组件

- [IRModule](/lg/ir-module) - 包含常量池的顶层容器
- [IRType](/lg/ir-type) - 常量的类型信息