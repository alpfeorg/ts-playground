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

// a.push(true)

// ---------注意类型的写法
// !不同的写法,代表不同的含义
let ba : (string|number)[] = [1,2,3]
ba.push('111')

let ca : Array<string|number> = [1, '2222']
ca = ba

let da: string[]|number[] = [1,2,3]
// da.push('dddd') // error

ca = da

let ea: string|number[] = [1,2,3]
ea.push(1111)
// ea.push('aaaaa')
ea = 'bbbbbbb'
// ea.push(1) //! error
// --------------------------

let fa: Array<number> = new Array(10) // 第一次赋值时虽然类型并不对应，但没问题
fa.push(1)
console.log("🚀 ~ fa:", fa, fa.length)
for(let i=0;i<fa.length;i++) {
    console.log(fa[i]);
    
}

// fa = [undefined] // 再次赋值，赋同样的 undefined 也不行

let arr = [] // 这里arr推断为 any[]，所以后面push 任何东西都可以，不会报错
arr.push(1)
arr.push('1111')

// 只读数组
type jj = readonly number[] // literal syntax
// type jjj = readonly Array<number> // err

type jjjj = ReadonlyArray<number>

let ra: readonly number[] =  [1,2,3]
// ra.push(123) // error


let rb:jjjj = [1,2,3]
rb.at(1)
// rb.pop()


