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
    { dept: "Health", amount: 10000, month: "Oct"}
];

// Exercise 1: Make an array of just the amounts and print it. (map)
const amounts = expenses.map(a => a.amount);
console.log(amounts, "An array of just the amounts.");

// Exercise 2: Print how many expenses are from February. (filter + .length)
const monthName = expenses.filter(r => r.month === "Feb");
console.log(monthName.length, " Expenses that are in February only.");

// Exercise 3: Print the total of all amounts. (reduce)
const totalAmount = expenses.reduce((sum, t) => sum + t.amount, 0); 
console.log(totalAmount);

// Exercise 4: Print the department and amount of the single largest expense,
// like: Police 5400   (toSorted, then take the first item; or reduce)
const maxExpense = expenses.reduce((max, current) =>
    current.amount > max.amount ? current :max
);
console.log(maxExpense.dept, maxExpense.amount);

//Trying for the minimum
const minExpense = expenses.reduce((min, current) =>
    current.amount < min.amount ? current : min
);
console.log(maxExpense.dept, maxExpense.amount);



// Exercise 5: Print the total per department as an object. (reduce into {})
// Expected shape: { Parks: 2000, Police: 10000, Library: 300 }
const totalByDept = expenses
    .filter(r => r.dept === "Parks")
    .filter(r => r.dept === "Police")
    .reduce((sum, r) => { 
        sum[r.amount] = (sum[r.amount] ?? 0) + 1;
        return sum;
    }, {});
console.log(totalByDept);



// Exercise 6: Print true or false: is any single expense over 5000? (some)
console.log(expenses);
for (const a of expenses) {
    if (a.amount > 4500) {
        console.log("True")
    } else {
        console.log("False")
    }
}//End for ... of

    
// Exercise 7: Write makeBudgetChecker(limit) that RETURNS a function.
// The returned function takes an amount and returns true if amount > limit.
// Then:
//   const overThousand = makeBudgetChecker(1000);
//   print the dept of every expense where overThousand(amount) is true
// (closure + filter + map)
//================================================================================

// Practice D: Using makeBudgetChecker, create overFiveThousand with a limit of 5000.
// Print the depts where overFiveThousand(amount) is true. Expected: [ 'Police' ]
const makeBudgetChecker = limit => amount => amount > limit;
const overThousand = makeBudgetChecker(1000);
const overThousandDept = expenses
    .filter(e => overThousand(e.amount))
    .map(e => e.dept);
console.log(overThousand);

// Practice E: Write makeDeptFilter(dept) that RETURNS a function
// which takes an expense and returns true if expense.dept === dept.
// Then: const isPolice = makeDeptFilter("Police");
// Print the total amount for Police using filter(isPolice) + reduce. Expected: 10000
const makeDeptFilter = dept => expense => expense.dept === dept;

const isPolice = makeDeptFilter("Police");
const policeTotal = expenses
    .filter(isPolice)
    .reduce((sum, e) => sum + e.amount, 0);
console.log(policeTotal); // Expected: 10000


// Practice F: Using reduce into {}, count how many expenses each MONTH has.
// Expected: { Jan: 2, Feb: 3 }
const countByMonth = expenses.reduce((acc, r) => {
    acc[r.month] = (acc[r.month] ??0) + 1;
    return acc;
}, {});
console.log(countByMonth);
