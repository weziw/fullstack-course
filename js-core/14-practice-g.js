"use strict";

//const { useReducer } = require("react");

const expenses = [
    { dept: "Parks", amount: 1200, month: "Jan" },
  { dept: "Police", amount: 5400, month: "Jan" },
  { dept: "Parks", amount: 800, month: "Feb" },
  { dept: "Library", amount: 300, month: "Feb" },
  { dept: "Police", amount: 4600, month: "Feb" },
  { dept: "Fire", amount: 6100, month: "May" },
  { dept: "Motor Vehicles", amount: 7200, month: "Mar" },
  { dept: "Edu", amount: 9200, month: "Apr" },
  { dept: "Health", amount: 10000, month: "Oct" }
];

// Practice G: count how many expenses each DEPARTMENT has.
// Plan: start with an empty object. For each expense, take the current
//       count for its dept (or 0), add 1, and store it back.

// G1: loop version (for...of)
const loopDeptCounts = {};
for(const e of expenses) {
    loopDeptCounts[e.dept] = (loopDeptCounts[e.dept] ?? 0) + 1;
}//End for
console.log(loopDeptCounts);

//Count how many budgets exist in any single month
const loopMonthCounts = {};
for(const month of expenses) {
  loopMonthCounts[month.month] = (loopMonthCounts[month.month] ?? 0) + 1;
}
console.log(loopMonthCounts);

// G2: method version (reduce into {})
const deptCounts = expenses.reduce((counts,e) =>  {
    counts[e.dept] = (counts[e.dept] ?? 0) + 1;
    return counts;
}, {});
console.log(deptCounts);

// Practice H (stretch): TOTAL amount per MONTH.
// Same pattern: key is the month, add the amount instead of 1.

// H1: loop version
const sumPerMonth = {};
for(const m of expenses) {
    sumPerMonth[m.month] = (sumPerMonth[m.month] ?? 0 ) + m.amount;
}//End For
console.log(sumPerMonth);

// H2: method version
const totalPerMonth = expenses.reduce((totals, e) => {
    totals[e.month] = (totals[e.month] ?? 0) + e.amount;
    return totals;
},{});
console.log(totalPerMonth);