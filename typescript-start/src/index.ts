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
};

johnnyDepp.stop();
