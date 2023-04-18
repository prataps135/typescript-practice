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
const myObj={
  foo:'bar'
};

myObj.foo='biz';
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

let authorized:boolean;
authorized = true;
authorized = false;
authorized = null;
authorized = undefined;
authorized =(() => true)();
authorized =(() => false)();

let myNumber:number;
myNumber = 10;
myNumber = -10;
myNumber = 10.10;
myNumber = 0x123ABC;
myNumber = 0o123;
myNumber = 0b01010;
myNumber = null;
myNumber = undefined;

let username:string;
username = 'Pratap';
username = "Pratap";
username = `Pratap`;
username = `Pratap`.toUpperCase();
username = (() => "Pratap")();
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

