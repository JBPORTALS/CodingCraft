type EmployeeType = {
  id: number;
  firstname: string;
  lastname?: string;
};

const Employee: EmployeeType = {
  id: 12,
  firstname: "Jhon",
};

const Emplyee2: EmployeeType = {
  id: 23,
  firstname: "Ron",
  lastname: "Weasly",
};

//functions

function getGreet(age: number | string) {
  if (typeof age === "number") return age + 10;
  else return parseInt(age) + 10;
}

const greetings = getGreet("10");

// console.log(greetings);

//literal Typing
type Sizes = "SM" | "LG" | "XL" | "XXL";

const JearsySize: Sizes = "SM";

//enums
const enum SizeEnum {
  SM = "sm",
  LG = "lg",
  XL = "xl",
  XXL = "xxl",
}

// console.log(SizeEnum.LG);

//intersectional types
type Wakable = {
  walk: () => void;
  stop: () => void;
  run?: () => void;
};

type Speakable = {
  speak: () => void;
  sing?: () => void;
  shout?: () => void;
  bumble?: () => void;
};

type HumanBeing = Wakable & Speakable;

const johnnyDepp: HumanBeing = {
  speak() {
    console.log("Speaking...");
  },
  walk() {
    console.log("walking...");
  },
  stop() {
    console.log("Walking stopped!");
  },
  bumble() {
    console.log("bumbling...");
  },
};

// johnnyDepp.bumble?.(); // ? means it's optional, so if the property doesn't exist in the object, it won't break anything

//interfaces

interface Animal {
  name: string;
  weight: number;
  walk: () => void;
  sleep: () => void;
  sound: () => void;
}

const dog: Animal = {
  name: "Charlie",
  weight: 48,
  walk: () => console.log("charlie walking..."),
  sleep: () => console.log("charlie sleeping.."),
  sound: () => console.log("Bow Bow..."),
};

const cat: Animal = {
  name: "Zia",
  weight: 13,
  walk: () => console.log("zia walking..."),
  sleep: () => console.log("zia sleeping..."),
  sound: () => console.log("Meo Meow..."),
};

// cat.sound();

enum ColorEnum {
  SILVER = "SILVER",
  BLACK = "BLACK",
  RED = "RED",
  WHITE = "WHITE",
}
interface Car {
  make: string;
  model: string;
  year: number;
  color?: ColorEnum;
}

interface ElectricCar extends Car {
  batteryCapacity: number; //in KM
  chargingTime: number; //in Hours
}

const Swift: Car = {
  make: "MarutiSuzuki",
  model: "zxi",
  year: 2023,
};

const Tesla: ElectricCar = {
  make: "Tesla",
  model: "M",
  year: 2022,
  batteryCapacity: 200, //km
  chargingTime: 4, //hours
  color: ColorEnum.SILVER,
};

function printCarDetails({
  color = ColorEnum.WHITE,
  ...car
}: Car & ElectricCar) {
  console.log("Make: ", car.make);
  console.log("Model: ", car.model);
  console.log("Year: ", car.year);
  console.log("Color:", color);
  car.batteryCapacity && console.log("Battery Capacity: ", car.batteryCapacity);
  car.chargingTime && console.log("Charging Time: ", car.chargingTime);
}

//Normar car
// printCarDetails(Swift);

//EV Car
// printCarDetails(Tesla);

interface User {
  id: number;
  name: string;
  age: number;
  dob: Date;
}

const users: User[] = [
  {
    id: 12,
    name: "Xyz",
    age: 23,
    dob: new Date(Date.now()),
  },
  {
    id: 23,
    name: "Abc",
    age: 30,
    dob: new Date(Date.now()),
  },
];

interface Animal2 {
  name: string;
  age: number;
  species: string;
  readonly weight: number;
}

interface Pet {
  name: string;
  age: number;
  species: string;
  breed: string;
}

interface Dog extends Animal2, Pet {}

// const Lab: Dog = {};

//Generics

interface ApiResponseParams<T, S> {
  data: T;
  status: S;
}

interface ApiResponseReturnType<D, S> {
  data: D;
  status: S;
}

function ApiResponse<TType, SType>({
  data,
  status,
}: ApiResponseParams<TType, SType>): ApiResponseReturnType<TType, SType> {
  return {
    data,
    status,
  };
}

interface EmployeeData {
  id: number;
  name: string;
  age: number;
  gender: "M" | "F" | "O";
}

const employeeData = ApiResponse<EmployeeData, number>({
  data: { name: "Joe", id: 1234, age: 35, gender: "M" },
  status: 200,
});

const productData = ApiResponse({
  data: { name: "Shoe", size: 10, color: "blue", brand: "VKC" },
  status: 400,
});

function indentify<Type>(arg: Type): Type {
  return arg;
}

const user = indentify(["ADMIN", "STAFF", "STUDENT"]);

// function printData<T>(data: T) {
//   console.log(data);
// }

// printData(true);
// printData(3, 4);

// printData("Heloo");
// printData({ name: "helo" });

type Add<A, B> = A extends number ? (B extends number ? number : never) : never;

function add<T extends number>(a: T, b: T) {
  return a + b;
}

// const res = add(2, 3);

type Fruits = "Apple" | "Banana";

function find<T>(arr: T[], item: T) {
  return arr.includes(item);
}

const res = find(["Joe", "Jhon"] as const, "Jhon");

//Utility types
interface EmployeeT {
  id: number;
  name: string;
}

const myPromise: Promise<EmployeeT> = new Promise((resolve, reject) => {
  resolve({
    id: 12,
    name: "John Doe",
  });
});

type MyPromiseReturnType = Awaited<typeof myPromise>;

const EmplyeeRes: MyPromiseReturnType = {
  id: 12,
  name: "Jhon doe",
};

interface ToDo {
  id: number;
  title: string;
  done?: boolean;
}

type OptionalToDoType = Partial<ToDo>;

type ToDoWithoutDone = Pick<ToDo, "id" | "title">;
type ToDoWithoutTitle = Omit<ToDo, "title">;

type Cats = "Amber" | "Kitty" | "Ronny" | "Simba";

type CatsExcluded = Exclude<Cats, "Kitty" | "Simba">;

type UsersTypes =
  | { id: "amber"; name: string; age: string }
  | { id: "jhon"; name: string };

type CatsIncluded = Extract<UsersTypes, { id: "amber" }>;

type NullValues = string | boolean | undefined | null | never;

type WithoutNullableValues = NonNullable<NullValues>;

function GetUsers(data: { name: string; age: number; gender: string }) {
  return {
    Status: 200,
    Message: "Ok",
  };
}

type GetUsersParams = Parameters<typeof GetUsers>;

type GetUsersReturnType = ReturnType<typeof GetUsers>;

type UppercaseType = Uppercase<keyof GetUsersReturnType>;
type LowercaseType = Lowercase<keyof GetUsersReturnType>;
type CapitalizeType = Capitalize<keyof GetUsersReturnType>;
type UnCapitalizeType = Uncapitalize<keyof GetUsersReturnType>;
