function sayHello(name: string) {
  return "Hello " + name;
}

function sayHelloByType(name: string) {
  if (typeof name === "string") {
    return "Hello " + name;
  } else {
    throw new Error("姓名必须为字符串");
  }
}

const username = "Diviner";
console.log(sayHello(username));

const n1 = [1, 2, 3];
console.log(sayHelloByType(username));
console.log(sayHelloByType(n1));
