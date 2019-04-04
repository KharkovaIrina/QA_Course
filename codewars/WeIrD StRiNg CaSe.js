function toWeirdCase(string) {
    let arr = string.split(' ');
    let word = [];
    for (let i = 0; i < arr.length; i++) {
        word = arr[i].split('');
        console.log(word);
        for (let j = 0; j < word.length; j++) {
            if (j % 2 == 0) {
                let evenLetter = word[j].toUpperCase();
                word[j] = evenLetter;
            } else {
                let oddLetter = word[j].toLowerCase();
                word[j] = oddLetter;
            }
        }
        arr[i] = word.join('');
    }
    return arr.join(' ');
}
console.log(toWeirdCase('looks like yo passed'));