/**
 * TS - 接口：使用 interface 关键字
 * TS中可以通过接口来定义对象类型
 * 接口中可以定义可选属性，通过 ?: 来表示
 * TS中定义接口的只读属性使用 readonly 关键字
 */

interface User {
  // 定义只读属性
  readonly id: string;
  name: string;
  age: number;
  address?: string;
  // 定义任意类型属性
  [anyName: string]: unknown;
}
const user: User = {
  id: "111",
  name: "Diviner",
  age: 18,
  address: "北京市",
};
const user1: User = {
  id: "222",
  name: "Diviner",
  age: 18,
};
console.log("User：", user);
console.log("User1：", user1);
