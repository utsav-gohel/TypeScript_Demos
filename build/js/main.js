"use strict";
// let username = "utsav"
// console.log(username);
// console.log("Hello");
//Literal Types
let myName;
// myName = 'utsav1'
// let userName: "Utsav" | "Woyoo" | "Mocha" | "utsv123";
// userName = "Mocha";
//Functions
// const sum = (a: number, b: number): number => {
//   return a + b;
// };
const logmsg = (msg) => {
    console.log(msg);
};
// logmsg("Hello, Msg");
// logmsg(sum(10, 20));
// const substract = (a: number, b: number): number => {
//   return a - b;
// };
// type mathFunction = (a: number, b: number) => number;
// const multiply: mathFunction = function (a, b) {
//   return a * b;
// };
// logmsg(multiply(10, 10));
//Interface with function
// interface mathFun {
//   (a: number, b: number): number;
// }
// const mul: mathFun = (a, b) => {
//   return a * b;
// };
// logmsg(mul(100, 10));
//optional parameters
//optional parameters always put at the ends
// const addall = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// };
// logmsg(addall(10, 20, 50));
//default params
// const sumall = (a: number, b: number, c: number = 10): number => {
//   return a + b + c;
// };
// logmsg(sumall(10, 20));
// logmsg(sumall(10, 20, 20));
// const sumall1 = (a: number = 11, b: number, c: number = 10): number => {
//   return a + b + c;
// };
// logmsg(sumall1(10, 20));
// logmsg(sumall1(undefined, 10));
//Rest params
const addAllwithRest = (...num) => {
    return num.reduce((prev, curr) => prev + curr);
};
logmsg(addAllwithRest(1, 2, 3, 4));
