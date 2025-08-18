# 数组

L语言支持`数组类型`，`数组`作为一个`对象`存储在`堆`上，`变量`只存储`指向数组`的`指针`。

## 声明数组

```l
var a: int[] = new int[10]                              // 一维数组
var b: int[] = new int[]{1, 2, 3}                       // 具有初始化块一维数组
var c: int[][] = new int[10][10]                        // 列数已知的二维数组
var d: int[][] = new int[10][]                          // 列数未知的二维数组
var e: int[][] = new int[][]{new int[1], new int[2]}    // 具有初始化块的二维数组
```

## 访问数组元素

直接访问数组元素:

```l
var a: int[] = new int[10]
a[0] = 1
Standard.println(a[0])
```

使用`for`循环遍历数组:

```l
var arr: int[] = new int[10]
for (var i: int = 0; i < arr.length; ++i) {
    arr[i] = i
}
```

使用`foreach`循环遍历数组:
```l
var arr: int[] = new int[10]
foreach (var i: int in arr) {
    Standard.println(i)
}
```