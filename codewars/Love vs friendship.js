function wordsToMarks(string) {
    let sum = 0;
    let first = 'a'.charCodeAt();
    for (let i = 0; i < string.length; i++) {
        let index = string.charCodeAt(i) - first + 1;
        sum = sum + index;
    }
    return sum;
}
console.log(wordsToMarks('love'));