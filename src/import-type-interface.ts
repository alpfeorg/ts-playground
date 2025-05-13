import { ID } from "./examples/basic-types";

console.log('testttt');


// 创建一个包含类型错误的示例
const number: ID = "this is a string"; // 这里会报错，因为类型不匹配


import { Person } from "./module";

let p: Person = {
  name: "ddddd",
  age: 100,
  school: '123'
};

import {AnimalInterface} from "./module"

class A implements AnimalInterface {
    type = 'aaaa'
    eat() {
        console.log(this.type + '  eat');
        
    }
}

const cc = new A()
cc.eat()

