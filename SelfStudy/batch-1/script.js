// function name(){
//      var x = 10;
// }
// console.log(x);

//o/p
// Uncaught ReferenceError: x is not defined

// if(true){
//      var x= 10;
// }
// console.log(x);
// //o/p
//  10

// if(true){
//      let x = 10;
// }
// console.log(x);
// script.js:19 Uncaught ReferenceError: x is not defined

// from above example means let is block scope {we are not able use it var ot of its scope}
// var is function scope means we are not able to use the var x out of that func

//obj are mutable

// const obj = {
//      name:"KM",
// }
// console.log(obj.name); o/p KM
// obj.name = "DM";
// console.log(obj.name); o/p DM


