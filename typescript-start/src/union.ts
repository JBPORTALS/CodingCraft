//VS Variablename: Type1 | Type2 |... TypeN = value
var hobby: undefined | string[] = undefined;

hobby = ["Playing Cricket", "Reading Books"];

var foo: boolean | string = "Helloo";
foo = true;

//arrays
//if face any problemn with typescript server just restart the server by pressing CTRL+SHIPT+P and type for "Restart Typescript Server" select that one.
let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
var stringArray: string[] = ["a", "b", "c"];
var booleanArray: boolean[] = [true, false, true, true];
let books: object[] = [
  { name: "Fooled by randomness", author: "Nassim Taleb" },
  { name: "Sapiens", author: "Yuval Noah Harari" },
]; // can only contain objects

let arr: any[] = ["hello", 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);
//ids.push("7"); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
