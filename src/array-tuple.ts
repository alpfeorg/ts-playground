let a: number[] = [1,2,3]

let b: [number] = [1]

// a = b
// b = a

// let c = [1] // 默认是 number[]

// b = c // 即使length一样，也不能给b赋值

// c = b

/**
 * 在 TypeScript 中，当一个文件没有顶层的 import 或 export 语句时，它会被视为脚本（全局作用域），所有顶层变量声明会污染全局作用域。如果多个文件声明了同名变量，就会引发冲突，导致错误 Cannot redeclare block-scoped variable
 * 
 * 添加export 后，这个文件就成了一个模块，模块就有了模块自己的作用域
 */

export {}