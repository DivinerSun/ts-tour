/**
 * TS - 联合类型：多个类型之间使用 | 分隔
 * TS中的联合类型表示当前值的类型可以为多个类型中的某一个类型
 * 当访问联合类型的某个属性或方法时，只能访问多个类型共有的属性和方法
 */
var un;
un = "Diviner";
un = 18;
console.log("Union Type: ", un);
// console.log("Union Type: ", un.length); // 编译报错
console.log("Union Type: ", un.toString());
