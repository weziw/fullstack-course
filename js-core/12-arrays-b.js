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
let shifts = ["Day","Night"];
shifts = ["Morning","Evening","Overnight"]; //Needs let not const
console.log(shifts);

const toClear = ["a","b"];
toClear.length = 0;
console.log(toClear);