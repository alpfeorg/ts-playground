// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type Tes = typeof tesla // readonly [ , , , ,]

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]


// ============= Your Code Here =============
type Length<T extends readonly any[]> =   T['length']

let arr1 = [1,2]

type Arr1 = typeof arr1 // number[]， 跟上面的 Tes 是不同的

type TwoTuple = [number, number]
// let a: TwoTuple = arr1 // err

let arr2 = [1,2] as const // ! 后面的as const，让arr2变成了readonly 的 tuple，而不是普通的数组
// a = arr2 //err

type ReadonlyTwoTuple<T> = readonly [T, T]

let arr3: ReadonlyTwoTuple<number> = arr2

// arr3.push // err 因为是readonly，不可修改。不能新增，删除，也不能修改元素
// arr3[0] = 1 // err


