# IROperand

## 概述

IROperand 是 LG IR 模块中表示指令操作数的组件集合。操作数是指令的操作对象，可以是常量、寄存器、内存地址等。

## 操作数类型

### 虚拟寄存器 (IRVirtualRegister)

虚拟寄存器是在 IR 层次上使用的寄存器，不直接对应硬件寄存器。它们在寄存器分配阶段会被映射到实际的硬件寄存器或内存位置。

特点：

- 有唯一标识符
- 有关联的数据类型
- 在寄存器分配阶段进行优化

### 常量 (IRConstant)

常量表示固定的值，如整数、浮点数、字符串等。

特点：

- 值在编译时已知
- 通常存储在常量池中
- 可以进行常量传播优化

### Phi 函数节点 (IRPhi)

Phi 函数用于处理控制流合并点的值选择问题。在控制流图的合并节点，来自不同前驱节点的值需要通过 Phi 函数进行合并。

特点：

- 用于解决 SSA（静态单赋值）形式中的控制流合并问题
- 根据控制流来源选择相应的值

### 接口表 (IRInterfaceTable)

接口表存储类实现的接口信息。

### 宏 (IRMacro)

宏表示可展开的代码片段。

### 虚函数表 (IRVirtualTable)

虚函数表存储类的虚函数信息，用于实现动态分发。

## 详细操作数说明

### IRVirtualRegister（虚拟寄存器）

虚拟寄存器是 IR 中临时值的主要存储方式。每个虚拟寄存器都有一个唯一的名称标识符。

#### 特点
- 以 `%` 符号开头，后跟名称
- 在 SSA 形式中，每个虚拟寄存器只被赋值一次
- 在寄存器分配阶段会被映射到物理寄存器或栈位置

#### 使用场景
- 存储计算中间结果
- 传递函数参数
- 存储局部变量值

### IRConstant（常量）

IRConstant 表示对 IRConstantPool 中常量的引用。它通过索引值引用常量池中的具体常量。

#### 特点
- 以 `$` 符号开头，后跟索引值
- 索引值指向 IRConstantPool 中的具体常量
- 常量值在编译时已知

#### 使用场景
- 字面量值（如整数、浮点数、字符串）
- 全局常量
- 编译时常量表达式

### IRPhi（Phi 函数）

Phi 函数用于处理控制流合并点的值选择问题，是 SSA 形式的重要组成部分。

#### 结构
- 类型信息：Phi 函数结果的类型
- 标签数组：前驱基本块的标签
- 操作数数组：与标签对应的值操作数

#### 特点
- 用于解决控制流合并问题
- 每个前驱基本块对应一个值
- 在控制流到达时根据来源选择相应的值

#### 使用场景
- 循环变量
- 条件表达式的合并结果
- 异常处理中的值合并

### IRInterfaceTable（接口表）

表示类实现的接口信息。

### IRVirtualTable（虚函数表）

表示类的虚函数信息，用于实现动态分发。

### IRMacro（宏）

表示可展开的代码片段。

## 功能

### 值表示

操作数是 IR 中值的基本表示形式，可以作为指令的输入或输出。

### 类型信息

每个操作数都包含类型信息，用于类型检查和代码生成。

### 优化支持

操作数的设计支持各种编译优化，如：

- 常量传播
- 死代码消除
- 寄存器分配

## 使用场景

### 指令构造

在构造 IR 指令时，需要指定操作数。

### 优化过程

优化器分析和变换操作数以提高代码效率。

### 代码生成

代码生成器根据操作数信息生成目标代码。

## API 参考

### IROperand

所有操作数类的基类，继承自 IRNode。

### IRVirtualRegister

#### 构造函数
```java
public IRVirtualRegister(String name)
```

参数：
- `name` - 虚拟寄存器名称

#### 字段
- `public final String name` - 虚拟寄存器名称

#### 特殊方法
- `toString()` 返回以 `%` 开头的字符串表示

### IRConstant

#### 构造函数
```java
public IRConstant(int index)
```

参数：
- `index` - 常量在常量池中的索引

#### 字段
- `public final int index` - 常量索引

#### 特殊方法
- `toString()` 返回以 `$` 开头的字符串表示

### IRPhi

#### 构造函数
```java
public IRPhi(IRType type, String[] labels, IROperand[] operands)
```

参数：
- `type` - Phi 函数结果类型
- `labels` - 前驱基本块标签数组
- `operands` - 对应的值操作数数组

#### 字段
- `public final IRType type` - 结果类型
- `public final String[] labels` - 前驱标签数组
- `public final IROperand[] operands` - 值操作数数组

## 相关组件

- [IRInstruction](/lg/ir-instruction) - 操作数的使用者
- [IRType](/lg/ir-type) - 操作数的类型信息
- [IRConstantPool](/lg/ir-constant-pool) - 常量操作数的存储位置