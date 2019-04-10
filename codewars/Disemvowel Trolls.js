function disemvowel(str) {
  /*  let regExp = /[^aeouiAEOUI]/g;
    let arr = str.match(regExp);
    return arr.join('');*/
  let regExp = /[aeoui]/gi;
  return str.replace(regExp,'');
}
console.log(disemvowel("This website is for losers LOL!"));