# Generator

## 概述

Generator 是 LG 模块中代码生成器的抽象基类。它定义了所有具体代码生成器必须实现的接口，为将 IR（中间表示）转换为目标代码提供了统一的框架。

## 设计模式

Generator 使用模板方法模式，定义了代码生成的通用流程，但将具体的生成逻辑留给子类实现。这种设计允许：

1. **统一接口** - 所有代码生成器都遵循相同的接口
2. **易于扩展** - 可以轻松添加新的代码生成器
3. **解耦合** - 代码生成逻辑与主调度逻辑分离

## 结构

Generator 是一个抽象类，包含一个抽象方法`generate`，所有具体的代码生成器都必须实现这个方法。

```java
 public abstract void generate(IRModule module, Options options)
```
## 功能

### 代码生成接口

Generator 定义了将 IRModule 转换为目标代码的通用接口。

### 选项处理

Generator 接收 Options 对象，允许根据不同的选项执行不同的代码生成逻辑。

### 扩展性

通过继承 Generator 类，可以实现针对不同目标平台的代码生成器。

## 使用场景

### 目标代码生成

具体代码生成器通过实现 Generator 接口，将 IR 转换为特定目标平台的代码，如：
- 虚拟机字节码
- LLVM IR
- 本地机器码
- 其他中间表示

### 插件开发

作为 LGenerator 插件的核心接口，所有代码生成插件都必须实现 Generator 类。

### 工具集成

其他工具可以通过 Generator 接口集成代码生成功能。

## API 参考

### Generator 类

#### generate
```java
public abstract void generate(IRModule module, Options options)
```

抽象方法，具体的代码生成器必须实现此方法以执行实际的代码生成逻辑。

参数：
- `module` - 要生成代码的 IR 模块
- `options` - 代码生成选项

## 实现示例

要实现一个具体的代码生成器，需要继承 Generator 类并实现 generate 方法。例如：

```java
public class BytecodeGenerator extends Generator {
    @Override
    public void generate(IRModule module, Options options) {
        // 实现字节码生成逻辑
        String output = options.get("output", String.class);
        // 生成字节码并写入文件
        // ...
    }
}
```

## 相关组件

- [LGenerator](/lg/lgenerator) - 主生成器调度类
- [IRModule](/lg/ir-module) - 输入的 IR 模块