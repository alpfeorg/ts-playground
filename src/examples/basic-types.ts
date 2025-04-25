// 基本类型示例
console.log("\n=== Basic Types Example ===\n");

// 1. 基本类型
type PrimitiveTypes = {
  string: string;
  number: number;
  boolean: boolean;
  null: null;
  undefined: undefined;
  symbol: symbol;
  bigint: bigint;
};

const primitiveExample: PrimitiveTypes = {
  string: "Hello",
  number: 42,
  boolean: true,
  null: null,
  undefined: undefined,
  symbol: Symbol("test"),
  bigint: 9007199254740991n,
};

console.log("Primitive Types:", primitiveExample);

// 2. 数组类型
type ArrayTypes = {
  numberArray: number[];
  stringArray: Array<string>;
  tuple: [string, number, boolean];
};

const arrayExample: ArrayTypes = {
  numberArray: [1, 2, 3],
  stringArray: ["a", "b", "c"],
  tuple: ["hello", 42, true],
};

console.log("\nArray Types:", arrayExample);

// 3. 对象类型
type ObjectTypes = {
  readonly id: number;
  name: string;
  age?: number; // 可选属性
  [key: string]: any; // 索引签名
};

const objectExample: ObjectTypes = {
  id: 1,
  name: "John",
  age: 30,
  extraField: "This is allowed by index signature",
};

console.log("\nObject Types:", objectExample);

// 4. 联合类型和类型别名
type ID = string | number;
type Status = "pending" | "approved" | "rejected";

const idExample: ID = "abc123"; // 可以是字符串
const anotherIdExample: ID = 123; // 也可以是数字
const statusExample: Status = "pending";

console.log("\nUnion Types:", {
  stringId: idExample,
  numberId: anotherIdExample,
  status: statusExample,
});
