# IRVisitor

## 概述

IRVisitor 是 LG IR 模块中实现访问者模式的核心类。它提供了一种遍历和操作 IR 节点的标准方式，使得可以在不修改节点类的情况下添加新的操作，如代码生成、优化、分析等。

## 设计模式

IRVisitor 使用访问者设计模式，这是处理复杂对象结构（如抽象语法树或中间表示）的经典设计模式。通过将操作与对象结构分离，访问者模式提供了以下优势：

1. **扩展性** - 可以在不修改现有类的情况下添加新的操作
2. **关注点分离** - 操作逻辑与数据结构分离
3. **一致性** - 提供统一的遍历接口

## 结构

IRVisitor 是一个抽象类，为每种 IR 节点类型提供了对应的访问方法。所有具体的访问者类都应该继承自这个类并实现相应的方法。

## 功能

### 节点遍历

IRVisitor 提供了 visit 方法来遍历各种 IR 节点，包括：
- 模块（Module）
- 类型（Type）
- 函数（Function）
- 指令（Instruction）
- 操作数（Operand）
- 结构体（Structure）
- 字段（Field）
- 常量池（Constant Pool）

### 递归访问

访问者会自动递归访问节点的子节点，确保整个 IR 树都能被遍历到。

### 自定义处理

具体的访问者实现可以选择性地处理特定类型的节点，而忽略其他节点。

## 使用场景

### 代码生成

继承 IRVisitor 实现具体的代码生成器，将 IR 转换为目标代码。

### 优化器

实现优化算法，通过访问 IR 节点进行各种优化操作。

### 分析器

进行静态分析，如数据流分析、控制流分析等。

### 打印器

实现 IR 的打印和可视化功能。

## API 参考

### IRVisitor 类

#### visit
```java
public Object visit(IRNode irNode, Object additional)
```

通用访问方法，通过调用节点的 accept 方法来分发到具体的访问方法。

参数：
- `irNode` - 要访问的 IR 节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitModule
```java
public Object visitModule(IRModule irModule, Object additional)
```

访问模块节点，会递归访问模块中的所有子节点。

参数：
- `irModule` - 模块节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitFunction
```java
public Object visitFunction(IRFunction irFunction, Object additional)
```

访问函数节点，会递归访问函数的返回类型、字段和控制流图。

参数：
- `irFunction` - 函数节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitStructure
```java
public Object visitStructure(IRStructure irStructure, Object additional)
```

访问结构体节点，会递归访问结构体的所有字段。

参数：
- `irStructure` - 结构体节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitField
```java
public Object visitField(IRField irField, Object additional)
```

访问字段节点，会访问字段的类型。

参数：
- `irField` - 字段节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitConstantPool
```java
public Object visitConstantPool(IRConstantPool constantPool, Object additional)
```

访问常量池节点，会递归访问所有常量条目。

参数：
- `constantPool` - 常量池节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitGlobalDataSection
```java
public Object visitGlobalDataSection(IRGlobalDataSection irGlobalDataSection, Object additional)
```

访问全局数据段节点，会递归访问所有全局数据项。

参数：
- `irGlobalDataSection` - 全局数据段节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitIntegerType
```java
public Object visitIntegerType(IRIntegerType irIntegerType, Object additional)
```

访问整数类型节点。

参数：
- `irIntegerType` - 整数类型节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitPointerType
```java
public Object visitPointerType(IRPointerType irPointerType, Object additional)
```

访问指针类型节点，会递归访问基础类型。

参数：
- `irPointerType` - 指针类型节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitCalculate
```java
public Object visitCalculate(IRCalculate irCalculate, Object additional)
```

访问计算指令节点，会访问操作数类型和操作数。

参数：
- `irCalculate` - 计算指令节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitInvoke
```java
public Object visitInvoke(IRInvoke irInvoke, Object additional)
```

访问函数调用指令节点，会访问函数地址、参数类型和参数。

参数：
- `irInvoke` - 函数调用指令节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitVirtualRegister
```java
public Object visitVirtualRegister(IRVirtualRegister irVirtualRegister, Object additional)
```

访问虚拟寄存器操作数节点。

参数：
- `irVirtualRegister` - 虚拟寄存器操作数节点
- `additional` - 附加参数

返回：
- 访问结果

#### visitConstant
```java
public Object visitConstant(IRConstant irConstant, Object additional)
```

访问常量操作数节点。

参数：
- `irConstant` - 常量操作数节点
- `additional` - 附加参数

返回：
- 访问结果

## 实现示例

要实现一个具体的访问者，需要继承 IRVisitor 类并重写相应的方法。例如，实现一个简单的打印访问者：

```java
public class PrintVisitor extends IRVisitor {
    @Override
    public Object visitModule(IRModule irModule, Object additional) {
        System.out.println("Visiting module: " + irModule);
        return super.visitModule(irModule, additional);
    }
    
    @Override
    public Object visitFunction(IRFunction irFunction, Object additional) {
        System.out.println("Visiting function: " + irFunction.name);
        return super.visitFunction(irFunction, additional);
    }
}
```

## 相关组件

- [IRModule](/lg/ir-module) - 模块节点
- [IRFunction](/lg/ir-function) - 函数节点
- [IRInstruction](/lg/ir-instruction) - 指令节点
- [IROperand](/lg/ir-operand) - 操作数节点