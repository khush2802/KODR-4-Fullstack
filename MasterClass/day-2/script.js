console.log("Hello World");


//
// function greet() {
//     console.log("Hello");
// }

// function execute(fn) {
//     fn();
// }

// execute(greet);

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// calculate(10, 5, add);
// calculate(10, 5, subtract);
// calculate(10, 5, multiply);


function processNumbers(numbers, callback) {
    for (let num of numbers) {
        callback(num);
    }
}

function print(num) {
    console.log(num);
}

processNumbers([10, 20, 30], print);

function square(num) {
    console.log(num * num);
}

processNumbers([10, 20, 30], square);