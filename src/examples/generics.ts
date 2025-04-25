// 泛型示例
console.log("\n=== Generics Example ===\n");

// 1. 基本泛型函数
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

const myIdentity: GenericIdentityFn<number> = identity;
console.log("\nGeneric Interface:", myIdentity(123));

// 3. 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, addFn: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = addFn;
  }
}

const numberClass = new GenericNumber<number>(0, (x, y) => x + y);

console.log("\nGeneric Class:");
console.log("Zero value:", numberClass.zeroValue);
console.log("Add result:", numberClass.add(5, 10));

// 4. 泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

console.log("\nGeneric Constraints:");
console.log(loggingIdentity("hello")); // 字符串有 length 属性
console.log(loggingIdentity({ length: 10, value: 42 })); // 对象有 length 属性

// 5. 在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = { a: 1, b: "hello" };
console.log("\nKeyof Constraint:");
console.log(getProperty(obj, "a")); // 1
console.log(getProperty(obj, "b")); // "hello"
