# IRType

## 概述

IRType 系统是 LG IR 模块中用于表示数据类型的组件集合。它提供了各种基本类型和复合类型的表示，用于在编译过程中进行类型检查和代码生成。

## 类型层次结构

IRType 系统采用面向对象的设计，所有类型都继承自基类 IRType。

### 基本类型

1. **整数类型 (IRIntegerType)**
    - 表示各种大小的整数类型
    - 支持有符号和无符号整数

2. **浮点类型 (IRFloatType)**
    - 表示单精度浮点数

3. **双精度浮点类型 (IRDoubleType)**
    - 表示双精度浮点数

4. **空类型 (IRVoidType)**
    - 表示无类型，通常用于函数返回值

### 复合类型

1. **指针类型 (IRPointerType)**
    - 表示指向其他类型的指针
    - 可以指向任何其他 IRType

## 功能

### 类型检查

IRType 系统支持类型检查，确保程序中的操作符合类型规则。

### 类型转换

系统支持合法的类型转换操作，如整数到浮点数的转换。

### 内存大小计算

每种类型都知道自己在目标平台上的内存大小，用于内存分配和访问计算。

## 详细类型说明

### IRIntegerType（整数类型）

整数类型支持多种大小和符号性组合：

#### 大小规格
- OneBit (1位)
- OneByte (8位)
- TwoBytes (16位)
- FourBytes (32位)
- EightBytes (64位)

#### 符号性
- 有符号整数 (signed)
- 无符号整数 (unsigned)

#### 常用类型别名
IRType 类中提供了常用整数类型的便捷方法：
- getByteType() - 有符号8位整数
- getShortType() - 有符号16位整数
- getIntType() - 有符号32位整数
- getLongType() - 有符号64位整数
- getUnsignedByteType() - 无符号8位整数
- getUnsignedShortType() - 无符号16位整数
- getUnsignedIntType() - 无符号32位整数
- getUnsignedLongType() - 无符号64位整数
- getBooleanType() - 布尔类型（1位无符号整数）
- getCharType() - 字符类型（32位无符号整数）

### IRFloatType（单精度浮点类型）

表示 IEEE 754 单精度浮点数，占用 32 位（4 字节）内存。

### IRDoubleType（双精度浮点类型）

表示 IEEE 754 双精度浮点数，占用 64 位（8 字节）内存。

### IRVoidType（空类型）

表示无类型，通常用于函数无返回值的情况。这是一个单例类型。

### IRPointerType（指针类型）

表示指向其他类型的指针，包含一个基础类型 [base]，可以指向任何 IRType 实例。

## 使用场景

### 变量声明

在声明变量时，需要指定变量的类型。

### 函数签名

函数的参数和返回值都需要指定类型。

### 表达式计算

在进行表达式计算时，操作数的类型决定了操作的实现方式。

### 内存操作

在进行内存分配和访问时，需要知道数据的类型和大小。

### 类型转换

在需要类型转换时，IRType 系统可以验证转换的合法性。

## API 参考

### IRType

#### 静态方法

##### getByteType
```java
public static IRIntegerType getByteType()
```
获取有符号8位整数类型。

##### getShortType
```java
public static IRIntegerType getShortType()
```
获取有符号16位整数类型。

##### getIntType
```java
public static IRIntegerType getIntType()
```
获取有符号32位整数类型。

##### getLongType
```java
public static IRIntegerType getLongType()
```
获取有符号64位整数类型。

##### getUnsignedByteType
```java
public static IRIntegerType getUnsignedByteType()
```
获取无符号8位整数类型。

##### getUnsignedShortType
```java
public static IRIntegerType getUnsignedShortType()
```
获取无符号16位整数类型。

##### getUnsignedIntType
```java
public static IRIntegerType getUnsignedIntType()
```
获取无符号32位整数类型。

##### getUnsignedLongType
```java
public static IRIntegerType getUnsignedLongType()
```
获取无符号64位整数类型。

##### getBooleanType
```java
public static IRIntegerType getBooleanType()
```
获取布尔类型（1位无符号整数）。

##### getCharType
```java
public static IRIntegerType getCharType()
```
获取字符类型（32位无符号整数）。

##### getVoidType
```java
public static IRVoidType getVoidType()
```
获取空类型。

##### getFloatType
```java
public static IRFloatType getFloatType()
```
获取单精度浮点类型。

##### getDoubleType
```java
public static IRDoubleType getDoubleType()
```
获取双精度浮点类型。

##### getLength
```java
public static long getLength(IRType type)
```
获取指定类型的内存大小（字节）。

参数：
- `type` - 要计算大小的类型

返回：
- 类型的内存大小（字节）

### IRIntegerType

#### 构造函数
```java
public IRIntegerType(Size size, boolean unsigned)
```
创建一个新的整数类型。

参数：
- `size` - 整数大小
- `unsigned` - 是否为无符号

#### 字段
- `public final Size size` - 整数大小
- `public final boolean unsigned` - 是否为无符号

#### Size 枚举
表示整数类型的大小规格：
- OneBit (1位)
- OneByte (8位)
- TwoBytes (16位)
- FourBytes (32位)
- EightBytes (64位)

### IRPointerType

#### 构造函数
```java
public IRPointerType(IRType base)
```
创建一个新的指针类型。

参数：
- `base` - 指针指向的基础类型

#### 字段
- `public final IRType base` - 指针指向的基础类型

### IRVoidType

#### 实例
- `public static final IRVoidType INSTANCE` - VoidType 的单例实例

### IRFloatType

#### 实例
- `public static final IRFloatType INSTANCE` - FloatType 的单例实例

### IRDoubleType

#### 实例
- `public static final IRDoubleType INSTANCE` - DoubleType 的单例实例

## 相关组件

- [IRConstantPool](/lg/ir-constant-pool) - 常量的类型信息
- [IRFunction](/lg/ir-function) - 函数返回值和参数的类型
- [IRStructure](/lg/ir-structure) - 结构体类型
- [IRField](/lg/ir-field) - 字段的类型信息