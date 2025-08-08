# IRInstruction

## 概述

IRInstruction 是 LG IR 模块中表示中间代码指令的组件集合。每条指令代表一个基本的操作，如算术运算、内存访问、控制流转移等。

## 指令分类

IR 指令集按照功能可分为以下几类：

### 算术运算指令

1. **IRCalculate** - 执行基本的算术和逻辑运算，如加减乘除、位运算等

### 控制流指令

1. **IRConditionalJump** - 条件跳转指令，根据条件决定是否跳转到指定位置
2. **IRGoto** - 无条件跳转指令，直接跳转到指定位置

### 函数调用指令

1. **IRInvoke** - 函数调用指令，调用指定函数并传递参数

### 返回指令

1. **IRReturn** - 函数返回指令，结束当前函数执行并返回值

### 赋值指令

1. **IRSet** - 赋值指令，将一个值赋给变量或寄存器

### 内存管理指令

1. **IRMalloc** - 动态内存分配指令
2. **IRFree** - 动态内存释放指令
3. **IRRealloc** - 动态内存重新分配指令

### 内存访问指令

1. **IRGet** - 从内存中读取值
2. **IRSet** - 向内存中写入值

### 寄存器操作指令

1. **IRSetVirtualRegister** - 设置虚拟寄存器的值

### 栈操作指令

1. **IRStackAllocate** - 在栈上分配空间

### 类型转换指令

1. **IRTypeCast** - 执行类型转换操作

### 一元操作指令

1. **IRNegate** - 数值取反操作
2. **IRNot** - 逻辑取反操作

### 计数指令

1. **IRIncrease** - 增加操作
2. **IRDecrease** - 减少操作

### 空操作指令

1. **IRNoOperate** - 无操作指令，不执行任何操作

### 内联汇编指令

1. **IRAsm** - 内联汇编指令，用于嵌入平台相关的汇编代码

## 详细指令说明

### IRCalculate（算术运算指令）

执行基本的算术和逻辑运算。

#### 操作符类型

- ADD("add") - 加法
- SUB("sub") - 减法
- MUL("mul") - 乘法
- DIV("div") - 除法
- MOD("mod") - 取模
- AND("and") - 按位与
- OR("or") - 按位或
- XOR("xor") - 按位异或
- SHL("shl") - 左移
- SHR("shr") - 算术右移
- USHR("ushr") - 逻辑右移

#### 原子操作

支持原子操作标志，确保操作的原子性。

### IRConditionalJump（条件跳转指令）

根据条件决定是否跳转到指定位置。

#### 条件码

- Equal("e") - 相等
- NotEqual("ne") - 不相等
- Greater("g") - 大于
- GreaterEqual("ge") - 大于等于
- Less("l") - 小于
- LessEqual("le") - 小于等于

#### 原子操作

支持原子操作标志，确保条件检查和跳转的原子性。

### IRGoto（无条件跳转指令）

无条件跳转到指定的基本块。

### IRInvoke（函数调用指令）

调用指定函数并传递参数。

支持调用返回值，可以将返回值存储在虚拟寄存器中。

### IRReturn（返回指令）

结束当前函数执行并返回值。

可选返回值，对于无返回值函数可以不指定返回值。

### IRGet（内存读取指令）

从指定地址读取指定类型的值。

### IRSet（内存写入指令）

向指定地址写入指定类型的值。

### IRMalloc（内存分配指令）

分配指定大小的内存块，返回内存地址。

### IRFree（内存释放指令）

释放之前分配的内存块。

### IRRealloc（内存重分配指令）

重新分配内存块，调整其大小。

### IRTypeCast（类型转换指令）

执行不同类型的转换操作。

#### 转换类型

- ZeroExtend("zext") - 零扩展
- SignExtend("sext") - 符号扩展
- Truncate("trunc") - 截断
- IntToFloat("itof") - 整数转浮点数
- FloatToInt("ftoi") - 浮点数转整数
- FloatExtend("fext") - 浮点数扩展
- FloatTruncate("ftrunc") - 浮点数截断

### IRNegate（数值取反指令）

对数值进行取反操作。

