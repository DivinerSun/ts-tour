function sayHello(name) {
    return "Hello " + name;
}
function sayHelloByType(name) {
    if (typeof name === "string") {
        return "Hello " + name;
    }
    else {
        throw new Error("姓名必须为字符串");
    }
}
var username = "Diviner";
console.log(sayHello(username));
var n1 = [1, 2, 3];
console.log(sayHelloByType(username));
console.log(sayHelloByType(n1));
