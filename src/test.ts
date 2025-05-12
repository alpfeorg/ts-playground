import { ID } from "./examples/basic-types";

// 创建一个包含类型错误的示例
const number: ID = "this is a string"; // 这里会报错，因为类型不匹配

console.log(number); 