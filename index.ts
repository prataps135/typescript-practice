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
console.log(fname, lname);

let [justApple, ...restEdibles] = edibles;
console.log(justApple);
console.log(restEdibles);

function getEdibles(apples?, ...restEdibles) {
  console.log(apples);
  console.log(getEdibles);
}
getEdibles(...edibles);

// Classses
class Person {
  // firstname:string;
  // lastname:string;
  // age:number;

  // constructor(firstname:string,lastname:string){
  //     this.lastname = lastname;
  //     this.firstname = firstname;
  // }

  // Shorter way to assign values
  constructor(
    private firstname: string,
    private lastname: string,
    private age: number
  ) {}

  getDetails(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}

class Employee extends Person {
  get employeeId(): number {
    return this.id;
  }

  set employeeId(id: number) {
    this.id = id;
  }

  constructor(
    private id: number,
    firstname: string,
    private middlename: string,
    lastname: string,
    age: number
  ) {
    super(firstname, lastname, age);
  }
  getDetails(): string {
    const nameSegments: Array<string> = super.getDetails().split(' ');
    nameSegments.splice(1, 0, this.middlename);
    const fullname = nameSegments.join(' ');
    return `${fullname}`;
  }

  // getDetails():string{
  //   return `${this.firstname} ${this.lastname} ${this.age}`;
  // }
}

const per1: Person = new Person('Pratap', 'Singh', 24);
const manager: Employee = new Employee(101, 'Anju', 'Baisa', 'Rathore', 23);
console.log(per1);
console.log(per1.getDetails());
console.log(manager.getDetails());
manager.employeeId = 102;
console.log(manager.employeeId);

// Interfaces
interface Human {
  readonly age: number;
  walk(): void;
}

interface Person1 extends Human {
  firstName: string;
  lastName?: string;
}

// Objects
const user2: Person1 = {
  firstName: ``,
  lastName: ``,
  age: 24,
  walk(): void {
    return;
  },
};

// Arrow function
function greetUser(name: string) {
  console.log(`Hello ${name}`);
}

const greetUser1 = function (name: string) {
  console.log(`Hello ${name}`);
};

greetUser('John');
greetUser1('Jane');

const greetUserArray = (name: string) => console.log(`Hello ${name}`);
greetUserArray('Pratap');

const edibles1 = [
  {
    edible: 'pizza',
    isVegan: false,
  },
  {
    edible: 'Apple',
    isVegan: true,
  },
  {
    edible: 'Burger',
    isVegan: false,
  },
  {
    edible: 'Banana',
    isVegan: true,
  },
];

console.log(
  edibles1.filter(function (item) {
    return item.isVegan;
  })
);

console.log(edibles1.filter((item) => item.isVegan));

// this will produce user undefined
const user3 = {
  firstname: 'John',
  lastname: 'Deo',
  lazyGreet: function () {
    setTimeout(function () {
      console.log(`Hello ${this.firstname}`);
    }, 1000);
  },
};
user3.lazyGreet();

// rescoping this keyword
const user4 = {
  firstname: 'John',
  lastname: 'Deo',
  lazyGreet: function () {
    const that = this;
    setTimeout(function () {
      console.log(`Hello ${that.firstname}`);
    }, 1000);
  },
};
user4.lazyGreet();

const user5 = {
  firstname: 'John',
  lastname: 'Deo',
  lazyGreet: function () {
    setTimeout(() => {
      console.log(`Hello ${this.firstname}`);
    }, 1000);
  },
};
user5.lazyGreet();


// Modules
// using Import and Export in different ts files. We can use modules
import Dashboard,{log as dashLog} from './module/dashboard.component';

const dashboard:Dashboard = new Dashboard();
dashboard.createDashborad();


// Fetch Api

