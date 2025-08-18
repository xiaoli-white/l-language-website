# 变量

`变量`实际上只是程序`可操作`的`存储区`的`名称`。

## 定义变量

```l
var name: String = "value" // 一个String类型的变量
var age: int = 18 // 一个int类型的变量
var height: float = 1.8f // 一个float类型的变量
var isMale: boolean = true // 一个bool类型的变量
```

## 使用变量

```l
Standard.println(name) // 打印变量name的值
Standard.println(age) // 打印变量age的值
println(height) // 打印变量height的值
println(isMale) // 打印变量isMale的值
```

::: warning
当前对于`float`类型和`boolean`类型的变量输出暂未实现
:::