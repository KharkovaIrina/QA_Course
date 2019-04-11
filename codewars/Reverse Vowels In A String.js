function reverseVowels(str) {
    let regExp = /[oeiua]/gi;
    let arr = str.match(regExp);
    return str.replace(regExp, () => arr.pop());
}

console.log(reverseVowels("Tomatoes"));