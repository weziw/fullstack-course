"use strict";

const cities = ["Riverside", "Corona", "Moreno Valley", "Norco"];

// D1: Print the first city.
console.log(cities[0]);
console.log(cities[0]);

// D2: Print the last city two ways on ONE line: with length - 1, and with at(-1).
console.log(cities[cities.length - 1]);
console.log(cities.at(-1));

// D3: Print how many cities there are.
console.log(cities.length);

// D4: Change "Norco" to "Perris" using its index. Print the array.
console.log(cities);
cities[cities.indexOf("Norco")] = "Perris";
console.log(cities);

// D5: Add "Hemet" to the END and "Ontario" to the START. Print the array.
cities.push("Hemet");
cities.unshift("Ontario");
console.log(cities);

// D6: Remove the first city and the last city (shift and pop). Print the array.
console.log(cities, "Before the shift()");
cities.shift();
console.log(cities, "Before the pop()");
cities.pop();
console.log(cities, " <-- After the shift() and pop()");

// D7: On ONE line, print the index of "Corona" and whether the array includes "Temecula".
console.log(cities.indexOf("Corona"), " and", cities.includes("Temecula"));

// D8: Use a CLASSIC for loop to print a numbered list, like "1. Riverside"
//     (hint: the number is i + 1)
for (let i = 0; i < cities.length; i++) {
    console.log(`${i + 1}. ${cities[i]}`);
}//End for


// D9: Use for...of to print every city in UPPERCASE (hint: city.toUpperCase())
for (const city of cities) {
    console.log(city.toUpperCase());
}

// ===== Bridge drills: build what map, filter, and reduce do, by hand =====

// D10: WITHOUT map: make an empty array called lengths. Use for...of and push
//      to add each city's name length (city.length). Print lengths.
const lengths = [];
console.log(lengths, "This is the empty array printed.");
for (const city of cities) {
    lengths.push(city.length);
}//End for .. of
console.log(lengths, "This is the array of the number of letters in each city name for D10 not using a map.");

const clengths = cities.map(city => city.length);
console.log(clengths, " This is the array of city number of letters.")

// D11: WITHOUT filter: make an empty array called longNames. Use for...of, an if,
//      and push to keep only names longer than 6 characters. Print longNames.
const loopLongNames = [];
for (const city of cities) {
    if (city.length > 6) {
        loopLongNames.push(city);
    }
}
console.log(loopLongNames, " These are the cities with more than 6 letters. Not using a map");

const longNames = cities.filter(city => city.length > 6);
console.log(longNames,"Using the modern array");

const shortNames = cities.filter(shortCity => shortCity.length <= 6);
console.log(shortNames," This is the list of city names that have 6 letters or less.");


// D12: WITHOUT reduce: start let total = 0. Use for...of to add every name's length.
//      Print total.
let total = 0;
for (const city of cities) {
    total += city.length;
}//End for
console.log(total, " This is the sum of all the city name lengths not using a map.");

const totalLength = cities.reduce((total, city) => total + city.length, 0);
console.log(totalLength," The total combined number of characters across all city names using a map.")

// D13: Now do D10, D11, and D12 again using map, filter, and reduce.
//      Print all three. They must match D10 to D12 exactly.


/*
Step 1: Write D12 and D13

Under the D12 and D13 comments in 13 - array - drills.js, write your code.

    Hints, if you need them:

D12: let total = 0;, then a for...of loop with total += city.length; inside, then console.log(total);
D13: three console.log lines:
cities.map(c => c.length)
cities.filter(c => c.length > 6)
cities.reduce((sum, c) => sum + c.length, 0)
*/
