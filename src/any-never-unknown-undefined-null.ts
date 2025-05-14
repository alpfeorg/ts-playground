/**
 * any- 让ts自己分析，但无法确认的类型就是 any
 * 一个变量是any类型，在它身上去访问任意属性，这些属性也是 any，没有确定类型
 */

export {}

let a: any = '123'
a.xxx()

let b:unknown = []
// b.push(1) // err. b 的类型是 unknown，不知道什么类型.既然不知道，那就不能执行任何操作，会很危险
// b.xxx


// 方法返回的依然是 unknown
// 可以通过 narrowing ，缩小类型范围后，调用对应类型的方法和属性
function many(val: unknown) {
    if(typeof val === 'string') {
        return val.length
    } else if(Array.isArray(val)) {
        return val.push(11)
    } else if(typeof val === 'boolean') {
        return val = false
    } else {
        return val
    }
}

// 返回类型是 void，没有返回值
function nnn() {}
// 返回类型是 never， 虽然也是没有返回值，但更准确的是 这里不会有返回,会异常中断的，永远不会正常的走完
function mmm() : never {
    throw new Error('123')
    
}

let call1 = nnn() // call1 ==> void

// let call2 : undefined = call1 // err void 类型不能赋值给 undefined

type Shape = "circle" | "square" | 'rect';

function assertNever(x : never): never {
  console.log("🚀 ~ assertNever ~ x:", x)

  throw new Error("Unexpected object: " + x);
}

function getArea(shape: Shape) {
  switch (shape) {
    case "circle": return Math.PI * 2;
    case "square": return 4;
    // default: return assertNever(shape); // 如果新增了类型会报错. 新增了 rect类型，但rect 类型不是 never 类型，所以报错，提示该修改源码了
  }
}

getArea('circle')
getArea('rect')
// getArea(undefined)

// let n: string = null // err. 开启 strictNullChecks， null 和 undefined 就不能给其他类型赋值了

let m:string
// console.log(m); //err 也是因为 strictNullChecks，如果没初始化，是不允许使用的

// let n:string = never // err never only refers to a type, but is being used as a value here.
