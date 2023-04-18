// // Import stylesheets
// import './style.css';

// // Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var pet = `🐶`;

function changePet(){
  var pet = `🐱`;
  console.log(`Pet inside the house ${pet}`);
}

changePet();
console.log(`Pet outside the house ${pet}`);