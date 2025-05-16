// let a: string = 123


//  string  number boolean null undefined symbol bigint

let b :string = 'bbb'

let bbbb = 'bbbb'

let ccc
console.log("🚀 ~ string-number-boolean.ts:11 ~ ccc:", ccc)

ccc = 'cccc'
ccc = 123

// ccc.length

// ccc.toFixed(2)

// (ccc as number[]).push(1)


// undefined
// null

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

// vue props 类型声明
// https://cn.vuejs.org/guide/components/props.html#prop-validation
// https://cn.vuejs.org/api/sfc-script-setup#type-only-props-emit-declarations
// ! 对于props的类型检测只是dev时，打包后就是key的数组

