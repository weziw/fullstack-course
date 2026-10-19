/*
    Exercise 1: FizzBuzz
    print the numbers 1 to 15. For multiples of 3 print "Fizz",
    multiples of 5 print "Buzz" and for multiples of both print "FizzBuzz"
    Hint, the modulus operator '%' gives the remainder. i.e 9 % 3 = 0 .
*/
MyNumber = 15;
console.log("MyNumber = ",MyNumber);

for (let i = 1; i <= MyNumber; i++) {
    //console.log("MyNumber = ", MyNumber, " and i = ", i);
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log(i, "FizzBuzz");
        } else {
            console.log(i, "Fizz");
        }
    } else if (i % 5 == 0) {
        console.log(i, "Buzz");
    } else {
        console.log(i);
    }
}

/*
     Exercise 2: Total open days
     Use a for...of loop to add up all the numbers and print the total.
     const daysOpenList = [3, 12, 45, 7, 1];
*/
const daysOpenList1 = [3, 12, 45, 7, 1];

TotalOpenDays = 0;
for (const days of daysOpenList1) {
    TotalOpenDays += days; 
}
console.log("Total number of days open is: ", TotalOpenDays);

/*
     Exercise 3: Grade a response time
     Write a function grade(hours) that returns:
     "A" for under 24, "B" for under 48, "C" for under 72, otherwise "F".
     Then print grade(10), grade(30), grade(60), grade(100).
*/

function grade(hours) {
    //ideal = 24;

    switch (true) {
        case (hours < 24):
            console.log("Grade A service.");
            break;
        case (hours < 48):
            console.log("Grade B service.");
            break;
        case (hours < 72):
            console.log("Grade C service.");
            break;
        default:
            console.log("Grade F service and needs improvement.");
    }//End Switch
        
}//End function grade

grade(10);
grade(30);
grade(60);
grade(100);

/*
     Exercise 4: Count vowels
     Write a function countVowels(text) that returns how many of a, e, i, o, u
     are in the text, ignoring upper/lower case. Print countVowels("Riverside City Hall").
     Hint: text.toLowerCase(), and a for...of loop works on strings too.
*/

function countVowels(textValue) {
    vowels = [a, e, i, o, u];
    
    for (letter in textvalue) {
        switch (true) {
            case letter == a:
                a++;
                break;
            case letter == e:
                e++;
                break;
            case letter == i:
                i++;
                break;
            case letter == o:
                o++;
                break;
            case letter == u:
                u++;
                break;
            default:
        }//End switch
        
    }//End for

}//End countVowels

countVowels("Riverside City Hall")

/*
    Below is the corrected version -----------------------------------------------------
*/
console.log("Given answers--------------------------------------------------------------");

// Exercise 1: FizzBuzz
const max = 15;

for (let i = 1; i <= max; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Exercise 2: Total open days
const daysOpenList = [3, 12, 45, 7, 1];

let totalOpenDays = 0;
for (const days of daysOpenList) {
    totalOpenDays += days;
}
console.log(totalOpenDays);

// Exercise 3: Grade a response time
function grade(hours) {
    if (hours < 24) return "A";
    if (hours < 48) return "B";
    if (hours < 72) return "C";
    return "F";
}

console.log(grade(10), grade(30), grade(60), grade(100));

// Exercise 4: Count vowels
function countVowels(text) {
    const vowels = ["a", "e", "i", "o", "u"];   // 1. the letters we count
    let count = 0;                               // 2. one counter, starts at 0

    for (const letter of text.toLowerCase()) {   // 3. each letter, lowercased
        if (vowels.includes(letter)) {             // 4. is it in the vowel list?
            count++;                                 //    add 1
        }
    }

    return count;                                // 5. hand the answer back
}

console.log(countVowels("Riverside City Hall"));