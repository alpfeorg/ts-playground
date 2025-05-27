// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

//// @ts-expect-error 这里就是会报错，不用管我


interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
// 跟内置的是一样的写法
// K的限制要提前到泛型约束里，而不是在类型定义里再去 extends keyof T


type isIN<key, keys> = key extends keys ? key : never

type k1 = isIN<'hello', 'hello'|'world'>

let obj = {
  name:'aaaa',
  age: 18
}

type k2 = isIN<'name', keyof typeof obj> // 'name'

// let key2 : k2 = '123' //err

type k3 = isIN<'add', keyof typeof obj> // never

// Variables of type never can't be assigned any value
// never 就是为了标明这种情况永远都不可以发生，因为一个变量的类型是never，那他讲无法进行任何赋值，则就没有任何价值。
// isIN 这个泛型工具，判断了要处理的key 到底在不在目标里面。如果不在就不可以进行操作
// let key3:k3 = 'sdf' // err

/**
 * {
 *  name: string
 * }
 */
type NameObj = Pick<typeof obj, 'name'>



