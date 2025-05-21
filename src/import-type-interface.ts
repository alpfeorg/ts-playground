import { ID } from "./examples/basic-types";

console.log("testttt");

// 创建一个包含类型错误的示例
const number: ID = "this is a string"; // 这里会报错，因为类型不匹配

import { Person } from "./module";

let p: Person = {
  name: "ddddd",
  age: 100,
  // address: undefined,
  school: '123'
  // school: undefined
};

import { AnimalInterface } from "./module";

class A implements AnimalInterface {
  type = "aaaa";
  eat() {
    console.log(this.type + "  eat");
  }
}

const cc = new A();
cc.eat();

// type 类型别名
type Point = {
  x: number;
  y: number;
  z?: number;
};
// ? 等于号后面的才是真正的类型
type NameType = string;

function hi(person: { name: string; age: number }) {
  console.log(person.name, person.age);
}
// ! 是分号啊，还是逗号啊
// ! 声明的类型，type，别名
// ! 最后是 分号
// 在js里是没有分号的
function foo(person: { name: string, age: number }) {
  console.log(person.name);
  console.log(person.age);
}

// ! 实际的对象
foo({name:'aaa123', age: 1000})

let point1: Point = { x: 0, y: 0, z: 0 };

let point2: Point = { x: 0, y: 0 };

point2 = point1;
point1 = point2;

// ! type 和 interface 的第一个大不同，就是type 有个=号，interface 没有。
interface IPoint {
  x:number
  y:number
}

// let point3 : IPoint = {x:0, y:0, z:0}
let point3 : IPoint = {x:0, y:0, z:0} as IPoint //类型断言。 我知道我在干什么，相信我
// let point4: IPoint = {x:0} as IPoint //err. 这个转换并不能保证正确执行
let point4: IPoint = {x: 0, y: '123123'} as unknown as IPoint //! 类型断言要小心
console.log(point4.x, point4.y, point4.x + point4.y);

type hello = "hello"

// let s:hello = 'world' // err: 报错里称 type world ,type hello

function say(m:hello) {
  console.log(m);
}

say('hello')
// say('world') // err

interface Animal {
  live():void
  eat: () => void
}

const animal :Animal = {
  live: function () {
    console.log('live')
  },
  eat: function () {
    console.log('eat')
  }
}

animal.eat();
animal.live()

