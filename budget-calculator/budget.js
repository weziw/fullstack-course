"use strict";

//require loads a built-in module."fs" means file system
const fs = require("node:fs");

// ------------- Helpers ---------------------

//Read file as text, then turn the text into JavaScript objects.
function loadJson(filename) {
    const text = fs.readFileSync(filename, "utf8");
    return JSON.parse(text);
}//End loadJson()

/*  
    process.argv holds the words typed on the command line.
    For "node budget.js --month Feb" it is:
    ["/path/to/node", "/path/to/budget.js", "--month", "Feb"]
    This finds a flag like "--month" and returns the word after it.
*/
function getArg(name) {
    const index = process.argv.indexOf(name);
    return index === -1 ? undefined : process.argv[index + 1];
}//End getArg()


//Format a number as US dollars: 2950 -> $2,950.00
const money = n => n.toLocaleString("en-US", { style: "currency", currency: "USD" });

// --------- Load Data ------------------

const allExpenses = loadJson("expenses.json");
const budgets = loadJson("budgets.json");
const month = getArg("--month");

//If a month was given, keep only that month. Otherwise keep everything.
const expenses = month
    ? allExpenses.filter(e => e.month === month)
    : allExpenses;

console.log(`Expenses loaded: ${expenses.length} (${month ?? "all months"})`);

// ---------- Totals by department ----------

// TODO: build totals, an object like { Parks: 2950, Police: 12100, Library: 1025 }
//       Use reduce into {}. Same pattern as your Practice G and H.
const totals = expenses.reduce((deptTotals, e) => {
    deptTotals[e.dept] = (deptTotals[e.dept] ?? 0) + e.amount;
    return deptTotals;
}, {});
console.log(totals," These are the totals by department.");

// TODO: build grandTotal, the sum of every expense amount.
const grandTotal = expenses.reduce((sumExpenses, e) => { 
    return sumExpenses + e.amount;
}, 0);

console.log(grandTotal," This is the grand total.");

    console.log("\nTotals by department:");
for (const [dept, total] of Object.entries(totals)) {
    console.log(`  ${dept}: ${money(total)}`);
}
console.log(`Grand total: ${money(grandTotal)}`);

/*
    Step 6: Stage 3, the largest espense(to be written in)
*/
// ---------- Largest expense ----------

// TODO: find the single largest expense with reduce. Same as your Exercise 4.
const largest = expenses.reduce((max, e) => {
    return e.amount > max.amount ? e : max;
}, expenses[0]);

console.log(
    `\nLargest expense: ${largest.dept} ${money(largest.amount)} (${largest.description}, ${largest.month})`
);