// function add(a, b){
//      return a+b;
// }

// console.log(add);

//o/p
// ƒ add(a, b){
//      return a+b;
// }

// function add(a, b){
//      return a+b;
// }

// console.log(add(2,3));//5


// function sum(a, b){
//      return a*b;
// }

// let  a = sum(2,3);

// console.log(a);//6

// function add(){
//      let c = 90;
//      return c;
// }
// let a = add;
// console.log(a);
// o/p
// ƒ add(){
//      let c = 90;
//      return c;
// }


// function sum(a, b){
//      console.log("before a*b");
//      console.log(a*b);
//      console.log("after a*b");
// }

// const a = sum(2,4);
// console.log("before a");
// console.log(a)
// console.log("after a");


//o/p
// before a*b
// script.js:42 8
// script.js:43 after a*b
// script.js:47 before a
// script.js:48 undefined
// script.js:49 after a


//fun exp

// const greet = function add(a, b){
//      console.log(a+b);
// }

// greet(1,2);
// const greet2 = function add(a, b){
//      return(a+b);
// }

// // greet2(3,4);
// const a = greet2(3,4);
// console.log(a);


//arrow func
// add = (a = 9, b = 3)=>{
//      console.log("a-b");
//      return a - b;
// }
// let x;
// console.log(add(x,2));


// add = x => x*x;
// console.log("x*x");
// console.log(add(3));


// return in array obj

// const user = ()=>({
//      name:"khush"
// })

// console.log(user());


// const frnd = ()=>{
//      return {
//           name:"meena"
//      }
// }

// console.log(frnd());

//o/p of both 
// {name: 'khush'}name: "khush"[[Prototype]]: Object
// script.js:106 {name: 'meena'}

//rest para

// const sum = (...nums)=>{
//           let sum = 0;
//           for(let num of nums){
//                sum+=num;
//           }

//           return sum;
// }


// console.log(sum(1,23,4,45,55,5));
// funct ref vs func invo


// function exection(fun){
//      console.log("1");
//      fun();
// }


// function greet(){
//      console.log ("greet");
//      console.log("2");

// }

// exection(greet);

//nested function

// function out(){
//      function inner(){
//           console.log("inner");
//      }
//      console.log("outer");
//      inner();
// }

// out();


// global and local/

// let g = 100;
// function gl(){
//      let l = 50;
     
// }

// console.log(g);
// console.log(l);
// o/p
// 100
// script.js:164 Uncaught ReferenceError: l is not defined


// var g = 100;
// function gl(){
//      var l = 50;
     
// }

// console.log(g);
// console.log(l);

// 100
// script.js:177 Uncaught ReferenceError: l is not defined

//blocked scope

// if (true) {

//     let x = 10;
//     const y = 20;
//     var z = 30;

// }
// console.log(z);

// console.log(x); // error
// console.log(y); // error

// 30
// script.js:193 Uncaught ReferenceError: x is not defined
//     at script.js:193:13
// (anonymous) @ script.js:193




//function returning function

// function outer(){
//      function inner(){
//           console.log("inner");
//      }

//      return inner();
// }

// const op = outer();

// // op();


// // script.js:208 inner
// // script.js:216 Uncaught TypeError: op is not a function
// //     at script.js:216:1

// // console.log(op);
// // inner
// // script.js:223 undefined
// // console.log(op());
// // inner
// // script.js:226 Uncaught TypeError: op is not a function
// //     at 


//pass bhy value


// let x = 10;

// function sq(x){
//      // return x*x;
//      console.log(x*x);
// }

// sq(x);


