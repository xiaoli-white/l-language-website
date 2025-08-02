# IRFunction

## 概述

IRFunction 是 LG IR 模块中表示函数定义的组件。它包含了函数的签名信息（返回类型、参数列表）以及函数体的实现（控制流图）。

## 结构

IRFunction 由以下主要部分组成：

1. **名称（name）** - 函数的唯一标识符
2. **返回类型（returnType）** - 函数返回值的类型
3. **字段列表（fields）** - 函数的参数列表
4. **控制流图（controlFlowGraph）** - 函数体的实现，包含所有基本块和指令

## 功能

### 函数签名管理

IRFunction 存储函数的名称和返回类型，以及参数列表。这些信息在函数调用时用于类型检查和参数传递。

### 控制流管理

通过控制流图（Control Flow Graph, CFG），IRFunction 表示函数体的执行流程。CFG 由基本块（Basic Block）组成，每个基本块包含一系列顺序执行的指令。

### 局部变量管理

函数的参数和局部变量作为字段（Field）存储在 IRFunction 中。

## 控制流图

控制流图是 IRFunction 的核心部分，描述了函数的执行流程。它由基本块组成，基本块之间通过跳转指令连接。

## 使用场景

### 函数定义

每个用户定义的函数在 IR 中都表示为一个 IRFunction 对象。

### 函数调用

当生成函数调用指令时，需要引用目标函数的 IRFunction 对象以获取函数签名信息。

### 优化

优化器可以对 IRFunction 进行各种优化，如死代码消除、常量传播等。

## API 参考

### 构造函数

```java
public IRFunction(IRType returnType, String name, long argumentCount, IRField[] fields, IRControlFlowGraph controlFlowGraph)
```

创建一个新的函数定义。

参数：

- `returnType` - 函数返回值类型
- `name` - 函数名称
- `argumentCount` - 函数参数数量
- `fields` - 函数参数字段数组
- `controlFlowGraph` - 函数体的控制流图

### 字段

- `public final IRType returnType` - 函数返回值类型
- `public final String name` - 函数名称
- `public final long argumentCount` - 函数参数数量
- `public final IRField[] fields` - 函数参数字段数组
- `public final IRControlFlowGraph controlFlowGraph` - 函数体的控制流图

### 方法

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

- [IRModule](/lg/ir-module) - 包含函数定义的顶层容器
- [IRControlFlowGraph](/lg/ir-control-flow-graph) - 函数体的控制流表示
- [IRField](/lg/ir-field) - 函数参数的表示
- [IRType](/lg/ir-type) - 函数返回类型