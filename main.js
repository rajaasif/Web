// import { delay } from './utils.cb.js';
import { delay } from './utils.p.js';

// document.addEventListener('DOMContentLoaded', () => {
//   //HTML has loaded, add click listener
//   document.getElementById('btnDelay').addEventListener('click', wait);
// });

const changeBtnColor = () => {
  let color = `#${Math.random().toString(16).substr(2, 6)}`;
  let element = document.getElementById('btnDelay');
  element.style.backgroundColor = color;
  let random= Math.floor(Math.random() * 4) + 1;
  console.log(`Button is now ${color} and delay is ${random} seconds+ `);;
  return random;
};

const wait = (ev) => {
  //callback version
  let delay1 = 3;

//   delay(() => {
//     let delay2 = changeBtnColor();
//     delay(() => {
//       let delay3 = changeBtnColor();
//       delay(() => {
//         let delay4 = changeBtnColor();
//       }, delay3);
//     }, delay2);
//   }, delay1);

//   change the button colour after delay
  delay(delay1)
    .then(() => changeBtnColor()) //return value gets passed to the next then()
    .then(d => delay(d))
    .then(() => changeBtnColor())
    .then(d => delay(d))
    .then(() => changeBtnColor())
    .catch((err) => console.error);
};
function addNumbers(a, b) {
  return new Promise((resolve, reject) => {
    // Check if the inputs are numbers
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Both inputs must be numbers"));
    } else {
      // Resolve the promise with the sum of the numbers
      resolve(a + b);
    }
  });
}

// Example usage:
addNumbers(3, 5)
  .then((sum) => {
    console.log("The sum is:", sum);
     return sum; // Output: The sum is: 8
  })
  .then(d => {
    console.log("This will be logged after the sum "+d); // This will be logged after the sum;
  })
  .catch((error) => {
    console.error("Error:", error.message); // This won't be executed in this example
  });
let obj={name:"abc",age:20,city:"delhi"}
let {name:username,age}=obj;
console.log(username,age)