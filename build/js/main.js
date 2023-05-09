"use strict";
// let username = "utsav"
// console.log(username);
// console.log("Hello");
// let a : number = 10;
// let b : string = '10';
// let c : number = 100;
// console.log(a/b);
// let myName:string = "utsav"
// let isLoad:boolean;
// let album : any;
// let password : number | string;
// myName = '11'
// isLoad=true
// album = "myname"
// album  = true
// password = "abcd"
// password = 123
// const sum = (a:number,b:number)=>{
//     console.log(a+b);
//     return a+b;
// }
// sum(10,20)
//Arrays
// let strArr = ['one','two','utsav']
// let randomArray = [10,'11','abcd',true]
// strArr[0] = 1
// strArr.push('a','b')
// strArr.unshift('1')
// strArr.shift()
// strArr = randomArray
// let myArr = strArr
// console.log(myArr);
//Tuple
// let myTuple : [string,number,boolean] = ['s',6,true]
//objects
// let myobj = {
//     name:'utsav',
//     age:20
// }
// console.log(myobj);
// let myobj2 = myobj
// myobj2.age = 22;
// console.log(myobj2,myobj);
//change new copoied object value wihtout affecting orignal object
// let newobj = {
//     name : 'abcd',
//     age : 20
// }
// console.log(newobj);
// let newSpreadObj = {...newobj}
// newSpreadObj.age = 21
// console.log(newobj,newSpreadObj);
//create our own types
// type empInfo = {
//     name:string,
//     empId:number,
//     age:number,
//     address:string
// }
// let empoyeeDetails : empInfo = {
//     name:'Utsav',
//     empId:1,
//     age:20,
//     address:"Rajkot"
// }
// console.log(empoyeeDetails);
// for(let a in empoyeeDetails){
//     console.log(empoyeeDetails[a]);
// }
// const fun = (empoyeeDetails:empInfo)=>{
//     return `Hey ${empoyeeDetails.name}, Welcome You are Working from ${empoyeeDetails.address}`
// }
// console.log(fun(empoyeeDetails));
//Interface
// interface empInfo  {
//     name:string,
//     empId:number,
//     age:number,
//     address:string
// }
// let empoyeeDetails : empInfo = {
//     name:'Utsav',
//     empId:1,
//     age:20,
//     address:"Rajkot"
// }
// console.log(empoyeeDetails);
// for(let a in empoyeeDetails){
//     console.log(empoyeeDetails[a]);
// }
// const fun = (empoyeeDetails:empInfo)=>{
//     return `Hey ${empoyeeDetails.name}, Welcome You are Working from ${empoyeeDetails.address}`
// }
// console.log(fun(empoyeeDetails));
//enum
// enum myenum {
//   q = 2,
//   w,
//   s = 5,
//   t,
// }
// console.log(myenum.t);
// type aliases
// type NumberOrString = number | string;
// type NumberOrStringArray = (number | string)[];
// type Guitarist = {
//   name: string;
//   gender: string;
//   album: NumberOrStringArray;
// };
// type userId = NumberOrString;
//Literal Types
// let myName: "utsav";
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
const ErrorMsg = (msg) => {
    throw new Error(msg);
};
// const infi = () => {
//   let u: number = 1;
//   while (true) {
//     u++;
//     if (u > 100) break;
//   }
// };
const isNum = (val) => {
    return typeof val == "number" ? true : false;
};
//use of the never type
const NumberOrString = (val) => {
    if (typeof val === "string")
        return "string";
    if (isNum(val))
        return "number";
    return ErrorMsg("This should never happen!");
};
//converting more or less specific
let a = "hello";
let b = 10; // less specific
let c = a; // more specific
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return a + "" + b;
};
let myval = addOrConcat(2, 2, "concat");
let nextval = addOrConcat(2, 2, "add");
console.log(myval, " ", nextval);
//The DOM
//here we are defining more details abt the tags so it called assertion
const img = document.querySelector("img");
const myimg = document.getElementById("#img");
// img.src;
// myimg.src;
//Classes
class Coder {
    constructor(name, music, age, lang = "typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old`;
    }
}
const c1 = new Coder("utsv", "party", 20, "typescript");
console.log(c1.getAge());
// console.log(c1.age);
console.log(c1.music);
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang} language currently`;
    }
}
const w1 = new webDev("Mac", "usv", "Hip-Hop", 20);
console.log(w1.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const g1 = new Guitarist("Utsav", "Guitar");
console.log(g1.play("Strums"));
class Peep {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peep.count;
    }
    getCount() {
        return Peep.count;
    }
}
Peep.count = 0;
const p1 = new Peep("utsav");
const p2 = new Peep("utsav1");
const p3 = new Peep("utsav2");
console.log(p1.getCount());
console.log(p1.id);
console.log(p2.name);
// class Bands {
//   private dataState: string[];
//   constructor() {
//     this.dataState = [];
//   }
//   public set data(val: string[]) {
//     if (Array.isArray(val) && val.every((ele) => typeof ele === "string")) {
//       this.dataState = val;
//       return;
//     } else throw new Error("Params is not an array of strings");
//   }
//   public get data(): string[] {
//     return this.dataState;
//   }
// }
// const myBands = new Bands();
// myBands.data = ["Utsav", "Led zep"];
// console.log(myBands.data);
// myBands.data = [...myBands.data, "abcd"];
// console.log(myBands.data);
class Bands {
    constructor() {
        this.dataState = [];
    }
    set data(val) {
        if (Array.isArray(val) && val.every((ele) => typeof ele === "string")) {
            this.dataState = val;
            return;
        }
        else {
            throw new Error("error");
        }
    }
    get data() {
        return this.dataState;
    }
}
const b1 = new Bands();
b1.data = ["utsav", "123"];
console.log(b1.data);
//Index Signatures
//Generics
//T means it works with any type whether its string or number or boolean
const Echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg != null;
};
console.log(isObj(true));
console.log(isObj("utsav"));
console.log(isObj([1, 2, 3]));
console.log(isObj({
    name: "utsav",
    age: 20,
}));
console.log(isObj(null));
const processUser = (user) => {
    return user;
};
console.log(processUser({
    id: 1,
    name: "utsav",
    age: 20,
}));
const getUserProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const userArray = [
    {
        id: 1,
        name: "utsv",
        username: "uts@123",
    },
];
console.log(getUserProperty(userArray, "id"));
console.log(getUserProperty(userArray, "name"));
console.log(getUserProperty(userArray, "username"));
//Utility types
