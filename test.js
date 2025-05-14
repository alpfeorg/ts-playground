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
var directions = [
    0 /* Directions.Up */,
    1 /* Directions.Down */,
    2 /* Directions.Left */,
    3 /* Directions.Right */,
];
