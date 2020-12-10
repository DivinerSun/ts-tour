/**
 * JS(包含ES6新增)目前已经有7中原始数据类型
 *  布尔值
 *  数值
 *  字符串
 *  null
 *  undefined
 *  Symbol
 *  BigInt
 * 本节主要介绍前五种在TypeScript中的应用
 */

// 布尔值
const isDone: boolean = true;
const b: Boolean = new Boolean(1);
const b1: Boolean = Boolean(1);
const b2: boolean = Boolean(1);
// 以下方式是错误的，因为 new Boolean() 返回的是一个 Boolean 的对象实例 而非 boolean
// const b3: boolean = new Boolean(1);

// 数值
const num1: number = 10;
// 十六进制
const num2: number = 0xffee;
// ES6中二进制
const num3: number = 0b1010;
// ES6中八进制
const num4: number = 0o764;
// 数值特殊值
const num5: number = NaN;
const num6: number = Infinity;

// 字符串
const username: string = "Diviner";
const age: number = 18;
const user: string = `你好，我叫 ${username}, 今年 ${age} 岁`;

// 空值
// TS中使用 void 表示空值，并且空值只能被赋值为 null 和 undefined
const unusable: void = null;
const unusable2: void = undefined;
function returnVoid(): void {
  console.log("此函数无返回值");
}

// Null 个 Undefined
// 这两个类型可以赋值给任何类型
const n1: null = null;
const n2: null = undefined;
const u1: undefined = undefined;
const u2: undefined = null;
const bn: boolean = null;
const bu: boolean = undefined;
const nn: number = null;
const nu: number = undefined;
const sn: string = null;
const su: string = undefined;
