# 基本数据类型

## 整数类型

| 类型     |    描述     |        取值范围        | 
|--------|:---------:|:------------------:|
| byte   | 8 位有符号整数  |  `-2^7` ~ `2^7-1`  |
| short  | 16 位有符号整数 | `-2^15` ~ `2^15-1` |
| int    | 32 位有符号整数 | `-2^31` ~ `2^31-1` |
| long   | 64 位有符号整数 | `-2^63` ~ `2^63-1` |
| ubyte  | 8 位无符号字符  |   `0` ~ `2^8-1`    |  
| ushort | 16 位无符号字符 |   `0` ~ `2^16-1`   |
| uint   | 32 位无符号字符 |   `0` ~ `2^32-1`   |
| ulong  | 64 位无符号字符 |   `0` ~ `2^64-1`   |

示例:

```l
var a: byte = 1
var b: short = 1
var c: int = 1
var d: long = 1L
var e: ubyte = 1
var f: ushort = 1
var g: uint = 1
var h: ulong = 1L
```

## 浮点类型

| 类型     |   描述   |
|--------|:------:|
| float  | 单精度浮点数 |
| double | 双精度浮点数 |

示例:

```l
var a: float = 1.1f
var b: double = 1.1
```

## 布尔类型

|  类型  |  描述  |       取值范围       |
|:----:|:----:|:----------------:|
| bool | 布尔类型 | `true` 或 `false` |

示例:

```l
var a: bool = true
var b: bool = false
```

## 字符类型

|  类型  |  描述  |      取值范围      |
|:----:|:----:|:--------------:|
| char | 字符类型 | `0` ~ `2^32-1` |

示例:

```l
var a: char = 'a'
var b: char = '中'
var c: char = '\n'
```

## 指针类型

L语言支持指针类型。示例:

```l
var a: int = 0
var ptr: int* = &a;
(*ptr) = 1
Standard.println(a)
Standard.println(*ptr)![img.png](img.png)
```
