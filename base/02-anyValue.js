/**
 * TS - 任意值：通过 any 来声明
 * TS中任意值可以被赋值为任何类型
 * TS未声明类型的变量默认会被识别为任意值类型
 * TS中如果没有明确指定类型，那么它会根据TypeScript内部的类型推导规则来推断出一个类型
 */
var a1 = 10;
a1 = true;
a1 = "str";
console.log("Any: ", a1);
console.log("Any: ", a1.name);
console.log("Any: ", a1.user.age);
console.log("Any: ", a1.test());
// 类型推导
var an = "Diviner";
// an = 18; // 此处编译报错。
