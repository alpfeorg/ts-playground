import { ID } from "./examples/basic-types";

console.log("testttt");

// 创建一个包含类型错误的示例
const number: ID = "this is a string"; // 这里会报错，因为类型不匹配

import { Person } from "./module";

let p: Person = {
  name: "ddddd",
  age: 100,
  // school: '123'
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
