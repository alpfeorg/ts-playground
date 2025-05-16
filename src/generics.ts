/*************  ✨ Windsurf Command ⭐  *************/
export {}

// 1. 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

console.log("Identity Function:");
console.log(identity<string>("hello")); // 类型参数显式指定
console.log(identity(42)); // 类型参数自动推断

// 2. 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity2<T>(arg: T): T {
  return arg;
}

const myIdentity: GenericIdentityFn<unknown> = identity2;

console.log("\nGeneric Interface:", myIdentity(123));

// 3. 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, add: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

const numberClass = new GenericNumber<number>(0, (x, y) => x + y);

console.log("\nGeneric Class:");
console.log("Zero value:", numberClass.zeroValue);
console.log("Add result:", numberClass.add(5, 10));
/*******  1fff7682-5f46-4645-8387-37c148b0bb13  *******/