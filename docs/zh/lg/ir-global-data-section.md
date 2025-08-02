# IRGlobalDataSection

## 概述

IRGlobalDataSection 是 LG IR 模块中用于管理程序全局数据的组件。它存储程序中所有的全局变量和静态变量，这些变量在整个程序执行期间都存在。

## 结构

IRGlobalDataSection 包含一个全局数据列表，每个全局数据项都包含以下信息：

1. **名称（name）** - 全局数据的唯一标识符
2. **大小（size）** - 数据块的大小（可选）
3. **值（values）** - 初始化值数组（可选）

## 功能

### 全局数据管理

IRGlobalDataSection 负责存储和管理程序中所有全局变量和静态变量的声明。这些变量在整个程序执行期间都存在，其生命周期从程序启动到程序结束。

### 初始化支持

全局数据可以指定初始值，也可以只指定大小。对于只指定大小的全局数据，通常会在全局初始化段中进行初始化。

### 唯一性检查

IRGlobalDataSection 提供了检查特定名称是否已存在的功能，防止重复声明。

## 使用场景

### 全局变量声明

当程序中声明全局变量时，会在 IRGlobalDataSection 中创建相应的条目。

### 静态变量存储

类的静态变量也会存储在全局数据段中。

### 数据段生成

在代码生成阶段，全局数据段的信息用于生成目标平台的数据段。

## API 参考

### IRGlobalDataSection 类

#### 构造函数
```java
public IRGlobalDataSection()
```

创建一个新的全局数据段。

#### 字段
- `public final List<GlobalData> data` - 全局数据列表

#### 方法

##### add
```java
public void add(GlobalData globalData)
```

向全局数据段添加一个新的全局数据项。

参数：
- `globalData` - 要添加的全局数据项

##### contains
```java
public boolean contains(String name)
```

检查指定名称的全局数据项是否已存在。

参数：
- `name` - 要检查的全局数据项名称

返回：
- 如果存在返回 true，否则返回 false

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

### GlobalData 类

#### 构造函数
```java
public GlobalData(String name, IROperand size)
```

创建一个只指定大小的全局数据项。

参数：
- `name` - 数据项名称
- `size` - 数据项大小操作数

```java
public GlobalData(String name, IROperand[] values)
```

创建一个指定初始值的全局数据项。

参数：
- `name` - 数据项名称
- `values` - 初始值操作数数组

#### 字段
- `public final String name` - 数据项名称
- `public final IROperand size` - 数据项大小操作数（可为 null）
- `public final IROperand[] values` - 初始值操作数数组（可为 null）

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

- [IRModule](/lg/ir-module) - 包含全局数据段的顶层容器
- [IROperand](/lg/ir-operand) - 用于表示大小和初始值的操作数
- [IRControlFlowGraph](/lg/ir-control-flow-graph) - 全局初始化代码的容器