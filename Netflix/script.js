// // const example = {};
// // example.prop = "exists";

// // // `hasOwnProperty` will only return true for direct properties:
// // example.hasOwnProperty("prop"); // true
// // example.hasOwnProperty("toString"); // false
// // example.hasOwnProperty("hasOwnProperty"); // false

// // // The `in` operator will return true for direct or inherited properties:
// // console.log("prop" in example); // true
// // console.log("toString" in example); // true
// // console.log("hasOwnProperty" in example); // true
// // "prop" in example; // true
// // "toString" in example; // true
// // "hasOwnProperty" in example; // true

// // const buz = {
// //   fog: "stack",
// // };

// // for (const name in buz) {
// //   if (buz.hasOwnProperty(name)) {
// //     console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`);
// //   } else {
// //     console.log(name); // toString or something else
// //   }
// // }

// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person);
// // in
// me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // Inherited properties can be overwritten

// me.printIntroduction();
// console.log(person.hasOwnProperty("isHuman")); // true
// const obj=Object.create(null);
// obj.name="abc"
// document.body.childNodes
// // obj.hasOwnProperty("name")
// insetaed of using vallback functions, use promises
// const callback=(args)=>{
//   console.log('callback',args)
// }

// const loadScript = (src,callback)=>{
//   let sc=document.createElement("script")
//   sc.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js";p
//   sc.onload=callback
//   document.body.appendChild(sc)
// }
// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
//   callback
// );
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);




