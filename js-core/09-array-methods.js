"use strict";

const requests = [
  { id: 1, category: "Pothole", status: "Open", daysOpen: 12 },
  { id: 2, category: "Graffiti", status: "Closed", daysOpen: 3 },
  { id: 3, category: "Pothole", status: "Open", daysOpen: 40 },
  { id: 4, category: "Streetlight", status: "Open", daysOpen: 5 },
  { id: 5, category: "Graffiti", status: "Open", daysOpen: 22 }
];

// map: transform every item, returns a new array of the same length
const ids = requests.map(r => r.id);
console.log(ids,"This printed console dot log ids");

const cats = requests.map(c => c.category);
console.log(cats,"This printed console dot log cats");

const stat = requests.map(s => s.status);
console.log(stat, "This printed console dot log stat");

// filter: keep only items that pass a test
const open = requests.filter(r => r.status === "Open");
console.log(open.length, "This printed console dot log open.length");
const kuvaliwe = requests.filter(c => c.status === "Closed" );
console.log(kuvaliwe.length,"This printed console dot log kuvaliwe");


// Chaining: filter, then map
const openIds = requests
  .filter(r => r.status === "Open")
  .map(r => r.id);
console.log(openIds,"This printed console dot log openIds");

// reduce: boil an array down to one value. 0 is the starting value.
const totalDays = requests.reduce((sum, r) => sum + r.daysOpen, 0);
console.log(totalDays, "This printed console dot log totalDays");

// find: the FIRST match, or undefined if none
const firstGraffiti = requests.find(r => r.category === "Graffiti");
console.log(firstGraffiti.id);
console.log(requests.find(r => r.category === "Flooding"));

// some: is at least one true?   every: are all true?
console.log(requests.some(r => r.daysOpen > 30));
console.log(requests.every(r => r.daysOpen > 1));

// includes: is a value in the array?
const categories = requests.map(r => r.category);
console.log(categories.includes("Streetlight"));

// toSorted: returns a sorted COPY (sort() changes the original array)
// The compare function: negative = a first, positive = b first
const oldestFirst = requests.toSorted((a, b) => b.daysOpen - a.daysOpen);
console.log(oldestFirst.map(r => r.id));

// Trap: default sort compares numbers as TEXT
console.log([10, 9, 1, 100].toSorted());
console.log([10, 9, 1, 100].toSorted((a, b) => a - b));

// reduce into an object: count open requests per category
const openByCategory = requests
  .filter(r => r.status === "Open")
  .reduce((counts, r) => {
    counts[r.category] = (counts[r.category] ?? 0) + 1;
    return counts;
  }, {});
console.log(openByCategory);