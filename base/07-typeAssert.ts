/**
 * 断言语法： 值 as 类型
 * 断言的用途：
 *  1、将一个联合类型断言为其中的一个类型
 *  2、将一个父类断言为更加具体的子类
 *  3、将任何类型断言为 any
 *  4、将 any 断言为一个具体的类型
 */

interface Cat {
  name: string;

  run(): void;
}

interface Fish {
  name: string;

  swim(): void;
}

const getName = (animal: Cat | Fish): string => {
  return animal.name;
};
const isFish = (animal: Cat | Fish): boolean => {
  if (typeof (animal as Fish).swim === "function") {
    return true;
  }
  return false;
};
