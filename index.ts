// // Import stylesheets
// import './style.css';

// // Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var pet = `🐶`;

function changePet() {
  var pet = `🐱`;
  console.log(`Pet inside the house ${pet}`);
}

changePet();
console.log(`Pet outside the house ${pet}`);

// let means declaring a var for a scope
var index = 0;
for (let index = 0; index < 5; index++) {
  console.log(`index inside ${index}`);
}
console.log(`index outside ${index}`);

//const
const a = 10;
//can't the value
// a = 20;

// but in complex dataType we can change the value
const myObj = {
  foo: 'bar',
};

myObj.foo = 'biz';
myObj['bar'] = 'big';
console.log(myObj);

//primitive datatypes
/**
 * boolean
 * string
 * number
 * undefined
 * null
 */

let authorized: boolean;
authorized = true;
authorized = false;
authorized = null;
authorized = undefined;
authorized = (() => true)();
authorized = (() => false)();

let myNumber: number;
myNumber = 10;
myNumber = -10;
myNumber = 10.1;
myNumber = 0x123abc;
myNumber = 0o123;
myNumber = 0b01010;
myNumber = null;
myNumber = undefined;

let username: string;
username = 'Pratap';
username = 'Pratap';
username = `Pratap`;
username = `Pratap`.toUpperCase();
username = (() => 'Pratap')();
username = null;
username = undefined;

let data: null;
data = null;
data = undefined;
data = (() => null)();
data = (() => undefined)();

let userData: undefined;
userData = null;
userData = undefined;
userData = (() => null)();
userData = (() => undefined)();

// reference and special types
// void
function logToConsole(): void {
  console.log('Hello world');
}
logToConsole();

// Arrays
let myArr: string[];
myArr = ['Apple', 'Mango', 'Orange'];

let food: Array<string>;
food = ['pizza', 'daal', 'chapati'];

let genericArr: Array<number | boolean | string>;
genericArr = [1, 2, false, true, 'hello', 10];

// Tuple
let cordinates: [number, number, number];
cordinates = [12, 13, 14];

// Objects
let user = {
  firstname: 'Pratap',
  lastname: 'Singh',
  username: 'Prataps135',
  // getUserName:():string => this.username
};

// Enum
enum DaysOfTheWeek {
  MONDAY,
  TUESDAT,
  WEDNESDAY,
}

let day: DaysOfTheWeek;
day = DaysOfTheWeek.MONDAY;

// Spread Operator
let fruits: Array<string> = ['Apple', 'Mango'];
let foods: Array<string> = ['Daal', 'Chapati'];
let edibles: Array<string> = [...fruits, ...foods];
console.log(edibles);

let user1 = {
  firstname: 'Pratap',
  lastname: 'Singh',
};

let userDetails = {
  ...user1,
  username: 'Prataps135',
};
console.log(userDetails);

function add(x?: number, y?: number, z?: number): number {
  return x + y + z;
}
let arrNum: Array<number> = [10, 20, 30];
console.log(add(...arrNum));

// Backticks
console.log(`firstname is ${user1.firstname} and 
lastname is ${user1.lastname}`);

// Destructor operator
let { firstname: fname, lastname: lname } = user1;
console.log(fname,lname);


