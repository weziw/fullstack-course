"use strict";

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

// Exercise 1: amounts only (map)
const amounts = expenses.map(e => e.amount);
console.log(amounts, "An array of just the amounts.");

// Exercise 2: how many in February (filter + length)
const febExpenses = expenses.filter(e => e.month === "Feb");
console.log(febExpenses.length, "Expenses in February only.");

// Exercise 3: total of all amounts (reduce)
const totalAmount = expenses.reduce((sum, e) => sum + e.amount, 0);
console.log(totalAmount, "Total of all amounts.");

// Exercise 4: largest and smallest expense (reduce)
const maxExpense = expenses.reduce((max, current) =>
    current.amount > max.amount ? current : max
);
console.log(maxExpense.dept, '$',maxExpense.amount, "Largest expense.");

const minExpense = expenses.reduce((min, current) =>
    current.amount < min.amount ? current : min
);
console.log(minExpense.dept, minExpense.amount, "Smallest expense.");

// Exercise 5: total per department
// Loop version: same pattern as your Practice F, with dept and amount
const loopTotalByDept = {};
for (const e of expenses) {
    loopTotalByDept[e.dept] = (loopTotalByDept[e.dept] ?? 0) + e.amount;
}
console.log(loopTotalByDept, "Totals by dept (loop).");

// Method version
const totalByDept = expenses.reduce((totals, e) => {
    totals[e.dept] = (totals[e.dept] ?? 0) + e.amount;
    return totals;
}, {});
console.log(totalByDept, "Totals by dept (reduce).");

// Exercise 6: is ANY single expense over 5000? ONE answer.
// Loop version: start false, flip to true if we find one
let anyOver5000 = false;
for (const e of expenses) {
    if (e.amount > 5000) {
        anyOver5000 = true;
    }
}
console.log(anyOver5000, "Any expense over 5000 (loop).");

// Method version
console.log(expenses.some(e => e.amount > 5000), "Any expense over 5000 (some).");

// Exercise 7: closure + filter + map
const makeBudgetChecker = limit => amount => amount > limit;

const overThousand = makeBudgetChecker(1000);
const overThousandDepts = expenses
    .filter(e => overThousand(e.amount))
    .map(e => e.dept);
console.log(overThousandDepts, "Depts with an expense over 1000.");

// Practice D: limit of 5000
const overFiveThousand = makeBudgetChecker(5000);
const overFiveThousandDepts = expenses
    .filter(e => overFiveThousand(e.amount))
    .map(e => e.dept);
console.log(overFiveThousandDepts, "Depts with an expense over 5000.");

// Practice E: your version
const makeDeptFilter = dept => expense => expense.dept === dept;

const isPolice = makeDeptFilter("Police");
const policeTotal = expenses
    .filter(isPolice)
    .reduce((sum, e) => sum + e.amount, 0);
console.log(policeTotal, "Police total.");

// Practice F: your version
const countByMonth = expenses.reduce((acc, e) => {
    acc[e.month] = (acc[e.month] ?? 0) + 1;
    return acc;
}, {});
console.log(countByMonth, "Count by month.");

// Practice G: write this one yourself (see Step 3)
/*Practice G: use reduce into { } to count how many expenses each department has.Print it.

Expected values: Parks 2, Police 2, and 1 each for Library, Fire, Motor Vehicles, Edu, and Health.
*/
const numExpensesByDept = expenses.reduce((numExpenses, current) => {
    numExpenses[current.dept] = (numExpenses[current.dept] ?? 0) + 1; 
    return numExpenses;
}, { });
console.log(numExpensesByDept);