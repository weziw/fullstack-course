/* == converts types before comparing. === does not. Always use ===.
    Step 4: Lesson 3, equality and truthiness
*/
console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

/*
    "Falsy" values act like false in an if. There are only a few:
    false, 0, ""(empty string), null, undefined and NaN
*/
const values = [false, 0, "", null, undefined, NaN, "0", [], {}, "false"];

for(const value of values) {
    if (value) {
        console.log(JSON.stringify(value), "is truthy");
    } else {
        console.log(JSON.stringify(value), "is falsy");
   }
}

console.log(JSON.stringify(NaN), " The preceding value was NaN.");

/*
    ?? (nullish coalescing) give a default only for null or undefined.
    || Gives a default for ANY false value, which can be a bug.
*/
const pagesize = 0;
console.log(pagesize || 20);
console.log(pagesize ?? 20);