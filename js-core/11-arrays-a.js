"use strict"

// ====== 1. Creating arrays ========

const empty = [];
const categories = ["Potholes", "Greffiti", "Streetlight"];
const numbers = [10, 20, 30, 40];

console.log(empty, categories, numbers);
console.log("Length: ", categories.length);

// ===== 2. Reading (fetching) an element by index =======
console.log(categories[0]);                         //First
console.log(categories[2]);                         //Third also last
console.log(categories[categories.length]);         //Fourth index does not exist
console.log(categories[categories.length - 1]);     //Last item
console.log(categories.at(-1))                      //Modern way to access the last
console.log(categories[5]);                         //undefined and doesn't produce an error

// ========= Writing to an index ================= 
const queue = ["A"];
queue.push("B");                                    //Add to the end
queue.push("C", "D");
console.log(queue);
console.log(queue[queue.length - 1]);
console.log(queue.at(1));

queue.unshift("Z");                                 //Unshift puts the value in front
console.log(queue,"\tAfter unshifting Z.");

console.log("Next, we splice the queue array.");
queue.splice(2, 0, "NEW");                          //At index 2 remove nothing, add "NEW".
queue.splice(3, 0, "EDITION", "1994");
console.log(queue);

// ============ REMOVING ELEMENTS =======================
const last = queue.pop();                           //Remove the last element
const first = queue.shift();                        //Remove the first element
console.log(first, last);
console.log(queue);

queue.splice(1, 1);                                 //At index 1 remove 1, remove "NEW"
console.log(queue);

// ============= SEARCHING... ===================
console.log(queue.indexOf("B"));                    //Find the position of "B"
console.log(queue.indexOf("X"));                    //Find the index of value "X"
console.log(queue.includes("C"));                   //Returns true or false