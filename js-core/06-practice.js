function countVowels(text) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for(const letter of text.toLowerCase()) {
        if(vowels.includes(letter)) {
            count++;
        }//End if

    }//End for

    return count;
}//End countVowels

console.log(countVowels("This is the first sentence that I would like to check."));

// Practice A: print countVowels("AEIOU aeiou"). Expected: 10

console.log(countVowels("AEIOU aeiou"));

// Practice B: write countLetter(text, target) that counts how many times one letter appears,
// ignoring case. Print countLetter("Riverside", "r"). Expected: 2
function countLetter(text, target) {
    targetCount = 0;
    for (const letter of text.toLowerCase()) {
        if (target.includes(letter)) {
            targetCount++;
        }
    }
    return targetCount;
}//End function countLetter(text, target)
console.log(countLetter("Riverside", "r"));

// Practice C: write isEven(n) that RETURNS true or false.
// Print isEven(4), isEven(7). Expected: true false
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }

}
/*
    Shorter verion:
    function isEven(n) {
        return n%2 === 0;
    }
*/

console.log(isEven(4));
console.log(isEven(7));

/*
    CORRECTED VERSIONS

    "use strict";

function countVowels(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("This is the first sentence that I would like to check."));

// Practice A
console.log(countVowels("AEIOU aeiou"));

// Practice B
function countLetter(text, target) {
  const wanted = target.toLowerCase();
  let count = 0;

  for (const letter of text.toLowerCase()) {
    if (letter === wanted) {
      count++;
    }
  }

  return count;
}

console.log(countLetter("Riverside", "r"));
console.log(countLetter("Riverside", "R"));   // edge case: uppercase target
console.log(countLetter("", "r"));            // edge case: empty text

// Practice C
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(4), isEven(7));
console.log(isEven(0), isEven(-4));           // edge cases: zero and negative
*/