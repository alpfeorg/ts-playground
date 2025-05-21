import {ID} from "./examples/basic-types";

export {}


function f<T>(arr: T[]) {
    return arr[0]
}

console.log(f<number>([1, 2, 3]));

console.log(f<string>(['1', '2', '3']));
console.log(f<boolean>([]));
f([1, 2, 3])
const d = f([]) // !这里也没报错
let e:string = d;

// let f: never = '123'

let a = f<string>([]) // a的类型被推断为string，但实际上f函数返回的是undefined，这里赋值并不会报错
let b: string = a
// b.toUpperCase()

// f<string>() // ! 这里会报错，因为没有传入参数 


function fb(msg: string) {
    console.log(msg);
}

let c : string = a
fb(c) // fb 不会报错，a的实际就是undefined，但这要等到运行时才会发现它是undefind，在编译期是不知道的。只能推断到 a 的类型是 string
// ! 这个例子证明，并不是 ts 类型正确了，就能保证代码是正确的，它只能极大的减少错误的可能性

/**
 * Return the first element of the array, or undefined if the array is empty.
 * @example
 * bar([1, 2, 3]) // 1
 * bar<string>([]) // undefined
 */
function bar<T>(arr: T[]) {
    return arr.length ? arr[0] : undefined // 这次推断类型就不一样了 T|undefined
}


type Nullable<T> = T | null | undefined

type TreeNode<T> = {
    value: T;
    left: Nullable<TreeNode<T>>;
    right: Nullable<TreeNode<T>>;
}

type Tree<T> = Nullable<TreeNode<T>>;

function createTree<T>(value: T): Tree<T> {
    return {
        value,
        left: null,
        right: null, // ! left 和 right 必须有这个字段，但是对应的值可以是空的，没有
    };
}

//! left?: xxxx 这样写，是说left 这个key可能没有，也可能有，left 是可选的

const tree: Tree<number> = createTree(1);
const tree2: TreeNode<number> = tree!

// ???? extends 代表约束条件，对T 是什么类型做出了限制
function comp<T extends {length: number}>(a: T, b: T) {
    return a.length - b.length
}

const a1 = comp([1, 2, 3], [1, 2])
const a2 = comp('123', '1234')
const a3 = comp({length: 1}, {length: 2})
const a4 = comp({length: 1}, {length: 2, name: '123'})
// const a5 = comp(1,2)


type MakeArray<T> = [T] extends [any] ? T[] : never
type StringArray = MakeArray<string>
type NumberArray = MakeArray<number>
type IDArray = MakeArray<number|string> // (number|string)[]

let ids: IDArray = [1,2,'333333333']
// ids.push(true) // Argument of type 'boolean' is not assignable to parameter of type 'string | number'

type Tup = [number, string]
let tup: Tup = [1, 'aaa'] // tuple
tup.push('a') //ok 只能push进去定义的类型的联合类型
// tup = ['a','a'] //err
// tup.push(true) // err //Argument of type 'boolean' is not assignable to parameter of type 'string | number'
tup.pop()
tup.pop()
console.log("=>(generics.ts:94) tup", tup, tup[1], tup[1].substring(0,1));// ts里 ok，但实际执行报错 没值，但可以访问
tup.push(1,2,3,4,5)
// @ts-ignore
console.log("=>(generics.ts:98) tup", tup[5]); // err 有值，但不然访问


// let bup: Tup = [1] // err 缺元素
let cup: Tup
// cup = [1]

// cup[0] = 1
cup = tup // tup 实际上已经不满足类型 Tup 的要求，但依然可以赋值
console.log("=>(generics.ts:103) cup", cup);