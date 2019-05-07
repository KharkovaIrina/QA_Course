function duplicateEncode(word) {
    let str = '';
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
            str = str + '(';
        } else {
            str = str + ')';
        }
    }
    return str;
}

console.log(duplicateEncode("recEde"));