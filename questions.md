# Questions

1. any 和 unknown 的对比

2. typeof 后面只能跟标识符，也就是变量名或者属性名

3. index signature type

```typescript
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // M = string|number
```

4. 如果一个文件里定义了一个 Person 类，又定义了一个 Person 的接口，那会发生什么？

5. `T extends []` 和 `T extends any[]` 有啥区别

6. `Exclude` 和 `Omit` 有啥应用场景。对比一下