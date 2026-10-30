"use strict"

//======== 7. Four ways to traverse (loop through) an array ==============
const fees = [5,15,25];

// a) Classic for loop: you control the index yourself
for(let i=0; i<fees.length;i++) {
    console.log(`index${i}: ${fees[i]}`);
}

// b) for ... of: just the values (Use this most of the time)
let index = 0;
for(const fee of fees) {
   console.log("fee :",index,fee);
   index++;
}

// c) forEach: an array method that runs a function for each item
fees.forEach((fee,i) => console.log(`forEach ${i}: ${fee}`));

//d) entries(): value AND index with for ...of
for(const[i,fee] of fees.entries()) {
    console.log(`entries ${i}: ${fee}`);
}

// ========== 8. Replacing the whole array =============
let shifts = ["Day", "Night"];
console.log(shifts);
shifts = ["Morning","Evening","Overnight"]; //Needs let not const
console.log(shifts);

const toClear = ["a", "b"];
toClear.length = 0;
console.log(toClear);

let tryClear = ["c", "d", "e"];
console.log('Declare and initialize the array tryClear: let tryClear = ["c", "d", "e"]; ');
console.log(tryClear);
console.log('Now, clear the array: tryClear = 0;');
tryClear = 0;
console.log(tryClear);

// ============ 10. Arrays of objects (what your excercises use) ====================
const expenses = [
    { dept: "Parks", amount: 1200 },
    { dept: "Police", amount: 5400 },
    { dept: "Library", amount: 300 }
];

console.log(expenses[1]);
console.log(expenses[1].dept);
console.log(expenses[1].amount);

expenses[0].amount = 1500;            // change one property inside box 0
expenses.push({ dept: "Fire", amount: 2200 });
console.log(expenses.length);
console.log(expenses.at(-1).dept);