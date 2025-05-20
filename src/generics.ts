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

