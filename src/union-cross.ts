/**
 * 联合类型 union type
 * 要么是这个类型，要么是那个类型，始终只能是一种类型
 */

export {}

let a : string|number
// console.log("🚀 ~ a:", a)

/**
 * 交叉类型
 * 同时是这几个类型，既是人，也是动物，也能吃饭
 */
let b: string&number // b 实际是 never
// b = 11

interface IAnimal {
    type:string
}

interface IPerson extends IAnimal {
    work: () => void
}

interface IEat {
    eat: () => void
}

type CC = IAnimal & IPerson & IEat

let c: CC = {
    type: 'ppp',
    work() {
        console.log("🚀 ~ work ~ work:")
    },
    eat() {
        console.log("🚀 ~ eat ~ eat:")
    }
}
c.work()
c.eat()

// 典型使用
type ErrorHandling = {
    code: number,
    msg?:string
}

type ResultData<T> = {
    result: Array<T>
}

type ResponseData = ErrorHandling & ResultData<number>

let res: ResponseData
res = {
    code: 200,
    result: [1,2,3]
}
// ---------------------
type Resp<T> = {
    code: number,// 进一步声明支持哪些码
    msg?:string,
    result?: Array<T> 
}

type RespString = Resp<string>
type RespNumber = Resp<number>

// let baa: RespNumber = {
//     code: 200,
//     result: ['1']
// }

// ---------

type StatusCode = 200|300|400|500
type SuccessRes<T> = {
    code: 200,
    result: T
}

type ErrorRes<T> = {
    code: Exclude<StatusCode, 200>,
    msg: string,
    result?: T
}

type HttpRes<T> = SuccessRes<T>|ErrorRes<T>

let succ1: HttpRes<Array<number>> = {
    code: 200,
    result:[1,2,3]
}

let succ2 : HttpRes<number> = {
    code: 500,
    result: 123,
    msg: 'error'
}

// let err1 : ErrorRes = {}

/**
 * ! 默认设置 unknown，可以不用传泛型T。ErrorRes 就要填
 */
type ErrRes<T=unknown> = {
    code: Exclude<StatusCode, 200>,
    msg: string,
    result?: T
}

let cbd: ErrRes = {
    code: 500,
    msg: 'err'
}

let dba: ErrRes<Array<number>> = {
    code: 500,
    msg: 'err',
    result: [1,2,3]
}

let eee: ErrRes<number> = {
    code: 400,
    msg: 'eeee',
    // result: '123123' // 泛型限制了是 number类型，这里赋值 string
}

