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

type Dog = {
    name: string,
    bark: () => void,
    sleep: () => void
}

type Cat = {
    name: string,
    meow: () => void
}

type Pet = Dog|Cat

/**
 * 只是个 Dog 或者 只是个Cat 都行
 * 除了是Dog或者Cat的一种外，还有另一种的属性或者方法，也行
 */

let p1: Pet = {
    name: '1111',
    bark() {
        console.log(this.name + 'bark')
    },
    sleep() {
        console.log(this.name + 'sleep');
        
    }
}

let p2: Pet = {
    name: '2222',
    meow() {
        console.log(this.name + 'meow')
    },
    bark() {
        console.log(this.name + 'bark');
        
    } // p2 有 Cat 类型的属性和方法，同时还有个不属于 Cat，但属于Dog的方法。如果是按照 要么是 Dog，要么是 Cat的规则来说，那这里应该会报错。p4 就展示了虽然含有类型的所有定义，但多了方法，也会报错。所以p2 如果按照 Cat 来判断的话，bark 就是多余的，是要报错的。但如果按照 Dog来判断，又缺少了 sleep方法
}

let p3: Pet = {
    name: '3333',
    bark() {
        console.log(this.name + 'bark')
    },
    meow() {
        console.log(this.name + 'meow');
        
    }
    ,
    // eat: () => {} // err eat属性不在Pet定义的类型中
}


function testPet(pet: Pet) {
    if('meow' in pet) {
        pet.meow()
        
    }
     if('bark' in pet) { // !这里并不准确，虽然pet 有 bark，但 Pet 是联合类型， pet 并不真的能满足 Dog的类型，
        pet.bark()
        pet.sleep()
    } else {
        console.log('not a pet')
    }
}

let p11:Pet = {
    name: 'p111',
    bark() {},
    sleep() {}
}

testPet(p1)
// testPet(p2) // err
// testPet(p3) // err


type P = {
    name: string,
    age: number
}
// ! P是单纯的，简单的类型。
// p 这个对象必须严格的满足P的定义，也就是只能有name 和 age 属性，不能有其他的属性或者方法，要不就报错
// let p4: P = {
//     name:'123',
//     age: 123,
//     eat: () => {} // err
// }

// !!!!!
// !!!!!
// !!!! 联合类型要求至少满足一个类型就对。并且不允许有未曾出现过的属性或者方法
