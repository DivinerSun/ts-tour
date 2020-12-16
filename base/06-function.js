var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 函数声明
function sum(x, y) {
    return x + y;
}
// 表达式声明
var add = function (x, y) {
    return x + y;
};
console.log("sum: ", sum(10, 20));
console.log("add: ", add(100, 200));
var search = function (source, subString) {
    return source.search(subString) !== -1;
};
// 函数可选参数
var buildName = function (firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
};
var n1 = buildName("TypeScript");
var n2 = buildName("TypeScript", "Good!");
console.table({ N1: n1, N2: n2 });
// 函数参数默认值
var getFullName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Good"; }
    return firstName + " " + lastName;
};
// 函数参数不确定
var pushArray = function (arrry) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __spreadArrays(arrry, args);
};
var a1 = [1, "2", 3];
var a2 = pushArray(a1, 4, 5, "6", "7", 8);
console.table({
    a1: a1,
    a2: a2
});
function getPersonProperty(name, age) {
    if (age) {
        return "\u59D3\u540D\uFF1A" + name + " <---> \u5E74\u9F84\uFF1A" + age;
    }
    else {
        if (typeof name === "number") {
            return "\u5E74\u9F84\uFF1A" + name;
        }
        if (typeof name === "string") {
            return "\u59D3\u540D\uFF1A" + name;
        }
    }
}
var p1 = getPersonProperty("Diviner");
var p2 = getPersonProperty(18);
var p3 = getPersonProperty("Diviner", 18);
console.table({
    p1: p1,
    p2: p2,
    p3: p3
});
