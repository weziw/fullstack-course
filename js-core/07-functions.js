"Use strict";

//Three ways to write a function. All do the same job.
function add(a, b) {
    return a + b;
}//End function add

const multiply = (a, b) => a * b;   //arrow function: short, returns automatically
const square = n => n * n;          //one parameter: parenthesis optional

console.log(add(2, 3), multiply(4, 5), square(6));

//Default parameters: used when no value is passed
function greet(name = "resident") {
    return `Hello, ${name}`;
}//End greet
console.log(greet("Andrew"));
console.log(greet());

//Rest parameter (...): collects any number of arguments into an array
function total(...amounts) {
    let sum = 0;
    for (const amount of amounts) {
        sum += amount;
    }
    return sum;
}//End total
console.log(total(10, 20, 30));

//Spread(...): the opposite, unpacks an array into separate arguments
const fees = [5, 15, 25];
console.log(total(...fees));

//Functions are values: you can pass them to other functions
function applyTwice(fn, value) {
    return fn(fn(value));
}//End applyTwice
console.log(applyTwice(square, 3));

//Closure: an inner function remembers variables from where it was created
function makeCounter() {
    let count = 0;
    return () => {
        count++;
        return count;
    };
}//End makeCounter
const nextTicket = makeCounter();
console.log(nextTicket(), nextTicket(), nextTicket(), nextTicket(), nextTicket());

const otherCounter = makeCounter();     //A brand new separate count
console.log(otherCounter());