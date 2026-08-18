let prompt = require("prompt-sync")();

let name = prompt("Enter your Name: ");

let age = Number(prompt("Enter your age: "));

console.log(`My Name is ${name} and age is ${age}`);