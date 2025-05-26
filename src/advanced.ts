type sameAs<T> = {
    [key in keyof T]: T[key]
}

let a1 = {
    name: 'Alice',
    age: 30,
}

type A1 = typeof a1

let a2: sameAs<A1>;

/**
 * a2 的类型跟 a1的一样，a2的属性就跟a1的一样，不能多，不能少
 */

a2 = {
    name: 'Bob',
    age: 25,
}

// a2 = {
//     name: 'Charlie',
//     age: 35,
//     address: "123 Main St",//err This will cause a type error because `address` is not in `A1`
    
// }

// a2 = {
//     name: 'Dave',
//     age: 40,
//     age: 100 // err This will cause a type error because `age` is not allowed to be duplicated
// }

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let a3: sameAs<A1> = new Person('Eve', 28); // ok a3 is an instance of Person, but it has the same properties as A1，可以直接赋值


interface Person {
    name: string;
    age: number;
    address: string; // 可选属性
    eat(): void; // 方法
    sleep(): void; // 方法
}

let a4=new Person('Frank', 32);
a4.eat = function() {
    console.log(`${this.name} is eating.`);
}

let a5: Person = a4
type A5 = typeof Person
a4 = {
    name: 'Grace',
    age: 29,
    address: '456 Elm St',
    eat: function() {
        console.log(`${this.name} is eating.`);
    },
    sleep: function() {
        console.log(`${this.name} is sleeping.`);
    }
}
a3 = a4

// a3 = {
//     name: 'Hannah',
//     age: 26,
//     eat: function() { // !err
//         console.log(`${this.name} is eating.`);
//     },
//     sleep: function() {
//         console.log(`${this.name} is sleeping.`);
//     }
// }
