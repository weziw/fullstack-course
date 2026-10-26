"use strict";

const expenses = [
    { dept: "Parks", amount: 1200, month: "Jan" },
    { dept: "Police", amount: 5400, month: "Jan" },
    { dept: "Parks", amount: 800, month: "Feb" },
    { dept: "Library", amount: 300, month: "Feb" },
    { dept: "Police", amount: 4600, month: "Feb" }
];

// Exercise 1: amounts only
const amounts = expenses.map(e => e.amount);
console.log(amounts);


// Exercise 2: how many in February
const febExpenses = expenses.filter(e => e.month === "Feb");
console.log(febExpenses.length);

// Exercise 3: total of all amounts
const totalAmount = expenses.reduce((sum, e) => sum + e.amount, 0);
console.log(totalAmount);

// Exercise 4: largest expense (your reduce approach)
const maxExpense = expenses.reduce((max, current) =>
    current.amount > max.amount ? current : max
);
console.log(maxExpense.dept, maxExpense.amount);

// Your extra: smallest expense
const minExpense = expenses.reduce((min, current) =>
    current.amount < min.amount ? current : min
);
console.log(minExpense.dept, minExpense.amount);

// Exercise 5: total per department
const totalByDept = expenses.reduce((totals, e) => {
    totals[e.dept] = (totals[e.dept] ?? 0) + e.amount;   // current total (or 0) + this amount
    return totals;                                       // hand the object to the next step
}, {});                                                // start with an empty object
console.log(totalByDept);

// Exercise 6: is any single expense over 5000?
console.log(expenses.some(e => e.amount > 5000));

// Exercise 7: closure + filter + map
function makeBudgetChecker(limit) {
    return amount => amount > limit;   // this small function remembers "limit"
}

const overThousand = makeBudgetChecker(1000);   // limit is now locked in as 1000

const overThousandDepts = expenses
    .filter(e => overThousand(e.amount))   // keep expenses over 1000
    .map(e => e.dept);                     // keep just the department name
console.log(overThousandDepts);

const double = n => n * 2;
const addThree = (a, b, c) => a + b + c;
const broken = n => { n * 2; };
const fixed = n => { return n * 2; };

console.log(double(5), addThree(1, 2, 3), broken(5), fixed(5));