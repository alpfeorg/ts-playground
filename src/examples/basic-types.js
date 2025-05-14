// 基本类型示例
console.log("\n=== Basic Types Example ===\n");
const a = 123;
const primitiveExample = {
    string: "Hello",
    number: 42,
    boolean: true,
    null: null,
    undefined: undefined,
    symbol: Symbol("test"),
    bigint: 9007199254740991n,
};
console.log("Primitive Types:", primitiveExample);
const arrayExample = {
    numberArray: [1, 2, 3],
    stringArray: ["a", "b", "c"],
    tuple: ["hello", 42, true],
};
console.log("\nArray Types:", arrayExample);
const objectExample = {
    id: 1,
    name: "John",
    age: 30,
    extraField: "This is allowed by index signature",
};
console.log("\nObject Types:", objectExample);
const idExample = "abc123"; // 可以是字符串
const anotherIdExample = 123; // 也可以是数字
const statusExample = "pending";
console.log("\nUnion Types:", {
    stringId: idExample,
    numberId: anotherIdExample,
    status: statusExample,
});
var Options;
(function (Options) {
    Options[Options["first"] = 0] = "first";
    Options[Options["second"] = 1] = "second";
    Options[Options["third"] = 2] = "third";
})(Options || (Options = {}));
let op = Options.first;
function opp(op) {
    console.log(op);
}
export {};
