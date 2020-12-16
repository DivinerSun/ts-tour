// 函数声明
function sum(x: number, y: number): number {
  return x + y;
}

// 表达式声明
const add = (x: number, y: number): number => {
  return x + y;
};

console.log("sum: ", sum(10, 20));
console.log("add: ", add(100, 200));

// 通过接口定义函数形状
interface SearchFun {
  (source: string, subString: string): boolean;
}

const search: SearchFun = (source: string, subString: string) => {
  return source.search(subString) !== -1;
};

// 函数可选参数
const buildName = (firstName: string, lastName?: string): string => {
  if (lastName) {
    return `${firstName} ${lastName}`;
  } else {
    return firstName;
  }
};
const n1 = buildName("TypeScript");
const n2 = buildName("TypeScript", "Good!");
console.table({ N1: n1, N2: n2 });

// 函数参数默认值
const getFullName = (firstName: string, lastName: string = "Good"): string => {
  return `${firstName} ${lastName}`;
};

// 函数参数不确定
const pushArray = (arrry: any[], ...args: any[]): any[] => {
  return [...arrry, ...args];
};
const a1 = [1, "2", 3];
const a2 = pushArray(a1, 4, 5, "6", "7", 8);
console.table({
  a1,
  a2,
});

// 函数重载
function getPersonProperty(nameOrAge: string): string;
function getPersonProperty(nameOrAge: number): number;
function getPersonProperty(nameOrAge: string | number, age: number): string;
function getPersonProperty(
  nameOrAge: string | number,
  age?: number
): string | number {
  if (age) {
    return `姓名：${nameOrAge} <---> 年龄：${age}`;
  } else {
    if (typeof nameOrAge === "number") {
      return `年龄：${nameOrAge}`;
    }
    if (typeof nameOrAge === "string") {
      return `姓名：${nameOrAge}`;
    }
  }
}
const p1 = getPersonProperty("Diviner");
const p2 = getPersonProperty(18);
const p3 = getPersonProperty("Diviner", 18);
console.table({
  p1,
  p2,
  p3,
});
