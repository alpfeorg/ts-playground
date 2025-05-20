import { read } from "fs";
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