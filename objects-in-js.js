// const obj1 = { a: {d:8}, b: { c: 0 } };
// const obj2 = Object.assign({},obj1);
// // console.log(obj2); // { a: 0, b: { c: 0 } }

// // obj1.a = 1;
// // console.log(obj1); 
// // console.log(obj2); 
// // obj2.a = 2;
// // console.log(obj1); 
// // console.log(obj2); 
// obj1.a.d=9
// console.log(obj1)
// console.log(obj2)

// // obj2.b.c = 3;
// // console.log(obj1); 
// // console.log(obj2);

// // // Deep Clone
// // const obj3 = { a: 0, b: { c: 0 } };
// // const obj4 = structuredClone(obj3);
// // obj3.a = 4;
// // obj3.b.c = 4;
// // console.log(obj4); // { a: 0, b: { c: 0 } }
// // instead of using assign use spread operatorlike below
// // let obj3={...obj1,...obj2}
// // // console.log(obj3)
// // const users=[
// //     {
// //         id: 1234,
// //         email: "a@gmail.com"
// //     },
// //     {
// //         id: 5678,
// //         email: "b@gmail.com"
// //     },
// //     {
// //         id: 9876,
// //         email: "c@gmail.com"
// //     },
// // ]
// // let a=Object.entries(users)
// // console.log(Object.entries(users))

                // DESTRUCTURING objects

const user_date={
    name:'asif',
    id: '1234abc',
    position: 'Developer',
    isLoggedIn: true
}
// const { position } = user_date;
const { position : pos} = user_date;
// console.log(pos)

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a); // 1
// is equivalent to:
// const a = obj.a;
// const b = obj.b;

// const obj1 = { a: 1, b: { c: 2 } };
// const {a1,b: { c: d },} = obj1;
// console.log(d)
// Two variables are bound: `a` and `d`
// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj; // a is constant
// let {
//   b: { c: d },
// } = obj; // d is re-assignable
// console.log(d); // 


// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// // The properties `a` and `b` are assigned to properties of `numbers`
// // console.log(numbers); // [1, 2]

// function a(){
//     return [1,2,3]
// }
// [a,,b]=a()
// console.log(b)


// swapping of two numbers using destructuring
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1, 3, 2]

// const obj = { a: 1, b: 2 };         
                // 
// function abc(a,b){
//     return a+b
// }
// const abc= function abd(a,b){
//     return a+b
// }
const abf= (a,b) => { return a+b }
const abg= (a,b) => (a+b)
// if u want to return an object
const abac= (a,b) => ({a:a,b:b})

console.log(abac(1,2))
((a,b) =>{
    // IIFE without name
    console.log(a+b)
})(1,5);
(function abc(){

    // named IIFE
}
  )()
 
//   TRUTHY AND FALSY VAlue
//  false,0,-0,BigInt 0n,"",null,undefined,NaN
// the rest are truthy but "0"is also truthy, 'false', " ",[],{},function(){}  
// aklsd i am changed to check yhe yhtiayb sjdon sdkskas kasudgv