
// let a : string = 123

enum dd {
    a = 1,
    b,
    c = 'cccc',
    d = 'dddd'
}

// 同名枚举允许合并。
// ! 谁会把枚举值分开？或者分开用的场景是什么？
enum dd {
    e = 123
}

type p = {
    dv: dd
}

let p1 : p = {
    dv: dd.a
}
let p2: p = {
    dv: dd.c
}
console.log("🚀 ~ p1:", p1, p2)

function getdata(v: {e: p}) {
    return v.e
}

console.log(getdata({e: {dv: dd.d}}));

enum Options {
    start = "idle",
    working = 'working',
    done = 'done'
}

let res = {
    status: Options.working
}
console.log("🚀 ~ res:", res)

if(res.status === 'working') {
    console.log("==");

}
// 常量枚举，编译后，所用到枚举的地方会直接引用值，这个枚举最后是不存在的
// 而普通的枚举，是定义了对应的对象，directions 数组里是访问了这些枚举值.
// tsc 以后就能看出来
 enum Directions {
    Up,
    Down,
    Left,
    Right,
  }

  
  let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right,
  ];

  /**
   * 常量枚举，特点是编译后，这个枚举消失了，使用它的地方都是被直接替换了
   * 所以有个很好用的场景：
   * 在跟后台合作时，经常遇到加字段，改字段，但又不能立马给到前端，那前端可以写个 enum ，里面的field 自己定义。这样编译后，用的地方都是直接替换为对应的 field。
   * 等后台确定了，只要换 enum里的field 就行了，不需要改其他的，或者再对
   */
  const enum KEYS {
    isWork = 'isWork',
    isDone = 'isDone',
  }

  function check(obj: { [key in KEYS]: boolean }) {
    console.log(obj[KEYS.isWork]);
  }

  check({
    [KEYS.isWork]: true,
    [KEYS.isDone]: false,
  })
  




