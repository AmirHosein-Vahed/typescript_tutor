//---------------------------------------------------------------------------------------
//---------------------------------------Array Functions---------------------------------
//---------------------------------------------------------------------------------------
let arr = [1, 2, 34];
console.log(arr[0]); // 1
console.log(arr[3]); // undefined
console.log(arr.concat([23, 45])); // [1, 2, 34, 23, 45]
console.log(arr.fill(12, 0, 3)); // [12, 12, 12]
console.log(arr.filter((val, index) => val % 2 == 0)); // [2, 34]
console.log(arr.filter((val, index) => index % 2 == 0)); // [1, 34]
console.log(arr.find((val) => val == 20)); // undefined
console.log(arr.findIndex((val) => val == 34)); // 2
console.log(arr.includes(34)); // true
console.log(arr.indexOf(34)); // 2
console.log(arr.join("-")); // 1-2-34
console.log(arr.lastIndexOf(1)); // 0
console.log(arr.length); // 3
console.log(arr.map((val, index) => val * 2 - 1)); // [1, 3, 67]
console.log(arr.pop()); // 34
console.log(arr.push(1, 1, 4)); // 6
// console.log(arr.reduce()); // ????
console.log(arr.reverse()); // [34, 2, 1]
console.log(arr.shift()); // 1
console.log(arr.slice(1, 2)); // 2
console.log(arr.some((val, index) => val == index + 1)); // true
console.log(arr.sort((a, b) => a - b)); // [1, 2, 34]
console.log(arr.sort((a, b) => b - a)); // [34, 2, 1]
// console.log(arr.splice()); // ????
console.log(arr.toLocaleString()); // 1,2,34
console.log(arr.toString()); // 1,2,34
console.log(arr.unshift(4, 5, 6), arr); // 6 [4, 5, 6, 1, 2, 34]
//---------------------------------------------------------------------------------------
//---------------------------------------Array Functions---------------------------------
//---------------------------------------------------------------------------------------
let strArray: string[] = [];
strArray.push("ali");
// strArray.push(22); // error
// strArray.push({"aa", "bb"}) // error
// -------------------------------------
let numArray: number[] = [2, 4];
numArray.push(98);
// numArray.push("hello"); // error
// strArray.push({56, 23}) // error
// -------------------------------------
let strArray2: readonly string[] = ["mammad", "hosein"];
// strArray2.push("ali"); // error
strArray2[0];
// -------------------------------------
let tuple: [x: string, y: number, z: boolean] = ["test", 33, true];
let [first, sec, third] = tuple;
//---------------------------------------------------------------------------------------
//---------------------------------------Object Functions--------------------------------
//---------------------------------------------------------------------------------------
let obj: {
  firstName: string;
  lastName: string;
  age: number;
  scoreAverage?: number;
} = {
  firstName: "ali",
  lastName: "ahmadi",
  age: 37,
  //   scoreAverage: 19.53,
};
console.log(obj);
console.log(obj.firstName);
console.log(obj["firstName"]);
//---------------------------------------------------------------------------------------
//---------------------------------------Enums-------------------------------------------
//---------------------------------------------------------------------------------------
enum cardinalDirection {
  North = 1,
  East,
  West,
  South,
}
let currDirection = cardinalDirection.West;
console.log(currDirection);
//-------------------------------------------
enum statusCode {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
}
console.log(statusCode.Ok);
//-------------------------------------------
enum Direction {
  North = "north",
  West = "west",
  South = "south",
  East = "east",
}
console.log(Direction.East);
//---------------------------------------------------------------------------------------
//---------------------------------------Types-------------------------------------------
//---------------------------------------------------------------------------------------
type Car = {
  model: string;
  year: number;
  type: string;
};
const car: Car = {
  model: "BMW",
  year: 2023,
  type: "x6",
};
// //-----------------------------------
interface Rectangle {
  width: number;
  height: number;
}
interface ColoredRectangle extends Rectangle {
  color: string;
}

const rect: Rectangle = {
  width: 14,
  height: 30,
};
const rect2: ColoredRectangle = {
  width: 20,
  height: 100,
  color: "green",
};
//---------------------------------------------------------------------------------------
//---------------------------------------Union Types-------------------------------------
//---------------------------------------------------------------------------------------
function printCode(code: string | number) {
  console.log(`the code is ${code}`);
}
printCode("400");
printCode(201);
//---------------------------------------------------------------------------------------
//---------------------------------------Functions---------------------------------------
//---------------------------------------------------------------------------------------
function getTime(): number {
  return new Date().getTime();
}
console.log(getTime());
//---------------------------------------
function printHello(): void {
  console.log("Hello World!");
}
printHello();
//---------------------------------------
function multiply(a: number, b: number = 10, c?: number): number {
  return a * b + (c || 0);
}
console.log(multiply(2));
console.log(multiply(2, 5));
console.log(multiply(2, 5, 10));
//---------------------------------------
function add(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((p, c) => p + c);
}
console.log(add(12, 12, 6, 10, 10, 10));
//---------------------------------------------------------------------------------------
//---------------------------------------Casting-----------------------------------------
//---------------------------------------------------------------------------------------
let x: unknown = "hello";
console.log((x as string).length);
console.log((<string>x).length);
//---------------------------------------------------------------------------------------
//---------------------------------------Classes-----------------------------------------
//---------------------------------------------------------------------------------------
class Person {
  name: string;
  age: number;
}
const person = new Person();
person.age = 23;
person.name = "hasan";
