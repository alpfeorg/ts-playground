// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


// ============= Your Code Here =============

// The First type takes an array type T and checks if it can be destructured into a first element F and the rest of the elements.
// If it can, it returns F; otherwise, it returns never. This effectively gives you the type of the first element of the array or never if the array is empty.
// This solution uses TypeScript's conditional types and tuple destructuring to achieve the desired functionality.

type First<T extends any[]> = T extends [infer F, ...infer _] ? F : never;


let arr = [1,2,3]
type arrType = typeof arr; 

let arr2 : Array<number> = [1, 2, 3];
type arr2Type = typeof arr2; 

type arr3Type = First<typeof arr>
type arr4Type = First<typeof arr2>;

let arr5: [number, number, number] = [1, 2, 3];
type arr5Type = First<typeof arr5>; // arr5Type 是number类型, 这个可以，是因为 arr5 是元组类型，不是数组类型

// let v: arr3Type = 1;

type is<T> = T extends any[] ? true : false;
type isArr = is<typeof arr>; // isArr 固定是true了

let isarr : isArr = true;
// let isarr2 : isArr = false; 

// A more generic type utility to get the first element type of an array
// 先看能不能解释成一个元组
// 这里 readonly 元组比普通元组适用范围更广一些
// 如果能解释成元组，就返回第一个的类型。如果不能解释成元组，就看看是不是数组。
type FirstOfArray<T> = T extends readonly [infer First, ...any[]] 
  ? First 
  : T extends Array<infer U> 
    ? U 
    : never;

// Test cases for FirstOfArray
type test1 = FirstOfArray<[1, 2, 3]>; // 1 . //当我们写 [1, 2, 3] 时，TypeScript 将其推断为字面量元组类型 [1, 2, 3].所以 FirstOfArray<[1, 2, 3]> 会返回字面量类型 1，而不是 number
type test2 = FirstOfArray<number[]>; // number
type test3 = FirstOfArray<[]>; // never
type test4 = FirstOfArray<[string, number]>; // string
type test5 = FirstOfArray<Array<string>>; // string


// let va: test1 = 2 //err Type '2' is not assignable to type '1'

/**
 * readonly []  和 [] 相比， 前者是更基础的类型。
 * readonly[]  可以是 []
 * 但 [] 不能是 readonly[]
 */

// Examples to demonstrate the difference between T extends [] and T extends any[]
type IsEmptyTuple<T> = T extends readonly [] ? true : false;
type IsArray<T> = T extends readonly any[] ? true : false;

/**
 * 1. `readonly any[]` 是一个更通用的类型，它可以匹配：
   - 可变数组（如 `number[]`）
   - 只读数组（如 `readonly number[]`）
   - 元组（如 `[1, 2, 3]`）
   - 只读元组（如 `readonly [1, 2, 3]`）

2. 在 TypeScript 的类型系统中：
   - 可变数组类型是只读数组类型的子类型
   - 所以 `number[]` 可以赋值给 `readonly number[]`
   - 但 `readonly number[]` 不能赋值给 `number[]`

这就是为什么使用 `readonly any[]` 可以同时匹配可变和只读数组，而 `any[]` 只能匹配可变数组。
 */

// Test cases for IsEmptyTuple
type empty1 = IsEmptyTuple<[]>; // true
type empty2 = IsEmptyTuple<[1]>; // false
type empty3 = IsEmptyTuple<number[]>; // false

type empty4 = IsEmptyTuple<arr5> //false
type empty5 = IsEmptyTuple<readonly number[]> // false



let emptuple : [] = []
let empArray: number[] = []
type emptyTupleType = typeof emptuple
// let emptyTuple2: emptyTupleType = empArray //err
let emptyTuple2: emptyTupleType = emptuple // ok


// Test cases for IsArray
type arr1 = IsArray<[]>; // true
type arr2 = IsArray<[1]>; // true
type arr3 = IsArray<number[]>; // true
type arr4 = IsArray<readonly number[]>; // true
type arr5 = IsArray<string>; // false
type arr6 = IsArray<[string, number]>//true

// More examples to demonstrate empty tuple type checking
type empty6 = IsEmptyTuple<readonly []>; // true - 现在会返回 true
type empty7 = IsEmptyTuple<[number]>; // false - 非空元组
type empty8 = IsEmptyTuple<readonly [number]>; // false - 只读非空元组

// Examples to show the difference between array types and tuple types
let arr11: number[] = []; // 普通数组
let arr12: readonly number[] = []; // 只读数组
let arr13: [] = []; // 空元组
// arr13.push(1) //err 
let arr14: readonly [] = []; // 只读空元组

// 这些赋值会失败，因为类型不匹配
// let a: [] = arr11; // Error: number[] is not assignable to []
// let b: [] = arr12; // Error: readonly number[] is not assignable to []

// 这些赋值会成功，因为空元组可以赋值给数组
let c: number[] = arr13; // OK
let d: readonly number[] = arr13; // OK
c.push(1) // 虽然arr13 是空元祖,但通过d依然可以添加元素
// arr13.push(2) // err 但如果直接给 arr13加，是会报错的
console.log("🚀 ~ c:", c, arr13)




let readonlyArr : ReadonlyArray<number> = [1]
// readonlyArr.push(1)