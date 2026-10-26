"use strict";

const expenses = [
    { dept: "Parks", amount: 1200, month: "Jan" },
    { dept: "Police", amount: 5400, month: "Jan" },
    { dept: "Parks", amount: 800, month: "Feb" },
    { dept: "Library", amount: 300, month: "Feb" },
    { dept: "Police", amount: 4600, month: "Feb" }
];

// Exercise 1: Make an array of just the amounts and print it. (map)
const amounts = expenses.map(a => a.amount);
console.log(amounts);



// Exercise 2: Print how many expenses are from February. (filter + .length)
const monthName = expenses.filter(r => r.month === "Feb");
console.log(monthName.length);


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
const amountGT5000 = expenses.map(a => a.amount);
for (let i = 0; i < a.length; i++) {
    if (a.amount > 5000) {
        console.log(true);
    } else {
        console.log(false);
    }
        
}



// Exercise 7: Write makeBudgetChecker(limit) that RETURNS a function.
// The returned function takes an amount and returns true if amount > limit.
// Then:
//   const overThousand = makeBudgetChecker(1000);
//   print the dept of every expense where overThousand(amount) is true
// (closure + filter + map)
//================================================================================

// Practice D: Using makeBudgetChecker, create overFiveThousand with a limit of 5000.
// Print the depts where overFiveThousand(amount) is true. Expected: [ 'Police' ]
const overFiveThousand = expenses.reduce((makeBudgetChecker, current) =>
    current.amount >= makeBudgetChecker.amount ? current : makeBudgetChecker
);


// Practice E: Write makeDeptFilter(dept) that RETURNS a function
// which takes an expense and returns true if expense.dept === dept.
// Then: const isPolice = makeDeptFilter("Police");
// Print the total amount for Police using filter(isPolice) + reduce. Expected: 10000



// Practice F: Using reduce into {}, count how many expenses each MONTH has.
// Expected: { Jan: 2, Feb: 3 }