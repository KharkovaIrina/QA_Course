function disemvowel(str) {
    let regExp = /[^aeouiAEOUI]/g;
    let arr = str.match(regExp);
    return arr.join('');
}
console.log(disemvowel("This website is for losers LOL!"));