### IRNot（逻辑取反指令）

对值进行逻辑取反操作。

### IRIncrease（增加指令）

对值进行增加操作。

### IRDecrease（减少指令）

对值进行减少操作。

### IRNoOperate（空操作指令）

不执行任何操作的指令，常用于对齐或占位。

### IRAsm（内联汇编指令）

嵌入平台相关的汇编代码。

### IRSetVirtualRegister（设置虚拟寄存器指令）

直接设置虚拟寄存器的值。

### IRStackAllocate（栈分配指令）

在栈上分配指定大小的空间。

## 功能特点

### 操作数

每条指令都可以有零个或多个操作数，操作数可以是：

- 常量
- 虚拟寄存器
- 内存地址

### 结果存储

大多数指令会生成结果，结果可以存储在：

- 虚拟寄存器中
- 内存位置中

### 副作用

某些指令具有副作用，如：

- 修改内存状态
- 改变控制流
- 进行系统调用

## 使用场景

### 代码生成

在将高级语言编译为 IR 时，编译器会生成相应的 IR 指令序列。

### 优化

优化器可以对 IR 指令进行各种优化，如：

- 死代码消除
- 常量传播
- 公共子表达式消除
- 循环优化

### 目标代码生成

代码生成器将 IR 指令转换为目标平台的机器码或字节码。

## API 参考

### IRInstruction 类

所有指令类的基类，继承自 IRNode。

### 具体指令类

#### IRCalculate

```java
public IRCalculate(boolean isAtomic, Operator operator, IRType type, IROperand operand1, IROperand operand2, IRVirtualRegister target)
```

参数：

- `isAtomic` - 是否为原子操作
- `operator` - 操作符
- `type` - 操作数类型
- `operand1` - 第一个操作数
- `operand2` - 第二个操作数
- `target` - 目标虚拟寄存器

#### IRConditionalJump

```java
public IRConditionalJump(boolean isAtomic, IRType type, IRCondition condition, IROperand operand1, IROperand operand2, String target)
```

参数：

- `isAtomic` - 是否为原子操作
- `type` - 操作数类型
- `condition` - 条件码
- `operand1` - 第一个操作数
- `operand2` - 第二个操作数
- `target` - 目标基本块名称

#### IRGoto

```java
public IRGoto(String target)
```

参数：

- `target` - 目标基本块名称

#### IRInvoke

```java
public IRInvoke(IRType returnType, IROperand address, IRType[] argumentTypes, IROperand[] arguments, IRVirtualRegister target)
```

参数：

- `returnType` - 返回值类型
- `address` - 函数地址操作数
- `argumentTypes` - 参数类型数组
- `arguments` - 参数操作数数组
- `target` - 目标虚拟寄存器（可为 null）

#### IRReturn

```java
public IRReturn(IROperand value)
```

参数：

- `value` - 返回值操作数（可为 null）

#### IRGet

```java
public IRGet(IRType type, IROperand address, IRVirtualRegister target)
```

参数：

- `type` - 数据类型
- `address` - 地址操作数
- `target` - 目标虚拟寄存器

#### IRSet

```java
public IRSet(IRType type, IROperand address, IROperand value)
```

参数：

- `type` - 数据类型
- `address` - 地址操作数
- `value` - 值操作数

#### IRMalloc

```java
public IRMalloc(IROperand size, IRVirtualRegister target)
```

参数：

- `size` - 大小操作数
- `target` - 目标虚拟寄存器

#### IRTypeCast

```java
public IRTypeCast(Kind kind, IRType originalType, IROperand source, IRType targetType, IRVirtualRegister target)
```

参数：

- `kind` - 转换类型
- `originalType` - 原始类型
- `source` - 源操作数
- `targetType` - 目标类型
- `target` - 目标虚拟寄存器

## 相关组件

- [IROperand](/lg/ir-operand) - 指令的操作数
- [IRType](/lg/ir-type) - 指令涉及的数据类型
- [IRControlFlowGraph](/lg/ir-control-flow-graph) - 指令所在的控制流结构
- [IRFunction](/lg/ir-function) - 包含指令的函数