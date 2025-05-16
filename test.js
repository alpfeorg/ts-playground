// let a : string = 123
var dd;
(function (dd) {
    dd[dd["a"] = 1] = "a";
    dd[dd["b"] = 2] = "b";
    dd["c"] = "cccc";
    dd["d"] = "dddd";
})(dd || (dd = {}));
// 同名枚举允许合并。
// ! 谁会把枚举值分开？或者分开用的场景是什么？
(function (dd) {
    dd[dd["e"] = 123] = "e";
})(dd || (dd = {}));
var p1 = {
    dv: dd.a
};
var p2 = {
    dv: dd.c
};
console.log("🚀 ~ p1:", p1, p2);
function getdata(v) {
    return v.e;
}
console.log(getdata({ e: { dv: dd.d } }));
var Options;
(function (Options) {
    Options["start"] = "idle";
    Options["working"] = "working";
    Options["done"] = "done";
})(Options || (Options = {}));
var res = {
    status: Options.working
};
console.log("🚀 ~ res:", res);
if (res.status === 'working') {
    console.log("==");
}
// 常量枚举，编译后，所用到枚举的地方会直接引用值，这个枚举最后是不存在的
// 而普通的枚举，是定义了对应的对象，directions 数组里是访问了这些枚举值.
// tsc 以后就能看出来
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
var directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right,
];
