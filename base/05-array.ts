/**
 * TS - 数组：使用 类型[] 的方式表示
 * 数组中的所有项的数据类型必须是一致的
 */

//  定义一个简单的数组
const arr: number[] = [1, 2, 3, 4, 5];
const arr1: boolean[] = [true, false];
const arr2: string[] = ["1", "2", "3", "4", "5"];

// 使用接口的方式表示数组
interface NumberArray {
  [index: number]: number;
}
const numberArray: NumberArray = [1, 2, 3, 4, 5];

interface StringArray {
  [index: number]: string;
}
const stringArray: StringArray = ["1", "2", "3", "4", "5"];
