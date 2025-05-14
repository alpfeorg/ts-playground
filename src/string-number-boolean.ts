// let a: string = 123

let b :string = 'bbb'
let c: String = 'cccc'
let d:String = 'dddd'

/**
 * string 和 String
 * ts 里声明类型最普遍用 string
 * 单纯用 String 来声明个变量不会报错，是可以使用的。但容易出现混淆
 * ts 的String 和vue 中 props 的String ，不是一个东西
 * string 和 String 变量相互赋值会报错
 */

// b = c

c = d

console.log(c);
console.log(typeof c);



let f : string|undefined

// f = null

type addr = string | null

let f_addr:addr

// f_addr = undefined // undefind 不能赋值给 addr 类型，
// f_addr = null
// console.log("🚀 ~ f_addr:", f_addr) // 没有明确的赋值操作，ts通过告警阻断了


// let bb:undefined = null
// let cc:number = undefined
// let dd: null = undefined

