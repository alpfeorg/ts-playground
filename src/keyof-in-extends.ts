
import { Person } from "./module";

export {}

// https://wangdoc.com/typescript/operator

let a1 = {
    x: 1,
    y: 'aaaa',
}

type t1 = keyof typeof a1; // "x" | "y"
type t2 = typeof a1[keyof typeof a1] // string | number
type ID =  t2

let a2: object = {}
let a3: object = {
    x: 1,
    y: 'aaaa',
}
a3 = a2
a2 = a3
let a4: object = [1,2,3]
// a4 = null // error

interface T {
  [prop: string]: number;
}
type KeyT = keyof T; //! string | number

type Result = keyof [1,2,3] //????

type cc = keyof { a: 1, b: 2 }

let dv = { a: 1, b: 2 }
type dd = keyof typeof dv

type ee = keyof "123"

type f1 = keyof 123 // 可以加基础类型，不能加引用类型。引用类型要加 typeof // 字面量转为 Number 构造函数创建的对象，再找他的key
// type f2 = typeof 123 //err typeof 后面只能跟变量名

type f3  = typeof String //! f3 = StringConstructor. String 在这代表的是什么？ String这个类？还是 String这个interface？

let fv = new String('123')
type ff = keyof typeof fv // keyof String ,String 在这里也是个实际的存在，就是 js里String这个类，是js中的类就意味着他是个Object，是个对象，就可以用keyof

type gg = typeof fv

let gg1: gg = 'length123' // ok
// let ff1: ff = gg1 //err




let arr = [1,1,1]
type Result2 = keyof typeof arr // ???

type MyObj = {
  foo: number,
  bar: string,
};

type Keys = keyof MyObj; // "foo" | "bar"
type Values = MyObj[Keys]; // number | string

let a = 'foo' as const
let b: Keys = a 


const c = 'bar'
b = c

// 把一个对象变成了不可变对象
// 只是在编译期有这个能力，运行起来后，并不是真的不可变
type Immutable<T> = {
    +readonly [K in keyof T]: T[K];
}

type ReadonlyMyObj = Immutable<MyObj>;
const obj: ReadonlyMyObj = {
    foo: 1,
    bar: 'hello',
}

// obj.foo = 2; // Error: Cannot assign to 'foo' because it is a read-only property.