function printLongestWord(arg) {
    let longestWord = arg[0]
    let longestWordLength = arg[0].length
    console.log(longestWord);
    arg.forEach(currentElement => {
        previousLength = longestWordLength
        console.log(previousLength);
        console.log(longestWord);
        longestWordLength = Math.max(longestWord.length, currentElement.length)
        if (previousLength !== longestWordLength) {
            longestWord = currentElement
        }
    });
    return longestWord
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));