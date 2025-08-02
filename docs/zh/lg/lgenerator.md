# LGenerator

## 概述

LGenerator 是 LG 模块中的主生成器类，负责根据 IR（中间表示）生成目标代码。它是一个插件化架构的代码生成器，可以根据不同的平台目标加载相应的代码生成插件。

## 功能

### 插件化架构

LGenerator 使用插件化架构来支持多种目标平台。它通过 PackageManager 查找和加载相应的代码生成插件，使得系统可以轻松扩展以支持新的目标平台。

### 平台适配

LGenerator 支持通过命令行参数指定目标平台，然后自动加载对应的代码生成插件。

### 代码生成调度

LGenerator 负责调度代码生成过程，将 IRModule 传递给具体的代码生成器实现。

## 使用场景

### 命令行工具

LGenerator 提供了 main 方法，可以作为命令行工具直接使用。

### API 调用

其他模块可以通过调用 generate 方法来触发代码生成过程。

### 平台扩展

通过实现 Generator 接口并注册为插件，可以轻松添加对新目标平台的支持。

## API 参考

### LGenerator 类

#### main
```java
public static void main(String[] args)
```

程序入口点，解析命令行参数并启动代码生成过程。

参数：
- `args` - 命令行参数

#### getOptionsParser
```java
public static OptionsParser getOptionsParser()
```

获取命令行选项解析器，定义了支持的命令行参数。

返回：
- OptionsParser 实例

#### generate
```java
public static void generate(IRModule irModule, Options options)
```

执行代码生成过程。

参数：
- `irModule` - 要生成代码的 IR 模块
- `options` - 代码生成选项

### 支持的命令行参数

- `--help`, `-h` - 显示帮助信息
- `--version`, `-v` - 显示版本信息
- `--verbose`, `-verbose` - 启用详细输出
- `--platform` - 指定目标平台（默认为 "lvm"）
- `--output`, `-o` - 指定输出文件路径

## 工作流程

1. 解析命令行参数
2. 根据指定的平台查找对应的代码生成插件
3. 加载插件 JAR 文件
4. 实例化插件中的 Generator 类
5. 调用 Generator 的 generate 方法执行代码生成

## 插件机制

LGenerator 通过 PackageManager 查找类型为 "lg-plugin" 的插件，并根据平台参数筛选出对应的插件。插件需要提供以下信息：

- `type`: 必须为 "lg-plugin"
- `platforms`: 支持的平台列表
- `main-jar`: 主 JAR 文件路径
- `main-class`: 主类名（必须继承 Generator）

## 相关组件

- [Generator](/lg/generator) - 代码生成器抽象基类
- [IRModule](/lg/ir-module) - 输入的 IR 模块