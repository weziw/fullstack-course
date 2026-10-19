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